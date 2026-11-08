/* ==========================================================
   DATA - Catálogo de materias
   Una sola lista para el menú «Materias», las tarjetas de la
   portada y el buscador. Para agregar una materia nueva:
   1) crea su archivo de datos y su vista,
   2) registra la ruta en app.js,
   3) agrega aquí un objeto con su información.
========================================================== */

const MATERIAS_GRUPOS = [
  { id: 'ciencias', titulo: 'Ciencias y matemáticas' },
  { id: 'humanidades', titulo: 'Lenguas, humanidades y tecnología' }
];

const MATERIAS = [
  {
    id: 'ciencias',
    grupo: 'ciencias',
    nombre: 'Ciencias',
    titulo: 'Ciencias Naturales, Experimentales y Tecnología',
    descripcion: 'Biología, química y física integradas, más los Talleres de Ciencias.',
    icono: 'fa-microscope',
    emoji: '🔬',
    color: '#65a30d',
    color2: '#14b8a6',
    datos: () => typeof CIENCIAS !== 'undefined' ? CIENCIAS : null
  },
  {
    id: 'quimica',
    grupo: 'ciencias',
    nombre: 'Química',
    titulo: 'Química',
    descripcion: 'Estructura atómica, tabla periódica, enlaces, reacciones y soluciones.',
    icono: 'fa-flask',
    emoji: '⚗️',
    color: '#dc2626',
    color2: '#f87171',
    datos: () => typeof QUIMICA !== 'undefined' ? QUIMICA : null
  },
  {
    id: 'fisica',
    grupo: 'ciencias',
    nombre: 'Física',
    titulo: 'Física',
    descripcion: 'Energía, calor, movimiento, ondas, electricidad y el universo.',
    icono: 'fa-bolt',
    emoji: '⚡',
    color: '#7c3aed',
    color2: '#a78bfa',
    datos: () => typeof FISICA !== 'undefined' ? FISICA : null
  },
  {
    id: 'matematicas',
    grupo: 'ciencias',
    nombre: 'Matemáticas',
    titulo: 'Pensamiento Matemático',
    descripcion: 'Aritmética, álgebra, geometría, trigonometría, cálculo y estadística.',
    icono: 'fa-calculator',
    emoji: '📐',
    color: '#2563eb',
    color2: '#3b82f6',
    datos: () => typeof MATEMATICAS !== 'undefined' ? MATEMATICAS : null
  },
  {
    id: 'lengua',
    grupo: 'humanidades',
    nombre: 'Lengua',
    titulo: 'Lengua y Comunicación',
    descripcion: 'Lectura, escritura, oralidad y textos de Chiapas.',
    icono: 'fa-book-open',
    emoji: '📖',
    color: '#e11d48',
    color2: '#fb7185',
    datos: () => typeof LENGUA !== 'undefined' ? LENGUA : null
  },
  {
    id: 'ingles',
    grupo: 'humanidades',
    nombre: 'Inglés',
    titulo: 'Inglés',
    descripcion: 'Del nivel A1 al B1 con situaciones reales de tu comunidad.',
    icono: 'fa-language',
    emoji: '🗣️',
    color: '#0284c7',
    color2: '#38bdf8',
    datos: () => typeof INGLES !== 'undefined' ? INGLES : null
  },
  {
    id: 'filosofia',
    grupo: 'humanidades',
    nombre: 'Filosofía',
    titulo: 'Pensamiento Filosófico y Humanidades',
    descripcion: 'Preguntar, argumentar y dialogar sobre la vida, el conocer y el hacer.',
    icono: 'fa-landmark',
    emoji: '🦉',
    color: '#a16207',
    color2: '#ca8a04',
    datos: () => typeof FILOSOFIA !== 'undefined' ? FILOSOFIA : null
  },
  {
    id: 'cultura-digital',
    grupo: 'humanidades',
    nombre: 'Cultura Digital',
    titulo: 'Cultura Digital',
    descripcion: 'Ciudadanía digital, software libre, algoritmos, datos y creación de contenido.',
    icono: 'fa-laptop-code',
    emoji: '💻',
    color: '#047857',
    color2: '#10b981',
    datos: () => typeof CULTURA_DIGITAL !== 'undefined' ? CULTURA_DIGITAL : null
  }
];

/**
 * Temas propios de un semestre (sin los temas compartidos { ref }).
 * Algunas materias guardan sus temas en varias listas (temas, temasTabla…).
 */
const materiaTemasDe = (semestre) => Object.keys(semestre)
  .filter(clave => /^temas/.test(clave) && Array.isArray(semestre[clave]))
  .flatMap(clave => semestre[clave])
  .filter(tema => tema && !tema.ref);

/** Cuenta temas y cursos de una materia a partir de sus datos reales. */
const materiaResumen = (materia) => {
  const datos = materia.datos();
  if (!datos) return { temas: 0, cursos: 0 };
  const semestres = Object.values(datos);
  return {
    temas: semestres.reduce((total, sem) => total + materiaTemasDe(sem).length, 0),
    cursos: semestres.length
  };
};
