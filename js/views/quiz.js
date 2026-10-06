/* ==========================================================
   VIEW - QUIZ (vista independiente, no modal)
========================================================== */

const VistaQuiz = {
  estado: {
    materia: null,
    semestre: null,
    preguntas: [],
    indice: 0,
    aciertos: 0,
    respondida: false
  },

  render(contenedor, materiaParam) {
    // Si hay parámetros, iniciar quiz
    if (materiaParam) {
      const [materia, semestre] = materiaParam.split('-');
      return this.iniciar(contenedor, materia, semestre);
    }

    // Si no, mostrar selector
    this.renderSelector(contenedor);
  },

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

    // Ciencias (6 semestres)
    Object.keys(QUIZZES.ciencias).forEach(sem => {
      categorias.push({
        tipo: 'ciencias',
        semestre: sem,
        titulo: `🔬 Ciencias - Semestre ${sem}`,
        preguntas: QUIZZES.ciencias[sem].length
      });
    });

    // Matemáticas (4 semestres)
    Object.keys(QUIZZES.matematicas).forEach(sem => {
      categorias.push({
        tipo: 'matematicas',
        semestre: sem,
        titulo: `📐 Matemáticas - Semestre ${sem}`,
        preguntas: QUIZZES.matematicas[sem].length
      });
    });

    // Física (3 semestres)
    Object.keys(QUIZZES.fisica).forEach(sem => {
      categorias.push({
        tipo: 'fisica',
        semestre: sem,
        titulo: `⚡ Física - Semestre ${sem}`,
        preguntas: QUIZZES.fisica[sem].length
      });
    });

    // Probabilidad
    Object.keys(QUIZZES.probabilidad).forEach(sem => {
      categorias.push({
        tipo: 'probabilidad',
        semestre: sem,
        titulo: `📊 Probabilidad - Semestre ${sem}`,
        preguntas: QUIZZES.probabilidad[sem].length
      });
    });

    grid.innerHTML = categorias.map(c => {
      const mejor = Storage.mejorResultado(`${c.tipo}-${c.semestre}`);
      return `
        <div class="quiz-categoria-card" data-tipo="${c.tipo}" data-semestre="${c.semestre}">
          <h3>${c.titulo}</h3>
          <p>${c.preguntas} preguntas</p>
          <div class="meta">
            <span>📝 ${c.preguntas} preguntas</span>
            ${mejor ? `<span>🏆 Mejor: ${mejor.porcentaje}%</span>` : '<span>Sin intentos</span>'}
          </div>
        </div>
      `;
    }).join('');

    grid.querySelectorAll('.quiz-categoria-card').forEach(card => {
      card.addEventListener('click', () => {
        this.iniciar(contenedor, card.dataset.tipo, card.dataset.semestre);
      });
    });
  },

  iniciar(contenedor, materia, semestre) {
    const banco = QUIZZES[materia]?.[semestre];
    if (!banco) {
      this.renderSelector(contenedor);
      return;
    }

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

  renderPregunta(contenedor) {
    const { materia, semestre, preguntas, indice } = this.estado;

    if (indice >= preguntas.length) {
      return this.renderResultado(contenedor);
    }

    const p = preguntas[indice];
    const progreso = ((indice) / preguntas.length) * 100;
    const nombres = {
      ciencias: '🔬 Ciencias', matematicas: '📐 Matemáticas',
      fisica: '⚡ Física', probabilidad: '📊 Probabilidad'
    };

    contenedor.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-progreso">
          <span>${nombres[materia]} · Semestre ${semestre}</span>
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
    `;

    contenedor.querySelectorAll('.quiz-opcion').forEach(btn => {
      btn.addEventListener('click', () => {
        this.responder(contenedor, parseInt(btn.dataset.indice));
      });
    });
  },

  responder(contenedor, seleccion) {
    if (this.estado.respondida) return;
    this.estado.respondida = true;

    const p = this.estado.preguntas[this.estado.indice];
    const botones = contenedor.querySelectorAll('.quiz-opcion');

    botones.forEach((btn, i) => {
      btn.disabled = true;
      if (i === p.correcta) btn.classList.add('correcta');
      if (i === seleccion && i !== p.correcta) btn.classList.add('incorrecta');
    });

    if (seleccion === p.correcta) this.estado.aciertos++;

    setTimeout(() => {
      this.estado.indice++;
      this.estado.respondida = false;
      this.renderPregunta(contenedor);
    }, 1300);
  },

  renderResultado(contenedor) {
    const { materia, semestre, aciertos, preguntas } = this.estado;
    const total = preguntas.length;
    const porcentaje = Math.round((aciertos / total) * 100);

    // Guardar resultado
    Storage.guardarResultadoQuiz(`${materia}-${semestre}`, aciertos, total);

    let mensaje, emoji;
    if (porcentaje >= 80) { mensaje = '¡Excelente! Dominas el tema.'; emoji = '🌟'; }
    else if (porcentaje >= 60) { mensaje = '¡Bien! Puedes mejorar.'; emoji = '👍'; }
    else { mensaje = 'Necesitas repasar el tema.'; emoji = '📚'; }

    contenedor.innerHTML = `
      <div class="contenedor">
        <div class="quiz-container">
          <div class="quiz-resultado">
            <div class="emoji">${emoji}</div>
            <h3>${mensaje}</h3>
            <div class="puntaje">${aciertos} / ${total}</div>
            <div class="porcentaje">${porcentaje}% de aciertos</div>
            <div class="quiz-resultado-botones">
              <button class="btn btn-primario" onclick="VistaQuiz.iniciar(document.getElementById('app'), '${materia}', '${semestre}')">
                🔄 Reintentar
              </button>
              <button class="btn btn-outline" onclick="Router.ir('quiz')">
                📝 Otro quiz
              </button>
              <button class="btn btn-outline" onclick="Router.ir('home')">
                🏠 Inicio
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};