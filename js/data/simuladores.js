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
      nombre: "Ciencias Naturales, Experimentales y Tecnología",
      color: "#059669",
      simuladores: [
        {
          nombre: "Transporte de membrana",
          url: "./views/ciencias/Transportedemembrana.html",
          descripcion: "Predecir cuándo las moléculas e iones con un tamaño y carga específicos atravesarán la membrana y cuándo no lo harán.",
          nivel: "Intermedio",
          idioma: "Español"
        },
        {
          nombre: "Densidad",
          url: "./views/ciencias/Densidad.html",
          descripcion: "Explica cómo los objetos de masa similar pueden tener diferentes volúmenes, y cómo los objetos de volumen similar pueden tener diferentes masas.",
          nivel: "Avanzado",
          idioma: "Español"
        },
        {
          nombre: "Selección Natural",
          url: "./views/ciencias/seleccionnatural.html",
          descripcion: "Determina qué mutaciones son favorecidas o neutrales para los agentes de selección de depredadores y variedad de alimentos.",
          nivel: "Avanzado",
          idioma: "Español"
        },
        {
          nombre: "Expresión génica - Fundamentos",
          url: "./views/ciencias/expresiongenica.html",
          descripcion: "Predice cómo el cambio de las concentraciones e interacciones de las biomoléculas afecta la producción de proteínas.",
          nivel: "Intermedio",
          idioma: "Español"
        }
      ]
    },
    {
      nombre: "📐 Matemáticas",
      color: "#2563eb",
      simuladores: [
        {
          nombre: "Recta Numérica: Distancia",
          url: "./views/matematicas/RectaNumerica.html",
          descripcion: "Razonar sobre la resta de enteros en términos de ubicaciones de números y distancias dirigidas.",
          nivel: "Básico",
          idioma: "Español"
        },
        {
          nombre: "Recta Numérica: Operaciones",
          url: "./views/matematicas/RectaNumericaOperaciones.html",
          descripcion: "Utiliza la lógica para razonar que la suma tiene el efecto opuesto a la resta o que sumar (o restar) un número entero negativo tiene el efecto opuesto a sumar (o restar) un entero positivo.",
          nivel: "Básico",
          idioma: "Español"
        },
        {
          nombre: "Graficando Cuadráticas",
          url: "./views/matematicas/graficandocuadráticas.html",
          descripcion: "Describe cómo cambiar los coeficientes de una función cuadrática cambia la gráfica de la función.",
          nivel: "Intermedio",
          idioma: "Español"
        },
        {
          nombre: "Modelo de Áreas: Decimales",
          url: "./views/matematicas/modelodeareas.html",
          descripcion: "Crear una estrategia para determinar el producto de dos números racionales (o un número entero y uno racional) mediante la representación del producto como un área o la suma de áreas.",
          nivel: "Intermedio",
          idioma: "Español"
        },
        {
          nombre: "Modelo de Áreas: Álgebra",
          url: "./views/matematicas/modeloalgebra.html",
          descripcion: "Desarrolla y justifica un método para usar el modelo de áreas para determinar el producto de un monomio y un binomio o el producto de dos binomios.",
          nivel: "Avanzado",
          idioma: "Español"
        },
        {
          nombre: "Aritmética",
          url: "./views/matematicas/aritmetica.html",
          descripcion: "Explora la suma, resta, multiplicación y división de números enteros y fracciones.",
          nivel: "Básico",
          idioma: "Español"
        }
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