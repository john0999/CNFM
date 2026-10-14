/* ==========================================================
   VIEW - TABLA PERIÓDICA (estilos inline)
========================================================== */

const VistaTablaPeriodica = {
  render(contenedor) {
    const t = TABLA_PERIODICA;
    const cats = t.categorias;

    contenedor.innerHTML = `
      <!-- HEADER -->
      <div style="
        background: linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #14b8a6 100%);
        color: #ffffff;
        padding: 3rem 1.5rem;
        text-align: center;
      ">
        <h2 style="font-size: 2rem; margin: 0 0 0.5rem 0;">${t.titulo}</h2>
        <p style="opacity: 0.95; max-width: 650px; margin: 0 auto;">${t.subtitulo}</p>
      </div>

      <div style="max-width: 1300px; margin: 0 auto; padding: 1.5rem;">

        <!-- BOTÓN VOLVER -->
        <button onclick="Router.ir('quimica')" style="
          background: #f1f5f9; color: #1e293b; padding: 0.6rem 1.2rem;
          border: none; border-radius: 8px; font-weight: 600; cursor: pointer;
          margin-bottom: 1.5rem;
        ">← Volver a Química</button>

        <!-- LEYENDA DE CATEGORÍAS -->
        <div style="
          display: flex; flex-wrap: wrap; gap: 0.6rem; justify-content: center;
          background: #ffffff; padding: 1rem; border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08); margin-bottom: 1.5rem;
        ">
          ${Object.values(cats).map(c => `
            <span style="
              display: inline-flex; align-items: center; gap: 0.4rem;
              font-size: 0.78rem; color: #1e293b; font-weight: 600;
              padding: 0.3rem 0.7rem; border-radius: 20px; background: #f8fafc;
            ">
              <span style="
                width: 12px; height: 12px; border-radius: 3px;
                background: ${c.color}; display: inline-block;
              "></span>
              ${c.nombre}
            </span>
          `).join('')}
        </div>

        <!-- TABLA PERIÓDICA -->
        <div style="
          overflow-x: auto; padding: 1rem 0;
          background: #ffffff; border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        ">
          <div id="tablaGrid" style="
            display: grid;
            grid-template-columns: repeat(18, 60px);
            grid-template-rows: repeat(10, 60px);
            gap: 3px;
            padding: 1rem;
            min-width: 1140px;
            justify-content: center;
          ">
            ${this.renderElementos()}
          </div>
        </div>

        <!-- INFO DEL ELEMENTO SELECCIONADO -->
        <div id="infoElemento" style="
          margin-top: 1.5rem;
          background: #ffffff;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          border-left: 5px solid #0d9488;
          display: none;
        "></div>

      </div>
    `;

    this.configurarClicks();
  },

  renderElementos() {
    const elementos = TABLA_PERIODICA.elementos;
    const cats = TABLA_PERIODICA.categorias;
    let html = '';

    elementos.forEach(([z, simbolo, nombre, masa, cat, grupo, periodo, config]) => {
      const color = cats[cat]?.color || '#94a3b8';

      // Posición: los lantánidos y actínidos van en filas especiales (9 y 10)
      let fila = periodo;
      if (cat === "lantánido") fila = 9;
      if (cat === "actínido") fila = 10;
      
      // Los lantánidos empiezan en columna 3
      let columna = grupo;
      if (cat === "lantánido") columna = z - 57 + 3;
      if (cat === "actínido") columna = z - 89 + 3;

      html += `
        <div class="elemento-tp" 
             data-z="${z}"
             style="
               grid-column: ${columna};
               grid-row: ${fila};
               background: ${color};
               color: #ffffff;
               border-radius: 6px;
               display: flex;
               flex-direction: column;
               align-items: center;
               justify-content: center;
               cursor: pointer;
               font-size: 0.7rem;
               padding: 2px;
               transition: transform 0.2s, box-shadow 0.2s;
               user-select: none;
             "
             onmouseover="this.style.transform='scale(1.1)';this.style.zIndex='10';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.3)';"
             onmouseout="this.style.transform='scale(1)';this.style.zIndex='1';this.style.boxShadow='none';"
             title="${nombre}">
          <span style="font-size: 0.6rem; opacity: 0.85; line-height: 1;">${z}</span>
          <span style="font-size: 1.1rem; font-weight: 900; line-height: 1.1;">${simbolo}</span>
          <span style="font-size: 0.55rem; opacity: 0.9; line-height: 1; text-align:center; overflow:hidden; white-space:nowrap; text-overflow:ellipsis; max-width: 100%;">${nombre}</span>
        </div>
      `;
    });

    return html;
  },

  configurarClicks() {
    document.querySelectorAll('.elemento-tp').forEach(el => {
      el.addEventListener('click', () => {
        const z = parseInt(el.dataset.z);
        this.mostrarInfo(z);
      });
    });
  },

  mostrarInfo(z) {
    const elemento = TABLA_PERIODICA.elementos.find(e => e[0] === z);
    if (!elemento) return;

    const [num, simbolo, nombre, masa, cat, grupo, periodo, config] = elemento;
    const categoria = TABLA_PERIODICA.categorias[cat];
    const color = categoria?.color || '#94a3b8';
    const info = document.getElementById('infoElemento');

    // Datos adicionales según el elemento
    const datosExtra = this.obtenerDatosExtra(z);

    info.style.display = 'block';
    info.style.borderLeftColor = color;
    info.innerHTML = `
      <div style="display: flex; align-items: flex-start; gap: 1.5rem; flex-wrap: wrap;">
        <div style="
          background: ${color};
          color: #ffffff;
          width: 120px;
          height: 120px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        ">
          <span style="font-size: 0.85rem; opacity: 0.85;">${num}</span>
          <span style="font-size: 2.5rem; font-weight: 900; line-height: 1;">${simbolo}</span>
          <span style="font-size: 0.75rem; opacity: 0.9;">${masa} u</span>
        </div>

        <div style="flex: 1; min-width: 250px;">
          <h3 style="color: #0f766e; margin: 0 0 0.5rem 0; font-size: 1.5rem;">${nombre}</h3>
          <span style="
            background: ${color}22;
            color: ${color};
            font-size: 0.75rem;
            font-weight: 700;
            padding: 0.25rem 0.7rem;
            border-radius: 20px;
            text-transform: uppercase;
          ">${categoria?.nombre || cat}</span>

          <div style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 0.8rem;
            margin-top: 1rem;
          ">
            <div>
              <span style="font-size: 0.7rem; color: #64748b; text-transform: uppercase; font-weight: 600;">Número atómico</span>
              <p style="margin: 0; font-weight: 700; color: #1e293b;">${num}</p>
            </div>
            <div>
              <span style="font-size: 0.7rem; color: #64748b; text-transform: uppercase; font-weight: 600;">Masa atómica</span>
              <p style="margin: 0; font-weight: 700; color: #1e293b;">${masa} u</p>
            </div>
            <div>
              <span style="font-size: 0.7rem; color: #64748b; text-transform: uppercase; font-weight: 600;">Grupo</span>
              <p style="margin: 0; font-weight: 700; color: #1e293b;">${grupo}</p>
            </div>
            <div>
              <span style="font-size: 0.7rem; color: #64748b; text-transform: uppercase; font-weight: 600;">Periodo</span>
              <p style="margin: 0; font-weight: 700; color: #1e293b;">${periodo}</p>
            </div>
          </div>

          <div style="margin-top: 1rem;">
            <span style="font-size: 0.7rem; color: #64748b; text-transform: uppercase; font-weight: 600;">Configuración electrónica</span>
            <p style="
              margin: 0.3rem 0 0 0;
              font-family: 'Courier New', monospace;
              background: #f1f5f9;
              padding: 0.6rem 0.9rem;
              border-radius: 6px;
              font-size: 0.9rem;
              border-left: 3px solid ${color};
            ">${config}</p>
          </div>

          ${datosExtra ? `
            <div style="margin-top: 1rem; padding: 0.8rem; background: #fef3c7; border-radius: 8px; border-left: 3px solid #f59e0b;">
              <span style="font-size: 0.75rem; font-weight: 700; color: #92400e;">💡 ¿Sabías que...?</span>
              <p style="margin: 0.3rem 0 0 0; font-size: 0.88rem; color: #78350f;">${datosExtra}</p>
            </div>
          ` : ''}
        </div>
      </div>
    `;

    info.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  },

  obtenerDatosExtra(z) {
    const datos = {
      1:  "El hidrógeno es el elemento más abundante del universo (75%).",
      2:  "El helio fue descubierto en el Sol antes que en la Tierra.",
      6:  "El carbono es la base de toda la vida conocida.",
      8:  "El oxígeno representa el 21% de la atmósfera terrestre.",
      11: "El sodio es esencial para el funcionamiento de las células.",
      13: "El aluminio es el metal más abundante en la corteza terrestre.",
      20: "El calcio se usa para encalar las milpas en Chiapas.",
      26: "El hierro es el metal más usado en la industria mundial.",
      29: "El cobre es un excelente conductor de electricidad.",
      47: "La plata es el mejor conductor eléctrico de todos los metales.",
      79: "El oro es un metal noble que no se oxida fácilmente.",
      92: "El uranio se usa como combustible nuclear en reactores.",
      118:"El oganesón es el elemento más pesado sintetizado hasta ahora."
    };
    return datos[z] || null;
  }
};