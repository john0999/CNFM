/* ==========================================================
   VIEW - HOME
========================================================== */

const VistaHome = {
  render(contenedor) {
    contenedor.innerHTML = `
      <section class="hero">
        <div class="contenedor">
          <h2>Aprende <span class="resaltado">Ciencias, Matemáticas y Física</span></h2>
          <p>Portal educativo alineado al plan de estudios de <strong>EMSAD Chiapas</strong>. Contenido contextualizado a tu comunidad.</p>
          <div class="hero-botones">
            <a href="#/ciencias" class="btn btn-primario">Explorar asignaturas</a>
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
    const materias = [
      {
        id: 'ciencias',
        titulo: 'Ciencias Naturales',
        icono: '🔬',
        descripcion: 'Química, Física y Biología integradas en 6 semestres.',
        meta: { temas: 42, semestres: 6 },
        clase: 'ciencias'
      },
      {
        id: 'matematicas',
        titulo: 'Matemáticas',
        icono: '📐',
        descripcion: 'Álgebra, geometría, trigonometría y funciones.',
        meta: { temas: 19, semestres: 4 },
        clase: 'matematicas'
      },
      {
        id: 'fisica',
        titulo: 'Física',
        icono: '⚡',
        descripcion: 'Mecánica, fluidos, electricidad y física moderna.',
        meta: { temas: 13, semestres: 3 },
        clase: 'fisica'
      },
      {
        id: 'probabilidad',
        titulo: 'Probabilidad y Estadística',
        icono: '📊',
        descripcion: 'Estadística descriptiva, probabilidad e inferencia.',
        meta: { temas: 11, semestres: 1 },
        clase: 'probabilidad'
      },
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
      }
    ];

    grid.innerHTML = materias.map(m => `
      <div class="tarjeta-materia ${m.clase}" data-route="${m.id}">
        <div>
          <div class="icono-grande">${m.icono}</div>
          <h3>${m.titulo}</h3>
          <p>${m.descripcion}</p>
        </div>
        <div class="meta">
          <span>📖 ${m.meta.temas} temas</span>
          ${m.meta.semestres ? `<span>🎓 ${m.meta.semestres} semestres</span>` : ''}
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
      const fuentes = {
        ciencias: CIENCIAS,
        matematicas: MATEMATICAS,
        fisica: FISICA,
        probabilidad: PROBABILIDAD
      };

      Object.entries(fuentes).forEach(([materia, data]) => {
        Object.entries(data).forEach(([sem, semData]) => {
          // Manejar temas directos o por bloques
          let temas = semData.temas || [];
          if (semData.bloques) {
            temas = semData.bloques.flatMap(b => b.temas);
          }
          
          temas.forEach(tema => {
            const texto = Utils.normalizar(tema.titulo + ' ' + tema.contenido);
            if (texto.includes(Utils.normalizar(q))) {
              resultados.push({ materia, semestre: sem, tema, clase: semData.clase || materia });
            }
          });
        });
      });

      info.textContent = resultados.length 
        ? `${resultados.length} resultado(s) para "${q}"` 
        : `Sin resultados para "${q}"`;

      grid.innerHTML = resultados.map(r => `
        <div class="tarjeta-materia ${r.materia}" data-materia="${r.materia}" data-tema="${r.tema.id}">
          <div>
            <div class="icono-grande">${r.tema.icono}</div>
            <h3>${r.tema.titulo}</h3>
            <p>${r.materia} · Semestre ${r.semestre}</p>
          </div>
        </div>
      `).join('');

      grid.querySelectorAll('.tarjeta-materia').forEach(card => {
        card.addEventListener('click', () => {
          Router.ir(card.dataset.materia, { id: card.dataset.tema });
        });
      });
    }, 300);

    input.addEventListener('input', e => buscar(e.target.value));
  }
};