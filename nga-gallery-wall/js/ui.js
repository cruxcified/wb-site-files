// Persistent chrome: header search, filter drawer, cursor, toast, loader. Lives outside the barba container.
import { T, esc, state as dataState, onData } from './data.js';
import { savedCount, onBoards } from './store.js';
import { onFrame } from './gl.js';

const $ = id => document.getElementById(id);
const FIELDS = { q: 'q', cls: 'f-cls', style: 'f-style', tech: 'f-tech', theme: 'f-theme', nat: 'f-nat', artist: 'f-artist', medium: 'f-medium', orient: 'f-orient', from: 'f-from', to: 'f-to', sort: 'f-sort' };
const ls = (() => { try { return window.localStorage } catch { return null } })();

export function filters() {
  const f = {}; for (const [k, id] of Object.entries(FIELDS)) f[k] = $(id).value; return f;
}
export function setFilters(next, { reset = true } = {}) {
  for (const [k, id] of Object.entries(FIELDS)) if (reset && k !== 'sort') $(id).value = '';
  for (const [k, v] of Object.entries(next)) if (FIELDS[k]) $(FIELDS[k]).value = v;
  if (next.q && !next.sort) $('f-sort').value = 'rel';
  sync();
}
const listeners = new Set();
export const onFilters = fn => (listeners.add(fn), () => listeners.delete(fn));
let navigateToWall = () => {};
export const setNavigator = fn => { navigateToWall = fn };

function sync() {
  const f = filters();
  const active = Object.entries(FIELDS).filter(([k, id]) => k !== 'q' && k !== 'sort' && $(id).value);
  active.forEach(([, id]) => $(id).classList.add('on'));
  Object.entries(FIELDS).forEach(([k, id]) => { if (!active.some(a => a[1] === id)) $(id).classList.remove('on') });
  $('filter-count').textContent = active.length ? active.length : '';
  $('filter-clear').hidden = !active.length && !f.q;
  try { ls.setItem('gw-filters', JSON.stringify(f)) } catch {}
}
function changed() {
  sync();
  if (document.querySelector('[data-barba-namespace]')?.dataset.barbaNamespace !== 'wall') navigateToWall();
  else listeners.forEach(fn => fn(filters()));
}

export function initUI() {
  // search + filters
  let t;
  $('q').addEventListener('input', () => {
    clearTimeout(t);
    t = setTimeout(() => { if ($('q').value.trim() && $('f-sort').value === 'shuffle') $('f-sort').value = 'rel'; changed() }, 220);
  });
  $('q').addEventListener('keydown', e => { if (e.key === 'Enter') { clearTimeout(t); changed() } });
  document.querySelectorAll('#drawer select').forEach(el => el.addEventListener('change', changed));
  document.querySelectorAll('#drawer input').forEach(el => el.addEventListener('input', () => { clearTimeout(t); t = setTimeout(changed, 300) }));
  $('filter-toggle').addEventListener('click', () => toggleDrawer());
  $('filter-clear').addEventListener('click', () => { setFilters({ sort: 'shuffle' }); listeners.forEach(fn => fn(filters(), { reshuffle: true })); if (document.querySelector('[data-barba-namespace]')?.dataset.barbaNamespace !== 'wall') navigateToWall() });
  addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') { e.preventDefault(); $('q').focus() }
    if (e.key === 'Escape' && !$('drawer').hidden) toggleDrawer(false);
  });
  // saved count
  const count = () => { $('saved-count').textContent = savedCount() || '' };
  onBoards(count); count();
  // header condenses after scrolling
  onFrame(() => document.body.classList.toggle('scrolled', scrollY > 40));
  initCursor();
  // fill filter menus once the tables arrive, then restore the last session's filters
  onData(kind => {
    if (kind === 'meta') {
      fillSelects();
      try { const saved = JSON.parse(ls.getItem('gw-filters')); if (saved) setFilters(saved) } catch {}
      sync();
    }
    $('load-count').textContent = dataState.loaded.toLocaleString();
    $('load-bar').style.transform = `scaleX(${dataState.total ? dataState.loaded / dataState.total : 0})`;
    if (kind === 'done') document.body.classList.add('data-done');
  });
}
export function toggleDrawer(open) {
  const d = $('drawer'); open = open ?? d.hidden;
  $('filter-toggle').setAttribute('aria-expanded', open);
  if (open) { d.hidden = false; requestAnimationFrame(() => d.classList.add('open')) }
  else { d.classList.remove('open'); setTimeout(() => { if (!d.classList.contains('open')) d.hidden = true }, 350) }
}
function fillSelects() {
  const opt = (id, label, k) => {
    const list = T[k].map((n, i) => [i, n]).sort((a, b) => a[1].localeCompare(b[1]));
    $(id).innerHTML = `<option value="">${label}</option>` + list.map(([v, n]) => `<option value="${v}">${esc(n)}</option>`).join('');
  };
  opt('f-cls', 'All types', 'cls'); opt('f-style', 'Any movement', 'style'); opt('f-tech', 'Any technique', 'tech');
  opt('f-theme', 'Any subject', 'theme'); opt('f-nat', 'Any nationality', 'nat');
  $('artists').innerHTML = T.artist.map(a => `<option value="${esc(a)}">`).join('');
}

/* loader veil, shown until the first part of the index is in */
export function hideLoader() {
  const l = $('loader'); if (l.classList.contains('gone')) return;
  l.classList.add('gone'); setTimeout(() => l.hidden = true, 1200);
}

let toastT;
export function toast(msg) {
  const t = $('toast'); t.textContent = msg; t.hidden = false; requestAnimationFrame(() => t.classList.add('show'));
  clearTimeout(toastT); toastT = setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.hidden = true, 300) }, 1900);
}

/* cursor: a small ring that trails the pointer and opens into a label over artworks */
function initCursor() {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const c = $('cursor'); c.hidden = false;
  let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y;
  addEventListener('pointermove', e => { x = e.clientX; y = e.clientY;
    const tile = e.target.closest?.('.tile, .hero-slot'), save = e.target.closest?.('.save');
    const link = e.target.closest?.('a, button, select, input, label');
    c.classList.toggle('view', !!tile && !save);
    c.classList.toggle('link', !tile && !!link || !!save);
    c.querySelector('span').textContent = tile?.classList.contains('hero-slot') ? 'Full size' : 'View';
  }, { passive: true });
  document.addEventListener('pointerleave', () => c.classList.add('away'));
  document.addEventListener('pointerenter', () => c.classList.remove('away'));
  onFrame(() => { cx += (x - cx) * .2; cy += (y - cy) * .2; c.style.transform = `translate3d(${cx}px, ${cy}px, 0)` });
}
