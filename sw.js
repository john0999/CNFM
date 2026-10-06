/* Service Worker para modo offline */
const CACHE_NAME = 'emsad-ciencias-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/css/estilos.css',
  '/js/datos.js',
  '/js/app.js',
  '/js/quiz.js',
  '/js/offline.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});