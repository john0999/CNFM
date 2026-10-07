/* ==========================================================
   VIEW - CONTEXTO CHIAPAS
========================================================== */

const VistaContexto = {
  render(contenedor) {
    const ctx = CONTEXTO;

    contenedor.innerHTML = `
      <div class="contenedor materia-header">
        <button class="btn-volver" onclick="Router.ir('home')">← Volver al inicio</button>
        <h2>${ctx.titulo}</h2>
        <p>${ctx.subtitulo}</p>
      </div>
      <div class="contenedor" style="padding-bottom:3rem;">
        <div class="contexto-intro">${ctx.intro}</div>
        <div class="contexto-datos">
          ${ctx.datos.map(d => `
            <div class="dato-card">
              <span class="dato-icono">${d.icono}</span>
              <span class="dato-numero">${d.numero}</span>
              <span class="dato-label">${d.label}</span>
            </div>
          `).join('')}
        </div>
        ${ctx.secciones.map(s => `
          <div class="contexto-seccion">
            <h3>${s.titulo}</h3>
            ${s.contenido}
          </div>
        `).join('')}
      </div>
    `;
  }
};