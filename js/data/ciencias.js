/* ==========================================================
   DATA - Ciencias Naturales, Experimentales y Tecnología
   Unidades de Aprendizaje Curricular (UAC) - COBACH Chiapas
========================================================== */

const CIENCIAS = {
  1: {
    titulo: "La materia y sus interacciones",
    subtitulo: "Ciencias Naturales, Experimentales y Tecnología I",
    semestre: "Primer Semestre",
    clase: "s1",
    icono: "🔬",
    descripcion: "Introducción a la ciencia, el método científico, la materia, sus propiedades e interacciones.",
    contexto: "En Chiapas, el EMSAD forma estudiantes que aprenden ciencia desde su realidad: la milpa, el café, los ríos y las montañas.",
    temas: [
      {
        id: "cn1-1",
        titulo: "La Ciencia y su Método",
        icono: "🧠",
        imagen: "linear-gradient(135deg, #0d9488, #14b8a6)",
        contenido: `
          <p>La <strong>ciencia</strong> es el conjunto de conocimientos sistemáticos obtenidos mediante observación y experimentación.</p>
          <h4>Características del conocimiento científico</h4>
          <ul>
            <li><strong>Objetivo:</strong> se basa en hechos verificables</li>
            <li><strong>Sistemático:</strong> sigue un método ordenado</li>
            <li><strong>Falible:</strong> sus teorías pueden corregirse</li>
            <li><strong>Comunicable:</strong> se difunde y comparte</li>
          </ul>
          <h4>Pasos del método científico</h4>
          <ol>
            <li>Observación</li>
            <li>Planteamiento del problema</li>
            <li>Hipótesis</li>
            <li>Experimentación</li>
            <li>Análisis de datos</li>
            <li>Conclusión</li>
            <li>Comunicación</li>
          </ol>
          <div class="ejemplo">
            <strong>Contexto Chiapas:</strong> Los antiguos mayas observaron los ciclos de lluvia en la Selva Lacandona y desarrollaron calendarios precisos.
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es el primer paso del método científico?", opciones: ["Hipótesis", "Observación", "Experimentación", "Conclusión"], correcta: "Observación", explicacion: "Todo inicia observando un fenómeno." },
          { pregunta: "Una posible explicación a un fenómeno se llama:", opciones: ["Ley", "Teoría", "Hipótesis", "Conclusión"], correcta: "Hipótesis", explicacion: "Es una suposición que debe probarse." },
          { pregunta: "Si un experimento no apoya tu hipótesis, ¿qué debes hacer?", opciones: ["Ignorarlo", "Rechazarla o modificarla", "Inventar datos", "Rendirte"], correcta: "Rechazarla o modificarla", explicacion: "La ciencia se basa en la evidencia." },
          { pregunta: "¿Qué característica hace que la ciencia pueda corregirse?", opciones: ["Objetiva", "Falible", "Comunicable", "Sistemática"], correcta: "Falible", explicacion: "Las teorías pueden cambiar con nuevas pruebas." },
          { pregunta: "¿Los antiguos mayas usaron el método científico para crear calendarios?", opciones: ["Verdadero", "Falso"], correcta: "Verdadero", explicacion: "Observaron los astros y ciclos para predecir lluvias." }
        ]
      },
      {
        id: "cn1-2",
        titulo: "La Materia y sus Propiedades",
        icono: "🧱",
        imagen: "linear-gradient(135deg, #f59e0b, #d97706)",
        contenido: `
          <p>La <strong>materia</strong> es todo lo que tiene masa y ocupa un volumen.</p>
          <h4>Propiedades generales</h4>
          <ul>
            <li>Masa, volumen, inercia, impenetrabilidad</li>
          </ul>
          <h4>Propiedades específicas</h4>
          <ul>
            <li><strong>Físicas:</strong> densidad, punto de fusión, color</li>
            <li><strong>Químicas:</strong> reactividad, combustibilidad</li>
          </ul>
          <div class="formula">d = m / V   (densidad = masa / volumen)</div>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> La densidad del agua es 1 g/cm³. La miel es más densa (1.4 g/cm³), por eso se hunde.
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué propiedad es específica de la materia?", opciones: ["Masa", "Volumen", "Densidad", "Inercia"], correcta: "Densidad", explicacion: "La densidad depende del tipo de material." },
          { pregunta: "La fórmula de la densidad es:", opciones: ["d = m + V", "d = m × V", "d = m / V", "d = V / m"], correcta: "d = m / V", explicacion: "Masa entre volumen." },
          { pregunta: "¿Cuál es una propiedad química?", opciones: ["Color", "Densidad", "Combustibilidad", "Punto de fusión"], correcta: "Combustibilidad", explicacion: "Implica un cambio en la naturaleza de la materia." },
          { pregunta: "Si un objeto tiene mucha masa en poco volumen, su densidad es:", opciones: ["Baja", "Alta", "Neutra", "Cero"], correcta: "Alta", explicacion: "Hay mucha materia en poco espacio." },
          { pregunta: "El volumen es:", opciones: ["La cantidad de materia", "El espacio que ocupa un cuerpo", "El peso", "La temperatura"], correcta: "El espacio que ocupa un cuerpo", explicacion: "Es una medida tridimensional." }
        ]
      },
      {
        id: "cn1-3",
        titulo: "Estados de Agregación de la Materia",
        icono: "💧",
        imagen: "linear-gradient(135deg, #06b6d4, #0891b2)",
        contenido: `
          <h4>Los tres estados clásicos</h4>
          <ul>
            <li><strong>Sólido:</strong> forma y volumen definidos. Fuerzas de atracción fuertes.</li>
            <li><strong>Líquido:</strong> volumen definido, forma variable.</li>
            <li><strong>Gaseoso:</strong> forma y volumen variables. Fuerzas débiles.</li>
          </ul>
          <h4>Cambios de estado</h4>
          <ul>
            <li>Fusión: sólido → líquido</li>
            <li>Evaporación: líquido → gas</li>
            <li>Sublimación: sólido → gas</li>
            <li>Solidificación, condensación, deposición (inversos)</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto:</strong> El ciclo del agua en Chiapas: evaporación en la costa, condensación en las montañas, precipitación en la selva.
          </div>
        `,
        actividades: [
          { pregunta: "El paso de sólido a líquido se llama:", opciones: ["Evaporación", "Fusión", "Condensación", "Sublimación"], correcta: "Fusión", explicacion: "Ejemplo: el hielo derritiéndose." },
          { pregunta: "¿En qué estado las fuerzas de atracción son más débiles?", opciones: ["Sólido", "Líquido", "Gaseoso", "Plasma"], correcta: "Gaseoso", explicacion: "Las partículas están muy separadas." },
          { pregunta: "El paso directo de sólido a gas se llama:", opciones: ["Sublimación", "Fusión", "Solidificación", "Evaporación"], correcta: "Sublimación", explicacion: "Ejemplo: el hielo seco." },
          { pregunta: "Cuando el vapor de agua se convierte en gotas, ocurre la:", opciones: ["Evaporación", "Condensación", "Fusión", "Sublimación"], correcta: "Condensación", explicacion: "El gas pierde calor y se vuelve líquido." },
          { pregunta: "¿Qué estado tiene volumen definido pero forma variable?", opciones: ["Sólido", "Líquido", "Gaseoso", "Ninguno"], correcta: "Líquido", explicacion: "Los líquidos toman la forma del recipiente." }
        ]
      },
      {
        id: "cn1-4",
        titulo: "Clasificación de la Materia",
        icono: "🧪",
        imagen: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        contenido: `
          <h4>Sustancias puras</h4>
          <ul>
            <li><strong>Elementos:</strong> Fe, O, H, C, Au</li>
            <li><strong>Compuestos:</strong> H₂O, NaCl, CO₂</li>
          </ul>
          <h4>Mezclas</h4>
          <ul>
            <li><strong>Homogéneas:</strong> agua salada, aire, café filtrado</li>
            <li><strong>Heterogéneas:</strong> granito, ensalada, agua con aceite</li>
          </ul>
          <h4>Métodos de separación</h4>
          <ul>
            <li>Filtración, destilación, decantación, tamizado, evaporación</li>
          </ul>
          <div class="ejemplo">
            <strong>Práctica:</strong> Separar sal de agua mediante evaporación solar. ¡Útil para comunidades costeras!
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es una mezcla homogénea?", opciones: ["Agua con aceite", "Granito", "Agua salada", "Ensalada"], correcta: "Agua salada", explicacion: "Sus componentes no se distinguen a simple vista." },
          { pregunta: "El oro (Au) es un ejemplo de:", opciones: ["Compuesto", "Mezcla", "Elemento", "Solución"], correcta: "Elemento", explicacion: "No se puede descomponer en otras sustancias." },
          { pregunta: "¿Qué método usarías para separar agua y arena?", opciones: ["Destilación", "Filtración", "Evaporación", "Decantación"], correcta: "Filtración", explicacion: "La arena queda atrapada en el filtro." },
          { pregunta: "El agua (H₂O) es un ejemplo de:", opciones: ["Elemento", "Compuesto", "Mezcla heterogénea", "Átomo"], correcta: "Compuesto", explicacion: "Está formada por dos elementos en proporción fija." },
          { pregunta: "El aire que respiramos es una mezcla:", opciones: ["Heterogénea", "Homogénea", "Pura", "Compuesta"], correcta: "Homogénea", explicacion: "Es una mezcla de gases que no se distinguen." }
        ]
      },
      {
        id: "cn1-5",
        titulo: "Medición y Sistema Internacional",
        icono: "📏",
        imagen: "linear-gradient(135deg, #f43f5e, #e11d48)",
        contenido: `
          <h4>Magnitudes fundamentales (SI)</h4>
          <ul>
            <li>Longitud → metro (m)</li>
            <li>Masa → kilogramo (kg)</li>
            <li>Tiempo → segundo (s)</li>
            <li>Temperatura → kelvin (K)</li>
            <li>Cantidad de sustancia → mol (mol)</li>
          </ul>
          <h4>Instrumentos de medición</h4>
          <ul>
            <li>Balanza, probeta, termómetro, vernier</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto:</strong> Temperatura en Tuxtla Gutiérrez (35°C) vs San Cristóbal de las Casas (18°C).
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es la unidad de masa en el SI?", opciones: ["Gramo", "Libra", "Kilogramo", "Mol"], correcta: "Kilogramo", explicacion: "Aunque usemos gramos, el SI usa kg." },
          { pregunta: "¿Qué instrumento mide la temperatura?", opciones: ["Balanza", "Probeta", "Termómetro", "Vernier"], correcta: "Termómetro", explicacion: "Mide el grado de calor." },
          { pregunta: "La longitud se mide en:", opciones: ["Metros", "Litros", "Segundos", "Kelvin"], correcta: "Metros", explicacion: "Es su unidad fundamental." },
          { pregunta: "¿Qué instrumento usarías para medir un volumen exacto de líquido?", opciones: ["Regla", "Probeta", "Balanza", "Cronómetro"], correcta: "Probeta", explicacion: "Tiene marcas de volumen." },
          { pregunta: "La cantidad de sustancia se mide en:", opciones: ["Moles", "Newtons", "Joules", "Pascales"], correcta: "Moles", explicacion: "El mol es la unidad del SI." }
        ]
      }
    ]
  },

  2: {
    titulo: "Conservación de la energía y sus interacciones con la materia",
    subtitulo: "Ciencias Naturales, Experimentales y Tecnología II",
    semestre: "Segundo Semestre",
    clase: "s2",
    icono: "⚡",
    descripcion: "La energía, sus formas, transformaciones, conservación y su relación con la materia.",
    contexto: "Chiapas es rico en energía: hidroeléctricas en el Grijalva, sol en la costa, biomasa en el campo.",
    temas: [
      {
        id: "cn2-1",
        titulo: "¿Qué es la Energía?",
        icono: "🔋",
        imagen: "linear-gradient(135deg, #eab308, #f59e0b)",
        contenido: `
          <p>La <strong>energía</strong> es la capacidad de realizar un trabajo o producir un cambio.</p>
          <h4>Características</h4>
          <ul>
            <li>Se <strong>transforma</strong> (no se crea ni destruye).</li>
            <li>Se <strong>transfiere</strong> entre cuerpos.</li>
            <li>Se <strong>mide</strong> en joules (J).</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto:</strong> La energía solar puede transformarse en eléctrica mediante paneles en comunidades rurales.
          </div>
        `,
        actividades: [
          { pregunta: "La energía se mide en:", opciones: ["Newtons", "Joules", "Watts", "Pascales"], correcta: "Joules", explicacion: "El Joule (J) es la unidad de energía." },
          { pregunta: "¿Qué ocurre con la energía en una transformación?", opciones: ["Se crea", "Se destruye", "Se transforma", "Desaparece"], correcta: "Se transforma", explicacion: "Pasa de una forma a otra." },
          { pregunta: "¿Qué panel transforma la energía solar en eléctrica?", opciones: ["Panel de yeso", "Panel solar", "Panel de madera", "Panel de vidrio"], correcta: "Panel solar", explicacion: "Usa celdas fotovoltaicas." },
          { pregunta: "La energía es la capacidad de:", opciones: ["Dormir", "Realizar un trabajo", "Comer", "Correr"], correcta: "Realizar un trabajo", explicacion: "Produce cambios o movimiento." },
          { pregunta: "¿La energía se puede transferir de un cuerpo a otro?", opciones: ["Verdadero", "Falso"], correcta: "Verdadero", explicacion: "Como cuando el calor pasa de una estufa a una olla." }
        ]
      },
      {
        id: "cn2-2",
        titulo: "Formas de Energía",
        icono: "💡",
        imagen: "linear-gradient(135deg, #f97316, #ea580c)",
        contenido: `
          <h4>Tipos principales</h4>
          <ul>
            <li><strong>Cinética:</strong> Ec = ½mv²</li>
            <li><strong>Potencial:</strong> Ep = mgh</li>
            <li><strong>Térmica, Química, Eléctrica, Nuclear, Luminosa</strong></li>
          </ul>
          <div class="ejemplo">
            <strong>Ejemplo local:</strong> En las cascadas de Chiapas, el agua en altura tiene energía potencial que se convierte en cinética al caer.
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué tipo de energía tiene un cuerpo en movimiento?", opciones: ["Potencial", "Cinética", "Nuclear", "Química"], correcta: "Cinética", explicacion: "Depende de la velocidad y la masa." },
          { pregunta: "La energía potencial gravitatoria depende de:", opciones: ["La velocidad", "La altura", "La temperatura", "El color"], correcta: "La altura", explicacion: "Ep = mgh (masa x gravedad x altura)." },
          { pregunta: "La energía que proviene del núcleo del átomo es:", opciones: ["Eléctrica", "Nuclear", "Térmica", "Química"], correcta: "Nuclear", explicacion: "Se libera en reacciones nucleares." },
          { pregunta: "La energía almacenada en los alimentos es:", opciones: ["Cinética", "Química", "Potencial", "Luminosa"], correcta: "Química", explicacion: "Se libera al digerirlos." },
          { pregunta: "La energía luminosa viaja en forma de:", opciones: ["Ondas", "Materia", "Sonido", "Calor"], correcta: "Ondas", explicacion: "Es radiación electromagnética." }
        ]
      },
      {
        id: "cn2-3",
        titulo: "Ley de Conservación de la Energía",
        icono: "♻️",
        imagen: "linear-gradient(135deg, #10b981, #059669)",
        contenido: `
          <p>La energía <strong>no se crea ni se destruye, solo se transforma</strong>.</p>
          <div class="formula">E<sub>total inicial</sub> = E<sub>total final</sub></div>
          <div class="ejemplo">
            Una montaña rusa convierte energía potencial en cinética. Lo mismo ocurre con el agua en una presa.
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué dice la Ley de Conservación de la Energía?", opciones: ["Se crea", "Se destruye", "Se transforma", "Se pierde"], correcta: "Se transforma", explicacion: "La cantidad total de energía se mantiene." },
          { pregunta: "En una montaña rusa, arriba del todo hay energía:", opciones: ["Cinética", "Potencial", "Térmica", "Eléctrica"], correcta: "Potencial", explicacion: "Por la altura." },
          { pregunta: "Al caer, la energía potencial se convierte en:", opciones: ["Química", "Cinética", "Nuclear", "Luminosa"], correcta: "Cinética", explicacion: "Aumenta la velocidad." },
          { pregunta: "La energía total en un sistema cerrado:", opciones: ["Aumenta", "Disminuye", "Permanece constante", "Desaparece"], correcta: "Permanece constante", explicacion: "Solo cambia de forma." },
          { pregunta: "¿Es posible crear energía de la nada?", opciones: ["Sí", "No"], correcta: "No", explicacion: "Eso violaría la ley de conservación." }
        ]
      },
      {
        id: "cn2-4",
        titulo: "Fuentes de Energía",
        icono: "🌞",
        imagen: "linear-gradient(135deg, #0ea5e9, #0284c7)",
        contenido: `
          <h4>Renovables</h4>
          <ul><li>Solar, eólica, hidráulica, geotérmica, biomasa</li></ul>
          <h4>No renovables</h4>
          <ul><li>Carbón, petróleo, gas, nuclear</li></ul>
          <div class="ejemplo">
            <strong>Contexto Chiapas:</strong> Presas hidroeléctricas Chicoasén y Malpaso en el río Grijalva.
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es una fuente de energía renovable?", opciones: ["Petróleo", "Carbón", "Solar", "Gas natural"], correcta: "Solar", explicacion: "El sol es inagotable a escala humana." },
          { pregunta: "Las presas hidroeléctricas de Chiapas usan energía:", opciones: ["Solar", "Eólica", "Hidráulica", "Nuclear"], correcta: "Hidráulica", explicacion: "Usan la fuerza del agua." },
          { pregunta: "El petróleo es una fuente:", opciones: ["Renovable", "No renovable", "Infinita", "Limpia"], correcta: "No renovable", explicacion: "Tarda millones de años en formarse." },
          { pregunta: "La energía del viento se llama:", opciones: ["Solar", "Eólica", "Geotérmica", "Biomasa"], correcta: "Eólica", explicacion: "Se obtiene con aerogeneradores." },
          { pregunta: "¿Qué fuente de energía contamina más?", opciones: ["Solar", "Eólica", "Carbón", "Hidráulica"], correcta: "Carbón", explicacion: "Emite gases de efecto invernadero." }
        ]
      },
      {
        id: "cn2-5",
        titulo: "Trabajo y Potencia",
        icono: "🏋️",
        imagen: "linear-gradient(135deg, #ec4899, #db2777)",
        contenido: `
          <div class="formula">
Trabajo: W = F · d · cos(θ)  [Joule]<br>
Potencia: P = W / t  [Watt]
          </div>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> Subir carga de café de 50 kg a 10 m:<br>
            W = 50 × 9.8 × 10 = 4,900 J
          </div>
        `,
        actividades: [
          { pregunta: "El trabajo en física requiere:", opciones: ["Solo fuerza", "Solo tiempo", "Fuerza y desplazamiento", "Masa y velocidad"], correcta: "Fuerza y desplazamiento", explicacion: "W = F · d." },
          { pregunta: "Si empujas una pared y no se mueve, el trabajo es:", opciones: ["Mucho", "Poco", "Cero", "Negativo"], correcta: "Cero", explicacion: "No hay desplazamiento (d=0)." },
          { pregunta: "La potencia se mide en:", opciones: ["Joules", "Watts", "Newtons", "Pascales"], correcta: "Watts", explicacion: "Watt = Joule/segundo." },
          { pregunta: "¿Qué máquina realiza más trabajo en menos tiempo?", opciones: ["Una lenta", "Una con más potencia", "Una con menos potencia", "Una sin energía"], correcta: "Una con más potencia", explicacion: "Potencia = trabajo / tiempo." },
          { pregunta: "La fórmula del trabajo es:", opciones: ["W = m·a", "W = F·d", "W = V·I", "W = F/t"], correcta: "W = F·d", explicacion: "Fuerza por distancia." }
        ]
      },
      {
        id: "cn2-6",
        titulo: "Termodinámica Básica",
        icono: "🔥",
        imagen: "linear-gradient(135deg, #ef4444, #dc2626)",
        contenido: `
          <h4>Leyes</h4>
          <ul>
            <li><strong>1ª Ley:</strong> ΔU = Q - W</li>
            <li><strong>2ª Ley:</strong> la entropía aumenta</li>
          </ul>
          <h4>Escalas</h4>
          <div class="formula">°F = (°C × 9/5) + 32<br>K = °C + 273.15</div>
          <div class="ejemplo">
            Tuxtla (35°C = 95°F = 308 K) vs San Cristóbal (18°C = 64°F = 291 K).
          </div>
        `,
        actividades: [
          { pregunta: "La 1ª Ley de la Termodinámica trata sobre:", opciones: ["La entropía", "La conservación de la energía", "La gravedad", "La electricidad"], correcta: "La conservación de la energía", explicacion: "ΔU = Q - W." },
          { pregunta: "¿Qué escala de temperatura es absoluta?", opciones: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"], correcta: "Kelvin", explicacion: "Comienza en el cero absoluto." },
          { pregunta: "Si en Tuxtla hay 35°C, ¿cuánto es en Fahrenheit?", opciones: ["95°F", "50°F", "100°F", "77°F"], correcta: "95°F", explicacion: "(35 × 9/5) + 32 = 95." },
          { pregunta: "La 2ª Ley dice que la entropía (desorden):", opciones: ["Disminuye", "Aumenta", "Se mantiene", "Desaparece"], correcta: "Aumenta", explicacion: "En el universo, el desorden tiende a crecer." },
          { pregunta: "El calor es energía que se transfiere por:", opciones: ["Diferencia de masa", "Diferencia de temperatura", "Diferencia de volumen", "Gravedad"], correcta: "Diferencia de temperatura", explicacion: "Va de lo caliente a lo frío." }
        ]
      }
    ]
  },

  3: {
    titulo: "Ecosistemas: interacciones, energía y dinámica",
    subtitulo: "Ciencias Naturales, Experimentales y Tecnología III",
    semestre: "Tercer Semestre",
    clase: "s3",
    icono: "🌎",
    descripcion: "Los ecosistemas, sus interacciones, el flujo de energía y la dinámica de los sistemas terrestres.",
    contexto: "Chiapas es un laboratorio natural: selvas, montañas, ríos y biodiversidad única.",
    temas: [
      {
        id: "cn3-1",
        titulo: "Los Ecosistemas y sus Componentes",
        icono: "🌿",
        imagen: "linear-gradient(135deg, #22c55e, #16a34a)",
        contenido: `
          <p>Un <strong>ecosistema</strong> es el conjunto de seres vivos y el medio físico donde interactúan.</p>
          <h4>Componentes</h4>
          <ul>
            <li><strong>Biotopo:</strong> medio físico (suelo, agua, clima)</li>
            <li><strong>Biocenosis:</strong> conjunto de seres vivos</li>
          </ul>
          <h4>Factores</h4>
          <ul>
            <li><strong>Bióticos:</strong> seres vivos</li>
            <li><strong>Abióticos:</strong> luz, temperatura, agua, suelo</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto:</strong> La Selva Lacandona es un ecosistema con miles de especies interactuando.
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué es un ecosistema?", opciones: ["Solo animales", "Seres vivos y su medio físico", "Solo plantas", "El clima"], correcta: "Seres vivos y su medio físico", explicacion: "Es la interacción entre biocenosis y biotopo." },
          { pregunta: "Los factores abióticos son:", opciones: ["Seres vivos", "Hongos y bacterias", "Luz, agua y suelo", "Animales"], correcta: "Luz, agua y suelo", explicacion: "No tienen vida." },
          { pregunta: "La biocenosis es:", opciones: ["El clima", "El conjunto de seres vivos", "El suelo", "El agua"], correcta: "El conjunto de seres vivos", explicacion: "Es la comunidad biológica." },
          { pregunta: "La Selva Lacandona es un ejemplo de:", opciones: ["Ecosistema", "Población", "Individuo", "Biotopo"], correcta: "Ecosistema", explicacion: "Tiene miles de interacciones." },
          { pregunta: "¿Qué factor abiótico afecta a las plantas?", opciones: ["La luz solar", "Los depredadores", "Las bacterias", "Los hongos"], correcta: "La luz solar", explicacion: "Es necesaria para la fotosíntesis." }
        ]
      },
      {
        id: "cn3-2",
        titulo: "Flujo de Energía y Cadenas Tróficas",
        icono: "🔁",
        imagen: "linear-gradient(135deg, #84cc16, #65a30d)",
        contenido: `
          <h4>Niveles tróficos</h4>
          <ul>
            <li><strong>Productores:</strong> plantas (fotosíntesis)</li>
            <li><strong>Consumidores:</strong> herbívoros (1°), carnívoros (2°, 3°)</li>
            <li><strong>Descomponedores:</strong> hongos, bacterias</li>
          </ul>
          <div class="formula">Solo ~10% de la energía pasa al siguiente nivel trófico</div>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> 🌱 → 🐛 → 🐦 → 🦅 (pirámide de energía)
          </div>
        `,
        actividades: [
          { pregunta: "Los productores en un ecosistema son:", opciones: ["Los leones", "Las plantas", "Los hongos", "Las bacterias"], correcta: "Las plantas", explicacion: "Producen su propio alimento con la fotosíntesis." },
          { pregunta: "¿Qué porcentaje de energía pasa de un nivel trófico al siguiente?", opciones: ["100%", "50%", "10%", "0%"], correcta: "10%", explicacion: "El resto se pierde como calor." },
          { pregunta: "Los descomponedores son:", opciones: ["Plantas", "Herbívoros", "Hongos y bacterias", "Carnívoros"], correcta: "Hongos y bacterias", explicacion: "Reciclan la materia orgánica." },
          { pregunta: "Una cadena trófica muestra:", opciones: ["Quién come a quién", "El clima", "El suelo", "La lluvia"], correcta: "Quién come a quién", explicacion: "Es el flujo de energía." },
          { pregunta: "Los carnívoros son consumidores:", opciones: ["Primarios", "Secundarios o terciarios", "Productores", "Descomponedores"], correcta: "Secundarios o terciarios", explicacion: "Comen a los herbívoros." }
        ]
      },
      {
        id: "cn3-3",
        titulo: "Ciclos Biogeoquímicos",
        icono: "♻️",
        imagen: "linear-gradient(135deg, #06b6d4, #0891b2)",
        contenido: `
          <h4>Ciclo del agua</h4>
          <p>Evaporación → Condensación → Precipitación → Infiltración</p>
          <h4>Ciclo del carbono</h4>
          <p>Fotosíntesis ↔ Respiración ↔ Combustión</p>
          <h4>Ciclo del nitrógeno</h4>
          <p>Fijación → Nitrificación → Asimilación → Amonificación</p>
          <div class="ejemplo">
            <strong>Contexto:</strong> La cuenca del Grijalva es clave en el ciclo del agua en Chiapas.
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué ciclo mueve el agua por la atmósfera?", opciones: ["Ciclo del carbono", "Ciclo del agua", "Ciclo del nitrógeno", "Ciclo del oxígeno"], correcta: "Ciclo del agua", explicacion: "Involucra evaporación y lluvia." },
          { pregunta: "Las plantas absorben CO₂ en el ciclo del carbono mediante:", opciones: ["Respiración", "Fotosíntesis", "Combustión", "Descomposición"], correcta: "Fotosíntesis", explicacion: "Lo convierten en glucosa." },
          { pregunta: "El río Grijalva es clave para el ciclo del agua en:", opciones: ["Chiapas", "Sonora", "Yucatán", "Baja California"], correcta: "Chiapas", explicacion: "Es su cuenca principal." },
          { pregunta: "¿Qué acción humana altera el ciclo del carbono?", opciones: ["Plantar árboles", "Quemar combustibles fósiles", "Ahorrar agua", "Reciclar"], correcta: "Quemar combustibles fósiles", explicacion: "Libera CO₂ a la atmósfera." },
          { pregunta: "El ciclo del nitrógeno es esencial para:", opciones: ["El agua", "Las proteínas y el ADN", "La luz", "El clima"], correcta: "Las proteínas y el ADN", explicacion: "El nitrógeno forma parte de ellos." }
        ]
      },
      {
        id: "cn3-4",
        titulo: "Biodiversidad Chiapaneca",
        icono: "🦜",
        imagen: "linear-gradient(135deg, #f59e0b, #d97706)",
        contenido: `
          <p>Chiapas es el <strong>2° estado con mayor biodiversidad</strong> de México.</p>
          <h4>Especies emblemáticas</h4>
          <ul>
            <li>Jaguar, Guacamaya roja</li>
            <li>Tapir centroamericano</li>
            <li>Quetzal, Ceiba</li>
          </ul>
          <h4>Áreas Naturales Protegidas</h4>
          <ul>
            <li>Montes Azules, El Triunfo</li>
            <li>Lagunas de Montebello, La Sepultura</li>
          </ul>
          <div class="ejemplo">
            La Selva Lacandona alberga el 20% de las especies de México.
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué lugar ocupa Chiapas en biodiversidad en México?", opciones: ["1°", "2°", "3°", "5°"], correcta: "2°", explicacion: "Solo después de Oaxaca." },
          { pregunta: "¿Cuál es un felino emblemático de la Selva Lacandona?", opciones: ["León", "Tigre", "Jaguar", "Puma"], correcta: "Jaguar", explicacion: "Es el felino más grande de América." },
          { pregunta: "Las Lagunas de Montebello son un área:", opciones: ["Urbana", "Natural Protegida", "Industrial", "Desértica"], correcta: "Natural Protegida", explicacion: "Son un parque nacional." },
          { pregunta: "¿Qué árbol es sagrado para los mayas?", opciones: ["Pino", "Ceiba", "Encino", "Roble"], correcta: "Ceiba", explicacion: "Representa el árbol de la vida." },
          { pregunta: "La guacamaya roja es un ave de:", opciones: ["Desierto", "Selva", "Tundra", "Mar"], correcta: "Selva", explicacion: "Habita en las selvas húmedas." }
        ]
      },
      {
        id: "cn3-5",
        titulo: "Geografía y Sistemas Terrestres de Chiapas",
        icono: "🗺️",
        imagen: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        contenido: `
          <h4>Relieve chiapaneco</h4>
          <ul>
            <li>Planicie Costera del Pacífico</li>
            <li>Sierra Madre de Chiapas</li>
            <li>Depresión Central</li>
            <li>Altos de Chiapas</li>
            <li>Montañas del Norte y Oriente</li>
            <li>Planicie Costera del Golfo</li>
          </ul>
          <h4>Ríos principales</h4>
          <ul>
            <li>Grijalva (más caudaloso de México)</li>
            <li>Usumacinta, Suchiate</li>
          </ul>
        `,
        actividades: [
          { pregunta: "¿Cuál es el río más caudaloso de México?", opciones: ["Usumacinta", "Grijalva", "Suchiate", "Bravo"], correcta: "Grijalva", explicacion: "Nace en Chiapas." },
          { pregunta: "Los Altos de Chiapas se caracterizan por ser:", opciones: ["Selva", "Montañoso y frío", "Desierto", "Costa"], correcta: "Montañoso y frío", explicacion: "Ahí está San Cristóbal." },
          { pregunta: "La Depresión Central es una zona:", opciones: ["Montañosa", "Baja y cálida", "Desértica", "Polar"], correcta: "Baja y cálida", explicacion: "Como Tuxtla Gutiérrez." },
          { pregunta: "La Sierra Madre de Chiapas es una zona:", opciones: ["Volcánica y montañosa", "Plana", "Costera", "Selvática"], correcta: "Volcánica y montañosa", explicacion: "Tiene el Tacaná." },
          { pregunta: "Chiapas limita con el océano:", opciones: ["Atlántico", "Pacífico", "Ártico", "Índico"], correcta: "Pacífico", explicacion: "Al sur." }
        ]
      },
      {
        id: "cn3-6",
        titulo: "Problemáticas Ambientales",
        icono: "⚠️",
        imagen: "linear-gradient(135deg, #ef4444, #dc2626)",
        contenido: `
          <h4>Amenazas en Chiapas</h4>
          <ul>
            <li><strong>Deforestación:</strong> pérdida de selvas por ganadería y agricultura</li>
            <li><strong>Contaminación de ríos:</strong> desechos y agroquímicos</li>
            <li><strong>Cambio climático:</strong> alteración de ciclos de lluvia</li>
            <li><strong>Especies invasoras:</strong> desplazamiento de especies nativas</li>
          </ul>
          <div class="ejemplo">
            <strong>Reflexión:</strong> La Selva Lacandona es uno de los pulmones más importantes de México. Su conservación es responsabilidad de todos.
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es una causa de la deforestación?", opciones: ["Reforestación", "Ganadería", "Reciclaje", "Ahorro de agua"], correcta: "Ganadería", explicacion: "Tala árboles para pastizales." },
          { pregunta: "El cambio climático altera en Chiapas:", opciones: ["Los ciclos de lluvia", "Las montañas", "El mar", "La gravedad"], correcta: "Los ciclos de lluvia", explicacion: "Causa sequías o inundaciones." },
          { pregunta: "¿Qué contamina los ríos de Chiapas?", opciones: ["Peces", "Agroquímicos", "Piedras", "Árboles"], correcta: "Agroquímicos", explicacion: "Los fertilizantes llegan al agua." },
          { pregunta: "Una especie invasora en Chiapas es:", opciones: ["El jaguar", "La ceiba", "El pez diablo", "El quetzal"], correcta: "El pez diablo", explicacion: "Afecta los ecosistemas acuáticos." },
          { pregunta: "¿Qué selva es el pulmón más importante de Chiapas?", opciones: ["Selva Lacandona", "Amazonas", "Selva Negra", "Selva Maya"], correcta: "Selva Lacandona", explicacion: "Es un tesoro de biodiversidad." }
        ]
      }
    ]
  },

  4: {
    titulo: "Reacciones químicas: conservación de la materia en la formación de nuevas sustancias",
    subtitulo: "Ciencias Naturales, Experimentales y Tecnología IV",
    semestre: "Cuarto Semestre",
    clase: "s4",
    icono: "⚗️",
    descripcion: "Reacciones químicas, conservación de la materia, formación de nuevas sustancias y estequiometría.",
    contexto: "La química está en el café, en el suelo, en los medicamentos y en la vida diaria.",
    temas: [
      {
        id: "cn4-1",
        titulo: "El Átomo y sus Partículas",
        icono: "⚛️",
        imagen: "linear-gradient(135deg, #0ea5e9, #0284c7)",
        contenido: `
          <h4>Partículas subatómicas</h4>
          <ul>
            <li><strong>Protón:</strong> carga +, núcleo</li>
            <li><strong>Neutrón:</strong> sin carga, núcleo</li>
            <li><strong>Electrón:</strong> carga −, órbitas</li>
          </ul>
          <div class="formula">
Z = número atómico (protones)<br>
A = número de masa (protones + neutrones)<br>
Neutrones = A − Z
          </div>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> El carbono (C) tiene Z=6 y A=12. Neutrones = 12 - 6 = 6.
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué partícula tiene carga positiva?", opciones: ["Electrón", "Neutrón", "Protón", "Fotón"], correcta: "Protón", explicacion: "Está en el núcleo." },
          { pregunta: "Si Z=11 y A=23, ¿cuántos neutrones hay?", opciones: ["11", "12", "23", "34"], correcta: "12", explicacion: "Neutrones = A - Z = 12." },
          { pregunta: "Los electrones se encuentran en:", opciones: ["El núcleo", "Los orbitales", "Los neutrones", "Los protones"], correcta: "Los orbitales", explicacion: "Giran alrededor del núcleo." },
          { pregunta: "El número atómico (Z) es igual al número de:", opciones: ["Neutrones", "Protones", "Electrones de valencia", "Isótopos"], correcta: "Protones", explicacion: "Define el elemento." },
          { pregunta: "¿Qué partícula no tiene carga?", opciones: ["Protón", "Electrón", "Neutrón", "Ion"], correcta: "Neutrón", explicacion: "Es neutra." }
        ]
      },
      {
        id: "cn4-2",
        titulo: "Tabla Periódica",
        icono: "📊",
        imagen: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        contenido: `
          <p>118 elementos ordenados por número atómico.</p>
          <h4>Grupos importantes</h4>
          <ul>
            <li>1: alcalinos | 2: alcalinotérreos</li>
            <li>17: halógenos | 18: gases nobles</li>
          </ul>
          <h4>Propiedades periódicas</h4>
          <ul>
            <li>Radio atómico, electronegatividad, energía de ionización</li>
          </ul>
        `,
        actividades: [
          { pregunta: "¿Cuántos elementos tiene la tabla periódica actual?", opciones: ["92", "100", "118", "150"], correcta: "118", explicacion: "Desde el Hidrógeno hasta el Oganesón." },
          { pregunta: "Los gases nobles están en el grupo:", opciones: ["1", "2", "17", "18"], correcta: "18", explicacion: "Son muy estables." },
          { pregunta: "Los metales alcalinos están en el grupo:", opciones: ["1", "2", "17", "18"], correcta: "1", explicacion: "Como el Sodio (Na)." },
          { pregunta: "El radio atómico aumenta de:", opciones: ["Arriba hacia abajo", "Abajo hacia arriba", "Izquierda a derecha", "No cambia"], correcta: "Arriba hacia abajo", explicacion: "Hay más niveles de energía." },
          { pregunta: "Los halógenos están en el grupo:", opciones: ["1", "2", "17", "18"], correcta: "17", explicacion: "Como el Cloro (Cl)." }
        ]
      },
      {
        id: "cn4-3",
        titulo: "Enlaces Químicos",
        icono: "🔗",
        imagen: "linear-gradient(135deg, #14b8a6, #0d9488)",
        contenido: `
          <ul>
            <li><strong>Iónico:</strong> metal + no metal. NaCl</li>
            <li><strong>Covalente:</strong> no metal + no metal. H₂O</li>
            <li><strong>Metálico:</strong> metal + metal.</li>
          </ul>
          <div class="ejemplo">
            <strong>Regla del octeto:</strong> los átomos buscan 8 e⁻ en su última capa.
          </div>
        `,
        actividades: [
          { pregunta: "El enlace entre un metal y un no metal es:", opciones: ["Covalente", "Iónico", "Metálico", "Puente H"], correcta: "Iónico", explicacion: "Hay transferencia de electrones." },
          { pregunta: "El enlace del agua (H₂O) es:", opciones: ["Iónico", "Covalente", "Metálico", "Nuclear"], correcta: "Covalente", explicacion: "Comparten electrones." },
          { pregunta: "La regla del octeto busca tener:", opciones: ["2 electrones", "8 electrones", "18 neutrones", "0 electrones"], correcta: "8 electrones", explicacion: "Como los gases nobles." },
          { pregunta: "El enlace metálico forma:", opciones: ["Cristales", "Un mar de electrones", "Moléculas", "Gases"], correcta: "Un mar de electrones", explicacion: "Permite la conductividad." },
          { pregunta: "¿Qué enlace hay en la sal de mesa (NaCl)?", opciones: ["Covalente", "Iónico", "Metálico", "Dativo"], correcta: "Iónico", explicacion: "Sodio cede electrón al cloro." }
        ]
      },
      {
        id: "cn4-4",
        titulo: "Reacciones Químicas",
        icono: "💥",
        imagen: "linear-gradient(135deg, #f59e0b, #d97706)",
        contenido: `
          <h4>Tipos de reacciones</h4>
          <ul>
            <li>Síntesis: A + B → AB</li>
            <li>Descomposición: AB → A + B</li>
            <li>Sustitución: AB + C → AC + B</li>
            <li>Doble sustitución: AB + CD → AD + CB</li>
          </ul>
          <div class="ejemplo">
            Ley de Lavoisier: masa reactivos = masa productos.
          </div>
        `,
        actividades: [
          { pregunta: "La reacción A + B → AB es de:", opciones: ["Síntesis", "Descomposición", "Sustitución", "Doble sustitución"], correcta: "Síntesis", explicacion: "Se combinan dos sustancias." },
          { pregunta: "¿Qué dice la Ley de Lavoisier?", opciones: ["La masa se crea", "La masa se destruye", "La masa se conserva", "La masa cambia"], correcta: "La masa se conserva", explicacion: "Masa reactivos = masa productos." },
          { pregunta: "AB → A + B es una reacción de:", opciones: ["Síntesis", "Descomposición", "Sustitución", "Neutralización"], correcta: "Descomposición", explicacion: "Una sustancia se separa." },
          { pregunta: "En una reacción química, las sustancias iniciales se llaman:", opciones: ["Productos", "Reactivos", "Catalizadores", "Precipitados"], correcta: "Reactivos", explicacion: "Son los que reaccionan." },
          { pregunta: "La reacción AB + CD → AD + CB es de:", opciones: ["Síntesis", "Doble sustitución", "Descomposición", "Simple"], correcta: "Doble sustitución", explicacion: "Intercambian parejas." }
        ]
      },
      {
        id: "cn4-5",
        titulo: "Balanceo de Ecuaciones",
        icono: "⚖️",
        imagen: "linear-gradient(135deg, #10b981, #059669)",
        contenido: `
          <h4>Método por tanteo</h4>
          <ol>
            <li>Escribir la ecuación sin balancear</li>
            <li>Contar átomos de cada elemento</li>
            <li>Ajustar coeficientes</li>
            <li>Verificar balance</li>
          </ol>
          <div class="formula">CH₄ + 2O₂ → CO₂ + 2H₂O</div>
        `,
        actividades: [
          { pregunta: "¿Para qué sirve balancear?", opciones: ["Para hacerla bonita", "Para conservar la masa", "Para que pese más", "Para eliminar elementos"], correcta: "Para conservar la masa", explicacion: "Debe haber los mismos átomos." },
          { pregunta: "En CH₄ + 2O₂ → CO₂ + 2H₂O, ¿cuántos O hay en reactivos?", opciones: ["2", "3", "4", "1"], correcta: "4", explicacion: "2O₂ = 4 átomos." },
          { pregunta: "Balancea: __Fe + __O₂ → __Fe₂O₃", opciones: ["1,1,1", "2,3,1", "4,3,2", "3,2,1"], correcta: "4,3,2", explicacion: "4Fe + 3O₂ → 2Fe₂O₃" },
          { pregunta: "El método de tanteo consiste en:", opciones: ["Adivinar", "Probar coeficientes", "Usar calculadora", "Quemar"], correcta: "Probar coeficientes", explicacion: "Hasta igualar los átomos." },
          { pregunta: "¿Qué se coloca para balancear?", opciones: ["Subíndices", "Coeficientes", "Signos", "Puntos"], correcta: "Coeficientes", explicacion: "Números antes de las fórmulas." }
        ]
      },
      {
        id: "cn4-6",
        titulo: "Estequiometría: El Mol",
        icono: "🔢",
        imagen: "linear-gradient(135deg, #f43f5e, #e11d48)",
        contenido: `
          <h4>Conceptos clave</h4>
          <ul>
            <li><strong>Mol:</strong> 6.022×10²³ partículas</li>
            <li><strong>Masa molar:</strong> masa de 1 mol (g/mol)</li>
          </ul>
          <div class="formula">n = m / M</div>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> 36 g de agua (M = 18 g/mol) → n = 2 moles
          </div>
        `,
        actividades: [
          { pregunta: "Un mol contiene:", opciones: ["100 partículas", "6.022×10²³ partículas", "10 partículas", "1 millón"], correcta: "6.022×10²³ partículas", explicacion: "Número de Avogadro." },
          { pregunta: "Si tienes 36 g de agua (M=18), ¿cuántos moles tienes?", opciones: ["1", "2", "3", "0.5"], correcta: "2", explicacion: "n = 36/18 = 2." },
          { pregunta: "La fórmula para calcular moles a partir de la masa es:", opciones: ["n = m + M", "n = m / M", "n = M / m", "n = m × M"], correcta: "n = m / M", explicacion: "Masa entre masa molar." },
          { pregunta: "La masa molar del agua (H₂O) es:", opciones: ["16 g/mol", "18 g/mol", "20 g/mol", "10 g/mol"], correcta: "18 g/mol", explicacion: "Hidrógeno (1×2) + Oxígeno (16) = 18." },
          { pregunta: "¿Qué se debe hacer antes de cálculos estequiométricos?", opciones: ["Calentar", "Balancear la ecuación", "Medir el pH", "Filtrar"], correcta: "Balancear la ecuación", explicacion: "Para respetar proporciones." }
        ]
      }
    ]
  },

  5: {
    titulo: "La energía en los procesos de la vida diaria",
    subtitulo: "Ciencias Naturales, Experimentales y Tecnología V",
    semestre: "Quinto Semestre",
    clase: "s5",
    icono: "🌌",
    descripcion: "La energía en los procesos cotidianos: fuerzas, electricidad, ondas y fenómenos naturales.",
    contexto: "Desde las fuerzas que mueven el agua en las presas hasta la electricidad en tu comunidad.",
    temas: [
      {
        id: "cn5-1",
        titulo: "Fuerza y Movimiento",
        icono: "🏃",
        imagen: "linear-gradient(135deg, #0ea5e9, #0284c7)",
        contenido: `
          <h4>Leyes de Newton</h4>
          <ol>
            <li><strong>Inercia:</strong> reposo o MRU si F=0</li>
            <li><strong>Fuerza:</strong> F = m·a</li>
            <li><strong>Acción-Reacción</strong></li>
          </ol>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> F = 20 N sobre 5 kg → a = 4 m/s²
          </div>
        `,
        actividades: [
          { pregunta: "La 2da Ley de Newton dice que F es igual a:", opciones: ["m + a", "m × a", "m / a", "a / m"], correcta: "m × a", explicacion: "Fuerza = masa por aceleración." },
          { pregunta: "Si empujas un objeto de 10 kg con 50 N, su aceleración es:", opciones: ["5 m/s²", "500 m/s²", "0.2 m/s²", "10 m/s²"], correcta: "5 m/s²", explicacion: "a = F/m = 50/10 = 5." },
          { pregunta: "La ley de la inercia dice que un cuerpo en reposo:", opciones: ["Se mueve solo", "Permanece en reposo", "Explota", "Cae"], correcta: "Permanece en reposo", explicacion: "A menos que actúe una fuerza." },
          { pregunta: "A toda acción corresponde una:", opciones: ["Reacción", "Aceleración", "Fuerza nula", "Inercia"], correcta: "Reacción", explicacion: "3ra Ley de Newton." },
          { pregunta: "El peso de un objeto es:", opciones: ["Su masa", "m × g", "m / g", "Su volumen"], correcta: "m × g", explicacion: "Es la fuerza de la gravedad." }
        ]
      },
      {
        id: "cn5-2",
        titulo: "Cinemática",
        icono: "🚗",
        imagen: "linear-gradient(135deg, #10b981, #059669)",
        contenido: `
          <div class="formula">
MRU: v = d / t<br>
MRUA: v = v₀ + a·t<br>
d = v₀·t + ½·a·t²<br>
Caída libre: v = g·t (g = 9.8 m/s²)
          </div>
          <div class="ejemplo">
            Auto a 20 m/s durante 5 s → d = 100 m
          </div>
        `,
        actividades: [
          { pregunta: "Si un auto viaja a 20 m/s durante 5 s, recorre:", opciones: ["50 m", "100 m", "4 m", "25 m"], correcta: "100 m", explicacion: "d = v × t = 20 × 5 = 100." },
          { pregunta: "¿Qué mide la velocidad?", opciones: ["Distancia / tiempo", "Masa / volumen", "Fuerza / área", "Trabajo / tiempo"], correcta: "Distancia / tiempo", explicacion: "Es la rapidez del movimiento." },
          { pregunta: "En la caída libre, la aceleración es:", opciones: ["0", "9.8 m/s²", "20 m/s²", "Depende de la masa"], correcta: "9.8 m/s²", explicacion: "Es la gravedad." },
          { pregunta: "Si un objeto acelera, su velocidad:", opciones: ["Es constante", "Cambia", "Es cero", "Es negativa"], correcta: "Cambia", explicacion: "Eso significa acelerar." },
          { pregunta: "La fórmula de la distancia en MRU es:", opciones: ["d = v + t", "d = v × t", "d = v / t", "d = t / v"], correcta: "d = v × t", explicacion: "Velocidad por tiempo." }
        ]
      },
      {
        id: "cn5-3",
        titulo: "Electricidad y Magnetismo",
        icono: "🧲",
        imagen: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        contenido: `
          <h4>Ley de Ohm</h4>
          <div class="formula">V = I · R</div>
          <h4>Ley de Coulomb</h4>
          <div class="formula">F = k · q₁·q₂ / r²</div>
          <h4>Potencia eléctrica</h4>
          <div class="formula">P = V · I</div>
          <div class="ejemplo">
            <strong>Contexto:</strong> Instalaciones eléctricas en comunidades rurales de Chiapas.
          </div>
        `,
        actividades: [
          { pregunta: "La Ley de Ohm relaciona:", opciones: ["Masa y fuerza", "Voltaje, corriente y resistencia", "Energía y trabajo", "Calor y temperatura"], correcta: "Voltaje, corriente y resistencia", explicacion: "V = I × R." },
          { pregunta: "Si V=12V y R=4Ω, la corriente es:", opciones: ["3 A", "48 A", "0.33 A", "8 A"], correcta: "3 A", explicacion: "I = V/R = 12/4 = 3." },
          { pregunta: "La potencia eléctrica se mide en:", opciones: ["Volts", "Amperes", "Watts", "Ohms"], correcta: "Watts", explicacion: "P = V × I." },
          { pregunta: "¿Qué genera un campo magnético?", opciones: ["Cargas en reposo", "Cargas en movimiento", "La gravedad", "El calor"], correcta: "Cargas en movimiento", explicacion: "Corriente eléctrica." },
          { pregunta: "La ley que mide la fuerza entre cargas es:", opciones: ["Newton", "Ohm", "Coulomb", "Watt"], correcta: "Coulomb", explicacion: "F = k(q1q2)/r²." }
        ]
      },
      {
        id: "cn5-4",
        titulo: "Ondas y Sonido",
        icono: "🌊",
        imagen: "linear-gradient(135deg, #06b6d4, #0891b2)",
        contenido: `
          <div class="formula">v = λ · f</div>
          <h4>Tipos</h4>
          <ul>
            <li>Mecánicas: necesitan medio (sonido)</li>
            <li>Electromagnéticas: no necesitan medio (luz)</li>
          </ul>
          <h4>Fenómenos</h4>
          <ul>
            <li>Reflexión, refracción, difracción, interferencia</li>
          </ul>
        `,
        actividades: [
          { pregunta: "El sonido es una onda:", opciones: ["Electromagnética", "Mecánica", "Luminosa", "Nuclear"], correcta: "Mecánica", explicacion: "Necesita un medio (aire)." },
          { pregunta: "La luz es una onda:", opciones: ["Mecánica", "Electromagnética", "Sonora", "De gravedad"], correcta: "Electromagnética", explicacion: "Viaja en el vacío." },
          { pregunta: "La fórmula de la velocidad de onda es:", opciones: ["v = λ / f", "v = λ · f", "v = f / λ", "v = λ + f"], correcta: "v = λ · f", explicacion: "Longitud de onda por frecuencia." },
          { pregunta: "El eco es un fenómeno de:", opciones: ["Refracción", "Reflexión", "Difracción", "Interferencia"], correcta: "Reflexión", explicacion: "El sonido rebota." },
          { pregunta: "¿En qué medio viaja más rápido el sonido?", opciones: ["Aire", "Agua", "Acero", "Vacío"], correcta: "Acero", explicacion: "Los sólidos transmiten mejor las vibraciones." }
        ]
      },
      {
        id: "cn5-5",
        titulo: "Hidrostática y Fluidos",
        icono: "💧",
        imagen: "linear-gradient(135deg, #3b82f6, #2563eb)",
        contenido: `
          <div class="formula">
Pascal: P₁ = P₂ → F₁/A₁ = F₂/A₂<br>
Arquímedes: E = ρ · g · V<br>
Presión hidrostática: P = ρ · g · h
          </div>
          <div class="ejemplo">
            <strong>Contexto:</strong> Presas hidroeléctricas de Chiapas (Chicoasén, Malpaso).
          </div>
        `,
        actividades: [
          { pregunta: "El principio de Arquímedes explica:", opciones: ["La gravedad", "La flotación", "La electricidad", "El magnetismo"], correcta: "La flotación", explicacion: "El empuje del agua." },
          { pregunta: "La presión hidrostática aumenta con:", opciones: ["La altura", "La profundidad", "La masa", "El volumen"], correcta: "La profundidad", explicacion: "P = ρgh." },
          { pregunta: "¿Qué principio usan las prensas hidráulicas?", opciones: ["Pascal", "Arquímedes", "Newton", "Ohm"], correcta: "Pascal", explicacion: "La presión se transmite igual." },
          { pregunta: "La presión se mide en:", opciones: ["Newtons", "Pascales", "Joules", "Watts"], correcta: "Pascales", explicacion: "1 Pa = 1 N/m²." },
          { pregunta: "Si un objeto es más denso que el agua:", opciones: ["Flota", "Se hunde", "Se evapora", "Explota"], correcta: "Se hunde", explicacion: "Su peso supera el empuje." }
        ]
      },
      {
        id: "cn5-6",
        titulo: "El Universo y sus Fenómenos",
        icono: "🚀",
        imagen: "linear-gradient(135deg, #f43f5e, #e11d48)",
        contenido: `
          <h4>Teoría del Big Bang</h4>
          <p>Hace ~13,800 millones de años.</p>
          <h4>Cuerpos celestes</h4>
          <ul>
            <li>Estrellas, planetas, satélites</li>
            <li>Galaxias (Vía Láctea)</li>
            <li>Agujeros negros</li>
          </ul>
        `,
        actividades: [
          { pregunta: "La teoría más aceptada del origen del universo es:", opciones: ["Creacionismo", "Big Bang", "Big Crunch", "Estado estacionario"], correcta: "Big Bang", explicacion: "Una gran explosión inicial." },
          { pregunta: "Nuestra galaxia se llama:", opciones: ["Andrómeda", "Vía Láctea", "Sombrero", "Triángulo"], correcta: "Vía Láctea", explicacion: "Donde está el Sistema Solar." },
          { pregunta: "Un agujero negro tiene gravedad:", opciones: ["Débil", "Normal", "Extremadamente fuerte", "Cero"], correcta: "Extremadamente fuerte", explicacion: "Ni la luz escapa." },
          { pregunta: "El Sol es una:", opciones: ["Planeta", "Estrella", "Galaxia", "Cometa"], correcta: "Estrella", explicacion: "Es nuestra estrella principal." },
          { pregunta: "¿Cuántos planetas hay en el Sistema Solar?", opciones: ["7", "8", "9", "10"], correcta: "8", explicacion: "Plutón es planeta enano." }
        ]
      }
    ]
  },

  6: {
    titulo: "Organismos: estructuras y procesos. Herencia y evolución biológica",
    subtitulo: "Ciencias Naturales, Experimentales y Tecnología VI",
    semestre: "Sexto Semestre",
    clase: "s6",
    icono: "🧬",
    descripcion: "La célula, genética, herencia, evolución y biodiversidad de los organismos.",
    contexto: "Chiapas es un tesoro biológico: selvas, especies únicas y diversidad cultural.",
    temas: [
      {
        id: "cn6-1",
        titulo: "La Célula: Estructura y Función",
        icono: "🔵",
        imagen: "linear-gradient(135deg, #10b981, #059669)",
        contenido: `
          <h4>Tipos</h4>
          <ul>
            <li><strong>Procariota:</strong> sin núcleo (bacterias)</li>
            <li><strong>Eucariota:</strong> con núcleo</li>
          </ul>
          <h4>Organelos</h4>
          <ul>
            <li>Mitocondria → respiración</li>
            <li>Ribosoma → proteínas</li>
            <li>Cloroplasto → fotosíntesis</li>
            <li>Núcleo → ADN</li>
          </ul>
        `,
        actividades: [
          { pregunta: "La unidad básica de la vida es:", opciones: ["El átomo", "La célula", "El tejido", "El órgano"], correcta: "La célula", explicacion: "Todos los seres vivos están formados por células." },
          { pregunta: "Las células sin núcleo se llaman:", opciones: ["Eucariotas", "Procariotas", "Animales", "Vegetales"], correcta: "Procariotas", explicacion: "Ejemplo: las bacterias." },
          { pregunta: "El organelo que produce energía es:", opciones: ["Núcleo", "Ribosoma", "Mitocondria", "Cloroplasto"], correcta: "Mitocondria", explicacion: "Realiza la respiración celular." },
          { pregunta: "El cloroplasto es exclusivo de:", opciones: ["Animales", "Plantas", "Bacterias", "Hongos"], correcta: "Plantas", explicacion: "Realiza la fotosíntesis." },
          { pregunta: "El ADN se encuentra en:", opciones: ["La membrana", "El núcleo", "El citoplasma", "La pared"], correcta: "El núcleo", explicacion: "Es el material genético." }
        ]
      },
      {
        id: "cn6-2",
        titulo: "Genética y Herencia",
        icono: "🧬",
        imagen: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        contenido: `
          <h4>ADN</h4>
          <p>Doble hélice (Watson y Crick).</p>
          <h4>Leyes de Mendel</h4>
          <ol>
            <li>Uniformidad</li>
            <li>Segregación</li>
            <li>Distribución independiente</li>
          </ol>
          <div class="ejemplo">
            Cruce Aa × Aa → 25% AA, 50% Aa, 25% aa
          </div>
        `,
        actividades: [
          { pregunta: "El material genético es:", opciones: ["ARN", "ADN", "Proteína", "Lípido"], correcta: "ADN", explicacion: "Contiene la información hereditaria." },
          { pregunta: "¿Quiénes descubrieron la doble hélice del ADN?", opciones: ["Mendel y Darwin", "Watson y Crick", "Pasteur y Koch", "Newton y Einstein"], correcta: "Watson y Crick", explicacion: "En 1953." },
          { pregunta: "En un cruce Aa × Aa, ¿qué porcentaje es aa?", opciones: ["0%", "25%", "50%", "75%"], correcta: "25%", explicacion: "Solo uno de cuatro cuadros." },
          { pregunta: "Las leyes de la herencia fueron propuestas por:", opciones: ["Darwin", "Mendel", "Lamarck", "Hooke"], correcta: "Mendel", explicacion: "Con sus experimentos con chícharos." },
          { pregunta: "Un gen es:", opciones: ["Una célula", "Un segmento de ADN", "Una proteína", "Un órgano"], correcta: "Un segmento de ADN", explicacion: "Codifica un rasgo." }
        ]
      },
      {
        id: "cn6-3",
        titulo: "Evolución Biológica",
        icono: "🦕",
        imagen: "linear-gradient(135deg, #f59e0b, #d97706)",
        contenido: `
          <h4>Darwin</h4>
          <ul>
            <li>Variación entre individuos</li>
            <li>Selección natural</li>
            <li>Adaptación al medio</li>
          </ul>
          <h4>Evidencias</h4>
          <ul>
            <li>Fósiles, anatomía comparada</li>
            <li>Embriología, biología molecular</li>
          </ul>
        `,
        actividades: [
          { pregunta: "La teoría de la evolución por selección natural fue de:", opciones: ["Mendel", "Darwin", "Newton", "Galileo"], correcta: "Darwin", explicacion: "En su viaje en el Beagle." },
          { pregunta: "La selección natural favorece a los individuos:", opciones: ["Más débiles", "Mejor adaptados", "Más grandes", "Más lentos"], correcta: "Mejor adaptados", explicacion: "Sobreviven y se reproducen." },
          { pregunta: "¿Cuál es una evidencia de la evolución?", opciones: ["Fósiles", "La gravedad", "El clima", "La electricidad"], correcta: "Fósiles", explicacion: "Muestran especies extintas." },
          { pregunta: "La evolución ocurre a lo largo de:", opciones: ["Días", "Años", "Miles o millones de años", "Minutos"], correcta: "Miles o millones de años", explicacion: "Es un proceso lento." },
          { pregunta: "El órgano vestigial humano es:", opciones: ["El corazón", "El apéndice", "El hígado", "El cerebro"], correcta: "El apéndice", explicacion: "Era útil en ancestros herbívoros." }
        ]
      },
      {
        id: "cn6-4",
        titulo: "Biodiversidad",
        icono: "🌳",
        imagen: "linear-gradient(135deg, #14b8a6, #0d9488)",
        contenido: `
          <p>México es <strong>megadiverso</strong>: 5° lugar mundial.</p>
          <h4>Niveles</h4>
          <ul><li>Genética, de especies, de ecosistemas</li></ul>
          <h4>Amenazas</h4>
          <ul>
            <li>Deforestación, contaminación</li>
            <li>Cambio climático, especies invasoras</li>
          </ul>
        `,
        actividades: [
          { pregunta: "México ocupa el lugar ___ en biodiversidad mundial:", opciones: ["1°", "3°", "5°", "10°"], correcta: "5°", explicacion: "Es un país megadiverso." },
          { pregunta: "¿Cuántos niveles de biodiversidad hay?", opciones: ["1", "2", "3", "4"], correcta: "3", explicacion: "Genética, especies y ecosistemas." },
          { pregunta: "Una amenaza a la biodiversidad es:", opciones: ["La reforestación", "La deforestación", "El reciclaje", "La conservación"], correcta: "La deforestación", explicacion: "Destruye hábitats." },
          { pregunta: "Las especies invasoras:", opciones: ["Ayudan al ecosistema", "Desplazan a especies nativas", "Son inofensivas", "Son endémicas"], correcta: "Desplazan a especies nativas", explicacion: "Compiten por recursos." },
          { pregunta: "La biodiversidad genética se refiere a:", opciones: ["Variedad de ecosistemas", "Variedad de genes", "Variedad de especies", "Variedad de climas"], correcta: "Variedad de genes", explicacion: "Diferencias dentro de una especie." }
        ]
      },
      {
        id: "cn6-5",
        titulo: "Ecosistemas de Chiapas",
        icono: "🌴",
        imagen: "linear-gradient(135deg, #22c55e, #16a34a)",
        contenido: `
          <h4>Ecosistemas</h4>
          <ul>
            <li>Selva alta perennifolia: Selva Lacandona</li>
            <li>Selva baja caducifolia: Depresión Central</li>
            <li>Bosque de niebla: Altos de Chiapas</li>
            <li>Manglares: Costa del Pacífico</li>
          </ul>
          <div class="ejemplo">
            La Selva Lacandona alberga el 20% de las especies de México.
          </div>
        `,
        actividades: [
          { pregunta: "La Selva Lacandona es un ejemplo de:", opciones: ["Manglar", "Selva alta perennifolia", "Desierto", "Bosque de niebla"], correcta: "Selva alta perennifolia", explicacion: "Es húmeda y siempre verde." },
          { pregunta: "El bosque de niebla se ubica en:", opciones: ["La costa", "Los Altos de Chiapas", "La selva", "El mar"], correcta: "Los Altos de Chiapas", explicacion: "Zonas montañosas húmedas." },
          { pregunta: "Los manglares están en:", opciones: ["La costa del Pacífico", "La selva", "La montaña", "El desierto"], correcta: "La costa del Pacífico", explicacion: "Zonas costeras tropicales." },
          { pregunta: "La selva baja caducifolia está en:", opciones: ["Depresión Central", "Altos de Chiapas", "Costa", "Norte"], correcta: "Depresión Central", explicacion: "Pierde hojas en sequía." },
          { pregunta: "¿Qué porcentaje de especies de México alberga la Selva Lacandona?", opciones: ["5%", "10%", "20%", "50%"], correcta: "20%", explicacion: "Es un hotspot de biodiversidad." }
        ]
      },
      {
        id: "cn6-6",
        titulo: "Salud y Enfermedad",
        icono: "🏥",
        imagen: "linear-gradient(135deg, #ef4444, #dc2626)",
        contenido: `
          <h4>Sistema inmunológico</h4>
          <p>Barreras físicas, células y anticuerpos.</p>
          <h4>Enfermedades en Chiapas</h4>
          <ul>
            <li>Dengue, zika, chikungunya</li>
            <li>Gastrointestinales, desnutrición</li>
          </ul>
          <div class="ejemplo">
            <strong>Prevención:</strong> Eliminar criaderos, lavar manos, agua potable.
          </div>
        `,
        actividades: [
          { pregunta: "El sistema que nos defiende de enfermedades es:", opciones: ["Digestivo", "Inmunológico", "Respiratorio", "Óseo"], correcta: "Inmunológico", explicacion: "Produce anticuerpos." },
          { pregunta: "¿Qué enfermedad transmite el mosquito Aedes?", opciones: ["Gripe", "Dengue", "Tuberculosis", "Sarampión"], correcta: "Dengue", explicacion: "Es común en zonas cálidas." },
          { pregunta: "Una forma de prevenir el dengue es:", opciones: ["Acumular agua", "Eliminar criaderos", "Comer dulces", "Dormir mucho"], correcta: "Eliminar criaderos", explicacion: "El mosquito se reproduce en agua estancada." },
          { pregunta: "Las enfermedades gastrointestinales se previenen con:", opciones: ["Lavado de manos", "Fumar", "No bañarse", "Comer en la calle"], correcta: "Lavado de manos", explicacion: "Evita infecciones." },
          { pregunta: "La desnutrición se debe a:", opciones: ["Exceso de comida", "Falta de nutrientes", "Mucho ejercicio", "Dormir poco"], correcta: "Falta de nutrientes", explicacion: "El cuerpo no recibe lo necesario." }
        ]
      }
    ]
  },
  
  7: {
    titulo: "Taller de Ciencias I",
    subtitulo: "Prácticas de ciencia",
    semestre: "Segundo Semestre",
    clase: "s2",
    icono: "🔬",
    descripcion: "Investiga, experimenta y vincula la ciencia con tu comunidad.",
    contexto: "El taller te invita a explorar los fenómenos naturales de tu entorno y a proponer soluciones a problemas reales de tu comunidad.",
    temas: [
      {
        id: "tc1-1",
        titulo: "La Ciencia como Investigación",
        icono: "🔍",
        imagen: "linear-gradient(135deg, #0ea5e9, #0284c7)",
        contenido: `
          <p>El <strong>Taller de Ciencias</strong> te invita a convertirte en un investigador de tu propio entorno.</p>
          <h4>Prácticas de ciencia e ingeniería</h4>
          <ul>
            <li>Plantear preguntas y definir problemas</li>
            <li>Desarrollar y usar modelos</li>
            <li>Planificar y llevar a cabo investigaciones</li>
            <li>Analizar e interpretar datos</li>
            <li>Usar pensamiento matemático y computacional</li>
            <li>Construir explicaciones y diseñar soluciones</li>
            <li>Argumentar a partir de evidencias</li>
            <li>Obtener, evaluar y comunicar información</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto Chiapas:</strong> En el CEMSaD Sombra Carrizal, estudiantes usaron el cultivo de maíz como eje articulador para aprender el método científico.
          </div>
        `,
        actividades: [
          { pregunta: "El primer paso de una investigación científica es:", opciones: ["Concluir", "Plantear preguntas", "Publicar", "Inventar"], correcta: "Plantear preguntas", explicacion: "Nace de la curiosidad." },
          { pregunta: "¿Qué se hace con los datos obtenidos?", opciones: ["Ignorarlos", "Analizarlos e interpretarlos", "Borrar", "Venderlos"], correcta: "Analizarlos e interpretarlos", explicacion: "Para sacar conclusiones." },
          { pregunta: "Argumentar a partir de evidencias significa:", opciones: ["Inventar", "Usar datos reales", "Copiar", "Adivinar"], correcta: "Usar datos reales", explicacion: "La ciencia se basa en pruebas." },
          { pregunta: "Un modelo científico sirve para:", opciones: ["Adornar", "Explicar un fenómeno", "Vender", "Confundir"], correcta: "Explicar un fenómeno", explicacion: "Simplifica la realidad." },
          { pregunta: "El taller busca vincular la ciencia con:", opciones: ["El espacio", "Tu comunidad", "El pasado", "La ficción"], correcta: "Tu comunidad", explicacion: "Resolver problemas locales." }
        ]
      },
      {
        id: "tc1-2",
        titulo: "La Materia en mi Comunidad",
        icono: "🧱",
        imagen: "linear-gradient(135deg, #10b981, #059669)",
        contenido: `
          <p>Explora las propiedades de la materia que te rodea: el suelo, el agua, el aire.</p>
          <h4>Proyecto sugerido: "La basura"</h4>
          <p>Los materiales del COBACH usan la problemática de la basura como eje para estudiar las propiedades de la materia.</p>
          <h4>Actividades prácticas</h4>
          <ul>
            <li>Clasificar residuos según sus propiedades</li>
            <li>Medir densidad de diferentes materiales</li>
            <li>Identificar cambios físicos y químicos en la cocina</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto:</strong> Estudiantes del EMSAD 170 Sombra Carrizal elaboraron invernaderos con materiales reciclables para sembrar café.
          </div>
        `,
        actividades: [
          { pregunta: "Clasificar la basura ayuda a:", opciones: ["Contaminar más", "Reciclar", "Quemar todo", "Enterrarla"], correcta: "Reciclar", explicacion: "Separa plásticos, orgánicos, etc." },
          { pregunta: "¿Qué propiedad permite saber si un material es más pesado?", opciones: ["Color", "Densidad", "Olor", "Sabor"], correcta: "Densidad", explicacion: "Masa por unidad de volumen." },
          { pregunta: "Un cambio químico en la cocina es:", opciones: ["Derretir mantequilla", "Cortar cebolla", "Quemar tortillas", "Servir agua"], correcta: "Quemar tortillas", explicacion: "Cambia la composición." },
          { pregunta: "Hacer un invernadero con material reciclable es un ejemplo de:", opciones: ["Contaminación", "Sustentabilidad", "Desperdicio", "Consumo"], correcta: "Sustentabilidad", explicacion: "Reutiliza recursos." },
          { pregunta: "El suelo es un recurso:", opciones: ["Infinito", "Finito y vital", "Inútil", "Artificial"], correcta: "Finito y vital", explicacion: "Hay que cuidarlo." }
        ]
      },
      {
        id: "tc1-3",
        titulo: "Energía en Acción",
        icono: "⚡",
        imagen: "linear-gradient(135deg, #f59e0b, #d97706)",
        contenido: `
          <p>Investiga cómo la energía se manifiesta en tu comunidad.</p>
          <h4>Progresión 1:</h4>
          <p>"A través de la observación de su contexto, las y los estudiantes identificarán un fenómeno natural de su interés que involucre el flujo de energía en sistemas".</p>
          <h4>Actividades</h4>
          <ul>
            <li>Recorrido por la comunidad para identificar flujos de energía</li>
            <li>Observar el ciclo del agua en tu región</li>
            <li>Analizar cómo se genera la electricidad en Chiapas</li>
          </ul>
        `,
        actividades: [
          { pregunta: "¿Cómo se genera la mayor parte de la electricidad en Chiapas?", opciones: ["Con carbón", "Con presas hidroeléctricas", "Con energía nuclear", "Con placas solares"], correcta: "Con presas hidroeléctricas", explicacion: "El río Grijalva es clave." },
          { pregunta: "El ciclo del agua es un ejemplo de:", opciones: ["Flujo de energía", "Solo lluvia", "Magia", "Materia inerte"], correcta: "Flujo de energía", explicacion: "Usa el calor solar." },
          { pregunta: "Una fuente de energía en tu comunidad podría ser:", opciones: ["El sol", "El humo", "La basura quemada", "El ruido"], correcta: "El sol", explicacion: "Se puede usar con paneles." },
          { pregunta: "Identificar flujos de energía ayuda a:", opciones: ["Ahorrar y cuidar el ambiente", "Gastar más", "Contaminar", "Nada"], correcta: "Ahorrar y cuidar el ambiente", explicacion: "Optimiza su uso." },
          { pregunta: "Las presas hidroeléctricas usan la energía de:", opciones: ["La tierra", "El agua en movimiento", "El viento", "El sol"], correcta: "El agua en movimiento", explicacion: "La fuerza del agua hace girar turbinas." }
        ]
      },
      {
        id: "tc1-4",
        titulo: "Ciencia, Tecnología y Sociedad",
        icono: "🌍",
        imagen: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        contenido: `
          <p>Reflexiona sobre cómo la ciencia y la tecnología impactan tu vida y tu comunidad.</p>
          <h4>Preguntas para reflexionar</h4>
          <ul>
            <li>¿Cómo ha cambiado la tecnología la forma de vida en tu comunidad?</li>
            <li>¿Qué problemas ambientales identificas en tu entorno?</li>
            <li>¿Qué soluciones científicas o tecnológicas propondrías?</li>
          </ul>
          <div class="ejemplo">
            <strong>Proyecto:</strong> "Casa sustentable" con adobe, plantas acuáticas y paneles solares, ganador del 2° lugar en la Feria Mexicana de Ciencias e Ingenierías 2024.
          </div>
        `,
        actividades: [
          { pregunta: "Una 'casa sustentable' usa:", opciones: ["Mucha energía", "Paneles solares y adobe", "Solo cemento", "Plásticos"], correcta: "Paneles solares y adobe", explicacion: "Busca ahorrar recursos." },
          { pregunta: "La tecnología impacta en la sociedad:", opciones: ["No", "Sí, en la forma de vivir", "Solo en las ciudades", "Solo en el pasado"], correcta: "Sí, en la forma de vivir", explicacion: "Cambia la comunicación y el trabajo." },
          { pregunta: "¿Qué problema ambiental es común en comunidades?", opciones: ["La basura", "El exceso de aire puro", "Sobrepoblación de árboles", "Demasiada agua limpia"], correcta: "La basura", explicacion: "Es un reto principal." },
          { pregunta: "Para resolver un problema ambiental se necesita:", opciones: ["Ignorarlo", "Ciencia y tecnología", "Solo fuerza", "Magia"], correcta: "Ciencia y tecnología", explicacion: "Buscan soluciones prácticas." },
          { pregunta: "El adobe es un material:", opciones: ["Tradicional y sustentable", "De lujo", "Contaminante", "Metálico"], correcta: "Tradicional y sustentable", explicacion: "Usa tierra local." }
        ]
      }
    ]
  },

  8: {
    titulo: "Taller de Ciencias II",
    subtitulo: "Proyectos de investigación aplicados",
    semestre: "Tercer Semestre",
    clase: "s3",
    icono: "🔬",
    descripcion: "Desarrolla proyectos de investigación sobre el flujo de energía en tu entorno.",
    contexto: "Consolida tus habilidades de investigación aplicando el método científico a problemas reales de tu comunidad.",
    temas: [
      {
        id: "tc2-1",
        titulo: "Proyecto de Investigación",
        icono: "📋",
        imagen: "linear-gradient(135deg, #0ea5e9, #0284c7)",
        contenido: `
          <p>Diseña y ejecuta un proyecto de investigación sobre el flujo de energía en tu entorno.</p>
          <h4>Fases del proyecto</h4>
          <ol>
            <li>Identificación de un problema o fenómeno</li>
            <li>Formulación de preguntas de investigación</li>
            <li>Planteamiento de hipótesis</li>
            <li>Diseño experimental</li>
            <li>Recolección de datos</li>
            <li>Análisis e interpretación</li>
            <li>Comunicación de resultados</li>
          </ol>
        `,
        actividades: [
          { pregunta: "El proyecto inicia con:", opciones: ["Un problema o fenómeno", "Una conclusión", "Un premio", "Un experimento"], correcta: "Un problema o fenómeno", explicacion: "Es lo que despierta la curiosidad." },
          { pregunta: "Una hipótesis es:", opciones: ["Una ley", "Una suposición a probar", "Un dato final", "Un equipo"], correcta: "Una suposición a probar", explicacion: "Debe validarse con la experimentación." },
          { pregunta: "El diseño experimental debe ser:", opciones: ["Al azar", "Controlado y planificado", "Sin reglas", "Muy rápido"], correcta: "Controlado y planificado", explicacion: "Para que sea confiable." },
          { pregunta: "La recolección de datos requiere:", opciones: ["Medir y registrar", "Adivinar", "Copiar", "Omitir"], correcta: "Medir y registrar", explicacion: "Es la base de la evidencia." },
          { pregunta: "El último paso es:", opciones: ["Llorar", "Comunicar resultados", "Romper todo", "Empezar de nuevo"], correcta: "Comunicar resultados", explicacion: "Para que la ciencia avance." }
        ]
      },
      {
        id: "tc2-2",
        titulo: "Flujo de Energía en Ecosistemas",
        icono: "🌳",
        imagen: "linear-gradient(135deg, #22c55e, #16a34a)",
        contenido: `
          <p>Investiga cómo fluye la energía en los ecosistemas de Chiapas.</p>
          <h4>Actividades</h4>
          <ul>
            <li>Identificar cadenas tróficas en tu comunidad</li>
            <li>Medir la temperatura y energía en diferentes ecosistemas</li>
            <li>Analizar el impacto humano en el flujo de energía</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto:</strong> La Selva Lacandona es un laboratorio natural para estudiar el flujo de energía en ecosistemas tropicales.
          </div>
        `,
        actividades: [
          { pregunta: "La energía fluye en un ecosistema a través de:", opciones: ["Cadenas tróficas", "El suelo", "Las rocas", "El viento"], correcta: "Cadenas tróficas", explicacion: "Quién come a quién." },
          { pregunta: "El impacto humano en el flujo de energía puede ser:", opciones: ["Positivo", "Negativo (deforestación)", "Nulo", "Invisible"], correcta: "Negativo (deforestación)", explicacion: "Altera las cadenas." },
          { pregunta: "Un ecosistema tropical en Chiapas es:", opciones: ["La tundra", "La Selva Lacandona", "El desierto", "El polo"], correcta: "La Selva Lacandona", explicacion: "Es un bosque húmedo." },
          { pregunta: "La principal fuente de energía de los ecosistemas es:", opciones: ["El agua", "El sol", "El viento", "Las rocas"], correcta: "El sol", explicacion: "Impulsa la fotosíntesis." },
          { pregunta: "La temperatura es una medida de:", opciones: ["Masa", "Energía interna", "Volumen", "Peso"], correcta: "Energía interna", explicacion: "Qué tan caliente está." }
        ]
      },
      {
        id: "tc2-3",
        titulo: "Divulgación Científica",
        icono: "📢",
        imagen: "linear-gradient(135deg, #f43f5e, #e11d48)",
        contenido: `
          <p>Aprende a comunicar tus hallazgos científicos a tu comunidad.</p>
          <h4>Formas de divulgación</h4>
          <ul>
            <li>Carteles científicos</li>
            <li>Presentaciones orales</li>
            <li>Videos educativos</li>
            <li>Redes sociales</li>
            <li>Ferias de ciencia</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto:</strong> La Feria Mexicana de Ciencias e Ingenierías es una oportunidad para compartir tus proyectos.
          </div>
        `,
        actividades: [
          { pregunta: "La divulgación científica sirve para:", opciones: ["Guardar secretos", "Compartir conocimiento", "Vender", "Confundir"], correcta: "Compartir conocimiento", explicacion: "Hace la ciencia accesible." },
          { pregunta: "Un cartel científico debe tener:", opciones: ["Solo letras", "Título, datos y conclusiones", "Solo dibujos", "Nada"], correcta: "Título, datos y conclusiones", explicacion: "Resume la investigación." },
          { pregunta: "Las ferias de ciencia permiten:", opciones: ["Mostrar proyectos", "Vender comida", "Dormir", "Pelear"], correcta: "Mostrar proyectos", explicacion: "Se comparten hallazgos." },
          { pregunta: "Un video educativo es una forma de:", opciones: ["Divulgación", "Entretenimiento sin valor", "Pérdida de tiempo", "Chisme"], correcta: "Divulgación", explicacion: "Enseña de forma visual." },
          { pregunta: "Comunicar resultados es el paso final de:", opciones: ["El método científico", "La lectura", "El juego", "La escritura"], correcta: "El método científico", explicacion: "Difunde el conocimiento." }
        ]
      }
    ]
  }
};