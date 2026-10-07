/* ==========================================================
   STORAGE - Persistencia con localStorage
========================================================== */

const Storage = {
  KEYS: {
    PROGRESO: 'emsad_progreso',
    FAVORITOS: 'emsad_favoritos',
    QUIZ_RESULTADOS: 'emsad_quiz_resultados',
    TEMA: 'emsad_tema'
  },

  // ===== PROGRESO (temas completados) =====
  obtenerProgreso() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.PROGRESO) || '{}');
    } catch { return {}; }
  },

  marcarCompletado(materia, temaId) {
    const progreso = this.obtenerProgreso();
    if (!progreso[materia]) progreso[materia] = [];
    if (!progreso[materia].includes(temaId)) {
      progreso[materia].push(temaId);
      localStorage.setItem(this.KEYS.PROGRESO, JSON.stringify(progreso));
    }
  },

  estaCompletado(materia, temaId) {
    const progreso = this.obtenerProgreso();
    return (progreso[materia] || []).includes(temaId);
  },

  contarCompletados(materia) {
    const progreso = this.obtenerProgreso();
    return (progreso[materia] || []).length;
  },

  // ===== FAVORITOS =====
  obtenerFavoritos() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.FAVORITOS) || '[]');
    } catch { return []; }
  },

  toggleFavorito(id) {
    let favs = this.obtenerFavoritos();
    if (favs.includes(id)) {
      favs = favs.filter(f => f !== id);
    } else {
      favs.push(id);
    }
    localStorage.setItem(this.KEYS.FAVORITOS, JSON.stringify(favs));
    return favs.includes(id);
  },

  esFavorito(id) {
    return this.obtenerFavoritos().includes(id);
  },

  // ===== RESULTADOS DE QUIZ =====
  guardarResultadoQuiz(materia, aciertos, total) {
    const resultados = this.obtenerResultadosQuiz();
    if (!resultados[materia]) resultados[materia] = [];
    resultados[materia].push({
      aciertos, total,
      porcentaje: Math.round((aciertos / total) * 100),
      fecha: new Date().toISOString()
    });
    // Guardar solo los últimos 10
    resultados[materia] = resultados[materia].slice(-10);
    localStorage.setItem(this.KEYS.QUIZ_RESULTADOS, JSON.stringify(resultados));
  },

  obtenerResultadosQuiz() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.QUIZ_RESULTADOS) || '{}');
    } catch { return {}; }
  },

  mejorResultado(materia) {
    const res = this.obtenerResultadosQuiz()[materia] || [];
    if (!res.length) return null;
    return res.reduce((max, r) => r.porcentaje > max.porcentaje ? r : max, res[0]);
  },

  // ===== ÚLTIMO TEMA VISITADO =====
  guardarUltimoTema(materia, temaId) {
    localStorage.setItem(this.KEYS.TEMA, JSON.stringify({ materia, temaId }));
  },

  obtenerUltimoTema() {
    try {
      return JSON.parse(localStorage.getItem(this.KEYS.TEMA) || 'null');
    } catch { return null; }
  },

  // ===== RESET =====
  limpiarTodo() {
    Object.values(this.KEYS).forEach(k => localStorage.removeItem(k));
  }
};