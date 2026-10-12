/* ==========================================================
   DATA - Matemáticas I-IV (19 temas)
========================================================== */

const MATEMATICAS = {
  1: {
    titulo: "Matemáticas I",
    semestre: "Primer Semestre",
    icono: "📐",
    descripcion: "Álgebra fundamental, ecuaciones lineales y sistemas.",
    contexto: "Las matemáticas están en todo: desde calcular la cosecha hasta medir el terreno de tu comunidad.",
    temas: [
      {
        id: "m1-1",
        titulo: "El Significado de los Números y sus Operaciones",
        icono: "🔢",
        contenido: `
          <h4>Jerarquía de operaciones</h4>
          <ol>
            <li>Paréntesis</li>
            <li>Potencias y raíces</li>
            <li>Multiplicación y división</li>
            <li>Suma y resta</li>
          </ol>
          <h4>Propiedades de los números reales</h4>
          <div class="formula">
Conmutativa: a + b = b + a<br>
Asociativa: (a + b) + c = a + (b + c)<br>
Distributiva: a(b + c) = ab + ac<br>
Identidad: a + 0 = a; a × 1 = a<br>
Inverso: a + (-a) = 0; a × (1/a) = 1
          </div>
          <div class="ejemplo">
            <strong>Contexto:</strong> Cálculo de hectáreas de cultivo en la región.
          </div>
        `
      },
      {
        id: "m1-2",
        titulo: "Variación Directamente Proporcional",
        icono: "📈",
        contenido: `
          <div class="formula">
Función lineal: y = mx + b<br>
m = pendiente, b = ordenada al origen<br><br>
Variación proporcional: y = kx<br>
k = constante de proporcionalidad
          </div>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> Relación entre horas trabajadas y salario.
          </div>
        `
      },
      {
        id: "m1-3",
        titulo: "Ecuaciones de Primer Grado",
        icono: "✏️",
        contenido: `
          <div class="formula">ax + b = c → x = (c - b) / a</div>
          <h4>Pasos</h4>
          <ol>
            <li>Eliminar paréntesis</li>
            <li>Agrupar términos semejantes</li>
            <li>Despejar la incógnita</li>
            <li>Verificar</li>
          </ol>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> Precio con 15% descuento = $255. ¿Precio original?
          </div>
        `
      },
      {
        id: "m1-4",
        titulo: "Sistemas de Ecuaciones Lineales",
        icono: "🔗",
        contenido: `
          <h4>Métodos</h4>
          <ol>
            <li>Sustitución</li>
            <li>Eliminación</li>
            <li>Igualación</li>
            <li>Gráfico</li>
          </ol>
          <div class="formula">
a₁x + b₁y = c₁<br>
a₂x + b₂y = c₂
          </div>
        `
      }
    ]
  },
  
  2: {
    titulo: "Matemáticas II",
    semestre: "Segundo Semestre",
    icono: "📊",
    descripcion: "Ecuaciones cuadráticas, geometría y estadística elemental.",
    contexto: "De la trayectoria de un balón a la optimización de recursos agrícolas.",
    temas: [
      {
        id: "m2-1",
        titulo: "Ecuaciones Cuadráticas",
        icono: "📊",
        contenido: `
          <div class="formula">
ax² + bx + c = 0<br><br>
Fórmula general:<br>
x = [-b ± √(b² - 4ac)] / 2a<br><br>
Discriminante: Δ = b² - 4ac
          </div>
          <h4>Métodos</h4>
          <ol>
            <li>Factorización</li>
            <li>Completar el cuadrado</li>
            <li>Fórmula general</li>
          </ol>
        `
      },
      {
        id: "m2-2",
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
        id: "m2-3",
        titulo: "Geometría Plana",
        icono: "🔺",
        contenido: `
          <h4>Conceptos</h4>
          <ul>
            <li>Punto, recta, plano</li>
            <li>Ángulos: agudo, recto, obtuso</li>
            <li>Polígonos: triángulos, cuadriláteros</li>
          </ul>
          <div class="formula">
Suma ángulos internos de triángulo = 180°<br>
Suma ángulos internos de polígono = (n-2) × 180°
          </div>
        `
      },
      {
        id: "m2-4",
        titulo: "Congruencia, Semejanza y Pitágoras",
        icono: "📏",
        contenido: `
          <div class="formula">
Teorema de Pitágoras:<br>
c² = a² + b²
          </div>
          <h4>Criterios de congruencia</h4>
          <ul>
            <li>LLL, LAL, ALA</li>
          </ul>
          <h4>Teorema de Tales</h4>
          <p>Rectas paralelas cortadas por transversales forman segmentos proporcionales.</p>
        `
      },
      {
        id: "m2-5",
        titulo: "Estadística Elemental",
        icono: "📉",
        contenido: `
          <h4>Medidas de tendencia central</h4>
          <div class="formula">
Media: x̄ = Σx / n<br>
Mediana: valor central<br>
Moda: valor más frecuente
          </div>
          <h4>Medidas de dispersión</h4>
          <div class="formula">
Rango: máx - mín<br>
Varianza: σ² = Σ(x - x̄)² / n<br>
Desv. estándar: σ = √σ²
          </div>
          <div class="ejemplo">
            <strong>Contexto:</strong> Producción de café por región.
          </div>
        `
      },
      {
        id: "m2-6",
        titulo: "Probabilidad Elemental",
        icono: "🎲",
        contenido: `
          <div class="formula">
P(A) = Casos favorables / Casos posibles<br><br>
P(A∪B) = P(A) + P(B) - P(A∩B)<br>
P(A∩B) = P(A) × P(B|A)
          </div>
        `
      }
    ]
  },
  
  3: {
    titulo: "Matemáticas III",
    semestre: "Tercer Semestre",
    icono: "📐",
    descripcion: "Trigonometría y geometría analítica.",
    contexto: "Medición de distancias inaccesibles: montañas, ríos y terrenos.",
    temas: [
      {
        id: "m3-1",
        titulo: "Trigonometría",
        icono: "📐",
        contenido: `
          <div class="formula">
sen θ = cateto opuesto / hipotenusa<br>
cos θ = cateto adyacente / hipotenusa<br>
tan θ = cateto opuesto / cateto adyacente<br><br>
Identidad: sen²θ + cos²θ = 1
          </div>
          <h4>Leyes</h4>
          <div class="formula">
Ley de senos: a/sen A = b/sen B = c/sen C<br>
Ley de cosenos: c² = a² + b² - 2ab·cos C
          </div>
        `
      },
      {
        id: "m3-2",
        titulo: "Geometría Analítica",
        icono: "📊",
        contenido: `
          <div class="formula">
Distancia: d = √[(x₂-x₁)² + (y₂-y₁)²]<br>
Punto medio: M = ((x₁+x₂)/2, (y₁+y₂)/2)
          </div>
        `
      },
      {
        id: "m3-3",
        titulo: "La Recta",
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
      },
      {
        id: "m3-4",
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
        id: "m3-5",
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
  
  4: {
    titulo: "Matemáticas IV",
    semestre: "Cuarto Semestre",
    icono: "📈",
    descripcion: "Funciones polinomiales, racionales, exponenciales y trigonométricas.",
    contexto: "Modelado matemático de fenómenos naturales y sociales.",
    temas: [
      {
        id: "m4-1",
        titulo: "Noción de Función y Polinomiales",
        icono: "📊",
        contenido: `
          <p><strong>Función:</strong> relación que asigna a cada x un único y.</p>
          <h4>Dominio y rango</h4>
          <ul>
            <li>Dominio: valores posibles de x</li>
            <li>Rango: valores posibles de y</li>
          </ul>
          <h4>Polinomiales</h4>
          <ul>
            <li>Grado 0: constante</li>
            <li>Grado 1: lineal</li>
            <li>Grado 2: cuadrática</li>
            <li>Grado 3: cúbica</li>
          </ul>
        `
      },
      {
        id: "m4-2",
        titulo: "Funciones Racionales y con Radicales",
        icono: "📉",
        contenido: `
          <div class="formula">
Racional: f(x) = P(x)/Q(x)<br>
Asíntota vertical: Q(x) = 0<br><br>
Radical: f(x) = √(P(x))<br>
Dominio: P(x) ≥ 0
          </div>
        `
      },
      {
        id: "m4-3",
        titulo: "Funciones Exponenciales y Logarítmicas",
        icono: "📈",
        contenido: `
          <div class="formula">
Exponencial: f(x) = aˣ<br>
• a > 1 → crecimiento<br>
• 0 < a < 1 → decaimiento<br><br>
Logaritmo: f(x) = logₐ(x)<br>
log(ab) = log(a) + log(b)<br>
log(a/b) = log(a) - log(b)<br>
log(aⁿ) = n·log(a)
          </div>
          <div class="ejemplo">
            <strong>Contexto:</strong> Crecimiento poblacional, interés compuesto.
          </div>
        `
      },
      {
        id: "m4-4",
        titulo: "Funciones Trigonométricas",
        icono: "🌊",
        contenido: `
          <div class="formula">
f(x) = sen(x), cos(x), tan(x)<br><br>
y = A·sen(Bx + C) + D<br>
• A = amplitud<br>
• 2π/B = período<br>
• C/B = desfase<br>
• D = desplazamiento vertical
          </div>
        `
      }
    ]
  }
};