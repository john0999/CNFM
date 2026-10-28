/* ==========================================================
   DATA - Lengua y Comunicación I, II y III
   Alineado al plan de estudios COSFAC
========================================================== */

const LENGUA = {
  1: {
    titulo: "Lengua y Comunicación I",
    subtitulo: "Leer y escribir para pensarnos",
    semestre: "Primer Semestre",
    clase: "s1",
    icono: "📖",
    descripcion: "La lectura y la escritura como herramientas para comunicar y reflexionar.",
    contexto: "En Chiapas, la palabra es fundamental. Desde los relatos de los abuelos hasta los textos que escribes, la comunicación construye nuestra identidad.",
    temas: [
      {
        id: "lc1-1",
        titulo: "Lectura y Escritura: Un Diálogo Humano",
        icono: "🗣️",
        imagen: "linear-gradient(135deg, #e11d48, #be123c)",
        contenido: `
          <h4>La escritura como pensamiento</h4>
          <p>Escribir no es solo plasmar letras; es la posibilidad de desarrollar nuestro pensamiento, crear empatía y comunicar ideas. La lectura, por su parte, es un diálogo con otras épocas, culturas y personas.</p>
          <h4>El placer de leer</h4>
          <p>Leer puede ser un acto de placer individual (como leer una novela bajo un árbol) o compartido (leer en voz alta a tu familia).</p>
          <div class="ejemplo">
            <strong>Ejemplo contextualizado:</strong> Cuando lees las leyendas de la Selva Lacandona, entablas un diálogo con los antiguos mayas y comprendes su visión del mundo.
          </div>
        `,
        actividades: [
          { pregunta: "¿Para qué nos sirve principalmente la escritura?", opciones: ["Solo para la escuela", "Para desarrollar el pensamiento y comunicar", "Para llenar hojas", "Para copiar textos"], correcta: "Para desarrollar el pensamiento y comunicar", explicacion: "Escribir ordena nuestras ideas y nos permite expresarlas." },
          { pregunta: "Leer un cuento en voz alta a tus hermanos pequeños es un ejemplo de:", opciones: ["Lectura individual", "Lectura compartida", "Escritura creativa", "Análisis de texto"], correcta: "Lectura compartida", explicacion: "Es una experiencia de diálogo y placer en colectivo." },
          { pregunta: "¿Qué permite la lectura según el texto?", opciones: ["Aislarse del mundo", "El diálogo entre personas de distintos contextos", "Solo aprender reglas", "Memorizar"], correcta: "El diálogo entre personas de distintos contextos", explicacion: "La lectura nos conecta con otras realidades." },
          { pregunta: "La escritura estimula el avance científico. Verdadero o falso:", opciones: ["Verdadero", "Falso"], correcta: "Verdadero", explicacion: "Sin registro escrito, el conocimiento no avanzaría." },
          { pregunta: "¿Qué se necesita para que la lectura sea un placer?", opciones: ["Obligación", "Elegir textos de nuestro interés", "Leer solo libros de texto", "No leer"], correcta: "Elegir textos de nuestro interés", explicacion: "El gusto nace de la libertad de elegir." }
        ]
      },
      {
        id: "lc1-2",
        titulo: "Propiedades del Texto",
        icono: "📝",
        imagen: "linear-gradient(135deg, #0ea5e9, #0284c7)",
        contenido: `
          <h4>¿Qué hace que un texto se entienda?</h4>
          <ul>
            <li><strong>Claridad:</strong> Usar palabras sencillas y ordenadas.</li>
            <li><strong>Coherencia:</strong> Que todas las ideas tengan relación con el tema central.</li>
            <li><strong>Concordancia:</strong> Que el género y número coincidan (ej. "Los alumnos" en lugar de "El alumnos").</li>
          </ul>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> "El café de Chiapas es rico. Yo tomo café todos los días". Es un texto claro y coherente.
          </div>
        `,
        actividades: [
          { pregunta: "Si un texto habla de la contaminación, pero a la mitad empieza a hablar de futbol, pierde:", opciones: ["Claridad", "Coherencia", "Concordancia", "Ortografía"], correcta: "Coherencia", explicacion: "Las ideas deben mantener una línea lógica." },
          { pregunta: "¿Qué propiedad se falla en: 'Las niña juega'?", opciones: ["Coherencia", "Concordancia", "Claridad", "Ninguna"], correcta: "Concordancia", explicacion: "Debería ser 'La niña juega' o 'Las niñas juegan'." },
          { pregunta: "Usar palabras rebuscadas que nadie entiende afecta la:", opciones: ["Claridad", "Concordancia", "Coherencia", "Puntuación"], correcta: "Claridad", explicacion: "El texto debe ser comprensible." },
          { pregunta: "La concordancia revisa la relación entre:", opciones: ["Sustantivo y adjetivo", "Párrafos", "Título y texto", "Autor y lector"], correcta: "Sustantivo y adjetivo", explicacion: "Y también entre sujeto y verbo." },
          { pregunta: "Un texto coherente tiene ideas:", opciones: ["Dispersas", "Relacionadas entre sí", "Sin sentido", "Muy largas"], correcta: "Relacionadas entre sí", explicacion: "Todo gira en torno a un tema." }
        ]
      },
      {
        id: "lc1-3",
        titulo: "Tipos de Párrafos",
        icono: "🧩",
        imagen: "linear-gradient(135deg, #10b981, #059669)",
        contenido: `
          <h4>Estructura de un texto</h4>
          <ul>
            <li><strong>Descriptivo:</strong> Pinta con palabras (cómo es un lugar, una persona o un objeto).</li>
            <li><strong>Narrativo:</strong> Cuenta una historia (qué pasó, cuándo, quiénes).</li>
            <li><strong>Argumentativo:</strong> Defiende una opinión con razones.</li>
          </ul>
          <div class="ejemplo">
            <strong>Descriptivo:</strong> "El Cañón del Sumidero es profundo y verde."<br>
            <strong>Narrativo:</strong> "Ayer viajamos al cañón y vimos monos."<br>
            <strong>Argumentativo:</strong> "Debemos cuidar el cañón porque es nuestro patrimonio."
          </div>
        `,
        actividades: [
          { pregunta: "El párrafo: 'La selva es verde y húmeda, llena de árboles altos' es:", opciones: ["Narrativo", "Descriptivo", "Argumentativo", "Informativo"], correcta: "Descriptivo", explicacion: "Detalla las características de la selva." },
          { pregunta: "El párrafo: 'Chiapas tiene el mejor café del mundo porque su clima es ideal' es:", opciones: ["Narrativo", "Descriptivo", "Argumentativo", "Expositivo"], correcta: "Argumentativo", explicacion: "Defiende una postura con una razón (el clima)." },
          { pregunta: "Un párrafo que cuenta un viaje a Palenque es:", opciones: ["Narrativo", "Descriptivo", "Argumentativo", "Poético"], correcta: "Narrativo", explicacion: "Relata una secuencia de hechos." },
          { pregunta: "¿Qué tipo de párrafo usa la puntuación para dar ritmo?", opciones: ["Todos", "Solo el narrativo", "Solo el descriptivo", "Ninguno"], correcta: "Todos", explicacion: "La puntuación es vital en cualquier texto." },
          { pregunta: "El párrafo argumentativo busca:", opciones: ["Contar un cuento", "Convencer al lector", "Describir un paisaje", "Confundir"], correcta: "Convencer al lector", explicacion: "Presenta argumentos válidos." }
        ]
      },
      {
        id: "lc1-4",
        titulo: "Ideas Principales y Secundarias",
        icono: "💡",
        imagen: "linear-gradient(135deg, #f59e0b, #d97706)",
        contenido: `
          <h4>El corazón del texto</h4>
          <p>La <strong>idea principal</strong> es el mensaje central, lo más importante que el autor quiere decir. Sin ella, el texto no tendría sentido.</p>
          <p>Las <strong>ideas secundarias</strong> son los detalles, ejemplos o explicaciones que apoyan a la idea principal.</p>
          <h4>Elementos paratextuales</h4>
          <p>Son los títulos, subtítulos, imágenes y negritas que nos ayudan a predecir de qué tratará el texto.</p>
        `,
        actividades: [
          { pregunta: "La idea principal es:", opciones: ["Un detalle sin importancia", "El mensaje central del texto", "El título", "La primera palabra"], correcta: "El mensaje central del texto", explicacion: "Es el núcleo del texto." },
          { pregunta: "¿Qué son los elementos paratextuales?", opciones: ["Las letras", "Títulos, subtítulos e imágenes", "Los autores", "Los libros"], correcta: "Títulos, subtítulos e imágenes", explicacion: "Acompañan al texto y ayudan a entenderlo." },
          { pregunta: "Si la idea principal es 'El agua es vital', una idea secundaria sería:", opciones: ["El agua es vida", "El cuerpo humano es 70% agua", "El agua", "Nadar"], correcta: "El cuerpo humano es 70% agua", explicacion: "Es un dato que apoya la idea principal." },
          { pregunta: "Las ideas secundarias sirven para:", opciones: ["Desviar el tema", "Apoyar y explicar la idea principal", "Confundir al lector", "Hacer el texto más largo"], correcta: "Apoyar y explicar la idea principal", explicacion: "Dan soporte a la idea central." },
          { pregunta: "Un elemento paratextual en este texto son los:", opciones: ["Párrafos", "Títulos en negrita", "Puntos", "Sustantivos"], correcta: "Títulos en negrita", explicacion: "Guían al lector antes de leer." }
        ]
      },
      {
        id: "lc1-5",
        titulo: "Exposición Oral",
        icono: "🎤",
        imagen: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        contenido: `
          <h4>Hablar para comunicar</h4>
          <p>Una exposición oral requiere preparación. No se trata de leer un papel, sino de explicar un tema con nuestras propias palabras.</p>
          <h4>Elementos paralingüísticos</h4>
          <ul>
            <li><strong>Volumen:</strong> Hablar fuerte para que todos escuchen.</li>
            <li><strong>Tono:</strong> Cambiar la voz para no ser monótonos.</li>
            <li><strong>Lenguaje corporal:</strong> Movimientos de manos y contacto visual.</li>
          </ul>
        `,
        actividades: [
          { pregunta: "Los elementos paralingüísticos incluyen:", opciones: ["Las reglas gramaticales", "El tono y el lenguaje corporal", "Solo las diapositivas", "El texto escrito"], correcta: "El tono y el lenguaje corporal", explicacion: "Son los elementos no verbales de la voz y el cuerpo." },
          { pregunta: "Para una buena exposición oral es fundamental:", opciones: ["Leer palabra por palabra", "Preparar el tema y los recursos", "Improvisar todo", "No mirar al público"], correcta: "Preparar el tema y los recursos", explicacion: "La preparación da seguridad." },
          { pregunta: "El volumen de la voz debe ser:", opciones: ["Muy bajo", "Adecuado para el espacio", "Gritando", "Susurrando"], correcta: "Adecuado para el espacio", explicacion: "Para que todos escuchen sin lastimar oídos." },
          { pregunta: "Un recurso visual de apoyo es:", opciones: ["Un mapa mental", "Un texto largo", "Tus manos", "El silencio"], correcta: "Un mapa mental", explicacion: "Ayuda a resumir la información." },
          { pregunta: "El contacto visual con el público transmite:", opciones: ["Miedo", "Confianza y conexión", "Enojo", "Aburrimiento"], correcta: "Confianza y conexión", explicacion: "Mantiene al público interesado." }
        ]
      },
      {
        id: "lc1-6",
        titulo: "Signos de Puntuación",
        icono: "❗",
        imagen: "linear-gradient(135deg, #f43f5e, #e11d48)",
        contenido: `
          <div class="alebrije-tip">
            <img src="images/lengua/alebrije-jaguar.svg" alt="Balam, el alebrije-jaguar">
            <p><strong>Balam dice:</strong> «Los signos de puntuación son como las señales del camino: indican cuándo hacer una pausa, cuándo preguntar y cuándo emocionarse. ¡Una coma puede cambiar todo el sentido!»</p>
          </div>

          <h4>Los signos más usados</h4>
          <table class="tabla-estudio">
            <tr><th>Signo</th><th>¿Para qué sirve?</th><th>Ejemplo</th></tr>
            <tr><td><strong>.</strong> Punto</td><td>Cierra una idea completa. Punto y seguido, punto y aparte, punto final.</td><td>El tren llegó a Tapachula. Bajamos rápido.</td></tr>
            <tr><td><strong>,</strong> Coma</td><td>Pausa breve: separa elementos de una lista, al vocativo y aclaraciones.</td><td>Compré café, cacao y miel.</td></tr>
            <tr><td><strong>;</strong> Punto y coma</td><td>Pausa mayor que la coma; une ideas relacionadas.</td><td>Unos estudian en la mañana; otros, en la tarde.</td></tr>
            <tr><td><strong>:</strong> Dos puntos</td><td>Anuncia una lista, una cita o una explicación.</td><td>Mi abuela siempre dice: «El que madruga, come pozol».</td></tr>
            <tr><td><strong>¿ ?</strong> Interrogación</td><td>Encierra preguntas. En español se abre y se cierra.</td><td>¿Vas a la feria de San Caralampio?</td></tr>
            <tr><td><strong>¡ !</strong> Exclamación</td><td>Expresa emoción, sorpresa o una orden.</td><td>¡Qué bonito toca la marimba!</td></tr>
            <tr><td><strong>…</strong> Puntos suspensivos</td><td>Dejan una idea en suspenso o incompleta.</td><td>Y entonces se apagó la luz…</td></tr>
            <tr><td><strong>« » / " "</strong> Comillas</td><td>Encierran citas textuales o palabras con sentido especial.</td><td>Le dicen «el poeta» del salón.</td></tr>
          </table>

          <h4>La coma que cambia todo</h4>
          <div class="ejemplo">
            «Vamos a comer, niños.» → invitas a los niños a comer.<br>
            «Vamos a comer niños.» → ¡suena a que te los vas a comer!<br><br>
            «No, quiero café.» → no a otra cosa; sí quieres café.<br>
            «No quiero café.» → no quieres café.
          </div>

          <h4>Errores frecuentes</h4>
          <ul>
            <li>Olvidar el signo de apertura: <s>Cómo estás?</s> → <strong>¿Cómo estás?</strong></li>
            <li>Poner coma entre el sujeto y el verbo: <s>Los alumnos de quinto, ganaron el torneo.</s> → <strong>Los alumnos de quinto ganaron el torneo.</strong></li>
            <li>Escribir todo un párrafo con comas y sin un solo punto.</li>
          </ul>

          <h4>✍️ Ejemplo práctico</h4>
          <p>Copia en tu cuaderno este texto y agrégale la puntuación que falta:</p>
          <div class="formula">el domingo fuimos al mercado de san cristóbal compramos tamales flores y velas mi hermana preguntó cuánto cuesta el kilo de manzanas qué caro dijo mi mamá</div>
          <details class="ejercicio-estudio">
            <summary>Compara tu respuesta</summary>
            <div>El domingo fuimos al mercado de San Cristóbal. Compramos tamales, flores y velas. Mi hermana preguntó: «¿Cuánto cuesta el kilo de manzanas?». «¡Qué caro!», dijo mi mamá.</div>
          </details>
        `,
        actividades: [
          { pregunta: "¿Qué signo se usa para separar los elementos de una lista?", opciones: ["El punto", "La coma", "Los dos puntos", "El punto y coma"], correcta: "La coma", explicacion: "Ejemplo: compré café, cacao y miel." },
          { pregunta: "¿Cuál oración está bien escrita?", opciones: ["Cómo te llamas?", "¿Cómo te llamas?", "¿Cómo te llamas", "Cómo te llamas¿"], correcta: "¿Cómo te llamas?", explicacion: "En español las preguntas llevan signo de apertura y de cierre." },
          { pregunta: "Los dos puntos se usan para:", opciones: ["Terminar un texto", "Anunciar una lista, cita o explicación", "Hacer una pregunta", "Separar sujeto y verbo"], correcta: "Anunciar una lista, cita o explicación", explicacion: "Por ejemplo: Traje tres cosas: libreta, lápiz y goma." },
          { pregunta: "En «Vamos a comer, niños», la coma indica que:", opciones: ["Los niños son la comida", "Se habla a los niños (vocativo)", "Es una pregunta", "Falta un verbo"], correcta: "Se habla a los niños (vocativo)", explicacion: "La coma separa a quien se le habla, llamado vocativo." },
          { pregunta: "Es incorrecto poner coma entre:", opciones: ["Elementos de una lista", "El sujeto y el verbo", "Una aclaración", "El vocativo"], correcta: "El sujeto y el verbo", explicacion: "«Los alumnos ganaron» no lleva coma entre «alumnos» y «ganaron»." }
        ]
      },
      {
        id: "lc1-7",
        titulo: "La Descripción: Crea tu Alebrije",
        icono: "🦄",
        imagen: "linear-gradient(135deg, #8b5cf6, #ec4899)",
        contenido: `
          <div class="alebrije-tip">
            <img src="images/lengua/alebrije-jaguar.svg" alt="Balam, el alebrije-jaguar">
            <p><strong>Balam dice:</strong> «¡Yo soy un alebrije! Mi nombre significa <em>jaguar</em> en maya; en tsotsil y tseltal al jaguar se le dice <em>bolom</em>. En este tema aprenderás a describirme… y a inventar tu propio alebrije.»</p>
          </div>

          <h4>¿Qué es un alebrije?</h4>
          <p>Los alebrijes son figuras de artesanía mexicana que mezclan partes de distintos animales reales y fantásticos, pintadas con colores muy vivos y llenas de figuras: puntos, rayas, espirales y zigzags.</p>
          <ul>
            <li><strong>Origen:</strong> en 1936 el artesano cartonero <strong>Pedro Linares</strong>, de la Ciudad de México, contó que durante una enfermedad soñó con criaturas extrañas que gritaban «¡alebrijes!». Al despertar las hizo de papel maché (cartonería).</li>
            <li><strong>Oaxaca:</strong> después, artesanos de San Antonio Arrazola y San Martín Tilcajete comenzaron a tallarlos en madera de copal, y hoy son famosos en todo el mundo.</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto Chiapas:</strong> Chiapas también tiene artesanías llenas de color que puedes describir: los jaguares de barro de Amatenango del Valle, la laca de Chiapa de Corzo y los bordados de Zinacantán.
          </div>

          <h4>¿Qué es describir?</h4>
          <p><strong>Describir</strong> es «pintar con palabras»: decir cómo es una persona, un animal, un lugar o un objeto para que el lector pueda imaginarlo.</p>
          <figure class="diagrama-quimica">
            <img src="images/lengua/alebrije-quetzal.svg" alt="Alebrije con cabeza de quetzal y cola de serpiente" loading="lazy">
            <figcaption><strong>Ejemplo de descripción:</strong> «Este alebrije tiene cabeza de quetzal, verde como las hojas de la selva, con un copete de plumas que parece una corona. Su pico es amarillo y puntiagudo. Las alas son azules, con rayas rosas, y su cola es una serpiente verde con anillos amarillos que termina en espiral. En el pecho luce una mancha roja con forma de sonrisa, y camina sobre unas patas delgadas y anaranjadas.»</figcaption>
          </figure>

          <h4>Herramientas para describir</h4>
          <ul>
            <li><strong>Observa con orden:</strong> de lo general a lo particular, o de arriba hacia abajo (cabeza, cuerpo, patas, cola).</li>
            <li><strong>Adjetivos calificativos:</strong> dicen cómo es algo: <em>brillante, áspero, enorme, travieso</em>.</li>
            <li><strong>Comparaciones (símil):</strong> usan «como» o «parece»: <em>sus ojos brillan como luciérnagas</em>.</li>
            <li><strong>Los cinco sentidos:</strong> no solo lo que ves; también lo que se oye, se huele, se siente y hasta su sabor.</li>
          </ul>

          <h4>Tipos de descripción</h4>
          <table class="tabla-estudio">
            <tr><th>Tipo</th><th>¿Qué describe?</th><th>Ejemplo</th></tr>
            <tr><td>Objetiva</td><td>Los datos tal como son, sin opinión</td><td>«Mide 30 cm y tiene cuatro patas.»</td></tr>
            <tr><td>Subjetiva</td><td>Lo que siente u opina quien describe</td><td>«Es la criatura más simpática que he visto.»</td></tr>
            <tr><td>Prosopografía</td><td>El aspecto físico</td><td>«Tiene cuernos verdes y alas moradas.»</td></tr>
            <tr><td>Etopeya</td><td>El carácter y la forma de ser</td><td>«Es curioso, valiente y un poco presumido.»</td></tr>
            <tr><td>Retrato</td><td>Lo físico y el carácter juntos</td><td>La descripción de Balam de abajo.</td></tr>
          </table>
          <div class="ejemplo">
            <strong>Retrato de Balam:</strong> «Balam tiene cabeza de jaguar anaranjada, con bigotes largos y unos cuernos verdes enroscados. Su cuerpo rosa está cubierto de círculos amarillos y de un zigzag turquesa, como el río cuando le pega el sol. Tiene alas de colores, una cola rayada que se enrosca como caracol y patas con rayas rojas. Es curioso y platicador: siempre quiere saber qué estás leyendo.»
          </div>

          <h4>✍️ Ejemplo práctico: crea tu alebrije chiapaneco</h4>
          <ol>
            <li>Elige dos o tres animales de Chiapas: jaguar, quetzal, tapir, mono saraguato, tucán, guacamaya roja, cocodrilo del Sumidero, armadillo…</li>
            <li>Dibújalo y píntalo con colores vivos y figuras (puntos, rayas, espirales).</li>
            <li>Ponle un nombre; puede ser una palabra en tu lengua o en la de tu comunidad.</li>
            <li>Escribe su <strong>retrato</strong> en 6 a 8 líneas, de la cabeza a la cola, con al menos <strong>cinco adjetivos</strong>, <strong>dos comparaciones</strong> y una parte sobre su <strong>carácter</strong>.</li>
            <li>Intercambia tu texto con un compañero: ¿puede dibujar tu alebrije solo con leer tu descripción?</li>
          </ol>
        `,
        actividades: [
          { pregunta: "¿Quién creó los primeros alebrijes en 1936?", opciones: ["Frida Kahlo", "Pedro Linares", "Diego Rivera", "Rosario Castellanos"], correcta: "Pedro Linares", explicacion: "Era un artesano cartonero de la Ciudad de México." },
          { pregunta: "Describir es:", opciones: ["Contar una historia con un final", "Decir cómo es algo para que el lector lo imagine", "Dar una opinión con argumentos", "Hacer un resumen"], correcta: "Decir cómo es algo para que el lector lo imagine", explicacion: "Es pintar con palabras." },
          { pregunta: "«Sus ojos brillan como luciérnagas» es un ejemplo de:", opciones: ["Comparación o símil", "Pregunta", "Narración", "Argumento"], correcta: "Comparación o símil", explicacion: "Compara dos cosas usando la palabra «como»." },
          { pregunta: "La descripción del carácter o forma de ser se llama:", opciones: ["Prosopografía", "Etopeya", "Paráfrasis", "Topografía"], correcta: "Etopeya", explicacion: "La prosopografía describe lo físico; la etopeya, el carácter." },
          { pregunta: "«Es la criatura más simpática que he visto» es una descripción:", opciones: ["Objetiva", "Subjetiva", "Numérica", "Científica"], correcta: "Subjetiva", explicacion: "Expresa la opinión y el sentimiento de quien describe." }
        ]
      },
      {
        id: "lc1-8",
        titulo: "Resumen, Paráfrasis y Organizadores Gráficos",
        icono: "🗺️",
        imagen: "linear-gradient(135deg, #0ea5e9, #6366f1)",
        contenido: `
          <div class="alebrije-tip">
            <img src="images/lengua/alebrije-jaguar.svg" alt="Balam, el alebrije-jaguar">
            <p><strong>Balam dice:</strong> «Para estudiar no hace falta memorizar todo el libro. Primero encuentra las ideas principales y luego organízalas en un mapa. ¡Tu cerebro te lo agradecerá!»</p>
          </div>

          <h4>Tres formas de reescribir un texto</h4>
          <table class="tabla-estudio">
            <tr><th></th><th>Resumen</th><th>Paráfrasis</th><th>Síntesis</th></tr>
            <tr><td><strong>¿Qué es?</strong></td><td>Reducir el texto a sus ideas principales</td><td>Decir lo mismo con tus propias palabras</td><td>Ideas principales más tu interpretación</td></tr>
            <tr><td><strong>Extensión</strong></td><td>Mucho más corto</td><td>Parecida al original</td><td>Corta</td></tr>
            <tr><td><strong>Palabras</strong></td><td>Del autor o propias</td><td>Propias</td><td>Propias</td></tr>
            <tr><td><strong>¿Agrega opinión?</strong></td><td>No</td><td>No</td><td>Sí, una conclusión personal</td></tr>
          </table>

          <h4>Ejemplo con un mismo texto</h4>
          <div class="ejemplo">
            <strong>Texto original:</strong> «Chiapas es el principal estado productor de café de México. El café se cultiva sobre todo en la Sierra Madre y en la región del Soconusco, donde la altura, la lluvia y la sombra de los árboles le dan un sabor especial. Miles de familias campesinas e indígenas viven de este cultivo, y muchas se organizan en cooperativas para venderlo a un precio justo.»
          </div>
          <ul>
            <li><strong>Resumen:</strong> Chiapas es el mayor productor de café del país; se cultiva en la Sierra Madre y el Soconusco y de él viven miles de familias, muchas organizadas en cooperativas.</li>
            <li><strong>Paráfrasis:</strong> De todos los estados de México, Chiapas es el que más café produce. Las zonas más cafetaleras son la Sierra Madre y el Soconusco: ahí la altura, las lluvias y los árboles que dan sombra hacen que el grano tenga un sabor distinto. Muchísimas familias del campo y de pueblos originarios dependen del café, y varias se unen en cooperativas para que les paguen lo justo.</li>
            <li><strong>Síntesis:</strong> El café es la riqueza de Chiapas y el sustento de miles de familias; las cooperativas demuestran que organizarse ayuda a obtener un pago justo por el trabajo del campo.</li>
          </ul>

          <h4>La técnica del subrayado</h4>
          <ol>
            <li>Lee el texto completo una vez, sin subrayar.</li>
            <li>En la segunda lectura subraya con un color la idea principal de cada párrafo.</li>
            <li>Con otro color marca datos y ejemplos importantes (ideas secundarias).</li>
            <li>Escribe al margen una o dos palabras que resuman cada párrafo.</li>
          </ol>

          <h4>Organizadores gráficos</h4>
          <figure class="diagrama-quimica">
            <img src="images/lengua/mapa-conceptual.svg" alt="Mapa conceptual de los tipos de texto" loading="lazy">
            <figcaption><strong>Mapa conceptual:</strong> los conceptos van en recuadros y se unen con líneas y <em>palabras de enlace</em> («puede ser», «dice cómo es»), de modo que se puedan leer como oraciones: «El texto puede ser descriptivo; el descriptivo dice cómo es un alebrije».</figcaption>
          </figure>
          <table class="tabla-estudio">
            <tr><th>Organizador</th><th>¿Cómo es?</th><th>Úsalo para…</th></tr>
            <tr><td>Mapa conceptual</td><td>Conceptos en recuadros unidos por palabras de enlace</td><td>Mostrar cómo se relacionan las ideas</td></tr>
            <tr><td>Mapa mental</td><td>Una imagen al centro con ramas de colores, palabras clave y dibujos</td><td>Hacer lluvia de ideas y repasar</td></tr>
            <tr><td>Cuadro sinóptico</td><td>Ideas ordenadas con llaves { de lo general a lo particular</td><td>Clasificar un tema</td></tr>
            <tr><td>Cuadro comparativo</td><td>Tabla con semejanzas y diferencias</td><td>Comparar dos o más cosas</td></tr>
            <tr><td>Línea del tiempo</td><td>Hechos en orden sobre una línea con fechas</td><td>Historia y biografías</td></tr>
          </table>

          <h4>✍️ Ejemplo práctico</h4>
          <p>Elige un tema de otra materia (por ejemplo, «Estados de la materia» de Química), subraya sus ideas principales y elabora un <strong>mapa conceptual</strong> con al menos 6 conceptos y sus palabras de enlace. Después explícaselo a un compañero en un minuto.</p>
        `,
        actividades: [
          { pregunta: "Decir lo mismo que un texto, pero con tus propias palabras y una extensión parecida, es:", opciones: ["Resumen", "Paráfrasis", "Síntesis", "Copia"], correcta: "Paráfrasis", explicacion: "La paráfrasis conserva las ideas, pero cambia las palabras." },
          { pregunta: "¿Cuál de estas formas agrega una interpretación o conclusión personal?", opciones: ["Resumen", "Paráfrasis", "Síntesis", "Subrayado"], correcta: "Síntesis", explicacion: "La síntesis une las ideas principales con tu propia interpretación." },
          { pregunta: "En un mapa conceptual, las palabras que unen los conceptos se llaman:", opciones: ["Palabras de enlace", "Títulos", "Adjetivos", "Ramas"], correcta: "Palabras de enlace", explicacion: "Permiten leer el mapa como si fueran oraciones." },
          { pregunta: "Para comparar el tsotsil y el tseltal en varios aspectos conviene usar:", opciones: ["Una línea del tiempo", "Un cuadro comparativo", "Un cómic", "Un poema"], correcta: "Un cuadro comparativo", explicacion: "Organiza semejanzas y diferencias en una tabla." },
          { pregunta: "¿Qué conviene hacer antes de subrayar un texto?", opciones: ["Subrayar todo", "Leerlo completo una vez", "Copiarlo", "Hacer el mapa"], correcta: "Leerlo completo una vez", explicacion: "Primero hay que entender de qué trata para saber qué es lo importante." }
        ]
      },
      {
        id: "lc1-9",
        titulo: "Las Lenguas de Chiapas",
        icono: "🌽",
        imagen: "linear-gradient(135deg, #10b981, #0d9488)",
        contenido: `
          <div class="alebrije-tip">
            <img src="images/lengua/alebrije-jaguar.svg" alt="Balam, el alebrije-jaguar">
            <p><strong>Balam dice:</strong> «En Chiapas se habla en muchas lenguas. Cada una es una forma distinta de nombrar el mundo. ¡Hablar dos lenguas es un superpoder!»</p>
          </div>

          <h4>Comunicación, lengua y habla</h4>
          <figure class="diagrama-quimica">
            <img src="images/lengua/comunicacion.svg" alt="Elementos de la comunicación" loading="lazy">
            <figcaption>En toda comunicación hay un <strong>emisor</strong> que envía un <strong>mensaje</strong> a un <strong>receptor</strong>, por un <strong>canal</strong> (la voz, un papel, el celular), con un <strong>código</strong> que ambos entienden (español, tsotsil, lengua de señas) y dentro de un <strong>contexto</strong>.</figcaption>
          </figure>
          <ul>
            <li><strong>Lengua:</strong> el sistema de signos que comparte una comunidad (el tseltal, el español, el ch'ol).</li>
            <li><strong>Habla:</strong> el uso personal que cada quien hace de la lengua.</li>
          </ul>

          <h4>Las lenguas originarias de Chiapas</h4>
          <p>En Chiapas, más de un millón de personas hablan alguna lengua originaria. Las más habladas son el <strong>tseltal</strong> y el <strong>tsotsil</strong>, y también se hablan el ch'ol, el tojolabal, el zoque, el mam, el maya lacandón, el chuj, el q'anjob'al, el jakalteko y el mocho', entre otras.</p>
          <div class="ejemplo">
            <strong>¿Sabías que…?</strong> Desde 2003, la <em>Ley General de Derechos Lingüísticos de los Pueblos Indígenas</em> reconoce a las lenguas indígenas como <strong>lenguas nacionales</strong>, con la misma validez que el español. Tienes derecho a estudiar, hacer trámites y recibir atención en tu lengua.
          </div>

          <h4>Palabras que nos prestaron las lenguas originarias</h4>
          <p>Muchas palabras del español vienen de lenguas indígenas de México:</p>
          <ul>
            <li><strong>Del náhuatl:</strong> chocolate, tomate, aguacate, cacahuate, chicle, elote, tianguis, papalote.</li>
            <li><strong>De lenguas mayas:</strong> cenote.</li>
          </ul>

          <h4>El español de Chiapas</h4>
          <p>Cada región tiene su forma de hablar español; a eso se le llama <strong>variante</strong> o <strong>variedad dialectal</strong>. No es un error: es parte de la identidad.</p>
          <ul>
            <li><strong>Voseo:</strong> en Chiapas es común usar «vos» en lugar de «tú»: <em>¿Vos querés pozol?</em>, <em>Vos sabés</em>.</li>
            <li><strong>Palabras regionales:</strong> «chucho» para el perro, «pozol» para la bebida de maíz y cacao.</li>
          </ul>

          <h4>Adecuación: hablar según la situación</h4>
          <table class="tabla-estudio">
            <tr><th>Registro</th><th>¿Cuándo?</th><th>Ejemplo</th></tr>
            <tr><td>Informal o coloquial</td><td>Con amigos y familia</td><td>«¿Qué onda, vamos a echar tortilla?»</td></tr>
            <tr><td>Formal</td><td>Con autoridades, en la escuela, en un trámite</td><td>«Buenos días, maestra. ¿Me permite entregar mi trabajo?»</td></tr>
          </table>

          <h4>✍️ Ejemplo práctico</h4>
          <ol>
            <li>Entrevista a una persona de tu familia o comunidad que hable una lengua originaria (o una variante distinta del español).</li>
            <li>Pregúntale cómo aprendió su lengua y en qué situaciones la usa.</li>
            <li>Elabora un <strong>glosario</strong> de 10 palabras con su escritura, su traducción al español y un dibujo.</li>
            <li>Compártelo con el grupo para formar un diccionario ilustrado del salón.</li>
          </ol>
        `,
        actividades: [
          { pregunta: "¿Cuáles son las lenguas originarias más habladas en Chiapas?", opciones: ["Náhuatl y maya yucateco", "Tseltal y tsotsil", "Zapoteco y mixteco", "Purépecha y otomí"], correcta: "Tseltal y tsotsil", explicacion: "Son las dos lenguas originarias con más hablantes en el estado." },
          { pregunta: "En la comunicación, el sistema de signos que comparten emisor y receptor es el:", opciones: ["Canal", "Código", "Contexto", "Mensaje"], correcta: "Código", explicacion: "Puede ser una lengua como el español, el tsotsil o la lengua de señas." },
          { pregunta: "«¿Vos querés pozol?» es un ejemplo de:", opciones: ["Error gramatical", "Voseo, una variante del español de Chiapas", "Lengua tsotsil", "Registro formal"], correcta: "Voseo, una variante del español de Chiapas", explicacion: "Usar «vos» es una forma regional válida del español." },
          { pregunta: "Según la ley, las lenguas indígenas de México son:", opciones: ["Dialectos sin valor", "Lenguas nacionales", "Lenguas extranjeras", "Solo orales"], correcta: "Lenguas nacionales", explicacion: "Tienen la misma validez que el español desde 2003." },
          { pregunta: "La palabra «aguacate» viene del:", opciones: ["Latín", "Náhuatl", "Inglés", "Árabe"], correcta: "Náhuatl", explicacion: "Viene de «ahuacatl». También chocolate, tomate y chicle." }
        ]
      }
    ]
  },

  2: {
    titulo: "Lengua y Comunicación II",
    subtitulo: "Libertad para imaginar, poder para comunicar",
    semestre: "Segundo Semestre",
    clase: "s2",
    icono: "📚",
    descripcion: "Narrativas populares, creación literaria y expresión creativa.",
    contexto: "Las leyendas de Chiapas, los cuentos de la comunidad y las nuevas formas de contar historias (como el pódcast) son tus herramientas.",
    temas: [
      {
        id: "lc2-1",
        titulo: "Narrativas Populares",
        icono: "👻",
        imagen: "linear-gradient(135deg, #e11d48, #be123c)",
        contenido: `
          <h4>El arte de contar historias</h4>
          <p>Las narrativas populares (cuentos, mitos, leyendas, cómics, creepypastas) nacen del pueblo y se transmiten de generación en generación.</p>
          <h4>Características</h4>
          <ul>
            <li>Tienen personajes definidos (héroes, villanos, seres sobrenaturales).</li>
            <li>Ocurren en un tiempo y espacio (a veces real, a veces fantástico).</li>
            <li>Dejan una enseñanza o buscan asustar/entretener.</li>
          </ul>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> La leyenda de la Llorona, el Sombrerón o los relatos de la Selva Lacandona.
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué es una narrativa popular?", opciones: ["Un texto científico", "Historias transmitidas por el pueblo", "Un ensayo", "Un noticiero"], correcta: "Historias transmitidas por el pueblo", explicacion: "Nacen de la tradición oral." },
          { pregunta: "Las leyendas, mitos y cómics son:", opciones: ["Textos aburridos", "Formas de narrativa popular", "Textos escolares", "Solo para niños"], correcta: "Formas de narrativa popular", explicacion: "Expresan la cultura de forma creativa." },
          { pregunta: "Una característica de la narrativa es que tiene:", opciones: ["Solo un párrafo", "Trama, conflicto y personajes", "Fórmulas matemáticas", "Reglas estrictas"], correcta: "Trama, conflicto y personajes", explicacion: "Son elementos esenciales del relato." },
          { pregunta: "¿Qué es una creepypasta?", opciones: ["Una pasta de comer", "Una historia de terror corta de internet", "Un libro de texto", "Un tipo de poema"], correcta: "Una historia de terror corta de internet", explicacion: "Es una adaptación moderna de las historias de terror." },
          { pregunta: "El escenario de una narrativa es:", opciones: ["Quién cuenta la historia", "Dónde y cuándo ocurre", "El final", "El título"], correcta: "Dónde y cuándo ocurre", explicacion: "Es el espacio-tiempo del relato." }
        ]
      },
      {
        id: "lc2-2",
        titulo: "El Pódcast Narrativo",
        icono: "🎧",
        imagen: "linear-gradient(135deg, #0ea5e9, #0284c7)",
        contenido: `
          <h4>Contar historias en la era digital</h4>
          <p>El pódcast es un formato de audio digital. Para hacer un pódcast narrativo necesitas:</p>
          <ol>
            <li><strong>Guion:</strong> El texto que leerás (con acotaciones).</li>
            <li><strong>Grabación:</strong> Usar el celular o una compu con micrófono.</li>
            <li><strong>Edición:</strong> Quitar ruidos, agregar música o efectos.</li>
          </ol>
          <h4>Elementos extralingüísticos</h4>
          <p>Sonidos, música y silencios que le dan emoción a la historia.</p>
        `,
        actividades: [
          { pregunta: "Un pódcast se basa principalmente en:", opciones: ["Imágenes", "Audio", "Texto escrito", "Videojuegos"], correcta: "Audio", explicacion: "Es un formato sonoro." },
          { pregunta: "El guion de un pódcast es:", opciones: ["El texto que se leerá", "La música", "El micrófono", "El oyente"], correcta: "El texto que se leerá", explicacion: "Guía la grabación." },
          { pregunta: "Los elementos extralingüísticos en el audio son:", opciones: ["Las palabras", "Los efectos de sonido y música", "Los actores", "El estudio"], correcta: "Los efectos de sonido y música", explicacion: "Dan atmósfera a la historia." },
          { pregunta: "Para grabar un pódcast puedes usar:", opciones: ["Un celular", "Una calculadora", "Una regla", "Un libro"], correcta: "Un celular", explicacion: "Hoy en día un celular tiene buen micrófono." },
          { pregunta: "La edición sirve para:", opciones: ["Hacerlo más largo", "Mejorar el sonido y quitar errores", "Leer mejor", "Escribir el guion"], correcta: "Mejorar el sonido y quitar errores", explicacion: "Pule el producto final." }
        ]
      },
      {
        id: "lc2-3",
        titulo: "Personajes y Conflicto",
        icono: "🎭",
        imagen: "linear-gradient(135deg, #10b981, #059669)",
        contenido: `
          <h4>El motor de la historia</h4>
          <p>Los <strong>personajes</strong> son quienes viven la historia. Pueden ser:</p>
          <ul>
            <li><strong>Principales:</strong> Llevan el peso de la trama (protagonista/antagonista).</li>
            <li><strong>Secundarios:</strong> Apoyan a los principales.</li>
          </ul>
          <p>El <strong>conflicto</strong> es el problema que deben resolver los personajes (ej. un jaguar que se come a los animales de la comunidad).</p>
        `,
        actividades: [
          { pregunta: "El protagonista es el personaje:", opciones: ["Que estorba", "Principal de la historia", "Que muere primero", "Que no habla"], correcta: "Principal de la historia", explicacion: "Es el héroe o heroína." },
          { pregunta: "El conflicto en una narrativa es:", opciones: ["El final feliz", "El problema o reto a superar", "El lugar", "El autor"], correcta: "El problema o reto a superar", explicacion: "Sin conflicto no hay historia." },
          { pregunta: "Un personaje que ayuda al protagonista es:", opciones: ["Antagonista", "Secundario", "Narrador", "Lector"], correcta: "Secundario", explicacion: "Apoya a la trama principal." },
          { pregunta: "El antagonista representa:", opciones: ["La ayuda", "La oposición o el obstáculo", "El amor", "La naturaleza"], correcta: "La oposición o el obstáculo", explicacion: "Es el villano o la fuerza contraria." },
          { pregunta: "¿Qué tipo de personajes son redondos?", opciones: ["Los que no cambian", "Los que evolucionan en la historia", "Los que son malos", "Los que mueren"], correcta: "Los que evolucionan en la historia", explicacion: "Tienen profundidad psicológica." }
        ]
      },
      {
        id: "lc2-4",
        titulo: "La Estructura Narrativa",
        icono: "📈",
        imagen: "linear-gradient(135deg, #f59e0b, #e11d48)",
        contenido: `
          <h4>Las partes de una historia</h4>
          <figure class="diagrama-quimica">
            <img src="images/lengua/curva-narrativa.svg" alt="Curva narrativa: inicio, nudo, clímax y desenlace" loading="lazy">
            <figcaption>Casi todas las historias siguen esta curva: la tensión sube desde el inicio hasta el clímax y baja en el desenlace.</figcaption>
          </figure>
          <ol>
            <li><strong>Inicio o planteamiento:</strong> presenta a los personajes, el lugar y el tiempo.</li>
            <li><strong>Nudo o desarrollo:</strong> aparece el conflicto y las cosas se complican.</li>
            <li><strong>Clímax:</strong> el momento de mayor tensión, cuando todo está a punto de decidirse.</li>
            <li><strong>Desenlace:</strong> se resuelve el conflicto (bien o mal) y termina la historia.</li>
          </ol>

          <h4>Ejemplo: un microrrelato en Chiapa de Corzo</h4>
          <div class="ejemplo">
            <strong>Inicio:</strong> Era enero y en Chiapa de Corzo empezaba la Fiesta Grande. Mateo, de quince años, iba a bailar por primera vez como parachico.<br>
            <strong>Nudo:</strong> La mañana del desfile descubrió que su máscara se había rajado. Sin ella no podía bailar, y el artesano del barrio estaba de viaje.<br>
            <strong>Clímax:</strong> Faltaba una hora. Su abuela sacó del ropero una máscara antigua, tallada por su bisabuelo, y le dijo: «Esta ya bailó muchas fiestas; hoy le toca contigo».<br>
            <strong>Desenlace:</strong> Mateo bailó con la máscara de su bisabuelo. Esa tarde entendió que la tradición también se hereda.
          </div>

          <h4>¿Quién cuenta la historia? El narrador</h4>
          <table class="tabla-estudio">
            <tr><th>Narrador</th><th>Persona</th><th>Ejemplo</th></tr>
            <tr><td>Protagonista</td><td>Primera (yo)</td><td>«Me temblaban las manos cuando me puse la máscara.»</td></tr>
            <tr><td>Testigo</td><td>Primera (yo, pero no es el protagonista)</td><td>«Vi a Mateo correr hacia la casa de su abuela.»</td></tr>
            <tr><td>Omnisciente</td><td>Tercera (él, ella); lo sabe todo, incluso lo que piensan los personajes</td><td>«Mateo sentía miedo, aunque nadie lo notaba.»</td></tr>
          </table>

          <h4>El tiempo y el espacio</h4>
          <ul>
            <li><strong>Tiempo lineal:</strong> los hechos se cuentan en orden.</li>
            <li><strong>Retrospección (flashback):</strong> se regresa al pasado para explicar algo.</li>
            <li><strong>Espacio:</strong> el lugar donde ocurre la historia (real como Chiapa de Corzo, o imaginario).</li>
          </ul>

          <h4>✍️ Ejemplo práctico</h4>
          <p>Escribe un <strong>microrrelato de máximo 150 palabras</strong> que ocurra en tu comunidad. Marca con colores sus cuatro partes y decide qué tipo de narrador usarás. Léelo en voz alta en clase.</p>
        `,
        actividades: [
          { pregunta: "La parte de la historia donde aparece el conflicto es el:", opciones: ["Inicio", "Nudo", "Desenlace", "Título"], correcta: "Nudo", explicacion: "En el nudo las cosas se complican." },
          { pregunta: "El momento de mayor tensión de una narración es el:", opciones: ["Clímax", "Inicio", "Narrador", "Espacio"], correcta: "Clímax", explicacion: "Es el punto más alto de la curva narrativa." },
          { pregunta: "«Mateo sentía miedo, aunque nadie lo notaba.» ¿Qué narrador es?", opciones: ["Protagonista", "Testigo", "Omnisciente", "No hay narrador"], correcta: "Omnisciente", explicacion: "Narra en tercera persona y sabe lo que sienten los personajes." },
          { pregunta: "Regresar al pasado dentro de una historia se llama:", opciones: ["Desenlace", "Retrospección o flashback", "Clímax", "Diálogo"], correcta: "Retrospección o flashback", explicacion: "Sirve para explicar hechos anteriores." },
          { pregunta: "En el inicio de un relato se presentan:", opciones: ["Los personajes, el lugar y el tiempo", "La solución del problema", "La moraleja", "Los créditos"], correcta: "Los personajes, el lugar y el tiempo", explicacion: "El planteamiento ubica al lector en la historia." }
        ]
      },
      {
        id: "lc2-5",
        titulo: "Leyendas y Mitos de Chiapas",
        icono: "🌙",
        imagen: "linear-gradient(135deg, #1e293b, #6d28d9)",
        contenido: `
          <h4>Mito, leyenda y cuento</h4>
          <table class="tabla-estudio">
            <tr><th></th><th>Mito</th><th>Leyenda</th><th>Cuento</th></tr>
            <tr><td><strong>¿Qué explica?</strong></td><td>El origen del mundo, de los seres humanos o de la naturaleza</td><td>Un hecho que se cuenta como si hubiera ocurrido en un lugar real</td><td>Una historia inventada</td></tr>
            <tr><td><strong>Personajes</strong></td><td>Dioses y seres sagrados</td><td>Personas y seres sobrenaturales</td><td>Cualquiera</td></tr>
            <tr><td><strong>Lugar</strong></td><td>Tiempo antes del tiempo</td><td>Lugares conocidos (un río, un cerro, un pueblo)</td><td>Real o imaginario</td></tr>
            <tr><td><strong>Ejemplo</strong></td><td>La creación de los hombres de maíz (Popol Vuh)</td><td>El Sombrerón</td><td>Un cuento de tu invención</td></tr>
          </table>

          <h4>Relatos de Chiapas</h4>
          <ul>
            <li><strong>El Sombrerón:</strong> un hombre pequeño, vestido de negro y con un sombrero enorme, que aparece de noche montado a caballo. Se dice que trenza las crines de los caballos y enamora a las muchachas con su guitarra.</li>
            <li><strong>La Tisigua:</strong> una mujer muy bella que aparece en ríos y pozas; los hombres que la siguen pierden el camino y la razón. Se cuenta en varias regiones de Chiapas.</li>
            <li><strong>Los chiapanecas del Sumidero:</strong> según la tradición, durante la conquista española los guerreros chiapanecas prefirieron arrojarse al cañón antes que rendirse. Es un relato que mezcla historia y leyenda.</li>
            <li><strong>Los hombres de maíz:</strong> en el Popol Vuh, libro sagrado de los mayas k'iche', los dioses intentan crear a los seres humanos con lodo y con madera, y solo lo logran con masa de maíz blanco y amarillo.</li>
          </ul>
          <div class="ejemplo">
            <strong>La tradición oral:</strong> las leyendas viven porque se cuentan. Cada narrador cambia un poco la historia; por eso una misma leyenda tiene versiones distintas en cada pueblo. Esa diversidad también es patrimonio.
          </div>

          <h4>Elementos para analizar una leyenda</h4>
          <ol>
            <li>¿Dónde y cuándo ocurre?</li>
            <li>¿Quiénes son los personajes? ¿Hay un ser sobrenatural?</li>
            <li>¿Cuál es el conflicto?</li>
            <li>¿Qué enseñanza, advertencia o explicación deja?</li>
            <li>¿Qué nos dice de la cultura de la comunidad que la cuenta?</li>
          </ol>

          <h4>✍️ Ejemplo práctico: rescata una leyenda</h4>
          <ol>
            <li>Pide a una persona mayor de tu familia o comunidad que te cuente una leyenda. Si te deja, grábala con el celular.</li>
            <li>Transcríbela respetando sus palabras y expresiones.</li>
            <li>Escribe una versión con inicio, nudo y desenlace claros.</li>
            <li>Agrega una ficha con el nombre de quien la contó, su comunidad y la fecha.</li>
          </ol>
        `,
        actividades: [
          { pregunta: "El relato que explica el origen del mundo o de los seres humanos es un:", opciones: ["Mito", "Cuento", "Chiste", "Reportaje"], correcta: "Mito", explicacion: "Como la creación de los hombres de maíz en el Popol Vuh." },
          { pregunta: "Una leyenda se caracteriza porque:", opciones: ["Ocurre en lugares conocidos y mezcla lo real con lo sobrenatural", "Siempre es inventada por un autor", "Solo habla de dioses", "No tiene personajes"], correcta: "Ocurre en lugares conocidos y mezcla lo real con lo sobrenatural", explicacion: "Por eso parece que pudo haber pasado de verdad." },
          { pregunta: "En el Popol Vuh, los seres humanos fueron creados finalmente con:", opciones: ["Lodo", "Madera", "Maíz", "Piedra"], correcta: "Maíz", explicacion: "Los intentos con lodo y madera fallaron." },
          { pregunta: "¿Por qué una misma leyenda tiene distintas versiones?", opciones: ["Porque se copia mal de los libros", "Porque se transmite de forma oral y cada narrador la cambia", "Porque es falsa", "Porque nadie la conoce"], correcta: "Porque se transmite de forma oral y cada narrador la cambia", explicacion: "La tradición oral hace que las historias se adapten." },
          { pregunta: "El personaje de sombrero enorme que trenza las crines de los caballos es:", opciones: ["La Tisigua", "El Sombrerón", "La Llorona", "El Nahual"], correcta: "El Sombrerón", explicacion: "Es una leyenda muy contada en Chiapas." }
        ]
      },
      {
        id: "lc2-6",
        titulo: "El Cómic y la Historieta",
        icono: "💥",
        imagen: "linear-gradient(135deg, #facc15, #f97316)",
        contenido: `
          <h4>Contar con imágenes y palabras</h4>
          <p>El <strong>cómic</strong> o <strong>historieta</strong> narra una historia mediante una secuencia de dibujos acompañados de texto. Es una narrativa popular muy usada en periódicos, revistas y redes sociales.</p>
          <figure class="diagrama-quimica">
            <img src="images/lengua/comic-partes.svg" alt="Tira cómica con sus elementos numerados" loading="lazy">
            <figcaption>
              <ol>
                <li><strong>Cartela:</strong> recuadro con la voz del narrador («Esa noche en Chiapa…»).</li>
                <li><strong>Globo de diálogo:</strong> lo que dice un personaje; el «rabito» apunta a quien habla.</li>
                <li><strong>Onomatopeya:</strong> palabra que imita un sonido («¡CRASH!»).</li>
                <li><strong>Globo de pensamiento:</strong> unido con burbujas; es lo que el personaje piensa.</li>
                <li><strong>Viñeta:</strong> cada cuadro de la historieta.</li>
              </ol>
            </figcaption>
          </figure>

          <h4>Más recursos del cómic</h4>
          <ul>
            <li><strong>Tipos de globo:</strong> con borde dentado = grito; con borde punteado = susurro.</li>
            <li><strong>Líneas cinéticas:</strong> rayitas que indican movimiento.</li>
            <li><strong>Planos:</strong> general (se ve todo el lugar), medio (de la cintura hacia arriba) y primer plano (solo la cara, para mostrar emociones).</li>
            <li><strong>Onomatopeyas comunes:</strong> ¡Bum! (explosión), ¡Zas! (golpe), ¡Splash! (agua), Zzz (dormir), ¡Toc, toc! (tocar la puerta).</li>
          </ul>

          <h4>✍️ Ejemplo práctico: de leyenda a cómic</h4>
          <ol>
            <li>Elige una leyenda de tu comunidad.</li>
            <li>Divídela en cuatro momentos: inicio, nudo, clímax y desenlace. Cada uno será una viñeta.</li>
            <li>Escribe primero el guion: qué se ve en cada viñeta y qué dicen los personajes.</li>
            <li>Dibuja usando al menos una cartela, dos globos de diálogo y una onomatopeya.</li>
          </ol>
        `,
        actividades: [
          { pregunta: "Cada cuadro de una historieta se llama:", opciones: ["Globo", "Viñeta", "Cartela", "Onomatopeya"], correcta: "Viñeta", explicacion: "La secuencia de viñetas cuenta la historia." },
          { pregunta: "«¡CRASH!» y «¡Bum!» son ejemplos de:", opciones: ["Onomatopeyas", "Cartelas", "Metáforas", "Acotaciones"], correcta: "Onomatopeyas", explicacion: "Son palabras que imitan sonidos." },
          { pregunta: "El recuadro donde aparece la voz del narrador es la:", opciones: ["Viñeta", "Cartela", "Línea cinética", "Portada"], correcta: "Cartela", explicacion: "Suele ir en la parte de arriba de la viñeta." },
          { pregunta: "Un globo con el borde dentado indica que el personaje:", opciones: ["Susurra", "Piensa", "Grita", "Duerme"], correcta: "Grita", explicacion: "El borde punteado, en cambio, indica un susurro." },
          { pregunta: "Para mostrar la emoción en la cara de un personaje se usa el:", opciones: ["Plano general", "Primer plano", "Plano medio", "Globo de pensamiento"], correcta: "Primer plano", explicacion: "Muestra el rostro de cerca." }
        ]
      },
      {
        id: "lc2-7",
        titulo: "El Texto Dramático y el Guion",
        icono: "🎬",
        imagen: "linear-gradient(135deg, #6366f1, #8b5cf6)",
        contenido: `
          <h4>Escrito para ser representado</h4>
          <p>El <strong>texto dramático</strong> se escribe para que actores lo representen en un escenario, en la radio, en un video o en un pódcast. No tiene narrador: la historia avanza con los diálogos.</p>

          <h4>Partes de un guion</h4>
          <ul>
            <li><strong>Personajes:</strong> lista de quienes participan, al inicio.</li>
            <li><strong>Diálogos:</strong> lo que dice cada personaje; su nombre va antes, en mayúsculas.</li>
            <li><strong>Acotaciones:</strong> indicaciones entre paréntesis sobre lo que hacen, cómo lo dicen, los sonidos o el escenario.</li>
            <li><strong>Actos y escenas:</strong> el acto es una parte grande de la obra; la escena cambia cuando entra o sale un personaje.</li>
          </ul>

          <h4>Ejemplo de una escena</h4>
          <div class="guion">
            <p class="acotacion">(Mercado de Comitán, muy temprano. Se oye una marimba a lo lejos. DOÑA JUANA acomoda sus canastas de flores.)</p>
            <p><strong>LUCÍA:</strong> (Llega corriendo.) ¡Doña Juana! ¿Ya vendió las flores amarillas?</p>
            <p><strong>DOÑA JUANA:</strong> (Sonríe.) Me quedan las últimas. ¿Son para el altar de tu abuelo?</p>
            <p><strong>LUCÍA:</strong> Sí… pero solo traje diez pesos. (Baja la mirada.)</p>
            <p><strong>DOÑA JUANA:</strong> (Le pone las flores en los brazos.) Tu abuelo me ayudó a levantar este puesto. Esto ya está pagado.</p>
            <p class="acotacion">(LUCÍA la abraza. Sube el volumen de la marimba. Se apagan las luces.)</p>
          </div>

          <h4>Del guion teatral al guion de pódcast</h4>
          <p>En un pódcast las acotaciones indican <strong>sonidos y música</strong>, porque el público no ve nada: (Entra música suave), (Sonido de lluvia), (Silencio de dos segundos). Todo lo que en teatro se ve, en audio hay que hacerlo escuchar.</p>

          <h4>✍️ Ejemplo práctico</h4>
          <p>En equipos de tres, escriban una escena de una página sobre un conflicto de su escuela o comunidad. Usen al menos <strong>cuatro acotaciones</strong> y represéntenla frente al grupo o grábenla como pódcast.</p>
        `,
        actividades: [
          { pregunta: "Las indicaciones entre paréntesis en un guion se llaman:", opciones: ["Diálogos", "Acotaciones", "Cartelas", "Estrofas"], correcta: "Acotaciones", explicacion: "Indican acciones, tono de voz, sonidos o escenario." },
          { pregunta: "En el texto dramático la historia avanza principalmente por:", opciones: ["El narrador", "Los diálogos", "Las rimas", "Las imágenes"], correcta: "Los diálogos", explicacion: "No hay narrador: los personajes hablan." },
          { pregunta: "Una escena cambia cuando:", opciones: ["Entra o sale un personaje", "Se termina la obra", "Alguien estornuda", "Se apaga la música"], correcta: "Entra o sale un personaje", explicacion: "El acto es una unidad mayor que la escena." },
          { pregunta: "En un guion de pódcast, las acotaciones indican sobre todo:", opciones: ["Colores del escenario", "Sonidos y música", "El vestuario", "Los gestos de la cara"], correcta: "Sonidos y música", explicacion: "En audio el público no ve; todo se escucha." },
          { pregunta: "¿Dónde se escribe el nombre del personaje que habla?", opciones: ["Al final del diálogo", "Antes del diálogo, en mayúsculas", "Entre paréntesis", "No se escribe"], correcta: "Antes del diálogo, en mayúsculas", explicacion: "Así los actores saben qué les toca decir." }
        ]
      }
    ]
  },

  3: {
    titulo: "Lengua y Comunicación III",
    subtitulo: "Descubrir culturas, apropiarse de las palabras",
    semestre: "Tercer Semestre",
    clase: "s3",
    icono: "✒️",
    descripcion: "Movimientos literarios, análisis crítico y figuras retóricas.",
    contexto: "Descubre cómo el Romanticismo, el Realismo y el Realismo Mágico (muy presente en Latinoamérica) han moldeado nuestra forma de ver el mundo.",
    temas: [
      {
        id: "lc3-1",
        titulo: "Movimientos Literarios",
        icono: "🏛️",
        imagen: "linear-gradient(135deg, #f59e0b, #d97706)",
        contenido: `
          <h4>La literatura a través del tiempo</h4>
          <ul>
            <li><strong>Romanticismo:</strong> Exalta los sentimientos, la libertad y la naturaleza.</li>
            <li><strong>Realismo:</strong> Retrata la vida cotidiana y los problemas sociales tal como son.</li>
            <li><strong>Realismo Mágico:</strong> Lo sobrenatural ocurre en la vida cotidiana (muy típico de Latinoamérica).</li>
          </ul>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> En el Realismo Mágico, un personaje puede hablar con los muertos como si nada.
          </div>
        `,
        actividades: [
          { pregunta: "El movimiento que exalta los sentimientos es:", opciones: ["Realismo", "Romanticismo", "Vanguardismo", "Clasicismo"], correcta: "Romanticismo", explicacion: "Prioriza la emoción sobre la razón." },
          { pregunta: "El Realismo Mágico es característico de:", opciones: ["Europa", "Latinoamérica", "Asia", "África"], correcta: "Latinoamérica", explicacion: "Gabriel García Márquez es su máximo exponente." },
          { pregunta: "El Realismo retrata la realidad para:", opciones: ["Escapar de ella", "Denunciar problemas sociales", "Hacer magia", "Hablar de reyes"], correcta: "Denunciar problemas sociales", explicacion: "Muestra las injusticias." },
          { pregunta: "¿Qué movimiento rompe las reglas tradicionales?", opciones: ["Neoclasicismo", "Vanguardias", "Realismo", "Clasicismo"], correcta: "Vanguardias", explicacion: "Buscan la innovación radical." },
          { pregunta: "En el Realismo Mágico, lo fantástico se trata como:", opciones: ["Un sueño", "Algo normal", "Un error", "Magia pura"], correcta: "Algo normal", explicacion: "Los personajes no se sorprenden de lo mágico." }
        ]
      },
      {
        id: "lc3-2",
        titulo: "Géneros Literarios",
        icono: "🎭",
        imagen: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        contenido: `
          <h4>Las formas de la literatura</h4>
          <ul>
            <li><strong>Narrativa (Novela/Cuento):</strong> Cuenta una historia con personajes y acciones.</li>
            <li><strong>Lírica (Poesía):</strong> Expresa sentimientos usando ritmo y rima.</li>
            <li><strong>Dramática (Teatro):</strong> Está escrita para ser representada por actores.</li>
            <li><strong>Ensayo:</strong> Expone ideas y reflexiones del autor.</li>
          </ul>
        `,
        actividades: [
          { pregunta: "El género que expresa sentimientos es:", opciones: ["Narrativo", "Lírico", "Dramático", "Ensayo"], correcta: "Lírico", explicacion: "La lírica es la poesía." },
          { pregunta: "Una obra de teatro pertenece al género:", opciones: ["Narrativo", "Lírico", "Dramático", "Ensayo"], correcta: "Dramático", explicacion: "Está hecha para ser actuada." },
          { pregunta: "Una novela de misterio es del género:", opciones: ["Lírico", "Narrativo", "Dramático", "Poético"], correcta: "Narrativo", explicacion: "Cuenta una historia." },
          { pregunta: "El ensayo se caracteriza por:", opciones: ["Tener rima", "Exponer ideas del autor", "Tener actos", "Ser un cuento"], correcta: "Exponer ideas del autor", explicacion: "Es un texto argumentativo." },
          { pregunta: "Un subgénero del terror busca:", opciones: ["Hacer reír", "Causar miedo", "Enseñar matemáticas", "Narrar historia"], correcta: "Causar miedo", explicacion: "Es su objetivo principal." }
        ]
      },
      {
        id: "lc3-3",
        titulo: "Figuras Retóricas",
        icono: "🎨",
        imagen: "linear-gradient(135deg, #ec4899, #db2777)",
        contenido: `
          <h4>El arte de jugar con las palabras</h4>
          <ul>
            <li><strong>Metáfora:</strong> Identificar algo con otra cosa (ej. "Tus ojos son dos luceros").</li>
            <li><strong>Hipérbole:</strong> Exageración (ej. "Te lo dije un millón de veces").</li>
            <li><strong>Personificación:</strong> Dar cualidades humanas a objetos (ej. "El viento susurraba").</li>
            <li><strong>Ironía:</strong> Decir lo contrario de lo que se piensa.</li>
          </ul>
        `,
        actividades: [
          { pregunta: "'El sol es una naranja en el cielo' es un ejemplo de:", opciones: ["Hipérbole", "Metáfora", "Personificación", "Ironía"], correcta: "Metáfora", explicacion: "Compara el sol con una naranja sin usar 'como'." },
          { pregunta: "'Lloré ríos de lágrimas' es un ejemplo de:", opciones: ["Metáfora", "Hipérbole", "Ironía", "Personificación"], correcta: "Hipérbole", explicacion: "Es una exageración." },
          { pregunta: "'La luna sonrió al verme' es una:", opciones: ["Metáfora", "Hipérbole", "Personificación", "Ironía"], correcta: "Personificación", explicacion: "Le da una acción humana a la luna." },
          { pregunta: "La figura que usa 'como' para comparar es:", opciones: ["Metáfora", "Símil", "Hipérbole", "Ironía"], correcta: "Símil", explicacion: "Ej: 'Es fuerte como un roble'." },
          { pregunta: "Decir '¡Qué bonito día!' cuando hay una tormenta es:", opciones: ["Metáfora", "Hipérbole", "Ironía", "Personificación"], correcta: "Ironía", explicacion: "Se dice lo contrario de lo que se siente." }
        ]
      },
      {
        id: "lc3-4",
        titulo: "La Reseña Crítica",
        icono: "📰",
        imagen: "linear-gradient(135deg, #14b8a6, #0d9488)",
        contenido: `
          <h4>Analizar y opinar</h4>
          <p>Una reseña es un texto que describe y evalúa una obra (un libro, una película, una obra de teatro).</p>
          <h4>Partes de una reseña:</h4>
          <ol>
            <li><strong>Ficha técnica:</strong> Título, autor, género.</li>
            <li><strong>Resumen:</strong> De qué trata (sin contar el final).</li>
            <li><strong>Crítica:</strong> Tu opinión fundamentada (¿por qué es buena o mala?).</li>
            <li><strong>Conclusión:</strong> ¿La recomiendas?</li>
          </ol>
        `,
        actividades: [
          { pregunta: "El propósito de una reseña es:", opciones: ["Copiar el libro", "Informar y dar una opinión crítica", "Inventar una historia", "Solo poner estrellas"], correcta: "Informar y dar una opinión crítica", explicacion: "Evalúa la obra." },
          { pregunta: "¿Qué NO debe faltar en una reseña?", opciones: ["El final de la historia", "La opinión fundamentada", "El precio", "Fotos"], correcta: "La opinión fundamentada", explicacion: "No basta con decir 'me gustó', hay que explicar por qué." },
          { pregunta: "El resumen de una reseña debe evitar:", opciones: ["El título", "Revelar el final (Spoilers)", "El autor", "El género"], correcta: "Revelar el final (Spoilers)", explicacion: "Se debe dejar la intriga." },
          { pregunta: "La ficha técnica incluye:", opciones: ["Tu opinión", "Título y autor", "El resumen", "La recomendación"], correcta: "Título y autor", explicacion: "Son los datos de la obra." },
          { pregunta: "Una reseña puede ser de:", opciones: ["Solo libros", "Solo películas", "Libros, películas, obras de teatro, etc.", "Nada"], correcta: "Libros, películas, obras de teatro, etc.", explicacion: "Se puede reseñar cualquier obra artística." }
        ]
      },
      {
        id: "lc3-5",
        titulo: "Literatura de Chiapas",
        icono: "📜",
        imagen: "linear-gradient(135deg, #be123c, #7c2d12)",
        contenido: `
          <h4>Voces chiapanecas en la literatura mexicana</h4>
          <table class="tabla-estudio">
            <tr><th>Autor</th><th>Obras importantes</th><th>¿Por qué leerlo?</th></tr>
            <tr><td><strong>Rosario Castellanos</strong> (1925–1974). Nació en la Ciudad de México y creció en Comitán.</td><td><em>Balún Canán</em> (1957), <em>Ciudad Real</em> (1960), <em>Oficio de tinieblas</em> (1962)</td><td>Retrata la vida en Chiapas, la desigualdad entre ladinos e indígenas y la situación de las mujeres. <em>Balún Canán</em> («nueve estrellas») es el antiguo nombre de Comitán.</td></tr>
            <tr><td><strong>Jaime Sabines</strong> (1926–1999), de Tuxtla Gutiérrez</td><td><em>Horal</em> (1950), <em>Tarumba</em> (1956), el poema «Los amorosos»</td><td>Uno de los poetas más leídos de México: habla del amor, la muerte y la vida diaria con un lenguaje sencillo y profundo.</td></tr>
            <tr><td><strong>Eraclio Zepeda</strong> (1937–2015), de Tuxtla Gutiérrez</td><td><em>Benzulul</em> (1959), cuentos</td><td>Narra la vida de los pueblos indígenas y campesinos de Chiapas.</td></tr>
            <tr><td><strong>Juan Bañuelos</strong> (1932–2017), de Tuxtla Gutiérrez</td><td>Poesía, parte del grupo «La espiga amotinada»</td><td>Poesía comprometida con los problemas sociales.</td></tr>
          </table>

          <h4>Literatura en lenguas originarias</h4>
          <p>Hoy muchos escritores chiapanecos escriben en su lengua y publican sus obras en ediciones bilingües. Por ejemplo, las poetas <strong>Enriqueta Lunez</strong> y <strong>Ruperta Bautista</strong> escriben en tsotsil. Su obra muestra que las lenguas originarias también son lenguas de literatura.</p>
          <div class="ejemplo">
            <strong>Para reflexionar:</strong> cuando lees un texto bilingüe, compara las dos versiones. ¿Hay palabras que no se pueden traducir exactamente? Eso nos enseña que cada lengua ve el mundo de una forma distinta.
          </div>

          <h4>Cómo leer una obra literaria con contexto</h4>
          <ol>
            <li><strong>El autor:</strong> ¿dónde y cuándo vivió? ¿Qué le tocó ver?</li>
            <li><strong>La época:</strong> ¿qué pasaba en Chiapas y en México?</li>
            <li><strong>El tema:</strong> ¿de qué habla la obra en el fondo (injusticia, amor, identidad)?</li>
            <li><strong>Tu lectura:</strong> ¿qué tiene que ver con tu vida y tu comunidad hoy?</li>
          </ol>

          <h4>✍️ Ejemplo práctico</h4>
          <p>Lee un capítulo de <em>Balún Canán</em> o un poema de Jaime Sabines (los encuentras en bibliotecas públicas y escolares). Escribe una ficha con: autor, obra, tema principal, un fragmento que te haya gustado y por qué. Después, comparte en clase un lugar de Chiapas que aparezca en la obra.</p>
        `,
        actividades: [
          { pregunta: "¿Quién escribió la novela «Balún Canán»?", opciones: ["Jaime Sabines", "Rosario Castellanos", "Eraclio Zepeda", "Octavio Paz"], correcta: "Rosario Castellanos", explicacion: "La publicó en 1957; se desarrolla en Comitán." },
          { pregunta: "«Balún Canán», que significa «nueve estrellas», es el antiguo nombre de:", opciones: ["Tuxtla Gutiérrez", "Comitán", "Palenque", "Tapachula"], correcta: "Comitán", explicacion: "Rosario Castellanos creció ahí." },
          { pregunta: "Jaime Sabines nació en:", opciones: ["San Cristóbal de las Casas", "Tuxtla Gutiérrez", "Comitán", "Oaxaca"], correcta: "Tuxtla Gutiérrez", explicacion: "Es autor de «Horal», «Tarumba» y «Los amorosos»." },
          { pregunta: "Enriqueta Lunez y Ruperta Bautista escriben poesía en:", opciones: ["Inglés", "Tsotsil", "Náhuatl", "Francés"], correcta: "Tsotsil", explicacion: "Son ejemplo de la literatura actual en lenguas originarias." },
          { pregunta: "Al leer una obra con contexto conviene preguntarse:", opciones: ["Solo cuántas páginas tiene", "Dónde y cuándo vivió el autor y qué pasaba en su época", "El precio del libro", "Nada"], correcta: "Dónde y cuándo vivió el autor y qué pasaba en su época", explicacion: "El contexto ayuda a entender el sentido de la obra." }
        ]
      },
      {
        id: "lc3-6",
        titulo: "El Ensayo Argumentativo",
        icono: "⚖️",
        imagen: "linear-gradient(135deg, #0f766e, #0ea5e9)",
        contenido: `
          <h4>Defender una idea con razones</h4>
          <p>El <strong>ensayo argumentativo</strong> presenta una opinión sobre un tema (la <strong>tesis</strong>) y la defiende con <strong>argumentos</strong> para convencer al lector.</p>

          <h4>Estructura</h4>
          <ol>
            <li><strong>Introducción:</strong> presenta el tema y la tesis.</li>
            <li><strong>Desarrollo:</strong> expone los argumentos (uno por párrafo) y responde a posibles objeciones.</li>
            <li><strong>Conclusión:</strong> retoma la tesis y cierra con una reflexión o propuesta.</li>
          </ol>
          <div class="ejemplo">
            <strong>Tesis de ejemplo:</strong> «Las escuelas de Chiapas deberían enseñar en la lengua materna de sus estudiantes, además del español.»
          </div>

          <h4>Tipos de argumentos</h4>
          <table class="tabla-estudio">
            <tr><th>Tipo</th><th>¿En qué se apoya?</th><th>Ejemplo para la tesis</th></tr>
            <tr><td>De datos</td><td>Cifras y hechos comprobables</td><td>«En Chiapas más de un millón de personas hablan una lengua originaria.»</td></tr>
            <tr><td>De autoridad</td><td>Lo que dice un experto o una ley</td><td>«La ley reconoce a las lenguas indígenas como lenguas nacionales.»</td></tr>
            <tr><td>De ejemplo</td><td>Un caso concreto</td><td>«En mi comunidad, los niños entienden mejor cuando el maestro explica en tseltal.»</td></tr>
            <tr><td>Causa y efecto</td><td>Explica consecuencias</td><td>«Si un niño no entiende la lengua de la clase, aprende menos y puede dejar la escuela.»</td></tr>
          </table>

          <h4>Conectores que dan orden</h4>
          <ul>
            <li><strong>Para agregar:</strong> además, también, asimismo.</li>
            <li><strong>Para contrastar:</strong> sin embargo, en cambio, aunque.</li>
            <li><strong>Para concluir:</strong> por lo tanto, en conclusión, en resumen.</li>
            <li><strong>Para ejemplificar:</strong> por ejemplo, es decir, como.</li>
          </ul>

          <h4>Cuidado con las falacias</h4>
          <p>Una <strong>falacia</strong> es un argumento que parece válido pero no lo es:</p>
          <ul>
            <li><strong>Ataque personal:</strong> «No le hagas caso, si ni siquiera es de aquí.» (Critica a la persona, no a la idea.)</li>
            <li><strong>Generalización apresurada:</strong> «Un turista fue grosero, entonces todos los turistas son groseros.»</li>
            <li><strong>Falsa elección:</strong> «O aprendes inglés o no tendrás futuro.» (Hay más opciones.)</li>
          </ul>

          <h4>✍️ Ejemplo práctico</h4>
          <p>Elige un problema de tu comunidad (basura en el río, uso del celular en clase, pérdida de la lengua). Escribe un ensayo de una cuartilla con una tesis clara, tres argumentos de distinto tipo, al menos cuatro conectores y una conclusión con una propuesta.</p>
        `,
        actividades: [
          { pregunta: "La opinión principal que defiende un ensayo se llama:", opciones: ["Tesis", "Título", "Conclusión", "Resumen"], correcta: "Tesis", explicacion: "Normalmente se presenta en la introducción." },
          { pregunta: "«La ley reconoce a las lenguas indígenas como lenguas nacionales» es un argumento:", opciones: ["De autoridad", "De ejemplo", "De causa y efecto", "Falaz"], correcta: "De autoridad", explicacion: "Se apoya en lo que dice una ley." },
          { pregunta: "¿Cuál es un conector para contrastar?", opciones: ["Además", "Sin embargo", "Por ejemplo", "En conclusión"], correcta: "Sin embargo", explicacion: "Introduce una idea opuesta." },
          { pregunta: "«Un turista fue grosero, entonces todos lo son» es una falacia de:", opciones: ["Autoridad", "Generalización apresurada", "Causa y efecto", "Ejemplo"], correcta: "Generalización apresurada", explicacion: "Saca una conclusión general a partir de un solo caso." },
          { pregunta: "En la conclusión de un ensayo se debe:", opciones: ["Presentar un tema nuevo", "Retomar la tesis y cerrar con una reflexión o propuesta", "Repetir el título", "Poner la bibliografía solamente"], correcta: "Retomar la tesis y cerrar con una reflexión o propuesta", explicacion: "Así el lector recuerda la idea principal." }
        ]
      },
      {
        id: "lc3-7",
        titulo: "Análisis de un Poema",
        icono: "🌸",
        imagen: "linear-gradient(135deg, #db2777, #9333ea)",
        contenido: `
          <h4>Las partes de un poema</h4>
          <ul>
            <li><strong>Verso:</strong> cada línea del poema.</li>
            <li><strong>Estrofa:</strong> grupo de versos, separado por un espacio.</li>
            <li><strong>Rima:</strong> repetición de sonidos al final de los versos.</li>
            <li><strong>Métrica:</strong> número de sílabas de cada verso.</li>
          </ul>

          <h4>Analicemos una estrofa de Sor Juana Inés de la Cruz</h4>
          <div class="poema">
            Hombres necios que acusáis <span>(a)</span><br>
            a la mujer sin razón, <span>(b)</span><br>
            sin ver que sois la ocasión <span>(b)</span><br>
            de lo mismo que culpáis. <span>(a)</span>
          </div>
          <ul>
            <li><strong>Rima consonante:</strong> se repiten vocales y consonantes desde la última vocal acentuada: acus<u>áis</u> / culp<u>áis</u>, raz<u>ón</u> / ocasi<u>ón</u>.</li>
            <li><strong>Esquema abba:</strong> el primer verso rima con el cuarto y el segundo con el tercero. Una estrofa de cuatro versos octosílabos con rima abba se llama <strong>redondilla</strong>.</li>
          </ul>

          <h4>Cómo contar las sílabas (métrica)</h4>
          <div class="formula">
Hom-bres-ne-cios-que a-cu-sáis → 7 sílabas + 1 = <strong>8</strong><br>
a-la-mu-jer-sin-ra-zón → 7 sílabas + 1 = <strong>8</strong>
          </div>
          <ul>
            <li><strong>Sinalefa:</strong> si una palabra termina en vocal y la siguiente empieza con vocal, se cuentan como una sola sílaba: «que a-cu-sáis» → «quea».</li>
            <li><strong>Ley del acento final:</strong> si el verso termina en palabra aguda (acusáis, razón) se <strong>suma 1</strong>; si termina en esdrújula, se <strong>resta 1</strong>; si es grave, se queda igual.</li>
          </ul>

          <h4>Rima consonante y asonante</h4>
          <table class="tabla-estudio">
            <tr><th>Tipo</th><th>¿Qué se repite?</th><th>Ejemplo</th></tr>
            <tr><td>Consonante</td><td>Vocales y consonantes desde la última vocal acentuada</td><td>can<u>ción</u> / coraz<u>ón</u></td></tr>
            <tr><td>Asonante</td><td>Solo las vocales</td><td>m<u>a</u>ñ<u>a</u>na / c<u>a</u>s<u>a</u></td></tr>
          </table>

          <h4>Preguntas para analizar cualquier poema</h4>
          <ol>
            <li>¿Quién habla en el poema (la voz poética) y a quién se dirige?</li>
            <li>¿Cuál es el tema? ¿Qué sentimiento transmite?</li>
            <li>¿Qué figuras retóricas usa (metáfora, personificación, hipérbole)?</li>
            <li>¿Cómo son sus versos, estrofas y rima?</li>
            <li>¿Qué significa para ti?</li>
          </ol>

          <h4>✍️ Ejemplo práctico</h4>
          <p>Escribe una <strong>redondilla</strong> (cuatro versos de ocho sílabas con rima abba) sobre un lugar de Chiapas. Cuenta las sílabas de cada verso, marca la rima y léela en voz alta.</p>
        `,
        actividades: [
          { pregunta: "Cada línea de un poema se llama:", opciones: ["Estrofa", "Verso", "Párrafo", "Rima"], correcta: "Verso", explicacion: "Un grupo de versos forma una estrofa." },
          { pregunta: "«Canción» y «corazón» tienen rima:", opciones: ["Asonante", "Consonante", "Libre", "No riman"], correcta: "Consonante", explicacion: "Se repiten vocales y consonantes desde la última vocal acentuada: -ón." },
          { pregunta: "Unir la vocal final de una palabra con la vocal inicial de la siguiente para contar una sola sílaba se llama:", opciones: ["Sinalefa", "Hipérbole", "Metáfora", "Acotación"], correcta: "Sinalefa", explicacion: "Ejemplo: «que acusáis» se cuenta «quea-cu-sáis»." },
          { pregunta: "Si un verso termina en palabra aguda, a la cuenta de sílabas se le:", opciones: ["Resta 1", "Suma 1", "Deja igual", "Multiplica por 2"], correcta: "Suma 1", explicacion: "Es la ley del acento final." },
          { pregunta: "Una estrofa de cuatro versos de ocho sílabas con rima abba se llama:", opciones: ["Soneto", "Redondilla", "Terceto", "Décima"], correcta: "Redondilla", explicacion: "Como la de «Hombres necios» de Sor Juana." }
        ]
      }
    ]
  }
};