/* ==========================================================
   DATA - Química I y II
   Alineado al plan de estudios COBACH Chiapas 2026
   Componente: Formación Básica - Ciencias Experimentales
   Gamificado con Actividades e Imágenes
========================================================== */

const QUIMICA = {
  1: {
    titulo: "Química I",
    semestre: "Todos",
    clase: "s1",
    icono: "⚗️",
    descripcion: "Introducción a la química, estructura atómica, tabla periódica y enlaces.",
    contexto: "La química está en todo: en el café de Chiapas, en el suelo de tu comunidad, en el agua de los ríos y en los medicamentos. Comprenderla te permite entender el mundo que te rodea.",

    temas: [
      {
        id: "q1-1",
        titulo: "La Química como Ciencia",
        icono: "🔬",
        imagen: "linear-gradient(135deg, #0ea5e9, #3b82f6)",
        contenido: `
          <p>La <strong>Química</strong> es la ciencia que estudia la composición, estructura, propiedades y transformaciones de la materia.</p>
          
          <h4>Objeto de estudio</h4>
          <ul>
            <li>La <strong>materia</strong>: todo lo que tiene masa y ocupa un volumen</li>
            <li>Los <strong>cambios</strong> que experimenta la materia</li>
            <li>La <strong>energía</strong> involucrada en esas transformaciones</li>
          </ul>
          
          <h4>Relación con otras ciencias</h4>
          <ul>
            <li><strong>Física:</strong> estudia las leyes que rigen la materia y energía</li>
            <li><strong>Biología:</strong> los procesos químicos de los seres vivos</li>
            <li><strong>Geología:</strong> la composición de la Tierra</li>
            <li><strong>Medicina:</strong> fármacos y tratamientos</li>
          </ul>
          
          <h4>Desarrollo histórico</h4>
          <p>Desde la alquimia medieval hasta la química moderna, la humanidad ha buscado comprender la naturaleza de la materia. Lavoisier, Dalton, Mendeleiev y Marie Curie son algunos de los científicos que transformaron esta disciplina.</p>
          
          <div class="ejemplo">
            <strong>Contexto Chiapas:</strong> La fermentación del café y el cacao, productos emblemáticos de Chiapas, son procesos químicos que ocurren gracias a reacciones bioquímicas. ¡La química está en tu comunidad!
          </div>
        `,
        actividades: [
          {
            pregunta: "¿Qué estudia principalmente la Química?",
            opciones: ["Los astros", "La materia y sus transformaciones", "Los seres vivos", "El movimiento"],
            correcta: "La materia y sus transformaciones",
            explicacion: "La química se enfoca en la composición, estructura y cambios de la materia."
          },
          {
            pregunta: "¿Qué producto chiapaneco fermenta gracias a procesos químicos?",
            opciones: ["El maíz", "El café", "La calabaza", "El chile"],
            correcta: "El café",
            explicacion: "La fermentación del café es un proceso bioquímico clave para su sabor."
          },
          {
            pregunta: "¿Quién es considerado el padre de la química moderna por la Ley de Conservación de la Masa?",
            opciones: ["Einstein", "Newton", "Lavoisier", "Dalton"],
            correcta: "Lavoisier",
            explicacion: "Antoine Lavoisier demostró que la masa se conserva en las reacciones."
          },
          {
            pregunta: "¿Cuál de estas ciencias se relaciona con la química para crear medicamentos?",
            opciones: ["La medicina", "La astronomía", "La historia", "La música"],
            correcta: "La medicina",
            explicacion: "La farmacología y medicina dependen de la química."
          },
          {
            pregunta: "La química estudia la energía involucrada en los cambios de la materia. Verdadero o falso:",
            opciones: ["Verdadero", "Falso"],
            correcta: "Verdadero",
            explicacion: "La termoquímica estudia estos cambios de energía."
          }
        ]
      },
      {
        id: "q1-2",
        titulo: "Método Científico en Química",
        icono: "🧪",
        imagen: "linear-gradient(135deg, #10b981, #059669)",
        contenido: `
          <p>El <strong>método científico</strong> es el procedimiento ordenado que usan los químicos para investigar fenómenos naturales.</p>
          
          <h4>Pasos del método científico</h4>
          <ol>
            <li><strong>Observación:</strong> identificar un fenómeno o problema</li>
            <li><strong>Planteamiento del problema:</strong> formular una pregunta clara</li>
            <li><strong>Hipótesis:</strong> proponer una posible explicación</li>
            <li><strong>Experimentación:</strong> diseñar y realizar pruebas</li>
            <li><strong>Análisis de datos:</strong> organizar y evaluar resultados</li>
            <li><strong>Conclusión:</strong> aceptar o rechazar la hipótesis</li>
            <li><strong>Comunicación:</strong> compartir los hallazgos</li>
          </ol>
          
          <h4>Utilidad en ciencias experimentales</h4>
          <p>El método científico permite proponer soluciones a problemas del entorno, desde la contaminación del agua hasta el uso de fertilizantes en la agricultura.</p>
          
          <div class="ejemplo">
            <strong>Ejemplo contextualizado:</strong> ¿Por qué el agua del río de tu comunidad cambia de color? Hipótesis → toma de muestras → análisis → conclusión.
          </div>
        `,
        actividades: [
          {
            pregunta: "¿Cuál es el primer paso del método científico?",
            opciones: ["Hipótesis", "Experimentación", "Observación", "Conclusión"],
            correcta: "Observación",
            explicacion: "Todo inicia notando un fenómeno en nuestro entorno."
          },
          {
            pregunta: "Una posible explicación a un fenómeno se llama:",
            opciones: ["Ley", "Teoría", "Hipótesis", "Conclusión"],
            correcta: "Hipótesis",
            explicacion: "Es una suposición que debe ser probada."
          },
          {
            pregunta: "Si tomas muestras del agua del río Grijalva para analizarlas, estás en la etapa de:",
            opciones: ["Observación", "Experimentación", "Comunicación", "Hipótesis"],
            correcta: "Experimentación",
            explicacion: "Es la fase práctica donde se recolectan datos."
          },
          {
            pregunta: "¿Para qué sirve el método científico?",
            opciones: ["Para memorizar", "Para resolver problemas de forma ordenada", "Para hacer magia", "Para no estudiar"],
            correcta: "Para resolver problemas de forma ordenada",
            explicacion: "Nos da un camino lógico hacia la verdad científica."
          },
          {
            pregunta: "Si los resultados no apoyan tu hipótesis, ¿qué haces?",
            opciones: ["Mientes", "La rechazas o modificas", "Lloras", "Ignoras los datos"],
            correcta: "La rechazas o modificas",
            explicacion: "La ciencia se basa en la evidencia, si falla, se replantea."
          }
        ]
      },
      {
        id: "q1-3",
        titulo: "Propiedades de la Materia y su Medición",
        icono: "📏",
        imagen: "linear-gradient(135deg, #f59e0b, #d97706)",
        contenido: `
          <p>La <strong>materia</strong> es todo lo que tiene masa y ocupa un volumen en el espacio.</p>
          
          <h4>Propiedades generales</h4>
          <ul>
            <li><strong>Masa:</strong> cantidad de materia (kg)</li>
            <li><strong>Volumen:</strong> espacio que ocupa (m³, L)</li>
            <li><strong>Inercia:</strong> resistencia al cambio de movimiento</li>
            <li><strong>Impenetrabilidad:</strong> dos cuerpos no ocupan el mismo espacio</li>
          </ul>
          
          <h4>Propiedades específicas</h4>
          <ul>
            <li><strong>Físicas:</strong> densidad, punto de fusión, punto de ebullición, color, dureza</li>
            <li><strong>Químicas:</strong> reactividad, combustibilidad, oxidación</li>
          </ul>
          
          <h4>Sistema Internacional de Unidades (SI)</h4>
          <div class="formula">
Longitud: metro (m)<br>
Masa: kilogramo (kg)<br>
Tiempo: segundo (s)<br>
Temperatura: kelvin (K)<br>
Cantidad de sustancia: mol (mol)
          </div>
          
          <h4>Instrumentos de medición</h4>
          <ul>
            <li><strong>Balanza:</strong> masa (g, kg)</li>
            <li><strong>Probeta:</strong> volumen de líquidos (mL, L)</li>
            <li><strong>Termómetro:</strong> temperatura (°C, K)</li>
            <li><strong>Vernier:</strong> longitudes pequeñas (mm)</li>
          </ul>
          
          <div class="ejemplo">
            <strong>Contexto:</strong> Medición de temperatura en Tuxtla Gutiérrez (35°C) vs San Cristóbal de las Casas (18°C).
          </div>
        `,
        actividades: [
          {
            pregunta: "¿Qué propiedad es específica de la materia?",
            opciones: ["Masa", "Volumen", "Densidad", "Inercia"],
            correcta: "Densidad",
            explicacion: "La densidad es una propiedad específica que depende del material."
          },
          {
            pregunta: "¿Qué instrumento usarías para medir la masa de un reactivo?",
            opciones: ["Probeta", "Termómetro", "Balanza", "Vernier"],
            correcta: "Balanza",
            explicacion: "La balanza mide la masa en gramos o kilogramos."
          },
          {
            pregunta: "La temperatura en el SI se mide en:",
            opciones: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
            correcta: "Kelvin",
            explicacion: "El Kelvin es la unidad fundamental de temperatura."
          },
          {
            pregunta: "El espacio que ocupa un cuerpo es su:",
            opciones: ["Masa", "Volumen", "Densidad", "Peso"],
            correcta: "Volumen",
            explicacion: "El volumen es el espacio tridimensional ocupado."
          },
          {
            pregunta: "Si un material se oxida fácilmente, tiene una propiedad:",
            opciones: ["Física", "Química", "General", "Extensiva"],
            correcta: "Química",
            explicacion: "La oxidación es un cambio en la naturaleza química del material."
          }
        ]
      },
      {
        id: "q1-4",
        titulo: "Estados de Agregación de la Materia",
        icono: "💧",
        imagen: "linear-gradient(135deg, #06b6d4, #0891b2)",
        contenido: `
          <h4>Los tres estados clásicos</h4>
          <ul>
            <li><strong>Sólido:</strong> forma y volumen definidos. Fuerzas de atracción fuertes. Ej: hielo, roca</li>
            <li><strong>Líquido:</strong> volumen definido, forma variable. Fuerzas intermedias. Ej: agua, aceite</li>
            <li><strong>Gaseoso:</strong> forma y volumen variables. Fuerzas débiles. Ej: vapor de agua, aire</li>
          </ul>
          
          <h4>Cambios de estado</h4>
          <div class="formula">
Fusión: sólido → líquido (absorbe calor)<br>
Solidificación: líquido → sólido (libera calor)<br>
Evaporación: líquido → gas (absorbe calor)<br>
Condensación: gas → líquido (libera calor)<br>
Sublimación: sólido → gas (absorbe calor)<br>
Deposición: gas → sólido (libera calor)
          </div>
          
          <div class="ejemplo">
            <strong>Contexto Chiapas:</strong> El ciclo del agua en la Selva Lacandona: evaporación en los ríos, condensación en las montañas y precipitación en forma de lluvia.
          </div>
        `,
        actividades: [
          {
            pregunta: "El paso de sólido a líquido se llama:",
            opciones: ["Evaporación", "Fusión", "Condensación", "Sublimación"],
            correcta: "Fusión",
            explicacion: "Ejemplo: el hielo derritiéndose."
          },
          {
            pregunta: "¿En qué estado las fuerzas de atracción son más débiles?",
            opciones: ["Sólido", "Líquido", "Gaseoso", "Plasma"],
            correcta: "Gaseoso",
            explicacion: "Las partículas están muy separadas y se mueven libremente."
          },
          {
            pregunta: "El paso directo de sólido a gas se llama:",
            opciones: ["Sublimación", "Fusión", "Solidificación", "Evaporación"],
            correcta: "Sublimación",
            explicacion: "Ejemplo: el hielo seco."
          },
          {
            pregunta: "Cuando el vapor de agua se convierte en gotas de agua, ocurre la:",
            opciones: ["Evaporación", "Condensación", "Fusión", "Sublimación"],
            correcta: "Condensación",
            explicacion: "El gas pierde calor y se vuelve líquido."
          },
          {
            pregunta: "¿Qué estado tiene volumen definido pero forma variable?",
            opciones: ["Sólido", "Líquido", "Gaseoso", "Ninguno"],
            correcta: "Líquido",
            explicacion: "Los líquidos toman la forma del recipiente."
          }
        ]
      },
      {
        id: "q1-5",
        titulo: "Clasificación de la Materia: Mezclas y Sustancias Puras",
        icono: "🧱",
        imagen: "linear-gradient(135deg, #a855f7, #9333ea)",
        contenido: `
          <h4>Sustancias puras</h4>
          <ul>
            <li><strong>Elementos:</strong> no se pueden descomponer en sustancias más simples. Ej: Fe, O, H, C, Au</li>
            <li><strong>Compuestos:</strong> formados por dos o más elementos en proporción fija. Ej: H₂O, NaCl, CO₂</li>
          </ul>
          
          <h4>Mezclas</h4>
          <ul>
            <li><strong>Homogéneas:</strong> componentes no se distinguen a simple vista. Ej: agua salada, aire, café filtrado</li>
            <li><strong>Heterogéneas:</strong> componentes se distinguen a simple vista. Ej: granito, ensalada, agua con aceite</li>
          </ul>
          
          <h4>Métodos de separación</h4>
          <ul>
            <li><strong>Filtración:</strong> separa sólido de líquido</li>
            <li><strong>Destilación:</strong> separa líquidos con diferente punto de ebullición</li>
            <li><strong>Decantación:</strong> separa líquidos inmiscibles</li>
            <li><strong>Tamizado:</strong> separa sólidos de diferente tamaño</li>
            <li><strong>Evaporación:</strong> separa sólido disuelto de líquido</li>
          </ul>
          
          <div class="ejemplo">
            <strong>Práctica contextualizada:</strong> Separar sal de agua de mar mediante evaporación solar. ¡Útil para comunidades costeras de Chiapas!
          </div>
        `,
        actividades: [
          {
            pregunta: "¿Cuál es una mezcla homogénea?",
            opciones: ["Agua con aceite", "Granito", "Agua salada", "Ensalada"],
            correcta: "Agua salada",
            explicacion: "Sus componentes no se distinguen a simple vista."
          },
          {
            pregunta: "El oro (Au) es un ejemplo de:",
            opciones: ["Compuesto", "Mezcla", "Elemento", "Solución"],
            correcta: "Elemento",
            explicacion: "No se puede descomponer en otras sustancias."
          },
          {
            pregunta: "¿Qué método usarías para separar agua y arena?",
            opciones: ["Destilación", "Filtración", "Evaporación", "Decantación"],
            correcta: "Filtración",
            explicacion: "La arena queda atrapada en el filtro."
          },
          {
            pregunta: "El agua (H₂O) es un ejemplo de:",
            opciones: ["Elemento", "Compuesto", "Mezcla heterogénea", "Átomo"],
            correcta: "Compuesto",
            explicacion: "Está formada por dos elementos en proporción fija."
          },
          {
            pregunta: "El aire que respiramos es una mezcla:",
            opciones: ["Heterogénea", "Homogénea", "Pura", "Compuesta"],
            correcta: "Homogénea",
            explicacion: "Es una mezcla de gases que no se distinguen."
          }
        ]
      }
    ],
    temasAtómicos: [
      {
        id: "q1-6",
        titulo: "El Átomo y sus Partículas Subatómicas",
        icono: "⚛️",
        imagen: "linear-gradient(135deg, #ec4899, #db2777)",
        contenido: `
          <p>El <strong>átomo</strong> es la unidad más pequeña de un elemento que conserva sus propiedades químicas.</p>
          
          <h4>Partículas subatómicas</h4>
          <ul>
            <li><strong>Protón:</strong> carga positiva (+), se encuentra en el núcleo</li>
            <li><strong>Neutrón:</strong> sin carga, se encuentra en el núcleo</li>
            <li><strong>Electrón:</strong> carga negativa (-), gira alrededor del núcleo</li>
          </ul>
          
          <h4>Número atómico (Z) y número de masa (A)</h4>
          <div class="formula">
Z = número de protones = número de electrones (átomo neutro)<br>
A = número de protones + número de neutrones<br>
Neutrones = A - Z
          </div>
          
          <h4>Isótopos</h4>
          <p>Átomos del mismo elemento con diferente número de neutrones. Ej: Carbono-12, Carbono-14</p>
          
          <div class="ejemplo">
            <strong>Ejemplo:</strong> El carbono (C) tiene Z=6 y A=12. Neutrones = 12 - 6 = 6.
          </div>
        `,
        actividades: [
          {
            pregunta: "¿Qué partícula del átomo tiene carga positiva?",
            opciones: ["Electrón", "Neutrón", "Protón", "Fotón"],
            correcta: "Protón",
            explicacion: "Los protones están en el núcleo con carga +."
          },
          {
            pregunta: "Si el número de masa es 23 y los protones son 11, ¿cuántos neutrones hay?",
            opciones: ["11", "12", "23", "34"],
            correcta: "12",
            explicacion: "Neutrones = A - Z = 23 - 11 = 12."
          },
          {
            pregunta: "Los electrones giran alrededor del:",
            opciones: ["Protón", "Núcleo", "Neutrón", "Átomo"],
            correcta: "Núcleo",
            explicacion: "Están en los orbitales alrededor del núcleo."
          },
          {
            pregunta: "¿Qué son los isótopos?",
            opciones: ["Átomos de diferente elemento", "Átomos del mismo elemento con diferente número de neutrones", "Partículas negativas", "Moléculas de agua"],
            correcta: "Átomos del mismo elemento con diferente número de neutrones",
            explicacion: "Tienen el mismo Z pero diferente A."
          },
          {
            pregunta: "El número atómico (Z) representa:",
            opciones: ["Protones y neutrones", "Solo neutrones", "Protones (y electrones en átomo neutro)", "Solo electrones"],
            correcta: "Protones (y electrones en átomo neutro)",
            explicacion: "Z es el número de protones."
          }
        ]
      },
      {
        id: "q1-7",
        titulo: "Configuración Electrónica y Números Cuánticos",
        icono: "🔢",
        imagen: "linear-gradient(135deg, #6366f1, #4f46e5)",
        contenido: `
          <h4>Niveles de energía</h4>
          <p>Los electrones se distribuyen en niveles y subniveles de energía.</p>
          
          <div class="formula">
Niveles: 1, 2, 3, 4, 5, 6, 7<br>
Subniveles: s, p, d, f<br><br>
Capacidad máxima:<br>
s → 2 electrones<br>
p → 6 electrones<br>
d → 10 electrones<br>
f → 14 electrones
          </div>
          
          <h4>Regla de Aufbau (diagonal)</h4>
          <div class="formula">
1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶...
          </div>
          
          <h4>Números cuánticos</h4>
          <ul>
            <li><strong>n:</strong> nivel de energía (1, 2, 3...)</li>
            <li><strong>l:</strong> forma del orbital (0=s, 1=p, 2=d, 3=f)</li>
            <li><strong>m:</strong> orientación del orbital</li>
            <li><strong>s:</strong> espín del electrón (+½, -½)</li>
          </ul>
          
          <div class="ejemplo">
            <strong>Ejemplo:</strong> La configuración del sodio (Na, Z=11) es: 1s² 2s² 2p⁶ 3s¹
          </div>
        `,
        actividades: [
          {
            pregunta: "¿Cuántos electrones caben como máximo en el subnivel 'p'?",
            opciones: ["2", "6", "10", "14"],
            correcta: "6",
            explicacion: "El subnivel p tiene 3 orbitales, cada uno con 2 electrones."
          },
          {
            pregunta: "El número cuántico 'n' representa:",
            opciones: ["El espín", "El nivel de energía", "La orientación", "La forma"],
            correcta: "El nivel de energía",
            explicacion: "n = 1, 2, 3... indica qué tan lejos está el electrón."
          },
          {
            pregunta: "La configuración electrónica del Litio (Li, Z=3) es:",
            opciones: ["1s³", "1s² 2s¹", "1s² 2p¹", "1s¹ 2s²"],
            correcta: "1s² 2s¹",
            explicacion: "2 electrones en el primer nivel y 1 en el segundo."
          },
          {
            pregunta: "¿Qué regla indica el orden de llenado de los orbitales?",
            opciones: ["Regla de Hund", "Principio de Pauli", "Regla de Aufbau", "Ley de Hess"],
            correcta: "Regla de Aufbau",
            explicacion: "Se llenan de menor a mayor energía."
          },
          {
            pregunta: "¿Cuántos electrones puede tener como máximo el nivel de energía 2?",
            opciones: ["2", "8", "18", "32"],
            correcta: "8",
            explicacion: "Fórmula 2n²: 2(2)² = 8."
          }
        ]
      }
    ],
    temasTabla: [
      {
        id: "q1-8",
        titulo: "La Tabla Periódica Moderna",
        icono: "📊",
        imagen: "linear-gradient(135deg, #14b8a6, #0d9488)",
        contenido: `
          <p>La <strong>tabla periódica</strong> organiza los 118 elementos conocidos según su número atómico y propiedades químicas.</p>
          
          <h4>Organización</h4>
          <ul>
            <li><strong>Grupos (columnas):</strong> 18 grupos. Elementos con propiedades similares</li>
            <li><strong>Periodos (filas):</strong> 7 periodos. Indican el número de niveles de energía</li>
          </ul>
          
          <h4>Grupos importantes</h4>
          <ul>
            <li><strong>Grupo 1:</strong> Metales alcalinos (Li, Na, K, Rb, Cs, Fr)</li>
            <li><strong>Grupo 2:</strong> Metales alcalinotérreos (Be, Mg, Ca, Sr, Ba, Ra)</li>
            <li><strong>Grupos 3-12:</strong> Metales de transición</li>
            <li><strong>Grupo 17:</strong> Halógenos (F, Cl, Br, I, At)</li>
            <li><strong>Grupo 18:</strong> Gases nobles (He, Ne, Ar, Kr, Xe, Rn)</li>
          </ul>
          
          <h4>Bloques</h4>
          <ul>
            <li><strong>Bloque s:</strong> grupos 1 y 2</li>
            <li><strong>Bloque p:</strong> grupos 13-18</li>
            <li><strong>Bloque d:</strong> grupos 3-12 (transición)</li>
            <li><strong>Bloque f:</strong> lantánidos y actínidos</li>
          </ul>
        `,
        actividades: [
          {
            pregunta: "¿Cuántos grupos (columnas) tiene la tabla periódica?",
            opciones: ["8", "18", "7", "32"],
            correcta: "18",
            explicacion: "La tabla moderna tiene 18 grupos."
          },
          {
            pregunta: "Los elementos del Grupo 18 son los:",
            opciones: ["Metales alcalinos", "Halógenos", "Gases nobles", "Metaloides"],
            correcta: "Gases nobles",
            explicacion: "Son muy estables y no reaccionan fácilmente."
          },
          {
            pregunta: "El número de periodos (filas) es:",
            opciones: ["7", "18", "8", "10"],
            correcta: "7",
            explicacion: "Los periodos indican los niveles de energía."
          },
          {
            pregunta: "Los metales alcalinos están en el grupo:",
            opciones: ["1", "2", "17", "18"],
            correcta: "1",
            explicacion: "Como el Litio, Sodio y Potasio."
          },
          {
            pregunta: "Los elementos de transición ocupan los grupos:",
            opciones: ["1-2", "13-18", "3-12", "Solo el 1"],
            correcta: "3-12",
            explicacion: "Son los metales del bloque d."
          }
        ]
      },
      {
        id: "q1-9",
        titulo: "Propiedades Periódicas",
        icono: "📈",
        imagen: "linear-gradient(135deg, #f43f5e, #e11d48)",
        contenido: `
          <h4>Radio atómico</h4>
          <p>Distancia del núcleo al electrón más externo.</p>
          <ul>
            <li>Aumenta de arriba hacia abajo (más niveles)</li>
            <li>Disminuye de izquierda a derecha (mayor carga nuclear)</li>
          </ul>
          
          <h4>Electronegatividad</h4>
          <p>Tendencia de un átomo a atraer electrones.</p>
          <ul>
            <li>Aumenta de izquierda a derecha</li>
            <li>Disminuye de arriba hacia abajo</li>
            <li>El flúor (F) es el más electronegativo</li>
          </ul>
          
          <h4>Energía de ionización</h4>
          <p>Energía necesaria para quitar un electrón.</p>
          <ul>
            <li>Aumenta de izquierda a derecha</li>
            <li>Disminuye de arriba hacia abajo</li>
          </ul>
          
          <h4>Carácter metálico</h4>
          <ul>
            <li><strong>Metales:</strong> izquierda y centro de la tabla</li>
            <li><strong>No metales:</strong> derecha superior</li>
            <li><strong>Metaloides:</strong> entre metales y no metales (B, Si, Ge, As, Sb, Te)</li>
          </ul>
          
          <div class="ejemplo">
            <strong>Contexto:</strong> El litio (Li) es un metal alcalino usado en baterías de celulares. La electronegatividad del oxígeno (O) explica por qué forma enlaces covalentes con el hidrógeno (H₂O).
          </div>
        `,
        actividades: [
          {
            pregunta: "¿Cuál es el elemento más electronegativo de la tabla?",
            opciones: ["Oxígeno", "Cloro", "Flúor", "Sodio"],
            correcta: "Flúor",
            explicacion: "El flúor atrae electrones con mucha fuerza."
          },
          {
            pregunta: "El radio atómico aumenta de:",
            opciones: ["Arriba hacia abajo", "Abajo hacia arriba", "Izquierda a derecha", "No cambia"],
            correcta: "Arriba hacia abajo",
            explicacion: "Hay más niveles de energía."
          },
          {
            pregunta: "Los metaloides se encuentran entre:",
            opciones: ["Metales y no metales", "Gases y líquidos", "Alcalinos y alcalinotérreos", "Lantánidos"],
            correcta: "Metales y no metales",
            explicacion: "Tienen propiedades intermedias."
          },
          {
            pregunta: "¿Qué elemento es un metal usado en baterías?",
            opciones: ["Litio", "Oxígeno", "Cloro", "Neón"],
            correcta: "Litio",
            explicacion: "Las baterías de iones de litio son comunes."
          },
          {
            pregunta: "La energía necesaria para quitar un electrón se llama:",
            opciones: ["Electronegatividad", "Energía de ionización", "Afinidad electrónica", "Radio atómico"],
            correcta: "Energía de ionización",
            explicacion: "Es la energía para formar un ion positivo."
          }
        ]
      }
    ],
    temasEnlaces: [
      {
        id: "q1-10",
        titulo: "Enlace Químico y Regla del Octeto",
        icono: "🔗",
        imagen: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        contenido: `
          <p>El <strong>enlace químico</strong> es la fuerza que mantiene unidos a los átomos para formar compuestos.</p>
          
          <h4>Regla del octeto</h4>
          <p>Los átomos tienden a tener 8 electrones en su última capa (capa de valencia) para alcanzar estabilidad, como los gases nobles.</p>
          
          <h4>Electrones de valencia</h4>
          <p>Son los electrones de la última capa y son los responsables de la formación de enlaces.</p>
          
          <div class="formula">
Grupo 1: 1 electrón de valencia<br>
Grupo 2: 2 electrones de valencia<br>
Grupo 13: 3 electrones de valencia<br>
Grupo 14: 4 electrones de valencia<br>
Grupo 15: 5 electrones de valencia<br>
Grupo 16: 6 electrones de valencia<br>
Grupo 17: 7 electrones de valencia<br>
Grupo 18: 8 electrones de valencia (estables)
          </div>
          
          <h4>Estructuras de Lewis</h4>
          <p>Representación de los electrones de valencia mediante puntos.</p>
          <div class="formula">
H• (1 electrón)<br>
•O• (6 electrones)<br>
Cl• (7 electrones)
          </div>
        `,
        actividades: [
          {
            pregunta: "La regla del octeto busca que los átomos tengan:",
            opciones: ["2 electrones", "8 electrones de valencia", "18 neutrones", "0 electrones"],
            correcta: "8 electrones de valencia",
            explicacion: "Así logran la estabilidad de los gases nobles."
          },
          {
            pregunta: "Los electrones de valencia son los que están en:",
            opciones: ["El núcleo", "La última capa", "La primera capa", "Los neutrones"],
            correcta: "La última capa",
            explicacion: "Son los responsables de los enlaces."
          },
          {
            pregunta: "El oxígeno (Grupo 16) tiene:",
            opciones: ["4 e⁻ de valencia", "6 e⁻ de valencia", "8 e⁻ de valencia", "2 e⁻ de valencia"],
            correcta: "6 e⁻ de valencia",
            explicacion: "Le faltan 2 para completar el octeto."
          },
          {
            pregunta: "Las estructuras de Lewis usan:",
            opciones: ["Líneas", "Puntos para electrones", "Círculos", "Flechas"],
            correcta: "Puntos para electrones",
            explicacion: "Representan los electrones de valencia."
          },
          {
            pregunta: "Los átomos del Grupo 1 tienen:",
            opciones: ["1 e⁻ de valencia", "7 e⁻ de valencia", "8 e⁻ de valencia", "2 e⁻ de valencia"],
            correcta: "1 e⁻ de valencia",
            explicacion: "Como el sodio, que cede su electrón fácilmente."
          }
        ]
      },
      {
        id: "q1-11",
        titulo: "Tipos de Enlace Químico",
        icono: "🔗",
        imagen: "linear-gradient(135deg, #0ea5e9, #0284c7)",
        contenido: `
          <h4>Enlace iónico</h4>
          <ul>
            <li><strong>Formación:</strong> transferencia de electrones de un metal a un no metal</li>
            <li><strong>Entre:</strong> metal + no metal</li>
            <li><strong>Ejemplo:</strong> NaCl (cloruro de sodio), CaO (óxido de calcio)</li>
            <li><strong>Propiedades:</strong> sólidos cristalinos, altos puntos de fusión, conducen electricidad en disolución</li>
          </ul>
          
          <h4>Enlace covalente</h4>
          <ul>
            <li><strong>Formación:</strong> compartición de electrones entre no metales</li>
            <li><strong>Entre:</strong> no metal + no metal</li>
            <li><strong>Ejemplo:</strong> H₂O (agua), CO₂ (dióxido de carbono), CH₄ (metano)</li>
            <li><strong>Propiedades:</strong> puntos de fusión bajos, malos conductores</li>
            <li><strong>Tipos:</strong> polar (electronegatividad diferente) y no polar (similar)</li>
          </ul>
          
          <h4>Enlace metálico</h4>
          <ul>
            <li><strong>Formación:</strong> mar de electrones deslocalizados</li>
            <li><strong>Entre:</strong> metal + metal</li>
            <li><strong>Ejemplo:</strong> Cu, Fe, Al, Au</li>
            <li><strong>Propiedades:</strong> buenos conductores, maleables, dúctiles, brillantes</li>
          </ul>
          
          <div class="ejemplo">
            <strong>Contexto Chiapas:</strong> El enlace iónico del NaCl (sal de mesa) es el mismo que se extrae de las salinas de Chiapas. El enlace covalente del H₂O explica por qué el agua es líquida a temperatura ambiente.
          </div>
        `,
        actividades: [
          {
            pregunta: "El enlace que une un metal y un no metal es:",
            opciones: ["Covalente", "Metálico", "Iónico", "Puente de hidrógeno"],
            correcta: "Iónico",
            explicacion: "Hay transferencia de electrones."
          },
          {
            pregunta: "El enlace covalente se da entre:",
            opciones: ["Metal y no metal", "No metal y no metal", "Metal y metal", "Solo gases nobles"],
            correcta: "No metal y no metal",
            explicacion: "Comparten electrones."
          },
          {
            pregunta: "El agua (H₂O) tiene enlace:",
            opciones: ["Iónico", "Metálico", "Covalente", "Nuclear"],
            correcta: "Covalente",
            explicacion: "El oxígeno y el hidrógeno comparten electrones."
          },
          {
            pregunta: "¿Qué enlace permite que los metales conduzcan electricidad?",
            opciones: ["Covalente", "Iónico", "Metálico", "Dativo"],
            correcta: "Metálico",
            explicacion: "El mar de electrones permite el flujo."
          },
          {
            pregunta: "La sal de mesa (NaCl) tiene enlace:",
            opciones: ["Covalente polar", "Iónico", "Metálico", "Covalente no polar"],
            correcta: "Iónico",
            explicacion: "El sodio cede un electrón al cloro."
          }
        ]
      }
    ]
  },

  2: {
    titulo: "Química II",
    semestre: "Todos",
    clase: "s2",
    icono: "⚗️",
    descripcion: "Nomenclatura, reacciones químicas, estequiometría y soluciones.",
    contexto: "Las reacciones químicas están presentes en la cocina, en la agricultura, en la industria y en los procesos biológicos de tu cuerpo.",

    temas: [
      {
        id: "q2-1",
        titulo: "Nomenclatura Química",
        icono: "📝",
        imagen: "linear-gradient(135deg, #f43f5e, #e11d48)",
        contenido: `
          <p>La <strong>nomenclatura química</strong> es el sistema de reglas para nombrar los compuestos químicos.</p>
          
          <h4>Óxidos básicos</h4>
          <p>Metal + Oxígeno → Óxido básico</p>
          <div class="formula">
2Ca + O₂ → 2CaO (Óxido de calcio)
          </div>
          
          <h4>Óxidos ácidos (anhídridos)</h4>
          <p>No metal + Oxígeno → Óxido ácido</p>
          <div class="formula">
S + O₂ → SO₂ (Dióxido de azufre)
          </div>
          
          <h4>Hidróxidos</h4>
          <p>Óxido básico + Agua → Hidróxido</p>
          <div class="formula">
CaO + H₂O → Ca(OH)₂ (Hidróxido de calcio)
          </div>
          
          <h4>Ácidos oxácidos</h4>
          <p>Óxido ácido + Agua → Oxácido</p>
          <div class="formula">
SO₃ + H₂O → H₂SO₄ (Ácido sulfúrico)
          </div>
          
          <h4>Ácidos hidrácidos</h4>
          <p>Hidrógeno + No metal → Hidrácido</p>
          <div class="formula">
H₂ + Cl₂ → 2HCl (Ácido clorhídrico)
          </div>
          
          <h4>Sales binarias y oxisales</h4>
          <div class="formula">
Ácido + Hidróxido → Sal + Agua<br>
HCl + NaOH → NaCl + H₂O
          </div>
          
          <div class="ejemplo">
            <strong>Contexto:</strong> El hidróxido de calcio (Ca(OH)₂) se usa para encalar las milpas en Chiapas, controlando la acidez del suelo.
          </div>
        `,
        actividades: [
          {
            pregunta: "La fórmula del óxido de calcio es:",
            opciones: ["CaO", "Ca2O", "CaOH", "CaH2"],
            correcta: "CaO",
            explicacion: "Calcio (Ca+2) y Oxígeno (O-2) se equilibran 1 a 1."
          },
          {
            pregunta: "La reacción de un óxido básico con agua produce un:",
            opciones: ["Ácido", "Hidróxido", "Sal", "Gas"],
            correcta: "Hidróxido",
            explicacion: "Ejemplo: CaO + H2O → Ca(OH)2"
          },
          {
            pregunta: "¿Qué compuesto se usa para encalar las milpas en Chiapas?",
            opciones: ["Ácido sulfúrico", "Hidróxido de calcio", "Cloruro de sodio", "Dióxido de carbono"],
            correcta: "Hidróxido de calcio",
            explicacion: "Ayuda a controlar la acidez del suelo."
          },
          {
            pregunta: "El H₂SO₄ se llama:",
            opciones: ["Ácido clorhídrico", "Ácido sulfúrico", "Hidróxido de sodio", "Óxido de azufre"],
            correcta: "Ácido sulfúrico",
            explicacion: "Proviene del azufre."
          },
          {
            pregunta: "Al reaccionar un ácido y una base se produce:",
            opciones: ["Solo agua", "Sal y agua", "Un gas", "Un metal"],
            correcta: "Sal y agua",
            explicacion: "Es una reacción de neutralización."
          }
        ]
      },
      {
        id: "q2-2",
        titulo: "Reacciones Químicas",
        icono: "💥",
        imagen: "linear-gradient(135deg, #f59e0b, #d97706)",
        contenido: `
          <p>Una <strong>reacción química</strong> es un proceso en el que una o más sustancias (reactivos) se transforman en otras (productos).</p>
          
          <h4>Ecuación química</h4>
          <div class="formula">
Reactivos → Productos<br>
A + B → C + D
          </div>
          
          <h4>Tipos de reacciones</h4>
          <ul>
            <li><strong>Síntesis o combinación:</strong> A + B → AB. Ej: 2Na + Cl₂ → 2NaCl</li>
            <li><strong>Descomposición:</strong> AB → A + B. Ej: 2H₂O → 2H₂ + O₂</li>
            <li><strong>Sustitución simple:</strong> AB + C → AC + B. Ej: Zn + 2HCl → ZnCl₂ + H₂</li>
            <li><strong>Doble sustitución:</strong> AB + CD → AD + CB. Ej: AgNO₃ + NaCl → AgCl + NaNO₃</li>
          </ul>
          
          <h4>Reacciones exotérmicas y endotérmicas</h4>
          <ul>
            <li><strong>Exotérmicas:</strong> liberan energía (calor). Ej: combustión</li>
            <li><strong>Endotérmicas:</strong> absorben energía. Ej: fotosíntesis</li>
          </ul>
          
          <h4>Ley de Conservación de la Masa (Lavoisier)</h4>
          <p>La masa de los reactivos es igual a la masa de los productos. La materia no se crea ni se destruye, solo se transforma.</p>
          
          <div class="ejemplo">
            <strong>Contexto:</strong> La combustión del gas butano en la estufa es una reacción exotérmica que usamos a diario para cocinar.
          </div>
        `,
        actividades: [
          {
            pregunta: "En una reacción química, las sustancias iniciales se llaman:",
            opciones: ["Productos", "Reactivos", "Catalizadores", "Moléculas"],
            correcta: "Reactivos",
            explicacion: "Son los que se transforman."
          },
          {
            pregunta: "La reacción A + B → AB es de:",
            opciones: ["Síntesis", "Descomposición", "Sustitución", "Doble sustitución"],
            correcta: "Síntesis",
            explicacion: "Dos elementos se combinan para formar uno."
          },
          {
            pregunta: "La combustión del gas butano en la estufa es una reacción:",
            opciones: ["Endotérmica", "Exotérmica", "Neutra", "Nuclear"],
            correcta: "Exotérmica",
            explicacion: "Libera calor al ambiente."
          },
          {
            pregunta: "La Ley de Conservación de la Masa dice que:",
            opciones: ["La masa se crea", "La masa se destruye", "La masa se conserva", "La masa es infinita"],
            correcta: "La masa se conserva",
            explicacion: "Masa de reactivos = masa de productos."
          },
          {
            pregunta: "La fotosíntesis es una reacción:",
            opciones: ["Exotérmica", "Endotérmica", "De combustión", "Nuclear"],
            correcta: "Endotérmica",
            explicacion: "Absorbe energía solar para ocurrir."
          }
        ]
      },
      {
        id: "q2-3",
        titulo: "Balanceo de Ecuaciones Químicas",
        icono: "⚖️",
        imagen: "linear-gradient(135deg, #10b981, #059669)",
        contenido: `
          <p>El <strong>balanceo</strong> consiste en igualar el número de átomos de cada elemento en ambos lados de la ecuación.</p>
          
          <h4>Método por tanteo</h4>
          <ol>
            <li>Escribir la ecuación sin balancear</li>
            <li>Contar átomos de cada elemento en reactivos y productos</li>
            <li>Ajustar coeficientes hasta igualar</li>
            <li>Verificar el balance final</li>
          </ol>
          
          <h4>Ejemplo</h4>
          <div class="formula">
CH₄ + 2O₂ → CO₂ + 2H₂O
          </div>
          <p>Verificación:</p>
          <ul>
            <li>C: 1 = 1 ✓</li>
            <li>H: 4 = 4 ✓</li>
            <li>O: 4 = 4 ✓</li>
          </ul>
          
          <h4>Métodos adicionales</h4>
          <ul>
            <li><strong>Algebraico:</strong> usar sistemas de ecuaciones</li>
            <li><strong>Redox:</strong> para reacciones de oxidación-reducción</li>
          </ul>
          
          <div class="ejemplo">
            <strong>Ejercicio:</strong> Balancear: Fe + O₂ → Fe₂O₃<br>
            Solución: 4Fe + 3O₂ → 2Fe₂O₃
          </div>
        `,
        actividades: [
          {
            pregunta: "¿Para qué sirve balancear una ecuación química?",
            opciones: ["Para hacerla bonita", "Para cumplir la Ley de Conservación de la Masa", "Para que pese más", "Para eliminar elementos"],
            correcta: "Para cumplir la Ley de Conservación de la Masa",
            explicacion: "Debe haber los mismos átomos a ambos lados."
          },
          {
            pregunta: "En la ecuación CH₄ + 2O₂ → CO₂ + 2H₂O, ¿cuántos átomos de oxígeno hay en los reactivos?",
            opciones: ["2", "3", "4", "1"],
            correcta: "4",
            explicacion: "2O₂ significa 2 × 2 = 4 átomos de oxígeno."
          },
          {
            pregunta: "Balancea por tanteo: __Fe + __O₂ → __Fe₂O₃. ¿Cuáles son los coeficientes?",
            opciones: ["1,1,1", "2,3,1", "4,3,2", "3,2,1"],
            correcta: "4,3,2",
            explicacion: "4Fe + 3O₂ → 2Fe₂O₃"
          },
          {
            pregunta: "El método algebraico utiliza:",
            opciones: ["Sistemas de ecuaciones", "Solo la vista", "Calculadora", "Fuego"],
            correcta: "Sistemas de ecuaciones",
            explicacion: "Se asignan letras a los coeficientes."
          },
          {
            pregunta: "El método Redox se usa para reacciones de:",
            opciones: ["Síntesis", "Precipitación", "Oxidación-reducción", "Neutralización"],
            correcta: "Oxidación-reducción",
            explicacion: "Hay transferencia de electrones."
          }
        ]
      },
      {
        id: "q2-4",
        titulo: "Estequiometría: El Mol",
        icono: "🔢",
        imagen: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        contenido: `
          <p>La <strong>estequiometría</strong> estudia las relaciones cuantitativas en las reacciones químicas.</p>
          
          <h4>Conceptos fundamentales</h4>
          <ul>
            <li><strong>Mol:</strong> cantidad de sustancia que contiene 6.022×10²³ partículas (número de Avogadro)</li>
            <li><strong>Masa molar:</strong> masa en gramos de 1 mol de una sustancia (g/mol)</li>
            <li><strong>Volumen molar:</strong> 22.4 L de cualquier gas en condiciones normales</li>
          </ul>
          
          <h4>Fórmulas clave</h4>
          <div class="formula">
n = m / M<br>
n = número de moles<br>
m = masa en gramos<br>
M = masa molar (g/mol)<br><br>
n = N / 6.022×10²³<br>
N = número de partículas
          </div>
          
          <h4>Cálculos estequiométricos</h4>
          <ol>
            <li>Balancear la ecuación</li>
            <li>Convertir a moles</li>
            <li>Usar proporciones molares</li>
            <li>Convertir a unidades deseadas</li>
          </ol>
          
          <div class="ejemplo">
            <strong>Ejemplo:</strong> ¿Cuántos moles hay en 36 g de agua (H₂O)?<br>
            M(H₂O) = 2(1) + 16 = 18 g/mol<br>
            n = 36 / 18 = 2 moles
          </div>
        `,
        actividades: [
          {
            pregunta: "Un mol de cualquier sustancia contiene:",
            opciones: ["100 partículas", "6.022×10²³ partículas", "10 partículas", "1 millón de partículas"],
            correcta: "6.022×10²³ partículas",
            explicacion: "Es el Número de Avogadro."
          },
          {
            pregunta: "Si tienes 36 g de agua (M=18 g/mol), ¿cuántos moles tienes?",
            opciones: ["1 mol", "2 moles", "3 moles", "0.5 moles"],
            correcta: "2 moles",
            explicacion: "n = m/M = 36 / 18 = 2."
          },
          {
            pregunta: "La fórmula para calcular moles a partir de la masa es:",
            opciones: ["n = m + M", "n = m / M", "n = M / m", "n = m × M"],
            correcta: "n = m / M",
            explicacion: "Masa entre masa molar."
          },
          {
            pregunta: "La masa molar del agua (H₂O) es:",
            opciones: ["16 g/mol", "18 g/mol", "20 g/mol", "10 g/mol"],
            correcta: "18 g/mol",
            explicacion: "Hidrógeno (1×2) + Oxígeno (16) = 18."
          },
          {
            pregunta: "¿Qué se debe hacer ANTES de hacer cálculos estequiométricos?",
            opciones: ["Calentar", "Balancear la ecuación", "Medir el pH", "Filtrar"],
            correcta: "Balancear la ecuación",
            explicacion: "Para respetar las proporciones reales."
          }
        ]
      },
      {
        id: "q2-5",
        titulo: "Soluciones Químicas",
        icono: "🧴",
        imagen: "linear-gradient(135deg, #0ea5e9, #0284c7)",
        contenido: `
          <p>Una <strong>solución</strong> es una mezcla homogénea de dos o más sustancias.</p>
          
          <h4>Componentes</h4>
          <ul>
            <li><strong>Soluto:</strong> sustancia que se disuelve (generalmente en menor cantidad)</li>
            <li><strong>Disolvente:</strong> sustancia que disuelve (generalmente en mayor cantidad)</li>
          </ul>
          
          <h4>Tipos de soluciones</h4>
          <ul>
            <li><strong>Diluida:</strong> poco soluto</li>
            <li><strong>Concentrada:</strong> mucho soluto</li>
            <li><strong>Saturada:</strong> máxima cantidad de soluto disuelto</li>
            <li><strong>Sobresaturada:</strong> más soluto del que puede disolver normalmente</li>
          </ul>
          
          <h4>Concentración</h4>
          <div class="formula">
% masa = (masa soluto / masa solución) × 100<br><br>
% volumen = (volumen soluto / volumen solución) × 100<br><br>
Molaridad (M) = moles de soluto / litros de solución<br><br>
Molalidad (m) = moles de soluto / kg de disolvente
          </div>
          
          <div class="ejemplo">
            <strong>Contexto:</strong> La preparación de suero oral (agua, sal y azúcar) es un ejemplo de solución que puede salvar vidas en casos de deshidratación.
          </div>
        `,
        actividades: [
          {
            pregunta: "En una solución de agua con sal, el agua es el:",
            opciones: ["Soluto", "Disolvente", "Precipitado", "Reactivo"],
            correcta: "Disolvente",
            explicacion: "Está en mayor cantidad y disuelve a la sal."
          },
          {
            pregunta: "Una solución que ya no puede disolver más soluto se llama:",
            opciones: ["Diluida", "Saturada", "Concentrada", "Sobresaturada"],
            correcta: "Saturada",
            explicacion: "Alcanzó su límite de solubilidad."
          },
          {
            pregunta: "La molaridad se expresa como:",
            opciones: ["Moles de soluto / litros de solución", "Gramos / litro", "Masa / volumen", "Moles / kg"],
            correcta: "Moles de soluto / litros de solución",
            explicacion: "Es la unidad más común de concentración."
          },
          {
            pregunta: "El suero oral es un ejemplo de:",
            opciones: ["Mezcla heterogénea", "Solución", "Compuesto puro", "Elemento"],
            correcta: "Solución",
            explicacion: "El agua, sal y azúcar forman una mezcla homogénea."
          },
          {
            pregunta: "Si agregas mucho soluto a una solución, esta se vuelve:",
            opciones: ["Más diluida", "Más concentrada", "Pura", "Neutra"],
            correcta: "Más concentrada",
            explicacion: "Aumenta la proporción de soluto."
          }
        ]
      },
      {
        id: "q2-6",
        titulo: "Ácidos y Bases",
        icono: "🧪",
        imagen: "linear-gradient(135deg, #ef4444, #dc2626)",
        contenido: `
          <h4>Teoría de Arrhenius</h4>
          <ul>
            <li><strong>Ácido:</strong> sustancia que libera H⁺ en agua</li>
            <li><strong>Base:</strong> sustancia que libera OH⁻ en agua</li>
          </ul>
          
          <h4>Teoría de Brønsted-Lowry</h4>
          <ul>
            <li><strong>Ácido:</strong> dona protones (H⁺)</li>
            <li><strong>Base:</strong> acepta protones (H⁺)</li>
          </ul>
          
          <h4>Escala de pH</h4>
          <div class="formula">
pH = -log[H⁺]<br><br>
pH < 7 → ácido<br>
pH = 7 → neutro<br>
pH > 7 → base
          </div>
          
          <h4>Indicadores</h4>
          <ul>
            <li><strong>Tornasol:</strong> rojo en ácido, azul en base</li>
            <li><strong>Fenolftaleína:</strong> incolora en ácido, rosa en base</li>
            <li><strong>Papel pH:</strong> cambia de color según el pH</li>
          </ul>
          
          <div class="ejemplo">
            <strong>Contexto:</strong> El jugo de limón (pH ~2) es ácido. El jabón (pH ~10) es básico. El agua pura tiene pH 7.
          </div>
        `,
        actividades: [
          {
            pregunta: "Según Arrhenius, un ácido libera:",
            opciones: ["OH⁻", "H⁺", "Electrones", "Neutrones"],
            correcta: "H⁺",
            explicacion: "Libera iones de hidrógeno en agua."
          },
          {
            pregunta: "Una sustancia con pH = 3 es:",
            opciones: ["Ácida", "Neutra", "Básica", "Un gas"],
            correcta: "Ácida",
            explicacion: "pH menor a 7 es ácido."
          },
          {
            pregunta: "El pH del agua pura es:",
            opciones: ["0", "7", "14", "10"],
            correcta: "7",
            explicacion: "Es exactamente neutra."
          },
          {
            pregunta: "La fenolftaleína se pone rosa en presencia de:",
            opciones: ["Ácidos", "Bases", "Metales", "Gases nobles"],
            correcta: "Bases",
            explicacion: "Es un indicador de basicidad."
          },
          {
            pregunta: "Un ejemplo de sustancia básica en el hogar es:",
            opciones: ["Vinagre", "Jugo de limón", "Jabón", "Refresco"],
            correcta: "Jabón",
            explicacion: "Tiene un pH mayor a 7."
          }
        ]
      },
      {
        id: "q2-7",
        titulo: "Reacciones de Óxido-Reducción (Redox)",
        icono: "⚡",
        imagen: "linear-gradient(135deg, #f59e0b, #d97706)",
        contenido: `
          <p>Las <strong>reacciones redox</strong> son aquellas donde hay transferencia de electrones entre sustancias.</p>
          
          <h4>Conceptos clave</h4>
          <ul>
            <li><strong>Oxidación:</strong> pérdida de electrones (aumenta el número de oxidación)</li>
            <li><strong>Reducción:</strong> ganancia de electrones (disminuye el número de oxidación)</li>
            <li><strong>Agente oxidante:</strong> sustancia que se reduce y oxida a otra</li>
            <li><strong>Agente reductor:</strong> sustancia que se oxida y reduce a otra</li>
          </ul>
          
          <h4>Ejemplo</h4>
          <div class="formula">
Zn + Cu²⁺ → Zn²⁺ + Cu<br><br>
Zn se oxida (pierde 2e⁻)<br>
Cu²⁺ se reduce (gana 2e⁻)
          </div>
          
          <h4>Aplicaciones</h4>
          <ul>
            <li>Pilas y baterías</li>
            <li>Corrosión de metales (oxidación del hierro)</li>
            <li>Respiración celular (obtención de energía)</li>
            <li>Fotosíntesis (producción de glucosa)</li>
          </ul>
          
          <div class="ejemplo">
            <strong>Contexto:</strong> La oxidación del hierro (herrumbre) es una reacción redox que deteriora estructuras metálicas en ambientes húmedos como la costa de Chiapas.
          </div>
        `,
        actividades: [
          {
            pregunta: "La oxidación implica:",
            opciones: ["Ganancia de electrones", "Pérdida de electrones", "Ganancia de protones", "Pérdida de masa"],
            correcta: "Pérdida de electrones",
            explicacion: "El átomo se vuelve más positivo."
          },
          {
            pregunta: "La reducción implica:",
            opciones: ["Ganancia de electrones", "Pérdida de electrones", "Ganancia de neutrones", "Pérdida de energía"],
            correcta: "Ganancia de electrones",
            explicacion: "El átomo se vuelve menos positivo."
          },
          {
            pregunta: "El deterioro del hierro por la humedad se llama:",
            opciones: ["Combustión", "Oxidación", "Fusión", "Sublimación"],
            correcta: "Oxidación",
            explicacion: "Es una reacción redox con el oxígeno."
          },
          {
            pregunta: "En la reacción Zn + Cu²⁺ → Zn²⁺ + Cu, el Zinc se:",
            opciones: ["Reduce", "Oxida", "Neutraliza", "Funde"],
            correcta: "Oxida",
            explicacion: "Pierde electrones y pasa a Zn²⁺."
          },
          {
            pregunta: "Las pilas y baterías funcionan gracias a reacciones:",
            opciones: ["Ácido-base", "Redox", "De síntesis", "Nucleares"],
            correcta: "Redox",
            explicacion: "Generan electricidad a partir de transferencia de electrones."
          }
        ]
      },
      {
        id: "q2-8",
        titulo: "Química y Vida Cotidiana",
        icono: "🏠",
        imagen: "linear-gradient(135deg, #14b8a6, #0d9488)",
        contenido: `
          <p>La química está presente en todos los aspectos de nuestra vida diaria.</p>
          
          <h4>En el hogar</h4>
          <ul>
            <li><strong>Limpieza:</strong> jabones, detergentes, blanqueadores</li>
            <li><strong>Cocina:</strong> fermentación, cocción, conservación de alimentos</li>
            <li><strong>Medicina:</strong> fármacos, vacunas, antisépticos</li>
          </ul>
          
          <h4>En la agricultura</h4>
          <ul>
            <li>Fertilizantes (nitratos, fosfatos, potasio)</li>
            <li>Pesticidas y herbicidas</li>
            <li>Control de pH del suelo</li>
            <li>Compostaje (descomposición química)</li>
          </ul>
          
          <h4>En la industria</h4>
          <ul>
            <li>Petroquímica (plásticos, combustibles)</li>
            <li>Farmacéutica (medicamentos)</li>
            <li>Alimentaria (conservadores, colorantes)</li>
            <li>Textil (tintes, fibras sintéticas)</li>
          </ul>
          
          <h4>Impacto ambiental</h4>
          <ul>
            <li><strong>Contaminación del agua:</strong> desechos industriales, agroquímicos</li>
            <li><strong>Contaminación del aire:</strong> gases de combustión (CO₂, SO₂, NOx)</li>
            <li><strong>Lluvia ácida:</strong> SO₂ + H₂O → H₂SO₄</li>
            <li><strong>Cambio climático:</strong> efecto invernadero por CO₂</li>
          </ul>
          
          <div class="ejemplo">
            <strong>Contexto Chiapas:</strong> El uso de fertilizantes en las plantaciones de café puede contaminar los ríos si no se aplican correctamente. La química verde propone alternativas sostenibles.
          </div>
        `,
        actividades: [
          {
            pregunta: "El uso de jabón para lavar ropa es una aplicación de la química en:",
            opciones: ["La industria", "El hogar", "La agricultura", "La medicina"],
            correcta: "El hogar",
            explicacion: "Los jabones son productos químicos de limpieza."
          },
          {
            pregunta: "Los fertilizantes usados en Chiapas pertenecen al área de:",
            opciones: ["Química agrícola", "Química nuclear", "Astroquímica", "Petroquímica"],
            correcta: "Química agrícola",
            explicacion: "Ayudan al crecimiento de los cultivos."
          },
          {
            pregunta: "Un problema ambiental causado por gases de combustión es:",
            opciones: ["Lluvia ácida", "Terremotos", "Eclipses", "Auroras"],
            correcta: "Lluvia ácida",
            explicacion: "Gases como el SO₂ reaccionan con el agua."
          },
          {
            pregunta: "El compostaje es un proceso de:",
            opciones: ["Fusión", "Descomposición química natural", "Sublimación", "Síntesis industrial"],
            correcta: "Descomposición química natural",
            explicacion: "Los microorganismos degradan la materia orgánica."
          },
          {
            pregunta: "La química verde busca:",
            opciones: ["Más contaminación", "Alternativas sostenibles", "Prohibir la química", "Crear armas"],
            correcta: "Alternativas sostenibles",
            explicacion: "Reduce el impacto ambiental de los procesos químicos."
          }
        ]
      }
    ]
  },
  3: {
    titulo: "Tabla periodica de los elementos quimicos",
    subtitulo: "Explora la tabla periódica completa con los 118 elementos.",
    semestre: "Química",
    clase: "s1,s2,s3,s4,s5,s6",
    icono: "📊",
    descripcion: "Los 118 elementos con colores por categoría",
    contexto: "Configuración electrónica de cada uno",

    temas: [
      {
        id: "q1-tabla",
        titulo: "Tabla Periódica Interactiva",
        icono: "⚛️",
        esEnlace: true,                     // ← Marca como enlace
        ruta: "tabla-periodica",            // ← Ruta a la que lleva
        contenido: `
    <p>Explora la tabla periódica completa con los 118 elementos.</p>
    <p>Haz clic en <strong>"Abrir tabla periódica"</strong> para ver la vista interactiva con:</p>
    <ul>
      <li>Los 118 elementos con colores por categoría</li>
      <li>Configuración electrónica de cada uno</li>
      <li>Masa atómica, grupo y periodo</li>
      <li>Datos curiosos contextualizados</li>
    </ul>
  `
      }
    ]
  }

};