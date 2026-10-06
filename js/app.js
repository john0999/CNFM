/* ==========================================================
   APP - Punto de entrada
========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ===== Registrar rutas =====
  Router.registrar('home', (c) => VistaHome.render(c));
  
  Router.registrar('ciencias', (c, id) => {
    const hash = window.location.hash.replace('#/', '').split('/');
    VistaMateria.render(c, 'ciencias', id || null);
  });
  
  Router.registrar('matematicas', (c, id) => VistaMateria.render(c, 'matematicas', id || null));
  Router.registrar('fisica', (c, id) => VistaMateria.render(c, 'fisica', id || null));
  Router.registrar('probabilidad', (c, id) => VistaMateria.render(c, 'probabilidad', id || null));
  
  Router.registrar('quiz', (c, id) => VistaQuiz.render(c, id || null));
  Router.registrar('contexto', (c) => VistaContexto.render(c));
  Router.registrar('herramientas', (c) => VistaHerramientas.render(c));

  // ===== Iniciar router =====
  Router.iniciar();

  // ===== Menú móvil =====
  document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('activo');
  });

  // ===== Cerrar menú al hacer click en link =====
  document.querySelectorAll('.nav a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('nav').classList.remove('activo');
    });
  });

  // ===== Año en footer =====
  document.getElementById('anio').textContent = Utils.anioActual();

  // ===== Registrar Service Worker =====
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(() => console.log('✅ Service Worker registrado'))
      .catch(err => console.log('⚠️ SW error:', err));
  }
});