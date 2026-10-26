/* ============================================================
   Service Worker — Quantix Ciencias
   Estructura: raíz con index.html, sw.js, /css /js /images /views
   ============================================================ */

const CACHE_VERSION = 'v10'; // ⬅️ Sube este número cada vez que actualices
const CACHE_NAME = `quantix-ciencias-${CACHE_VERSION}`;

// Detecta la ruta base automáticamente (funciona en raíz o subcarpeta)
const BASE = self.registration.scope;

// Lista de assets a precachear
const ASSETS = [
  BASE,
  BASE + 'index.html',
  BASE + 'manifest.json',

  // CSS
  BASE + 'css/vistas.css',
  BASE + 'css/responsive.css',
  BASE + 'css/layout.css',
  BASE + 'css/base.css',
  BASE + 'css/componentes.css',

  // Imágenes
  BASE + 'images/Quantix.png',

  // JS raíz
  BASE + 'js/app.js',

  // Views
  BASE + 'views/matematicas/RectaNumerica.html',
  BASE + 'views/matematicas/RectaNumericaOperaciones.html',
  BASE + 'views/matematicas/graficandocuadraticas.html',
  BASE + 'views/matematicas/modelodeareas.html',
  BASE + 'views/matematicas/modeloalgebra.html',
  BASE + 'views/matematicas/aritmetica.html',
  BASE + 'views/ciencias/Transportedemembrana.html',
  BASE + 'views/ciencias/Densidad.html',
  BASE + 'views/ciencias/seleccionnatural.html',
  BASE + 'views/ciencias/expresiongenetica.html',
  BASE + 'views/quimica/BalanceoDeEcuaciones.html',
  BASE + 'views/quimica/Concentracion.html',
  BASE + 'views/quimica/ConstruyeunaMolecula.html',
  BASE + 'views/quimica/ConstruyeUnAtomo.html',
  BASE + 'views/quimica/EscaladepH.html',
  BASE + 'views/quimica/Estadosdelamateria.html',
  BASE + 'views/fisica/LabdeFuerzadeGravedad.html',


  // JS core
  BASE + 'js/core/router.js',
  BASE + 'js/core/storage.js',
  BASE + 'js/core/utils.js',

  // JS data
  BASE + 'js/data/ciencias.js',
  BASE + 'js/data/contexto.js',
  BASE + 'js/data/fisica.js',
  BASE + 'js/data/herramientas.js',
  BASE + 'js/data/matematicas.js',
  BASE + 'js/data/probabilidad.js',
  BASE + 'js/data/quimica.js',
  BASE + 'js/data/quizzes.js',
  BASE + 'js/data/soporte.js',
  BASE + 'js/data/simuladores.js',
  BASE + 'js/data/agente.js',
  BASE + 'js/data/tabla-periodica.js',
  BASE + 'js/data/ingles.js',
  BASE + 'js/data/lengua.js',

  // JS views
  BASE + 'js/views/home.js',
  BASE + 'js/views/soporte.js',
  BASE + 'js/views/materia.js',
  BASE + 'js/views/contexto.js',
  BASE + 'js/views/herramientas.js',
  BASE + 'js/views/simuladores.js',
  BASE + 'js/views/agente.js',
  BASE + 'js/views/tabla-periodica.js',
  BASE + 'js/views/vista-fisica.js',
  BASE + 'js/views/vista-quimica.js',
  BASE + 'js/views/vista-ingles.js',
  BASE + 'js/views/vista-matematicas.js',
  BASE + 'js/views/vista-ciencias.js',
  BASE + 'js/views/vista-quiz.js',
  BASE + 'js/views/vista-lengua.js',
];

/* ---------- INSTALL ---------- */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.all(
        ASSETS.map(url =>
          cache.add(url).catch(err => {
            console.warn('⚠️ No se pudo cachear:', url, err);
          })
        )
      );
    }).then(() => self.skipWaiting()) // Activa el nuevo SW de inmediato
  );
});

/* ---------- ACTIVATE ---------- */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(k => k !== CACHE_NAME)
          .map(k => {
            console.log('🧹 Borrando caché antigua:', k);
            return caches.delete(k);
          })
      ))
      .then(() => self.clients.claim()) // Toma control de las pestañas abiertas
  );
});

/* ---------- FETCH ---------- */
self.addEventListener('fetch', event => {
  const { request } = event;

  // Solo GET
  if (request.method !== 'GET') return;

  // Solo mismo origen (ignora Formspree, analytics, etc.)
  if (!request.url.startsWith(self.location.origin)) return;

  const url = new URL(request.url);

  // 🔹 Estrategia 1: HTML → network-first (siempre lo último, fallback offline)
  if (request.mode === 'navigate' || url.pathname.endsWith('.html')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          // Guarda copia actualizada
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then(r => r || caches.match(BASE + 'index.html')))
    );
    return;
  }

  // 🔹 Estrategia 2: Assets (CSS, JS, imágenes) → cache-first
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        // Cachea dinámicamente lo que no estaba en ASSETS
        if (response && response.status === 200 && response.type === 'basic') {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      }).catch(() => {
        // Si es imagen, devuelve un placeholder opcional
        if (request.destination === 'image') {
          return caches.match(BASE + 'images/Quantix.png');
        }
      });
    })
  );
});

/* ---------- MENSAJES (para avisar de actualización) ---------- */
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});