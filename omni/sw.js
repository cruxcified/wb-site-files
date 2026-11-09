// omni's service worker: it keeps omni working with no connection.
// The build (vite.config.js) copies this to dist/sw.js and fills in VERSION.
//
// The app shell (the page, its script and styles) is cached on install and
// replaced as a whole on each deploy. Samples and textures are cached the
// first time they're played or seen, and kept across deploys, so you only
// ever download each one once. "save for offline" on the start screen
// fetches the rest.

const VERSION = 'e4f0371502fc';
const SHELL = `omni-shell-${VERSION}`;
const MEDIA = 'omni-media';
const scope = new URL(self.registration.scope);
const local = (path) => new URL(path, scope).href;

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const response = await fetch(local('offline.json'), { cache: 'no-store' });
    const cache = await caches.open(SHELL);
    await cache.put(local('offline.json'), response.clone());
    const { shell } = await response.json();
    await cache.addAll(shell.map((path) => new Request(local(path), { cache: 'reload' })));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter((name) => name.startsWith('omni-shell-') && name !== SHELL).map((name) => caches.delete(name)));
    // Drop samples a new deploy no longer has, so the cache doesn't grow forever.
    try {
      const { packs } = await (await fetch(local('offline.json'), { cache: 'no-store' })).json();
      const wanted = new Set(Object.values(packs).flatMap((pack) => pack.files.map(local)));
      const media = await caches.open(MEDIA);
      const keys = await media.keys();
      await Promise.all(keys.filter((request) => !wanted.has(request.url)).map((request) => media.delete(request)));
    } catch {
      // Offline while activating: tidy up next time.
    }
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || !request.url.startsWith(scope.href)) return;
  const path = request.url.slice(scope.href.length).split(/[?#]/)[0];
  if (path === 'sw.js') return;
  // The file list: fresh when online, the last copy when not.
  if (path === 'offline.json') {
    event.respondWith(fetch(request).then((response) => {
      const copy = response.clone();
      event.waitUntil(caches.open(SHELL).then((cache) => cache.put(local('offline.json'), copy)));
      return response;
    }).catch(() => caches.match(local('offline.json'))));
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(caches.match(local('./'), { cacheName: SHELL }).then((cached) => cached ?? fetch(request)));
    return;
  }
  const isMedia = path.includes('/') && !path.startsWith('assets/') && !path.startsWith('icons/');
  event.respondWith((async () => {
    const cached = await caches.match(request, { ignoreSearch: true });
    if (cached) return cached;
    const response = await fetch(request);
    if (isMedia && response.ok && response.status === 200) {
      const copy = response.clone();
      event.waitUntil(caches.open(MEDIA).then((cache) => cache.put(request.url.split(/[?#]/)[0], copy)));
    }
    return response;
  })());
});
