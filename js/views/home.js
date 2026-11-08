/* ==========================================================
   VIEW - HOME
========================================================== */

const VistaHome = {
  render(contenedor) {
    contenedor.innerHTML = `
      <section class="hero">
        <div class="contenedor">
          <h2>Aprende <span class="resaltado">todas tus materias</span> del bachillerato</h2>
          <p>Portal educativo alineado a tu formación academica en tu plantel. Contenido contextualizado a tu comunidad.</p>
          <div class="hero-botones">
            <a href="#/ciencias" class="btn btn-primario">Explorar asignaturas</a>
            <a href="#/agente" class="btn btn-secundario">🤖 Hablar CienTIA</a>
            <a href="#/quiz" class="btn btn-secundario">📝 Hacer un Quiz</a>
          </div>
        </div>
      </section>

      <section class="contenedor seccion-home">
        <h2 class="seccion-titulo">
          📚 Asignaturas
          <span class="subtitulo-seccion">Elige una materia para comenzar</span>
        </h2>
        <div class="grid-materias" id="gridMaterias"></div>
      </section>

      <section class="contenedor buscador-seccion">
        <input type="text" id="buscadorGlobal" class="buscador" placeholder="🔍 Buscar tema en todas las asignaturas...">
      </section>

      <section class="contenedor seccion-home">
        <h2 class="seccion-titulo">
          🔍 Resultados
          <span class="subtitulo-seccion" id="resultadoInfo">Escribe algo para buscar</span>
        </h2>
        <div class="grid-materias" id="gridResultados"></div>
      </section>
    `;

    this.renderizarMaterias();
    this.configurarBuscador();
  },

  renderizarMaterias() {
    const grid = document.getElementById('gridMaterias');

    // Las materias salen del catálogo (js/data/materias.js) con sus conteos reales
    const materias = MATERIAS.map(m => {
      const resumen = materiaResumen(m);
      return {
        id: m.id,
        titulo: m.titulo,
        icono: m.emoji,
        descripcion: m.descripcion,
        meta: { temas: resumen.temas, cursos: resumen.cursos },
        fondo: `linear-gradient(135deg, ${m.color}, ${m.color2})`
      };
    });

    const extras = [
      {
        id: 'contexto',
        titulo: 'Contexto Chiapas',
        icono: '🏔️',
        descripcion: 'Conoce el EMSAD y la realidad chiapaneca.',
        meta: { temas: 4, semestres: 0 },
        clase: 'contexto'
      },
      {
        id: 'herramientas',
        titulo: 'Herramientas',
        icono: '🛠️',
        descripcion: 'Recursos y plataformas para estudiar mejor.',
        meta: { temas: 12, semestres: 0 },
        clase: 'herramientas'
      },
      {
        id: 'simuladores',
        titulo: 'Simuladores',
        icono: '🧪',
        descripcion: 'Practica con experimentos virtuales de PhET y GeoGebra.',
        meta: { temas: 24, semestres: 0 },
        clase: 'simuladores'
      },
      {
        id: 'agente',
        titulo: 'CienTIA',
        icono: '🤖',
        descripcion: 'Tu tutor virtual para resolver dudas de todas tus materias.',
        meta: { temas: '∞', semestres: 0 },
        clase: 'agente'
      }
    ];

    grid.innerHTML = [...materias, ...extras].map(m => `
      <div class="tarjeta-materia ${m.clase || ''}" data-route="${m.id}" ${m.fondo ? `style="background: ${m.fondo};"` : ''}>
        <div>
          <div class="icono-grande">${m.icono}</div>
          <h3>${m.titulo}</h3>
          <p>${m.descripcion}</p>
        </div>
        <div class="meta">
          <span>📖 ${m.meta.temas} temas</span>
          ${m.meta.cursos ? `<span>🎓 ${m.meta.cursos} ${m.meta.cursos === 1 ? 'curso' : 'cursos'}</span>` : ''}
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.tarjeta-materia').forEach(card => {
      card.addEventListener('click', () => {
        Router.ir(card.dataset.route);
      });
    });
  },

  configurarBuscador() {
    const input = document.getElementById('buscadorGlobal');
    const grid = document.getElementById('gridResultados');
    const info = document.getElementById('resultadoInfo');

    const buscar = Utils.debounce((q) => {
      if (!q) {
        grid.innerHTML = '';
        info.textContent = 'Escribe algo para buscar';
        return;
      }

      const resultados = [];
      const consulta = Utils.normalizar(q);

      // Busca en todas las materias del catálogo (js/data/materias.js)
      MATERIAS.forEach(m => {
        const data = m.datos();
        if (!data) return;
        Object.entries(data).forEach(([sem, semData]) => {
          // Los temas compartidos ({ ref }) ya aparecen en su propio módulo
          materiaTemasDe(semData).forEach(tema => {
            const texto = Utils.normalizar(`${tema.titulo} ${tema.contenido || ''} ${tema.concepto || ''}`);
            if (texto.includes(consulta)) {
              resultados.push({ materia: m, semestre: sem, tema });
            }
          });
        });
      });

      info.textContent = resultados.length
        ? `${resultados.length} resultado(s) para "${q}"`
        : `Sin resultados para "${q}"`;

      grid.innerHTML = resultados.map(r => `
        <div class="tarjeta-materia" style="background: linear-gradient(135deg, ${r.materia.color}, ${r.materia.color2});"
             data-materia="${r.materia.id}" data-semestre="${r.semestre}" data-tema="${r.tema.id}">
          <div>
            <div class="icono-grande">${r.tema.icono}</div>
            <h3>${r.tema.titulo}</h3>
            <p>${r.materia.nombre} · ${r.materia.datos()[r.semestre].semestre || 'Semestre ' + r.semestre}</p>
          </div>
        </div>
      `).join('');

      // Abre el semestre del tema y baja hasta él
      grid.querySelectorAll('.tarjeta-materia').forEach(card => {
        card.addEventListener('click', () => {
          const { materia, semestre, tema } = card.dataset;
          Router.ir(materia, `semestre-${semestre}`);
          setTimeout(() => {
            const destino = document.getElementById(`tema-${tema}`) || document.getElementById(tema);
            destino?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 400);
        });
      });
    }, 300);

    input.addEventListener('input', e => buscar(e.target.value));
  }
};