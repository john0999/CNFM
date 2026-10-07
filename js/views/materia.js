/* ==========================================================
   VIEW - MATERIA (actualizado para Router v2)
========================================================== */

const VistaMateria = {
  DATA: {
    ciencias: CIENCIAS,
    quimica: QUIMICA,
    matematicas: MATEMATICAS,
    fisica: FISICA,
    probabilidad: PROBABILIDAD
  },

  /**
   * @param {HTMLElement} contenedor
   * @param {string} materia - 'ciencias' | 'quimica' | 'matematicas' | 'fisica' | 'probabilidad'
   * @param {Object} params - { id, segundo, params, query, ruta }
   */
  render(contenedor, materia, params = {}) {
    const data = this.DATA[materia];
    if (!data) {
      Router.ir('home');
      return;
    }

    const { id, segundo } = params;

    // CASO 1: Sin parámetros → selector de semestres
    if (!id) {
      return this.renderSelector(contenedor, materia, data);
    }

    // CASO 2: id = "semestre-N" → mostrar materias del semestre
    if (id.startsWith('semestre-')) {
      const semestre = id.replace('semestre-', '');
      const semData = data[semestre];
      
      if (!semData) {
        Router.ir(materia);
        return;
      }

      // Si hay segundo parámetro, es un tema específico
      const temaId = segundo || null;
      return this.renderMateria(contenedor, materia, semestre, semData, temaId);
    }

    // CASO 3: id = "t3-5" (tema directo) → buscar semestre automáticamente
    const semestreEncontrado = this.encontrarSemestre(data, id);
    if (semestreEncontrado) {
      const semData = data[semestreEncontrado];
      return this.renderMateria(contenedor, materia, semestreEncontrado, semData, id);
    }

    // Fallback: volver al selector
    Router.ir(materia);
  },

  /**
   * Busca en qué semestre está un tema por su ID
   */
  encontrarSemestre(data, temaId) {
    for (const sem of Object.keys(data)) {
      const semData = data[sem];
      const temas = this.obtenerTemas(semData);
      if (temas.find(t => t.id === temaId)) return sem;
    }
    return null;
  },

  /**
   * Renderiza el selector de semestres
   */
  renderSelector(contenedor, materia, data) {
    const iconos = {
      ciencias: '🔬', quimica: '⚗️', matematicas: '📐',
      fisica: '⚡', probabilidad: '📊'
    };
    const nombres = {
      ciencias: 'Ciencias Naturales', quimica: 'Química', matematicas: 'Matemáticas',
      fisica: 'Física', probabilidad: 'Probabilidad y Estadística'
    };

    contenedor.innerHTML = `
      <div class="contenedor materia-header">
        <button class="btn-volver" onclick="Router.ir('home')">← Volver al inicio</button>
        <div class="materia-titulo-wrap">
          <span class="materia-numero">${iconos[materia]}</span>
          <div class="materia-info">
            <h2>${nombres[materia]}</h2>
            <p>Selecciona un semestre</p>
          </div>
        </div>
      </div>
      <div class="contenedor seccion-home">
        <div class="grid-materias">
          ${Object.entries(data).map(([num, sem]) => `
            <div class="tarjeta-materia ${materia}" 
                 onclick="Router.ir('${materia}', 'semestre-${num}')">
              <div>
                <div class="icono-grande">${sem.icono}</div>
                <h3>${sem.semestre}</h3>
                <p>${sem.descripcion}</p>
              </div>
              <div class="meta">
                <span>📖 ${this.contarTemas(sem)} temas</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  /**
   * Renderiza los temas de un semestre específico
   */
  renderMateria(contenedor, materia, semestre, semData, temaId = null) {
    const temas = this.obtenerTemas(semData);
    const color = Utils.colorSemestre(semestre) || '#0d9488';
    const key = `${materia}-${semestre}`;

    contenedor.innerHTML = `
      <div class="contenedor materia-header">
        <button class="btn-volver" onclick="Router.ir('${materia}')">← Ver semestres</button>
        <div class="materia-titulo-wrap">
          <span class="materia-numero" style="background:linear-gradient(135deg,${color},#0f766e);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">
            ${semestre}
          </span>
          <div class="materia-info">
            <h2>${semData.icono} ${semData.titulo}</h2>
            <p>${semData.semestre}</p>
          </div>
        </div>
        ${semData.contexto ? `
          <div class="materia-contexto">
            <strong>🏔️ Contexto Chiapas:</strong> ${semData.contexto}
          </div>
        ` : ''}
      </div>
      <div class="contenedor materia-contenido">
        <aside class="indice" id="indiceMateria"></aside>
        <section class="temas-detalle" id="temasDetalle"></section>
      </div>
    `;

    this.renderIndice(materia, semestre, temas, key);
    this.renderTemas(materia, semestre, temas, color, key);

    // Scroll al tema si se especificó
    if (temaId) {
      setTimeout(() => Utils.scrollA(temaId), 250);
    }
  },

  renderIndice(materia, semestre, temas, key) {
    const indice = document.getElementById('indiceMateria');
    indice.innerHTML = `
      <h4>📑 Temas (${temas.length})</h4>
      <ul>
        ${temas.map(t => {
          const completado = Storage.estaCompletado(key, t.id);
          return `
            <li>
              <a href="#${t.id}" 
                 data-target="${t.id}"
                 onclick="event.preventDefault(); Utils.scrollA('${t.id}')">
                <span>${t.icono} ${t.titulo}</span>
                ${completado ? '<span class="check">✓</span>' : ''}
              </a>
            </li>
          `;
        }).join('')}
      </ul>
    `;

    // Activar link al hacer click
    indice.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        indice.querySelectorAll('a').forEach(x => x.classList.remove('activo'));
        a.classList.add('activo');
      });
    });
  },

  renderTemas(materia, semestre, temas, color, key) {
    const detalle = document.getElementById('temasDetalle');
    detalle.innerHTML = temas.map(t => {
      const completado = Storage.estaCompletado(key, t.id);
      return `
        <article class="bloque-tema" id="${t.id}">
          <h3>${t.icono} ${t.titulo}</h3>
          <div class="contenido-tema">${t.contenido}</div>
          <button class="btn-completado ${completado ? 'completado' : ''}" 
                  data-tema="${t.id}" 
                  data-key="${key}">
            ${completado ? '✅ Completado' : '📖 Marcar como leído'}
          </button>
        </article>
      `;
    }).join('');

    detalle.querySelectorAll('.btn-completado').forEach(btn => {
      btn.addEventListener('click', () => {
        const k = btn.dataset.key;
        const temaId = btn.dataset.tema;
        Storage.marcarCompletado(k, temaId);
        btn.textContent = '✅ Completado';
        btn.classList.add('completado');

        // Actualizar check en índice
        const link = document.querySelector(`.indice a[data-target="${temaId}"]`);
        if (link && !link.querySelector('.check')) {
          const check = document.createElement('span');
          check.className = 'check';
          check.textContent = '✓';
          link.appendChild(check);
        }
      });
    });
  },

  obtenerTemas(semData) {
    if (semData.bloques) {
      return semData.bloques.flatMap(b => b.temas);
    }
    return semData.temas || [];
  },

  contarTemas(semData) {
    return this.obtenerTemas(semData).length;
  }
};