/* ==========================================================
   DATA - Física · Material de estudio ampliado
   Complementa los temas originales de FISICA (f1-*, f2-*)
   sin modificarlos: se muestra en "Estudia más" bajo cada tema.
========================================================== */

// Diagrama con pie de figura
const fisDiagrama = (imagen, alt, pie) => `
  <figure class="diagrama-quimica">
    <img src="images/fisica/${imagen}.svg" alt="${alt}" loading="lazy">
    <figcaption>${pie}</figcaption>
  </figure>`;

// Ejercicio con la respuesta oculta
const fisEjercicio = (pregunta, respuesta) => `
  <details class="ejercicio-estudio">
    <summary>${pregunta}</summary>
    <div>${respuesta}</div>
  </details>`;

const FISICA_ESTUDIO = {

  "f1-1": `
    ${fisDiagrama('vector-componentes', 'Vector descompuesto en componentes', 'Todo vector inclinado se puede descomponer en una parte horizontal (Fx) y una vertical (Fy). Juntas forman un triángulo rectángulo con el vector original como hipotenusa.')}

    <h4>Notación científica y prefijos</h4>
    <table class="tabla-estudio">
      <tr><th>Prefijo</th><th>Símbolo</th><th>Valor</th><th>Ejemplo</th></tr>
      <tr><td>giga</td><td>G</td><td>10⁹</td><td>Chicoasén genera unos 2.4 GW</td></tr>
      <tr><td>mega</td><td>M</td><td>10⁶</td><td>1 MW = 1 000 000 W</td></tr>
      <tr><td>kilo</td><td>k</td><td>10³</td><td>1 km = 1000 m</td></tr>
      <tr><td>centi</td><td>c</td><td>10⁻²</td><td>1 cm = 0.01 m</td></tr>
      <tr><td>mili</td><td>m</td><td>10⁻³</td><td>1 mm = 0.001 m</td></tr>
      <tr><td>micro</td><td>µ</td><td>10⁻⁶</td><td>El grosor de un cabello: unos 70 µm</td></tr>
    </table>
    <div class="formula">Conversión muy usada: km/h → m/s, divide entre 3.6 &nbsp;&nbsp;(72 km/h = 20 m/s)</div>

    <h4>Suma de vectores</h4>
    <p>Si dos vectores son perpendiculares, la resultante se obtiene con el <strong>teorema de Pitágoras</strong> y su dirección con la tangente:</p>
    <div class="formula">R = √(Rx² + Ry²) &nbsp;&nbsp;&nbsp; θ = tan⁻¹(Ry / Rx)</div>
    <div class="ejemplo">
      <strong>Ejemplo:</strong> para llegar a la milpa caminas 3 km al este y luego 4 km al norte. Recorriste 7 km (distancia, escalar), pero tu <strong>desplazamiento</strong> es R = √(3² + 4²) = <strong>5 km</strong>, con una dirección de tan⁻¹(4/3) ≈ 53° al norte del este.
    </div>

    <h4>Errores de medición</h4>
    <ul>
      <li><strong>Sistemáticos:</strong> se repiten siempre igual (una báscula mal calibrada).</li>
      <li><strong>Aleatorios:</strong> cambian en cada medición (el pulso al usar un cronómetro). Se reducen repitiendo la medición y sacando el promedio.</li>
    </ul>

    ${fisEjercicio('Convierte 90 km/h a m/s.', '90 ÷ 3.6 = <strong>25 m/s</strong>.')}
    ${fisEjercicio('Una lancha avanza 12 m/s hacia el norte y la corriente la empuja 5 m/s hacia el este. ¿Cuál es su velocidad resultante?', 'R = √(12² + 5²) = √169 = <strong>13 m/s</strong>.')}
  `,

  "f1-2": `
    ${fisDiagrama('graficas-movimiento', 'Gráficas de MRU y MRUA', 'En el MRU la gráfica posición-tiempo es una recta: su pendiente es la velocidad. En el MRUA la gráfica velocidad-tiempo es una recta: su pendiente es la aceleración y el área bajo la recta es la distancia recorrida.')}

    <h4>Conceptos que se confunden</h4>
    <table class="tabla-estudio">
      <tr><th>Concepto</th><th>¿Qué es?</th><th>Tipo</th></tr>
      <tr><td>Posición</td><td>Dónde está el objeto respecto a un punto de referencia</td><td>Vector</td></tr>
      <tr><td>Distancia</td><td>Todo el camino recorrido</td><td>Escalar</td></tr>
      <tr><td>Desplazamiento</td><td>Cambio de posición en línea recta, del inicio al final</td><td>Vector</td></tr>
      <tr><td>Rapidez</td><td>Distancia / tiempo</td><td>Escalar</td></tr>
      <tr><td>Velocidad</td><td>Desplazamiento / tiempo</td><td>Vector</td></tr>
    </table>

    <h4>Fórmulas del MRUA</h4>
    <div class="formula">v = v₀ + a·t<br>
d = v₀·t + ½·a·t²<br>
v² = v₀² + 2·a·d</div>

    <div class="ejemplo">
      <strong>Ejemplo resuelto:</strong> una motocicleta parte del reposo en un semáforo de Tapachula y acelera a 2 m/s² durante 5 s.<br>
      v = 0 + 2 × 5 = <strong>10 m/s</strong> (36 km/h)<br>
      d = 0 + ½ × 2 × 5² = <strong>25 m</strong>
    </div>

    ${fisEjercicio('Un colectivo recorre 60 km en 1.5 h a velocidad constante. ¿Cuál es su velocidad?', 'v = d / t = 60 / 1.5 = <strong>40 km/h</strong> (≈ 11.1 m/s).')}
    ${fisEjercicio('Un auto va a 20 m/s y frena hasta detenerse en 4 s. ¿Cuál es su aceleración?', 'a = (0 − 20) / 4 = <strong>−5 m/s²</strong>. El signo negativo indica que va frenando.')}
  `,

  "f1-3": `
    ${fisDiagrama('tiro-parabolico', 'Trayectoria de un tiro parabólico', 'En el tiro parabólico el movimiento horizontal es uniforme (vx constante) y el vertical es una caída libre. En el punto más alto la velocidad vertical es cero.')}

    <h4>Fórmulas útiles del tiro parabólico</h4>
    <div class="formula">vx = v₀ · cos θ &nbsp;&nbsp;&nbsp; v₀y = v₀ · sen θ<br>
Tiempo de vuelo: t = 2 · v₀y / g<br>
Altura máxima: h = v₀y² / (2g)<br>
Alcance: R = v₀² · sen(2θ) / g &nbsp;&nbsp;(máximo a 45°)</div>

    <div class="ejemplo">
      <strong>Ejemplo resuelto:</strong> un jugador patea un balón a 20 m/s con un ángulo de 45° en la cancha de la comunidad (g = 9.8 m/s²).<br>
      R = 20² × sen(90°) / 9.8 = 400 / 9.8 ≈ <strong>40.8 m</strong>
    </div>

    <h4>Caída libre: cuidado con la resistencia del aire</h4>
    <p>Las fórmulas de caída libre suponen que no hay aire. En la realidad, una hoja de plátano cae mucho más lento que un mango, porque el aire la frena. Para objetos compactos y caídas cortas, las fórmulas funcionan muy bien.</p>

    ${fisEjercicio('Un mango cae de un árbol y tarda 1.5 s en llegar al suelo. ¿Desde qué altura cayó? (g = 9.8 m/s²)', 'h = ½ × 9.8 × 1.5² = <strong>11.0 m</strong>.')}
    ${fisEjercicio('¿Con qué ángulo debes lanzar una piedra para que llegue lo más lejos posible (sin aire)?', 'A <strong>45°</strong>, porque sen(2 × 45°) = sen 90° = 1, el valor máximo.')}
  `,

  "f1-4": `
    ${fisDiagrama('diagrama-cuerpo-libre', 'Diagrama de cuerpo libre de una caja', 'Un <strong>diagrama de cuerpo libre</strong> dibuja todas las fuerzas que actúan sobre un objeto como flechas: el peso hacia abajo, la normal del piso hacia arriba, la fuerza aplicada y la fricción que se opone al movimiento.')}

    <h4>Fuerza neta, fricción e inercia</h4>
    <ul>
      <li><strong>Fuerza neta:</strong> la suma de todas las fuerzas. Si es cero, el objeto sigue en reposo o con velocidad constante (primera ley).</li>
      <li><strong>Fricción:</strong> fuerza que se opone al movimiento entre dos superficies: f = μ · N. La fricción <em>estática</em> (para empezar a mover algo) es mayor que la <em>cinética</em> (cuando ya se mueve).</li>
      <li><strong>Inercia:</strong> tendencia de los cuerpos a mantener su estado de movimiento. A más masa, más inercia: por eso cuesta más mover una camioneta cargada.</li>
      <li><strong>Masa y peso:</strong> la masa (kg) no cambia; el peso es una fuerza (N): W = m · g.</li>
    </ul>

    <div class="ejemplo">
      <strong>Ejemplo resuelto:</strong> empujas un costal de 40 kg con 200 N sobre el piso de la bodega. El coeficiente de fricción es μ = 0.3.<br>
      Normal: N = 40 × 9.8 = 392 N → Fricción: f = 0.3 × 392 = 117.6 N<br>
      Fuerza neta: 200 − 117.6 = 82.4 N → a = 82.4 / 40 = <strong>2.06 m/s²</strong>
    </div>

    <h4>Tercera ley: acción y reacción en tu vida</h4>
    <ul>
      <li>Al remar en una lancha del Cañón del Sumidero, el remo empuja el agua hacia atrás y el agua empuja la lancha hacia adelante.</li>
      <li>Al caminar, empujas el piso hacia atrás y el piso te empuja hacia adelante.</li>
      <li>Un cohete expulsa gases hacia abajo y los gases lo empujan hacia arriba.</li>
    </ul>
    <p>Las fuerzas de acción y reacción actúan sobre cuerpos <strong>distintos</strong>; por eso no se anulan.</p>

    ${fisEjercicio('¿Qué fuerza neta se necesita para que un carrito de 8 kg acelere a 3 m/s²?', 'F = m · a = 8 × 3 = <strong>24 N</strong>.')}
  `,

  "f1-5": `
    <h4>Fuerza, posición, movimiento y velocidad</h4>
    <p>Una <strong>fuerza</strong> es una interacción que puede cambiar la posición, la velocidad o la forma de un cuerpo. Cuando una fuerza hace que un cuerpo cambie de posición, realiza <strong>trabajo</strong> y le transfiere energía.</p>

    <h4>Energía mecánica y su conservación</h4>
    <div class="formula">Energía mecánica: Em = Ec + Ep<br>
Sin fricción: Ec inicial + Ep inicial = Ec final + Ep final</div>
    <div class="ejemplo">
      <strong>Ejemplo resuelto:</strong> el mango de 0.5 kg cae desde 4 m (g = 10 m/s²). Arriba toda su energía es potencial: Ep = 0.5 × 10 × 4 = 20 J. Justo antes de tocar el suelo toda es cinética: 20 = ½ × 0.5 × v² → v = √80 ≈ <strong>8.9 m/s</strong>.
    </div>

    <h4>Potencia</h4>
    <p>La <strong>potencia</strong> indica qué tan rápido se realiza un trabajo o se transforma la energía:</p>
    <div class="formula">P = W / t &nbsp;&nbsp;(watts = joules / segundo) &nbsp;&nbsp; 1 hp ≈ 746 W</div>
    <p>Dos personas pueden subir el mismo costal a la misma altura (mismo trabajo), pero la que lo hace más rápido desarrolla más potencia.</p>

    ${fisEjercicio('¿Cuánta energía cinética tiene una bicicleta con su ciclista (80 kg) que va a 5 m/s?', 'Ec = ½ × 80 × 5² = <strong>1000 J</strong>.')}
    ${fisEjercicio('Una bomba sube agua haciendo 6000 J de trabajo en 20 s. ¿Cuál es su potencia?', 'P = 6000 / 20 = <strong>300 W</strong>.')}
  `,

  "f2-1": `
    ${fisDiagrama('arquimedes', 'Principio de Arquímedes', 'Un cuerpo sumergido recibe un empuje hacia arriba igual al peso del agua que desaloja. Si el empuje es mayor que su peso, flota; si es menor, se hunde.')}

    <h4>¿Flota o se hunde?</h4>
    <ul>
      <li>Si la densidad del objeto es <strong>menor</strong> que la del líquido, flota (madera, aceite, hielo).</li>
      <li>Si es <strong>mayor</strong>, se hunde (piedra, hierro macizo).</li>
      <li>Un barco de acero flota porque su forma hueca desaloja mucha agua.</li>
    </ul>

    <h4>Principio de Pascal: el gato hidráulico</h4>
    <div class="formula">F₁ / A₁ = F₂ / A₂</div>
    <p>Con una fuerza pequeña en un émbolo chico se obtiene una fuerza enorme en un émbolo grande. Así funcionan el gato hidráulico del taller, los frenos de los autos y las prensas.</p>

    <h4>Otras propiedades de los fluidos</h4>
    <table class="tabla-estudio">
      <tr><th>Propiedad</th><th>¿Qué es?</th><th>Ejemplo</th></tr>
      <tr><td>Tensión superficial</td><td>La superficie del líquido se comporta como una membrana elástica</td><td>Insectos que caminan sobre el agua del río; gotas redondas</td></tr>
      <tr><td>Capilaridad</td><td>El líquido sube por tubos muy delgados</td><td>El agua sube por el tallo de las plantas y por una servilleta</td></tr>
      <tr><td>Viscosidad</td><td>Resistencia de un fluido a fluir</td><td>La miel fluye más lento que el agua</td></tr>
      <tr><td>Continuidad</td><td>Si el tubo se hace más angosto, el fluido va más rápido: A₁·v₁ = A₂·v₂</td><td>Tapar parte de la manguera con el dedo hace que el agua salga más lejos</td></tr>
      <tr><td>Bernoulli</td><td>Donde el fluido va más rápido, la presión es menor</td><td>Las alas de un avión; los techos de lámina que el viento de un huracán levanta</td></tr>
    </table>

    ${fisEjercicio('En un gato hidráulico, el émbolo chico tiene 10 cm² y el grande 500 cm². Si aplicas 100 N, ¿qué fuerza obtienes?', 'F₂ = F₁ × A₂ / A₁ = 100 × 500 / 10 = <strong>5000 N</strong>, suficiente para levantar un auto.')}
  `,

  "f2-2": `
    ${fisDiagrama('escalas-termometricas', 'Escalas Celsius, Fahrenheit y Kelvin', 'Las escalas <strong>relativas</strong> (Celsius y Fahrenheit) toman como referencia el agua; la escala <strong>absoluta</strong> (Kelvin) empieza en el cero absoluto, la temperatura más baja posible.')}

    <h4>Calor y temperatura no son lo mismo</h4>
    <ul>
      <li><strong>Temperatura:</strong> qué tan caliente o frío está algo; mide la energía cinética promedio de sus partículas. Se mide con un termómetro.</li>
      <li><strong>Calor:</strong> energía que pasa de un cuerpo a otro por diferencia de temperatura. Se mide en joules o calorías con un calorímetro.</li>
    </ul>
    <p>Una olla grande de agua tibia puede tener más energía térmica que una taza de café hirviendo, aunque esté a menor temperatura.</p>

    <h4>Conversiones entre escalas</h4>
    <div class="formula">K = °C + 273.15<br>
°F = (°C × 1.8) + 32<br>
°C = (°F − 32) / 1.8</div>

    <h4>Equilibrio térmico</h4>
    <p>Cuando dos cuerpos a distinta temperatura se ponen en contacto, el calor pasa del caliente al frío hasta que ambos quedan a la <strong>misma temperatura</strong>.</p>
    <div class="ejemplo">
      <strong>Ejemplo:</strong> mezclas 1 kg de agua a 80 °C con 1 kg de agua a 20 °C. Como son la misma sustancia y la misma masa, la temperatura final es el promedio: <strong>50 °C</strong>. El calor que perdió el agua caliente es igual al que ganó la fría.
    </div>

    ${fisEjercicio('En Tuxtla Gutiérrez el termómetro marca 35 °C. ¿Cuánto es en kelvin y en Fahrenheit?', 'K = 35 + 273.15 = <strong>308.15 K</strong>; °F = 35 × 1.8 + 32 = <strong>95 °F</strong>.')}
  `,

  "f2-3": `
    ${fisDiagrama('circuitos', 'Circuito en serie y en paralelo', 'En <strong>serie</strong> la corriente tiene un solo camino: si se funde un foco, se apagan todos. En <strong>paralelo</strong> cada aparato tiene su propio camino: así están conectadas las casas.')}

    <h4>Carga eléctrica y ley de Coulomb</h4>
    <p>Las cargas del mismo signo se repelen y las de signo contrario se atraen. La fuerza entre dos cargas es:</p>
    <div class="formula">F = k · (q₁ · q₂) / r² &nbsp;&nbsp;&nbsp; k = 9 × 10⁹ N·m²/C²</div>
    <p>Se parece a la ley de la gravitación universal: también disminuye con el cuadrado de la distancia.</p>

    <h4>Conductores y aislantes eléctricos</h4>
    <ul>
      <li><strong>Conductores:</strong> cobre, aluminio, el agua con sales (¡y tu cuerpo!).</li>
      <li><strong>Aislantes:</strong> plástico, hule, vidrio, madera seca.</li>
    </ul>

    <h4>Resistencias en serie y en paralelo</h4>
    <div class="formula">Serie: R total = R₁ + R₂ + …<br>
Paralelo: 1/R total = 1/R₁ + 1/R₂ + …</div>

    <h4>Seguridad eléctrica</h4>
    <ul>
      <li>No manipules aparatos con las manos mojadas ni descalzo sobre piso húmedo.</li>
      <li>No sobrecargues un contacto con muchas extensiones.</li>
      <li>Nunca te acerques a un cable caído después de una tormenta: avisa a la CFE.</li>
    </ul>

    ${fisEjercicio('Dos focos de 6 Ω se conectan en serie a una pila de 12 V. ¿Cuál es la corriente?', 'R total = 6 + 6 = 12 Ω → I = 12 / 12 = <strong>1 A</strong>.')}
    ${fisEjercicio('Los mismos dos focos de 6 Ω se conectan en paralelo. ¿Cuál es la resistencia total?', '1/R = 1/6 + 1/6 = 2/6 → R = <strong>3 Ω</strong>, y la corriente total sería 12 / 3 = 4 A.')}
  `,

  "f2-4": `
    ${fisDiagrama('induccion', 'Inducción electromagnética', 'Cuando un imán se mueve dentro de una bobina, el campo magnético que atraviesa la bobina cambia y se produce una corriente eléctrica (ley de Faraday-Henry). Así funcionan los generadores de las presas.')}

    <h4>Campos eléctricos y magnéticos</h4>
    <ul>
      <li>Toda carga eléctrica crea a su alrededor un <strong>campo eléctrico</strong>.</li>
      <li>Los imanes y las corrientes crean <strong>campos magnéticos</strong>. La Tierra es un enorme imán: por eso la aguja de una brújula apunta al norte.</li>
    </ul>

    <h4>Las leyes que unen electricidad y magnetismo</h4>
    <table class="tabla-estudio">
      <tr><th>Ley</th><th>¿Qué dice?</th><th>Aplicación</th></tr>
      <tr><td>Ampère-Maxwell</td><td>Una corriente eléctrica (o un campo eléctrico que cambia) produce un campo magnético</td><td>Electroimanes, timbres, motores</td></tr>
      <tr><td>Faraday-Henry</td><td>Un campo magnético que cambia produce una corriente eléctrica</td><td>Generadores, transformadores, cargadores inalámbricos</td></tr>
    </table>
    <p>James Clerk Maxwell unió estas leyes y predijo que la luz es una <strong>onda electromagnética</strong>: campos eléctricos y magnéticos que viajan juntos.</p>

    <h4>Experimento: construye un electroimán</h4>
    <ol>
      <li>Enrolla unas 30 vueltas de alambre de cobre esmaltado alrededor de un clavo grande.</li>
      <li>Lija las puntas del alambre y conéctalas a una pila de 1.5 V.</li>
      <li>Acerca el clavo a unos clips: ¡los atrae! Si desconectas la pila, los suelta.</li>
      <li>Prueba con más vueltas: el campo magnético es más fuerte.</li>
    </ol>
    <p><em>Desconecta la pila después de unos segundos: el alambre se calienta.</em></p>

    ${fisEjercicio('¿Por qué un generador de la presa necesita que la turbina gire?', 'Porque al girar, el imán cambia continuamente el campo magnético dentro de las bobinas; según la ley de Faraday-Henry, solo un campo magnético <strong>que cambia</strong> produce corriente.')}
  `
};
