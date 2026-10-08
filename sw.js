/* Service Worker para modo offline */
const CACHE_NAME = 'quantix-ciencias-v3';

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

  // views html
  './views/sim.html',
  './views/quimica/densidad.html',
  './views/quimica/modelosatomos.html',
  './views/quimica/molecula.html',

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
  './js/data/quizzes.js',
  './js/data/soporte.js'
];

// Instalación: precachea todo (tolerante a fallos)
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.all(
        ASSETS.map(url =>
          cache.add(url).catch(err => {
            console.warn('⚠️ No se pudo cachear:', url, err);
          })
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// Activación: limpia cachés viejos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch: cache-first con fallback a red
self.addEventListener('fetch', e => {
  // Ignora métodos que no sean GET (POST del formulario, etc.)
  if (e.request.method !== 'GET') return;

  // Ignora peticiones a otros dominios (Formspree, analytics, etc.)
  if (!e.request.url.startsWith(self.location.origin)) return;

  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request).catch(() => {
        // Fallback: si es navegación HTML y falla la red, sirve el index
        if (e.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});