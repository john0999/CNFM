/* ==========================================================
   DATA - Probabilidad y Estadística (11 temas en 3 bloques)
========================================================== */

const PROBABILIDAD = {
  5: {
    titulo: "Probabilidad y Estadística",
    semestre: "Quinto Semestre",
    icono: "📊",
    descripcion: "Estadística descriptiva, probabilidad e inferencia.",
    contexto: "Analiza datos reales de tu comunidad: producción, población, encuestas.",
    bloques: [
      {
        nombre: "Bloque I: Fundamentos",
        temas: [
          {
            id: "pe-1",
            titulo: "Conceptos Básicos de Estadística",
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
                <li><strong>Cualitativas:</strong> categorías (color, tipo)</li>
                <li><strong>Cuantitativas:</strong> números
                  <ul>
                    <li>Discretas: contables</li>
                    <li>Continuas: medibles</li>
                  </ul>
                </li>
              </ul>
              <h4>Ramas</h4>
              <ul>
                <li><strong>Descriptiva:</strong> organiza y resume</li>
                <li><strong>Inferencial:</strong> generaliza desde muestras</li>
              </ul>
            `
          },
          {
            id: "pe-2",
            titulo: "Recolección y Organización de Datos",
            icono: "🔢",
            contenido: `
              <h4>Técnicas de muestreo</h4>
              <ul>
                <li>Aleatorio simple</li>
                <li>Estratificado</li>
                <li>Por conglomerados</li>
                <li>Sistemático</li>
              </ul>
              <h4>Tabla de frecuencias</h4>
              <div class="formula">
Frecuencia absoluta (fᵢ)<br>
Frecuencia relativa (fᵢ/n)<br>
Frecuencia acumulada (Fᵢ)
              </div>
              <h4>Gráficas</h4>
              <ul>
                <li>Barras, histogramas</li>
                <li>Polígonos de frecuencia, ojivas</li>
                <li>Gráficas circulares</li>
              </ul>
            `
          },
          {
            id: "pe-3",
            titulo: "Nociones de Probabilidad",
            icono: "🎲",
            contenido: `
              <h4>Conceptos</h4>
              <ul>
                <li><strong>Experimento aleatorio:</strong> resultado no predecible</li>
                <li><strong>Espacio muestral (S):</strong> todos los resultados</li>
                <li><strong>Evento:</strong> subconjunto de S</li>
              </ul>
              <h4>Tipos de eventos</h4>
              <ul>
                <li>Mutuamente excluyentes</li>
                <li>Independientes</li>
                <li>Dependientes</li>
                <li>Complementarios</li>
              </ul>
              <div class="formula">
P(A) = Casos favorables / Casos posibles<br><br>
Axiomas:<br>
0 ≤ P(A) ≤ 1<br>
P(S) = 1<br>
P(A') = 1 - P(A)
              </div>
            `
          }
        ]
      },
      {
        nombre: "Bloque II: Medidas Estadísticas",
        temas: [
          {
            id: "pe-4",
            titulo: "Medidas de Tendencia Central",
            icono: "📊",
            contenido: `
              <div class="formula">
Media: x̄ = Σxᵢ / n<br><br>
Mediana: valor central (datos ordenados)<br>
• Par: promedio de los dos centrales<br><br>
Moda: valor más frecuente
              </div>
              <div class="ejemplo">
                <strong>Contexto:</strong> Promedio de calificaciones, edad media de una comunidad.
              </div>
            `
          },
          {
            id: "pe-5",
            titulo: "Medidas de Dispersión",
            icono: "📏",
            contenido: `
              <div class="formula">
Rango: R = x_máx - x_mín<br><br>
Varianza poblacional:<br>
σ² = Σ(xᵢ - μ)² / N<br><br>
Varianza muestral:<br>
s² = Σ(xᵢ - x̄)² / (n - 1)<br><br>
Desviación estándar:<br>
σ = √σ²  (población)<br>
s = √s²  (muestra)<br><br>
Coef. variación: CV = (s / x̄) × 100%
              </div>
            `
          },
          {
            id: "pe-6",
            titulo: "Medidas de Posición",
            icono: "📈",
            contenido: `
              <h4>Cuartiles</h4>
              <p>Dividen en 4 partes: Q₁, Q₂ (mediana), Q₃</p>
              <h4>Deciles</h4>
              <p>Dividen en 10 partes</p>
              <h4>Percentiles</h4>
              <p>Dividen en 100 partes</p>
              <div class="formula">
Rango intercuartil: IQR = Q₃ - Q₁
              </div>
            `
          },
          {
            id: "pe-7",
            titulo: "Medidas de Forma y Correlación",
            icono: "📐",
            contenido: `
              <h4>Asimetría</h4>
              <ul>
                <li>Positiva (cola derecha)</li>
                <li>Negativa (cola izquierda)</li>
                <li>Simétrica</li>
              </ul>
              <h4>Curtosis</h4>
              <ul>
                <li>Leptocúrtica (puntiaguda)</li>
                <li>Mesocúrtica (normal)</li>
                <li>Platicúrtica (aplanada)</li>
              </ul>
              <div class="formula">
Correlación (r de Pearson):<br>
r = Σ[(x - x̄)(y - ȳ)] / √[Σ(x - x̄)²·Σ(y - ȳ)²]
              </div>
            `
          }
        ]
      },
      {
        nombre: "Bloque III: Probabilidad Avanzada",
        temas: [
          {
            id: "pe-8",
            titulo: "Técnicas de Conteo",
            icono: "🌳",
            contenido: `
              <div class="formula">
Principio multiplicación:<br>
m formas × n formas = m×n formas<br><br>
Factorial: n! = n × (n-1) × ... × 1<br>
0! = 1<br><br>
Permutaciones (importa orden):<br>
P(n,r) = n! / (n-r)!<br><br>
Combinaciones (no importa orden):<br>
C(n,r) = n! / [r!(n-r)!]
              </div>
            `
          },
          {
            id: "pe-9",
            titulo: "Probabilidad Condicional",
            icono: "🔗",
            contenido: `
              <div class="formula">
P(A|B) = P(A∩B) / P(B)<br><br>
Independientes:<br>
P(A∩B) = P(A) × P(B)<br><br>
Teorema de Bayes:<br>
P(A|B) = P(B|A)·P(A) / P(B)<br><br>
Probabilidad total:<br>
P(B) = ΣP(B|Aᵢ)·P(Aᵢ)
              </div>
            `
          },
          {
            id: "pe-10",
            titulo: "Distribuciones de Probabilidad",
            icono: "📊",
            contenido: `
              <h4>Binomial</h4>
              <div class="formula">
P(X=k) = C(n,k)·p^k·(1-p)^(n-k)
              </div>
              <h4>Normal</h4>
              <ul>
                <li>Forma de campana</li>
                <li>Media μ, desviación σ</li>
                <li>68% dentro de μ ± σ</li>
                <li>95% dentro de μ ± 2σ</li>
                <li>99.7% dentro de μ ± 3σ</li>
              </ul>
              <div class="formula">
Estandarización: z = (x - μ) / σ
              </div>
            `
          },
          {
            id: "pe-11",
            titulo: "Inferencia Estadística",
            icono: "🔮",
            contenido: `
              <h4>Estimación</h4>
              <ul>
                <li>Media muestral (x̄) estima μ</li>
                <li>Proporción muestral (p̂) estima p</li>
              </ul>
              <h4>Intervalos de confianza</h4>
              <div class="formula">
Media: x̄ ± z·(σ/√n)<br>
Proporción: p̂ ± z·√[p̂(1-p̂)/n]
              </div>
              <h4>Prueba de hipótesis</h4>
              <ul>
                <li>Hipótesis nula (H₀)</li>
                <li>Hipótesis alternativa (H₁)</li>
                <li>Nivel de significancia (α)</li>
              </ul>
            `
          }
        ]
      }
    ]
  }
};