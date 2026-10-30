// Boards live in this browser's localStorage. Export/import moves them between devices.
// board: {name, created, items:[{id,u,w,h,t,a,d}]}; items carry enough to draw before the index loads.
import { artistsOf } from './data.js';

const KEY = 'gw-boards', LAST = 'gw-last';
const ls = (() => { try { return window.localStorage } catch { return null } })();
const read = (k, d) => { try { return JSON.parse(ls.getItem(k)) ?? d } catch { return d } };
const write = (k, v) => { try { ls.setItem(k, JSON.stringify(v)) } catch {} };

export let boards = read(KEY, {});
const listeners = new Set();
export const onBoards = fn => (listeners.add(fn), () => listeners.delete(fn));
function save() { write(KEY, boards); listeners.forEach(fn => fn()) }
function ensureDefault() { if (!Object.keys(boards).length) boards.saved = { name: 'Saved', created: Date.now(), items: [] } }
ensureDefault();

export const keys = () => Object.keys(boards).sort((a, b) => boards[a].created - boards[b].created);
export function lastKey() { const k = read(LAST, null); return boards[k] ? k : keys()[0] }
export const setLast = k => write(LAST, k);
export const isSaved = id => Object.values(boards).some(b => b.items.some(x => x.id === id));
export const inBoard = (k, id) => !!boards[k]?.items.some(x => x.id === id);
export const savedCount = () => new Set(Object.values(boards).flatMap(b => b.items.map(x => x.id))).size;

const snap = o => ({ id: o[0], u: o[1], w: o[2], h: o[3], t: o[4], a: artistsOf(o).join(', '), d: o[5] });

// returns true when added, false when removed
export function toggle(k, o) {
  ensureDefault(); const b = boards[k]; const i = b.items.findIndex(x => x.id === o[0]);
  if (i >= 0) b.items.splice(i, 1); else b.items.unshift(snap(o));
  setLast(k); save(); return i < 0;
}
export function create(name) {
  name = name.trim(); if (!name) return null;
  const k = 'b' + Date.now().toString(36);
  boards[k] = { name, created: Date.now(), items: [] }; save(); return k;
}
export function remove(k) { delete boards[k]; ensureDefault(); save() }
export function rename(k, name) { if (boards[k] && name.trim()) { boards[k].name = name.trim(); save() } }

export const exportJson = () => JSON.stringify({ app: 'gallery-wall', version: 1, boards }, null, 1);
// merges boards from a file; items already on a board are kept once
export function importJson(text) {
  const data = JSON.parse(text);
  if (!data || typeof data.boards !== 'object') throw new Error('That file is not a Gallery Wall export.');
  let added = 0;
  for (const [k, b] of Object.entries(data.boards)) {
    if (!b || !Array.isArray(b.items)) continue;
    const target = boards[k] || (boards[k] = { name: String(b.name || 'Imported'), created: +b.created || Date.now(), items: [] });
    for (const it of b.items) if (it && Number.isFinite(it.id) && !target.items.some(x => x.id === it.id)) { target.items.push(it); added++ }
  }
  save(); return added;
}
