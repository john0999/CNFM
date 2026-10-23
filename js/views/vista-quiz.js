/* ==========================================================
   VIEW - QUIZ (Interfaz Mejorada con Récords y Niveles)
========================================================== */

const VistaQuiz = {
  estado: {
    materia: null,
    nivel: null,
    preguntas: [],
    indice: 0,
    aciertos: 0,
    respondida: false
  },

  ASIGNATURAS: [
    { key: 'ciencias',     nombre: 'Ciencias',                 color: '#0d9488' },
    { key: 'quimica',      nombre: 'Química',                  color: '#dc2626' },
    { key: 'matematicas',  nombre: 'Matemáticas',              color: '#2563eb' },
    { key: 'fisica',       nombre: 'Física',                   color: '#7c3aed' },
    { key: 'ingles',       nombre: 'Inglés',                       color: '#3b82f6' },
    { key: 'lengua',       nombre: 'Lengua y Comunicación',    color: '#e11d48' }
  ],

  NIVELES: ['basico', 'intermedio', 'avanzado'],

  render(contenedor, params = {}) {
    const { id } = params;

    if (id && id.includes('-')) {
      const [materia, nivel] = id.split('-');
      return this.iniciar(contenedor, materia, nivel);
    }

    this.renderSelector(contenedor);
  },

  renderSelector(contenedor) {
    contenedor.innerHTML = `
      <div class="quiz-header" style="background: linear-gradient(135deg, #1e293b, #334155); color: #fff; padding: 3rem 1.5rem; text-align: center;">
        <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">📝 Quiz Interactivo</h2>
        <p style="opacity: 0.9;">Pon a prueba tus conocimientos. Demuestra que puedes ser el mejor.</p>
      </div>
      <div class="contenedor" style="padding: 2rem 1.5rem;">
        <button class="btn-volver" onclick="Router.ir('home')">← Volver al inicio</button>
        <h3 style="margin: 2rem 0 1rem; color: #1e293b; font-size: 1.4rem;">Selecciona una asignatura:</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
          ${this.ASIGNATURAS.map(a => {
            let avance = Storage.obtenerAvanceQuiz(a.key);
            let nivelTexto = avance.avanzado > 0 ? "🏆 Avanzado" : avance.intermedio > 0 ? "⭐ Intermedio" : "🌱 Básico";
            
            return `
            <div onclick="VistaQuiz.renderNiveles('${a.key}')" style="background: #fff; border-radius: 16px; padding: 1.5rem; box-shadow: 0 4px 15px rgba(0,0,0,0.08); cursor: pointer; border-top: 5px solid ${a.color}; transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
              <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">${a.nombre.split(' ')[0]}</div>
              <h3 style="color: #1e293b; margin-bottom: 0.5rem;">${a.nombre.split(' ').slice(1).join(' ')}</h3>
              <p style="color: #64748b; font-size: 0.9rem;">Tu rango actual: <strong>${nivelTexto}</strong></p>
            </div>
          `}).join('')}
        </div>
      </div>
    `;
  },

  renderNiveles(materiaKey) {
    const contenedor = document.getElementById('app');
    const asig = this.ASIGNATURAS.find(a => a.key === materiaKey);
    let avance = Storage.obtenerAvanceQuiz(materiaKey);

    contenedor.innerHTML = `
      <div class="quiz-header" style="background: linear-gradient(135deg, #1e293b, #334155); color: #fff; padding: 3rem 1.5rem; text-align: center;">
        <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">${asig.nombre}</h2>
        <p style="opacity: 0.9;">Elige tu nivel de dificultad. Necesitas 80% para desbloquear el siguiente.</p>
      </div>
      <div class="contenedor" style="padding: 2rem 1.5rem; max-width: 900px;">
        <button class="btn-volver" onclick="VistaQuiz.renderSelector(document.getElementById('app'))">← Volver a asignaturas</button>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
          ${this.NIVELES.map(niv => {
            const bloqueado = (niv === 'intermedio' && avance.basico < 80) || (niv === 'avanzado' && avance.intermedio < 80);
            const icono = bloqueado ? '🔒' : (niv === 'basico' ? '🌱' : niv === 'intermedio' ? '⭐' : '🏆');
            const color = bloqueado ? '#94a3b8' : asig.color;
            const record = avance[niv] > 0 ? `<p style="color: #16a34a; font-weight: bold; margin-top: 0.5rem; font-size: 0.85rem;">🏆 Tu récord: ${avance[niv]}%</p>` : '';
            
            return `
            <div onclick="${bloqueado ? `alert('Debes sacar al menos 80% en el nivel anterior para desbloquear.')` : `Router.ir('quiz', '${materiaKey}-${niv}')`}" 
                 style="background: #fff; border-radius: 16px; padding: 1.5rem; box-shadow: 0 4px 15px rgba(0,0,0,0.08); cursor: ${bloqueado ? 'not-allowed' : 'pointer'}; border-left: 6px solid ${color}; opacity: ${bloqueado ? '0.6' : '1'}; transition: transform 0.2s;"
                 ${!bloqueado ? `onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'"` : ''}>
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">${icono}</div>
              <h3 style="color: ${color}; text-transform: capitalize; margin-bottom: 0.2rem;">${niv}</h3>
              <p style="color: #64748b; font-size: 0.85rem;">${bloqueado ? 'Completa el nivel anterior' : '¡Disponible para jugar!'}</p>
              ${record}
            </div>
          `}).join('')}
        </div>
      </div>
    `;
  },

  iniciar(contenedor, materia, nivel) {
    const banco = QUIZZES[materia]?.[nivel];

    if (!banco || !banco.length) {
      console.warn(`⚠️ No hay quiz para: ${materia} - nivel ${nivel}`);
      this.renderSelector(contenedor);
      return;
    }

    this.estado = {
      materia,
      nivel,
      preguntas: banco,
      indice: 0,
      aciertos: 0,
      respondida: false
    };

    this.renderPregunta(contenedor);
  },

  renderPregunta(contenedor) {
    const { materia, nivel, preguntas, indice } = this.estado;

    if (indice >= preguntas.length) {
      return this.renderResultado(contenedor);
    }

    const p = preguntas[indice];
    const asig = this.ASIGNATURAS.find(a => a.key === materia);
    const progreso = (indice / preguntas.length) * 100;

    // MEZCLAR OPCIONES
    const opcionesMezcladas = [...p.opciones].sort(() => Math.random() - 0.5);

    contenedor.innerHTML = `
      <div class="contenedor" style="padding: 2rem 1.5rem;">
        <div class="quiz-container">
          <div class="quiz-progreso">
            <span style="color: ${asig.color}; font-weight: bold;">${asig.nombre} · Nivel ${nivel}</span>
            <span>${indice + 1} / ${preguntas.length}</span>
          </div>
          <div class="quiz-barra">
            <div class="quiz-barra-fill" style="width: ${progreso}%; background: ${asig.color};"></div>
          </div>
          <div class="quiz-pregunta-card">
            <p class="quiz-pregunta">${p.pregunta}</p>
            <div class="quiz-opciones">
              ${opcionesMezcladas.map((op, i) => `
                <button class="quiz-opcion" data-valor="${op}">
                  <span class="letra">${String.fromCharCode(65 + i)}</span>
                  <span>${op}</span>
                </button>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    contenedor.querySelectorAll('.quiz-opcion').forEach(btn => {
      btn.addEventListener('click', () => {
        this.responder(contenedor, btn.dataset.valor);
      });
    });
  },

  responder(contenedor, seleccion) {
    if (this.estado.respondida) return;
    this.estado.respondida = true;

    const p = this.estado.preguntas[this.estado.indice];
    const botones = contenedor.querySelectorAll('.quiz-opcion');
    
    // Verificamos por el valor de texto
    const esCorrecta = (seleccion === p.correcta);

    botones.forEach(btn => {
      btn.disabled = true;
      const valor = btn.dataset.valor;

      if (valor === p.correcta) {
        btn.classList.add('correcta');
      } else if (valor === seleccion && !esCorrecta) {
        btn.classList.add('incorrecta');
      }
    });

    if (esCorrecta) this.estado.aciertos++;

    setTimeout(() => {
      this.estado.indice++;
      this.estado.respondida = false;
      this.renderPregunta(contenedor);
    }, 1300);
  },

  renderResultado(contenedor) {
    const { materia, nivel, aciertos, preguntas } = this.estado;
    const total = preguntas.length;
    const porcentaje = Math.round((aciertos / total) * 100);
    const asig = this.ASIGNATURAS.find(a => a.key === materia);

    // REGISTRO DE RÉCORD CON STORAGE
    let mensajeExtra = "";
    if (porcentaje >= 80) {
      const esNuevoRecord = Storage.guardarAvanceQuiz(materia, nivel, porcentaje);
      if (esNuevoRecord) {
        mensajeExtra = `<p style="color: #16a34a; font-weight: bold; margin-top: 1rem;">¡Has superado tu récord anterior y desbloqueado el siguiente nivel! 🚀</p>`;
      } else {
        mensajeExtra = `<p style="color: #16a34a; font-weight: bold; margin-top: 1rem;">¡Aprobado! (No superaste tu récord anterior)</p>`;
      }
    }

    let mensaje, emoji;
    if (porcentaje >= 80) { mensaje = '¡Excelente! Has dominado este nivel.'; emoji = '🌟'; }
    else if (porcentaje >= 60) { mensaje = '¡Bien! Pero necesitas 80% para avanzar.'; emoji = '👍'; }
    else { mensaje = 'Necesitas repasar el tema.'; emoji = '📚'; }

    contenedor.innerHTML = `
      <div class="contenedor" style="padding: 2rem 1.5rem;">
        <div class="quiz-container">
          <div class="quiz-resultado">
            <div class="emoji">${emoji}</div>
            <h3 style="color: ${asig.color};">${mensaje}</h3>
            <p style="color:#64748b;margin-bottom:.5rem;">
              ${asig.nombre} · Nivel ${nivel}
            </p>
            <div class="puntaje" style="color: ${asig.color};">${aciertos} / ${total}</div>
            <div class="porcentaje">${porcentaje}% de aciertos</div>
            ${mensajeExtra}
            <div class="quiz-resultado-botones" style="margin-top: 2rem;">
              <button class="btn btn-primario" style="background: ${asig.color}; color: white;" onclick="Router.ir('quiz', '${materia}-${nivel}')">
                🔄 Volver a Intentar
              </button>
              <button class="btn btn-outline" onclick="VistaQuiz.renderNiveles('${materia}')">
                📚 Ver Niveles
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};