/* ==========================================================
   UTILS - Funciones auxiliares
========================================================== */

const Utils = {
  // Crear elemento con HTML
  crear(tag, clases = [], html = '') {
    const el = document.createElement(tag);
    if (clases.length) el.classList.add(...clases);
    if (html) el.innerHTML = html;
    return el;
  },

  // Renderizar HTML en un contenedor
  render(contenedor, html) {
    if (typeof contenedor === 'string') {
      contenedor = document.getElementById(contenedor);
    }
    if (contenedor) contenedor.innerHTML = html;
  },

  // Scroll suave a un elemento
  scrollA(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  },

  // Colores por semestre
  colorSemestre(num) {
    const colores = {
      1: '#c19a2e', 2: '#b8204a', 3: '#4f7d7a',
      4: '#a98f4f', 5: '#7a1f2e', 6: '#14614a'
    };
    return colores[num] || '#0d9488';
  },

  // Debounce para búsquedas
  debounce(fn, delay = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  },

  // Normalizar texto para búsqueda
  normalizar(texto) {
    return texto.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  },

  // Año actual
  anioActual() {
    return new Date().getFullYear();
  },

  // ===== MODO DESARROLLADOR =====
  // Desbloquea todos los temas y niveles para revisar el contenido.
  // Solo afecta a este navegador y no modifica el avance guardado.
  PIN_DESARROLLADOR: '2026', // ⬅️ Cámbialo por el PIN que quieras

  modoDesarrollador() {
    try { return localStorage.getItem('quantix_modo_desarrollador') === '1'; } catch { return false; }
  },

  activarModoDesarrollador(pin) {
    if (String(pin).trim() !== this.PIN_DESARROLLADOR) return false;
    try { localStorage.setItem('quantix_modo_desarrollador', '1'); } catch { return false; }
    this.mostrarAvisoDesarrollador();
    return true;
  },

  desactivarModoDesarrollador() {
    try { localStorage.removeItem('quantix_modo_desarrollador'); } catch {}
    this.mostrarAvisoDesarrollador();
  },

  // Franja fija que avisa que el modo desarrollador está activo
  mostrarAvisoDesarrollador() {
    let aviso = document.getElementById('avisoModoDesarrollador');
    if (!this.modoDesarrollador()) {
      aviso?.remove();
      return;
    }
    if (aviso) return;
    aviso = document.createElement('div');
    aviso.id = 'avisoModoDesarrollador';
    aviso.className = 'aviso-desarrollador';
    aviso.innerHTML = `
      <span>🛠️ <strong>Modo desarrollador activo:</strong> todos los temas están desbloqueados.</span>
      <button type="button">Desactivar</button>
    `;
    aviso.querySelector('button').addEventListener('click', () => {
      this.desactivarModoDesarrollador();
      Router.ejecutar();
    });
    document.body.appendChild(aviso);
  }
};