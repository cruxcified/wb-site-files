// Masonry of DOM placeholders. Each placeholder reserves the artwork's exact aspect ratio;
// the image itself is a WebGL plane when the browser allows, or a plain <img> when it doesn't.
import { gl, observe } from '../gl.js';
import { thumbUrl, esc } from '../data.js';
import { isSaved, lastKey, toggle, boards } from '../store.js';
import { toast } from '../ui.js';

export const ICON_MARK = '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 3h12v18l-6-4.5L6 21z"/></svg>';

export function columnsFor(el) {
  const w = el.clientWidth;
  return w < 520 ? 2 : Math.max(2, Math.min(6, Math.floor(w / 260)));
}
export class Masonry {
  constructor(el) { this.el = el; this.reset() }
  reset() {
    const n = columnsFor(this.el);
    this.el.innerHTML = ''; this.cols = []; this.h = [];
    for (let i = 0; i < n; i++) { const d = document.createElement('div'); d.className = 'col'; this.el.appendChild(d); this.cols.push(d); this.h.push(0) }
    this.count = 0;
  }
  // item: {id, u, w, h, title, artist, date}
  add(item) {
    let k = 0; for (let i = 1; i < this.h.length; i++) if (this.h[i] < this.h[k] - .01) k = i;
    const t = tileEl(item, this.count++);
    this.cols[k].appendChild(t); this.h[k] += item.h / item.w + .05;
    return t;
  }
}
export function tileEl(it, index = 0) {
  const d = document.createElement('div');
  d.className = 'tile'; d.dataset.id = it.id;
  d.style.aspectRatio = `${it.w} / ${it.h}`;
  d.innerHTML = `<a class="tile-link" href="artwork.html?id=${it.id}" aria-label="${esc(it.title)}${it.artist ? ', ' + esc(it.artist) : ''}"><img alt="" decoding="async" loading="lazy"></a>
    <div class="tile-cap" aria-hidden="true"><b>${esc(it.title)}</b><span>${esc(it.artist)}${it.date ? ' · ' + esc(it.date) : ''}</span></div>
    <button class="save${isSaved(it.id) ? ' on' : ''}" type="button" aria-label="Save ${esc(it.title)} to a board">${ICON_MARK}</button>`;
  const img = d.querySelector('img');
  const showImg = () => { if (!img.src) { img.src = thumbUrl(it.u); img.onload = () => img.classList.add('ok') } };
  if (gl.ok && gl.imagesOk) observe(d, { url: thumbUrl(it.u), hover: true, delay: index < 24 ? .05 * index : 0, onFail: showImg });
  else showImg();
  return d;
}
// one delegated handler per wall for the save buttons
export function bindSaves(root, lookup) {
  root.addEventListener('click', e => {
    const b = e.target.closest('.save'); if (!b) return;
    e.preventDefault(); e.stopPropagation();
    const o = lookup(+b.closest('.tile').dataset.id); if (!o) return;
    const k = lastKey(); const added = toggle(k, o);
    b.classList.toggle('on', isSaved(o[0]));
    b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop');
    toast(added ? `Saved to ${boards[k].name}` : `Removed from ${boards[k].name}`);
  });
}
