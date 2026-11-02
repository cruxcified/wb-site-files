// Cover Studio's document model and the one function that draws it.
// Ported from Scriptorium's Cover Maker (src/utils/coverDesign.js and printCover.js): the same draw paints
// the on-screen preview and the 300 ppi export, so what is seen is what prints.
//
// A sheet is a row of panels, left to right (back, spine, front for a wrap), with bleed round the outside.
// A design is a stack of layers, bottom first. Each layer belongs to one region (a panel, or the whole
// sheet), is clipped to it, and is placed by its centre relative to the region's centre, in inches. So
// when the spine widens, the front's layers move with the front instead of drifting over the fold.

export const TRIMS = {
  '5x8': [5, 8], '5.25x8': [5.25, 8], '5.5x8.5': [5.5, 8.5], '6x9': [6, 9], '7x10': [7, 10], '8x10': [8, 10],
};
// Scriptorium's per-page estimate, typical of the cream stock POD novels are printed on. The printer's own
// spine calculator is the figure that counts; it can be typed in over this.
export const INCHES_PER_PAGE = 0.0025;
export const estimateSpine = pages => Math.round(Math.max(0, +pages || 0) * INCHES_PER_PAGE * 1000) / 1000;
export const MIN_LETTERED_SPINE = 0.25; // under this the fold can land anywhere on the lettering (about 100 pages)

const wrap = (back, spine, front) => [['back', 'Back', back], ['spine', 'Spine', spine], ['front', 'Front', front]];

export const FORMATS = [
  { key: 'ebook', group: 'Books', name: 'Ebook cover', note: '1600 × 2560 px, the size Kindle and Apple Books ask for.',
    panels: [['front', 'Front', 5]], h: 8, bleed: 0, safe: .2, ppi: 320 },
  { key: 'paperback', group: 'Books', name: 'Paperback wrap', note: 'Back, spine and front on one sheet with 0.125″ bleed, the way Blurb, KDP and IngramSpark take a softcover.',
    paperback: true, bleed: .125, safe: .25, ppi: 300 },
];
export const formatOf = key => FORMATS.find(f => f.key === key) || FORMATS[0];

// opts (paperback only): {trim, pages, spine}. spine > 0 is the printer's figure; otherwise it is estimated.
export function spineOf(opts = {}) {
  const typed = +opts.spine;
  return typed > 0 ? { inches: typed, source: 'printer' } : { inches: estimateSpine(opts.pages ?? 300), source: 'estimate' };
}

export function geometry(f, opts = {}) {
  let panels = f.panels, h = f.h;
  if (f.paperback) {
    const [w, th] = TRIMS[opts.trim] || TRIMS['6x9'];
    panels = wrap(w, Math.max(spineOf(opts).inches, .01), w); h = th;
  }
  const b = f.bleed, P = {}, folds = [];
  let x = 0;
  panels.forEach(([key, label, w], i) => {
    const pw = w + (i === 0 ? b : 0) + (i === panels.length - 1 ? b : 0);
    if (i > 0) folds.push(x);
    P[key] = { key, label, x, w: pw, trimW: w };
    x += pw;
  });
  return { width: x, height: h + 2 * b, trimH: h, bleed: b, safe: f.safe, panels: P, order: panels.map(p => p[0]), folds, ppi: f.ppi };
}

export function regions(g) {
  return [['all', g.order.length > 1 ? 'Whole sheet' : 'Whole cover'], ...g.order.map(k => [k, g.panels[k].label])].filter((r, i, a) => a.length > 2 || r[0] !== 'all');
}
export function regionBox(g, region) {
  const p = g.panels[region];
  return p ? { x: p.x, y: 0, w: p.w, h: g.height } : { x: 0, y: 0, w: g.width, h: g.height };
}

// The lines a moved layer's edges and centre lock to: the sheet's edges, the trim, the folds, the safe
// areas and each panel's centre.
export function snapTargets(g) {
  const s = g.safe, b = g.bleed;
  const xs = [0, b, b + s, g.width - b - s, g.width - b, g.width, g.width / 2];
  for (const f of g.folds) xs.push(f - s, f, f + s);
  for (const k of g.order) xs.push(g.panels[k].x + g.panels[k].w / 2);
  const ys = [0, b, b + s, g.height / 2, g.height - b - s, g.height - b, g.height];
  return { xs, ys };
}
export function snapBox(cx, cy, w, h, g, tol) {
  const { xs, ys } = snapTargets(g);
  const best = (c, size, lines) => {
    let hit = null;
    for (const edge of [c - size / 2, c, c + size / 2]) for (const t of lines) {
      const d = t - edge;
      if (Math.abs(d) <= tol && (!hit || Math.abs(d) < Math.abs(hit.d))) hit = { d, line: t };
    }
    return hit;
  };
  const sx = best(cx, w, xs), sy = best(cy, h, ys);
  return { cx: cx + (sx ? sx.d : 0), cy: cy + (sy ? sy.d : 0), lineX: sx?.line, lineY: sy?.line };
}

/* ---------- layers ---------- */
let seq = 0;
export const uid = () => 'l' + Date.now().toString(36) + (seq++).toString(36);

export function newLayer(type, extra = {}) {
  const base = { id: uid(), type, visible: true, region: 'front', x: 0, y: 0, opacity: 1 };
  if (type === 'image') return { ...base, name: 'Image', src: null, w: 5, blur: 0, ...extra };
  if (type === 'fill') return { ...base, name: 'Colour', color: '#000000', opacity: .35, fade: 'none', ...extra };
  return {
    ...base, name: 'Text', text: 'Title', font: 'GW Jenson Display', size: 48, color: '#f3ede2',
    weight: 400, italic: false, caps: false, align: 'center', tracking: 0, leading: 1.15, rotate: 0, boxW: 0,
    shadow: { on: false, x: 0, y: 2, blur: 8, color: '#000000', opacity: .6 },
    ...extra,
  };
}

const rgba = (hex, a) => {
  const c = String(hex || '#000').replace('#', '');
  const n = parseInt(c.length === 3 ? c.split('').map(d => d + d).join('') : c, 16) || 0;
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
};
export const cropOf = l => { const c = l.crop || {}; return { x0: c.x0 ?? 0, y0: c.y0 ?? 0, x1: c.x1 ?? 1, y1: c.y1 ?? 1 } };
export const textFont = (l, px) => `${l.italic ? 'italic ' : ''}${l.weight || 400} ${px}px "${l.font}", "GW Jenson", Georgia, serif`;

// A text layer's lines, each a list of runs {t, it}. Words between asterisks flip the layer's italic
// (*like this*). With a box width set (boxW, inches) each paragraph wraps to it, as back-cover copy is set.
function textLines(l, ctx, px) {
  const t = l.caps ? String(l.text || '').toUpperCase() : String(l.text || '');
  const limit = l.boxW > 0 && ctx ? l.boxW * (px / (l.size / 72)) : Infinity;
  let it = !!l.italic;
  const out = [];
  for (const p of t.split('\n')) {
    const words = [[]];
    p.split('*').forEach((seg, i) => {
      if (i > 0) it = !it;
      for (const part of seg.split(/(\s+)/)) {
        if (!part) continue;
        if (/^\s+$/.test(part)) { if (words[words.length - 1].length) { words.push([]); words[words.length - 1].gap = part } }
        else words[words.length - 1].push({ t: part, it });
      }
    });
    let line = [];
    for (const w of words.filter(x => x.length)) {
      const next = line.length ? [...line, { t: w.gap || ' ', it: w[0].it }, ...w] : w;
      if (line.length && runsWidth(l, ctx, px, next) > limit) { out.push(line); line = w } else line = next;
    }
    out.push(line);
  }
  return out;
}
function runsWidth(l, ctx, px, runs) {
  if (!ctx) return 0;
  let w = 0;
  for (const r of runs) { ctx.font = textFont({ ...l, italic: r.it }, px); w += ctx.measureText(r.t).width }
  ctx.font = textFont(l, px);
  return w;
}

// Where a layer sits, in inches on the sheet: centre, size, rotation. images maps layer id -> <img>.
export function layerBounds(ctx, l, g, images) {
  const r = regionBox(g, l.region);
  const cx = r.x + r.w / 2 + l.x, cy = r.y + r.h / 2 + l.y;
  if (l.type === 'fill') return { cx: r.x + r.w / 2, cy: r.y + r.h / 2, w: r.w, h: r.h, rotate: 0 };
  if (l.type === 'image') {
    const img = images[l.id], c = cropOf(l);
    const ratio = img?.naturalWidth ? (img.naturalHeight * (c.y1 - c.y0)) / (img.naturalWidth * (c.x1 - c.x0)) : (l.ratio || 1);
    return { cx, cy, w: l.w, h: l.w * ratio, rotate: 0 };
  }
  const px = 100;
  ctx.save();
  ctx.font = textFont(l, px);
  ctx.letterSpacing = `${(l.tracking || 0) * px}px`;
  const all = textLines(l, ctx, px);
  const widest = Math.max(...all.map(r => runsWidth(l, ctx, px, r)), 1);
  ctx.restore();
  return { cx, cy, w: l.boxW > 0 ? l.boxW : widest * (l.size / 72) / px, h: (l.size / 72) * l.leading * all.length, rotate: l.rotate || 0 };
}

// Paint the design at ppi pixels per inch.
export function drawDesign(ctx, design, g, ppi, images) {
  ctx.save();
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.fillStyle = design.background || '#ffffff';
  ctx.fillRect(0, 0, g.width * ppi, g.height * ppi);
  for (const l of design.layers) {
    if (!l.visible) continue;
    const r = regionBox(g, l.region), b = layerBounds(ctx, l, g, images);
    ctx.save();
    ctx.beginPath(); ctx.rect(r.x * ppi, r.y * ppi, r.w * ppi, r.h * ppi); ctx.clip();
    ctx.globalAlpha = l.opacity ?? 1;
    if (l.type === 'fill') {
      if (l.fade === 'top' || l.fade === 'bottom') {
        const grad = ctx.createLinearGradient(0, r.y * ppi, 0, (r.y + r.h) * ppi);
        const solid = rgba(l.color, 1), clear = rgba(l.color, 0), top = l.fade === 'top';
        grad.addColorStop(0, top ? solid : clear);
        grad.addColorStop(top ? .55 : .45, clear);
        grad.addColorStop(1, top ? clear : solid);
        ctx.fillStyle = grad;
      } else ctx.fillStyle = l.color;
      ctx.fillRect(r.x * ppi, r.y * ppi, r.w * ppi, r.h * ppi);
    } else if (l.type === 'image') {
      const img = images[l.id];
      if (img?.naturalWidth) {
        const c = cropOf(l), nw = img.naturalWidth, nh = img.naturalHeight;
        const args = [img, c.x0 * nw, c.y0 * nh, (c.x1 - c.x0) * nw, (c.y1 - c.y0) * nh, (b.cx - b.w / 2) * ppi, (b.cy - b.h / 2) * ppi, b.w * ppi, b.h * ppi];
        // a blur fades the picture's own edges, which would print as a dark rim; the sharp copy under it keeps them solid
        if (l.blur > 0) { ctx.drawImage(...args); ctx.filter = `blur(${(l.blur / 72) * ppi}px)` }
        ctx.drawImage(...args);
      }
    } else {
      const px = (l.size / 72) * ppi;
      ctx.translate(b.cx * ppi, b.cy * ppi);
      ctx.rotate(((l.rotate || 0) * Math.PI) / 180);
      ctx.font = textFont(l, px);
      ctx.letterSpacing = `${(l.tracking || 0) * px}px`;
      ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      ctx.fillStyle = l.color;
      const s = l.shadow || {};
      if (s.on) {
        ctx.shadowColor = rgba(s.color, s.opacity ?? .6);
        ctx.shadowOffsetX = (s.x / 72) * ppi; ctx.shadowOffsetY = (s.y / 72) * ppi; ctx.shadowBlur = (s.blur / 72) * ppi;
      }
      const lines = textLines(l, ctx, px), lh = px * l.leading;
      const ax = l.align === 'left' ? -b.w / 2 * ppi : l.align === 'right' ? b.w / 2 * ppi : 0;
      lines.forEach((runs, i) => {
        const w = runsWidth(l, ctx, px, runs);
        let x = ax - (l.align === 'left' ? 0 : l.align === 'right' ? w : w / 2);
        const y = (i - (lines.length - 1) / 2) * lh;
        for (const r of runs) { ctx.font = textFont({ ...l, italic: r.it }, px); ctx.fillText(r.t, x, y); x += ctx.measureText(r.t).width }
      });
    }
    ctx.restore();
  }
  ctx.restore();
}

export const designFonts = design => design.layers.filter(l => l.type === 'text' && l.visible)
  .flatMap(l => [textFont(l, 40), textFont({ ...l, italic: !l.italic }, 40)]);

// Pixels per inch a picture prints at once it covers the box it fills.
export const effectivePpi = (imgW, imgH, boxW, boxH) => imgW > 0 && boxW > 0 ? Math.round(Math.min(imgW / boxW, imgH / boxH)) : 0;

// Size and crop an image layer to cover (fill) or sit inside (fit) its region, centred.
export function placeImage(l, g, imgW, imgH, mode = 'fill') {
  const r = regionBox(g, l.region), a = imgW / imgH, ra = r.w / r.h;
  l.x = 0; l.y = 0;
  if (mode === 'fit') { l.crop = null; l.w = a > ra ? r.w : r.h * a; return l }
  if (a > ra) { const keep = ra / a; l.crop = { x0: (1 - keep) / 2, x1: (1 + keep) / 2, y0: 0, y1: 1 } }
  else { const keep = a / ra; l.crop = { x0: 0, x1: 1, y0: (1 - keep) / 2, y1: (1 + keep) / 2 } }
  l.w = r.w;
  return l;
}

// The starting design for a format: the artwork across the front, a scrim, title and credit lines, and
// on a wrap a spine title, back copy and the art credit. `art` = {src, title, artist, date, w, h}.
export function starter(f, g, art, bg = '#1d1a17') {
  const layers = [], front = g.panels.front, frontH = g.height, isWrap = g.order.length > 1;
  const pt = inches => Math.round(inches * 72);
  const img = newLayer('image', { name: 'Artwork', region: 'front', src: art.src, ratio: art.h / art.w });
  placeImage(img, g, art.w, art.h, 'fill'); img.fit = 'fill';
  layers.push(img);
  layers.push(newLayer('fill', { name: 'Shade', region: 'front', color: '#000000', opacity: .55, fade: 'bottom' }));
  const W = front.trimW, title = 'The Book Title';
  layers.push(newLayer('text', { name: 'Title', region: 'front', text: title, size: pt(W * .13), y: frontH * .2, boxW: W * .82, leading: 1.05, shadow: { on: true, x: 0, y: 2, blur: 14, color: '#000000', opacity: .45 } }));
  layers.push(newLayer('text', { name: 'Author', region: 'front', text: 'Author Name', font: 'GW Jenson', size: pt(W * .06), tracking: .04, y: frontH * .36 }));
  if (isWrap && g.panels.spine) {
    const sp = g.panels.spine;
    if (sp.trimW >= MIN_LETTERED_SPINE) {
      layers.push(newLayer('text', { name: 'Spine title', region: 'spine', text: title, size: Math.max(6, Math.min(pt(sp.trimW * .45), 18)), rotate: 90, caps: true, tracking: .12, font: 'Geist', weight: 500 }));
    }
  }
  if (isWrap && g.panels.back && g.panels.back.trimW > 1.5) {
    const B = g.panels.back.trimW;
    layers.push(newLayer('text', { name: 'Back copy', region: 'back', font: 'GW Jenson', size: Math.max(8, pt(B * .028)), boxW: B * .74, leading: 1.4, align: 'left', y: -frontH * .12,
      text: 'A few lines of back-cover copy go here. Words between *asterisks* are set in italic.' }));
  }
  const credit = `Cover: ${art.artist ? art.artist + ', ' : ''}*${art.title}*${art.date ? ', ' + art.date : ''}. National Gallery of Art, Washington.`;
  const creditRegion = isWrap && g.panels.back?.trimW > 1.5 ? 'back' : null;
  if (creditRegion) {
    const B = g.panels.back.trimW;
    layers.push(newLayer('text', { name: 'Art credit', region: 'back', text: credit, font: 'GW Jenson Caption', size: Math.max(6, pt(B * .016)), boxW: B * .74, align: 'left', leading: 1.3, color: '#d9d2c5', y: frontH * .3 }));
  }
  return { background: bg, layers };
}
