/* ==========================================================
   DATA - Pensamiento Matemático I-VI
   Alineado al plan de estudios COBACH Chiapas 2026
   Currículum Fundamental - Recurso Sociocognitivo
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
        `
      },
      {
        id: "pm1-2",
        titulo: "Operaciones Aritméticas y Jerarquía",
        icono: "➕",
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
        `
      },
      {
        id: "pm1-3",
        titulo: "Proporcionalidad y Porcentajes",
        icono: "📊",
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
        `
      },
      {
        id: "pm1-4",
        titulo: "Sucesiones Numéricas",
        icono: "🔗",
        contenido: `
          <h4>Sucesiones aritméticas</h4>
          <div class="formula">aₙ = a₁ + (n - 1)d</div>
          <p>Donde: a₁ = primer término, d = diferencia común</p>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> 2, 5, 8, 11, ... → d = 3, a₁ = 2
          </div>
        `
      },
      {
        id: "pm1-5",
        titulo: "Estadística Elemental",
        icono: "📉",
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
        `
      },
      {
        id: "pm1-6",
        titulo: "Probabilidad Clásica",
        icono: "🎲",
        contenido: `
          <div class="formula">
P(A) = Casos favorables / Casos posibles
          </div>
          <h4>Axiomas</h4>
          <ul>
            <li>0 ≤ P(A) ≤ 1</li>
            <li>P(S) = 1</li>
            <li>P(A') = 1 - P(A)</li>
          </ul>
        `
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
        `
      },
      {
        id: "pm2-2",
        titulo: "Expresiones Algebraicas y Términos Semejantes",
        icono: "🔢",
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
        `
      },
      {
        id: "pm2-3",
        titulo: "Operaciones con Polinomios",
        icono: "🧮",
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
        `
      },
      {
        id: "pm2-4",
        titulo: "Ecuaciones de Primer Grado",
        icono: "⚖️",
        contenido: `
          <div class="formula">ax + b = c → x = (c - b) / a</div>
          <h4>Pasos para resolver</h4>
          <ol>
            <li>Eliminar paréntesis y denominadores</li>
            <li>Agrupar términos semejantes</li>
            <li>Despejar la incógnita</li>
            <li>Verificar la solución</li>
          </ol>
        `
      },
      {
        id: "pm2-5",
        titulo: "Sistemas de Ecuaciones Lineales",
        icono: "🔗",
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
        `
      },
      {
        id: "pm2-6",
        titulo: "Ecuación de la Recta",
        icono: "📈",
        contenido: `
          <div class="formula">
Pendiente: m = (y₂-y₁)/(x₂-x₁)<br><br>
Punto-pendiente: y - y₁ = m(x - x₁)<br>
Pendiente-ordenada: y = mx + b<br>
General: Ax + By + C = 0
          </div>
          <h4>Relaciones</h4>
          <ul>
            <li>Paralelas: m₁ = m₂</li>
            <li>Perpendiculares: m₁ × m₂ = -1</li>
          </ul>
        `
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
        `
      },
      {
        id: "pm3-2",
        titulo: "Funciones Cuadráticas",
        icono: "📈",
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
        `
      },
      {
        id: "pm3-3",
        titulo: "Geometría Plana: Triángulos",
        icono: "🔺",
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
        `
      },
      {
        id: "pm3-4",
        titulo: "Congruencia y Semejanza",
        icono: "📏",
        contenido: `
          <h4>Criterios de congruencia</h4>
          <ul>
            <li>LLL (Lado-Lado-Lado)</li>
            <li>LAL (Lado-Ángulo-Lado)</li>
            <li>ALA (Ángulo-Lado-Ángulo)</li>
          </ul>
          <h4>Teorema de Tales</h4>
          <p>Rectas paralelas cortadas por transversales forman segmentos proporcionales.</p>
        `
      },
      {
        id: "pm3-5",
        titulo: "Polígonos y Circunferencia",
        icono: "⭕",
        contenido: `
          <h4>Polígonos regulares</h4>
          <ul>
            <li>Elementos: centro, radio, apotema, ángulos</li>
            <li>Suma de ángulos internos = (n-2) × 180°</li>
          </ul>
          <h4>Circunferencia</h4>
          <ul>
            <li>Elementos: centro, radio, cuerda, secante, tangente, arco</li>
            <li>Ángulos: central, inscrito, semiinscrito</li>
          </ul>
        `
      },
      {
        id: "pm3-6",
        titulo: "Perímetro, Área y Volumen",
        icono: "📦",
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
        `
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
        contenido: `
          <div class="formula">
sen θ = cateto opuesto / hipotenusa<br>
cos θ = cateto adyacente / hipotenusa<br>
tan θ = cateto opuesto / cateto adyacente
          </div>
          <h4>Identidad fundamental</h4>
          <div class="formula">sen²θ + cos²θ = 1</div>
        `
      },
      {
        id: "pm4-2",
        titulo: "Ley de Senos y Cosenos",
        icono: "🔺",
        contenido: `
          <h4>Ley de senos</h4>
          <div class="formula">a/sen A = b/sen B = c/sen C</div>
          <h4>Ley de cosenos</h4>
          <div class="formula">c² = a² + b² - 2ab·cos C</div>
          <div class="ejemplo">
            <strong>Aplicación:</strong> Calcular distancias inaccesibles en terrenos.
          </div>
        `
      },
      {
        id: "pm4-3",
        titulo: "Geometría Analítica: La Recta",
        icono: "📈",
        contenido: `
          <div class="formula">
Distancia: d = √[(x₂-x₁)² + (y₂-y₁)²]<br>
Punto medio: M = ((x₁+x₂)/2, (y₁+y₂)/2)<br><br>
Pendiente: m = (y₂-y₁)/(x₂-x₁)
          </div>
        `
      },
      {
        id: "pm4-4",
        titulo: "La Parábola",
        icono: "🌐",
        contenido: `
          <div class="formula">
Vertical: (x - h)² = 4p(y - k)<br>
Horizontal: (y - k)² = 4p(x - h)<br><br>
Vértice: (h, k)<br>
Foco: (h, k + p) o (h + p, k)
          </div>
        `
      },
      {
        id: "pm4-5",
        titulo: "Circunferencia y Elipse",
        icono: "⭕",
        contenido: `
          <div class="formula">
Circunferencia: (x - h)² + (y - k)² = r²<br>
Centro: (h, k), Radio: r<br><br>
Elipse: (x - h)²/a² + (y - k)²/b² = 1
          </div>
        `
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
        contenido: `
          <p>El <strong>límite</strong> describe el comportamiento de una función cuando x se acerca a un valor.</p>
          <div class="formula">lim<sub>x→a</sub> f(x) = L</div>
          <h4>Propiedades</h4>
          <ul>
            <li>lim (f + g) = lim f + lim g</li>
            <li>lim (f · g) = lim f · lim g</li>
          </ul>
        `
      },
      {
        id: "pm5-2",
        titulo: "La Derivada",
        icono: "📈",
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
        `
      },
      {
        id: "pm5-3",
        titulo: "Aplicaciones de la Derivada",
        icono: "🚀",
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
        `
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
        `
      },
      {
        id: "pm6-2",
        titulo: "Medidas de Tendencia Central",
        icono: "📊",
        contenido: `
          <div class="formula">
Media: x̄ = Σxᵢ / n<br><br>
Mediana: valor central (datos ordenados)<br><br>
Moda: valor más frecuente
          </div>
          <div class="ejemplo">
            <strong>Contexto:</strong> Promedio de calificaciones, edad media de una comunidad.
          </div>
        `
      },
      {
        id: "pm6-3",
        titulo: "Medidas de Dispersión",
        icono: "📏",
        contenido: `
          <div class="formula">
Rango: R = x_máx - x_mín<br><br>
Varianza: σ² = Σ(xᵢ - μ)² / N<br><br>
Desviación estándar: σ = √σ²<br><br>
Coef. variación: CV = (σ / x̄) × 100%
          </div>
        `
      },
      {
        id: "pm6-4",
        titulo: "Probabilidad",
        icono: "🎲",
        contenido: `
          <h4>Probabilidad clásica</h4>
          <div class="formula">P(A) = Casos favorables / Casos posibles</div>
          <h4>Probabilidad condicional</h4>
          <div class="formula">P(A|B) = P(A∩B) / P(B)</div>
          <h4>Eventos independientes</h4>
          <div class="formula">P(A∩B) = P(A) × P(B)</div>
        `
      },
      {
        id: "pm6-5",
        titulo: "Técnicas de Conteo",
        icono: "🌳",
        contenido: `
          <div class="formula">
Principio multiplicación: m × n formas<br><br>
Factorial: n! = n × (n-1) × ... × 1<br><br>
Permutaciones: P(n,r) = n! / (n-r)!<br><br>
Combinaciones: C(n,r) = n! / [r!(n-r)!]
          </div>
        `
      },
      {
        id: "pm6-6",
        titulo: "Distribuciones de Probabilidad",
        icono: "📈",
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
        `
      }
    ]
  }
};