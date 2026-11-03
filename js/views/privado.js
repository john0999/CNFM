/* ==========================================================
   VIEW - ÁREA PRIVADA (#/private)
   No aparece en el menú. Permite activar el modo desarrollador,
   que desbloquea todos los temas en este navegador.
========================================================== */

const VistaPrivado = {
  render(contenedor) {
    contenedor.innerHTML = `
      <div class="contenedor materia-header">
        <button class="btn-volver" onclick="Router.ir('home')">← Volver al inicio</button>
        <h2>🔐 Área privada</h2>
        <p>Herramientas para el desarrollador</p>
      </div>
      <div class="contenedor" style="padding-bottom: 3rem;">
        <div class="grupo-herramientas">
          <h3>🛠️ Modo desarrollador</h3>
          <div class="tarjeta-desarrollador" id="tarjetaDesarrollador"></div>
        </div>
      </div>
    `;

    this.renderModoDesarrollador();
  },

  // Activa o desactiva el modo desarrollador (desbloquea todos los temas en este navegador)
  renderModoDesarrollador() {
    const tarjeta = document.getElementById('tarjetaDesarrollador');
    if (!tarjeta) return;

    if (Utils.modoDesarrollador()) {
      tarjeta.innerHTML = `
        <p><strong>✅ Activo.</strong> Todos los temas, prácticas y niveles del quiz están desbloqueados en este navegador. El avance guardado no se modifica.</p>
        <button type="button" id="btnDesactivarDesarrollador" class="btn-desarrollador secundario">Desactivar modo desarrollador</button>
      `;
      document.getElementById('btnDesactivarDesarrollador').addEventListener('click', () => {
        Utils.desactivarModoDesarrollador();
        this.renderModoDesarrollador();
      });
      return;
    }

    tarjeta.innerHTML = `
      <p>Desbloquea todos los temas de todas las materias para revisar el contenido sin tener que aprobar las prácticas. Solo funciona en este navegador.</p>
      <form id="formDesarrollador" class="form-desarrollador">
        <input type="password" id="pinDesarrollador" inputmode="numeric" autocomplete="off" placeholder="PIN de desarrollador" aria-label="PIN de desarrollador">
        <button type="submit" class="btn-desarrollador">Desbloquear todo</button>
      </form>
      <p id="mensajeDesarrollador" class="mensaje-desarrollador" role="alert"></p>
    `;
    document.getElementById('formDesarrollador').addEventListener('submit', (e) => {
      e.preventDefault();
      const pin = document.getElementById('pinDesarrollador').value;
      if (Utils.activarModoDesarrollador(pin)) {
        this.renderModoDesarrollador();
      } else {
        document.getElementById('mensajeDesarrollador').textContent = '❌ PIN incorrecto.';
      }
    });
  }
};
