/* ==========================================================
   DATA - Física I y II (Gamificada Completa - COBACH Chiapas)
   Incluye temas extra: Caída Libre, Mov. Circular, Termodinámica
========================================================== */

const FISICA = {
  // ==========================================================
  // TERCER SEMESTRE - FÍSICA I
  // ==========================================================
  3: {
    titulo: "Física I",
    subtitulo: "Mecánica Clásica y Movimiento",
    semestre: "Tercer Semestre",
    icono: "⚡",
    descripcion: "Comprende el movimiento, las fuerzas y la energía en tu entorno.",
    contexto: "En el EMSAD Chiapas, la mecánica te ayuda a entender desde el flujo del agua en las presas del Grijalva hasta el movimiento de los colectivos en la sierra.",
    temas: [
      {
        id: "f1-1",
        titulo: "Medición y Vectores",
        icono: "📏",
        imagen: "linear-gradient(135deg, #f59e0b, #ef4444)",
        concepto: `
          <h4>El lenguaje universal de la Física</h4>
          <p>La física no podría existir sin la <strong>medición</strong>. Medir es comparar una cantidad desconocida con un patrón establecido. Para que científicos de todo el mundo se entiendan, se creó el <strong>Sistema Internacional de Unidades (SI)</strong>.</p>
          <ul>
            <li><strong>Magnitudes fundamentales:</strong> Longitud (metro), Masa (kilogramo), Tiempo (segundo), Temperatura (Kelvin), etc.</li>
            <li><strong>Magnitudes derivadas:</strong> Se forman al combinar las fundamentales (ej. la velocidad es metros/segundo).</li>
          </ul>
          <h4>¿Qué es un Vector?</h4>
          <p>Imagina que le dices a un amigo: "Camina 5 metros". Él te preguntará: <em>¿hacia dónde?</em>. La distancia es un escalar (solo tiene número), pero si le dices "camina 5 metros hacia el norte", ahora tienes un <strong>vector</strong> (tiene magnitud, dirección y sentido).</p>
          <p>En física, fuerzas, velocidades y desplazamientos son vectores. Para resolver problemas con ellos, a menudo los "descomponemos" en sus partes horizontal (X) y vertical (Y) usando funciones trigonométricas.</p>
          <div class="formula">
            Componente X: Fx = F · cos(θ)<br>
            Componente Y: Fy = F · sen(θ)
          </div>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> En el Cañón del Sumidero, un guía turístico jala un bote con una fuerza de 500 N a un ángulo de 30° respecto a la orilla. Para saber cuánta fuerza se aprovecha para avanzar (horizontal), usamos la descomposición vectorial: Fx = 500 · cos(30°) = <strong>433 N</strong>. El resto se pierde hacia arriba.
          </div>
        `,
        actividades: [
          {
            pregunta: "¿Cuál de las siguientes es una magnitud VECTORIAL?",
            opciones: ["Temperatura", "Masa", "Fuerza", "Tiempo"],
            correcta: "Fuerza",
            explicacion: "La fuerza tiene dirección y sentido, por eso es vectorial."
          },
          {
            pregunta: "Si jalas una carreta con 100 N a 60° (cos 60°=0.5), ¿cuál es la fuerza horizontal?",
            opciones: ["100 N", "50 N", "86.6 N", "25 N"],
            correcta: "50 N",
            explicacion: "Fx = F · cos(θ) = 100 · 0.5 = 50 N."
          },
          {
            pregunta: "En el SI, ¿cuál es la unidad de medida de la masa?",
            opciones: ["Gramo (g)", "Libra (lb)", "Kilogramo (kg)", "Newton (N)"],
            correcta: "Kilogramo (kg)",
            explicacion: "El kilogramo es la unidad base del SI para la masa."
          },
          {
            pregunta: "¿Qué instrumento usarías para medir el volumen de agua de lluvia en tu comunidad?",
            opciones: ["Balanza", "Probeta", "Termómetro", "Cronómetro"],
            correcta: "Probeta",
            explicacion: "La probeta mide volúmenes de líquidos."
          },
          {
            pregunta: "Si dos vectores son perpendiculares, ¿qué ángulo forman?",
            opciones: ["0°", "45°", "90°", "180°"],
            correcta: "90°",
            explicacion: "La perpendicularidad implica un ángulo recto de 90°."
          }
        ]
      },
      {
        id: "f1-2",
        titulo: "Movimiento Rectilíneo (MRU y MRUA)",
        icono: "🏃",
        imagen: "linear-gradient(135deg, #10b981, #3b82f6)",
        concepto: `
          <h4>Cinemática: Describiendo el movimiento</h4>
          <p>La cinemática estudia el movimiento de los cuerpos sin importar qué lo causó. Para describirlo, usamos tres conceptos clave:</p>
          <ul>
            <li><strong>Posición:</strong> Dónde está el objeto.</li>
            <li><strong>Velocidad:</strong> Qué tan rápido cambia de posición (v = distancia / tiempo).</li>
            <li><strong>Aceleración:</strong> Qué tan rápido cambia la velocidad.</li>
          </ul>
          <h4>MRU (Movimiento Rectilíneo Uniforme)</h4>
          <p>Ocurre cuando un objeto se mueve en línea recta con una velocidad constante. No frena ni acelera. Un ejemplo sería un avión volando en crucero.</p>
          <div class="formula">v = d / t</div>
          <h4>MRUA (Movimiento Rectilíneo Uniformemente Acelerado)</h4>
          <p>La velocidad cambia constantemente. Si un coche acelera para rebasar, o frena en un semáforo, es un MRUA.</p>
          <div class="formula">
            v = v₀ + a·t<br>
            d = v₀·t + ½·a·t²
          </div>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> Un autobús de la línea Tuxtla-San Cristóbal viaja a 80 km/h. Si el trayecto dura 1.5 horas, la distancia recorrida es d = v · t = 80 × 1.5 = <strong>120 km</strong>. Entender esto ayuda a los transportistas a calcular el combustible y los tiempos de llegada.
          </div>
        `,
        actividades: [
          {
            pregunta: "Un autobús viaja a 60 km/h constante. ¿Qué distancia recorre en 2 horas?",
            opciones: ["30 km", "120 km", "60 km", "100 km"],
            correcta: "120 km",
            explicacion: "d = v · t = 60 km/h × 2 h = 120 km."
          },
          {
            pregunta: "Si un auto frena de 80 km/h a 0 en 4 segundos, ¿qué tipo de movimiento es?",
            opciones: ["MRU", "MRUA (desaceleración)", "Caída libre", "Tiro parabólico"],
            correcta: "MRUA (desaceleración)",
            explicacion: "Su velocidad cambia, por lo que es un movimiento acelerado (negativo)."
          },
          {
            pregunta: "Si un motociclista acelera de 0 a 20 m/s en 4 s, ¿cuál es su aceleración?",
            opciones: ["4 m/s²", "5 m/s²", "80 m/s²", "0.2 m/s²"],
            correcta: "5 m/s²",
            explicacion: "a = (v_f - v_i) / t = (20 - 0) / 4 = 5 m/s²."
          },
          {
            pregunta: "¿Qué forma tiene la gráfica de distancia vs tiempo en un MRU?",
            opciones: ["Una parábola", "Una línea recta inclinada", "Una línea horizontal", "Un círculo"],
            correcta: "Una línea recta inclinada",
            explicacion: "La distancia crece proporcionalmente al tiempo."
          },
          {
            pregunta: "Si un tren viaja a 100 km/h y frena hasta detenerse, ¿su aceleración es positiva o negativa?",
            opciones: ["Positiva", "Negativa", "Cero", "No tiene"],
            correcta: "Negativa",
            explicacion: "Al frenar, la velocidad disminuye, por lo que la aceleración va en sentido contrario al movimiento (negativa)."
          }
        ]
      },
      {
        id: "f1-3",
        titulo: "Caída Libre y Tiro Parabólico",
        icono: "🎯",
        imagen: "linear-gradient(135deg, #8b5cf6, #d946ef)",
        concepto: `
          <h4>El movimiento bajo la gravedad</h4>
          <p>La <strong>Caída Libre</strong> es un caso especial de MRUA donde la única fuerza que actúa es la gravedad (g = 9.8 m/s²). No importa la masa del objeto (en el vacío), todos caen al mismo tiempo.</p>
          <div class="formula">
            v = g · t<br>
            h = ½ · g · t²
          </div>
          <h4>Tiro Parabólico</h4>
          <p>Ocurre cuando lanzas un objeto con un ángulo. El movimiento se separa en dos: horizontal (MRU, velocidad constante) y vertical (Caída libre, acelera por la gravedad).</p>
          <div class="formula">
            Alcance máximo: R = (v₀² · sen(2θ)) / g
          </div>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> En las cascadas de Agua Azul, una gota de agua cae desde una altura de 20 metros. Usando h = ½gt², podemos calcular que tarda aproximadamente <strong>2 segundos</strong> en llegar al río. Si un turista lanza una piedra horizontalmente, esta describirá una parábola hasta el agua.
          </div>
        `,
        actividades: [
          {
            pregunta: "Si dejas caer una piedra desde un puente, ¿qué magnitud aumenta mientras cae?",
            opciones: ["Su masa", "Su velocidad", "Su volumen", "Su peso"],
            correcta: "Su velocidad",
            explicacion: "La gravedad acelera el objeto (9.8 m/s²)."
          },
          {
            pregunta: "¿En qué caso un objeto pesado y uno ligero caen al mismo tiempo?",
            opciones: ["En el aire", "En el vacío", "En el agua", "Nunca"],
            correcta: "En el vacío",
            explicacion: "Sin resistencia del aire, la gravedad actúa igual para todos."
          },
          {
            pregunta: "En un tiro parabólico, ¿qué componente de la velocidad se mantiene constante?",
            opciones: ["La vertical", "La horizontal", "Ambas", "Ninguna"],
            correcta: "La horizontal",
            explicacion: "La gravedad solo afecta la componente vertical (Y). La horizontal (X) es MRU."
          },
          {
            pregunta: "¿Cuál es el valor aproximado de la gravedad en la Tierra?",
            opciones: ["5 m/s²", "9.8 m/s²", "15 m/s²", "20 m/s²"],
            correcta: "9.8 m/s²",
            explicacion: "Es la aceleración constante con la que caen los cuerpos."
          },
          {
            pregunta: "Si lanzas una pelota hacia arriba, ¿qué pasa con su velocidad en el punto más alto?",
            opciones: ["Es máxima", "Es cero", "Es negativa", "Se duplica"],
            correcta: "Es cero",
            explicacion: "En el punto más alto, la pelota se detiene por un instante antes de caer."
          }
        ]
      },
      {
        id: "f1-4",
        titulo: "Leyes de Newton",
        icono: "⚖️",
        imagen: "linear-gradient(135deg, #8b5cf6, #ec4899)",
        concepto: `
          <h4>El porqué del movimiento</h4>
          <p>Isaac Newton revolucionó la ciencia al explicar por qué los objetos se mueven. Sus tres leyes son la base de la mecánica clásica:</p>
          <ol>
            <li><strong>1ra Ley (Inercia):</strong> Un objeto en reposo permanecerá en reposo, y uno en movimiento seguirá moviéndose en línea recta a velocidad constante, a menos que actúe sobre él una fuerza externa.</li>
            <li><strong>2da Ley (Masa y Aceleración):</strong> La aceleración de un objeto es directamente proporcional a la fuerza neta que actúa sobre él, e inversamente proporcional a su masa. Fórmula: F = m · a.</li>
            <li><strong>3ra Ley (Acción y Reacción):</strong> Para cada acción, hay una reacción igual y en sentido opuesto.</li>
          </ol>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> Los "colectivos" que suben a San Juan Chamula necesitan mucha fuerza del motor para vencer la gravedad y la inercia cuando van llenos de pasajeros y mercancía. Si el vehículo pesa mucho (m), la aceleración (a) será menor para una misma fuerza del motor (F).
          </div>
        `,
        actividades: [
          {
            pregunta: "Si empujas un bulto de 50 kg con 100 N, ¿qué aceleración logra?",
            opciones: ["2 m/s²", "5000 m/s²", "0.5 m/s²", "50 m/s²"],
            correcta: "2 m/s²",
            explicacion: "a = F / m = 100 / 50 = 2 m/s²."
          },
          {
            pregunta: "¿Por qué usamos cinturón de seguridad? (1ra Ley)",
            opciones: ["Para no mojarnos", "Para contrarrestar la inercia en un frenado", "Porque la ley lo exige", "Para no volar"],
            correcta: "Para contrarrestar la inercia en un frenado",
            explicacion: "Si el auto frena, tu cuerpo quiere seguir moviéndose por inercia."
          },
          {
            pregunta: "Si pateas un balón y este sale volando, ¿qué ley se aplica?",
            opciones: ["1ra Ley", "2da Ley", "3ra Ley", "Ley de Gravedad"],
            correcta: "3ra Ley",
            explicacion: "Acción (patear) y Reacción (el balón empuja tu pie)."
          },
          {
            pregunta: "El peso de un objeto depende de:",
            opciones: ["El volumen", "La gravedad", "La densidad", "La temperatura"],
            correcta: "La gravedad",
            explicacion: "Peso = masa × gravedad. En la Luna pesarías menos."
          },
          {
            pregunta: "Si un camión y un coche chocan, ¿quién experimenta mayor fuerza?",
            opciones: ["El coche", "El camión", "Ambos la misma fuerza", "Depende de la velocidad"],
            correcta: "Ambos la misma fuerza",
            explicacion: "Por la 3ra ley, las fuerzas son iguales. El coche se deforma más por tener menor masa."
          }
        ]
      },
      {
        id: "f1-5",
        titulo: "Trabajo y Energía",
        icono: "🔋",
        imagen: "linear-gradient(135deg, #eab308, #f97316)",
        concepto: `
          <h4>La energía no se crea, solo se transforma</h4>
          <p>El <strong>Trabajo (W)</strong> en física ocurre cuando una fuerza mueve un objeto a lo largo de una distancia. Si empujas una pared y no se mueve, no hiciste trabajo (en el sentido físico).</p>
          <div class="formula">W = F · d · cos(θ)</div>
          <p>La energía es la capacidad de realizar trabajo. Existen dos formas fundamentales:</p>
          <ul>
            <li><strong>Energía Cinética (Ec):</strong> La energía del movimiento. Un coche a alta velocidad tiene mucha.</li>
            <li><strong>Energía Potencial (Ep):</strong> La energía almacenada por la posición. Un objeto en lo alto de una montaña tiene energía potencial gravitatoria.</li>
          </ul>
          <div class="formula">
            Ec = ½ · m · v²<br>
            Ep = m · g · h
          </div>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> La Central Hidroeléctrica de Chicoasén usa la energía potencial del agua del río Grijalva. Al caer desde la presa, el agua se convierte en energía cinética, la cual hace girar turbinas gigantes para generar la electricidad que usas en casa.
          </div>
        `,
        actividades: [
          {
            pregunta: "Un mango de 0.5 kg cae desde 4 m de altura. ¿Cuánta energía potencial tenía? (g=10 m/s²)",
            opciones: ["20 J", "2 J", "40 J", "8 J"],
            correcta: "20 J",
            explicacion: "Ep = m · g · h = 0.5 · 10 · 4 = 20 J."
          },
          {
            pregunta: "¿Qué tipo de energía tiene un coche viajando por la carretera?",
            opciones: ["Potencial", "Cinética", "Nuclear", "Química"],
            correcta: "Cinética",
            explicacion: "Todo cuerpo en movimiento posee energía cinética."
          },
          {
            pregunta: "Si empujas una pared durante 1 hora, ¿cuánto trabajo realizaste?",
            opciones: ["Mucho", "Poco", "Cero", "Depende de la fuerza"],
            correcta: "Cero",
            explicacion: "El trabajo requiere desplazamiento (d). Si la pared no se movió (d=0), W=0."
          },
          {
            pregunta: "¿En qué se transforma la energía eléctrica en un foco?",
            opciones: ["Solo luz", "Luz y calor", "Sonido", "Energía nuclear"],
            correcta: "Luz y calor",
            explicacion: "Los focos se calientan, transformando energía en calor."
          },
          {
            pregunta: "Al soltar un resorte, este se estira. ¿Qué energía tenía almacenada?",
            opciones: ["Cinética", "Potencial elástica", "Gravitatoria", "Química"],
            correcta: "Potencial elástica",
            explicacion: "Los materiales elásticos almacenan energía al ser deformados."
          }
        ]
      }
    ]
  },

  // ==========================================================
  // CUARTO SEMESTRE - FÍSICA II
  // ==========================================================
  4: {
    titulo: "Física II",
    subtitulo: "Fluidos, Calor y Electricidad",
    semestre: "Cuarto Semestre",
    icono: "🌡️",
    descripcion: "Explora los fluidos, la termodinámica y la electricidad que mueve al mundo.",
    contexto: "En Chiapas, la física II te explica desde por qué flotan los barcos en la costa hasta cómo funcionan los paneles solares en las comunidades rurales y por qué el clima de la selva es tan húmedo.",
    temas: [
      {
        id: "f2-1",
        titulo: "Hidráulica y Fluidos",
        icono: "💧",
        imagen: "linear-gradient(135deg, #06b6d4, #3b82f6)",
        concepto: `
          <h4>Mecánica de Fluidos</h4>
          <p>Estudia el comportamiento de líquidos y gases. La <strong>presión</strong> es la fuerza distribuida sobre un área.</p>
          <div class="formula">
            Presión: P = F / A<br>
            Presión hidrostática: P = ρ · g · h
          </div>
          <p><strong>Principio de Arquímedes:</strong> Todo cuerpo sumergido recibe un empuje hacia arriba igual al peso del fluido que desaloja.</p>
          <p><strong>Principio de Pascal:</strong> La presión aplicada a un fluido se transmite con la misma intensidad en todas las direcciones.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> Los tanques de agua elevados en las comunidades de los Altos de Chiapas funcionan gracias a la presión hidrostática. A mayor altura (h) del tanque, mayor será la presión del agua que sale por las llaves de las casas, sin necesidad de bombas eléctricas.
          </div>
        `,
        actividades: [
          {
            pregunta: "¿Qué principio explica por qué un barco flota en el puerto de Chiapas?",
            opciones: ["Principio de Pascal", "Ley de Ohm", "Principio de Arquímedes", "Leyes de Newton"],
            correcta: "Principio de Arquímedes",
            explicacion: "El empuje del agua desalojada es igual al peso del barco."
          },
          {
            pregunta: "Si te sumerges al fondo de una alberca, ¿cómo cambia la presión?",
            opciones: ["Aumenta", "Disminuye", "Se mantiene igual", "Se vuelve cero"],
            correcta: "Aumenta",
            explicacion: "P = ρgh, a mayor profundidad (h), mayor presión."
          },
          {
            pregunta: "¿Qué principio se usa en una prensa hidráulica?",
            opciones: ["Arquímedes", "Pascal", "Bernoulli", "Newton"],
            correcta: "Pascal",
            explicacion: "La presión se transmite uniformemente, multiplicando la fuerza."
          },
          {
            pregunta: "Un objeto flota si su densidad es:",
            opciones: ["Mayor que el agua", "Igual que el agua", "Menor que el agua", "No importa"],
            correcta: "Menor que el agua",
            explicacion: "Si es menos denso, el empuje lo hace flotar."
          },
          {
            pregunta: "La ecuación de continuidad en fluidos se basa en la conservación de:",
            opciones: ["Energía", "Masa", "Presión", "Volumen"],
            correcta: "Masa",
            explicacion: "El gasto (Q = A·v) se mantiene constante en un tubo."
          }
        ]
      },
      {
        id: "f2-2",
        titulo: "Calor y Termodinámica",
        icono: "🔥",
        imagen: "linear-gradient(135deg, #f97316, #ef4444)",
        concepto: `
          <h4>Energía en tránsito</h4>
          <p>El <strong>calor</strong> es energía que se transfiere de un cuerpo a otro debido a una diferencia de temperatura. La <strong>temperatura</strong> es una medida de la energía cinética promedio de las partículas.</p>
          <p>El calor se transfiere por:</p>
          <ul>
            <li><strong>Conducción:</strong> Contacto directo (ej. una cuchara metálica en agua caliente).</li>
            <li><strong>Convección:</strong> Movimiento de fluidos (ej. el aire caliente sube).</li>
            <li><strong>Radiación:</strong> Ondas electromagnéticas (ej. el calor del Sol).</li>
          </ul>
          <div class="formula">
            Conversión: °F = (°C × 9/5) + 32<br>
            Calor específico: Q = m · c · ΔT
          </div>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> En Tuxtla Gutiérrez, el clima es muy cálido (35°C). Si viajas a San Cristóbal de las Casas (18°C), sientes la diferencia de temperatura. El calor fluye de tu cuerpo (más caliente) al ambiente frío por convección y radiación.
          </div>
        `,
        actividades: [
          {
            pregunta: "¿Cuál es la diferencia entre calor y temperatura?",
            opciones: ["Son lo mismo", "Calor es energía, temperatura es medida", "Temperatura es energía, calor es medida", "Ninguna"],
            correcta: "Calor es energía, temperatura es medida",
            explicacion: "El calor es transferencia de energía; la temperatura es la medida de la energía cinética promedio."
          },
          {
            pregunta: "Si tienes 25°C, ¿cuánto equivale en Fahrenheit?",
            opciones: ["77°F", "45°F", "98°F", "32°F"],
            correcta: "77°F",
            explicacion: "°F = (25 × 9/5) + 32 = 45 + 32 = 77°F."
          },
          {
            pregunta: "¿Cómo se transfiere el calor del Sol a la Tierra?",
            opciones: ["Conducción", "Convección", "Radiación", "Contacto"],
            correcta: "Radiación",
            explicacion: "El Sol emite ondas electromagnéticas que viajan por el espacio."
          },
          {
            pregunta: "La energía necesaria para elevar 1°C la temperatura de 1g de agua se llama:",
            opciones: ["Joule", "Caloría", "Watt", "Newton"],
            correcta: "Caloría",
            explicacion: "Es la definición de caloría."
          },
          {
            pregunta: "Si pones una cuchara metálica en agua caliente, el calor se transfiere por:",
            opciones: ["Radiación", "Convección", "Conducción", "Evaporación"],
            correcta: "Conducción",
            explicacion: "El metal es buen conductor de calor por contacto."
          }
        ]
      },
      {
        id: "f2-3",
        titulo: "Electricidad y Ley de Ohm",
        icono: "⚡",
        imagen: "linear-gradient(135deg, #eab308, #f59e0b)",
        concepto: `
          <h4>El flujo de electrones</h4>
          <p>La <strong>corriente eléctrica</strong> es el movimiento ordenado de electrones a través de un material conductor. La <strong>Ley de Ohm</strong> relaciona tres variables fundamentales:</p>
          <ul>
            <li><strong>Voltaje (V):</strong> La "presión" que empuja a los electrones (Volts).</li>
            <li><strong>Corriente (I):</strong> La cantidad de electrones que fluyen (Amperes).</li>
            <li><strong>Resistencia (R):</strong> La oposición al paso de la corriente (Ohms).</li>
          </ul>
          <div class="formula">
            V = I · R<br><br>
            Potencia: P = V · I
          </div>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> Muchas comunidades rurales de Chiapas usan paneles solares. Si un panel proporciona 12 V y conectas un foco LED de 4 Ω, la corriente es I = V / R = 12 / 4 = <strong>3 Amperes</strong>. La potencia consumida sería P = 12 × 3 = 36 Watts.
          </div>
        `,
        actividades: [
          {
            pregunta: "Si tienes una batería de 9 V y 3 Ω de resistencia, ¿cuál es la corriente?",
            opciones: ["27 A", "3 A", "0.33 A", "12 A"],
            correcta: "3 A",
            explicacion: "I = V / R = 9 / 3 = 3 A."
          },
          {
            pregunta: "¿Qué material es mejor conductor de electricidad?",
            opciones: ["Madera seca", "Plástico", "Cobre", "Vidrio"],
            correcta: "Cobre",
            explicacion: "El cobre es un metal con electrones libres."
          },
          {
            pregunta: "En un circuito en serie, la resistencia total es:",
            opciones: ["La suma de las resistencias", "La resta", "El producto", "La división"],
            correcta: "La suma de las resistencias",
            explicacion: "R_eq = R1 + R2 + R3..."
          },
          {
            pregunta: "La Ley de Ohm establece que el voltaje es igual a:",
            opciones: ["I / R", "I × R", "R / I", "I²R"],
            correcta: "I × R",
            explicacion: "V = I · R."
          },
          {
            pregunta: "¿Qué unidad mide la potencia eléctrica?",
            opciones: ["Volt", "Ampere", "Ohm", "Watt"],
            correcta: "Watt",
            explicacion: "La potencia se mide en Watts (W)."
          }
        ]
      },
      {
        id: "f2-4",
        titulo: "Electromagnetismo",
        icono: "🧲",
        imagen: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
        concepto: `
          <h4>La unión de dos fuerzas</h4>
          <p>Oersted descubrió que una corriente eléctrica genera un campo magnético. Faraday descubrió lo inverso: un campo magnético variable puede generar electricidad (inducción).</p>
          <div class="formula">
            Fuerza magnética: F = q · v · B · sen(θ)<br>
            Ley de Faraday: ε = - dΦ/dt
          </div>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> Los generadores eléctricos de las presas de Chiapas funcionan gracias a la inducción electromagnética. El agua hace girar una turbina, que mueve un imán dentro de una bobina de cobre, generando la electricidad que llega a tu hogar.
          </div>
        `,
        actividades: [
          {
            pregunta: "¿Quién descubrió que una corriente eléctrica genera un campo magnético?",
            opciones: ["Newton", "Faraday", "Oersted", "Einstein"],
            correcta: "Oersted",
            explicacion: "Hans Christian Oersted lo demostró con una brújula."
          },
          {
            pregunta: "La inducción electromagnética fue descubierta por:",
            opciones: ["Oersted", "Faraday", "Ohm", "Coulomb"],
            correcta: "Faraday",
            explicacion: "Michael Faraday descubrió que un campo magnético variable induce corriente."
          },
          {
            pregunta: "Un electroimán funciona con:",
            opciones: ["Un imán permanente", "Corriente eléctrica", "Agua", "Calor"],
            correcta: "Corriente eléctrica",
            explicacion: "Al pasar corriente por una bobina, se genera un campo magnético."
          },
          {
            pregunta: "Los transformadores eléctricos se basan en:",
            opciones: ["Ley de Ohm", "Inducción electromagnética", "Ley de Coulomb", "Ley de Pascal"],
            correcta: "Inducción electromagnética",
            explicacion: "Cambian el voltaje usando inducción entre bobinas."
          },
          {
            pregunta: "¿Qué partícula genera el campo magnético en un imán?",
            opciones: ["Protones", "Neutrones", "Electrones en movimiento", "Fotones"],
            correcta: "Electrones en movimiento",
            explicacion: "El movimiento de cargas (electrones) genera magnetismo."
          }
        ]
      }
    ]
  }
};