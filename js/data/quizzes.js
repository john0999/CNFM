/* ==========================================================
   DATA - Banco de preguntas para Quiz (12 por nivel)
========================================================== */

const QUIZZES = {
  ciencias: {
    basico: [
      { pregunta: "¿Cuál es el primer paso del método científico?", opciones: ["Hipótesis", "Observación", "Experimentación", "Conclusión"], correcta: "Observación" },
      { pregunta: "¿Qué propiedad se calcula como masa/volumen?", opciones: ["Peso", "Densidad", "Volumen", "Masa"], correcta: "Densidad" },
      { pregunta: "¿Qué instrumento mide temperatura?", opciones: ["Balanza", "Probeta", "Termómetro", "Vernier"], correcta: "Termómetro" },
      { pregunta: "¿Cuál es una mezcla homogénea?", opciones: ["Granito", "Ensalada", "Agua salada", "Aceite y agua"], correcta: "Agua salada" },
      { pregunta: "El paso de sólido a líquido se llama:", opciones: ["Evaporación", "Fusión", "Sublimación", "Condensación"], correcta: "Fusión" },
      { pregunta: "¿Cuál es la unidad de masa en el SI?", opciones: ["Gramo", "Libra", "Kilogramo", "Mol"], correcta: "Kilogramo" },
      { pregunta: "¿Qué es una sustancia pura?", opciones: ["Agua salada", "Aire", "Oro", "Granito"], correcta: "Oro" },
      { pregunta: "El paso de gas a líquido se llama:", opciones: ["Fusión", "Evaporación", "Condensación", "Sublimación"], correcta: "Condensación" },
      { pregunta: "¿Qué característica NO es del conocimiento científico?", opciones: ["Objetivo", "Sistemático", "Falible", "Dogmático"], correcta: "Dogmático" },
      { pregunta: "¿Cuál es un ejemplo de elemento químico?", opciones: ["Agua", "Sal", "Oxígeno", "Aire"], correcta: "Oxígeno" },
      { pregunta: "¿Qué método separa un sólido de un líquido?", opciones: ["Destilación", "Filtración", "Decantación", "Evaporación"], correcta: "Filtración" },
      { pregunta: "¿Cuál NO es una propiedad general de la materia?", opciones: ["Masa", "Volumen", "Densidad", "Inercia"], correcta: "Densidad" }
    ],
    intermedio: [
      { pregunta: "¿Cuál es la fórmula de la energía cinética?", opciones: ["Ec = mgh", "Ec = ½mv²", "Ec = Fd", "Ec = mv"], correcta: "Ec = ½mv²" },
      { pregunta: "¿En qué unidades se mide la energía?", opciones: ["Newton", "Watt", "Joule", "Pascal"], correcta: "Joule" },
      { pregunta: "¿Qué dice la Ley de Conservación de la Energía?", opciones: ["Se crea", "Se destruye", "Se transforma", "Desaparece"], correcta: "Se transforma" },
      { pregunta: "¿Cuál es el río más caudaloso de Chiapas?", opciones: ["Usumacinta", "Grijalva", "Suchiate", "Lacantún"], correcta: "Grijalva" },
      { pregunta: "¿Cuál es la carga del protón?", opciones: ["Negativa", "Positiva", "Neutra", "Variable"], correcta: "Positiva" },
      { pregunta: "¿Qué gas es más abundante en la atmósfera?", opciones: ["Oxígeno", "Nitrógeno", "CO₂", "Argón"], correcta: "Nitrógeno" },
      { pregunta: "¿Cuál es la capa más externa de la Tierra?", opciones: ["Manto", "Núcleo", "Corteza", "Atmósfera"], correcta: "Corteza" },
      { pregunta: "¿Qué escala de temperatura usa el SI?", opciones: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"], correcta: "Kelvin" },
      { pregunta: "La energía potencial gravitacional depende de:", opciones: ["Velocidad", "Altura", "Temperatura", "Volumen"], correcta: "Altura" },
      { pregunta: "¿Cuál es la fórmula del trabajo?", opciones: ["W = mgh", "W = F·d·cosθ", "W = ½mv²", "W = P/t"], correcta: "W = F·d·cosθ" },
      { pregunta: "¿Cuál es el estado de Chiapas con mayor biodiversidad?", opciones: ["1°", "2°", "3°", "5°"], correcta: "2°" },
      { pregunta: "¿Qué tipo de energía almacena un resorte comprimido?", opciones: ["Cinética", "Potencial elástica", "Térmica", "Química"], correcta: "Potencial elástica" }
    ],
    avanzado: [
      { pregunta: "¿Qué % de energía se transfiere entre niveles tróficos?", opciones: ["50%", "25%", "10%", "100%"], correcta: "10%" },
      { pregunta: "¿Cuántos moles hay en 36 g de agua (M=18)?", opciones: ["1", "2", "3", "4"], correcta: "2" },
      { pregunta: "¿Qué principio explica la flotación de barcos?", opciones: ["Pascal", "Arquímedes", "Newton", "Ohm"], correcta: "Arquímedes" },
      { pregunta: "¿Qué organelo realiza la fotosíntesis?", opciones: ["Mitocondria", "Núcleo", "Cloroplasto", "Ribosoma"], correcta: "Cloroplasto" },
      { pregunta: "¿Cuál es la unidad básica de la vida?", opciones: ["Átomo", "Molécula", "Célula", "Tejido"], correcta: "Célula" },
      { pregunta: "¿Qué dice la Ley de Lavoisier?", opciones: ["Masa se crea", "Masa se destruye", "Masa se conserva", "Masa cambia"], correcta: "Masa se conserva" },
      { pregunta: "¿Cuántos elementos tiene la tabla periódica?", opciones: ["92", "100", "118", "150"], correcta: "118" },
      { pregunta: "¿Cuál es el grupo de los gases nobles?", opciones: ["Grupo 1", "Grupo 2", "Grupo 17", "Grupo 18"], correcta: "Grupo 18" },
      { pregunta: "Si Z=11 y A=23, ¿cuántos neutrones hay?", opciones: ["11", "12", "23", "34"], correcta: "12" },
      { pregunta: "¿Qué tipo de reacción es: 2H₂O → 2H₂ + O₂?", opciones: ["Síntesis", "Descomposición", "Sustitución", "Doble sustitución"], correcta: "Descomposición" },
      { pregunta: "¿Qué dice la regla del octeto?", opciones: ["2 e⁻", "8 e⁻", "8 protones", "18 neutrones"], correcta: "8 e⁻" },
      { pregunta: "¿Qué partícula tiene carga negativa?", opciones: ["Protón", "Neutrón", "Electrón", "Fotón"], correcta: "Electrón" }
    ]
  },

  matematicas: {
    basico: [
      { pregunta: "¿Cuál es el resultado de 2 + 3 × 4?", opciones: ["20", "14", "24", "11"], correcta: "14" },
      { pregunta: "¿Qué propiedad es a(b + c) = ab + ac?", opciones: ["Conmutativa", "Asociativa", "Distributiva", "Identidad"], correcta: "Distributiva" },
      { pregunta: "Si y = 2x + 3, ¿cuánto vale y cuando x = 5?", opciones: ["10", "13", "15", "8"], correcta: "13" },
      { pregunta: "¿Qué tipo de número es π?", opciones: ["Natural", "Entero", "Racional", "Irracional"], correcta: "Irracional" },
      { pregunta: "En 2, 5, 8, 11..., ¿cuál es la diferencia común?", opciones: ["2", "3", "4", "5"], correcta: "3" },
      { pregunta: "¿Cuál es el resultado de (-3)²?", opciones: ["-9", "9", "-6", "6"], correcta: "9" },
      { pregunta: "¿Qué propiedad permite reordenar sumandos?", opciones: ["Asociativa", "Conmutativa", "Distributiva", "Identidad"], correcta: "Conmutativa" },
      { pregunta: "¿Cuál es la moda de: 2, 3, 3, 5, 7?", opciones: ["2", "3", "5", "7"], correcta: "3" },
      { pregunta: "¿Cuál es el valor de 5! (factorial)?", opciones: ["25", "60", "120", "720"], correcta: "120" },
      { pregunta: "Si un producto cuesta $255 con 15% descuento, ¿precio original?", opciones: ["$270", "$280", "$300", "$320"], correcta: "$300" },
      { pregunta: "¿Qué mide la media aritmética?", opciones: ["Dispersión", "Tendencia central", "Correlación", "Asimetría"], correcta: "Tendencia central" },
      { pregunta: "Si P(A) = 0.3, ¿cuánto vale P(A')?", opciones: ["0.3", "0.7", "1", "0"], correcta: "0.7" }
    ],
    intermedio: [
      { pregunta: "¿Cuál es la traducción de 'el doble de un número'?", opciones: ["x + 2", "2x", "x/2", "x²"], correcta: "2x" },
      { pregunta: "¿Cuál es la fórmula del Teorema de Pitágoras?", opciones: ["a + b = c", "c² = a² + b²", "c = a + b", "a² = c² + b²"], correcta: "c² = a² + b²" },
      { pregunta: "¿Cuál es el resultado de (x+3)(x-3)?", opciones: ["x²-9", "x²+9", "x²-6x+9", "x²+6x+9"], correcta: "x²-9" },
      { pregunta: "Resuelve: 3x - 5 = 10", opciones: ["3", "5", "15", "2"], correcta: "5" },
      { pregunta: "Simplifica: 3x + 5x - 2x", opciones: ["6x", "8x", "10x", "4x"], correcta: "6x" },
      { pregunta: "¿Qué método NO sirve para resolver sistemas 2×2?", opciones: ["Sustitución", "Eliminación", "Igualación", "Integración"], correcta: "Integración" },
      { pregunta: "¿Cuál es la forma punto-pendiente de la recta?", opciones: ["y = mx + b", "y - y₁ = m(x - x₁)", "Ax + By + C = 0", "x/a + y/b = 1"], correcta: "y - y₁ = m(x - x₁)" },
      { pregunta: "¿Cuál es la pendiente de y = 3x - 2?", opciones: ["3", "-2", "-3", "2"], correcta: "3" },
      { pregunta: "Si dos rectas son perpendiculares, sus pendientes:", opciones: ["Son iguales", "Se multiplican = -1", "Se suman = 0", "Son opuestas"], correcta: "Se multiplican = -1" },
      { pregunta: "¿Cuánto suman los ángulos internos de un triángulo?", opciones: ["90°", "180°", "270°", "360°"], correcta: "180°" },
      { pregunta: "¿Cuál es la fórmula del área del círculo?", opciones: ["πd", "2πr", "πr²", "πr³"], correcta: "πr²" },
      { pregunta: "Si un cuadrado tiene lado 5 cm, ¿cuál es su área?", opciones: ["10 cm²", "20 cm²", "25 cm²", "30 cm²"], correcta: "25 cm²" }
    ],
    avanzado: [
      { pregunta: "¿Cuál es la fórmula general cuadrática?", opciones: ["x = -b/2a", "x = (-b ± √(b²-4ac))/2a", "x = b²-4ac", "x = -b/a"], correcta: "x = (-b ± √(b²-4ac))/2a" },
      { pregunta: "¿Cuánto vale sen(90°)?", opciones: ["0", "0.5", "1", "No definido"], correcta: "1" },
      { pregunta: "¿Cuál es la derivada de x³?", opciones: ["x²", "3x²", "3x", "x³/3"], correcta: "3x²" },
      { pregunta: "La segunda derivada mide:", opciones: ["Velocidad", "Aceleración", "Posición", "Fuerza"], correcta: "Aceleración" },
      { pregunta: "En una distribución normal, ¿qué % está dentro de μ ± 2σ?", opciones: ["68%", "95%", "99.7%", "50%"], correcta: "95%" },
      { pregunta: "¿Cuál es la identidad pitagórica?", opciones: ["sen + cos = 1", "sen² + cos² = 1", "tan = sen·cos", "sen/cos = 1"], correcta: "sen² + cos² = 1" },
      { pregunta: "Pendiente de una recta perpendicular: si m₁ = 2, m₂ =", opciones: ["2", "-2", "-1/2", "1/2"], correcta: "-1/2" },
      { pregunta: "Ecuación de la circunferencia con centro en origen:", opciones: ["x + y = r", "x² + y² = r²", "x² - y² = r", "xy = r"], correcta: "x² + y² = r²" },
      { pregunta: "¿Qué es un límite?", opciones: ["Valor máximo", "Comportamiento de una función cuando x se acerca a un valor", "Derivada", "Integral"], correcta: "Comportamiento de una función cuando x se acerca a un valor" },
      { pregunta: "¿Cuál es la derivada de una constante?", opciones: ["La constante", "1", "0", "∞"], correcta: "0" },
      { pregunta: "¿Qué indica f'(x) = 0?", opciones: ["Máximo o mínimo", "Creciente", "Decreciente", "Constante"], correcta: "Máximo o mínimo" },
      { pregunta: "¿Cuál es la fórmula de la varianza poblacional?", opciones: ["Σ(x-μ)²/N", "Σx/N", "Σ(x-μ)/N", "Σx²/N"], correcta: "Σ(x-μ)²/N" }
    ]
  },

  quimica: {
    basico: [
      { pregunta: "¿Qué estudia la Química?", opciones: ["Solo los seres vivos", "La composición, estructura y transformaciones de la materia", "Únicamente los átomos", "Los planetas y estrellas"], correcta: "La composición, estructura y transformaciones de la materia" },
      { pregunta: "¿Cuál es la unidad de masa en el SI?", opciones: ["Gramo (g)", "Libra (lb)", "Kilogramo (kg)", "Mol (mol)"], correcta: "Kilogramo (kg)" },
      { pregunta: "El paso de sólido a líquido se llama:", opciones: ["Evaporación", "Fusión", "Sublimación", "Condensación"], correcta: "Fusión" },
      { pregunta: "¿Cuál de los siguientes es una mezcla homogénea?", opciones: ["Granito", "Ensalada", "Agua salada", "Aceite y agua"], correcta: "Agua salada" },
      { pregunta: "¿Qué partícula subatómica tiene carga positiva?", opciones: ["Electrón", "Neutrón", "Protón", "Fotón"], correcta: "Protón" },
      { pregunta: "¿Cuál es el primer paso del método científico?", opciones: ["Hipótesis", "Experimentación", "Observación", "Conclusión"], correcta: "Observación" },
      { pregunta: "El paso de gas a líquido se llama:", opciones: ["Fusión", "Evaporación", "Condensación", "Sublimación"], correcta: "Condensación" },
      { pregunta: "¿Cuál es una propiedad química?", opciones: ["Color", "Densidad", "Combustibilidad", "Punto de fusión"], correcta: "Combustibilidad" },
      { pregunta: "¿Qué instrumento usarías para medir volumen?", opciones: ["Balanza", "Probeta", "Termómetro", "Cronómetro"], correcta: "Probeta" },
      { pregunta: "¿Qué es un compuesto?", opciones: ["Fe", "O", "H₂O", "Au"], correcta: "H₂O" },
      { pregunta: "El aire es una mezcla:", opciones: ["Heterogénea", "Homogénea", "Pura", "Compuesta"], correcta: "Homogénea" },
      { pregunta: "¿Qué propiedad es específica?", opciones: ["Masa", "Volumen", "Densidad", "Inercia"], correcta: "Densidad" }
    ],
    intermedio: [
      { pregunta: "¿Cuál es el grupo de los gases nobles?", opciones: ["Grupo 1", "Grupo 2", "Grupo 17", "Grupo 18"], correcta: "Grupo 18" },
      { pregunta: "¿Qué tipo de enlace se forma entre un metal y un no metal?", opciones: ["Covalente polar", "Covalente no polar", "Iónico", "Metálico"], correcta: "Iónico" },
      { pregunta: "¿Cuál es la fórmula del óxido de calcio?", opciones: ["CaO", "Ca₂O", "CaO₂", "Ca(OH)₂"], correcta: "CaO" },
      { pregunta: "Un ácido según Arrhenius libera:", opciones: ["OH⁻ en agua", "H⁺ en agua", "Electrones", "Neutrones"], correcta: "H⁺ en agua" },
      { pregunta: "¿Cuál es el pH de una sustancia neutra?", opciones: ["0", "7", "14", "1"], correcta: "7" },
      { pregunta: "¿Cuántos electrones caben como máximo en el subnivel p?", opciones: ["2", "6", "10", "14"], correcta: "6" },
      { pregunta: "¿Qué tipo de enlace hay en la sal de mesa (NaCl)?", opciones: ["Covalente", "Iónico", "Metálico", "Dativo"], correcta: "Iónico" },
      { pregunta: "¿Cuál es el disolvente universal?", opciones: ["Alcohol", "Aceite", "Agua", "Gasolina"], correcta: "Agua" },
      { pregunta: "Las reacciones que liberan calor se llaman:", opciones: ["Endotérmicas", "Exotérmicas", "Neutras", "Redox"], correcta: "Exotérmicas" },
      { pregunta: "¿Qué indica el número atómico (Z)?", opciones: ["Neutrones", "Protones", "Masa", "Isótopos"], correcta: "Protones" },
      { pregunta: "La fórmula del agua oxigenada es:", opciones: ["H₂O", "H₂O₂", "HO", "O₂"], correcta: "H₂O₂" },
      { pregunta: "¿Qué tipo de reacción es la fotosíntesis?", opciones: ["Exotérmica", "Endotérmica", "Nuclear", "Redox"], correcta: "Endotérmica" }
    ],
    avanzado: [
      { pregunta: "Si un átomo tiene Z=11 y A=23, ¿cuántos neutrones tiene?", opciones: ["11", "12", "23", "34"], correcta: "12" },
      { pregunta: "La regla del octeto establece que los átomos buscan tener:", opciones: ["2 electrones en su última capa", "8 electrones en su última capa", "8 protones en el núcleo", "18 neutrones"], correcta: "8 electrones en su última capa" },
      { pregunta: "¿Cuál es la configuración electrónica del sodio (Na, Z=11)?", opciones: ["1s² 2s² 2p⁶ 3s¹", "1s² 2s² 2p⁶ 3s²", "1s² 2s² 2p⁵ 3s²", "1s² 2s² 2p⁶ 3p¹"], correcta: "1s² 2s² 2p⁶ 3s¹" },
      { pregunta: "Balancea: __Fe + __O₂ → __Fe₂O₃", opciones: ["1, 1, 1", "2, 3, 1", "4, 3, 2", "3, 4, 2"], correcta: "4, 3, 2" },
      { pregunta: "En una reacción redox, la oxidación implica:", opciones: ["Ganancia de electrones", "Pérdida de electrones", "Ganancia de protones", "Pérdida de neutrones"], correcta: "Pérdida de electrones" },
      { pregunta: "Si la masa molar del agua es 18 g/mol, ¿cuántos moles hay en 54 g?", opciones: ["1 mol", "2 moles", "3 moles", "4 moles"], correcta: "3 moles" },
      { pregunta: "¿Cuál es la masa molar del H₂O?", opciones: ["16 g/mol", "18 g/mol", "20 g/mol", "22 g/mol"], correcta: "18 g/mol" },
      { pregunta: "En la reacción Zn + Cu²⁺ → Zn²⁺ + Cu, el Zinc se:", opciones: ["Reduce", "Oxida", "Neutraliza", "Funde"], correcta: "Oxida" },
      { pregunta: "¿Cuál es la fórmula de la molaridad?", opciones: ["Moles/Litros", "Gramos/Litros", "Moles/kg", "Gramos/mol"], correcta: "Moles/Litros" },
      { pregunta: "¿Qué dice la ley de las proporciones definidas?", opciones: ["Masa se conserva", "Composición fija", "Gases se expanden", "Ácidos donan H+"], correcta: "Composición fija" },
      { pregunta: "¿Qué producto se obtiene al reaccionar un ácido con un hidróxido?", opciones: ["Solo agua", "Solo gas", "Sal + agua", "Óxido + hidrógeno"], correcta: "Sal + agua" },
      { pregunta: "La configuración del oxígeno (Z=8) es:", opciones: ["1s² 2s² 2p⁴", "1s² 2s² 2p⁶", "1s² 2s² 2p³", "1s² 2p⁶"], correcta: "1s² 2s² 2p⁴" }
    ]
  },

  ingles: {
    basico: [
      { pregunta: "Completa: 'I ___ from Chiapas'", opciones: ["am", "is", "are", "be"], correcta: "am" },
      { pregunta: "¿Cómo se dice 'Buenos días'?", opciones: ["Good night", "Good morning", "Good afternoon", "Hello"], correcta: "Good morning" },
      { pregunta: "¿Cuál es el pronombre para 'Nosotros'?", opciones: ["They", "We", "You", "It"], correcta: "We" },
      { pregunta: "El plural de 'Box' es:", opciones: ["Boxs", "Boxes", "Boxies", "Box"], correcta: "Boxes" },
      { pregunta: "Completa: 'She ___ my teacher'", opciones: ["am", "is", "are", "be"], correcta: "is" },
      { pregunta: "¿Qué significa 'What is your name?'", opciones: ["¿Cuántos años tienes?", "¿Dónde vives?", "¿Cómo te llamas?", "¿Cómo estás?"], correcta: "¿Cómo te llamas?" },
      { pregunta: "Completa: 'They ___ my friends'", opciones: ["am", "is", "are", "be"], correcta: "are" },
      { pregunta: "¿Cómo se dice 'Buenas tardes'?", opciones: ["Good morning", "Good evening", "Good afternoon", "Good night"], correcta: "Good afternoon" },
      { pregunta: "¿Qué significa 'They'?", opciones: ["Ellos/Ellas", "Nosotros", "Tú", "Él"], correcta: "Ellos/Ellas" },
      { pregunta: "Completa: 'He is ___ teacher'", opciones: ["a", "an", "the", "any"], correcta: "a" },
      { pregunta: "El plural de 'City' es:", opciones: ["Citys", "Cityes", "Cities", "City"], correcta: "Cities" },
      { pregunta: "¿Cómo se dice 'Mi hermana'?", opciones: ["His sister", "My sister", "Her sister", "Your sister"], correcta: "My sister" }
    ],
    intermedio: [
      { pregunta: "El pasado de 'Go' es:", opciones: ["Goed", "Gone", "Went", "Going"], correcta: "Went" },
      { pregunta: "¿Qué significa 'They worked'?", opciones: ["Ellos trabajan", "Ellos trabajaron", "Ellos trabajarán", "Ellos trabajando"], correcta: "Ellos trabajaron" },
      { pregunta: "Completa: I ___ visit my grandmother tomorrow (plan).", opciones: ["will", "am going to", "going to", "is going to"], correcta: "am going to" },
      { pregunta: "Completa: You ___ study for the exam (consejo).", opciones: ["should", "should to", "are", "will"], correcta: "should" },
      { pregunta: "¿Qué significa 'I saw a jaguar'?", opciones: ["Vi un jaguar", "Veo un jaguar", "Veré un jaguar", "Estoy viendo un jaguar"], correcta: "Vi un jaguar" },
      { pregunta: "El pasado de 'Eat' es:", opciones: ["Eated", "Ate", "Eaten", "Eating"], correcta: "Ate" },
      { pregunta: "¿Cómo se dice 'Ellos van a viajar'?", opciones: ["They will travel", "They are going to travel", "They travel", "They going to travel"], correcta: "They are going to travel" },
      { pregunta: "¿Qué significa 'You shouldn't smoke'?", opciones: ["No deberías fumar", "Deberías fumar", "No fumas", "Fumas"], correcta: "No deberías fumar" },
      { pregunta: "Completa: Juan loves ___ dog.", opciones: ["her", "his", "their", "our"], correcta: "his" },
      { pregunta: "¿Qué significa 'Those apples'?", opciones: ["Esas manzanas", "Estas manzanas", "Esta manzana", "Esa manzana"], correcta: "Esas manzanas" },
      { pregunta: "Completa: We ___ (play) soccer yesterday.", opciones: ["play", "plays", "played", "playing"], correcta: "played" },
      { pregunta: "El pasado de 'Have' es:", opciones: ["Haved", "Has", "Had", "Having"], correcta: "Had" }
    ],
    avanzado: [
      { pregunta: "El superlativo de 'Good' es:", opciones: ["Gooder", "The best", "The most good", "Better"], correcta: "The best" },
      { pregunta: "Completa: I ___ finished my homework.", opciones: ["have", "has", "am", "is"], correcta: "have" },
      { pregunta: "El participio de 'Eat' es:", opciones: ["Ate", "Eated", "Eaten", "Eating"], correcta: "Eaten" },
      { pregunta: "¿Qué significa 'We have won the game'?", opciones: ["Ganamos el juego", "Hemos ganado el juego", "Ganaremos el juego", "Estamos ganando"], correcta: "Hemos ganado el juego" },
      { pregunta: "El comparativo de 'Expensive' es:", opciones: ["Expensiver", "More expensive", "The most expensive", "Expensivest"], correcta: "More expensive" },
      { pregunta: "Completa: A car is ___ than a bicycle.", opciones: ["fast", "faster", "the fastest", "more fast"], correcta: "faster" },
      { pregunta: "Completa: She ___ traveled to Mexico City.", opciones: ["have", "has", "is", "are"], correcta: "has" },
      { pregunta: "El participio de 'Write' es:", opciones: ["Wrote", "Written", "Writed", "Writing"], correcta: "Written" },
      { pregunta: "¿Qué significa 'I am the tallest'?", opciones: ["Soy más alto", "Soy el más alto", "Eres alto", "Soy alto"], correcta: "Soy el más alto" },
      { pregunta: "Completa: Don't worry, I ___ help you.", opciones: ["will", "am", "going", "going to"], correcta: "will" },
      { pregunta: "¿Qué significa 'She is going to sleep'?", opciones: ["Ella durmió", "Ella va a dormir", "Ella duerme", "Ella dormirá mañana"], correcta: "Ella va a dormir" },
      { pregunta: "El comparativo de 'Big' es:", opciones: ["Biger", "Bigger", "More big", "The biggest"], correcta: "Bigger" }
    ]
  },
  lengua: {
    basico: [
      { pregunta: "¿Para qué nos sirve principalmente la escritura?", opciones: ["Solo para la escuela", "Para desarrollar el pensamiento y comunicar", "Para llenar hojas", "Para copiar textos"], correcta: "Para desarrollar el pensamiento y comunicar" },
      { pregunta: "Leer un cuento en voz alta a tus hermanos pequeños es un ejemplo de:", opciones: ["Lectura individual", "Lectura compartida", "Escritura creativa", "Análisis de texto"], correcta: "Lectura compartida" },
      { pregunta: "Si un texto habla de la contaminación, pero a la mitad empieza a hablar de futbol, pierde:", opciones: ["Claridad", "Coherencia", "Concordancia", "Ortografía"], correcta: "Coherencia" },
      { pregunta: "¿Qué propiedad se falla en: 'Las niña juega'?", opciones: ["Coherencia", "Concordancia", "Claridad", "Ninguna"], correcta: "Concordancia" },
      { pregunta: "El párrafo: 'La selva es verde y húmeda, llena de árboles altos' es:", opciones: ["Narrativo", "Descriptivo", "Argumentativo", "Informativo"], correcta: "Descriptivo" },
      { pregunta: "El párrafo: 'Chiapas tiene el mejor café del mundo porque su clima es ideal' es:", opciones: ["Narrativo", "Descriptivo", "Argumentativo", "Expositivo"], correcta: "Argumentativo" },
      { pregunta: "La idea principal es:", opciones: ["Un detalle sin importancia", "El mensaje central del texto", "El título", "La primera palabra"], correcta: "El mensaje central del texto" },
      { pregunta: "¿Qué son los elementos paratextuales?", opciones: ["Las letras", "Títulos, subtítulos e imágenes", "Los autores", "Los libros"], correcta: "Títulos, subtítulos e imágenes" },
      { pregunta: "Los elementos paralingüísticos incluyen:", opciones: ["Las reglas gramaticales", "El tono y el lenguaje corporal", "Solo las diapositivas", "El texto escrito"], correcta: "El tono y el lenguaje corporal" },
      { pregunta: "Para una buena exposición oral es fundamental:", opciones: ["Leer palabra por palabra", "Preparar el tema y los recursos", "Improvisar todo", "No mirar al público"], correcta: "Preparar el tema y los recursos" },
      { pregunta: "Usar palabras rebuscadas que nadie entiende afecta la:", opciones: ["Claridad", "Concordancia", "Coherencia", "Puntuación"], correcta: "Claridad" },
      { pregunta: "Un párrafo que cuenta un viaje a Palenque es:", opciones: ["Narrativo", "Descriptivo", "Argumentativo", "Poético"], correcta: "Narrativo" }
    ],
    intermedio: [
      { pregunta: "¿Qué es una narrativa popular?", opciones: ["Un texto científico", "Historias transmitidas por el pueblo", "Un ensayo", "Un noticiero"], correcta: "Historias transmitidas por el pueblo" },
      { pregunta: "Las leyendas, mitos y cómics son:", opciones: ["Textos aburridos", "Formas de narrativa popular", "Textos escolares", "Solo para niños"], correcta: "Formas de narrativa popular" },
      { pregunta: "Un pódcast se basa principalmente en:", opciones: ["Imágenes", "Audio", "Texto escrito", "Videojuegos"], correcta: "Audio" },
      { pregunta: "El guion de un pódcast es:", opciones: ["El texto que se leerá", "La música", "El micrófono", "El oyente"], correcta: "El texto que se leerá" },
      { pregunta: "El protagonista es el personaje:", opciones: ["Que estorba", "Principal de la historia", "Que muere primero", "Que no habla"], correcta: "Principal de la historia" },
      { pregunta: "El conflicto en una narrativa es:", opciones: ["El final feliz", "El problema o reto a superar", "El lugar", "El autor"], correcta: "El problema o reto a superar" },
      { pregunta: "El antagonista representa:", opciones: ["La ayuda", "La oposición o el obstáculo", "El amor", "La naturaleza"], correcta: "La oposición o el obstáculo" },
      { pregunta: "¿Qué es una creepypasta?", opciones: ["Una pasta de comer", "Una historia de terror corta de internet", "Un libro de texto", "Un tipo de poema"], correcta: "Una historia de terror corta de internet" },
      { pregunta: "El escenario de una narrativa es:", opciones: ["Quién cuenta la historia", "Dónde y cuándo ocurre", "El final", "El título"], correcta: "Dónde y cuándo ocurre" },
      { pregunta: "Los elementos extralingüísticos en el audio son:", opciones: ["Las palabras", "Los efectos de sonido y música", "Los actores", "El estudio"], correcta: "Los efectos de sonido y música" },
      { pregunta: "Un personaje que ayuda al protagonista es:", opciones: ["Antagonista", "Secundario", "Narrador", "Lector"], correcta: "Secundario" },
      { pregunta: "Para grabar un pódcast puedes usar:", opciones: ["Un celular", "Una calculadora", "Una regla", "Un libro"], correcta: "Un celular" }
    ],
    avanzado: [
      { pregunta: "El movimiento literario que exalta los sentimientos es:", opciones: ["Realismo", "Romanticismo", "Vanguardismo", "Clasicismo"], correcta: "Romanticismo" },
      { pregunta: "El Realismo Mágico es característico de:", opciones: ["Europa", "Latinoamérica", "Asia", "África"], correcta: "Latinoamérica" },
      { pregunta: "El género que expresa sentimientos es:", opciones: ["Narrativo", "Lírico", "Dramático", "Ensayo"], correcta: "Lírico" },
      { pregunta: "Una obra de teatro pertenece al género:", opciones: ["Narrativo", "Lírico", "Dramático", "Ensayo"], correcta: "Dramático" },
      { pregunta: "'El sol es una naranja en el cielo' es un ejemplo de:", opciones: ["Hipérbole", "Metáfora", "Personificación", "Ironía"], correcta: "Metáfora" },
      { pregunta: "'Lloré ríos de lágrimas' es un ejemplo de:", opciones: ["Metáfora", "Hipérbole", "Ironía", "Personificación"], correcta: "Hipérbole" },
      { pregunta: "'La luna sonrió al verme' es una:", opciones: ["Metáfora", "Hipérbole", "Personificación", "Ironía"], correcta: "Personificación" },
      { pregunta: "El propósito de una reseña es:", opciones: ["Copiar el libro", "Informar y dar una opinión crítica", "Inventar una historia", "Solo poner estrellas"], correcta: "Informar y dar una opinión crítica" },
      { pregunta: "¿Qué NO debe faltar en una reseña?", opciones: ["El final de la historia", "La opinión fundamentada", "El precio", "Fotos"], correcta: "La opinión fundamentada" },
      { pregunta: "El resumen de una reseña debe evitar:", opciones: ["El título", "Revelar el final (Spoilers)", "El autor", "El género"], correcta: "Revelar el final (Spoilers)" },
      { pregunta: "La figura que usa 'como' para comparar es:", opciones: ["Metáfora", "Símil", "Hipérbole", "Ironía"], correcta: "Símil" },
      { pregunta: "Decir '¡Qué bonito día!' cuando hay tormenta es:", opciones: ["Metáfora", "Hipérbole", "Ironía", "Personificación"], correcta: "Ironía" }
    ]
  }
};