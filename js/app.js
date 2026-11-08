/* ==========================================================
   APP - Punto de entrada (actualizado para Router v2)
========================================================== */

/* ===== Menú desplegable «Materias» =====
   Se construye desde MATERIAS (js/data/materias.js): agregar una
   materia al catálogo la agrega automáticamente al menú. */
const MenuMaterias = {
  iniciar() {
    this.contenedor = document.getElementById('navMaterias');
    this.boton = document.getElementById('btnMaterias');
    this.panel = document.getElementById('panelMaterias');
    if (!this.contenedor || !this.boton || !this.panel || typeof MATERIAS === 'undefined') return;

    this.panel.innerHTML = MATERIAS_GRUPOS.map(grupo => {
      const materias = MATERIAS.filter(m => m.grupo === grupo.id);
      if (!materias.length) return '';
      return `
        <p class="panel-titulo">${grupo.titulo}</p>
        <div class="panel-grid">
          ${materias.map(m => `
            <a href="#/${m.id}" data-route="${m.id}" class="materia-link" role="menuitem" style="--materia: ${m.color};">
              <span class="materia-link-icono"><i class="fa-solid ${m.icono}"></i></span>
              <span class="materia-link-texto">
                <strong>${m.nombre}</strong>
                <small>${m.titulo !== m.nombre ? m.titulo : m.descripcion}</small>
              </span>
            </a>
          `).join('')}
        </div>
      `;
    }).join('');

    this.boton.addEventListener('click', (e) => {
      e.stopPropagation();
      this.alternar();
    });

    // Cerrar al elegir una materia, al hacer clic fuera o con Escape
    this.panel.addEventListener('click', (e) => {
      if (e.target.closest('a')) this.cerrar();
    });
    document.addEventListener('click', (e) => {
      if (!this.contenedor.contains(e.target)) this.cerrar();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.estaAbierto()) {
        this.cerrar();
        this.boton.focus();
      }
    });
    window.addEventListener('hashchange', () => this.cerrar());
  },

  estaAbierto() {
    return this.contenedor.classList.contains('abierto');
  },

  alternar() {
    this.estaAbierto() ? this.cerrar() : this.abrir();
  },

  abrir() {
    this.contenedor.classList.add('abierto');
    this.boton.setAttribute('aria-expanded', 'true');
    this.acomodarPanel();
  },

  // En pantalla grande el panel flota: se recorre a la izquierda si no cabe a la derecha
  acomodarPanel() {
    this.panel.style.left = '';
    if (getComputedStyle(this.panel).position !== 'absolute') return; // en celular es un acordeón
    const margen = 16;
    const caja = this.panel.getBoundingClientRect();
    const exceso = caja.right - (window.innerWidth - margen);
    if (exceso > 0) {
      const desplazamiento = Math.min(exceso, caja.left - margen);
      this.panel.style.left = `${-desplazamiento}px`;
    }
  },

  cerrar() {
    if (!this.contenedor) return;
    this.contenedor.classList.remove('abierto');
    this.boton.setAttribute('aria-expanded', 'false');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // ===== Registrar rutas con títulos =====
  Router.registrar('home',
    (c) => VistaHome.render(c),
    { titulo: 'Inicio' }
  );

  Router.registrar('ciencias',
    (c, params) => VistaCiencias.render(c, params),
    { titulo: 'Ciencias Naturales' }
  );

  Router.registrar('quimica',
    (c, params) => VistaQuimica.render(c, params),
    { titulo: 'Química' }
  );

  Router.registrar('matematicas',
    (c, params) => VistaMatematicas.render(c, params),
    { titulo: 'Matemáticas' }
  );

  Router.registrar('fisica',
    (c, params) => VistaFisica.render(c, params),
    { titulo: 'Física' }
  );

  // Router.registrar('probabilidad',
  //   (c, params) => VistaMateria.render(c, 'probabilidad', params),
  //   { titulo: 'Probabilidad y Estadística' }
  // );
  Router.registrar('ingles',
    (c, params) => VistaIngles.render(c, params),
    { titulo: 'Inglés' }
  );

  Router.registrar('filosofia',
    (c, params) => VistaFilosofia.render(c, params),
    { titulo: 'Pensamiento Filosófico y Humanidades' }
  );

  Router.registrar('cultura-digital',
    (c, params) => VistaCulturaDigital.render(c, params),
    { titulo: 'Cultura Digital' }
  );

  Router.registrar('quiz',
    (c, params) => VistaQuiz.render(c, params),
    { titulo: 'Quiz Interactivo' }
  );

  Router.registrar('contexto',
    (c) => VistaContexto.render(c),
    { titulo: 'Contexto Chiapas' }
  );

  Router.registrar('herramientas',
    (c) => VistaHerramientas.render(c),
    { titulo: 'Herramientas' }
  );

  Router.registrar('soporte',
    (c) => VistaSoporte.render(c),
    { titulo: 'Soporte y Contacto' }
  );

  Router.registrar('simuladores',
    (c) => VistaSimuladores.render(c),
    { titulo: 'Simuladores Interactivos' }
  );

  Router.registrar('agente',
    (c) => VistaAgente.render(c),
    { titulo: 'CienTIA' }
  );

  Router.registrar('lengua',
    (c, params) => VistaLengua.render(c, params),
    { titulo: 'Lengua y Comunicación' }
  );

  Router.registrar('laboratorio',
    (c, params) => VistaLaboratorio.render(c, params),
    { titulo: 'Material de Laboratorio' }
  );

  // Ruta privada (no aparece en el menú): modo desarrollador
  Router.registrar('private',
    (c) => VistaPrivado.render(c),
    { titulo: 'Área privada' }
  );

  Router.registrar('tabla-periodica',
    (c) => VistaTablaPeriodica.render(c),
    { titulo: 'Tabla Periódica Interactiva' }
  );
  // ===== Menú «Materias» (antes de iniciar el router para que marque la materia activa) =====
  MenuMaterias.iniciar();

  // ===== Iniciar router =====
  Router.iniciar();
  Utils.mostrarAvisoDesarrollador();

  // ===== Menú móvil =====
  document.getElementById('menuBtn')?.addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('activo');
  });

  // ===== Cerrar menú al hacer click en link =====
  document.querySelectorAll('.nav a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('nav').classList.remove('activo');
    });
  });

  // ===== Año en footer =====
  const anioEl = document.getElementById('anio');
  if (anioEl) anioEl.textContent = Utils.anioActual();

  /* Registro del Service Worker + aviso de actualización */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(reg => {
          console.log('✅ SW registrado:', reg.scope);

          // Detecta nueva versión
          reg.addEventListener('updatefound', () => {
            const newWorker = reg.installing;
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // Hay nueva versión lista
                if (confirm('🚀 Nueva versión disponible. ¿Recargar ahora?')) {
                  newWorker.postMessage('SKIP_WAITING');
                  window.location.reload();
                }
              }
            });
          });
        })
        .catch(err => console.error('❌ Error SW:', err));

      // Recarga automática al cambiar de SW
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing) return;
        refreshing = true;
        window.location.reload();
      });
    });
  }
});