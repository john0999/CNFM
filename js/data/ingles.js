/* ==========================================================
   DATA - Inglés I, II, III, IV y V
   Alineado al plan de estudios COBACH Chiapas
========================================================== */

const INGLES = {
  1: {
    titulo: "Inglés I",
    subtitulo: "To be, or Not to be, That Is the Question",
    semestre: "Primer Semestre",
    clase: "s1",
    icono: "🇬🇧",
    descripcion: "Introducción al idioma: el verbo to be, saludos y presentaciones.",
    contexto: "El inglés te abre puertas. En Chiapas, el turismo y el comercio internacional hacen que hablar inglés sea una ventaja enorme.",
    temas: [
      {
        id: "in1-1",
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
        id: "in1-3",
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
      }
    ]
  },

  2: {
    titulo: "Inglés II",
    subtitulo: "These Are a Few of My Favorite Things",
    semestre: "Segundo Semestre",
    clase: "s2",
    icono: "🇬🇧",
    descripcion: "Vocabulario de la vida diaria, plurales y adjetivos.",
    contexto: "Aprender a describir tus cosas favoritas, tu familia y tu entorno.",
    temas: [
      {
        id: "in2-1",
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
        id: "in2-2",
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
      }
    ]
  },

  3: {
    titulo: "Inglés III",
    subtitulo: "What We Were, We Share",
    semestre: "Tercer Semestre",
    clase: "s3",
    icono: "🇬🇧",
    descripcion: "Pasado simple, verbos regulares e irregulares.",
    contexto: "Hablar sobre el pasado: la historia de Chiapas, leyendas y experiencias.",
    temas: [
      {
        id: "in3-1",
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
        id: "in3-2",
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
      }
    ]
  },

  4: {
    titulo: "Inglés IV",
    subtitulo: "Should I Stay or Should I Go?",
    semestre: "Cuarto Semestre",
    clase: "s4",
    icono: "🇬🇧",
    descripcion: "Futuro, planes y dar consejos.",
    contexto: "Tomar decisiones sobre el futuro profesional, viajes o estudios superiores.",
    temas: [
      {
        id: "in4-1",
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
        id: "in4-2",
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
      }
    ]
  },

  5: {
    titulo: "Inglés V",
    subtitulo: "We Are The Champions",
    semestre: "Quinto Semestre",
    clase: "s5",
    icono: "🇬🇧",
    descripcion: "Comparativos, superlativos y logros.",
    contexto: "Expresar lo mejor de tu comunidad y de tus metas alcanzadas.",
    temas: [
      {
        id: "in5-1",
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
      },
      {
        id: "in5-2",
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
      }
    ]
  }
};