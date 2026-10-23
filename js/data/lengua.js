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
            <strong>Ejemplo:</strong> "El café de Chiapas es rico. Yo tomó café todos los días". Es un texto claro y coherente.
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
      }
    ]
  }
};