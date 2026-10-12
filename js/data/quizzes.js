/* ==========================================================
   DATA - Banco de preguntas para Quiz
========================================================== */

const QUIZZES = {
  // Ciencias Naturales por semestre
  ciencias: {
    1: [
      { pregunta: "¿Cuál es el primer paso del método científico?", opciones: ["Hipótesis", "Observación", "Experimentación", "Conclusión"], correcta: 1 },
      { pregunta: "¿Qué propiedad se calcula como masa/volumen?", opciones: ["Peso", "Densidad", "Volumen", "Masa"], correcta: 1 },
      { pregunta: "¿Qué instrumento mide temperatura?", opciones: ["Balanza", "Probeta", "Termómetro", "Vernier"], correcta: 2 },
      { pregunta: "¿Cuál es una mezcla homogénea?", opciones: ["Granito", "Ensalada", "Agua salada", "Aceite y agua"], correcta: 2 },
      { pregunta: "¿Cuántos elementos tiene la tabla periódica?", opciones: ["92", "100", "118", "150"], correcta: 2 }
    ],
    2: [
      { pregunta: "¿Cuál es la fórmula de la energía cinética?", opciones: ["Ec = mgh", "Ec = ½mv²", "Ec = Fd", "Ec = mv"], correcta: 1 },
      { pregunta: "¿En qué unidades se mide la energía?", opciones: ["Newton", "Watt", "Joule", "Pascal"], correcta: 2 },
      { pregunta: "¿Qué energía tiene un objeto en movimiento?", opciones: ["Potencial", "Cinética", "Térmica", "Química"], correcta: 1 },
      { pregunta: "¿Cuál es una fuente renovable?", opciones: ["Petróleo", "Carbón", "Solar", "Gas"], correcta: 2 },
      { pregunta: "¿Qué dice la Ley de Conservación de la Energía?", opciones: ["Se crea", "Se destruye", "Se transforma", "Desaparece"], correcta: 2 }
    ],
    3: [
      { pregunta: "¿Cuál es la capa más externa de la Tierra?", opciones: ["Manto", "Núcleo", "Corteza", "Atmósfera"], correcta: 2 },
      { pregunta: "¿Qué gas es más abundante en la atmósfera?", opciones: ["Oxígeno", "Nitrógeno", "CO₂", "Argón"], correcta: 1 },
      { pregunta: "¿Cuál es el río más caudaloso de Chiapas?", opciones: ["Usumacinta", "Grijalva", "Suchiate", "Lacantún"], correcta: 1 },
      { pregunta: "¿Qué % de energía se transfiere entre niveles tróficos?", opciones: ["50%", "25%", "10%", "100%"], correcta: 2 },
      { pregunta: "¿Cuál es un área natural protegida de Chiapas?", opciones: ["Montes Azules", "Chichen Itzá", "Teotihuacán", "Barrancas"], correcta: 0 }
    ],
    4: [
      { pregunta: "¿Cuál es la carga del protón?", opciones: ["Negativa", "Positiva", "Neutra", "Variable"], correcta: 1 },
      { pregunta: "¿Qué enlace se forma entre metal y no metal?", opciones: ["Covalente", "Iónico", "Metálico", "Puente H"], correcta: 1 },
      { pregunta: "¿Cuántos moles hay en 36 g de agua (M=18)?", opciones: ["1", "2", "3", "4"], correcta: 1 },
      { pregunta: "¿Qué dice la Ley de Lavoisier?", opciones: ["Masa se crea", "Masa se destruye", "Masa se conserva", "Masa cambia"], correcta: 2 },
      { pregunta: "¿Qué modelo propuso Rutherford?", opciones: ["Esfera", "Budín", "Núcleo", "Órbitas"], correcta: 2 }
    ],
    5: [
      { pregunta: "¿Cuál es la Segunda Ley de Newton?", opciones: ["F = ma", "E = mc²", "V = IR", "W = Fd"], correcta: 0 },
      { pregunta: "¿Cuál es la fórmula de la Ley de Ohm?", opciones: ["F = ma", "V = IR", "E = mc²", "P = W/t"], correcta: 1 },
      { pregunta: "¿Cuál es la aceleración de la gravedad?", opciones: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "9.8 km/s²"], correcta: 0 },
      { pregunta: "¿Qué tipo de onda es el sonido?", opciones: ["Electromagnética", "Mecánica", "Luminosa", "Nuclear"], correcta: 1 },
      { pregunta: "¿Qué principio explica la flotación?", opciones: ["Pascal", "Arquímedes", "Newton", "Ohm"], correcta: 1 }
    ],
    6: [
      { pregunta: "¿Cuál es la unidad básica de la vida?", opciones: ["Átomo", "Molécula", "Célula", "Tejido"], correcta: 2 },
      { pregunta: "¿Quién propuso la evolución por selección natural?", opciones: ["Mendel", "Darwin", "Watson", "Pasteur"], correcta: 1 },
      { pregunta: "¿Qué organelo hace fotosíntesis?", opciones: ["Mitocondria", "Núcleo", "Cloroplasto", "Ribosoma"], correcta: 2 },
      { pregunta: "¿Cuántos niveles de biodiversidad hay?", opciones: ["1", "2", "3", "4"], correcta: 2 },
      { pregunta: "¿Cuál es un ecosistema de Chiapas?", opciones: ["Desierto", "Selva Lacandona", "Tundra", "Sabana"], correcta: 1 }
    ]
  },
  quimica: {
    1: [
      {
        pregunta: "¿Qué estudia la Química?",
        opciones: [
          "Solo los seres vivos",
          "La composición, estructura y transformaciones de la materia",
          "Únicamente los átomos",
          "Los planetas y estrellas"
        ],
        correcta: 1
      },
      {
        pregunta: "¿Cuál es el primer paso del método científico?",
        opciones: [
          "Hipótesis",
          "Experimentación",
          "Observación",
          "Conclusión"
        ],
        correcta: 2
      },
      {
        pregunta: "¿Cuál es la unidad de masa en el Sistema Internacional?",
        opciones: [
          "Gramo (g)",
          "Libra (lb)",
          "Kilogramo (kg)",
          "Mol (mol)"
        ],
        correcta: 2
      },
      {
        pregunta: "El paso de sólido a líquido se llama:",
        opciones: [
          "Evaporación",
          "Fusión",
          "Sublimación",
          "Condensación"
        ],
        correcta: 1
      },
      {
        pregunta: "¿Cuál de los siguientes es una mezcla homogénea?",
        opciones: [
          "Granito",
          "Ensalada",
          "Agua salada",
          "Aceite y agua"
        ],
        correcta: 2
      },
      {
        pregunta: "¿Qué partícula subatómica tiene carga positiva?",
        opciones: [
          "Electrón",
          "Neutrón",
          "Protón",
          "Fotón"
        ],
        correcta: 2
      },
      {
        pregunta: "Si un átomo tiene Z=11 y A=23, ¿cuántos neutrones tiene?",
        opciones: [
          "11",
          "12",
          "23",
          "34"
        ],
        correcta: 1
      },
      {
        pregunta: "¿Cuántos electrones caben como máximo en el subnivel p?",
        opciones: [
          "2",
          "6",
          "10",
          "14"
        ],
        correcta: 1
      },
      {
        pregunta: "¿Cuál es el grupo de los gases nobles?",
        opciones: [
          "Grupo 1",
          "Grupo 2",
          "Grupo 17",
          "Grupo 18"
        ],
        correcta: 3
      },
      {
        pregunta: "¿Qué tipo de enlace se forma entre un metal y un no metal?",
        opciones: [
          "Covalente polar",
          "Covalente no polar",
          "Iónico",
          "Metálico"
        ],
        correcta: 2
      },
      {
        pregunta: "La regla del octeto establece que los átomos buscan tener:",
        opciones: [
          "2 electrones en su última capa",
          "8 electrones en su última capa",
          "8 protones en el núcleo",
          "18 neutrones"
        ],
        correcta: 1
      },
      {
        pregunta: "¿Cuál es la configuración electrónica del sodio (Na, Z=11)?",
        opciones: [
          "1s² 2s² 2p⁶ 3s¹",
          "1s² 2s² 2p⁶ 3s²",
          "1s² 2s² 2p⁵ 3s²",
          "1s² 2s² 2p⁶ 3p¹"
        ],
        correcta: 0
      }
    ],

    2: [
      {
        pregunta: "¿Cuál es la fórmula del óxido de calcio?",
        opciones: [
          "CaO",
          "Ca₂O",
          "CaO₂",
          "Ca(OH)₂"
        ],
        correcta: 0
      },
      {
        pregunta: "¿Qué tipo de reacción es: 2H₂O → 2H₂ + O₂?",
        opciones: [
          "Síntesis",
          "Descomposición",
          "Sustitución simple",
          "Doble sustitución"
        ],
        correcta: 1
      },
      {
        pregunta: "¿Qué dice la Ley de Conservación de la Masa de Lavoisier?",
        opciones: [
          "La masa se crea en las reacciones",
          "La masa se destruye en las reacciones",
          "La masa de reactivos = masa de productos",
          "La masa cambia según la temperatura"
        ],
        correcta: 2
      },
      {
        pregunta: "Balancea: __Fe + __O₂ → __Fe₂O₃. ¿Cuáles son los coeficientes?",
        opciones: [
          "1, 1, 1",
          "2, 3, 1",
          "4, 3, 2",
          "3, 4, 2"
        ],
        correcta: 2
      },
      {
        pregunta: "¿Cuántas partículas hay en 1 mol de cualquier sustancia?",
        opciones: [
          "6.022×10²³",
          "3.14×10²³",
          "1×10²³",
          "9.8×10²³"
        ],
        correcta: 0
      },
      {
        pregunta: "Si la masa molar del agua es 18 g/mol, ¿cuántos moles hay en 54 g?",
        opciones: [
          "1 mol",
          "2 moles",
          "3 moles",
          "4 moles"
        ],
        correcta: 2
      },
      {
        pregunta: "¿Qué es una solución saturada?",
        opciones: [
          "Una con poco soluto",
          "Una con mucho soluto sin disolver",
          "Una con la máxima cantidad de soluto disuelto",
          "Una sin soluto"
        ],
        correcta: 2
      },
      {
        pregunta: "Un ácido según Arrhenius libera:",
        opciones: [
          "OH⁻ en agua",
          "H⁺ en agua",
          "Electrones",
          "Neutrones"
        ],
        correcta: 1
      },
      {
        pregunta: "¿Cuál es el pH de una sustancia neutra?",
        opciones: [
          "0",
          "7",
          "14",
          "1"
        ],
        correcta: 1
      },
      {
        pregunta: "En una reacción redox, la oxidación implica:",
        opciones: [
          "Ganancia de electrones",
          "Pérdida de electrones",
          "Ganancia de protones",
          "Pérdida de neutrones"
        ],
        correcta: 1
      },
      {
        pregunta: "¿Cuál es un ejemplo de ácido fuerte?",
        opciones: [
          "HCl (ácido clorhídrico)",
          "H₂O (agua)",
          "NaCl (sal)",
          "CH₄ (metano)"
        ],
        correcta: 0
      },
      {
        pregunta: "¿Qué producto se obtiene al reaccionar un ácido con un hidróxido?",
        opciones: [
          "Solo agua",
          "Solo gas",
          "Sal + agua",
          "Óxido + hidrógeno"
        ],
        correcta: 2
      }
    ]
  },
  // Matemáticas
  matematicas: {
    1: [
      { pregunta: "¿Cuál es el resultado de 2 + 3 × 4?", opciones: ["20", "14", "24", "11"], correcta: 1 },
      { pregunta: "Si y = 2x + 3, ¿cuánto vale y cuando x = 5?", opciones: ["10", "13", "15", "8"], correcta: 1 },
      { pregunta: "Resuelve: 3x - 5 = 10", opciones: ["3", "5", "15", "2"], correcta: 1 },
      { pregunta: "¿Qué método NO sirve para resolver sistemas 2×2?", opciones: ["Sustitución", "Eliminación", "Igualación", "Integración"], correcta: 3 },
      { pregunta: "¿Qué propiedad es a(b + c) = ab + ac?", opciones: ["Conmutativa", "Asociativa", "Distributiva", "Identidad"], correcta: 2 }
    ],
    2: [
      { pregunta: "¿Cuál es la fórmula general cuadrática?", opciones: ["x = -b/2a", "x = (-b ± √(b²-4ac))/2a", "x = b²-4ac", "x = -b/a"], correcta: 1 },
      { pregunta: "Si Δ = 0, ¿cuántas soluciones reales hay?", opciones: ["0", "1", "2", "Infinitas"], correcta: 1 },
      { pregunta: "¿Cuál es la fórmula del Teorema de Pitágoras?", opciones: ["a + b = c", "c² = a² + b²", "c = a + b", "a² = c² + b²"], correcta: 1 },
      { pregunta: "¿Qué medida divide los datos en 4 partes?", opciones: ["Media", "Mediana", "Cuartiles", "Moda"], correcta: 2 },
      { pregunta: "Si P(A) = 0.3, ¿cuánto vale P(A')?", opciones: ["0.3", "0.7", "1", "0"], correcta: 1 }
    ],
    3: [
      { pregunta: "¿Cuánto vale sen(90°)?", opciones: ["0", "0.5", "1", "No definido"], correcta: 2 },
      { pregunta: "¿Cuál es la identidad pitagórica?", opciones: ["sen + cos = 1", "sen² + cos² = 1", "tan = sen·cos", "sen/cos = 1"], correcta: 1 },
      { pregunta: "Pendiente de una recta perpendicular: si m₁ = 2, m₂ =", opciones: ["2", "-2", "-1/2", "1/2"], correcta: 2 },
      { pregunta: "Ecuación de la circunferencia con centro en origen:", opciones: ["x + y = r", "x² + y² = r²", "x² - y² = r", "xy = r"], correcta: 1 },
      { pregunta: "Forma general de la recta:", opciones: ["y = mx + b", "Ax + By + C = 0", "y - y₁ = m(x - x₁)", "Todas"], correcta: 1 }
    ],
    4: [
      { pregunta: "¿Cuál es la función inversa de aˣ?", opciones: ["xᵃ", "logₐ(x)", "1/aˣ", "a/x"], correcta: 1 },
      { pregunta: "¿Cuál es el período de sen(x)?", opciones: ["π", "2π", "π/2", "1"], correcta: 1 },
      { pregunta: "log(ab) es igual a:", opciones: ["log(a)·log(b)", "log(a) + log(b)", "log(a)/log(b)", "log(a-b)"], correcta: 1 },
      { pregunta: "¿Qué tipo de función es f(x) = 2x³ - x?", opciones: ["Lineal", "Cuadrática", "Cúbica", "Exponencial"], correcta: 2 },
      { pregunta: "Dominio de f(x) = √x:", opciones: ["x > 0", "x ≥ 0", "x < 0", "Todos"], correcta: 1 }
    ]
  },

  // Física
  fisica: {
    3: [
      { pregunta: "¿Cuál es la fórmula de velocidad en MRU?", opciones: ["v = at", "v = d/t", "v = ½at²", "v = gt"], correcta: 1 },
      { pregunta: "Unidad de fuerza en el SI:", opciones: ["Joule", "Watt", "Newton", "Pascal"], correcta: 2 },
      { pregunta: "La 2da Ley de Newton es:", opciones: ["F = ma", "F = mv", "F = m/a", "F = a/m"], correcta: 0 },
      { pregunta: "Aceleración de gravedad aproximada:", opciones: ["9.8 m/s²", "3.14 m/s²", "10 km/s²", "8 m/s²"], correcta: 0 },
      { pregunta: "Fórmula de energía cinética:", opciones: ["mgh", "½mv²", "Fd", "mv"], correcta: 1 }
    ],
    4: [
      { pregunta: "Unidad de presión:", opciones: ["Newton", "Joule", "Pascal", "Watt"], correcta: 2 },
      { pregunta: "¿Qué principio explica los barcos flotando?", opciones: ["Pascal", "Arquímedes", "Newton", "Bernoulli"], correcta: 1 },
      { pregunta: "La Ley de Ohm es:", opciones: ["F = ma", "V = IR", "E = mc²", "P = W/t"], correcta: 1 },
      { pregunta: "0°C en Kelvin:", opciones: ["0 K", "100 K", "273.15 K", "32 K"], correcta: 2 },
      { pregunta: "¿Qué tipo de onda es la luz?", opciones: ["Mecánica", "Electromagnética", "Sonora", "Nuclear"], correcta: 1 }
    ],
    5: [
      { pregunta: "¿Quién propuso E = mc²?", opciones: ["Newton", "Einstein", "Bohr", "Planck"], correcta: 1 },
      { pregunta: "¿Qué partícula tiene carga negativa?", opciones: ["Protón", "Neutrón", "Electrón", "Fotón"], correcta: 2 },
      { pregunta: "En radiactividad, ¿qué emite partículas α?", opciones: ["Electrones", "Núcleos de He", "Fotones", "Neutrones"], correcta: 1 },
      { pregunta: "La fusión nuclear ocurre en:", opciones: ["Reactores", "Sol", "Baterías", "Volcanes"], correcta: 1 },
      { pregunta: "El principio de incertidumbre es de:", opciones: ["Einstein", "Newton", "Heisenberg", "Bohr"], correcta: 2 }
    ]
  },

  // Probabilidad y Estadística
  probabilidad: {
    5: [
      { pregunta: "¿Qué mide la media aritmética?", opciones: ["Dispersión", "Tendencia central", "Correlación", "Asimetría"], correcta: 1 },
      { pregunta: "Fórmula de la media:", opciones: ["Σx/n", "n/Σx", "Σx²/n", "Σ(x-x̄)²"], correcta: 0 },
      { pregunta: "¿Qué medida divide en 4 partes?", opciones: ["Media", "Moda", "Cuartiles", "Rango"], correcta: 2 },
      { pregunta: "Si P(A) = 0.4 y P(B) = 0.3, con eventos independientes, P(A∩B) =", opciones: ["0.7", "0.12", "0.1", "0.34"], correcta: 1 },
      { pregunta: "Permutaciones vs combinaciones:", opciones: ["Son iguales", "Permutaciones importa el orden", "Combinaciones importa el orden", "Ninguna"], correcta: 1 }
    ]
  }
};