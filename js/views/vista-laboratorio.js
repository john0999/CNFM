/* ==========================================================
   VIEW - MATERIAL DE LABORATORIO
   #/laboratorio            → catálogo por categoría
   #/laboratorio/<id>       → ficha de un instrumento
========================================================== */

const VistaLaboratorio = {
  DATA: MATERIAL_LAB,
  filtro: 'todos',

  render(contenedor, params = {}) {
    const instrumento = this.DATA.instrumentos.find(i => i.id === params.id);
    if (instrumento) return this.renderFicha(contenedor, instrumento);
    this.renderCatalogo(contenedor);
  },

  encabezado(titulo, subtitulo) {
    return `
      <div style="background: linear-gradient(135deg, #dc2626, #f87171); color: #fff; padding: 2.5rem 1.5rem; text-align: center;">
        <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">${titulo}</h2>
        <p style="opacity: 0.9; max-width: 650px; margin: 0 auto;">${subtitulo}</p>
      </div>
    `;
  },

  renderCatalogo(contenedor) {
    const { categorias } = this.DATA;

    contenedor.innerHTML = `
      ${this.encabezado(this.DATA.titulo, this.DATA.subtitulo)}
      <div class="contenedor" style="padding: 2rem 1.5rem; max-width: 1000px; margin: 0 auto;">
        <button class="btn-volver" onclick="Router.ir('quimica')">← Volver a Química</button>

        <div class="filtros-lab">
          <button data-filtro="todos">Todos</button>
          ${Object.entries(categorias).map(([clave, c]) => `
            <button data-filtro="${clave}">${c.icono} ${c.nombre}</button>
          `).join('')}
        </div>

        <div id="catalogoLab"></div>
      </div>
    `;

    contenedor.querySelectorAll('.filtros-lab button').forEach(btn => {
      btn.addEventListener('click', () => {
        this.filtro = btn.dataset.filtro;
        this.renderGrupos();
      });
    });

    this.renderGrupos();
  },

  renderGrupos() {
    const { categorias, instrumentos } = this.DATA;
    const claves = this.filtro === 'todos' ? Object.keys(categorias) : [this.filtro];

    document.querySelectorAll('.filtros-lab button').forEach(btn => {
      btn.classList.toggle('activo', btn.dataset.filtro === this.filtro);
    });

    document.getElementById('catalogoLab').innerHTML = claves.map(clave => `
      <h3 class="titulo-categoria-lab">${categorias[clave].icono} ${categorias[clave].nombre}</h3>
      <div class="galeria-lab">
        ${instrumentos.filter(i => i.categoria === clave).map(i => `
          <a class="tarjeta-lab-enlace" href="#/laboratorio/${i.id}">
            <figure class="tarjeta-lab">
              <img src="images/quimica/${i.id}.svg" alt="${i.nombre}" loading="lazy">
              <figcaption>
                <span class="nombre-lab">${i.nombre}</span>
                <span class="uso-lab">${i.material}</span>
                ${i.descripcion.split('. ')[0]}.
                <span class="ver-mas-lab">Ver ficha completa →</span>
              </figcaption>
            </figure>
          </a>
        `).join('')}
      </div>
    `).join('');
  },

  renderFicha(contenedor, i) {
    const { categorias, instrumentos, temas } = this.DATA;
    const indice = instrumentos.indexOf(i);
    const anterior = instrumentos[indice - 1];
    const siguiente = instrumentos[indice + 1];
    const categoria = categorias[i.categoria];

    contenedor.innerHTML = `
      ${this.encabezado(i.nombre, `${categoria.icono} ${categoria.nombre}`)}
      <div class="contenedor" style="padding: 2rem 1.5rem; max-width: 900px; margin: 0 auto;">
        <button class="btn-volver" onclick="Router.ir('laboratorio')">← Todo el material</button>

        <div class="ficha-lab">
          <div class="ficha-lab-imagen">
            <img src="images/quimica/${i.id}.svg" alt="${i.nombre}">
          </div>
          <div class="contenido-tema">
            <p>${i.descripcion}</p>
            <table class="tabla-estudio">
              <tr><th>Material</th><td>${i.material}</td></tr>
              <tr><th>Precisión</th><td>${i.precision}</td></tr>
            </table>
          </div>
        </div>

        <div class="contenido-tema">
          <h4>🎯 ¿Para qué se usa?</h4>
          <ul>${i.usos.map(u => `<li>${u}</li>`).join('')}</ul>

          <h4>🧪 ¿Cómo se usa?</h4>
          <ol>${i.pasos.map(p => `<li>${p}</li>`).join('')}</ol>

          <h4>⚠️ Precauciones</h4>
          <div class="nota-estudio alerta">
            <ul>${i.precauciones.map(p => `<li>${p}</li>`).join('')}</ul>
          </div>

          <div class="ejemplo"><strong>💡 ¿Sabías que…?</strong> ${i.dato}</div>

          <h4>📚 Lo verás en</h4>
          <ul>
            ${i.temas.map(t => `<li><a href="#/quimica/${temas[t].ruta}">${temas[t].texto}</a></li>`).join('')}
          </ul>
        </div>

        <div class="navegacion-lab">
          ${anterior ? `<a href="#/laboratorio/${anterior.id}">← ${anterior.nombre}</a>` : '<span></span>'}
          ${siguiente ? `<a href="#/laboratorio/${siguiente.id}">${siguiente.nombre} →</a>` : '<span></span>'}
        </div>
      </div>
    `;
    window.scrollTo(0, 0);
  }
};
