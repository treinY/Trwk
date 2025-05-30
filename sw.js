const CACHE_NAME = 'tr-project-cache-v1';
const urlsToCache = [
  'page1.html',
  'page2.html',
  /* လိုအပ်သော CSS, JS နှင့် image ဖိုင်များ */
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});