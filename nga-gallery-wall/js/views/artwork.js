// One artwork: the image in a hero slot (a WebGL plane flies into it from the wall), an
// editorial title block, print facts for a 6×9 cover, board chips and a row of related works.
import { T, get, whenObject, related, artistsOf, esc, heroUrl, fullUrl } from '../data.js';
import { keys, boards, inBoard, toggle, create } from '../store.js';
import { setFilters, toast, hideLoader } from '../ui.js';
import { gl } from '../gl.js';
import { Masonry, bindSaves } from './tiles.js';

export const namespace = 'artwork';
let root, current = null, offs = [];
const COVER = 6 / 9;

export const currentId = () => current?.[0];
export const heroSlot = () => root?.querySelector('.hero-slot');
export const idFromUrl = url => +(new URL(url, location.href).searchParams.get('id'));

export async function enter(container, url) {
  root = container;
  const id = idFromUrl(url);
  root.innerHTML = `<div class="art-wait"><p class="eyebrow">Finding the artwork</p></div>`;
  const o = await whenObject(id);
  hideLoader();
  if (root !== container) return null;
  if (!o) {
    root.innerHTML = `<div class="empty"><h2>That artwork isn’t in the open-access set</h2><p>It may have no public-domain image. <a href="./">Back to the wall</a></p></div>`;
    return null;
  }
  current = o; render(o);
  document.title = `${o[4]} · Gallery Wall`;
  return o;
}
export function leave() { offs.forEach(f => f()); offs = []; current = null; document.title = 'Gallery Wall' }

function render(o) {
  const artists = artistsOf(o);
  const r = o[2] / o[3];
  const dpi = Math.round(Math.min(o[3] / 9, o[2] / 6));
  const fit = r >= .58 && r <= .76 ? 'Close to 2:3. It fits a 6×9 cover with little cropping.'
    : r < .58 ? 'Taller than 2:3. A 6×9 crop trims the top and bottom.' : 'Wider than 2:3. A 6×9 crop trims the sides, or the whole image can wrap around the spine.';
  const tag = (k, list, f) => list.map(i => `<button type="button" data-f="${f}" data-v="${i}">${esc(T[k][i])}</button>`).join('');
  root.innerHTML = `
  <article class="art">
    <div class="art-stage">
      <a class="hero-slot" href="${fullUrl(o[1])}" target="_blank" rel="noopener" style="aspect-ratio:${o[2]} / ${o[3]}; width:min(100%, calc(var(--stage-h) * ${r.toFixed(4)}))" aria-label="Open the full-resolution image in a new tab">
        <img alt="${esc(o[16] || o[4])}" decoding="async"><span class="crop" hidden></span>
      </a>
    </div>
    <div class="art-info">
      <p class="eyebrow reveal"><span>${esc(T.cls[o[9]])}</span><span class="mono">${esc(o[17])}</span></p>
      <h1 class="art-title reveal">${esc(o[4])}</h1>
      <p class="art-by reveal"><span>${artists.map(a => `<button type="button" class="linkish" data-artist="${esc(a)}">${esc(a)}</button>`).join(', ') || 'Unknown artist'}</span>${o[5] ? `<span class="date">${esc(o[5])}</span>` : ''}</p>
      <div class="art-actions reveal">
        <a class="btn primary" href="${fullUrl(o[1])}" target="_blank" rel="noopener">Full resolution</a>
        <a class="btn" href="https://www.nga.gov/collection/art-object-page.${o[0]}.html" target="_blank" rel="noopener">nga.gov</a>
        <button class="btn" type="button" id="crop-toggle" aria-pressed="false">6×9 crop</button>
      </div>
      <div class="art-boards reveal"><span class="label">Save to board</span><div class="chips" id="art-boards"></div></div>
      <div class="print reveal">
        <div class="row"><span>Full image</span><span>${o[2].toLocaleString()} × ${o[3].toLocaleString()} px</span></div>
        <div class="row"><span>Printed at 6 × 9 in</span><span class="${dpi >= 300 ? 'good' : 'low'}">${dpi} dpi${dpi >= 300 ? ', print-ready' : ', under 300'}</span></div>
        <p>${fit}</p>
      </div>
      <dl class="facts reveal">
        ${o[10] ? `<dt>Medium</dt><dd>${esc(o[10])}</dd>` : ''}
        ${o[8].length ? `<dt>Nationality</dt><dd>${o[8].map(i => esc(T.nat[i])).join(', ')}</dd>` : ''}
        ${o[18] ? `<dt>Credit</dt><dd>${esc(o[18])}</dd>` : ''}
      </dl>
      ${o[11].length + o[13].length + o[14].length ? `<div class="tags reveal">${tag('style', o[11], 'style')}${tag('tech', o[13], 'tech')}${tag('theme', o[14], 'theme')}</div>` : ''}
      ${o[16] ? `<p class="alt reveal">${esc(o[16])}<small>Description written by the National Gallery for accessibility.</small></p>` : ''}
      <p class="fine reveal">The National Gallery marks this image open access (CC0), so you can use it on a commercial cover without asking. Crediting “National Gallery of Art, Washington” is courteous but not required.</p>
    </div>
  </article>
  <section class="related"><h2 class="reveal">More like this</h2><div class="wall" id="related"></div></section>`;

  // the hero image: a plane flies in from the wall (main.js) or appears here; <img> is the fallback
  if (!(gl.ok && gl.imagesOk)) { const img = root.querySelector('.hero-slot img'); img.src = heroUrl(o[1]); img.onload = () => img.classList.add('ok') }

  renderBoards();
  const crop = root.querySelector('.crop'), slot = root.querySelector('.hero-slot');
  const drawCrop = () => {
    if (crop.hidden) return;
    const w = slot.clientWidth, h = slot.clientHeight;
    let fw = w, fh = w / COVER; if (fh > h) { fh = h; fw = h * COVER }
    Object.assign(crop.style, { width: fw + 'px', height: fh + 'px', left: (w - fw) / 2 + 'px', top: (h - fh) / 2 + 'px' });
  };
  addEventListener('resize', drawCrop); offs.push(() => removeEventListener('resize', drawCrop));
  root.querySelector('#crop-toggle').addEventListener('click', e => {
    crop.hidden = !crop.hidden; e.currentTarget.setAttribute('aria-pressed', !crop.hidden); drawCrop();
  });
  root.addEventListener('click', e => {
    const t = e.target.closest('button'); if (!t) return;
    if (t.dataset.artist) setFilters({ artist: t.dataset.artist });
    else if (t.dataset.f) setFilters({ [t.dataset.f]: t.dataset.v });
    else if (t.dataset.k) {
      const added = toggle(t.dataset.k, current); renderBoards();
      toast(added ? `Saved to ${boards[t.dataset.k].name}` : `Removed from ${boards[t.dataset.k].name}`);
    }
  });
  root.addEventListener('submit', e => {
    e.preventDefault(); const input = root.querySelector('#art-nb');
    const k = create(input.value); if (!k) return;
    toggle(k, current); renderBoards(); toast('Saved to ' + boards[k].name);
  });

  const rel = new Masonry(root.querySelector('#related'));
  bindSaves(root.querySelector('#related'), get);
  for (const id of related(o, 12)) { const x = get(id); rel.add({ id, u: x[1], w: x[2], h: x[3], title: x[4], artist: artistsOf(x).join(', '), date: x[5] }) }
  if (!rel.count) root.querySelector('.related').hidden = true;
}
function renderBoards() {
  const box = root.querySelector('#art-boards');
  box.innerHTML = keys().map(k => `<button type="button" class="chip" data-k="${k}" aria-pressed="${inBoard(k, current[0])}">${esc(boards[k].name)}</button>`).join('') +
    `<form class="newboard"><input id="art-nb" placeholder="New board" aria-label="New board name" autocomplete="off"><button class="linkish" type="submit">Add</button></form>`;
}
