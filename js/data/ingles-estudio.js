/* ==========================================================
   DATA - Inglés · Material de estudio ampliado
   Complementa los temas originales de INGLES (in*) sin
   modificarlos: se muestra en "Estudia más" bajo cada tema.
========================================================== */

// Diagrama con pie de figura
const inglesDiagrama = (imagen, alt, pie) => `
  <figure class="diagrama-quimica">
    <img src="images/ingles/${imagen}.svg" alt="${alt}" loading="lazy">
    <figcaption>${pie}</figcaption>
  </figure>`;

// Ejercicio con la respuesta oculta
const inglesEjercicio = (pregunta, respuesta) => `
  <details class="ejercicio-estudio">
    <summary>${pregunta}</summary>
    <div>${respuesta}</div>
  </details>`;

const INGLES_ESTUDIO = {

  // ===================== INGLÉS I =====================
  "in1-1": `
    <h4>Contracciones</h4>
    <table class="tabla-estudio">
      <tr><th>Forma completa</th><th>Contracción</th><th>Negativa</th></tr>
      <tr><td>I am</td><td>I'm</td><td>I'm not</td></tr>
      <tr><td>You are</td><td>You're</td><td>You aren't</td></tr>
      <tr><td>He / She / It is</td><td>He's / She's / It's</td><td>He isn't</td></tr>
      <tr><td>We are</td><td>We're</td><td>We aren't</td></tr>
      <tr><td>They are</td><td>They're</td><td>They aren't</td></tr>
    </table>

    <h4>¿Para qué se usa to be?</h4>
    <table class="tabla-estudio">
      <tr><th>Uso</th><th>Ejemplo</th></tr>
      <tr><td>Nombre y profesión</td><td>I'm Lucía. I'm a student.</td></tr>
      <tr><td>Edad</td><td>I'm 16 years old.</td></tr>
      <tr><td>Origen</td><td>We're from Chiapas.</td></tr>
      <tr><td>Ubicación</td><td>The school is in Tuxtla.</td></tr>
      <tr><td>Emociones</td><td>She's happy today.</td></tr>
      <tr><td>Clima</td><td>It's hot in Tapachula.</td></tr>
    </table>
    <div class="nota-estudio alerta">
      <strong>⚠️ Error común de hispanohablantes:</strong> «I have 16 years» es incorrecto. En inglés la edad se expresa con to be: <strong>I am 16 (years old)</strong>.
    </div>

    <h4>Practica</h4>
    ${inglesEjercicio('Corrige: «My brother have 12 years.»', 'My brother is 12 (years old).')}
    ${inglesEjercicio('Escribe la contracción de «They are not from Oaxaca».', 'They aren\'t from Oaxaca. (También: They\'re not from Oaxaca.)')}
    ${inglesEjercicio('Traduce: «Estamos en Palenque y hace calor».', 'We are in Palenque and it is hot.')}
  `,

  "in1-2": `
    <h4>Formal e informal</h4>
    <table class="tabla-estudio">
      <tr><th>Situación</th><th>Formal</th><th>Informal</th></tr>
      <tr><td>Saludar</td><td>Good morning, Mr. Gómez.</td><td>Hi! / Hey!</td></tr>
      <tr><td>Preguntar cómo está</td><td>How are you?</td><td>How's it going? / What's up?</td></tr>
      <tr><td>Despedirse</td><td>Goodbye. Have a nice day.</td><td>Bye! / See you!</td></tr>
    </table>

    <h4>Presentar a otras personas</h4>
    <div class="formula">
This is my friend Ana. She's from Comitán. — Nice to meet you, Ana!<br>
Let me introduce my teacher, Ms. Pérez.
    </div>

    <h4>Países y nacionalidades</h4>
    <table class="tabla-estudio">
      <tr><th>País</th><th>Nacionalidad</th><th>País</th><th>Nacionalidad</th></tr>
      <tr><td>Mexico</td><td>Mexican</td><td>Guatemala</td><td>Guatemalan</td></tr>
      <tr><td>The United States</td><td>American</td><td>Canada</td><td>Canadian</td></tr>
      <tr><td>Germany</td><td>German</td><td>France</td><td>French</td></tr>
      <tr><td>Spain</td><td>Spanish</td><td>Japan</td><td>Japanese</td></tr>
    </table>
    <p>En inglés los países y nacionalidades siempre llevan <strong>mayúscula</strong>.</p>

    <h4>Números</h4>
    <p>1 one · 2 two · 3 three · 11 eleven · 12 twelve · 13 thirteen · 20 twenty · 30 thirty · 40 forty · 50 fifty · 100 one hundred.<br>
    ⚠️ Fíjate en el acento: thir<strong>TEEN</strong> (13) y <strong>THIR</strong>ty (30).</p>

    <h4>Practica</h4>
    ${inglesEjercicio('Presenta a un turista de Canadá llamado Tom.', 'This is Tom. He is Canadian. He is from Canada.')}
    ${inglesEjercicio('¿Cómo saludas formalmente a la directora a las 4 p. m.?', 'Good afternoon, Principal. / Good afternoon, Ms. (apellido).')}
  `,

  "in1-3": `
    <h4>A o an: depende del sonido, no de la letra</h4>
    <table class="tabla-estudio">
      <tr><th>a + sonido de consonante</th><th>an + sonido de vocal</th></tr>
      <tr><td>a book · a mango · a university (suena «iu»)</td><td>an apple · an orange · an hour (la h no suena)</td></tr>
    </table>

    <h4>¿Cuándo usar the?</h4>
    <ul>
      <li>Algo específico o ya mencionado: <em>I have a dog. <strong>The</strong> dog is black.</em></li>
      <li>Algo único: <em>the sun, the moon, the Sumidero Canyon</em>.</li>
      <li>⚠️ No se usa para hablar en general: <em>I like coffee</em> (no «I like the coffee» si hablas del café en general).</li>
    </ul>

    <h4>Pronombres de sujeto y de objeto</h4>
    <table class="tabla-estudio">
      <tr><th>Sujeto</th><th>Objeto</th><th>Ejemplo</th></tr>
      <tr><td>I</td><td>me</td><td>Call me, please.</td></tr>
      <tr><td>he</td><td>him</td><td>I know him.</td></tr>
      <tr><td>she</td><td>her</td><td>We help her.</td></tr>
      <tr><td>we</td><td>us</td><td>They invited us.</td></tr>
      <tr><td>they</td><td>them</td><td>I love them.</td></tr>
    </table>

    <h4>Practica</h4>
    ${inglesEjercicio('Completa con a o an: ___ egg, ___ hour, ___ house, ___ umbrella.', 'an egg, an hour, a house, an umbrella.')}
    ${inglesEjercicio('Cambia el sustantivo por un pronombre: «I see María and Luis.»', 'I see them.')}
  `,

  // ===================== INGLÉS II =====================
  "in2-1": `
    <h4>Más reglas de plurales</h4>
    <table class="tabla-estudio">
      <tr><th>Regla</th><th>Ejemplos</th></tr>
      <tr><td>consonante + y → -ies</td><td>city → cities, baby → babies</td></tr>
      <tr><td>vocal + y → + s</td><td>day → days, toy → toys</td></tr>
      <tr><td>-f / -fe → -ves</td><td>knife → knives, leaf → leaves</td></tr>
      <tr><td>algunas palabras en -o → + es</td><td>mango → mangoes, tomato → tomatoes, potato → potatoes</td></tr>
    </table>

    <h4>Plurales irregulares</h4>
    <table class="tabla-estudio">
      <tr><th>Singular</th><th>Plural</th><th>Singular</th><th>Plural</th></tr>
      <tr><td>man</td><td>men</td><td>child</td><td>children</td></tr>
      <tr><td>woman</td><td>women</td><td>person</td><td>people</td></tr>
      <tr><td>tooth</td><td>teeth</td><td>foot</td><td>feet</td></tr>
      <tr><td>mouse</td><td>mice</td><td>fish</td><td>fish</td></tr>
    </table>

    <h4>Demostrativos en conversación</h4>
    <div class="formula">
How much is this? — It's 30 pesos.<br>
How much are those? — They're 50 pesos each.<br>
Is that your bag? — No, this is my bag.
    </div>

    <h4>Practica</h4>
    ${inglesEjercicio('Escribe el plural: child, city, tomato, knife, person.', 'children, cities, tomatoes, knives, people.')}
    ${inglesEjercicio('Corrige: «These womans are teachers.»', 'These women are teachers.')}
  `,

  "in2-2": `
    <h4>Familia extendida</h4>
    <table class="tabla-estudio">
      <tr><th>Inglés</th><th>Español</th><th>Inglés</th><th>Español</th></tr>
      <tr><td>grandparents</td><td>abuelos</td><td>grandson / granddaughter</td><td>nieto / nieta</td></tr>
      <tr><td>uncle / aunt</td><td>tío / tía</td><td>nephew / niece</td><td>sobrino / sobrina</td></tr>
      <tr><td>cousin</td><td>primo / prima</td><td>parents</td><td>papás (padre y madre)</td></tr>
      <tr><td>stepmother</td><td>madrastra</td><td>half-brother</td><td>medio hermano</td></tr>
      <tr><td>godfather / godmother</td><td>padrino / madrina</td><td>in-laws</td><td>familia política</td></tr>
    </table>
    <p>⚠️ <em>Parents</em> significa padre y madre, no «parientes» (eso es <em>relatives</em>).</p>

    <h4>Posesivos y genitivo juntos</h4>
    <div class="formula">My mother's sister is my aunt. · Her husband's name is Pedro. · Their children are my cousins.</div>

    <div class="nota-estudio">
      <strong>🌎 Culturema:</strong> el <em>compadrazgo</em> (compadres, padrinos de bautizo o de XV años) es muy importante en Chiapas y no tiene un equivalente exacto en inglés. Puedes explicarlo: «My godparents are like part of my family; they help me in important moments.»
    </div>
    <p>Todas las familias son distintas: con abuelos, con un solo papá o mamá, con tíos que crían a sus sobrinos. Describe la tuya con respeto y sin comparar.</p>

    <h4>Practica</h4>
    ${inglesEjercicio('Completa: «My father\'s brother is my ___.»', 'uncle.')}
    ${inglesEjercicio('Traduce: «Su casa (de ellos) está cerca de la de mis abuelos».', 'Their house is near my grandparents\' house.')}
  `,

  // ===================== INGLÉS III =====================
  "in3-1": `
    <h4>Reglas de ortografía del pasado regular</h4>
    <table class="tabla-estudio">
      <tr><th>Regla</th><th>Ejemplos</th></tr>
      <tr><td>La mayoría: + ed</td><td>work → worked, visit → visited</td></tr>
      <tr><td>Termina en -e: + d</td><td>dance → danced, live → lived</td></tr>
      <tr><td>Consonante + y: -y → -ied</td><td>study → studied, try → tried</td></tr>
      <tr><td>Consonante-vocal-consonante corta: dobla + ed</td><td>stop → stopped, plan → planned</td></tr>
    </table>

    <h4>Pronunciación de -ed</h4>
    <p>/t/ walked, watched · /d/ played, cleaned · /ɪd/ visited, wanted (solo después de t o d).</p>

    <h4>Expresiones de tiempo pasado</h4>
    <p>yesterday · last night · last week · last year · two days ago · in 2024 · when I was a child</p>

    <h4>Negativa y pregunta</h4>
    <div class="formula">
I visited the museum. → I didn't visit the museum. → Did you visit the museum?
    </div>

    <h4>Practica</h4>
    ${inglesEjercicio('Escribe el pasado: study, stop, dance, play, plan.', 'studied, stopped, danced, played, planned.')}
    ${inglesEjercicio('Haz la pregunta: «They cleaned the river last Saturday.»', 'Did they clean the river last Saturday?')}
  `,

  "in3-2": `
    <h4>Tabla de verbos irregulares frecuentes</h4>
    <table class="tabla-estudio">
      <tr><th>Base</th><th>Pasado</th><th>Participio</th><th>Español</th></tr>
      <tr><td>be</td><td>was / were</td><td>been</td><td>ser, estar</td></tr>
      <tr><td>begin</td><td>began</td><td>begun</td><td>empezar</td></tr>
      <tr><td>bring</td><td>brought</td><td>brought</td><td>traer</td></tr>
      <tr><td>come</td><td>came</td><td>come</td><td>venir</td></tr>
      <tr><td>do</td><td>did</td><td>done</td><td>hacer</td></tr>
      <tr><td>drink</td><td>drank</td><td>drunk</td><td>beber</td></tr>
      <tr><td>find</td><td>found</td><td>found</td><td>encontrar</td></tr>
      <tr><td>get</td><td>got</td><td>got / gotten</td><td>obtener</td></tr>
      <tr><td>give</td><td>gave</td><td>given</td><td>dar</td></tr>
      <tr><td>know</td><td>knew</td><td>known</td><td>saber, conocer</td></tr>
      <tr><td>make</td><td>made</td><td>made</td><td>hacer, fabricar</td></tr>
      <tr><td>put</td><td>put</td><td>put</td><td>poner</td></tr>
      <tr><td>say</td><td>said</td><td>said</td><td>decir</td></tr>
      <tr><td>speak</td><td>spoke</td><td>spoken</td><td>hablar</td></tr>
      <tr><td>take</td><td>took</td><td>taken</td><td>tomar, llevar</td></tr>
      <tr><td>write</td><td>wrote</td><td>written</td><td>escribir</td></tr>
    </table>

    <h4>Trucos para memorizarlos</h4>
    <ul>
      <li><strong>Iguales en las tres formas:</strong> cut, put, let, hit, cost.</li>
      <li><strong>Cambio de vocal i → a → u:</strong> sing-sang-sung, drink-drank-drunk, swim-swam-swum.</li>
      <li><strong>Terminan en -ought / -aught:</strong> buy-bought, think-thought, bring-brought, teach-taught.</li>
      <li>Haz tarjetas y juega lotería de verbos con tu grupo.</li>
    </ul>

    <h4>Un platillo de Chiapas para tu relato</h4>
    <p>En el ejemplo del tema aparece la cochinita pibil, que es de Yucatán. Practica también con platillos chiapanecos: «I ate tamales de chipilín, sopa de pan and pepita con tasajo».</p>

    <h4>Practica</h4>
    ${inglesEjercicio('Completa en pasado: «Yesterday I (write) a letter and (give) it to my teacher.»', 'Yesterday I wrote a letter and gave it to my teacher.')}
    ${inglesEjercicio('¿Cuál es el participio de speak, take y know?', 'spoken, taken, known.')}
  `,

  // ===================== INGLÉS IV =====================
  "in4-1": `
    ${inglesDiagrama('linea-tiempo-verbos', 'Línea del tiempo de los tiempos verbales', 'Going to se usa para planes ya decididos; will, para decisiones del momento, promesas y predicciones de opinión.')}

    <h4>Will o going to</h4>
    <table class="tabla-estudio">
      <tr><th>Uso</th><th>Will</th><th>Going to</th></tr>
      <tr><td>Planes</td><td>—</td><td>I'm going to study nursing at the university.</td></tr>
      <tr><td>Decisión en el momento</td><td>The phone is ringing. I'll answer it.</td><td>—</td></tr>
      <tr><td>Promesas y ofrecimientos</td><td>I'll help you with your homework.</td><td>—</td></tr>
      <tr><td>Predicción por opinión</td><td>I think Chiapas will win the game.</td><td>—</td></tr>
      <tr><td>Predicción con evidencia</td><td>—</td><td>Look at those clouds! It's going to rain.</td></tr>
    </table>

    <h4>Negativas y preguntas</h4>
    <div class="formula">
I won't (will not) be late. · Will you come? — Yes, I will.<br>
She isn't going to travel. · Are you going to apply? — Yes, I am.
    </div>

    <h4>Practica</h4>
    ${inglesEjercicio('¿Will o going to? «I have the tickets. We ___ visit Palenque on Saturday.»', 'We are going to visit Palenque (es un plan ya decidido).')}
    ${inglesEjercicio('¿Will o going to? «You forgot your pen? Don\'t worry, I ___ lend you one.»', 'I will (I\'ll) lend you one (decisión en el momento).')}
  `,

  "in4-2": `
    <h4>Más formas de dar consejo</h4>
    <table class="tabla-estudio">
      <tr><th>Estructura</th><th>Ejemplo</th></tr>
      <tr><td>You should / shouldn't + verbo</td><td>You should sleep more.</td></tr>
      <tr><td>Why don't you + verbo?</td><td>Why don't you talk to your teacher?</td></tr>
      <tr><td>If I were you, I would…</td><td>If I were you, I would ask for help.</td></tr>
      <tr><td>Pedir consejo</td><td>What should I do? · Do you have any advice?</td></tr>
    </table>
    <p>⚠️ <em>Advice</em> es incontable: «some advice» o «a piece of advice» (no «an advice»).</p>

    <h4>Escuchar con empatía antes de aconsejar</h4>
    <p>I'm sorry to hear that. · That sounds difficult. · Don't worry, it will be OK. · How can I help?</p>

    <h4>Situaciones frecuentes</h4>
    <table class="tabla-estudio">
      <tr><th>Problem</th><th>Advice</th></tr>
      <tr><td>I have a headache.</td><td>You should drink water and rest.</td></tr>
      <tr><td>I failed my math exam.</td><td>You should ask for tutoring. You shouldn't give up.</td></tr>
      <tr><td>I argued with my friend.</td><td>Why don't you talk to her calmly?</td></tr>
      <tr><td>I'm going to the jungle.</td><td>You should use insect repellent.</td></tr>
    </table>

    <h4>Practica</h4>
    ${inglesEjercicio('Da dos consejos a un amigo que no puede dormir.', 'You should turn off your phone early. You shouldn\'t drink coffee at night.')}
  `,

  // ===================== INGLÉS V =====================
  "in5-1": `
    ${inglesDiagrama('comparativos-altitud', 'Altitud de tres ciudades de Chiapas', 'Comparativo para dos elementos (higher than) y superlativo para tres o más (the highest).')}

    <h4>Igualdad y desigualdad</h4>
    <div class="formula">
as + adjetivo + as: Comitán is as beautiful as San Cristóbal.<br>
not as + adjetivo + as: Tuxtla is not as cold as San Cristóbal.
    </div>

    <h4>Superlativos con datos reales de Chiapas</h4>
    <ul>
      <li>The Tacaná is <strong>the highest</strong> volcano in Chiapas (about 4,060 m).</li>
      <li>The Usumacinta is one of <strong>the largest</strong> rivers in Mexico.</li>
      <li>Tuxtla Gutiérrez is <strong>the biggest</strong> city in Chiapas.</li>
    </ul>

    <h4>Practica</h4>
    ${inglesEjercicio('Escribe el comparativo y el superlativo de: hot, famous, good, busy.', 'hotter / the hottest; more famous / the most famous; better / the best; busier / the busiest.')}
    ${inglesEjercicio('Compara con not as… as: el autobús (lento) y el avión (rápido).', 'The bus is not as fast as the plane.')}
  `,

  "in5-2": `
    ${inglesDiagrama('linea-tiempo-verbos', 'Línea del tiempo de los tiempos verbales', 'El presente perfecto une el pasado con el ahora: experiencias, logros y acciones que continúan.')}

    <h4>For y since</h4>
    <table class="tabla-estudio">
      <tr><th>for + periodo</th><th>since + punto de inicio</th></tr>
      <tr><td>I have studied English <strong>for</strong> three years.</td><td>I have studied English <strong>since</strong> 2023.</td></tr>
      <tr><td>She has lived here <strong>for</strong> a long time.</td><td>She has lived here <strong>since</strong> she was a child.</td></tr>
    </table>

    <h4>Already, yet y just</h4>
    <ul>
      <li><strong>already</strong> (ya, en afirmativa): I have already finished my project.</li>
      <li><strong>yet</strong> (todavía / ya, en negativa y pregunta): I haven't finished yet. Have you finished yet?</li>
      <li><strong>just</strong> (acabar de): She has just arrived.</li>
    </ul>

    <h4>Logros en tu currículum</h4>
    <div class="formula">I have participated in the science fair. · I have worked as a volunteer. · I have won a dance contest.</div>

    <h4>Practica</h4>
    ${inglesEjercicio('¿For o since? «We have lived in Tapachula ___ 2019.»', 'since 2019.')}
    ${inglesEjercicio('Escribe tres logros tuyos con presente perfecto.', 'Por ejemplo: I have learned to play the marimba. I have visited five municipalities. I have finished my first semester at COBACH.')}
  `
};
