/* Service Worker para modo offline */
const CACHE_NAME = 'quantix-ciencias-v2';  // sube la versión al cambiar assets

const ASSETS = [
  './',
  './index.html',
  './manifest.json',

  // CSS
  './css/vistas.css',
  './css/responsive.css',
  './css/layout.css',
  './css/base.css',
  './css/componentes.css',

  // IMÁGENES
  './images/Quantix.png',

  // JS raíz
  './js/app.js',
  './js/datos.js',
  './js/offline.js',
  './js/quiz.js',

  // JS core
  './js/core/router.js',
  './js/core/storage.js',
  './js/core/utils.js',

  // JS data
  './js/data/ciencias.js',
  './js/data/contexto.js',
  './js/data/fisica.js',
  './js/data/herramientas.js',
  './js/data/matematicas.js',
  './js/data/probabilidad.js',
  './js/data/quimica.js',
  './js/data/quizzes.js'
];

// Instalación: precachea todo
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activación: limpia cachés viejos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first con fallback a red
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});