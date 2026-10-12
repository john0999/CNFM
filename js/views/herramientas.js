/* ==========================================================
   VIEW - HERRAMIENTAS
========================================================== */

const VistaHerramientas = {
  render(contenedor) {
    const h = HERRAMIENTAS;

    contenedor.innerHTML = `
      <div class="contenedor materia-header">
        <button class="btn-volver" onclick="Router.ir('home')">← Volver al inicio</button>
        <h2>${h.titulo}</h2>
        <p>${h.subtitulo}</p>
      </div>
      <div class="contenedor" style="padding-bottom:3rem;">
        <p class="intro-herramientas">${h.intro}</p>

        <div class="grupo-herramientas">
          <h3>🌐 Plataformas en línea</h3>
          <div class="grid-herramientas">
            ${h.plataformas.map(p => `
              <a href="${p.url}" target="_blank" rel="noopener" class="herramienta-card ${p.recomendado ? 'recomendada' : ''}">
                <span class="icono">${p.icono}</span>
                <h4>${p.nombre} ${p.recomendado ? '⭐' : ''}</h4>
                <p>${p.descripcion}</p>
              </a>
            `).join('')}
          </div>
        </div>

        <div class="grupo-herramientas">
          <h3>📴 Recursos sin internet</h3>
          <div class="grid-herramientas">
            ${h.offline.map(o => `
              <div class="herramienta-card">
                <span class="icono">${o.icono}</span>
                <h4>${o.nombre}</h4>
                <p>${o.descripcion}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="grupo-herramientas">
          <h3>💡 Consejos para estudiar</h3>
          <div class="grid-consejos">
            ${h.consejos.map(c => `
              <div class="consejo-card">
                <h4>${c.titulo}</h4>
                <p>${c.texto}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }
};