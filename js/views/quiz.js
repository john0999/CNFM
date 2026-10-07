/* ==========================================================
   VIEW - QUIZ (versión final con Química integrada)
   Router v2 · Soporta: #/quiz, #/quiz/tipo-sem, #/quiz?tipo=&sem=
========================================================== */

const VistaQuiz = {
  // ===== Estado del quiz =====
  estado: {
    materia: null,
    semestre: null,
    preguntas: [],
    indice: 0,
    aciertos: 0,
    respondida: false
  },

  // ===== Configuración de asignaturas =====
  // Orden en que aparecen en el selector y nombres mostrados
  ASIGNATURAS: [
    { key: 'ciencias',     nombre: '🔬 Ciencias',                 color: '#0d9488' },
    { key: 'quimica',      nombre: '⚗️ Química',                  color: '#dc2626' },
    { key: 'matematicas',  nombre: '📐 Matemáticas',              color: '#2563eb' },
    { key: 'fisica',       nombre: '⚡ Física',                   color: '#7c3aed' },
    { key: 'probabilidad', nombre: '📊 Probabilidad y Estadística', color: '#059669' }
  ],

  /**
   * Punto de entrada de la vista
   * @param {HTMLElement} contenedor
   * @param {Object} params - { id, segundo, params, query, ruta }
   */
  render(contenedor, params = {}) {
    const { id, query } = params;

    // URL: #/quiz/ciencias-3  (id = "ciencias-3")
    if (id && id.includes('-')) {
      const [materia, semestre] = id.split('-');
      return this.iniciar(contenedor, materia, semestre);
    }

    // URL: #/quiz?tipo=ciencias&sem=3
    if (query?.tipo && query?.sem) {
      return this.iniciar(contenedor, query.tipo, query.sem);
    }

    // URL: #/quiz → selector
    this.renderSelector(contenedor);
  },

  // ==========================================================
  // SELECTOR DE CATEGORÍAS
  // ==========================================================
  renderSelector(contenedor) {
    contenedor.innerHTML = `
      <div class="quiz-header">
        <h2>📝 Quiz Interactivo</h2>
        <p>Pon a prueba tus conocimientos. Elige una asignatura y semestre.</p>
      </div>
      <div class="contenedor quiz-selector">
        <h3 class="seccion-titulo">Selecciona una categoría</h3>
        <div class="quiz-selector-grid" id="quizCategorias"></div>
      </div>
    `;

    const grid = document.getElementById('quizCategorias');
    const categorias = [];

    // Recorrer asignaturas en el ORDEN definido
    this.ASIGNATURAS.forEach(({ key: tipo, nombre, color }) => {
      const semestres = QUIZZES[tipo];
      if (!semestres) return;

      Object.keys(semestres).forEach(sem => {
        categorias.push({
          tipo,
          semestre: sem,
          color,
          titulo: `${nombre} - Semestre ${sem}`,
          preguntas: semestres[sem].length
        });
      });
    });

    // Si no hay quizzes disponibles
    if (categorias.length === 0) {
      grid.innerHTML = `
        <div class="vacio" style="grid-column:1/-1;">
          <div class="icono">📭</div>
          <p>No hay quizzes disponibles por el momento.</p>
        </div>
      `;
      return;
    }

    // Renderizar tarjetas
    grid.innerHTML = categorias.map(c => {
      const mejor = Storage.mejorResultado(`${c.tipo}-${c.semestre}`);
      return `
        <div class="quiz-categoria-card" 
             style="border-left-color: ${c.color};"
             onclick="Router.ir('quiz', '${c.tipo}-${c.semestre}')">
          <h3>${c.titulo}</h3>
          <p>${c.preguntas} preguntas</p>
          <div class="meta">
            <span>📝 ${c.preguntas} preguntas</span>
            ${mejor 
              ? `<span>🏆 Mejor: ${mejor.porcentaje}%</span>` 
              : '<span>Sin intentos</span>'}
          </div>
        </div>
      `;
    }).join('');
  },

  // ==========================================================
  // INICIAR QUIZ
  // ==========================================================
  iniciar(contenedor, materia, semestre) {
    const banco = QUIZZES[materia]?.[semestre];

    if (!banco || !banco.length) {
      console.warn(`⚠️ No hay quiz para: ${materia} - semestre ${semestre}`);
      this.renderSelector(contenedor);
      return;
    }

    // Reiniciar estado
    this.estado = {
      materia,
      semestre,
      preguntas: banco,
      indice: 0,
      aciertos: 0,
      respondida: false
    };

    this.renderPregunta(contenedor);
  },

  // ==========================================================
  // RENDERIZAR PREGUNTA
  // ==========================================================
  renderPregunta(contenedor) {
    const { materia, semestre, preguntas, indice } = this.estado;

    // Si terminó el quiz
    if (indice >= preguntas.length) {
      return this.renderResultado(contenedor);
    }

    const p = preguntas[indice];
    const progreso = (indice / preguntas.length) * 100;
    const nombreMateria = this.obtenerNombreMateria(materia);

    contenedor.innerHTML = `
      <div class="contenedor">
        <div class="quiz-container">
          <div class="quiz-progreso">
            <span>${nombreMateria} · Semestre ${semestre}</span>
            <span>${indice + 1} / ${preguntas.length}</span>
          </div>
          <div class="quiz-barra">
            <div class="quiz-barra-fill" style="width: ${progreso}%"></div>
          </div>
          <div class="quiz-pregunta-card">
            <p class="quiz-pregunta">${p.pregunta}</p>
            <div class="quiz-opciones">
              ${p.opciones.map((op, i) => `
                <button class="quiz-opcion" data-indice="${i}">
                  <span class="letra">${String.fromCharCode(65 + i)}</span>
                  <span>${op}</span>
                </button>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    // Escuchar clics en las opciones
    contenedor.querySelectorAll('.quiz-opcion').forEach(btn => {
      btn.addEventListener('click', () => {
        this.responder(contenedor, parseInt(btn.dataset.indice, 10));
      });
    });
  },

  // ==========================================================
  // RESPONDER PREGUNTA
  // ==========================================================
  responder(contenedor, seleccion) {
    // Evitar doble clic
    if (this.estado.respondida) return;
    this.estado.respondida = true;

    const p = this.estado.preguntas[this.estado.indice];
    const botones = contenedor.querySelectorAll('.quiz-opcion');

    // Marcar respuestas
    botones.forEach((btn, i) => {
      btn.disabled = true;
      if (i === p.correcta) btn.classList.add('correcta');
      if (i === seleccion && i !== p.correcta) btn.classList.add('incorrecta');
    });

    // Contar acierto
    if (seleccion === p.correcta) {
      this.estado.aciertos++;
    }

    // Pasar a la siguiente pregunta
    setTimeout(() => {
      this.estado.indice++;
      this.estado.respondida = false;
      this.renderPregunta(contenedor);
    }, 1300);
  },

  // ==========================================================
  // RENDERIZAR RESULTADO FINAL
  // ==========================================================
  renderResultado(contenedor) {
    const { materia, semestre, aciertos, preguntas } = this.estado;
    const total = preguntas.length;
    const porcentaje = Math.round((aciertos / total) * 100);
    const nombreMateria = this.obtenerNombreMateria(materia);

    // Guardar resultado en localStorage
    Storage.guardarResultadoQuiz(`${materia}-${semestre}`, aciertos, total);

    // Mensaje según puntaje
    let mensaje, emoji;
    if (porcentaje >= 80) {
      mensaje = '¡Excelente! Dominas el tema.';
      emoji = '🌟';
    } else if (porcentaje >= 60) {
      mensaje = '¡Bien! Puedes mejorar.';
      emoji = '👍';
    } else {
      mensaje = 'Necesitas repasar el tema.';
      emoji = '📚';
    }

    contenedor.innerHTML = `
      <div class="contenedor">
        <div class="quiz-container">
          <div class="quiz-resultado">
            <div class="emoji">${emoji}</div>
            <h3>${mensaje}</h3>
            <p style="color:#64748b;margin-bottom:.5rem;">
              ${nombreMateria} · Semestre ${semestre}
            </p>
            <div class="puntaje">${aciertos} / ${total}</div>
            <div class="porcentaje">${porcentaje}% de aciertos</div>
            <div class="quiz-resultado-botones">
              <button class="btn btn-primario" 
                      onclick="Router.ir('quiz', '${materia}-${semestre}')">
                🔄 Reintentar
              </button>
              <button class="btn btn-outline" 
                      onclick="Router.ir('quiz')">
                📝 Otro quiz
              </button>
              <button class="btn btn-outline" 
                      onclick="Router.ir('home')">
                🏠 Inicio
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // ==========================================================
  // UTILIDADES
  // ==========================================================
  obtenerNombreMateria(materia) {
    const encontrada = this.ASIGNATURAS.find(a => a.key === materia);
    return encontrada ? encontrada.nombre : materia;
  }
};