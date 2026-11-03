/* ==========================================================
   DATA - Ciencias Naturales · Material de estudio ampliado
   Se muestra en "Estudia más" de los temas que lo indican con
   estudio: "ciencias:<id>" (js/data/ciencias.js).
========================================================== */

// Diagrama con pie de figura
const cienDiagrama = (imagen, alt, pie) => `
  <figure class="diagrama-quimica">
    <img src="images/ciencias/${imagen}.svg" alt="${alt}" loading="lazy">
    <figcaption>${pie}</figcaption>
  </figure>`;

// Ejercicio con la respuesta oculta
const cienEjercicio = (pregunta, respuesta) => `
  <details class="ejercicio-estudio">
    <summary>${pregunta}</summary>
    <div>${respuesta}</div>
  </details>`;

const CIENCIAS_ESTUDIO = {

  /* =================== CNEyT I =================== */

  "cn1-1": `
    <h4>La ciencia es creativa, social y colectiva</h4>
    <ul>
      <li><strong>Creativa:</strong> hacer buenas preguntas y diseñar experimentos requiere imaginación.</li>
      <li><strong>Social:</strong> responde a necesidades de las personas (curar enfermedades, producir alimentos).</li>
      <li><strong>Colectiva:</strong> casi ningún descubrimiento es de una sola persona; los científicos comparten, revisan y corrigen el trabajo de otros.</li>
    </ul>

    <h4>Conocimiento científico y conocimiento tradicional</h4>
    <p>Los pueblos originarios han desarrollado durante siglos un <strong>conocimiento tradicional</strong> basado en la observación cuidadosa de la naturaleza:</p>
    <ul>
      <li><strong>La milpa:</strong> sembrar juntos maíz, frijol y calabaza. El frijol aporta nitrógeno al suelo, el maíz le sirve de soporte y la calabaza conserva la humedad y frena la maleza. Hoy la ciencia lo estudia como un sistema agroecológico muy eficiente.</li>
      <li><strong>El calendario agrícola</strong> basado en la observación de las lluvias y los astros.</li>
      <li><strong>La nixtamalización</strong> del maíz, que la química moderna explica (más calcio y niacina).</li>
      <li><strong>La medicina tradicional</strong> con plantas, que hoy se investiga en laboratorios.</li>
    </ul>
    <p>El conocimiento <strong>empírico</strong> nace de la experiencia; el <strong>científico</strong> lo comprueba con un método sistemático. Ambos se pueden complementar con respeto.</p>

    <h4>La ciencia en México</h4>
    <ul class="linea-tiempo">
      <li><strong>Mayas:</strong> usaron el concepto del cero y crearon calendarios y registros astronómicos muy precisos.</li>
      <li><strong>1801 · Andrés Manuel del Río:</strong> descubrió el vanadio.</li>
      <li><strong>1951 · Luis E. Miramontes:</strong> sintetizó la noretisterona.</li>
      <li><strong>1995 · Mario Molina:</strong> Premio Nobel de Química por sus estudios de la capa de ozono.</li>
      <li><strong>Hoy:</strong> centros de investigación como El Colegio de la Frontera Sur (ECOSUR), con sede en San Cristóbal de las Casas, estudian la biodiversidad y la agricultura del sur de México.</li>
    </ul>

    ${cienEjercicio('¿Por qué se dice que la milpa es un sistema y no solo un cultivo?', 'Porque sus plantas interactúan y se benefician entre sí: el frijol fija nitrógeno, el maíz da soporte y la calabaza protege el suelo. El resultado es mejor que sembrar cada una por separado.')}
  `,

  "cn1-2": `
    <h4>Materia, cuerpo, masa y peso</h4>
    <ul>
      <li><strong>Materia:</strong> todo lo que tiene masa y ocupa un lugar en el espacio.</li>
      <li><strong>Cuerpo:</strong> una porción limitada de materia con forma definida (una piedra, una mazorca).</li>
      <li><strong>Masa:</strong> la cantidad de materia de un cuerpo; se mide en kilogramos (kg) con una balanza y <strong>no cambia</strong> de lugar a lugar.</li>
      <li><strong>Peso:</strong> la fuerza con que la gravedad atrae un cuerpo; se mide en newtons (N) con un dinamómetro: W = m · g. En la Luna pesarías menos, pero tu masa sería la misma.</li>
    </ul>

    <h4>Cálculo de volumen</h4>
    <div class="formula">Cubo: V = L³ &nbsp;&nbsp;|&nbsp;&nbsp; Prisma rectangular: V = largo × ancho × alto &nbsp;&nbsp;|&nbsp;&nbsp; Cilindro: V = π · r² · h</div>
    <p>Para un <strong>cuerpo irregular</strong> (una piedra) se usa el desplazamiento de agua: el volumen que sube el agua en la probeta es el volumen de la piedra.</p>

    <h4>Densidad</h4>
    <div class="formula">ρ = m / V &nbsp;&nbsp;(g/cm³ o kg/m³)</div>
    <div class="ejemplo">
      <strong>Ejemplo resuelto:</strong> un bloque de madera mide 10 × 5 × 4 cm y tiene una masa de 120 g.<br>
      V = 10 × 5 × 4 = 200 cm³ → ρ = 120 / 200 = <strong>0.6 g/cm³</strong>. Como es menor que la del agua (1 g/cm³), <strong>flota</strong>.
    </div>

    ${cienEjercicio('Una persona tiene una masa de 50 kg. ¿Cuál es su peso en la Tierra (g = 9.8 m/s²)?', 'W = 50 × 9.8 = <strong>490 N</strong>. Su masa sigue siendo 50 kg.')}
    ${cienEjercicio('Un cilindro tiene radio de 2 cm y altura de 10 cm. ¿Cuál es su volumen?', 'V = 3.14 × 2² × 10 = <strong>125.6 cm³</strong>.')}
  `,

  "cn1-4": `
    <h4>Propiedades físicas y químicas</h4>
    <ul>
      <li><strong>Físicas:</strong> se observan sin cambiar la sustancia: color, olor, densidad, punto de fusión y de ebullición, dureza, conductividad.</li>
      <li><strong>Químicas:</strong> se observan cuando la sustancia se transforma en otra: combustibilidad (la leña arde), oxidación (el hierro se oxida), reactividad con ácidos.</li>
    </ul>

    <h4>Concentración de las disoluciones</h4>
    <table class="tabla-estudio">
      <tr><th>Tipo</th><th>Fórmula</th><th>Ejemplo</th></tr>
      <tr><td>Masa-masa (% m/m)</td><td>(g soluto / g disolución) × 100</td><td>20 g de azúcar en 180 g de agua → 20/200 × 100 = 10 %</td></tr>
      <tr><td>Masa-volumen (% m/v)</td><td>(g soluto / mL disolución) × 100</td><td>9 g de sal en 1000 mL → 0.9 % (suero fisiológico)</td></tr>
      <tr><td>Volumen-volumen (% v/v)</td><td>(mL soluto / mL disolución) × 100</td><td>Alcohol de farmacia al 70 %: 70 mL de alcohol en 100 mL</td></tr>
      <tr><td>Partes por millón (ppm)</td><td>mg de soluto / L de disolución</td><td>2 mg de nitratos en 1 L de agua = 2 ppm</td></tr>
    </table>

    ${cienEjercicio('¿Cuántos mL de alcohol puro hay en 500 mL de alcohol al 70 % v/v?', '500 × 0.70 = <strong>350 mL</strong> de alcohol; el resto es agua.')}
    ${cienEjercicio('Se disuelven 15 g de sal en 285 g de agua. ¿Cuál es el % m/m?', 'Masa de la disolución = 15 + 285 = 300 g → 15/300 × 100 = <strong>5 %</strong>.')}
  `,

  /* =================== CNEyT II =================== */

  "cn2-3": `
    <h4>La conservación de la energía en acción</h4>
    <div class="ejemplo">
      <strong>Ejemplo resuelto — la resbaladilla:</strong> un niño de 30 kg está en lo alto de una resbaladilla de 2 m (g = 10 m/s²).<br>
      Arriba: Ep = 30 × 10 × 2 = 600 J (y Ec = 0).<br>
      Abajo, si no hubiera fricción: Ec = 600 J → ½ × 30 × v² = 600 → v ≈ <strong>6.3 m/s</strong>.<br>
      En la realidad llega más lento: parte de la energía se transformó en calor por la fricción (por eso se calienta la resbaladilla).
    </div>
    <h4>Eficiencia</h4>
    <div class="formula">Eficiencia (%) = (energía útil / energía total) × 100</div>
    <p>Ninguna máquina es 100 % eficiente: siempre «se pierde» parte de la energía como calor. Una estufa ahorradora de leña aprovecha mucho mejor el calor que un fogón abierto.</p>
    ${cienEjercicio('Un motor recibe 1000 J y produce 250 J de trabajo útil. ¿Cuál es su eficiencia?', '250 / 1000 × 100 = <strong>25 %</strong>. Los otros 750 J se transforman en calor.')}
  `,

  /* =================== CNEyT III =================== */

  "cn3-1": `
    <h4>Ecosistemas de Chiapas</h4>
    <table class="tabla-estudio">
      <tr><th>Ecosistema</th><th>Dónde</th><th>Características</th></tr>
      <tr><td>Selva alta perennifolia</td><td>Selva Lacandona</td><td>Árboles de más de 30 m, lluvia todo el año, enorme biodiversidad</td></tr>
      <tr><td>Bosque mesófilo o de niebla</td><td>Reserva El Triunfo, Sierra Madre</td><td>Neblina casi permanente; hogar del quetzal y el pavón</td></tr>
      <tr><td>Bosque de pino-encino</td><td>Los Altos</td><td>Clima templado y frío</td></tr>
      <tr><td>Selva baja caducifolia</td><td>Depresión Central</td><td>Los árboles pierden sus hojas en secas</td></tr>
      <tr><td>Manglar</td><td>Costa: La Encrucijada</td><td>Árboles que crecen en agua salobre; criaderos de peces</td></tr>
    </table>

    <h4>Relaciones entre los seres vivos</h4>
    <table class="tabla-estudio">
      <tr><th>Relación</th><th>Efecto</th><th>Ejemplo</th></tr>
      <tr><td>Mutualismo</td><td>Ambos ganan</td><td>Abejas y flores del café</td></tr>
      <tr><td>Depredación</td><td>Uno gana, el otro muere</td><td>Jaguar y venado</td></tr>
      <tr><td>Parasitismo</td><td>Uno gana, el otro se perjudica</td><td>Garrapata y ganado</td></tr>
      <tr><td>Competencia</td><td>Ambos pierden recursos</td><td>Dos árboles por la luz</td></tr>
      <tr><td>Comensalismo</td><td>Uno gana, al otro no le afecta</td><td>Orquídeas y bromelias que viven sobre los árboles</td></tr>
    </table>
  `,

  "cn3-2": `
    ${cienDiagrama('piramide-energia', 'Pirámide de energía', 'En cada nivel trófico solo pasa alrededor del <strong>10 %</strong> de la energía al siguiente; el resto se usa para vivir y se pierde como calor. Por eso hay muchas más plantas que águilas.')}

    <h4>Biomasa y productividad</h4>
    <ul>
      <li><strong>Biomasa:</strong> la cantidad de materia orgánica de los seres vivos de un nivel o ecosistema.</li>
      <li><strong>Productividad primaria:</strong> la energía que los productores capturan con la fotosíntesis. La <em>bruta</em> es toda la que capturan; la <em>neta</em> es la que queda disponible para los herbívoros después de que la planta usa una parte para vivir.</li>
      <li><strong>Eficiencia ecológica:</strong> el porcentaje de energía que pasa de un nivel al siguiente (≈ 10 %).</li>
      <li><strong>Equilibrio ecológico:</strong> estado en el que las poblaciones se mantienen estables. Si se elimina un eslabón (por ejemplo, se caza a todos los depredadores), las demás poblaciones se desequilibran.</li>
    </ul>

    ${cienEjercicio('Si los productores de un ecosistema tienen 50 000 kcal, ¿cuánta energía llega a los consumidores secundarios?', 'Primarios: 10 % de 50 000 = 5 000 kcal. Secundarios: 10 % de 5 000 = <strong>500 kcal</strong>.')}
  `,

  "cn3-3": `
    ${cienDiagrama('ciclo-carbono', 'Ciclo del carbono', 'El carbono pasa del aire a las plantas por la fotosíntesis, de las plantas a los animales al alimentarse, y regresa al aire por la respiración, la descomposición y la combustión de leña y combustibles fósiles.')}

    <h4>El ciclo del nitrógeno</h4>
    <p>Aunque el aire tiene 78 % de nitrógeno, las plantas no pueden usarlo directamente. Unas <strong>bacterias del suelo</strong>, muchas de ellas en las raíces del frijol, lo transforman en compuestos que las plantas sí absorben. Los rayos también fijan nitrógeno. Otras bacterias lo regresan a la atmósfera.</p>

    <h4>El ciclo del fósforo</h4>
    <p>El fósforo no tiene fase gaseosa: viene de las <strong>rocas</strong>, que al desgastarse lo liberan al suelo y al agua; pasa a las plantas y a los animales, y regresa al suelo con los desechos y la descomposición. Es parte del ADN y de los huesos.</p>

    <div class="ejemplo">
      <strong>Problema actual:</strong> el exceso de fertilizantes con nitrógeno y fósforo llega a los ríos y lagos, provoca el crecimiento descontrolado de algas (eutrofización) y deja al agua sin oxígeno para los peces.
    </div>
  `,

  "cn3-4": `
    <h4>Niveles de la biodiversidad</h4>
    <ul>
      <li><strong>Genética:</strong> las diferencias dentro de una misma especie (las muchas variedades de maíz criollo).</li>
      <li><strong>De especies:</strong> la cantidad de especies distintas en un lugar.</li>
      <li><strong>De ecosistemas:</strong> la variedad de ambientes (selvas, bosques, manglares).</li>
    </ul>
    <p>Chiapas es uno de los estados con mayor biodiversidad de México, junto con Oaxaca y Veracruz, y México es uno de los países <strong>megadiversos</strong> del mundo.</p>

    <h4>Áreas Naturales Protegidas de Chiapas</h4>
    <ul>
      <li><strong>Montes Azules:</strong> el corazón de la Selva Lacandona.</li>
      <li><strong>El Triunfo:</strong> bosque de niebla, hogar del quetzal y el pavón.</li>
      <li><strong>La Encrucijada:</strong> manglares de la costa.</li>
      <li><strong>La Sepultura</strong>, el <strong>Cañón del Sumidero</strong> y las <strong>Lagunas de Montebello</strong>.</li>
    </ul>

    <h4>¿Qué puedes hacer?</h4>
    <ul>
      <li>No comprar animales silvestres ni sus productos.</li>
      <li>Cuidar las semillas nativas de tu comunidad.</li>
      <li>Participar en reforestaciones con especies nativas.</li>
      <li>Registrar la fauna y flora que observas en aplicaciones de ciencia ciudadana.</li>
    </ul>
  `,

  "cn3-5": `
    <h4>Chiapas sobre tres placas tectónicas</h4>
    <p>Chiapas está cerca del punto donde se encuentran las placas de <strong>Cocos</strong>, <strong>Norteamericana</strong> y del <strong>Caribe</strong>. La placa de Cocos se hunde bajo las otras (subducción), lo que explica:</p>
    <ul>
      <li>Los <strong>sismos</strong> frecuentes, como el de magnitud 8.2 del 7 de septiembre de 2017.</li>
      <li>Los <strong>volcanes</strong>: el Tacaná, en la frontera con Guatemala, y el Chichonal, que hizo erupción en 1982.</li>
      <li>El <strong>relieve montañoso</strong> de la Sierra Madre.</li>
    </ul>

    <h4>Ríos y agua</h4>
    <p>Chiapas tiene una gran riqueza de agua: por su territorio corren el <strong>Grijalva</strong> y el <strong>Usumacinta</strong>, que juntos forman el sistema fluvial más caudaloso de México, y sus presas producen una parte importante de la electricidad del país.</p>

    <h4>Relieve y clima</h4>
    <p>La altura cambia el clima: en la Planicie Costera y la Depresión Central hace calor; en los Altos y la Sierra Madre, el clima es templado y frío. Al subir una montaña, la temperatura baja aproximadamente 6 °C por cada 1000 m.</p>
  `,

  "cn3-6": `
    <h4>Deterioro ambiental a distintas escalas</h4>
    <table class="tabla-estudio">
      <tr><th>Escala</th><th>Problema</th><th>Causa principal</th></tr>
      <tr><td>Global</td><td>Calentamiento global y cambio climático</td><td>Aumento de gases de efecto invernadero (CO₂, metano) por quemar combustibles y talar bosques</td></tr>
      <tr><td>Global</td><td>Pérdida de biodiversidad</td><td>Destrucción de hábitats, caza, especies invasoras</td></tr>
      <tr><td>Local</td><td>Deforestación</td><td>Cambio de selva a potreros o cultivos, incendios, tala ilegal</td></tr>
      <tr><td>Local</td><td>Contaminación del agua</td><td>Basura, aguas residuales y agroquímicos en los ríos</td></tr>
      <tr><td>Local</td><td>Contaminación del aire</td><td>Quema de basura, incendios, humo de vehículos</td></tr>
    </table>

    <h4>El efecto invernadero</h4>
    <p>Algunos gases de la atmósfera retienen parte del calor que la Tierra emite, como el plástico de un invernadero. Sin este efecto natural, el planeta estaría congelado; el problema es que las actividades humanas lo han <strong>intensificado</strong>, y la temperatura promedio del planeta aumenta.</p>

    <div class="ejemplo">
      <strong>Contexto Chiapas:</strong> cada temporada de lluvias se acumulan toneladas de basura flotante en el Cañón del Sumidero, arrastrada por el río desde las ciudades. Separar y reducir la basura en casa evita que llegue a los ríos.
    </div>
  `,

  /* =================== CNEyT VI =================== */

  "cn6-1": `
    ${cienDiagrama('celula', 'Célula animal y célula vegetal', 'La célula vegetal tiene <strong>pared celular</strong>, <strong>cloroplastos</strong> y una <strong>vacuola</strong> grande; la animal no. Ambas tienen núcleo, mitocondrias y membrana.')}

    <h4>Organelos y su función</h4>
    <table class="tabla-estudio">
      <tr><th>Organelo</th><th>Función</th></tr>
      <tr><td>Membrana celular</td><td>Controla qué entra y sale de la célula</td></tr>
      <tr><td>Núcleo</td><td>Guarda el ADN y dirige la célula</td></tr>
      <tr><td>Mitocondria</td><td>Respiración celular: produce energía (ATP)</td></tr>
      <tr><td>Ribosomas</td><td>Fabrican proteínas</td></tr>
      <tr><td>Retículo endoplásmico</td><td>Transporta y fabrica proteínas y lípidos</td></tr>
      <tr><td>Aparato de Golgi</td><td>Empaca y distribuye sustancias</td></tr>
      <tr><td>Lisosomas</td><td>Digieren desechos (en células animales)</td></tr>
      <tr><td>Cloroplasto</td><td>Fotosíntesis (solo en plantas y algas)</td></tr>
      <tr><td>Pared celular</td><td>Da rigidez y protección (plantas, hongos, bacterias)</td></tr>
    </table>

    <h4>Procariotas y eucariotas</h4>
    <table class="tabla-estudio">
      <tr><th>Procariotas</th><th>Eucariotas</th></tr>
      <tr><td>Sin núcleo: su ADN está libre en el citoplasma</td><td>Con núcleo que protege el ADN</td></tr>
      <tr><td>Sin organelos con membrana</td><td>Con organelos (mitocondrias, cloroplastos…)</td></tr>
      <tr><td>Bacterias y arqueas</td><td>Animales, plantas, hongos y protistas</td></tr>
    </table>
    <p><strong>Teoría endosimbiótica (Lynn Margulis, 1967):</strong> las mitocondrias y los cloroplastos fueron bacterias libres que hace mucho tiempo entraron a otra célula y se quedaron a vivir en ella. Prueba de ello: tienen su propio ADN.</p>
    <p><strong>Relevancia:</strong> las bacterias del yogur y del pozol, las que causan enfermedades, las cianobacterias que oxigenaron el planeta y las levaduras del pan son células que influyen en nuestra vida diaria.</p>
  `,

  "cn6-2": `
    <h4>Conceptos básicos</h4>
    <ul>
      <li><strong>Genotipo:</strong> los genes que tiene un organismo (por ejemplo, Aa).</li>
      <li><strong>Fenotipo:</strong> la característica que se observa (por ejemplo, flor morada).</li>
      <li><strong>Dominante (A):</strong> se expresa aunque haya una sola copia. <strong>Recesivo (a):</strong> solo se expresa con dos copias (aa).</li>
    </ul>

    <h4>Cuadro de Punnett: cruce Aa × Aa</h4>
    <table class="tabla-estudio" style="max-width: 280px; text-align: center;">
      <tr><th></th><th>A</th><th>a</th></tr>
      <tr><th>A</th><td>AA</td><td>Aa</td></tr>
      <tr><th>a</th><td>Aa</td><td>aa</td></tr>
    </table>
    <p>Genotipos: 25 % AA, 50 % Aa, 25 % aa. Fenotipos: <strong>75 % dominante</strong> y <strong>25 % recesivo</strong> (proporción 3:1).</p>

    <h4>Más allá de Mendel</h4>
    <ul>
      <li><strong>Codominancia:</strong> los dos alelos se expresan a la vez. Ej.: el tipo de sangre <strong>AB</strong> expresa las proteínas A y B.</li>
      <li><strong>Teoría cromosómica de la herencia</strong> (Sutton y Boveri, 1902-1903): los genes se encuentran en los cromosomas.</li>
      <li><strong>Mutaciones:</strong> cambios en el ADN. Pueden ser dañinas, neutras o útiles, y son la fuente de nuevas variaciones sobre las que actúa la evolución.</li>
    </ul>

    ${cienEjercicio('En el frijol, el color negro (N) domina sobre el blanco (n). ¿Qué proporción de hijos negros se espera de Nn × nn?', 'Cuadro: Nn, Nn, nn, nn → <strong>50 % negros</strong> (Nn) y 50 % blancos (nn).')}
  `,

  "cn6-3": `
    <h4>Teorías de la evolución</h4>
    <table class="tabla-estudio">
      <tr><th>Teoría</th><th>Idea principal</th><th>Ejemplo y validez</th></tr>
      <tr><td><strong>Lamarck</strong> (1809)</td><td>Uso y desuso: los órganos que se usan se desarrollan y esos cambios se heredan</td><td>La jirafa estiraba el cuello y lo heredaba. Hoy sabemos que los caracteres adquiridos no se heredan así.</td></tr>
      <tr><td><strong>Darwin y Wallace</strong> (1858-1859)</td><td>Selección natural: en cada población hay variación; sobreviven y se reproducen más los mejor adaptados</td><td>Los pinzones de las Galápagos con distintos picos según su alimento. Es la base de la teoría actual.</td></tr>
      <tr><td><strong>Síntesis evolutiva moderna</strong> (décadas de 1930-1940)</td><td>Une la selección natural con la genética: las mutaciones y la recombinación generan la variación</td><td>Explica la evolución a nivel de los genes de las poblaciones.</td></tr>
    </table>

    <h4>Evolución que podemos ver</h4>
    <ul>
      <li><strong>Resistencia a los antibióticos:</strong> si se usan mal, sobreviven las bacterias resistentes y se multiplican.</li>
      <li><strong>Domesticación del maíz:</strong> hace unos 9000 años los pueblos de Mesoamérica seleccionaron durante generaciones el teocintle, una hierba silvestre, hasta obtener el maíz. Es <strong>selección artificial</strong>.</li>
    </ul>
  `,

  "cn6-4": `
    <h4>Tipos de adaptaciones</h4>
    <table class="tabla-estudio">
      <tr><th>Tipo</th><th>Ejemplo</th></tr>
      <tr><td>Morfológica (forma del cuerpo)</td><td>Las manchas del jaguar lo camuflan en la selva</td></tr>
      <tr><td>Fisiológica (funcionamiento)</td><td>Los árboles de la selva baja pierden sus hojas en secas para ahorrar agua</td></tr>
      <tr><td>Conductual (comportamiento)</td><td>Las aves migratorias que llegan a Chiapas en invierno</td></tr>
    </table>

    <h4>¿Cómo se clasifican los seres vivos?</h4>
    <p>Hoy se reconocen tres <strong>dominios</strong>: Bacteria, Archaea y Eukarya. Dentro de los eucariotas están los reinos de los animales, las plantas, los hongos y los protistas. Cada especie se nombra con dos palabras en latín: el quetzal es <em>Pharomachrus mocinno</em> y el jaguar, <em>Panthera onca</em>.</p>
  `,

  "cn6-6": `
    <h4>El sistema inmunológico</h4>
    <ul>
      <li><strong>Inmunidad innata:</strong> la primera defensa, igual para cualquier invasor: piel, mucosas, fiebre, glóbulos blancos que «se comen» a los microbios.</li>
      <li><strong>Inmunidad adaptativa:</strong> aprende a reconocer a cada microbio y produce <strong>anticuerpos</strong> específicos; además guarda «memoria».</li>
      <li><strong>Vacunas:</strong> enseñan al sistema inmunológico a reconocer un microbio sin que tengas que enfermarte.</li>
    </ul>

    <h4>Antibióticos y virus</h4>
    <p>Los antibióticos <strong>solo sirven contra bacterias</strong>, no contra virus como los de la gripe, el dengue o el COVID-19. Tomarlos sin necesidad favorece que las bacterias se vuelvan resistentes.</p>

    <div class="ejemplo">
      <strong>Dengue, zika y chikungunya:</strong> los transmite el mosquito <em>Aedes aegypti</em>, que se reproduce en agua estancada y limpia: cubetas, llantas, floreros y tinacos destapados. Voltear, tapar y limpiar los recipientes es la mejor prevención.
    </div>
  `,

  /* =================== TALLER DE CIENCIAS I =================== */

  "tc1-1": `
    ${cienDiagrama('ciclo-5e', 'Ciclo del método 5E', 'Todas las prácticas del taller siguen el método <strong>5E</strong>, un ciclo que va de la curiosidad a la comprobación.')}
    <table class="tabla-estudio">
      <tr><th>Fase</th><th>¿Qué haces?</th></tr>
      <tr><td><strong>1. Enganchar</strong></td><td>Te haces una pregunta interesante sobre algo cotidiano y recuerdas lo que ya sabes.</td></tr>
      <tr><td><strong>2. Explorar</strong></td><td>Experimentas con tus manos: observas, mides, pruebas.</td></tr>
      <tr><td><strong>3. Explicar</strong></td><td>Relacionas lo que observaste con los conceptos científicos.</td></tr>
      <tr><td><strong>4. Elaborar</strong></td><td>Aplicas lo aprendido a una situación nueva de tu casa o tu comunidad.</td></tr>
      <tr><td><strong>5. Evaluar</strong></td><td>Demuestras lo que aprendiste: una tabla, un dibujo, una explicación o un prototipo.</td></tr>
    </table>
    <h4>Reglas del taller</h4>
    <ul>
      <li>Trabaja en equipo y reparte roles: quien mide, quien anota, quien prepara el material.</li>
      <li>Anota todo en tu bitácora.</li>
      <li>Usa materiales de casa y de reúso siempre que puedas.</li>
      <li>La seguridad primero: lentes si hay salpicaduras, supervisión con fuego y nunca usar la corriente eléctrica de la casa.</li>
    </ul>
  `,

  "tc1-2": `
    <h4>La estructura determina el uso</h4>
    <p>La <strong>estructura microscópica</strong> de un material (cómo se acomodan sus partículas) explica lo que vemos a simple vista: si es duro, flexible, transparente o si conduce el calor.</p>
    <table class="tabla-estudio">
      <tr><th>Material de la comunidad</th><th>Propiedad clave</th><th>Uso tecnológico</th></tr>
      <tr><td>Adobe (barro + paja)</td><td>Gran masa térmica</td><td>Muros que guardan el calor del día y lo liberan de noche</td></tr>
      <tr><td>Bambú</td><td>Fibras largas: ligero y resistente</td><td>Construcción, muebles</td></tr>
      <tr><td>Palma y teja</td><td>Aislantes, dejan pasar el aire</td><td>Techos frescos en clima caliente</td></tr>
      <tr><td>Lámina de metal</td><td>Conduce el calor</td><td>Techos baratos, pero muy calientes al sol</td></tr>
      <tr><td>Ámbar</td><td>Resina fósil dura y brillante</td><td>Artesanía de Simojovel</td></tr>
    </table>
    <h4>Impacto de las tecnologías</h4>
    <p>Todo material tiene un ciclo de vida: se extrae, se fabrica, se usa y se desecha. Elegir un material implica pensar en su costo, su durabilidad y su impacto en el ambiente.</p>
  `,

  "tc1-3": `
    <h4>Tipos de energía y sus usos tecnológicos</h4>
    <table class="tabla-estudio">
      <tr><th>Energía</th><th>Uso en la comunidad</th></tr>
      <tr><td>Química</td><td>Leña, gas LP, la gasolina del colectivo, las pilas</td></tr>
      <tr><td>Eléctrica</td><td>Focos, refrigerador, molino de nixtamal eléctrico</td></tr>
      <tr><td>Luminosa (solar)</td><td>Paneles solares, secado del café</td></tr>
      <tr><td>Cinética</td><td>El agua que mueve las turbinas de las presas</td></tr>
      <tr><td>Térmica</td><td>El comal, el horno de pan</td></tr>
    </table>

    <h4>🧪 Práctica (método 5E): un calentador solar de botella</h4>
    <ol>
      <li><strong>Enganchar:</strong> ¿se puede calentar agua sin gas ni leña?</li>
      <li><strong>Explorar:</strong> llena dos botellas iguales con agua; pinta una de negro y deja la otra transparente. Ponlas al sol y mide su temperatura cada 30 minutos durante dos horas.</li>
      <li><strong>Explicar:</strong> la botella negra absorbe más radiación y transfiere ese calor al agua.</li>
      <li><strong>Elaborar:</strong> diseña un modelo que muestre cómo se transfiere la energía en un aparato de tu casa.</li>
      <li><strong>Evaluar:</strong> grafica tus temperaturas y explica la diferencia.</li>
    </ol>
  `,

  "tc1-4": `
    <h4>Diseña un prototipo con el proceso de ingeniería</h4>
    <ol>
      <li><strong>Identifica el problema:</strong> por ejemplo, la basura plástica en tu escuela o el calor dentro del salón.</li>
      <li><strong>Investiga:</strong> ¿qué soluciones existen? ¿Qué materiales tienes a la mano?</li>
      <li><strong>Imagina y elige</strong> una idea entre varias propuestas del equipo.</li>
      <li><strong>Construye un prototipo</strong> (una maqueta o un modelo funcional) con materiales de reúso.</li>
      <li><strong>Prueba y mejora:</strong> mide si funciona y corrige lo necesario.</li>
      <li><strong>Comunica:</strong> presenta tu prototipo a la comunidad escolar.</li>
    </ol>
    <div class="ejemplo">
      <strong>Ideas de prototipos con impacto ambiental positivo:</strong> un techo verde para enfriar un salón, un filtro de agua casero, un deshidratador solar de frutas, ladrillos ecológicos con botellas rellenas de plástico, una composta escolar.
    </div>
    <p>La <strong>Feria Mexicana de Ciencias e Ingenierías</strong> y las ferias de ciencias estatales son una buena oportunidad para presentar tu proyecto.</p>
  `,

  /* =================== TALLER DE CIENCIAS II =================== */

  "tc2-1": `
    ${cienDiagrama('ciclo-investigacion', 'Las nueve etapas del proyecto de investigación', 'El taller sigue las <strong>9 progresiones</strong> del programa: cada tema es una etapa de tu proyecto. Al final, tus conclusiones abren nuevas preguntas y el ciclo vuelve a empezar.')}
    <h4>No hay un único método científico</h4>
    <p>El proceso científico es diverso y adaptable: a veces hay que regresar a una etapa anterior (por ejemplo, mejorar la pregunta después de investigar). La ciencia no es solo observar; implica interpretar con base en evidencias, y sus conclusiones pueden cambiar con nuevos datos.</p>
    <h4>Organiza a tu equipo</h4>
    <table class="tabla-estudio">
      <tr><th>Rol</th><th>Responsabilidad</th></tr>
      <tr><td>Coordinador</td><td>Organiza los tiempos y las tareas</td></tr>
      <tr><td>Investigador documental</td><td>Busca y cita las fuentes</td></tr>
      <tr><td>Responsable de mediciones</td><td>Prepara los instrumentos y mide</td></tr>
      <tr><td>Registrador</td><td>Lleva la bitácora y la tabla de datos</td></tr>
      <tr><td>Comunicador</td><td>Prepara el cartel y la presentación</td></tr>
    </table>
  `,

  "tc2-2": `
    <h4>¿Dónde hay flujo de energía en tu comunidad?</h4>
    <p>La energía fluye en cualquier sistema donde algo se calienta, se mueve, crece o se transforma. Haz un recorrido y anota ejemplos:</p>
    <ul>
      <li><strong>En la casa:</strong> el calor del fogón, el refrigerador, la ropa que se seca al sol.</li>
      <li><strong>En el campo:</strong> la fotosíntesis de la milpa, la sombra del cafetal, el secado del grano.</li>
      <li><strong>En los ecosistemas:</strong> las cadenas tróficas del río o la selva.</li>
      <li><strong>En la escuela:</strong> el salón que se calienta a mediodía, el techo de lámina.</li>
    </ul>
    <h4>Describe tu fenómeno</h4>
    <p>Elige uno y descríbelo de forma clara y concisa: ¿qué sistema es?, ¿de dónde viene la energía?, ¿hacia dónde va?, ¿por qué te interesa? En el proyecto de ejemplo, el fenómeno es <strong>la pérdida de calor de las tortillas</strong> cuando se llevan al campo.</p>
  `,

  "tc2-3": `
    <h4>El cartel científico</h4>
    <table class="tabla-estudio">
      <tr><th>Sección</th><th>¿Qué incluye?</th></tr>
      <tr><td>Título</td><td>Corto y atractivo: «¿Qué mantiene calientes las tortillas?»</td></tr>
      <tr><td>Integrantes y escuela</td><td>Nombres, grupo, plantel</td></tr>
      <tr><td>Introducción</td><td>El problema y por qué es importante</td></tr>
      <tr><td>Pregunta e hipótesis</td><td>Escritas de forma clara</td></tr>
      <tr><td>Metodología</td><td>Materiales y pasos, con fotos o dibujos</td></tr>
      <tr><td>Resultados</td><td>La tabla y la gráfica</td></tr>
      <tr><td>Conclusiones</td><td>La respuesta a la pregunta y su utilidad</td></tr>
      <tr><td>Referencias</td><td>Las fuentes consultadas</td></tr>
    </table>
    <h4>Consejos para presentar</h4>
    <ul>
      <li>Explica en 3 minutos: problema, lo que hiciste, lo que encontraste y para qué sirve.</li>
      <li>Usa palabras sencillas; tu público puede ser tu familia o tu comunidad.</li>
      <li>Lleva el experimento o fotos para mostrarlo.</li>
      <li>También puedes divulgar con un video corto, un pódcast o la radio comunitaria.</li>
    </ul>
  `
};
