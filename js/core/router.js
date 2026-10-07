/* ==========================================================
   ROUTER - Sistema de rutas hash-based SPA
   Soporta rutas multi-segmento: #/materia/param1/param2
========================================================== */

const Router = {
  // ===== Estado =====
  rutas: {},          // { nombre: { handler, titulo } }
  rutaActual: '',     // nombre de la ruta actual
  paramsActuales: {}, // parámetros parseados

  // ===== Registro de rutas =====
  /**
   * Registra una ruta en el sistema
   * @param {string} nombre - Identificador de la ruta (ej: 'home', 'ciencias')
   * @param {Function} handler - Función que renderiza la vista
   * @param {Object} opciones - { titulo: 'Título de la página' }
   */
  registrar(nombre, handler, opciones = {}) {
    this.rutas[nombre] = {
      handler,
      titulo: opciones.titulo || nombre
    };
  },

  // ===== Navegación =====
  /**
   * Navega a una ruta
   * @param {string} ruta - Nombre de la ruta
   * @param {string|Object} params - Parámetro único o array de params
   * 
   * Ejemplos:
   *   Router.ir('ciencias')                    → #/ciencias
   *   Router.ir('ciencias', 'semestre-3')      → #/ciencias/semestre-3
   *   Router.ir('quiz', 'ciencias-3')          → #/quiz/ciencias-3
   *   Router.ir('ciencias', ['semestre-3', 't3-5']) → #/ciencias/semestre-3/t3-5
   */
  ir(ruta, params = null) {
    let hash = `#/${ruta}`;

    if (params) {
      if (Array.isArray(params)) {
        hash += '/' + params.filter(Boolean).join('/');
      } else {
        hash += '/' + params;
      }
    }

    // Si ya estamos en esa ruta, forzar re-ejecución
    if (window.location.hash === hash) {
      this.ejecutar();
    } else {
      window.location.hash = hash;
    }
  },

  /**
   * Reemplaza la URL sin agregar al historial
   */
  reemplazar(ruta, params = null) {
    let hash = `#/${ruta}`;
    if (params) {
      hash += '/' + (Array.isArray(params) ? params.join('/') : params);
    }
    history.replaceState(null, '', hash);
    this.ejecutar();
  },

  /**
   * Navega hacia atrás en el historial
   */
  atras() {
    window.history.back();
  },

  // ===== Parseo de URL =====
  /**
   * Parsea el hash actual y devuelve un objeto con los datos
   * @returns {Object} { ruta, params: [], id, query: {} }
   * 
   * Ejemplos:
   *   #/ciencias                    → { ruta: 'ciencias', params: [], id: null }
   *   #/ciencias/semestre-3         → { ruta: 'ciencias', params: ['semestre-3'], id: 'semestre-3' }
   *   #/ciencias/semestre-3/t3-5    → { ruta: 'ciencias', params: ['semestre-3', 't3-5'], id: 'semestre-3' }
   *   #/quiz?tipo=ciencias          → { ruta: 'quiz', params: [], id: null, query: { tipo: 'ciencias' } }
   */
  obtenerRuta() {
    // Extraer hash sin el #/ inicial
    let hash = window.location.hash.replace(/^#\/?/, '');

    // Separar query params (?clave=valor)
    const [path, queryString] = hash.split('?');
    const query = {};
    if (queryString) {
      new URLSearchParams(queryString).forEach((v, k) => query[k] = v);
    }

    // Separar segmentos del path
    const segmentos = path.split('/').filter(Boolean);

    return {
      ruta: segmentos[0] || 'home',
      params: segmentos.slice(1),
      id: segmentos[1] || null,        // Compatibilidad: primer param como id
      segundo: segmentos[2] || null,   // Compatibilidad: segundo param
      query
    };
  },

  // ===== Ejecución =====
  /**
   * Ejecuta la ruta actual: obtiene el handler, limpia el contenedor y lo renderiza
   */
  async ejecutar() {
    const { ruta, params, id, segundo, query } = this.obtenerRuta();

    // Guardar estado actual
    this.rutaActual = ruta;
    this.paramsActuales = { params, id, segundo, query };

    // Buscar handler (fallback a home)
    const registro = this.rutas[ruta] || this.rutas.home;
    if (!registro) {
      console.error(`❌ Ruta no encontrada: ${ruta}`);
      return;
    }

    // Actualizar navegación
    this.actualizarNavActivo(ruta);

    // Actualizar título de la página
    document.title = `${registro.titulo} | Quantix`;

    // Renderizar
    const contenedor = document.getElementById('app');
    if (!contenedor) {
      console.error('❌ Contenedor #app no encontrado');
      return;
    }

    // Limpiar contenedor
    contenedor.innerHTML = '';

    // Ejecutar handler con todos los parámetros
    try {
      await registro.handler(contenedor, {
        id,
        segundo,
        params,
        query,
        ruta
      });
    } catch (error) {
      console.error('❌ Error al ejecutar ruta:', error);
      contenedor.innerHTML = `
        <div class="contenedor vacio">
          <div class="icono">⚠️</div>
          <h3>Algo salió mal</h3>
          <p>No pudimos cargar esta sección. Intenta de nuevo.</p>
          <button class="btn btn-primario" onclick="Router.ir('home')">Volver al inicio</button>
        </div>
      `;
    }

    // Scroll al top (excepto si hay un ancla interna)
    if (!window.location.hash.includes('#t')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  // ===== Navegación activa =====
  /**
   * Marca el link activo en el nav según la ruta actual
   */
  actualizarNavActivo(ruta) {
    document.querySelectorAll('.nav a').forEach(a => {
      const routeAttr = a.dataset.route || a.getAttribute('href')?.replace(/^#\//, '');
      a.classList.toggle('activo', routeAttr === ruta);
    });
  },

  // ===== Utilidades =====
  /**
   * Obtiene un parámetro específico de la URL actual
   */
  obtenerParam(indice = 0) {
    return this.paramsActuales.params?.[indice] || null;
  },

  /**
   * Verifica si estamos en una ruta específica
   */
  esRuta(nombre) {
    return this.rutaActual === nombre;
  },

  /**
   * Redirige si la ruta no existe
   */
  validarRuta(rutasValidas) {
    if (!rutasValidas.includes(this.rutaActual)) {
      this.ir('home');
      return false;
    }
    return true;
  },

  // ===== Inicialización =====
  iniciar() {
    // Escuchar cambios de hash
    window.addEventListener('hashchange', () => this.ejecutar());

    // Ejecutar al cargar
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.ejecutar());
    } else {
      this.ejecutar();
    }
  }
};