// Boot: WebGL canvas, smooth scroll, data, chrome, then barba page transitions between
// the wall (index.html), an artwork (artwork.html?id=…) and boards (boards.html).
import barba from '../vendor/barba.mjs';
import Lenis from '../vendor/lenis.mjs';
import * as G from './gl.js';
import { load, heroUrl, thumbUrl } from './data.js';
import { initUI, setNavigator } from './ui.js';
import * as wall from './views/wall.js';
import * as artwork from './views/artwork.js';
import * as boardsView from './views/boards.js';

const { gl, tween, ease, post } = G;
const views = { wall, artwork, boards: boardsView };
const wait = ms => new Promise(r => setTimeout(r, gl.reduced ? Math.min(ms, 120) : ms));
const rectOf = el => { const r = el.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height } };

// 1. canvas
if (!G.init(document.getElementById('gl'))) { document.body.classList.add('no-gl'); G.loopOnly() }

// 2. smooth scroll (native scrolling stays the source of truth, so DOM-synced planes just read scrollY)
let lenis = null;
if (!gl.reduced) {
  lenis = new Lenis({ lerp: .085, smoothWheel: true, wheelMultiplier: .9 });
  window.__lenis = lenis;
  G.onFrame(now => lenis.raf(now));
}
const scrollToY = y => { lenis ? lenis.scrollTo(y, { immediate: true, force: true }) : 0; window.scrollTo(0, y) };

// 3. chrome + data
initUI();
setNavigator(() => barba.go(new URL('./', location.href).href));
load().catch(err => {
  document.getElementById('load-note').textContent = 'The collection index did not load. Check your connection and reload the page. (' + (err.message || err) + ')';
});

// 4. can WebGL read NGA's images? (needs CORS headers from api.nga.gov)
const SAMPLE = '00007f61-4922-417b-8f27-893ea328206c';
gl.imagesOk = gl.ok ? await G.probe(thumbUrl(SAMPLE)) : false;
document.body.classList.toggle('dom-images', !gl.imagesOk);

/* ---------- view lifecycle ---------- */
let hero = null;       // the plane sitting in the artwork hero slot
let flying = null;     // a plane in flight between pages
let lastArtId = null;

async function enterView(container, href, opts) {
  const ns = container.dataset.barbaNamespace;
  document.body.dataset.view = ns;
  const res = await views[ns].enter(container, ns === 'artwork' ? href : opts);
  lenis?.resize();
  return res;
}
function leaveView(container, keep) {
  const ns = container.dataset.barbaNamespace;
  if (ns === 'artwork') lastArtId = artwork.currentId();
  views[ns].leave();
  container.hidden = true; // barba removes it only after enter; hidden, it can't push the next page down
  G.unobserveAll(keep);
  if (hero !== keep) hero = null;
}
async function showHero(o, from) {
  const slot = artwork.heroSlot();
  if (!slot || !gl.ok || !gl.imagesOk) { from?.dispose(); return }
  if (from) {
    hero = from; slot._plane = from;
    from.setTexture(heroUrl(o[1]));
    await from.fly(() => rectOf(slot), 1.15);
    if (artwork.heroSlot() === slot) from.bind(slot, false); else from.dispose();
  } else {
    hero = new G.Plane(thumbUrl(o[1]), { el: slot, hover: false, radius: 2 });
    hero.setTexture(heroUrl(o[1]));
  }
  hero.u.uRadius.value = 2;
}
// detach a plane from its placeholder where it stands, and fade every other plane
function lift(p) {
  if (p) { p.unbindEvents(); p.mode = 'free'; p.hoverT = 0; p.mesh.renderOrder = 10 }
  for (const q of G.allPlanes()) if (q !== p) tween(q.u.uAlpha, 'value', 0, .45, ease.out);
}

/* ---------- transitions ---------- */
barba.init({
  timeout: 8000,
  debug: /[?&]debug\b/.test(location.search),
  prevent: ({ el }) => el.closest('.save') || el.hasAttribute('download'),
  transitions: [
    {
      name: 'into-artwork',
      to: { namespace: ['artwork'] },
      async leave({ current, trigger }) {
        const tile = trigger?.closest?.('.tile');
        flying = tile?._plane && tile._plane.u.uHas.value > .5 ? tile._plane : null;
        lift(flying);
        current.container.classList.add('leaving');
        await wait(420);
        leaveView(current.container, flying);
      },
      async enter({ next }) {
        scrollToY(0);
        next.container.classList.add('entering');
        const o = await enterView(next.container, next.url.href);
        const f = flying; flying = null;
        if (o) await showHero(o, f); else f?.dispose();
      },
    },
    {
      name: 'back-to-wall',
      from: { namespace: ['artwork'] },
      to: { namespace: ['wall'] },
      async leave({ current }) {
        flying = hero && hero.u.uHas.value > .5 ? hero : null;
        lift(flying);
        current.container.classList.add('leaving');
        await wait(380);
        leaveView(current.container, flying);
      },
      async enter({ next }) {
        next.container.classList.add('entering');
        const { scroll } = await enterView(next.container, next.url.href, { restore: true });
        scrollToY(scroll);
        const p = flying; flying = null; if (!p) return;
        const tile = wall.tileFor(lastArtId);
        if (tile && !tile._plane) {
          tile._plane = p;
          await p.fly(() => rectOf(tile), 1);
          if (tile.isConnected) { p.bind(tile, true); p.u.uRadius.value = 4; p.mesh.renderOrder = 0 } else p.dispose();
        } else { await tween(p.u.uAlpha, 'value', 0, .4, ease.out); p.dispose() }
      },
    },
    {
      name: 'curtain',
      async once({ next }) {
        next.container.classList.add('entering');
        const res = await enterView(next.container, next.url.href, { restore: false });
        if (next.container.dataset.barbaNamespace === 'artwork' && res) showHero(res, null);
      },
      async leave({ current }) {
        current.container.classList.add('leaving');
        await tween(post, 'wipe', 1, .7, ease.inOut);
        leaveView(current.container, null);
      },
      async enter({ next }) {
        scrollToY(0);
        next.container.classList.add('entering');
        const res = await enterView(next.container, next.url.href, { restore: true });
        if (res?.scroll) scrollToY(res.scroll);
        if (next.container.dataset.barbaNamespace === 'artwork' && res) showHero(res, null);
        await tween(post, 'wipe', 2, .85, ease.inOut);
        post.wipe = 0;
      },
    },
  ],
});

// handy from the console when tuning motion
window.__gw = { post, gl, planes: G.allPlanes, barba };
