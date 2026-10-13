/* ==========================================================
   DATA - Banco de preguntas para Quiz
   Ampliado: 12+ preguntas por semestre
========================================================== */

const QUIZZES = {
  // ===== CIENCIAS NATURALES =====
  ciencias: {
    1: [
      { pregunta: "¿Cuál es el primer paso del método científico?", opciones: ["Hipótesis", "Observación", "Experimentación", "Conclusión"], correcta: 1 },
      { pregunta: "¿Qué propiedad se calcula como masa/volumen?", opciones: ["Peso", "Densidad", "Volumen", "Masa"], correcta: 1 },
      { pregunta: "¿Qué instrumento mide temperatura?", opciones: ["Balanza", "Probeta", "Termómetro", "Vernier"], correcta: 2 },
      { pregunta: "¿Cuál es una mezcla homogénea?", opciones: ["Granito", "Ensalada", "Agua salada", "Aceite y agua"], correcta: 2 },
      { pregunta: "El paso de sólido a líquido se llama:", opciones: ["Evaporación", "Fusión", "Sublimación", "Condensación"], correcta: 1 },
      { pregunta: "¿Cuál NO es una propiedad general de la materia?", opciones: ["Masa", "Volumen", "Densidad", "Inercia"], correcta: 2 },
      { pregunta: "¿Qué método separa un sólido de un líquido?", opciones: ["Destilación", "Filtración", "Decantación", "Evaporación"], correcta: 1 },
      { pregunta: "¿Qué característica NO es del conocimiento científico?", opciones: ["Objetivo", "Sistemático", "Falible", "Dogmático"], correcta: 3 },
      { pregunta: "El paso de gas a líquido se llama:", opciones: ["Fusión", "Evaporación", "Condensación", "Sublimación"], correcta: 2 },
      { pregunta: "¿Cuál es la unidad de masa en el SI?", opciones: ["Gramo", "Libra", "Kilogramo", "Mol"], correcta: 2 },
      { pregunta: "¿Qué es una sustancia pura?", opciones: ["Agua salada", "Aire", "Oro", "Granito"], correcta: 2 },
      { pregunta: "¿Cuál es un ejemplo de elemento químico?", opciones: ["Agua", "Sal", "Oxígeno", "Aire"], correcta: 2 }
    ],
    2: [
      { pregunta: "¿Cuál es la fórmula de la energía cinética?", opciones: ["Ec = mgh", "Ec = ½mv²", "Ec = Fd", "Ec = mv"], correcta: 1 },
      { pregunta: "¿En qué unidades se mide la energía?", opciones: ["Newton", "Watt", "Joule", "Pascal"], correcta: 2 },
      { pregunta: "¿Qué energía tiene un objeto en movimiento?", opciones: ["Potencial", "Cinética", "Térmica", "Química"], correcta: 1 },
      { pregunta: "¿Cuál es una fuente renovable?", opciones: ["Petróleo", "Carbón", "Solar", "Gas"], correcta: 2 },
      { pregunta: "¿Qué dice la Ley de Conservación de la Energía?", opciones: ["Se crea", "Se destruye", "Se transforma", "Desaparece"], correcta: 2 },
      { pregunta: "¿Cuál es la fórmula del trabajo?", opciones: ["W = mgh", "W = F·d·cosθ", "W = ½mv²", "W = P/t"], correcta: 1 },
      { pregunta: "¿Qué escala de temperatura usa el SI?", opciones: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"], correcta: 2 },
      { pregunta: "¿Cuál NO es una fuente no renovable?", opciones: ["Carbón", "Petróleo", "Eólica", "Gas natural"], correcta: 2 },
      { pregunta: "La energía potencial gravitacional depende de:", opciones: ["Velocidad", "Altura", "Temperatura", "Volumen"], correcta: 1 },
      { pregunta: "¿Qué potencia tiene un motor que realiza 1000 J en 10 s?", opciones: ["10 W", "100 W", "1000 W", "10000 W"], correcta: 1 },
      { pregunta: "¿Cuál es la 1ª Ley de la Termodinámica?", opciones: ["ΔU = Q - W", "F = ma", "E = mc²", "V = IR"], correcta: 0 },
      { pregunta: "¿Qué tipo de energía almacena un resorte comprimido?", opciones: ["Cinética", "Potencial elástica", "Térmica", "Química"], correcta: 1 }
    ],
    3: [
      { pregunta: "¿Cuál es la capa más externa de la Tierra?", opciones: ["Manto", "Núcleo", "Corteza", "Atmósfera"], correcta: 2 },
      { pregunta: "¿Qué gas es más abundante en la atmósfera?", opciones: ["Oxígeno", "Nitrógeno", "CO₂", "Argón"], correcta: 1 },
      { pregunta: "¿Cuál es el río más caudaloso de Chiapas?", opciones: ["Usumacinta", "Grijalva", "Suchiate", "Lacantún"], correcta: 1 },
      { pregunta: "¿Qué % de energía se transfiere entre niveles tróficos?", opciones: ["50%", "25%", "10%", "100%"], correcta: 2 },
      { pregunta: "¿Cuál es un área natural protegida de Chiapas?", opciones: ["Montes Azules", "Chichen Itzá", "Teotihuacán", "Barrancas"], correcta: 0 },
      { pregunta: "¿Cuál es la capa donde ocurre el clima?", opciones: ["Estratosfera", "Troposfera", "Mesosfera", "Termosfera"], correcta: 1 },
      { pregunta: "¿Qué contiene la capa de ozono?", opciones: ["Troposfera", "Estratosfera", "Mesosfera", "Exosfera"], correcta: 1 },
      { pregunta: "¿Cuál NO es un subsistema terrestre?", opciones: ["Geósfera", "Atmósfera", "Hidrósfera", "Magnetósfera"], correcta: 3 },
      { pregunta: "¿Qué proceso devuelve agua a la atmósfera?", opciones: ["Condensación", "Precipitación", "Evaporación", "Infiltración"], correcta: 2 },
      { pregunta: "¿Cuál es el estado de Chiapas con mayor biodiversidad?", opciones: ["1°", "2°", "3°", "5°"], correcta: 1 },
      { pregunta: "¿Qué ciclo involucra la fotosíntesis?", opciones: ["Agua", "Carbono", "Nitrógeno", "Fósforo"], correcta: 1 },
      { pregunta: "¿Cuál es una característica del clima de Chiapas?", opciones: ["Desértico", "Tropical húmedo", "Polar", "Templado seco"], correcta: 1 }
    ],
    4: [
      { pregunta: "¿Cuál es la carga del protón?", opciones: ["Negativa", "Positiva", "Neutra", "Variable"], correcta: 1 },
      { pregunta: "¿Qué enlace se forma entre metal y no metal?", opciones: ["Covalente", "Iónico", "Metálico", "Puente H"], correcta: 1 },
      { pregunta: "¿Cuántos moles hay en 36 g de agua (M=18)?", opciones: ["1", "2", "3", "4"], correcta: 1 },
      { pregunta: "¿Qué dice la Ley de Lavoisier?", opciones: ["Masa se crea", "Masa se destruye", "Masa se conserva", "Masa cambia"], correcta: 2 },
      { pregunta: "¿Qué modelo propuso Rutherford?", opciones: ["Esfera", "Budín", "Núcleo", "Órbitas"], correcta: 2 },
      { pregunta: "¿Cuántos elementos tiene la tabla periódica?", opciones: ["92", "100", "118", "150"], correcta: 2 },
      { pregunta: "¿Cuál es el grupo de los gases nobles?", opciones: ["Grupo 1", "Grupo 2", "Grupo 17", "Grupo 18"], correcta: 3 },
      { pregunta: "Si Z=11 y A=23, ¿cuántos neutrones hay?", opciones: ["11", "12", "23", "34"], correcta: 1 },
      { pregunta: "¿Qué tipo de reacción es: 2H₂O → 2H₂ + O₂?", opciones: ["Síntesis", "Descomposición", "Sustitución", "Doble sustitución"], correcta: 1 },
      { pregunta: "¿Qué dice la regla del octeto?", opciones: ["2 e⁻", "8 e⁻", "8 protones", "18 neutrones"], correcta: 1 },
      { pregunta: "¿Cuál es la masa molar del H₂O?", opciones: ["16 g/mol", "18 g/mol", "20 g/mol", "22 g/mol"], correcta: 1 },
      { pregunta: "¿Qué partícula tiene carga negativa?", opciones: ["Protón", "Neutrón", "Electrón", "Fotón"], correcta: 2 }
    ],
    5: [
      { pregunta: "¿Cuál es la Segunda Ley de Newton?", opciones: ["F = ma", "E = mc²", "V = IR", "W = Fd"], correcta: 0 },
      { pregunta: "¿Cuál es la fórmula de la Ley de Ohm?", opciones: ["F = ma", "V = IR", "E = mc²", "P = W/t"], correcta: 1 },
      { pregunta: "¿Cuál es la aceleración de la gravedad?", opciones: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "9.8 km/s²"], correcta: 0 },
      { pregunta: "¿Qué tipo de onda es el sonido?", opciones: ["Electromagnética", "Mecánica", "Luminosa", "Nuclear"], correcta: 1 },
      { pregunta: "¿Qué principio explica la flotación?", opciones: ["Pascal", "Arquímedes", "Newton", "Ohm"], correcta: 1 },
      { pregunta: "¿Cuál es la fórmula de la velocidad en MRU?", opciones: ["v = at", "v = d/t", "v = ½at²", "v = gt"], correcta: 1 },
      { pregunta: "¿Qué ley dice que a toda acción hay reacción?", opciones: ["1ª Newton", "2ª Newton", "3ª Newton", "Ohm"], correcta: 2 },
      { pregunta: "¿Qué estudia la cinemática?", opciones: ["Causas del movimiento", "El movimiento sin causas", "Fuerzas", "Energía"], correcta: 1 },
      { pregunta: "¿Cuál es la unidad de fuerza?", opciones: ["Joule", "Watt", "Newton", "Pascal"], correcta: 2 },
      { pregunta: "¿Qué es una onda electromagnética?", opciones: ["Necesita medio", "No necesita medio", "Es sonido", "Es mecánica"], correcta: 1 },
      { pregunta: "¿Qué principio usa las presas hidroeléctricas?", opciones: ["Pascal", "Arquímedes", "Conservación de energía", "Ohm"], correcta: 2 },
      { pregunta: "¿Qué tipo de energía tiene un cuerpo en reposo a cierta altura?", opciones: ["Cinética", "Potencial", "Térmica", "Nuclear"], correcta: 1 }
    ],
    6: [
      { pregunta: "¿Cuál es la unidad básica de la vida?", opciones: ["Átomo", "Molécula", "Célula", "Tejido"], correcta: 2 },
      { pregunta: "¿Quién propuso la evolución por selección natural?", opciones: ["Mendel", "Darwin", "Watson", "Pasteur"], correcta: 1 },
      { pregunta: "¿Qué organelo hace fotosíntesis?", opciones: ["Mitocondria", "Núcleo", "Cloroplasto", "Ribosoma"], correcta: 2 },
      { pregunta: "¿Cuántos niveles de biodiversidad hay?", opciones: ["1", "2", "3", "4"], correcta: 2 },
      { pregunta: "¿Cuál es un ecosistema de Chiapas?", opciones: ["Desierto", "Selva Lacandona", "Tundra", "Sabana"], correcta: 1 },
      { pregunta: "¿Qué tipo de célula NO tiene núcleo?", opciones: ["Eucariota", "Procariota", "Animal", "Vegetal"], correcta: 1 },
      { pregunta: "¿Qué molécula contiene la información genética?", opciones: ["ARN", "ADN", "Proteína", "Lípido"], correcta: 1 },
      { pregunta: "¿Qué organelo produce energía en la célula?", opciones: ["Núcleo", "Ribosoma", "Mitocondria", "Cloroplasto"], correcta: 2 },
      { pregunta: "¿Cuál es la 1ª Ley de Mendel?", opciones: ["Uniformidad", "Segregación", "Distribución", "Herencia"], correcta: 0 },
      { pregunta: "¿Qué enfermedad transmite el mosquito Aedes?", opciones: ["Gripe", "Dengue", "Tuberculosis", "Sarampión"], correcta: 1 },
      { pregunta: "¿Qué porcentaje de especies de México alberga la Selva Lacandona?", opciones: ["5%", "10%", "20%", "50%"], correcta: 2 },
      { pregunta: "¿Qué evidencia apoya la evolución?", opciones: ["Fósiles", "Anatomía comparada", "Embriología", "Todas las anteriores"], correcta: 3 }
    ]
  },

  // ===== PENSAMIENTO MATEMÁTICO =====
  matematicas: {
    1: [
      { pregunta: "¿Cuál es el resultado de 2 + 3 × 4?", opciones: ["20", "14", "24", "11"], correcta: 1 },
      { pregunta: "¿Qué propiedad es a(b + c) = ab + ac?", opciones: ["Conmutativa", "Asociativa", "Distributiva", "Identidad"], correcta: 2 },
      { pregunta: "Si y = 2x + 3, ¿cuánto vale y cuando x = 5?", opciones: ["10", "13", "15", "8"], correcta: 1 },
      { pregunta: "¿Qué tipo de número es π?", opciones: ["Natural", "Entero", "Racional", "Irracional"], correcta: 3 },
      { pregunta: "¿Cuál es el valor de 5! (factorial)?", opciones: ["25", "60", "120", "720"], correcta: 2 },
      { pregunta: "En 2, 5, 8, 11..., ¿cuál es la diferencia común?", opciones: ["2", "3", "4", "5"], correcta: 1 },
      { pregunta: "¿Qué mide la media aritmética?", opciones: ["Dispersión", "Tendencia central", "Correlación", "Asimetría"], correcta: 1 },
      { pregunta: "Si P(A) = 0.3, ¿cuánto vale P(A')?", opciones: ["0.3", "0.7", "1", "0"], correcta: 1 },
      { pregunta: "¿Cuál es el resultado de (-3)²?", opciones: ["-9", "9", "-6", "6"], correcta: 1 },
      { pregunta: "¿Qué propiedad permite reordenar sumandos?", opciones: ["Asociativa", "Conmutativa", "Distributiva", "Identidad"], correcta: 1 },
      { pregunta: "Si un producto cuesta $255 con 15% descuento, ¿precio original?", opciones: ["$270", "$280", "$300", "$320"], correcta: 2 },
      { pregunta: "¿Cuál es la moda de: 2, 3, 3, 5, 7?", opciones: ["2", "3", "5", "7"], correcta: 1 }
    ],
    2: [
      { pregunta: "¿Cuál es la traducción de 'el doble de un número'?", opciones: ["x + 2", "2x", "x/2", "x²"], correcta: 1 },
      { pregunta: "¿Cuál es la fórmula general cuadrática?", opciones: ["x = -b/2a", "x = (-b ± √(b²-4ac))/2a", "x = b²-4ac", "x = -b/a"], correcta: 1 },
      { pregunta: "Si Δ = 0, ¿cuántas soluciones reales hay?", opciones: ["0", "1", "2", "Infinitas"], correcta: 1 },
      { pregunta: "¿Cuál es la fórmula del Teorema de Pitágoras?", opciones: ["a + b = c", "c² = a² + b²", "c = a + b", "a² = c² + b²"], correcta: 1 },
      { pregunta: "¿Cuál es el resultado de (x+3)(x-3)?", opciones: ["x²-9", "x²+9", "x²-6x+9", "x²+6x+9"], correcta: 0 },
      { pregunta: "Resuelve: 3x - 5 = 10", opciones: ["3", "5", "15", "2"], correcta: 1 },
      { pregunta: "¿Qué método NO sirve para resolver sistemas 2×2?", opciones: ["Sustitución", "Eliminación", "Igualación", "Integración"], correcta: 3 },
      { pregunta: "¿Cuál es la forma punto-pendiente de la recta?", opciones: ["y = mx + b", "y - y₁ = m(x - x₁)", "Ax + By + C = 0", "x/a + y/b = 1"], correcta: 1 },
      { pregunta: "¿Qué son términos semejantes?", opciones: ["Misma variable y exponente", "Mismo coeficiente", "Mismo signo", "Mismo valor"], correcta: 0 },
      { pregunta: "Simplifica: 3x + 5x - 2x", opciones: ["6x", "8x", "10x", "4x"], correcta: 0 },
      { pregunta: "¿Cuál es la pendiente de y = 3x - 2?", opciones: ["3", "-2", "-3", "2"], correcta: 0 },
      { pregunta: "Si dos rectas son perpendiculares, sus pendientes:", opciones: ["Son iguales", "Se multiplican = -1", "Se suman = 0", "Son opuestas"], correcta: 1 }
    ],
    3: [
      { pregunta: "¿Cuál es la fórmula general cuadrática?", opciones: ["x = -b/2a", "x = (-b ± √(b²-4ac))/2a", "x = b²-4ac", "x = -b/a"], correcta: 1 },
      { pregunta: "Si Δ = 0, ¿cuántas soluciones reales hay?", opciones: ["0", "1", "2", "Infinitas"], correcta: 1 },
      { pregunta: "¿Cuál es la fórmula del Teorema de Pitágoras?", opciones: ["a + b = c", "c² = a² + b²", "c = a + b", "a² = c² + b²"], correcta: 1 },
      { pregunta: "¿Cuánto suman los ángulos internos de un triángulo?", opciones: ["90°", "180°", "270°", "360°"], correcta: 1 },
      { pregunta: "¿Cuál es el criterio de congruencia LAL?", opciones: ["Lado-Ángulo-Lado", "Lado-Lado-Lado", "Ángulo-Lado-Ángulo", "Lado-Ángulo-Ángulo"], correcta: 0 },
      { pregunta: "¿Cuál es la fórmula del área del círculo?", opciones: ["πd", "2πr", "πr²", "πr³"], correcta: 2 },
      { pregunta: "¿Cuánto suman los ángulos internos de un pentágono?", opciones: ["360°", "540°", "720°", "900°"], correcta: 1 },
      { pregunta: "¿Qué es la apotema de un polígono regular?", opciones: ["Lado", "Radio", "Altura de un triángulo", "Perímetro"], correcta: 2 },
      { pregunta: "Si un cuadrado tiene lado 5 cm, ¿cuál es su área?", opciones: ["10 cm²", "20 cm²", "25 cm²", "30 cm²"], correcta: 2 },
      { pregunta: "¿Qué es una función cuadrática?", opciones: ["f(x) = mx + b", "f(x) = ax² + bx + c", "f(x) = k/x", "f(x) = aˣ"], correcta: 1 },
      { pregunta: "El vértice de una parábola se calcula con:", opciones: ["x = -b/2a", "x = -b/a", "x = b/2a", "x = a/b"], correcta: 0 },
      { pregunta: "¿Qué es la tangente a una circunferencia?", opciones: ["Línea que corta en 2 puntos", "Línea que toca en 1 punto", "Línea que pasa por el centro", "Radio"], correcta: 1 }
    ],
    4: [
      { pregunta: "¿Cuánto vale sen(90°)?", opciones: ["0", "0.5", "1", "No definido"], correcta: 2 },
      { pregunta: "¿Cuál es la identidad pitagórica?", opciones: ["sen + cos = 1", "sen² + cos² = 1", "tan = sen·cos", "sen/cos = 1"], correcta: 1 },
      { pregunta: "Pendiente de una recta perpendicular: si m₁ = 2, m₂ =", opciones: ["2", "-2", "-1/2", "1/2"], correcta: 2 },
      { pregunta: "Ecuación de la circunferencia con centro en origen:", opciones: ["x + y = r", "x² + y² = r²", "x² - y² = r", "xy = r"], correcta: 1 },
      { pregunta: "¿Qué ley relaciona lados y ángulos de triángulos oblicuos?", opciones: ["Pitágoras", "Ley de senos", "Ley de Ohm", "Ley de Newton"], correcta: 1 },
      { pregunta: "¿Cuál es la forma general de la recta?", opciones: ["y = mx + b", "Ax + By + C = 0", "y - y₁ = m(x - x₁)", "Todas"], correcta: 1 },
      { pregunta: "¿Qué es la parábola?", opciones: ["Lugar geométrico de puntos equidistantes de un foco y una directriz", "Circunferencia", "Elipse", "Hipérbola"], correcta: 0 },
      { pregunta: "¿Cuál es la fórmula de la distancia entre dos puntos?", opciones: ["d = x₂-x₁", "d = √[(x₂-x₁)² + (y₂-y₁)²]", "d = y₂-y₁", "d = |x₂-x₁|"], correcta: 1 },
      { pregunta: "¿Cuánto vale cos(60°)?", opciones: ["0.5", "1", "0", "√3/2"], correcta: 0 },
      { pregunta: "¿Qué es una elipse?", opciones: ["Conjunto de puntos cuya suma de distancias a dos focos es constante", "Circunferencia", "Parábola", "Hipérbola"], correcta: 0 },
      { pregunta: "Si sen θ = 0.6, ¿cuál es cos θ (θ agudo)?", opciones: ["0.4", "0.8", "1.0", "0.6"], correcta: 1 },
      { pregunta: "¿Qué ley se usa para triángulos con dos lados y ángulo incluido?", opciones: ["Pitágoras", "Ley de senos", "Ley de cosenos", "Ley de tangentes"], correcta: 2 }
    ],
    5: [
      { pregunta: "¿Qué mide la derivada?", opciones: ["Área", "Razón de cambio instantánea", "Volumen", "Promedio"], correcta: 1 },
      { pregunta: "¿Cuál es la derivada de x³?", opciones: ["x²", "3x²", "3x", "x³/3"], correcta: 1 },
      { pregunta: "¿Cuál es la derivada de una constante?", opciones: ["La constante", "1", "0", "∞"], correcta: 2 },
      { pregunta: "¿Qué es un límite?", opciones: ["Valor máximo", "Comportamiento de una función cuando x se acerca a un valor", "Derivada", "Integral"], correcta: 1 },
      { pregunta: "¿Cuál es la derivada de eˣ?", opciones: ["x·eˣ", "eˣ", "eˣ/x", "1/eˣ"], correcta: 1 },
      { pregunta: "¿Qué indica f'(x) = 0?", opciones: ["Máximo o mínimo", "Creciente", "Decreciente", "Constante"], correcta: 0 },
      { pregunta: "¿Cuál es la derivada de ln(x)?", opciones: ["x", "1/x", "ln(x)", "eˣ"], correcta: 1 },
      { pregunta: "La segunda derivada mide:", opciones: ["Velocidad", "Aceleración", "Posición", "Fuerza"], correcta: 1 },
      { pregunta: "¿Qué regla se usa para derivar un producto?", opciones: ["Regla de la suma", "Regla del producto", "Regla de la cadena", "Regla del cociente"], correcta: 1 },
      { pregunta: "¿Cuál es la derivada de sen(x)?", opciones: ["cos(x)", "-cos(x)", "sen(x)", "-sen(x)"], correcta: 0 },
      { pregunta: "Si f(x) = 5x², ¿cuál es f'(x)?", opciones: ["5x", "10x", "10x²", "5x²"], correcta: 1 },
      { pregunta: "¿Qué es la optimización?", opciones: ["Maximizar o minimizar una función", "Derivar", "Integrar", "Graficar"], correcta: 0 }
    ],
    6: [
      { pregunta: "¿Qué mide la media aritmética?", opciones: ["Dispersión", "Tendencia central", "Correlación", "Asimetría"], correcta: 1 },
      { pregunta: "Fórmula de la media:", opciones: ["Σx/n", "n/Σx", "Σx²/n", "Σ(x-x̄)²"], correcta: 0 },
      { pregunta: "¿Qué medida divide en 4 partes?", opciones: ["Media", "Moda", "Cuartiles", "Rango"], correcta: 2 },
      { pregunta: "Si P(A) = 0.4 y P(B) = 0.3, con eventos independientes, P(A∩B) =", opciones: ["0.7", "0.12", "0.1", "0.34"], correcta: 1 },
      { pregunta: "Permutaciones vs combinaciones:", opciones: ["Son iguales", "Permutaciones importa el orden", "Combinaciones importa el orden", "Ninguna"], correcta: 1 },
      { pregunta: "¿Qué mide la desviación estándar?", opciones: ["Tendencia central", "Dispersión", "Posición", "Forma"], correcta: 1 },
      { pregunta: "¿Cuál es la fórmula de la varianza poblacional?", opciones: ["Σ(x-μ)²/N", "Σx/N", "Σ(x-μ)/N", "Σx²/N"], correcta: 0 },
      { pregunta: "¿Qué es la moda?", opciones: ["Valor central", "Valor más frecuente", "Promedio", "Rango"], correcta: 1 },
      { pregunta: "En una distribución normal, ¿qué % está dentro de μ ± 2σ?", opciones: ["68%", "95%", "99.7%", "50%"], correcta: 1 },
      { pregunta: "¿Qué es un cuartil?", opciones: ["Valor que divide en 2", "Valor que divide en 4", "Valor que divide en 10", "Valor que divide en 100"], correcta: 1 },
      { pregunta: "Fórmula de combinaciones:", opciones: ["n!/(n-r)!", "n!/[r!(n-r)!]", "n!", "n×r"], correcta: 1 },
      { pregunta: "¿Qué es la probabilidad condicional?", opciones: ["P(A)+P(B)", "P(A|B)", "P(A)×P(B)", "P(A)-P(B)"], correcta: 1 }
    ]
  },

  // ===== FÍSICA (se mantiene igual pero se puede expandir) =====
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

  // ===== QUÍMICA =====
  quimica: {
    1: [
      { pregunta: "¿Qué estudia la Química?", opciones: ["Solo los seres vivos", "La composición, estructura y transformaciones de la materia", "Únicamente los átomos", "Los planetas y estrellas"], correcta: 1 },
      { pregunta: "¿Cuál es el primer paso del método científico?", opciones: ["Hipótesis", "Experimentación", "Observación", "Conclusión"], correcta: 2 },
      { pregunta: "¿Cuál es la unidad de masa en el SI?", opciones: ["Gramo (g)", "Libra (lb)", "Kilogramo (kg)", "Mol (mol)"], correcta: 2 },
      { pregunta: "El paso de sólido a líquido se llama:", opciones: ["Evaporación", "Fusión", "Sublimación", "Condensación"], correcta: 1 },
      { pregunta: "¿Cuál de los siguientes es una mezcla homogénea?", opciones: ["Granito", "Ensalada", "Agua salada", "Aceite y agua"], correcta: 2 },
      { pregunta: "¿Qué partícula subatómica tiene carga positiva?", opciones: ["Electrón", "Neutrón", "Protón", "Fotón"], correcta: 2 },
      { pregunta: "Si un átomo tiene Z=11 y A=23, ¿cuántos neutrones tiene?", opciones: ["11", "12", "23", "34"], correcta: 1 },
      { pregunta: "¿Cuántos electrones caben como máximo en el subnivel p?", opciones: ["2", "6", "10", "14"], correcta: 1 },
      { pregunta: "¿Cuál es el grupo de los gases nobles?", opciones: ["Grupo 1", "Grupo 2", "Grupo 17", "Grupo 18"], correcta: 3 },
      { pregunta: "¿Qué tipo de enlace se forma entre un metal y un no metal?", opciones: ["Covalente polar", "Covalente no polar", "Iónico", "Metálico"], correcta: 2 },
      { pregunta: "La regla del octeto establece que los átomos buscan tener:", opciones: ["2 electrones en su última capa", "8 electrones en su última capa", "8 protones en el núcleo", "18 neutrones"], correcta: 1 },
      { pregunta: "¿Cuál es la configuración electrónica del sodio (Na, Z=11)?", opciones: ["1s² 2s² 2p⁶ 3s¹", "1s² 2s² 2p⁶ 3s²", "1s² 2s² 2p⁵ 3s²", "1s² 2s² 2p⁶ 3p¹"], correcta: 0 }
    ],
    2: [
      { pregunta: "¿Cuál es la fórmula del óxido de calcio?", opciones: ["CaO", "Ca₂O", "CaO₂", "Ca(OH)₂"], correcta: 0 },
      { pregunta: "¿Qué tipo de reacción es: 2H₂O → 2H₂ + O₂?", opciones: ["Síntesis", "Descomposición", "Sustitución simple", "Doble sustitución"], correcta: 1 },
      { pregunta: "¿Qué dice la Ley de Conservación de la Masa de Lavoisier?", opciones: ["La masa se crea", "La masa se destruye", "La masa de reactivos = masa de productos", "La masa cambia"], correcta: 2 },
      { pregunta: "Balancea: __Fe + __O₂ → __Fe₂O₃. ¿Cuáles son los coeficientes?", opciones: ["1, 1, 1", "2, 3, 1", "4, 3, 2", "3, 4, 2"], correcta: 2 },
      { pregunta: "¿Cuántas partículas hay en 1 mol de cualquier sustancia?", opciones: ["6.022×10²³", "3.14×10²³", "1×10²³", "9.8×10²³"], correcta: 0 },
      { pregunta: "Si la masa molar del agua es 18 g/mol, ¿cuántos moles hay en 54 g?", opciones: ["1 mol", "2 moles", "3 moles", "4 moles"], correcta: 2 },
      { pregunta: "¿Qué es una solución saturada?", opciones: ["Una con poco soluto", "Una con mucho soluto sin disolver", "Una con la máxima cantidad de soluto disuelto", "Una sin soluto"], correcta: 2 },
      { pregunta: "Un ácido según Arrhenius libera:", opciones: ["OH⁻ en agua", "H⁺ en agua", "Electrones", "Neutrones"], correcta: 1 },
      { pregunta: "¿Cuál es el pH de una sustancia neutra?", opciones: ["0", "7", "14", "1"], correcta: 1 },
      { pregunta: "En una reacción redox, la oxidación implica:", opciones: ["Ganancia de electrones", "Pérdida de electrones", "Ganancia de protones", "Pérdida de neutrones"], correcta: 1 },
      { pregunta: "¿Cuál es un ejemplo de ácido fuerte?", opciones: ["HCl (ácido clorhídrico)", "H₂O (agua)", "NaCl (sal)", "CH₄ (metano)"], correcta: 0 },
      { pregunta: "¿Qué producto se obtiene al reaccionar un ácido con un hidróxido?", opciones: ["Solo agua", "Solo gas", "Sal + agua", "Óxido + hidrógeno"], correcta: 2 }
    ]
  },

  // ===== PROBABILIDAD (se mantiene igual) =====
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