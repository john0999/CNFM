/* ==========================================================
   VIEW - SIMULADORES (estilos inline)
========================================================== */

const VistaSimuladores = {
  render(contenedor) {
    const s = SIMULADORES;

    contenedor.innerHTML = `
      <!-- ===== HEADER ===== -->
      <div style="
        background: linear-gradient(135deg, #0f766e 0%, #0d9488 50%, #14b8a6 100%);
        color: #ffffff;
        padding: 3rem 1.5rem;
        text-align: center;
      ">
        <h2 style="
          font-size: 2rem;
          margin: 0 0 0.5rem 0;
          line-height: 1.2;
        ">${s.titulo}</h2>
        <p style="
          opacity: 0.95;
          max-width: 650px;
          margin: 0 auto 1.5rem auto;
          font-size: 1.05rem;
        ">${s.subtitulo}</p>
        <p style="
          opacity: 0.85;
          max-width: 700px;
          margin: 0 auto;
          font-size: 0.9rem;
          font-style: italic;
        ">${s.intro}</p>
      </div>

      <!-- ===== BOTÓN VOLVER ===== -->
      <div style="
        max-width: 1200px;
        margin: 1.5rem auto 0 auto;
        padding: 0 1.5rem;
      ">
        <button onclick="Router.ir('home')" style="
          background: #f1f5f9;
          color: #1e293b;
          padding: 0.6rem 1.2rem;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 0.95rem;
          transition: background 0.25s;
        " onmouseover="this.style.background='#0d9488';this.style.color='#fff';"
           onmouseout="this.style.background='#f1f5f9';this.style.color='#1e293b';">
          ← Volver al inicio
        </button>
      </div>

      <!-- ===== CONTENIDO ===== -->
      <div style="
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 1.5rem 4rem 1.5rem;
      ">
        ${s.categorias.map(cat => this.renderCategoria(cat)).join('')}
      </div>
    `;
  },

  renderCategoria(categoria) {
    return `
      <!-- ===== CATEGORÍA: ${categoria.nombre} ===== -->
      <section style="margin-bottom: 3rem;">
        
        <h3 style="
          font-size: 1.5rem;
          color: ${categoria.color};
          margin: 0 0 1.2rem 0;
          padding-bottom: 0.5rem;
          border-bottom: 3px solid ${categoria.color};
          display: inline-block;
        ">${categoria.nombre}</h3>

        <div style="
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
          gap: 1.2rem;
          margin-top: 1rem;
        ">
          ${categoria.simuladores.map(sim => this.renderTarjeta(sim, categoria.color)).join('')}
        </div>
      </section>
    `;
  },

  renderTarjeta(sim, color) {
    // Colores según nivel
    const coloresNivel = {
      "Básico": { bg: "#dcfce7", text: "#166534" },
      "Intermedio": { bg: "#fef3c7", text: "#92400e" },
      "Avanzado": { bg: "#fee2e2", text: "#991b1b" }
    };
    const nivel = coloresNivel[sim.nivel] || coloresNivel["Básico"];

    return `
      <a href="${sim.url}" 
        
         rel="noopener noreferrer"
         style="
           display: flex;
           flex-direction: column;
           justify-content: space-between;
           background: #ffffff;
           border-radius: 12px;
           padding: 1.3rem;
           text-decoration: none;
           color: #1e293b;
           box-shadow: 0 4px 15px rgba(0,0,0,0.08);
           border-top: 4px solid ${color};
           transition: transform 0.25s, box-shadow 0.25s;
           min-height: 220px;
         "
         onmouseover="this.style.transform='translateY(-5px)';this.style.boxShadow='0 10px 25px rgba(0,0,0,0.15)';"
         onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 4px 15px rgba(0,0,0,0.08)';">
        
        <!-- Icono -->
        <div>
          <div style="
            font-size: 2rem;
            margin-bottom: 0.6rem;
            line-height: 1;
          ">🔬</div>

          <h4 style="
            color: #0f766e;
            margin: 0 0 0.5rem 0;
            font-size: 1.05rem;
            line-height: 1.3;
          ">${sim.nombre}</h4>

          <p style="
            color: #64748b;
            font-size: 0.88rem;
            line-height: 1.5;
            margin: 0 0 0.8rem 0;
          ">${sim.descripcion}</p>
        </div>

        <!-- Meta: nivel + idioma -->
        <div style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        ">
          <span style="
            background: ${nivel.bg};
            color: ${nivel.text};
            font-size: 0.7rem;
            font-weight: 700;
            padding: 0.25rem 0.7rem;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          ">${sim.nivel}</span>

          <span style="
            font-size: 0.75rem;
            color: #64748b;
            font-weight: 600;
          ">🌐 ${sim.idioma}</span>
        </div>

        <!-- Botón visual -->
        <div style="
          margin-top: 0.8rem;
          padding-top: 0.8rem;
          border-top: 1px dashed #e2e8f0;
          color: ${color};
          font-weight: 700;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        ">
          Abrir simulador
          <span style="font-size: 1rem;">→</span>
        </div>
      </a>
    `;
  }
};