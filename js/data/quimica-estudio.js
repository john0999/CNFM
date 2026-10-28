/* ==========================================================
   DATA - Química I y II · Material de estudio ampliado
   Complementa a QUIMICA (js/data/quimica.js) sin modificarlo:
   cada clave es el id de un tema y su HTML se muestra en la
   sección "Estudia más" debajo del contenido original.
========================================================== */

// Tarjeta de material de laboratorio; abre su ficha completa en #/laboratorio
const labTarjeta = (imagen, nombre, uso, descripcion) => `
  <a class="tarjeta-lab-enlace" href="#/laboratorio/${imagen}">
    <figure class="tarjeta-lab">
      <img src="images/quimica/${imagen}.svg" alt="${nombre}" loading="lazy">
      <figcaption>
        <span class="nombre-lab">${nombre}</span>
        <span class="uso-lab">${uso}</span>
        ${descripcion}
        <span class="ver-mas-lab">Ver ficha →</span>
      </figcaption>
    </figure>
  </a>`;

const labCatalogo = `<a class="btn-lab-catalogo" href="#/laboratorio">🔬 Ver todo el material de laboratorio →</a>`;

// Diagrama grande con pie de figura
const labDiagrama = (imagen, alt, pie) => `
  <figure class="diagrama-quimica">
    <img src="images/quimica/${imagen}.svg" alt="${alt}" loading="lazy">
    <figcaption>${pie}</figcaption>
  </figure>`;

// Ejercicio con la respuesta oculta hasta que el estudiante la abre
const ejercicio = (pregunta, respuesta) => `
  <details class="ejercicio-estudio">
    <summary>${pregunta}</summary>
    <div>${respuesta}</div>
  </details>`;

const QUIMICA_ESTUDIO = {

  /* =================== QUÍMICA I =================== */

  "q1-1": `
    <h4>Ramas de la química</h4>
    <table class="tabla-estudio">
      <tr><th>Rama</th><th>¿Qué estudia?</th><th>Ejemplo</th></tr>
      <tr><td>Química general</td><td>Principios básicos de la materia y sus cambios</td><td>Estados de agregación</td></tr>
      <tr><td>Química inorgánica</td><td>Compuestos que, en general, no tienen cadenas de carbono</td><td>Sales, óxidos, ácidos minerales</td></tr>
      <tr><td>Química orgánica</td><td>Compuestos del carbono</td><td>Azúcares, plásticos, combustibles</td></tr>
      <tr><td>Química analítica</td><td>Qué contiene una muestra y en qué cantidad</td><td>Análisis del agua de un pozo</td></tr>
      <tr><td>Bioquímica</td><td>Reacciones químicas de los seres vivos</td><td>Digestión, fotosíntesis</td></tr>
      <tr><td>Fisicoquímica</td><td>Energía, velocidad y equilibrio de las reacciones</td><td>Por qué una pila produce electricidad</td></tr>
      <tr><td>Química ambiental</td><td>Sustancias en el aire, agua y suelo</td><td>Contaminación de ríos por agroquímicos</td></tr>
    </table>

    <h4>Línea del tiempo</h4>
    <ul class="linea-tiempo">
      <li><strong>Antigüedad:</strong> los griegos Leucipo y Demócrito proponen que la materia está formada por partículas indivisibles llamadas <em>átomos</em>.</li>
      <li><strong>Edad Media:</strong> la <em>alquimia</em> busca convertir metales en oro y el "elixir de la vida". No lo logró, pero inventó técnicas como la destilación.</li>
      <li><strong>1661 · Robert Boyle:</strong> publica <em>El químico escéptico</em> y defiende que las ideas deben comprobarse con experimentos.</li>
      <li><strong>1789 · Antoine Lavoisier:</strong> enuncia la Ley de Conservación de la Masa. Se le considera el padre de la química moderna.</li>
      <li><strong>1801 · Andrés Manuel del Río:</strong> descubre en México el elemento que hoy llamamos <strong>vanadio</strong>.</li>
      <li><strong>1808 · John Dalton:</strong> propone la primera teoría atómica moderna.</li>
      <li><strong>1869 · Dmitri Mendeléiev:</strong> organiza los elementos en la tabla periódica.</li>
      <li><strong>1898 · Marie y Pierre Curie:</strong> descubren el polonio y el radio. Marie Curie ganó dos premios Nobel (Física 1903 y Química 1911).</li>
      <li><strong>1995 · Mario Molina:</strong> químico mexicano, gana el Premio Nobel de Química por explicar cómo ciertos gases destruyen la capa de ozono.</li>
    </ul>

    <h4>Cambios físicos y cambios químicos</h4>
    <ul>
      <li><strong>Cambio físico:</strong> la sustancia sigue siendo la misma; solo cambia su forma o estado. Ej: hielo que se derrite, moler café, disolver azúcar.</li>
      <li><strong>Cambio químico:</strong> se forman sustancias nuevas con propiedades diferentes. Ej: quemar leña, oxidación de un clavo, fermentar cacao, cocer una tortilla.</li>
    </ul>
    <div class="ejemplo">
      <strong>Truco para distinguirlos:</strong> pregúntate "¿puedo recuperar la sustancia original fácilmente?". Si congelas el agua derretida vuelve a ser hielo (físico). La ceniza no vuelve a ser leña (químico).
    </div>

    <h4>Química y sociedad</h4>
    <p>La química ha permitido potabilizar el agua, producir medicamentos, vacunas y fertilizantes. También genera riesgos cuando se usa mal: contaminación, residuos tóxicos y accidentes. Por eso es importante conocerla y usarla con responsabilidad.</p>

    <div class="nota-estudio">
      <strong>📝 Para recordar:</strong> materia · cambio físico · cambio químico · alquimia · Lavoisier · teoría atómica · ramas de la química.
    </div>

    <h4>✍️ Practica</h4>
    ${ejercicio('¿Encender un cerillo es un cambio físico o químico?', 'Químico: la madera y las sustancias de la cabeza del cerillo se transforman en gases, ceniza y liberan luz y calor.')}
    ${ejercicio('¿Qué rama de la química estudia si el agua de un pozo tiene arsénico?', 'La química analítica, porque identifica qué sustancias hay en una muestra y en qué cantidad.')}
    ${ejercicio('Menciona dos químicos mexicanos y su aportación.', 'Andrés Manuel del Río (descubrió el vanadio, 1801) y Mario Molina (Nobel de Química 1995 por sus estudios de la capa de ozono).')}
  `,

  "q1-2": `
    <h4>Variables de un experimento</h4>
    <ul>
      <li><strong>Variable independiente:</strong> la que tú cambias a propósito.</li>
      <li><strong>Variable dependiente:</strong> la que mides para ver si cambió.</li>
      <li><strong>Variables controladas:</strong> las que mantienes iguales para que el experimento sea justo.</li>
    </ul>
    <div class="ejemplo">
      <strong>Ejemplo:</strong> ¿El azúcar se disuelve más rápido en agua caliente?<br>
      • Independiente: temperatura del agua (fría, tibia, caliente)<br>
      • Dependiente: tiempo que tarda en disolverse<br>
      • Controladas: cantidad de agua, cantidad de azúcar, tipo de vaso, forma de agitar
    </div>

    <h4>Cómo escribir una buena hipótesis</h4>
    <p>Una hipótesis debe poder comprobarse. Una forma útil es: <strong>"Si… entonces…"</strong>.</p>
    <div class="formula">
Si aumento la temperatura del agua, entonces el azúcar se disolverá en menos tiempo.
    </div>

    <h4>Ley, teoría e hipótesis</h4>
    <table class="tabla-estudio">
      <tr><th>Concepto</th><th>Significado</th><th>Ejemplo</th></tr>
      <tr><td>Hipótesis</td><td>Explicación tentativa que se va a probar</td><td>"El fertilizante aumenta el tamaño del maíz"</td></tr>
      <tr><td>Ley</td><td>Describe <em>qué</em> pasa, muchas veces con una fórmula</td><td>Ley de Conservación de la Masa</td></tr>
      <tr><td>Teoría</td><td>Explica <em>por qué</em> pasa; está apoyada en muchas pruebas</td><td>Teoría atómica</td></tr>
    </table>

    <h4>Seguridad en el laboratorio</h4>
    <ul>
      <li>Usa bata, lentes de seguridad y guantes cuando se indique.</li>
      <li>Nunca pruebes, huelas directamente ni toques los reactivos. Para oler, abanica el vapor con la mano hacia tu nariz.</li>
      <li>Lee la etiqueta del frasco antes de usarlo y regresa la tapa al mismo frasco.</li>
      <li>Para diluir un ácido: <strong>agrega siempre el ácido al agua</strong>, nunca agua al ácido (puede salpicar violentamente).</li>
      <li>Calienta los tubos de ensayo inclinados y sin apuntar hacia nadie.</li>
      <li>No comas ni bebas en el laboratorio. Lávate las manos al terminar.</li>
      <li>Avisa al profesor de cualquier accidente, por pequeño que sea.</li>
    </ul>

    <h4>Pictogramas de peligro (SGA)</h4>
    <p>Los frascos de reactivos y algunos productos de limpieza traen rombos rojos con un símbolo. Los más comunes:</p>
    <table class="tabla-estudio">
      <tr><th>Símbolo</th><th>Significa</th><th>Ejemplo</th></tr>
      <tr><td>🔥 Llama</td><td>Inflamable</td><td>Alcohol, gasolina, gas LP</td></tr>
      <tr><td>🧪 Corrosión</td><td>Quema la piel y corroe metales</td><td>Ácido muriático, sosa cáustica</td></tr>
      <tr><td>💀 Calavera</td><td>Tóxico agudo, puede causar la muerte</td><td>Algunos plaguicidas</td></tr>
      <tr><td>❗ Exclamación</td><td>Irritante o nocivo</td><td>Cloro doméstico</td></tr>
      <tr><td>🐟 Medio ambiente</td><td>Peligroso para peces y ecosistemas</td><td>Muchos agroquímicos</td></tr>
    </table>

    <h4>Estructura de un reporte de práctica</h4>
    <ol>
      <li>Título y objetivo</li>
      <li>Hipótesis</li>
      <li>Material y sustancias</li>
      <li>Procedimiento (pasos numerados)</li>
      <li>Resultados (tablas, gráficas, dibujos)</li>
      <li>Análisis y conclusión: ¿se aceptó o rechazó la hipótesis?</li>
    </ol>

    <h4>✍️ Practica</h4>
    ${ejercicio('Quieres saber si la cantidad de luz afecta el crecimiento del frijol. ¿Cuál es la variable independiente y cuál la dependiente?', 'Independiente: la cantidad de luz. Dependiente: el crecimiento (altura) de la planta. Debes controlar el tipo de tierra, el agua y la semilla.')}
    ${ejercicio('¿Por qué se agrega el ácido al agua y no al revés?', 'Porque al mezclarse se libera mucho calor. Si echas agua sobre el ácido, el agua puede hervir de golpe y salpicar ácido concentrado.')}
  `,

  "q1-3": `
    <h4>Instrumentos de medición del laboratorio</h4>
    <p>Cada instrumento tiene un propósito. Usar el correcto hace que tus mediciones sean confiables. Toca cualquiera para ver su ficha completa: para qué sirve, cómo se usa y sus precauciones.</p>
    ${labCatalogo}

    <h5>Para medir volumen</h5>
    <div class="galeria-lab">
      ${labTarjeta('probeta', 'Probeta graduada', 'Medir volumen', 'Cilindro de vidrio o plástico con escala en mL. Mide volúmenes de líquidos con precisión media. Se lee en la parte baja del menisco.')}
      ${labTarjeta('pipeta', 'Pipeta', 'Medir volumen pequeño', 'Tubo delgado para medir y transferir volúmenes pequeños con mucha precisión. Se llena con una perilla o pipeteador, <strong>nunca con la boca</strong>.')}
      ${labTarjeta('bureta', 'Bureta', 'Medir volumen gota a gota', 'Tubo largo graduado con una llave en la punta. Permite agregar líquido poco a poco; se usa en las titulaciones (ácido-base).')}
      ${labTarjeta('matraz-aforado', 'Matraz aforado', 'Preparar soluciones', 'Tiene una sola marca (aforo) en el cuello. Contiene un volumen exacto, por ejemplo 100 mL o 250 mL. Ideal para preparar soluciones de concentración exacta.')}
    </div>

    <h5>Para medir masa y temperatura</h5>
    <div class="galeria-lab">
      ${labTarjeta('balanza', 'Balanza', 'Medir masa', 'Mide la masa en gramos. Antes de pesar se coloca el recipiente vacío y se presiona "tara" para ponerla en cero. Nunca pongas reactivos directo en el plato.')}
      ${labTarjeta('termometro', 'Termómetro', 'Medir temperatura', 'Mide la temperatura en °C. El bulbo debe estar dentro del líquido sin tocar el fondo del recipiente. No se usa para agitar.')}
    </div>
    <p>Vasos de precipitados, matraces, mecheros, embudos y el resto del material están en el <a href="#/laboratorio">catálogo de material de laboratorio</a>.</p>

    <h4>Cómo leer correctamente un volumen</h4>
    ${labDiagrama('menisco', 'Lectura del menisco a la altura de los ojos', 'La superficie del agua forma una curva llamada <strong>menisco</strong>. Coloca los ojos a la misma altura y lee la <strong>parte más baja</strong> de la curva. Si miras desde arriba o desde abajo, cometes un error de paralaje.')}

    <h4>Exactitud y precisión</h4>
    <ul>
      <li><strong>Exactitud:</strong> qué tan cerca está tu medición del valor real.</li>
      <li><strong>Precisión:</strong> qué tan parecidas son tus mediciones entre sí cuando repites el experimento.</li>
    </ul>
    <div class="ejemplo">
      <strong>Ejemplo:</strong> un frasco tiene 50.0 mL reales. Ana mide 49.9, 50.1 y 50.0 mL (exacta y precisa). Luis mide 45.0, 45.1 y 45.0 mL (precisa pero no exacta: quizá leyó mal el menisco).
    </div>

    <h4>Conversiones útiles</h4>
    <div class="formula">
1 kg = 1000 g &nbsp;&nbsp;|&nbsp;&nbsp; 1 g = 1000 mg<br>
1 L = 1000 mL &nbsp;&nbsp;|&nbsp;&nbsp; 1 mL = 1 cm³<br>
K = °C + 273.15<br>
°F = (°C × 1.8) + 32
    </div>

    <h4>Densidad: una propiedad que identifica sustancias</h4>
    <div class="formula">
Densidad (ρ) = masa / volumen &nbsp;&nbsp;&nbsp;→&nbsp;&nbsp;&nbsp; ρ = m / V
    </div>
    <table class="tabla-estudio">
      <tr><th>Sustancia</th><th>Densidad aproximada (g/mL)</th></tr>
      <tr><td>Aceite de cocina</td><td>0.92</td></tr>
      <tr><td>Hielo</td><td>0.92</td></tr>
      <tr><td>Agua</td><td>1.00</td></tr>
      <tr><td>Agua de mar</td><td>1.03</td></tr>
      <tr><td>Aluminio</td><td>2.70</td></tr>
      <tr><td>Hierro</td><td>7.87</td></tr>
      <tr><td>Oro</td><td>19.3</td></tr>
    </table>
    <p>Lo que tiene menor densidad que el agua flota en ella. Por eso el aceite y el hielo flotan.</p>

    <h4>✍️ Practica</h4>
    ${ejercicio('Una piedra tiene una masa de 54 g. Al meterla en una probeta, el agua sube de 30 mL a 50 mL. ¿Cuál es su densidad?', 'Volumen = 50 − 30 = 20 mL. Densidad = 54 g / 20 mL = <strong>2.7 g/mL</strong> (igual que el aluminio).')}
    ${ejercicio('Convierte 25 °C a kelvin.', 'K = 25 + 273.15 = <strong>298.15 K</strong>.')}
    ${ejercicio('Necesitas exactamente 250 mL de una solución. ¿Usas vaso de precipitados o matraz aforado?', 'Matraz aforado de 250 mL, porque contiene un volumen exacto. La escala del vaso de precipitados es solo aproximada.')}
  `,

  "q1-4": `
    <h4>Teoría cinético-molecular</h4>
    <p>Explica los estados de la materia a partir del movimiento de sus partículas:</p>
    <ol>
      <li>Toda la materia está formada por partículas muy pequeñas (átomos o moléculas).</li>
      <li>Las partículas están en movimiento constante.</li>
      <li>Entre ellas existen fuerzas de atracción.</li>
      <li>Al aumentar la temperatura, las partículas se mueven más rápido.</li>
    </ol>
    ${labDiagrama('estados-particulas', 'Partículas en sólido, líquido y gas', '<strong>Sólido:</strong> partículas ordenadas que solo vibran. <strong>Líquido:</strong> partículas juntas pero que se deslizan unas sobre otras. <strong>Gas:</strong> partículas separadas que se mueven en todas direcciones y llenan el recipiente.')}

    <h4>Otros estados de la materia</h4>
    <ul>
      <li><strong>Plasma:</strong> gas tan caliente que sus átomos pierden electrones. Está en el Sol, los rayos y las lámparas de neón. Es el estado más abundante del universo.</li>
      <li><strong>Condensado de Bose-Einstein:</strong> se forma a temperaturas cercanas al cero absoluto (−273 °C); las partículas se comportan como una sola.</li>
    </ul>

    <h4>Curva de calentamiento del agua</h4>
    <p>Si calientas hielo a −10 °C y mides la temperatura cada minuto, observarás:</p>
    <ol>
      <li>El hielo se calienta de −10 °C a 0 °C.</li>
      <li><strong>A 0 °C la temperatura se mantiene</strong> mientras el hielo se funde: el calor se usa para separar las partículas, no para subir la temperatura.</li>
      <li>El agua líquida se calienta de 0 °C a 100 °C.</li>
      <li><strong>A 100 °C la temperatura vuelve a mantenerse</strong> mientras el agua hierve.</li>
      <li>El vapor se sigue calentando.</li>
    </ol>
    <div class="nota-estudio">
      <strong>💡 Idea clave:</strong> durante un cambio de estado, la temperatura no cambia aunque se siga dando calor.
    </div>

    <h4>Evaporación y ebullición no son lo mismo</h4>
    <table class="tabla-estudio">
      <tr><th>Evaporación</th><th>Ebullición</th></tr>
      <tr><td>Ocurre a cualquier temperatura</td><td>Ocurre a una temperatura fija (punto de ebullición)</td></tr>
      <tr><td>Solo en la superficie del líquido</td><td>En todo el líquido (se forman burbujas)</td></tr>
      <tr><td>Es lenta: ropa secándose al sol</td><td>Es rápida: agua hirviendo en la olla</td></tr>
    </table>

    <h4>La presión cambia el punto de ebullición</h4>
    <p>A mayor altitud hay menos presión atmosférica y el agua hierve a menor temperatura.</p>
    <div class="ejemplo">
      <strong>Contexto Chiapas:</strong> en Tuxtla Gutiérrez (≈ 520 m) el agua hierve cerca de 98 °C; en San Cristóbal de las Casas (≈ 2200 m) hierve alrededor de 93 °C. Por eso los frijoles tardan más en cocerse en zonas altas, y la olla de presión ayuda: al aumentar la presión, el agua hierve por encima de 100 °C.
    </div>

    <h4>Los gases: presión, volumen y temperatura</h4>
    <ul>
      <li><strong>Ley de Boyle:</strong> si la temperatura no cambia, al disminuir el volumen aumenta la presión (una jeringa tapada que aprietas).</li>
      <li><strong>Ley de Charles:</strong> si la presión no cambia, al aumentar la temperatura aumenta el volumen (un globo se infla más al sol).</li>
    </ul>

    <h4>✍️ Practica</h4>
    ${ejercicio('¿Por qué la ropa se seca aunque no llegue a 100 °C?', 'Porque el agua se evapora: las partículas de la superficie con más energía escapan al aire a cualquier temperatura. No necesita hervir.')}
    ${ejercicio('¿Qué cambio de estado ocurre cuando la naftalina "desaparece" en el ropero?', 'Sublimación: pasa directamente de sólido a gas.')}
    ${ejercicio('Mientras el agua hierve, ¿sube su temperatura si subes la flama?', 'No. Se mantiene en su punto de ebullición; la flama más alta solo hace que hierva más rápido (se evapora más agua por minuto).')}
  `,

  "q1-5": `
    <h4>Coloides y suspensiones</h4>
    <p>Además de las soluciones (mezclas homogéneas), existen mezclas intermedias:</p>
    <table class="tabla-estudio">
      <tr><th>Tipo</th><th>Tamaño de partícula</th><th>¿Se asienta?</th><th>Ejemplos</th></tr>
      <tr><td>Solución</td><td>Muy pequeño (no se ve)</td><td>No</td><td>Agua con sal, refresco, aire</td></tr>
      <tr><td>Coloide</td><td>Intermedio</td><td>No</td><td>Leche, gelatina, niebla, mayonesa</td></tr>
      <tr><td>Suspensión</td><td>Grande (se ve)</td><td>Sí, con el tiempo</td><td>Agua de río con lodo, pinole en agua</td></tr>
    </table>
    <div class="ejemplo">
      <strong>Efecto Tyndall:</strong> si pasas la luz de una lámpara por un coloide (agua con unas gotas de leche) verás el haz de luz; en una solución (agua con sal) no se ve. Lo mismo pasa con los rayos de sol entre la niebla del bosque.
    </div>

    <h4>Métodos de separación paso a paso</h4>

    <h5>Filtración</h5>
    ${labDiagrama('filtracion', 'Montaje de filtración con embudo y papel filtro', 'El sólido queda en el papel filtro (<strong>residuo</strong>) y el líquido pasa al vaso (<strong>filtrado</strong>). Ejemplo: separar arena del agua o el café molido del café de olla.')}

    <h5>Destilación</h5>
    ${labDiagrama('destilacion', 'Montaje de destilación simple', 'Se calienta la mezcla; el líquido con menor punto de ebullición se evapora primero, el vapor se enfría en el refrigerante y se recoge como <strong>destilado</strong>. Así se separa el alcohol del agua o se obtiene agua destilada.')}

    <h5>Decantación</h5>
    <div class="galeria-lab">
      ${labTarjeta('embudo-separacion', 'Embudo de separación', 'Decantar líquidos', 'Separa líquidos que no se mezclan (inmiscibles) por su densidad: el agua queda abajo y el aceite arriba. Se abre la llave y se deja salir el líquido de abajo.')}
    </div>

    <h5>Otros métodos</h5>
    <ul>
      <li><strong>Evaporación:</strong> se calienta hasta que el líquido se evapora y queda el sólido (sal del agua de mar en una cápsula de porcelana).</li>
      <li><strong>Cristalización:</strong> se deja enfriar lentamente una solución concentrada y se forman cristales puros (azúcar, sal de grano).</li>
      <li><strong>Cromatografía:</strong> separa los colores de una tinta. Pon un punto de plumón en papel filtro, mete la orilla en alcohol o agua y observa cómo suben los pigmentos a diferente velocidad.</li>
      <li><strong>Centrifugación:</strong> gira la mezcla muy rápido para que lo más denso vaya al fondo (separar la sangre en el laboratorio clínico).</li>
      <li><strong>Imantación:</strong> separa metales con hierro usando un imán (limaduras de hierro mezcladas con arena).</li>
      <li><strong>Tamizado:</strong> separa sólidos de distinto tamaño con una malla (cernir harina o separar grava de arena).</li>
    </ul>

    <h4>¿Qué método uso?</h4>
    <table class="tabla-estudio">
      <tr><th>Mezcla</th><th>Método</th></tr>
      <tr><td>Arena + agua</td><td>Filtración o decantación</td></tr>
      <tr><td>Sal + agua</td><td>Evaporación</td></tr>
      <tr><td>Agua + aceite</td><td>Decantación con embudo de separación</td></tr>
      <tr><td>Alcohol + agua</td><td>Destilación</td></tr>
      <tr><td>Hierro + azufre</td><td>Imantación</td></tr>
      <tr><td>Grava + arena</td><td>Tamizado</td></tr>
      <tr><td>Pigmentos de una tinta</td><td>Cromatografía</td></tr>
    </table>

    <div class="ejemplo">
      <strong>Contexto Chiapas — filtro casero de agua:</strong> en una botella cortada coloca, de abajo hacia arriba, algodón o tela, carbón, arena fina, arena gruesa y grava. El agua turbia sale más clara, pero <strong>todavía no es potable</strong>: hay que hervirla o clorarla para eliminar microorganismos.
    </div>

    <h4>✍️ Practica</h4>
    ${ejercicio('¿Por qué la leche es un coloide y no una solución?', 'Porque sus partículas de grasa y proteína son más grandes que las de una solución: dispersan la luz (efecto Tyndall) y la hacen ver blanca y opaca, aunque no se asientan.')}
    ${ejercicio('¿Cómo separarías una mezcla de arena, sal y limaduras de hierro?', '1) Imantación para sacar el hierro. 2) Agregar agua para disolver la sal. 3) Filtrar para separar la arena. 4) Evaporar el agua para recuperar la sal.')}
  `,

  "q1-6": `
    <h4>Evolución de los modelos atómicos</h4>
    <table class="tabla-estudio">
      <tr><th>Modelo</th><th>Idea principal</th></tr>
      <tr><td><strong>Dalton (1808)</strong></td><td>El átomo es una esfera sólida e indivisible. Los átomos de un mismo elemento son iguales.</td></tr>
      <tr><td><strong>Thomson (1897)</strong></td><td>Descubre el electrón. El átomo es una esfera positiva con electrones incrustados, como un "pudín con pasas".</td></tr>
      <tr><td><strong>Rutherford (1911)</strong></td><td>Con su experimento de la lámina de oro descubre que casi toda la masa está en un <strong>núcleo</strong> pequeño y positivo; el resto del átomo es casi vacío.</td></tr>
      <tr><td><strong>Bohr (1913)</strong></td><td>Los electrones giran en órbitas o niveles de energía fijos alrededor del núcleo.</td></tr>
      <tr><td><strong>Cuántico (1926 en adelante)</strong></td><td>Los electrones no siguen órbitas exactas; se encuentran en <strong>orbitales</strong>, zonas donde es más probable hallarlos.</td></tr>
    </table>
    ${labDiagrama('atomo-bohr', 'Modelo de Bohr del átomo de carbono', 'Modelo de Bohr del <strong>carbono</strong> (Z = 6): en el núcleo hay 6 protones (rojo) y 6 neutrones (gris); 2 electrones (azul) en el primer nivel y 4 en el segundo.')}

    <h4>Las partículas en números</h4>
    <table class="tabla-estudio">
      <tr><th>Partícula</th><th>Carga</th><th>Masa (kg)</th><th>Masa relativa (uma)</th><th>Ubicación</th></tr>
      <tr><td>Protón (p⁺)</td><td>+1</td><td>1.673 × 10⁻²⁷</td><td>≈ 1</td><td>Núcleo</td></tr>
      <tr><td>Neutrón (n⁰)</td><td>0</td><td>1.675 × 10⁻²⁷</td><td>≈ 1</td><td>Núcleo</td></tr>
      <tr><td>Electrón (e⁻)</td><td>−1</td><td>9.109 × 10⁻³¹</td><td>≈ 1/1836</td><td>Fuera del núcleo</td></tr>
    </table>
    <p>El electrón es unas 1836 veces más ligero que el protón; por eso la masa del átomo depende casi solo del núcleo.</p>

    <h4>Notación del núcleo e iones</h4>
    <div class="formula">
<sup>A</sup><sub>Z</sub>X &nbsp;→&nbsp; A = número de masa (arriba), Z = número atómico (abajo), X = símbolo<br><br>
Ejemplo: <sup>23</sup><sub>11</sub>Na → 11 protones, 23 − 11 = 12 neutrones, 11 electrones
    </div>
    <p>Un <strong>ion</strong> es un átomo que ganó o perdió electrones (los protones nunca cambian):</p>
    <ul>
      <li><strong>Catión (+):</strong> perdió electrones. Na⁺ tiene 11 p⁺ y 10 e⁻.</li>
      <li><strong>Anión (−):</strong> ganó electrones. Cl⁻ tiene 17 p⁺ y 18 e⁻.</li>
    </ul>
    <div class="formula">
Electrones de un ion = Z − carga<br>
Na⁺: 11 − (+1) = 10 e⁻ &nbsp;&nbsp;|&nbsp;&nbsp; O²⁻: 8 − (−2) = 10 e⁻
    </div>

    <h4>Isótopos útiles</h4>
    <ul>
      <li><strong>Hidrógeno:</strong> protio (¹H, sin neutrones), deuterio (²H) y tritio (³H).</li>
      <li><strong>Carbono-14:</strong> permite calcular la edad de restos orgánicos antiguos (datación por radiocarbono), como los hallados en zonas arqueológicas mayas.</li>
      <li><strong>Yodo-131 y cobalto-60:</strong> se usan en medicina para diagnosticar y tratar algunas enfermedades.</li>
    </ul>

    <h4>Masa atómica promedio</h4>
    <p>La masa que aparece en la tabla periódica es un promedio de los isótopos según su abundancia en la naturaleza.</p>
    <div class="formula">
Cloro: 75.78 % de Cl-35 (34.969 uma) y 24.22 % de Cl-37 (36.966 uma)<br>
Masa promedio = (0.7578 × 34.969) + (0.2422 × 36.966)<br>
Masa promedio = 26.500 + 8.953 = <strong>35.45 uma</strong>
    </div>

    <h4>✍️ Practica</h4>
    ${ejercicio('¿Cuántos protones, neutrones y electrones tiene el ⁵⁶₂₆Fe?', 'Protones = 26, electrones = 26 (átomo neutro), neutrones = 56 − 26 = <strong>30</strong>.')}
    ${ejercicio('¿Cuántos electrones tiene el ion Ca²⁺ (Z = 20)?', '20 − 2 = <strong>18 electrones</strong>. Perdió 2 electrones, por eso tiene carga +2.')}
    ${ejercicio('¿Qué descubrió Rutherford con su experimento de la lámina de oro?', 'Que el átomo tiene un núcleo muy pequeño, denso y positivo, y que la mayor parte del átomo es espacio vacío.')}
  `,

  "q1-7": `
    <h4>Diagrama de Moeller (regla de las diagonales)</h4>
    <p>Indica el orden en que se llenan los subniveles. Se escribe cada nivel en una fila y se leen las diagonales de arriba hacia abajo:</p>
    <div class="formula">
1s<br>
2s &nbsp;2p<br>
3s &nbsp;3p &nbsp;3d<br>
4s &nbsp;4p &nbsp;4d &nbsp;4f<br>
5s &nbsp;5p &nbsp;5d &nbsp;5f<br>
6s &nbsp;6p &nbsp;6d<br>
7s &nbsp;7p<br><br>
Orden de llenado: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p
    </div>

    <h4>Las tres reglas para acomodar electrones</h4>
    <ul>
      <li><strong>Principio de Aufbau:</strong> los electrones ocupan primero los subniveles de menor energía (orden de Moeller).</li>
      <li><strong>Principio de exclusión de Pauli:</strong> en un orbital caben máximo 2 electrones y deben tener espín opuesto (↑↓).</li>
      <li><strong>Regla de Hund:</strong> en orbitales de la misma energía, los electrones primero se colocan solos (↑ ↑ ↑) y después se aparean.</li>
    </ul>

    <h4>Diagramas de orbitales</h4>
    <div class="formula">
Nitrógeno (Z=7): 1s² 2s² 2p³<br>
1s [↑↓] &nbsp;2s [↑↓] &nbsp;2p [↑ ][↑ ][↑ ]<br><br>
Oxígeno (Z=8): 1s² 2s² 2p⁴<br>
1s [↑↓] &nbsp;2s [↑↓] &nbsp;2p [↑↓][↑ ][↑ ]
    </div>
    <p>Observa que en el nitrógeno los tres electrones 2p están solos (regla de Hund) y en el oxígeno el cuarto electrón se aparea.</p>

    <h4>Configuración abreviada (kernel)</h4>
    <p>Se escribe entre corchetes el gas noble anterior y después solo los electrones que faltan:</p>
    <div class="formula">
Na (Z=11): 1s² 2s² 2p⁶ 3s¹ &nbsp;&nbsp;→&nbsp;&nbsp; [Ne] 3s¹<br>
Fe (Z=26): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶ &nbsp;&nbsp;→&nbsp;&nbsp; [Ar] 4s² 3d⁶<br>
Br (Z=35): [Ar] 4s² 3d¹⁰ 4p⁵
    </div>

    <h4>Números cuánticos del último electrón</h4>
    <p>Usando la convención común en bachillerato (los orbitales se llenan de m = −l a +l y primero con espín +½):</p>
    <div class="formula">
Oxígeno: último electrón en 2p⁴ → 2p [↑↓][↑ ][↑ ]<br>
Las tres cajas del subnivel p corresponden a m = −1, 0 y +1.<br>
El cuarto electrón es el que se aparea (↓) en la primera caja:<br>
n = 2, &nbsp;l = 1 (p), &nbsp;m = −1, &nbsp;s = −½
    </div>
    <p>Algunos libros usan el orden contrario; revisa la convención que usa tu profesor.</p>

    <h4>De la configuración a la tabla periódica</h4>
    <ul>
      <li>El <strong>nivel más alto (n)</strong> indica el <strong>periodo</strong>.</li>
      <li>El <strong>último subnivel</strong> que se llena indica el <strong>bloque</strong> (s, p, d o f).</li>
      <li>En los bloques s y p, los electrones del último nivel indican el grupo: [Ne] 3s² 3p⁴ → 6 electrones de valencia → grupo 16.</li>
    </ul>
    <div class="nota-estudio">
      <strong>⚠️ Excepciones famosas:</strong> el cromo es [Ar] 4s¹ 3d⁵ y el cobre es [Ar] 4s¹ 3d¹⁰, porque los subniveles d semillenos o llenos son más estables.
    </div>

    <h4>✍️ Practica</h4>
    ${ejercicio('Escribe la configuración electrónica del azufre (Z = 16).', '1s² 2s² 2p⁶ 3s² 3p⁴ &nbsp;o abreviada&nbsp; [Ne] 3s² 3p⁴. Está en el periodo 3, bloque p, grupo 16.')}
    ${ejercicio('¿Cuántos electrones desapareados tiene el carbono (Z = 6)?', '1s² 2s² 2p² → 2p [↑ ][↑ ][ &nbsp;] → <strong>2 electrones desapareados</strong> (regla de Hund).')}
    ${ejercicio('Escribe la configuración del calcio (Z = 20).', '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² &nbsp;=&nbsp; [Ar] 4s². Periodo 4, grupo 2.')}
  `,

  "q1-8": `
    <h4>Historia de la tabla periódica</h4>
    <ul class="linea-tiempo">
      <li><strong>1817 · Döbereiner:</strong> agrupa elementos parecidos de tres en tres (triadas), como Ca, Sr y Ba.</li>
      <li><strong>1864 · Newlands:</strong> observa que las propiedades se repiten cada ocho elementos (ley de las octavas).</li>
      <li><strong>1869 · Mendeléiev:</strong> ordena 63 elementos por masa atómica y deja <strong>huecos</strong> para elementos aún no descubiertos. Predijo el "eka-silicio", que se descubrió en 1886 y hoy llamamos germanio.</li>
      <li><strong>1913 · Moseley:</strong> demuestra que el orden correcto es por <strong>número atómico (Z)</strong>, como en la tabla actual.</li>
    </ul>

    <h4>Cómo leer una casilla</h4>
    <div class="casilla-elemento">
      <span class="ce-z">6</span>
      <span class="ce-simbolo">C</span>
      <span class="ce-nombre">Carbono</span>
      <span class="ce-masa">12.011</span>
    </div>
    <ul>
      <li><strong>6:</strong> número atómico (protones)</li>
      <li><strong>C:</strong> símbolo químico (la primera letra siempre es mayúscula: Co es cobalto, CO es monóxido de carbono)</li>
      <li><strong>12.011:</strong> masa atómica promedio en uma</li>
    </ul>

    <h4>Metales, no metales y metaloides</h4>
    <table class="tabla-estudio">
      <tr><th>Propiedad</th><th>Metales</th><th>No metales</th><th>Metaloides</th></tr>
      <tr><td>Brillo</td><td>Brillantes</td><td>Opacos</td><td>Algunos brillan</td></tr>
      <tr><td>Conducción</td><td>Buenos conductores de calor y electricidad</td><td>Malos conductores (aislantes)</td><td>Semiconductores</td></tr>
      <tr><td>Estado (25 °C)</td><td>Sólidos (excepto el mercurio)</td><td>Sólidos, líquidos (bromo) o gases</td><td>Sólidos</td></tr>
      <tr><td>Electrones</td><td>Tienden a perderlos (cationes)</td><td>Tienden a ganarlos (aniones)</td><td>Intermedio</td></tr>
      <tr><td>Ejemplos</td><td>Fe, Cu, Al, Au</td><td>O, N, Cl, S</td><td>Si, B, Ge</td></tr>
    </table>

    <h4>Ubicar un elemento con su configuración</h4>
    <div class="formula">
Fósforo (Z=15): 1s² 2s² 2p⁶ 3s² 3p³<br>
• Nivel más alto = 3 → <strong>periodo 3</strong><br>
• Último subnivel = p → <strong>bloque p</strong><br>
• Electrones de valencia = 2 + 3 = 5 → <strong>grupo 15</strong>
    </div>

    <h4>Los elementos de la vida</h4>
    <p>Casi el 99 % de la masa de los seres vivos está formado por seis elementos, que se recuerdan como <strong>CHONPS</strong>: carbono, hidrógeno, oxígeno, nitrógeno, fósforo y azufre. Otros son indispensables en pequeñas cantidades: hierro (sangre), calcio (huesos), yodo (tiroides) y sodio y potasio (nervios).</p>
    <div class="ejemplo">
      <strong>Contexto Chiapas:</strong> el <strong>ámbar de Simojovel</strong> es resina fósil formada principalmente por carbono, hidrógeno y oxígeno. La arena de las playas de la costa contiene mucho silicio (en forma de SiO₂), el mismo elemento de los chips de los celulares.
    </div>
    <p>Explora todos los elementos en la <a href="#/tabla-periodica">Tabla Periódica Interactiva</a>.</p>

    <h4>✍️ Practica</h4>
    ${ejercicio('¿En qué periodo y grupo está el elemento con configuración [Ar] 4s¹?', 'Periodo 4 (nivel más alto 4), grupo 1 (1 electrón de valencia). Es el <strong>potasio (K)</strong>.')}
    ${ejercicio('¿Por qué Mendeléiev dejó huecos en su tabla?', 'Porque confió en que las propiedades se repetían periódicamente y predijo que existían elementos aún no descubiertos. Cuando se encontraron (como el germanio) tenían las propiedades que él predijo.')}
  `,

  "q1-9": `
    <h4>¿Por qué existen las tendencias? Carga nuclear efectiva</h4>
    <p>Los electrones externos sienten la atracción del núcleo, pero los electrones internos los "protegen" (efecto pantalla). La atracción real que sienten se llama <strong>carga nuclear efectiva</strong>.</p>
    <ul>
      <li><strong>En un periodo (→):</strong> aumentan los protones pero no los niveles. Los electrones son atraídos con más fuerza: el átomo se hace más pequeño y retiene mejor sus electrones.</li>
      <li><strong>En un grupo (↓):</strong> se agregan niveles de energía. Los electrones externos quedan más lejos y protegidos: el átomo es más grande y los pierde con más facilidad.</li>
    </ul>

    <h4>Resumen de tendencias</h4>
    <table class="tabla-estudio">
      <tr><th>Propiedad</th><th>En el periodo (→)</th><th>En el grupo (↓)</th><th>Valor máximo</th></tr>
      <tr><td>Radio atómico</td><td>Disminuye</td><td>Aumenta</td><td>Abajo a la izquierda (Cs, Fr)</td></tr>
      <tr><td>Energía de ionización</td><td>Aumenta</td><td>Disminuye</td><td>Arriba a la derecha (He)</td></tr>
      <tr><td>Electronegatividad</td><td>Aumenta</td><td>Disminuye</td><td>Flúor (F)</td></tr>
      <tr><td>Afinidad electrónica</td><td>Aumenta (en general)</td><td>Disminuye (en general)</td><td>Halógenos (Cl)</td></tr>
      <tr><td>Carácter metálico</td><td>Disminuye</td><td>Aumenta</td><td>Abajo a la izquierda</td></tr>
    </table>
    <p><strong>Afinidad electrónica:</strong> energía que se libera cuando un átomo gana un electrón. Los halógenos (grupo 17) la tienen alta porque con un electrón más completan su octeto.</p>

    <h4>Radio de los iones</h4>
    <ul>
      <li><strong>Los cationes son más pequeños</strong> que su átomo: Na⁺ es menor que Na porque perdió su último nivel.</li>
      <li><strong>Los aniones son más grandes</strong> que su átomo: Cl⁻ es mayor que Cl porque los electrones extra se repelen.</li>
    </ul>

    <h4>Valores de electronegatividad (escala de Pauling)</h4>
    <table class="tabla-estudio">
      <tr><td><strong>F</strong> 3.98</td><td><strong>O</strong> 3.44</td><td><strong>Cl</strong> 3.16</td><td><strong>N</strong> 3.04</td></tr>
      <tr><td><strong>C</strong> 2.55</td><td><strong>S</strong> 2.58</td><td><strong>H</strong> 2.20</td><td><strong>P</strong> 2.19</td></tr>
      <tr><td><strong>Mg</strong> 1.31</td><td><strong>Na</strong> 0.93</td><td><strong>K</strong> 0.82</td><td><strong>Cs</strong> 0.79</td></tr>
    </table>
    <p>Estos valores sirven para predecir el tipo de enlace (lo verás en "Tipos de Enlace Químico").</p>

    <h4>✍️ Practica</h4>
    ${ejercicio('Ordena de mayor a menor radio atómico: Mg, Na, Cl.', 'Están en el periodo 3; el radio disminuye hacia la derecha: <strong>Na > Mg > Cl</strong>.')}
    ${ejercicio('Ordena de mayor a menor electronegatividad: C, F, N, O.', 'Aumenta hacia la derecha en el periodo 2: <strong>F > O > N > C</strong>.')}
    ${ejercicio('¿Por qué es más fácil quitarle un electrón al potasio que al sodio?', 'El potasio tiene un nivel de energía más; su electrón externo está más lejos del núcleo y más protegido, así que se necesita menos energía (menor energía de ionización).')}
  `,

  "q1-10": `
    <h4>¿Por qué se unen los átomos?</h4>
    <p>Los átomos se enlazan porque juntos tienen <strong>menos energía y son más estables</strong> que separados. La mayoría lo logra completando 8 electrones en su capa de valencia, como los gases nobles.</p>

    <h4>Pasos para dibujar una estructura de Lewis</h4>
    <ol>
      <li>Suma los electrones de valencia de todos los átomos.</li>
      <li>Elige el átomo central: el menos electronegativo (el hidrógeno nunca es central).</li>
      <li>Une cada átomo al central con un enlace sencillo (cada enlace = 2 electrones).</li>
      <li>Reparte los electrones restantes para completar octetos, empezando por los átomos de afuera.</li>
      <li>Si al átomo central le faltan electrones, forma enlaces dobles o triples.</li>
    </ol>

    <h4>Ejemplos resueltos</h4>
    <p><strong>Agua (H₂O):</strong> 2(1) + 6 = 8 electrones → 2 enlaces y 2 pares libres en el O.</p>
    <pre class="formula lewis">
    ··
H — O — H
    ··</pre>

    <p><strong>Amoniaco (NH₃):</strong> 5 + 3(1) = 8 electrones → 3 enlaces y 1 par libre en el N.</p>
    <pre class="formula lewis">
    ··
H — N — H
    |
    H</pre>

    <p><strong>Dióxido de carbono (CO₂):</strong> 4 + 2(6) = 16 electrones → 2 enlaces dobles.</p>
    <pre class="formula lewis">
··       ··
O  ═ C ═  O
··       ··</pre>

    <p><strong>Nitrógeno (N₂):</strong> 2(5) = 10 electrones → 1 enlace triple.</p>
    <pre class="formula lewis">
:N ≡ N:</pre>

    <h4>Enlaces sencillos, dobles y triples</h4>
    <table class="tabla-estudio">
      <tr><th>Tipo</th><th>Electrones compartidos</th><th>Ejemplo</th><th>Fuerza y longitud</th></tr>
      <tr><td>Sencillo (—)</td><td>2</td><td>H—H, C—H</td><td>Más débil y más largo</td></tr>
      <tr><td>Doble (═)</td><td>4</td><td>O═O, C═O</td><td>Intermedio</td></tr>
      <tr><td>Triple (≡)</td><td>6</td><td>N≡N</td><td>Más fuerte y más corto</td></tr>
    </table>
    <p>El triple enlace del N₂ es tan fuerte que, aunque el aire tiene 78 % de nitrógeno, las plantas no pueden usarlo directamente; dependen de bacterias del suelo (como las de las raíces del frijol) que lo transforman.</p>

    <h4>Excepciones a la regla del octeto</h4>
    <ul>
      <li><strong>Hidrógeno:</strong> se estabiliza con solo 2 electrones (dueto).</li>
      <li><strong>Berilio y boro:</strong> pueden quedarse con 4 y 6 electrones (BeCl₂, BF₃).</li>
      <li><strong>Octeto expandido:</strong> elementos del periodo 3 en adelante pueden tener más de 8 (PCl₅ tiene 10, SF₆ tiene 12).</li>
    </ul>

    <h4>Enlace covalente coordinado</h4>
    <p>Ocurre cuando <strong>un solo átomo aporta los dos electrones</strong> del enlace. Ejemplo: el ion amonio NH₄⁺ se forma cuando el par libre del nitrógeno del NH₃ se une a un ion H⁺.</p>

    <h4>✍️ Practica</h4>
    ${ejercicio('¿Cuántos electrones de valencia tiene en total el metano (CH₄)? Dibuja su estructura.', 'C aporta 4 y cada H aporta 1: 4 + 4 = <strong>8 electrones</strong>. El carbono queda en el centro con 4 enlaces sencillos, uno con cada hidrógeno, y sin pares libres.')}
    ${ejercicio('¿Por qué el hidrógeno nunca es el átomo central?', 'Porque solo puede formar un enlace (se completa con 2 electrones). El átomo central necesita unirse a varios átomos.')}
  `,

  "q1-11": `
    <h4>Predecir el tipo de enlace con la electronegatividad</h4>
    <p>Calcula la diferencia de electronegatividad (ΔEN) entre los dos átomos:</p>
    <div class="formula">
ΔEN = EN mayor − EN menor<br><br>
ΔEN mayor que 1.7 → enlace iónico<br>
ΔEN entre 0.4 y 1.7 → covalente polar<br>
ΔEN menor que 0.4 → covalente no polar
    </div>
    <table class="tabla-estudio">
      <tr><th>Compuesto</th><th>Cálculo</th><th>ΔEN</th><th>Tipo de enlace</th></tr>
      <tr><td>NaCl</td><td>3.16 − 0.93</td><td>2.23</td><td>Iónico</td></tr>
      <tr><td>H₂O (O—H)</td><td>3.44 − 2.20</td><td>1.24</td><td>Covalente polar</td></tr>
      <tr><td>HCl</td><td>3.16 − 2.20</td><td>0.96</td><td>Covalente polar</td></tr>
      <tr><td>CH₄ (C—H)</td><td>2.55 − 2.20</td><td>0.35</td><td>Covalente no polar</td></tr>
      <tr><td>Cl₂</td><td>3.16 − 3.16</td><td>0</td><td>Covalente no polar</td></tr>
    </table>
    <p>Es una guía aproximada: el límite de 1.7 no es exacto y algunos libros usan 2.0.</p>

    <h4>Formación del cloruro de sodio</h4>
    <pre class="formula lewis">
       ··          ··
Na· + ·Cl: → Na⁺ [:Cl:]⁻
       ··          ··</pre>
    <p>El sodio cede su electrón y el cloro lo acepta. Ambos quedan con 8 electrones en su última capa y se atraen por tener cargas opuestas.</p>

    <h4>Comparación de propiedades</h4>
    <table class="tabla-estudio">
      <tr><th>Propiedad</th><th>Iónico</th><th>Covalente</th><th>Metálico</th></tr>
      <tr><td>Estado a 25 °C</td><td>Sólidos cristalinos</td><td>Sólidos, líquidos o gases</td><td>Sólidos (excepto Hg)</td></tr>
      <tr><td>Punto de fusión</td><td>Alto (NaCl: 801 °C)</td><td>Bajo (azúcar ≈ 186 °C)</td><td>Variable, generalmente alto</td></tr>
      <tr><td>Conducen electricidad</td><td>Solo disueltos o fundidos</td><td>No (en general)</td><td>Sí, en estado sólido</td></tr>
      <tr><td>Solubilidad en agua</td><td>Muchos son solubles</td><td>Los polares sí, los no polares no</td><td>No</td></tr>
    </table>

    <h4>Fuerzas intermoleculares</h4>
    <p>Son atracciones <strong>entre moléculas</strong> (no dentro de ellas). Explican por qué unas sustancias hierven más fácil que otras:</p>
    <ul>
      <li><strong>Puentes de hidrógeno:</strong> las más fuertes; ocurren cuando el H está unido a F, O o N. Hacen que el agua hierva a 100 °C, aunque es una molécula pequeña.</li>
      <li><strong>Dipolo-dipolo:</strong> entre moléculas polares (HCl).</li>
      <li><strong>Fuerzas de London:</strong> débiles, existen en todas las moléculas; son las únicas en las no polares (gas butano, aceites).</li>
    </ul>
    <div class="ejemplo">
      <strong>¿Por qué flota el hielo?</strong> Al congelarse, los puentes de hidrógeno acomodan las moléculas de agua en una red con huecos. El hielo ocupa más volumen y es menos denso que el agua líquida. Gracias a eso, los lagos se congelan por arriba y los peces sobreviven debajo.
    </div>

    <h4>Experimento: ¿quién conduce la electricidad?</h4>
    <p>Con una pila de 9 V, un foco LED y dos cables, prueba agua con sal, agua con azúcar y agua sola. El agua con sal enciende el LED (el NaCl es iónico y libera iones Na⁺ y Cl⁻); el agua con azúcar no (el azúcar es covalente y no forma iones). <em>Hazlo solo con pilas, nunca con la corriente de la casa.</em></p>

    <h4>✍️ Practica</h4>
    ${ejercicio('¿Qué tipo de enlace tiene el KCl? (EN: K = 0.82, Cl = 3.16)', 'ΔEN = 3.16 − 0.82 = 2.34 → mayor que 1.7 → <strong>iónico</strong>.')}
    ${ejercicio('¿Por qué el aceite no se disuelve en el agua?', 'El agua es polar y forma puentes de hidrógeno; el aceite es no polar. "Lo semejante disuelve a lo semejante": las sustancias polares disuelven a las polares y las no polares a las no polares.')}
  `,

  /* =================== QUÍMICA II =================== */

  "q2-1": `
    <h4>Número de oxidación: la base para nombrar</h4>
    <p>Es la carga que tendría un átomo si todos sus enlaces fueran iónicos. Reglas principales:</p>
    <ol>
      <li>Elementos libres (Fe, O₂, H₂) tienen número de oxidación <strong>0</strong>.</li>
      <li>El oxígeno casi siempre es <strong>−2</strong> (en peróxidos como H₂O₂ es −1).</li>
      <li>El hidrógeno es <strong>+1</strong> con no metales y <strong>−1</strong> en hidruros metálicos (NaH).</li>
      <li>Grupo 1 siempre <strong>+1</strong>; grupo 2 siempre <strong>+2</strong>; flúor siempre <strong>−1</strong>.</li>
      <li>La suma en un compuesto es <strong>0</strong>; en un ion, es igual a su carga.</li>
    </ol>
    <div class="formula">
¿Cuál es el número de oxidación del S en H₂SO₄?<br>
2(+1) + S + 4(−2) = 0<br>
2 + S − 8 = 0 &nbsp;→&nbsp; <strong>S = +6</strong>
    </div>

    <h4>Los tres sistemas de nomenclatura</h4>
    <table class="tabla-estudio">
      <tr><th>Fórmula</th><th>Sistemática (prefijos)</th><th>Stock (romanos)</th><th>Tradicional</th></tr>
      <tr><td>FeO</td><td>Monóxido de hierro</td><td>Óxido de hierro (II)</td><td>Óxido ferroso</td></tr>
      <tr><td>Fe₂O₃</td><td>Trióxido de dihierro</td><td>Óxido de hierro (III)</td><td>Óxido férrico</td></tr>
      <tr><td>CO₂</td><td>Dióxido de carbono</td><td>Óxido de carbono (IV)</td><td>Anhídrido carbónico</td></tr>
      <tr><td>CuCl₂</td><td>Dicloruro de cobre</td><td>Cloruro de cobre (II)</td><td>Cloruro cúprico</td></tr>
    </table>
    <p><strong>Prefijos:</strong> mono (1), di (2), tri (3), tetra (4), penta (5), hexa (6), hepta (7).<br>
    <strong>Tradicional:</strong> si el elemento tiene dos números de oxidación, termina en <em>-oso</em> el menor y en <em>-ico</em> el mayor.</p>

    <h4>Cómo escribir la fórmula: método del cruce</h4>
    <div class="formula">
Óxido de aluminio: Al³⁺ y O²⁻<br>
Se cruzan las cargas como subíndices: Al₂O₃<br><br>
Hidróxido de magnesio: Mg²⁺ y OH⁻ → Mg(OH)₂
    </div>
    <p>Si los subíndices se pueden simplificar, se simplifican: Ca²⁺ y O²⁻ → Ca₂O₂ → <strong>CaO</strong>.</p>

    <h4>Oxisales: del ácido a la sal</h4>
    <p>Cuando un oxácido pierde sus hidrógenos y se une a un metal, cambia la terminación:</p>
    <div class="formula">
-oso &nbsp;→&nbsp; -ito &nbsp;&nbsp;&nbsp;&nbsp;(ácido nitroso HNO₂ → nitrito)<br>
-ico &nbsp;→&nbsp; -ato &nbsp;&nbsp;&nbsp;&nbsp;(ácido sulfúrico H₂SO₄ → sulfato)
    </div>

    <h4>Iones poliatómicos que conviene memorizar</h4>
    <table class="tabla-estudio">
      <tr><td>NH₄⁺ amonio</td><td>OH⁻ hidróxido</td><td>NO₃⁻ nitrato</td><td>NO₂⁻ nitrito</td></tr>
      <tr><td>SO₄²⁻ sulfato</td><td>SO₃²⁻ sulfito</td><td>CO₃²⁻ carbonato</td><td>HCO₃⁻ bicarbonato</td></tr>
      <tr><td>PO₄³⁻ fosfato</td><td>ClO⁻ hipoclorito</td><td>MnO₄⁻ permanganato</td><td>CN⁻ cianuro</td></tr>
    </table>

    <h4>Compuestos de todos los días</h4>
    <table class="tabla-estudio">
      <tr><th>Fórmula</th><th>Nombre químico</th><th>Nombre común / uso</th></tr>
      <tr><td>NaCl</td><td>Cloruro de sodio</td><td>Sal de mesa</td></tr>
      <tr><td>NaHCO₃</td><td>Bicarbonato de sodio</td><td>Polvo para hornear, antiácido</td></tr>
      <tr><td>CaCO₃</td><td>Carbonato de calcio</td><td>Piedra caliza, gis, cascarón de huevo</td></tr>
      <tr><td>Ca(OH)₂</td><td>Hidróxido de calcio</td><td>Cal para nixtamalizar el maíz</td></tr>
      <tr><td>NaClO</td><td>Hipoclorito de sodio</td><td>Cloro para limpiar y desinfectar</td></tr>
      <tr><td>H₂O₂</td><td>Peróxido de hidrógeno</td><td>Agua oxigenada</td></tr>
      <tr><td>NaOH</td><td>Hidróxido de sodio</td><td>Sosa cáustica, hacer jabón</td></tr>
      <tr><td>HCl</td><td>Ácido clorhídrico</td><td>Ácido muriático (diluido)</td></tr>
    </table>
    <div class="ejemplo">
      <strong>Contexto Chiapas:</strong> las paredes del Cañón del Sumidero son de roca caliza (CaCO₃). Al calentar la caliza se obtiene cal viva (CaO), y al agregarle agua se obtiene la cal apagada, Ca(OH)₂, que se usa para nixtamalizar el maíz de las tortillas.
    </div>

    <h4>✍️ Practica</h4>
    ${ejercicio('Nombra el compuesto CuO en los sistemas Stock y tradicional (Cu puede ser +1 o +2).', 'En CuO el cobre es +2: <strong>óxido de cobre (II)</strong> u <strong>óxido cúprico</strong>.')}
    ${ejercicio('Escribe la fórmula del sulfato de sodio.', 'Na⁺ y SO₄²⁻ → se cruzan las cargas → <strong>Na₂SO₄</strong>.')}
    ${ejercicio('¿Cuál es el número de oxidación del N en HNO₃?', '(+1) + N + 3(−2) = 0 → N = <strong>+5</strong>.')}
  `,

  "q2-2": `
    <h4>Evidencias de que ocurrió una reacción</h4>
    <ul>
      <li>Se desprende un gas (burbujas): vinagre con bicarbonato.</li>
      <li>Cambia el color: una manzana partida que se oscurece.</li>
      <li>Se forma un sólido (precipitado) en un líquido.</li>
      <li>Cambia la temperatura: se calienta o se enfría.</li>
      <li>Se produce luz u olor: un cerillo encendido, comida descompuesta.</li>
    </ul>

    <h4>Símbolos en una ecuación química</h4>
    <table class="tabla-estudio">
      <tr><th>Símbolo</th><th>Significado</th></tr>
      <tr><td>(s)</td><td>Sólido</td></tr>
      <tr><td>(l)</td><td>Líquido</td></tr>
      <tr><td>(g)</td><td>Gas</td></tr>
      <tr><td>(ac)</td><td>Disuelto en agua (acuoso)</td></tr>
      <tr><td>→</td><td>"Produce"</td></tr>
      <tr><td>⇌</td><td>Reacción reversible (va en ambos sentidos)</td></tr>
      <tr><td>Δ sobre la flecha</td><td>Se necesita calor</td></tr>
      <tr><td>↑ / ↓</td><td>Se desprende un gas / se forma un precipitado</td></tr>
    </table>
    <div class="formula">
NaHCO₃(s) + CH₃COOH(ac) → CH₃COONa(ac) + H₂O(l) + CO₂(g)↑<br>
bicarbonato + vinagre → acetato de sodio + agua + dióxido de carbono
    </div>

    <h4>Más tipos de reacciones</h4>
    <ul>
      <li><strong>Combustión:</strong> un combustible reacciona con oxígeno y libera energía.
        <div class="formula">CH₄ + 2O₂ → CO₂ + 2H₂O + energía</div>
      </li>
      <li><strong>Neutralización:</strong> un ácido reacciona con una base y forma sal y agua.
        <div class="formula">HCl + NaOH → NaCl + H₂O</div>
      </li>
    </ul>
    <div class="ejemplo">
      <strong>Combustión completa e incompleta:</strong> con suficiente oxígeno se produce CO₂ y agua (flama azul). Con poco oxígeno se produce <strong>monóxido de carbono (CO)</strong>, un gas tóxico, sin color ni olor, y hollín (flama amarilla). Por eso los fogones de leña y los calentadores deben usarse en lugares ventilados.
    </div>

    <h4>¿Qué hace que una reacción sea más rápida?</h4>
    <table class="tabla-estudio">
      <tr><th>Factor</th><th>Efecto</th><th>Ejemplo cotidiano</th></tr>
      <tr><td>Temperatura</td><td>Más temperatura → más rápida</td><td>Refrigeramos la comida para que se descomponga más lento</td></tr>
      <tr><td>Concentración</td><td>Más concentración → más rápida</td><td>Un ácido concentrado ataca más rápido un metal</td></tr>
      <tr><td>Superficie de contacto</td><td>Partículas pequeñas → más rápida</td><td>La leña en astillas prende más rápido que un tronco</td></tr>
      <tr><td>Catalizador</td><td>Acelera sin gastarse</td><td>Las enzimas de la saliva empiezan a digerir el almidón de la tortilla</td></tr>
    </table>

    <h4>✍️ Practica</h4>
    ${ejercicio('Clasifica: CaCO₃ → CaO + CO₂', '<strong>Descomposición</strong>: un compuesto se separa en dos sustancias más simples (así se obtiene la cal viva al calentar la caliza).')}
    ${ejercicio('Clasifica: Fe + CuSO₄ → FeSO₄ + Cu', '<strong>Sustitución simple</strong>: el hierro desplaza al cobre de su compuesto.')}
    ${ejercicio('¿Por qué una pastilla efervescente entera tarda más en disolverse que una molida?', 'La pastilla molida tiene más superficie de contacto con el agua, así que la reacción es más rápida.')}
  `,

  "q2-3": `
    <h4>Regla de oro: coeficientes, no subíndices</h4>
    <p>Para balancear solo se cambian los <strong>coeficientes</strong> (los números grandes de adelante). Nunca cambies los subíndices, porque cambiarías la sustancia:</p>
    <div class="formula">
2H₂O → dos moléculas de agua ✓<br>
H₂O₂ → ¡agua oxigenada, otra sustancia! ✗
    </div>

    <h4>Orden recomendado para el tanteo</h4>
    <p>Balancea en este orden: <strong>metales → no metales → hidrógeno → oxígeno</strong>. El oxígeno suele dejarse al final porque aparece en muchas sustancias.</p>

    <h4>Ejemplo paso a paso: combustión del propano (gas LP)</h4>
    <div class="formula">
C₃H₈ + O₂ → CO₂ + H₂O<br><br>
1) Carbono: hay 3 a la izquierda → pongo 3 en CO₂<br>
&nbsp;&nbsp;&nbsp;C₃H₈ + O₂ → 3CO₂ + H₂O<br>
2) Hidrógeno: hay 8 a la izquierda → pongo 4 en H₂O<br>
&nbsp;&nbsp;&nbsp;C₃H₈ + O₂ → 3CO₂ + 4H₂O<br>
3) Oxígeno: a la derecha hay 3(2) + 4(1) = 10 → pongo 5 en O₂<br>
&nbsp;&nbsp;&nbsp;<strong>C₃H₈ + 5O₂ → 3CO₂ + 4H₂O</strong><br><br>
Verificación: C 3 = 3 ✓ &nbsp; H 8 = 8 ✓ &nbsp; O 10 = 10 ✓
    </div>

    <h4>Método algebraico</h4>
    <p>Útil cuando el tanteo se complica. Se asigna una letra a cada coeficiente:</p>
    <div class="formula">
a C₃H₈ + b O₂ → c CO₂ + d H₂O<br><br>
C: 3a = c<br>
H: 8a = 2d<br>
O: 2b = 2c + d<br><br>
Si a = 1 → c = 3, d = 4, 2b = 6 + 4 → b = 5<br>
Resultado: 1, 5, 3, 4 (igual que por tanteo)
    </div>
    <p>Si algún coeficiente sale con fracción, multiplica todos por el mismo número para que queden enteros.</p>

    <h4>Errores comunes</h4>
    <ul>
      <li>Cambiar subíndices en lugar de coeficientes.</li>
      <li>Olvidar multiplicar el coeficiente por el subíndice: en 3CO₂ hay 6 oxígenos.</li>
      <li>No verificar todos los elementos al final.</li>
      <li>Dejar coeficientes que se pueden simplificar (4, 2, 2 → 2, 1, 1).</li>
    </ul>

    <p>Practica con el simulador de <a href="./views/quimica/BalanceoDeEcuaciones.html" target="_blank" rel="noopener">Balanceo de Ecuaciones</a>.</p>

    <h4>✍️ Practica</h4>
    ${ejercicio('Balancea: N₂ + H₂ → NH₃', '<strong>N₂ + 3H₂ → 2NH₃</strong> &nbsp;(N: 2 = 2, H: 6 = 6). Es la reacción con la que se fabrican fertilizantes.')}
    ${ejercicio('Balancea: H₂O₂ → H₂O + O₂', '<strong>2H₂O₂ → 2H₂O + O₂</strong> &nbsp;(H: 4 = 4, O: 4 = 2 + 2). Es lo que ocurre cuando el agua oxigenada hace burbujas en una herida.')}
    ${ejercicio('Balancea: C₂H₆ + O₂ → CO₂ + H₂O', '<strong>2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O</strong> &nbsp;(C: 4 = 4, H: 12 = 12, O: 14 = 8 + 6).')}
    ${ejercicio('Balancea: Na + H₂O → NaOH + H₂', '<strong>2Na + 2H₂O → 2NaOH + H₂</strong> &nbsp;(Na: 2 = 2, H: 4 = 2 + 2, O: 2 = 2).')}
  `,

  "q2-4": `
    <h4>Cómo calcular la masa molar</h4>
    <p>Suma las masas atómicas de todos los átomos de la fórmula (usa la tabla periódica):</p>
    <div class="formula">
H₂SO₄ = 2(1) + 32 + 4(16) = <strong>98 g/mol</strong><br>
CO₂ = 12 + 2(16) = <strong>44 g/mol</strong><br>
NaCl = 23 + 35.5 = <strong>58.5 g/mol</strong><br>
C₆H₁₂O₆ (glucosa) = 6(12) + 12(1) + 6(16) = <strong>180 g/mol</strong>
    </div>

    <h4>Mapa de conversiones</h4>
    <div class="formula">
GRAMOS → MOLES: divide entre la masa molar (÷ M)<br>
MOLES → GRAMOS: multiplica por la masa molar (× M)<br>
MOLES → PARTÍCULAS: multiplica por 6.022×10²³<br>
PARTÍCULAS → MOLES: divide entre 6.022×10²³<br>
MOLES de gas → LITROS: multiplica por 22.4 L (condiciones normales)
    </div>
    <p>Los <strong>moles</strong> son el "puente": casi todos los problemas pasan por ellos.</p>

    <h4>Problema resuelto paso a paso</h4>
    <p><strong>¿Cuántos gramos de CO₂ se producen al quemar 32 g de metano (CH₄)?</strong></p>
    <div class="formula">
1) Ecuación balanceada: CH₄ + 2O₂ → CO₂ + 2H₂O<br>
2) Gramos a moles: M(CH₄) = 12 + 4 = 16 g/mol → n = 32 / 16 = 2 mol CH₄<br>
3) Proporción molar: 1 mol CH₄ produce 1 mol CO₂ → 2 mol CO₂<br>
4) Moles a gramos: M(CO₂) = 44 g/mol → 2 × 44 = <strong>88 g de CO₂</strong>
    </div>

    <h4>Reactivo limitante</h4>
    <p>Es el reactivo que <strong>se acaba primero</strong> y determina cuánto producto se forma. El otro queda en exceso.</p>
    <div class="ejemplo">
      <strong>Analogía:</strong> para un taco necesitas 2 tortillas y 1 porción de guisado. Si tienes 10 tortillas y 8 porciones, solo salen 5 tacos: las tortillas son el reactivo limitante y sobran 3 porciones de guisado.
    </div>
    <div class="formula">
2H₂ + O₂ → 2H₂O &nbsp;&nbsp;con 4 mol de H₂ y 3 mol de O₂<br><br>
Para 4 mol de H₂ se necesitan 4 ÷ 2 = 2 mol de O₂ (hay 3 → sobra 1)<br>
Reactivo limitante: <strong>H₂</strong> &nbsp;|&nbsp; Exceso: 1 mol de O₂<br>
Producto: 4 mol de H₂O
    </div>

    <h4>Rendimiento porcentual</h4>
    <p>En la práctica casi nunca se obtiene todo el producto calculado (hay pérdidas, reacciones secundarias, etc.).</p>
    <div class="formula">
% rendimiento = (rendimiento real / rendimiento teórico) × 100<br><br>
Si se esperaban 88 g de CO₂ y se obtuvieron 70.4 g:<br>
(70.4 / 88) × 100 = <strong>80 %</strong>
    </div>

    <h4>Composición porcentual</h4>
    <div class="formula">
% de un elemento = (masa del elemento en la fórmula / masa molar) × 100<br><br>
Agua (18 g/mol): H = (2 / 18) × 100 = 11.1 % &nbsp;|&nbsp; O = (16 / 18) × 100 = 88.9 %
    </div>

    <h4>✍️ Practica</h4>
    ${ejercicio('¿Cuántos moles hay en 117 g de NaCl?', 'n = 117 / 58.5 = <strong>2 mol</strong>.')}
    ${ejercicio('¿Cuántas moléculas hay en 0.5 mol de agua?', '0.5 × 6.022×10²³ = <strong>3.011 × 10²³ moléculas</strong>.')}
    ${ejercicio('¿Cuántos gramos pesan 3 mol de agua?', 'm = n × M = 3 × 18 = <strong>54 g</strong>.')}
    ${ejercicio('¿Qué volumen ocupan 2 mol de O₂ en condiciones normales?', '2 × 22.4 = <strong>44.8 L</strong>.')}
  `,

  "q2-5": `
    <h4>¿De qué depende que algo se disuelva?</h4>
    <ul>
      <li><strong>Naturaleza:</strong> "lo semejante disuelve a lo semejante". El agua (polar) disuelve sal y azúcar; la gasolina (no polar) disuelve grasas.</li>
      <li><strong>Temperatura:</strong> la mayoría de los sólidos se disuelven más en agua caliente (el azúcar en el café caliente). Los gases se disuelven <strong>menos</strong> en agua caliente.</li>
      <li><strong>Presión:</strong> afecta a los gases. El refresco se embotella a presión para disolver mucho CO₂; al abrirlo, baja la presión y salen las burbujas.</li>
      <li><strong>Agitación y tamaño de partícula:</strong> no cambian cuánto se disuelve, pero sí qué tan rápido.</li>
    </ul>
    <div class="ejemplo">
      <strong>Contexto:</strong> en ríos y lagunas calientes hay menos oxígeno disuelto, lo que afecta a los peces. Por eso las descargas de agua caliente de las industrias dañan los ecosistemas.
    </div>

    <h4>Solubilidad</h4>
    <p>Es la cantidad máxima de soluto que se disuelve en 100 g de agua a cierta temperatura. Por ejemplo, el azúcar de mesa es muchísimo más soluble que la sal: a 20 °C se disuelven unos 200 g de azúcar en 100 g de agua, contra unos 36 g de sal. Además, la solubilidad de la sal casi no cambia con la temperatura.</p>

    <h4>Problemas resueltos</h4>
    <div class="formula">
<strong>% masa:</strong> 10 g de azúcar en 90 g de agua<br>
masa de solución = 10 + 90 = 100 g → (10 / 100) × 100 = <strong>10 %</strong><br><br>
<strong>Molaridad:</strong> 58.5 g de NaCl en 500 mL de solución<br>
n = 58.5 / 58.5 = 1 mol &nbsp;|&nbsp; V = 0.5 L → M = 1 / 0.5 = <strong>2 M</strong><br><br>
<strong>¿Cuánto NaCl necesito para 250 mL de solución 0.1 M?</strong><br>
n = M × V = 0.1 × 0.25 = 0.025 mol → m = 0.025 × 58.5 = <strong>1.46 g</strong>
    </div>

    <h4>Diluciones</h4>
    <p>Al agregar agua, la cantidad de soluto no cambia; solo aumenta el volumen.</p>
    <div class="formula">
C₁ × V₁ = C₂ × V₂<br><br>
Tengo una solución 2 M y necesito 100 mL de 0.5 M:<br>
V₁ = (0.5 × 100) / 2 = <strong>25 mL</strong> de la solución 2 M, y completo con agua hasta 100 mL
    </div>

    <h4>Partes por millón (ppm)</h4>
    <p>Se usa para concentraciones muy pequeñas, como contaminantes en el agua o minerales en el agua potable.</p>
    <div class="formula">
ppm = (mg de soluto / L de solución) &nbsp;&nbsp;(para soluciones en agua)<br>
Ejemplo: 3 mg de nitratos en 2 L de agua → 3 / 2 = <strong>1.5 ppm</strong>
    </div>

    <h4>Cómo preparar una solución en el laboratorio</h4>
    <div class="galeria-lab">
      ${labTarjeta('balanza', '1. Pesar', 'Balanza', 'Calcula la masa de soluto y pésala sobre un vidrio de reloj o papel, después de tarar la balanza.')}
      ${labTarjeta('vaso-precipitados', '2. Disolver', 'Vaso de precipitados', 'Disuelve el soluto en una parte del agua (menos del volumen final) y agita hasta que no queden cristales.')}
      ${labTarjeta('matraz-aforado', '3. Aforar', 'Matraz aforado', 'Pasa la solución al matraz, enjuaga el vaso con la piseta y agrega agua hasta que la parte baja del menisco toque el aforo.')}
      ${labTarjeta('piseta', '4. Mezclar y etiquetar', 'Piseta', 'Tapa el matraz, inviértelo varias veces para homogeneizar y etiqueta con el nombre, la concentración y la fecha.')}
    </div>

    <h4>✍️ Practica</h4>
    ${ejercicio('¿Cuál es la molaridad de 20 g de NaOH (M = 40 g/mol) disueltos en 250 mL de solución?', 'n = 20 / 40 = 0.5 mol; V = 0.25 L → M = 0.5 / 0.25 = <strong>2 M</strong>.')}
    ${ejercicio('¿Por qué un refresco caliente pierde más rápido el gas?', 'Porque la solubilidad de los gases disminuye al aumentar la temperatura: el CO₂ escapa más fácilmente del líquido caliente.')}
    ${ejercicio('¿Cuántos mL de una solución 1 M necesitas para preparar 500 mL de solución 0.2 M?', 'V₁ = (0.2 × 500) / 1 = <strong>100 mL</strong>, y se completa con agua hasta 500 mL.')}
  `,

  "q2-6": `
    <h4>Propiedades de ácidos y bases</h4>
    <table class="tabla-estudio">
      <tr><th>Ácidos</th><th>Bases</th></tr>
      <tr><td>Sabor agrio (limón, vinagre)</td><td>Sabor amargo y sensación jabonosa</td></tr>
      <tr><td>Tornasol azul → rojo</td><td>Tornasol rojo → azul</td></tr>
      <tr><td>Reaccionan con metales y producen hidrógeno</td><td>Disuelven grasas (destapacaños)</td></tr>
      <tr><td>pH menor que 7</td><td>pH mayor que 7</td></tr>
    </table>
    <p><em>Nunca pruebes sustancias para saber si son ácidas o básicas: usa indicadores.</em></p>

    <h4>La escala de pH con ejemplos</h4>
    <div class="escala-ph">
      ${[['0', '#b91c1c'], ['1', '#dc2626'], ['2', '#ea580c'], ['3', '#f97316'], ['4', '#f59e0b'], ['5', '#eab308'], ['6', '#a3e635'], ['7', '#22c55e'], ['8', '#14b8a6'], ['9', '#06b6d4'], ['10', '#0ea5e9'], ['11', '#3b82f6'], ['12', '#6366f1'], ['13', '#7c3aed'], ['14', '#6d28d9']]
        .map(([n, color]) => `<span style="background:${color}">${n}</span>`).join('')}
    </div>
    <div class="escala-ph-etiquetas"><span>← Más ácido</span><span>Neutro</span><span>Más básico →</span></div>
    <table class="tabla-estudio">
      <tr><th>pH aprox.</th><th>Sustancia</th></tr>
      <tr><td>1 – 2</td><td>Jugo gástrico del estómago</td></tr>
      <tr><td>2</td><td>Jugo de limón</td></tr>
      <tr><td>2.5 – 3</td><td>Vinagre, refrescos de cola</td></tr>
      <tr><td>5</td><td>Café</td></tr>
      <tr><td>5.6</td><td>Lluvia normal (con CO₂ disuelto)</td></tr>
      <tr><td>6.5</td><td>Leche</td></tr>
      <tr><td>7</td><td>Agua pura</td></tr>
      <tr><td>7.4</td><td>Sangre</td></tr>
      <tr><td>8 – 8.5</td><td>Agua de mar, bicarbonato disuelto</td></tr>
      <tr><td>9 – 10</td><td>Jabón de barra</td></tr>
      <tr><td>11</td><td>Amoniaco de limpieza</td></tr>
      <tr><td>12 – 13</td><td>Agua de cal, cloro doméstico</td></tr>
      <tr><td>14</td><td>Sosa cáustica (destapacaños)</td></tr>
    </table>
    <div class="nota-estudio">
      <strong>💡 Cada unidad de pH es 10 veces:</strong> un líquido de pH 3 es 10 veces más ácido que uno de pH 4 y 100 veces más que uno de pH 5.
    </div>

    <h4>Calcular el pH</h4>
    <div class="formula">
pH = −log[H⁺] &nbsp;&nbsp;|&nbsp;&nbsp; pOH = −log[OH⁻] &nbsp;&nbsp;|&nbsp;&nbsp; pH + pOH = 14<br><br>
Si [H⁺] = 1 × 10⁻³ M → pH = <strong>3</strong> (ácido)<br>
Si [OH⁻] = 1 × 10⁻⁴ M → pOH = 4 → pH = 14 − 4 = <strong>10</strong> (básico)
    </div>

    <h4>Fuertes y débiles</h4>
    <ul>
      <li><strong>Ácidos fuertes</strong> (se ionizan por completo): HCl, H₂SO₄, HNO₃.</li>
      <li><strong>Ácidos débiles</strong> (se ionizan poco): ácido acético del vinagre (CH₃COOH), ácido cítrico del limón, ácido carbónico del refresco.</li>
      <li><strong>Bases fuertes:</strong> NaOH, KOH, Ca(OH)₂.</li>
      <li><strong>Bases débiles:</strong> amoniaco (NH₃).</li>
    </ul>

    <h4>Pares conjugados (Brønsted-Lowry)</h4>
    <div class="formula">
HCl + H₂O → H₃O⁺ + Cl⁻<br>
HCl (ácido) dona un H⁺ al H₂O (base) → H₃O⁺ (ácido conjugado) y Cl⁻ (base conjugada)<br><br>
NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ &nbsp;&nbsp;(aquí el agua actúa como ácido)
    </div>

    <h4>Titulación (valoración ácido-base)</h4>
    <div class="galeria-lab">
      ${labTarjeta('bureta', 'Bureta', 'Agrega la base', 'Se llena con una base de concentración conocida (por ejemplo NaOH 0.1 M) y se deja caer gota a gota.')}
      ${labTarjeta('matraz-erlenmeyer', 'Matraz Erlenmeyer', 'Contiene el ácido', 'Contiene un volumen medido del ácido y unas gotas de fenolftaleína. Se agita mientras cae la base.')}
    </div>
    <p>Cuando la solución cambia a rosa pálido y el color permanece, se llegó al <strong>punto de equivalencia</strong>: los moles de H⁺ igualan a los de OH⁻. Con el volumen gastado se calcula la concentración del ácido.</p>
    <div class="formula">
Si 25 mL de HCl se neutralizan con 20 mL de NaOH 0.1 M:<br>
moles de NaOH = 0.1 × 0.020 = 0.002 mol = moles de HCl<br>
[HCl] = 0.002 / 0.025 = <strong>0.08 M</strong>
    </div>

    <h4>Experimento: indicador de col morada</h4>
    <p>Hierve hojas de col morada en agua y cuela el líquido. Agrega unas gotas a distintas sustancias:</p>
    <ul>
      <li><strong>Rojo o rosa:</strong> ácido (limón, vinagre)</li>
      <li><strong>Morado:</strong> neutro (agua)</li>
      <li><strong>Verde o amarillo:</strong> básico (bicarbonato, jabón)</li>
    </ul>

    <div class="ejemplo">
      <strong>Contexto Chiapas:</strong> el café crece mejor en suelos ligeramente ácidos (pH aproximado de 5 a 6). Cuando el suelo es demasiado ácido, los productores aplican cal para subir el pH. En el cuerpo, los antiácidos (como el hidróxido de magnesio) neutralizan el exceso de ácido del estómago, y la picadura de hormiga duele por el ácido fórmico.
    </div>

    <h4>✍️ Practica</h4>
    ${ejercicio('¿Cuál es el pH de una solución con [H⁺] = 1 × 10⁻⁵ M? ¿Es ácida o básica?', 'pH = 5 → <strong>ácida</strong> (menor que 7).')}
    ${ejercicio('Una solución tiene pH 12. ¿Cuál es su pOH?', 'pOH = 14 − 12 = <strong>2</strong>.')}
    ${ejercicio('¿Cuántas veces es más ácido un líquido de pH 2 que uno de pH 5?', 'Hay 3 unidades de diferencia: 10 × 10 × 10 = <strong>1000 veces</strong> más ácido.')}
  `,

  "q2-7": `
    <h4>Cómo identificar quién se oxida y quién se reduce</h4>
    <ol>
      <li>Escribe el número de oxidación de cada átomo en reactivos y productos.</li>
      <li>El que <strong>aumenta</strong> su número de oxidación se <strong>oxida</strong> (pierde electrones).</li>
      <li>El que <strong>disminuye</strong> su número de oxidación se <strong>reduce</strong> (gana electrones).</li>
    </ol>
    <div class="formula">
2Mg + O₂ → 2MgO<br>
Números de oxidación: Mg (0), O₂ (0) → en MgO: Mg (+2), O (−2)<br><br>
Mg: 0 → +2 &nbsp;se oxida → es el <strong>agente reductor</strong><br>
O: &nbsp;0 → −2 &nbsp;se reduce → es el <strong>agente oxidante</strong>
    </div>
    <div class="nota-estudio">
      <strong>🧠 Para no confundirte:</strong> "el que se oxida, <strong>pierde</strong>; el que se reduce, <strong>gana</strong>". Y al revés de lo que parece: el agente reductor es el que se oxida, y el agente oxidante es el que se reduce.
    </div>

    <h4>Balanceo por cambio de número de oxidación</h4>
    <div class="formula">
Cu + HNO₃ → Cu(NO₃)₂ + NO + H₂O<br><br>
1) Cambios: Cu 0 → +2 (pierde 2 e⁻) &nbsp;|&nbsp; N +5 → +2 (gana 3 e⁻)<br>
2) Igualar electrones: 3 Cu (6 e⁻ perdidos) y 2 N que se reducen (6 e⁻ ganados)<br>
3) Coloca 3 en Cu y en Cu(NO₃)₂, y 2 en NO<br>
4) Ajusta el resto por tanteo: N total = 6 + 2 = 8 → 8 HNO₃; H → 4 H₂O<br><br>
<strong>3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 2NO + 4H₂O</strong><br>
Verificación: Cu 3 = 3 ✓ &nbsp; N 8 = 8 ✓ &nbsp; H 8 = 8 ✓ &nbsp; O 24 = 24 ✓
    </div>

    <h4>Pilas: electricidad a partir de una reacción redox</h4>
    <p>En una pila, la oxidación y la reducción ocurren en lugares separados y los electrones viajan por un cable, produciendo corriente eléctrica.</p>
    <ul>
      <li><strong>Ánodo:</strong> donde ocurre la oxidación (polo negativo). En la pila de Daniell es el zinc.</li>
      <li><strong>Cátodo:</strong> donde ocurre la reducción (polo positivo). En la pila de Daniell es el cobre.</li>
    </ul>
    <div class="ejemplo">
      <strong>Experimento — pila de limón:</strong> clava en un limón un clavo galvanizado (cubierto de zinc) y una moneda o alambre de cobre, sin que se toquen. Entre los dos metales hay cerca de 0.9 V. Conectando varios limones en serie puedes encender un LED pequeño.
    </div>

    <h4>Corrosión y cómo evitarla</h4>
    <p>El hierro se oxida con el oxígeno y la humedad, formando óxido de hierro (herrumbre). La sal acelera el proceso, por eso en la costa los metales se corroen más rápido.</p>
    <ul>
      <li><strong>Pintura o aceite:</strong> impiden que el oxígeno y el agua toquen el metal.</li>
      <li><strong>Galvanizado:</strong> cubrir el hierro con zinc, que se oxida primero y lo protege (láminas galvanizadas de los techos).</li>
      <li><strong>Ánodo de sacrificio:</strong> se une un metal más reactivo (magnesio o zinc) a cascos de barcos y tuberías para que se corroa él en lugar del hierro.</li>
    </ul>

    <h4>Redox en la vida diaria</h4>
    <ul>
      <li><strong>Respiración celular:</strong> C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energía. La glucosa se oxida y el oxígeno se reduce.</li>
      <li><strong>Blanqueadores:</strong> el cloro (NaClO) es un agente oxidante que destruye manchas y microorganismos.</li>
      <li><strong>Antioxidantes:</strong> la vitamina C se oxida en lugar de otros compuestos. Por eso unas gotas de limón evitan que el aguacate o la manzana partida se pongan cafés.</li>
    </ul>

    <h4>✍️ Practica</h4>
    ${ejercicio('En Fe + CuSO₄ → FeSO₄ + Cu, ¿quién se oxida y quién se reduce?', 'Fe pasa de 0 a +2: <strong>se oxida</strong> (agente reductor). Cu pasa de +2 a 0: <strong>se reduce</strong> (agente oxidante).')}
    ${ejercicio('¿Por qué los techos de lámina galvanizada tardan más en oxidarse?', 'Porque el zinc que los recubre es más reactivo que el hierro: se oxida primero y forma una capa que protege al hierro.')}
  `,

  "q2-8": `
    <h4>La química en la cocina mexicana</h4>
    <ul>
      <li><strong>Nixtamalización:</strong> el maíz se cuece con cal (Ca(OH)₂). Esto ablanda la cáscara, aumenta el calcio de la tortilla y libera la niacina (vitamina B3), lo que previene la enfermedad llamada pelagra. Es una técnica química mesoamericana de miles de años.</li>
      <li><strong>Fermentación:</strong> microorganismos transforman azúcares en otras sustancias. Así se hacen el <strong>pozol</strong> (bebida de maíz fermentado típica de Chiapas y Tabasco), el pan, el yogur y el beneficio del cacao y del café.</li>
      <li><strong>Reacción de Maillard:</strong> al tostar café, cacao o carne, los azúcares reaccionan con las proteínas y se forman los colores cafés y los aromas.</li>
      <li><strong>Caramelización:</strong> el azúcar calentado se descompone y forma caramelo (como en los dulces de piloncillo).</li>
    </ul>

    <h4>¿Cómo limpia el jabón?</h4>
    <p>El jabón se obtiene por <strong>saponificación</strong>: grasa + base (NaOH o KOH) → jabón + glicerina.</p>
    <p>Cada molécula de jabón tiene una "cabeza" polar que se une al agua y una "cola" no polar que se une a la grasa. Las colas atrapan la grasa y forman pequeñas esferas llamadas <strong>micelas</strong>, que el agua arrastra al enjuagar.</p>

    <h4>⚠️ Mezclas peligrosas en casa</h4>
    <div class="nota-estudio alerta">
      <ul>
        <li><strong>Cloro + amoniaco:</strong> produce cloraminas, gases tóxicos que dañan los pulmones.</li>
        <li><strong>Cloro + ácido muriático o vinagre:</strong> libera gas cloro, muy tóxico.</li>
        <li><strong>Cloro + alcohol:</strong> puede formar cloroformo y otros compuestos dañinos.</li>
      </ul>
      Usa un producto a la vez, en lugares ventilados, y nunca guardes químicos en botellas de refresco.
    </div>

    <h4>Plásticos y su reciclaje</h4>
    <p>Los plásticos son <strong>polímeros</strong>: moléculas gigantes formadas por la unión de muchas moléculas pequeñas (monómeros). La mayoría viene del petróleo y tarda cientos de años en degradarse. El número dentro del triángulo indica el tipo:</p>
    <table class="tabla-estudio">
      <tr><th>Código</th><th>Plástico</th><th>Ejemplos</th></tr>
      <tr><td>1</td><td>PET</td><td>Botellas de agua y refresco</td></tr>
      <tr><td>2</td><td>PEAD (polietileno de alta densidad)</td><td>Envases de leche, cloro y shampoo</td></tr>
      <tr><td>3</td><td>PVC</td><td>Tubos de agua, mangueras</td></tr>
      <tr><td>4</td><td>PEBD (polietileno de baja densidad)</td><td>Bolsas, película plástica</td></tr>
      <tr><td>5</td><td>PP (polipropileno)</td><td>Tapas, tuppers, popotes</td></tr>
      <tr><td>6</td><td>PS (poliestireno)</td><td>Unicel, vasos desechables</td></tr>
      <tr><td>7</td><td>Otros</td><td>Mezclas de plásticos</td></tr>
    </table>

    <h4>Química verde</h4>
    <p>Es diseñar productos y procesos que reduzcan o eliminen sustancias peligrosas. Algunos de sus principios:</p>
    <ul>
      <li>Es mejor <strong>prevenir</strong> los residuos que limpiarlos después.</li>
      <li>Usar materias primas <strong>renovables</strong> (de plantas en lugar de petróleo).</li>
      <li>Usar sustancias <strong>menos tóxicas</strong> y que se degraden fácilmente.</li>
      <li>Ahorrar energía, trabajando a temperatura y presión ambiente cuando sea posible.</li>
    </ul>
    <div class="ejemplo">
      <strong>Contexto Chiapas:</strong> la <strong>lombricomposta</strong> y los abonos orgánicos hechos con pulpa de café transforman residuos en nutrientes para el suelo. Reducen el uso de fertilizantes químicos que, en exceso, contaminan los ríos con nitratos y fosfatos y provocan el crecimiento descontrolado de algas (eutrofización).
    </div>

    <h4>El agua que tomamos</h4>
    <ol>
      <li><strong>Sedimentación:</strong> las partículas pesadas se asientan.</li>
      <li><strong>Coagulación:</strong> se agregan sustancias (como sulfato de aluminio) que agrupan las partículas finas.</li>
      <li><strong>Filtración:</strong> el agua pasa por capas de arena y grava.</li>
      <li><strong>Desinfección:</strong> se agrega cloro para eliminar bacterias.</li>
    </ol>
    <p>En casa, hervir el agua al menos un minuto o agregar unas gotas de cloro (según la etiqueta del producto) la hace segura para beber.</p>

    <h4>✍️ Practica</h4>
    ${ejercicio('¿Por qué no se deben mezclar el cloro y el ácido muriático?', 'Porque reaccionan y liberan gas cloro, que es muy tóxico e irrita gravemente los ojos y los pulmones.')}
    ${ejercicio('¿Qué ventaja nutricional tiene nixtamalizar el maíz?', 'Aumenta el contenido de calcio y libera la niacina (vitamina B3), que de otro modo el cuerpo no puede aprovechar.')}
    ${ejercicio('Una botella tiene el número 1 dentro del triángulo de reciclaje. ¿De qué plástico es?', 'De <strong>PET</strong> (tereftalato de polietileno), el plástico de las botellas de agua y refresco.')}
  `
};
