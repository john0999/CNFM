/* ==========================================================
   DATA - Simuladores interactivos
========================================================== */

const SIMULADORES = {
  titulo: "Simuladores Interactivos",
  subtitulo: "Aprende experimentando. Simulaciones gratuitas de Física, Química, Biología y Matemáticas.",
  intro: "Recursos de PhET Colorado y otras plataformas. Muchas funcionan sin conexión una vez cargadas.",

  categorias: [
    {
      nombre: "⚗️ Química",
      color: "#dc2626",
      simuladores: [
        {
          nombre: "Constructor de Átomos",
          url: "./views/quimica/ConstruyeUnAtomo.html",
          descripcion: "Construye átomos con protones, neutrones y electrones. Aprende sobre iones e isótopos.",
          nivel: "Básico",
          idioma: "Español"
        },
        {
          nombre: "Estados de la Materia",
          url: "./views/quimica/Estadosdelamateria.html",
          descripcion: "Explora cómo cambian los estados sólido, líquido y gaseoso con la temperatura.",
          nivel: "Básico",
          idioma: "Español"
        },
        {
          nombre: "Balanceo de Ecuaciones Químicas",
          url: "./views/quimica/BalanceoDeEcuaciones.html",
          descripcion: "Practica el balanceo de reacciones químicas de forma interactiva.",
          nivel: "Intermedio",
          idioma: "Español"
        },
        {
          nombre: "Concentración y Molaridad",
          url: "./views/quimica/ConcentracionYMolaridad.html",
          descripcion: "Aprende a calcular concentración y molaridad de soluciones.",
          nivel: "Intermedio",
          idioma: "Español"
        },
        {
          nombre: "pH y Ácidos-Bases",
          url: "./views/quimica/EscaladepH.html",
          descripcion: "Mide el pH de diferentes sustancias. Comprende la escala ácido-base.",
          nivel: "Básico",
          idioma: "Español"
        },
        {
          nombre: "Construye una Molécula",
          url: "./views/quimica/ConstruyeunaMolecula.html",
          descripcion: "Construye moléculas a partir de la fórmula química.",
          nivel: "Básico",
          idioma: "Español"
        }
      ]
    },
    {
      nombre: "⚡ Física",
      color: "#7c3aed",
      simuladores: [
        {
          nombre: "En Desarrollo, pronto estará disponible",
          url: "#",
          descripcion: "Simulador en desarrollo. Pronto estará disponible para su uso.",
          nivel: "Básico",
          idioma: "Español"
        }
        // {
        //   nombre: "Fuerzas y Movimiento",
        //   url: "https://phet.colorado.edu/es/simulation/forces-and-motion-basics",
        //   descripcion: "Empuja objetos y observa cómo se mueven. Aprende las leyes de Newton.",
        //   nivel: "Básico",
        //   idioma: "Español"
        // },
        // {
        //   nombre: "Péndulo Simple",
        //   url: "https://phet.colorado.edu/es/simulation/pendulum-lab",
        //   descripcion: "Explora el período y la energía de un péndulo en movimiento.",
        //   nivel: "Intermedio",
        //   idioma: "Español"
        // },
        // {
        //   nombre: "Circuitos Eléctricos",
        //   url: "https://phet.colorado.edu/es/simulation/circuit-construction-kit-dc",
        //   descripcion: "Construye circuitos en serie y paralelo. Mide voltaje y corriente.",
        //   nivel: "Intermedio",
        //   idioma: "Español"
        // },
        // {
        //   nombre: "Ondas en una Cuerda",
        //   url: "https://phet.colorado.edu/es/simulation/wave-on-a-string",
        //   descripcion: "Genera ondas y observa reflexión, interferencia y frecuencia.",
        //   nivel: "Básico",
        //   idioma: "Español"
        // },
        // {
        //   nombre: "Caída Libre",
        //   url: "https://phet.colorado.edu/es/simulation/projectile-motion",
        //   descripcion: "Lanza proyectiles y calcula trayectoria, velocidad y alcance.",
        //   nivel: "Intermedio",
        //   idioma: "Español"
        // },
        // {
        //   nombre: "Energía en la Montaña Rusa",
        //   url: "https://phet.colorado.edu/es/simulation/energy-skate-park",
        //   descripcion: "Aprende conservación de energía con una pista de patinaje.",
        //   nivel: "Básico",
        //   idioma: "Español"
        // }
      ]
    },
    {
      nombre: "🧬 Biología",
      color: "#059669",
      simuladores: [
        {
          nombre: "En Desarrollo, pronto estará disponible",
          url: "#",
          descripcion: "Simulador en desarrollo. Pronto estará disponible para su uso.",
          nivel: "Básico",
          idioma: "Español"
        }
        // {
        //   nombre: "Selección Natural",
        //   url: "https://phet.colorado.edu/es/simulation/natural-selection",
        //   descripcion: "Observa cómo evoluciona una población de conejos según su entorno.",
        //   nivel: "Intermedio",
        //   idioma: "Español"
        // },
        // {
        //   nombre: "Neuronas",
        //   url: "https://phet.colorado.edu/es/simulation/neuron",
        //   descripcion: "Explora cómo las neuronas transmiten señales eléctricas.",
        //   nivel: "Avanzado",
        //   idioma: "Español"
        // },
        // {
        //   nombre: "Membrana Celular",
        //   url: "https://phet.colorado.edu/es/simulation/membrane-channels",
        //   descripcion: "Descubre cómo funciona el transporte celular.",
        //   nivel: "Avanzado",
        //   idioma: "Español"
        // },
        // {
        //   nombre: "Genética de Poblaciones",
        //   url: "https://phet.colorado.edu/es/simulation/gene-expression-essentials",
        //   descripcion: "Explora cómo se expresan los genes y se heredan los caracteres.",
        //   nivel: "Intermedio",
        //   idioma: "Español"
        // }
      ]
    },
    {
      nombre: "📐 Matemáticas",
      color: "#2563eb",
      simuladores: [
        {
          nombre: "En Desarrollo, pronto estará disponible",
          url: "#",
          descripcion: "Simulador en desarrollo. Pronto estará disponible para su uso.",
          nivel: "Básico",
          idioma: "Español"
        }
        // {
        //   nombre: "Graficadora de Funciones",
        //   url: "https://www.geogebra.org/graphing",
        //   descripcion: "Grafica cualquier función. Analiza dominio, rango, raíces y más.",
        //   nivel: "Básico",
        //   idioma: "Español"
        // },
        // {
        //   nombre: "Geometría Interactiva",
        //   url: "https://www.geogebra.org/geometry",
        //   descripcion: "Construye figuras geométricas y explora sus propiedades.",
        //   nivel: "Básico",
        //   idioma: "Español"
        // },
        // {
        //   nombre: "Probabilidad y Estadística",
        //   url: "https://www.geogebra.org/classic#probability",
        //   descripcion: "Visualiza distribuciones y calcula probabilidades.",
        //   nivel: "Intermedio",
        //   idioma: "Español"
        // },
        // {
        //   nombre: "Trigonometría",
        //   url: "https://www.geogebra.org/m/trigonometry",
        //   descripcion: "Explora el círculo unitario y las funciones trigonométricas.",
        //   nivel: "Intermedio",
        //   idioma: "Español"
        // }
      ]
    },
    {
      nombre: "📊 Probabilidad y Estadística",
      color: "#0891b2",
      simuladores: [
        {
          nombre: "En Desarrollo, pronto estará disponible",
          url: "#",
          descripcion: "Simulador en desarrollo. Pronto estará disponible para su uso.",
          nivel: "Básico",
          idioma: "Español"
        }
        // {
        //   nombre: "Distribución Normal",
        //   url: "https://www.geogebra.org/m/ZaMv8SpD",
        //   descripcion: "Visualiza la campana de Gauss y calcula áreas bajo la curva.",
        //   nivel: "Intermedio",
        //   idioma: "Español"
        // },
        // {
        //   nombre: "Lanzamiento de Monedas",
        //   url: "https://phet.colorado.edu/es/simulation/plinko-probability",
        //   descripcion: "Experimenta con probabilidad mediante el juego de Plinko.",
        //   nivel: "Básico",
        //   idioma: "Español"
        // }
      ]
    }
  ]
};