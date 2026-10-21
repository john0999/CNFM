/* ==========================================================
   DATA - Pensamiento Matemático I-VI
   Alineado al plan de estudios COBACH Chiapas 2026
========================================================== */

const MATEMATICAS = {
  1: {
    titulo: "Pensamiento Matemático I",
    subtitulo: "Pensamiento aritmético",
    semestre: "Primer Semestre",
    clase: "s1",
    icono: "🔢",
    descripcion: "Números reales, operaciones, proporcionalidad y porcentajes.",
    contexto: "Las matemáticas están en todo: desde calcular la cosecha hasta medir el terreno de tu comunidad.",
    temas: [
      {
        id: "pm1-1",
        titulo: "Conjunto de Números Reales",
        icono: "🔢",
        imagen: "linear-gradient(135deg, #2563eb, #3b82f6)",
        contenido: `
          <h4>Clasificación de los números</h4>
          <ul>
            <li><strong>Naturales (N):</strong> 1, 2, 3, 4...</li>
            <li><strong>Enteros (Z):</strong> ..., -2, -1, 0, 1, 2...</li>
            <li><strong>Racionales (Q):</strong> fracciones, decimales exactos o periódicos</li>
            <li><strong>Irracionales (I):</strong> √2, π, e (decimales infinitos no periódicos)</li>
            <li><strong>Reales (R):</strong> Q ∪ I</li>
          </ul>
          <h4>Propiedades de los números reales</h4>
          <div class="formula">
Conmutativa: a + b = b + a<br>
Asociativa: (a + b) + c = a + (b + c)<br>
Distributiva: a(b + c) = ab + ac<br>
Identidad: a + 0 = a; a × 1 = a<br>
Inverso: a + (-a) = 0; a × (1/a) = 1
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué tipo de número es π (pi)?", opciones: ["Natural", "Entero", "Racional", "Irracional"], correcta: "Irracional", explicacion: "Tiene decimales infinitos no periódicos." },
          { pregunta: "¿Cuál de estos es un número entero?", opciones: ["1/2", "-5", "0.75", "√2"], correcta: "-5", explicacion: "Los enteros incluyen negativos, positivos y el cero." },
          { pregunta: "La propiedad a(b + c) = ab + ac se llama:", opciones: ["Conmutativa", "Asociativa", "Distributiva", "Identidad"], correcta: "Distributiva", explicacion: "Distribuye la multiplicación sobre la suma." },
          { pregunta: "¿Cuál es el inverso aditivo de 5?", opciones: ["1/5", "-5", "5", "0"], correcta: "-5", explicacion: "Porque 5 + (-5) = 0." },
          { pregunta: "El conjunto de los números naturales empieza en:", opciones: ["0", "1", "-1", "Infinito"], correcta: "1", explicacion: "N = {1, 2, 3, 4...}" }
        ]
      },
      {
        id: "pm1-2",
        titulo: "Operaciones Aritméticas y Jerarquía",
        icono: "➕",
        imagen: "linear-gradient(135deg, #f59e0b, #d97706)",
        contenido: `
          <h4>Jerarquía de operaciones</h4>
          <ol>
            <li>Paréntesis y corchetes</li>
            <li>Potencias y raíces</li>
            <li>Multiplicación y división</li>
            <li>Suma y resta</li>
          </ol>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> 2 + 3 × 4 = 2 + 12 = 14 (NO 20)
          </div>
        `,
        actividades: [
          { pregunta: "Resuelve: 5 + 2 × 3", opciones: ["21", "11", "16", "10"], correcta: "11", explicacion: "Primero se multiplica 2×3=6, luego se suma 5+6=11." },
          { pregunta: "Resuelve: (8 - 3) × 2", opciones: ["10", "13", "16", "5"], correcta: "10", explicacion: "Primero paréntesis (8-3=5), luego 5×2=10." },
          { pregunta: "¿Qué se resuelve primero en: 4 + 2²?", opciones: ["4 + 2", "2²", "4 + 2²", "No importa"], correcta: "2²", explicacion: "Las potencias van antes que la suma." },
          { pregunta: "Resuelve: 10 / 2 + 3", opciones: ["2", "8", "5", "6"], correcta: "8", explicacion: "División primero (10/2=5), luego suma 5+3=8." },
          { pregunta: "Resuelve: 2 + 3 × 4 - 1", opciones: ["19", "13", "11", "20"], correcta: "13", explicacion: "3×4=12. Luego 2+12=14. Finalmente 14-1=13." }
        ]
      },
      {
        id: "pm1-3",
        titulo: "Proporcionalidad y Porcentajes",
        icono: "📊",
        imagen: "linear-gradient(135deg, #10b981, #059669)",
        contenido: `
          <h4>Variación directamente proporcional</h4>
          <div class="formula">y = kx (k = constante de proporcionalidad)</div>
          <h4>Variación inversamente proporcional</h4>
          <div class="formula">y = k / x</div>
          <h4>Porcentajes</h4>
          <div class="formula">% = (parte / total) × 100</div>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> Si el precio de un producto es $255 con 15% de descuento, el precio original fue $300.
          </div>
        `,
        actividades: [
          { pregunta: "Si 1 kg de café cuesta $50, ¿cuánto cuestan 3 kg?", opciones: ["$100", "$150", "$200", "$75"], correcta: "$150", explicacion: "Es una proporción directa: 50 × 3 = 150." },
          { pregunta: "¿Cuál es el 20% de 150?", opciones: ["30", "20", "15", "45"], correcta: "30", explicacion: "150 × 0.20 = 30." },
          { pregunta: "Si 2 trabajadores tardan 6 días, ¿cuánto tardan 3 (inversamente proporcional)?", opciones: ["4 días", "9 días", "6 días", "3 días"], correcta: "4 días", explicacion: "A más trabajadores, menos días: (2×6)/3 = 4." },
          { pregunta: "Un artículo cuesta $80 y tiene 10% de descuento. ¿Cuánto pagas?", opciones: ["$70", "$72", "$75", "$78"], correcta: "$72", explicacion: "10% de 80 es 8. 80 - 8 = 72." },
          { pregunta: "La fórmula y = k/x representa una proporción:", opciones: ["Directa", "Inversa", "Ninguna", "Cuadrática"], correcta: "Inversa", explicacion: "Si x aumenta, y disminuye." }
        ]
      },
      {
        id: "pm1-4",
        titulo: "Sucesiones Numéricas",
        icono: "🔗",
        imagen: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        contenido: `
          <h4>Sucesiones aritméticas</h4>
          <div class="formula">aₙ = a₁ + (n - 1)d</div>
          <p>Donde: a₁ = primer término, d = diferencia común</p>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> 2, 5, 8, 11, ... → d = 3, a₁ = 2
          </div>
        `,
        actividades: [
          { pregunta: "En la sucesión 2, 4, 6, 8... ¿cuál es la diferencia (d)?", opciones: ["1", "2", "3", "4"], correcta: "2", explicacion: "Cada término aumenta en 2." },
          { pregunta: "¿Cuál es el siguiente término en: 3, 7, 11, 15...?", opciones: ["17", "18", "19", "20"], correcta: "19", explicacion: "La diferencia es 4. 15 + 4 = 19." },
          { pregunta: "En la fórmula aₙ = a₁ + (n-1)d, ¿qué significa 'n'?", opciones: ["El primer término", "La diferencia", "El número de término", "La suma total"], correcta: "El número de término", explicacion: "n es la posición del término que buscas." },
          { pregunta: "Si a₁ = 5 y d = 3, ¿cuál es el tercer término?", opciones: ["8", "11", "14", "17"], correcta: "11", explicacion: "a₃ = 5 + (3-1)3 = 5 + 6 = 11." },
          { pregunta: "La sucesión 10, 20, 30, 40 es:", opciones: ["Geométrica", "Aritmética", "Cuadrática", "Aleatoria"], correcta: "Aritmética", explicacion: "Tiene una diferencia constante de 10." }
        ]
      },
      {
        id: "pm1-5",
        titulo: "Estadística Elemental",
        icono: "📉",
        imagen: "linear-gradient(135deg, #ec4899, #db2777)",
        contenido: `
          <h4>Medidas de tendencia central</h4>
          <div class="formula">
Media: x̄ = Σx / n<br>
Mediana: valor central<br>
Moda: valor más frecuente
          </div>
          <h4>Tabla de frecuencias</h4>
          <ul>
            <li>Frecuencia absoluta (fᵢ)</li>
            <li>Frecuencia relativa (fᵢ/n)</li>
            <li>Frecuencia acumulada (Fᵢ)</li>
          </ul>
        `,
        actividades: [
          { pregunta: "¿Cuál es la media de: 2, 4, 6, 8?", opciones: ["4", "5", "6", "10"], correcta: "5", explicacion: "(2+4+6+8) / 4 = 20 / 4 = 5." },
          { pregunta: "¿Cuál es la moda de: 3, 4, 4, 5, 6?", opciones: ["3", "4", "5", "6"], correcta: "4", explicacion: "El 4 se repite más veces." },
          { pregunta: "¿Cuál es la mediana de: 1, 3, 7, 9, 10?", opciones: ["3", "7", "9", "1"], correcta: "7", explicacion: "Es el valor central al ordenarlos." },
          { pregunta: "La media también se conoce como:", opciones: ["Promedio", "Moda", "Mediana", "Rango"], correcta: "Promedio", explicacion: "Es la suma dividida entre el número de datos." },
          { pregunta: "La frecuencia absoluta es:", opciones: ["El total de datos", "Cuántas veces aparece un dato", "El promedio", "El valor central"], correcta: "Cuántas veces aparece un dato", explicacion: "Indica la repetición del valor." }
        ]
      }
    ]
  },

  2: {
    titulo: "Pensamiento Matemático II",
    subtitulo: "Introducción al álgebra",
    semestre: "Segundo Semestre",
    clase: "s2",
    icono: "📐",
    descripcion: "Lenguaje algebraico, expresiones equivalentes y ecuaciones lineales.",
    contexto: "El álgebra es el lenguaje de las matemáticas. Aprenderla te permite modelar situaciones reales.",
    temas: [
      {
        id: "pm2-1",
        titulo: "Lenguaje Algebraico",
        icono: "✏️",
        imagen: "linear-gradient(135deg, #0ea5e9, #0284c7)",
        contenido: `
          <h4>Traducción entre lenguaje coloquial y algebraico</h4>
          <ul>
            <li>"Un número aumentado en 5" → x + 5</li>
            <li>"El doble de un número" → 2x</li>
            <li>"La mitad de un número" → x/2</li>
            <li>"El cuadrado de un número" → x²</li>
          </ul>
          <h4>Uso de la variable</h4>
          <ul>
            <li><strong>Incógnita:</strong> valor desconocido</li>
            <li><strong>Relación funcional:</strong> y = f(x)</li>
          </ul>
        `,
        actividades: [
          { pregunta: "¿Cómo se escribe 'el triple de un número'?", opciones: ["x + 3", "3x", "x/3", "x³"], correcta: "3x", explicacion: "Triple significa multiplicar por 3." },
          { pregunta: "Traduce: 'Un número menos 4'", opciones: ["x + 4", "4 - x", "x - 4", "4x"], correcta: "x - 4", explicacion: "Al número original se le resta 4." },
          { pregunta: "¿Qué significa x/2?", opciones: ["El doble de x", "La mitad de x", "El cuadrado de x", "x más 2"], correcta: "La mitad de x", explicacion: "Dividir entre 2 es obtener la mitad." },
          { pregunta: "Traduce: 'La suma de dos números diferentes'", opciones: ["2x", "x + y", "x²", "x - y"], correcta: "x + y", explicacion: "Usamos variables diferentes para números distintos." },
          { pregunta: "¿Cómo se escribe 'el cuadrado de la suma de a y b'?", opciones: ["a² + b²", "(a + b)²", "a + b²", "2(a + b)"], correcta: "(a + b)²", explicacion: "Primero la suma, luego el cuadrado de todo." }
        ]
      },
      {
        id: "pm2-2",
        titulo: "Expresiones Algebraicas y Términos Semejantes",
        icono: "🔢",
        imagen: "linear-gradient(135deg, #14b8a6, #0d9488)",
        contenido: `
          <h4>Elementos de un término</h4>
          <ul>
            <li><strong>Coeficiente:</strong> 3x² → 3</li>
            <li><strong>Literal:</strong> 3x² → x</li>
            <li><strong>Exponente:</strong> 3x² → 2</li>
          </ul>
          <h4>Reducción de términos semejantes</h4>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> 3x + 5x - 2x = 6x
          </div>
        `,
        actividades: [
          { pregunta: "En el término 5y³, ¿cuál es el coeficiente?", opciones: ["y", "3", "5", "5y"], correcta: "5", explicacion: "Es el número que multiplica a la variable." },
          { pregunta: "Simplifica: 4x + 2x", opciones: ["6x", "8x", "6x²", "2x"], correcta: "6x", explicacion: "Se suman los coeficientes (4+2=6)." },
          { pregunta: "¿Cuáles son términos semejantes?", opciones: ["3x y 3y", "2x² y 5x²", "4x y 4", "x y x²"], correcta: "2x² y 5x²", explicacion: "Tienen la misma variable y exponente." },
          { pregunta: "Simplifica: 7a - 3a + a", opciones: ["5a", "4a", "11a", "10a"], correcta: "5a", explicacion: "7 - 3 + 1 = 5." },
          { pregunta: "En 8m², el exponente es:", opciones: ["8", "m", "2", "10"], correcta: "2", explicacion: "Es la potencia a la que está elevada la variable." }
        ]
      },
      {
        id: "pm2-3",
        titulo: "Operaciones con Polinomios",
        icono: "🧮",
        imagen: "linear-gradient(135deg, #f97316, #ea580c)",
        contenido: `
          <h4>Suma y resta</h4>
          <p>Se agrupan términos semejantes</p>
          <h4>Multiplicación</h4>
          <p>Se aplica la propiedad distributiva</p>
          <h4>Productos notables</h4>
          <div class="formula">
(a + b)² = a² + 2ab + b²<br>
(a - b)² = a² - 2ab + b²<br>
(a + b)(a - b) = a² - b²
          </div>
        `,
        actividades: [
          { pregunta: "Desarrolla: (x + 3)²", opciones: ["x² + 9", "x² + 6x + 9", "x² + 3x + 9", "x² - 6x + 9"], correcta: "x² + 6x + 9", explicacion: "Es un binomio al cuadrado." },
          { pregunta: "Desarrolla: (x - 2)(x + 2)", opciones: ["x² - 4", "x² + 4", "x² - 4x + 4", "x² + 4x + 4"], correcta: "x² - 4", explicacion: "Es una diferencia de cuadrados." },
          { pregunta: "Multiplica: 2x(x + 3)", opciones: ["2x² + 3", "2x² + 6x", "2x + 6", "x² + 6x"], correcta: "2x² + 6x", explicacion: "Se distribuye el 2x." },
          { pregunta: "El producto (a + b)(a - b) se llama:", opciones: ["Binomio al cuadrado", "Diferencia de cuadrados", "Trinomio", "Factor común"], correcta: "Diferencia de cuadrados", explicacion: "Da como resultado a² - b²." },
          { pregunta: "Suma los polinomios: (2x + 3) + (x - 1)", opciones: ["3x + 2", "3x + 4", "2x + 2", "x + 2"], correcta: "3x + 2", explicacion: "2x + x = 3x; 3 - 1 = 2." }
        ]
      },
      {
        id: "pm2-4",
        titulo: "Ecuaciones de Primer Grado",
        icono: "⚖️",
        imagen: "linear-gradient(135deg, #eab308, #ca8a04)",
        contenido: `
          <div class="formula">ax + b = c → x = (c - b) / a</div>
          <h4>Pasos para resolver</h4>
          <ol>
            <li>Eliminar paréntesis y denominadores</li>
            <li>Agrupar términos semejantes</li>
            <li>Despejar la incógnita</li>
            <li>Verificar la solución</li>
          </ol>
        `,
        actividades: [
          { pregunta: "Resuelve: x + 5 = 12", opciones: ["5", "7", "17", "-7"], correcta: "7", explicacion: "x = 12 - 5 = 7." },
          { pregunta: "Resuelve: 3x = 15", opciones: ["3", "5", "12", "45"], correcta: "5", explicacion: "x = 15 / 3 = 5." },
          { pregunta: "Resuelve: 2x - 4 = 10", opciones: ["3", "5", "7", "10"], correcta: "7", explicacion: "2x = 14, x = 7." },
          { pregunta: "Resuelve: x/2 + 1 = 4", opciones: ["2", "4", "6", "8"], correcta: "6", explicacion: "x/2 = 3, x = 6." },
          { pregunta: "Si 2x + 3 = x + 7, ¿cuánto vale x?", opciones: ["4", "3", "10", "5"], correcta: "4", explicacion: "2x - x = 7 - 3 → x = 4." }
        ]
      },
      {
        id: "pm2-5",
        titulo: "Sistemas de Ecuaciones Lineales",
        icono: "🔗",
        imagen: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
        contenido: `
          <h4>Métodos de solución</h4>
          <ol>
            <li>Sustitución</li>
            <li>Eliminación (suma y resta)</li>
            <li>Igualación</li>
            <li>Método gráfico</li>
          </ol>
          <div class="formula">
a₁x + b₁y = c₁<br>
a₂x + b₂y = c₂
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál NO es un método para resolver sistemas de ecuaciones?", opciones: ["Sustitución", "Eliminación", "Igualación", "Factorización"], correcta: "Factorización", explicacion: "La factorización es para polinomios." },
          { pregunta: "En el método de sustitución, se hace:", opciones: ["Sumar ecuaciones", "Despejar una variable y reemplazarla", "Graficar", "Multiplicar todo"], correcta: "Despejar una variable y reemplazarla", explicacion: "Se sustituye en la otra ecuación." },
          { pregunta: "¿Qué representa gráficamente un sistema 2x2?", opciones: ["Una parábola", "Dos rectas", "Un círculo", "Un punto"], correcta: "Dos rectas", explicacion: "La solución es el punto donde se cruzan." },
          { pregunta: "Si un sistema no tiene solución, las rectas son:", opciones: ["Perpendiculares", "Paralelas", "Iguales", "Curvas"], correcta: "Paralelas", explicacion: "Nunca se cruzan." },
          { pregunta: "Método que suma o resta las ecuaciones:", opciones: ["Sustitución", "Igualación", "Eliminación", "Gráfico"], correcta: "Eliminación", explicacion: "Busca eliminar una variable." }
        ]
      }
    ]
  },

  3: {
    titulo: "Pensamiento Matemático III",
    subtitulo: "Pensamiento algebraico e introducción a geometría plana",
    semestre: "Tercer Semestre",
    clase: "s3",
    icono: "📐",
    descripcion: "Ecuaciones cuadráticas, geometría plana y figuras geométricas.",
    contexto: "La geometría está en las construcciones, en la naturaleza y en el arte de tu comunidad.",
    temas: [
      {
        id: "pm3-1",
        titulo: "Ecuaciones Cuadráticas",
        icono: "📊",
        imagen: "linear-gradient(135deg, #f43f5e, #e11d48)",
        contenido: `
          <div class="formula">
ax² + bx + c = 0<br><br>
Fórmula general:<br>
x = [-b ± √(b² - 4ac)] / 2a<br><br>
Discriminante: Δ = b² - 4ac
          </div>
          <h4>Métodos de solución</h4>
          <ol>
            <li>Factorización</li>
            <li>Completar el cuadrado</li>
            <li>Fórmula general</li>
          </ol>
        `,
        actividades: [
          { pregunta: "La forma general de una ecuación cuadrática es:", opciones: ["ax + b = 0", "ax² + bx + c = 0", "ax³ + bx² = 0", "a/x + b = 0"], correcta: "ax² + bx + c = 0", explicacion: "El mayor exponente es 2." },
          { pregunta: "Si el discriminante Δ es 0, ¿cuántas soluciones hay?", opciones: ["Ninguna", "Una", "Dos", "Infinitas"], correcta: "Una", explicacion: "La parábola toca el eje X en un solo punto." },
          { pregunta: "Resuelve: x² - 9 = 0", opciones: ["x=3", "x=±3", "x=-3", "x=9"], correcta: "x=±3", explicacion: "x² = 9, entonces x = 3 y x = -3." },
          { pregunta: "¿Qué método NO sirve para ecuaciones cuadráticas?", opciones: ["Fórmula general", "Factorización", "Completar cuadrado", "Regla de tres"], correcta: "Regla de tres", explicacion: "La regla de tres es para proporciones." },
          { pregunta: "El discriminante se calcula como:", opciones: ["b² - 4ac", "2a", "-b/2a", "b² + 4ac"], correcta: "b² - 4ac", explicacion: "Indica el número de soluciones reales." }
        ]
      },
      {
        id: "pm3-2",
        titulo: "Funciones Cuadráticas",
        icono: "📈",
        imagen: "linear-gradient(135deg, #14b8a6, #0f766e)",
        contenido: `
          <div class="formula">
f(x) = ax² + bx + c<br>
Vértice: (-b/2a, f(-b/2a))
          </div>
          <h4>Concavidad</h4>
          <ul>
            <li>a > 0 → abre arriba (mínimo)</li>
            <li>a < 0 → abre abajo (máximo)</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto:</strong> Área máxima para cultivos.
          </div>
        `,
        actividades: [
          { pregunta: "Si a > 0 en una parábola, esta abre hacia:", opciones: ["Arriba", "Abajo", "La derecha", "La izquierda"], correcta: "Arriba", explicacion: "Tiene un punto mínimo." },
          { pregunta: "La gráfica de una función cuadrática es una:", opciones: ["Recta", "Parábola", "Circunferencia", "Hipérbola"], correcta: "Parábola", explicacion: "Tiene forma de U." },
          { pregunta: "El vértice de f(x) = x² - 4x + 3 está en x =", opciones: ["2", "-2", "4", "1"], correcta: "2", explicacion: "x = -b/2a = -(-4)/2(1) = 2." },
          { pregunta: "Si una parábola abre hacia abajo, el vértice es un:", opciones: ["Mínimo", "Máximo", "Cero", "Corte"], correcta: "Máximo", explicacion: "Es el punto más alto." },
          { pregunta: "La función f(x) = 2x² es una función:", opciones: ["Lineal", "Cuadrática", "Cúbica", "Exponencial"], correcta: "Cuadrática", explicacion: "El mayor exponente es 2." }
        ]
      },
      {
        id: "pm3-3",
        titulo: "Geometría Plana: Triángulos",
        icono: "🔺",
        imagen: "linear-gradient(135deg, #f59e0b, #d97706)",
        contenido: `
          <h4>Clasificación</h4>
          <ul>
            <li>Por lados: equilátero, isósceles, escaleno</li>
            <li>Por ángulos: acutángulo, rectángulo, obtusángulo</li>
          </ul>
          <div class="formula">
Suma ángulos internos = 180°
          </div>
          <h4>Teorema de Pitágoras</h4>
          <div class="formula">c² = a² + b²</div>
        `,
        actividades: [
          { pregunta: "¿Cuánto suman los ángulos internos de un triángulo?", opciones: ["90°", "180°", "360°", "270°"], correcta: "180°", explicacion: "Es una propiedad fundamental de los triángulos." },
          { pregunta: "Un triángulo con todos sus lados iguales es:", opciones: ["Isósceles", "Escaleno", "Equilátero", "Rectángulo"], correcta: "Equilátero", explicacion: "Equi = igual, latero = lados." },
          { pregunta: "El Teorema de Pitágoras se aplica a triángulos:", opciones: ["Equiláteros", "Rectángulos", "Obtusángulos", "Cualquiera"], correcta: "Rectángulos", explicacion: "Requieren un ángulo de 90°." },
          { pregunta: "Si los catetos miden 3 y 4, ¿cuánto mide la hipotenusa?", opciones: ["5", "6", "7", "12"], correcta: "5", explicacion: "c² = 3² + 4² = 9+16 = 25, c=5." },
          { pregunta: "Un triángulo con un ángulo de 90° se llama:", opciones: ["Acutángulo", "Rectángulo", "Obtusángulo", "Equilátero"], correcta: "Rectángulo", explicacion: "Tiene un ángulo recto." }
        ]
      },
      {
        id: "pm3-4",
        titulo: "Perímetro, Área y Volumen",
        icono: "📦",
        imagen: "linear-gradient(135deg, #0ea5e9, #0284c7)",
        contenido: `
          <h4>Fórmulas de área</h4>
          <div class="formula">
Triángulo: A = (b × h) / 2<br>
Rectángulo: A = b × h<br>
Círculo: A = π × r²<br>
Polígono regular: A = (P × a) / 2
          </div>
          <h4>Volumen de cuerpos geométricos</h4>
          <div class="formula">
Cubo: V = a³<br>
Prisma: V = A_base × h<br>
Cilindro: V = π × r² × h<br>
Esfera: V = (4/3) × π × r³
          </div>
        `,
        actividades: [
          { pregunta: "El área de un rectángulo de base 5 y altura 3 es:", opciones: ["8", "15", "16", "30"], correcta: "15", explicacion: "A = b × h = 5 × 3 = 15." },
          { pregunta: "El área de un triángulo de base 4 y altura 6 es:", opciones: ["10", "12", "24", "20"], correcta: "12", explicacion: "A = (4×6)/2 = 12." },
          { pregunta: "El volumen de un cubo de lado 3 es:", opciones: ["9", "27", "18", "6"], correcta: "27", explicacion: "V = 3³ = 27." },
          { pregunta: "La fórmula del área del círculo es:", opciones: ["2πr", "πr²", "πd", "r²"], correcta: "πr²", explicacion: "Pi por radio al cuadrado." },
          { pregunta: "El perímetro de un cuadrado de lado 4 es:", opciones: ["8", "12", "16", "4"], correcta: "16", explicacion: "P = 4 × lado = 16." }
        ]
      }
    ]
  },

  4: {
    titulo: "Pensamiento Matemático IV",
    subtitulo: "Trigonometría y geometría analítica",
    semestre: "Cuarto Semestre",
    clase: "s4",
    icono: "📐",
    descripcion: "Razones trigonométricas, leyes de senos y cosenos, y geometría analítica.",
    contexto: "Medición de distancias inaccesibles: montañas, ríos y terrenos de tu comunidad.",
    temas: [
      {
        id: "pm4-1",
        titulo: "Razones Trigonométricas",
        icono: "📐",
        imagen: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
        contenido: `
          <div class="formula">
sen θ = cateto opuesto / hipotenusa<br>
cos θ = cateto adyacente / hipotenusa<br>
tan θ = cateto opuesto / cateto adyacente
          </div>
          <h4>Identidad fundamental</h4>
          <div class="formula">sen²θ + cos²θ = 1</div>
        `,
        actividades: [
          { pregunta: "La razón seno relaciona:", opciones: ["Cateto adyacente e hipotenusa", "Cateto opuesto e hipotenusa", "Ambos catetos", "Ángulos"], correcta: "Cateto opuesto e hipotenusa", explicacion: "SOH: Seno = Opuesto / Hipotenusa." },
          { pregunta: "Si sen θ = 0.5, ¿cuál es el ángulo (en grados)?", opciones: ["30°", "45°", "60°", "90°"], correcta: "30°", explicacion: "sen(30°) = 0.5." },
          { pregunta: "La razón coseno relaciona:", opciones: ["Cateto adyacente e hipotenusa", "Cateto opuesto e hipotenusa", "Ambos catetos", "Ángulos"], correcta: "Cateto adyacente e hipotenusa", explicacion: "CAH: Coseno = Adyacente / Hipotenusa." },
          { pregunta: "La tangente es igual a:", opciones: ["sen/cos", "cos/sen", "sen·cos", "1/sen"], correcta: "sen/cos", explicacion: "Tan = Seno / Coseno." },
          { pregunta: "¿Cuánto vale sen(90°)?", opciones: ["0", "0.5", "1", "No existe"], correcta: "1", explicacion: "Es el valor máximo del seno." }
        ]
      },
      {
        id: "pm4-2",
        titulo: "Ley de Senos y Cosenos",
        icono: "🔺",
        imagen: "linear-gradient(135deg, #f43f5e, #e11d48)",
        contenido: `
          <h4>Ley de senos</h4>
          <div class="formula">a/sen A = b/sen B = c/sen C</div>
          <h4>Ley de cosenos</h4>
          <div class="formula">c² = a² + b² - 2ab·cos C</div>
          <div class="ejemplo">
            <strong>Aplicación:</strong> Calcular distancias inaccesibles en terrenos.
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué ley se usa si conoces dos ángulos y un lado?", opciones: ["Pitágoras", "Ley de senos", "Ley de cosenos", "Ley de Ohm"], correcta: "Ley de senos", explicacion: "Relaciona lados y senos de ángulos opuestos." },
          { pregunta: "La ley de cosenos es útil cuando conoces:", opciones: ["Tres ángulos", "Dos lados y el ángulo entre ellos", "Un solo lado", "Nada"], correcta: "Dos lados y el ángulo entre ellos", explicacion: "Permite encontrar el tercer lado." },
          { pregunta: "La ley de cosenos es una generalización del teorema de:", opciones: ["Tales", "Pitágoras", "Euclides", "Newton"], correcta: "Pitágoras", explicacion: "Pitágoras es para triángulos rectángulos." },
          { pregunta: "En la ley de senos: a/sen A = ...", opciones: ["b/cos B", "b/sen B", "c/cos C", "a/b"], correcta: "b/sen B", explicacion: "Es la proporción estándar." },
          { pregunta: "¿Para qué tipo de triángulos sirve la ley de senos?", opciones: ["Solo rectángulos", "Solo equiláteros", "Cualquier triángulo", "Solo isósceles"], correcta: "Cualquier triángulo", explicacion: "Sirve para oblicuángulos." }
        ]
      },
      {
        id: "pm4-3",
        titulo: "Geometría Analítica: La Recta",
        icono: "📈",
        imagen: "linear-gradient(135deg, #14b8a6, #0d9488)",
        contenido: `
          <div class="formula">
Distancia: d = √[(x₂-x₁)² + (y₂-y₁)²]<br>
Punto medio: M = ((x₁+x₂)/2, (y₁+y₂)/2)<br><br>
Pendiente: m = (y₂-y₁)/(x₂-x₁)
          </div>
        `,
        actividades: [
          { pregunta: "La pendiente de una recta horizontal es:", opciones: ["1", "0", "Infinito", "-1"], correcta: "0", explicacion: "No sube ni baja." },
          { pregunta: "Dos rectas paralelas tienen pendientes:", opciones: ["Iguales", "Inversas", "Opuestas", "Cero"], correcta: "Iguales", explicacion: "Nunca se cruzan." },
          { pregunta: "La pendiente de una recta vertical es:", opciones: ["0", "1", "No definida", "-1"], correcta: "No definida", explicacion: "La división por cero no existe." },
          { pregunta: "La fórmula de la pendiente es:", opciones: ["(y₂-y₁)/(x₂-x₁)", "(x₂-x₁)/(y₂-y₁)", "y₂+y₁", "x₂-x₁"], correcta: "(y₂-y₁)/(x₂-x₁)", explicacion: "Cambio en y sobre cambio en x." },
          { pregunta: "La distancia entre (0,0) y (3,4) es:", opciones: ["3", "4", "5", "7"], correcta: "5", explicacion: "√(3² + 4²) = √25 = 5." }
        ]
      },
      {
        id: "pm4-4",
        titulo: "La Parábola",
        icono: "🌐",
        imagen: "linear-gradient(135deg, #eab308, #ca8a04)",
        contenido: `
          <div class="formula">
Vertical: (x - h)² = 4p(y - k)<br>
Horizontal: (y - k)² = 4p(x - h)<br><br>
Vértice: (h, k)<br>
Foco: (h, k + p) o (h + p, k)
          </div>
        `,
        actividades: [
          { pregunta: "En (x - 3)² = 8(y - 1), el vértice es:", opciones: ["(3, 1)", "(-3, 1)", "(1, 3)", "(8, 1)"], correcta: "(3, 1)", explicacion: "Vértice = (h, k), donde h=3, k=1." },
          { pregunta: "Si p > 0 en una parábola vertical, abre hacia:", opciones: ["Arriba", "Abajo", "Izquierda", "Derecha"], correcta: "Arriba", explicacion: "El foco está arriba del vértice." },
          { pregunta: "¿Cuántos puntos tiene una parábola en su vértice?", opciones: ["1", "2", "3", "Infinitos"], correcta: "1", explicacion: "Es su punto mínimo o máximo." },
          { pregunta: "El foco es un punto que:", opciones: ["Define la parábola", "No existe", "Es el centro", "Es el radio"], correcta: "Define la parábola", explicacion: "Los puntos equidistan del foco y la directriz." },
          { pregunta: "La parábola (y - 2)² = 12(x - 1) abre hacia:", opciones: ["Arriba", "Abajo", "Derecha", "Izquierda"], correcta: "Derecha", explicacion: "El término y está al cuadrado y p>0." }
        ]
      }
    ]
  },

  5: {
    titulo: "Pensamiento Matemático V",
    subtitulo: "Cálculo diferencial",
    semestre: "Quinto Semestre",
    clase: "s5",
    icono: "📉",
    descripcion: "Límites, derivadas y aplicaciones del cálculo diferencial.",
    contexto: "El cálculo permite entender cómo cambian las cosas: velocidad, crecimiento, optimización.",
    temas: [
      {
        id: "pm5-1",
        titulo: "Límites",
        icono: "🎯",
        imagen: "linear-gradient(135deg, #2563eb, #1e40af)",
        contenido: `
          <p>El <strong>límite</strong> describe el comportamiento de una función cuando x se acerca a un valor.</p>
          <div class="formula">lim<sub>x→a</sub> f(x) = L</div>
          <h4>Propiedades</h4>
          <ul>
            <li>lim (f + g) = lim f + lim g</li>
            <li>lim (f · g) = lim f · lim g</li>
          </ul>
        `,
        actividades: [
          { pregunta: "El límite describe:", opciones: ["El valor máximo", "El comportamiento de una función", "La derivada", "El área"], correcta: "El comportamiento de una función", explicacion: "Muestra hacia dónde tiende la función." },
          { pregunta: "lim x→2 (x + 3) =", opciones: ["2", "3", "5", "6"], correcta: "5", explicacion: "Se sustituye x=2: 2+3=5." },
          { pregunta: "La notación lim x→a significa:", opciones: ["x es igual a", "x tiende a a", "x es mayor", "x no existe"], correcta: "x tiende a a", explicacion: "Se acerca indefinidamente." },
          { pregunta: "Si una función es continua en un punto, su límite:", opciones: ["No existe", "Es 0", "Es igual al valor de la función", "Es infinito"], correcta: "Es igual al valor de la función", explicacion: "No hay saltos." },
          { pregunta: "lim x→0 (5x) =", opciones: ["5", "0", "1", "Infinito"], correcta: "0", explicacion: "5(0) = 0." }
        ]
      },
      {
        id: "pm5-2",
        titulo: "La Derivada",
        icono: "📈",
        imagen: "linear-gradient(135deg, #f43f5e, #be123c)",
        contenido: `
          <p>La <strong>derivada</strong> mide la razón de cambio instantánea.</p>
          <div class="formula">
f'(x) = lim<sub>h→0</sub> [f(x+h) - f(x)] / h
          </div>
          <h4>Reglas básicas</h4>
          <div class="formula">
d/dx (c) = 0<br>
d/dx (xⁿ) = n·xⁿ⁻¹<br>
d/dx (eˣ) = eˣ<br>
d/dx (ln x) = 1/x
          </div>
        `,
        actividades: [
          { pregunta: "La derivada de una constante es:", opciones: ["1", "0", "La constante", "Infinito"], correcta: "0", explicacion: "No tiene razón de cambio." },
          { pregunta: "La derivada de x³ es:", opciones: ["x²", "3x²", "3x", "x³"], correcta: "3x²", explicacion: "Por la regla de la potencia: 3x³⁻¹ = 3x²." },
          { pregunta: "La derivada de x es:", opciones: ["0", "1", "x", "x²"], correcta: "1", explicacion: "La pendiente es constante 1." },
          { pregunta: "La derivada mide:", opciones: ["El área", "La razón de cambio", "El volumen", "La masa"], correcta: "La razón de cambio", explicacion: "Qué tan rápido cambia una función." },
          { pregunta: "La derivada de 5x es:", opciones: ["5", "x", "5x", "0"], correcta: "5", explicacion: "El coeficiente se mantiene." }
        ]
      },
      {
        id: "pm5-3",
        titulo: "Aplicaciones de la Derivada",
        icono: "🚀",
        imagen: "linear-gradient(135deg, #10b981, #047857)",
        contenido: `
          <h4>Interpretación</h4>
          <ul>
            <li>Pendiente de la recta tangente</li>
            <li>Velocidad (derivada de posición)</li>
            <li>Aceleración (derivada de velocidad)</li>
          </ul>
          <h4>Optimización</h4>
          <ul>
            <li>Máximos: f'(x) = 0 y f''(x) < 0</li>
            <li>Mínimos: f'(x) = 0 y f''(x) > 0</li>
          </ul>
        `,
        actividades: [
          { pregunta: "La derivada de la posición respecto al tiempo es:", opciones: ["Aceleración", "Velocidad", "Distancia", "Fuerza"], correcta: "Velocidad", explicacion: "Indica qué tan rápido cambia la posición." },
          { pregunta: "Si f'(x) = 0, significa que hay:", opciones: ["Un cruce", "Un máximo o mínimo", "Una asíntota", "Nada"], correcta: "Un máximo o mínimo", explicacion: "La pendiente es cero (tangente horizontal)." },
          { pregunta: "La derivada de la velocidad es:", opciones: ["Posición", "Aceleración", "Fuerza", "Trabajo"], correcta: "Aceleración", explicacion: "Mide el cambio de velocidad." },
          { pregunta: "Si f''(x) > 0 en un punto crítico, es un:", opciones: ["Máximo", "Mínimo", "Punto de inflexión", "Corte"], correcta: "Mínimo", explicacion: "La función es cóncava hacia arriba." },
          { pregunta: "La optimización busca:", opciones: ["Derivar", "Maximizar o minimizar", "Integrar", "Graficar"], correcta: "Maximizar o minimizar", explicacion: "Encontrar el mejor valor posible." }
        ]
      }
    ]
  },

  6: {
    titulo: "Pensamiento Matemático VI",
    subtitulo: "Pensamiento estadístico y probabilístico",
    semestre: "Sexto Semestre",
    clase: "s6",
    icono: "📊",
    descripcion: "Estadística descriptiva, probabilidad e inferencia estadística.",
    contexto: "Analiza datos reales de tu comunidad: producción, población, encuestas.",
    temas: [
      {
        id: "pm6-1",
        titulo: "Estadística Descriptiva",
        icono: "📋",
        imagen: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
        contenido: `
          <h4>Conceptos fundamentales</h4>
          <ul>
            <li><strong>Población:</strong> conjunto total</li>
            <li><strong>Muestra:</strong> subconjunto representativo</li>
            <li><strong>Variable:</strong> característica medible</li>
          </ul>
          <h4>Tipos de variables</h4>
          <ul>
            <li><strong>Cualitativas:</strong> categorías</li>
            <li><strong>Cuantitativas:</strong> números (discretas/continuas)</li>
          </ul>
        `,
        actividades: [
          { pregunta: "Una población es:", opciones: ["Un subconjunto", "El conjunto total", "Una variable", "Un promedio"], correcta: "El conjunto total", explicacion: "Es el universo de estudio." },
          { pregunta: "El color de ojos es una variable:", opciones: ["Cuantitativa", "Cualitativa", "Discreta", "Continua"], correcta: "Cualitativa", explicacion: "Es una categoría, no un número." },
          { pregunta: "La estatura de los estudiantes es una variable:", opciones: ["Cualitativa", "Cuantitativa continua", "Cuantitativa discreta", "Nominal"], correcta: "Cuantitativa continua", explicacion: "Puede tomar valores decimales." },
          { pregunta: "Una muestra debe ser:", opciones: ["Pequeña", "Representativa", "Aleatoria y representativa", "Grande"], correcta: "Aleatoria y representativa", explicacion: "Debe reflejar a la población." },
          { pregunta: "El número de hermanos es una variable:", opciones: ["Continua", "Discreta", "Cualitativa", "Nominal"], correcta: "Discreta", explicacion: "Solo toma valores enteros." }
        ]
      },
      {
        id: "pm6-2",
        titulo: "Medidas de Tendencia Central",
        icono: "📊",
        imagen: "linear-gradient(135deg, #0ea5e9, #0284c7)",
        contenido: `
          <div class="formula">
Media: x̄ = Σxᵢ / n<br><br>
Mediana: valor central (datos ordenados)<br><br>
Moda: valor más frecuente
          </div>
          <div class="ejemplo">
            <strong>Contexto:</strong> Promedio de calificaciones, edad media de una comunidad.
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es la media de: 4, 8, 6, 10?", opciones: ["6", "7", "8", "9"], correcta: "7", explicacion: "(4+8+6+10)/4 = 28/4 = 7." },
          { pregunta: "¿Cuál es la moda de: 2, 3, 3, 4, 5, 3?", opciones: ["2", "3", "4", "5"], correcta: "3", explicacion: "El 3 se repite más." },
          { pregunta: "¿Cuál es la mediana de: 2, 4, 6, 8, 10?", opciones: ["4", "6", "8", "5"], correcta: "6", explicacion: "Es el valor central." },
          { pregunta: "Si hay dos valores centrales, la mediana es:", opciones: ["El mayor", "El menor", "El promedio de ambos", "No existe"], correcta: "El promedio de ambos", explicacion: "Se suman y se dividen entre 2." },
          { pregunta: "La medida más afectada por valores extremos es:", opciones: ["Media", "Mediana", "Moda", "Rango"], correcta: "Media", explicacion: "Los valores atípicos la distorsionan." }
        ]
      },
      {
        id: "pm6-3",
        titulo: "Medidas de Dispersión",
        icono: "📏",
        imagen: "linear-gradient(135deg, #f59e0b, #d97706)",
        contenido: `
          <div class="formula">
Rango: R = x_máx - x_mín<br><br>
Varianza: σ² = Σ(xᵢ - μ)² / N<br><br>
Desviación estándar: σ = √σ²<br><br>
Coef. variación: CV = (σ / x̄) × 100%
          </div>
        `,
        actividades: [
          { pregunta: "El rango se calcula como:", opciones: ["Máx + Mín", "Máx - Mín", "Máx × Mín", "Máx / Mín"], correcta: "Máx - Mín", explicacion: "Es la diferencia entre el mayor y el menor." },
          { pregunta: "La desviación estándar mide:", opciones: ["El centro", "La dispersión", "La moda", "El total"], correcta: "La dispersión", explicacion: "Qué tan alejados están los datos de la media." },
          { pregunta: "Si la desviación estándar es 0, significa que:", opciones: ["No hay datos", "Todos los datos son iguales", "Hay mucha dispersión", "La media es 0"], correcta: "Todos los datos son iguales", explicacion: "No hay variación." },
          { pregunta: "La varianza es el cuadrado de:", opciones: ["La media", "La mediana", "La desviación estándar", "La moda"], correcta: "La desviación estándar", explicacion: "σ = √σ²." },
          { pregunta: "¿Qué medida tiene las mismas unidades que los datos?", opciones: ["Varianza", "Desviación estándar", "Rango", "Coeficiente"], correcta: "Desviación estándar", explicacion: "La varianza tiene unidades al cuadrado." }
        ]
      },
      {
        id: "pm6-4",
        titulo: "Probabilidad",
        icono: "🎲",
        imagen: "linear-gradient(135deg, #ec4899, #be185d)",
        contenido: `
          <h4>Probabilidad clásica</h4>
          <div class="formula">P(A) = Casos favorables / Casos posibles</div>
          <h4>Probabilidad condicional</h4>
          <div class="formula">P(A|B) = P(A∩B) / P(B)</div>
          <h4>Eventos independientes</h4>
          <div class="formula">P(A∩B) = P(A) × P(B)</div>
        `,
        actividades: [
          { pregunta: "¿Cuál es la probabilidad de sacar un 3 en un dado?", opciones: ["1/2", "1/3", "1/6", "1/12"], correcta: "1/6", explicacion: "Hay 1 caso favorable y 6 posibles." },
          { pregunta: "La probabilidad de un evento seguro es:", opciones: ["0", "0.5", "1", "100"], correcta: "1", explicacion: "Siempre ocurre." },
          { pregunta: "Si lanzas dos monedas, ¿probabilidad de 2 águilas?", opciones: ["1/2", "1/4", "1/8", "1"], correcta: "1/4", explicacion: "(1/2) × (1/2) = 1/4." },
          { pregunta: "La probabilidad condicional se escribe:", opciones: ["P(A)+P(B)", "P(A|B)", "P(A)×P(B)", "P(A-B)"], correcta: "P(A|B)", explicacion: "Probabilidad de A dado que ocurrió B." },
          { pregunta: "¿Qué probabilidad hay de sacar un número par en un dado?", opciones: ["1/6", "1/3", "1/2", "2/3"], correcta: "1/2", explicacion: "Hay 3 pares (2,4,6) de 6 posibles." }
        ]
      },
      {
        id: "pm6-5",
        titulo: "Distribuciones de Probabilidad",
        icono: "📈",
        imagen: "linear-gradient(135deg, #14b8a6, #0f766e)",
        contenido: `
          <h4>Distribución binomial</h4>
          <div class="formula">P(X=k) = C(n,k)·p^k·(1-p)^(n-k)</div>
          <h4>Distribución normal</h4>
          <ul>
            <li>Forma de campana</li>
            <li>68% dentro de μ ± σ</li>
            <li>95% dentro de μ ± 2σ</li>
          </ul>
          <div class="formula">Estandarización: z = (x - μ) / σ</div>
        `,
        actividades: [
          { pregunta: "La gráfica de la distribución normal tiene forma de:", opciones: ["Recta", "Campana", "U", "Círculo"], correcta: "Campana", explicacion: "Es simétrica y centrada en la media." },
          { pregunta: "En una distribución normal, el 68% de los datos está en:", opciones: ["μ ± σ", "μ ± 2σ", "μ ± 3σ", "Fuera de μ"], correcta: "μ ± σ", explicacion: "Es una propiedad empírica." },
          { pregunta: "La distribución binomial se usa para:", opciones: ["Variables continuas", "Éxitos y fracasos", "Áreas", "Límites"], correcta: "Éxitos y fracasos", explicacion: "Tiene dos resultados posibles." },
          { pregunta: "El valor 'z' en la estandarización indica:", opciones: ["El área", "Cuántas desviaciones estándar de la media", "El total", "La moda"], correcta: "Cuántas desviaciones estándar de la media", explicacion: "Mide la posición relativa." },
          { pregunta: "El área total bajo la curva normal es:", opciones: ["0", "0.5", "1", "100"], correcta: "1", explicacion: "Representa el 100% de probabilidad." }
        ]
      }
    ]
  }
};