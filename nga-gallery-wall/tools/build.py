import csv, json, sys, collections, os, re
csv.field_size_limit(10**9)
D = sys.argv[1]; OUT = sys.argv[2]
def rows(f): return csv.DictReader(open(os.path.join(D, f), encoding='utf-8'))
img = {}
for r in rows('published_images.csv'):
    if r['viewtype'] == 'primary' and r['openaccess'] == '1':
        o = r['depictstmsobjectid']
        if o not in img or int(r['sequence'] or 0) < img[o][3]:
            img[o] = (r['uuid'], int(r['width'] or 0), int(r['height'] or 0), int(r['sequence'] or 0), r['assistivetext'] or '')
cons = {r['constituentid']: r for r in rows('constituents.csv')}
artists = collections.defaultdict(list)
for r in rows('objects_constituents.csv'):
    if r['roletype'] == 'artist' and r['objectid'] in img:
        artists[r['objectid']].append((int(r['displayorder'] or 0), r['constituentid']))
terms = collections.defaultdict(lambda: collections.defaultdict(list))
for r in rows('objects_terms.csv'):
    if r['objectid'] in img and r['term'] not in ('Keywords', 'Themes'):
        terms[r['objectid']][r['termtype']].append(r['term'])
# string tables to keep JSON small
tabs = {k: {} for k in ['artist', 'nat', 'cls', 'style', 'school', 'tech', 'theme']}
def t(k, v):
    d = tabs[k]
    if v not in d: d[v] = len(d)
    return d[v]
objs = []
for r in rows('objects.csv'):
    oid = r['objectid']
    if oid not in img: continue
    u, w, h, _, alt = img[oid]
    a = sorted(artists.get(oid, []))
    an = []; nats = []
    for _, cid in a[:3]:
        c = cons.get(cid)
        if not c: continue
        an.append(t('artist', c['forwarddisplayname'])); 
        if c['nationality']: nats.append(t('nat', c['nationality']))
    tm = terms.get(oid, {})
    by = r['beginyear']
    objs.append([
        int(oid), u, w, h, r['title'], r['displaydate'], int(by) if by.lstrip('-').isdigit() else None,
        an or ([t('artist', r['attribution'])] if r['attribution'] else []),
        sorted(set(nats)), t('cls', r['classification'] or 'Other'), r['medium'],
        [t('style', s) for s in tm.get('Style', [])],
        [t('school', s) for s in tm.get('School', [])][:2],
        [t('tech', s) for s in tm.get('Technique', [])][:4],
        [t('theme', s) for s in tm.get('Theme', [])][:6],
        ' '.join(tm.get('Keyword', [])[:20]), alt, r['accessionnum'], r['creditline'],
    ])
objs.sort(key=lambda o: o[0])
meta = {'fields': ['id','uuid','w','h','title','date','year','artists','nats','cls','medium','styles','schools','techs','themes','kw','alt','acc','credit'],
        'tables': {k: [x for x, _ in sorted(v.items(), key=lambda kv: kv[1])] for k, v in tabs.items()}, 'count': len(objs)}
os.makedirs(OUT, exist_ok=True)
N = 4
per = (len(objs) + N - 1) // N
meta['chunks'] = []
for i in range(N):
    fn = f'objects-{i}.json'
    json.dump(objs[i*per:(i+1)*per], open(os.path.join(OUT, fn), 'w'), ensure_ascii=False, separators=(',', ':'))
    meta['chunks'].append(fn)
json.dump(meta, open(os.path.join(OUT, 'meta.json'), 'w'), ensure_ascii=False, separators=(',', ':'))
print(len(objs), {k: len(v) for k, v in tabs.items()})
