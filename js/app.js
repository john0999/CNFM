/* ==========================================================
   APP - Punto de entrada (actualizado para Router v2)
========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ===== Registrar rutas con títulos =====
  Router.registrar('home', 
    (c) => VistaHome.render(c),
    { titulo: 'Inicio' }
  );

  Router.registrar('ciencias', 
    (c, params) => VistaMateria.render(c, 'ciencias', params),
    { titulo: 'Ciencias Naturales' }
  );

  Router.registrar('quimica', 
    (c, params) => VistaMateria.render(c, 'quimica', params),
    { titulo: 'Química' }
  );
  
  Router.registrar('matematicas', 
    (c, params) => VistaMateria.render(c, 'matematicas', params),
    { titulo: 'Matemáticas' }
  );

  Router.registrar('fisica', 
    (c, params) => VistaMateria.render(c, 'fisica', params),
    { titulo: 'Física' }
  );

  Router.registrar('probabilidad', 
    (c, params) => VistaMateria.render(c, 'probabilidad', params),
    { titulo: 'Probabilidad y Estadística' }
  );

  Router.registrar('quiz', 
    (c, params) => VistaQuiz.render(c, params),
    { titulo: 'Quiz Interactivo' }
  );

  Router.registrar('contexto', 
    (c) => VistaContexto.render(c),
    { titulo: 'Contexto Chiapas' }
  );

  Router.registrar('herramientas', 
    (c) => VistaHerramientas.render(c),
    { titulo: 'Herramientas' }
  );

  // ===== Iniciar router =====
  Router.iniciar();

  // ===== Menú móvil =====
  document.getElementById('menuBtn')?.addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('activo');
  });

  // ===== Cerrar menú al hacer click en link =====
  document.querySelectorAll('.nav a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('nav').classList.remove('activo');
    });
  });

  // ===== Año en footer =====
  const anioEl = document.getElementById('anio');
  if (anioEl) anioEl.textContent = Utils.anioActual();

  // ===== Registrar Service Worker =====
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(() => console.log('✅ Service Worker registrado'))
      .catch(err => console.log('⚠️ SW error:', err));
  }
});