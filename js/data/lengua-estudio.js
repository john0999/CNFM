/* ==========================================================
   DATA - Lengua y Comunicación · Material de estudio ampliado
   Complementa los temas originales de LENGUA (js/data/lengua.js)
   sin modificarlos: se muestra en "Estudia más" bajo cada tema.
========================================================== */

// Consejo de Balam, el alebrije-jaguar que acompaña Lengua y Comunicación I
const balamDice = (texto) => `
  <div class="alebrije-tip">
    <img src="images/lengua/alebrije-jaguar.svg" alt="Balam, el alebrije-jaguar" loading="lazy">
    <p><strong>Balam dice:</strong> ${texto}</p>
  </div>`;

// Ejercicio con la respuesta oculta
const ejercicioLengua = (pregunta, respuesta) => `
  <details class="ejercicio-estudio">
    <summary>${pregunta}</summary>
    <div>${respuesta}</div>
  </details>`;

const LENGUA_ESTUDIO = {

  /* =================== LENGUA Y COMUNICACIÓN I =================== */

  "lc1-1": `
    ${balamDice('«Leer no es solo pasar los ojos por las letras: es conversar con quien escribió. Antes, durante y después de leer, hazle preguntas al texto.»')}
    <h4>Estrategias de lectura</h4>
    <table class="tabla-estudio">
      <tr><th>Momento</th><th>¿Qué hago?</th></tr>
      <tr><td><strong>Antes</strong></td><td>Leo el título, observo las imágenes y me pregunto: ¿de qué tratará?, ¿qué sé del tema?</td></tr>
      <tr><td><strong>Durante</strong></td><td>Subrayo, busco las palabras que no conozco y compruebo si mis predicciones eran correctas.</td></tr>
      <tr><td><strong>Después</strong></td><td>Explico con mis palabras lo que entendí, doy mi opinión y lo relaciono con mi vida.</td></tr>
    </table>

    <h4>Tipos de lectura</h4>
    <ul>
      <li><strong>Exploratoria:</strong> una mirada rápida para saber de qué trata (como hojear una revista).</li>
      <li><strong>Analítica o de estudio:</strong> lenta y con atención, para comprender y aprender.</li>
      <li><strong>Crítica:</strong> evalúa si la información es confiable y si estoy de acuerdo con ella.</li>
      <li><strong>Recreativa:</strong> por gusto (novelas, cómics, poesía).</li>
    </ul>

    <h4>La lectura y la escritura en la comunidad</h4>
    <p>Leemos y escribimos todo el tiempo fuera de la escuela: las etiquetas de los productos, los avisos de la asamblea, los mensajes del celular, las recetas de la abuela, las letras de las canciones. Todo eso también es lectura.</p>

    <h4>✍️ Ejemplo práctico: mi historia como lector</h4>
    <p>Escribe una página contestando: ¿quién te enseñó a leer?, ¿cuál es el primer texto que recuerdas?, ¿qué lees ahora aunque no sea para la escuela?, ¿qué te gustaría leer? Comparte tu texto en parejas.</p>
  `,

  "lc1-2": `
    ${balamDice('«Un texto es como un tejido de Zinacantán: si un hilo se sale de lugar, se nota. Las propiedades del texto hacen que todo quede bien tejido.»')}
    <h4>Otras propiedades importantes</h4>
    <ul>
      <li><strong>Cohesión:</strong> las ideas están unidas con conectores (y, pero, porque, además, por eso) y no se repiten palabras sin necesidad.</li>
      <li><strong>Adecuación:</strong> el lenguaje se adapta a quién lee y a la situación (no escribes igual un mensaje a un amigo que una solicitud al director).</li>
      <li><strong>Corrección:</strong> buena ortografía, acentuación y puntuación.</li>
    </ul>

    <h4>Ejemplo: de un texto confuso a uno claro</h4>
    <div class="ejemplo">
      <strong>Antes:</strong> «El río está sucio. El río tiene basura. La basura la tiran las personas. Las personas no piensan. Los peces se mueren.»<br><br>
      <strong>Después:</strong> «El río de la comunidad está sucio porque algunas personas tiran basura en él. Por eso los peces se están muriendo.»
    </div>
    <p>En el segundo texto se usaron conectores (<em>porque, por eso</em>) y se evitaron repeticiones: ganó <strong>cohesión</strong>.</p>

    <h4>Errores de concordancia frecuentes</h4>
    <ul>
      <li><s>La gente vinieron</s> → <strong>La gente vino</strong> («gente» es singular).</li>
      <li><s>Hubieron muchos problemas</s> → <strong>Hubo muchos problemas</strong> (el verbo «haber» en ese uso va en singular).</li>
      <li><s>Las casa bonitas</s> → <strong>Las casas bonitas</strong>.</li>
    </ul>

    ${ejercicioLengua('Corrige: «Los muchacho de la escuela fue a la feria y compró dulces.»', '«Los muchachos de la escuela fueron a la feria y compraron dulces.» El sujeto está en plural, así que los verbos también.')}
    ${ejercicioLengua('Mejora la cohesión: «Fui al mercado. Fui con mi mamá. Compramos frutas. Las frutas estaban caras.»', 'Por ejemplo: «Fui al mercado con mi mamá y compramos frutas, aunque estaban caras.»')}
  `,

  "lc1-3": `
    ${balamDice('«Cada párrafo es como una habitación de una casa: tiene una idea principal y todo lo que hay dentro se relaciona con ella.»')}
    <h4>Más tipos de párrafo</h4>
    <ul>
      <li><strong>Expositivo o informativo:</strong> explica un tema con datos. «El quetzal vive en los bosques de niebla de Chiapas y es un ave en peligro de extinción.»</li>
      <li><strong>Introductorio:</strong> presenta el tema de un texto.</li>
      <li><strong>De conclusión:</strong> cierra el texto y resume lo más importante.</li>
      <li><strong>Comparativo:</strong> muestra semejanzas y diferencias. «A diferencia de Tuxtla, San Cristóbal es fría y lluviosa.»</li>
    </ul>

    <h4>Partes de un párrafo</h4>
    <ol>
      <li><strong>Oración temática:</strong> expresa la idea principal (normalmente al inicio).</li>
      <li><strong>Oraciones de apoyo:</strong> explican, dan ejemplos o datos.</li>
      <li><strong>Oración de cierre:</strong> concluye o enlaza con el siguiente párrafo.</li>
    </ol>
    <div class="ejemplo">
      <strong>Oración temática:</strong> El pozol es una bebida tradicional de Chiapas.
      <strong>Apoyo:</strong> Se prepara con masa de maíz, a veces con cacao, y se disuelve en agua. Los campesinos lo llevan al trabajo porque quita la sed y el hambre.
      <strong>Cierre:</strong> Por eso el pozol es parte de la identidad chiapaneca.
    </div>

    <h4>✍️ Ejemplo práctico</h4>
    <p>Escribe tres párrafos sobre el mismo lugar de tu comunidad: uno <strong>descriptivo</strong> (cómo es), uno <strong>narrativo</strong> (algo que te pasó ahí) y uno <strong>argumentativo</strong> (por qué hay que cuidarlo). Subraya la oración temática de cada uno.</p>
  `,

  "lc1-4": `
    ${balamDice('«Para encontrar la idea principal pregúntate: si tuviera que contarle este texto a alguien en una sola oración, ¿qué le diría?»')}
    <h4>Cómo encontrar la idea principal</h4>
    <ol>
      <li>Lee el párrafo completo.</li>
      <li>Pregúntate: ¿de qué trata? (el tema) y ¿qué dice sobre eso? (la idea).</li>
      <li>Busca la oración que, si la quitas, hace que el párrafo pierda sentido.</li>
      <li>Si no está escrita, redáctala con tus palabras (idea principal implícita).</li>
    </ol>

    <h4>Ejemplo</h4>
    <div class="ejemplo">
      «La Selva Lacandona es una de las regiones con más biodiversidad de México. En ella viven jaguares, monos aulladores, guacamayas rojas y miles de especies de plantas. Además, sus ríos alimentan comunidades enteras.»<br><br>
      <strong>Tema:</strong> la Selva Lacandona.<br>
      <strong>Idea principal:</strong> es una de las regiones con más biodiversidad de México.<br>
      <strong>Ideas secundarias:</strong> los animales y plantas que viven ahí y la importancia de sus ríos.
    </div>

    <h4>Elementos paratextuales: ejemplos</h4>
    <ul>
      <li><strong>En un libro:</strong> portada, índice, contraportada, notas al pie.</li>
      <li><strong>En una noticia:</strong> titular, fotografía con pie de foto, fecha.</li>
      <li><strong>En una página web:</strong> menú, botones, imágenes, enlaces.</li>
    </ul>

    ${ejercicioLengua('Encuentra la idea principal: «El agua del río Grijalva se usa para generar electricidad. Sus presas, como la de Chicoasén, abastecen de energía a gran parte del país.»', 'El río Grijalva es importante para producir electricidad en México. La presa de Chicoasén es un ejemplo (idea secundaria).')}
  `,

  "lc1-5": `
    ${balamDice('«Antes de exponer, practica frente al espejo o con tu familia. ¡Los nervios bajan cuando conoces bien tu tema!»')}
    <h4>Estructura de una exposición</h4>
    <ol>
      <li><strong>Saludo y presentación:</strong> quién eres y de qué vas a hablar.</li>
      <li><strong>Introducción:</strong> despierta el interés con una pregunta, un dato curioso o una anécdota.</li>
      <li><strong>Desarrollo:</strong> explica dos o tres ideas principales con ejemplos.</li>
      <li><strong>Cierre:</strong> resume y da una conclusión.</li>
      <li><strong>Preguntas del público.</strong></li>
    </ol>

    <h4>Guion de ejemplo (2 minutos)</h4>
    <div class="ejemplo">
      «Buenos días. Soy Ana y hoy les hablaré del ámbar de Chiapas. ¿Sabían que dentro de algunas piedras de ámbar hay insectos de hace millones de años? (Muestra una imagen.) El ámbar es resina de árboles que se fosilizó. En Chiapas se extrae sobre todo en Simojovel… (desarrollo). En conclusión, el ámbar es un tesoro natural y un sustento para muchas familias artesanas. ¿Tienen alguna pregunta?»
    </div>

    <h4>Recursos de apoyo</h4>
    <ul>
      <li>Láminas o carteles con pocas palabras y letra grande.</li>
      <li>Objetos reales (una mazorca, una artesanía, una planta).</li>
      <li>Diapositivas con imágenes, no con párrafos largos.</li>
      <li>Fichas de trabajo con palabras clave para no perder el hilo.</li>
    </ul>

    <h4>Rúbrica para evaluar una exposición</h4>
    <table class="tabla-estudio">
      <tr><th>Aspecto</th><th>¿Lo logró?</th></tr>
      <tr><td>Habla con volumen y claridad</td><td>Sí / En proceso / No</td></tr>
      <tr><td>Mira al público</td><td>Sí / En proceso / No</td></tr>
      <tr><td>Explica con sus palabras (no lee)</td><td>Sí / En proceso / No</td></tr>
      <tr><td>Usa recursos de apoyo</td><td>Sí / En proceso / No</td></tr>
      <tr><td>Respeta el tiempo</td><td>Sí / En proceso / No</td></tr>
    </table>
  `,

  /* =================== LENGUA Y COMUNICACIÓN II =================== */

  "lc2-1": `
    <h4>Narrativas populares de ayer y de hoy</h4>
    <table class="tabla-estudio">
      <tr><th>Tipo</th><th>Características</th><th>Ejemplo</th></tr>
      <tr><td>Leyenda</td><td>Relato tradicional ubicado en un lugar real, con elementos sobrenaturales</td><td>La Tisigua, El Sombrerón</td></tr>
      <tr><td>Mito</td><td>Explica el origen del mundo o de la naturaleza con dioses</td><td>Los hombres de maíz del Popol Vuh</td></tr>
      <tr><td>Fábula</td><td>Personajes animales y una moraleja</td><td>El conejo y el coyote</td></tr>
      <tr><td>Corrido</td><td>Canción que narra un suceso</td><td>Corridos de la Revolución</td></tr>
      <tr><td>Creepypasta</td><td>Historia de terror que circula por internet</td><td>Relatos de casas embrujadas compartidos en redes</td></tr>
    </table>

    <h4>¿Por qué perduran?</h4>
    <ul>
      <li>Explican lo que da miedo o lo que no se entiende.</li>
      <li>Transmiten valores y advertencias («no salgas de noche al río»).</li>
      <li>Dan identidad a la comunidad: son parte de su memoria.</li>
    </ul>

    <h4>✍️ Ejemplo práctico</h4>
    <p>Organiza con tu grupo una <strong>noche de relatos</strong>: cada quien cuenta (sin leer) una historia que escuchó en su familia. Después escriban una antología del salón con todas las historias.</p>
  `,

  "lc2-2": `
    <h4>Guion de pódcast: ejemplo</h4>
    <div class="guion">
      <p class="acotacion">(Entra música de marimba. Baja el volumen.)</p>
      <p><strong>LOCUTORA:</strong> Bienvenidos a «Voces del Sumidero», el pódcast donde contamos las historias de nuestra tierra. Soy Karla.</p>
      <p><strong>LOCUTOR:</strong> Y yo soy Diego. Hoy les contaremos la leyenda de la Tisigua.</p>
      <p class="acotacion">(Sonido de río y grillos. Silencio de dos segundos.)</p>
      <p><strong>LOCUTORA:</strong> (Voz baja, misteriosa.) Dicen que en las pozas, cuando cae la noche…</p>
    </div>

    <h4>Pasos para hacer tu pódcast</h4>
    <ol>
      <li><strong>Planea:</strong> elige el tema, el nombre del pódcast y la duración (3 a 5 minutos).</li>
      <li><strong>Escribe el guion:</strong> con entrada, desarrollo y despedida, y acotaciones de sonido.</li>
      <li><strong>Ensaya:</strong> lee en voz alta, cuida el ritmo y la pronunciación.</li>
      <li><strong>Graba:</strong> en un lugar silencioso, con el celular a un palmo de la boca.</li>
      <li><strong>Edita:</strong> con aplicaciones gratuitas puedes cortar errores y agregar música libre de derechos.</li>
      <li><strong>Comparte:</strong> en el grupo, en la radio comunitaria o en redes.</li>
    </ol>

    <h4>Elementos paralingüísticos en audio</h4>
    <p>En un pódcast la voz lo es todo: el <strong>tono</strong> (alegre, misterioso), el <strong>ritmo</strong> (rápido para la acción, lento para el suspenso), el <strong>volumen</strong> y las <strong>pausas</strong> crean la emoción.</p>
  `,

  "lc2-3": `
    <h4>Cómo se construye un personaje</h4>
    <ul>
      <li><strong>Rasgos físicos:</strong> cómo es por fuera.</li>
      <li><strong>Rasgos psicológicos:</strong> cómo piensa y siente.</li>
      <li><strong>Deseo:</strong> qué quiere conseguir.</li>
      <li><strong>Obstáculo:</strong> qué se lo impide (el conflicto).</li>
    </ul>

    <h4>Personajes planos y redondos</h4>
    <table class="tabla-estudio">
      <tr><th>Plano</th><th>Redondo</th></tr>
      <tr><td>No cambia durante la historia</td><td>Evoluciona y aprende</td></tr>
      <tr><td>Se describe con pocas características</td><td>Es complejo, con dudas y contradicciones</td></tr>
      <tr><td>Ej.: el villano que siempre es malo</td><td>Ej.: el joven que empieza con miedo y termina siendo valiente</td></tr>
    </table>

    <h4>Tipos de conflicto</h4>
    <ul>
      <li><strong>Persona contra persona:</strong> dos personajes con intereses opuestos.</li>
      <li><strong>Persona contra naturaleza:</strong> una tormenta, una inundación del río.</li>
      <li><strong>Persona contra sociedad:</strong> luchar contra una injusticia.</li>
      <li><strong>Persona contra sí misma:</strong> vencer un miedo o tomar una decisión difícil.</li>
    </ul>

    <h4>✍️ Ejemplo práctico: ficha de personaje</h4>
    <p>Inventa un personaje para un cuento ambientado en Chiapas. Llena su ficha: nombre, edad, comunidad, rasgos físicos, rasgos psicológicos, qué desea y qué se lo impide. Luego escribe la primera escena de su historia.</p>
  `,

  /* =================== LENGUA Y COMUNICACIÓN III =================== */

  "lc3-1": `
    <h4>Línea del tiempo de los movimientos</h4>
    <ul class="linea-tiempo">
      <li><strong>Romanticismo (finales del siglo XVIII – siglo XIX):</strong> sentimientos, libertad, naturaleza y nacionalismo. Autores: Gustavo Adolfo Bécquer, Manuel Acuña.</li>
      <li><strong>Realismo (segunda mitad del siglo XIX):</strong> retrata la sociedad tal como es. Autores: Benito Pérez Galdós, Federico Gamboa.</li>
      <li><strong>Modernismo (finales del siglo XIX):</strong> nace en América Latina; busca la belleza, la musicalidad y lo exótico. Autores: Rubén Darío, Amado Nervo.</li>
      <li><strong>Vanguardias (inicios del siglo XX):</strong> rompen las reglas y experimentan con la forma. En México, el Estridentismo.</li>
      <li><strong>Realismo mágico (siglo XX):</strong> lo extraordinario aparece como algo normal. Autores: Gabriel García Márquez, Juan Rulfo (<em>Pedro Páramo</em>, 1955).</li>
    </ul>

    <h4>Cómo reconocer cada movimiento</h4>
    <table class="tabla-estudio">
      <tr><th>Si el texto…</th><th>Probablemente es…</th></tr>
      <tr><td>Expresa sentimientos intensos, amor imposible, paisajes nocturnos</td><td>Romanticismo</td></tr>
      <tr><td>Describe con detalle la pobreza o la vida de una ciudad</td><td>Realismo</td></tr>
      <tr><td>Juega con la musicalidad y palabras exóticas</td><td>Modernismo</td></tr>
      <tr><td>Cuenta que los muertos hablan y nadie se sorprende</td><td>Realismo mágico</td></tr>
    </table>

    <div class="ejemplo">
      <strong>Conexión con Chiapas:</strong> en muchas comunidades se cuenta que los nahuales (personas que se transforman en animales) caminan de noche. Esta forma de ver lo sobrenatural como parte de la vida cotidiana es muy cercana al realismo mágico.
    </div>

    <h4>✍️ Ejemplo práctico</h4>
    <p>Escribe un párrafo sobre un día normal en tu comunidad y agrégale un elemento mágico que los personajes vean como algo natural (por ejemplo, la lluvia que cae hacia arriba en la fiesta del pueblo).</p>
  `,

  "lc3-2": `
    <h4>Subgéneros de cada género</h4>
    <table class="tabla-estudio">
      <tr><th>Género</th><th>Subgéneros</th></tr>
      <tr><td>Narrativo</td><td>Novela, cuento, leyenda, mito, fábula, microrrelato</td></tr>
      <tr><td>Lírico</td><td>Oda (alabanza), elegía (tristeza por una pérdida), canción, soneto</td></tr>
      <tr><td>Dramático</td><td>Tragedia (final triste), comedia (final feliz y humor), drama, farsa</td></tr>
      <tr><td>Ensayo</td><td>Literario, argumentativo, científico</td></tr>
    </table>

    <h4>Un mismo tema en cuatro géneros</h4>
    <p>Tema: <strong>la migración</strong>, muy presente en la frontera sur de Chiapas.</p>
    <ul>
      <li><strong>Narrativo:</strong> un cuento sobre un joven que cruza el río Suchiate.</li>
      <li><strong>Lírico:</strong> un poema sobre la nostalgia por la tierra que se deja.</li>
      <li><strong>Dramático:</strong> una escena en la que una familia despide a uno de sus hijos.</li>
      <li><strong>Ensayo:</strong> un texto que reflexiona sobre los derechos de las personas migrantes.</li>
    </ul>

    ${ejercicioLengua('¿A qué género pertenece un texto escrito para que lo representen actores, con diálogos y acotaciones?', 'Al género <strong>dramático</strong> (teatro).')}
    ${ejercicioLengua('Un texto en verso que expresa la tristeza por la muerte de alguien es una…', '<strong>Elegía</strong>, subgénero de la lírica.')}
  `,

  "lc3-3": `
    <h4>Más figuras retóricas</h4>
    <table class="tabla-estudio">
      <tr><th>Figura</th><th>¿Qué hace?</th><th>Ejemplo</th></tr>
      <tr><td>Símil o comparación</td><td>Compara usando «como» o «parece»</td><td>«Tu risa es como el agua del río.»</td></tr>
      <tr><td>Anáfora</td><td>Repite palabras al inicio de los versos</td><td>«Verde que te quiero verde. / Verde viento. Verdes ramas.» (García Lorca)</td></tr>
      <tr><td>Aliteración</td><td>Repite sonidos</td><td>«El ruido con que rueda la ronca tempestad.» (Zorrilla)</td></tr>
      <tr><td>Antítesis</td><td>Contrapone ideas opuestas</td><td>«Es tan corto el amor y es tan largo el olvido.» (Neruda)</td></tr>
      <tr><td>Onomatopeya</td><td>Imita sonidos</td><td>«El tic tac del reloj no me deja dormir.»</td></tr>
      <tr><td>Epíteto</td><td>Adjetivo que destaca una cualidad propia</td><td>«La blanca nieve», «el verde pasto».</td></tr>
    </table>

    <h4>Figuras retóricas en la vida diaria</h4>
    <p>No solo están en la poesía. Las usamos todo el tiempo y en la publicidad:</p>
    <ul>
      <li>«Me muero de hambre» → hipérbole.</li>
      <li>«El café de Chiapas: oro negro de la montaña» → metáfora (en un anuncio).</li>
      <li>«Las montañas nos abrazan» → personificación.</li>
    </ul>

    ${ejercicioLengua('¿Qué figura hay en «La selva respira despacio»?', '<strong>Personificación</strong>: se le da a la selva una acción humana (respirar).')}
    ${ejercicioLengua('¿Qué figura hay en «Esperé una eternidad en la fila de las tortillas»?', '<strong>Hipérbole</strong>: es una exageración.')}
    ${ejercicioLengua('¿Qué figura hay en «Sus ojos son dos cenotes profundos»?', '<strong>Metáfora</strong>: identifica los ojos con cenotes, sin usar «como».')}
  `,

  "lc3-4": `
    <h4>Ejemplo de reseña breve</h4>
    <div class="ejemplo">
      <strong>Ficha técnica:</strong> <em>Balún Canán</em>, Rosario Castellanos, novela, 1957.<br><br>
      <strong>Resumen:</strong> La historia se desarrolla en Comitán en los años treinta. Una niña narra la vida de su familia, dueña de una finca, mientras el gobierno impulsa el reparto de tierras y las relaciones entre patrones e indígenas se vuelven tensas.<br><br>
      <strong>Crítica:</strong> La novela destaca porque muestra la desigualdad desde los ojos de una niña, lo que la hace sencilla de leer pero profunda. Su lenguaje es poético y está lleno de imágenes de Chiapas. A algunos lectores puede costarles el cambio de narrador en la segunda parte.<br><br>
      <strong>Conclusión:</strong> Es una lectura recomendable para entender la historia de Chiapas y reflexionar sobre la justicia.
    </div>

    <h4>Frases útiles para opinar con fundamento</h4>
    <ul>
      <li>«La obra destaca por…»</li>
      <li>«Un acierto del autor es…»</li>
      <li>«Sin embargo, considero que…»</li>
      <li>«Esto se observa cuando…» (para dar un ejemplo de la obra)</li>
      <li>«La recomiendo a quienes…»</li>
    </ul>

    <h4>Opinión fundamentada vs. opinión sin fundamento</h4>
    <table class="tabla-estudio">
      <tr><th>Sin fundamento</th><th>Con fundamento</th></tr>
      <tr><td>«La película está aburrida.»</td><td>«La película pierde ritmo a la mitad, porque repite escenas que no aportan a la historia.»</td></tr>
      <tr><td>«El libro está bonito.»</td><td>«El libro me atrapó porque sus descripciones de la selva me hicieron sentir que estaba ahí.»</td></tr>
    </table>

    <h4>✍️ Ejemplo práctico</h4>
    <p>Escribe la reseña de una película, serie, canción o libro que te guste. Usa las cuatro partes, al menos tres frases para opinar con fundamento y no cuentes el final.</p>
  `
};
