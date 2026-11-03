/* ==========================================================
   DATA - Inglés I-V (A1 a B1)
   Alineado al Programa MCCEMS (8 propósitos formativos por
   semestre, enfoque de Prácticas Sociales del Lenguaje) y al
   modelo educativo de COBACH Chiapas.
   Los temas in* son los originales; los inx* completan los
   propósitos del programa. Material extra: ingles-estudio.js
========================================================== */

const INGLES = {
  1: {
    titulo: "Inglés I",
    subtitulo: "To Be, or Not to Be, That Is the Question",
    semestre: "Primer Semestre",
    nivel: "A1",
    clase: "s1",
    icono: "👋",
    descripcion: "Presentarte, entender el inglés del salón, describir objetos, dar tus datos, preguntar horarios y lugares, hablar de gustos y de pertenencia.",
    meta: "Reconozca y comprenda palabras, frases y expresiones básicas para presentarse, interactuar en el aula y hablar de su entorno inmediato.",
    contexto: "El inglés te abre puertas. En Chiapas, el turismo y el comercio internacional hacen que hablar inglés sea una ventaja enorme.",
    temas: [
      {
        id: "in1-1",
        proposito: "Propósito formativo 1",
        titulo: "El Verbo To Be (Ser o Estar)",
        icono: "📝",
        imagen: "linear-gradient(135deg, #f59e0b, #ef4444)",
        contenido: `
          <p>El verbo <strong>To Be</strong> es el más importante en inglés. Significa "ser" o "estar".</p>
          <h4>Conjugación en presente:</h4>
          <ul>
            <li><strong>I am</strong> (Yo soy/estoy)</li>
            <li><strong>You are</strong> (Tú eres/estás)</li>
            <li><strong>He / She / It is</strong> (Él/Ella/Eso es/está)</li>
            <li><strong>We are</strong> (Nosotros somos/estamos)</li>
            <li><strong>They are</strong> (Ellos son/están)</li>
          </ul>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto:</strong> Si un turista te pregunta en San Cristóbal: "Are you a student?", tú respondes: "Yes, I am a student" (Sí, soy estudiante).
          </div>
        `,
        actividades: [
          { pregunta: "Completa: 'I ___ from Chiapas'", opciones: ["am", "is", "are", "be"], correcta: "am", explicacion: "Con 'I' siempre se usa 'am'." },
          { pregunta: "¿Cómo se dice 'Ella es mi maestra'?", opciones: ["She is my teacher", "She are my teacher", "She am my teacher", "Her is my teacher"], correcta: "She is my teacher", explicacion: "Para 'She' se usa 'is'." },
          { pregunta: "Completa: 'They ___ my friends'", opciones: ["am", "is", "are", "be"], correcta: "are", explicacion: "Para 'They' se usa 'are'." },
          { pregunta: "¿Qué significa 'We are students'?", opciones: ["Ellos son estudiantes", "Nosotros somos estudiantes", "Yo soy estudiante", "Tú eres estudiante"], correcta: "Nosotros somos estudiantes", explicacion: "'We' significa nosotros." },
          { pregunta: "Completa: 'The coffee ___ hot'", opciones: ["am", "is", "are", "be"], correcta: "is", explicacion: "El café (it) usa 'is'." }
        ]
      },
      {
        id: "in1-2",
        proposito: "Propósito formativo 1",
        titulo: "Saludos y Presentaciones",
        icono: "👋",
        imagen: "linear-gradient(135deg, #10b981, #3b82f6)",
        contenido: `
          <h4>Saludos comunes (Greetings)</h4>
          <ul>
            <li><strong>Hello / Hi:</strong> Hola</li>
            <li><strong>Good morning:</strong> Buenos días</li>
            <li><strong>Good afternoon:</strong> Buenas tardes</li>
            <li><strong>Good evening:</strong> Buenas noches (al llegar)</li>
          </ul>
          <h4>Presentaciones</h4>
          <ul>
            <li><strong>What is your name?:</strong> ¿Cómo te llamas?</li>
            <li><strong>My name is...:</strong> Mi nombre es...</li>
            <li><strong>Nice to meet you:</strong> Mucho gusto</li>
          </ul>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto:</strong> Un guía turístico en Palenque recibe a extranjeros: "Good morning! Welcome to Chiapas. My name is Juan."
          </div>
        `,
        actividades: [
          { pregunta: "¿Cómo se dice 'Buenos días'?", opciones: ["Good night", "Good morning", "Good afternoon", "Hello"], correcta: "Good morning", explicacion: "Morning = mañana." },
          { pregunta: "Alguien te dice 'Nice to meet you'. ¿Qué respondes?", opciones: ["Good bye", "Nice to meet you too", "Thank you", "I am fine"], correcta: "Nice to meet you too", explicacion: "Significa 'Igualmente'." },
          { pregunta: "¿Qué significa 'What is your name?'", opciones: ["¿Cuántos años tienes?", "¿Dónde vives?", "¿Cómo te llamas?", "¿Cómo estás?"], correcta: "¿Cómo te llamas?", explicacion: "Name = nombre." },
          { pregunta: "¿Cómo se dice 'Buenas tardes'?", opciones: ["Good morning", "Good evening", "Good afternoon", "Good night"], correcta: "Good afternoon", explicacion: "Afternoon = tarde." },
          { pregunta: "Completa la presentación: '___ name is Maria'", opciones: ["I", "My", "Me", "Mine"], correcta: "My", explicacion: "My = mi." }
        ]
      },
      {
        id: "inx1-1",
        proposito: "Propósito formativo 2",
        titulo: "Classroom English: Instrucciones y Peticiones",
        icono: "🏫",
        imagen: "linear-gradient(135deg, #2563eb, #0891b2)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> En la clase de inglés casi todo empieza con una instrucción. Si entiendes los verbos del salón y sabes pedir ayuda, ya puedes participar desde el primer día.
          </div>

          <h4>Imperativos: dar instrucciones</h4>
          <p>El imperativo usa el verbo en su forma base, sin sujeto. Para la forma negativa se agrega <strong>Don't</strong>.</p>
          <table class="tabla-estudio">
            <tr><th>Afirmativo</th><th>Significado</th><th>Negativo</th></tr>
            <tr><td>Open your book.</td><td>Abre tu libro.</td><td>Don't open your book.</td></tr>
            <tr><td>Listen.</td><td>Escucha.</td><td>Don't talk.</td></tr>
            <tr><td>Read the text.</td><td>Lee el texto.</td><td>Don't use your phone.</td></tr>
            <tr><td>Close the door, please.</td><td>Cierra la puerta, por favor.</td><td>Don't run in the classroom.</td></tr>
            <tr><td>Sit down. / Stand up.</td><td>Siéntate. / Ponte de pie.</td><td>Don't forget your homework.</td></tr>
          </table>

          <h4>Objetos del salón (classroom objects)</h4>
          <p>notebook (cuaderno) · pencil (lápiz) · pen (pluma) · eraser (goma) · ruler (regla) · board (pizarrón) · desk (pupitre) · backpack (mochila) · dictionary (diccionario)</p>

          <h4>Expresiones para participar en clase</h4>
          <table class="tabla-estudio">
            <tr><th>Expresión</th><th>Úsala cuando…</th></tr>
            <tr><td>How do you say «milpa» in English?</td><td>no conoces una palabra.</td></tr>
            <tr><td>What does «homework» mean?</td><td>no entiendes una palabra.</td></tr>
            <tr><td>Can you repeat that, please?</td><td>no escuchaste bien.</td></tr>
            <tr><td>Can you speak more slowly, please?</td><td>hablan muy rápido.</td></tr>
            <tr><td>May I go to the bathroom?</td><td>necesitas permiso para salir.</td></tr>
            <tr><td>I don't understand.</td><td>algo no te quedó claro.</td></tr>
          </table>

          <div class="nota-estudio">
            <strong>🗣️ Tu acento es válido:</strong> no necesitas sonar como un hablante nativo. Lo importante es que te entiendan. Si hablas tsotsil, tseltal, ch'ol, zoque u otra lengua, ¡ya tienes experiencia aprendiendo idiomas!
          </div>

          <h4>🛠️ Manos a la obra</h4>
          <p>Con tu equipo, haz un cartel con las 6 expresiones para participar y pégalo en el salón. Durante una semana, úsenlas en lugar de hablar en español para pedir permiso o ayuda.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> En un taller de guías de turistas en Palenque, el instructor dice: «Listen and repeat: Welcome to Palenque». Un estudiante levanta la mano: «Can you repeat that, please?». Otro pregunta: «How do you say <em>selva</em> in English?» — «Jungle».
          </div>
        `,
        actividades: [
          { pregunta: "¿Cómo pides permiso para ir al baño?", opciones: ["May I go to the bathroom?", "I go bathroom now.", "Bathroom is go?", "You go to the bathroom."], correcta: "May I go to the bathroom?", explicacion: "May I…? es la forma educada de pedir permiso." },
          { pregunta: "¿Cuál es un imperativo negativo?", opciones: ["Don't use your phone.", "Open your book.", "You are quiet.", "Listens to me."], correcta: "Don't use your phone.", explicacion: "El imperativo negativo empieza con Don't + verbo base." },
          { pregunta: "Tu maestra habla muy rápido. ¿Qué le dices?", opciones: ["Can you speak more slowly, please?", "Close the door.", "May I go out?", "I am fine, thank you."], correcta: "Can you speak more slowly, please?", explicacion: "Pides que hable más despacio de forma amable." },
          { pregunta: "«Open your notebooks» significa:", opciones: ["Abran sus cuadernos", "Cierren sus libros", "Escriban en el pizarrón", "Saquen sus lápices"], correcta: "Abran sus cuadernos", explicacion: "Open = abrir y notebooks = cuadernos." },
          { pregunta: "Para preguntar cómo se dice «pozol» en inglés:", opciones: ["How do you say pozol in English?", "What is pozol your name?", "Where is pozol?", "How old is pozol?"], correcta: "How do you say pozol in English?", explicacion: "How do you say… in English? sirve para pedir una palabra." }
        ]
      },
      {
        id: "in1-3",
        proposito: "Propósito formativo 3",
        titulo: "Artículos y Pronombres",
        icono: "🔠",
        imagen: "linear-gradient(135deg, #8b5cf6, #ec4899)",
        contenido: `
          <h4>Artículos (The, A, An)</h4>
          <ul>
            <li><strong>The:</strong> El, la, los, las (específico).</li>
            <li><strong>A:</strong> Un, una (antes de consonante). Ej: A book.</li>
            <li><strong>An:</strong> Un, una (antes de vocal). Ej: An apple.</li>
          </ul>
          <h4>Pronombres Personales</h4>
          <p>I, You, He, She, It, We, They.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto:</strong> "I want to eat <strong>an</strong> orange and <strong>a</strong> banana" (Quiero comer una naranja y un plátano).
          </div>
        `,
        actividades: [
          { pregunta: "Completa: I have ___ apple.", opciones: ["a", "an", "the", "some"], correcta: "an", explicacion: "Apple empieza con vocal, se usa 'an'." },
          { pregunta: "Completa: He is ___ teacher.", opciones: ["a", "an", "the", "any"], correcta: "a", explicacion: "Teacher empieza con consonante." },
          { pregunta: "¿Cuál es el pronombre para 'Nosotros'?", opciones: ["They", "We", "You", "It"], correcta: "We", explicacion: "We = Nosotros." },
          { pregunta: "¿Qué significa 'They'?", opciones: ["Ellos/Ellas", "Nosotros", "Tú", "Él"], correcta: "Ellos/Ellas", explicacion: "Es el pronombre plural de tercera persona." },
          { pregunta: "Completa: ___ sun is hot.", opciones: ["A", "An", "The", "Some"], correcta: "The", explicacion: "El sol es único, se usa 'The'." }
        ]
      },
      {
        id: "inx1-2",
        proposito: "Propósito formativo 3",
        titulo: "Objects, Colors and Sizes: Describe tu Entorno",
        icono: "🎨",
        imagen: "linear-gradient(135deg, #db2777, #f59e0b)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> En inglés el adjetivo va <strong>antes</strong> del sustantivo y nunca cambia a plural: <em>a red bag</em>, <em>two red bags</em> (no «reds»).
          </div>

          <h4>Demostrativos: ¿cerca o lejos? ¿uno o varios?</h4>
          <table class="tabla-estudio">
            <tr><th></th><th>Cerca (aquí)</th><th>Lejos (allá)</th></tr>
            <tr><td>Singular</td><td><strong>this</strong> (este, esta)</td><td><strong>that</strong> (ese, aquel)</td></tr>
            <tr><td>Plural</td><td><strong>these</strong> (estos, estas)</td><td><strong>those</strong> (esos, aquellos)</td></tr>
          </table>

          <h4>Colores y tamaños</h4>
          <p><strong>Colors:</strong> red, blue, green, yellow, black, white, brown, orange, purple, pink, gray.<br>
          <strong>Sizes:</strong> big / small, long / short, tall / short, wide / narrow.</p>

          <h4>Objetos de la casa y muebles (furniture)</h4>
          <p>table (mesa) · chair (silla) · bed (cama) · sofa (sillón) · door (puerta) · window (ventana) · shelf (repisa) · hammock (hamaca) · stove (estufa)</p>

          <h4>Orden de las palabras</h4>
          <div class="formula">
artículo + tamaño + color + sustantivo<br>
a big red backpack · an old brown table · two small blue chairs
          </div>

          <h4>🛠️ Manos a la obra</h4>
          <p>Toma una foto de un rincón de tu casa o de tu salón. Escribe 5 oraciones: «This is a small green chair. Those are big windows.» Compártelas con tu equipo sin mostrar la foto: ¿pueden dibujarlo?</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> En un puesto de artesanías de San Cristóbal:<br>
            — «This is a red and blue blouse from Zinacantán.»<br>
            — «Those are small amber earrings.»<br>
            — «That is a big clay pot from Amatenango.»
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué demostrativo usas para varios objetos que están cerca?", opciones: ["These", "That", "Those", "This"], correcta: "These", explicacion: "These = estos (plural y cerca)." },
          { pregunta: "¿Cuál es correcta?", opciones: ["a big red backpack", "a backpack big red", "a reds backpack", "big a backpack"], correcta: "a big red backpack", explicacion: "Artículo + tamaño + color + sustantivo. El adjetivo no lleva plural." },
          { pregunta: "«Those chairs are blue» significa:", opciones: ["Esas sillas son azules", "Esta silla es azul", "Estas sillas son azules", "Aquella mesa es azul"], correcta: "Esas sillas son azules", explicacion: "Those = esas o aquellas (plural y lejos)." },
          { pregunta: "¿Cuál es el plural de «This is a small table»?", opciones: ["These are small tables.", "These is small tables.", "This are smalls tables.", "Those is small table."], correcta: "These are small tables.", explicacion: "This → these, is → are, table → tables; small no cambia." },
          { pregunta: "¿Cuál es un mueble (furniture)?", opciones: ["Bed", "Eraser", "Pencil", "Notebook"], correcta: "Bed", explicacion: "Bed = cama. Los demás son útiles escolares." }
        ]
      },
      {
        id: "inx1-3",
        proposito: "Propósito formativo 4",
        titulo: "Personal Information: Nombre, Edad, Teléfono y Correo",
        icono: "📇",
        imagen: "linear-gradient(135deg, #0d9488, #2563eb)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Para llenar un formulario o registrarte en un hotel, una beca o una aplicación necesitas preguntar y dar datos personales, deletrear tu nombre y dictar tu correo.
          </div>

          <h4>To be: forma negativa e interrogativa</h4>
          <table class="tabla-estudio">
            <tr><th>Negativa</th><th>Pregunta</th><th>Respuesta corta</th></tr>
            <tr><td>I'm not from Mexico City.</td><td>Are you from Chiapas?</td><td>Yes, I am. / No, I'm not.</td></tr>
            <tr><td>She isn't a teacher.</td><td>Is she a doctor?</td><td>Yes, she is. / No, she isn't.</td></tr>
            <tr><td>They aren't students.</td><td>Are they farmers?</td><td>Yes, they are. / No, they aren't.</td></tr>
          </table>
          <p>⚠️ En respuestas cortas afirmativas no se contrae: «Yes, I am» (no «Yes, I'm»).</p>

          <h4>Adjetivos posesivos</h4>
          <p>my (mi) · your (tu) · his (su, de él) · her (su, de ella) · its (su, de una cosa o animal) · our (nuestro) · their (su, de ellos)</p>

          <h4>El alfabeto: letras que confunden a los hispanohablantes</h4>
          <table class="tabla-estudio">
            <tr><th>Letra</th><th>Suena parecido a…</th><th>Letra</th><th>Suena parecido a…</th></tr>
            <tr><td>A</td><td>«ei»</td><td>I</td><td>«ai»</td></tr>
            <tr><td>E</td><td>«i»</td><td>J</td><td>«yei»</td></tr>
            <tr><td>G</td><td>«yi»</td><td>H</td><td>«eich»</td></tr>
            <tr><td>R</td><td>«ar»</td><td>Y</td><td>«uai»</td></tr>
          </table>

          <h4>Teléfonos y correos</h4>
          <ul>
            <li>Los números se dicen uno por uno: 961 245 3080 → «nine six one, two four five, three oh eight oh».</li>
            <li>@ = <strong>at</strong> · . = <strong>dot</strong> · _ = underscore · - = dash</li>
          </ul>

          <h4>Profesiones (jobs)</h4>
          <p>teacher · doctor · nurse · cook · driver · farmer · engineer · tour guide · artisan · police officer</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Trabajas en la recepción de un hotel en Tuxtla:<br>
            — «What's your name?» — «Emma Brown.» — «How do you spell your last name?» — «B-R-O-W-N.»<br>
            — «What's your email?» — «emma dot brown at mail dot com.»<br>
            — «Are you a tourist?» — «No, I'm not. I'm a nurse. I work at a clinic in Comitán.»
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es la forma negativa de «She is a doctor»?", opciones: ["She isn't a doctor.", "She not is a doctor.", "She doesn't a doctor.", "She aren't a doctor."], correcta: "She isn't a doctor.", explicacion: "Se agrega not después del verbo to be: is not = isn't." },
          { pregunta: "¿Cuál es la respuesta corta correcta a «Are you a student?»", opciones: ["Yes, I am.", "Yes, I'm.", "Yes, I are.", "Yes, you am."], correcta: "Yes, I am.", explicacion: "En respuestas cortas afirmativas no se usa contracción." },
          { pregunta: "En «His name is Carlos», ¿qué significa his?", opciones: ["Su (de él)", "Su (de ella)", "Tu", "Mi"], correcta: "Su (de él)", explicacion: "His se usa para un hombre; her para una mujer." },
          { pregunta: "¿Cómo se lee el símbolo @ en un correo electrónico?", opciones: ["at", "arroba", "and", "dot"], correcta: "at", explicacion: "@ se dice at y el punto se dice dot." },
          { pregunta: "¿Qué profesión tiene una persona que cultiva café en su parcela?", opciones: ["farmer", "nurse", "driver", "teacher"], correcta: "farmer", explicacion: "Farmer = agricultor o campesino." }
        ]
      },
      {
        id: "inx1-4",
        proposito: "Propósito formativo 5",
        titulo: "Wh- Questions: ¿Dónde, Cuándo, a Qué Hora?",
        icono: "❓",
        imagen: "linear-gradient(135deg, #7c3aed, #2563eb)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Las preguntas abiertas empiezan con una palabra <strong>Wh-</strong>. El orden es: <strong>Wh- + to be + sujeto</strong>: <em>Where is the market?</em>
          </div>

          <h4>Palabras interrogativas</h4>
          <table class="tabla-estudio">
            <tr><th>Palabra</th><th>Pregunta por…</th><th>Ejemplo</th></tr>
            <tr><td>What</td><td>qué / cuál</td><td>What is your favorite subject?</td></tr>
            <tr><td>Where</td><td>dónde</td><td>Where is the bus station?</td></tr>
            <tr><td>When</td><td>cuándo</td><td>When is your English class?</td></tr>
            <tr><td>Who</td><td>quién</td><td>Who is your teacher?</td></tr>
            <tr><td>How</td><td>cómo</td><td>How is the weather today?</td></tr>
            <tr><td>What time</td><td>a qué hora</td><td>What time is the bus to Palenque?</td></tr>
          </table>

          <h4>Preposiciones de tiempo: in, on, at</h4>
          <table class="tabla-estudio">
            <tr><th>in</th><th>on</th><th>at</th></tr>
            <tr><td>meses, años, partes del día<br>in May · in 2026 · in the morning</td><td>días y fechas<br>on Monday · on May 5th</td><td>horas exactas y momentos<br>at 7:00 · at noon · at night</td></tr>
          </table>

          <h4>Días y meses</h4>
          <p><strong>Days:</strong> Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.<br>
          <strong>Months:</strong> January, February, March, April, May, June, July, August, September, October, November, December.<br>
          En inglés días y meses se escriben con <strong>mayúscula</strong>.</p>

          <h4>Decir la hora</h4>
          <figure class="diagrama-quimica">
            <img src="images/ingles/reloj-horas.svg" alt="Cuatro relojes con las horas en inglés" loading="lazy">
            <figcaption>What time is it? It's seven o'clock / quarter past seven / half past seven / quarter to eight. También puedes decir los números: It's seven thirty.</figcaption>
          </figure>

          <h4>Lugares y materias</h4>
          <p><strong>Places:</strong> market, bus station, church, park, clinic, library, town hall.<br>
          <strong>School subjects:</strong> Math, Chemistry, Physics, Biology, History, Spanish, English.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Un turista en la terminal de autobuses de San Cristóbal pregunta:<br>
            — «What time is the bus to Palenque?» — «It's at half past eight, in the morning.»<br>
            — «When is the Fiesta Grande in Chiapa de Corzo?» — «It's in January.»<br>
            — «Where is the cathedral?» — «It's in the main square.»
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué palabra pregunta por un lugar?", opciones: ["Where", "When", "Who", "What"], correcta: "Where", explicacion: "Where = dónde." },
          { pregunta: "Completa: «My birthday is ___ May.»", opciones: ["in", "on", "at", "for"], correcta: "in", explicacion: "Con los meses se usa in." },
          { pregunta: "Completa: «The class is ___ Monday ___ 8:00.»", opciones: ["on / at", "in / on", "at / in", "on / in"], correcta: "on / at", explicacion: "On con días y at con horas exactas." },
          { pregunta: "¿Cómo se dice 7:30 en inglés?", opciones: ["It's half past seven.", "It's seven and thirty past.", "It's half to seven.", "It's quarter past seven."], correcta: "It's half past seven.", explicacion: "Half past = y media. Quarter past sería 7:15." },
          { pregunta: "¿Cuál tiene el orden correcto?", opciones: ["Where is the bus station?", "Where the bus station is?", "Is where the bus station?", "The bus station where is?"], correcta: "Where is the bus station?", explicacion: "Wh- + to be + sujeto." }
        ]
      },
      {
        id: "inx1-5",
        proposito: "Propósito formativo 6",
        titulo: "There Is / There Are: Mi Casa y Mi Comunidad",
        icono: "🏘️",
        imagen: "linear-gradient(135deg, #16a34a, #0d9488)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> <strong>There is</strong> y <strong>there are</strong> significan «hay». Se usa <em>is</em> con una cosa y <em>are</em> con varias.
          </div>

          <h4>Formas</h4>
          <table class="tabla-estudio">
            <tr><th></th><th>Singular</th><th>Plural</th></tr>
            <tr><td>Afirmativa</td><td>There is a park.</td><td>There are two schools.</td></tr>
            <tr><td>Negativa</td><td>There isn't a hospital.</td><td>There aren't any cinemas.</td></tr>
            <tr><td>Pregunta</td><td>Is there a bank? — Yes, there is.</td><td>Are there any hotels? — No, there aren't.</td></tr>
          </table>

          <h4>Preposiciones de lugar</h4>
          <figure class="diagrama-quimica">
            <img src="images/ingles/preposiciones-lugar.svg" alt="Una pelota en distintas posiciones respecto a una caja" loading="lazy">
            <figcaption>Where is the ball? It's in / on / under / next to / behind / in front of / between the boxes.</figcaption>
          </figure>

          <h4>Partes de la casa</h4>
          <p>kitchen (cocina) · bedroom (recámara) · bathroom (baño) · living room (sala) · dining room (comedor) · yard (patio) · roof (techo)</p>

          <h4>Describir personas con respeto</h4>
          <table class="tabla-estudio">
            <tr><th>Rasgo</th><th>Ejemplos</th></tr>
            <tr><td>Estatura</td><td>tall, short, medium height</td></tr>
            <tr><td>Edad</td><td>young, old, middle-aged</td></tr>
            <tr><td>Cabello</td><td>long, short, black, curly, straight hair</td></tr>
            <tr><td>Clima</td><td>It's sunny / rainy / hot / cold / cloudy.</td></tr>
          </table>
          <p>Describe lo que observas sin juzgar: «She is short and has long black hair» describe; palabras como <em>ugly</em> o <em>weird</em> juzgan y pueden lastimar.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> «In my town there is a big market next to the church. There are many coffee shops in San Cristóbal. There isn't a beach in Comitán, but there are beautiful lakes near it: the Lagunas de Montebello. Today it is cold and cloudy.»
          </div>
        `,
        actividades: [
          { pregunta: "Completa: «There ___ two beds in my bedroom.»", opciones: ["are", "is", "am", "be"], correcta: "are", explicacion: "Two beds es plural: there are." },
          { pregunta: "Completa: «There ___ a market next to the church.»", opciones: ["is", "are", "am", "be"], correcta: "is", explicacion: "A market es singular: there is." },
          { pregunta: "«El gato está debajo de la mesa»: The cat is ___ the table.", opciones: ["under", "on", "in", "between"], correcta: "under", explicacion: "Under = debajo de. On = sobre." },
          { pregunta: "«The bank is between the school and the park» significa:", opciones: ["El banco está entre la escuela y el parque", "El banco está detrás de la escuela", "El banco está enfrente del parque", "El banco está dentro de la escuela"], correcta: "El banco está entre la escuela y el parque", explicacion: "Between = entre dos cosas." },
          { pregunta: "¿Qué oración describe a una persona con respeto?", opciones: ["She is tall and has long black hair.", "She is ugly.", "He is a weird boy.", "They are bad people."], correcta: "She is tall and has long black hair.", explicacion: "Describe rasgos que observas sin juzgar a la persona." }
        ]
      },
      {
        id: "inx1-6",
        proposito: "Propósito formativo 7",
        titulo: "Likes and Favorites: Gustos y Razones",
        icono: "❤️",
        imagen: "linear-gradient(135deg, #e11d48, #c026d3)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Hablar de lo que te gusta es la forma más fácil de hacer amigos en otro idioma. Y si das una razón con <strong>because</strong>, la conversación sigue.
          </div>

          <h4>Expresar gustos y preferencias</h4>
          <table class="tabla-estudio">
            <tr><th>Estructura</th><th>Ejemplo</th></tr>
            <tr><td>like + sustantivo</td><td>I like music.</td></tr>
            <tr><td>like + verbo-ing</td><td>I like dancing. She likes playing soccer.</td></tr>
            <tr><td>favorite</td><td>My favorite food is tamales.</td></tr>
            <tr><td>prefer</td><td>I prefer coffee. / I prefer the beach to the city.</td></tr>
            <tr><td>very (intensificador)</td><td>It's very hot. The movie is very good.</td></tr>
          </table>

          <h4>Dar razones: because, and, so</h4>
          <ul>
            <li><strong>because</strong> (porque): I like Palenque <em>because</em> it has amazing ruins.</li>
            <li><strong>and</strong> (y): I like reading <em>and</em> drawing.</li>
            <li><strong>so</strong> (así que): It's hot, <em>so</em> I want a cold pozol.</li>
          </ul>

          <h4>Pasatiempos (hobbies)</h4>
          <p>playing the marimba · dancing · reading · drawing · swimming · playing soccer · watching movies · cooking · listening to music</p>

          <h4>Responder con empatía</h4>
          <p>Cuando alguien comparte un gusto: «That's cool!», «Me too!», «Really? Why?», «I don't, but it sounds interesting.»</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Haz una mini encuesta en inglés a 5 compañeros: «What is your favorite food? Why?». Anota las respuestas y preséntalas: «Three students like tacos because…»</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> «My favorite place is the Sumidero Canyon because it is very big and beautiful. I like eating tamales de chipilín. I prefer pozol to soda, and I love listening to the marimba in the park on Sundays.»
          </div>
        `,
        actividades: [
          { pregunta: "Completa: «I like ___ the marimba.»", opciones: ["playing", "play to", "plays", "played"], correcta: "playing", explicacion: "Después de like se usa el verbo con -ing (o to + verbo)." },
          { pregunta: "«My favorite food is tamales» significa:", opciones: ["Mi comida favorita son los tamales", "Me gusta cocinar tamales", "Prefiero tamales a tacos", "Mis tamales son muy grandes"], correcta: "Mi comida favorita son los tamales", explicacion: "Favorite = favorito o favorita." },
          { pregunta: "Completa: «I like Palenque ___ it has beautiful ruins.»", opciones: ["because", "so", "but", "or"], correcta: "because", explicacion: "Because introduce la razón." },
          { pregunta: "«I prefer coffee» significa:", opciones: ["Prefiero el café", "Prefiero el té", "Me gustan el café y el té", "No me gusta el café"], correcta: "Prefiero el café", explicacion: "Prefer = preferir." },
          { pregunta: "Tu compañero dice «I love reading». ¿Qué respuesta es empática?", opciones: ["That's cool! What is your favorite book?", "Reading is boring.", "I don't care.", "No."], correcta: "That's cool! What is your favorite book?", explicacion: "Muestras interés y continúas la conversación con una pregunta." }
        ]
      },
      {
        id: "inx1-7",
        proposito: "Propósito formativo 8",
        titulo: "Whose Is It? Expresar Pertenencia",
        icono: "🎒",
        imagen: "linear-gradient(135deg, #b45309, #be123c)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Para decir de quién es algo tienes tres herramientas: el <strong>'s</strong> (María's), los <strong>pronombres posesivos</strong> (mine, yours) y la pregunta <strong>Whose…?</strong>
          </div>

          <h4>Adjetivos y pronombres posesivos</h4>
          <table class="tabla-estudio">
            <tr><th>Pronombre</th><th>Adjetivo (antes del sustantivo)</th><th>Pronombre posesivo (solo)</th></tr>
            <tr><td>I</td><td>It's my pencil.</td><td>It's mine.</td></tr>
            <tr><td>You</td><td>It's your book.</td><td>It's yours.</td></tr>
            <tr><td>He</td><td>It's his bag.</td><td>It's his.</td></tr>
            <tr><td>She</td><td>It's her phone.</td><td>It's hers.</td></tr>
            <tr><td>We</td><td>It's our classroom.</td><td>It's ours.</td></tr>
            <tr><td>They</td><td>It's their house.</td><td>It's theirs.</td></tr>
          </table>

          <h4>El genitivo sajón ('s)</h4>
          <div class="formula">
dueño + 's + cosa<br>
María's notebook (el cuaderno de María) · my grandmother's huipil (el huipil de mi abuela)
          </div>

          <h4>La pregunta Whose…?</h4>
          <div class="formula">
Whose pencil is this? — It's Ana's. / It's mine.<br>
Whose keys are these? — They're Luis's.
          </div>

          <h4>Materiales</h4>
          <p>It's made of… wood (madera) · plastic · metal · clay (barro) · wool (lana) · cotton (algodón) · amber (ámbar) · leather (piel)</p>

          <h4>🛠️ Manos a la obra: la caja de objetos perdidos</h4>
          <p>Cada quien pone un objeto en una caja. Saca uno y pregunta: «Whose is this?». El dueño responde: «It's mine! It's my blue pen. It's made of plastic.»</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> — «Whose huipil is this? It's beautiful.» — «It's my grandmother's. It's made of wool and cotton, from San Juan Chamula.»<br>
            — «Is this amber necklace yours?» — «No, it isn't mine. It's my sister's.»
          </div>
        `,
        actividades: [
          { pregunta: "«Is this your pencil?» — «Yes, it's ___.»", opciones: ["mine", "my", "me", "I"], correcta: "mine", explicacion: "Sin sustantivo después se usa el pronombre posesivo: mine." },
          { pregunta: "¿Cómo se dice «el cuaderno de María»?", opciones: ["María's notebook", "The notebook María", "María notebook's", "Notebook of María's"], correcta: "María's notebook", explicacion: "Dueño + 's + cosa." },
          { pregunta: "¿Cómo preguntas de quién es una mochila?", opciones: ["Whose bag is this?", "Who bag is this?", "Whose is bag this?", "What bag is whose?"], correcta: "Whose bag is this?", explicacion: "Whose + cosa + is this?" },
          { pregunta: "«This book is hers» significa:", opciones: ["Este libro es de ella", "Este libro es de él", "Este libro es mío", "Este libro es tuyo"], correcta: "Este libro es de ella", explicacion: "Hers = de ella. His = de él." },
          { pregunta: "Completa: «These are my keys. They are ___.»", opciones: ["mine", "my", "mines", "me"], correcta: "mine", explicacion: "Mine no cambia en plural (no existe «mines»)." }
        ]
      }
    ]
  },

  2: {
    titulo: "Inglés II",
    subtitulo: "These Are a Few of My Favorite Things",
    semestre: "Segundo Semestre",
    nivel: "A1+",
    clase: "s2",
    icono: "⭐",
    descripcion: "Rutinas, tiempo libre, habilidades, descripciones, comparaciones, cómo llegar a un lugar y compras en el mercado.",
    meta: "Intercambie información básica sobre su vida cotidiana y su entorno. Participe en interacciones breves y comprensibles que impliquen rutinas sociales, gustos, descripciones simples y necesidades básicas, en contextos escolares y comunitarios.",
    contexto: "Aprender a describir tus cosas favoritas, tu familia y tu entorno.",
    temas: [
      {
        id: "inx2-1",
        proposito: "Propósito formativo 1",
        titulo: "Daily Routines: Presente Simple y Frecuencia",
        icono: "⏰",
        imagen: "linear-gradient(135deg, #2563eb, #7c3aed)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> El <strong>presente simple</strong> describe lo que haces normalmente. Con <em>he, she, it</em> el verbo lleva <strong>-s</strong>: I work → she work<strong>s</strong>.
          </div>

          <h4>Forma afirmativa</h4>
          <table class="tabla-estudio">
            <tr><th>Sujeto</th><th>Verbo</th><th>Ejemplo</th></tr>
            <tr><td>I / You / We / They</td><td>forma base</td><td>I wake up at 6:00.</td></tr>
            <tr><td>He / She / It</td><td>verbo + s</td><td>She wakes up at 5:30.</td></tr>
          </table>

          <h4>Ortografía de la tercera persona</h4>
          <table class="tabla-estudio">
            <tr><th>Regla</th><th>Ejemplos</th></tr>
            <tr><td>La mayoría: + s</td><td>works, plays, reads</td></tr>
            <tr><td>Termina en -ch, -sh, -s, -x, -o: + es</td><td>watches, washes, goes, does</td></tr>
            <tr><td>Consonante + y: -y → -ies</td><td>study → studies, carry → carries</td></tr>
            <tr><td>Irregular</td><td>have → has</td></tr>
          </table>

          <h4>Adverbios de frecuencia</h4>
          <figure class="diagrama-quimica">
            <img src="images/ingles/adverbios-frecuencia.svg" alt="Escala de adverbios de frecuencia" loading="lazy">
            <figcaption>Van <strong>antes</strong> del verbo principal (I always eat breakfast) pero <strong>después</strong> del verbo to be (I am always late).</figcaption>
          </figure>

          <h4>Verbos de rutina</h4>
          <p>wake up · get up · take a shower · get dressed · have breakfast · go to school · do homework · help at home · feed the chickens · go to bed</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Escribe tu rutina de un día de clases con al menos 8 oraciones y 3 adverbios de frecuencia. Luego escribe la rutina de una persona de tu familia usando <em>he</em> o <em>she</em>.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> «My father is a coffee farmer. He always wakes up at 5:00. He usually goes to the farm by truck. In the afternoon, my mother sells tamales at the market. I sometimes help her. We never eat dinner late.»
          </div>
        `,
        actividades: [
          { pregunta: "Completa: «She ___ to school by bus.»", opciones: ["goes", "go", "going", "gos"], correcta: "goes", explicacion: "Con she el verbo go se convierte en goes (termina en -o: + es)." },
          { pregunta: "¿Cuál es la forma de tercera persona de study?", opciones: ["studies", "studys", "studyes", "study"], correcta: "studies", explicacion: "Consonante + y: la y cambia a -ies." },
          { pregunta: "¿Dónde va el adverbio de frecuencia?", opciones: ["I always eat breakfast at 7.", "I eat always breakfast at 7.", "I eat breakfast at always 7.", "Always I eats breakfast at 7."], correcta: "I always eat breakfast at 7.", explicacion: "El adverbio va antes del verbo principal." },
          { pregunta: "«Usually» indica que algo ocurre aproximadamente:", opciones: ["80–90 % de las veces", "0 % de las veces", "10 % de las veces", "50 % de las veces"], correcta: "80–90 % de las veces", explicacion: "Usually = casi siempre. Sometimes es cerca del 50 %." },
          { pregunta: "Completa: «My mother ___ tortillas every morning.»", opciones: ["makes", "make", "making", "is make"], correcta: "makes", explicacion: "My mother = she, así que el verbo lleva -s." }
        ]
      },
      {
        id: "inx2-2",
        proposito: "Propósito formativo 2",
        titulo: "Free Time: Negativas y Preguntas con Do / Does",
        icono: "⚽",
        imagen: "linear-gradient(135deg, #059669, #2563eb)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Para negar o preguntar en presente simple se usa el auxiliar <strong>do</strong> o <strong>does</strong>, y el verbo regresa a su forma base: <em>She plays</em> → <em>She doesn't play</em> → <em>Does she play?</em>
          </div>

          <h4>Negativa y pregunta</h4>
          <table class="tabla-estudio">
            <tr><th></th><th>I / You / We / They</th><th>He / She / It</th></tr>
            <tr><td>Negativa</td><td>I <strong>don't</strong> watch TV.</td><td>He <strong>doesn't</strong> watch TV.</td></tr>
            <tr><td>Pregunta</td><td><strong>Do</strong> you play soccer?</td><td><strong>Does</strong> she play soccer?</td></tr>
            <tr><td>Respuesta corta</td><td>Yes, I do. / No, I don't.</td><td>Yes, she does. / No, she doesn't.</td></tr>
          </table>
          <div class="alerta nota-estudio">
            <strong>⚠️ Error común:</strong> «She doesn't plays». Cuando aparece <em>does</em>, la -s ya no va en el verbo: She doesn't <strong>play</strong>.
          </div>

          <h4>Momentos del día y de la semana</h4>
          <table class="tabla-estudio">
            <tr><th>Expresión</th><th>Significado</th></tr>
            <tr><td>in the morning / in the afternoon / in the evening</td><td>en la mañana / tarde / noche (temprano)</td></tr>
            <tr><td>at night</td><td>en la noche</td></tr>
            <tr><td>on Saturdays / on weekends</td><td>los sábados / los fines de semana</td></tr>
            <tr><td>every day / once a week / twice a month</td><td>diario / una vez a la semana / dos veces al mes</td></tr>
          </table>

          <h4>Actividades de tiempo libre</h4>
          <p>play basketball · go to the river · ride a bike · visit my grandparents · watch series · play video games · go to church · practice dance</p>

          <h4>🛠️ Manos a la obra: Find someone who…</h4>
          <p>Camina por el salón y busca a alguien que… <em>plays an instrument</em>, <em>goes to the river on weekends</em>, <em>doesn't drink coffee</em>. Pregunta: «Do you…?» y escribe su nombre cuando responda «Yes, I do».</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> — «Does your brother play basketball?» — «Yes, he does. He plays in the park on Saturdays.»<br>
            — «Do you go to the Lagunas de Montebello?» — «No, I don't. It's far from my town. But we go to the river on Sundays.»
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es la negativa de «He plays soccer»?", opciones: ["He doesn't play soccer.", "He don't plays soccer.", "He doesn't plays soccer.", "He not play soccer."], correcta: "He doesn't play soccer.", explicacion: "Con he se usa doesn't y el verbo en forma base." },
          { pregunta: "¿Cuál pregunta es correcta?", opciones: ["Do you like dancing?", "Does you like dancing?", "You like dancing do?", "Are you like dancing?"], correcta: "Do you like dancing?", explicacion: "Con you se usa Do al inicio de la pregunta." },
          { pregunta: "Respuesta corta a «Does she work on Sundays?»", opciones: ["No, she doesn't.", "No, she don't.", "No, she isn't.", "No, she not."], correcta: "No, she doesn't.", explicacion: "Se responde con el mismo auxiliar de la pregunta: does." },
          { pregunta: "Completa: «We go to the park ___ the afternoon.»", opciones: ["in", "on", "at", "by"], correcta: "in", explicacion: "In the morning, in the afternoon, in the evening." },
          { pregunta: "Completa: «___ your friends play the marimba?»", opciones: ["Do", "Does", "Are", "Is"], correcta: "Do", explicacion: "Your friends = they, así que se usa Do." }
        ]
      },
      {
        id: "inx2-3",
        proposito: "Propósito formativo 3",
        titulo: "Can / Can't: Habilidades y Permisos",
        icono: "💪",
        imagen: "linear-gradient(135deg, #ea580c, #dc2626)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> <strong>Can</strong> sirve para decir lo que <em>sabes</em> o <em>puedes</em> hacer y para <em>pedir permiso</em>. No cambia con ninguna persona y va seguido del verbo base.
          </div>

          <h4>Formas</h4>
          <table class="tabla-estudio">
            <tr><th>Uso</th><th>Ejemplo</th></tr>
            <tr><td>Habilidad (+)</td><td>I can swim. She can play the guitar.</td></tr>
            <tr><td>Habilidad (−)</td><td>He can't cook. (can't = cannot)</td></tr>
            <tr><td>Pregunta</td><td>Can you speak Tseltal? — Yes, I can. / No, I can't.</td></tr>
            <tr><td>Permiso</td><td>Can I borrow your pen? — Sure! / Sorry, you can't.</td></tr>
            <tr><td>Regla</td><td>You can't use your phone during the exam.</td></tr>
          </table>
          <div class="alerta nota-estudio">
            <strong>⚠️ Sin «to» y sin «s»:</strong> She can <strong>dance</strong> (no «She cans dance» ni «She can to dance»).
          </div>

          <h4>Pronunciación</h4>
          <p>En una oración afirmativa, <em>can</em> suena débil y corto («kən»), mientras que <em>can't</em> suena fuerte y largo («kant»). Escuchar esa diferencia te ayuda a entender si la respuesta es sí o no.</p>

          <h4>Habilidades</h4>
          <p>swim · cook · dance · draw · play the guitar · play the marimba · speak two languages · drive · ride a horse · use a computer</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Escriban en equipo las <strong>reglas del salón</strong> con can y can't (5 de cada una) y hagan un cartel. Después, cuenta tres cosas que puedes hacer y una que todavía no puedes, pero quieres aprender.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> «My grandmother can weave on a backstrap loom. My cousin can speak Tsotsil, Spanish and a little English. I can't play the marimba yet, but I can dance. In the Sumidero tour you can't swim in the river, but you can see crocodiles.»
          </div>
        `,
        actividades: [
          { pregunta: "«I can swim» expresa:", opciones: ["Habilidad", "Obligación", "Pasado", "Futuro"], correcta: "Habilidad", explicacion: "Can expresa lo que una persona sabe o puede hacer." },
          { pregunta: "¿Cómo pides permiso para abrir la ventana?", opciones: ["Can I open the window?", "I can open the window?", "Can open I the window?", "Do I can open the window?"], correcta: "Can I open the window?", explicacion: "En la pregunta, can va antes del sujeto." },
          { pregunta: "Completa: «She ___ play the guitar. She is very good.»", opciones: ["can", "cans", "can to", "is can"], correcta: "can", explicacion: "Can no lleva -s ni to." },
          { pregunta: "¿Cuál regla del laboratorio está bien escrita?", opciones: ["You can't eat in the lab.", "You don't can eat in the lab.", "You can't to eat in the lab.", "You cannot eats in the lab."], correcta: "You can't eat in the lab.", explicacion: "Can't + verbo base, sin to y sin -s." },
          { pregunta: "Respuesta corta a «Can your brother cook?»", opciones: ["Yes, he can.", "Yes, he cans.", "Yes, he does.", "Yes, he is."], correcta: "Yes, he can.", explicacion: "Se responde con el mismo verbo modal: can." }
        ]
      },
      {
        id: "in2-2",
        proposito: "Propósito formativo 4",
        titulo: "Adjetivos Posesivos y Familia",
        icono: "👨‍👩‍👧",
        imagen: "linear-gradient(135deg, #06b6d4, #0891b2)",
        contenido: `
          <h4>Adjetivos Posesivos</h4>
          <ul>
            <li><strong>My:</strong> Mi(s)</li>
            <li><strong>Your:</strong> Tu(s)</li>
            <li><strong>His:</strong> Su(s) de él</li>
            <li><strong>Her:</strong> Su(s) de ella</li>
            <li><strong>Our:</strong> Nuestro(s)</li>
            <li><strong>Their:</strong> Su(s) de ellos</li>
          </ul>
          <h4>Familia (Family)</h4>
          <p>Mother, Father, Brother, Sister, Son, Daughter.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto:</strong> "My mother cooks delicious tamales" (Mi madre cocina deliciosos tamales). "Their house is in the mountains" (Su casa está en las montañas).
          </div>
        `,
        actividades: [
          { pregunta: "Completa: Juan loves ___ dog.", opciones: ["her", "his", "their", "our"], correcta: "his", explicacion: "Juan es él (his)." },
          { pregunta: "¿Cómo se dice 'Mi hermana'?", opciones: ["His sister", "My sister", "Her sister", "Your sister"], correcta: "My sister", explicacion: "My = mi." },
          { pregunta: "Completa: Maria and I love ___ school.", opciones: ["his", "her", "our", "their"], correcta: "our", explicacion: "Maria y yo = nosotros (our)." },
          { pregunta: "¿Qué significa 'Their father'?", opciones: ["Su padre (de él)", "Su padre (de ella)", "Su padre (de ellos)", "Mi padre"], correcta: "Su padre (de ellos)", explicacion: "Their es de ellos." },
          { pregunta: "El hijo hombre en inglés es:", opciones: ["Daughter", "Son", "Brother", "Father"], correcta: "Son", explicacion: "Son = hijo." }
        ]
      },
      {
        id: "inx2-4",
        proposito: "Propósito formativo 4",
        titulo: "People, Clothes and Weather: Describir sin Juzgar",
        icono: "🧥",
        imagen: "linear-gradient(135deg, #0891b2, #4f46e5)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Para describir a una persona usamos <strong>to be</strong> (She is tall), <strong>have/has</strong> (She has curly hair) y el <strong>presente continuo</strong> para la ropa que lleva ahora (She is wearing a red dress).
          </div>

          <h4>Have / has</h4>
          <div class="formula">I / You / We / They <strong>have</strong> brown eyes. · He / She / It <strong>has</strong> short hair.</div>

          <h4>Presente continuo para describir lo que pasa ahora</h4>
          <div class="formula">
sujeto + am / is / are + verbo-ing<br>
He is wearing a hat. · They are smiling. · It is raining.
          </div>

          <h4>Ropa (clothes)</h4>
          <p>T-shirt · shirt · pants · jeans · skirt · dress · sweater · jacket · raincoat · hat · cap · sneakers · sandals · boots · huipil (traditional blouse)</p>

          <h4>El clima y las estaciones</h4>
          <table class="tabla-estudio">
            <tr><th>Clima</th><th>Ropa que usas</th></tr>
            <tr><td>It's hot and sunny (Tuxtla, Tapachula).</td><td>a T-shirt, shorts, a cap</td></tr>
            <tr><td>It's cold and foggy (San Cristóbal, Los Altos).</td><td>a sweater, a jacket, a wool poncho</td></tr>
            <tr><td>It's rainy (rainy season, June to October).</td><td>a raincoat, boots, an umbrella</td></tr>
          </table>
          <p>Estaciones: spring, summer, fall (autumn), winter. En Chiapas también se habla de <em>rainy season</em> y <em>dry season</em>.</p>

          <h4>Observar sin juzgar</h4>
          <p>Describe lo que ves: «He is wearing a traditional chuj» (un chaleco de lana de Chamula). Evita palabras que juzgan, como <em>strange</em> o <em>ugly</em>, sobre la ropa o la apariencia de otras culturas.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> «Today it is cold and cloudy in San Cristóbal. My friend Rosa is wearing a black wool skirt and a blue blouse. She has long black hair and brown eyes. Her brother is wearing a jacket and a cap because it is raining.»
          </div>
        `,
        actividades: [
          { pregunta: "Completa: «She ___ long hair.»", opciones: ["has", "have", "is", "haves"], correcta: "has", explicacion: "Con she se usa has." },
          { pregunta: "«He is wearing a jacket» significa:", opciones: ["Él lleva puesta una chamarra", "Él compra una chamarra", "Él tiene una chamarra en casa", "Él lavó una chamarra"], correcta: "Él lleva puesta una chamarra", explicacion: "Wear = llevar puesto; is wearing indica que es ahora." },
          { pregunta: "¿Qué prenda usas cuando hace frío en San Cristóbal?", opciones: ["a sweater", "shorts", "sandals", "a swimsuit"], correcta: "a sweater", explicacion: "Sweater = suéter, para el clima frío." },
          { pregunta: "Completa: «It ___ raining today.»", opciones: ["is", "are", "does", "has"], correcta: "is", explicacion: "Presente continuo con it: it is + verbo-ing." },
          { pregunta: "En «They have brown eyes», se usa have porque:", opciones: ["They es plural", "They es singular", "Es pasado", "Es una pregunta"], correcta: "They es plural", explicacion: "Has solo se usa con he, she e it." }
        ]
      },
      {
        id: "inx2-5",
        proposito: "Propósito formativo 5",
        titulo: "Comparatives: Comparar con Respeto",
        icono: "⚖️",
        imagen: "linear-gradient(135deg, #15803d, #65a30d)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Para comparar dos cosas usamos un adjetivo comparativo + <strong>than</strong>: <em>Tuxtla is hotter than San Cristóbal</em>.
          </div>

          <figure class="diagrama-quimica">
            <img src="images/ingles/comparativos-altitud.svg" alt="Altitud de Tuxtla, Comitán y San Cristóbal" loading="lazy">
            <figcaption>high → higher → the highest. San Cristóbal is higher than Comitán, and Comitán is higher than Tuxtla.</figcaption>
          </figure>

          <h4>Reglas</h4>
          <table class="tabla-estudio">
            <tr><th>Adjetivo</th><th>Regla</th><th>Ejemplo</th></tr>
            <tr><td>Una sílaba</td><td>+ er</td><td>tall → taller, cold → colder</td></tr>
            <tr><td>Termina en -e</td><td>+ r</td><td>large → larger, nice → nicer</td></tr>
            <tr><td>Consonante-vocal-consonante</td><td>dobla la última + er</td><td>big → bigger, hot → hotter</td></tr>
            <tr><td>Termina en -y</td><td>-y → -ier</td><td>busy → busier, happy → happier</td></tr>
            <tr><td>Dos o más sílabas</td><td>more + adjetivo</td><td>more interesting, more beautiful</td></tr>
            <tr><td>Irregulares</td><td>—</td><td>good → better, bad → worse, far → farther</td></tr>
          </table>

          <h4>Comparar con respeto</h4>
          <p>Comparar no es decir que algo es «mejor» que otra cultura o persona. Puedes destacar lo positivo de cada lado: «My town is smaller than Tuxtla, <strong>but</strong> it is quieter.»</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Elige dos lugares de Chiapas que conozcas y escribe 5 comparaciones: clima, tamaño, distancia, comida y algo que te guste de cada uno.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> «Tuxtla is bigger and hotter than San Cristóbal. San Cristóbal is colder and higher. Palenque is farther from my house than Chiapa de Corzo. I think pozol is better than soda!»
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es el comparativo de big?", opciones: ["bigger", "biger", "more big", "bigest"], correcta: "bigger", explicacion: "Consonante-vocal-consonante: se dobla la g." },
          { pregunta: "Completa: «San Cristóbal is ___ than Tuxtla.» (más frío)", opciones: ["colder", "more cold", "coldest", "the colder"], correcta: "colder", explicacion: "Cold tiene una sílaba: cold + er." },
          { pregunta: "¿Cuál es el comparativo de interesting?", opciones: ["more interesting", "interestinger", "most interesting", "interestinger than"], correcta: "more interesting", explicacion: "Los adjetivos largos usan more." },
          { pregunta: "¿Cuál es el comparativo de good?", opciones: ["better", "gooder", "more good", "best"], correcta: "better", explicacion: "Es irregular: good → better → the best." },
          { pregunta: "Completa: «My town is smaller ___ Tapachula.»", opciones: ["than", "that", "then", "as"], correcta: "than", explicacion: "Than introduce el segundo elemento de la comparación." }
        ]
      },
      {
        id: "inx2-6",
        proposito: "Propósito formativo 6",
        titulo: "Giving Directions: ¿Cómo Llego a…?",
        icono: "🗺️",
        imagen: "linear-gradient(135deg, #be123c, #ea580c)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Para dar indicaciones se usan imperativos (<em>go straight, turn left</em>) y preposiciones de lugar y movimiento. Es una de las situaciones más comunes con turistas.
          </div>

          <h4>Preguntar</h4>
          <ul>
            <li>Excuse me, how do I get to the market?</li>
            <li>Excuse me, where is the nearest bank?</li>
            <li>Is there a pharmacy near here?</li>
          </ul>

          <h4>Indicar</h4>
          <table class="tabla-estudio">
            <tr><th>Inglés</th><th>Español</th></tr>
            <tr><td>Go straight (ahead).</td><td>Sigue derecho.</td></tr>
            <tr><td>Turn left / turn right.</td><td>Gira a la izquierda / derecha.</td></tr>
            <tr><td>Cross the street.</td><td>Cruza la calle.</td></tr>
            <tr><td>Go along Main Street.</td><td>Ve por la calle principal.</td></tr>
            <tr><td>Go past the church.</td><td>Pasa la iglesia.</td></tr>
            <tr><td>Go into the market.</td><td>Entra al mercado.</td></tr>
            <tr><td>It's on the corner / on your left / across from the park / next to the bank.</td><td>Está en la esquina / a tu izquierda / enfrente del parque / junto al banco.</td></tr>
          </table>

          <figure class="diagrama-quimica">
            <img src="images/ingles/mapa-direcciones.svg" alt="Mapa con una ruta marcada" loading="lazy">
            <figcaption>Sigue la línea roja: go straight, turn right on Main Street… ¿Qué lugar queda a tu derecha?</figcaption>
          </figure>

          <h4>Medios de transporte</h4>
          <p>by bus · by car · by taxi · by bike · by colectivo (shared minibus) · by boat · on foot (a pie)</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Dibuja un mapa sencillo del centro de tu comunidad con 6 lugares. En parejas, uno elige un destino secreto y da indicaciones en inglés; el otro sigue la ruta con el dedo y adivina el lugar.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Un turista en el centro de San Cristóbal pregunta: «Excuse me, how do I get to the Amber Museum?» — «Go straight for three blocks, then turn left and walk past the park. It's next to a church, on your right. It's ten minutes on foot.»
          </div>
        `,
        actividades: [
          { pregunta: "«Turn left» significa:", opciones: ["Gira a la izquierda", "Gira a la derecha", "Sigue derecho", "Cruza la calle"], correcta: "Gira a la izquierda", explicacion: "Left = izquierda; right = derecha." },
          { pregunta: "¿Cómo preguntas por el camino al mercado?", opciones: ["Excuse me, how do I get to the market?", "Excuse me, where I get the market?", "How get I to the market?", "Excuse, the market is how?"], correcta: "Excuse me, how do I get to the market?", explicacion: "How do I get to…? es la pregunta para pedir indicaciones." },
          { pregunta: "«Cross the street» significa:", opciones: ["Cruza la calle", "Camina por la calle", "Rodea la calle", "Detente en la calle"], correcta: "Cruza la calle", explicacion: "Cross = cruzar." },
          { pregunta: "«I go to school on foot» significa:", opciones: ["Voy a la escuela a pie", "Voy a la escuela en autobús", "Voy a la escuela en bicicleta", "Voy a la escuela en carro"], correcta: "Voy a la escuela a pie", explicacion: "On foot = a pie." },
          { pregunta: "En el mapa del tema, sigues derecho y giras a la derecha en Main Street. ¿Qué lugar queda a tu derecha?", opciones: ["Park", "Hospital", "Market", "Bank"], correcta: "Park", explicacion: "Al ir hacia el este por Main Street, el parque queda del lado derecho." }
        ]
      },
      {
        id: "in2-1",
        proposito: "Propósito formativo 7",
        titulo: "Plurales y Demostrativos",
        icono: "📦",
        imagen: "linear-gradient(135deg, #f97316, #f59e0b)",
        contenido: `
          <h4>Plurales</h4>
          <p>Generalmente se agrega <strong>-s</strong> al final (Book → Books). Si termina en ch, sh, s, x, se agrega <strong>-es</strong> (Box → Boxes).</p>
          <h4>Demostrativos (This, That, These, Those)</h4>
          <ul>
            <li><strong>This:</strong> Esto (cerca, singular)</li>
            <li><strong>These:</strong> Estos (cerca, plural)</li>
            <li><strong>That:</strong> Eso (lejos, singular)</li>
            <li><strong>Those:</strong> Esos (lejos, plural)</li>
          </ul>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto:</strong> En un mercado de Tuxtla: "How much is <strong>this</strong> mango?" (¿Cuánto cuesta este mango?) o "How much are <strong>these</strong> mangoes?" (¿Cuánto cuestan estos mangos?).
          </div>
        `,
        actividades: [
          { pregunta: "El plural de 'Box' es:", opciones: ["Boxs", "Boxes", "Boxies", "Box"], correcta: "Boxes", explicacion: "Termina en 'x', se agrega 'es'." },
          { pregunta: "¿Cómo se dice 'Estos'?", opciones: ["This", "That", "These", "Those"], correcta: "These", explicacion: "These es para plural cerca." },
          { pregunta: "Completa: Look at ___ car over there (lejos).", opciones: ["this", "these", "that", "those"], correcta: "that", explicacion: "Lejos y singular = that." },
          { pregunta: "El plural de 'City' es:", opciones: ["Citys", "Cityes", "Cities", "City"], correcta: "Cities", explicacion: "Consonante + y, se cambia por 'ies'." },
          { pregunta: "¿Qué significa 'Those apples'?", opciones: ["Esas manzanas", "Estas manzanas", "Esta manzana", "Esa manzana"], correcta: "Esas manzanas", explicacion: "Plural y lejos." }
        ]
      },
      {
        id: "inx2-7",
        proposito: "Propósito formativo 7",
        titulo: "At the Market: Would Like, How Much, How Many",
        icono: "🛒",
        imagen: "linear-gradient(135deg, #ca8a04, #16a34a)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> <strong>Would like</strong> es la forma amable de pedir algo: <em>I'd like a coffee, please</em> suena mucho mejor que <em>I want coffee</em>.
          </div>

          <h4>Would like</h4>
          <div class="formula">
I'd like + sustantivo: I'd like two tamales, please.<br>
I'd like + to + verbo: I'd like to try the pozol.<br>
Pregunta: Would you like some coffee? — Yes, please. / No, thank you.
          </div>

          <h4>Sustantivos contables e incontables</h4>
          <table class="tabla-estudio">
            <tr><th>Contables (se pueden contar)</th><th>Incontables (no se cuentan uno por uno)</th></tr>
            <tr><td>a mango, two tortillas, three eggs</td><td>water, coffee, rice, sugar, bread, money</td></tr>
            <tr><td><strong>How many</strong> tortillas do you need?</td><td><strong>How much</strong> sugar do you need?</td></tr>
            <tr><td>many, a few</td><td>much, a little</td></tr>
          </table>
          <p>Para contar incontables se usa una medida: a cup of coffee, a kilo of beans, a bottle of water, a piece of bread.</p>

          <h4>Preguntar precios</h4>
          <div class="formula">
How much is this mango? — It's 15 pesos.<br>
How much are these mangoes? — They're 40 pesos a kilo.
          </div>

          <h4>Comida y bebida</h4>
          <p>beans · rice · corn · tortillas · eggs · chicken · cheese · coffee · chocolate · pozol · water · fruit: mango, banana, orange, pineapple</p>

          <h4>🛠️ Manos a la obra: el mercado del salón</h4>
          <p>Hagan etiquetas con productos y precios. La mitad del grupo vende y la otra compra con un presupuesto de 100 pesos: «I'd like a kilo of beans, please. How much is it?»</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> En el mercado de Tuxtla:<br>
            — «Good morning! Would you like some coffee from Chiapas?» — «Yes, I'd like half a kilo, please. How much is it?» — «It's 120 pesos.»<br>
            — «How many tamales would you like?» — «Four, please. Two de chipilín and two de bola.»
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es la forma educada de pedir?", opciones: ["I'd like a coffee, please.", "I want coffee now.", "Give me coffee.", "Coffee, I like."], correcta: "I'd like a coffee, please.", explicacion: "I'd like = I would like, la forma amable de pedir." },
          { pregunta: "¿Cuál sustantivo es incontable?", opciones: ["water", "apple", "tortilla", "mango"], correcta: "water", explicacion: "No decimos «one water, two waters», sino a bottle of water." },
          { pregunta: "Completa: «How ___ tortillas do you need?»", opciones: ["many", "much", "more", "any"], correcta: "many", explicacion: "Tortillas es contable y plural: how many." },
          { pregunta: "Completa: «How ___ is the coffee?» (para preguntar el precio)", opciones: ["much", "many", "old", "long"], correcta: "much", explicacion: "How much is…? pregunta el precio." },
          { pregunta: "«I'd like to go to the park» significa:", opciones: ["Me gustaría ir al parque", "Me gusta ir al parque", "Fui al parque", "Siempre voy al parque"], correcta: "Me gustaría ir al parque", explicacion: "Would like expresa un deseo. I like sería «me gusta»." }
        ]
      },
      {
        id: "inx2-8",
        proposito: "Propósito formativo 8",
        titulo: "Review: Números, Ordinales y Presente Simple",
        icono: "🔁",
        imagen: "linear-gradient(135deg, #4338ca, #0e7490)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Este tema integra lo del semestre: presente simple, números grandes, ordinales y deletreo. Úsalo para preparar un producto final: el perfil de un compañero.
          </div>

          <h4>Repaso del presente simple</h4>
          <table class="tabla-estudio">
            <tr><th></th><th>I / You / We / They</th><th>He / She / It</th></tr>
            <tr><td>+</td><td>They live in Comitán.</td><td>She lives in Comitán.</td></tr>
            <tr><td>−</td><td>They don't live in Tuxtla.</td><td>She doesn't live in Tuxtla.</td></tr>
            <tr><td>?</td><td>Do they live near here?</td><td>Does she live near here?</td></tr>
          </table>

          <h4>Números grandes</h4>
          <table class="tabla-estudio">
            <tr><th>Número</th><th>Se dice</th></tr>
            <tr><td>100</td><td>one hundred</td></tr>
            <tr><td>250</td><td>two hundred (and) fifty</td></tr>
            <tr><td>1,000</td><td>one thousand</td></tr>
            <tr><td>2,026</td><td>two thousand (and) twenty-six</td></tr>
            <tr><td>Año 2026</td><td>twenty twenty-six o two thousand twenty-six</td></tr>
          </table>
          <p>⚠️ En inglés la coma separa los miles (1,000) y el punto separa los decimales (2.5).</p>

          <h4>Números ordinales</h4>
          <p>1st first · 2nd second · 3rd third · 4th fourth · 5th fifth · 10th tenth · 12th twelfth · 20th twentieth · 21st twenty-first · 22nd twenty-second</p>
          <p>Se usan para fechas (May 5th), pisos (the third floor) y lugares (She finished in first place).</p>

          <h4>🛠️ Producto final: el perfil de un compañero</h4>
          <p>Entrevista a un compañero y escribe un párrafo de 8 a 10 oraciones: nombre (deletreado), edad, dónde vive, su rutina, qué hace en su tiempo libre, qué sabe hacer, su comida favorita y su cumpleaños con ordinal: «Her birthday is on March 3rd».</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> «My classmate is Juan. J-U-A-N. He is sixteen. He lives in Ocosingo, about two hundred kilometers from Tuxtla. He gets up at five thirty. He doesn't like math, but he can play the guitar. His birthday is on August 21st. He is the second of four brothers.»
          </div>
        `,
        actividades: [
          { pregunta: "¿Cómo se lee el número 2,026?", opciones: ["two thousand twenty-six", "twenty thousand twenty-six", "two hundred twenty-six", "two thousand sixty-two"], correcta: "two thousand twenty-six", explicacion: "2,000 = two thousand y 26 = twenty-six." },
          { pregunta: "¿Cuál es el ordinal de 3?", opciones: ["third", "threeth", "three", "thirth"], correcta: "third", explicacion: "Es irregular: first, second, third." },
          { pregunta: "Completa: «My best friend ___ in Ocosingo.»", opciones: ["lives", "live", "living", "is live"], correcta: "lives", explicacion: "My best friend = he o she: el verbo lleva -s." },
          { pregunta: "¿Cómo se lee 21st?", opciones: ["twenty-first", "twenty-one", "twenty-oneth", "twentieth-first"], correcta: "twenty-first", explicacion: "Solo el último número se convierte en ordinal." },
          { pregunta: "Completa: «They ___ English on Tuesdays.»", opciones: ["study", "studies", "studys", "is study"], correcta: "study", explicacion: "Con they el verbo va en forma base." }
        ]
      }
    ]
  },

  3: {
    titulo: "Inglés III",
    subtitulo: "What We Were, We Share",
    semestre: "Tercer Semestre",
    nivel: "A2",
    clase: "s3",
    icono: "📜",
    descripcion: "Pasado simple, presente perfecto, lugares y recomendaciones, hábitos, reglas, instrucciones y anécdotas.",
    meta: "Participe en intercambios sociales básicos, exprese ideas sobre experiencias personales y amplíe su repertorio comunicativo en contextos cotidianos escolares y comunitarios.",
    contexto: "Hablar sobre el pasado: la historia de Chiapas, leyendas y experiencias.",
    temas: [
      {
        id: "in3-1",
        proposito: "Propósito formativo 1",
        titulo: "Pasado Simple (Regular Verbs)",
        icono: "⏪",
        imagen: "linear-gradient(135deg, #14b8a6, #0d9488)",
        contenido: `
          <p>Para hablar del pasado con verbos regulares, solo se agrega <strong>-ed</strong> al final del verbo.</p>
          <ul>
            <li>Play → Played (Jugar → Jugó)</li>
            <li>Walk → Walked (Caminar → Caminó)</li>
            <li>Visit → Visited (Visitar → Visitó)</li>
          </ul>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto:</strong> "Yesterday, I <strong>visited</strong> the Sumidero Canyon" (Ayer, visité el Cañón del Sumidero).
          </div>
        `,
        actividades: [
          { pregunta: "El pasado de 'Watch' es:", opciones: ["Watchd", "Watched", "Watchied", "Watching"], correcta: "Watched", explicacion: "Se agrega 'ed'." },
          { pregunta: "Completa: We ___ (play) soccer yesterday.", opciones: ["play", "plays", "played", "playing"], correcta: "played", explicacion: "Pasado regular de play." },
          { pregunta: "¿Qué significa 'They worked'?", opciones: ["Ellos trabajan", "Ellos trabajaron", "Ellos trabajarán", "Ellos trabajando"], correcta: "Ellos trabajaron", explicacion: "Worked = pasado de trabajar." },
          { pregunta: "El pasado de 'Study' es:", opciones: ["Studyed", "Studied", "Studed", "Studying"], correcta: "Studied", explicacion: "Consonante + y se cambia por 'ied'." },
          { pregunta: "Completa: I ___ (clean) my room.", opciones: ["clean", "cleaned", "cleaning", "cleans"], correcta: "cleaned", explicacion: "Pasado regular de clean." }
        ]
      },
      {
        id: "inx3-1",
        proposito: "Propósito formativo 2",
        titulo: "Present Perfect: Experiencias de Vida",
        icono: "🌄",
        imagen: "linear-gradient(135deg, #7c3aed, #db2777)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> El <strong>presente perfecto</strong> habla de experiencias de tu vida sin decir cuándo pasaron: <em>I have visited Palenque</em> (lo importante es que lo has vivido, no la fecha).
          </div>

          <figure class="diagrama-quimica">
            <img src="images/ingles/linea-tiempo-verbos.svg" alt="Línea del tiempo de los tiempos verbales" loading="lazy">
            <figcaption>El presente perfecto conecta el pasado con el presente: algo que viviste y que forma parte de tu experiencia hasta hoy.</figcaption>
          </figure>

          <h4>Estructura</h4>
          <table class="tabla-estudio">
            <tr><th></th><th>Forma</th><th>Ejemplo</th></tr>
            <tr><td>+</td><td>have / has + participio</td><td>She has seen the parachicos.</td></tr>
            <tr><td>−</td><td>haven't / hasn't + participio</td><td>I haven't been to Tapachula.</td></tr>
            <tr><td>?</td><td>Have / Has + sujeto + participio</td><td>Have you ever tried pozol? — Yes, I have.</td></tr>
          </table>

          <h4>Participios frecuentes</h4>
          <table class="tabla-estudio">
            <tr><th>Verbo</th><th>Participio</th><th>Verbo</th><th>Participio</th></tr>
            <tr><td>visit</td><td>visited</td><td>be</td><td>been</td></tr>
            <tr><td>play</td><td>played</td><td>see</td><td>seen</td></tr>
            <tr><td>try</td><td>tried</td><td>eat</td><td>eaten</td></tr>
            <tr><td>work</td><td>worked</td><td>do</td><td>done</td></tr>
            <tr><td>help</td><td>helped</td><td>make</td><td>made</td></tr>
          </table>
          <p>Los verbos regulares forman el participio igual que el pasado (-ed). Los irregulares hay que aprenderlos.</p>

          <h4>Ever y never</h4>
          <ul>
            <li><strong>Have you ever…?</strong> = ¿Alguna vez has…?</li>
            <li><strong>I have never…</strong> = Nunca he…</li>
          </ul>

          <h4>🛠️ Manos a la obra</h4>
          <p>Escribe 5 preguntas «Have you ever…?» sobre lugares, comidas y fiestas de Chiapas. Entrevista a tres compañeros y reporta: «Two classmates have been to Agua Azul. Nobody has seen a jaguar.»</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> — «Have you ever been to the Agua Azul waterfalls?» — «Yes, I have. I've been there twice with my family.»<br>
            — «Have you ever seen the parachicos in Chiapa de Corzo?» — «No, I haven't, but my cousin has danced with them.»
          </div>
        `,
        actividades: [
          { pregunta: "Completa: «I ___ visited Palenque.»", opciones: ["have", "has", "am", "did"], correcta: "have", explicacion: "Con I se usa have + participio." },
          { pregunta: "Completa: «She has ___ tamales de chipilín.»", opciones: ["eaten", "ate", "eat", "eating"], correcta: "eaten", explicacion: "Después de has va el participio: eat → ate → eaten." },
          { pregunta: "«Have you ever been to Agua Azul?» significa:", opciones: ["¿Alguna vez has ido a Agua Azul?", "¿Vas a ir a Agua Azul?", "¿Fuiste ayer a Agua Azul?", "¿Estás en Agua Azul?"], correcta: "¿Alguna vez has ido a Agua Azul?", explicacion: "Have you ever…? pregunta por experiencias de vida." },
          { pregunta: "Respuesta corta negativa a «Has he seen the Sumidero Canyon?»", opciones: ["No, he hasn't.", "No, he doesn't.", "No, he didn't.", "No, he isn't."], correcta: "No, he hasn't.", explicacion: "Se responde con el mismo auxiliar: has → hasn't." },
          { pregunta: "¿Cuál es el participio de see?", opciones: ["seen", "saw", "seed", "seeing"], correcta: "seen", explicacion: "see → saw (pasado) → seen (participio)." }
        ]
      },
      {
        id: "inx3-2",
        proposito: "Propósito formativo 3",
        titulo: "Places to Visit: Describir y Recomendar",
        icono: "🏞️",
        imagen: "linear-gradient(135deg, #0d9488, #15803d)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Para recomendar un lugar dices qué hay (<em>there is / there are</em>), dónde está (preposiciones) y qué se puede hacer ahí (<em>you can…</em>).
          </div>

          <h4>Can para expresar posibilidad</h4>
          <div class="formula">
In Montebello you <strong>can</strong> see more than fifty lakes.<br>
You <strong>can't</strong> swim in some lakes because they are very deep.<br>
Can you camp there? — Yes, you can.
          </div>

          <h4>Preposiciones de lugar (más precisas)</h4>
          <table class="tabla-estudio">
            <tr><th>Preposición</th><th>Ejemplo</th></tr>
            <tr><td>between</td><td>The museum is between the bank and the church.</td></tr>
            <tr><td>next to</td><td>The market is next to the bus station.</td></tr>
            <tr><td>in front of</td><td>The city hall is in front of the main square.</td></tr>
            <tr><td>behind</td><td>There is a parking lot behind the school.</td></tr>
            <tr><td>near / far from</td><td>The waterfall is near the town / far from the city.</td></tr>
          </table>

          <h4>Lugares públicos y naturales</h4>
          <p><strong>Public:</strong> city hall · main square · museum · library · cathedral · market · stadium<br>
          <strong>Natural:</strong> river · lake · waterfall · forest · jungle · mountain · cave · canyon · beach · volcano</p>

          <h4>Actividades recreativas</h4>
          <p>take a boat tour · go hiking · go camping · swim · take photos · watch birds · go kayaking · visit the ruins</p>

          <h4>🛠️ Manos a la obra: folleto turístico</h4>
          <p>Elige un lugar de tu región y haz un folleto en inglés: qué hay, dónde está, cómo llegar y tres cosas que se pueden hacer. Inclúyelo en la feria escolar o publícalo en las redes del plantel.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> «The Sumidero Canyon is near Tuxtla Gutiérrez. There are very high walls and there is a big river. You can take a boat tour and see crocodiles, monkeys and birds. You can't swim in the river. The Sima de las Cotorras is a huge hole in the forest, and early in the morning you can see hundreds of parrots.»
          </div>
        `,
        actividades: [
          { pregunta: "En «In Montebello you can see beautiful lakes», can expresa:", opciones: ["Posibilidad", "Obligación", "Pasado", "Prohibición"], correcta: "Posibilidad", explicacion: "Indica lo que es posible hacer en ese lugar." },
          { pregunta: "Completa: «The city hall is ___ the cathedral.» (enfrente de)", opciones: ["in front of", "behind", "under", "between"], correcta: "in front of", explicacion: "In front of = enfrente de. Behind = detrás de." },
          { pregunta: "¿Cuál es un lugar natural?", opciones: ["waterfall", "city hall", "library", "bank"], correcta: "waterfall", explicacion: "Waterfall = cascada." },
          { pregunta: "Completa: «There ___ many caves in Chiapas.»", opciones: ["are", "is", "be", "has"], correcta: "are", explicacion: "Many caves es plural: there are." },
          { pregunta: "¿Cuál recomendación está bien escrita?", opciones: ["You can take a boat tour in the Sumidero Canyon.", "You can took a boat tour.", "You cans take a boat tour.", "You can to take a boat tour."], correcta: "You can take a boat tour in the Sumidero Canyon.", explicacion: "Can + verbo base, sin -s y sin to." }
        ]
      },
      {
        id: "inx3-3",
        proposito: "Propósito formativo 4",
        titulo: "Habits and Preferences: Superlativos y Like + -ing",
        icono: "📊",
        imagen: "linear-gradient(135deg, #ca8a04, #ea580c)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Para comparar lo que hacen o prefieren las personas combinas frecuencia (<em>How often…?</em>), gustos (<em>like + -ing</em>) y superlativos (<em>the most popular</em>).
          </div>

          <h4>¿Con qué frecuencia?</h4>
          <table class="tabla-estudio">
            <tr><th>Pregunta</th><th>Respuestas</th></tr>
            <tr><td>How often do you go to the market?</td><td>every day · once a week · twice a week · three times a month · rarely · never</td></tr>
          </table>
          <p>Adverbios: always · usually · <strong>often</strong> (a menudo) · sometimes · <strong>rarely</strong> (casi nunca) · never.</p>

          <h4>Superlativos: el más, el menos</h4>
          <table class="tabla-estudio">
            <tr><th>Adjetivo</th><th>Comparativo</th><th>Superlativo</th></tr>
            <tr><td>tall</td><td>taller than</td><td>the tallest</td></tr>
            <tr><td>big</td><td>bigger than</td><td>the biggest</td></tr>
            <tr><td>happy</td><td>happier than</td><td>the happiest</td></tr>
            <tr><td>popular</td><td>more popular than</td><td>the most popular</td></tr>
            <tr><td>good / bad</td><td>better / worse than</td><td>the best / the worst</td></tr>
          </table>

          <h4>Gustos con -ing</h4>
          <div class="formula">
I like music. · He likes playing football. · They don't like studying at night.<br>
love (encantar) · like (gustar) · don't mind (no me molesta) · hate (odiar) + verbo-ing
          </div>

          <h4>🛠️ Manos a la obra: encuesta del grupo</h4>
          <p>Pregunta a 10 compañeros qué música, comida y deporte prefieren y con qué frecuencia lo practican. Presenta los resultados: «The most popular sport is soccer. Seven students play it twice a week. Only one student hates dancing.» Puedes hacer la gráfica en Pensamiento Matemático.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> «In my group, the most popular drink is pozol and the most popular music is marimba and cumbia. Most students often play soccer, but they rarely go to the cinema because it's far. My best friend loves dancing, and I don't mind cooking.»
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es el superlativo de popular?", opciones: ["the most popular", "the popularest", "more popular", "most popularer"], correcta: "the most popular", explicacion: "Los adjetivos largos usan the most." },
          { pregunta: "Completa: «He ___ playing football.»", opciones: ["likes", "like", "liking", "is like"], correcta: "likes", explicacion: "Con he el verbo like lleva -s, y después va el verbo con -ing." },
          { pregunta: "«How often do you go to the market?» — «___ a week.»", opciones: ["Twice", "Two", "Second", "Double"], correcta: "Twice", explicacion: "Once = una vez, twice = dos veces, three times = tres veces." },
          { pregunta: "¿Cuál es el superlativo de good?", opciones: ["the best", "the goodest", "the better", "the most good"], correcta: "the best", explicacion: "Es irregular: good → better → the best." },
          { pregunta: "«I rarely eat fast food» significa:", opciones: ["Casi nunca como comida rápida", "Siempre como comida rápida", "A menudo como comida rápida", "Nunca como comida rápida"], correcta: "Casi nunca como comida rápida", explicacion: "Rarely = casi nunca (más que never, menos que sometimes)." }
        ]
      },
      {
        id: "inx3-4",
        proposito: "Propósito formativo 5",
        titulo: "Rules and Responsibilities: Must y Have To",
        icono: "📋",
        imagen: "linear-gradient(135deg, #b91c1c, #7c3aed)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> <strong>Must</strong> y <strong>have to</strong> expresan obligación. Pero en negativo son muy distintos: <em>mustn't</em> = está prohibido; <em>don't have to</em> = no es necesario.
          </div>

          <h4>Comparación</h4>
          <table class="tabla-estudio">
            <tr><th>Forma</th><th>Significa</th><th>Ejemplo</th></tr>
            <tr><td>must</td><td>obligación (regla o algo que tú consideras necesario)</td><td>You must wear a helmet.</td></tr>
            <tr><td>mustn't</td><td>prohibición</td><td>You mustn't smoke in the school.</td></tr>
            <tr><td>have to / has to</td><td>obligación (por una regla o una situación)</td><td>She has to take two buses to school.</td></tr>
            <tr><td>don't have to / doesn't have to</td><td>no es necesario</td><td>We don't have to wear a uniform on Fridays.</td></tr>
          </table>
          <div class="alerta nota-estudio">
            <strong>⚠️ Cuidado:</strong> «You mustn't come» = no puedes venir (prohibido). «You don't have to come» = no es necesario que vengas, pero puedes hacerlo.
          </div>

          <h4>Tareas del hogar (household chores)</h4>
          <p>make the bed · sweep the floor · do the dishes · do the laundry · take out the trash · cook · feed the animals · bring firewood · water the plants</p>

          <h4>Convivencia en la comunidad</h4>
          <ul>
            <li>We have to respect the community assembly's decisions.</li>
            <li>Everyone has to participate in community work (faenas).</li>
            <li>You mustn't throw trash in the river.</li>
          </ul>

          <h4>🛠️ Manos a la obra</h4>
          <p>En equipo, redacten un reglamento de convivencia para el salón con 4 reglas con <em>must</em>, 4 con <em>mustn't</em> y 2 con <em>don't have to</em>. Discutan si cada regla es justa para todos.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> «At home, I have to feed the chickens and my sister has to make tortillas. In the Lacandon Jungle tours, visitors must stay on the path and they mustn't feed the animals. On Saturdays we don't have to go to school, but we have to help in the community work.»
          </div>
        `,
        actividades: [
          { pregunta: "«You mustn't swim here» significa:", opciones: ["Está prohibido nadar aquí", "No es necesario nadar aquí", "Debes nadar aquí", "Puedes nadar aquí"], correcta: "Está prohibido nadar aquí", explicacion: "Mustn't expresa prohibición." },
          { pregunta: "«You don't have to wear a uniform on Fridays» significa:", opciones: ["No es necesario usar uniforme los viernes", "Está prohibido usar uniforme los viernes", "Debes usar uniforme los viernes", "Siempre usas uniforme"], correcta: "No es necesario usar uniforme los viernes", explicacion: "Don't have to = no es obligatorio, pero se puede." },
          { pregunta: "Completa: «She ___ to wash the dishes every day.»", opciones: ["has", "have", "must", "is"], correcta: "has", explicacion: "Con she se usa has to." },
          { pregunta: "Completa: «Students ___ bring their ID to the exam.» (obligación)", opciones: ["must", "mustn't", "don't have", "can't to"], correcta: "must", explicacion: "Must + verbo base expresa obligación." },
          { pregunta: "¿Cuál es una tarea del hogar (household chore)?", opciones: ["sweep the floor", "play soccer", "watch TV", "go to a party"], correcta: "sweep the floor", explicacion: "Sweep the floor = barrer el piso." }
        ]
      },
      {
        id: "inx3-5",
        proposito: "Propósito formativo 6",
        titulo: "Instructions and Processes: First, Then, Finally",
        icono: "🧾",
        imagen: "linear-gradient(135deg, #0369a1, #0d9488)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Una instrucción clara combina <strong>imperativos</strong> y <strong>conectores de secuencia</strong>. Así funcionan las recetas, los tutoriales y las instrucciones de una aplicación.
          </div>

          <h4>Conectores de secuencia</h4>
          <div class="formula">First → Then → Next → After that → Finally</div>

          <h4>Imperativos para instrucciones más completas</h4>
          <ul>
            <li>Walk straight <strong>until</strong> you see the park.</li>
            <li>Don't forget to bring your ID.</li>
            <li>Speak clearly and slowly.</li>
            <li>Click on «Register» and write your email.</li>
          </ul>

          <h4>✍️ Una receta de Chiapas: pozol</h4>
          <ol>
            <li><strong>First</strong>, cook the corn with water and lime (cal).</li>
            <li><strong>Then</strong>, wash the corn and grind it with toasted cacao.</li>
            <li><strong>After that</strong>, make small balls with the dough.</li>
            <li><strong>Finally</strong>, mix a ball with cold water and drink it from a jícara.</li>
          </ol>

          <h4>Un procedimiento escolar o digital</h4>
          <table class="tabla-estudio">
            <tr><th>How to recycle at school</th><th>How to use the school app</th></tr>
            <tr><td>First, separate the trash. Then, put plastic bottles in the yellow bin. Next, put paper in the blue bin. Finally, take organic waste to the compost.</td><td>First, open the app. Then, write your student number. After that, choose your group. Finally, check your grades.</td></tr>
          </table>

          <h4>🛠️ Manos a la obra: video tutorial</h4>
          <p>Graba un video de 1 minuto en inglés explicando cómo hacer algo que sabes: una receta, cómo sembrar maíz, cómo tejer o cómo cambiar la llanta de una bici. Usa al menos 4 conectores.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Una guía en una finca cafetalera del Soconusco explica: «First, we pick the red coffee cherries. Then, we remove the pulp. After that, we wash and dry the beans in the sun. Finally, we roast them. Don't touch the machine, please!»
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué conector inicia una secuencia?", opciones: ["First", "Finally", "After that", "Then"], correcta: "First", explicacion: "First = primero." },
          { pregunta: "Pasos: a) Mix with water · b) Cook the corn · c) Grind it. ¿Cuál es el orden lógico?", opciones: ["b → c → a", "a → b → c", "c → a → b", "b → a → c"], correcta: "b → c → a", explicacion: "Primero se cuece el maíz, luego se muele y al final se mezcla con agua." },
          { pregunta: "«Don't forget to bring your ID» significa:", opciones: ["No olvides traer tu identificación", "Olvidaste tu identificación", "No traigas tu identificación", "Trae una identificación nueva"], correcta: "No olvides traer tu identificación", explicacion: "Don't forget = no olvides." },
          { pregunta: "Completa: «Walk straight ___ you see the park.»", opciones: ["until", "because", "but", "so"], correcta: "until", explicacion: "Until = hasta que." },
          { pregunta: "¿Qué conector cierra una secuencia?", opciones: ["Finally", "First", "Next", "Then"], correcta: "Finally", explicacion: "Finally = finalmente." }
        ]
      },
      {
        id: "in3-2",
        proposito: "Propósito formativo 7",
        titulo: "Verbos Irregulares",
        icono: "⚡",
        imagen: "linear-gradient(135deg, #6366f1, #4f46e5)",
        contenido: `
          <p>Algunos verbos no usan '-ed', cambian completamente en pasado.</p>
          <h4>Los más comunes:</h4>
          <ul>
            <li>Go → Went (Ir)</li>
            <li>Eat → Ate (Comer)</li>
            <li>See → Saw (Ver)</li>
            <li>Buy → Bought (Comprar)</li>
            <li>Have → Had (Tener)</li>
          </ul>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto:</strong> "I <strong>ate</strong> cochinita pibil and <strong>bought</strong> a souvenir" (Comí cochinita pibil y compré un recuerdo).
          </div>
        `,
        actividades: [
          { pregunta: "El pasado de 'Go' es:", opciones: ["Goed", "Gone", "Went", "Going"], correcta: "Went", explicacion: "Go es irregular." },
          { pregunta: "El pasado de 'Eat' es:", opciones: ["Eated", "Ate", "Eaten", "Eating"], correcta: "Ate", explicacion: "Eat es irregular." },
          { pregunta: "Completa: She ___ (buy) a dress.", opciones: ["buyed", "bought", "buys", "buying"], correcta: "bought", explicacion: "El pasado de buy es bought." },
          { pregunta: "¿Qué significa 'I saw a jaguar'?", opciones: ["Vi un jaguar", "Veo un jaguar", "Veré un jaguar", "Estoy viendo un jaguar"], correcta: "Vi un jaguar", explicacion: "Saw es el pasado de see." },
          { pregunta: "El pasado de 'Have' es:", opciones: ["Haved", "Has", "Had", "Having"], correcta: "Had", explicacion: "Have es irregular." }
        ]
      },
      {
        id: "inx3-6",
        proposito: "Propósito formativo 7",
        titulo: "Telling a Story: Anécdotas en Pasado",
        icono: "📖",
        imagen: "linear-gradient(135deg, #9333ea, #c2410c)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Para contar algo que pasó necesitas el <strong>pasado simple</strong> (también en negativo y en pregunta) y <strong>conectores narrativos</strong> que ordenen la historia.
          </div>

          <h4>Pasado simple: negativa y pregunta</h4>
          <table class="tabla-estudio">
            <tr><th></th><th>Forma</th><th>Ejemplo</th></tr>
            <tr><td>+</td><td>verbo en pasado</td><td>We went to the fair.</td></tr>
            <tr><td>−</td><td>didn't + verbo base</td><td>We didn't go to the fair.</td></tr>
            <tr><td>?</td><td>Did + sujeto + verbo base</td><td>Did you go to the fair? — Yes, I did.</td></tr>
          </table>
          <div class="alerta nota-estudio">
            <strong>⚠️ Error común:</strong> «I didn't went». Con <em>didn't</em> el verbo regresa a su forma base: I didn't <strong>go</strong>.
          </div>

          <h4>Más verbos irregulares</h4>
          <p>take → took · come → came · get → got · find → found · lose → lost · tell → told · make → made · leave → left · run → ran · think → thought</p>

          <h4>Conectores narrativos</h4>
          <table class="tabla-estudio">
            <tr><th>Conector</th><th>Uso</th></tr>
            <tr><td>First / At first</td><td>al inicio</td></tr>
            <tr><td>Then / After that / Later</td><td>lo que siguió</td></tr>
            <tr><td>Suddenly</td><td>algo inesperado</td></tr>
            <tr><td>Finally / In the end</td><td>el final</td></tr>
          </table>

          <h4>🛠️ Manos a la obra</h4>
          <p>Cuenta una anécdota escolar en 6 a 8 oraciones: un día que llegaste tarde, una excursión o un partido. Usa por lo menos 4 verbos irregulares y la palabra <em>suddenly</em>.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> «Last January, my family went to the Fiesta Grande in Chiapa de Corzo. First, we watched the parachicos dance in the streets. Then, we ate pepita con tasajo. Suddenly, it started to rain and we ran to a café. In the end, we didn't see the fireworks, but we had a great time.»
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es la negativa de «I went to the party»?", opciones: ["I didn't go to the party.", "I didn't went to the party.", "I don't went to the party.", "I not go to the party."], correcta: "I didn't go to the party.", explicacion: "Didn't + verbo base." },
          { pregunta: "¿Cuál pregunta en pasado es correcta?", opciones: ["Did you see the parachicos?", "Did you saw the parachicos?", "Do you saw the parachicos?", "You did see the parachicos?"], correcta: "Did you see the parachicos?", explicacion: "Did + sujeto + verbo base." },
          { pregunta: "¿Cuál es el pasado de take?", opciones: ["took", "taked", "taken", "takes"], correcta: "took", explicacion: "Take es irregular: took (pasado) y taken (participio)." },
          { pregunta: "¿Qué conector introduce algo inesperado?", opciones: ["Suddenly", "First", "Finally", "Because"], correcta: "Suddenly", explicacion: "Suddenly = de repente." },
          { pregunta: "Completa: «Yesterday we ___ to Chiapa de Corzo.»", opciones: ["went", "go", "gone", "goes"], correcta: "went", explicacion: "Yesterday indica pasado: go → went." }
        ]
      },
      {
        id: "inx3-7",
        proposito: "Propósito formativo 8",
        titulo: "Review: Una Carta a mi Yo del Pasado",
        icono: "✉️",
        imagen: "linear-gradient(135deg, #0f766e, #4338ca)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Este tema integra el semestre en un producto: una carta a tu «yo del pasado» donde cuentes experiencias (presente perfecto), hechos concretos (pasado simple) y consejos.
          </div>

          <h4>¿Pasado simple o presente perfecto?</h4>
          <table class="tabla-estudio">
            <tr><th>Pasado simple</th><th>Presente perfecto</th></tr>
            <tr><td>Dices <strong>cuándo</strong> pasó (yesterday, last year, in 2024).</td><td>No dices cuándo; importa la experiencia (ever, never, already, twice).</td></tr>
            <tr><td>I visited Palenque <strong>last year</strong>.</td><td>I <strong>have visited</strong> Palenque twice.</td></tr>
            <tr><td>Did you go to the fair in January?</td><td>Have you ever been to the fair?</td></tr>
          </table>
          <p>Combinación típica: «Have you ever been to Tapachula?» — «Yes, I have. I went there in 2024.»</p>

          <h4>Recursos para tu carta</h4>
          <ul>
            <li>Conectores: first, then, after that, suddenly, in the end, because, but.</li>
            <li>Modales: You <strong>must</strong> study more. You <strong>can</strong> do it. You <strong>don't have to</strong> be afraid.</li>
            <li>Descripciones: I was shy and quiet. Now I am more confident.</li>
          </ul>

          <h4>Modelo breve</h4>
          <div class="ejemplo">
            Dear 12-year-old me,<br>
            I'm writing from the future. I have learned many things. Last year I started high school at COBACH and I made new friends. At first I was nervous, but then I joined the dance club. I have never been to the beach, but I have visited the Sumidero Canyon. You must believe in yourself, and you don't have to be perfect. Be kind to everyone: nobody should feel excluded.<br>
            Love, Me
          </div>

          <h4>🛠️ Producto final (transversal con Formación Socioemocional)</h4>
          <p>Escribe tu carta (10 a 12 oraciones) e incluye una experiencia en la que viviste o viste discriminación o un trato injusto, y qué harías diferente hoy. Usa una rúbrica de autoevaluación: ¿usaste ambos tiempos?, ¿conectores?, ¿un consejo?</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> «I have lived in Comitán all my life, but last summer I traveled to Tuxtla for the first time. I have tried many foods, and my favorite is tamal de bola. My grandmother speaks Tojolabal and I have learned some words from her. I want to keep learning both languages: Tojolabal and English.»
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál oración es correcta?", opciones: ["I visited Palenque last year.", "I have visited Palenque last year.", "I have visit Palenque last year.", "I visit Palenque last year."], correcta: "I visited Palenque last year.", explicacion: "Con un tiempo pasado específico (last year) se usa el pasado simple." },
          { pregunta: "¿Cuál oración expresa una experiencia sin decir cuándo?", opciones: ["I have eaten chipilín tamales.", "I ate chipilín tamales yesterday.", "I eat chipilín tamales yesterday.", "I have ate chipilín tamales."], correcta: "I have eaten chipilín tamales.", explicacion: "El presente perfecto habla de experiencias sin fecha." },
          { pregunta: "«Have you ever been to Tapachula?» — «Yes, I ___. I went there in 2024.»", opciones: ["have", "did", "was", "am"], correcta: "have", explicacion: "La respuesta corta usa el mismo auxiliar de la pregunta: have." },
          { pregunta: "¿Qué conector usas para cerrar una historia?", opciones: ["In the end", "Suddenly", "First", "Because"], correcta: "In the end", explicacion: "In the end = al final." },
          { pregunta: "En «You must believe in yourself», must expresa:", opciones: ["Algo que consideras necesario", "Una prohibición", "Una pregunta", "Un hecho pasado"], correcta: "Algo que consideras necesario", explicacion: "Must expresa obligación o algo que el hablante considera muy importante." }
        ]
      }
    ]
  },

  4: {
    titulo: "Inglés IV",
    subtitulo: "Should I Stay or Should I Go?",
    semestre: "Cuarto Semestre",
    nivel: "A2+",
    clase: "s4",
    icono: "🧭",
    descripcion: "Narrar experiencias, justificar preferencias, explicar hábitos, dar consejos, hacer planes, conversar con cortesía y escribir textos funcionales.",
    meta: "Fortalezca su autonomía comunicativa en tareas sociales y académicas sencillas, ampliando el uso del lenguaje para describir, explicar, comparar y argumentar ideas simples en contextos cotidianos.",
    contexto: "Tomar decisiones sobre el futuro profesional, viajes o estudios superiores.",
    temas: [
      {
        id: "inx4-1",
        proposito: "Propósito formativo 1",
        titulo: "Past Experiences: Narrar con Detalle",
        icono: "🧳",
        imagen: "linear-gradient(135deg, #0369a1, #7c3aed)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> En Inglés IV no basta con decir «I went to Palenque». Ahora cuentas <strong>qué pasó, dónde, cómo, con quién y qué sentiste</strong>, en orden.
          </div>

          <h4>Preguntas para dar detalle</h4>
          <table class="tabla-estudio">
            <tr><th>Pregunta</th><th>Respuesta</th></tr>
            <tr><td>Where did you go?</td><td>We went to Lagunas de Montebello.</td></tr>
            <tr><td>Who did you go with?</td><td>I went with my cousins.</td></tr>
            <tr><td>How did you get there?</td><td>We took a bus from Comitán.</td></tr>
            <tr><td>What did you do?</td><td>We rented a raft and swam in a lake.</td></tr>
            <tr><td>How was it?</td><td>It was amazing, but very cold.</td></tr>
          </table>

          <h4>Pronunciación del pasado regular (-ed)</h4>
          <table class="tabla-estudio">
            <tr><th>Sonido</th><th>Cuándo</th><th>Ejemplos</th></tr>
            <tr><td>/t/</td><td>después de sonidos sordos (p, k, s, sh, ch, f)</td><td>walked, watched, stopped</td></tr>
            <tr><td>/d/</td><td>después de sonidos sonoros y vocales</td><td>played, cleaned, traveled</td></tr>
            <tr><td>/ɪd/ (una sílaba más)</td><td>después de t o d</td><td>visited, wanted, needed</td></tr>
          </table>

          <h4>Conectores de secuencia</h4>
          <p>First · Then · After that · Later · In the end</p>

          <h4>Temas para narrar</h4>
          <p>a trip · a community celebration (the patron saint's day, a wedding) · a school event (the science fair, a sports tournament, graduation)</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Narra un viaje o una fiesta de tu comunidad en un párrafo de 8 a 10 oraciones que responda las cinco preguntas de la tabla. Léelo en voz alta cuidando la pronunciación de -ed.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> «Last December, I traveled to Palenque with my school. First, we visited the ruins early in the morning. Then, we walked in the jungle and listened to the howler monkeys. After that, we went to the Misol-Ha waterfall. In the end, we were tired but very happy.»
          </div>
        `,
        actividades: [
          { pregunta: "¿Cómo suena la terminación -ed en visited?", opciones: ["/ɪd/ (una sílaba más)", "/t/", "/d/", "No se pronuncia"], correcta: "/ɪd/ (una sílaba más)", explicacion: "Después de t o d, -ed agrega una sílaba: vis-i-ted." },
          { pregunta: "Completa: «We ___ to Comitán by bus last weekend.»", opciones: ["traveled", "travel", "travels", "have travel"], correcta: "traveled", explicacion: "Last weekend indica pasado simple." },
          { pregunta: "¿Cuál pregunta por el lugar está bien escrita?", opciones: ["Where did you go?", "Where you went?", "Where did you went?", "Where do you went?"], correcta: "Where did you go?", explicacion: "Wh- + did + sujeto + verbo base." },
          { pregunta: "«In the end, we were very tired» — In the end significa:", opciones: ["Al final", "Al principio", "De repente", "Después"], correcta: "Al final", explicacion: "In the end cierra la narración." },
          { pregunta: "¿Cuál es el pasado de buy?", opciones: ["bought", "buyed", "buy", "boughted"], correcta: "bought", explicacion: "Buy es irregular: bought." }
        ]
      },
      {
        id: "inx4-2",
        proposito: "Propósito formativo 2",
        titulo: "Preferences: Comparar y Justificar con Respeto",
        icono: "🤔",
        imagen: "linear-gradient(135deg, #be185d, #ea580c)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Expresar una preferencia es fácil; <strong>justificarla con respeto</strong> es lo que hace una buena conversación: «I prefer the bus because it's cheaper, but I understand that the car is faster.»
          </div>

          <h4>Comparativos y superlativos: ampliación</h4>
          <table class="tabla-estudio">
            <tr><th>Estructura</th><th>Ejemplo</th></tr>
            <tr><td>comparativo + than</td><td>The colectivo is cheaper than the taxi.</td></tr>
            <tr><td>the + superlativo</td><td>The bus is the cheapest option.</td></tr>
            <tr><td>as + adjetivo + as (igualdad)</td><td>My town is as beautiful as San Cristóbal.</td></tr>
            <tr><td>not as + adjetivo + as</td><td>The bus is not as fast as the car.</td></tr>
          </table>

          <h4>Conjunciones coordinantes</h4>
          <ul>
            <li><strong>and</strong> suma: The market is cheap <em>and</em> it has fresh food.</li>
            <li><strong>but</strong> contrasta: I like the city, <em>but</em> I prefer my town.</li>
            <li><strong>so</strong> da el resultado: It was raining, <em>so</em> we stayed at home.</li>
          </ul>

          <h4>Frases para opinar con respeto</h4>
          <p>I prefer… because… · In my opinion,… · I think… · I see your point, but… · That's a good idea, but I'd rather…</p>

          <h4>Temas</h4>
          <p>clothes (traditional or modern?) · food (homemade or fast food?) · transport (bus, colectivo, bike, walking) · public places (the park, the mall, the market)</p>

          <h4>🛠️ Manos a la obra: mini debate</h4>
          <p>En parejas, elijan un tema (por ejemplo, «market or supermarket?») y cada quien defienda una opción con 3 razones usando comparativos y and, but, so. Al final, digan algo positivo de la opción del otro.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> «I prefer the market to the supermarket because the fruit is fresher and the prices are lower. The supermarket is more comfortable, but the market is more traditional and it supports local farmers, so I usually buy there.»
          </div>
        `,
        actividades: [
          { pregunta: "Completa: «I like the city, ___ I prefer my town.»", opciones: ["but", "so", "and", "because"], correcta: "but", explicacion: "But introduce un contraste." },
          { pregunta: "«The bus is not as fast as the car» significa:", opciones: ["El autobús no es tan rápido como el carro", "El autobús es más rápido que el carro", "El autobús es el más rápido", "El carro es lento"], correcta: "El autobús no es tan rápido como el carro", explicacion: "Not as… as = no tan… como." },
          { pregunta: "Completa: «It was raining, ___ we stayed at home.»", opciones: ["so", "but", "or", "than"], correcta: "so", explicacion: "So introduce el resultado." },
          { pregunta: "¿Cuál oración expresa una preferencia con respeto?", opciones: ["I prefer tacos, but I understand you like pizza.", "Pizza is horrible.", "Your food is bad.", "Nobody likes that."], correcta: "I prefer tacos, but I understand you like pizza.", explicacion: "Da tu preferencia y reconoce la del otro." },
          { pregunta: "¿Cuál es el superlativo de cheap?", opciones: ["the cheapest", "the most cheap", "cheaper", "the cheaper"], correcta: "the cheapest", explicacion: "Adjetivo de una sílaba: the + adjetivo + est." }
        ]
      },
      {
        id: "inx4-3",
        proposito: "Propósito formativo 3",
        titulo: "Habits and Reasons: Presente Simple y Because",
        icono: "🥗",
        imagen: "linear-gradient(135deg, #16a34a, #0891b2)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Ya sabes describir tu rutina; ahora explicas <strong>por qué</strong> haces las cosas: «I get up at 5:00 <em>because</em> my school is far from my house.»
          </div>

          <h4>Presente simple: repaso completo</h4>
          <table class="tabla-estudio">
            <tr><th></th><th>I / You / We / They</th><th>He / She / It</th></tr>
            <tr><td>+</td><td>We walk to school.</td><td>She walks to school.</td></tr>
            <tr><td>−</td><td>We don't walk to school.</td><td>She doesn't walk to school.</td></tr>
            <tr><td>?</td><td>Do you walk to school?</td><td>Does she walk to school?</td></tr>
            <tr><td>Wh-</td><td>Why do you walk to school?</td><td>Why does she walk to school?</td></tr>
          </table>

          <h4>Because: causa y justificación</h4>
          <div class="formula">
I drink a lot of water <strong>because</strong> it's very hot.<br>
I'm tired <strong>because</strong> I studied all night.<br>
Why do you go to bed early? — Because I get up at 5:00.
          </div>

          <h4>Hábitos saludables y organización del tiempo</h4>
          <table class="tabla-estudio">
            <tr><th>Healthy habits</th><th>Time management</th></tr>
            <tr><td>eat fruit and vegetables · drink water · sleep eight hours · exercise · wash your hands</td><td>make a schedule · do homework before dinner · take short breaks · prepare your backpack at night · use a planner</td></tr>
          </table>

          <h4>🛠️ Manos a la obra: mi semana</h4>
          <p>Haz un horario semanal en inglés y escribe un párrafo explicando tres hábitos que tienes y por qué. Agrega uno que quieres cambiar: «I don't sleep enough because I use my phone at night.» Puedes vincularlo con lo que aprendiste en Ciencias sobre salud.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> «My cousin lives in a community near Ocosingo. She gets up at 4:30 because she helps her mother make tortillas. She walks to school because there is no bus. She does her homework in the afternoon because at night there isn't much light in her house.»
          </div>
        `,
        actividades: [
          { pregunta: "Completa: «I drink a lot of water ___ it's very hot in Tuxtla.»", opciones: ["because", "so", "but", "or"], correcta: "because", explicacion: "Because introduce la causa." },
          { pregunta: "¿Cuál pregunta está bien escrita?", opciones: ["Why do you get up so early?", "Why you get up so early?", "Why does you get up so early?", "Why are you get up so early?"], correcta: "Why do you get up so early?", explicacion: "Why + do + sujeto + verbo base." },
          { pregunta: "¿Cuál describe un hábito saludable?", opciones: ["She sleeps eight hours every night.", "She never eats vegetables.", "He drinks soda all day.", "They skip breakfast every day."], correcta: "She sleeps eight hours every night.", explicacion: "Dormir lo suficiente es un hábito saludable." },
          { pregunta: "Completa: «My brother ___ his homework before dinner.»", opciones: ["does", "do", "doing", "is do"], correcta: "does", explicacion: "My brother = he: do → does." },
          { pregunta: "En «I'm tired because I studied all night», because introduce:", opciones: ["La causa", "El resultado", "Una condición", "Una comparación"], correcta: "La causa", explicacion: "Estudiar toda la noche es la causa del cansancio." }
        ]
      },
      {
        id: "in4-2",
        proposito: "Propósito formativo 4",
        titulo: "Dar Consejos (Should / Shouldn't)",
        icono: "💡",
        imagen: "linear-gradient(135deg, #ec4899, #db2777)",
        contenido: `
          <p>El verbo modal <strong>Should</strong> significa "debería".</p>
          <ul>
            <li><strong>Should:</strong> Deberías (Consejo positivo)</li>
            <li><strong>Shouldn't:</strong> No deberías (Consejo negativo)</li>
          </ul>
          <p>Se usa con el verbo en forma base sin "to".</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto:</strong> "You <strong>should</strong> drink water if you visit the jungle" (Deberías beber agua si visitas la selva). "You <strong>shouldn't</strong> eat street food if you are sick" (No deberías comer en la calle si estás enfermo).
          </div>
        `,
        actividades: [
          { pregunta: "Completa: You ___ study for the exam.", opciones: ["should", "should to", "are", "will"], correcta: "should", explicacion: "Should va directo con el verbo." },
          { pregunta: "El negativo de should es:", opciones: ["don't should", "not should", "shouldn't", "no should"], correcta: "shouldn't", explicacion: "Shouldn't = should not." },
          { pregunta: "¿Qué significa 'You shouldn't smoke'?", opciones: ["No deberías fumar", "Deberías fumar", "No fumas", "Fumas"], correcta: "No deberías fumar", explicacion: "Shouldn't expresa un consejo negativo." },
          { pregunta: "Completa: He ___ take a taxi, it's late.", opciones: ["should", "shoulds", "will to", "to should"], correcta: "should", explicacion: "Should no cambia con he/she/it." },
          { pregunta: "¿Para qué sirve 'Should'?", opciones: ["Para dar órdenes", "Para dar consejos", "Para hablar en pasado", "Para preguntar"], correcta: "Para dar consejos", explicacion: "Equivale a 'deberías'." }
        ]
      },
      {
        id: "in4-1",
        proposito: "Propósito formativo 5",
        titulo: "Futuro con 'Will' y 'Going to'",
        icono: "🚀",
        imagen: "linear-gradient(135deg, #eab308, #f59e0b)",
        contenido: `
          <h4>Will (Decisiones espontáneas o promesas)</h4>
          <p>Sujeto + will + verbo base. Ej: I will help you.</p>
          <h4>Going to (Planes ya decididos)</h4>
          <p>Sujeto + am/is/are + going to + verbo base. Ej: I am going to study medicine.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto:</strong> "I <strong>am going to</strong> study at the university next year" (Voy a estudiar en la universidad el próximo año).
          </div>
        `,
        actividades: [
          { pregunta: "Completa: I ___ visit my grandmother tomorrow (plan).", opciones: ["will", "am going to", "going to", "is going to"], correcta: "am going to", explicacion: "Para planes con 'I', se usa am going to." },
          { pregunta: "Completa: Don't worry, I ___ help you (promesa).", opciones: ["will", "am", "going", "going to"], correcta: "will", explicacion: "Para promesas se usa will." },
          { pregunta: "¿Cómo se dice 'Ellos van a viajar'?", opciones: ["They will travel", "They are going to travel", "They travel", "They going to travel"], correcta: "They are going to travel", explicacion: "Plural de 'to be' es are + going to." },
          { pregunta: "El futuro de 'I go' con Will es:", opciones: ["I will go", "I go will", "I going", "I am go"], correcta: "I will go", explicacion: "Will + verbo base." },
          { pregunta: "¿Qué significa 'She is going to sleep'?", opciones: ["Ella durmió", "Ella va a dormir", "Ella duerme", "Ella dormirá mañana"], correcta: "Ella va a dormir", explicacion: "Es un plan futuro." }
        ]
      },
      {
        id: "inx4-4",
        proposito: "Propósito formativo 6",
        titulo: "Small Talk: Conversaciones con Cortesía",
        icono: "☕",
        imagen: "linear-gradient(135deg, #b45309, #0d9488)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> El <strong>small talk</strong> es la plática breve y amable que tenemos con alguien que acabamos de conocer: en una feria, una fila o un evento. Tiene tres partes: <strong>iniciar, mantener y cerrar</strong>.
          </div>

          <h4>1. Iniciar</h4>
          <ul>
            <li>Hi! Nice to meet you. — Nice to meet you too.</li>
            <li>Excuse me, can I help you?</li>
            <li>The weather is nice today, isn't it?</li>
            <li>This place is really interesting!</li>
          </ul>

          <h4>2. Mantener</h4>
          <table class="tabla-estudio">
            <tr><th>Pregunta</th><th>Respuesta</th></tr>
            <tr><td>How are you?</td><td>I'm fine, thanks. And you?</td></tr>
            <tr><td>What do you do?</td><td>I'm a student. / I'm a tour guide.</td></tr>
            <tr><td>Do you live around here?</td><td>Yes, I live in the center.</td></tr>
            <tr><td>Where are you from?</td><td>I'm from Canada. And you?</td></tr>
            <tr><td>Would you like to try some coffee?</td><td>Yes, please! / No, thanks.</td></tr>
          </table>
          <p>Para mostrar interés: That's great! · Really? · Me too! · I like your shirt. · How interesting!</p>

          <h4>3. Cerrar</h4>
          <p>It was nice talking to you. · I have to go now. · Enjoy your trip! · See you later! · Have a nice day!</p>

          <h4>Temas que conviene evitar con desconocidos</h4>
          <p>Dinero, edad, peso, religión o política. Prefiere el clima, el lugar, la comida o los planes de viaje.</p>

          <h4>🛠️ Manos a la obra: juego de rol</h4>
          <p>En parejas, representen el encuentro con un visitante en la feria de su plantel. Usen tarjetas con frases para iniciar, mantener (3 preguntas) y cerrar la conversación. Cambien de pareja tres veces.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> En una cafetería de San Cristóbal:<br>
            — «Hi! Is this seat free?» — «Yes, sure.» — «Thanks. The weather is a bit cold today, isn't it?» — «Yes, but I like it. Are you from here?» — «Yes, I'm a student at COBACH. Where are you from?» — «I'm from Germany.» — «That's great! Would you like to try some coffee from Chiapas?» … — «It was nice talking to you. Enjoy your trip!»
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es la respuesta adecuada a «Nice to meet you»?", opciones: ["Nice to meet you too.", "Yes, I meet.", "I'm fine to meet you.", "Goodbye meet."], correcta: "Nice to meet you too.", explicacion: "Se responde repitiendo la frase con too." },
          { pregunta: "¿Cuál es una invitación amable?", opciones: ["Would you like to have a coffee?", "You want coffee?", "Drink coffee with me now.", "Coffee you like?"], correcta: "Would you like to have a coffee?", explicacion: "Would you like to…? es la forma cortés de invitar." },
          { pregunta: "¿Cuál es un tema típico de small talk?", opciones: ["The weather is nice today, isn't it?", "How much money do you earn?", "How old is your mother?", "Why are you so short?"], correcta: "The weather is nice today, isn't it?", explicacion: "El clima es un tema neutral; las demás preguntas son indiscretas." },
          { pregunta: "¿Cómo cierras una conversación con cortesía?", opciones: ["It was nice talking to you. See you!", "Go away.", "I'm bored.", "Stop talking."], correcta: "It was nice talking to you. See you!", explicacion: "Agradeces la plática y te despides." },
          { pregunta: "«What do you do?» pregunta por:", opciones: ["Tu trabajo u ocupación", "Lo que estás haciendo ahora", "Tu comida favorita", "Tu edad"], correcta: "Tu trabajo u ocupación", explicacion: "Para lo que haces ahora se pregunta What are you doing?" }
        ]
      },
      {
        id: "inx4-5",
        proposito: "Propósito formativo 7",
        titulo: "Telling an Anecdote: Pasado Continuo y Emociones",
        icono: "🎭",
        imagen: "linear-gradient(135deg, #6d28d9, #be123c)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Una buena anécdota tiene un escenario (lo que <em>estaba pasando</em>) y un evento (lo que <em>pasó</em>). Para eso se combinan el <strong>pasado continuo</strong> y el <strong>pasado simple</strong>.
          </div>

          <h4>Pasado continuo</h4>
          <div class="formula">
was / were + verbo-ing<br>
I was walking · They were playing · Were you sleeping? — Yes, I was.
          </div>

          <h4>Pasado continuo + pasado simple</h4>
          <table class="tabla-estudio">
            <tr><th>Escenario (acción larga)</th><th>Evento (acción corta)</th></tr>
            <tr><td>I was walking near the river</td><td>when I saw a toucan.</td></tr>
            <tr><td>We were having dinner</td><td>when the lights went out.</td></tr>
            <tr><td>While she was studying,</td><td>her phone rang.</td></tr>
          </table>

          <h4>Adverbios de tiempo y de lugar</h4>
          <p><strong>Time:</strong> yesterday · last week · then · after that · later · finally · in the end<br>
          <strong>Place:</strong> here · there · at school · in the kitchen · outside · near the river</p>

          <h4>Emociones</h4>
          <p>happy · excited (emocionado) · nervous · surprised · worried (preocupado) · confused · sad · angry · proud (orgulloso) · scared (asustado)</p>

          <h4>🛠️ Manos a la obra (transversal con Lengua y Comunicación)</h4>
          <p>Retoma una anécdota de tu historia de vida que ya escribiste en español y cuéntala en inglés en 8 a 10 oraciones. Incluye un escenario con pasado continuo, un evento, dos emociones y lo que aprendiste.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> «On September 7th, 2017, I was sleeping when the earthquake started. My mother was watching TV in the living room. We were very scared, so we ran outside. Our neighbors were there too. Later, we helped them clean their house. I felt proud because our community worked together.»
          </div>
        `,
        actividades: [
          { pregunta: "Completa: «I ___ sleeping when the earthquake started.»", opciones: ["was", "were", "am", "did"], correcta: "was", explicacion: "Con I el pasado continuo usa was." },
          { pregunta: "Completa: «They ___ playing soccer when it started to rain.»", opciones: ["were", "was", "are", "did"], correcta: "were", explicacion: "Con they se usa were." },
          { pregunta: "¿Cuál es el pasado continuo de «she cooks»?", opciones: ["she was cooking", "she were cooking", "she cooked ing", "she is cooking"], correcta: "she was cooking", explicacion: "Was + verbo-ing." },
          { pregunta: "«I felt proud» significa:", opciones: ["Me sentí orgulloso", "Me sentí preocupado", "Me sentí confundido", "Me sentí enojado"], correcta: "Me sentí orgulloso", explicacion: "Proud = orgulloso u orgullosa." },
          { pregunta: "En «I saw her near the river yesterday», near the river indica:", opciones: ["Lugar", "Tiempo", "Frecuencia", "Emoción"], correcta: "Lugar", explicacion: "Near the river es un adverbio de lugar; yesterday es de tiempo." }
        ]
      },
      {
        id: "inx4-6",
        proposito: "Propósito formativo 8",
        titulo: "Review: Párrafos, Notas y Correos",
        icono: "📧",
        imagen: "linear-gradient(135deg, #0e7490, #4338ca)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Para cerrar el nivel A2 integras presente, pasado y futuro en textos funcionales con estructura clara: un párrafo, una nota o un correo electrónico.
          </div>

          <h4>Repaso: presente, pasado y futuro</h4>
          <table class="tabla-estudio">
            <tr><th>Tiempo</th><th>Uso</th><th>Ejemplo</th></tr>
            <tr><td>Present simple</td><td>hábitos y hechos</td><td>I live in Tuxtla.</td></tr>
            <tr><td>Past simple</td><td>hechos terminados</td><td>Last year I lived in Tapachula.</td></tr>
            <tr><td>Going to</td><td>planes</td><td>I'm going to study nursing.</td></tr>
            <tr><td>Will</td><td>decisiones y promesas</td><td>I will send you the photos.</td></tr>
          </table>

          <h4>Estructura de un párrafo</h4>
          <ol>
            <li><strong>Topic sentence:</strong> la idea principal. <em>My town is a great place to visit.</em></li>
            <li><strong>Supporting sentences:</strong> razones y ejemplos con conectores (first, also, because, for example).</li>
            <li><strong>Concluding sentence:</strong> cierra la idea. <em>That's why I love my town.</em></li>
          </ol>

          <h4>Partes de un correo electrónico</h4>
          <table class="tabla-estudio">
            <tr><th>Parte</th><th>Formal</th><th>Informal</th></tr>
            <tr><td>Subject</td><td>Request for information</td><td>Saturday!</td></tr>
            <tr><td>Saludo</td><td>Dear Ms. López,</td><td>Hi Ana,</td></tr>
            <tr><td>Cuerpo</td><td>I am writing to ask about…</td><td>How are you? I want to tell you…</td></tr>
            <tr><td>Despedida</td><td>Best regards, / Sincerely,</td><td>See you soon! / Take care,</td></tr>
          </table>

          <h4>🛠️ Producto final</h4>
          <p>Escribe un correo de 100 a 120 palabras a un estudiante de otro país para presentarte: tu rutina (presente), algo que viviste el año pasado (pasado) y tus planes al terminar el bachillerato (futuro). Organízalo en tres párrafos con su topic sentence.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong><br>
            Subject: Hello from Chiapas!<br>
            Hi Emily,<br>
            My name is Daniel and I live in Comitán, Chiapas. I study at COBACH and I usually play basketball after school. Last summer I went to the Lagunas de Montebello with my family and we swam in a cold lake. Next year I'm going to apply to university because I want to be an engineer. I will send you some photos of my town!<br>
            Take care,<br>
            Daniel
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es un saludo formal para un correo?", opciones: ["Dear Ms. López,", "Hey dude!", "What's up?", "Yo!"], correcta: "Dear Ms. López,", explicacion: "Dear + título + apellido es el saludo formal." },
          { pregunta: "¿Qué oración expresa un plan futuro?", opciones: ["I'm going to visit my aunt next week.", "I visited my aunt next week.", "I visit my aunt last week.", "I'm visiting my aunt yesterday."], correcta: "I'm going to visit my aunt next week.", explicacion: "Be going to + verbo expresa planes." },
          { pregunta: "La oración que presenta la idea principal de un párrafo se llama:", opciones: ["Topic sentence", "Concluding sentence", "Signature", "Subject line"], correcta: "Topic sentence", explicacion: "La topic sentence suele ir al inicio del párrafo." },
          { pregunta: "Completa: «Last year I ___ in Tapachula. Now I live in Tuxtla.»", opciones: ["lived", "live", "will live", "am living"], correcta: "lived", explicacion: "Last year indica pasado simple." },
          { pregunta: "¿Cuál es una despedida formal?", opciones: ["Best regards,", "See ya!", "Bye bye!", "Later!"], correcta: "Best regards,", explicacion: "Best regards o Sincerely son despedidas formales." }
        ]
      }
    ]
  },

  5: {
    titulo: "Inglés V",
    subtitulo: "We Are the Champions",
    semestre: "Quinto Semestre",
    nivel: "A2+ / B1",
    clase: "s5",
    icono: "🏆",
    descripcion: "Inglés con fines específicos: tu campo de interés, experiencias, procesos, opiniones, lectura, textos funcionales, interacción oral y un producto final.",
    meta: "Desarrolle habilidades comunicativas que le permitan comprender y producir textos orales y escritos sobre temas de interés académico, técnico, profesional o comunitario, para fortalecer su agencia lingüística, su pensamiento crítico y su colaboración.",
    contexto: "Expresar lo mejor de tu comunidad y de tus metas alcanzadas.",
    temas: [
      {
        id: "inx5-1",
        proposito: "Propósito formativo 1",
        titulo: "My Field of Interest: Inglés con Fines Específicos",
        icono: "🔬",
        imagen: "linear-gradient(135deg, #4338ca, #0891b2)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> En Inglés V el idioma se conecta con lo que quieres estudiar o hacer: turismo, salud, tecnología, agricultura o medio ambiente. Esto se llama <strong>English for Specific Purposes (ESP)</strong>.
          </div>

          <h4>Presente simple y presente continuo para describir un campo</h4>
          <table class="tabla-estudio">
            <tr><th>Presente simple: hechos y funciones</th><th>Presente continuo: tendencias de ahora</th></tr>
            <tr><td>Nurses take care of patients.</td><td>Clinics are using digital records.</td></tr>
            <tr><td>Tour guides show visitors the ruins.</td><td>More tourists are visiting Chiapas.</td></tr>
            <tr><td>Farmers grow coffee in the mountains.</td><td>Many farmers are producing organic coffee.</td></tr>
          </table>

          <h4>Vocabulario por campo</h4>
          <table class="tabla-estudio">
            <tr><th>Campo</th><th>Palabras clave</th></tr>
            <tr><td>Tourism</td><td>tour, booking, itinerary, guide, visitor, eco-lodge</td></tr>
            <tr><td>Health</td><td>patient, symptoms, clinic, vaccine, treatment, nurse</td></tr>
            <tr><td>Technology</td><td>app, device, software, data, network, coding</td></tr>
            <tr><td>Agriculture</td><td>crop, harvest, soil, organic, fertilizer, cooperative</td></tr>
            <tr><td>Environment</td><td>pollution, recycling, deforestation, water, climate change</td></tr>
          </table>

          <h4>Describir la relevancia de tu campo</h4>
          <div class="formula">
I'm interested in… because… · This field is important because… · People in this field usually…
          </div>

          <h4>🛠️ Manos a la obra</h4>
          <p>Elige con tu equipo un campo de interés para todo el semestre. Escribe un glosario de 20 palabras en inglés y un párrafo que explique qué hacen las personas en ese campo y por qué es importante para Chiapas.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> «I'm interested in ecotourism. Ecotourism protects the jungle and creates jobs for local communities. In the Lacandon Jungle, many families work as guides and run eco-lodges. These days, more international visitors are looking for responsible tourism, so English is very useful in this field.»
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál oración expresa un hecho general sobre una profesión?", opciones: ["Nurses take care of patients.", "Nurses are take care of patients.", "Nurses taking care of patients.", "Nurses takes care of patients."], correcta: "Nurses take care of patients.", explicacion: "Los hechos generales van en presente simple; nurses es plural (sin -s en el verbo)." },
          { pregunta: "¿Cuál oración describe una tendencia actual?", opciones: ["More young people are studying tourism these days.", "More young people studying tourism.", "More young people is studying tourism.", "More young people are study tourism."], correcta: "More young people are studying tourism these days.", explicacion: "Presente continuo: are + verbo-ing." },
          { pregunta: "¿A qué campo pertenecen harvest, crop y organic?", opciones: ["Agriculture", "Health", "Technology", "Tourism"], correcta: "Agriculture", explicacion: "Harvest = cosecha, crop = cultivo, organic = orgánico." },
          { pregunta: "¿Qué palabra pertenece al campo de la salud?", opciones: ["symptoms", "itinerary", "software", "harvest"], correcta: "symptoms", explicacion: "Symptoms = síntomas." },
          { pregunta: "En «Ecotourism protects the jungle», el verbo está en:", opciones: ["Presente simple", "Presente continuo", "Pasado simple", "Futuro"], correcta: "Presente simple", explicacion: "Protects lleva -s porque el sujeto (ecotourism) es tercera persona singular." }
        ]
      },
      {
        id: "in5-2",
        proposito: "Propósito formativo 2",
        titulo: "Presente Perfecto (Logros)",
        icono: "🌟",
        imagen: "linear-gradient(135deg, #14b8a6, #0d9488)",
        contenido: `
          <p>Se usa para experiencias de vida o acciones que empezaron en el pasado y continúan.</p>
          <p>Estructura: <strong>Have / Has + Verbo en participio pasado</strong>.</p>
          <ul>
            <li>I have visited (He visitado)</li>
            <li>She has eaten (Ella ha comido)</li>
          </ul>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto:</strong> "I <strong>have visited</strong> the Montes Azules biosphere" (He visitado la biosfera de Montes Azules). Es un logro en tu vida.
          </div>
        `,
        actividades: [
          { pregunta: "Completa: I ___ finished my homework.", opciones: ["have", "has", "am", "is"], correcta: "have", explicacion: "Con 'I' se usa 'have'." },
          { pregunta: "Completa: She ___ traveled to Mexico City.", opciones: ["have", "has", "is", "are"], correcta: "has", explicacion: "Con she/he/it se usa 'has'." },
          { pregunta: "¿Qué significa 'We have won the game'?", opciones: ["Ganamos el juego", "Hemos ganado el juego", "Ganaremos el juego", "Estamos ganando"], correcta: "Hemos ganado el juego", explicacion: "Have + participio = hemos..." },
          { pregunta: "El participio de 'Eat' es:", opciones: ["Ate", "Eated", "Eaten", "Eating"], correcta: "Eaten", explicacion: "Eat - Ate - Eaten." },
          { pregunta: "El participio de 'Write' es:", opciones: ["Wrote", "Written", "Writed", "Writing"], correcta: "Written", explicacion: "Write - Wrote - Written." }
        ]
      },
      {
        id: "inx5-2",
        proposito: "Propósito formativo 3",
        titulo: "How Does It Work? Procesos y Voz Pasiva",
        icono: "⚙️",
        imagen: "linear-gradient(135deg, #0f766e, #a16207)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Para explicar un proceso lo importante suele ser <strong>qué se hace</strong>, no quién lo hace. Por eso se usa la <strong>voz pasiva</strong>: <em>Coffee is grown in the mountains</em>.
          </div>

          <h4>Preguntas sobre procesos</h4>
          <ul>
            <li>How does it work? — ¿Cómo funciona?</li>
            <li>What happens when…? — ¿Qué pasa cuando…?</li>
            <li>How is it made? — ¿Cómo se hace?</li>
            <li>What is it used for? — ¿Para qué se usa?</li>
          </ul>

          <h4>Voz pasiva (introducción)</h4>
          <div class="formula">
objeto + is / are + participio pasado (+ by …)<br>
Activa: Farmers grow coffee. → Pasiva: Coffee <strong>is grown</strong> by farmers.<br>
Activa: People find amber in Simojovel. → Pasiva: Amber <strong>is found</strong> in Simojovel.
          </div>
          <table class="tabla-estudio">
            <tr><th>Verbo</th><th>Participio</th><th>Ejemplo pasivo</th></tr>
            <tr><td>grow</td><td>grown</td><td>Cacao is grown in the Soconusco region.</td></tr>
            <tr><td>make</td><td>made</td><td>Textiles are made on backstrap looms.</td></tr>
            <tr><td>produce</td><td>produced</td><td>Electricity is produced in the dams of the Grijalva River.</td></tr>
            <tr><td>use</td><td>used</td><td>Solar panels are used in remote communities.</td></tr>
          </table>

          <h4>🛠️ Manos a la obra: entrevista simulada</h4>
          <p>Uno de tu equipo será el experto (un productor de café, una enfermera, un técnico en energía solar) y los demás le harán preguntas sobre un proceso de su campo. El experto responde con al menos tres oraciones en voz pasiva y los pasos en orden.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> — «How is coffee made?» — «First, the cherries are picked by hand. Then, the pulp is removed and the beans are washed. After that, they are dried in the sun for several days. Finally, the beans are roasted and packed. Most of the coffee from this cooperative is exported.»
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál oración está en voz pasiva?", opciones: ["Amber is found in Simojovel.", "Amber finds in Simojovel.", "Amber is find in Simojovel.", "Amber found is in Simojovel."], correcta: "Amber is found in Simojovel.", explicacion: "Is + participio (found)." },
          { pregunta: "Completa: «Coffee ___ grown in the mountains of Chiapas.»", opciones: ["is", "are", "was being", "has"], correcta: "is", explicacion: "Coffee es singular e incontable: is + grown." },
          { pregunta: "¿Cuál pregunta sobre un proceso está bien escrita?", opciones: ["How does a solar panel work?", "How works a solar panel?", "How a solar panel does work?", "How is work a solar panel?"], correcta: "How does a solar panel work?", explicacion: "How + does + sujeto + verbo base." },
          { pregunta: "Completa: «Electricity ___ produced in the Chicoasén dam.»", opciones: ["is", "are", "be", "does"], correcta: "is", explicacion: "Voz pasiva en presente: is + produced." },
          { pregunta: "«What happens when you mix water and cement?» pregunta por:", opciones: ["Un proceso o su resultado", "Una persona", "Un lugar", "Una fecha"], correcta: "Un proceso o su resultado", explicacion: "What happens when…? = ¿Qué pasa cuando…?" }
        ]
      },
      {
        id: "inx5-3",
        proposito: "Propósito formativo 4",
        titulo: "Opinions and Concerns: Should, Could, Might",
        icono: "💬",
        imagen: "linear-gradient(135deg, #be123c, #6d28d9)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Una opinión madura reconoce la duda y propone soluciones. Los modales te ayudan: <strong>should</strong> (recomiendo), <strong>could</strong> (propongo una posibilidad), <strong>might</strong> (tal vez pase).
          </div>

          <h4>Modales para sugerir, suponer o dudar</h4>
          <table class="tabla-estudio">
            <tr><th>Modal</th><th>Uso</th><th>Ejemplo</th></tr>
            <tr><td>should</td><td>recomendación u opinión fuerte</td><td>The government should invest in rural schools.</td></tr>
            <tr><td>could</td><td>sugerencia o posibilidad</td><td>We could plant trees near the river.</td></tr>
            <tr><td>might</td><td>posibilidad con duda</td><td>Tourism might damage the jungle.</td></tr>
          </table>

          <h4>Conectores de causa, efecto y contraste</h4>
          <ul>
            <li><strong>because</strong> (causa): Rivers are polluted <em>because</em> people throw trash in them.</li>
            <li><strong>so</strong> (efecto): Forests are disappearing, <em>so</em> animals lose their homes.</li>
            <li><strong>even though</strong> (aunque): <em>Even though</em> tourism brings money, it might affect local communities.</li>
          </ul>

          <h4>Frases para opinar</h4>
          <p>In my opinion,… · I believe that… · I'm worried about… · One problem is that… · A possible solution could be…</p>

          <h4>Temas para discutir</h4>
          <p>deforestation in the Lacandon Jungle · plastic in rivers · access to clean water · migration on the southern border · youth and work · gender equality · the rights of indigenous languages</p>

          <h4>🛠️ Manos a la obra (transversal con Ciencias Sociales)</h4>
          <p>Retoma lo que reflexionaste sobre las juventudes en Ciencias Sociales y graba un mensaje de 1 minuto en inglés dirigido a jóvenes de otro país: un problema de tu comunidad, por qué te preocupa y dos soluciones con should y could.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> «In my opinion, the Lacandon Jungle should be protected because many species live only there. Even though people need land to grow food, they could use agroforestry and keep the trees. If we don't act now, the jaguar might disappear from this region.»
          </div>
        `,
        actividades: [
          { pregunta: "«It might rain tomorrow» expresa:", opciones: ["Posibilidad con duda", "Certeza", "Obligación", "Prohibición"], correcta: "Posibilidad con duda", explicacion: "Might = tal vez, quizá." },
          { pregunta: "¿Cuál sugerencia está bien escrita?", opciones: ["We could plant trees near the river.", "We could to plant trees near the river.", "We coulds plant trees near the river.", "We could planting trees near the river."], correcta: "We could plant trees near the river.", explicacion: "Could + verbo base, sin to y sin -s." },
          { pregunta: "Completa: «___ the jungle is protected, some people still cut trees.»", opciones: ["Even though", "Because", "So", "And"], correcta: "Even though", explicacion: "Even though = aunque; introduce un contraste." },
          { pregunta: "Completa: «The government ___ invest more in rural schools.» (recomendación)", opciones: ["should", "might not to", "shoulds", "could to"], correcta: "should", explicacion: "Should + verbo base expresa recomendación." },
          { pregunta: "¿Qué frase introduce una opinión?", opciones: ["In my opinion", "In the end", "First of all", "Suddenly"], correcta: "In my opinion", explicacion: "In my opinion = en mi opinión." }
        ]
      },
      {
        id: "inx5-4",
        proposito: "Propósito formativo 5",
        titulo: "Reading Strategies: Skimming, Scanning, Fact or Opinion",
        icono: "🔎",
        imagen: "linear-gradient(135deg, #0284c7, #15803d)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> No necesitas entender cada palabra para comprender un texto. Las estrategias de lectura te ayudan a encontrar lo importante.
          </div>

          <h4>Estrategias</h4>
          <table class="tabla-estudio">
            <tr><th>Estrategia</th><th>Qué haces</th><th>Para qué</th></tr>
            <tr><td>Skimming</td><td>Lees rápido el título, el inicio de cada párrafo y las imágenes.</td><td>Captar la idea general.</td></tr>
            <tr><td>Scanning</td><td>Buscas con la vista un dato: un número, una fecha, un nombre.</td><td>Encontrar información específica.</td></tr>
            <tr><td>Fact or opinion</td><td>Distingues lo comprobable de lo que alguien piensa.</td><td>Leer con pensamiento crítico.</td></tr>
            <tr><td>Context clues</td><td>Deduces una palabra por las palabras que la rodean.</td><td>No depender del diccionario.</td></tr>
          </table>

          <h4>Texto de práctica</h4>
          <div class="ejemplo">
            <strong>The Lacandon Jungle</strong><br>
            The Lacandon Jungle is in eastern Chiapas, near the border with Guatemala. It is one of the largest rainforests in Mexico. Jaguars, scarlet macaws and howler monkeys live there. The Montes Azules Biosphere Reserve protects a large part of this jungle. However, deforestation is a serious problem. I think it is the most beautiful place in the world, and everybody should visit it.
          </div>
          <ul>
            <li><strong>Hechos (facts):</strong> its location, the animals that live there, the reserve.</li>
            <li><strong>Opiniones:</strong> «I think it is the most beautiful place…», «everybody should visit it».</li>
            <li>Palabras que señalan opinión: I think, I believe, in my opinion, should, the best, beautiful.</li>
          </ul>

          <h4>🛠️ Manos a la obra</h4>
          <p>Busca un artículo, una infografía o un blog breve en inglés sobre tu campo de interés. Haz skimming (escribe la idea general en una oración), scanning (encuentra 3 datos) y anota un hecho y una opinión. Termina con un resumen de 3 oraciones y tu propia opinión.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Las cooperativas de café de Chiapas publican información en inglés para compradores de otros países. Con skimming sabes de qué trata la página; con scanning encuentras rápido el precio, la altitud del cultivo o el tipo de certificación orgánica.
          </div>
        `,
        actividades: [
          { pregunta: "Leer rápido para captar la idea general se llama:", opciones: ["Skimming", "Scanning", "Translating", "Summarizing"], correcta: "Skimming", explicacion: "Skimming = lectura rápida de lo general." },
          { pregunta: "Buscar un dato específico, como una fecha o un número, se llama:", opciones: ["Scanning", "Skimming", "Guessing", "Speaking"], correcta: "Scanning", explicacion: "Scanning = buscar información específica." },
          { pregunta: "En el texto de práctica, ¿cuál oración es una opinión?", opciones: ["I think it is the most beautiful place in the world.", "The Lacandon Jungle is in eastern Chiapas.", "Jaguars live in the jungle.", "Scarlet macaws live there."], correcta: "I think it is the most beautiful place in the world.", explicacion: "I think indica una opinión personal." },
          { pregunta: "Según el texto de práctica, ¿dónde está la Selva Lacandona?", opciones: ["In eastern Chiapas", "In northern Mexico", "In Guatemala City", "On the coast of Oaxaca"], correcta: "In eastern Chiapas", explicacion: "El texto dice: in eastern Chiapas, near the border with Guatemala." },
          { pregunta: "¿Qué expresión indica una opinión?", opciones: ["I believe", "It was founded in", "According to the data", "In 2020"], correcta: "I believe", explicacion: "I believe = creo que." }
        ]
      },
      {
        id: "inx5-5",
        proposito: "Propósito formativo 6",
        titulo: "Functional Writing: Correos, Solicitudes y Propuestas",
        icono: "📝",
        imagen: "linear-gradient(135deg, #7c3aed, #0e7490)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Un texto funcional sirve para <strong>hacer algo</strong>: informar, solicitar o proponer. Lo primero es elegir el registro correcto: formal o informal.
          </div>

          <h4>Registro formal e informal</h4>
          <table class="tabla-estudio">
            <tr><th></th><th>Formal</th><th>Informal</th></tr>
            <tr><td>Saludo</td><td>Dear Mr. Pérez,</td><td>Hi Luis!</td></tr>
            <tr><td>Propósito</td><td>I am writing to request information about…</td><td>I want to tell you about…</td></tr>
            <tr><td>Petición</td><td>Could you please send me…?</td><td>Can you send me…?</td></tr>
            <tr><td>Cierre</td><td>I look forward to your reply. Sincerely,</td><td>Talk soon! Cheers,</td></tr>
          </table>
          <p>En lo formal se evitan las contracciones (I am en lugar de I'm) y las expresiones coloquiales.</p>

          <h4>Patrones verbales</h4>
          <div class="formula">
want to / plan to / hope to + verbo: We plan to organize a fair.<br>
suggest + verbo-ing: I suggest organizing a recycling campaign.
          </div>

          <h4>Tipos de textos</h4>
          <p>note (recado) · email · form (formulario) · invitation · proposal (propuesta) · application (solicitud)</p>

          <h4>✍️ Modelo: propuesta breve</h4>
          <div class="ejemplo">
            Dear Principal,<br>
            We are students from group 5A. We are writing to propose a recycling campaign at our school. Every day, many plastic bottles end up in the trash. We plan to put recycling bins in each building, and we suggest selling the plastic to a recycling center. The money could be used for the library. We would be happy to explain our idea in a meeting.<br>
            Sincerely,<br>
            Group 5A
          </div>

          <h4>🛠️ Manos a la obra</h4>
          <p>Escribe un texto funcional real para tu campo de interés: una solicitud de información a una universidad, una invitación en inglés para la feria del plantel o una propuesta para tu comunidad.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Una cooperativa de artesanas de Zinacantán quiere vender sus textiles en línea. Tu equipo puede escribir en inglés la descripción de los productos, un formulario de pedidos y un correo formal para una tienda de comercio justo en otro país.
          </div>
        `,
        actividades: [
          { pregunta: "Completa: «I suggest ___ a recycling campaign.»", opciones: ["organizing", "to organize", "organize", "organized"], correcta: "organizing", explicacion: "Suggest va seguido del verbo con -ing." },
          { pregunta: "Completa: «We plan ___ trees in the schoolyard.»", opciones: ["to plant", "planting", "plant", "planted"], correcta: "to plant", explicacion: "Plan va seguido de to + verbo." },
          { pregunta: "¿Cuál oración está en registro formal?", opciones: ["I am writing to request information about the scholarship.", "Hey, tell me about the scholarship!", "What's up with the scholarship?", "Gimme info about it."], correcta: "I am writing to request information about the scholarship.", explicacion: "Es la fórmula formal para indicar el propósito de un correo." },
          { pregunta: "¿Qué texto usas para invitar a la comunidad a la feria escolar?", opciones: ["An invitation", "A recipe", "A receipt", "A dictionary"], correcta: "An invitation", explicacion: "Invitation = invitación." },
          { pregunta: "Completa: «I want ___ a nurse.»", opciones: ["to be", "be", "being", "am"], correcta: "to be", explicacion: "Want va seguido de to + verbo." }
        ]
      },
      {
        id: "inx5-6",
        proposito: "Propósito formativo 7",
        titulo: "Speaking: Entrevistas, Paneles y Debates",
        icono: "🎤",
        imagen: "linear-gradient(135deg, #dc2626, #ca8a04)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> En una conversación de grupo no solo importa lo que dices, sino <strong>cómo tomas y das la palabra</strong> (turn-taking). Y recuerda: tener acento no es pronunciar mal; lo importante es que te entiendan.
          </div>

          <h4>Estrategias para tomar turnos</h4>
          <table class="tabla-estudio">
            <tr><th>Para…</th><th>Frases</th></tr>
            <tr><td>pedir la palabra</td><td>Can I say something? · May I add something?</td></tr>
            <tr><td>interrumpir con cortesía</td><td>Sorry to interrupt, but… · Excuse me, can I just say…?</td></tr>
            <tr><td>dar la palabra</td><td>What do you think? · Do you agree? · Go ahead.</td></tr>
            <tr><td>opinar</td><td>In my opinion,… · I think… · From my point of view,…</td></tr>
            <tr><td>estar de acuerdo</td><td>I agree. · That's a good point. · Exactly!</td></tr>
            <tr><td>estar en desacuerdo con respeto</td><td>I see your point, but… · I'm not sure about that. · I disagree because…</td></tr>
            <tr><td>pedir aclaración</td><td>Sorry, could you repeat that? · What do you mean by…?</td></tr>
          </table>

          <h4>Formatos de interacción</h4>
          <ul>
            <li><strong>Entrevista:</strong> una persona pregunta y otra responde (a un experto, a un turista).</li>
            <li><strong>Presentación breve:</strong> 2 a 3 minutos con apoyo visual.</li>
            <li><strong>Panel:</strong> varias personas responden preguntas de un moderador.</li>
            <li><strong>Debate o juego de rol:</strong> se defienden posturas diferentes.</li>
          </ul>

          <h4>Consejos de pronunciación</h4>
          <p>Cuida el acento de las palabras (de-VE-lop-ment, TOUR-ism), haz pausas entre ideas y habla un poco más lento de lo normal. Si alguien no te entiende, repite con otras palabras.</p>

          <h4>🛠️ Manos a la obra: panel en la feria</h4>
          <p>Organicen un panel de 4 personas sobre su campo de interés para la feria escolar o un evento comunitario. Cada quien prepara una postura y usa tarjetas con las frases de turn-taking. Un moderador da la palabra.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Panel «Tourism in San Cristóbal: good or bad?»<br>
            — Moderator: «What do you think, Ana?» — Ana: «In my opinion, tourism creates jobs for artisans.» — Luis: «Sorry to interrupt, but rents are getting very expensive for local families.» — Ana: «That's a good point. Maybe the city could regulate short-term rentals.»
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué frase sirve para pedir la palabra?", opciones: ["Can I say something?", "Shut up, please.", "Me now!", "Talk you later."], correcta: "Can I say something?", explicacion: "Es la forma cortés de pedir un turno para hablar." },
          { pregunta: "¿Cómo interrumpes con cortesía?", opciones: ["Sorry to interrupt, but…", "Stop it!", "You are wrong!", "Be quiet."], correcta: "Sorry to interrupt, but…", explicacion: "Te disculpas antes de tomar la palabra." },
          { pregunta: "¿Cómo expresas desacuerdo con respeto?", opciones: ["I see your point, but I disagree.", "That's stupid.", "You don't know anything.", "No, no, no."], correcta: "I see your point, but I disagree.", explicacion: "Reconoces la idea del otro antes de dar la tuya." },
          { pregunta: "¿Cómo invitas a otra persona a opinar?", opciones: ["What do you think?", "Why you think?", "You think what?", "Do you thinks?"], correcta: "What do you think?", explicacion: "What do you think? = ¿Tú qué opinas?" },
          { pregunta: "Según el programa de Inglés, tener acento al hablar:", opciones: ["Es válido; lo importante es que te entiendan", "Es un error grave", "Siempre impide comunicarse", "Debe eliminarse antes de hablar"], correcta: "Es válido; lo importante es que te entiendan", explicacion: "El acento refleja tu lengua de origen y es parte de la diversidad; la meta es la comprensión mutua." }
        ]
      },
      {
        id: "inx5-7",
        proposito: "Propósito formativo 8",
        titulo: "Final Project: Cartel, Miniartículo, Podcast o Video",
        icono: "🎬",
        imagen: "linear-gradient(135deg, #a16207, #be185d)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> El semestre termina con un producto en inglés sobre tu campo de interés y su relevancia para tu comunidad. Integra todo lo aprendido: describir, narrar, explicar procesos, opinar y proponer.
          </div>

          <h4>Elige tu producto</h4>
          <table class="tabla-estudio">
            <tr><th>Producto</th><th>Características</th></tr>
            <tr><td>Poster / infographic</td><td>Título claro, datos, imágenes y poco texto.</td></tr>
            <tr><td>Mini-article</td><td>3 a 4 párrafos: introducción, desarrollo y conclusión.</td></tr>
            <tr><td>Podcast</td><td>Audio de 3 a 5 minutos, con entrevista o conversación.</td></tr>
            <tr><td>Video</td><td>2 a 4 minutos, con narración y subtítulos en inglés.</td></tr>
          </table>

          <h4>Organiza tus ideas</h4>
          <ol>
            <li><strong>Introduction:</strong> Today we're going to talk about… / Our topic is…</li>
            <li><strong>Body:</strong> what the field is, a process (passive voice), a personal experience (present perfect), a problem and your opinion (should, could, might).</li>
            <li><strong>Conclusion:</strong> In conclusion,… / To sum up,… / Thank you for listening!</li>
          </ol>

          <h4>Lista de cotejo para autoevaluarte</h4>
          <ul>
            <li>☐ Usé vocabulario de mi campo (mínimo 10 palabras).</li>
            <li>☐ Incluí al menos tres tiempos verbales.</li>
            <li>☐ Usé conectores (first, then, because, even though, in conclusion).</li>
            <li>☐ Di mi opinión y propuse una acción.</li>
            <li>☐ Mi producto se entiende sin traducirlo.</li>
            <li>☐ Revisé y comenté el trabajo de otro equipo (coevaluación).</li>
          </ul>

          <h4>🛠️ Manos a la obra</h4>
          <p>Presenten su producto en la feria escolar o publíquenlo en las redes del plantel. Si en tu comunidad se habla otra lengua, agrega una frase o un saludo en ella: el inglés amplía, no reemplaza, tus lenguas.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Podcast «From Chiapas to the World: Our Coffee»: «Today we're going to talk about coffee in Chiapas. Chiapas is one of the main coffee producers in Mexico. Coffee is grown in the Soconusco and the highlands. We have visited a cooperative in our town and interviewed two farmers. In our opinion, young people should learn about fair trade, because it could help local families. Thank you for listening!»
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es la primera parte de una presentación?", opciones: ["Introduction", "Conclusion", "Questions", "References"], correcta: "Introduction", explicacion: "Primero presentas el tema y su relevancia." },
          { pregunta: "¿Qué frase sirve para abrir una presentación?", opciones: ["Today we're going to talk about coffee in Chiapas.", "Finally, thank you.", "In conclusion, coffee.", "Any questions?"], correcta: "Today we're going to talk about coffee in Chiapas.", explicacion: "Anuncia el tema al inicio." },
          { pregunta: "¿Qué frase sirve para cerrar?", opciones: ["In conclusion, coffee is very important for Chiapas.", "First, let me introduce myself.", "Today I'm going to talk about coffee.", "Let's start."], correcta: "In conclusion, coffee is very important for Chiapas.", explicacion: "In conclusion introduce la idea final." },
          { pregunta: "¿Qué producto es solo de audio?", opciones: ["A podcast", "A poster", "A mini-article", "An infographic"], correcta: "A podcast", explicacion: "Un podcast es un programa de audio." },
          { pregunta: "Para mostrar datos con imágenes y poco texto conviene:", opciones: ["An infographic", "A podcast", "A phone call", "A letter"], correcta: "An infographic", explicacion: "La infografía combina datos e imágenes." }
        ]
      },
      {
        id: "in5-1",
        proposito: "Complementario · Repaso de comparativos y superlativos",
        titulo: "Comparativos y Superlativos",
        icono: "🏆",
        imagen: "linear-gradient(135deg, #a855f7, #9333ea)",
        contenido: `
          <h4>Comparativos (Más... que)</h4>
          <p>Adjetivos cortos: + er. (Tall → Taller).</p>
          <p>Adjetivos largos: More + adjetivo. (Intelligent → More intelligent).</p>
          <h4>Superlativos (El más...)</h4>
          <p>Adjetivos cortos: The + est. (Tall → The tallest).</p>
          <p>Adjetivos largos: The most + adjetivo. (Intelligent → The most intelligent).</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto:</strong> "The Grijalva is <strong>longer</strong> than the Suchiate" (El Grijalva es más largo que el Suchiate). "The Sumidero Canyon is <strong>the most beautiful</strong> place in Chiapas" (El Cañón del Sumidero es el lugar más hermoso de Chiapas).
          </div>
        `,
        actividades: [
          { pregunta: "El comparativo de 'Big' es:", opciones: ["Biger", "Bigger", "More big", "The biggest"], correcta: "Bigger", explicacion: "Adjetivo corto, se duplica la consonante y se agrega er." },
          { pregunta: "El superlativo de 'Good' es:", opciones: ["Gooder", "The best", "The most good", "Better"], correcta: "The best", explicacion: "Good es irregular (good - better - the best)." },
          { pregunta: "Completa: A car is ___ than a bicycle.", opciones: ["fast", "faster", "the fastest", "more fast"], correcta: "faster", explicacion: "Adjetivo corto, se usa 'er'." },
          { pregunta: "El comparativo de 'Expensive' es:", opciones: ["Expensiver", "More expensive", "The most expensive", "Expensivest"], correcta: "More expensive", explicacion: "Adjetivo largo, se usa 'more'." },
          { pregunta: "¿Qué significa 'I am the tallest'?", opciones: ["Soy más alto", "Soy el más alto", "Eres alto", "Soy alto"], correcta: "Soy el más alto", explicacion: "Superlativo con 'the... est'." }
        ]
      }
    ]
  }
};
