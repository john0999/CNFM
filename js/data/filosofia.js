/* ==========================================================
   DATA - Pensamiento Filosófico y Humanidades I-III
   Alineado al Programa MCCEMS (propósitos formativos de cada
   semestre) y al modelo educativo de COBACH Chiapas.
   Metodología: comunidades de diálogo y pensamiento complejo
   (crítico, creativo y cuidadoso).
========================================================== */

const FILOSOFIA = {
  1: {
    titulo: "Pensamiento Filosófico y Humanidades I",
    subtitulo: "El ejercicio de filosofar y la perspectiva humanista",
    semestre: "Primer Semestre",
    clase: "s1",
    icono: "💭",
    descripcion: "Pensar por cuenta propia, formular preguntas filosóficas, reconocer problemas filosóficos, cuestionar el conocimiento y dialogar en comunidad.",
    meta: "Desarrolle la capacidad de formular preguntas filosóficas y de participar en diálogos argumentativos. Para ello, aplica métodos de razonamiento y considera diversos enfoques filosóficos, lo que le permite analizar los desafíos de su entorno desde una perspectiva humanista.",
    contexto: "En Chiapas se filosofa todos los días: en la asamblea comunitaria, en la plática con los abuelos, en las preguntas que te haces al ver el cielo de los Altos. Filosofar es pensar por cuenta propia sobre lo que de verdad importa.",
    temas: [
      {
        id: "fh1-1",
        proposito: "Propósito formativo 1",
        titulo: "¿Qué es Filosofar? El Pensamiento Propio",
        icono: "🦉",
        imagen: "linear-gradient(135deg, #a16207, #854d0e)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> La filosofía no es una lista de autores para memorizar, sino una <strong>actividad</strong>: detenerte a pensar sobre lo que normalmente das por hecho y atreverte a pensar por ti mismo o por ti misma.
          </div>

          <h4>¿Para qué reflexionar sobre el pensamiento?</h4>
          <p>Todos los días repetimos ideas que escuchamos en casa, en redes sociales o en la televisión. Filosofar es preguntarte: <em>¿de dónde viene esta idea?, ¿es cierta?, ¿por qué la creo?</em> Así pasas de repetir a <strong>pensar con criterio propio</strong>.</p>
          <p>El filósofo Immanuel Kant lo resumió con una frase latina: <strong>«Sapere aude»</strong>, que significa «atrévete a pensar por ti mismo».</p>

          <h4>Naturaleza del pensamiento filosófico</h4>
          <table class="tabla-estudio">
            <tr><th>Rasgo</th><th>Qué significa</th></tr>
            <tr><td>Nace del asombro</td><td>Se sorprende ante lo que parece normal: ¿por qué existe algo en lugar de nada?</td></tr>
            <tr><td>Es radical</td><td>Va a la raíz de los problemas y busca los fundamentos.</td></tr>
            <tr><td>Es crítico</td><td>No acepta una idea solo porque «así ha sido siempre».</td></tr>
            <tr><td>Es universal</td><td>Se pregunta por temas que importan a todas las personas: la justicia, la libertad, la muerte.</td></tr>
            <tr><td>Es dialógico</td><td>Se construye conversando y argumentando con otras personas.</td></tr>
          </table>

          <h4>La perspectiva humanista</h4>
          <p>Las <strong>Humanidades</strong> (literatura, historia, música, pintura, fotografía, arqueología) muestran la experiencia humana en relatos, imágenes y sonidos. Una novela o una canción pueden hacernos filosofar tanto como un libro de filosofía. La perspectiva humanista pone en el centro la <strong>dignidad de las personas</strong> y el <strong>bien común</strong>.</p>

          <h4>Argumentar: la herramienta básica</h4>
          <p>Filosofar no es dar una opinión y ya: es <strong>dar razones</strong>. Un argumento tiene una idea que defiendes (tesis) y las razones que la sostienen.</p>
          <div class="formula">Tesis: «Deberíamos tener más áreas verdes en el plantel»<br>Razón: «porque reducen el calor y mejoran la concentración».</div>

          <h4>🛠️ Manos a la obra</h4>
          <p>Escribe tres ideas que hayas escuchado desde niño o niña y que nunca hayas cuestionado (por ejemplo, «los hombres no lloran»). Elige una y responde: ¿quién me lo enseñó?, ¿qué razones la sostienen?, ¿sigo de acuerdo?</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> En muchas comunidades de Chiapas las decisiones importantes se toman en <strong>asamblea</strong>: cada persona escucha, da sus razones y se busca un acuerdo para el bien de todos. Esa práctica de escuchar, argumentar y decidir en común es una forma de filosofar.
          </div>
        `,
        actividades: [
          { pregunta: "Según el programa, la filosofía se entiende principalmente como:", opciones: ["Una actividad de pensamiento que problematiza la realidad", "Una lista de autores para memorizar", "Una religión", "Una ciencia exacta como las matemáticas"], correcta: "Una actividad de pensamiento que problematiza la realidad", explicacion: "Se trata de aprender a filosofar, no solo de memorizar a los filósofos." },
          { pregunta: "La frase «Sapere aude» de Kant significa:", opciones: ["Atrévete a pensar por ti mismo", "Conócete a ti mismo", "Solo sé que no sé nada", "Pienso, luego existo"], correcta: "Atrévete a pensar por ti mismo", explicacion: "Kant invitaba a usar la propia razón sin depender de que otros piensen por nosotros." },
          { pregunta: "¿Qué rasgo del pensamiento filosófico consiste en ir a la raíz de los problemas?", opciones: ["Es radical", "Es repetitivo", "Es dogmático", "Es superficial"], correcta: "Es radical", explicacion: "Radical viene de «raíz»: busca los fundamentos de las cosas." },
          { pregunta: "En la perspectiva humanista, una novela, una canción o una pintura:", opciones: ["Pueden detonar la reflexión filosófica", "No tienen relación con la filosofía", "Solo sirven para entretener", "Están prohibidas en la clase"], correcta: "Pueden detonar la reflexión filosófica", explicacion: "Las Humanidades encarnan preguntas filosóficas en relatos, imágenes y sonidos." },
          { pregunta: "Filosofar implica, sobre todo:", opciones: ["Dar razones que sostengan lo que pienso", "Imponer mi opinión", "Repetir lo que dice la mayoría", "Evitar las preguntas difíciles"], correcta: "Dar razones que sostengan lo que pienso", explicacion: "La argumentación es la herramienta básica del pensamiento filosófico." }
        ]
      },
      {
        id: "fh1-2",
        proposito: "Propósito formativo 1",
        titulo: "Pensamiento Complejo y Comunidad de Diálogo",
        icono: "🔺",
        imagen: "linear-gradient(135deg, #b45309, #be185d)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> En esta materia se desarrolla un <strong>pensamiento complejo</strong>, que es a la vez crítico, creativo y cuidadoso. Y se practica en una <strong>comunidad de diálogo</strong>: el salón convertido en un espacio para pensar juntos.
          </div>

          <figure class="diagrama-quimica">
            <img src="images/filosofia/pensamiento-complejo.svg" alt="Tres círculos: pensamiento crítico, creativo y cuidadoso" loading="lazy">
            <figcaption>Las tres dimensiones se entrelazan; en el centro está la comunidad de diálogo.</figcaption>
          </figure>

          <h4>Las tres dimensiones</h4>
          <table class="tabla-estudio">
            <tr><th>Dimensión</th><th>Qué hace</th><th>Ejemplos de acciones</th></tr>
            <tr><td>Crítica</td><td>Piensa con criterio para discernir y decidir.</td><td>Problematizar, construir argumentos, pensar dilemas, clasificar ideas, pensar por uno mismo.</td></tr>
            <tr><td>Creativa</td><td>Abre posibilidades nuevas.</td><td>Formular hipótesis, dar ejemplos, establecer relaciones, ofrecer alternativas, replantear ideas.</td></tr>
            <tr><td>Cuidadosa</td><td>Piensa con ética del cuidado hacia los demás.</td><td>Dar lugar a las emociones, aceptar críticas, dar y recibir la palabra, escuchar con respeto.</td></tr>
          </table>

          <h4>¿Qué es una comunidad de diálogo?</h4>
          <p>Es la metodología central de la <strong>Filosofía para Niñas, Niños y Adolescentes</strong>, propuesta por Matthew Lipman. El grupo se sienta en círculo, parte de un detonador (un texto, un video, una imagen, una experiencia), formula preguntas y las discute buscando razones, no ganadores.</p>
          <ol>
            <li>Se presenta un <strong>detonador</strong>.</li>
            <li>Cada quien formula <strong>preguntas</strong> y el grupo elige una.</li>
            <li>Se <strong>dialoga</strong>: se dan razones, ejemplos y contraejemplos.</li>
            <li>Se <strong>cierra</strong> con lo que el grupo descubrió y las nuevas preguntas que surgieron.</li>
          </ol>

          <h4>Capacidades que se desarrollan</h4>
          <p><strong>Indagación</strong> (preguntar, pedir evidencias) · <strong>Conceptualización</strong> (definir, distinguir) · <strong>Razonamiento</strong> (inferir, detectar contradicciones) · <strong>Traducción</strong> (escuchar, ponerse en el lugar del otro).</p>

          <h4>🛠️ Manos a la obra: el friso comunitario</h4>
          <p>Peguen un pliego de papel dividido en tres columnas: crítico, creativo y cuidadoso. Vean un video sobre una comunidad que defiende su territorio y escriban en cada columna las acciones que reconozcan.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Cuando una comunidad decide cómo cuidar su manantial, piensa de forma <strong>crítica</strong> (¿quién lo contamina y por qué?), <strong>creativa</strong> (¿qué soluciones podemos inventar?) y <strong>cuidadosa</strong> (¿cómo escuchamos a todas las familias, también a las que piensan diferente?).
          </div>
        `,
        actividades: [
          { pregunta: "Las tres dimensiones del pensamiento complejo son:", opciones: ["Crítica, creativa y cuidadosa", "Rápida, exacta y obediente", "Lógica, matemática y física", "Antigua, moderna y contemporánea"], correcta: "Crítica, creativa y cuidadosa", explicacion: "Son las dimensiones que propone Lipman y que retoma el programa." },
          { pregunta: "Formular hipótesis y ofrecer alternativas corresponde a la dimensión:", opciones: ["Creativa", "Crítica", "Cuidadosa", "Memorística"], correcta: "Creativa", explicacion: "La dimensión creativa abre nuevas posibilidades." },
          { pregunta: "Escuchar con respeto y dar lugar a las emociones corresponde a la dimensión:", opciones: ["Cuidadosa", "Crítica", "Creativa", "Competitiva"], correcta: "Cuidadosa", explicacion: "El pensamiento cuidadoso integra la ética del cuidado." },
          { pregunta: "¿Quién propuso la Filosofía para Niños y las comunidades de diálogo?", opciones: ["Matthew Lipman", "René Descartes", "Platón", "Karl Marx"], correcta: "Matthew Lipman", explicacion: "Lipman desarrolló esta metodología en el siglo XX." },
          { pregunta: "En una comunidad de diálogo, el objetivo principal es:", opciones: ["Pensar juntos dando razones", "Ganar la discusión", "Que el docente dé la respuesta correcta", "Hablar sin escuchar"], correcta: "Pensar juntos dando razones", explicacion: "No se busca un ganador, sino comprender mejor el problema." }
        ]
      },
      {
        id: "fh1-3",
        proposito: "Propósito formativo 2",
        titulo: "El Arte de Preguntar",
        icono: "❓",
        imagen: "linear-gradient(135deg, #0f766e, #a16207)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> La pregunta es el motor de la filosofía: inicia, conduce y sostiene el diálogo. Pero <strong>no toda pregunta es filosófica</strong>.
          </div>

          <h4>¿Por qué y para qué preguntar?</h4>
          <p>Preguntamos para saber, para entender y para cuestionar. Una buena pregunta vale más que una respuesta rápida, porque abre caminos. A Sócrates se le atribuye la frase «solo sé que no sé nada»: reconocer lo que no sabemos es el primer paso para pensar.</p>

          <h4>Tipos de preguntas</h4>
          <table class="tabla-estudio">
            <tr><th>Tipo</th><th>Se responde con…</th><th>Ejemplo</th></tr>
            <tr><td>Informativa o de dato</td><td>un dato que se puede consultar</td><td>¿En qué año se fundó Tuxtla?</td></tr>
            <tr><td>Científica</td><td>observación y experimentación</td><td>¿Por qué llueve más en la selva?</td></tr>
            <tr><td>Técnica</td><td>un procedimiento</td><td>¿Cómo se injerta un árbol de café?</td></tr>
            <tr><td><strong>Filosófica</strong></td><td>reflexión y argumentos; admite varias respuestas razonables</td><td>¿Qué es la justicia? ¿Es libre una persona que tiene hambre?</td></tr>
          </table>

          <h4>¿Cómo reconocer una pregunta filosófica?</h4>
          <ul>
            <li>No se resuelve buscando en internet ni con un experimento.</li>
            <li>Toca conceptos fundamentales: verdad, justicia, libertad, belleza, identidad.</li>
            <li>Genera <strong>controversia razonable</strong>: personas inteligentes pueden responder distinto.</li>
            <li>Nunca se agota: cada respuesta abre nuevas preguntas.</li>
          </ul>

          <h4>Validez de una pregunta</h4>
          <p>Una pregunta es valiosa si es <strong>clara</strong>, si no esconde una respuesta («¿por qué los jóvenes son flojos?» ya asume algo) y si interesa realmente al grupo.</p>

          <h4>Cómo transformar una pregunta común en filosófica</h4>
          <div class="formula">
¿Cuánto cuesta un celular? → ¿Qué cosas tienen valor y cuáles tienen precio?<br>
¿A qué hora empieza la fiesta? → ¿Por qué celebramos en comunidad?
          </div>

          <h4>🛠️ Manos a la obra</h4>
          <p>Observa una foto de tu comunidad (el mercado, la milpa, una fiesta) y escribe 10 preguntas. Clasifícalas por tipo y elige la más filosófica para discutirla en clase.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Frente a las ruinas de Palenque puedes preguntar: «¿En qué año se construyó el Templo de las Inscripciones?» (dato), o bien: «¿Qué deja una civilización cuando desaparece?» y «¿Quién tiene derecho a decidir sobre el patrimonio de los pueblos mayas?» (filosóficas).
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es una pregunta filosófica?", opciones: ["¿Qué es la justicia?", "¿Cuántos municipios tiene Chiapas?", "¿Cómo se prepara el pozol?", "¿A qué temperatura hierve el agua?"], correcta: "¿Qué es la justicia?", explicacion: "No se responde con un dato ni con un experimento, sino con reflexión y argumentos." },
          { pregunta: "«¿Por qué llueve más en la selva que en el desierto?» es una pregunta:", opciones: ["Científica", "Filosófica", "Técnica", "Sin sentido"], correcta: "Científica", explicacion: "Se responde con observación y conocimiento de la ciencia." },
          { pregunta: "Una característica de las preguntas filosóficas es que:", opciones: ["Admiten varias respuestas razonables", "Tienen una sola respuesta en el libro", "Se responden con un dato", "No sirven para nada"], correcta: "Admiten varias respuestas razonables", explicacion: "Generan controversia razonable y abren nuevas preguntas." },
          { pregunta: "¿Qué problema tiene la pregunta «¿Por qué los jóvenes son flojos?»?", opciones: ["Esconde un prejuicio en la pregunta misma", "Es demasiado corta", "Es una pregunta científica", "No tiene ningún problema"], correcta: "Esconde un prejuicio en la pregunta misma", explicacion: "Da por hecho algo que habría que demostrar." },
          { pregunta: "La frase «solo sé que no sé nada» se atribuye a:", opciones: ["Sócrates", "Kant", "Lipman", "Sartre"], correcta: "Sócrates", explicacion: "Reconocer la propia ignorancia es el punto de partida del filosofar." }
        ]
      },
      {
        id: "fh1-4",
        proposito: "Propósito formativo 3",
        titulo: "Problemas Filosóficos: Realidad, Devenir y Tiempo",
        icono: "⏳",
        imagen: "linear-gradient(135deg, #4338ca, #0f766e)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Un <strong>problema filosófico</strong> es una pregunta de fondo que surge de la vida cotidiana y que no tiene una solución definitiva: obliga a pensar los conceptos con los que entendemos el mundo.
          </div>

          <h4>Categorizar y conceptualizar</h4>
          <p>Para entender el mundo lo ordenamos en <strong>conceptos</strong> (árbol, justicia, tiempo) y <strong>categorías</strong> (seres vivos, cosas, ideas). Filosofar es revisar esos conceptos: ¿qué entendemos realmente por «tiempo» o por «realidad»?</p>

          <h4>El problema del devenir</h4>
          <table class="tabla-estudio">
            <tr><th>Filósofo</th><th>Postura</th><th>Frase</th></tr>
            <tr><td>Heráclito</td><td>Todo cambia; la realidad es devenir.</td><td>«Nadie se baña dos veces en el mismo río».</td></tr>
            <tr><td>Parménides</td><td>Lo que realmente es no cambia; el cambio es apariencia.</td><td>«El ser es, el no ser no es».</td></tr>
          </table>
          <p>¿Eres la misma persona que eras a los cinco años? Tu cuerpo, tus ideas y tus gustos cambiaron… y sin embargo dices «yo». Ese es el problema del devenir y la identidad.</p>

          <h4>El problema del tiempo</h4>
          <ul>
            <li>¿El tiempo existe fuera de nosotros o es una forma de ordenar nuestras experiencias?</li>
            <li>Para muchas culturas occidentales el tiempo es una línea que avanza; para los antiguos mayas era también <strong>cíclico</strong>: los calendarios se repetían en ciclos (el de 260 días y el de 365 días se combinaban en la Rueda Calendárica de 52 años).</li>
            <li>¿Por qué una hora de clase aburrida parece más larga que una hora con tus amigos?</li>
          </ul>

          <h4>Otros problemas filosóficos</h4>
          <p>Realidad · Devenir · Tiempo · Muerte · Libertad · Felicidad · Lenguaje · Sentido de la vida (los veremos en el siguiente tema).</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Busca una foto tuya de hace diez años. Haz una lista de lo que cambió y de lo que permanece. Escribe un párrafo respondiendo: ¿qué hace que sigas siendo tú?</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> El río Grijalva cambió profundamente con la construcción de las presas: ¿sigue siendo el mismo río? Y la cuenta del tiempo de los mayas, registrada en estelas como las de Toniná o Yaxchilán, nos recuerda que hay otras formas de entender el tiempo además del reloj.
          </div>
        `,
        actividades: [
          { pregunta: "La frase «Nadie se baña dos veces en el mismo río» expresa la idea de:", opciones: ["El devenir: todo cambia", "Que el agua está contaminada", "Que el tiempo no existe", "Que los ríos son eternos"], correcta: "El devenir: todo cambia", explicacion: "Heráclito sostenía que la realidad está en cambio constante." },
          { pregunta: "¿Qué filósofo sostenía que el cambio es solo apariencia?", opciones: ["Parménides", "Heráclito", "Sócrates", "Kant"], correcta: "Parménides", explicacion: "Para Parménides, el ser verdadero no cambia." },
          { pregunta: "Un problema filosófico se caracteriza por:", opciones: ["No tener una solución definitiva y obligar a revisar conceptos", "Resolverse con una calculadora", "Tener una sola respuesta correcta", "Ser un problema de tránsito"], correcta: "No tener una solución definitiva y obligar a revisar conceptos", explicacion: "Toca conceptos fundamentales como tiempo, realidad o libertad." },
          { pregunta: "Para los antiguos mayas, el tiempo se entendía también como:", opciones: ["Cíclico", "Inexistente", "Solo lineal", "Un invento europeo"], correcta: "Cíclico", explicacion: "Sus calendarios se combinaban en ciclos que se repetían." },
          { pregunta: "Organizar el mundo en conceptos y categorías se llama:", opciones: ["Conceptualizar", "Memorizar", "Calcular", "Olvidar"], correcta: "Conceptualizar", explicacion: "Conceptualizar es dar sentido y orden a la experiencia mediante conceptos." }
        ]
      },
      {
        id: "fh1-5",
        proposito: "Propósito formativo 3",
        titulo: "Libertad, Felicidad, Muerte y Sentido de la Vida",
        icono: "🕊️",
        imagen: "linear-gradient(135deg, #be185d, #6d28d9)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Las normas, los valores y las creencias de tu familia y tu comunidad te dan una forma de ver el mundo. Filosofar es analizar esa visión, no para despreciarla, sino para <strong>comprenderla y decidir con razones</strong>.
          </div>

          <h4>La libertad</h4>
          <p>¿Somos libres o todo está determinado por nuestra familia, nuestra economía o nuestros genes? Jean-Paul Sartre afirmó que el ser humano está «condenado a ser libre»: aunque no elijamos nuestras circunstancias, siempre decidimos qué hacer con ellas.</p>

          <h4>La felicidad</h4>
          <table class="tabla-estudio">
            <tr><th>Postura</th><th>La felicidad es…</th></tr>
            <tr><td>Aristóteles</td><td>vivir de acuerdo con la virtud y desarrollar lo mejor de uno mismo (eudaimonía).</td></tr>
            <tr><td>Epicuro</td><td>la tranquilidad del alma (ataraxia) y los placeres sencillos y moderados.</td></tr>
            <tr><td>Estoicos</td><td>aceptar lo que no depende de nosotros y gobernar lo que sí.</td></tr>
          </table>

          <h4>La muerte</h4>
          <p>Es la única certeza que compartimos. Cada cultura la entiende a su manera: en México, el Día de Muertos no es solo duelo; es un reencuentro con quienes se fueron. Pensar la muerte nos obliga a pensar cómo queremos vivir.</p>

          <h4>El sentido de la vida</h4>
          <p>Albert Camus usó el mito de Sísifo, condenado a subir una piedra que siempre vuelve a caer, para preguntarse si la vida tiene sentido. Su respuesta: el sentido no viene dado, lo <strong>construimos</strong> con lo que hacemos.</p>

          <h4>🛠️ Manos a la obra: comunidad de diálogo</h4>
          <p>Discutan en círculo: «¿Puede ser feliz una persona que no es libre?». Antes de hablar, cada quien escribe su postura y una razón. Al final, registren si alguien cambió de opinión y por qué.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> En el poema «Algo sobre la muerte del mayor Sabines», el poeta tuxtleco <strong>Jaime Sabines</strong> escribe sobre la muerte de su padre con dolor, ternura y rabia. Leer un fragmento en clase puede abrir preguntas como: ¿cómo se vive el duelo?, ¿qué queda de las personas que amamos?
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué filósofo afirmó que el ser humano está «condenado a ser libre»?", opciones: ["Jean-Paul Sartre", "Aristóteles", "Epicuro", "Parménides"], correcta: "Jean-Paul Sartre", explicacion: "Para Sartre siempre elegimos, incluso cuando creemos que no." },
          { pregunta: "Para Epicuro, la felicidad consiste en:", opciones: ["La tranquilidad del alma y los placeres moderados", "Tener mucho dinero", "Ser famoso", "Evitar pensar"], correcta: "La tranquilidad del alma y los placeres moderados", explicacion: "Epicuro buscaba la ataraxia: ausencia de perturbación." },
          { pregunta: "Camus usó el mito de Sísifo para reflexionar sobre:", opciones: ["El sentido de la vida", "La ley de la gravedad", "Las matemáticas", "La agricultura"], correcta: "El sentido de la vida", explicacion: "Concluyó que el sentido se construye con nuestras acciones." },
          { pregunta: "Jaime Sabines, autor de «Algo sobre la muerte del mayor Sabines», nació en:", opciones: ["Tuxtla Gutiérrez", "Monterrey", "Guadalajara", "Mérida"], correcta: "Tuxtla Gutiérrez", explicacion: "Sabines es uno de los grandes poetas de Chiapas y de México." },
          { pregunta: "Analizar las creencias de nuestra comunidad desde la filosofía significa:", opciones: ["Comprenderlas y decidir con razones", "Despreciarlas", "Aceptarlas sin pensar", "Prohibirlas"], correcta: "Comprenderlas y decidir con razones", explicacion: "El propósito no es rechazar, sino fundamentar nuestra adhesión o distancia." }
        ]
      },
      {
        id: "fh1-6",
        proposito: "Propósito formativo 4",
        titulo: "Conocimiento, Ciencia y Verdad",
        icono: "🔬",
        imagen: "linear-gradient(135deg, #1d4ed8, #0f766e)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> ¿Cómo sabemos lo que sabemos? La <strong>teoría del conocimiento</strong> (epistemología) estudia de dónde viene el conocimiento, cuáles son sus límites y qué significa que algo sea verdadero.
          </div>

          <h4>Percepción y razón</h4>
          <table class="tabla-estudio">
            <tr><th>Corriente</th><th>El conocimiento viene de…</th><th>Representante</th></tr>
            <tr><td>Racionalismo</td><td>la razón; los sentidos pueden engañar.</td><td>René Descartes: «Pienso, luego existo».</td></tr>
            <tr><td>Empirismo</td><td>la experiencia; nacemos como una «hoja en blanco».</td><td>John Locke, David Hume</td></tr>
            <tr><td>Criticismo</td><td>la unión de experiencia y razón.</td><td>Immanuel Kant</td></tr>
          </table>

          <h4>El problema de la verdad</h4>
          <ul>
            <li><strong>Correspondencia:</strong> algo es verdad si coincide con los hechos («llueve» es verdad si está lloviendo).</li>
            <li><strong>Coherencia:</strong> es verdad si encaja sin contradicción con lo que ya sabemos.</li>
            <li><strong>Consenso:</strong> es verdad lo que una comunidad acepta tras discutirlo con razones.</li>
          </ul>
          <p>Hay <strong>grados de verdad</strong>: no es lo mismo una opinión, una creencia justificada o un conocimiento comprobado.</p>

          <h4>Ciencia y otros saberes</h4>
          <p>La ciencia es una actividad humana, histórica y por lo tanto <strong>falible</strong>: se corrige con nuevas evidencias. Junto a ella existen <strong>saberes sociales, humanísticos y tradicionales</strong>, como el conocimiento de las parteras, de los campesinos sobre el temporal o de los médicos tradicionales sobre las plantas. El diálogo entre saberes permite comprender mejor la realidad.</p>

          <h4>🛠️ Manos a la obra (transversal con Ciencias)</h4>
          <p>Entrevista a una persona mayor sobre cómo sabe cuándo sembrar maíz. Compara su conocimiento con lo que dice la ciencia sobre el clima y responde: ¿qué tipo de saber es cada uno?, ¿cómo se comprueba?, ¿se contradicen o se complementan?</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> En los Altos de Chiapas, médicos tradicionales y parteras conocen cientos de plantas medicinales. Hoy, algunos programas de salud trabajan junto con ellos: un ejemplo de encuentro entre el conocimiento científico y los saberes de los pueblos.
          </div>
        `,
        actividades: [
          { pregunta: "La frase «Pienso, luego existo» pertenece a:", opciones: ["René Descartes", "John Locke", "Sócrates", "Camus"], correcta: "René Descartes", explicacion: "Descartes es el gran representante del racionalismo." },
          { pregunta: "Para el empirismo, el conocimiento proviene de:", opciones: ["La experiencia de los sentidos", "Solo la razón", "Los sueños", "La tradición sin cuestionar"], correcta: "La experiencia de los sentidos", explicacion: "Locke decía que nacemos como una hoja en blanco." },
          { pregunta: "Según la teoría de la verdad como correspondencia, un enunciado es verdadero si:", opciones: ["Coincide con los hechos", "Lo dice mucha gente", "Lo dice una autoridad", "Suena bonito"], correcta: "Coincide con los hechos", explicacion: "«Llueve» es verdad si efectivamente está lloviendo." },
          { pregunta: "Decir que la ciencia es falible significa que:", opciones: ["Puede corregirse con nuevas evidencias", "Siempre está equivocada", "No sirve para nada", "Nunca cambia"], correcta: "Puede corregirse con nuevas evidencias", explicacion: "Su carácter humano e histórico le permite mejorar." },
          { pregunta: "El conocimiento de las parteras sobre las plantas medicinales es un ejemplo de:", opciones: ["Saber tradicional", "Teoría de la relatividad", "Posverdad", "Falacia"], correcta: "Saber tradicional", explicacion: "Es un saber construido por generaciones que puede dialogar con la ciencia." }
        ]
      },
      {
        id: "fh1-7",
        proposito: "Propósito formativo 4",
        titulo: "Posverdad e Interpretación",
        icono: "📱",
        imagen: "linear-gradient(135deg, #dc2626, #7c2d12)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> La <strong>posverdad</strong> es la distorsión deliberada de la realidad que apela a las emociones y creencias para influir en la opinión pública. En ella, lo que <em>sentimos</em> pesa más que los hechos.
          </div>

          <h4>¿Cómo funciona la posverdad?</h4>
          <ul>
            <li>Mensajes que provocan miedo, enojo o indignación y se comparten sin verificar.</li>
            <li>Titulares exagerados que no corresponden con el contenido.</li>
            <li>Imágenes reales usadas fuera de su contexto.</li>
            <li>Burbujas de redes sociales: los algoritmos nos muestran lo que ya pensamos.</li>
          </ul>
          <p>En 2016, el Diccionario Oxford eligió <em>post-truth</em> (posverdad) como la palabra del año.</p>

          <h4>Cómo verificar antes de compartir</h4>
          <table class="tabla-estudio">
            <tr><th>Pregunta</th><th>Por qué importa</th></tr>
            <tr><td>¿Quién lo publica?</td><td>Una fuente identificable responde por lo que dice.</td></tr>
            <tr><td>¿Cuándo se publicó?</td><td>Las noticias viejas se reciclan como nuevas.</td></tr>
            <tr><td>¿Lo confirman otras fuentes?</td><td>Un dato real aparece en varios medios serios.</td></tr>
            <tr><td>¿Qué emoción me provoca?</td><td>Si me enoja mucho, debo revisarlo con más cuidado.</td></tr>
          </table>

          <h4>¿Qué implica interpretar?</h4>
          <p>Interpretar es dar sentido a un texto, una imagen o un hecho. Toda interpretación parte de un punto de vista (la <strong>hermenéutica</strong> estudia este proceso), pero no todas valen lo mismo: una buena interpretación se apoya en el texto y en razones, no solo en lo que queremos creer.</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Elige un mensaje que hayas recibido por WhatsApp o redes sociales. Aplícale las cuatro preguntas de verificación y presenta al grupo si es información, opinión o posverdad.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Después de los sismos de 2017 circularon audios y mensajes que anunciaban «un terremoto mayor en las próximas horas». Los sismos no se pueden predecir con exactitud; esos mensajes generaron pánico. Verificar con fuentes oficiales, como el Servicio Sismológico Nacional, es un acto de responsabilidad con la comunidad.
          </div>
        `,
        actividades: [
          { pregunta: "La posverdad se caracteriza porque:", opciones: ["Las emociones y creencias pesan más que los hechos", "Siempre dice la verdad", "Solo existe en los libros", "Es lo mismo que la ciencia"], correcta: "Las emociones y creencias pesan más que los hechos", explicacion: "Es una distorsión deliberada que manipula para influir en la opinión pública." },
          { pregunta: "¿Cuál es una buena práctica antes de compartir una noticia?", opciones: ["Verificar si otras fuentes la confirman", "Compartirla rápido para ganar likes", "Creerla si me enoja mucho", "Reenviarla a todos mis contactos"], correcta: "Verificar si otras fuentes la confirman", explicacion: "Un dato real suele aparecer en varios medios serios." },
          { pregunta: "La disciplina que estudia el proceso de interpretar se llama:", opciones: ["Hermenéutica", "Astronomía", "Aritmética", "Geología"], correcta: "Hermenéutica", explicacion: "La hermenéutica reflexiona sobre cómo damos sentido a los textos y los hechos." },
          { pregunta: "Un mensaje que anuncia la hora exacta de un próximo sismo es:", opciones: ["Desinformación, porque los sismos no se pueden predecir con exactitud", "Información científica confiable", "Una opinión respetable", "Un dato oficial"], correcta: "Desinformación, porque los sismos no se pueden predecir con exactitud", explicacion: "Hay que verificar con fuentes oficiales como el Servicio Sismológico Nacional." },
          { pregunta: "Una buena interpretación de un texto:", opciones: ["Se apoya en el texto y en razones", "Dice lo que yo quiero que diga", "Ignora el contexto", "Siempre es la del docente"], correcta: "Se apoya en el texto y en razones", explicacion: "Toda interpretación tiene un punto de vista, pero debe fundamentarse." }
        ]
      },
      {
        id: "fh1-8",
        proposito: "Propósito formativo 5",
        titulo: "Dialogar con Rigor: Reglas y Controversia",
        icono: "🗣️",
        imagen: "linear-gradient(135deg, #0e7490, #4338ca)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Dialogar no es discutir para ganar. En un diálogo filosófico, el desacuerdo es una <strong>oportunidad para pensar mejor</strong>, siempre que se respeten algunas reglas.
          </div>

          <h4>¿Para qué dialogamos?</h4>
          <p>Para comprender mejor un problema, descubrir supuestos que no veíamos, corregir nuestras ideas y construir acuerdos. En el diálogo, el otro no es un enemigo, sino alguien que me ayuda a pensar.</p>

          <h4>Actitudes del diálogo filosófico</h4>
          <ul>
            <li><strong>Apertura:</strong> estar dispuesto a cambiar de opinión ante una buena razón.</li>
            <li><strong>Humildad:</strong> reconocer que puedo estar equivocado.</li>
            <li><strong>Empatía:</strong> intentar entender por qué el otro piensa así.</li>
            <li><strong>Rigor:</strong> pedir y dar razones, definir los términos.</li>
          </ul>

          <h4>Reglas para la discusión</h4>
          <ol>
            <li>Se pide la palabra y se respeta el turno.</li>
            <li>Se critican las ideas, nunca a las personas.</li>
            <li>Toda afirmación se acompaña de una razón.</li>
            <li>Se escucha hasta el final antes de responder.</li>
            <li>Se aclara de qué se está hablando: ¿qué entendemos por «justo», «libre» o «normal»?</li>
          </ol>

          <h4>Frases útiles</h4>
          <table class="tabla-estudio">
            <tr><th>Para…</th><th>Puedes decir</th></tr>
            <tr><td>Construir sobre otra idea</td><td>«Estoy de acuerdo con… y agregaría que…»</td></tr>
            <tr><td>Disentir con respeto</td><td>«Entiendo tu punto, pero no estoy de acuerdo porque…»</td></tr>
            <tr><td>Pedir razones</td><td>«¿Por qué piensas eso?» «¿Tienes un ejemplo?»</td></tr>
            <tr><td>Ofrecer un contraejemplo</td><td>«¿Y qué pasaría en el caso de…?»</td></tr>
          </table>

          <h4>La controversia como posibilidad</h4>
          <p>Un tema controvertido (¿deben prohibirse los celulares en el plantel?) es ideal para filosofar, porque obliga a examinar razones de ambos lados.</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Organicen una comunidad de diálogo sobre un problema actual de su plantel. Una persona observa y registra en una lista de cotejo: ¿se dieron razones?, ¿se respetaron los turnos?, ¿alguien cambió de opinión?</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> El filósofo Carlos Lenkersdorf, que convivió durante años con el pueblo tojolabal de Chiapas, destacó que en esa lengua es fundamental la palabra «nosotros» (-tik) y que se valora tanto el escuchar como el hablar. Una comunidad de diálogo comparte esa idea: pensar es una tarea colectiva.
          </div>
        `,
        actividades: [
          { pregunta: "En un diálogo filosófico, el desacuerdo se entiende como:", opciones: ["Una oportunidad para pensar mejor", "Una pelea que hay que ganar", "Algo que debe evitarse siempre", "Una falta de respeto"], correcta: "Una oportunidad para pensar mejor", explicacion: "La controversia razonable impulsa la reflexión." },
          { pregunta: "¿Cuál es una regla del diálogo filosófico?", opciones: ["Criticar las ideas, nunca a las personas", "Hablar todos al mismo tiempo", "Burlarse de quien se equivoca", "No dar razones"], correcta: "Criticar las ideas, nunca a las personas", explicacion: "El respeto a las personas permite discutir con libertad." },
          { pregunta: "Estar dispuesto a cambiar de opinión ante una buena razón es la actitud de:", opciones: ["Apertura", "Terquedad", "Indiferencia", "Competencia"], correcta: "Apertura", explicacion: "La apertura permite que el diálogo nos transforme." },
          { pregunta: "Para disentir con respeto puedes decir:", opciones: ["Entiendo tu punto, pero no estoy de acuerdo porque…", "Eso es una tontería.", "Cállate.", "Tú no sabes nada."], correcta: "Entiendo tu punto, pero no estoy de acuerdo porque…", explicacion: "Reconoces la idea del otro y das tus razones." },
          { pregunta: "Carlos Lenkersdorf destacó la importancia del «nosotros» en la lengua:", opciones: ["Tojolabal", "Inglesa", "Latina", "Griega"], correcta: "Tojolabal", explicacion: "Vivió con el pueblo tojolabal de Chiapas y estudió su forma de pensar en comunidad." }
        ]
      }
    ]
  },

  2: {
    titulo: "Pensamiento Filosófico y Humanidades II",
    subtitulo: "Las reflexiones filosóficas sobre el Conocer",
    semestre: "Segundo Semestre",
    clase: "s2",
    icono: "🔍",
    descripcion: "El Ser y la existencia, la ética y los dilemas morales, la bioética y la inteligencia artificial, la perspectiva de género y el humanismo mexicano.",
    meta: "Desarrolle la capacidad de problematizar el conocimiento desde una actitud filosófica, asumiendo que conocer implica posicionarse, interpretar y dialogar con distintos marcos de sentido.",
    contexto: "Chiapas es uno de los estados con mayor diversidad cultural de México. Conocer desde aquí implica dialogar con muchas formas de entender el mundo, la justicia y la vida buena.",
    temas: [
      {
        id: "fh2-1",
        proposito: "Propósito formativo 1",
        titulo: "El Asombro y la Pregunta por el Ser",
        icono: "✨",
        imagen: "linear-gradient(135deg, #4338ca, #7c3aed)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Platón y Aristóteles coincidían en que la filosofía comienza con el <strong>asombro</strong>: maravillarse de que las cosas existan y preguntarse qué son realmente.
          </div>

          <h4>Ontología y metafísica</h4>
          <ul>
            <li><strong>Metafísica:</strong> rama de la filosofía que estudia los principios más generales de la realidad, más allá de lo que perciben los sentidos.</li>
            <li><strong>Ontología:</strong> parte de la metafísica que estudia el <strong>Ser</strong>: ¿qué significa que algo «es»?, ¿qué tienen en común una piedra, un número, un sueño y una persona?</li>
          </ul>

          <h4>Algunas respuestas a «¿qué es el Ser?»</h4>
          <table class="tabla-estudio">
            <tr><th>Filósofo</th><th>Respuesta</th></tr>
            <tr><td>Parménides</td><td>El Ser es uno, eterno e inmutable.</td></tr>
            <tr><td>Platón</td><td>Lo que verdaderamente es son las Ideas (la Justicia, la Belleza); las cosas son copias.</td></tr>
            <tr><td>Aristóteles</td><td>El ser se dice de muchas maneras: sustancia, cualidad, cantidad, relación…</td></tr>
            <tr><td>Martin Heidegger</td><td>Hemos olvidado preguntarnos por el sentido del Ser; el ser humano es el único que se lo pregunta.</td></tr>
          </table>

          <h4>Los límites del pensamiento</h4>
          <p>¿Podemos conocerlo todo? Kant sostuvo que solo conocemos las cosas <em>tal como se nos aparecen</em>, no como son «en sí mismas». Reconocer los límites del pensamiento no es rendirse, sino pensar con humildad.</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Sal al patio o asómate por la ventana durante cinco minutos en silencio. Escribe tres cosas que te asombren y transforma cada una en una pregunta filosófica.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Para muchos pueblos mayas de Chiapas, los cerros, los ríos y el maíz no son solo «cosas», sino seres con los que se guarda una relación de respeto. Esto nos invita a preguntarnos: ¿qué es lo que existe?, ¿quién decide qué cuenta como un «ser»?
          </div>
        `,
        actividades: [
          { pregunta: "Según Platón y Aristóteles, la filosofía comienza con:", opciones: ["El asombro", "El miedo", "El dinero", "La obediencia"], correcta: "El asombro", explicacion: "Maravillarse ante la realidad despierta el deseo de saber." },
          { pregunta: "La parte de la metafísica que estudia el Ser se llama:", opciones: ["Ontología", "Ética", "Estética", "Lógica"], correcta: "Ontología", explicacion: "La ontología se pregunta qué significa ser." },
          { pregunta: "Para Platón, lo que verdaderamente es son:", opciones: ["Las Ideas", "Los objetos materiales", "Los sueños", "Las opiniones"], correcta: "Las Ideas", explicacion: "Las cosas sensibles son copias imperfectas de las Ideas." },
          { pregunta: "Kant sostuvo que conocemos las cosas:", opciones: ["Tal como se nos aparecen", "Tal como son en sí mismas, sin límite", "Solo por revelación", "Nunca de ninguna forma"], correcta: "Tal como se nos aparecen", explicacion: "El conocimiento tiene límites: no accedemos a la «cosa en sí»." },
          { pregunta: "¿Qué filósofo del siglo XX dijo que hemos olvidado preguntarnos por el sentido del Ser?", opciones: ["Martin Heidegger", "Epicuro", "John Locke", "Sócrates"], correcta: "Martin Heidegger", explicacion: "Heidegger dedicó su obra a la pregunta por el Ser." }
        ]
      },
      {
        id: "fh2-2",
        proposito: "Propósito formativo 1",
        titulo: "Realidad, Apariencia y Existencia Humana",
        icono: "🕯️",
        imagen: "linear-gradient(135deg, #78350f, #4338ca)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> No todo lo que parece, es. La filosofía distingue entre la <strong>apariencia</strong> (lo que se muestra) y la <strong>realidad</strong> (lo que es), y se pregunta qué hace única la existencia humana.
          </div>

          <h4>La alegoría de la caverna</h4>
          <figure class="diagrama-quimica">
            <img src="images/filosofia/caverna-platon.svg" alt="Alegoría de la caverna de Platón" loading="lazy">
            <figcaption>Los prisioneros solo ven sombras y creen que son la realidad. Quien sale de la caverna descubre el mundo iluminado por el sol.</figcaption>
          </figure>
          <p>En <em>La República</em>, Platón imagina a unos prisioneros encadenados que solo ven sombras en la pared. Si uno se libera y sale, al principio la luz lo deslumbra, pero después descubre la realidad. Al volver para contarlo, los demás no le creen.</p>
          <p><strong>Pregunta para hoy:</strong> ¿las pantallas y las redes sociales son nuestras nuevas sombras?</p>

          <h4>El ser humano y su existencia</h4>
          <table class="tabla-estudio">
            <tr><th>Idea</th><th>Autor</th><th>Explicación</th></tr>
            <tr><td>«La existencia precede a la esencia»</td><td>Jean-Paul Sartre</td><td>Primero existimos y después nos definimos con nuestras decisiones; no nacemos con un destino fijo.</td></tr>
            <tr><td>«El ser humano es un ser para la muerte»</td><td>Martin Heidegger</td><td>Saber que vamos a morir nos obliga a vivir de forma auténtica.</td></tr>
            <tr><td>«Yo soy yo y mi circunstancia»</td><td>José Ortega y Gasset</td><td>No podemos entendernos sin el lugar, la época y la comunidad en que vivimos.</td></tr>
          </table>

          <h4>🛠️ Manos a la obra</h4>
          <p>Escribe tu propia versión de la caverna ambientada hoy: ¿cuáles serían las sombras?, ¿qué significaría salir a la luz?, ¿por qué nadie le creería a quien vuelve?</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> «Yo soy yo y mi circunstancia»: un joven de Ocosingo y otro de Tapachula comparten la edad, pero su circunstancia (la lengua, el clima, la economía, las costumbres) moldea de forma distinta quiénes llegan a ser. ¿Qué parte de ti es tu circunstancia y qué parte es tu decisión?
          </div>
        `,
        actividades: [
          { pregunta: "En la alegoría de la caverna, las sombras representan:", opciones: ["La apariencia que confundimos con la realidad", "El conocimiento verdadero", "El sol", "La felicidad"], correcta: "La apariencia que confundimos con la realidad", explicacion: "Los prisioneros creen que las sombras son todo lo que existe." },
          { pregunta: "La alegoría de la caverna aparece en la obra:", opciones: ["La República de Platón", "El Leviatán de Hobbes", "Balún Canán", "El contrato social"], correcta: "La República de Platón", explicacion: "Está en el libro VII de La República." },
          { pregunta: "«La existencia precede a la esencia» significa que:", opciones: ["Nos definimos por nuestras decisiones", "Nacemos con un destino fijo", "La esencia es más importante que vivir", "No existimos"], correcta: "Nos definimos por nuestras decisiones", explicacion: "Para Sartre, primero existimos y luego nos hacemos." },
          { pregunta: "La frase «Yo soy yo y mi circunstancia» es de:", opciones: ["José Ortega y Gasset", "Platón", "Kant", "Descartes"], correcta: "José Ortega y Gasset", explicacion: "Destaca que nuestra vida está ligada a nuestro contexto." },
          { pregunta: "La filosofía distingue entre realidad y:", opciones: ["Apariencia", "Matemáticas", "Música", "Química"], correcta: "Apariencia", explicacion: "No todo lo que parece es como realmente es." }
        ]
      },
      {
        id: "fh2-3",
        proposito: "Propósito formativo 2",
        titulo: "Ética y Moral: Fundamentos para Decidir",
        icono: "⚖️",
        imagen: "linear-gradient(135deg, #0f766e, #15803d)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> La <strong>moral</strong> es el conjunto de normas y costumbres que una comunidad considera buenas. La <strong>ética</strong> es la reflexión filosófica sobre esas normas: se pregunta <em>por qué</em> algo es bueno o malo.
          </div>

          <h4>Moral y ética</h4>
          <table class="tabla-estudio">
            <tr><th>Moral</th><th>Ética</th></tr>
            <tr><td>Normas concretas que se aprenden en la familia y la comunidad.</td><td>Reflexión crítica sobre esas normas.</td></tr>
            <tr><td>«No se miente».</td><td>«¿Por qué no se debe mentir? ¿Hay casos en que mentir es correcto?»</td></tr>
          </table>

          <h4>Criterios para juzgar una acción</h4>
          <table class="tabla-estudio">
            <tr><th>Teoría</th><th>Una acción es buena si…</th><th>Autor</th></tr>
            <tr><td>Ética de la virtud</td><td>la haría una persona virtuosa (justa, valiente, prudente).</td><td>Aristóteles</td></tr>
            <tr><td>Deontología (deber)</td><td>se hace por deber y podría ser una regla para todos.</td><td>Immanuel Kant</td></tr>
            <tr><td>Utilitarismo</td><td>produce el mayor bienestar para el mayor número de personas.</td><td>Jeremy Bentham, John Stuart Mill</td></tr>
            <tr><td>Ética del cuidado</td><td>atiende las relaciones y las necesidades de las personas vulnerables.</td><td>Carol Gilligan</td></tr>
          </table>

          <h4>Ética y política</h4>
          <p>La ética pregunta qué es una vida buena; la política, cómo organizar la vida en común. Para Aristóteles eran inseparables: el ser humano es un «animal político» que solo se realiza en comunidad.</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Elige una norma de tu casa o de tu comunidad. Analízala con dos de las teorías de la tabla y escribe si tu conclusión cambia según la teoría.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> En muchas comunidades se realizan trabajos colectivos para arreglar caminos o la escuela. Desde la ética de la virtud, participar muestra solidaridad; desde el utilitarismo, beneficia a la mayoría; y desde la ética del cuidado, ¿cómo se apoya a las familias que no pueden participar?
          </div>
        `,
        actividades: [
          { pregunta: "La diferencia entre moral y ética es que la ética:", opciones: ["Reflexiona críticamente sobre las normas morales", "Es lo mismo que la ley", "Solo existe en las religiones", "No tiene relación con la moral"], correcta: "Reflexiona críticamente sobre las normas morales", explicacion: "La moral son las normas; la ética pregunta por sus fundamentos." },
          { pregunta: "Para el utilitarismo, una acción es buena si:", opciones: ["Produce el mayor bienestar para el mayor número", "Se hace por deber", "La ordena una autoridad", "Beneficia solo a quien la hace"], correcta: "Produce el mayor bienestar para el mayor número", explicacion: "Bentham y Mill propusieron este criterio." },
          { pregunta: "La ética del deber (deontología) se asocia con:", opciones: ["Immanuel Kant", "Epicuro", "Heráclito", "Jaime Sabines"], correcta: "Immanuel Kant", explicacion: "Kant sostuvo que debemos actuar por deber, según reglas válidas para todos." },
          { pregunta: "Aristóteles afirmó que el ser humano es un:", opciones: ["Animal político", "Ser solitario", "Ser sin razón", "Ser para la máquina"], correcta: "Animal político", explicacion: "Solo nos realizamos plenamente en la vida en comunidad." },
          { pregunta: "La ética del cuidado pone atención especial en:", opciones: ["Las relaciones y las necesidades de las personas vulnerables", "Ganar dinero", "Las reglas sin excepción", "La fuerza"], correcta: "Las relaciones y las necesidades de las personas vulnerables", explicacion: "Fue desarrollada, entre otras, por Carol Gilligan." }
        ]
      },
      {
        id: "fh2-4",
        proposito: "Propósito formativo 2",
        titulo: "Justicia, Libertad e Igualdad: Dilemas Morales",
        icono: "🤔",
        imagen: "linear-gradient(135deg, #b91c1c, #a16207)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Un <strong>dilema moral</strong> es una situación en la que cualquier decisión tiene un costo y no hay una respuesta simple. Pensar dilemas entrena el juicio ético.
          </div>

          <h4>Tres valores en tensión</h4>
          <table class="tabla-estudio">
            <tr><th>Valor</th><th>Pregunta clave</th></tr>
            <tr><td>Justicia</td><td>¿Qué le corresponde a cada quien? ¿Lo mismo para todos, o según sus necesidades?</td></tr>
            <tr><td>Libertad</td><td>¿Hasta dónde puedo hacer lo que quiero sin dañar a otros?</td></tr>
            <tr><td>Igualdad</td><td>¿Basta con tratar igual a todos, o hay que compensar a quien parte en desventaja (equidad)?</td></tr>
          </table>
          <p>John Rawls propuso imaginar que diseñamos las reglas de la sociedad sin saber qué lugar ocuparemos en ella (el «velo de ignorancia»): así elegiríamos reglas justas para todos.</p>

          <h4>Cómo analizar un dilema</h4>
          <ol>
            <li>Describe la situación y las opciones posibles.</li>
            <li>Identifica los valores que entran en conflicto.</li>
            <li>Piensa en las consecuencias para cada persona afectada.</li>
            <li>Toma una postura y justifícala con razones.</li>
            <li>Escucha la postura contraria y revisa la tuya.</li>
          </ol>

          <h4>Dilema para discutir</h4>
          <div class="ejemplo">
            Tu mejor amigo copió en el examen final. Si lo denuncias, puede perder el semestre; si callas, es injusto para los compañeros que sí estudiaron. ¿Qué haces y por qué?
          </div>

          <h4>🛠️ Manos a la obra: debate filosófico</h4>
          <p>Dividan al grupo en dos posturas frente a un dilema de su comunidad. Cada equipo prepara tres argumentos y, al final, cada quien escribe si mantuvo o cambió su postura y qué razón lo convenció.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Una beca escolar puede repartirse igual a todos (igualdad) o dar más a quienes viven más lejos o tienen menos recursos (equidad). Imagina que no sabes si vives en la cabecera municipal o en una comunidad a dos horas de camino: ¿qué regla elegirías?
          </div>
        `,
        actividades: [
          { pregunta: "Un dilema moral es una situación en la que:", opciones: ["Cualquier decisión tiene un costo y no hay respuesta simple", "La respuesta es obvia", "No hay ninguna decisión que tomar", "Solo importa la ley"], correcta: "Cualquier decisión tiene un costo y no hay respuesta simple", explicacion: "Por eso exige razonar con cuidado." },
          { pregunta: "Dar más apoyo a quien parte en desventaja se llama:", opciones: ["Equidad", "Igualdad estricta", "Privilegio", "Libertad"], correcta: "Equidad", explicacion: "La equidad compensa las desigualdades de partida." },
          { pregunta: "El «velo de ignorancia» fue propuesto por:", opciones: ["John Rawls", "Platón", "Sartre", "Descartes"], correcta: "John Rawls", explicacion: "Sirve para imaginar reglas justas sin saber qué lugar ocuparemos." },
          { pregunta: "Al analizar un dilema, un paso importante es:", opciones: ["Identificar los valores en conflicto", "Decidir sin pensar", "Ignorar a los afectados", "Elegir lo que diga la mayoría"], correcta: "Identificar los valores en conflicto", explicacion: "Así se entiende por qué la decisión es difícil." },
          { pregunta: "La pregunta «¿Hasta dónde puedo hacer lo que quiero sin dañar a otros?» se refiere a:", opciones: ["La libertad", "La geometría", "La estética", "La lógica formal"], correcta: "La libertad", explicacion: "La libertad propia encuentra su límite en el daño a los demás." }
        ]
      },
      {
        id: "fh2-5",
        proposito: "Propósito formativo 3",
        titulo: "Bioética, Ciencia e Inteligencia Artificial",
        icono: "🤖",
        imagen: "linear-gradient(135deg, #0369a1, #6d28d9)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> La ciencia y la tecnología nos dan un enorme poder. La <strong>bioética</strong> se pregunta cómo usarlo de manera justa con todas las formas de vida. Que algo se <em>pueda</em> hacer no significa que se <em>deba</em> hacer.
          </div>

          <h4>Principios de la bioética</h4>
          <table class="tabla-estudio">
            <tr><th>Principio</th><th>Significa</th><th>Ejemplo</th></tr>
            <tr><td>Autonomía</td><td>Respetar las decisiones informadas de cada persona.</td><td>Consentimiento informado antes de una cirugía.</td></tr>
            <tr><td>Beneficencia</td><td>Buscar el bien de la persona.</td><td>Ofrecer el mejor tratamiento disponible.</td></tr>
            <tr><td>No maleficencia</td><td>No causar daño.</td><td>No experimentar con personas sin protección.</td></tr>
            <tr><td>Justicia</td><td>Repartir con equidad beneficios y cargas.</td><td>Que las comunidades rurales también tengan acceso a la salud.</td></tr>
          </table>

          <h4>Debates actuales</h4>
          <ul>
            <li><strong>Edición genética:</strong> ¿es correcto modificar genes para curar enfermedades?, ¿y para «mejorar» a las personas?</li>
            <li><strong>Datos personales:</strong> ¿quién es dueño de la información que dejamos en las aplicaciones?</li>
            <li><strong>Transgénicos:</strong> México es centro de origen del maíz; ¿cómo proteger las variedades nativas?</li>
          </ul>

          <h4>La inteligencia artificial y la pregunta por el Ser</h4>
          <p>Un programa puede escribir un poema o resolver un examen. ¿Eso significa que <strong>piensa</strong>? ¿Que <strong>comprende</strong>? ¿Que tiene conciencia? Estas preguntas nos obligan a definir qué es pensar y qué nos hace humanos. También hay preguntas éticas: ¿quién es responsable si una IA se equivoca?, ¿es honesto entregar una tarea hecha por IA como propia?</p>

          <h4>🛠️ Manos a la obra (transversal con Cultura Digital)</h4>
          <p>Pide a una IA que responda una pregunta filosófica de este semestre. Analiza la respuesta en equipo: ¿tiene argumentos?, ¿tiene errores?, ¿muestra una postura propia? Concluyan qué puede y qué no puede hacer una IA en el ejercicio de filosofar.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> El maíz nativo (olotón, tuxpeño, cónico y muchas variedades más) es resultado de miles de años de trabajo campesino. La discusión sobre el maíz transgénico es un debate bioético que toca la salud, la economía, la biodiversidad y la identidad de los pueblos.
          </div>
        `,
        actividades: [
          { pregunta: "El principio bioético que exige respetar las decisiones informadas de cada persona es:", opciones: ["Autonomía", "Beneficencia", "Justicia", "No maleficencia"], correcta: "Autonomía", explicacion: "Se concreta, por ejemplo, en el consentimiento informado." },
          { pregunta: "«No causar daño» corresponde al principio de:", opciones: ["No maleficencia", "Autonomía", "Libertad de mercado", "Utilidad"], correcta: "No maleficencia", explicacion: "Es uno de los cuatro principios clásicos de la bioética." },
          { pregunta: "La bioética parte de la idea de que:", opciones: ["Que algo se pueda hacer no significa que se deba hacer", "Todo lo que la ciencia logra es bueno", "La ética no tiene que ver con la ciencia", "Solo importa el avance tecnológico"], correcta: "Que algo se pueda hacer no significa que se deba hacer", explicacion: "El poder técnico necesita reflexión ética." },
          { pregunta: "La pregunta «¿una IA realmente comprende lo que escribe?» es un problema:", opciones: ["Filosófico sobre el pensamiento y la conciencia", "De aritmética", "De ortografía", "Sin importancia"], correcta: "Filosófico sobre el pensamiento y la conciencia", explicacion: "Obliga a definir qué es pensar y qué nos hace humanos." },
          { pregunta: "México es centro de origen de:", opciones: ["El maíz", "El trigo", "El café", "El arroz"], correcta: "El maíz", explicacion: "Por eso el debate sobre el maíz transgénico es tan relevante aquí." }
        ]
      },
      {
        id: "fh2-6",
        proposito: "Propósito formativo 3",
        titulo: "Ética Ambiental y Filosofía de la Animalidad",
        icono: "🐆",
        imagen: "linear-gradient(135deg, #15803d, #0f766e)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> ¿Solo los seres humanos merecen consideración moral? La ética ambiental y la <strong>filosofía de la animalidad</strong> amplían la pregunta a los animales, los ecosistemas y las generaciones futuras.
          </div>

          <h4>Problemas medioambientales: una postura ética</h4>
          <ul>
            <li><strong>Deforestación:</strong> ¿tenemos derecho a talar un bosque que tardó siglos en formarse?</li>
            <li><strong>Contaminación del agua:</strong> ¿quién es responsable de un río contaminado?</li>
            <li><strong>Cambio climático:</strong> ¿qué les debemos a quienes todavía no han nacido?</li>
          </ul>
          <p>El filósofo Hans Jonas propuso una <strong>ética de la responsabilidad</strong>: actuar de modo que nuestras acciones sean compatibles con la permanencia de una vida humana auténtica en la Tierra.</p>

          <h4>Filosofía de la animalidad</h4>
          <table class="tabla-estudio">
            <tr><th>Postura</th><th>Idea central</th></tr>
            <tr><td>Antropocentrismo</td><td>El ser humano es el centro; la naturaleza vale en cuanto nos sirve.</td></tr>
            <tr><td>Peter Singer</td><td>Los animales sienten dolor; ignorarlo por ser de otra especie es «especismo», una discriminación.</td></tr>
            <tr><td>Biocentrismo</td><td>Toda forma de vida tiene valor en sí misma.</td></tr>
            <tr><td>Filosofía de la animalidad</td><td>Revisa críticamente la división humano / animal y cómo se ha usado para justificar la violencia.</td></tr>
          </table>

          <h4>🛠️ Manos a la obra</h4>
          <p>Investiga una especie en peligro de Chiapas (jaguar, quetzal, guacamaya roja, tapir) y escribe un texto argumentativo: ¿por qué deberíamos protegerla? Usa al menos dos de las posturas de la tabla.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> La Selva Lacandona y la Reserva de la Biosfera Montes Azules son hogar del jaguar, el tapir y la guacamaya roja, pero la deforestación avanza. Proteger la selva enfrenta dilemas reales: la necesidad de tierra para cultivar, los derechos de los pueblos que la habitan y el valor de las especies que viven ahí.
          </div>
        `,
        actividades: [
          { pregunta: "Peter Singer llamó «especismo» a:", opciones: ["Discriminar a los animales por pertenecer a otra especie", "Estudiar las especies", "Proteger a los animales", "La biología evolutiva"], correcta: "Discriminar a los animales por pertenecer a otra especie", explicacion: "Lo compara con otras formas de discriminación injustificada." },
          { pregunta: "La postura que pone al ser humano como centro de todo valor es el:", opciones: ["Antropocentrismo", "Biocentrismo", "Existencialismo", "Feminismo"], correcta: "Antropocentrismo", explicacion: "Considera que la naturaleza vale en cuanto sirve a los humanos." },
          { pregunta: "Hans Jonas propuso una ética de:", opciones: ["La responsabilidad hacia el futuro", "El placer inmediato", "La obediencia", "El éxito personal"], correcta: "La responsabilidad hacia el futuro", explicacion: "Nuestras acciones deben permitir que la vida continúe en la Tierra." },
          { pregunta: "El biocentrismo sostiene que:", opciones: ["Toda forma de vida tiene valor en sí misma", "Solo los humanos tienen valor", "La vida no tiene valor", "Solo importan los animales domésticos"], correcta: "Toda forma de vida tiene valor en sí misma", explicacion: "Amplía la consideración moral a todos los seres vivos." },
          { pregunta: "¿Qué reserva de Chiapas protege parte de la Selva Lacandona?", opciones: ["Montes Azules", "El Pinacate", "Sian Ka'an", "Mapimí"], correcta: "Montes Azules", explicacion: "Es hogar del jaguar, el tapir y la guacamaya roja." }
        ]
      },
      {
        id: "fh2-7",
        proposito: "Propósito formativo 4",
        titulo: "Perspectiva de Género y Feminismos en México",
        icono: "♀️",
        imagen: "linear-gradient(135deg, #7e22ce, #be185d)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> La <strong>perspectiva de género</strong> distingue entre las características de los cuerpos y los roles, mandatos y prejuicios que una sociedad les asigna. Permite ver que muchas desigualdades no son «naturales», sino construidas y, por lo tanto, transformables.
          </div>

          <h4>Sexo, género y desigualdad</h4>
          <p>Que las mujeres «deban» quedarse en casa o que los hombres «no deban» llorar no viene de la biología, sino de la cultura. La filósofa Simone de Beauvoir lo resumió así: <strong>«No se nace mujer: se llega a serlo»</strong>.</p>

          <h4>Experiencias de desigualdad</h4>
          <ul>
            <li>Brecha en el trabajo doméstico y de cuidados no pagado.</li>
            <li>Menor acceso de muchas niñas y jóvenes a la escuela, sobre todo en zonas rurales.</li>
            <li>Violencia de género en casa, en la calle y en redes sociales.</li>
            <li>Estereotipos sobre carreras «de hombres» y «de mujeres».</li>
          </ul>

          <h4>Feminismos en México</h4>
          <table class="tabla-estudio">
            <tr><th>Momento</th><th>Hecho</th></tr>
            <tr><td>1916</td><td>Primer Congreso Feminista, en Mérida, Yucatán.</td></tr>
            <tr><td>1916–1917</td><td>Hermila Galindo exige el derecho al voto de las mujeres en el Congreso Constituyente.</td></tr>
            <tr><td>1950–1970</td><td>Rosario Castellanos, que creció en Comitán, Chiapas, escribe sobre la condición de las mujeres y de los pueblos indígenas.</td></tr>
            <tr><td>1953</td><td>Las mujeres obtienen el derecho a votar en elecciones federales.</td></tr>
            <tr><td>Hoy</td><td>Feminismos diversos: urbanos, comunitarios, indígenas; luchas contra la violencia y por la igualdad sustantiva.</td></tr>
          </table>

          <h4>Diversidad e identidad</h4>
          <p>La identidad de género de cada persona merece respeto. Las personas trans viven una identidad de género distinta a la que se les asignó al nacer, y con frecuencia enfrentan discriminación. Pensar con perspectiva de género es también reconocer la dignidad de todas las personas.</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Lean un fragmento de <em>Balún Canán</em> de Rosario Castellanos o vean escenas de la película <em>Los adioses</em> (2018). Dialoguen: ¿qué significa pensar, escribir y crear siendo mujer en un entorno que invisibiliza?, ¿cómo se experimenta la libertad en condiciones de desigualdad?</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> En <em>Balún Canán</em> (1957), ambientada en Comitán, Rosario Castellanos muestra cómo se cruzan las desigualdades de género, de clase y de origen étnico. Hoy, colectivos de mujeres en Chiapas, como la cooperativa de tejedoras Sna Jolobil o el grupo de teatro Fortaleza de la Mujer Maya (FOMMA), muestran formas propias de lucha y creación.
          </div>
        `,
        actividades: [
          { pregunta: "La perspectiva de género distingue entre:", opciones: ["Las características de los cuerpos y los roles que la sociedad les asigna", "Hombres buenos y malos", "Lo urbano y lo rural", "La ciencia y el arte"], correcta: "Las características de los cuerpos y los roles que la sociedad les asigna", explicacion: "Así se ve que muchas desigualdades son construidas, no naturales." },
          { pregunta: "La frase «No se nace mujer: se llega a serlo» es de:", opciones: ["Simone de Beauvoir", "Sor Juana Inés de la Cruz", "Hermila Galindo", "Platón"], correcta: "Simone de Beauvoir", explicacion: "Aparece en su obra El segundo sexo (1949)." },
          { pregunta: "¿En qué año obtuvieron las mujeres en México el derecho a votar en elecciones federales?", opciones: ["1953", "1910", "1917", "1990"], correcta: "1953", explicacion: "El voto federal femenino se reconoció en 1953." },
          { pregunta: "Rosario Castellanos ambientó su novela Balún Canán en:", opciones: ["Comitán, Chiapas", "Monterrey", "Puebla", "Mérida"], correcta: "Comitán, Chiapas", explicacion: "Creció en Comitán y escribió sobre la realidad de Chiapas." },
          { pregunta: "Asignar todo el trabajo doméstico no pagado solo a las mujeres de la familia es un ejemplo de:", opciones: ["Desigualdad de género", "Igualdad sustantiva", "Libertad de elección", "Una ley natural"], correcta: "Desigualdad de género", explicacion: "Es un mandato cultural que puede transformarse." }
        ]
      },
      {
        id: "fh2-8",
        proposito: "Propósito formativo 5",
        titulo: "Humanismo Mexicano, Interculturalidad y Vida Buena",
        icono: "🌽",
        imagen: "linear-gradient(135deg, #a16207, #15803d)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Pensar desde México y desde Chiapas significa dialogar con muchas culturas. La <strong>interculturalidad</strong> no es solo convivir, sino aprender unas de otras en condiciones de respeto e igualdad.
          </div>

          <h4>Perspectiva del humanismo mexicano</h4>
          <table class="tabla-estudio">
            <tr><th>Pensador</th><th>Aporte</th></tr>
            <tr><td>Leopoldo Zea</td><td>Defendió que América Latina puede pensar su propia realidad, sin copiar modelos ajenos.</td></tr>
            <tr><td>Luis Villoro</td><td>Reflexionó sobre los pueblos indígenas y propuso un Estado plural que reconozca la diversidad de culturas.</td></tr>
            <tr><td>Adolfo Sánchez Vázquez</td><td>Desarrolló la «filosofía de la praxis»: la unión de pensar y transformar el mundo.</td></tr>
            <tr><td>Enrique Dussel</td><td>Propuso una ética de la liberación desde las víctimas y los excluidos.</td></tr>
            <tr><td>Carlos Lenkersdorf</td><td>Aprendió del pueblo tojolabal el valor del «nosotros» y del escuchar.</td></tr>
          </table>

          <h4>Lekil kuxlejal: la vida buena</h4>
          <p>En tseltal y tsotsil, <strong>lekil kuxlejal</strong> expresa la idea de una «vida buena» o «vida digna» que no se mide por lo que se tiene, sino por la armonía con la comunidad, la naturaleza y uno mismo. Es una forma de pensar la felicidad y la justicia distinta a la del consumo.</p>

          <h4>Construir el futuro desde la praxis</h4>
          <p>Un mundo habitable y justo se construye con acciones concretas: cuidar el agua, respetar todas las lenguas, rechazar la discriminación, participar en la comunidad. Pensar éticamente es también actuar.</p>

          <h4>🛠️ Manos a la obra: reflexión argumentada</h4>
          <p>Escribe un ensayo breve (una cuartilla) con el título «¿Qué es una vida buena para mi comunidad?». Integra una idea de la ética, una de la bioética o la perspectiva de género, y una del humanismo mexicano o del lekil kuxlejal.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> En Chiapas se hablan doce lenguas indígenas, entre ellas tseltal, tsotsil, ch'ol, tojolabal, zoque y mam. Cada lengua es una forma de entender el mundo. Si en tu plantel hay compañeros que hablan alguna, pregúntales cómo se dice «respeto» o «comunidad» y qué significa para ellos.
          </div>
        `,
        actividades: [
          { pregunta: "La interculturalidad implica:", opciones: ["Aprender unas culturas de otras en condiciones de respeto e igualdad", "Que una cultura domine a las demás", "Que cada cultura viva aislada", "Hablar solo español"], correcta: "Aprender unas culturas de otras en condiciones de respeto e igualdad", explicacion: "Va más allá de la simple convivencia." },
          { pregunta: "«Lekil kuxlejal», en tseltal y tsotsil, expresa la idea de:", opciones: ["Una vida buena y digna en armonía", "Tener mucho dinero", "Ganar una competencia", "Un platillo típico"], correcta: "Una vida buena y digna en armonía", explicacion: "Integra la comunidad, la naturaleza y la persona." },
          { pregunta: "La «filosofía de la praxis» fue desarrollada en México por:", opciones: ["Adolfo Sánchez Vázquez", "René Descartes", "Peter Singer", "Simone de Beauvoir"], correcta: "Adolfo Sánchez Vázquez", explicacion: "Une el pensamiento con la transformación del mundo." },
          { pregunta: "Enrique Dussel propuso una ética:", opciones: ["De la liberación, desde las víctimas y los excluidos", "Del éxito individual", "Sin relación con la política", "Basada solo en el placer"], correcta: "De la liberación, desde las víctimas y los excluidos", explicacion: "Es una de las grandes aportaciones de la filosofía latinoamericana." },
          { pregunta: "Luis Villoro propuso un Estado:", opciones: ["Plural, que reconozca la diversidad de culturas", "Con una sola cultura oficial", "Sin leyes", "Gobernado por filósofos"], correcta: "Plural, que reconozca la diversidad de culturas", explicacion: "Reflexionó sobre los pueblos indígenas y el multiculturalismo." }
        ]
      }
    ]
  },

  3: {
    titulo: "Pensamiento Filosófico y Humanidades III",
    subtitulo: "Las reflexiones filosóficas sobre el Hacer",
    semestre: "Tercer Semestre",
    clase: "s3",
    icono: "🎨",
    descripcion: "Argumentar con rigor y detectar falacias, pensar el poder y el Estado, analizar el arte desde la filosofía y transformar tu realidad con el pensamiento.",
    meta: "Desarrolle capacidades para analizar, debatir e intervenir en su realidad desde una praxis que problematice el hacer como expresión de autonomía, cuidado y creación. Se promueve una comprensión crítica que posibilite la transformación de la vida en común, que cuestione el poder y abra posibilidades de justicia, de expresión artística y de sentido en la existencia.",
    contexto: "Del muralismo a los textiles de los Altos, de la poesía de Sabines a las asambleas comunitarias: en Chiapas el hacer también es una forma de pensar y de transformar.",
    temas: [
      {
        id: "fh3-1",
        proposito: "Propósito formativo 1",
        titulo: "La Lógica del Pensamiento: Construir Argumentos",
        icono: "🧩",
        imagen: "linear-gradient(135deg, #1d4ed8, #0f766e)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Un <strong>argumento</strong> es un conjunto ordenado de enunciados (premisas) que sostienen una idea (conclusión). La lógica estudia cuándo un argumento es correcto.
          </div>

          <figure class="diagrama-quimica">
            <img src="images/filosofia/estructura-argumento.svg" alt="Dos premisas que sostienen una conclusión" loading="lazy">
            <figcaption>Un silogismo: dos premisas y una conclusión que se deduce de ellas.</figcaption>
          </figure>

          <h4>Tipos de argumentos</h4>
          <table class="tabla-estudio">
            <tr><th>Tipo</th><th>Cómo funciona</th><th>Ejemplo</th></tr>
            <tr><td>Deductivo</td><td>De lo general a lo particular; si las premisas son verdaderas, la conclusión es necesariamente verdadera.</td><td>Todos los mamíferos respiran aire; la ballena es un mamífero; por lo tanto, la ballena respira aire.</td></tr>
            <tr><td>Inductivo</td><td>De casos particulares a una generalización; la conclusión es probable.</td><td>Los últimos diez junios llovió mucho en Tuxtla; probablemente este junio también lloverá.</td></tr>
            <tr><td>Por analogía</td><td>Compara dos casos parecidos.</td><td>Si el cuerpo necesita descanso para rendir, la tierra también necesita descanso entre cosechas.</td></tr>
            <tr><td>Por autoridad</td><td>Se apoya en una fuente experta.</td><td>Según el Servicio Meteorológico Nacional, mañana habrá tormentas.</td></tr>
          </table>

          <h4>Validez y verdad</h4>
          <p>Un argumento es <strong>válido</strong> si la conclusión se sigue de las premisas, aunque estas sean falsas. Es <strong>sólido</strong> si además sus premisas son verdaderas.</p>
          <div class="formula">Todos los peces vuelan; el tiburón es un pez; por lo tanto, el tiburón vuela.<br>→ Válido en su forma, pero <strong>no sólido</strong>: la primera premisa es falsa.</div>

          <h4>Persuasión argumentativa</h4>
          <p>Aristóteles distinguió tres formas de convencer: <strong>logos</strong> (las razones), <strong>ethos</strong> (la credibilidad de quien habla) y <strong>pathos</strong> (las emociones del público). Un buen argumento usa sobre todo el logos.</p>

          <h4>Filosofías del lenguaje</h4>
          <p>Las palabras no solo describen: también <strong>hacen</strong> cosas. Decir «te lo prometo» o «declaro inaugurada la feria» es realizar una acción. Por eso cuidar el lenguaje es parte de argumentar con responsabilidad.</p>

          <h4>🛠️ Manos a la obra (transversal con Lengua y Comunicación)</h4>
          <p>Toma un artículo de opinión, identifica la tesis, subraya las premisas y clasifica el tipo de argumento. Después escribe tu propio argumento deductivo sobre un tema de tu comunidad.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> En una asamblea sobre si construir un pozo nuevo: «Si el manantial se seca cada estiaje (premisa 1) y la población de la comunidad creció (premisa 2), entonces necesitamos otra fuente de agua (conclusión)». Un buen argumento ayuda a convencer sin imponer.
          </div>
        `,
        actividades: [
          { pregunta: "Un argumento que va de lo general a lo particular y cuya conclusión es necesaria es:", opciones: ["Deductivo", "Inductivo", "Por analogía", "Una falacia"], correcta: "Deductivo", explicacion: "Si las premisas son verdaderas y la forma es válida, la conclusión es verdadera." },
          { pregunta: "«Los últimos diez años llovió en junio, así que este junio lloverá» es un argumento:", opciones: ["Inductivo", "Deductivo", "Por autoridad", "Circular"], correcta: "Inductivo", explicacion: "Generaliza a partir de casos particulares; la conclusión es probable." },
          { pregunta: "Un argumento es sólido cuando:", opciones: ["Es válido y sus premisas son verdaderas", "Suena convincente", "Lo dice mucha gente", "Es muy largo"], correcta: "Es válido y sus premisas son verdaderas", explicacion: "La validez se refiere a la forma; la solidez, también al contenido." },
          { pregunta: "Para Aristóteles, convencer con razones corresponde al:", opciones: ["Logos", "Pathos", "Ethos", "Caos"], correcta: "Logos", explicacion: "El pathos apela a las emociones y el ethos a la credibilidad." },
          { pregunta: "En un silogismo, la parte que se deduce de las premisas es la:", opciones: ["Conclusión", "Hipótesis", "Introducción", "Pregunta"], correcta: "Conclusión", explicacion: "Las premisas sostienen la conclusión." }
        ]
      },
      {
        id: "fh3-2",
        proposito: "Propósito formativo 1",
        titulo: "Falacias y Debate Filosófico",
        icono: "🎭",
        imagen: "linear-gradient(135deg, #b91c1c, #7c3aed)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Una <strong>falacia</strong> es un argumento inválido que parece válido por su fuerza persuasiva. Aprender a detectarlas te protege de la manipulación en la política, la publicidad y las redes sociales.
          </div>

          <h4>Falacias frecuentes</h4>
          <table class="tabla-estudio">
            <tr><th>Falacia</th><th>Qué hace</th><th>Ejemplo</th></tr>
            <tr><td>Ad hominem</td><td>Ataca a la persona en lugar de a su argumento.</td><td>«No le hagas caso, es de rancho».</td></tr>
            <tr><td>Hombre de paja</td><td>Deforma la postura del otro para atacarla fácilmente.</td><td>«Quieren reciclar en la escuela; o sea, quieren que vivamos en la basura».</td></tr>
            <tr><td>Ad populum</td><td>Algo es verdad porque mucha gente lo cree.</td><td>«Todos lo compartieron, así que debe ser cierto».</td></tr>
            <tr><td>Falso dilema</td><td>Presenta solo dos opciones cuando hay más.</td><td>«O estás conmigo o estás contra mí».</td></tr>
            <tr><td>Generalización apresurada</td><td>Concluye mucho a partir de pocos casos.</td><td>«Conocí a dos turistas groseros; todos los turistas son groseros».</td></tr>
            <tr><td>Pendiente resbaladiza</td><td>Supone una cadena exagerada de consecuencias.</td><td>«Si te dejo salir hoy, mañana dejarás la escuela».</td></tr>
            <tr><td>Falsa autoridad</td><td>Cita a alguien que no es experto en el tema.</td><td>«Este cantante dice que esa medicina cura todo».</td></tr>
          </table>

          <h4>El debate filosófico</h4>
          <ol>
            <li><strong>Planteamiento:</strong> se presenta la pregunta y las posturas.</li>
            <li><strong>Argumentación:</strong> cada equipo expone sus razones.</li>
            <li><strong>Réplica:</strong> se responde a los argumentos del otro equipo, no a las personas.</li>
            <li><strong>Conclusión:</strong> cada equipo resume y reconoce los mejores argumentos contrarios.</li>
          </ol>
          <p>En un debate filosófico se gana comprensión, no solo votos: al final todos deberían entender mejor el problema.</p>

          <h4>🛠️ Manos a la obra: cazadores de falacias</h4>
          <p>Durante una semana, recopila tres ejemplos de falacias en anuncios, discursos o comentarios de redes sociales. Preséntalos al grupo: ¿qué falacia es?, ¿cómo se podría reformular como un argumento válido?</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Frases como «los que hablan lengua indígena no saben» o «los de la costa son flojos» son generalizaciones apresuradas que alimentan la discriminación. Detectar la falacia es el primer paso para desmontar el prejuicio.
          </div>
        `,
        actividades: [
          { pregunta: "Atacar a la persona en lugar de su argumento es la falacia:", opciones: ["Ad hominem", "Ad populum", "Falso dilema", "Hombre de paja"], correcta: "Ad hominem", explicacion: "Desvía la atención de las razones hacia la persona." },
          { pregunta: "«Todos lo compartieron, así que debe ser cierto» es la falacia:", opciones: ["Ad populum", "Ad hominem", "Pendiente resbaladiza", "Falsa autoridad"], correcta: "Ad populum", explicacion: "Que mucha gente crea algo no lo hace verdadero." },
          { pregunta: "«O estás conmigo o estás contra mí» es un ejemplo de:", opciones: ["Falso dilema", "Argumento deductivo", "Analogía", "Argumento sólido"], correcta: "Falso dilema", explicacion: "Presenta solo dos opciones cuando existen más." },
          { pregunta: "«Conocí a dos turistas groseros; todos los turistas son groseros» es una:", opciones: ["Generalización apresurada", "Deducción válida", "Pregunta filosófica", "Falsa autoridad"], correcta: "Generalización apresurada", explicacion: "Concluye demasiado a partir de pocos casos." },
          { pregunta: "En un debate filosófico, la réplica debe dirigirse:", opciones: ["A los argumentos del otro equipo", "A las personas del otro equipo", "Al público para que aplauda", "A nadie"], correcta: "A los argumentos del otro equipo", explicacion: "Se discuten ideas, no se ataca a las personas." }
        ]
      },
      {
        id: "fh3-3",
        proposito: "Propósito formativo 2",
        titulo: "Poder, Estado y Leyes",
        icono: "🏛️",
        imagen: "linear-gradient(135deg, #334155, #a16207)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> La <strong>filosofía política</strong> se pregunta de dónde viene el poder, por qué obedecemos las leyes y cómo debería organizarse una sociedad justa.
          </div>

          <h4>Formas de gobierno según Aristóteles</h4>
          <table class="tabla-estudio">
            <tr><th>¿Quién gobierna?</th><th>Forma buena (busca el bien común)</th><th>Forma corrupta (busca el bien propio)</th></tr>
            <tr><td>Uno</td><td>Monarquía</td><td>Tiranía</td></tr>
            <tr><td>Pocos</td><td>Aristocracia</td><td>Oligarquía</td></tr>
            <tr><td>Muchos</td><td>República (politeia)</td><td>Demagogia</td></tr>
          </table>

          <h4>El contrato social: ¿por qué existe el Estado?</h4>
          <table class="tabla-estudio">
            <tr><th>Filósofo</th><th>Idea</th></tr>
            <tr><td>Thomas Hobbes (<em>Leviatán</em>, 1651)</td><td>Sin Estado viviríamos en guerra de todos contra todos; cedemos libertad a cambio de seguridad.</td></tr>
            <tr><td>John Locke</td><td>El Estado existe para proteger derechos naturales: vida, libertad y propiedad. Si los viola, el pueblo puede resistir.</td></tr>
            <tr><td>Jean-Jacques Rousseau (<em>El contrato social</em>, 1762)</td><td>La soberanía reside en el pueblo; las leyes deben expresar la voluntad general.</td></tr>
          </table>

          <h4>El Estado y las leyes</h4>
          <p>Max Weber definió al Estado como la organización que tiene el <strong>monopolio de la violencia legítima</strong> en un territorio. Las leyes dan orden a la vida en común, pero no toda ley es justa: la historia está llena de leyes que discriminaban. Por eso es necesario preguntarse siempre si una ley respeta la dignidad y los derechos humanos.</p>

          <h4>Formas de organización del poder</h4>
          <p>Además del Estado, existen otras formas de organizar la vida en común: asambleas comunitarias, sistemas de cargos, cooperativas. El artículo 2.º de la Constitución reconoce el derecho de los pueblos indígenas a decidir sus formas internas de organización.</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Investiga cómo se toman las decisiones en tu comunidad o en tu plantel: ¿quién decide?, ¿quién participa?, ¿quién queda fuera? Relaciona tu respuesta con una de las teorías vistas.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> En muchas comunidades indígenas de Chiapas existen sistemas de cargos y asambleas en los que las autoridades sirven a la comunidad y rinden cuentas ante ella. Comparar estas formas con el Estado moderno permite pensar qué significa gobernar para el bien común.
          </div>
        `,
        actividades: [
          { pregunta: "Según Aristóteles, la forma corrupta del gobierno de uno solo es la:", opciones: ["Tiranía", "Monarquía", "Aristocracia", "República"], correcta: "Tiranía", explicacion: "El tirano gobierna para su propio beneficio." },
          { pregunta: "¿Quién escribió el Leviatán y dijo que sin Estado habría guerra de todos contra todos?", opciones: ["Thomas Hobbes", "John Locke", "Rousseau", "Sócrates"], correcta: "Thomas Hobbes", explicacion: "Hobbes justificó un Estado fuerte a cambio de seguridad." },
          { pregunta: "Para Rousseau, la soberanía reside en:", opciones: ["El pueblo", "El rey", "Los militares", "Los comerciantes"], correcta: "El pueblo", explicacion: "Las leyes deben expresar la voluntad general." },
          { pregunta: "Max Weber definió al Estado por el monopolio de:", opciones: ["La violencia legítima", "El comercio", "La religión", "La educación"], correcta: "La violencia legítima", explicacion: "Solo el Estado puede usar legítimamente la fuerza en un territorio." },
          { pregunta: "¿Qué artículo de la Constitución reconoce el derecho de los pueblos indígenas a sus formas internas de organización?", opciones: ["Artículo 2.º", "Artículo 123", "Artículo 27", "Artículo 130"], correcta: "Artículo 2.º", explicacion: "El artículo 2.º reconoce la composición pluricultural de la nación." }
        ]
      },
      {
        id: "fh3-4",
        proposito: "Propósito formativo 2",
        titulo: "Biopolítica y Categorías de Sujeción",
        icono: "🔗",
        imagen: "linear-gradient(135deg, #6d28d9, #be123c)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> El poder no solo está en el gobierno: también se ejerce sobre los <strong>cuerpos</strong> y la <strong>vida</strong> de las personas. Michel Foucault llamó a esto <strong>biopolítica</strong>.
          </div>

          <h4>¿Qué es la biopolítica?</h4>
          <p>Es la forma de poder que se ejerce controlando la vida de la población: la salud, la natalidad, la alimentación, los horarios, la vigilancia. Por ejemplo, las campañas de vacunación, los censos o los reglamentos sobre el uniforme son formas de administrar la vida. Algunas protegen; otras pueden controlar en exceso.</p>

          <h4>El poder disciplinario</h4>
          <p>Foucault mostró cómo escuelas, hospitales, fábricas y cárceles comparten mecanismos: horarios, filas, vigilancia, exámenes. Analizar estas prácticas no significa rechazarlas, sino preguntarse cuándo sirven para cuidar y cuándo para someter.</p>

          <h4>Categorías de sujeción política</h4>
          <table class="tabla-estudio">
            <tr><th>Categoría</th><th>Ejemplo de desigualdad</th></tr>
            <tr><td>Sexo y género</td><td>Salarios menores para las mujeres por el mismo trabajo.</td></tr>
            <tr><td>Raza y origen étnico</td><td>Discriminación por el color de piel, la lengua o la vestimenta.</td></tr>
            <tr><td>Clase social</td><td>Acceso desigual a la salud y la educación según el ingreso.</td></tr>
            <tr><td>Edad, discapacidad, migración</td><td>Barreras para participar en igualdad de condiciones.</td></tr>
          </table>
          <p>Cuando varias categorías se cruzan en una misma persona, las desigualdades se suman: esto se llama <strong>interseccionalidad</strong>. Por ejemplo, una mujer indígena, pobre y migrante puede enfrentar varias formas de discriminación a la vez.</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Observa durante un día las reglas de tu plantel (horarios, uniforme, uso del celular). Clasifica cada una: ¿protege, organiza o controla? Debatan si alguna debería cambiar y con qué argumentos.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> La frontera sur, entre Chiapas y Guatemala, es uno de los principales puntos de paso de personas migrantes. Las decisiones sobre quién puede cruzar, trabajar o recibir atención médica son un ejemplo claro de biopolítica: el poder decide sobre la vida de personas concretas.
          </div>
        `,
        actividades: [
          { pregunta: "El concepto de biopolítica se asocia con:", opciones: ["Michel Foucault", "Aristóteles", "Epicuro", "Kant"], correcta: "Michel Foucault", explicacion: "Foucault estudió cómo el poder administra la vida de la población." },
          { pregunta: "La biopolítica es una forma de poder que se ejerce sobre:", opciones: ["La vida y los cuerpos de las personas", "Solo los planetas", "Las matemáticas", "Las obras de arte"], correcta: "La vida y los cuerpos de las personas", explicacion: "Incluye la salud, la natalidad, la vigilancia y la disciplina." },
          { pregunta: "Cuando varias formas de desigualdad se cruzan en una misma persona hablamos de:", opciones: ["Interseccionalidad", "Silogismo", "Ontología", "Estética"], correcta: "Interseccionalidad", explicacion: "Las discriminaciones de género, origen y clase pueden sumarse." },
          { pregunta: "Según Foucault, escuelas, hospitales y fábricas comparten mecanismos como:", opciones: ["Horarios, vigilancia y exámenes", "La misma arquitectura gótica", "Los mismos dueños", "La ausencia de reglas"], correcta: "Horarios, vigilancia y exámenes", explicacion: "Los llamó mecanismos del poder disciplinario." },
          { pregunta: "Pagar menos a una mujer por el mismo trabajo es un ejemplo de sujeción por:", opciones: ["Sexo y género", "Edad", "Clima", "Estatura"], correcta: "Sexo y género", explicacion: "Es una desigualdad basada en el género." }
        ]
      },
      {
        id: "fh3-5",
        proposito: "Propósito formativo 3",
        titulo: "Filosofía y Arte: Las Categorías Estéticas",
        icono: "🖼️",
        imagen: "linear-gradient(135deg, #db2777, #a16207)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> La <strong>estética</strong> es la rama de la filosofía que reflexiona sobre el arte, la belleza y la experiencia sensible. El arte no es solo decoración: es una forma de pensar y de decir lo que no cabe en otras palabras.
          </div>

          <h4>Categorías estéticas</h4>
          <table class="tabla-estudio">
            <tr><th>Categoría</th><th>Qué provoca</th><th>Ejemplo</th></tr>
            <tr><td>Lo bello</td><td>Armonía y placer al contemplar.</td><td>Un huipil bordado con simetría.</td></tr>
            <tr><td>Lo sublime</td><td>Asombro ante algo inmenso que nos supera.</td><td>Ver desde un mirador el Cañón del Sumidero.</td></tr>
            <tr><td>Lo trágico</td><td>Compasión ante un destino doloroso e inevitable.</td><td>Una tragedia griega o un corrido sobre una pérdida.</td></tr>
            <tr><td>Lo cómico</td><td>Risa ante lo absurdo o lo inesperado.</td><td>Las pastorelas o los sketches satíricos.</td></tr>
            <tr><td>Lo grotesco</td><td>Mezcla de lo deforme, lo extraño y lo cómico.</td><td>Algunas máscaras de carnaval.</td></tr>
          </table>
          <p>Kant distinguió entre lo bello y lo sublime. Hoy se analiza críticamente quién decide qué es «bello»: muchas veces se impusieron modelos europeos que despreciaban otras estéticas.</p>

          <h4>Fenomenología de la corporalidad</h4>
          <p>Para Maurice Merleau-Ponty no <em>tenemos</em> un cuerpo: <strong>somos</strong> un cuerpo que percibe el mundo. La danza, el teatro y el performance son formas de pensar con el cuerpo.</p>

          <h4>La poética del lenguaje</h4>
          <p>La poesía muestra que el lenguaje no solo informa: revela formas de habitar el mundo. Un poema puede decir sobre el amor o la muerte algo que ninguna definición alcanza.</p>

          <h4>🛠️ Manos a la obra: comunidad de diálogo con una pintura</h4>
          <p>Observen <em>Sueño y presentimiento</em> (1947) de María Izquierdo, en la que la pintora se representa sosteniendo su propia cabeza. Pregunten: ¿qué quiso expresar?, ¿puede el arte decir lo que no se puede decir de otra manera?, ¿qué implica mirar el cuerpo desde el dolor?</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Los textiles de los Altos de Chiapas no son solo prendas: cada pueblo tiene diseños, colores y símbolos propios que cuentan su historia y su visión del mundo. Cooperativas como Sna Jolobil, en San Cristóbal, trabajan para conservar y renovar ese arte. ¿Por qué a veces se llama «artesanía» a lo indígena y «arte» a lo que está en un museo?
          </div>
        `,
        actividades: [
          { pregunta: "La rama de la filosofía que reflexiona sobre el arte y la belleza es la:", opciones: ["Estética", "Lógica", "Ontología", "Política"], correcta: "Estética", explicacion: "Estudia la experiencia sensible, el arte y las categorías estéticas." },
          { pregunta: "El asombro ante algo inmenso que nos supera, como un gran cañón, corresponde a lo:", opciones: ["Sublime", "Cómico", "Grotesco", "Bello simétrico"], correcta: "Sublime", explicacion: "Lo sublime nos sobrepasa y nos sobrecoge." },
          { pregunta: "¿Qué filósofo afirmó que no tenemos un cuerpo, sino que somos un cuerpo que percibe?", opciones: ["Maurice Merleau-Ponty", "Thomas Hobbes", "John Rawls", "Parménides"], correcta: "Maurice Merleau-Ponty", explicacion: "Es el gran representante de la fenomenología de la corporalidad." },
          { pregunta: "La pintura Sueño y presentimiento (1947) es de:", opciones: ["María Izquierdo", "Frida Kahlo", "Diego Rivera", "Rosario Castellanos"], correcta: "María Izquierdo", explicacion: "En ella la artista se representa sosteniendo su propia cabeza." },
          { pregunta: "Preguntar quién decide qué es «bello» es un ejercicio de:", opciones: ["Análisis crítico de las categorías estéticas", "Aritmética", "Geografía física", "Gramática"], correcta: "Análisis crítico de las categorías estéticas", explicacion: "Muchos modelos de belleza se impusieron desde una sola cultura." }
        ]
      },
      {
        id: "fh3-6",
        proposito: "Propósito formativo 3",
        titulo: "Arte Disruptivo, Semiótica y Arte Digital",
        icono: "📸",
        imagen: "linear-gradient(135deg, #0e7490, #7c3aed)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> El arte puede <strong>incomodar, protestar y transformar</strong>. Y hoy, con el arte digital y las redes, todos producimos imágenes: entender cómo significan es una herramienta crítica.
          </div>

          <h4>El arte como acto disruptivo</h4>
          <ul>
            <li>En 1917, Marcel Duchamp presentó un urinario como obra de arte (<em>La fuente</em>) y obligó a preguntar: ¿qué es el arte?, ¿quién lo decide?</li>
            <li>El <strong>muralismo mexicano</strong> (Rivera, Orozco, Siqueiros) llevó la historia y las luchas sociales a los muros públicos.</li>
            <li>Los murales comunitarios, el grafiti y el teatro comunitario dan voz a quienes no aparecen en los museos.</li>
          </ul>

          <h4>Economía y política del arte</h4>
          <p>¿Por qué una pintura vale millones y una artesanía se paga barata? El precio del arte depende de mercados, galerías y prestigio, no solo de su calidad. También hay preguntas de justicia: ¿quién gana cuando una marca copia un diseño indígena?</p>

          <h4>Semiótica: cómo significan las imágenes</h4>
          <table class="tabla-estudio">
            <tr><th>Concepto</th><th>Significado</th><th>Ejemplo</th></tr>
            <tr><td>Signo</td><td>Algo que representa otra cosa.</td><td>El color rojo en un semáforo.</td></tr>
            <tr><td>Denotación</td><td>Lo que literalmente se ve.</td><td>Una mazorca de maíz.</td></tr>
            <tr><td>Connotación</td><td>Lo que sugiere culturalmente.</td><td>El maíz como origen, identidad y sustento («hombres de maíz»).</td></tr>
          </table>

          <h4>Arte digital</h4>
          <p>Ilustración digital, fotografía con celular, video, música electrónica, memes, arte generado con IA. Nuevas preguntas: ¿una imagen hecha por IA es arte?, ¿de quién es la autoría?, ¿cómo cambia el arte cuando todos podemos crear y publicar?</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Elige una imagen que circule en redes (un meme, un anuncio, una foto viral). Analiza su denotación y su connotación, y responde: ¿qué valores transmite?, ¿a quién incluye y a quién deja fuera?</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> El colectivo de teatro <strong>Fortaleza de la Mujer Maya (FOMMA)</strong>, de San Cristóbal de las Casas, crea obras en tsotsil, tseltal y español sobre la vida de las mujeres indígenas. Es un ejemplo de arte que denuncia, educa y transforma desde la comunidad.
          </div>
        `,
        actividades: [
          { pregunta: "La obra La fuente (1917), que presentaba un urinario como arte, es de:", opciones: ["Marcel Duchamp", "Diego Rivera", "María Izquierdo", "Pablo Picasso"], correcta: "Marcel Duchamp", explicacion: "Con ella cuestionó qué es el arte y quién lo define." },
          { pregunta: "El muralismo mexicano se caracterizó por:", opciones: ["Llevar la historia y las luchas sociales a los muros públicos", "Pintar solo retratos privados", "Rechazar los temas sociales", "Usar únicamente arte digital"], correcta: "Llevar la historia y las luchas sociales a los muros públicos", explicacion: "Rivera, Orozco y Siqueiros son sus grandes representantes." },
          { pregunta: "Lo que una imagen sugiere culturalmente, más allá de lo que se ve, es su:", opciones: ["Connotación", "Denotación", "Resolución", "Tamaño"], correcta: "Connotación", explicacion: "La denotación es lo literal; la connotación, el sentido cultural." },
          { pregunta: "La ciencia que estudia los sistemas de signos es la:", opciones: ["Semiótica", "Biología", "Ontología", "Aritmética"], correcta: "Semiótica", explicacion: "Permite analizar cómo significan imágenes, colores y símbolos." },
          { pregunta: "FOMMA, de San Cristóbal de las Casas, es un colectivo de:", opciones: ["Teatro de mujeres indígenas", "Ingenieros", "Futbolistas", "Médicos"], correcta: "Teatro de mujeres indígenas", explicacion: "Crea obras en tsotsil, tseltal y español." }
        ]
      },
      {
        id: "fh3-7",
        proposito: "Propósito formativo 4",
        titulo: "Pensar para Transformar: Proyecto Final",
        icono: "🌱",
        imagen: "linear-gradient(135deg, #15803d, #a16207)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Al cierre de la materia, la pregunta es: <strong>reflexionar, ¿para qué?</strong> Para reconocerte como alguien capaz de transformar su realidad a través del pensamiento y la acción.
          </div>

          <h4>¿Para qué sirve el pensamiento complejo?</h4>
          <table class="tabla-estudio">
            <tr><th>Dimensión</th><th>Te sirve para…</th></tr>
            <tr><td>Crítica</td><td>No dejarte manipular, detectar falacias y prejuicios, tomar decisiones con razones.</td></tr>
            <tr><td>Creativa</td><td>Imaginar soluciones nuevas a problemas viejos de tu comunidad.</td></tr>
            <tr><td>Cuidadosa</td><td>Convivir, escuchar y construir acuerdos sin dañar a nadie.</td></tr>
          </table>

          <h4>Filosofías de la corporalidad y prácticas de libertad</h4>
          <p>La libertad no es solo una idea: se practica con el cuerpo, en el espacio público, en la forma de vestir, de hablar y de habitar. Foucault habló de las «prácticas de libertad»: formas concretas en que las personas cuidan de sí mismas y deciden quiénes quieren ser.</p>

          <h4>Proyecto final: una intervención filosófica en tu comunidad</h4>
          <ol>
            <li><strong>Problematiza:</strong> elige un problema real (agua, violencia, discriminación, basura, migración, uso de pantallas).</li>
            <li><strong>Pregunta:</strong> formula la pregunta filosófica de fondo (¿qué es justo?, ¿qué nos debemos?).</li>
            <li><strong>Argumenta:</strong> construye tu postura con razones y sin falacias.</li>
            <li><strong>Dialoga:</strong> organiza una comunidad de diálogo con otras personas (compañeros, familia, vecinos).</li>
            <li><strong>Crea:</strong> expresa tu reflexión en un producto: ensayo, mural, podcast, obra de teatro, fotografía o video.</li>
            <li><strong>Evalúa:</strong> ¿qué aprendiste?, ¿qué cambió en ti y en tu entorno?</li>
          </ol>

          <h4>Lista de cotejo</h4>
          <p>☐ Problematiza su entorno · ☐ Fundamenta sus opiniones con razones · ☐ Detecta falacias y prejuicios · ☐ Escucha con atención y empatía · ☐ Aplica la perspectiva de género · ☐ Replantea sus ideas · ☐ Traduce ideas a diferentes lenguajes</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Un equipo de un plantel de los Altos eligió el problema de la basura en el río de su comunidad. Se preguntaron: «¿de quién es la responsabilidad de cuidar lo que es de todos?». Organizaron un diálogo con la asamblea, pintaron un mural con la pregunta y propusieron una jornada de limpieza. Pensar los llevó a actuar.
          </div>
        `,
        actividades: [
          { pregunta: "Según el programa, la finalidad última de la materia es:", opciones: ["Reconocerse capaz de transformar la realidad mediante el pensamiento", "Memorizar autores", "Aprobar un examen", "Ganar debates"], correcta: "Reconocerse capaz de transformar la realidad mediante el pensamiento", explicacion: "El pensamiento se vuelve práctica vital y transformadora." },
          { pregunta: "El primer paso de una intervención filosófica es:", opciones: ["Problematizar un tema real", "Escribir la conclusión", "Elegir el color del cartel", "Copiar un ensayo"], correcta: "Problematizar un tema real", explicacion: "Todo comienza por convertir una situación en un problema digno de pensarse." },
          { pregunta: "La dimensión que te ayuda a imaginar soluciones nuevas es la:", opciones: ["Creativa", "Crítica", "Cuidadosa", "Competitiva"], correcta: "Creativa", explicacion: "La creatividad abre alternativas." },
          { pregunta: "Foucault llamó «prácticas de libertad» a:", opciones: ["Las formas concretas en que las personas cuidan de sí y deciden quiénes ser", "Las leyes de tránsito", "Los exámenes", "Las reglas del juego de futbol"], correcta: "Las formas concretas en que las personas cuidan de sí y deciden quiénes ser", explicacion: "La libertad se ejerce en la vida cotidiana." },
          { pregunta: "Un producto válido para expresar la reflexión final puede ser:", opciones: ["Un mural, un podcast o una obra de teatro", "Solo un examen de opción múltiple", "Nada; basta con pensarlo", "Una copia de internet"], correcta: "Un mural, un podcast o una obra de teatro", explicacion: "El programa invita a traducir las ideas a diferentes lenguajes." }
        ]
      }
    ]
  }
};
