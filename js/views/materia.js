/* ==========================================================
   VIEW - MATERIA (con selector de semestre y temas)
========================================================== */

const VistaMateria = {
  DATA: {
    ciencias: CIENCIAS,
    matematicas: MATEMATICAS,
    fisica: FISICA,
    probabilidad: PROBABILIDAD
  },

  render(contenedor, materia, temaId) {
    const data = this.DATA[materia];
    if (!data) {
      Router.ir('home');
      return;
    }

    // Si no se especificó semestre, mostrar selector
    if (!temaId && Object.keys(data).length > 1) {
      this.renderSelector(contenedor, materia, data);
      return;
    }

    // Determinar semestre y tema
    let semestre = temaId ? this.encontrarSemestre(data, temaId) : Object.keys(data)[0];
    const semData = data[semestre];
    if (!semData) {
      Router.ir('home');
      return;
    }

    this.renderMateria(contenedor, materia, semestre, semData, temaId);
  },

  encontrarSemestre(data, temaId) {
    for (const sem of Object.keys(data)) {
      const semData = data[sem];
      let temas = semData.temas || [];
      if (semData.bloques) temas = semData.bloques.flatMap(b => b.temas);
      if (temas.find(t => t.id === temaId)) return sem;
    }
    return Object.keys(data)[0];
  },

  renderSelector(contenedor, materia, data) {
    const iconos = { ciencias: '🔬', matematicas: '📐', fisica: '⚡', probabilidad: '📊' };
    
    contenedor.innerHTML = `
      <div class="contenedor materia-header">
        <button class="btn-volver" onclick="Router.ir('home')">← Volver al inicio</button>
        <div class="materia-titulo-wrap">
          <span class="materia-numero">${iconos[materia]}</span>
          <div class="materia-info">
            <h2>${this.nombreMateria(materia)}</h2>
            <p>Selecciona un semestre</p>
          </div>
        </div>
      </div>
      <div class="contenedor seccion-home">
        <div class="grid-materias">
          ${Object.entries(data).map(([num, sem]) => `
            <div class="tarjeta-materia ${materia}" data-semestre="${num}">
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

    contenedor.querySelectorAll('.tarjeta-materia').forEach(card => {
      card.addEventListener('click', () => {
        window.location.hash = `#/${materia}/semestre-${card.dataset.semestre}`;
      });
    });
  },

  renderMateria(contenedor, materia, semestre, semData, temaId) {
    const temas = this.obtenerTemas(semData);
    const color = Utils.colorSemestre(semestre) || '#0d9488';

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
        <div class="materia-contexto">
          <strong>🏔️ Contexto Chiapas:</strong> ${semData.contexto}
        </div>
      </div>
      <div class="contenedor materia-contenido">
        <aside class="indice" id="indiceMateria"></aside>
        <section class="temas-detalle" id="temasDetalle"></section>
      </div>
    `;

    this.renderIndice(materia, semestre, temas);
    this.renderTemas(materia, semestre, temas, color);

    // Scroll al tema si se especificó
    if (temaId) {
      setTimeout(() => Utils.scrollA(temaId), 200);
    }
  },

  renderIndice(materia, semestre, temas) {
    const indice = document.getElementById('indiceMateria');
    indice.innerHTML = `
      <h4>📑 Temas (${temas.length})</h4>
      <ul>
        ${temas.map(t => {
          const completado = Storage.estaCompletado(`${materia}-${semestre}`, t.id);
          return `
            <li>
              <a href="#${t.id}" data-target="${t.id}">
                <span>${t.icono} ${t.titulo}</span>
                ${completado ? '<span class="check">✓</span>' : ''}
              </a>
            </li>
          `;
        }).join('')}
      </ul>
    `;

    indice.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        Utils.scrollA(a.dataset.target);
        indice.querySelectorAll('a').forEach(x => x.classList.remove('activo'));
        a.classList.add('activo');
      });
    });
  },

  renderTemas(materia, semestre, temas, color) {
    const detalle = document.getElementById('temasDetalle');
    detalle.innerHTML = temas.map(t => {
      const completado = Storage.estaCompletado(`${materia}-${semestre}`, t.id);
      return `
        <article class="bloque-tema" id="${t.id}">
          <h3>${t.icono} ${t.titulo}</h3>
          <div class="contenido-tema">${t.contenido}</div>
          <button class="btn-completado ${completado ? 'completado' : ''}" 
                  data-tema="${t.id}" 
                  data-key="${materia}-${semestre}">
            ${completado ? '✅ Completado' : '📖 Marcar como leído'}
          </button>
        </article>
      `;
    }).join('');

    detalle.querySelectorAll('.btn-completado').forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.key;
        const temaId = btn.dataset.tema;
        Storage.marcarCompletado(key, temaId);
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
  },

  nombreMateria(id) {
    const nombres = {
      ciencias: 'Ciencias Naturales',
      matematicas: 'Matemáticas',
      fisica: 'Física',
      probabilidad: 'Probabilidad y Estadística'
    };
    return nombres[id] || id;
  }
};