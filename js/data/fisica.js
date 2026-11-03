/* ==========================================================
   DATA - Física (COBACH Chiapas · MCCEMS, Modelo Educativo 2025)
   En el Modelo Educativo 2025 la Física se estudia dentro de
   Ciencias Naturales, Experimentales y Tecnología (CNEyT):
     · CNEyT II  (2º semestre) El poder de la energía
     · CNEyT V   (5º semestre) Del átomo al universo. Fuerza y Energía
   Cada tema indica en "proposito" el propósito formativo que cubre.
   Los temas f1-* y f2-* son los originales (Física I y II).
========================================================== */

const FISICA = {
  // ==========================================================
  // SEGUNDO SEMESTRE - CNEyT II · EL PODER DE LA ENERGÍA
  // ==========================================================
  2: {
    titulo: "CNEyT II · El poder de la energía",
    subtitulo: "Energía, calor y termodinámica",
    semestre: "Segundo Semestre",
    icono: "🔋",
    descripcion: "Comprende la importancia de la energía para explicar fenómenos naturales: sus tipos, su conservación, el calor y las leyes de la termodinámica.",
    contexto: "Chiapas es una potencia energética: las presas del río Grijalva producen gran parte de la hidroelectricidad de México, el sol seca el café en los patios y en muchas cocinas todavía se cocina con leña. La energía está en todo lo que te rodea.",
    temas: [
      {
        id: "fx2-1",
        proposito: "Propósito formativo 1",
        titulo: "La Energía: Tipos, Transformación y Conservación",
        icono: "🌞",
        imagen: "linear-gradient(135deg, #f59e0b, #16a34a)",
        concepto: `
          <h4>¿Qué es la energía?</h4>
          <p>Solemos decir que la energía es «la capacidad de realizar un trabajo», pero es algo más amplio: la <strong>energía</strong> es una propiedad de los cuerpos y sistemas que les permite producir cambios (moverse, calentarse, iluminar, transformarse). Lo más importante es que <strong>se transforma y se transfiere, pero nunca se crea ni se destruye</strong>.</p>

          <h4>Tipos y manifestaciones de la energía</h4>
          <table class="tabla-estudio">
            <tr><th>Tipo</th><th>¿De dónde viene?</th><th>Ejemplo en Chiapas</th></tr>
            <tr><td>Cinética</td><td>Del movimiento</td><td>El agua del río Grijalva corriendo</td></tr>
            <tr><td>Potencial gravitacional</td><td>De la altura</td><td>El agua almacenada en la presa de Chicoasén</td></tr>
            <tr><td>Potencial elástica</td><td>De un objeto estirado o comprimido</td><td>Una resortera tensada</td></tr>
            <tr><td>Térmica</td><td>Del movimiento de las partículas</td><td>El comal caliente</td></tr>
            <tr><td>Química</td><td>De los enlaces de las sustancias</td><td>La leña, el gas LP, la comida</td></tr>
            <tr><td>Eléctrica</td><td>Del movimiento de cargas</td><td>La corriente que enciende un foco</td></tr>
            <tr><td>Luminosa o radiante</td><td>De la luz y otras ondas</td><td>El sol que seca el café en el patio</td></tr>
            <tr><td>Sonora</td><td>De las vibraciones</td><td>La marimba en la fiesta</td></tr>
            <tr><td>Nuclear</td><td>Del núcleo de los átomos</td><td>La que produce el Sol por fusión</td></tr>
          </table>

          <h4>La energía se transforma</h4>
          <figure class="diagrama-quimica">
            <img src="images/fisica/presa-energia.svg" alt="Transformación de la energía en una presa hidroeléctrica" loading="lazy">
            <figcaption>En una presa hidroeléctrica la energía <strong>potencial</strong> del agua almacenada se transforma en energía <strong>cinética</strong> al caer, mueve una turbina y el generador la convierte en energía <strong>eléctrica</strong>.</figcaption>
          </figure>
          <ul>
            <li><strong>Fogón de leña:</strong> química → térmica + luminosa.</li>
            <li><strong>Panel solar:</strong> luminosa → eléctrica.</li>
            <li><strong>Fotosíntesis:</strong> luminosa → química (en la glucosa de las plantas).</li>
            <li><strong>Licuadora:</strong> eléctrica → cinética + sonora + térmica.</li>
          </ul>

          <h4>Ley de conservación de la energía</h4>
          <div class="formula">La energía total de un sistema aislado permanece constante:<br>
Energía inicial = Energía final</div>
          <p>Cuando parece que la energía «se pierde», en realidad se transformó en otra forma menos útil, casi siempre calor. Por eso se habla de <strong>eficiencia</strong>:</p>
          <div class="formula">Eficiencia (%) = (energía útil / energía total) × 100</div>
          <p>Un foco incandescente convierte solo alrededor del 10 % de la energía eléctrica en luz; el resto se vuelve calor. Los focos LED son mucho más eficientes.</p>

          <h4>Medición de la energía y sus unidades</h4>
          <table class="tabla-estudio">
            <tr><th>Unidad</th><th>Equivalencia</th><th>¿Dónde la ves?</th></tr>
            <tr><td>Joule (J)</td><td>Unidad del SI</td><td>Problemas de física</td></tr>
            <tr><td>Caloría (cal)</td><td>1 cal = 4.186 J</td><td>Calor en el laboratorio</td></tr>
            <tr><td>Kilocaloría (kcal o Cal)</td><td>1 kcal = 1000 cal</td><td>Etiquetas de alimentos</td></tr>
            <tr><td>Kilowatt-hora (kWh)</td><td>1 kWh = 3 600 000 J</td><td>El recibo de luz de la CFE</td></tr>
          </table>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> En tu casa hay un foco LED de 10 W encendido 5 horas cada noche. En un mes (30 días) consume: 10 W × 5 h × 30 = 1500 Wh = <strong>1.5 kWh</strong>. Un foco incandescente de 60 W que ilumina lo mismo consumiría 9 kWh. ¡Seis veces más energía para la misma luz!
          </div>
        `,
        actividades: [
          { pregunta: "Según la ley de conservación, la energía:", opciones: ["Se crea al encender un aparato", "Se transforma, pero no se crea ni se destruye", "Desaparece con el uso", "Solo existe en los alimentos"], correcta: "Se transforma, pero no se crea ni se destruye", explicacion: "La energía total de un sistema aislado permanece constante." },
          { pregunta: "En un panel solar la energía luminosa se transforma en energía:", opciones: ["Química", "Eléctrica", "Sonora", "Nuclear"], correcta: "Eléctrica", explicacion: "Las celdas solares convierten la luz en corriente eléctrica." },
          { pregunta: "El agua almacenada en lo alto de una presa tiene energía:", opciones: ["Potencial gravitacional", "Sonora", "Nuclear", "Elástica"], correcta: "Potencial gravitacional", explicacion: "Depende de su altura: Ep = m·g·h." },
          { pregunta: "¿Cuántos joules equivalen a una caloría?", opciones: ["1 J", "4.186 J", "100 J", "1000 J"], correcta: "4.186 J", explicacion: "Es el equivalente mecánico del calor." },
          { pregunta: "El recibo de la CFE mide la energía consumida en:", opciones: ["Kilowatt-hora (kWh)", "Newtons", "Grados Celsius", "Metros"], correcta: "Kilowatt-hora (kWh)", explicacion: "1 kWh equivale a 3 600 000 J." }
        ]
      },
            {
        id: "f1-5",
        proposito: "Propósito formativo 2 y 5",
        titulo: "Trabajo y Energía",
        icono: "🔋",
        imagen: "linear-gradient(135deg, #eab308, #f97316)",
        concepto: `
          <h4>La energía no se crea, solo se transforma</h4>
          <p>El <strong>Trabajo (W)</strong> en física ocurre cuando una fuerza mueve un objeto a lo largo de una distancia. Si empujas una pared y no se mueve, no hiciste trabajo (en el sentido físico).</p>
          <div class="formula">W = F · d · cos(θ)</div>
          <p>La energía es la capacidad de realizar trabajo. Existen dos formas fundamentales:</p>
          <ul>
            <li><strong>Energía Cinética (Ec):</strong> La energía del movimiento. Un coche a alta velocidad tiene mucha.</li>
            <li><strong>Energía Potencial (Ep):</strong> La energía almacenada por la posición. Un objeto en lo alto de una montaña tiene energía potencial gravitatoria.</li>
          </ul>
          <div class="formula">
            Ec = ½ · m · v²<br>
            Ep = m · g · h
          </div>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> La Central Hidroeléctrica de Chicoasén usa la energía potencial del agua del río Grijalva. Al caer desde la presa, el agua se convierte en energía cinética, la cual hace girar turbinas gigantes para generar la electricidad que usas en casa.
          </div>
        `,
        actividades: [
          {
            pregunta: "Un mango de 0.5 kg cae desde 4 m de altura. ¿Cuánta energía potencial tenía? (g=10 m/s²)",
            opciones: ["20 J", "2 J", "40 J", "8 J"],
            correcta: "20 J",
            explicacion: "Ep = m · g · h = 0.5 · 10 · 4 = 20 J."
          },
          {
            pregunta: "¿Qué tipo de energía tiene un coche viajando por la carretera?",
            opciones: ["Potencial", "Cinética", "Nuclear", "Química"],
            correcta: "Cinética",
            explicacion: "Todo cuerpo en movimiento posee energía cinética."
          },
          {
            pregunta: "Si empujas una pared durante 1 hora, ¿cuánto trabajo realizaste?",
            opciones: ["Mucho", "Poco", "Cero", "Depende de la fuerza"],
            correcta: "Cero",
            explicacion: "El trabajo requiere desplazamiento (d). Si la pared no se movió (d=0), W=0."
          },
          {
            pregunta: "¿En qué se transforma la energía eléctrica en un foco?",
            opciones: ["Solo luz", "Luz y calor", "Sonido", "Energía nuclear"],
            correcta: "Luz y calor",
            explicacion: "Los focos se calientan, transformando energía en calor."
          },
          {
            pregunta: "Al soltar un resorte, este se estira. ¿Qué energía tenía almacenada?",
            opciones: ["Cinética", "Potencial elástica", "Gravitatoria", "Química"],
            correcta: "Potencial elástica",
            explicacion: "Los materiales elásticos almacenan energía al ser deformados."
          }
        ]
      },
            {
        id: "f2-2",
        proposito: "Propósito formativo 3",
        titulo: "Calor y Termodinámica",
        icono: "🔥",
        imagen: "linear-gradient(135deg, #f97316, #ef4444)",
        concepto: `
          <h4>Energía en tránsito</h4>
          <p>El <strong>calor</strong> es energía que se transfiere de un cuerpo a otro debido a una diferencia de temperatura. La <strong>temperatura</strong> es una medida de la energía cinética promedio de las partículas.</p>
          <p>El calor se transfiere por:</p>
          <ul>
            <li><strong>Conducción:</strong> Contacto directo (ej. una cuchara metálica en agua caliente).</li>
            <li><strong>Convección:</strong> Movimiento de fluidos (ej. el aire caliente sube).</li>
            <li><strong>Radiación:</strong> Ondas electromagnéticas (ej. el calor del Sol).</li>
          </ul>
          <div class="formula">
            Conversión: °F = (°C × 9/5) + 32<br>
            Calor específico: Q = m · c · ΔT
          </div>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> En Tuxtla Gutiérrez, el clima es muy cálido (35°C). Si viajas a San Cristóbal de las Casas (18°C), sientes la diferencia de temperatura. El calor fluye de tu cuerpo (más caliente) al ambiente frío por convección y radiación.
          </div>
        `,
        actividades: [
          {
            pregunta: "¿Cuál es la diferencia entre calor y temperatura?",
            opciones: ["Son lo mismo", "Calor es energía, temperatura es medida", "Temperatura es energía, calor es medida", "Ninguna"],
            correcta: "Calor es energía, temperatura es medida",
            explicacion: "El calor es transferencia de energía; la temperatura es la medida de la energía cinética promedio."
          },
          {
            pregunta: "Si tienes 25°C, ¿cuánto equivale en Fahrenheit?",
            opciones: ["77°F", "45°F", "98°F", "32°F"],
            correcta: "77°F",
            explicacion: "°F = (25 × 9/5) + 32 = 45 + 32 = 77°F."
          },
          {
            pregunta: "¿Cómo se transfiere el calor del Sol a la Tierra?",
            opciones: ["Conducción", "Convección", "Radiación", "Contacto"],
            correcta: "Radiación",
            explicacion: "El Sol emite ondas electromagnéticas que viajan por el espacio."
          },
          {
            pregunta: "La energía necesaria para elevar 1°C la temperatura de 1g de agua se llama:",
            opciones: ["Joule", "Caloría", "Watt", "Newton"],
            correcta: "Caloría",
            explicacion: "Es la definición de caloría."
          },
          {
            pregunta: "Si pones una cuchara metálica en agua caliente, el calor se transfiere por:",
            opciones: ["Radiación", "Convección", "Conducción", "Evaporación"],
            correcta: "Conducción",
            explicacion: "El metal es buen conductor de calor por contacto."
          }
        ]
      },
      {
        id: "fx2-2",
        proposito: "Propósito formativo 4",
        titulo: "Propagación del Calor y Capacidad Térmica",
        icono: "♨️",
        imagen: "linear-gradient(135deg, #ef4444, #f97316)",
        concepto: `
          <h4>Tres formas de propagarse</h4>
          <figure class="diagrama-quimica">
            <img src="images/fisica/propagacion-calor.svg" alt="Conducción, convección y radiación" loading="lazy">
            <figcaption>El calor siempre viaja del cuerpo más caliente al más frío, por conducción, convección o radiación.</figcaption>
          </figure>
          <ul>
            <li><strong>Conducción:</strong> el calor pasa de partícula en partícula por contacto directo, sobre todo en sólidos. Ej.: el mango de una cuchara metálica que se calienta dentro del café.</li>
            <li><strong>Convección:</strong> el fluido caliente (líquido o gas) sube porque es menos denso y el frío baja, formando corrientes. Ej.: el agua que hierve en la olla, la brisa en la costa.</li>
            <li><strong>Radiación:</strong> el calor viaja como ondas electromagnéticas y <strong>no necesita un medio</strong>; por eso nos llega el calor del Sol a través del espacio vacío. Ej.: sentir el calor de una fogata a distancia.</li>
          </ul>

          <h4>Conductividad térmica: conductores y aislantes</h4>
          <table class="tabla-estudio">
            <tr><th>Buenos conductores</th><th>Aislantes (malos conductores)</th></tr>
            <tr><td>Cobre, aluminio, hierro, plata</td><td>Madera, barro, unicel, lana, plástico, aire</td></tr>
            <tr><td>Por eso las ollas son de metal</td><td>Por eso los mangos de las ollas son de madera o plástico</td></tr>
          </table>
          <p>Los colores oscuros absorben más radiación que los claros: una lámina negra al sol se calienta más que una blanca.</p>

          <h4>Calor específico y capacidad térmica</h4>
          <p>El <strong>calor específico (c)</strong> es la cantidad de calor que necesita 1 kg de una sustancia para subir su temperatura 1 °C. La <strong>capacidad térmica (C = m·c)</strong> depende además de cuánta masa hay.</p>
          <div class="formula">Q = m · c · ΔT<br>
Q = calor (J) · m = masa (kg) · c = calor específico (J/kg·°C) · ΔT = cambio de temperatura (°C)</div>
          <table class="tabla-estudio">
            <tr><th>Sustancia</th><th>c (J/kg·°C) aprox.</th></tr>
            <tr><td>Agua</td><td>4186</td></tr>
            <tr><td>Aluminio</td><td>900</td></tr>
            <tr><td>Vidrio</td><td>840</td></tr>
            <tr><td>Hierro</td><td>450</td></tr>
            <tr><td>Cobre</td><td>385</td></tr>
          </table>
          <p>El agua tiene un calor específico muy alto: tarda en calentarse y en enfriarse. Por eso el mar suaviza el clima de la costa y el comal de hierro se calienta mucho más rápido que el agua de la olla.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> Para hervir 2 litros de agua (2 kg) para el café, desde 20 °C hasta 100 °C, se necesitan: Q = 2 × 4186 × 80 = <strong>669 760 J</strong> (unos 670 kJ). Las casas de <strong>adobe</strong> de los Altos aprovechan la capacidad térmica de sus gruesas paredes: absorben el calor del sol durante el día y lo liberan lentamente por la noche, cuando hace frío.
          </div>
        `,
        actividades: [
          { pregunta: "El calor del Sol llega a la Tierra por:", opciones: ["Conducción", "Convección", "Radiación", "Fricción"], correcta: "Radiación", explicacion: "La radiación no necesita un medio material." },
          { pregunta: "El agua que sube y baja dentro de una olla al calentarse es un ejemplo de:", opciones: ["Convección", "Conducción", "Radiación", "Evaporación"], correcta: "Convección", explicacion: "El fluido caliente sube y el frío baja, formando corrientes." },
          { pregunta: "¿Cuál material es mejor aislante térmico?", opciones: ["Cobre", "Aluminio", "Madera", "Hierro"], correcta: "Madera", explicacion: "Por eso se usa en los mangos de las ollas." },
          { pregunta: "¿Cuánto calor necesita 1 kg de agua para subir de 20 °C a 30 °C? (c = 4186 J/kg·°C)", opciones: ["4186 J", "41 860 J", "418.6 J", "10 J"], correcta: "41 860 J", explicacion: "Q = 1 × 4186 × 10 = 41 860 J." },
          { pregunta: "El mar suaviza el clima de la costa porque el agua tiene:", opciones: ["Un calor específico alto", "Poca masa", "Un color oscuro", "Baja densidad"], correcta: "Un calor específico alto", explicacion: "Tarda mucho en calentarse y en enfriarse." }
        ]
      },
      {
        id: "fx2-3",
        proposito: "Propósito formativo 5",
        titulo: "Trabajo, Calor y el Principio Cero",
        icono: "🔁",
        imagen: "linear-gradient(135deg, #0ea5e9, #ef4444)",
        concepto: `
          <h4>Trabajo mecánico</h4>
          <p>Se realiza <strong>trabajo</strong> cuando una fuerza mueve un objeto. Si la fuerza va en la misma dirección del movimiento:</p>
          <div class="formula">W = F · d &nbsp;&nbsp;(joules = newtons × metros)</div>
          <p>Ejemplo: levantar un costal de café de 30 kg a 1 m de altura requiere W = (30 × 9.8) × 1 = <strong>294 J</strong>.</p>

          <h4>El trabajo también produce calor</h4>
          <p>Frótate las manos: el trabajo mecánico se convierte en calor. Lo mismo ocurre al frenar una bicicleta (las balatas se calientan) o al afilar un machete en la piedra.</p>
          <div class="ejemplo">
            <strong>El experimento de Joule (1845):</strong> James Prescott Joule dejó caer unas pesas que, al bajar, hacían girar unas paletas dentro de un recipiente con agua. Midió que el agua se calentaba y descubrió que siempre se necesita la misma cantidad de trabajo para producir la misma cantidad de calor:
            <div class="formula">1 caloría = 4.186 joules &nbsp;&nbsp;(equivalente mecánico del calor)</div>
          </div>

          <h4>¿Qué es la termodinámica?</h4>
          <p>Es la rama de la física que estudia las relaciones entre el <strong>calor</strong>, el <strong>trabajo</strong> y la <strong>energía</strong> de los sistemas. Explica cómo funcionan los motores, los refrigeradores, las ollas de presión y hasta nuestro cuerpo.</p>

          <h4>Principio cero de la termodinámica</h4>
          <div class="formula">Si A está en equilibrio térmico con C, y B también está en equilibrio térmico con C,<br>
entonces A y B están en equilibrio térmico entre sí.</div>
          <p>Gracias a este principio funcionan los termómetros: el termómetro (C) alcanza la misma temperatura que tu cuerpo (A); si después marca lo mismo con otra persona (B), sabemos que ambos tienen la misma temperatura sin tocarlos entre sí.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> Un campesino sube un costal de 50 kg de maíz a la camioneta, a 1.2 m de altura: W = 50 × 9.8 × 1.2 = <strong>588 J</strong>. Convertido a calorías: 588 ÷ 4.186 ≈ <strong>140 cal</strong>. Su cuerpo, en realidad, gasta mucha más energía, porque los músculos no son 100 % eficientes: buena parte se convierte en calor y por eso sudamos.
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué descubrió Joule con su experimento de las paletas?", opciones: ["La ley de la gravedad", "El equivalente mecánico del calor", "La ley de Ohm", "La refracción"], correcta: "El equivalente mecánico del calor", explicacion: "Demostró que 1 cal = 4.186 J." },
          { pregunta: "Levantar 10 kg a 2 m de altura requiere un trabajo de: (g = 9.8 m/s²)", opciones: ["20 J", "98 J", "196 J", "5 J"], correcta: "196 J", explicacion: "W = F·d = (10 × 9.8) × 2 = 196 J." },
          { pregunta: "La termodinámica estudia la relación entre:", opciones: ["Luz y color", "Calor, trabajo y energía", "Masa y volumen", "Ondas y sonido"], correcta: "Calor, trabajo y energía", explicacion: "Explica motores, refrigeradores y más." },
          { pregunta: "El principio que permite que funcione un termómetro es el:", opciones: ["Principio cero", "Principio de Pascal", "Principio de Arquímedes", "Tercera ley de Newton"], correcta: "Principio cero", explicacion: "Se basa en el equilibrio térmico." },
          { pregunta: "Al frotarse las manos se calientan porque:", opciones: ["El trabajo mecánico se transforma en calor", "Se crea energía", "Baja la temperatura del aire", "Hay electricidad"], correcta: "El trabajo mecánico se transforma en calor", explicacion: "La fricción convierte el trabajo en energía térmica." }
        ]
      },
      {
        id: "fx2-4",
        proposito: "Propósito formativo 6",
        titulo: "Gases Ideales y Primera Ley de la Termodinámica",
        icono: "🎈",
        imagen: "linear-gradient(135deg, #6366f1, #0ea5e9)",
        concepto: `
          <h4>El modelo del gas ideal</h4>
          <p>Para estudiar los gases se usa un modelo sencillo: partículas muy pequeñas que se mueven al azar, chocan sin perder energía y casi no se atraen entre sí. Su estado se describe con cuatro <strong>variables de estado</strong>: presión (P), volumen (V), temperatura (T, en kelvin) y cantidad de gas (n, en moles).</p>
          <div class="formula">P · V = n · R · T &nbsp;&nbsp;&nbsp;R = 8.31 J/(mol·K)</div>
          <ul>
            <li><strong>Ley de Boyle</strong> (T constante): si el volumen baja, la presión sube.</li>
            <li><strong>Ley de Charles</strong> (P constante): si la temperatura sube, el volumen aumenta.</li>
            <li><strong>Ley de Gay-Lussac</strong> (V constante): si la temperatura sube, la presión aumenta (por eso no se calienta un aerosol).</li>
          </ul>

          <h4>Sistemas termodinámicos</h4>
          <table class="tabla-estudio">
            <tr><th>Sistema</th><th>¿Qué intercambia con el entorno?</th><th>Ejemplo</th></tr>
            <tr><td>Abierto</td><td>Materia y energía</td><td>Una olla de frijoles sin tapa (sale vapor y calor)</td></tr>
            <tr><td>Cerrado</td><td>Solo energía</td><td>Una olla de presión cerrada</td></tr>
            <tr><td>Aislado</td><td>Nada (idealmente)</td><td>Un buen termo con café</td></tr>
          </table>
          <p>La <strong>frontera</strong> es lo que separa al sistema de su entorno (las paredes de la olla, el plástico del globo).</p>

          <h4>Primera ley de la termodinámica</h4>
          <figure class="diagrama-quimica">
            <img src="images/fisica/gas-piston.svg" alt="Gas dentro de un pistón que recibe calor y realiza trabajo" loading="lazy">
            <figcaption>El calor que recibe el gas (Q) se reparte: una parte aumenta su energía interna (ΔU) y otra parte se usa para empujar el pistón (W).</figcaption>
          </figure>
          <div class="formula">ΔU = Q − W<br>
Q &gt; 0: el sistema recibe calor · W &gt; 0: el sistema realiza trabajo sobre el entorno</div>
          <p>Es la ley de conservación de la energía aplicada al calor y al trabajo.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> En la olla de presión, el vapor recibe 2000 J de calor de la flama y empuja la válvula realizando 300 J de trabajo. Su energía interna aumenta: ΔU = 2000 − 300 = <strong>1700 J</strong>. Como la olla es un sistema cerrado, la presión sube y el agua hierve por arriba de 100 °C: los frijoles se cuecen mucho más rápido, algo muy útil en los Altos, donde el agua hierve a unos 93 °C.
          </div>
        `,
        actividades: [
          { pregunta: "En la ecuación P·V = n·R·T, la temperatura debe estar en:", opciones: ["Grados Celsius", "Kelvin", "Grados Fahrenheit", "Calorías"], correcta: "Kelvin", explicacion: "Las leyes de los gases usan la escala absoluta." },
          { pregunta: "Una olla de presión cerrada es un sistema:", opciones: ["Abierto", "Cerrado", "Aislado", "Ideal"], correcta: "Cerrado", explicacion: "Intercambia energía (calor) pero no materia." },
          { pregunta: "Un gas recibe 500 J de calor y realiza 200 J de trabajo. Su ΔU es:", opciones: ["700 J", "300 J", "−300 J", "250 J"], correcta: "300 J", explicacion: "ΔU = Q − W = 500 − 200 = 300 J." },
          { pregunta: "Según la ley de Boyle, si comprimes un gas (menor volumen) a temperatura constante, su presión:", opciones: ["Aumenta", "Disminuye", "No cambia", "Se vuelve cero"], correcta: "Aumenta", explicacion: "P y V son inversamente proporcionales." },
          { pregunta: "La primera ley de la termodinámica es una forma de:", opciones: ["La conservación de la energía", "La gravitación universal", "La ley de Ohm", "La refracción"], correcta: "La conservación de la energía", explicacion: "La energía no se crea ni se destruye: se reparte entre ΔU y W." }
        ]
      },
      {
        id: "fx2-5",
        proposito: "Propósito formativo 7",
        titulo: "Entropía, Entalpía y Segunda y Tercera Leyes",
        icono: "🧊",
        imagen: "linear-gradient(135deg, #0891b2, #7c3aed)",
        concepto: `
          <h4>Segunda ley de la termodinámica</h4>
          <ul>
            <li>El calor fluye <strong>de forma espontánea</strong> del cuerpo caliente al frío, nunca al revés (el café se enfría solo, pero nunca se calienta solo).</li>
            <li>Ninguna máquina térmica puede convertir <strong>todo</strong> el calor en trabajo: siempre se pierde una parte hacia el entorno.</li>
          </ul>
          <div class="formula">Eficiencia de una máquina térmica: e = W / Q caliente<br>
Eficiencia máxima (Carnot): e = 1 − T fría / T caliente &nbsp;&nbsp;(en kelvin)</div>
          <p>Ejemplo: un motor que trabaja entre 600 K y 300 K puede tener, como máximo, una eficiencia de 1 − 300/600 = <strong>50 %</strong>. Los motores reales de los autos quedan muy por debajo.</p>

          <h4>Entropía: la medida de la dispersión</h4>
          <p>La <strong>entropía (S)</strong> mide qué tan dispersa o «desordenada» está la energía en un sistema. En un sistema aislado, la entropía <strong>siempre aumenta o se mantiene</strong>, nunca disminuye por sí sola.</p>
          <ul>
            <li>Un cubo de hielo que se derrite en un vaso.</li>
            <li>El aroma del café que se esparce por toda la cocina.</li>
            <li>Una gota de tinta que se mezcla en el agua.</li>
          </ul>
          <p>Ninguno de estos procesos ocurre al revés de forma espontánea: por eso se dice que la entropía marca la «flecha del tiempo».</p>

          <h4>Entalpía: el calor en las reacciones</h4>
          <p>La <strong>entalpía (H)</strong> es el contenido de energía de un sistema a presión constante. Su cambio (ΔH) indica si un proceso libera o absorbe calor:</p>
          <table class="tabla-estudio">
            <tr><th>ΔH negativo: exotérmico</th><th>ΔH positivo: endotérmico</th></tr>
            <tr><td>Libera calor: quemar leña o gas, la respiración</td><td>Absorbe calor: derretir hielo, cocer una tortilla, la fotosíntesis</td></tr>
          </table>

          <h4>Tercera ley de la termodinámica</h4>
          <p>A medida que la temperatura se acerca al <strong>cero absoluto (0 K = −273.15 °C)</strong>, la entropía de un cristal perfecto se acerca a cero. Además, es imposible llegar exactamente al cero absoluto en un número finito de pasos.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> El refrigerador de la tienda de la esquina saca calor del interior frío y lo arroja al exterior caliente. ¿Viola la segunda ley? No: lo logra gastando trabajo eléctrico del compresor. Por eso la parte de atrás del refrigerador está caliente y por eso consume tanta energía en el calor de Tuxtla.
          </div>
        `,
        actividades: [
          { pregunta: "Según la segunda ley, el calor fluye espontáneamente:", opciones: ["Del cuerpo frío al caliente", "Del cuerpo caliente al frío", "En ambas direcciones por igual", "No fluye"], correcta: "Del cuerpo caliente al frío", explicacion: "Por eso el café se enfría solo." },
          { pregunta: "La entropía de un sistema aislado:", opciones: ["Siempre disminuye", "Aumenta o se mantiene", "Es siempre cero", "No existe"], correcta: "Aumenta o se mantiene", explicacion: "La energía tiende a dispersarse." },
          { pregunta: "Quemar leña es un proceso:", opciones: ["Endotérmico (ΔH positivo)", "Exotérmico (ΔH negativo)", "Sin cambio de energía", "Nuclear"], correcta: "Exotérmico (ΔH negativo)", explicacion: "Libera calor al entorno." },
          { pregunta: "La eficiencia máxima de un motor entre 400 K y 300 K es:", opciones: ["25 %", "75 %", "100 %", "50 %"], correcta: "25 %", explicacion: "e = 1 − 300/400 = 0.25 = 25 %." },
          { pregunta: "La tercera ley dice que el cero absoluto:", opciones: ["Se alcanza fácilmente", "No se puede alcanzar en un número finito de pasos", "Es 0 °C", "Es la temperatura del hielo"], correcta: "No se puede alcanzar en un número finito de pasos", explicacion: "El cero absoluto es 0 K = −273.15 °C." }
        ]
      },
      {
        id: "fx2-6",
        proposito: "Propósito formativo 8",
        titulo: "La Energía en Chiapas: Fenómenos y Tecnología",
        icono: "🏞️",
        imagen: "linear-gradient(135deg, #059669, #0284c7)",
        concepto: `
          <h4>Fenómenos naturales donde interviene la energía</h4>
          <ul>
            <li><strong>Rayos y tormentas:</strong> en las nubes se acumulan cargas eléctricas que se liberan en una descarga de energía eléctrica, luminosa, sonora (el trueno) y térmica.</li>
            <li><strong>Huracanes:</strong> se alimentan de la energía térmica del océano caliente; el aire húmedo sube por convección y libera enormes cantidades de energía.</li>
            <li><strong>Sismos:</strong> las placas tectónicas acumulan energía elástica que se libera de golpe. El 7 de septiembre de 2017 un sismo de magnitud 8.2 frente a las costas de Chiapas fue uno de los más fuertes registrados en México.</li>
            <li><strong>Volcanes:</strong> la energía térmica del interior de la Tierra se manifiesta en volcanes como el Chichonal, que hizo erupción en 1982, y el Tacaná, en la frontera con Guatemala.</li>
            <li><strong>Fotosíntesis:</strong> las plantas de la selva capturan energía luminosa y la guardan como energía química.</li>
          </ul>

          <h4>Tecnologías energéticas en Chiapas</h4>
          <table class="tabla-estudio">
            <tr><th>Tecnología</th><th>Transformación</th><th>En Chiapas</th></tr>
            <tr><td>Hidroeléctricas</td><td>Potencial → cinética → eléctrica</td><td>Las presas del Grijalva: Chicoasén, Malpaso, La Angostura y Peñitas. Chicoasén es la hidroeléctrica más grande de México.</td></tr>
            <tr><td>Paneles solares</td><td>Luminosa → eléctrica</td><td>Comunidades alejadas de la red eléctrica</td></tr>
            <tr><td>Secado solar</td><td>Luminosa → térmica</td><td>Los patios donde se seca el café</td></tr>
            <tr><td>Calentadores solares</td><td>Luminosa → térmica</td><td>Agua caliente sin gas</td></tr>
            <tr><td>Estufas ahorradoras de leña</td><td>Química → térmica (con menos pérdidas)</td><td>Usan menos leña y sacan el humo de la cocina</td></tr>
          </table>

          <div class="ejemplo">
            <strong>Energía y salud:</strong> el humo del fogón abierto dentro de la casa daña los pulmones, sobre todo de mujeres y niños. Las estufas ahorradoras con chimenea aprovechan mejor el calor de la leña (mayor eficiencia) y sacan el humo de la cocina.
          </div>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Proyecto: auditoría energética de tu casa.</strong> Haz una tabla con los aparatos de tu casa, su potencia en watts (viene en la etiqueta) y las horas que se usan al día. Calcula los kWh de un mes (W × horas × 30 ÷ 1000) y compáralos con tu recibo de luz. Propón tres acciones para ahorrar energía, por ejemplo cambiar focos por LED o desconectar los cargadores.
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es la hidroeléctrica más grande de México, ubicada en Chiapas?", opciones: ["Chicoasén", "Laguna Verde", "Tula", "Infiernillo"], correcta: "Chicoasén", explicacion: "Está sobre el río Grijalva." },
          { pregunta: "Los huracanes obtienen su energía principalmente de:", opciones: ["El océano caliente", "La Luna", "Los volcanes", "Los rayos"], correcta: "El océano caliente", explicacion: "El aire húmedo y caliente sube por convección y libera energía." },
          { pregunta: "En un sismo se libera energía que estaba acumulada como energía:", opciones: ["Elástica en las rocas", "Química", "Luminosa", "Sonora"], correcta: "Elástica en las rocas", explicacion: "Las placas se deforman y se liberan de golpe." },
          { pregunta: "Una estufa ahorradora de leña es mejor que un fogón abierto porque:", opciones: ["Crea energía", "Aprovecha mejor el calor y saca el humo", "No usa leña", "Produce electricidad"], correcta: "Aprovecha mejor el calor y saca el humo", explicacion: "Tiene mayor eficiencia y cuida la salud." },
          { pregunta: "Un aparato de 100 W usado 2 horas diarias durante 30 días consume:", opciones: ["6 kWh", "60 kWh", "0.6 kWh", "600 kWh"], correcta: "6 kWh", explicacion: "100 × 2 × 30 = 6000 Wh = 6 kWh." }
        ]
      }
    ]
  },

  // ==========================================================
  // QUINTO SEMESTRE - CNEyT V · DEL ÁTOMO AL UNIVERSO
  // ==========================================================
  5: {
    titulo: "CNEyT V · Del átomo al universo",
    subtitulo: "Fuerza y Energía",
    semestre: "Quinto Semestre",
    icono: "🪐",
    descripcion: "Construye explicaciones sobre fenómenos mecánicos, gravitatorios, ondulatorios, ópticos, de fluidos y electromagnéticos, y asómate a la física moderna.",
    contexto: "Desde el colectivo que sube a San Cristóbal y las lanchas del Cañón del Sumidero hasta el sonido de la marimba, el arcoíris sobre la selva y las estrellas que se ven sin contaminación lumínica en las comunidades: la física explica tu realidad inmediata.",
    temas: [
            {
        id: "f1-1",
        proposito: "Propósito formativo 1",
        titulo: "Medición y Vectores",
        icono: "📏",
        imagen: "linear-gradient(135deg, #f59e0b, #ef4444)",
        concepto: `
          <h4>El lenguaje universal de la Física</h4>
          <p>La física no podría existir sin la <strong>medición</strong>. Medir es comparar una cantidad desconocida con un patrón establecido. Para que científicos de todo el mundo se entiendan, se creó el <strong>Sistema Internacional de Unidades (SI)</strong>.</p>
          <ul>
            <li><strong>Magnitudes fundamentales:</strong> Longitud (metro), Masa (kilogramo), Tiempo (segundo), Temperatura (Kelvin), etc.</li>
            <li><strong>Magnitudes derivadas:</strong> Se forman al combinar las fundamentales (ej. la velocidad es metros/segundo).</li>
          </ul>
          <h4>¿Qué es un Vector?</h4>
          <p>Imagina que le dices a un amigo: "Camina 5 metros". Él te preguntará: <em>¿hacia dónde?</em>. La distancia es un escalar (solo tiene número), pero si le dices "camina 5 metros hacia el norte", ahora tienes un <strong>vector</strong> (tiene magnitud, dirección y sentido).</p>
          <p>En física, fuerzas, velocidades y desplazamientos son vectores. Para resolver problemas con ellos, a menudo los "descomponemos" en sus partes horizontal (X) y vertical (Y) usando funciones trigonométricas.</p>
          <div class="formula">
            Componente X: Fx = F · cos(θ)<br>
            Componente Y: Fy = F · sen(θ)
          </div>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> En el Cañón del Sumidero, un guía turístico jala un bote con una fuerza de 500 N a un ángulo de 30° respecto a la orilla. Para saber cuánta fuerza se aprovecha para avanzar (horizontal), usamos la descomposición vectorial: Fx = 500 · cos(30°) = <strong>433 N</strong>. El resto se pierde hacia arriba.
          </div>
        `,
        actividades: [
          {
            pregunta: "¿Cuál de las siguientes es una magnitud VECTORIAL?",
            opciones: ["Temperatura", "Masa", "Fuerza", "Tiempo"],
            correcta: "Fuerza",
            explicacion: "La fuerza tiene dirección y sentido, por eso es vectorial."
          },
          {
            pregunta: "Si jalas una carreta con 100 N a 60° (cos 60°=0.5), ¿cuál es la fuerza horizontal?",
            opciones: ["100 N", "50 N", "86.6 N", "25 N"],
            correcta: "50 N",
            explicacion: "Fx = F · cos(θ) = 100 · 0.5 = 50 N."
          },
          {
            pregunta: "En el SI, ¿cuál es la unidad de medida de la masa?",
            opciones: ["Gramo (g)", "Libra (lb)", "Kilogramo (kg)", "Newton (N)"],
            correcta: "Kilogramo (kg)",
            explicacion: "El kilogramo es la unidad base del SI para la masa."
          },
          {
            pregunta: "¿Qué instrumento usarías para medir el volumen de agua de lluvia en tu comunidad?",
            opciones: ["Balanza", "Probeta", "Termómetro", "Cronómetro"],
            correcta: "Probeta",
            explicacion: "La probeta mide volúmenes de líquidos."
          },
          {
            pregunta: "Si dos vectores son perpendiculares, ¿qué ángulo forman?",
            opciones: ["0°", "45°", "90°", "180°"],
            correcta: "90°",
            explicacion: "La perpendicularidad implica un ángulo recto de 90°."
          }
        ]
      },
            {
        id: "f1-2",
        proposito: "Propósito formativo 1",
        titulo: "Movimiento Rectilíneo (MRU y MRUA)",
        icono: "🏃",
        imagen: "linear-gradient(135deg, #10b981, #3b82f6)",
        concepto: `
          <h4>Cinemática: Describiendo el movimiento</h4>
          <p>La cinemática estudia el movimiento de los cuerpos sin importar qué lo causó. Para describirlo, usamos tres conceptos clave:</p>
          <ul>
            <li><strong>Posición:</strong> Dónde está el objeto.</li>
            <li><strong>Velocidad:</strong> Qué tan rápido cambia de posición (v = distancia / tiempo).</li>
            <li><strong>Aceleración:</strong> Qué tan rápido cambia la velocidad.</li>
          </ul>
          <h4>MRU (Movimiento Rectilíneo Uniforme)</h4>
          <p>Ocurre cuando un objeto se mueve en línea recta con una velocidad constante. No frena ni acelera. Un ejemplo sería un avión volando en crucero.</p>
          <div class="formula">v = d / t</div>
          <h4>MRUA (Movimiento Rectilíneo Uniformemente Acelerado)</h4>
          <p>La velocidad cambia constantemente. Si un coche acelera para rebasar, o frena en un semáforo, es un MRUA.</p>
          <div class="formula">
            v = v₀ + a·t<br>
            d = v₀·t + ½·a·t²
          </div>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> Un autobús de la línea Tuxtla-San Cristóbal viaja a 80 km/h. Si el trayecto dura 1.5 horas, la distancia recorrida es d = v · t = 80 × 1.5 = <strong>120 km</strong>. Entender esto ayuda a los transportistas a calcular el combustible y los tiempos de llegada.
          </div>
        `,
        actividades: [
          {
            pregunta: "Un autobús viaja a 60 km/h constante. ¿Qué distancia recorre en 2 horas?",
            opciones: ["30 km", "120 km", "60 km", "100 km"],
            correcta: "120 km",
            explicacion: "d = v · t = 60 km/h × 2 h = 120 km."
          },
          {
            pregunta: "Si un auto frena de 80 km/h a 0 en 4 segundos, ¿qué tipo de movimiento es?",
            opciones: ["MRU", "MRUA (desaceleración)", "Caída libre", "Tiro parabólico"],
            correcta: "MRUA (desaceleración)",
            explicacion: "Su velocidad cambia, por lo que es un movimiento acelerado (negativo)."
          },
          {
            pregunta: "Si un motociclista acelera de 0 a 20 m/s en 4 s, ¿cuál es su aceleración?",
            opciones: ["4 m/s²", "5 m/s²", "80 m/s²", "0.2 m/s²"],
            correcta: "5 m/s²",
            explicacion: "a = (v_f - v_i) / t = (20 - 0) / 4 = 5 m/s²."
          },
          {
            pregunta: "¿Qué forma tiene la gráfica de distancia vs tiempo en un MRU?",
            opciones: ["Una parábola", "Una línea recta inclinada", "Una línea horizontal", "Un círculo"],
            correcta: "Una línea recta inclinada",
            explicacion: "La distancia crece proporcionalmente al tiempo."
          },
          {
            pregunta: "Si un tren viaja a 100 km/h y frena hasta detenerse, ¿su aceleración es positiva o negativa?",
            opciones: ["Positiva", "Negativa", "Cero", "No tiene"],
            correcta: "Negativa",
            explicacion: "Al frenar, la velocidad disminuye, por lo que la aceleración va en sentido contrario al movimiento (negativa)."
          }
        ]
      },
            {
        id: "f1-3",
        proposito: "Propósito formativo 1 y 3",
        titulo: "Caída Libre y Tiro Parabólico",
        icono: "🎯",
        imagen: "linear-gradient(135deg, #8b5cf6, #d946ef)",
        concepto: `
          <h4>El movimiento bajo la gravedad</h4>
          <p>La <strong>Caída Libre</strong> es un caso especial de MRUA donde la única fuerza que actúa es la gravedad (g = 9.8 m/s²). No importa la masa del objeto (en el vacío), todos caen al mismo tiempo.</p>
          <div class="formula">
            v = g · t<br>
            h = ½ · g · t²
          </div>
          <h4>Tiro Parabólico</h4>
          <p>Ocurre cuando lanzas un objeto con un ángulo. El movimiento se separa en dos: horizontal (MRU, velocidad constante) y vertical (Caída libre, acelera por la gravedad).</p>
          <div class="formula">
            Alcance máximo: R = (v₀² · sen(2θ)) / g
          </div>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> En las cascadas de Agua Azul, una gota de agua cae desde una altura de 20 metros. Usando h = ½gt², podemos calcular que tarda aproximadamente <strong>2 segundos</strong> en llegar al río. Si un turista lanza una piedra horizontalmente, esta describirá una parábola hasta el agua.
          </div>
        `,
        actividades: [
          {
            pregunta: "Si dejas caer una piedra desde un puente, ¿qué magnitud aumenta mientras cae?",
            opciones: ["Su masa", "Su velocidad", "Su volumen", "Su peso"],
            correcta: "Su velocidad",
            explicacion: "La gravedad acelera el objeto (9.8 m/s²)."
          },
          {
            pregunta: "¿En qué caso un objeto pesado y uno ligero caen al mismo tiempo?",
            opciones: ["En el aire", "En el vacío", "En el agua", "Nunca"],
            correcta: "En el vacío",
            explicacion: "Sin resistencia del aire, la gravedad actúa igual para todos."
          },
          {
            pregunta: "En un tiro parabólico, ¿qué componente de la velocidad se mantiene constante?",
            opciones: ["La vertical", "La horizontal", "Ambas", "Ninguna"],
            correcta: "La horizontal",
            explicacion: "La gravedad solo afecta la componente vertical (Y). La horizontal (X) es MRU."
          },
          {
            pregunta: "¿Cuál es el valor aproximado de la gravedad en la Tierra?",
            opciones: ["5 m/s²", "9.8 m/s²", "15 m/s²", "20 m/s²"],
            correcta: "9.8 m/s²",
            explicacion: "Es la aceleración constante con la que caen los cuerpos."
          },
          {
            pregunta: "Si lanzas una pelota hacia arriba, ¿qué pasa con su velocidad en el punto más alto?",
            opciones: ["Es máxima", "Es cero", "Es negativa", "Se duplica"],
            correcta: "Es cero",
            explicacion: "En el punto más alto, la pelota se detiene por un instante antes de caer."
          }
        ]
      },
            {
        id: "f1-4",
        proposito: "Propósito formativo 1 y 2",
        titulo: "Leyes de Newton",
        icono: "⚖️",
        imagen: "linear-gradient(135deg, #8b5cf6, #ec4899)",
        concepto: `
          <h4>El porqué del movimiento</h4>
          <p>Isaac Newton revolucionó la ciencia al explicar por qué los objetos se mueven. Sus tres leyes son la base de la mecánica clásica:</p>
          <ol>
            <li><strong>1ra Ley (Inercia):</strong> Un objeto en reposo permanecerá en reposo, y uno en movimiento seguirá moviéndose en línea recta a velocidad constante, a menos que actúe sobre él una fuerza externa.</li>
            <li><strong>2da Ley (Masa y Aceleración):</strong> La aceleración de un objeto es directamente proporcional a la fuerza neta que actúa sobre él, e inversamente proporcional a su masa. Fórmula: F = m · a.</li>
            <li><strong>3ra Ley (Acción y Reacción):</strong> Para cada acción, hay una reacción igual y en sentido opuesto.</li>
          </ol>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> Los "colectivos" que suben a San Juan Chamula necesitan mucha fuerza del motor para vencer la gravedad y la inercia cuando van llenos de pasajeros y mercancía. Si el vehículo pesa mucho (m), la aceleración (a) será menor para una misma fuerza del motor (F).
          </div>
        `,
        actividades: [
          {
            pregunta: "Si empujas un bulto de 50 kg con 100 N, ¿qué aceleración logra?",
            opciones: ["2 m/s²", "5000 m/s²", "0.5 m/s²", "50 m/s²"],
            correcta: "2 m/s²",
            explicacion: "a = F / m = 100 / 50 = 2 m/s²."
          },
          {
            pregunta: "¿Por qué usamos cinturón de seguridad? (1ra Ley)",
            opciones: ["Para no mojarnos", "Para contrarrestar la inercia en un frenado", "Porque la ley lo exige", "Para no volar"],
            correcta: "Para contrarrestar la inercia en un frenado",
            explicacion: "Si el auto frena, tu cuerpo quiere seguir moviéndose por inercia."
          },
          {
            pregunta: "Si pateas un balón y este sale volando, ¿qué ley se aplica?",
            opciones: ["1ra Ley", "2da Ley", "3ra Ley", "Ley de Gravedad"],
            correcta: "3ra Ley",
            explicacion: "Acción (patear) y Reacción (el balón empuja tu pie)."
          },
          {
            pregunta: "El peso de un objeto depende de:",
            opciones: ["El volumen", "La gravedad", "La densidad", "La temperatura"],
            correcta: "La gravedad",
            explicacion: "Peso = masa × gravedad. En la Luna pesarías menos."
          },
          {
            pregunta: "Si un camión y un coche chocan, ¿quién experimenta mayor fuerza?",
            opciones: ["El coche", "El camión", "Ambos la misma fuerza", "Depende de la velocidad"],
            correcta: "Ambos la misma fuerza",
            explicacion: "Por la 3ra ley, las fuerzas son iguales. El coche se deforma más por tener menor masa."
          }
        ]
      },
      {
        id: "fx5-1",
        proposito: "Propósito formativo 3",
        titulo: "Gravitación Universal y Leyes de Kepler",
        icono: "🌍",
        imagen: "linear-gradient(135deg, #1e3a8a, #7c3aed)",
        concepto: `
          <h4>Ley de la gravitación universal</h4>
          <p>Isaac Newton descubrió que la misma fuerza que hace caer un mango del árbol mantiene a la Luna girando alrededor de la Tierra: <strong>todos los cuerpos con masa se atraen</strong>.</p>
          <div class="formula">F = G · (m₁ · m₂) / r²<br>
G = 6.67 × 10⁻¹¹ N·m²/kg² (constante de gravitación universal)</div>
          <ul>
            <li>A <strong>más masa</strong>, más atracción.</li>
            <li>A <strong>más distancia</strong>, mucho menos atracción: si la distancia se duplica, la fuerza se reduce a la cuarta parte.</li>
          </ul>
          <p>En 1798 <strong>Henry Cavendish</strong> midió por primera vez el valor de G con una balanza de torsión: dos esferas pequeñas colgadas de un hilo eran atraídas por dos esferas grandes de plomo.</p>

          <h4>Masa, peso y caída libre</h4>
          <p>La <strong>masa</strong> (kg) es la cantidad de materia y no cambia. El <strong>peso</strong> (N) es la fuerza con que un planeta te atrae: W = m · g.</p>
          <table class="tabla-estudio">
            <tr><th>Lugar</th><th>g (m/s²)</th><th>Peso de una persona de 60 kg</th></tr>
            <tr><td>Tierra</td><td>9.81</td><td>588.6 N</td></tr>
            <tr><td>Luna</td><td>1.62</td><td>97.2 N</td></tr>
            <tr><td>Júpiter</td><td>24.8</td><td>1488 N</td></tr>
          </table>
          <p>Galileo demostró que, sin resistencia del aire, todos los objetos caen con la misma aceleración sin importar su masa. En 1971 el astronauta David Scott soltó un martillo y una pluma en la Luna: ¡cayeron al mismo tiempo!</p>

          <h4>Las tres leyes de Kepler</h4>
          <figure class="diagrama-quimica">
            <img src="images/fisica/orbita-kepler.svg" alt="Órbita elíptica con áreas iguales en tiempos iguales" loading="lazy">
            <figcaption>Segunda ley de Kepler: el planeta barre áreas iguales en tiempos iguales, así que va más rápido cerca del Sol y más lento lejos de él.</figcaption>
          </figure>
          <ol>
            <li><strong>Ley de las órbitas:</strong> los planetas giran en órbitas elípticas, con el Sol en uno de sus focos.</li>
            <li><strong>Ley de las áreas:</strong> la línea Sol-planeta barre áreas iguales en tiempos iguales.</li>
            <li><strong>Ley de los periodos:</strong> el cuadrado del periodo es proporcional al cubo del tamaño de la órbita: T² ∝ a³.</li>
          </ol>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> Marte está, en promedio, 1.52 veces más lejos del Sol que la Tierra. Con la tercera ley de Kepler (T en años, a en unidades astronómicas): T² = a³ → T = √(1.52³) ≈ <strong>1.87 años</strong>. Desde las comunidades de la Selva Lacandona, lejos de las luces de las ciudades, puedes ver a Marte como un punto rojizo y seguir su movimiento entre las estrellas a lo largo de varias semanas.
          </div>
        `,
        actividades: [
          { pregunta: "Si la distancia entre dos cuerpos se duplica, la fuerza gravitacional:", opciones: ["Se duplica", "Se reduce a la mitad", "Se reduce a la cuarta parte", "No cambia"], correcta: "Se reduce a la cuarta parte", explicacion: "Depende de 1/r²: (1/2)² = 1/4." },
          { pregunta: "¿Quién midió por primera vez la constante G?", opciones: ["Newton", "Cavendish", "Kepler", "Galileo"], correcta: "Cavendish", explicacion: "Lo hizo en 1798 con una balanza de torsión." },
          { pregunta: "¿Cuánto pesa en la Luna una persona de 50 kg? (g = 1.62 m/s²)", opciones: ["50 N", "81 N", "490 N", "30.9 N"], correcta: "81 N", explicacion: "W = m·g = 50 × 1.62 = 81 N. Su masa sigue siendo 50 kg." },
          { pregunta: "Según la primera ley de Kepler, las órbitas de los planetas son:", opciones: ["Círculos perfectos", "Elipses con el Sol en un foco", "Líneas rectas", "Espirales"], correcta: "Elipses con el Sol en un foco", explicacion: "Por eso la distancia al Sol cambia durante el año." },
          { pregunta: "Sin aire, un martillo y una pluma soltados a la vez:", opciones: ["Caen al mismo tiempo", "Cae primero el martillo", "Cae primero la pluma", "Flotan"], correcta: "Caen al mismo tiempo", explicacion: "Todos los cuerpos caen con la misma aceleración sin resistencia del aire." }
        ]
      },
      {
        id: "fx5-2",
        proposito: "Propósito formativo 4",
        titulo: "Ondas y Sonido",
        icono: "🎵",
        imagen: "linear-gradient(135deg, #0ea5e9, #9333ea)",
        concepto: `
          <h4>¿Qué es una onda?</h4>
          <p>Una <strong>onda</strong> es una perturbación que <strong>transporta energía sin transportar materia</strong>. Cuando lanzas una piedra al agua, las ondas avanzan, pero la hoja que flota solo sube y baja en su lugar.</p>

          <h4>Tipos de ondas</h4>
          <table class="tabla-estudio">
            <tr><th>Clasificación</th><th>Tipo</th><th>Ejemplos</th></tr>
            <tr><td rowspan="2">Según el medio</td><td><strong>Mecánicas:</strong> necesitan un medio (sólido, líquido o gas)</td><td>Sonido, olas, ondas sísmicas</td></tr>
            <tr><td><strong>Electromagnéticas:</strong> viajan incluso en el vacío</td><td>Luz, radio, microondas, rayos X</td></tr>
            <tr><td rowspan="2">Según la vibración</td><td><strong>Transversales:</strong> vibran perpendicular al avance</td><td>Una cuerda de guitarra, la luz</td></tr>
            <tr><td><strong>Longitudinales:</strong> vibran en la misma dirección del avance</td><td>El sonido, un resorte comprimido</td></tr>
            <tr><td>Según su forma</td><td><strong>Armónicas:</strong> se repiten de forma regular (senoidal)</td><td>El tono puro de un diapasón</td></tr>
          </table>

          <h4>Características de las ondas</h4>
          <figure class="diagrama-quimica">
            <img src="images/fisica/ondas-partes.svg" alt="Partes de una onda" loading="lazy">
            <figcaption><strong>Cresta</strong> (punto más alto), <strong>valle</strong> (punto más bajo), <strong>amplitud</strong> (altura de la onda; en el sonido, el volumen) y <strong>longitud de onda λ</strong> (distancia entre dos crestas).</figcaption>
          </figure>
          <ul>
            <li><strong>Frecuencia (f):</strong> número de oscilaciones por segundo, en hertz (Hz). En el sonido, define si es grave o agudo.</li>
            <li><strong>Periodo (T):</strong> tiempo de una oscilación completa. T = 1 / f.</li>
          </ul>
          <div class="formula">Velocidad de propagación: v = λ · f</div>

          <h4>Velocidad del sonido</h4>
          <table class="tabla-estudio">
            <tr><th>Medio</th><th>Velocidad aproximada</th></tr>
            <tr><td>Aire (20 °C)</td><td>343 m/s</td></tr>
            <tr><td>Agua</td><td>1480 m/s</td></tr>
            <tr><td>Acero</td><td>5900 m/s</td></tr>
          </table>
          <p>Truco para saber qué tan lejos cayó un rayo: cuenta los segundos entre el relámpago y el trueno y divide entre 3; el resultado son kilómetros aproximados (el sonido recorre 1 km en unos 3 s).</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> En la <strong>marimba</strong>, instrumento emblema de Chiapas, cada tecla de madera de hormiguillo vibra al golpearla. Las teclas largas vibran con menor frecuencia (notas graves) y las cortas con mayor frecuencia (notas agudas). Debajo de cada tecla hay una caja de resonancia que amplifica el sonido. En los <strong>sismos</strong>, las ondas P (longitudinales) llegan primero y las ondas S (transversales), más lentas y destructivas, después: esa diferencia de segundos es la que aprovecha la alerta sísmica.
          </div>
        `,
        actividades: [
          { pregunta: "Una onda transporta:", opciones: ["Materia", "Energía, sin transportar materia", "Solo agua", "Nada"], correcta: "Energía, sin transportar materia", explicacion: "La hoja sobre el agua sube y baja, pero no avanza." },
          { pregunta: "El sonido es una onda:", opciones: ["Electromagnética y transversal", "Mecánica y longitudinal", "Que viaja en el vacío", "De luz"], correcta: "Mecánica y longitudinal", explicacion: "Necesita un medio y vibra en la dirección en que avanza." },
          { pregunta: "Una onda de 2 m de longitud y 50 Hz de frecuencia viaja a:", opciones: ["25 m/s", "100 m/s", "52 m/s", "0.04 m/s"], correcta: "100 m/s", explicacion: "v = λ · f = 2 × 50 = 100 m/s." },
          { pregunta: "Ves un relámpago y escuchas el trueno 6 segundos después. El rayo cayó a unos:", opciones: ["2 km", "6 km", "18 km", "0.5 km"], correcta: "2 km", explicacion: "6 s ÷ 3 ≈ 2 km (343 m/s × 6 s ≈ 2058 m)." },
          { pregunta: "En la marimba, las teclas más largas producen notas:", opciones: ["Más agudas", "Más graves", "Más fuertes", "Sin sonido"], correcta: "Más graves", explicacion: "Vibran con menor frecuencia." }
        ]
      },
      {
        id: "fx5-3",
        proposito: "Propósito formativo 5",
        titulo: "La Luz: Reflexión, Refracción y Lentes",
        icono: "🌈",
        imagen: "linear-gradient(135deg, #f43f5e, #eab308, #0ea5e9)",
        concepto: `
          <h4>El modelo de rayos</h4>
          <p>Para estudiar cómo viaja la luz se representa con <strong>rayos</strong>: líneas rectas con una flecha. La luz viaja a unos <strong>300 000 km/s</strong> en el vacío; la luz del Sol tarda unos 8 minutos en llegar a la Tierra.</p>

          <h4>Reflexión y refracción</h4>
          <figure class="diagrama-quimica">
            <img src="images/fisica/reflexion-refraccion.svg" alt="Reflexión y refracción de un rayo de luz" loading="lazy">
            <figcaption>Al llegar al agua, parte de la luz rebota (<strong>reflexión</strong>) y parte entra y cambia de dirección (<strong>refracción</strong>), porque en el agua la luz viaja más lento.</figcaption>
          </figure>
          <ul>
            <li><strong>Reflexión:</strong> el ángulo de incidencia es igual al ángulo de reflexión. Así funcionan los espejos y por eso el lago de Montebello refleja el cielo.</li>
            <li><strong>Refracción:</strong> la luz cambia de velocidad y se desvía al pasar de un medio a otro. Por eso una cuchara dentro de un vaso de agua parece quebrada y un río parece menos profundo de lo que es.</li>
          </ul>
          <div class="formula">Índice de refracción: n = c / v &nbsp;&nbsp;(aire ≈ 1.00 · agua ≈ 1.33 · vidrio ≈ 1.5)</div>
          <p><strong>Dispersión:</strong> la luz blanca contiene todos los colores; cada uno se refracta un poco distinto. En las gotas de lluvia se separan y forman el <strong>arcoíris</strong>.</p>

          <h4>Lentes convergentes y divergentes</h4>
          <figure class="diagrama-quimica">
            <img src="images/fisica/lentes.svg" alt="Lente convergente y lente divergente" loading="lazy">
            <figcaption>La lente <strong>convergente</strong> (más gruesa en el centro) junta los rayos en un punto llamado <strong>foco</strong>. La <strong>divergente</strong> (más delgada en el centro) los separa.</figcaption>
          </figure>
          <ul>
            <li><strong>Convergentes:</strong> lupa, cámara, proyector, el cristalino de tu ojo, lentes para la hipermetropía.</li>
            <li><strong>Divergentes:</strong> lentes para corregir la miopía, mirillas de las puertas.</li>
          </ul>

          <h4>¿Qué es la luz? Dos modelos</h4>
          <table class="tabla-estudio">
            <tr><th>Modelo corpuscular</th><th>Modelo ondulatorio</th></tr>
            <tr><td>Newton (siglo XVII): la luz está formada por partículas.</td><td>Huygens (siglo XVII) y Young (1801): la luz es una onda; lo demostró el experimento de la doble rendija.</td></tr>
          </table>
          <p>Hoy sabemos que la luz se comporta como onda y como partícula (el <strong>fotón</strong>, propuesto por Einstein en 1905): es la <strong>dualidad onda-partícula</strong>.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> Los pescadores del río Usumacinta saben que deben apuntar la fisga <strong>por debajo</strong> de donde ven al pez: por la refracción, el pez parece estar más arriba de donde realmente está. Experimento casero: una gota de agua sobre un plástico transparente funciona como una lupa (lente convergente).
          </div>
        `,
        actividades: [
          { pregunta: "Cuando la luz rebota en un espejo ocurre:", opciones: ["Refracción", "Reflexión", "Dispersión", "Absorción"], correcta: "Reflexión", explicacion: "El ángulo de incidencia es igual al de reflexión." },
          { pregunta: "Una cuchara parece quebrada dentro de un vaso con agua por:", opciones: ["La reflexión", "La refracción", "La gravedad", "El sonido"], correcta: "La refracción", explicacion: "La luz cambia de velocidad y de dirección al pasar del agua al aire." },
          { pregunta: "La lupa es una lente:", opciones: ["Convergente", "Divergente", "Plana", "Opaca"], correcta: "Convergente", explicacion: "Junta los rayos de luz en el foco." },
          { pregunta: "El arcoíris se forma por:", opciones: ["La dispersión de la luz en las gotas de lluvia", "La reflexión en las nubes", "El sonido del trueno", "La gravedad"], correcta: "La dispersión de la luz en las gotas de lluvia", explicacion: "Cada color se refracta de forma distinta." },
          { pregunta: "La idea de que la luz es a la vez onda y partícula se llama:", opciones: ["Dualidad onda-partícula", "Modelo de rayos", "Ley de Snell", "Principio cero"], correcta: "Dualidad onda-partícula", explicacion: "La partícula de luz es el fotón." }
        ]
      },
            {
        id: "f2-1",
        proposito: "Propósito formativo 6",
        titulo: "Hidráulica y Fluidos",
        icono: "💧",
        imagen: "linear-gradient(135deg, #06b6d4, #3b82f6)",
        concepto: `
          <h4>Mecánica de Fluidos</h4>
          <p>Estudia el comportamiento de líquidos y gases. La <strong>presión</strong> es la fuerza distribuida sobre un área.</p>
          <div class="formula">
            Presión: P = F / A<br>
            Presión hidrostática: P = ρ · g · h
          </div>
          <p><strong>Principio de Arquímedes:</strong> Todo cuerpo sumergido recibe un empuje hacia arriba igual al peso del fluido que desaloja.</p>
          <p><strong>Principio de Pascal:</strong> La presión aplicada a un fluido se transmite con la misma intensidad en todas las direcciones.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> Los tanques de agua elevados en las comunidades de los Altos de Chiapas funcionan gracias a la presión hidrostática. A mayor altura (h) del tanque, mayor será la presión del agua que sale por las llaves de las casas, sin necesidad de bombas eléctricas.
          </div>
        `,
        actividades: [
          {
            pregunta: "¿Qué principio explica por qué un barco flota en el puerto de Chiapas?",
            opciones: ["Principio de Pascal", "Ley de Ohm", "Principio de Arquímedes", "Leyes de Newton"],
            correcta: "Principio de Arquímedes",
            explicacion: "El empuje del agua desalojada es igual al peso del barco."
          },
          {
            pregunta: "Si te sumerges al fondo de una alberca, ¿cómo cambia la presión?",
            opciones: ["Aumenta", "Disminuye", "Se mantiene igual", "Se vuelve cero"],
            correcta: "Aumenta",
            explicacion: "P = ρgh, a mayor profundidad (h), mayor presión."
          },
          {
            pregunta: "¿Qué principio se usa en una prensa hidráulica?",
            opciones: ["Arquímedes", "Pascal", "Bernoulli", "Newton"],
            correcta: "Pascal",
            explicacion: "La presión se transmite uniformemente, multiplicando la fuerza."
          },
          {
            pregunta: "Un objeto flota si su densidad es:",
            opciones: ["Mayor que el agua", "Igual que el agua", "Menor que el agua", "No importa"],
            correcta: "Menor que el agua",
            explicacion: "Si es menos denso, el empuje lo hace flotar."
          },
          {
            pregunta: "La ecuación de continuidad en fluidos se basa en la conservación de:",
            opciones: ["Energía", "Masa", "Presión", "Volumen"],
            correcta: "Masa",
            explicacion: "El gasto (Q = A·v) se mantiene constante en un tubo."
          }
        ]
      },
            {
        id: "f2-3",
        proposito: "Propósito formativo 7",
        titulo: "Electricidad y Ley de Ohm",
        icono: "⚡",
        imagen: "linear-gradient(135deg, #eab308, #f59e0b)",
        concepto: `
          <h4>El flujo de electrones</h4>
          <p>La <strong>corriente eléctrica</strong> es el movimiento ordenado de electrones a través de un material conductor. La <strong>Ley de Ohm</strong> relaciona tres variables fundamentales:</p>
          <ul>
            <li><strong>Voltaje (V):</strong> La "presión" que empuja a los electrones (Volts).</li>
            <li><strong>Corriente (I):</strong> La cantidad de electrones que fluyen (Amperes).</li>
            <li><strong>Resistencia (R):</strong> La oposición al paso de la corriente (Ohms).</li>
          </ul>
          <div class="formula">
            V = I · R<br><br>
            Potencia: P = V · I
          </div>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> Muchas comunidades rurales de Chiapas usan paneles solares. Si un panel proporciona 12 V y conectas un foco LED de 4 Ω, la corriente es I = V / R = 12 / 4 = <strong>3 Amperes</strong>. La potencia consumida sería P = 12 × 3 = 36 Watts.
          </div>
        `,
        actividades: [
          {
            pregunta: "Si tienes una batería de 9 V y 3 Ω de resistencia, ¿cuál es la corriente?",
            opciones: ["27 A", "3 A", "0.33 A", "12 A"],
            correcta: "3 A",
            explicacion: "I = V / R = 9 / 3 = 3 A."
          },
          {
            pregunta: "¿Qué material es mejor conductor de electricidad?",
            opciones: ["Madera seca", "Plástico", "Cobre", "Vidrio"],
            correcta: "Cobre",
            explicacion: "El cobre es un metal con electrones libres."
          },
          {
            pregunta: "En un circuito en serie, la resistencia total es:",
            opciones: ["La suma de las resistencias", "La resta", "El producto", "La división"],
            correcta: "La suma de las resistencias",
            explicacion: "R_eq = R1 + R2 + R3..."
          },
          {
            pregunta: "La Ley de Ohm establece que el voltaje es igual a:",
            opciones: ["I / R", "I × R", "R / I", "I²R"],
            correcta: "I × R",
            explicacion: "V = I · R."
          },
          {
            pregunta: "¿Qué unidad mide la potencia eléctrica?",
            opciones: ["Volt", "Ampere", "Ohm", "Watt"],
            correcta: "Watt",
            explicacion: "La potencia se mide en Watts (W)."
          }
        ]
      },
            {
        id: "f2-4",
        proposito: "Propósito formativo 7",
        titulo: "Electromagnetismo",
        icono: "🧲",
        imagen: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
        concepto: `
          <h4>La unión de dos fuerzas</h4>
          <p>Oersted descubrió que una corriente eléctrica genera un campo magnético. Faraday descubrió lo inverso: un campo magnético variable puede generar electricidad (inducción).</p>
          <div class="formula">
            Fuerza magnética: F = q · v · B · sen(θ)<br>
            Ley de Faraday: ε = - dΦ/dt
          </div>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Aplicación Real:</strong> Los generadores eléctricos de las presas de Chiapas funcionan gracias a la inducción electromagnética. El agua hace girar una turbina, que mueve un imán dentro de una bobina de cobre, generando la electricidad que llega a tu hogar.
          </div>
        `,
        actividades: [
          {
            pregunta: "¿Quién descubrió que una corriente eléctrica genera un campo magnético?",
            opciones: ["Newton", "Faraday", "Oersted", "Einstein"],
            correcta: "Oersted",
            explicacion: "Hans Christian Oersted lo demostró con una brújula."
          },
          {
            pregunta: "La inducción electromagnética fue descubierta por:",
            opciones: ["Oersted", "Faraday", "Ohm", "Coulomb"],
            correcta: "Faraday",
            explicacion: "Michael Faraday descubrió que un campo magnético variable induce corriente."
          },
          {
            pregunta: "Un electroimán funciona con:",
            opciones: ["Un imán permanente", "Corriente eléctrica", "Agua", "Calor"],
            correcta: "Corriente eléctrica",
            explicacion: "Al pasar corriente por una bobina, se genera un campo magnético."
          },
          {
            pregunta: "Los transformadores eléctricos se basan en:",
            opciones: ["Ley de Ohm", "Inducción electromagnética", "Ley de Coulomb", "Ley de Pascal"],
            correcta: "Inducción electromagnética",
            explicacion: "Cambian el voltaje usando inducción entre bobinas."
          },
          {
            pregunta: "¿Qué partícula genera el campo magnético en un imán?",
            opciones: ["Protones", "Neutrones", "Electrones en movimiento", "Fotones"],
            correcta: "Electrones en movimiento",
            explicacion: "El movimiento de cargas (electrones) genera magnetismo."
          }
        ]
      },
      {
        id: "fx5-4",
        proposito: "Propósito formativo 8",
        titulo: "Física Moderna y Contemporánea",
        icono: "⚛️",
        imagen: "linear-gradient(135deg, #312e81, #db2777)",
        concepto: `
          <h4>La física después de Newton</h4>
          <p>A partir del siglo XX, la física descubrió que a velocidades muy altas, a escalas muy pequeñas o en todo el universo, las reglas cambian. Estos son algunos temas para investigar y divulgar:</p>
          <table class="tabla-estudio">
            <tr><th>Tema</th><th>Idea principal</th><th>¿Dónde lo vemos?</th></tr>
            <tr><td><strong>Relatividad especial</strong> (Einstein, 1905)</td><td>La velocidad de la luz es la misma para todos; el tiempo pasa más lento para quien se mueve muy rápido. E = mc²: la masa es una forma de energía.</td><td>Aceleradores de partículas</td></tr>
            <tr><td><strong>Relatividad general</strong> (Einstein, 1915)</td><td>La gravedad es la curvatura del espacio-tiempo causada por la masa.</td><td>El GPS de tu celular corrige sus relojes por efectos relativistas</td></tr>
            <tr><td><strong>Mecánica cuántica</strong></td><td>A escala atómica la energía viene en paquetes (cuantos) y las partículas se comportan también como ondas.</td><td>Láser, transistores, celulares, computadoras</td></tr>
            <tr><td><strong>Física de partículas y nuclear</strong></td><td>Los protones y neutrones están formados por quarks; en 2012 se confirmó el bosón de Higgs en el CERN. La fisión divide núcleos; la fusión los une.</td><td>La central nuclear de Laguna Verde (Veracruz) usa fisión; el Sol brilla por fusión</td></tr>
            <tr><td><strong>Condensado de Bose-Einstein</strong></td><td>Estado de la materia que se forma cerca del cero absoluto: los átomos se comportan como uno solo. Se obtuvo por primera vez en 1995.</td><td>Laboratorios de física de bajas temperaturas</td></tr>
            <tr><td><strong>Computación y teleportación cuántica</strong></td><td>Los cúbits pueden estar en varios estados a la vez. La teleportación cuántica transmite <em>información</em>, no objetos.</td><td>Computadoras cuánticas experimentales</td></tr>
            <tr><td><strong>Cosmología moderna</strong></td><td>El universo surgió hace unos 13 800 millones de años (Big Bang) y se sigue expandiendo.</td><td>Telescopios espaciales como el James Webb</td></tr>
            <tr><td><strong>Superconductores</strong></td><td>Materiales que, muy fríos, conducen la electricidad sin ninguna resistencia.</td><td>Resonancia magnética en hospitales, trenes de levitación magnética</td></tr>
          </table>

          <h4>¿Cómo hacer divulgación científica?</h4>
          <ol>
            <li><strong>Elige un tema</strong> que te despierte curiosidad.</li>
            <li><strong>Investiga en fuentes confiables:</strong> universidades, agencias espaciales, revistas de divulgación como <em>¿Cómo ves?</em> de la UNAM.</li>
            <li><strong>Traduce a palabras sencillas:</strong> usa comparaciones con la vida diaria.</li>
            <li><strong>Elige un formato:</strong> infografía, pódcast, video corto, cartel o charla.</li>
            <li><strong>Cita tus fuentes</strong> y revisa que la información sea correcta.</li>
          </ol>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Proyecto de divulgación:</strong> En equipo, elijan uno de los temas de la tabla y preparen una cápsula de 3 minutos (pódcast o video) explicándolo con ejemplos de la vida en Chiapas. Por ejemplo: «¿Cómo sabe el GPS de un colectivo dónde está? La relatividad de Einstein en tu celular». Organicen una noche de observación del cielo: lejos de las ciudades, en Chiapas se puede ver la Vía Láctea a simple vista.
          </div>
        `,
        actividades: [
          { pregunta: "La ecuación E = mc² significa que:", opciones: ["La masa es una forma de energía", "La energía no existe", "La luz no tiene velocidad", "La masa siempre aumenta"], correcta: "La masa es una forma de energía", explicacion: "Una pequeña cantidad de masa equivale a muchísima energía." },
          { pregunta: "Según la relatividad general, la gravedad es:", opciones: ["Una fuerza magnética", "La curvatura del espacio-tiempo", "Una onda de sonido", "Un tipo de luz"], correcta: "La curvatura del espacio-tiempo", explicacion: "Einstein la propuso en 1915." },
          { pregunta: "El Sol produce su energía mediante:", opciones: ["Fisión nuclear", "Fusión nuclear", "Combustión de carbón", "Electricidad"], correcta: "Fusión nuclear", explicacion: "Une núcleos de hidrógeno para formar helio." },
          { pregunta: "Un superconductor es un material que:", opciones: ["Conduce la electricidad sin resistencia cuando está muy frío", "No conduce nada", "Produce luz", "Es un imán natural"], correcta: "Conduce la electricidad sin resistencia cuando está muy frío", explicacion: "Se usa en los equipos de resonancia magnética." },
          { pregunta: "Según la cosmología moderna, el universo tiene una edad aproximada de:", opciones: ["6000 años", "13 800 millones de años", "1 millón de años", "Es infinito y no cambia"], correcta: "13 800 millones de años", explicacion: "Es la edad estimada desde el Big Bang." }
        ]
      }
    ]
  }
};
