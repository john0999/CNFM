/* ==========================================================
   ROUTER - Sistema de rutas hash-based SPA
========================================================== */

const Router = {
  rutas: {},
  rutaActual: '',

  // Registrar una ruta
  registrar(nombre, handler) {
    this.rutas[nombre] = handler;
  },

  // Navegar a una ruta
  ir(ruta, params = {}) {
    const hash = params.id ? `#/${ruta}/${params.id}` : `#/${ruta}`;
    window.location.hash = hash;
  },

  // Obtener ruta actual
  obtenerRuta() {
    const hash = window.location.hash.replace(/^#\//, '') || 'home';
    const [ruta, id] = hash.split('/');
    return { ruta, id };
  },

  // Ejecutar ruta actual
  async ejecutar() {
    const { ruta, id } = this.obtenerRuta();
    const handler = this.rutas[ruta] || this.rutas.home;
    
    this.rutaActual = ruta;
    this.actualizarNavActivo(ruta);
    
    const contenedor = document.getElementById('app');
    contenedor.innerHTML = '';
    
    await handler(contenedor, id);
  },

  // Marcar link activo
  actualizarNavActivo(ruta) {
    document.querySelectorAll('.nav a').forEach(a => {
      a.classList.toggle('activo', a.dataset.route === ruta);
    });
  },

  // Iniciar router
  iniciar() {
    window.addEventListener('hashchange', () => this.ejecutar());
    window.addEventListener('DOMContentLoaded', () => this.ejecutar());
  }
};