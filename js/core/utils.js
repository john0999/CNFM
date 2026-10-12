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
  }
};