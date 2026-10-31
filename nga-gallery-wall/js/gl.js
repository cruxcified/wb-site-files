// One persistent WebGL canvas under the page. Artwork images are drawn as planes that track
// DOM placeholders (getBoundingClientRect each frame), so layout stays in CSS while the
// pixels get shader motion. A post pass adds the fog field, pointer light, grain and the page curtain.
import * as THREE from 'three';

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
export const gl = { ok: false, imagesOk: false, reduced };

let renderer, rt, fogRT, camera, scene, postScene, postCam, postMat, fogScene, fogMat, geo, blank, loader;
let maxRatio = Math.min(devicePixelRatio, 1.5), slow = 0, idleSkip = false;
let W = innerWidth, H = innerHeight, time = 0, last = performance.now();
let scrollVel = 0, lastScroll = scrollY, scrollPos = scrollY;
const mouse = new THREE.Vector2(.5, .5), mouseT = new THREE.Vector2(.5, .5);
const planes = new Set();
const frameHooks = new Set();
export const onFrame = fn => (frameHooks.add(fn), () => frameHooks.delete(fn));

/* ---------- tiny tween engine, stepped by the render loop ---------- */
const tweens = new Set();
export const ease = {
  out: t => 1 - Math.pow(1 - t, 3),
  expo: t => t >= 1 ? 1 : 1 - Math.pow(2, -10 * t),
  inOut: t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  in: t => t * t * t,
};
export function tween(obj, key, to, dur = .8, fn = ease.expo, delay = 0) {
  for (const tw of tweens) if (tw.obj === obj && tw.key === key) { tweens.delete(tw); tw.res() }
  if (reduced) dur = Math.min(dur, .2);
  return new Promise(res => tweens.add({ obj, key, from: obj[key], to, dur, fn, t: -delay, res }));
}
function stepTweens(dt) {
  for (const tw of tweens) {
    tw.t += dt; if (tw.t < 0) continue;
    const k = Math.min(1, tw.t / tw.dur);
    tw.obj[tw.key] = tw.from + (tw.to - tw.from) * tw.fn(k);
    if (k >= 1) { tweens.delete(tw); tw.res() }
  }
}

/* ---------- shaders ---------- */
const tileVert = /* glsl */`
uniform float uVel, uFly, uHover;
varying vec2 vUv;
void main() {
  vUv = uv;
  vec4 wp = modelMatrix * vec4(position, 1.);
  float sx = sin(uv.x * 3.14159), sy = sin(uv.y * 3.14159);
  wp.y -= sx * uVel * 20.;                       // the middle of a tile lags fast scrolling
  wp.z += sx * sy * (uFly * 160. + uHover * 14.); // bulge toward the camera in flight and on hover
  gl_Position = projectionMatrix * viewMatrix * wp;
}`;
const tileFrag = /* glsl */`
uniform sampler2D uTex;
uniform float uHas, uHover, uReveal, uVel, uAlpha, uRadius, uTime;
uniform vec2 uSize, uMouse;
varying vec2 vUv;
float sdRound(vec2 p, vec2 b, float r) { vec2 q = abs(p) - b + r; return length(max(q, 0.)) + min(max(q.x, q.y), 0.) - r; }
void main() {
  vec2 uv = vUv;
  uv = .5 + (uv - .5) * (1. - .05 * uHover);
  vec2 px = vUv * uSize, mp = uMouse * uSize;
  float d = distance(px, mp);
  uv += (vUv - uMouse) * sin(d * .045 - uTime * 5.) * .012 * uHover * smoothstep(320., 0., d);
  float s = uVel * .01;
  vec3 col = vec3(texture2D(uTex, uv + vec2(0., s)).r, texture2D(uTex, uv).g, texture2D(uTex, uv - vec2(0., s)).b);
  col = mix(vec3(.80, .83, .86), col, uHas); // fog-grey placeholder until the image arrives
  col *= 1. + .07 * uHover;
  // diagonal reveal with a soft leading edge
  float w = vUv.x * .35 + (1. - vUv.y) * .65;
  float m = smoothstep(w - .18, w, uReveal * 1.2);
  float a = 1. - smoothstep(-1., .5, sdRound((vUv - .5) * uSize, uSize * .5, uRadius));
  float al = a * m * uAlpha;
  gl_FragColor = vec4(col * al, al);
}`;
const postVert = `varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }`;
const NOISE = /* glsl */`
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) { vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y); }
float fbm(vec2 p) { float v = 0., a = .5; for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.03; a *= .5; } return v; }`;
// The mist is soft, so it is drawn into a small target (a quarter of the CSS size) and stretched:
// about a thirtieth of the per-pixel noise work of drawing it at full retina resolution.
const fogFrag = /* glsl */`
uniform vec2 uRes;
uniform float uTime, uScroll, uGlow;
varying vec2 vUv;
${NOISE}
void main() {
  vec2 uv = vUv, asp = vec2(uRes.x / uRes.y, 1.);
  // London Fog: a pale blue-grey ground with banks of slate mist drifting across it, parallaxing with scroll
  vec2 p = uv * asp * 1.2 + vec2(0., uScroll * .00025);
  float n = fbm(p + vec2(uTime * .02, -uTime * .008) + fbm(p * 1.3 - uTime * .012));
  float n2 = fbm(p * .6 - vec2(uTime * .01, 0.));
  vec3 milk = vec3(.885, .898, .912), mist = vec3(.745, .776, .816), slate = vec3(.66, .70, .755);
  vec3 bg = mix(milk, mist, smoothstep(.35, .85, n) * .9 * uGlow);
  bg = mix(bg, slate, smoothstep(.55, .95, n2) * .4 * uGlow);
  gl_FragColor = vec4(bg, 1.);
}`;
const postFrag = /* glsl */`
uniform sampler2D tScene, tFog;
uniform vec2 uRes, uMouse;
uniform float uTime, uVel, uWipe, uGlow;
varying vec2 vUv;
${NOISE}
void main() {
  vec2 uv = vUv, asp = vec2(uRes.x / uRes.y, 1.);
  vec3 bg = texture2D(tFog, uv).rgb;
  float md = distance(uv * asp, uMouse * asp);
  bg += vec3(.97, .99, 1.) * .08 * exp(-md * md * 6.) * uGlow; // a pale light that follows the pointer
  float ca = uVel * .003;
  vec4 s = texture2D(tScene, uv);
  vec3 sc = vec3(texture2D(tScene, uv + vec2(0., ca)).r, s.g, texture2D(tScene, uv - vec2(0., ca)).b);
  vec3 col = bg * (1. - s.a) + sc;
  float v = smoothstep(1.3, .35, length((uv - .5) * asp * vec2(.85, 1.1)));
  col = mix(col * vec3(.87, .89, .92), col, v); // a soft slate edge rather than a dark vignette
  // curtain: 0→1 rises from the bottom, 1→2 leaves through the top, with a ragged rim.
  // Its noise is only computed while a page transition is running.
  if (uWipe > 0. && uWipe < 2.) {
    float edge = uv.y + (fbm(vec2(uv.x * 3.5, uTime * .4)) - .5) * .16, cov, rim;
    if (uWipe <= 1.) { float h = mix(-.15, 1.15, uWipe); cov = smoothstep(h + .005, h - .005, edge); rim = exp(-abs(edge - h) * 60.); }
    else { float h = mix(-.15, 1.15, uWipe - 1.); cov = smoothstep(h - .005, h + .005, edge); rim = exp(-abs(edge - h) * 60.); }
    vec3 curtain = mix(vec3(.80, .83, .87), vec3(.66, .70, .76), fbm(uv * asp * 4. + uTime * .05)); // fog rolling in
    col = mix(mix(col, curtain, cov), vec3(.33, .39, .50), rim * .45);
  }
  col += (hash(uv * uRes + fract(uTime * 7.) * 91.) - .5) * .04;
  gl_FragColor = vec4(col, 1.);
}`;
export const post = { wipe: 0, glow: 1 };

/* ---------- textures: shared, reference counted, least-recently-used eviction ---------- */
const cache = new Map();
const MAX_TEX = 180;
function acquireTex(url) {
  let e = cache.get(url);
  if (!e) {
    e = { refs: 0, t: 0, tex: null };
    e.promise = new Promise(res => loader.load(url, tex => {
      tex.colorSpace = THREE.NoColorSpace; tex.anisotropy = 4; e.tex = tex; res(tex);
    }, undefined, () => { e.failed = true; cache.delete(url); res(null) }));
    cache.set(url, e);
  }
  e.refs++; e.t = performance.now(); return e;
}
function releaseTex(url) {
  const e = cache.get(url); if (e) { e.refs--; e.t = performance.now() }
  if (cache.size <= MAX_TEX) return;
  const free = [...cache].filter(([, x]) => x.refs <= 0 && x.tex).sort((a, b) => a[1].t - b[1].t);
  while (cache.size > MAX_TEX && free.length) { const [u, x] = free.shift(); x.tex.dispose(); cache.delete(u) }
}
// one probe decides whether NGA's image server lets WebGL read its pixels (CORS)
export function probe(url) {
  return new Promise(res => {
    const img = new Image(); img.crossOrigin = 'anonymous';
    const timer = setTimeout(() => res(false), 8000);
    img.onload = () => { clearTimeout(timer); res(true) }; img.onerror = () => { clearTimeout(timer); res(false) };
    img.src = url;
  });
}

/* ---------- planes ---------- */
export class Plane {
  constructor(url, opts = {}) {
    this.u = {
      uTex: { value: blank }, uHas: { value: 0 }, uSize: { value: new THREE.Vector2(1, 1) }, uMouse: { value: new THREE.Vector2(.5, .5) },
      uHover: { value: 0 }, uReveal: { value: opts.reveal === false ? 1 : 0 }, uVel: { value: 0 }, uFly: { value: 0 },
      uAlpha: { value: 1 }, uRadius: { value: opts.radius ?? 4 }, uTime: { value: 0 },
    };
    this.mesh = new THREE.Mesh(geo, new THREE.ShaderMaterial({
      uniforms: this.u, vertexShader: tileVert, fragmentShader: tileFrag, transparent: true, depthTest: false, depthWrite: false,
      blending: THREE.CustomBlending, blendSrc: THREE.OneFactor, blendDst: THREE.OneMinusSrcAlphaFactor,
      blendSrcAlpha: THREE.OneFactor, blendDstAlpha: THREE.OneMinusSrcAlphaFactor,
    }));
    this.mesh.frustumCulled = false;
    this.rect = { x: 0, y: 0, w: 0, h: 0 };
    this.hover = 0; this.hoverT = 0; this.mouseT = new THREE.Vector2(.5, .5);
    this.el = null; this.url = null; this.onFail = opts.onFail;
    scene.add(this.mesh); planes.add(this);
    this.setTexture(url);
    if (opts.el) this.bind(opts.el, opts.hover);
    if (opts.reveal !== false) tween(this.u.uReveal, 'value', 1, 1.1, ease.out, opts.delay || 0);
  }
  setTexture(url) {
    if (!url || url === this.url) return Promise.resolve(true);
    const prev = this.url; this.url = url;
    const e = acquireTex(url);
    return e.promise.then(tex => {
      if (this.dead || this.url !== url) return false;
      if (!tex) { this.onFail?.(); return false }
      const fresh = this.u.uHas.value === 0;
      this.u.uTex.value = tex;
      if (fresh) tween(this.u.uHas, 'value', 1, .6, ease.out);
      if (prev) releaseTex(prev);
      return true;
    });
  }
  bind(el, hover = true) {
    this.unbindEvents();
    this.el = el; this.mode = 'dom'; el._plane = this;
    if (hover && matchMedia('(hover: hover)').matches) {
      const move = e => { const r = el.getBoundingClientRect(); this.mouseT.set((e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height) };
      const enter = e => { this.hoverT = 1; move(e); this.u.uMouse.value.copy(this.mouseT) };
      const leave = () => { this.hoverT = 0 };
      el.addEventListener('pointerenter', enter); el.addEventListener('pointermove', move); el.addEventListener('pointerleave', leave);
      this.events = () => { el.removeEventListener('pointerenter', enter); el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave) };
    }
  }
  unbindEvents() { this.events?.(); this.events = null; if (this.el && this.el._plane === this) this.el._plane = null }
  // leave the DOM and animate to wherever target() says (a rect getter), bending on the way
  fly(target, dur = 1.1) {
    this.unbindEvents(); this.mode = 'free'; this.hoverT = 0; this.mesh.renderOrder = 10;
    const from = { ...this.rect }, k = { t: 0 };
    this.flight = () => {
      const to = target(), e = ease.inOut(k.t);
      for (const p of ['x', 'y', 'w', 'h']) this.rect[p] = from[p] + (to[p] - from[p]) * e;
      this.u.uFly.value = Math.sin(k.t * Math.PI) * (reduced ? 0 : 1);
    };
    return tween(k, 't', 1, dur, x => x).then(() => { this.flight(); this.flight = null; this.u.uFly.value = 0 });
  }
  dispose() {
    if (this.dead) return; this.dead = true;
    this.unbindEvents(); scene.remove(this.mesh); this.mesh.material.dispose(); planes.delete(this);
    if (this.url) releaseTex(this.url);
  }
}
export const allPlanes = () => [...planes];

/* ---------- observe tiles: a plane exists only while its placeholder is near the viewport ---------- */
const watched = new Map();
let io;
export function observe(el, opts) { if (!gl.ok || !gl.imagesOk) return; watched.set(el, opts); io.observe(el) }
export function unobserveAll(keep) {
  for (const el of watched.keys()) io.unobserve(el);
  watched.clear();
  // planes in flight belong to the page transition, which disposes or re-binds them itself
  for (const p of planes) if (p !== keep && p.mode !== 'free') p.dispose();
}
function onIntersect(entries) {
  for (const en of entries) {
    const el = en.target, opts = watched.get(el); if (!opts) continue;
    if (en.isIntersecting && !el._plane) new Plane(opts.url, { ...opts, el, delay: opts.delay ?? 0 });
    else if (!en.isIntersecting && el._plane && el._plane.mode === 'dom') el._plane.dispose();
    opts.delay = 0; // only the first appearance staggers
  }
}

/* ---------- boot + loop ---------- */
export function init(canvas) {
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
  } catch { return false }
  renderer.setPixelRatio(maxRatio);
  renderer.autoClear = false;
  loader = new THREE.TextureLoader(); loader.setCrossOrigin('anonymous');
  blank = new THREE.DataTexture(new Uint8Array([204, 211, 219, 255]), 1, 1); blank.needsUpdate = true;
  geo = new THREE.PlaneGeometry(1, 1, 24, 24);
  camera = new THREE.PerspectiveCamera(35, W / H, 10, 10000);
  scene = new THREE.Scene();
  rt = new THREE.WebGLRenderTarget(1, 1, { depthBuffer: false });
  postMat = new THREE.ShaderMaterial({
    vertexShader: postVert, fragmentShader: postFrag, depthTest: false, depthWrite: false,
    uniforms: { tScene: { value: rt.texture }, tFog: { value: null }, uRes: { value: new THREE.Vector2() }, uMouse: { value: mouse }, uTime: { value: 0 }, uVel: { value: 0 }, uWipe: { value: 0 }, uGlow: { value: 1 } },
  });
  postScene = new THREE.Scene(); postScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), postMat));
  fogRT = new THREE.WebGLRenderTarget(1, 1, { depthBuffer: false });
  postMat.uniforms.tFog.value = fogRT.texture;
  fogMat = new THREE.ShaderMaterial({
    vertexShader: postVert, fragmentShader: fogFrag, depthTest: false, depthWrite: false,
    uniforms: { uRes: { value: new THREE.Vector2() }, uTime: { value: 0 }, uScroll: { value: 0 }, uGlow: { value: 1 } },
  });
  fogScene = new THREE.Scene(); fogScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), fogMat));
  postCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  io = new IntersectionObserver(onIntersect, { rootMargin: '900px 0px' });
  resize(); addEventListener('resize', resize);
  addEventListener('pointermove', e => mouseT.set(e.clientX / W, 1 - e.clientY / H), { passive: true });
  gl.ok = true;
  requestAnimationFrame(frame);
  return true;
}
// without WebGL the page still needs tweens, the cursor and the header to animate
export function loopOnly() {
  requestAnimationFrame(function f(now) {
    requestAnimationFrame(f);
    const dt = Math.min((now - last) / 1000, .05); last = now;
    frameHooks.forEach(fn => fn(now, dt)); stepTweens(dt);
  });
}
function resize() {
  W = innerWidth; H = innerHeight;
  renderer.setSize(W, H, false);
  const pr = renderer.getPixelRatio();
  rt.setSize(Math.floor(W * pr), Math.floor(H * pr));
  camera.aspect = W / H;
  camera.position.z = (H / 2) / Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
  camera.updateProjectionMatrix();
  postMat.uniforms.uRes.value.set(W * pr, H * pr);
  fogRT.setSize(Math.ceil(W / 4), Math.ceil(H / 4));
  fogMat.uniforms.uRes.value.set(W, H);
}
// if frames keep running long, drop to 1× pixel density; the art loses a little sharpness, the motion stays smooth
function adapt(raw) {
  if (maxRatio <= 1) return;
  slow = raw > .024 ? slow + 1 : Math.max(0, slow - 1);
  if (slow > 45) { maxRatio = 1; renderer.setPixelRatio(1); resize() }
}
function frame(now) {
  requestAnimationFrame(frame);
  const raw = (now - last) / 1000;
  last = now; adapt(raw);
  const dt = Math.min(raw, .05); time += dt;
  frameHooks.forEach(fn => fn(now, dt));
  stepTweens(Math.min(raw, .25)); // tweens keep wall-clock time even when frames drop
  const sy = scrollY; const v = sy - lastScroll; lastScroll = sy; scrollPos = sy;
  scrollVel += (v - scrollVel) * .14;
  const vel = reduced ? 0 : Math.max(-1, Math.min(1, scrollVel / 55));
  mouse.lerp(mouseT, .08);
  for (const p of planes) {
    if (p.mode === 'dom' && p.el) {
      const r = p.el.getBoundingClientRect();
      p.rect.x = r.left; p.rect.y = r.top; p.rect.w = r.width; p.rect.h = r.height;
    } else if (p.flight) p.flight();
    const r = p.rect;
    p.mesh.visible = r.w > 0 && r.y + r.h > -300 && r.y < H + 300 && r.x + r.w > -300 && r.x < W + 300;
    if (!p.mesh.visible) continue;
    p.mesh.position.set(r.x + r.w / 2 - W / 2, H / 2 - (r.y + r.h / 2), 0);
    p.mesh.scale.set(r.w, r.h, 1);
    p.hover += (p.hoverT - p.hover) * (reduced ? 1 : .09);
    p.u.uMouse.value.lerp(p.mouseT, .15);
    p.u.uHover.value = p.hover; p.u.uVel.value = p.mode === 'dom' ? vel : 0; p.u.uTime.value = time;
    p.u.uSize.value.set(r.w, r.h);
  }
  const u = postMat.uniforms;
  u.uTime.value = time; u.uVel.value = vel; u.uWipe.value = post.wipe; u.uGlow.value = post.glow;
  // when nothing is moving, only the mist is animating: draw every other frame (scroll and the cursor still run every frame)
  const busy = tweens.size || Math.abs(scrollVel) > .05 || [...planes].some(p => p.hoverT || p.hover > .01 || p.flight);
  if (!busy && !reduced) { idleSkip = !idleSkip; if (idleSkip) return } else idleSkip = false;
  const fu = fogMat.uniforms; fu.uTime.value = time; fu.uScroll.value = scrollPos; fu.uGlow.value = post.glow;
  renderer.setRenderTarget(fogRT); renderer.render(fogScene, postCam);
  renderer.setRenderTarget(rt); renderer.setClearColor(0x000000, 0); renderer.clear(); renderer.render(scene, camera);
  renderer.setRenderTarget(null); renderer.render(postScene, postCam);
}
