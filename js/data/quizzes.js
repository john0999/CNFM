/* ==========================================================
   DATA - Banco de preguntas para Quiz (Por Niveles)
   Incluye: Ciencias, Talleres, Matemáticas, Física, Química, Inglés
========================================================== */

const QUIZZES = {
  // ===== CIENCIAS NATURALES =====
  ciencias: {
    basico: [
      { pregunta: "¿Cuál es el primer paso del método científico?", opciones: ["Hipótesis", "Observación", "Experimentación", "Conclusión"], correcta: 1 },
      { pregunta: "¿Qué propiedad se calcula como masa/volumen?", opciones: ["Peso", "Densidad", "Volumen", "Masa"], correcta: 1 },
      { pregunta: "¿Qué instrumento mide temperatura?", opciones: ["Balanza", "Probeta", "Termómetro", "Vernier"], correcta: 2 },
      { pregunta: "¿Cuál es una mezcla homogénea?", opciones: ["Granito", "Ensalada", "Agua salada", "Aceite y agua"], correcta: 2 },
      { pregunta: "El paso de sólido a líquido se llama:", opciones: ["Evaporación", "Fusión", "Sublimación", "Condensación"], correcta: 1 }
    ],
    intermedio: [
      { pregunta: "¿Cuál es la fórmula de la energía cinética?", opciones: ["Ec = mgh", "Ec = ½mv²", "Ec = Fd", "Ec = mv"], correcta: 1 },
      { pregunta: "¿En qué unidades se mide la energía?", opciones: ["Newton", "Watt", "Joule", "Pascal"], correcta: 2 },
      { pregunta: "¿Qué dice la Ley de Conservación de la Energía?", opciones: ["Se crea", "Se destruye", "Se transforma", "Desaparece"], correcta: 2 },
      { pregunta: "¿Cuál es el río más caudaloso de Chiapas?", opciones: ["Usumacinta", "Grijalva", "Suchiate", "Lacantún"], correcta: 1 },
      { pregunta: "¿Cuál es la carga del protón?", opciones: ["Negativa", "Positiva", "Neutra", "Variable"], correcta: 1 }
    ],
    avanzado: [
      { pregunta: "¿Qué % de energía se transfiere entre niveles tróficos?", opciones: ["50%", "25%", "10%", "100%"], correcta: 2 },
      { pregunta: "¿Cuántos moles hay en 36 g de agua (M=18)?", opciones: ["1", "2", "3", "4"], correcta: 1 },
      { pregunta: "¿Qué principio explica la flotación de barcos?", opciones: ["Pascal", "Arquímedes", "Newton", "Ohm"], correcta: 1 },
      { pregunta: "¿Qué organelo realiza la fotosíntesis?", opciones: ["Mitocondria", "Núcleo", "Cloroplasto", "Ribosoma"], correcta: 2 },
      { pregunta: "¿Cuál es la unidad básica de la vida?", opciones: ["Átomo", "Molécula", "Célula", "Tejido"], correcta: 2 }
    ]
  },

  // ===== TALLER DE CIENCIAS =====
  talleres: {
    basico: [
      { pregunta: "El primer paso de una investigación científica es:", opciones: ["Concluir", "Plantear preguntas", "Publicar", "Inventar"], correcta: 1 },
      { pregunta: "¿Qué se hace con los datos obtenidos en un experimento?", opciones: ["Ignorarlos", "Analizarlos e interpretarlos", "Borrar", "Venderlos"], correcta: 1 },
      { pregunta: "Un modelo científico sirve para:", opciones: ["Adornar", "Explicar un fenómeno", "Vender", "Confundir"], correcta: 1 },
      { pregunta: "Clasificar la basura ayuda a:", opciones: ["Contaminar más", "Reciclar", "Quemar todo", "Enterrarla"], correcta: 1 },
      { pregunta: "El taller busca vincular la ciencia con:", opciones: ["El espacio", "Tu comunidad", "El pasado", "La ficción"], correcta: 1 }
    ],
    intermedio: [
      { pregunta: "¿Cómo se genera la mayor parte de la electricidad en Chiapas?", opciones: ["Con carbón", "Con presas hidroeléctricas", "Con energía nuclear", "Con placas solares"], correcta: 1 },
      { pregunta: "El ciclo del agua es un ejemplo de:", opciones: ["Flujo de energía", "Solo lluvia", "Magia", "Materia inerte"], correcta: 0 },
      { pregunta: "Identificar flujos de energía ayuda a:", opciones: ["Ahorrar y cuidar el ambiente", "Gastar más", "Contaminar", "Nada"], correcta: 0 },
      { pregunta: "Una 'casa sustentable' usa:", opciones: ["Mucha energía", "Paneles solares y adobe", "Solo cemento", "Plásticos"], correcta: 1 },
      { pregunta: "El adobe es un material:", opciones: ["Tradicional y sustentable", "De lujo", "Contaminante", "Metálico"], correcta: 0 }
    ],
    avanzado: [
      { pregunta: "Una hipótesis es:", opciones: ["Una ley", "Una suposición a probar", "Un dato final", "Un equipo"], correcta: 1 },
      { pregunta: "El diseño experimental debe ser:", opciones: ["Al azar", "Controlado y planificado", "Sin reglas", "Muy rápido"], correcta: 1 },
      { pregunta: "El último paso del método científico es:", opciones: ["Llorar", "Comunicar resultados", "Romper todo", "Empezar de nuevo"], correcta: 1 },
      { pregunta: "La energía fluye en un ecosistema a través de:", opciones: ["Cadenas tróficas", "El suelo", "Las rocas", "El viento"], correcta: 0 },
      { pregunta: "La principal fuente de energía de los ecosistemas es:", opciones: ["El agua", "El sol", "El viento", "Las rocas"], correcta: 1 }
    ]
  },

  // ===== PENSAMIENTO MATEMÁTICO =====
  matematicas: {
    basico: [
      { pregunta: "¿Cuál es el resultado de 2 + 3 × 4?", opciones: ["20", "14", "24", "11"], correcta: 1 },
      { pregunta: "¿Qué propiedad es a(b + c) = ab + ac?", opciones: ["Conmutativa", "Asociativa", "Distributiva", "Identidad"], correcta: 2 },
      { pregunta: "Si y = 2x + 3, ¿cuánto vale y cuando x = 5?", opciones: ["10", "13", "15", "8"], correcta: 1 },
      { pregunta: "¿Qué tipo de número es π?", opciones: ["Natural", "Entero", "Racional", "Irracional"], correcta: 3 },
      { pregunta: "En 2, 5, 8, 11..., ¿cuál es la diferencia común?", opciones: ["2", "3", "4", "5"], correcta: 1 }
    ],
    intermedio: [
      { pregunta: "¿Cuál es la traducción de 'el doble de un número'?", opciones: ["x + 2", "2x", "x/2", "x²"], correcta: 1 },
      { pregunta: "¿Cuál es la fórmula del Teorema de Pitágoras?", opciones: ["a + b = c", "c² = a² + b²", "c = a + b", "a² = c² + b²"], correcta: 1 },
      { pregunta: "¿Cuál es el resultado de (x+3)(x-3)?", opciones: ["x²-9", "x²+9", "x²-6x+9", "x²+6x+9"], correcta: 0 },
      { pregunta: "Resuelve: 3x - 5 = 10", opciones: ["3", "5", "15", "2"], correcta: 1 },
      { pregunta: "Simplifica: 3x + 5x - 2x", opciones: ["6x", "8x", "10x", "4x"], correcta: 0 }
    ],
    avanzado: [
      { pregunta: "¿Cuál es la fórmula general cuadrática?", opciones: ["x = -b/2a", "x = (-b ± √(b²-4ac))/2a", "x = b²-4ac", "x = -b/a"], correcta: 1 },
      { pregunta: "¿Cuánto vale sen(90°)?", opciones: ["0", "0.5", "1", "No definido"], correcta: 2 },
      { pregunta: "¿Cuál es la derivada de x³?", opciones: ["x²", "3x²", "3x", "x³/3"], correcta: 1 },
      { pregunta: "La segunda derivada mide:", opciones: ["Velocidad", "Aceleración", "Posición", "Fuerza"], correcta: 1 },
      { pregunta: "En una distribución normal, ¿qué % está dentro de μ ± 2σ?", opciones: ["68%", "95%", "99.7%", "50%"], correcta: 1 }
    ]
  },

  // ===== FÍSICA =====
  fisica: {
    basico: [
      { pregunta: "¿Cuál es la fórmula de velocidad en MRU?", opciones: ["v = at", "v = d/t", "v = ½at²", "v = gt"], correcta: 1 },
      { pregunta: "Unidad de fuerza en el SI:", opciones: ["Joule", "Watt", "Newton", "Pascal"], correcta: 2 },
      { pregunta: "Aceleración de gravedad aproximada:", opciones: ["9.8 m/s²", "3.14 m/s²", "10 km/s²", "8 m/s²"], correcta: 0 },
      { pregunta: "Fórmula de energía cinética:", opciones: ["mgh", "½mv²", "Fd", "mv"], correcta: 1 },
      { pregunta: "¿Qué tipo de onda es la luz?", opciones: ["Mecánica", "Electromagnética", "Sonora", "Nuclear"], correcta: 1 }
    ],
    intermedio: [
      { pregunta: "La 2da Ley de Newton es:", opciones: ["F = ma", "F = mv", "F = m/a", "F = a/m"], correcta: 0 },
      { pregunta: "Unidad de presión:", opciones: ["Newton", "Joule", "Pascal", "Watt"], correcta: 2 },
      { pregunta: "¿Qué principio explica los barcos flotando?", opciones: ["Pascal", "Arquímedes", "Newton", "Bernoulli"], correcta: 1 },
      { pregunta: "0°C en Kelvin:", opciones: ["0 K", "100 K", "273.15 K", "32 K"], correcta: 2 },
      { pregunta: "La Ley de Ohm es:", opciones: ["F = ma", "V = IR", "E = mc²", "P = W/t"], correcta: 1 }
    ],
    avanzado: [
      { pregunta: "¿Quién propuso E = mc²?", opciones: ["Newton", "Einstein", "Bohr", "Planck"], correcta: 1 },
      { pregunta: "En radiactividad, ¿qué emite partículas α?", opciones: ["Electrones", "Núcleos de He", "Fotones", "Neutrones"], correcta: 1 },
      { pregunta: "El principio de incertidumbre es de:", opciones: ["Einstein", "Newton", "Heisenberg", "Bohr"], correcta: 2 },
      { pregunta: "¿Qué partícula tiene carga negativa?", opciones: ["Protón", "Neutrón", "Electrón", "Fotón"], correcta: 2 },
      { pregunta: "La fusión nuclear ocurre en:", opciones: ["Reactores", "Sol", "Baterías", "Volcanes"], correcta: 1 }
    ]
  },

  // ===== QUÍMICA =====
  quimica: {
    basico: [
      { pregunta: "¿Qué estudia la Química?", opciones: ["Solo los seres vivos", "La composición, estructura y transformaciones de la materia", "Únicamente los átomos", "Los planetas y estrellas"], correcta: 1 },
      { pregunta: "¿Cuál es la unidad de masa en el SI?", opciones: ["Gramo (g)", "Libra (lb)", "Kilogramo (kg)", "Mol (mol)"], correcta: 2 },
      { pregunta: "El paso de sólido a líquido se llama:", opciones: ["Evaporación", "Fusión", "Sublimación", "Condensación"], correcta: 1 },
      { pregunta: "¿Cuál de los siguientes es una mezcla homogénea?", opciones: ["Granito", "Ensalada", "Agua salada", "Aceite y agua"], correcta: 2 },
      { pregunta: "¿Qué partícula subatómica tiene carga positiva?", opciones: ["Electrón", "Neutrón", "Protón", "Fotón"], correcta: 2 }
    ],
    intermedio: [
      { pregunta: "¿Cuál es el grupo de los gases nobles?", opciones: ["Grupo 1", "Grupo 2", "Grupo 17", "Grupo 18"], correcta: 3 },
      { pregunta: "¿Qué tipo de enlace se forma entre un metal y un no metal?", opciones: ["Covalente polar", "Covalente no polar", "Iónico", "Metálico"], correcta: 2 },
      { pregunta: "¿Cuál es la fórmula del óxido de calcio?", opciones: ["CaO", "Ca₂O", "CaO₂", "Ca(OH)₂"], correcta: 0 },
      { pregunta: "Un ácido según Arrhenius libera:", opciones: ["OH⁻ en agua", "H⁺ en agua", "Electrones", "Neutrones"], correcta: 1 },
      { pregunta: "¿Cuál es el pH de una sustancia neutra?", opciones: ["0", "7", "14", "1"], correcta: 1 }
    ],
    avanzado: [
      { pregunta: "Si un átomo tiene Z=11 y A=23, ¿cuántos neutrones tiene?", opciones: ["11", "12", "23", "34"], correcta: 1 },
      { pregunta: "La regla del octeto establece que los átomos buscan tener:", opciones: ["2 electrones en su última capa", "8 electrones en su última capa", "8 protones en el núcleo", "18 neutrones"], correcta: 1 },
      { pregunta: "¿Cuál es la configuración electrónica del sodio (Na, Z=11)?", opciones: ["1s² 2s² 2p⁶ 3s¹", "1s² 2s² 2p⁶ 3s²", "1s² 2s² 2p⁵ 3s²", "1s² 2s² 2p⁶ 3p¹"], correcta: 0 },
      { pregunta: "Balancea: __Fe + __O₂ → __Fe₂O₃. ¿Cuáles son los coeficientes?", opciones: ["1, 1, 1", "2, 3, 1", "4, 3, 2", "3, 4, 2"], correcta: 2 },
      { pregunta: "En una reacción redox, la oxidación implica:", opciones: ["Ganancia de electrones", "Pérdida de electrones", "Ganancia de protones", "Pérdida de neutrones"], correcta: 1 }
    ]
  },

  // ===== INGLÉS =====
  ingles: {
    basico: [
      { pregunta: "Completa: 'I ___ from Chiapas'", opciones: ["am", "is", "are", "be"], correcta: "am" },
      { pregunta: "¿Cómo se dice 'Buenos días'?", opciones: ["Good night", "Good morning", "Good afternoon", "Hello"], correcta: "Good morning" },
      { pregunta: "¿Cuál es el pronombre para 'Nosotros'?", opciones: ["They", "We", "You", "It"], correcta: "We" },
      { pregunta: "El plural de 'Box' es:", opciones: ["Boxs", "Boxes", "Boxies", "Box"], correcta: "Boxes" },
      { pregunta: "Completa: 'She ___ my teacher'", opciones: ["am", "is", "are", "be"], correcta: "is" }
    ],
    intermedio: [
      { pregunta: "El pasado de 'Go' es:", opciones: ["Goed", "Gone", "Went", "Going"], correcta: "Went" },
      { pregunta: "¿Qué significa 'They worked'?", opciones: ["Ellos trabajan", "Ellos trabajaron", "Ellos trabajarán", "Ellos trabajando"], correcta: "Ellos trabajaron" },
      { pregunta: "Completa: I ___ visit my grandmother tomorrow (plan).", opciones: ["will", "am going to", "going to", "is going to"], correcta: "am going to" },
      { pregunta: "Completa: You ___ study for the exam (consejo).", opciones: ["should", "should to", "are", "will"], correcta: "should" },
      { pregunta: "¿Qué significa 'I saw a jaguar'?", opciones: ["Vi un jaguar", "Veo un jaguar", "Veré un jaguar", "Estoy viendo un jaguar"], correcta: "Vi un jaguar" }
    ],
    avanzado: [
      { pregunta: "El superlativo de 'Good' es:", opciones: ["Gooder", "The best", "The most good", "Better"], correcta: "The best" },
      { pregunta: "Completa: I ___ finished my homework.", opciones: ["have", "has", "am", "is"], correcta: "have" },
      { pregunta: "El participio de 'Eat' es:", opciones: ["Ate", "Eated", "Eaten", "Eating"], correcta: "Eaten" },
      { pregunta: "¿Qué significa 'We have won the game'?", opciones: ["Ganamos el juego", "Hemos ganado el juego", "Ganaremos el juego", "Estamos ganando"], correcta: "Hemos ganado el juego" },
      { pregunta: "El comparativo de 'Expensive' es:", opciones: ["Expensiver", "More expensive", "The most expensive", "Expensivest"], correcta: "More expensive" }
    ]
  }
};