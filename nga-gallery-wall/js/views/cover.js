// Cover Studio: Scriptorium's Cover Maker, brought to the wall. Pick an artwork, choose ebook or paperback
// wrap, then lay out image, colour and text layers on the sheet with snapping guides. Exports PNG, JPEG or
// a print PDF at 300 ppi. Covers are saved in this browser (localStorage), like boards.
import { whenObject, artistsOf, esc, heroUrl, fullUrl, thumbUrl } from '../data.js';
import { boards, keys } from '../store.js';
import { toast, hideLoader } from '../ui.js';
import {
  FORMATS, SIZES, trimOf, formatOf, geometry, regions, regionBox, spineOf, MIN_LETTERED_SPINE, snapBox, newLayer, uid,
  layerBounds, drawDesign, designFonts, cropOf, effectivePpi, placeImage, starter, 
} from '../cover/engine.js';
import { allCovers, getCover, putCover, dropCover, newCoverId, toBlob, download, pdfFromJpeg } from '../cover/files.js';

export const namespace = 'cover';

// Type for covers: Will's Jenson faces from the site, plus a short list of book faces from Google Fonts.
const FONTS = [
  ['GW Jenson Display', 'Jenson Display'], ['GW Jenson', 'Jenson Text'], ['GW Jenson Caption', 'Jenson Caption'],
  ['EB Garamond', 'EB Garamond', 'ital,wght@0,400;0,700;1,400;1,700'],
  ['Cormorant Garamond', 'Cormorant Garamond', 'ital,wght@0,400;0,700;1,400;1,700'],
  ['Playfair Display', 'Playfair Display', 'ital,wght@0,400;0,700;1,400;1,700'],
  ['Libre Baskerville', 'Libre Baskerville', 'ital,wght@0,400;0,700;1,400'],
  ['IM Fell English', 'IM Fell English', 'ital@0;1'],
  ['Cinzel', 'Cinzel', 'wght@400;700'],
  ['Abril Fatface', 'Abril Fatface', ''],
  ['Bebas Neue', 'Bebas Neue', ''],
  ['Oswald', 'Oswald', 'wght@300;400;700'],
  ['Geist', 'Geist', 'wght@300;400;500;700'],
  ['Space Grotesk', 'Space Grotesk', 'wght@400;700'],
  ['Special Elite', 'Special Elite', ''],
];
const fontLinks = new Set();
function ensureFont(family) {
  const f = FONTS.find(x => x[0] === family);
  if (!f || f[2] == null || fontLinks.has(family)) return;
  fontLinks.add(family);
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}${f[2] ? ':' + f[2] : ''}&display=block`;
  document.head.append(link);
}

const HANDLE = 6, SNAP_PX = 8, PAD = 44;
const $ = sel => root.querySelector(sel);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const slug = s => String(s || 'cover').toLowerCase().normalize('NFD').replace(/[^\w]+/g, '-').replace(/^-|-$/g, '').slice(0, 48) || 'cover';
const measure = document.createElement('canvas').getContext('2d');

let root, cover, coverId, fmt, g, sel = null, offs = [], images = {}, local = {}, past = [], future = [];
let canvas, ctx, view = { s: 1, ox: 0, oy: 0, w: 0, h: 0 }, guides = true, drag = null, snapLines = null, raf = 0, saveT, commitT, warnedFull = false;

/* ---------- lifecycle ---------- */
export async function enter(container, url) {
  root = container;
  const q = new URL(url, location.href).searchParams;
  const cid = q.get('c'), rawId = q.get('id'), artId = rawId ? +rawId : NaN;
  if (cid && getCover(cid)) { hideLoader(); return open(cid, getCover(cid)) }
  if (Number.isFinite(artId)) {
    root.innerHTML = `<div class="art-wait"><p class="eyebrow">Fetching the artwork</p></div>`;
    const o = await whenObject(artId);
    hideLoader();
    if (root !== container) return null;
    if (!o) { root.innerHTML = `<div class="empty"><h2>That artwork isn’t in the open-access set</h2><p><a href="./">Back to the wall</a></p></div>`; return null }
    return open(newCoverId(), await fresh(o), true);
  }
  hideLoader();
  index();
  return {};
}
export function leave() {
  offs.forEach(f => f()); offs = [];
  cancelAnimationFrame(raf); clearTimeout(saveT); clearTimeout(commitT);
  if (cover && coverId) save();
  cover = null; coverId = null; images = {}; local = {}; past = []; future = []; sel = null; drag = null;
  document.title = 'Gallery Wall';
}

// a new cover for an artwork: ebook by default, its colours drawn from the picture when the browser can read it
async function fresh(o) {
  const art = { id: o[0], u: o[1], w: o[2], h: o[3], title: o[4], artist: artistsOf(o).join(', '), date: o[5] };
  const opts = { trim: '6x9', pages: 300, spine: '' };
  const f = formatOf('ebook'), geo = geometry(f, opts);
  const bg = await averageColour(thumbUrl(o[1])).catch(() => '#1d1a17');
  return { name: o[4], art, format: f.key, opts, design: starter(f, geo, { src: { nga: o[1] }, ...art }, bg) };
}
function averageColour(url) {
  return new Promise((res, rej) => {
    const img = new Image(); img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const c = document.createElement('canvas'); c.width = c.height = 8;
        const x = c.getContext('2d'); x.drawImage(img, 0, 0, 8, 8);
        const d = x.getImageData(0, 0, 8, 8).data; let r = 0, gg = 0, b = 0;
        for (let i = 0; i < d.length; i += 4) { r += d[i]; gg += d[i + 1]; b += d[i + 2] }
        const n = d.length / 4, k = .45; // darkened, so type reads on it
        res('#' + [r, gg, b].map(v => Math.round(v / n * k).toString(16).padStart(2, '0')).join(''));
      } catch (e) { rej(e) }
    };
    img.onerror = rej; img.src = url;
    setTimeout(() => rej(new Error('slow')), 2500);
  });
}

/* ---------- the list of saved covers (cover.html with no id) ---------- */
function index() {
  const list = Object.entries(allCovers()).sort((a, b) => b[1].updated - a[1].updated);
  document.title = 'Covers · Gallery Wall';
  root.innerHTML = `
    <section class="intro">
      <p class="eyebrow"><span>Cover studio</span><span>Saved in this browser</span></p>
      <h1 class="headline">Your <em>covers</em></h1>
      <p class="st-lede">Open any artwork and choose <b>Make a cover</b> to start one. It begins as an ebook front, and switches to a full paperback wrap with spine and back.</p>
    </section>
    ${list.length ? `<div class="st-cards">${list.map(([id, c]) => `
      <article class="st-card">
        <a href="cover.html?c=${id}" class="st-thumb">${c.thumb ? `<img src="${c.thumb}" alt="">` : c.art?.u ? `<img src="${thumbUrl(c.art.u)}" alt="">` : ''}</a>
        <div><a href="cover.html?c=${id}" class="st-card-name">${esc(c.name || 'Untitled cover')}</a>
        <p class="st-card-meta">${esc(formatOf(c.format).name)} · ${new Date(c.updated).toLocaleDateString()}</p>
        <button type="button" class="linkish danger" data-drop="${id}">Delete</button></div>
      </article>`).join('')}</div>` : `<div class="empty"><h2>No covers yet</h2><p><a href="./">Find some art on the wall</a></p></div>`}`;
  root.onclick = e => {
    const d = e.target.closest('[data-drop]'); if (!d) return;
    if (d.dataset.armed) { dropCover(d.dataset.drop); index() } else { d.dataset.armed = 1; d.textContent = 'Delete for good?' }
  };
}

/* ---------- the studio ---------- */
function open(id, c, isNew = false) {
  coverId = id; cover = c; fmt = formatOf(c.format); g = geometry(fmt, c.opts);
  past = [snapshot()]; future = [];
  sel = c.design.layers.find(l => l.type === 'text')?.id || null;
  if (isNew) { save(); try { window.history.replaceState(window.history.state, '', `cover.html?c=${id}`) } catch {} }
  document.title = `${c.name || 'Cover'} · Cover Studio`;
  root.innerHTML = shell();
  canvas = $('#st-canvas'); ctx = canvas.getContext('2d');
  fillFormat(); renderLayers(); renderInspector(); bindStudio();
  cover.design.layers.forEach(l => l.type === 'text' && ensureFont(l.font));
  loadImages();
  const ro = new ResizeObserver(() => fit()); ro.observe($('#st-stage')); offs.push(() => ro.disconnect());
  const fonts = () => draw(); document.fonts.addEventListener('loadingdone', fonts); offs.push(() => document.fonts.removeEventListener('loadingdone', fonts));
  fit();
  return { scroll: 0 };
}

function shell() {
  const a = cover.art;
  return `
  <section class="studio">
    <div class="st-top reveal">
      <div class="st-title">
        <p class="eyebrow"><span>Cover studio</span><a href="cover.html" class="st-all">All covers</a></p>
        <input class="st-name" id="st-name" value="${esc(cover.name)}" aria-label="Cover name" autocomplete="off" spellcheck="false">
        ${a ? `<p class="st-src">Art: <a href="artwork.html?id=${a.id}">${esc(a.title)}</a>${a.artist ? `, ${esc(a.artist)}` : ''}</p>` : ''}
      </div>
      <div class="st-actions">
        <button class="pill icon" type="button" id="st-undo" aria-label="Undo" title="Undo"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/></svg></button>
        <button class="pill icon" type="button" id="st-redo" aria-label="Redo" title="Redo"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m15 14 5-5-5-5"/><path d="M20 9H9.5a5.5 5.5 0 0 0 0 11H13"/></svg></button>
        <button class="pill" type="button" id="st-guides" aria-pressed="true">Guides</button>
        <select id="st-type" class="st-select" aria-label="Export file type"><option value="pdf">Print PDF</option><option value="png">PNG</option><option value="jpg">JPEG</option></select>
        <button class="btn primary" type="button" id="st-export">Export</button>
      </div>
    </div>
    <div class="st-fix" id="st-fix" hidden></div>
    <div class="st-grid">
      <aside class="st-panel st-left" data-lenis-prevent>
        <div class="st-sec">
          <span class="label">Format</span>
          <div class="seg" id="st-format">${FORMATS.map(f => `<button type="button" data-fmt="${f.key}">${f.name}</button>`).join('')}</div>
          <p class="st-note" id="st-fnote"></p>
          <div class="st-fields" id="st-pb">
            <div class="st-f"><span>Book size</span>
              <div class="st-sizes" id="st-sizes" role="radiogroup" aria-label="Book size">${SIZES.map(([k, n, w, h, use]) => sizeCard(k, n, w, h, use)).join('')}${sizeCard('custom', 'Custom', 5.5, 8.5, 'Type your own trim')}</div>
              <p class="st-note" id="st-sizenote"></p>
            </div>
            <div class="st-f2" id="st-custom" hidden>
              <label><span>Width, in</span><input id="st-cw" type="number" min="2" max="14" step=".01" inputmode="decimal"></label>
              <label><span>Height, in</span><input id="st-ch" type="number" min="2" max="14" step=".01" inputmode="decimal"></label>
            </div>
            <label><span>Pages</span><input id="st-pages" type="number" min="24" max="900" step="2" inputmode="numeric"></label>
            <label><span>Spine, from your printer</span><input id="st-spine" type="number" min="0" max="3" step=".001" placeholder="inches" inputmode="decimal"></label>
            <p class="st-note" id="st-spinenote"></p>
          </div>
        </div>
        <div class="st-sec">
          <label class="st-inline"><span class="label">Background</span><input type="color" id="st-bg"></label>
        </div>
        <div class="st-sec">
          <div class="st-row"><span class="label">Layers</span>
            <span class="st-add">
              <button type="button" class="linkish" data-add="text">+ Text</button>
              <button type="button" class="linkish" data-add="fill">+ Colour</button>
              <label class="linkish">+ Picture<input type="file" id="st-file" accept="image/*" hidden></label>
            </span>
          </div>
          <ol class="st-layers" id="st-layers"></ol>
          <label class="st-boardart"><span>Add art from a board</span><select id="st-boardart"></select></label>
        </div>
      </aside>
      <div class="st-stage" id="st-stage" data-lenis-prevent>
        <canvas id="st-canvas" tabindex="0" aria-label="Cover canvas. Drag a layer to move it, drag a corner to resize."></canvas>
        <p class="st-hint">Drag to move · corners resize · Alt turns snapping off · arrows nudge</p>
      </div>
      <aside class="st-panel st-right" id="st-insp" data-lenis-prevent></aside>
    </div>
  </section>`;
}

// a size template: a small page drawn to the trim's proportions, its name and inches
function sizeCard(k, n, w, h, use) {
  const s = 30 / 11; // every card shares one scale, so the sizes compare at a glance
  return `<button type="button" class="st-size" data-size="${k}" role="radio" aria-checked="false" title="${esc(use)}">
    <i style="width:${(w * s).toFixed(1)}px;height:${(h * s).toFixed(1)}px"></i>
    <b>${n}</b><small>${k === 'custom' ? 'your size' : `${w} × ${h}`}</small></button>`;
}

function fillFormat() {
  root.querySelectorAll('[data-fmt]').forEach(b => b.setAttribute('aria-pressed', b.dataset.fmt === fmt.key));
  $('#st-fnote').textContent = fmt.note;
  $('#st-pb').hidden = !fmt.paperback;
  const trim = cover.opts.trim in Object.fromEntries(SIZES) || cover.opts.trim === 'custom' ? cover.opts.trim : '6x9';
  root.querySelectorAll('[data-size]').forEach(b => b.setAttribute('aria-checked', b.dataset.size === trim));
  const size = SIZES.find(x => x[0] === trim), [tw, th] = trimOf(cover.opts);
  $('#st-sizenote').textContent = size ? `${size[1]}, ${size[2]} × ${size[3]} in. ${size[4]}.` : `Custom, ${tw} × ${th} in. Check your printer offers this trim.`;
  $('#st-custom').hidden = trim !== 'custom';
  if (trim === 'custom') { $('#st-cw').value = cover.opts.customW ?? tw; $('#st-ch').value = cover.opts.customH ?? th }
  $('#st-pages').value = cover.opts.pages; $('#st-spine').value = cover.opts.spine || '';
  $('#st-bg').value = /^#[0-9a-f]{6}$/i.test(cover.design.background) ? cover.design.background : '#1d1a17';
  if (fmt.paperback) {
    const sp = spineOf(cover.opts);
    $('#st-spinenote').innerHTML = sp.source === 'printer'
      ? `Spine ${sp.inches.toFixed(3)}″ from your printer. The sheet is ${g.width.toFixed(3)} × ${g.height.toFixed(3)}″.`
      : `Spine about ${sp.inches.toFixed(3)}″, estimated at 0.0025″ a page on cream stock. Type in the printer’s figure before you upload.${sp.inches < MIN_LETTERED_SPINE ? ' Under a quarter inch, so lettering on the spine is risky.' : ''}`;
  }
}

/* ---------- images ---------- */
const loadImg = (src, cors) => new Promise((res, rej) => {
  const img = new Image(); if (cors) img.crossOrigin = 'anonymous';
  img.decoding = 'async';
  img.onload = () => res(img); img.onerror = () => rej(new Error('image failed')); img.src = src;
});
async function previewImage(l) {
  if (local[l.id]) return local[l.id];
  if (l.src?.data) return loadImg(l.src.data, false);
  if (l.src?.nga) {
    const url = heroUrl(l.src.nga);
    try { return await loadImg(url, true) } catch { return loadImg(url, false) } // shows, but can't export
  }
  return null;
}
function loadImages() {
  for (const l of cover.design.layers) if (l.type === 'image' && !images[l.id]) {
    const key = imgKey(l);
    previewImage(l).then(img => {
      if (!img || !cover || imgKey(l) !== key) return;
      images[l.id] = img; draw(); if (l.id === sel) renderInspector();
    }).catch(() => {});
  }
}
const imgKey = l => local[l.id] ? 'local' : l.src?.nga || (l.src?.data || '').slice(-32);

/* ---------- drawing ---------- */
function fit() {
  const st = $('#st-stage'); if (!st) return;
  const r = st.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2);
  view.w = r.width; view.h = r.height;
  canvas.width = Math.round(r.width * dpr); canvas.height = Math.round(r.height * dpr);
  canvas.style.width = r.width + 'px'; canvas.style.height = r.height + 'px';
  view.dpr = dpr;
  const pad = r.width < 600 ? 22 : PAD;
  view.s = Math.max(4, Math.min((r.width - pad * 2) / g.width, (r.height - pad * 2 - 18) / g.height));
  view.ox = (r.width - g.width * view.s) / 2; view.oy = (r.height - g.height * view.s) / 2 + 9;
  draw();
}
function draw() { cancelAnimationFrame(raf); raf = requestAnimationFrame(paint) }
function paint() {
  if (!cover || !ctx) return;
  const { s, ox, oy, dpr } = view, cs = getComputedStyle(document.documentElement);
  const ink = cs.getPropertyValue('--tea').trim(), accent = cs.getPropertyValue('--lavender').trim();
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, view.w, view.h);
  // the sheet, lifted off the fog
  ctx.save(); ctx.shadowColor = 'rgba(0,0,0,.28)'; ctx.shadowBlur = 40; ctx.shadowOffsetY = 18;
  ctx.fillStyle = cover.design.background; ctx.fillRect(ox, oy, g.width * s, g.height * s); ctx.restore();
  ctx.save(); ctx.translate(ox, oy);
  drawDesign(ctx, cover.design, g, s, images);
  if (guides) paintGuides(s, accent);
  ctx.restore();
  // panel labels above the sheet
  ctx.font = '500 10px "Geist Mono", ui-monospace, monospace'; ctx.fillStyle = ink; ctx.globalAlpha = .55; ctx.textAlign = 'center';
  ctx.letterSpacing = '1.5px';
  for (const k of g.order) { const p = g.panels[k]; if (p.w * s > 30) ctx.fillText(p.label.toUpperCase(), ox + (p.x + p.w / 2) * s, oy - 10) }
  ctx.globalAlpha = 1; ctx.letterSpacing = '0px';
  const l = layer(sel);
  if (l && l.visible) paintSelection(l, accent);
  if (snapLines) {
    ctx.strokeStyle = '#ff5fa2'; ctx.lineWidth = 1; ctx.beginPath();
    if (snapLines.x != null) { const x = Math.round(ox + snapLines.x * s) + .5; ctx.moveTo(x, oy - 6); ctx.lineTo(x, oy + g.height * s + 6) }
    if (snapLines.y != null) { const y = Math.round(oy + snapLines.y * s) + .5; ctx.moveTo(ox - 6, y); ctx.lineTo(ox + g.width * s + 6, y) }
    ctx.stroke();
  }
}
function paintGuides(s, accent) {
  const b = g.bleed * s, W = g.width * s, H = g.height * s, sf = g.safe * s;
  if (b > 0) { // bleed: what's trimmed off, shaded
    ctx.fillStyle = 'rgba(255,255,255,.16)';
    ctx.fillRect(0, 0, W, b); ctx.fillRect(0, H - b, W, b); ctx.fillRect(0, b, b, H - 2 * b); ctx.fillRect(W - b, b, b, H - 2 * b);
    ctx.strokeStyle = 'rgba(255,255,255,.75)'; ctx.lineWidth = 1; ctx.setLineDash([]);
    ctx.strokeRect(b + .5, b + .5, W - 2 * b - 1, H - 2 * b - 1);
  }
  ctx.strokeStyle = 'rgba(255,255,255,.7)'; ctx.setLineDash([5, 4]); ctx.lineWidth = 1;
  for (const f of g.folds) { const x = Math.round(f * s) + .5; ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke() }
  ctx.strokeStyle = accent; ctx.globalAlpha = .9; ctx.setLineDash([2, 4]);
  // safe area inside each panel
  for (const k of g.order) {
    const p = g.panels[k], i = g.order.indexOf(k), last = i === g.order.length - 1;
    if (k === 'spine') continue;
    const x0 = p.x + (i === 0 ? g.bleed : 0) + g.safe, x1 = p.x + p.w - (last ? g.bleed : 0) - g.safe;
    ctx.strokeRect(x0 * s, b + sf, (x1 - x0) * s, H - 2 * b - 2 * sf);
  }
  ctx.setLineDash([]); ctx.globalAlpha = 1;
}
function corners(bb) {
  const a = (bb.rotate || 0) * Math.PI / 180, c = Math.cos(a), sn = Math.sin(a);
  return [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([u, v]) => {
    const lx = u * bb.w / 2, ly = v * bb.h / 2;
    return [view.ox + (bb.cx + lx * c - ly * sn) * view.s, view.oy + (bb.cy + lx * sn + ly * c) * view.s];
  });
}
function paintSelection(l, accent) {
  if (l.type === 'fill') return;
  const bb = layerBounds(measure, l, g, images), pts = corners(bb);
  ctx.strokeStyle = accent; ctx.lineWidth = 1.25;
  ctx.beginPath(); pts.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.closePath(); ctx.stroke();
  ctx.fillStyle = '#fff';
  for (const [x, y] of pts) { ctx.beginPath(); ctx.rect(x - HANDLE + .5, y - HANDLE + .5, HANDLE * 2 - 1, HANDLE * 2 - 1); ctx.fill(); ctx.stroke() }
}

/* ---------- state ---------- */
const layer = id => cover?.design.layers.find(l => l.id === id);
const snapshot = () => JSON.stringify({ format: cover.format, opts: cover.opts, design: cover.design });
function commit(now) {
  clearTimeout(commitT);
  const go = () => { const s = snapshot(); if (past[past.length - 1] !== s) { past.push(s); if (past.length > 80) past.shift(); future = [] } save() };
  now ? go() : (commitT = setTimeout(go, 450));
}
function restore(s) {
  const d = JSON.parse(s);
  cover.format = d.format; cover.opts = d.opts; cover.design = d.design;
  fmt = formatOf(cover.format); g = geometry(fmt, cover.opts);
  if (!layer(sel)) sel = null;
  fillFormat(); renderLayers(); renderInspector(); loadImages(); fit(); save();
}
function undo() { if (past.length < 2) return; future.push(past.pop()); restore(past[past.length - 1]) }
function redo() { if (!future.length) return; const s = future.pop(); past.push(s); restore(s) }

function save() {
  clearTimeout(saveT);
  saveT = setTimeout(() => {
    if (!cover) return;
    cover.thumb = thumb();
    if (!putCover(coverId, cover) && !warnedFull) { warnedFull = true; toast('This browser is out of room for saved covers. Uploaded pictures take the most space.') }
  }, 500);
}
function thumb() {
  try {
    const h = 220, ppi = h / g.height, c = document.createElement('canvas');
    c.width = Math.round(g.width * ppi); c.height = h;
    drawDesign(c.getContext('2d'), cover.design, g, ppi, images);
    return c.toDataURL('image/jpeg', .72);
  } catch { return null } // a picture the browser can't read back (no CORS) taints the canvas
}

/* ---------- format changes ---------- */
function setFormat(key) {
  const before = g;
  cover.format = key; fmt = formatOf(key); g = geometry(fmt, cover.opts);
  // layers on panels this format doesn't have (the back and spine of a wrap, on an ebook) are set aside,
  // not moved onto the front, and come back where they were when the wrap returns
  const d = cover.design, fits = l => l.region === 'all' || !!g.panels[l.region];
  const all = [...d.layers, ...(d.parked || [])];
  d.layers = all.filter(fits);
  d.parked = all.filter(l => !fits(l));
  if (!d.parked.length) delete d.parked;
  if (!layer(sel)) sel = d.layers.find(l => l.type === 'text')?.id || null;
  // a wrap needs a spine and back; add the starter ones when the design has none there yet
  if (g.order.length > 1 && !cover.design.layers.some(l => l.region === 'back' || l.region === 'spine')) {
    const extra = starter(fmt, g, { src: null, w: 1, h: 1, ...(cover.art || { title: 'Untitled' }) }).layers.filter(l => l.region === 'back' || l.region === 'spine');
    const title = cover.design.layers.find(l => l.name === 'Title');
    for (const l of extra) if (l.name === 'Spine title' && title) l.text = title.text.replace(/\n/g, ' ');
    cover.design.layers.push(...extra);
  }
  refit(before);
  fillFormat(); renderLayers(); renderInspector(); fit(); commit(true);
}
function setOpts(patch) {
  const before = g;
  Object.assign(cover.opts, patch); g = geometry(fmt, cover.opts);
  rescale(before); refit(before); fillFormat(); renderInspector(); fit(); commit();
}
// A new book size scales the layout with the page: type, wrap widths and free-placed pictures by the change
// in trim width, heights by the change in trim height. Ratios chain exactly, so clicking through several sizes
// and back returns the design as it was. Spine lettering keeps its size; only the page count moves the spine.
function rescale(before) {
  const kx = g.panels.front.trimW / before.panels.front.trimW, ky = g.trimH / before.trimH;
  if (Math.abs(kx - 1) < 1e-9 && Math.abs(ky - 1) < 1e-9) return;
  for (const l of cover.design.layers) {
    if (l.type === 'fill') continue;
    l.y *= ky;
    if (l.region === 'spine') continue;
    l.x *= kx;
    if (l.type === 'text') { l.size *= kx; if (l.boxW > 0) l.boxW *= kx }
    else if (l.type === 'image' && !l.fit) l.w *= kx;
  }
}
// pictures that were filling their panel keep filling it when the panel's size changes
function refit(before) {
  for (const l of cover.design.layers) if (l.type === 'image' && l.fit) {
    const img = images[l.id];
    const w = img?.naturalWidth || 1000, h = img?.naturalHeight || 1000 * (l.ratio || 1);
    placeImage(l, g, w, h, l.fit);
  }
}

/* ---------- layer list ---------- */
const ICON = { text: 'T', image: '▣', fill: '■' };
function renderLayers() {
  const list = [...cover.design.layers].reverse();
  $('#st-layers').innerHTML = list.map(l => `
    <li class="${l.id === sel ? 'on' : ''}${l.visible ? '' : ' off'}" data-id="${l.id}">
      <button type="button" class="st-eye" data-eye="${l.id}" aria-label="${l.visible ? 'Hide' : 'Show'} ${esc(l.name)}" aria-pressed="${l.visible}">${l.visible ? '●' : '○'}</button>
      <button type="button" class="st-lname" data-pick="${l.id}"><i>${ICON[l.type]}</i>${esc(l.name)}<small>${esc(regionName(l.region))}</small></button>
    </li>`).join('');
  const items = keys().flatMap(k => boards[k].items.map(it => [k, it]));
  $('#st-boardart').innerHTML = `<option value="">${items.length ? 'Choose a saved work' : 'No saved works yet'}</option>` +
    keys().filter(k => boards[k].items.length).map(k => `<optgroup label="${esc(boards[k].name)}">${boards[k].items.map(it => `<option value="${it.id}">${esc(it.t)}${it.a ? ' · ' + esc(it.a) : ''}</option>`).join('')}</optgroup>`).join('');
  $('#st-boardart').disabled = !items.length;
}
const regionName = r => (regions(g).find(x => x[0] === r) || [, r])[1];

/* ---------- inspector ---------- */
const num = (k, v, min, max, step, unit = '') => `<span class="st-num"><input type="range" data-k="${k}" min="${min}" max="${max}" step="${step}" value="${v}"><input type="number" data-k="${k}" min="${min}" max="${max}" step="${step}" value="${+(+v).toFixed(3)}" aria-label="${k}">${unit ? `<small>${unit}</small>` : ''}</span>`;
const field = (label, ctl) => `<label class="st-f"><span>${label}</span>${ctl}</label>`;
const check = (k, v, label) => `<label class="st-check"><input type="checkbox" data-k="${k}" ${v ? 'checked' : ''}><span>${label}</span></label>`;
const color = (k, v) => `<input type="color" data-k="${k}" value="${/^#[0-9a-f]{6}$/i.test(v) ? v : '#000000'}">`;

function renderInspector() {
  const box = $('#st-insp'), l = layer(sel);
  if (box.contains(document.activeElement) && document.activeElement.matches('input:not([type=range]), textarea')) return; // don't pull the field out from under typing
  if (!l) {
    box.innerHTML = `<div class="st-sec"><span class="label">Nothing selected</span><p class="st-note">Click a layer on the cover or in the list to change it. Words between *asterisks* in a text layer are set in italic.</p></div>${checklist()}`;
    return;
  }
  const regs = regions(g);
  let body = '';
  if (l.type === 'text') {
    body = `
      ${field('Text', `<textarea data-k="text" rows="${Math.min(8, Math.max(2, l.text.split('\n').length + 1))}" spellcheck="true">${esc(l.text)}</textarea>`)}
      ${field('Typeface', `<select data-k="font">${FONTS.map(([v, n]) => `<option value="${esc(v)}" ${v === l.font ? 'selected' : ''}>${n}</option>`).join('')}</select>`)}
      ${field('Size', num('size', l.size, 4, 220, .5, 'pt'))}
      <div class="st-f2">
        ${field('Weight', `<select data-k="weight">${[300, 400, 500, 700].map(w => `<option ${w === +l.weight ? 'selected' : ''}>${w}</option>`).join('')}</select>`)}
        ${field('Colour', color('color', l.color))}
      </div>
      <div class="st-checks">${check('italic', l.italic, 'Italic')}${check('caps', l.caps, 'Capitals')}</div>
      ${field('Align', `<div class="seg">${['left', 'center', 'right'].map(a => `<button type="button" data-set="align" data-v="${a}" aria-pressed="${l.align === a}">${a[0].toUpperCase() + a.slice(1)}</button>`).join('')}</div>`)}
      ${field('Letter spacing', num('tracking', l.tracking, -.05, .6, .005, 'em'))}
      ${field('Line spacing', num('leading', l.leading, .7, 2.4, .01))}
      ${field('Wrap width', num('boxW', l.boxW || 0, 0, +regionBox(g, l.region).w.toFixed(2), .05, 'in'))}
      ${field('Rotate', `<div class="seg">${[0, 90, -90].map(a => `<button type="button" data-set="rotate" data-v="${a}" aria-pressed="${(l.rotate || 0) === a}">${a ? (a > 0 ? '90°' : '−90°') : 'Level'}</button>`).join('')}</div>`)}
      <div class="st-checks">${check('shadow.on', l.shadow?.on, 'Shadow')}</div>
      ${l.shadow?.on ? field('Shadow softness', num('shadow.blur', l.shadow.blur, 0, 60, 1, 'pt')) + field('Shadow strength', num('shadow.opacity', l.shadow.opacity, 0, 1, .01)) : ''}`;
  } else if (l.type === 'image') {
    const img = images[l.id], bb = layerBounds(measure, l, g, images), c = cropOf(l);
    const ppi = img ? effectivePpi(img.naturalWidth * (c.x1 - c.x0), img.naturalHeight * (c.y1 - c.y0), bb.w, bb.h) : 0;
    const full = l.src?.nga && cover.art?.u === l.src.nga ? cover.art : null;
    const fullPpi = full ? effectivePpi(full.w * (c.x1 - c.x0), full.h * (c.y1 - c.y0), bb.w, bb.h) : 0;
    body = `
      <div class="st-fitbar">${['fill', 'fit'].map(m => `<button type="button" class="btn" data-act="${m}">${m === 'fill' ? 'Fill' : 'Fit'} ${regionName(l.region).toLowerCase()}</button>`).join('')}</div>
      ${field('Width', num('w', +l.w.toFixed(3), .25, +(g.width * 1.6).toFixed(2), .01, 'in'))}
      <div class="st-f2">${field('Crop left', num('crop.x0', c.x0, 0, .95, .005))}${field('Crop right', num('crop.x1', c.x1, .05, 1, .005))}</div>
      <div class="st-f2">${field('Crop top', num('crop.y0', c.y0, 0, .95, .005))}${field('Crop bottom', num('crop.y1', c.y1, .05, 1, .005))}</div>
      ${field('Blur', num('blur', l.blur || 0, 0, 60, .5, 'pt'))}
      <div class="print st-ppi">
        ${l.src?.nga ? `<div class="row"><span>Export uses</span><span>${local[l.id] ? 'your file' : 'NGA full size'}</span></div>` : ''}
        ${fullPpi ? `<div class="row"><span>Prints at</span><span class="${fullPpi >= 300 ? 'good' : 'low'}">${fullPpi} ppi${fullPpi >= 300 ? '' : ', under 300'}</span></div>`
        : ppi ? `<div class="row"><span>Prints at</span><span class="${ppi >= 300 ? 'good' : 'low'}">${ppi} ppi</span></div>` : ''}
        ${l.src?.nga ? `<p>If export can’t read NGA’s server, <a href="${fullUrl(l.src.nga)}" target="_blank" rel="noopener" data-barba-prevent="self">download the full image</a> and <label class="linkish">use that file<input type="file" accept="image/*" data-local="${l.id}" hidden></label>.</p>` : ''}
      </div>`;
  } else {
    body = `
      ${field('Colour', color('color', l.color))}
      ${field('Fade', `<div class="seg">${[['none', 'Solid'], ['bottom', 'Up from bottom'], ['top', 'Down from top']].map(([v, n]) => `<button type="button" data-set="fade" data-v="${v}" aria-pressed="${(l.fade || 'none') === v}">${n}</button>`).join('')}</div>`)}`;
  }
  box.innerHTML = `
    <div class="st-sec">
      <div class="st-row"><input class="st-lnamein" data-k="name" value="${esc(l.name)}" aria-label="Layer name"><button type="button" class="linkish" data-act="deselect">Done</button></div>
      ${regs.length > 1 ? field('Sits on', `<select data-k="region">${regs.map(([v, n]) => `<option value="${v}" ${v === l.region ? 'selected' : ''}>${n}</option>`).join('')}</select>`) : ''}
      ${body}
      ${field('Opacity', num('opacity', l.opacity ?? 1, 0, 1, .01))}
      <div class="st-tools">
        <button type="button" class="linkish" data-act="up">Bring forward</button>
        <button type="button" class="linkish" data-act="down">Send back</button>
        ${l.type !== 'fill' ? `<button type="button" class="linkish" data-act="center">Centre</button>` : ''}
        <button type="button" class="linkish" data-act="dup">Duplicate</button>
        <button type="button" class="linkish danger" data-act="del">Delete</button>
      </div>
    </div>`;
}
// what to check before upload, Scriptorium's print notes in short
function checklist() {
  if (!fmt.paperback) return `<div class="st-sec"><span class="label">Before you upload</span><ul class="st-list"><li>Exports at 1600 × 2560 px.</li><li>Keep the title readable as a thumbnail: zoom your browser out and look.</li></ul></div>`;
  const sp = spineOf(cover.opts);
  return `<div class="st-sec"><span class="label">Before you upload</span><ul class="st-list">
    <li class="${sp.source === 'printer' ? 'ok' : 'warn'}">${sp.source === 'printer' ? 'Spine width is your printer’s figure.' : 'Spine width is an estimate. Type in your printer’s figure.'}</li>
    <li>Keep words inside the dotted safe lines, a quarter inch from every trim and fold.</li>
    <li>Pictures run to the outer edge so the bleed is covered.</li>
    <li>KDP and IngramSpark print the barcode on the lower back. Leave about 2 × 1.2 in clear there.</li></ul></div>`;
}

function setPath(o, path, v) { const ks = path.split('.'); let t = o; for (const k of ks.slice(0, -1)) t = t[k] ??= {}; t[ks.at(-1)] = v }
function getPath(o, path) { return path.split('.').reduce((t, k) => t?.[k], o) }

/* ---------- events ---------- */
function bindStudio() {
  const on = (el, ev, fn, opt) => { el.addEventListener(ev, fn, opt); offs.push(() => el.removeEventListener(ev, fn, opt)) };
  on($('#st-name'), 'input', e => { cover.name = e.target.value; document.title = `${cover.name || 'Cover'} · Cover Studio`; save() });
  on($('#st-undo'), 'click', undo); on($('#st-redo'), 'click', redo);
  on($('#st-guides'), 'click', e => { guides = !guides; e.currentTarget.setAttribute('aria-pressed', guides); draw() });
  on($('#st-export'), 'click', () => exportCover());
  on($('#st-format'), 'click', e => { const b = e.target.closest('[data-fmt]'); if (b && b.dataset.fmt !== fmt.key) setFormat(b.dataset.fmt) });
  on($('#st-sizes'), 'click', e => {
    const b = e.target.closest('[data-size]'); if (!b || b.dataset.size === cover.opts.trim) return;
    const patch = { trim: b.dataset.size };
    if (b.dataset.size === 'custom' && !(cover.opts.customW > 0)) { const [w, h] = trimOf(cover.opts); patch.customW = w; patch.customH = h }
    setOpts(patch);
  });
  // only a usable trim (2 to 14 in) is applied, so half-typed numbers don't jolt the layout
  const custom = (k, e) => { const v = +e.target.value; if (v >= 2 && v <= 14) setOpts({ [k]: v }) };
  on($('#st-cw'), 'input', e => custom('customW', e));
  on($('#st-ch'), 'input', e => custom('customH', e));
  on($('#st-pages'), 'input', e => setOpts({ pages: clamp(+e.target.value || 0, 0, 2000) }));
  on($('#st-spine'), 'input', e => setOpts({ spine: e.target.value }));
  on($('#st-bg'), 'input', e => { cover.design.background = e.target.value; draw(); commit() });

  const left = root.querySelector('.st-left');
  on(left, 'click', e => {
    const t = e.target.closest('button'); if (!t) return;
    if (t.dataset.pick) select(t.dataset.pick);
    else if (t.dataset.eye) { const l = layer(t.dataset.eye); l.visible = !l.visible; renderLayers(); draw(); commit(true) }
    else if (t.dataset.add) addLayer(t.dataset.add);
  });
  on($('#st-file'), 'change', async e => { const f = e.target.files[0]; e.target.value = ''; if (f) addUpload(f) });
  on($('#st-boardart'), 'change', e => {
    const id = +e.target.value; e.target.value = ''; if (!id) return;
    const it = keys().flatMap(k => boards[k].items).find(x => x.id === id); if (!it) return;
    const l = newLayer('image', { name: it.t.slice(0, 40), src: { nga: it.u }, ratio: it.h / it.w });
    placeImage(l, g, it.w, it.h, 'fit'); l.w *= .6; l.fit = null;
    cover.design.layers.push(l); select(l.id); loadImages(); commit(true);
  });

  const insp = $('#st-insp');
  on(insp, 'input', e => {
    const k = e.target.dataset.k, l = layer(sel); if (!k || !l) return;
    let v = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    if (e.target.type === 'range' || e.target.type === 'number') { v = parseFloat(v); if (!Number.isFinite(v)) return }
    if (k === 'weight') v = +v;
    if (k.startsWith('crop.')) { l.crop = { ...cropOf(l) }; l.fit = null }
    if (k === 'w') l.fit = null;
    setPath(l, k, v);
    if (k === 'font') ensureFont(v);
    // keep the twin slider and number box in step
    insp.querySelectorAll(`[data-k="${k}"]`).forEach(el => { if (el !== e.target && el.type !== 'checkbox') el.value = el.type === 'number' ? +(+v).toFixed(3) : v });
    if (k === 'name' || k === 'region') renderLayers();
    if (k === 'region' || k === 'shadow.on') renderInspector();
    draw(); commit();
  });
  on(insp, 'change', e => { if (e.target.dataset.local) useLocal(e.target.dataset.local, e.target.files[0]) });
  on(insp, 'click', e => {
    const t = e.target.closest('button'); const l = layer(sel); if (!t || !l) return;
    if (t.dataset.set) { setPath(l, t.dataset.set, isNaN(+t.dataset.v) ? t.dataset.v : +t.dataset.v); renderInspector(); draw(); commit(true); return }
    const a = t.dataset.act, arr = cover.design.layers, i = arr.indexOf(l);
    if (a === 'deselect') select(null);
    else if (a === 'fill' || a === 'fit') { const img = images[l.id]; if (img) { placeImage(l, g, img.naturalWidth, img.naturalHeight, a); l.fit = a } }
    else if (a === 'up' && i < arr.length - 1) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    else if (a === 'down' && i > 0) [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
    else if (a === 'center') { l.x = 0; l.y = 0 }
    else if (a === 'dup') { const c = { ...structuredClone(l), id: uid(), name: l.name + ' copy', x: l.x + .15, y: l.y + .15 }; arr.splice(i + 1, 0, c); if (images[l.id]) images[c.id] = images[l.id]; if (local[l.id]) local[c.id] = local[l.id]; sel = c.id }
    else if (a === 'del') { arr.splice(i, 1); sel = null }
    renderLayers(); renderInspector(); draw(); commit(true);
  });

  on(canvas, 'pointerdown', pointerDown);
  on(canvas, 'pointermove', pointerMove);
  on(canvas, 'pointerup', pointerUp); on(canvas, 'pointercancel', pointerUp);
  on(canvas, 'dblclick', () => { const l = layer(sel); if (l?.type === 'text') { const ta = $('#st-insp textarea'); ta?.focus(); ta?.select() } });
  on(window, 'keydown', keys_);
  const theme = new MutationObserver(draw); theme.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] }); offs.push(() => theme.disconnect());
}

function select(id) { sel = id; renderLayers(); renderInspector(); draw() }

function addLayer(type) {
  const l = newLayer(type);
  if (type === 'text') { l.text = 'New text'; l.size = Math.round(g.panels.front.trimW * 72 * .07); l.font = 'GW Jenson' }
  if (type === 'fill') { l.fade = 'bottom'; l.opacity = .5 }
  const cur = layer(sel);
  if (cur && g.panels[cur.region]) l.region = cur.region;
  if (type === 'text') { ensureFont(l.font); cover.design.layers.push(l) }
  else { const i = cover.design.layers.findIndex(x => x.type === 'text'); cover.design.layers.splice(i < 0 ? cover.design.layers.length : i, 0, l) }
  select(l.id); commit(true);
}
async function readImage(file) {
  const url = URL.createObjectURL(file);
  try { return await loadImg(url, false) } finally { setTimeout(() => URL.revokeObjectURL(url), 60000) }
}
// a picture from this computer: kept in the saved cover, scaled to 2400 px so localStorage can hold it
async function addUpload(file) {
  try {
    const img = await readImage(file), k = Math.min(1, 2400 / Math.max(img.naturalWidth, img.naturalHeight));
    const c = document.createElement('canvas'); c.width = Math.round(img.naturalWidth * k); c.height = Math.round(img.naturalHeight * k);
    c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
    const data = c.toDataURL('image/jpeg', .9);
    const l = newLayer('image', { name: file.name.replace(/\.\w+$/, '').slice(0, 40) || 'Picture', src: { data }, ratio: c.height / c.width });
    const cur = layer(sel); if (cur && g.panels[cur.region]) l.region = cur.region;
    placeImage(l, g, c.width, c.height, 'fit'); l.w *= .7;
    const i = cover.design.layers.findIndex(x => x.type === 'text');
    cover.design.layers.splice(i < 0 ? cover.design.layers.length : i, 0, l);
    images[l.id] = await loadImg(data, false);
    select(l.id); commit(true);
  } catch { toast('That file could not be opened as a picture.') }
}
// a downloaded copy of an NGA image, for when the browser can't read NGA's server directly; this session only
async function useLocal(id, file) {
  if (!file) return;
  try {
    const img = await readImage(file); local[id] = img; images[id] = img;
    renderInspector(); draw(); toast('Using your file for this layer');
    if (!$('#st-fix').hidden) fixPanel();
  } catch { toast('That file could not be opened as a picture.') }
}

/* ---------- pointer: move and resize on the canvas ---------- */
const toIn = e => { const r = canvas.getBoundingClientRect(); return { x: (e.clientX - r.left - view.ox) / view.s, y: (e.clientY - r.top - view.oy) / view.s, sx: e.clientX - r.left, sy: e.clientY - r.top } };
function hit(p) {
  for (const l of [...cover.design.layers].reverse()) {
    if (!l.visible || l.type === 'fill') continue;
    const bb = layerBounds(measure, l, g, images), a = -(bb.rotate || 0) * Math.PI / 180;
    const dx = p.x - bb.cx, dy = p.y - bb.cy, lx = dx * Math.cos(a) - dy * Math.sin(a), ly = dx * Math.sin(a) + dy * Math.cos(a);
    if (Math.abs(lx) <= bb.w / 2 && Math.abs(ly) <= bb.h / 2) return l;
  }
  return null;
}
function handleAt(p) {
  const l = layer(sel); if (!l || !l.visible || l.type === 'fill') return null;
  const pts = corners(layerBounds(measure, l, g, images));
  return pts.some(([x, y]) => Math.abs(x - p.sx) <= HANDLE + 3 && Math.abs(y - p.sy) <= HANDLE + 3) ? l : null;
}
function pointerDown(e) {
  if (e.button !== 0) return;
  canvas.focus({ preventScroll: true });
  const p = toIn(e), h = handleAt(p);
  if (h) {
    const bb = layerBounds(measure, h, g, images);
    drag = { mode: 'size', l: h, cx: bb.cx, cy: bb.cy, d0: Math.hypot(p.x - bb.cx, p.y - bb.cy) || 1, w: h.w, size: h.size, boxW: h.boxW };
  } else {
    const l = hit(p);
    if (!l) { if (sel) select(null); return }
    if (l.id !== sel) select(l.id);
    const bb = layerBounds(measure, l, g, images);
    drag = { mode: 'move', l, p0: p, cx: bb.cx, cy: bb.cy, bb };
  }
  canvas.setPointerCapture(e.pointerId);
}
function pointerMove(e) {
  const p = toIn(e);
  if (!drag) { canvas.style.cursor = handleAt(p) ? 'nwse-resize' : hit(p) ? 'move' : 'default'; return }
  const l = drag.l;
  if (drag.mode === 'move') {
    let cx = drag.cx + p.x - drag.p0.x, cy = drag.cy + p.y - drag.p0.y;
    snapLines = null;
    if (!e.altKey) {
      const side = Math.abs(Math.sin((drag.bb.rotate || 0) * Math.PI / 180)) > .7;
      const s = snapBox(cx, cy, side ? drag.bb.h : drag.bb.w, side ? drag.bb.w : drag.bb.h, g, SNAP_PX / view.s);
      cx = s.cx; cy = s.cy; snapLines = { x: s.lineX, y: s.lineY };
    }
    const r = regionBox(g, l.region);
    l.x = cx - (r.x + r.w / 2); l.y = cy - (r.y + r.h / 2);
  } else {
    const k = Math.max(.05, Math.hypot(p.x - drag.cx, p.y - drag.cy) / drag.d0);
    if (l.type === 'image') { l.w = drag.w * k; l.fit = null }
    else { l.size = Math.max(3, Math.round(drag.size * k * 2) / 2); if (drag.boxW > 0) l.boxW = drag.boxW * k }
  }
  draw();
}
function pointerUp() {
  if (!drag) return;
  drag = null; snapLines = null; draw(); renderInspector(); commit(true);
}
function keys_(e) {
  if (!cover) return;
  const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName);
  const mod = e.metaKey || e.ctrlKey;
  if (mod && e.key.toLowerCase() === 'z' && !typing) { e.preventDefault(); e.shiftKey ? redo() : undo(); return }
  if (mod && e.key.toLowerCase() === 'y' && !typing) { e.preventDefault(); redo(); return }
  if (typing) return;
  const l = layer(sel); if (!l) return;
  const step = e.shiftKey ? .25 : 1 / 32;
  const moves = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] };
  if (moves[e.key] && l.type !== 'fill') { e.preventDefault(); l.x += moves[e.key][0]; l.y += moves[e.key][1]; draw(); commit() }
  else if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); cover.design.layers.splice(cover.design.layers.indexOf(l), 1); select(null); commit(true) }
  else if (mod && e.key.toLowerCase() === 'd') { e.preventDefault(); $('#st-insp [data-act="dup"]')?.click() }
  else if (e.key === 'Escape') select(null);
}

/* ---------- export ---------- */
async function exportImage(l) {
  if (local[l.id]) return local[l.id];
  if (l.src?.data) return loadImg(l.src.data, false);
  if (l.src?.nga) return loadImg(fullUrl(l.src.nga), true); // throws when NGA's server doesn't allow it
  return null;
}
async function exportCover() {
  const btn = $('#st-export'), type = $('#st-type').value;
  if (btn.disabled) return;
  btn.disabled = true; btn.textContent = 'Preparing…';
  try {
    await Promise.all(designFonts(cover.design).map(f => document.fonts.load(f).catch(() => {})));
    const used = cover.design.layers.filter(l => l.type === 'image' && l.visible), full = {}, failed = [];
    await Promise.all(used.map(async l => { try { full[l.id] = await exportImage(l) } catch { failed.push(l) } }));
    if (failed.length) { fixPanel(failed); return }
    let ppi = fmt.ppi;
    const area = g.width * g.height * ppi * ppi, MAX = 16e6; // Safari's largest canvas
    if (area > MAX) ppi = Math.floor(Math.sqrt(MAX / (g.width * g.height)));
    const c = document.createElement('canvas');
    c.width = Math.round(g.width * ppi); c.height = Math.round(g.height * ppi);
    btn.textContent = 'Rendering…';
    await new Promise(r => setTimeout(r, 30));
    drawDesign(c.getContext('2d'), cover.design, g, ppi, full);
    const base = `${slug(cover.name)}-${fmt.key === 'paperback' ? 'paperback-' + trimOf(cover.opts).join('x') : 'ebook'}`;
    let blob;
    try {
      if (type === 'png') blob = await toBlob(c, 'image/png');
      else if (type === 'jpg') blob = await toBlob(c, 'image/jpeg', .95);
      else blob = await pdfFromJpeg(await toBlob(c, 'image/jpeg', .94), c.width, c.height, g.width, g.height, g.bleed);
    } catch (err) { if (err.name === 'SecurityError') { fixPanel(used.filter(l => l.src?.nga && !local[l.id])); return } throw err }
    download(blob, `${base}.${type}`);
    $('#st-fix').hidden = true;
    toast(`Exported ${c.width.toLocaleString()} × ${c.height.toLocaleString()} px${ppi < fmt.ppi ? `, ${ppi} ppi (browser size limit)` : ''}`);
  } catch (err) {
    toast('Export failed: ' + (err.message || err));
  } finally { btn.disabled = false; btn.textContent = 'Export' }
}
// when the browser can't read NGA's full-size images back, ask for downloaded copies instead
function fixPanel(layers) {
  const box = $('#st-fix');
  const need = (layers || cover.design.layers.filter(l => l.type === 'image' && l.visible && l.src?.nga)).filter(l => !local[l.id]);
  if (!need.length) { box.hidden = true; toast('All set. Press Export again.'); return }
  box.hidden = false;
  box.innerHTML = `<p><b>The browser can’t read NGA’s full-size image back for export.</b> Download it, then pick the file here. It’s used only in this tab.</p>
    <ul>${need.map(l => `<li><span>${esc(l.name)}</span><a class="btn" href="${fullUrl(l.src.nga)}" target="_blank" rel="noopener" data-barba-prevent="self">Download</a><label class="btn primary">Use file<input type="file" accept="image/*" data-local="${l.id}" hidden></label></li>`).join('')}</ul>`;
  box.onchange = e => { if (e.target.dataset.local) useLocal(e.target.dataset.local, e.target.files[0]) };
}
