#!/usr/bin/env python3
"""Build data/related.json: for a search word, the other words that should also find art.

    pip install nltk   # and put WordNet where NLTK can find it (NLTK_DATA)
    python3 tools/related.py data

Two sources, both filtered to words the collection actually uses:
  1. tools/themes.py, hand-written theme links (werewolf -> wolf, beast, moon ...)
  2. WordNet, for the rest: other names for a word, kinds of it (animal -> horse, dog ...),
     its parent (wolf -> canine) and siblings (wolf -> fox, jackal). Only a word's most common
     sense is used, so "dog" doesn't bring in hot dogs.
Output: {"w": {word: [[alt, weight], ...]}}. The page matches alts as whole words (not prefixes).
"""
import collections, json, os, re, sys, unicodedata
sys.path.insert(0, os.path.dirname(__file__))
from themes import THEMES
from nltk.corpus import wordnet as wn

DATA = sys.argv[1] if len(sys.argv) > 1 else 'data'
def toks(s):
    s = unicodedata.normalize('NFD', str(s or ''))
    s = ''.join(c for c in s if not unicodedata.combining(c)).lower()
    return [t for t in re.split(r'[^0-9a-zÀ-￿]+', s) if t]

meta = json.load(open(os.path.join(DATA, 'meta.json'))); T = meta['tables']
df = collections.Counter()  # how many works use each word
for fn in meta['chunks']:
    for o in json.load(open(os.path.join(DATA, fn))):
        text = ' '.join([o[4], o[10] or '', ' '.join(T['theme'][t] for t in o[14]), o[15], o[16]])
        df.update(set(toks(text)))
vocab = {w for w, n in df.items() if n >= 2 and len(w) > 2 and not w.isdigit()}

# surface forms in the collection for each base word: wolf -> wolf, wolves
forms = collections.defaultdict(set)
for w in vocab:
    forms[w].add(w)
    b = wn.morphy(w, wn.NOUN)
    if b and b != w: forms[b].add(w)
def surf(w): return forms.get(w, set()) | ({w} if w in vocab else set())

# too general to help as a "parent" or "sibling" hop
GENERIC = set('entity object thing whole being organism person people artifact artefact structure matter unit '
              'group part substance abstraction act event state attribute relation measure location region area '
              'device instrumentality container covering creation line form shape body worker adult male female '
              'animal chordate vertebrate mammal placental carnivore causal_agent living_thing physical_entity '
              'material way article commodity young entire human'.split())

def wn_links(word):
    ss = wn.synsets(word, wn.NOUN)
    if not ss: return {}
    s = ss[0]
    if not any(l.name().lower() == word for l in s.lemmas()): return {}
    out = {}
    near = {s} | set(s.closure(lambda x: x.hyponyms())) | set(s.hypernyms())
    near |= {x for h in s.hypernyms() for x in h.hyponyms()}
    def put(w, x):
        w = w.lower()
        if '_' in w or '-' in w or w == word or w in GENERIC: return
        # only when that word mostly means this: "painter" is a cougar, but mostly it's an artist
        p = wn.synsets(w)
        if not p or p[0] not in near: return
        for f in surf(w): out[f] = max(out.get(f, 0), x)
    for l in s.lemmas(): put(l.name(), .8)
    kinds = sorted({l.name().lower() for h in s.closure(lambda x: x.hyponyms()) for l in h.lemmas()},
                   key=lambda w: -df.get(w, 0))
    for w in [w for w in kinds if surf(w)][:24]: put(w, .55)
    for h in s.hypernyms():
        if h.lemmas()[0].name().lower() in GENERIC: continue
        for l in h.lemmas(): put(l.name(), .3)
        sibs = sorted({l.name().lower() for x in h.hyponyms() if x != s for l in x.lemmas()}, key=lambda w: -df.get(w, 0))
        for w in [w for w in sibs if surf(w)][:10]: put(w, .3)
    return out

rel = {}
# words worth a lookup: anything in the collection, plus common English nouns (WordNet's usage counts)
keys = {w for w in wn.all_lemma_names(wn.NOUN) if w.isalpha() and len(w) > 2 and
        (w in vocab or w in forms or sum(l.count() for l in wn.lemmas(w, wn.NOUN)) > 0)}
for w in sorted(keys):
    m = wn_links(w)
    if m: rel[w] = m
for k, (close, near, broad) in THEMES.items():
    m = rel.setdefault(k, {})
    for words, x in ((close, .8), (near, .55), (broad, .3)):
        for w in words.split():
            for f in surf(w) | ({w} if w in vocab else set()):
                if f != k: m[f] = max(m.get(f, 0), x)
# a plural query should behave like its singular: "wolves" gets wolf's links too
for base, fs in forms.items():
    if base in rel:
        for f in fs:
            if f != base:
                m = rel.setdefault(f, {})
                for a, x in rel[base].items():
                    if a != f: m[a] = max(m.get(a, 0), x)
                if base in vocab: m[base] = max(m.get(base, 0), .95)

out = {k: sorted([[a, x] for a, x in v.items()], key=lambda p: (-p[1], -df.get(p[0], 0)))[:30] for k, v in sorted(rel.items()) if v}
json.dump({'w': out}, open(os.path.join(DATA, 'related.json'), 'w'), separators=(',', ':'))
print(len(out), 'words,', os.path.getsize(os.path.join(DATA, 'related.json')) // 1024, 'KB')
for q in ('werewolf', 'animal', 'wolf', 'vampire', 'cat'):
    print(q, '->', ' '.join(a for a, _ in out.get(q, [])[:25]))
