/* ==========================================================
   DATA - Ciencias Naturales, Experimentales y Tecnología
   COBACH Chiapas · MCCEMS, Modelo Educativo 2025
   Cada tema indica en "proposito" el propósito formativo que cubre.
   - { ref: "fisica:id" } o { ref: "quimica:id" }: tema compartido con
     el módulo de Física o Química (mismo contenido, sin duplicarlo).
   - estudio: "modulo:id": material de "Estudia más" de otro módulo.
   Los temas cn*, tc* son los originales; los cnx* son nuevos.
========================================================== */

const CIENCIAS = {
  1: {
    titulo: "Invitación a la ciencia. Naturaleza de la materia",
    subtitulo: "Ciencias Naturales, Experimentales y Tecnología I",
    semestre: "Primer Semestre",
    clase: "s1",
    icono: "🔬",
    descripcion: "La ciencia como actividad creativa y colectiva, la materia, el átomo, los enlaces y la electricidad de la materia.",
    contexto: "En Chiapas aprendes ciencia desde tu realidad: la milpa, el café, los ríos y las montañas. Los mayas ya observaban el cielo y la naturaleza con método; hoy tú continúas esa tradición.",
    temas: [
            {
        id: "cn1-1",
        proposito: "Propósito formativo 1",
        estudio: "ciencias:cn1-1",
        titulo: "La Ciencia y su Método",
        icono: "🧠",
        imagen: "linear-gradient(135deg, #0d9488, #14b8a6)",
        contenido: `
          <p>La <strong>ciencia</strong> es el conjunto de conocimientos sistemáticos obtenidos mediante observación y experimentación.</p>
          <h4>Características del conocimiento científico</h4>
          <ul>
            <li><strong>Objetivo:</strong> se basa en hechos verificables</li>
            <li><strong>Sistemático:</strong> sigue un método ordenado</li>
            <li><strong>Falible:</strong> sus teorías pueden corregirse</li>
            <li><strong>Comunicable:</strong> se difunde y comparte</li>
          </ul>
          <h4>Pasos del método científico</h4>
          <ol>
            <li>Observación</li>
            <li>Planteamiento del problema</li>
            <li>Hipótesis</li>
            <li>Experimentación</li>
            <li>Análisis de datos</li>
            <li>Conclusión</li>
            <li>Comunicación</li>
          </ol>
          <div class="ejemplo">
            <strong>Contexto Chiapas:</strong> Los antiguos mayas observaron los ciclos de lluvia en la Selva Lacandona y desarrollaron calendarios precisos.
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es el primer paso del método científico?", opciones: ["Hipótesis", "Observación", "Experimentación", "Conclusión"], correcta: "Observación", explicacion: "Todo inicia observando un fenómeno." },
          { pregunta: "Una posible explicación a un fenómeno se llama:", opciones: ["Ley", "Teoría", "Hipótesis", "Conclusión"], correcta: "Hipótesis", explicacion: "Es una suposición que debe probarse." },
          { pregunta: "Si un experimento no apoya tu hipótesis, ¿qué debes hacer?", opciones: ["Ignorarlo", "Rechazarla o modificarla", "Inventar datos", "Rendirte"], correcta: "Rechazarla o modificarla", explicacion: "La ciencia se basa en la evidencia." },
          { pregunta: "¿Qué característica hace que la ciencia pueda corregirse?", opciones: ["Objetiva", "Falible", "Comunicable", "Sistemática"], correcta: "Falible", explicacion: "Las teorías pueden cambiar con nuevas pruebas." },
          { pregunta: "¿Los antiguos mayas usaron el método científico para crear calendarios?", opciones: ["Verdadero", "Falso"], correcta: "Verdadero", explicacion: "Observaron los astros y ciclos para predecir lluvias." }
        ]
      },
            {
        id: "cn1-5",
        proposito: "Propósito formativo 1",
        estudio: "quimica:q1-3",
        titulo: "Medición y Sistema Internacional",
        icono: "📏",
        imagen: "linear-gradient(135deg, #f43f5e, #e11d48)",
        contenido: `
          <h4>Magnitudes fundamentales (SI)</h4>
          <ul>
            <li>Longitud → metro (m)</li>
            <li>Masa → kilogramo (kg)</li>
            <li>Tiempo → segundo (s)</li>
            <li>Temperatura → kelvin (K)</li>
            <li>Cantidad de sustancia → mol (mol)</li>
          </ul>
          <h4>Instrumentos de medición</h4>
          <ul>
            <li>Balanza, probeta, termómetro, vernier</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto:</strong> Temperatura en Tuxtla Gutiérrez (35°C) vs San Cristóbal de las Casas (18°C).
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es la unidad de masa en el SI?", opciones: ["Gramo", "Libra", "Kilogramo", "Mol"], correcta: "Kilogramo", explicacion: "Aunque usemos gramos, el SI usa kg." },
          { pregunta: "¿Qué instrumento mide la temperatura?", opciones: ["Balanza", "Probeta", "Termómetro", "Vernier"], correcta: "Termómetro", explicacion: "Mide el grado de calor." },
          { pregunta: "La longitud se mide en:", opciones: ["Metros", "Litros", "Segundos", "Kelvin"], correcta: "Metros", explicacion: "Es su unidad fundamental." },
          { pregunta: "¿Qué instrumento usarías para medir un volumen exacto de líquido?", opciones: ["Regla", "Probeta", "Balanza", "Cronómetro"], correcta: "Probeta", explicacion: "Tiene marcas de volumen." },
          { pregunta: "La cantidad de sustancia se mide en:", opciones: ["Moles", "Newtons", "Joules", "Pascales"], correcta: "Moles", explicacion: "El mol es la unidad del SI." }
        ]
      },
      {
        id: "cnx1-1",
        proposito: "Propósito formativo 2",
        titulo: "Física, Química, Biología y Tecnología",
        icono: "🧩",
        imagen: "linear-gradient(135deg, #0d9488, #6366f1)",
        contenido: `
          <h4>Un mismo fenómeno, varias ciencias</h4>
          <p>La naturaleza no está dividida en materias: los fenómenos están <strong>interrelacionados</strong>. Las ciencias los estudian en conjunto o se especializan en una parte.</p>
          <table class="tabla-estudio">
            <tr><th>Ciencia</th><th>¿Qué estudia?</th><th>Ejemplo con la milpa</th></tr>
            <tr><td><strong>Física</strong></td><td>La materia, la energía, las fuerzas y el movimiento</td><td>La energía del sol que llega a las plantas; el agua que corre por el surco</td></tr>
            <tr><td><strong>Química</strong></td><td>La composición de la materia y sus transformaciones</td><td>Los nutrientes del suelo; la nixtamalización del maíz con cal</td></tr>
            <tr><td><strong>Biología</strong></td><td>Los seres vivos y sus procesos</td><td>El crecimiento del maíz, el frijol y la calabaza; los insectos que los polinizan</td></tr>
          </table>
          <p><strong>En común:</strong> todas usan la observación, la experimentación y la medición. <strong>Diferencia:</strong> su objeto de estudio.</p>

          <h4>Ciencias derivadas e interdisciplinarias</h4>
          <ul>
            <li><strong>Ecología:</strong> relaciones de los seres vivos con su ambiente (Biología + Química + Física).</li>
            <li><strong>Ciencias de la Tierra:</strong> geología, meteorología, oceanografía y sismología.</li>
            <li><strong>Bioquímica:</strong> la química de los seres vivos.</li>
            <li><strong>Biofísica:</strong> la física de los procesos biológicos (cómo se mueve un músculo, cómo vemos).</li>
            <li><strong>Astronomía:</strong> los cuerpos celestes y el universo.</li>
            <li><strong>Ciencias ambientales:</strong> los problemas del ambiente y sus soluciones.</li>
          </ul>

          <h4>Ciencia y tecnología</h4>
          <p>La <strong>tecnología</strong> es la aplicación del conocimiento para crear herramientas, procesos y productos que resuelvan problemas. La ciencia busca <em>entender</em>; la tecnología busca <em>hacer</em>. Se alimentan mutuamente: el microscopio (tecnología) permitió descubrir la célula (ciencia), y entender la electricidad (ciencia) permitió inventar el foco (tecnología).</p>
          <div class="ejemplo">
            <strong>Ciencia mexicana:</strong> Guillermo González Camarena patentó en 1940 un sistema de televisión a color; Luis Ernesto Miramontes sintetizó en 1951 la noretisterona, base de la primera píldora anticonceptiva; Mario Molina ganó el Nobel de Química en 1995.
          </div>
        `,
        actividades: [
          { pregunta: "La ciencia que estudia la composición de la materia y sus transformaciones es la:", opciones: ["Física", "Química", "Biología", "Astronomía"], correcta: "Química", explicacion: "Por ejemplo, qué le pasa al maíz cuando se nixtamaliza." },
          { pregunta: "La ecología es una ciencia interdisciplinaria porque:", opciones: ["Solo estudia plantas", "Combina conocimientos de Biología, Química y Física", "No usa el método científico", "Es una rama de las matemáticas"], correcta: "Combina conocimientos de Biología, Química y Física", explicacion: "Estudia las relaciones de los seres vivos con su ambiente." },
          { pregunta: "La tecnología se diferencia de la ciencia porque:", opciones: ["Busca entender la naturaleza", "Aplica el conocimiento para resolver problemas", "No tiene relación con la ciencia", "Solo usa computadoras"], correcta: "Aplica el conocimiento para resolver problemas", explicacion: "La ciencia busca entender; la tecnología, hacer." },
          { pregunta: "¿Qué tienen en común la Física, la Química y la Biología?", opciones: ["Estudian lo mismo", "Usan la observación, la experimentación y la medición", "No usan matemáticas", "Solo estudian a los seres vivos"], correcta: "Usan la observación, la experimentación y la medición", explicacion: "Lo que cambia es su objeto de estudio." },
          { pregunta: "¿Quién patentó en 1940 un sistema de televisión a color?", opciones: ["Mario Molina", "Guillermo González Camarena", "Luis E. Miramontes", "Isaac Newton"], correcta: "Guillermo González Camarena", explicacion: "Fue un inventor mexicano." }
        ]
      },
            {
        id: "cn1-2",
        proposito: "Propósito formativo 3",
        estudio: "ciencias:cn1-2",
        titulo: "La Materia y sus Propiedades",
        icono: "🧱",
        imagen: "linear-gradient(135deg, #f59e0b, #d97706)",
        contenido: `
          <p>La <strong>materia</strong> es todo lo que tiene masa y ocupa un volumen.</p>
          <h4>Propiedades generales</h4>
          <ul>
            <li>Masa, volumen, inercia, impenetrabilidad</li>
          </ul>
          <h4>Propiedades específicas</h4>
          <ul>
            <li><strong>Físicas:</strong> densidad, punto de fusión, color</li>
            <li><strong>Químicas:</strong> reactividad, combustibilidad</li>
          </ul>
          <div class="formula">d = m / V   (densidad = masa / volumen)</div>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> La densidad del agua es 1 g/cm³. La miel es más densa (1.4 g/cm³), por eso se hunde.
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué propiedad es específica de la materia?", opciones: ["Masa", "Volumen", "Densidad", "Inercia"], correcta: "Densidad", explicacion: "La densidad depende del tipo de material." },
          { pregunta: "La fórmula de la densidad es:", opciones: ["d = m + V", "d = m × V", "d = m / V", "d = V / m"], correcta: "d = m / V", explicacion: "Masa entre volumen." },
          { pregunta: "¿Cuál es una propiedad química?", opciones: ["Color", "Densidad", "Combustibilidad", "Punto de fusión"], correcta: "Combustibilidad", explicacion: "Implica un cambio en la naturaleza de la materia." },
          { pregunta: "Si un objeto tiene mucha masa en poco volumen, su densidad es:", opciones: ["Baja", "Alta", "Neutra", "Cero"], correcta: "Alta", explicacion: "Hay mucha materia en poco espacio." },
          { pregunta: "El volumen es:", opciones: ["La cantidad de materia", "El espacio que ocupa un cuerpo", "El peso", "La temperatura"], correcta: "El espacio que ocupa un cuerpo", explicacion: "Es una medida tridimensional." }
        ]
      },
            {
        id: "cn1-4",
        proposito: "Propósito formativo 4",
        estudio: "ciencias:cn1-4",
        titulo: "Clasificación de la Materia",
        icono: "🧪",
        imagen: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        contenido: `
          <h4>Sustancias puras</h4>
          <ul>
            <li><strong>Elementos:</strong> Fe, O, H, C, Au</li>
            <li><strong>Compuestos:</strong> H₂O, NaCl, CO₂</li>
          </ul>
          <h4>Mezclas</h4>
          <ul>
            <li><strong>Homogéneas:</strong> agua salada, aire, café filtrado</li>
            <li><strong>Heterogéneas:</strong> granito, ensalada, agua con aceite</li>
          </ul>
          <h4>Métodos de separación</h4>
          <ul>
            <li>Filtración, destilación, decantación, tamizado, evaporación</li>
          </ul>
          <div class="ejemplo">
            <strong>Práctica:</strong> Separar sal de agua mediante evaporación solar. ¡Útil para comunidades costeras!
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es una mezcla homogénea?", opciones: ["Agua con aceite", "Granito", "Agua salada", "Ensalada"], correcta: "Agua salada", explicacion: "Sus componentes no se distinguen a simple vista." },
          { pregunta: "El oro (Au) es un ejemplo de:", opciones: ["Compuesto", "Mezcla", "Elemento", "Solución"], correcta: "Elemento", explicacion: "No se puede descomponer en otras sustancias." },
          { pregunta: "¿Qué método usarías para separar agua y arena?", opciones: ["Destilación", "Filtración", "Evaporación", "Decantación"], correcta: "Filtración", explicacion: "La arena queda atrapada en el filtro." },
          { pregunta: "El agua (H₂O) es un ejemplo de:", opciones: ["Elemento", "Compuesto", "Mezcla heterogénea", "Átomo"], correcta: "Compuesto", explicacion: "Está formada por dos elementos en proporción fija." },
          { pregunta: "El aire que respiramos es una mezcla:", opciones: ["Heterogénea", "Homogénea", "Pura", "Compuesta"], correcta: "Homogénea", explicacion: "Es una mezcla de gases que no se distinguen." }
        ]
      },
            {
        id: "cn4-1",
        proposito: "Propósito formativo 5",
        estudio: "quimica:q1-6",
        titulo: "El Átomo y sus Partículas",
        icono: "⚛️",
        imagen: "linear-gradient(135deg, #0ea5e9, #0284c7)",
        contenido: `
          <h4>Partículas subatómicas</h4>
          <ul>
            <li><strong>Protón:</strong> carga +, núcleo</li>
            <li><strong>Neutrón:</strong> sin carga, núcleo</li>
            <li><strong>Electrón:</strong> carga −, órbitas</li>
          </ul>
          <div class="formula">
Z = número atómico (protones)<br>
A = número de masa (protones + neutrones)<br>
Neutrones = A − Z
          </div>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> El carbono (C) tiene Z=6 y A=12. Neutrones = 12 - 6 = 6.
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué partícula tiene carga positiva?", opciones: ["Electrón", "Neutrón", "Protón", "Fotón"], correcta: "Protón", explicacion: "Está en el núcleo." },
          { pregunta: "Si Z=11 y A=23, ¿cuántos neutrones hay?", opciones: ["11", "12", "23", "34"], correcta: "12", explicacion: "Neutrones = A - Z = 12." },
          { pregunta: "Los electrones se encuentran en:", opciones: ["El núcleo", "Los orbitales", "Los neutrones", "Los protones"], correcta: "Los orbitales", explicacion: "Giran alrededor del núcleo." },
          { pregunta: "El número atómico (Z) es igual al número de:", opciones: ["Neutrones", "Protones", "Electrones de valencia", "Isótopos"], correcta: "Protones", explicacion: "Define el elemento." },
          { pregunta: "¿Qué partícula no tiene carga?", opciones: ["Protón", "Electrón", "Neutrón", "Ion"], correcta: "Neutrón", explicacion: "Es neutra." }
        ]
      },
            {
        id: "cn4-2",
        proposito: "Propósito formativo 4 y 5",
        estudio: "quimica:q1-8",
        titulo: "Tabla Periódica",
        icono: "📊",
        imagen: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        contenido: `
          <p>118 elementos ordenados por número atómico.</p>
          <h4>Grupos importantes</h4>
          <ul>
            <li>1: alcalinos | 2: alcalinotérreos</li>
            <li>17: halógenos | 18: gases nobles</li>
          </ul>
          <h4>Propiedades periódicas</h4>
          <ul>
            <li>Radio atómico, electronegatividad, energía de ionización</li>
          </ul>
        `,
        actividades: [
          { pregunta: "¿Cuántos elementos tiene la tabla periódica actual?", opciones: ["92", "100", "118", "150"], correcta: "118", explicacion: "Desde el Hidrógeno hasta el Oganesón." },
          { pregunta: "Los gases nobles están en el grupo:", opciones: ["1", "2", "17", "18"], correcta: "18", explicacion: "Son muy estables." },
          { pregunta: "Los metales alcalinos están en el grupo:", opciones: ["1", "2", "17", "18"], correcta: "1", explicacion: "Como el Sodio (Na)." },
          { pregunta: "El radio atómico aumenta de:", opciones: ["Arriba hacia abajo", "Abajo hacia arriba", "Izquierda a derecha", "No cambia"], correcta: "Arriba hacia abajo", explicacion: "Hay más niveles de energía." },
          { pregunta: "Los halógenos están en el grupo:", opciones: ["1", "2", "17", "18"], correcta: "17", explicacion: "Como el Cloro (Cl)." }
        ]
      },
            {
        id: "cn4-3",
        proposito: "Propósito formativo 6",
        estudio: "quimica:q1-10",
        titulo: "Enlaces Químicos",
        icono: "🔗",
        imagen: "linear-gradient(135deg, #14b8a6, #0d9488)",
        contenido: `
          <ul>
            <li><strong>Iónico:</strong> metal + no metal. NaCl</li>
            <li><strong>Covalente:</strong> no metal + no metal. H₂O</li>
            <li><strong>Metálico:</strong> metal + metal.</li>
          </ul>
          <div class="ejemplo">
            <strong>Regla del octeto:</strong> los átomos buscan 8 e⁻ en su última capa.
          </div>
        `,
        actividades: [
          { pregunta: "El enlace entre un metal y un no metal es:", opciones: ["Covalente", "Iónico", "Metálico", "Puente H"], correcta: "Iónico", explicacion: "Hay transferencia de electrones." },
          { pregunta: "El enlace del agua (H₂O) es:", opciones: ["Iónico", "Covalente", "Metálico", "Nuclear"], correcta: "Covalente", explicacion: "Comparten electrones." },
          { pregunta: "La regla del octeto busca tener:", opciones: ["2 electrones", "8 electrones", "18 neutrones", "0 electrones"], correcta: "8 electrones", explicacion: "Como los gases nobles." },
          { pregunta: "El enlace metálico forma:", opciones: ["Cristales", "Un mar de electrones", "Moléculas", "Gases"], correcta: "Un mar de electrones", explicacion: "Permite la conductividad." },
          { pregunta: "¿Qué enlace hay en la sal de mesa (NaCl)?", opciones: ["Covalente", "Iónico", "Metálico", "Dativo"], correcta: "Iónico", explicacion: "Sodio cede electrón al cloro." }
        ]
      },
            {
        id: "cn1-3",
        proposito: "Propósito formativo 7",
        estudio: "quimica:q1-4",
        titulo: "Estados de Agregación de la Materia",
        icono: "💧",
        imagen: "linear-gradient(135deg, #06b6d4, #0891b2)",
        contenido: `
          <h4>Los tres estados clásicos</h4>
          <ul>
            <li><strong>Sólido:</strong> forma y volumen definidos. Fuerzas de atracción fuertes.</li>
            <li><strong>Líquido:</strong> volumen definido, forma variable.</li>
            <li><strong>Gaseoso:</strong> forma y volumen variables. Fuerzas débiles.</li>
          </ul>
          <h4>Cambios de estado</h4>
          <ul>
            <li>Fusión: sólido → líquido</li>
            <li>Evaporación: líquido → gas</li>
            <li>Sublimación: sólido → gas</li>
            <li>Solidificación, condensación, deposición (inversos)</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto:</strong> El ciclo del agua en Chiapas: evaporación en la costa, condensación en las montañas, precipitación en la selva.
          </div>
        `,
        actividades: [
          { pregunta: "El paso de sólido a líquido se llama:", opciones: ["Evaporación", "Fusión", "Condensación", "Sublimación"], correcta: "Fusión", explicacion: "Ejemplo: el hielo derritiéndose." },
          { pregunta: "¿En qué estado las fuerzas de atracción son más débiles?", opciones: ["Sólido", "Líquido", "Gaseoso", "Plasma"], correcta: "Gaseoso", explicacion: "Las partículas están muy separadas." },
          { pregunta: "El paso directo de sólido a gas se llama:", opciones: ["Sublimación", "Fusión", "Solidificación", "Evaporación"], correcta: "Sublimación", explicacion: "Ejemplo: el hielo seco." },
          { pregunta: "Cuando el vapor de agua se convierte en gotas, ocurre la:", opciones: ["Evaporación", "Condensación", "Fusión", "Sublimación"], correcta: "Condensación", explicacion: "El gas pierde calor y se vuelve líquido." },
          { pregunta: "¿Qué estado tiene volumen definido pero forma variable?", opciones: ["Sólido", "Líquido", "Gaseoso", "Ninguno"], correcta: "Líquido", explicacion: "Los líquidos toman la forma del recipiente." }
        ]
      },
      {
        id: "cnx1-2",
        proposito: "Propósito formativo 8",
        titulo: "La Electricidad de la Materia y sus Aplicaciones",
        icono: "⚡",
        imagen: "linear-gradient(135deg, #eab308, #2563eb)",
        contenido: `
          <h4>La materia tiene carga eléctrica</h4>
          <p>Todos los átomos tienen <strong>protones (+)</strong> en el núcleo y <strong>electrones (−)</strong> alrededor. Normalmente hay la misma cantidad y el objeto es neutro. Cuando un cuerpo gana o pierde electrones, queda <strong>cargado</strong>: las cargas iguales se repelen y las opuestas se atraen.</p>

          <h4>Formas de electrizar un cuerpo</h4>
          <ul>
            <li><strong>Frotamiento:</strong> frota un globo en tu cabello; el globo gana electrones y luego atrae papelitos o levanta tu cabello.</li>
            <li><strong>Contacto:</strong> un cuerpo cargado toca a uno neutro y le pasa parte de su carga.</li>
            <li><strong>Inducción:</strong> un cuerpo cargado se acerca a otro sin tocarlo y reacomoda sus cargas.</li>
          </ul>

          <h4>Fenómenos naturales eléctricos</h4>
          <ul>
            <li><strong>Rayos:</strong> en las nubes de tormenta el roce entre gotas y cristales de hielo separa cargas; cuando la diferencia es enorme, se descarga un rayo.</li>
            <li><strong>Las «chispas» al quitarte un suéter</strong> en los días secos de los Altos.</li>
            <li><strong>El sistema nervioso:</strong> tus neuronas se comunican con pequeñas señales eléctricas.</li>
          </ul>

          <h4>Conductores, aislantes y semiconductores</h4>
          <table class="tabla-estudio">
            <tr><th>Tipo</th><th>Comportamiento</th><th>Ejemplos</th></tr>
            <tr><td>Conductores</td><td>Sus electrones se mueven con facilidad</td><td>Cobre, aluminio, agua con sales</td></tr>
            <tr><td>Aislantes</td><td>No dejan pasar la corriente</td><td>Plástico, vidrio, hule, madera seca</td></tr>
            <tr><td>Semiconductores</td><td>Conducen solo en ciertas condiciones</td><td>Silicio (se obtiene de la arena): chips, celulares, paneles solares</td></tr>
          </table>

          <h4>Aplicaciones tecnológicas de la materia</h4>
          <p>Pilas y baterías (energía química → eléctrica), paneles solares (luz → electricidad con silicio), focos LED, pantallas, cables de cobre, imanes de las bocinas y los chips de tu celular. Todo se basa en entender cómo se comportan los átomos y sus electrones.</p>
          <div class="ejemplo">
            <strong>Experimento:</strong> clava un clavo galvanizado y una moneda de cobre en un limón. Con varios limones conectados en serie puedes encender un LED pequeño: estás convirtiendo energía química en eléctrica.
          </div>
        `,
        actividades: [
          { pregunta: "Las cargas eléctricas del mismo signo:", opciones: ["Se atraen", "Se repelen", "No interactúan", "Se destruyen"], correcta: "Se repelen", explicacion: "Las cargas opuestas se atraen." },
          { pregunta: "Frotar un globo en el cabello lo electriza por:", opciones: ["Inducción", "Frotamiento", "Contacto", "Calor"], correcta: "Frotamiento", explicacion: "El roce transfiere electrones." },
          { pregunta: "Los chips de los celulares están hechos de un:", opciones: ["Conductor", "Aislante", "Semiconductor (silicio)", "Imán"], correcta: "Semiconductor (silicio)", explicacion: "El silicio se obtiene de la arena." },
          { pregunta: "¿Qué partícula del átomo tiene carga negativa?", opciones: ["Protón", "Neutrón", "Electrón", "Núcleo"], correcta: "Electrón", explicacion: "Los electrones están alrededor del núcleo." },
          { pregunta: "Una pila transforma energía:", opciones: ["Química en eléctrica", "Eléctrica en nuclear", "Sonora en luminosa", "Térmica en química"], correcta: "Química en eléctrica", explicacion: "Las reacciones químicas dentro de la pila mueven electrones." }
        ]
      }
    ]
  },

  2: {
    titulo: "El poder de la energía",
    subtitulo: "Ciencias Naturales, Experimentales y Tecnología II",
    semestre: "Segundo Semestre",
    clase: "s2",
    icono: "⚡",
    descripcion: "La energía, su conservación, el calor, la temperatura y las leyes de la termodinámica.",
    contexto: "Las presas del Grijalva, el sol que seca el café y el fogón de la cocina: en Chiapas la energía está en todas partes. Los temas con 📎 son compartidos con el módulo de Física.",
    temas: [
            {
        id: "cn2-1",
        proposito: "Propósito formativo 1",
        estudio: "fisica:fx2-1",
        titulo: "¿Qué es la Energía?",
        icono: "🔋",
        imagen: "linear-gradient(135deg, #eab308, #f59e0b)",
        contenido: `
          <p>La <strong>energía</strong> es la capacidad de realizar un trabajo o producir un cambio.</p>
          <h4>Características</h4>
          <ul>
            <li>Se <strong>transforma</strong> (no se crea ni destruye).</li>
            <li>Se <strong>transfiere</strong> entre cuerpos.</li>
            <li>Se <strong>mide</strong> en joules (J).</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto:</strong> La energía solar puede transformarse en eléctrica mediante paneles en comunidades rurales.
          </div>
        `,
        actividades: [
          { pregunta: "La energía se mide en:", opciones: ["Newtons", "Joules", "Watts", "Pascales"], correcta: "Joules", explicacion: "El Joule (J) es la unidad de energía." },
          { pregunta: "¿Qué ocurre con la energía en una transformación?", opciones: ["Se crea", "Se destruye", "Se transforma", "Desaparece"], correcta: "Se transforma", explicacion: "Pasa de una forma a otra." },
          { pregunta: "¿Qué panel transforma la energía solar en eléctrica?", opciones: ["Panel de yeso", "Panel solar", "Panel de madera", "Panel de vidrio"], correcta: "Panel solar", explicacion: "Usa celdas fotovoltaicas." },
          { pregunta: "La energía es la capacidad de:", opciones: ["Dormir", "Realizar un trabajo", "Comer", "Correr"], correcta: "Realizar un trabajo", explicacion: "Produce cambios o movimiento." },
          { pregunta: "¿La energía se puede transferir de un cuerpo a otro?", opciones: ["Verdadero", "Falso"], correcta: "Verdadero", explicacion: "Como cuando el calor pasa de una estufa a una olla." }
        ]
      },
            {
        id: "cn2-2",
        proposito: "Propósito formativo 1",
        titulo: "Formas de Energía",
        icono: "💡",
        imagen: "linear-gradient(135deg, #f97316, #ea580c)",
        contenido: `
          <h4>Tipos principales</h4>
          <ul>
            <li><strong>Cinética:</strong> Ec = ½mv²</li>
            <li><strong>Potencial:</strong> Ep = mgh</li>
            <li><strong>Térmica, Química, Eléctrica, Nuclear, Luminosa</strong></li>
          </ul>
          <div class="ejemplo">
            <strong>Ejemplo local:</strong> En las cascadas de Chiapas, el agua en altura tiene energía potencial que se convierte en cinética al caer.
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué tipo de energía tiene un cuerpo en movimiento?", opciones: ["Potencial", "Cinética", "Nuclear", "Química"], correcta: "Cinética", explicacion: "Depende de la velocidad y la masa." },
          { pregunta: "La energía potencial gravitatoria depende de:", opciones: ["La velocidad", "La altura", "La temperatura", "El color"], correcta: "La altura", explicacion: "Ep = mgh (masa x gravedad x altura)." },
          { pregunta: "La energía que proviene del núcleo del átomo es:", opciones: ["Eléctrica", "Nuclear", "Térmica", "Química"], correcta: "Nuclear", explicacion: "Se libera en reacciones nucleares." },
          { pregunta: "La energía almacenada en los alimentos es:", opciones: ["Cinética", "Química", "Potencial", "Luminosa"], correcta: "Química", explicacion: "Se libera al digerirlos." },
          { pregunta: "La energía luminosa viaja en forma de:", opciones: ["Ondas", "Materia", "Sonido", "Calor"], correcta: "Ondas", explicacion: "Es radiación electromagnética." }
        ]
      },
            {
        id: "cn2-3",
        proposito: "Propósito formativo 1",
        estudio: "ciencias:cn2-3",
        titulo: "Ley de Conservación de la Energía",
        icono: "♻️",
        imagen: "linear-gradient(135deg, #10b981, #059669)",
        contenido: `
          <p>La energía <strong>no se crea ni se destruye, solo se transforma</strong>.</p>
          <div class="formula">E<sub>total inicial</sub> = E<sub>total final</sub></div>
          <div class="ejemplo">
            Una montaña rusa convierte energía potencial en cinética. Lo mismo ocurre con el agua en una presa.
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué dice la Ley de Conservación de la Energía?", opciones: ["Se crea", "Se destruye", "Se transforma", "Se pierde"], correcta: "Se transforma", explicacion: "La cantidad total de energía se mantiene." },
          { pregunta: "En una montaña rusa, arriba del todo hay energía:", opciones: ["Cinética", "Potencial", "Térmica", "Eléctrica"], correcta: "Potencial", explicacion: "Por la altura." },
          { pregunta: "Al caer, la energía potencial se convierte en:", opciones: ["Química", "Cinética", "Nuclear", "Luminosa"], correcta: "Cinética", explicacion: "Aumenta la velocidad." },
          { pregunta: "La energía total en un sistema cerrado:", opciones: ["Aumenta", "Disminuye", "Permanece constante", "Desaparece"], correcta: "Permanece constante", explicacion: "Solo cambia de forma." },
          { pregunta: "¿Es posible crear energía de la nada?", opciones: ["Sí", "No"], correcta: "No", explicacion: "Eso violaría la ley de conservación." }
        ]
      },
            {
        id: "cn2-5",
        proposito: "Propósito formativo 2 y 5",
        estudio: "fisica:f1-5",
        titulo: "Trabajo y Potencia",
        icono: "🏋️",
        imagen: "linear-gradient(135deg, #ec4899, #db2777)",
        contenido: `
          <div class="formula">
Trabajo: W = F · d · cos(θ)  [Joule]<br>
Potencia: P = W / t  [Watt]
          </div>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> Subir carga de café de 50 kg a 10 m:<br>
            W = 50 × 9.8 × 10 = 4,900 J
          </div>
        `,
        actividades: [
          { pregunta: "El trabajo en física requiere:", opciones: ["Solo fuerza", "Solo tiempo", "Fuerza y desplazamiento", "Masa y velocidad"], correcta: "Fuerza y desplazamiento", explicacion: "W = F · d." },
          { pregunta: "Si empujas una pared y no se mueve, el trabajo es:", opciones: ["Mucho", "Poco", "Cero", "Negativo"], correcta: "Cero", explicacion: "No hay desplazamiento (d=0)." },
          { pregunta: "La potencia se mide en:", opciones: ["Joules", "Watts", "Newtons", "Pascales"], correcta: "Watts", explicacion: "Watt = Joule/segundo." },
          { pregunta: "¿Qué máquina realiza más trabajo en menos tiempo?", opciones: ["Una lenta", "Una con más potencia", "Una con menos potencia", "Una sin energía"], correcta: "Una con más potencia", explicacion: "Potencia = trabajo / tiempo." },
          { pregunta: "La fórmula del trabajo es:", opciones: ["W = m·a", "W = F·d", "W = V·I", "W = F/t"], correcta: "W = F·d", explicacion: "Fuerza por distancia." }
        ]
      },
      { ref: "fisica:f2-2", proposito: "Propósito formativo 3" },
      { ref: "fisica:fx2-2", proposito: "Propósito formativo 4" },
      { ref: "fisica:fx2-3", proposito: "Propósito formativo 5" },
            {
        id: "cn2-6",
        proposito: "Propósito formativo 6 y 7",
        titulo: "Termodinámica Básica",
        icono: "🔥",
        imagen: "linear-gradient(135deg, #ef4444, #dc2626)",
        contenido: `
          <h4>Leyes</h4>
          <ul>
            <li><strong>1ª Ley:</strong> ΔU = Q - W</li>
            <li><strong>2ª Ley:</strong> la entropía aumenta</li>
          </ul>
          <h4>Escalas</h4>
          <div class="formula">°F = (°C × 9/5) + 32<br>K = °C + 273.15</div>
          <div class="ejemplo">
            Tuxtla (35°C = 95°F = 308 K) vs San Cristóbal (18°C = 64°F = 291 K).
          </div>
        `,
        actividades: [
          { pregunta: "La 1ª Ley de la Termodinámica trata sobre:", opciones: ["La entropía", "La conservación de la energía", "La gravedad", "La electricidad"], correcta: "La conservación de la energía", explicacion: "ΔU = Q - W." },
          { pregunta: "¿Qué escala de temperatura es absoluta?", opciones: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"], correcta: "Kelvin", explicacion: "Comienza en el cero absoluto." },
          { pregunta: "Si en Tuxtla hay 35°C, ¿cuánto es en Fahrenheit?", opciones: ["95°F", "50°F", "100°F", "77°F"], correcta: "95°F", explicacion: "(35 × 9/5) + 32 = 95." },
          { pregunta: "La 2ª Ley dice que la entropía (desorden):", opciones: ["Disminuye", "Aumenta", "Se mantiene", "Desaparece"], correcta: "Aumenta", explicacion: "En el universo, el desorden tiende a crecer." },
          { pregunta: "El calor es energía que se transfiere por:", opciones: ["Diferencia de masa", "Diferencia de temperatura", "Diferencia de volumen", "Gravedad"], correcta: "Diferencia de temperatura", explicacion: "Va de lo caliente a lo frío." }
        ]
      },
      { ref: "fisica:fx2-4", proposito: "Propósito formativo 6" },
      { ref: "fisica:fx2-5", proposito: "Propósito formativo 7" },
            {
        id: "cn2-4",
        proposito: "Propósito formativo 8",
        estudio: "fisica:fx2-6",
        titulo: "Fuentes de Energía",
        icono: "🌞",
        imagen: "linear-gradient(135deg, #0ea5e9, #0284c7)",
        contenido: `
          <h4>Renovables</h4>
          <ul><li>Solar, eólica, hidráulica, geotérmica, biomasa</li></ul>
          <h4>No renovables</h4>
          <ul><li>Carbón, petróleo, gas, nuclear</li></ul>
          <div class="ejemplo">
            <strong>Contexto Chiapas:</strong> Presas hidroeléctricas Chicoasén y Malpaso en el río Grijalva.
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es una fuente de energía renovable?", opciones: ["Petróleo", "Carbón", "Solar", "Gas natural"], correcta: "Solar", explicacion: "El sol es inagotable a escala humana." },
          { pregunta: "Las presas hidroeléctricas de Chiapas usan energía:", opciones: ["Solar", "Eólica", "Hidráulica", "Nuclear"], correcta: "Hidráulica", explicacion: "Usan la fuerza del agua." },
          { pregunta: "El petróleo es una fuente:", opciones: ["Renovable", "No renovable", "Infinita", "Limpia"], correcta: "No renovable", explicacion: "Tarda millones de años en formarse." },
          { pregunta: "La energía del viento se llama:", opciones: ["Solar", "Eólica", "Geotérmica", "Biomasa"], correcta: "Eólica", explicacion: "Se obtiene con aerogeneradores." },
          { pregunta: "¿Qué fuente de energía contamina más?", opciones: ["Solar", "Eólica", "Carbón", "Hidráulica"], correcta: "Carbón", explicacion: "Emite gases de efecto invernadero." }
        ]
      }
    ]
  },

  3: {
    titulo: "Nuestro hogar. El sistema terrestre",
    subtitulo: "Ciencias Naturales, Experimentales y Tecnología III",
    semestre: "Tercer Semestre",
    clase: "s3",
    icono: "🌎",
    descripcion: "La Tierra como sistema, la atmósfera y la hidrósfera, los ecosistemas, la fotosíntesis y el cuidado del ambiente.",
    contexto: "Chiapas es uno de los estados con mayor biodiversidad de México: selvas, bosques de niebla, manglares y montañas. Entender la Tierra como sistema te ayuda a cuidarla.",
    temas: [
      {
        id: "cnx3-1",
        proposito: "Propósito formativo 1",
        titulo: "La Tierra como Sistema: las Cuatro Esferas",
        icono: "🌍",
        imagen: "linear-gradient(135deg, #0284c7, #16a34a)",
        contenido: `
          <h4>Un sistema de partes que interactúan</h4>
          <p>Un <strong>sistema</strong> es un conjunto de partes que interactúan entre sí. La Tierra es un sistema formado por cuatro subsistemas o <strong>esferas</strong>:</p>
          <figure class="diagrama-quimica">
            <img src="images/ciencias/esferas-terrestres.svg" alt="Atmósfera, hidrósfera, litósfera y biósfera" loading="lazy">
            <figcaption>Las cuatro esferas terrestres están en contacto y se influyen constantemente.</figcaption>
          </figure>
          <table class="tabla-estudio">
            <tr><th>Esfera</th><th>¿Qué es?</th><th>Características</th></tr>
            <tr><td><strong>Atmósfera</strong></td><td>La capa de gases que rodea a la Tierra</td><td>Contiene el oxígeno que respiramos, regula la temperatura y nos protege de la radiación ultravioleta</td></tr>
            <tr><td><strong>Hidrósfera</strong></td><td>Toda el agua del planeta</td><td>Océanos, ríos, lagos, agua subterránea, hielo y vapor</td></tr>
            <tr><td><strong>Litósfera</strong></td><td>La capa rocosa exterior</td><td>Rocas, suelo y relieve; está dividida en placas tectónicas</td></tr>
            <tr><td><strong>Biósfera</strong></td><td>Todos los seres vivos y los lugares donde viven</td><td>Abarca partes de las otras tres esferas</td></tr>
          </table>

          <h4>Las esferas interactúan</h4>
          <ul>
            <li><strong>Atmósfera → hidrósfera:</strong> la lluvia llena los ríos.</li>
            <li><strong>Hidrósfera → litósfera:</strong> el río Grijalva talló el Cañón del Sumidero durante millones de años (erosión).</li>
            <li><strong>Biósfera → atmósfera:</strong> las plantas de la selva liberan oxígeno y vapor de agua.</li>
            <li><strong>Litósfera → atmósfera:</strong> la erupción del Chichonal en 1982 lanzó cenizas y gases que afectaron el clima.</li>
          </ul>
          <p>En cuanto a la <strong>energía</strong>, la Tierra es un sistema abierto: recibe la energía del Sol. En cuanto a la <strong>materia</strong>, es prácticamente cerrado: la materia se recicla una y otra vez en los ciclos biogeoquímicos.</p>
        `,
        actividades: [
          { pregunta: "La capa de gases que rodea a la Tierra es la:", opciones: ["Hidrósfera", "Atmósfera", "Litósfera", "Biósfera"], correcta: "Atmósfera", explicacion: "Contiene el aire que respiramos." },
          { pregunta: "Los ríos, los océanos y el agua subterránea forman la:", opciones: ["Hidrósfera", "Litósfera", "Atmósfera", "Biósfera"], correcta: "Hidrósfera", explicacion: "Es toda el agua del planeta." },
          { pregunta: "El Cañón del Sumidero se formó por la interacción entre:", opciones: ["La hidrósfera y la litósfera", "La biósfera y la atmósfera", "Solo la atmósfera", "El Sol y la Luna"], correcta: "La hidrósfera y la litósfera", explicacion: "El río erosionó la roca durante millones de años." },
          { pregunta: "La biósfera está formada por:", opciones: ["Solo los océanos", "Los seres vivos y los lugares donde viven", "Las rocas", "Los gases"], correcta: "Los seres vivos y los lugares donde viven", explicacion: "Abarca partes de las otras tres esferas." },
          { pregunta: "En cuanto a la energía, la Tierra es un sistema abierto porque:", opciones: ["Recibe la energía del Sol", "No tiene atmósfera", "Pierde toda su materia", "No tiene agua"], correcta: "Recibe la energía del Sol", explicacion: "La materia, en cambio, se recicla." }
        ]
      },
            {
        id: "cn3-5",
        proposito: "Propósito formativo 1",
        estudio: "ciencias:cn3-5",
        titulo: "Geografía y Sistemas Terrestres de Chiapas",
        icono: "🗺️",
        imagen: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        contenido: `
          <h4>Relieve chiapaneco</h4>
          <ul>
            <li>Planicie Costera del Pacífico</li>
            <li>Sierra Madre de Chiapas</li>
            <li>Depresión Central</li>
            <li>Altos de Chiapas</li>
            <li>Montañas del Norte y Oriente</li>
            <li>Planicie Costera del Golfo</li>
          </ul>
          <h4>Ríos principales</h4>
          <ul>
            <li>Grijalva (junto con el Usumacinta forma el sistema fluvial más caudaloso de México)</li>
            <li>Usumacinta, Suchiate</li>
          </ul>
        `,
        actividades: [
          { pregunta: "¿Cuál es el río más caudaloso de México?", opciones: ["Usumacinta", "Grijalva", "Suchiate", "Bravo"], correcta: "Grijalva", explicacion: "Nace en Chiapas." },
          { pregunta: "Los Altos de Chiapas se caracterizan por ser:", opciones: ["Selva", "Montañoso y frío", "Desierto", "Costa"], correcta: "Montañoso y frío", explicacion: "Ahí está San Cristóbal." },
          { pregunta: "La Depresión Central es una zona:", opciones: ["Montañosa", "Baja y cálida", "Desértica", "Polar"], correcta: "Baja y cálida", explicacion: "Como Tuxtla Gutiérrez." },
          { pregunta: "La Sierra Madre de Chiapas es una zona:", opciones: ["Volcánica y montañosa", "Plana", "Costera", "Selvática"], correcta: "Volcánica y montañosa", explicacion: "Tiene el Tacaná." },
          { pregunta: "Chiapas limita con el océano:", opciones: ["Atlántico", "Pacífico", "Ártico", "Índico"], correcta: "Pacífico", explicacion: "Al sur." }
        ]
      },
      {
        id: "cnx3-2",
        proposito: "Propósito formativo 2",
        titulo: "Atmósfera, Hidrósfera, Clima y Tiempo",
        icono: "🌦️",
        imagen: "linear-gradient(135deg, #38bdf8, #6366f1)",
        contenido: `
          <h4>La atmósfera: capas y composición</h4>
          <figure class="diagrama-quimica">
            <img src="images/ciencias/capas-atmosfera.svg" alt="Capas de la atmósfera" loading="lazy">
            <figcaption>En la <strong>tropósfera</strong> ocurren las lluvias y las nubes; en la <strong>estratósfera</strong> está la capa de ozono que nos protege de la radiación ultravioleta.</figcaption>
          </figure>
          <table class="tabla-estudio">
            <tr><th>Gas</th><th>Fórmula</th><th>Proporción en el aire seco</th></tr>
            <tr><td>Nitrógeno</td><td>N₂</td><td>78 %</td></tr>
            <tr><td>Oxígeno</td><td>O₂</td><td>21 %</td></tr>
            <tr><td>Argón</td><td>Ar</td><td>0.9 %</td></tr>
            <tr><td>Dióxido de carbono</td><td>CO₂</td><td>≈ 0.04 % (va en aumento)</td></tr>
          </table>
          <p>El aire también lleva <strong>vapor de agua</strong> en cantidad variable. La <strong>presión atmosférica</strong> es el peso del aire sobre nosotros: disminuye con la altura, por eso en San Cristóbal (≈ 2200 m) hay menos presión que en Tuxtla (≈ 520 m).</p>

          <h4>La hidrósfera</h4>
          <ul>
            <li>Alrededor del <strong>97.5 %</strong> del agua de la Tierra es salada; solo el <strong>2.5 %</strong> es dulce, y la mayor parte está congelada en glaciares.</li>
            <li>El agua tiene su mayor densidad a 4 °C; por eso el hielo flota y los lagos se congelan por arriba.</li>
            <li><strong>Ciclo del agua:</strong> evaporación → condensación (nubes) → precipitación → escurrimiento e infiltración.</li>
          </ul>

          <h4>Tiempo atmosférico y clima no son lo mismo</h4>
          <table class="tabla-estudio">
            <tr><th>Tiempo atmosférico</th><th>Clima</th></tr>
            <tr><td>Estado de la atmósfera en un lugar y momento: «hoy llueve en Tapachula»</td><td>Promedio del tiempo atmosférico de un lugar durante muchos años (unos 30): «Tapachula tiene clima cálido húmedo»</td></tr>
            <tr><td>Cambia en horas</td><td>Cambia en décadas</td></tr>
          </table>
          <div class="ejemplo">
            <strong>Climas de Chiapas:</strong> cálido húmedo en la selva y la costa, cálido subhúmedo en la Depresión Central (Tuxtla), templado y frío en los Altos (San Cristóbal). El relieve y la altura explican estas diferencias.
          </div>
        `,
        actividades: [
          { pregunta: "El gas más abundante en el aire es el:", opciones: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Argón"], correcta: "Nitrógeno", explicacion: "Forma el 78 % del aire seco." },
          { pregunta: "La capa de ozono se encuentra en la:", opciones: ["Tropósfera", "Estratósfera", "Exósfera", "Litósfera"], correcta: "Estratósfera", explicacion: "Nos protege de la radiación ultravioleta." },
          { pregunta: "«Hoy amaneció nublado en San Cristóbal» describe:", opciones: ["El clima", "El tiempo atmosférico", "La hidrósfera", "La litósfera"], correcta: "El tiempo atmosférico", explicacion: "El clima es el promedio de muchos años." },
          { pregunta: "¿Qué porcentaje aproximado del agua de la Tierra es dulce?", opciones: ["2.5 %", "50 %", "75 %", "97.5 %"], correcta: "2.5 %", explicacion: "Y la mayor parte está congelada." },
          { pregunta: "La presión atmosférica en las montañas altas es:", opciones: ["Mayor que en la costa", "Menor que en la costa", "Igual en todas partes", "Cero"], correcta: "Menor que en la costa", explicacion: "Hay menos aire encima." }
        ]
      },
            {
        id: "cn3-1",
        proposito: "Propósito formativo 3",
        estudio: "ciencias:cn3-1",
        titulo: "Los Ecosistemas y sus Componentes",
        icono: "🌿",
        imagen: "linear-gradient(135deg, #22c55e, #16a34a)",
        contenido: `
          <p>Un <strong>ecosistema</strong> es el conjunto de seres vivos y el medio físico donde interactúan.</p>
          <h4>Componentes</h4>
          <ul>
            <li><strong>Biotopo:</strong> medio físico (suelo, agua, clima)</li>
            <li><strong>Biocenosis:</strong> conjunto de seres vivos</li>
          </ul>
          <h4>Factores</h4>
          <ul>
            <li><strong>Bióticos:</strong> seres vivos</li>
            <li><strong>Abióticos:</strong> luz, temperatura, agua, suelo</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto:</strong> La Selva Lacandona es un ecosistema con miles de especies interactuando.
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué es un ecosistema?", opciones: ["Solo animales", "Seres vivos y su medio físico", "Solo plantas", "El clima"], correcta: "Seres vivos y su medio físico", explicacion: "Es la interacción entre biocenosis y biotopo." },
          { pregunta: "Los factores abióticos son:", opciones: ["Seres vivos", "Hongos y bacterias", "Luz, agua y suelo", "Animales"], correcta: "Luz, agua y suelo", explicacion: "No tienen vida." },
          { pregunta: "La biocenosis es:", opciones: ["El clima", "El conjunto de seres vivos", "El suelo", "El agua"], correcta: "El conjunto de seres vivos", explicacion: "Es la comunidad biológica." },
          { pregunta: "La Selva Lacandona es un ejemplo de:", opciones: ["Ecosistema", "Población", "Individuo", "Biotopo"], correcta: "Ecosistema", explicacion: "Tiene miles de interacciones." },
          { pregunta: "¿Qué factor abiótico afecta a las plantas?", opciones: ["La luz solar", "Los depredadores", "Las bacterias", "Los hongos"], correcta: "La luz solar", explicacion: "Es necesaria para la fotosíntesis." }
        ]
      },
            {
        id: "cn3-2",
        proposito: "Propósito formativo 3",
        estudio: "ciencias:cn3-2",
        titulo: "Flujo de Energía y Cadenas Tróficas",
        icono: "🔁",
        imagen: "linear-gradient(135deg, #84cc16, #65a30d)",
        contenido: `
          <h4>Niveles tróficos</h4>
          <ul>
            <li><strong>Productores:</strong> plantas (fotosíntesis)</li>
            <li><strong>Consumidores:</strong> herbívoros (1°), carnívoros (2°, 3°)</li>
            <li><strong>Descomponedores:</strong> hongos, bacterias</li>
          </ul>
          <div class="formula">Solo ~10% de la energía pasa al siguiente nivel trófico</div>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> 🌱 → 🐛 → 🐦 → 🦅 (pirámide de energía)
          </div>
        `,
        actividades: [
          { pregunta: "Los productores en un ecosistema son:", opciones: ["Los leones", "Las plantas", "Los hongos", "Las bacterias"], correcta: "Las plantas", explicacion: "Producen su propio alimento con la fotosíntesis." },
          { pregunta: "¿Qué porcentaje de energía pasa de un nivel trófico al siguiente?", opciones: ["100%", "50%", "10%", "0%"], correcta: "10%", explicacion: "El resto se pierde como calor." },
          { pregunta: "Los descomponedores son:", opciones: ["Plantas", "Herbívoros", "Hongos y bacterias", "Carnívoros"], correcta: "Hongos y bacterias", explicacion: "Reciclan la materia orgánica." },
          { pregunta: "Una cadena trófica muestra:", opciones: ["Quién come a quién", "El clima", "El suelo", "La lluvia"], correcta: "Quién come a quién", explicacion: "Es el flujo de energía." },
          { pregunta: "Los carnívoros son consumidores:", opciones: ["Primarios", "Secundarios o terciarios", "Productores", "Descomponedores"], correcta: "Secundarios o terciarios", explicacion: "Comen a los herbívoros." }
        ]
      },
            {
        id: "cn3-3",
        proposito: "Propósito formativo 3",
        estudio: "ciencias:cn3-3",
        titulo: "Ciclos Biogeoquímicos",
        icono: "♻️",
        imagen: "linear-gradient(135deg, #06b6d4, #0891b2)",
        contenido: `
          <h4>Ciclo del agua</h4>
          <p>Evaporación → Condensación → Precipitación → Infiltración</p>
          <h4>Ciclo del carbono</h4>
          <p>Fotosíntesis ↔ Respiración ↔ Combustión</p>
          <h4>Ciclo del nitrógeno</h4>
          <p>Fijación → Nitrificación → Asimilación → Amonificación</p>
          <div class="ejemplo">
            <strong>Contexto:</strong> La cuenca del Grijalva es clave en el ciclo del agua en Chiapas.
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué ciclo mueve el agua por la atmósfera?", opciones: ["Ciclo del carbono", "Ciclo del agua", "Ciclo del nitrógeno", "Ciclo del oxígeno"], correcta: "Ciclo del agua", explicacion: "Involucra evaporación y lluvia." },
          { pregunta: "Las plantas absorben CO₂ en el ciclo del carbono mediante:", opciones: ["Respiración", "Fotosíntesis", "Combustión", "Descomposición"], correcta: "Fotosíntesis", explicacion: "Lo convierten en glucosa." },
          { pregunta: "El río Grijalva es clave para el ciclo del agua en:", opciones: ["Chiapas", "Sonora", "Yucatán", "Baja California"], correcta: "Chiapas", explicacion: "Es su cuenca principal." },
          { pregunta: "¿Qué acción humana altera el ciclo del carbono?", opciones: ["Plantar árboles", "Quemar combustibles fósiles", "Ahorrar agua", "Reciclar"], correcta: "Quemar combustibles fósiles", explicacion: "Libera CO₂ a la atmósfera." },
          { pregunta: "El ciclo del nitrógeno es esencial para:", opciones: ["El agua", "Las proteínas y el ADN", "La luz", "El clima"], correcta: "Las proteínas y el ADN", explicacion: "El nitrógeno forma parte de ellos." }
        ]
      },
            {
        id: "cn3-4",
        proposito: "Propósito formativo 3",
        estudio: "ciencias:cn3-4",
        titulo: "Biodiversidad Chiapaneca",
        icono: "🦜",
        imagen: "linear-gradient(135deg, #f59e0b, #d97706)",
        contenido: `
          <p>Chiapas es el <strong>2° estado con mayor biodiversidad</strong> de México.</p>
          <h4>Especies emblemáticas</h4>
          <ul>
            <li>Jaguar, Guacamaya roja</li>
            <li>Tapir centroamericano</li>
            <li>Quetzal, Ceiba</li>
          </ul>
          <h4>Áreas Naturales Protegidas</h4>
          <ul>
            <li>Montes Azules, El Triunfo</li>
            <li>Lagunas de Montebello, La Sepultura</li>
          </ul>
          <div class="ejemplo">
            La Selva Lacandona alberga el 20% de las especies de México.
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué lugar ocupa Chiapas en biodiversidad en México?", opciones: ["1°", "2°", "3°", "5°"], correcta: "2°", explicacion: "Solo después de Oaxaca." },
          { pregunta: "¿Cuál es un felino emblemático de la Selva Lacandona?", opciones: ["León", "Tigre", "Jaguar", "Puma"], correcta: "Jaguar", explicacion: "Es el felino más grande de América." },
          { pregunta: "Las Lagunas de Montebello son un área:", opciones: ["Urbana", "Natural Protegida", "Industrial", "Desértica"], correcta: "Natural Protegida", explicacion: "Son un parque nacional." },
          { pregunta: "¿Qué árbol es sagrado para los mayas?", opciones: ["Pino", "Ceiba", "Encino", "Roble"], correcta: "Ceiba", explicacion: "Representa el árbol de la vida." },
          { pregunta: "La guacamaya roja es un ave de:", opciones: ["Desierto", "Selva", "Tundra", "Mar"], correcta: "Selva", explicacion: "Habita en las selvas húmedas." }
        ]
      },
      { ref: "quimica:q2-2", proposito: "Propósito formativo 4" },
      {
        id: "cnx3-3",
        proposito: "Propósito formativo 5",
        titulo: "El Oxígeno y la Atmósfera Primitiva",
        icono: "🫧",
        imagen: "linear-gradient(135deg, #0ea5e9, #84cc16)",
        contenido: `
          <h4>Una atmósfera sin oxígeno</h4>
          <p>Según la hipótesis de <strong>Oparin y Haldane</strong>, la atmósfera de la Tierra primitiva era <strong>reductora</strong>: casi no tenía oxígeno libre (O₂) y estaba formada principalmente por metano (CH₄), amoniaco (NH₃), hidrógeno (H₂) y vapor de agua (H₂O). Ningún animal actual podría respirarla.</p>
          <table class="tabla-estudio">
            <tr><th></th><th>Atmósfera primitiva</th><th>Atmósfera actual</th></tr>
            <tr><td>Oxígeno libre</td><td>Prácticamente nada</td><td>21 %</td></tr>
            <tr><td>Gases principales</td><td>CH₄, NH₃, H₂, H₂O</td><td>N₂ y O₂</td></tr>
            <tr><td>Capa de ozono</td><td>No existía</td><td>Protege de la radiación ultravioleta</td></tr>
          </table>

          <h4>¿Cómo llegó el oxígeno?</h4>
          <p>Hace unos 2400 millones de años, unas bacterias llamadas <strong>cianobacterias</strong> comenzaron a hacer fotosíntesis y a liberar O₂. A este cambio se le llama la <strong>Gran Oxidación</strong>. Con el oxígeno se formó la capa de ozono y fue posible la vida compleja fuera del agua.</p>
          <div class="ejemplo">
            <strong>Fósiles vivientes:</strong> los <strong>estromatolitos</strong> son estructuras formadas por capas de cianobacterias. Todavía existen algunos vivos en México, por ejemplo en la laguna de Bacalar (Quintana Roo).
          </div>

          <h4>Ciclo del oxígeno</h4>
          <ul>
            <li><strong>Producción:</strong> las plantas, las algas y las cianobacterias liberan O₂ en la fotosíntesis.</li>
            <li><strong>Consumo:</strong> los seres vivos lo usan en la respiración; también se consume en la combustión y en la oxidación de los metales.</li>
            <li><strong>Regreso:</strong> la respiración y la combustión devuelven CO₂ y agua, que las plantas vuelven a usar.</li>
          </ul>

          <h4>Formación de óxidos</h4>
          <div class="formula">Metal + O₂ → óxido básico &nbsp;&nbsp;&nbsp;(2Ca + O₂ → 2CaO)<br>
Óxido básico + H₂O → hidróxido &nbsp;&nbsp;(CaO + H₂O → Ca(OH)₂, la cal)<br>
No metal + O₂ → óxido ácido &nbsp;&nbsp;&nbsp;(S + O₂ → SO₂)<br>
Óxido ácido + H₂O → oxiácido &nbsp;&nbsp;(SO₃ + H₂O → H₂SO₄: lluvia ácida)</div>
        `,
        actividades: [
          { pregunta: "Según Oparin y Haldane, la atmósfera primitiva:", opciones: ["Tenía mucho oxígeno", "Casi no tenía oxígeno libre", "Era igual a la actual", "Solo tenía nitrógeno"], correcta: "Casi no tenía oxígeno libre", explicacion: "Era reductora: CH₄, NH₃, H₂ y H₂O." },
          { pregunta: "Los primeros organismos que liberaron oxígeno a la atmósfera fueron las:", opciones: ["Cianobacterias", "Aves", "Hongos", "Mamíferos"], correcta: "Cianobacterias", explicacion: "Lo hicieron mediante la fotosíntesis." },
          { pregunta: "Un metal que reacciona con oxígeno forma un:", opciones: ["Óxido básico", "Óxido ácido", "Ácido", "Gas noble"], correcta: "Óxido básico", explicacion: "Si después reacciona con agua forma un hidróxido." },
          { pregunta: "Los óxidos ácidos que reaccionan con el agua de lluvia producen:", opciones: ["Lluvia ácida", "Ozono", "Sal de mesa", "Oxígeno"], correcta: "Lluvia ácida", explicacion: "Por ejemplo, el SO₃ forma ácido sulfúrico." },
          { pregunta: "¿Qué procesos consumen oxígeno en el ciclo del oxígeno?", opciones: ["La respiración y la combustión", "La fotosíntesis", "La evaporación", "La condensación"], correcta: "La respiración y la combustión", explicacion: "La fotosíntesis, en cambio, lo produce." }
        ]
      },
      {
        id: "cnx3-4",
        proposito: "Propósito formativo 6",
        titulo: "La Fotosíntesis",
        icono: "🌱",
        imagen: "linear-gradient(135deg, #16a34a, #facc15)",
        contenido: `
          <h4>La fábrica de alimento del planeta</h4>
          <figure class="diagrama-quimica">
            <img src="images/ciencias/fotosintesis.svg" alt="Entradas y salidas de la fotosíntesis" loading="lazy">
            <figcaption>La planta toma CO₂ del aire, agua del suelo y luz del sol; produce glucosa (su alimento) y libera oxígeno.</figcaption>
          </figure>
          <div class="formula">6CO₂ + 6H₂O + energía luminosa → C₆H₁₂O₆ + 6O₂</div>
          <p>Ocurre en los <strong>cloroplastos</strong>, que contienen <strong>clorofila</strong>, el pigmento verde que absorbe la luz.</p>

          <h4>Las dos fases</h4>
          <table class="tabla-estudio">
            <tr><th>Fase luminosa</th><th>Ciclo de Calvin (fase oscura)</th></tr>
            <tr><td>Ocurre en los <strong>tilacoides</strong> del cloroplasto y necesita luz.</td><td>Ocurre en el <strong>estroma</strong> del cloroplasto; no necesita luz directamente.</td></tr>
            <tr><td>La clorofila capta la luz; el agua se rompe y se libera <strong>O₂</strong>; se produce energía química (ATP y NADPH).</td><td>Con el ATP y el NADPH, el <strong>CO₂</strong> se fija y se transforma en <strong>glucosa</strong>.</td></tr>
          </table>

          <h4>¿Por qué es tan importante?</h4>
          <ul>
            <li><strong>Base de la cadena trófica:</strong> los organismos <strong>autótrofos</strong> (plantas, algas, cianobacterias) fabrican su alimento; todos los demás dependemos de ellos.</li>
            <li><strong>Produce el oxígeno</strong> que respiramos.</li>
            <li><strong>Captura dióxido de carbono</strong>, el principal gas de efecto invernadero: las selvas y los bosques ayudan a frenar el cambio climático.</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto Chiapas:</strong> la Selva Lacandona y los bosques de niebla de El Triunfo almacenan enormes cantidades de carbono en sus árboles. Cuando se talan o se queman, ese carbono regresa a la atmósfera como CO₂.
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué produce la fotosíntesis?", opciones: ["CO₂ y agua", "Glucosa y oxígeno", "Proteínas y grasas", "Nitrógeno"], correcta: "Glucosa y oxígeno", explicacion: "6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂." },
          { pregunta: "El pigmento verde que absorbe la luz se llama:", opciones: ["Hemoglobina", "Clorofila", "Melanina", "Glucosa"], correcta: "Clorofila", explicacion: "Está dentro de los cloroplastos." },
          { pregunta: "En la fase luminosa se libera oxígeno porque:", opciones: ["Se rompe la molécula de agua", "Se quema la glucosa", "Se absorbe CO₂", "Se forma ozono"], correcta: "Se rompe la molécula de agua", explicacion: "El O₂ proviene del agua." },
          { pregunta: "En el ciclo de Calvin el CO₂ se transforma en:", opciones: ["Oxígeno", "Glucosa", "Agua", "Clorofila"], correcta: "Glucosa", explicacion: "Usa el ATP y el NADPH de la fase luminosa." },
          { pregunta: "Los organismos que fabrican su propio alimento se llaman:", opciones: ["Heterótrofos", "Autótrofos", "Descomponedores", "Consumidores"], correcta: "Autótrofos", explicacion: "Son la base de toda cadena trófica." }
        ]
      },
            {
        id: "cn3-6",
        proposito: "Propósito formativo 7",
        estudio: "ciencias:cn3-6",
        titulo: "Problemáticas Ambientales",
        icono: "⚠️",
        imagen: "linear-gradient(135deg, #ef4444, #dc2626)",
        contenido: `
          <h4>Amenazas en Chiapas</h4>
          <ul>
            <li><strong>Deforestación:</strong> pérdida de selvas por ganadería y agricultura</li>
            <li><strong>Contaminación de ríos:</strong> desechos y agroquímicos</li>
            <li><strong>Cambio climático:</strong> alteración de ciclos de lluvia</li>
            <li><strong>Especies invasoras:</strong> desplazamiento de especies nativas</li>
          </ul>
          <div class="ejemplo">
            <strong>Reflexión:</strong> La Selva Lacandona es uno de los pulmones más importantes de México. Su conservación es responsabilidad de todos.
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es una causa de la deforestación?", opciones: ["Reforestación", "Ganadería", "Reciclaje", "Ahorro de agua"], correcta: "Ganadería", explicacion: "Tala árboles para pastizales." },
          { pregunta: "El cambio climático altera en Chiapas:", opciones: ["Los ciclos de lluvia", "Las montañas", "El mar", "La gravedad"], correcta: "Los ciclos de lluvia", explicacion: "Causa sequías o inundaciones." },
          { pregunta: "¿Qué contamina los ríos de Chiapas?", opciones: ["Peces", "Agroquímicos", "Piedras", "Árboles"], correcta: "Agroquímicos", explicacion: "Los fertilizantes llegan al agua." },
          { pregunta: "Una especie invasora en Chiapas es:", opciones: ["El jaguar", "La ceiba", "El pez diablo", "El quetzal"], correcta: "El pez diablo", explicacion: "Afecta los ecosistemas acuáticos." },
          { pregunta: "¿Qué selva es el pulmón más importante de Chiapas?", opciones: ["Selva Lacandona", "Amazonas", "Selva Negra", "Selva Maya"], correcta: "Selva Lacandona", explicacion: "Es un tesoro de biodiversidad." }
        ]
      },
      {
        id: "cnx3-5",
        proposito: "Propósito formativo 8",
        titulo: "Restauración de Ecosistemas y Tecnología Ambiental",
        icono: "🌳",
        imagen: "linear-gradient(135deg, #15803d, #0891b2)",
        contenido: `
          <h4>Restaurar: ayudar a que un ecosistema se recupere</h4>
          <p>La <strong>restauración ecológica</strong> busca que un ecosistema dañado recupere sus funciones: suelo fértil, agua limpia, biodiversidad y captura de carbono.</p>
          <ul>
            <li><strong>Reforestar con especies nativas</strong> (no con cualquier árbol) para recuperar el hábitat de la fauna local.</li>
            <li><strong>Restaurar manglares</strong>, como en la Reserva de la Biosfera La Encrucijada, en la costa de Chiapas: protegen de huracanes y son criaderos de peces.</li>
            <li><strong>Corredores biológicos:</strong> franjas de vegetación que conectan áreas protegidas para que los animales se puedan mover; Chiapas forma parte del Corredor Biológico Mesoamericano.</li>
            <li><strong>Café de sombra (agroforestería):</strong> cultivar café bajo árboles conserva aves, suelo y agua.</li>
          </ul>

          <h4>Tecnologías para reducir el deterioro ambiental</h4>
          <table class="tabla-estudio">
            <tr><th>Tecnología</th><th>¿Qué resuelve?</th></tr>
            <tr><td>Captadores de agua de lluvia</td><td>Escasez de agua en temporada de secas</td></tr>
            <tr><td>Plantas de tratamiento y humedales artificiales</td><td>Contaminación de ríos por aguas residuales</td></tr>
            <tr><td>Biodigestores</td><td>Convierten estiércol en gas para cocinar y en abono</td></tr>
            <tr><td>Estufas ahorradoras de leña</td><td>Deforestación y humo dentro de las casas</td></tr>
            <tr><td>Paneles y calentadores solares</td><td>Emisiones por quemar combustibles</td></tr>
            <tr><td>Sanitarios secos (ecológicos)</td><td>Ahorro de agua y producción de abono</td></tr>
            <tr><td>Satélites y drones</td><td>Detectar incendios forestales y tala ilegal</td></tr>
          </table>
          <div class="ejemplo">
            <strong>Proyecto:</strong> identifiquen un problema ambiental de su comunidad (basura, falta de agua, deforestación). Investiguen una tecnología o práctica que ayude a resolverlo, elaboren una maqueta o prototipo y preséntenlo a la comunidad escolar.
          </div>
        `,
        actividades: [
          { pregunta: "Para restaurar un bosque conviene reforestar con:", opciones: ["Cualquier árbol", "Especies nativas", "Plantas de plástico", "Solo pasto"], correcta: "Especies nativas", explicacion: "Recuperan el hábitat de la fauna local." },
          { pregunta: "Los manglares de La Encrucijada son importantes porque:", opciones: ["Protegen de huracanes y son criaderos de peces", "No tienen función", "Contaminan el agua", "Solo sirven para turismo"], correcta: "Protegen de huracanes y son criaderos de peces", explicacion: "Son ecosistemas costeros muy valiosos." },
          { pregunta: "Un corredor biológico sirve para:", opciones: ["Conectar áreas naturales para que los animales se desplacen", "Construir carreteras", "Talar árboles", "Criar ganado"], correcta: "Conectar áreas naturales para que los animales se desplacen", explicacion: "Evita que las poblaciones queden aisladas." },
          { pregunta: "Un biodigestor transforma el estiércol en:", opciones: ["Gas para cocinar y abono", "Agua potable", "Electricidad nuclear", "Plástico"], correcta: "Gas para cocinar y abono", explicacion: "Aprovecha la descomposición sin oxígeno." },
          { pregunta: "El café de sombra ayuda al ambiente porque:", opciones: ["Elimina todos los árboles", "Conserva árboles, aves, suelo y agua", "Usa más fertilizantes", "No necesita agua"], correcta: "Conserva árboles, aves, suelo y agua", explicacion: "Es una forma de agroforestería." }
        ]
      }
    ]
  },

  4: {
    titulo: "El poder de la química",
    subtitulo: "Ciencias Naturales, Experimentales y Tecnología IV",
    semestre: "Cuarto Semestre",
    clase: "s4",
    icono: "⚗️",
    descripcion: "Reacciones químicas, conservación de la masa, equilibrio, ácidos y bases, redox, química orgánica, biomoléculas y respiración celular.",
    contexto: "La química transforma el maíz en tortilla, el cacao en chocolate y el café verde en el aroma de tu taza. Los temas con 📎 son compartidos con el módulo de Química.",
    temas: [
            {
        id: "cn4-4",
        proposito: "Propósito formativo 1",
        estudio: "quimica:q2-2",
        titulo: "Reacciones Químicas",
        icono: "💥",
        imagen: "linear-gradient(135deg, #f59e0b, #d97706)",
        contenido: `
          <h4>Tipos de reacciones</h4>
          <ul>
            <li>Síntesis: A + B → AB</li>
            <li>Descomposición: AB → A + B</li>
            <li>Sustitución: AB + C → AC + B</li>
            <li>Doble sustitución: AB + CD → AD + CB</li>
          </ul>
          <div class="ejemplo">
            Ley de Lavoisier: masa reactivos = masa productos.
          </div>
        `,
        actividades: [
          { pregunta: "La reacción A + B → AB es de:", opciones: ["Síntesis", "Descomposición", "Sustitución", "Doble sustitución"], correcta: "Síntesis", explicacion: "Se combinan dos sustancias." },
          { pregunta: "¿Qué dice la Ley de Lavoisier?", opciones: ["La masa se crea", "La masa se destruye", "La masa se conserva", "La masa cambia"], correcta: "La masa se conserva", explicacion: "Masa reactivos = masa productos." },
          { pregunta: "AB → A + B es una reacción de:", opciones: ["Síntesis", "Descomposición", "Sustitución", "Neutralización"], correcta: "Descomposición", explicacion: "Una sustancia se separa." },
          { pregunta: "En una reacción química, las sustancias iniciales se llaman:", opciones: ["Productos", "Reactivos", "Catalizadores", "Precipitados"], correcta: "Reactivos", explicacion: "Son los que reaccionan." },
          { pregunta: "La reacción AB + CD → AD + CB es de:", opciones: ["Síntesis", "Doble sustitución", "Descomposición", "Simple"], correcta: "Doble sustitución", explicacion: "Intercambian parejas." }
        ]
      },
            {
        id: "cn4-5",
        proposito: "Propósito formativo 2",
        estudio: "quimica:q2-3",
        titulo: "Balanceo de Ecuaciones",
        icono: "⚖️",
        imagen: "linear-gradient(135deg, #10b981, #059669)",
        contenido: `
          <h4>Método por tanteo</h4>
          <ol>
            <li>Escribir la ecuación sin balancear</li>
            <li>Contar átomos de cada elemento</li>
            <li>Ajustar coeficientes</li>
            <li>Verificar balance</li>
          </ol>
          <div class="formula">CH₄ + 2O₂ → CO₂ + 2H₂O</div>
        `,
        actividades: [
          { pregunta: "¿Para qué sirve balancear?", opciones: ["Para hacerla bonita", "Para conservar la masa", "Para que pese más", "Para eliminar elementos"], correcta: "Para conservar la masa", explicacion: "Debe haber los mismos átomos." },
          { pregunta: "En CH₄ + 2O₂ → CO₂ + 2H₂O, ¿cuántos O hay en reactivos?", opciones: ["2", "3", "4", "1"], correcta: "4", explicacion: "2O₂ = 4 átomos." },
          { pregunta: "Balancea: __Fe + __O₂ → __Fe₂O₃", opciones: ["1,1,1", "2,3,1", "4,3,2", "3,2,1"], correcta: "4,3,2", explicacion: "4Fe + 3O₂ → 2Fe₂O₃" },
          { pregunta: "El método de tanteo consiste en:", opciones: ["Adivinar", "Probar coeficientes", "Usar calculadora", "Quemar"], correcta: "Probar coeficientes", explicacion: "Hasta igualar los átomos." },
          { pregunta: "¿Qué se coloca para balancear?", opciones: ["Subíndices", "Coeficientes", "Signos", "Puntos"], correcta: "Coeficientes", explicacion: "Números antes de las fórmulas." }
        ]
      },
            {
        id: "cn4-6",
        proposito: "Propósito formativo 2",
        estudio: "quimica:q2-4",
        titulo: "Estequiometría: El Mol",
        icono: "🔢",
        imagen: "linear-gradient(135deg, #f43f5e, #e11d48)",
        contenido: `
          <h4>Conceptos clave</h4>
          <ul>
            <li><strong>Mol:</strong> 6.022×10²³ partículas</li>
            <li><strong>Masa molar:</strong> masa de 1 mol (g/mol)</li>
          </ul>
          <div class="formula">n = m / M</div>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> 36 g de agua (M = 18 g/mol) → n = 2 moles
          </div>
        `,
        actividades: [
          { pregunta: "Un mol contiene:", opciones: ["100 partículas", "6.022×10²³ partículas", "10 partículas", "1 millón"], correcta: "6.022×10²³ partículas", explicacion: "Número de Avogadro." },
          { pregunta: "Si tienes 36 g de agua (M=18), ¿cuántos moles tienes?", opciones: ["1", "2", "3", "0.5"], correcta: "2", explicacion: "n = 36/18 = 2." },
          { pregunta: "La fórmula para calcular moles a partir de la masa es:", opciones: ["n = m + M", "n = m / M", "n = M / m", "n = m × M"], correcta: "n = m / M", explicacion: "Masa entre masa molar." },
          { pregunta: "La masa molar del agua (H₂O) es:", opciones: ["16 g/mol", "18 g/mol", "20 g/mol", "10 g/mol"], correcta: "18 g/mol", explicacion: "Hidrógeno (1×2) + Oxígeno (16) = 18." },
          { pregunta: "¿Qué se debe hacer antes de cálculos estequiométricos?", opciones: ["Calentar", "Balancear la ecuación", "Medir el pH", "Filtrar"], correcta: "Balancear la ecuación", explicacion: "Para respetar proporciones." }
        ]
      },
      {
        id: "cnx4-1",
        proposito: "Propósito formativo 3",
        titulo: "Equilibrio Químico",
        icono: "⚖️",
        imagen: "linear-gradient(135deg, #7c3aed, #0ea5e9)",
        contenido: `
          <h4>Reacciones reversibles e irreversibles</h4>
          <ul>
            <li><strong>Irreversibles (→):</strong> los productos no vuelven a formar los reactivos. Ej.: quemar leña, cocer un huevo, que se agrie la leche.</li>
            <li><strong>Reversibles (⇌):</strong> ocurren en ambos sentidos: los reactivos forman productos y los productos vuelven a formar reactivos.</li>
          </ul>

          <h4>El equilibrio es dinámico</h4>
          <p>En una reacción reversible llega un momento en que la reacción directa y la inversa ocurren <strong>a la misma velocidad</strong>. Parece que «ya no pasa nada», pero las moléculas siguen reaccionando: es un <strong>equilibrio dinámico</strong>.</p>
          <div class="ejemplo">
            <strong>Analogía:</strong> en el mercado, si la misma cantidad de personas entra y sale por minuto, el número de personas adentro no cambia, aunque la gente se siga moviendo.
          </div>

          <h4>Constante de equilibrio</h4>
          <div class="formula">Para aA + bB ⇌ cC + dD:<br>
K = [C]ᶜ · [D]ᵈ / ([A]ᵃ · [B]ᵇ)<br><br>
Ejemplo: N₂ + 3H₂ ⇌ 2NH₃ &nbsp;&nbsp;→&nbsp;&nbsp; K = [NH₃]² / ([N₂] · [H₂]³)</div>
          <ul>
            <li>Si K es <strong>grande</strong>, en el equilibrio predominan los productos.</li>
            <li>Si K es <strong>pequeña</strong>, predominan los reactivos.</li>
          </ul>

          <h4>Principio de Le Châtelier</h4>
          <p>Si un sistema en equilibrio se altera (concentración, temperatura o presión), se desplaza para contrarrestar el cambio.</p>

          <h4>Equilibrios en la naturaleza</h4>
          <ul>
            <li><strong>El refresco:</strong> CO₂ + H₂O ⇌ H₂CO₃. Al abrirlo baja la presión, el equilibrio se desplaza y escapa el gas.</li>
            <li><strong>Las grutas:</strong> CaCO₃ + CO₂ + H₂O ⇌ Ca(HCO₃)₂. El agua disuelve la roca caliza y, al gotear, la vuelve a depositar formando estalactitas y estalagmitas, como en las Grutas de Rancho Nuevo, cerca de San Cristóbal.</li>
            <li><strong>Tu sangre:</strong> la hemoglobina se une al oxígeno en los pulmones y lo suelta en los tejidos.</li>
          </ul>
        `,
        actividades: [
          { pregunta: "Quemar leña es una reacción:", opciones: ["Reversible", "Irreversible", "En equilibrio", "Nuclear"], correcta: "Irreversible", explicacion: "La ceniza y el humo no vuelven a formar leña." },
          { pregunta: "En el equilibrio químico:", opciones: ["Se detiene la reacción", "La reacción directa y la inversa ocurren a la misma velocidad", "Solo hay productos", "Solo hay reactivos"], correcta: "La reacción directa y la inversa ocurren a la misma velocidad", explicacion: "Por eso se llama equilibrio dinámico." },
          { pregunta: "Si la constante de equilibrio K es muy grande, predominan:", opciones: ["Los reactivos", "Los productos", "Ninguno", "El agua"], correcta: "Los productos", explicacion: "K = productos / reactivos." },
          { pregunta: "El símbolo de una reacción reversible es:", opciones: ["→", "⇌", "+", "="], correcta: "⇌", explicacion: "Indica que la reacción va en ambos sentidos." },
          { pregunta: "Las estalactitas de las grutas se forman por un equilibrio que involucra:", opciones: ["Carbonato de calcio, CO₂ y agua", "Hierro y oxígeno", "Sal y agua", "Glucosa y oxígeno"], correcta: "Carbonato de calcio, CO₂ y agua", explicacion: "El agua disuelve la caliza y luego la deposita." }
        ]
      },
      { ref: "quimica:q2-6", proposito: "Propósito formativo 4" },
      { ref: "quimica:q2-7", proposito: "Propósito formativo 5" },
      {
        id: "cnx4-2",
        proposito: "Propósito formativo 6",
        titulo: "Química Orgánica: el Mundo del Carbono",
        icono: "⬡",
        imagen: "linear-gradient(135deg, #334155, #16a34a)",
        contenido: `
          <h4>¿Por qué el carbono es especial?</h4>
          <p>El carbono tiene <strong>4 electrones de valencia</strong>, así que forma 4 enlaces. Puede unirse con otros carbonos en cadenas largas, ramificadas o en anillos, con enlaces simples (—), dobles (═) o triples (≡). Por eso existen millones de compuestos orgánicos.</p>

          <h4>Importancia para el bienestar humano</h4>
          <p>Son compuestos orgánicos los alimentos (azúcares, grasas, proteínas), los medicamentos, los combustibles (gas LP, gasolina), los plásticos, las fibras de la ropa, los tintes y los perfumes.</p>

          <h4>Hidrocarburos: solo carbono e hidrógeno</h4>
          <table class="tabla-estudio">
            <tr><th>Tipo</th><th>Enlace</th><th>Terminación</th><th>Ejemplo</th></tr>
            <tr><td>Alcanos</td><td>Simple C—C</td><td>-ano</td><td>Metano CH₄, propano C₃H₈ (gas LP), butano C₄H₁₀</td></tr>
            <tr><td>Alquenos</td><td>Doble C═C</td><td>-eno</td><td>Eteno C₂H₄ (madura la fruta)</td></tr>
            <tr><td>Alquinos</td><td>Triple C≡C</td><td>-ino</td><td>Etino C₂H₂ (acetileno para soldar)</td></tr>
          </table>
          <div class="formula">Prefijos por número de carbonos: 1 met · 2 et · 3 prop · 4 but · 5 pent · 6 hex · 7 hept · 8 oct</div>

          <h4>Grupos funcionales</h4>
          <table class="tabla-estudio">
            <tr><th>Grupo</th><th>Estructura</th><th>Ejemplo cotidiano</th></tr>
            <tr><td>Alcohol</td><td>—OH</td><td>Etanol (alcohol de las bebidas y del gel antibacterial)</td></tr>
            <tr><td>Cetona</td><td>C═O dentro de la cadena</td><td>Acetona (quitaesmalte)</td></tr>
            <tr><td>Aldehído</td><td>—CHO</td><td>Vainillina (sabor a vainilla)</td></tr>
            <tr><td>Ácido carboxílico</td><td>—COOH</td><td>Ácido acético (vinagre)</td></tr>
            <tr><td>Éster</td><td>—COO—</td><td>Aromas de frutas</td></tr>
            <tr><td>Amina</td><td>—NH₂</td><td>Olor del pescado; parte de las proteínas</td></tr>
          </table>

          <h4>Monómeros y polímeros</h4>
          <p>Un <strong>polímero</strong> es una molécula gigante formada por muchas unidades pequeñas llamadas <strong>monómeros</strong>. Naturales: el almidón del maíz y la celulosa de la madera (de glucosa), las proteínas (de aminoácidos). Sintéticos: el polietileno de las bolsas y el PET de las botellas.</p>
        `,
        actividades: [
          { pregunta: "¿Cuántos enlaces puede formar un átomo de carbono?", opciones: ["1", "2", "3", "4"], correcta: "4", explicacion: "Tiene 4 electrones de valencia." },
          { pregunta: "Un hidrocarburo con solo enlaces simples es un:", opciones: ["Alcano", "Alqueno", "Alquino", "Alcohol"], correcta: "Alcano", explicacion: "Terminan en -ano, como el metano." },
          { pregunta: "El gas LP está formado principalmente por:", opciones: ["Propano y butano", "Oxígeno", "Etanol", "Ácido acético"], correcta: "Propano y butano", explicacion: "Son alcanos de 3 y 4 carbonos." },
          { pregunta: "El grupo funcional —OH corresponde a un:", opciones: ["Alcohol", "Ácido", "Éster", "Alcano"], correcta: "Alcohol", explicacion: "Como el etanol." },
          { pregunta: "El almidón del maíz es un polímero formado por monómeros de:", opciones: ["Glucosa", "Aminoácidos", "Etileno", "Sal"], correcta: "Glucosa", explicacion: "La celulosa también está formada de glucosa." }
        ]
      },
      {
        id: "cnx4-3",
        proposito: "Propósito formativo 7",
        titulo: "Biomoléculas: las Moléculas de la Vida",
        icono: "🌽",
        imagen: "linear-gradient(135deg, #f59e0b, #dc2626)",
        contenido: `
          <h4>Las cuatro biomoléculas orgánicas</h4>
          <table class="tabla-estudio">
            <tr><th>Biomolécula</th><th>Función principal</th><th>Dónde la encuentras</th></tr>
            <tr><td><strong>Carbohidratos</strong></td><td>Energía rápida y estructura</td><td>Tortilla, frutas, piloncillo</td></tr>
            <tr><td><strong>Lípidos</strong></td><td>Reserva de energía, membranas celulares, hormonas</td><td>Aguacate, aceite, manteca, semillas de calabaza</td></tr>
            <tr><td><strong>Proteínas</strong></td><td>Construyen y reparan tejidos; enzimas, anticuerpos</td><td>Frijol, huevo, carne, pescado</td></tr>
            <tr><td><strong>Ácidos nucleicos</strong></td><td>Guardan y transmiten la información genética</td><td>El ADN y el ARN de todas las células</td></tr>
          </table>

          <h4>Clasificación de los carbohidratos</h4>
          <ul>
            <li><strong>Monosacáridos</strong> (una unidad): glucosa, fructosa (de las frutas).</li>
            <li><strong>Disacáridos</strong> (dos unidades): sacarosa (azúcar de caña), lactosa (de la leche).</li>
            <li><strong>Polisacáridos</strong> (muchas unidades): almidón (maíz, papa), celulosa (fibra vegetal), glucógeno (reserva en el hígado).</li>
          </ul>

          <h4>Clasificación de los lípidos</h4>
          <ul>
            <li><strong>Aceites:</strong> líquidos a temperatura ambiente (aceite de cocina, de aguacate).</li>
            <li><strong>Grasas:</strong> sólidas (manteca).</li>
            <li><strong>Fosfolípidos:</strong> forman las membranas de las células.</li>
            <li><strong>Esteroides:</strong> el colesterol y hormonas como la testosterona y los estrógenos.</li>
          </ul>

          <h4>Proteínas y aminoácidos</h4>
          <p>Las proteínas son cadenas de <strong>aminoácidos</strong>. Existen 20 aminoácidos en las proteínas; 9 son <strong>esenciales</strong>: el cuerpo no puede fabricarlos y debemos obtenerlos de los alimentos.</p>
          <div class="ejemplo">
            <strong>La sabiduría de la milpa:</strong> el maíz es pobre en algunos aminoácidos esenciales (como la lisina) y el frijol los tiene; el frijol es pobre en otros que el maíz sí tiene. Juntos, <strong>tortilla con frijol</strong> forman una proteína completa. ¡Una combinación que los pueblos mesoamericanos descubrieron hace miles de años!
          </div>
        `,
        actividades: [
          { pregunta: "La biomolécula que guarda la información genética es:", opciones: ["Carbohidrato", "Lípido", "Proteína", "Ácido nucleico"], correcta: "Ácido nucleico", explicacion: "El ADN y el ARN." },
          { pregunta: "El almidón de la tortilla es un:", opciones: ["Monosacárido", "Disacárido", "Polisacárido", "Lípido"], correcta: "Polisacárido", explicacion: "Está formado por muchas unidades de glucosa." },
          { pregunta: "Los aminoácidos esenciales son los que:", opciones: ["El cuerpo fabrica solo", "Debemos obtener de los alimentos", "No sirven", "Solo tienen las plantas"], correcta: "Debemos obtener de los alimentos", explicacion: "Son 9 en las personas adultas." },
          { pregunta: "Las membranas de las células están formadas principalmente por:", opciones: ["Fosfolípidos", "Almidón", "Glucosa", "Vitaminas"], correcta: "Fosfolípidos", explicacion: "Son un tipo de lípido." },
          { pregunta: "Comer tortilla con frijol es nutritivo porque:", opciones: ["Juntos forman una proteína completa", "No tienen proteínas", "Solo aportan grasa", "Son iguales"], correcta: "Juntos forman una proteína completa", explicacion: "Cada uno aporta los aminoácidos que le faltan al otro." }
        ]
      },
      {
        id: "cnx4-4",
        proposito: "Propósito formativo 8",
        titulo: "Respiración Celular y Fermentación",
        icono: "🫁",
        imagen: "linear-gradient(135deg, #dc2626, #9333ea)",
        contenido: `
          <h4>¿Cómo obtienen energía las células?</h4>
          <p>Las células «queman» glucosa de forma controlada para obtener energía en forma de <strong>ATP</strong>, la molécula que usan como «moneda» energética.</p>

          <h4>Respiración aerobia (con oxígeno)</h4>
          <div class="formula">C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energía (ATP)</div>
          <table class="tabla-estudio">
            <tr><th>Etapa</th><th>¿Dónde ocurre?</th><th>¿Qué pasa?</th></tr>
            <tr><td>1. Glucólisis</td><td>Citoplasma</td><td>La glucosa se divide en dos moléculas de piruvato; se obtienen 2 ATP. No necesita oxígeno.</td></tr>
            <tr><td>2. Ciclo de Krebs</td><td>Matriz de la mitocondria</td><td>El piruvato se degrada por completo y se libera CO₂ (el que exhalas).</td></tr>
            <tr><td>3. Cadena transportadora de electrones</td><td>Membrana interna de la mitocondria</td><td>Se produce la mayor parte del ATP. El oxígeno recibe los electrones al final y se forma agua.</td></tr>
          </table>
          <p>En total, una molécula de glucosa produce alrededor de 30 a 38 ATP con oxígeno.</p>

          <h4>Respiración anaerobia y fermentación (sin oxígeno)</h4>
          <p>Sin oxígeno, solo ocurre la glucólisis (2 ATP) seguida de una <strong>fermentación</strong>:</p>
          <ul>
            <li><strong>Fermentación alcohólica</strong> (levaduras): glucosa → etanol + CO₂. Hace que el pan esponje y se usa para el tepache y otras bebidas.</li>
            <li><strong>Fermentación láctica</strong> (bacterias y tus músculos): glucosa → ácido láctico. Produce el yogur, el queso y el sabor agrio del <strong>pozol</strong> fermentado. Cuando haces mucho ejercicio, tus músculos fermentan y se acumula ácido láctico.</li>
          </ul>

          <h4>Desarrollos tecnológicos</h4>
          <ul>
            <li>Panificación, quesos, yogures y bebidas fermentadas.</li>
            <li>Biocombustibles: etanol a partir de caña de azúcar o maíz.</li>
            <li>Biodigestores: bacterias que trabajan sin oxígeno producen biogás (metano).</li>
            <li>Medicamentos producidos por microorganismos, como algunos antibióticos.</li>
          </ul>
        `,
        actividades: [
          { pregunta: "La molécula que las células usan como «moneda» de energía es el:", opciones: ["ATP", "ADN", "CO₂", "Almidón"], correcta: "ATP", explicacion: "Se produce al degradar la glucosa." },
          { pregunta: "¿Dónde ocurre la glucólisis?", opciones: ["En el citoplasma", "En el núcleo", "En el cloroplasto", "En la pared celular"], correcta: "En el citoplasma", explicacion: "No necesita oxígeno." },
          { pregunta: "La mayor parte del ATP se produce en:", opciones: ["La glucólisis", "La cadena transportadora de electrones", "La fermentación", "El núcleo"], correcta: "La cadena transportadora de electrones", explicacion: "Ocurre en la membrana interna de la mitocondria." },
          { pregunta: "La fermentación que hace esponjar el pan es:", opciones: ["Láctica", "Alcohólica", "Acética", "Aerobia"], correcta: "Alcohólica", explicacion: "Las levaduras producen CO₂, que forma burbujas en la masa." },
          { pregunta: "El sabor agrio del pozol fermentado se debe a la producción de:", opciones: ["Ácido láctico", "Oxígeno", "Sal", "Etanol puro"], correcta: "Ácido láctico", explicacion: "Lo producen bacterias en la fermentación láctica." }
        ]
      }
    ]
  },

  5: {
    titulo: "Del átomo al universo. Fuerza y Energía",
    subtitulo: "Ciencias Naturales, Experimentales y Tecnología V",
    semestre: "Quinto Semestre",
    clase: "s5",
    icono: "🪐",
    descripcion: "Movimiento, leyes de Newton, gravitación, ondas, luz, fluidos, electromagnetismo y física moderna.",
    contexto: "Del colectivo que sube a los Altos al cielo estrellado de la selva: la física explica tu realidad inmediata. Los temas con 📎 son compartidos con el módulo de Física.",
    temas: [
            {
        id: "cn5-2",
        proposito: "Propósito formativo 1",
        estudio: "fisica:f1-2",
        titulo: "Cinemática",
        icono: "🚗",
        imagen: "linear-gradient(135deg, #10b981, #059669)",
        contenido: `
          <div class="formula">
MRU: v = d / t<br>
MRUA: v = v₀ + a·t<br>
d = v₀·t + ½·a·t²<br>
Caída libre: v = g·t (g = 9.8 m/s²)
          </div>
          <div class="ejemplo">
            Auto a 20 m/s durante 5 s → d = 100 m
          </div>
        `,
        actividades: [
          { pregunta: "Si un auto viaja a 20 m/s durante 5 s, recorre:", opciones: ["50 m", "100 m", "4 m", "25 m"], correcta: "100 m", explicacion: "d = v × t = 20 × 5 = 100." },
          { pregunta: "¿Qué mide la velocidad?", opciones: ["Distancia / tiempo", "Masa / volumen", "Fuerza / área", "Trabajo / tiempo"], correcta: "Distancia / tiempo", explicacion: "Es la rapidez del movimiento." },
          { pregunta: "En la caída libre, la aceleración es:", opciones: ["0", "9.8 m/s²", "20 m/s²", "Depende de la masa"], correcta: "9.8 m/s²", explicacion: "Es la gravedad." },
          { pregunta: "Si un objeto acelera, su velocidad:", opciones: ["Es constante", "Cambia", "Es cero", "Es negativa"], correcta: "Cambia", explicacion: "Eso significa acelerar." },
          { pregunta: "La fórmula de la distancia en MRU es:", opciones: ["d = v + t", "d = v × t", "d = v / t", "d = t / v"], correcta: "d = v × t", explicacion: "Velocidad por tiempo." }
        ]
      },
            {
        id: "cn5-1",
        proposito: "Propósito formativo 1 y 2",
        estudio: "fisica:f1-4",
        titulo: "Fuerza y Movimiento",
        icono: "🏃",
        imagen: "linear-gradient(135deg, #0ea5e9, #0284c7)",
        contenido: `
          <h4>Leyes de Newton</h4>
          <ol>
            <li><strong>Inercia:</strong> reposo o MRU si F=0</li>
            <li><strong>Fuerza:</strong> F = m·a</li>
            <li><strong>Acción-Reacción</strong></li>
          </ol>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> F = 20 N sobre 5 kg → a = 4 m/s²
          </div>
        `,
        actividades: [
          { pregunta: "La 2da Ley de Newton dice que F es igual a:", opciones: ["m + a", "m × a", "m / a", "a / m"], correcta: "m × a", explicacion: "Fuerza = masa por aceleración." },
          { pregunta: "Si empujas un objeto de 10 kg con 50 N, su aceleración es:", opciones: ["5 m/s²", "500 m/s²", "0.2 m/s²", "10 m/s²"], correcta: "5 m/s²", explicacion: "a = F/m = 50/10 = 5." },
          { pregunta: "La ley de la inercia dice que un cuerpo en reposo:", opciones: ["Se mueve solo", "Permanece en reposo", "Explota", "Cae"], correcta: "Permanece en reposo", explicacion: "A menos que actúe una fuerza." },
          { pregunta: "A toda acción corresponde una:", opciones: ["Reacción", "Aceleración", "Fuerza nula", "Inercia"], correcta: "Reacción", explicacion: "3ra Ley de Newton." },
          { pregunta: "El peso de un objeto es:", opciones: ["Su masa", "m × g", "m / g", "Su volumen"], correcta: "m × g", explicacion: "Es la fuerza de la gravedad." }
        ]
      },
      { ref: "fisica:fx5-1", proposito: "Propósito formativo 3" },
            {
        id: "cn5-4",
        proposito: "Propósito formativo 4",
        estudio: "fisica:fx5-2",
        titulo: "Ondas y Sonido",
        icono: "🌊",
        imagen: "linear-gradient(135deg, #06b6d4, #0891b2)",
        contenido: `
          <div class="formula">v = λ · f</div>
          <h4>Tipos</h4>
          <ul>
            <li>Mecánicas: necesitan medio (sonido)</li>
            <li>Electromagnéticas: no necesitan medio (luz)</li>
          </ul>
          <h4>Fenómenos</h4>
          <ul>
            <li>Reflexión, refracción, difracción, interferencia</li>
          </ul>
        `,
        actividades: [
          { pregunta: "El sonido es una onda:", opciones: ["Electromagnética", "Mecánica", "Luminosa", "Nuclear"], correcta: "Mecánica", explicacion: "Necesita un medio (aire)." },
          { pregunta: "La luz es una onda:", opciones: ["Mecánica", "Electromagnética", "Sonora", "De gravedad"], correcta: "Electromagnética", explicacion: "Viaja en el vacío." },
          { pregunta: "La fórmula de la velocidad de onda es:", opciones: ["v = λ / f", "v = λ · f", "v = f / λ", "v = λ + f"], correcta: "v = λ · f", explicacion: "Longitud de onda por frecuencia." },
          { pregunta: "El eco es un fenómeno de:", opciones: ["Refracción", "Reflexión", "Difracción", "Interferencia"], correcta: "Reflexión", explicacion: "El sonido rebota." },
          { pregunta: "¿En qué medio viaja más rápido el sonido?", opciones: ["Aire", "Agua", "Acero", "Vacío"], correcta: "Acero", explicacion: "Los sólidos transmiten mejor las vibraciones." }
        ]
      },
      { ref: "fisica:fx5-3", proposito: "Propósito formativo 5" },
            {
        id: "cn5-5",
        proposito: "Propósito formativo 6",
        estudio: "fisica:f2-1",
        titulo: "Hidrostática y Fluidos",
        icono: "💧",
        imagen: "linear-gradient(135deg, #3b82f6, #2563eb)",
        contenido: `
          <div class="formula">
Pascal: P₁ = P₂ → F₁/A₁ = F₂/A₂<br>
Arquímedes: E = ρ · g · V<br>
Presión hidrostática: P = ρ · g · h
          </div>
          <div class="ejemplo">
            <strong>Contexto:</strong> Presas hidroeléctricas de Chiapas (Chicoasén, Malpaso).
          </div>
        `,
        actividades: [
          { pregunta: "El principio de Arquímedes explica:", opciones: ["La gravedad", "La flotación", "La electricidad", "El magnetismo"], correcta: "La flotación", explicacion: "El empuje del agua." },
          { pregunta: "La presión hidrostática aumenta con:", opciones: ["La altura", "La profundidad", "La masa", "El volumen"], correcta: "La profundidad", explicacion: "P = ρgh." },
          { pregunta: "¿Qué principio usan las prensas hidráulicas?", opciones: ["Pascal", "Arquímedes", "Newton", "Ohm"], correcta: "Pascal", explicacion: "La presión se transmite igual." },
          { pregunta: "La presión se mide en:", opciones: ["Newtons", "Pascales", "Joules", "Watts"], correcta: "Pascales", explicacion: "1 Pa = 1 N/m²." },
          { pregunta: "Si un objeto es más denso que el agua:", opciones: ["Flota", "Se hunde", "Se evapora", "Explota"], correcta: "Se hunde", explicacion: "Su peso supera el empuje." }
        ]
      },
            {
        id: "cn5-3",
        proposito: "Propósito formativo 7",
        estudio: "fisica:f2-4",
        titulo: "Electricidad y Magnetismo",
        icono: "🧲",
        imagen: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        contenido: `
          <h4>Ley de Ohm</h4>
          <div class="formula">V = I · R</div>
          <h4>Ley de Coulomb</h4>
          <div class="formula">F = k · q₁·q₂ / r²</div>
          <h4>Potencia eléctrica</h4>
          <div class="formula">P = V · I</div>
          <div class="ejemplo">
            <strong>Contexto:</strong> Instalaciones eléctricas en comunidades rurales de Chiapas.
          </div>
        `,
        actividades: [
          { pregunta: "La Ley de Ohm relaciona:", opciones: ["Masa y fuerza", "Voltaje, corriente y resistencia", "Energía y trabajo", "Calor y temperatura"], correcta: "Voltaje, corriente y resistencia", explicacion: "V = I × R." },
          { pregunta: "Si V=12V y R=4Ω, la corriente es:", opciones: ["3 A", "48 A", "0.33 A", "8 A"], correcta: "3 A", explicacion: "I = V/R = 12/4 = 3." },
          { pregunta: "La potencia eléctrica se mide en:", opciones: ["Volts", "Amperes", "Watts", "Ohms"], correcta: "Watts", explicacion: "P = V × I." },
          { pregunta: "¿Qué genera un campo magnético?", opciones: ["Cargas en reposo", "Cargas en movimiento", "La gravedad", "El calor"], correcta: "Cargas en movimiento", explicacion: "Corriente eléctrica." },
          { pregunta: "La ley que mide la fuerza entre cargas es:", opciones: ["Newton", "Ohm", "Coulomb", "Watt"], correcta: "Coulomb", explicacion: "F = k(q1q2)/r²." }
        ]
      },
            {
        id: "cn5-6",
        proposito: "Propósito formativo 8",
        estudio: "fisica:fx5-4",
        titulo: "El Universo y sus Fenómenos",
        icono: "🚀",
        imagen: "linear-gradient(135deg, #f43f5e, #e11d48)",
        contenido: `
          <h4>Teoría del Big Bang</h4>
          <p>Hace ~13,800 millones de años.</p>
          <h4>Cuerpos celestes</h4>
          <ul>
            <li>Estrellas, planetas, satélites</li>
            <li>Galaxias (Vía Láctea)</li>
            <li>Agujeros negros</li>
          </ul>
        `,
        actividades: [
          { pregunta: "La teoría más aceptada del origen del universo es:", opciones: ["Creacionismo", "Big Bang", "Big Crunch", "Estado estacionario"], correcta: "Big Bang", explicacion: "Una gran explosión inicial." },
          { pregunta: "Nuestra galaxia se llama:", opciones: ["Andrómeda", "Vía Láctea", "Sombrero", "Triángulo"], correcta: "Vía Láctea", explicacion: "Donde está el Sistema Solar." },
          { pregunta: "Un agujero negro tiene gravedad:", opciones: ["Débil", "Normal", "Extremadamente fuerte", "Cero"], correcta: "Extremadamente fuerte", explicacion: "Ni la luz escapa." },
          { pregunta: "El Sol es una:", opciones: ["Planeta", "Estrella", "Galaxia", "Cometa"], correcta: "Estrella", explicacion: "Es nuestra estrella principal." },
          { pregunta: "¿Cuántos planetas hay en el Sistema Solar?", opciones: ["7", "8", "9", "10"], correcta: "8", explicacion: "Plutón es planeta enano." }
        ]
      }
    ]
  },

  6: {
    titulo: "¿Qué es la vida? Evolución y diversidad biológica",
    subtitulo: "Ciencias Naturales, Experimentales y Tecnología VI",
    semestre: "Sexto Semestre",
    clase: "s6",
    icono: "🧬",
    descripcion: "El origen de la vida, la célula, el ADN, la división celular, la herencia, la evolución y la diversidad biológica.",
    contexto: "Del maíz que los pueblos mesoamericanos domesticaron a partir del teocintle a la enorme biodiversidad de la Selva Lacandona: la vida en Chiapas es un laboratorio de evolución.",
    temas: [
      {
        id: "cnx6-1",
        proposito: "Propósito formativo 1",
        titulo: "El Origen de la Vida",
        icono: "🌋",
        imagen: "linear-gradient(135deg, #b45309, #0ea5e9)",
        contenido: `
          <h4>Teorías sobre el origen de la vida</h4>
          <table class="tabla-estudio">
            <tr><th>Teoría</th><th>Idea principal</th><th>¿Qué pasó con ella?</th></tr>
            <tr><td><strong>Creacionismo</strong></td><td>Un ser divino creó la vida</td><td>Es una creencia religiosa; no se puede comprobar con el método científico</td></tr>
            <tr><td><strong>Generación espontánea</strong></td><td>La vida surge sola de la materia sin vida (gusanos de la carne podrida)</td><td>Refutada por Francesco Redi (1668) y Louis Pasteur (1862), con su matraz de cuello de cisne</td></tr>
            <tr><td><strong>Panspermia</strong></td><td>La vida llegó del espacio en meteoritos</td><td>No explica cómo surgió la vida originalmente</td></tr>
            <tr><td><strong>Quimiosintética</strong></td><td>La vida surgió de reacciones químicas en la Tierra primitiva</td><td>Es la más aceptada por la ciencia</td></tr>
          </table>

          <h4>La teoría quimiosintética de Oparin y Haldane</h4>
          <p>Aleksandr Oparin (1924) y J. B. S. Haldane (1929) propusieron que en la Tierra primitiva, con una atmósfera sin oxígeno, la energía de los rayos, los volcanes y la radiación ultravioleta hizo reaccionar los gases simples. Se formaron moléculas orgánicas que se acumularon en los océanos (la «sopa primitiva») y se agruparon en gotitas llamadas <strong>coacervados</strong>, precursoras de las primeras células.</p>
          <p>La <strong>quimiosíntesis</strong> es la formación de compuestos orgánicos a partir de sustancias inorgánicas mediante reacciones químicas.</p>

          <h4>El experimento de Miller-Urey (1953)</h4>
          <figure class="diagrama-quimica">
            <img src="images/ciencias/miller-urey.svg" alt="Aparato del experimento de Miller-Urey" loading="lazy">
            <figcaption>Stanley Miller y Harold Urey simularon la atmósfera primitiva (metano, amoniaco, hidrógeno y vapor de agua) y la sometieron a chispas eléctricas, como rayos. En pocos días se formaron <strong>aminoácidos</strong>, las piezas de las proteínas. Fue la primera prueba experimental de la teoría de Oparin-Haldane.</figcaption>
          </figure>
        `,
        actividades: [
          { pregunta: "¿Quién refutó la generación espontánea con el matraz de cuello de cisne?", opciones: ["Pasteur", "Darwin", "Mendel", "Oparin"], correcta: "Pasteur", explicacion: "Demostró que la vida solo proviene de vida." },
          { pregunta: "La teoría más aceptada por la ciencia sobre el origen de la vida es la:", opciones: ["Generación espontánea", "Quimiosintética", "Panspermia", "Creacionista"], correcta: "Quimiosintética", explicacion: "Propuesta por Oparin y Haldane." },
          { pregunta: "En el experimento de Miller-Urey se formaron:", opciones: ["Células completas", "Aminoácidos", "Dinosaurios", "Oxígeno"], correcta: "Aminoácidos", explicacion: "Son las piezas de las proteínas." },
          { pregunta: "En el experimento de Miller-Urey, las chispas eléctricas simulaban:", opciones: ["Los rayos", "El agua", "El Sol de noche", "Los volcanes de hielo"], correcta: "Los rayos", explicacion: "Aportaban la energía para las reacciones." },
          { pregunta: "La panspermia propone que la vida:", opciones: ["Llegó del espacio", "Surgió de la carne", "Fue creada en un laboratorio", "No existe"], correcta: "Llegó del espacio", explicacion: "Pero no explica cómo se originó." }
        ]
      },
      {
        id: "cnx6-2",
        proposito: "Propósito formativo 2",
        titulo: "El Descubrimiento de la Célula y la Teoría Celular",
        icono: "🔍",
        imagen: "linear-gradient(135deg, #0d9488, #84cc16)",
        contenido: `
          <h4>Una historia contada con microscopios</h4>
          <ul class="linea-tiempo">
            <li><strong>1665 · Robert Hooke:</strong> observó una lámina de corcho con un microscopio y vio pequeñas cavidades que llamó «células» (celdas).</li>
            <li><strong>1674 · Anton van Leeuwenhoek:</strong> con microscopios que él mismo fabricó, observó por primera vez microorganismos vivos en una gota de agua; los llamó «animálculos».</li>
            <li><strong>1838 · Matthias Schleiden:</strong> concluyó que todas las plantas están formadas por células.</li>
            <li><strong>1839 · Theodor Schwann:</strong> concluyó lo mismo para los animales.</li>
            <li><strong>1855 · Rudolf Virchow:</strong> afirmó que toda célula proviene de otra célula («omnis cellula e cellula»).</li>
          </ul>

          <h4>Los postulados de la teoría celular</h4>
          <ol>
            <li>Todos los seres vivos están formados por una o más <strong>células</strong>.</li>
            <li>La célula es la <strong>unidad estructural y funcional</strong> de los seres vivos.</li>
            <li>Toda célula <strong>proviene de otra célula</strong> preexistente.</li>
            <li>La célula contiene la <strong>información hereditaria</strong> (ADN) que pasa a las nuevas células.</li>
          </ol>
          <div class="ejemplo">
            <strong>La tecnología impulsa la ciencia:</strong> sin el microscopio, la célula no se habría descubierto. Hoy los microscopios electrónicos permiten ver estructuras miles de veces más pequeñas que las que vio Hooke.
          </div>
        `,
        actividades: [
          { pregunta: "¿Quién usó por primera vez la palabra «célula» al observar corcho?", opciones: ["Robert Hooke", "Charles Darwin", "Gregor Mendel", "Louis Pasteur"], correcta: "Robert Hooke", explicacion: "Lo hizo en 1665." },
          { pregunta: "El primero en observar microorganismos vivos fue:", opciones: ["Leeuwenhoek", "Virchow", "Schwann", "Newton"], correcta: "Leeuwenhoek", explicacion: "Los llamó «animálculos»." },
          { pregunta: "«Toda célula proviene de otra célula» lo afirmó:", opciones: ["Virchow", "Hooke", "Schleiden", "Lamarck"], correcta: "Virchow", explicacion: "En 1855." },
          { pregunta: "Según la teoría celular, la unidad estructural y funcional de los seres vivos es:", opciones: ["El átomo", "La célula", "El órgano", "El tejido"], correcta: "La célula", explicacion: "Todos los seres vivos están formados por células." },
          { pregunta: "Schleiden y Schwann concluyeron que:", opciones: ["Plantas y animales están formados por células", "Los virus son células", "La vida surge espontáneamente", "Las células no tienen núcleo"], correcta: "Plantas y animales están formados por células", explicacion: "Schleiden estudió plantas y Schwann, animales." }
        ]
      },
            {
        id: "cn6-1",
        proposito: "Propósito formativo 3",
        estudio: "ciencias:cn6-1",
        titulo: "La Célula: Estructura y Función",
        icono: "🔵",
        imagen: "linear-gradient(135deg, #10b981, #059669)",
        contenido: `
          <h4>Tipos</h4>
          <ul>
            <li><strong>Procariota:</strong> sin núcleo (bacterias)</li>
            <li><strong>Eucariota:</strong> con núcleo</li>
          </ul>
          <h4>Organelos</h4>
          <ul>
            <li>Mitocondria → respiración</li>
            <li>Ribosoma → proteínas</li>
            <li>Cloroplasto → fotosíntesis</li>
            <li>Núcleo → ADN</li>
          </ul>
        `,
        actividades: [
          { pregunta: "La unidad básica de la vida es:", opciones: ["El átomo", "La célula", "El tejido", "El órgano"], correcta: "La célula", explicacion: "Todos los seres vivos están formados por células." },
          { pregunta: "Las células sin núcleo se llaman:", opciones: ["Eucariotas", "Procariotas", "Animales", "Vegetales"], correcta: "Procariotas", explicacion: "Ejemplo: las bacterias." },
          { pregunta: "El organelo que produce energía es:", opciones: ["Núcleo", "Ribosoma", "Mitocondria", "Cloroplasto"], correcta: "Mitocondria", explicacion: "Realiza la respiración celular." },
          { pregunta: "El cloroplasto es exclusivo de:", opciones: ["Animales", "Plantas", "Bacterias", "Hongos"], correcta: "Plantas", explicacion: "Realiza la fotosíntesis." },
          { pregunta: "El ADN se encuentra en:", opciones: ["La membrana", "El núcleo", "El citoplasma", "La pared"], correcta: "El núcleo", explicacion: "Es el material genético." }
        ]
      },
      {
        id: "cnx6-3",
        proposito: "Propósito formativo 4",
        titulo: "ADN, ARN y Cromosomas",
        icono: "🧬",
        imagen: "linear-gradient(135deg, #2563eb, #dc2626)",
        contenido: `
          <h4>Herencia y genes</h4>
          <p>La <strong>herencia biológica</strong> es la transmisión de características de padres a hijos. Un <strong>gen</strong> es un fragmento de ADN con la información para una característica o para fabricar una proteína.</p>

          <h4>La estructura del ADN</h4>
          <figure class="diagrama-quimica">
            <img src="images/ciencias/adn.svg" alt="Doble hélice del ADN" loading="lazy">
            <figcaption>El ADN es una <strong>doble hélice</strong>: dos cadenas enrolladas, unidas por pares de bases. La adenina siempre se une con la timina (A–T) y la guanina con la citosina (G–C).</figcaption>
          </figure>
          <p>Su estructura fue descrita en 1953 por James Watson y Francis Crick, gracias a la imagen de rayos X («Fotografía 51») obtenida por <strong>Rosalind Franklin</strong>.</p>
          <p>Cada unidad del ADN es un <strong>nucleótido</strong>, formado por un fosfato, un azúcar (desoxirribosa) y una base nitrogenada (A, T, G o C).</p>

          <h4>ADN y ARN</h4>
          <table class="tabla-estudio">
            <tr><th></th><th>ADN</th><th>ARN</th></tr>
            <tr><td>Azúcar</td><td>Desoxirribosa</td><td>Ribosa</td></tr>
            <tr><td>Bases</td><td>A, T, G, C</td><td>A, <strong>U</strong> (uracilo), G, C</td></tr>
            <tr><td>Cadenas</td><td>Dos (doble hélice)</td><td>Una</td></tr>
            <tr><td>Función</td><td>Guarda la información genética</td><td>Lleva la información para fabricar proteínas (ARN mensajero, de transferencia y ribosomal)</td></tr>
          </table>

          <h4>Los cromosomas</h4>
          <ul>
            <li>El ADN se enrolla y se compacta en <strong>cromosomas</strong> dentro del núcleo.</li>
            <li>Las personas tenemos <strong>46 cromosomas (23 pares)</strong>: 22 pares de autosomas y 1 par de cromosomas sexuales (XX en mujeres, XY en hombres).</li>
            <li>La mitad de tus cromosomas vienen de tu madre y la otra mitad de tu padre.</li>
          </ul>

          <h4>El ADN como herramienta de análisis genético</h4>
          <p>Pruebas de paternidad, identificación de personas desaparecidas, investigación forense, diagnóstico de enfermedades hereditarias y pruebas como la PCR para detectar virus.</p>
        `,
        actividades: [
          { pregunta: "En el ADN, la adenina (A) siempre se une con la:", opciones: ["Guanina", "Timina", "Citosina", "Uracilo"], correcta: "Timina", explicacion: "Los pares son A–T y G–C." },
          { pregunta: "¿Qué base tiene el ARN en lugar de la timina?", opciones: ["Uracilo", "Adenina", "Guanina", "Citosina"], correcta: "Uracilo", explicacion: "Además, el ARN tiene una sola cadena." },
          { pregunta: "¿Cuántos cromosomas tiene una célula humana del cuerpo?", opciones: ["23", "46", "12", "100"], correcta: "46", explicacion: "Son 23 pares." },
          { pregunta: "La imagen de rayos X que ayudó a descubrir la doble hélice fue obtenida por:", opciones: ["Rosalind Franklin", "Marie Curie", "Lynn Margulis", "Ada Lovelace"], correcta: "Rosalind Franklin", explicacion: "Su «Fotografía 51» fue clave." },
          { pregunta: "Un gen es:", opciones: ["Un fragmento de ADN con información para una característica", "Un tipo de célula", "Un órgano", "Una proteína del músculo"], correcta: "Un fragmento de ADN con información para una característica", explicacion: "Los genes están en los cromosomas." }
        ]
      },
      {
        id: "cnx6-4",
        proposito: "Propósito formativo 5",
        titulo: "Mitosis y Meiosis",
        icono: "🔀",
        imagen: "linear-gradient(135deg, #f59e0b, #7c3aed)",
        contenido: `
          <h4>Mitosis: copias idénticas</h4>
          <figure class="diagrama-quimica">
            <img src="images/ciencias/mitosis.svg" alt="Fases de la mitosis" loading="lazy">
            <figcaption><strong>Profase:</strong> los cromosomas se condensan. <strong>Metafase:</strong> se alinean en el centro. <strong>Anafase:</strong> las copias se separan hacia los polos. <strong>Telofase:</strong> se forman dos núcleos y la célula se divide (citocinesis).</figcaption>
          </figure>
          <p>De una célula se obtienen <strong>dos células idénticas</strong>, con el mismo número de cromosomas (46 en humanos). Sirve para crecer, reparar tejidos (cuando cicatriza una herida) y para la reproducción asexual (un esqueje de una planta).</p>

          <h4>Meiosis: las células sexuales</h4>
          <p>La meiosis tiene <strong>dos divisiones</strong> seguidas y produce <strong>cuatro células</strong> con la <strong>mitad de cromosomas</strong> (23 en humanos): los <strong>gametos</strong> (óvulos y espermatozoides). Al unirse en la fecundación, se recupera el número completo: 23 + 23 = 46.</p>
          <p>Durante la meiosis los cromosomas intercambian fragmentos (<strong>entrecruzamiento</strong>). Esta <strong>recombinación genética</strong> hace que cada gameto sea único: por eso los hermanos no son idénticos (salvo los gemelos idénticos) y existe tanta diversidad biológica.</p>

          <table class="tabla-estudio">
            <tr><th></th><th>Mitosis</th><th>Meiosis</th></tr>
            <tr><td>Divisiones</td><td>Una</td><td>Dos</td></tr>
            <tr><td>Células que produce</td><td>2 idénticas</td><td>4 diferentes</td></tr>
            <tr><td>Cromosomas</td><td>Igual que la original (46)</td><td>La mitad (23)</td></tr>
            <tr><td>Función</td><td>Crecimiento y reparación</td><td>Formar gametos; diversidad</td></tr>
          </table>

          <h4>Situaciones donde está implicada la división celular</h4>
          <ul>
            <li><strong>Cáncer:</strong> células que se dividen sin control por errores en su ADN.</li>
            <li><strong>Síndrome de Down:</strong> un error en la meiosis deja una copia extra del cromosoma 21 (trisomía 21).</li>
            <li><strong>Regeneración:</strong> la piel se renueva constantemente gracias a la mitosis.</li>
          </ul>
        `,
        actividades: [
          { pregunta: "La mitosis produce:", opciones: ["Dos células idénticas", "Cuatro células diferentes", "Gametos", "Una sola célula"], correcta: "Dos células idénticas", explicacion: "Con el mismo número de cromosomas." },
          { pregunta: "Los gametos (óvulos y espermatozoides) se forman por:", opciones: ["Mitosis", "Meiosis", "Fotosíntesis", "Fermentación"], correcta: "Meiosis", explicacion: "Tienen la mitad de los cromosomas." },
          { pregunta: "La fase en la que los cromosomas se alinean en el centro de la célula es la:", opciones: ["Profase", "Metafase", "Anafase", "Telofase"], correcta: "Metafase", explicacion: "Después, en la anafase, se separan." },
          { pregunta: "¿Cuántos cromosomas tiene un gameto humano?", opciones: ["46", "23", "92", "12"], correcta: "23", explicacion: "Al unirse dos gametos se forman 46." },
          { pregunta: "La recombinación genética durante la meiosis es importante porque:", opciones: ["Genera diversidad biológica", "Hace células idénticas", "Detiene la división", "Elimina el ADN"], correcta: "Genera diversidad biológica", explicacion: "Por eso cada gameto es único." }
        ]
      },
            {
        id: "cn6-2",
        proposito: "Propósito formativo 6",
        estudio: "ciencias:cn6-2",
        titulo: "Genética y Herencia",
        icono: "🧬",
        imagen: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        contenido: `
          <h4>ADN</h4>
          <p>Doble hélice (Watson y Crick).</p>
          <h4>Leyes de Mendel</h4>
          <ol>
            <li>Uniformidad</li>
            <li>Segregación</li>
            <li>Distribución independiente</li>
          </ol>
          <div class="ejemplo">
            Cruce Aa × Aa → 25% AA, 50% Aa, 25% aa
          </div>
        `,
        actividades: [
          { pregunta: "El material genético es:", opciones: ["ARN", "ADN", "Proteína", "Lípido"], correcta: "ADN", explicacion: "Contiene la información hereditaria." },
          { pregunta: "¿Quiénes descubrieron la doble hélice del ADN?", opciones: ["Mendel y Darwin", "Watson y Crick", "Pasteur y Koch", "Newton y Einstein"], correcta: "Watson y Crick", explicacion: "En 1953." },
          { pregunta: "En un cruce Aa × Aa, ¿qué porcentaje es aa?", opciones: ["0%", "25%", "50%", "75%"], correcta: "25%", explicacion: "Solo uno de cuatro cuadros." },
          { pregunta: "Las leyes de la herencia fueron propuestas por:", opciones: ["Darwin", "Mendel", "Lamarck", "Hooke"], correcta: "Mendel", explicacion: "Con sus experimentos con chícharos." },
          { pregunta: "Un gen es:", opciones: ["Una célula", "Un segmento de ADN", "Una proteína", "Un órgano"], correcta: "Un segmento de ADN", explicacion: "Codifica un rasgo." }
        ]
      },
            {
        id: "cn6-3",
        proposito: "Propósito formativo 7",
        estudio: "ciencias:cn6-3",
        titulo: "Evolución Biológica",
        icono: "🦕",
        imagen: "linear-gradient(135deg, #f59e0b, #d97706)",
        contenido: `
          <h4>Darwin</h4>
          <ul>
            <li>Variación entre individuos</li>
            <li>Selección natural</li>
            <li>Adaptación al medio</li>
          </ul>
          <h4>Evidencias</h4>
          <ul>
            <li>Fósiles, anatomía comparada</li>
            <li>Embriología, biología molecular</li>
          </ul>
        `,
        actividades: [
          { pregunta: "La teoría de la evolución por selección natural fue de:", opciones: ["Mendel", "Darwin", "Newton", "Galileo"], correcta: "Darwin", explicacion: "En su viaje en el Beagle." },
          { pregunta: "La selección natural favorece a los individuos:", opciones: ["Más débiles", "Mejor adaptados", "Más grandes", "Más lentos"], correcta: "Mejor adaptados", explicacion: "Sobreviven y se reproducen." },
          { pregunta: "¿Cuál es una evidencia de la evolución?", opciones: ["Fósiles", "La gravedad", "El clima", "La electricidad"], correcta: "Fósiles", explicacion: "Muestran especies extintas." },
          { pregunta: "La evolución ocurre a lo largo de:", opciones: ["Días", "Años", "Miles o millones de años", "Minutos"], correcta: "Miles o millones de años", explicacion: "Es un proceso lento." },
          { pregunta: "El órgano vestigial humano es:", opciones: ["El corazón", "El apéndice", "El hígado", "El cerebro"], correcta: "El apéndice", explicacion: "Era útil en ancestros herbívoros." }
        ]
      },
            {
        id: "cn6-4",
        proposito: "Propósito formativo 7",
        estudio: "ciencias:cn6-4",
        titulo: "Biodiversidad",
        icono: "🌳",
        imagen: "linear-gradient(135deg, #14b8a6, #0d9488)",
        contenido: `
          <p>México es <strong>megadiverso</strong>: 5° lugar mundial.</p>
          <h4>Niveles</h4>
          <ul><li>Genética, de especies, de ecosistemas</li></ul>
          <h4>Amenazas</h4>
          <ul>
            <li>Deforestación, contaminación</li>
            <li>Cambio climático, especies invasoras</li>
          </ul>
        `,
        actividades: [
          { pregunta: "México ocupa el lugar ___ en biodiversidad mundial:", opciones: ["1°", "3°", "5°", "10°"], correcta: "5°", explicacion: "Es un país megadiverso." },
          { pregunta: "¿Cuántos niveles de biodiversidad hay?", opciones: ["1", "2", "3", "4"], correcta: "3", explicacion: "Genética, especies y ecosistemas." },
          { pregunta: "Una amenaza a la biodiversidad es:", opciones: ["La reforestación", "La deforestación", "El reciclaje", "La conservación"], correcta: "La deforestación", explicacion: "Destruye hábitats." },
          { pregunta: "Las especies invasoras:", opciones: ["Ayudan al ecosistema", "Desplazan a especies nativas", "Son inofensivas", "Son endémicas"], correcta: "Desplazan a especies nativas", explicacion: "Compiten por recursos." },
          { pregunta: "La biodiversidad genética se refiere a:", opciones: ["Variedad de ecosistemas", "Variedad de genes", "Variedad de especies", "Variedad de climas"], correcta: "Variedad de genes", explicacion: "Diferencias dentro de una especie." }
        ]
      },
            {
        id: "cn6-5",
        proposito: "Complementario · Ecosistemas de Chiapas",
        titulo: "Ecosistemas de Chiapas",
        icono: "🌴",
        imagen: "linear-gradient(135deg, #22c55e, #16a34a)",
        contenido: `
          <h4>Ecosistemas</h4>
          <ul>
            <li>Selva alta perennifolia: Selva Lacandona</li>
            <li>Selva baja caducifolia: Depresión Central</li>
            <li>Bosque de niebla: Altos de Chiapas</li>
            <li>Manglares: Costa del Pacífico</li>
          </ul>
          <div class="ejemplo">
            La Selva Lacandona alberga el 20% de las especies de México.
          </div>
        `,
        actividades: [
          { pregunta: "La Selva Lacandona es un ejemplo de:", opciones: ["Manglar", "Selva alta perennifolia", "Desierto", "Bosque de niebla"], correcta: "Selva alta perennifolia", explicacion: "Es húmeda y siempre verde." },
          { pregunta: "El bosque de niebla se ubica en:", opciones: ["La costa", "Los Altos de Chiapas", "La selva", "El mar"], correcta: "Los Altos de Chiapas", explicacion: "Zonas montañosas húmedas." },
          { pregunta: "Los manglares están en:", opciones: ["La costa del Pacífico", "La selva", "La montaña", "El desierto"], correcta: "La costa del Pacífico", explicacion: "Zonas costeras tropicales." },
          { pregunta: "La selva baja caducifolia está en:", opciones: ["Depresión Central", "Altos de Chiapas", "Costa", "Norte"], correcta: "Depresión Central", explicacion: "Pierde hojas en sequía." },
          { pregunta: "¿Qué porcentaje de especies de México alberga la Selva Lacandona?", opciones: ["5%", "10%", "20%", "50%"], correcta: "20%", explicacion: "Es un hotspot de biodiversidad." }
        ]
      },
      {
        id: "cnx6-5",
        proposito: "Propósito formativo 8",
        titulo: "¿Qué es un Ser Vivo? Biotecnología",
        icono: "🦠",
        imagen: "linear-gradient(135deg, #059669, #db2777)",
        contenido: `
          <h4>Características que identifican a los seres vivos</h4>
          <table class="tabla-estudio">
            <tr><th>Característica</th><th>Ejemplo</th></tr>
            <tr><td>Están formados por <strong>células</strong></td><td>Una bacteria (una célula) o un jaguar (billones)</td></tr>
            <tr><td>Tienen <strong>metabolismo</strong>: obtienen y usan energía</td><td>La planta hace fotosíntesis; tú respiras</td></tr>
            <tr><td>Mantienen su equilibrio interno (<strong>homeostasis</strong>)</td><td>Sudas para regular tu temperatura</td></tr>
            <tr><td><strong>Crecen y se desarrollan</strong></td><td>Una semilla de maíz se convierte en planta</td></tr>
            <tr><td>Se <strong>reproducen</strong></td><td>Sexual o asexualmente</td></tr>
            <tr><td><strong>Responden a estímulos</strong></td><td>La planta se inclina hacia la luz</td></tr>
            <tr><td>Se <strong>adaptan y evolucionan</strong></td><td>Las bacterias se vuelven resistentes a los antibióticos</td></tr>
          </table>
          <div class="ejemplo">
            <strong>¿Y los virus?</strong> No tienen células ni metabolismo propio: solo se reproducen dentro de una célula. Por eso muchos científicos los consideran en la frontera entre lo vivo y lo no vivo.
          </div>

          <h4>Biotecnología: usar seres vivos para resolver problemas</h4>
          <ul>
            <li><strong>Tradicional:</strong> fermentar el pozol, hacer pan o queso, injertar cafetos, seleccionar las mejores semillas de maíz.</li>
            <li><strong>Moderna:</strong>
              <ul>
                <li>Desde 1982 la <strong>insulina</strong> para personas con diabetes se produce con bacterias modificadas genéticamente.</li>
                <li><strong>Vacunas</strong>, incluidas las de ARN mensajero.</li>
                <li><strong>Cultivo de tejidos</strong> para reproducir plantas sanas (por ejemplo, plátano o café).</li>
                <li><strong>Edición genética</strong> (CRISPR, desarrollada en 2012) para investigar y tratar enfermedades.</li>
              </ul>
            </li>
          </ul>
          <div class="ejemplo">
            <strong>Para debatir:</strong> México es el centro de origen del maíz y protege por ley sus variedades nativas. ¿Qué ventajas y riesgos tiene la biotecnología moderna en la agricultura? ¿Cómo se puede cuidar la diversidad del maíz criollo de las comunidades?
          </div>
        `,
        actividades: [
          { pregunta: "Mantener el equilibrio interno, como regular la temperatura, se llama:", opciones: ["Homeostasis", "Fotosíntesis", "Mitosis", "Evolución"], correcta: "Homeostasis", explicacion: "Por ejemplo, al sudar." },
          { pregunta: "Los virus se consideran en la frontera de lo vivo porque:", opciones: ["No tienen células ni metabolismo propio", "Son muy grandes", "Hacen fotosíntesis", "Tienen muchos órganos"], correcta: "No tienen células ni metabolismo propio", explicacion: "Solo se reproducen dentro de una célula." },
          { pregunta: "Fermentar el pozol es un ejemplo de biotecnología:", opciones: ["Tradicional", "Nuclear", "Espacial", "Digital"], correcta: "Tradicional", explicacion: "Usa microorganismos de forma ancestral." },
          { pregunta: "Desde 1982 la insulina se produce con:", opciones: ["Bacterias modificadas genéticamente", "Petróleo", "Rocas", "Sal de mar"], correcta: "Bacterias modificadas genéticamente", explicacion: "Es un ejemplo de biotecnología moderna." },
          { pregunta: "¿Cuál NO es una característica de los seres vivos?", opciones: ["Reproducirse", "Responder a estímulos", "Estar formados por células", "Estar hechos de metal"], correcta: "Estar hechos de metal", explicacion: "Los seres vivos están formados por células." }
        ]
      },
            {
        id: "cn6-6",
        proposito: "Propósito formativo 8",
        estudio: "ciencias:cn6-6",
        titulo: "Salud y Enfermedad",
        icono: "🏥",
        imagen: "linear-gradient(135deg, #ef4444, #dc2626)",
        contenido: `
          <h4>Sistema inmunológico</h4>
          <p>Barreras físicas, células y anticuerpos.</p>
          <h4>Enfermedades en Chiapas</h4>
          <ul>
            <li>Dengue, zika, chikungunya</li>
            <li>Gastrointestinales, desnutrición</li>
          </ul>
          <div class="ejemplo">
            <strong>Prevención:</strong> Eliminar criaderos, lavar manos, agua potable.
          </div>
        `,
        actividades: [
          { pregunta: "El sistema que nos defiende de enfermedades es:", opciones: ["Digestivo", "Inmunológico", "Respiratorio", "Óseo"], correcta: "Inmunológico", explicacion: "Produce anticuerpos." },
          { pregunta: "¿Qué enfermedad transmite el mosquito Aedes?", opciones: ["Gripe", "Dengue", "Tuberculosis", "Sarampión"], correcta: "Dengue", explicacion: "Es común en zonas cálidas." },
          { pregunta: "Una forma de prevenir el dengue es:", opciones: ["Acumular agua", "Eliminar criaderos", "Comer dulces", "Dormir mucho"], correcta: "Eliminar criaderos", explicacion: "El mosquito se reproduce en agua estancada." },
          { pregunta: "Las enfermedades gastrointestinales se previenen con:", opciones: ["Lavado de manos", "Fumar", "No bañarse", "Comer en la calle"], correcta: "Lavado de manos", explicacion: "Evita infecciones." },
          { pregunta: "La desnutrición se debe a:", opciones: ["Exceso de comida", "Falta de nutrientes", "Mucho ejercicio", "Dormir poco"], correcta: "Falta de nutrientes", explicacion: "El cuerpo no recibe lo necesario." }
        ]
      }
    ]
  },

  7: {
    titulo: "Taller de Ciencias I",
    subtitulo: "La aplicación práctica de la materia y la energía en nuestra vida diaria",
    semestre: "Segundo Semestre",
    clase: "s2",
    icono: "🔬",
    descripcion: "Experimenta con la materia y la energía usando el método 5E y las prácticas de ciencia e ingeniería.",
    contexto: "El taller es tu laboratorio: con materiales de casa y de tu comunidad comprobarás cómo la ciencia y la tecnología están en todo lo que usas, del comal de barro al panel solar.",
    temas: [
            {
        id: "tc1-1",
        proposito: "Introducción · Prácticas de ciencia e ingeniería y método 5E",
        estudio: "ciencias:tc1-1",
        titulo: "La Ciencia como Investigación",
        icono: "🔍",
        imagen: "linear-gradient(135deg, #0ea5e9, #0284c7)",
        contenido: `
          <p>El <strong>Taller de Ciencias</strong> te invita a convertirte en un investigador de tu propio entorno.</p>
          <h4>Prácticas de ciencia e ingeniería</h4>
          <ul>
            <li>Plantear preguntas y definir problemas</li>
            <li>Desarrollar y usar modelos</li>
            <li>Planificar y llevar a cabo investigaciones</li>
            <li>Analizar e interpretar datos</li>
            <li>Usar pensamiento matemático y computacional</li>
            <li>Construir explicaciones y diseñar soluciones</li>
            <li>Argumentar a partir de evidencias</li>
            <li>Obtener, evaluar y comunicar información</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto Chiapas:</strong> En el CEMSaD Sombra Carrizal, estudiantes usaron el cultivo de maíz como eje articulador para aprender el método científico.
          </div>
        `,
        actividades: [
          { pregunta: "El primer paso de una investigación científica es:", opciones: ["Concluir", "Plantear preguntas", "Publicar", "Inventar"], correcta: "Plantear preguntas", explicacion: "Nace de la curiosidad." },
          { pregunta: "¿Qué se hace con los datos obtenidos?", opciones: ["Ignorarlos", "Analizarlos e interpretarlos", "Borrar", "Venderlos"], correcta: "Analizarlos e interpretarlos", explicacion: "Para sacar conclusiones." },
          { pregunta: "Argumentar a partir de evidencias significa:", opciones: ["Inventar", "Usar datos reales", "Copiar", "Adivinar"], correcta: "Usar datos reales", explicacion: "La ciencia se basa en pruebas." },
          { pregunta: "Un modelo científico sirve para:", opciones: ["Adornar", "Explicar un fenómeno", "Vender", "Confundir"], correcta: "Explicar un fenómeno", explicacion: "Simplifica la realidad." },
          { pregunta: "El taller busca vincular la ciencia con:", opciones: ["El espacio", "Tu comunidad", "El pasado", "La ficción"], correcta: "Tu comunidad", explicacion: "Resolver problemas locales." }
        ]
      },
            {
        id: "tc1-2",
        proposito: "Etapa 1 de la progresión",
        estudio: "ciencias:tc1-2",
        titulo: "La Materia en mi Comunidad",
        icono: "🧱",
        imagen: "linear-gradient(135deg, #10b981, #059669)",
        contenido: `
          <p>Explora las propiedades de la materia que te rodea: el suelo, el agua, el aire.</p>
          <h4>Proyecto sugerido: "La basura"</h4>
          <p>Los materiales del COBACH usan la problemática de la basura como eje para estudiar las propiedades de la materia.</p>
          <h4>Actividades prácticas</h4>
          <ul>
            <li>Clasificar residuos según sus propiedades</li>
            <li>Medir densidad de diferentes materiales</li>
            <li>Identificar cambios físicos y químicos en la cocina</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto:</strong> Estudiantes del EMSAD 170 Sombra Carrizal elaboraron invernaderos con materiales reciclables para sembrar café.
          </div>
        `,
        actividades: [
          { pregunta: "Clasificar la basura ayuda a:", opciones: ["Contaminar más", "Reciclar", "Quemar todo", "Enterrarla"], correcta: "Reciclar", explicacion: "Separa plásticos, orgánicos, etc." },
          { pregunta: "¿Qué propiedad permite saber si un material es más pesado?", opciones: ["Color", "Densidad", "Olor", "Sabor"], correcta: "Densidad", explicacion: "Masa por unidad de volumen." },
          { pregunta: "Un cambio químico en la cocina es:", opciones: ["Derretir mantequilla", "Cortar cebolla", "Quemar tortillas", "Servir agua"], correcta: "Quemar tortillas", explicacion: "Cambia la composición." },
          { pregunta: "Hacer un invernadero con material reciclable es un ejemplo de:", opciones: ["Contaminación", "Sustentabilidad", "Desperdicio", "Consumo"], correcta: "Sustentabilidad", explicacion: "Reutiliza recursos." },
          { pregunta: "El suelo es un recurso:", opciones: ["Infinito", "Finito y vital", "Inútil", "Artificial"], correcta: "Finito y vital", explicacion: "Hay que cuidarlo." }
        ]
      },
      {
        id: "tcx1-1",
        proposito: "Etapa 2 de la progresión",
        titulo: "Los Enlaces y los Materiales que Usamos",
        icono: "🍳",
        imagen: "linear-gradient(135deg, #64748b, #f59e0b)",
        contenido: `
          <h4>¿Por qué la olla es de metal y el mango de plástico?</h4>
          <p>Las propiedades de un material dependen de <strong>cómo están unidos sus átomos</strong>. Por eso cada material sirve para algo distinto.</p>
          <table class="tabla-estudio">
            <tr><th>Enlace</th><th>Propiedades</th><th>Materiales y usos</th></tr>
            <tr><td><strong>Metálico</strong></td><td>Conducen calor y electricidad, son maleables y resistentes</td><td>Ollas de aluminio, cables de cobre, varillas de acero para construir</td></tr>
            <tr><td><strong>Iónico</strong></td><td>Duros, quebradizos, resisten altas temperaturas; conducen electricidad solo disueltos</td><td>Sal, cerámica, el comal y las ollas de barro, el cemento</td></tr>
            <tr><td><strong>Covalente</strong></td><td>Muchos son aislantes, ligeros y flexibles</td><td>Plásticos (mangos, cables forrados), madera, hule, fibras de la ropa</td></tr>
          </table>
          <p>La tecnología combina materiales: un cable eléctrico tiene <strong>cobre</strong> por dentro (conduce) y <strong>plástico</strong> por fuera (aísla y protege).</p>

          <h4>🧪 Práctica (método 5E): ¿qué material sirve para qué?</h4>
          <ol>
            <li><strong>Enganchar:</strong> ¿por qué nadie hace un sartén de plástico ni un cable de vidrio?</li>
            <li><strong>Explorar:</strong> con una pila de 9 V, un LED y dos cables prueba qué conduce la electricidad: un clavo, una moneda, un lápiz (la punta de grafito), un palito de madera, agua con sal y agua con azúcar. Dobla un alambre de cobre y un palito: ¿cuál se deforma sin romperse?</li>
            <li><strong>Explicar:</strong> relaciona cada resultado con el tipo de enlace (el agua con sal conduce porque la sal es iónica y libera iones).</li>
            <li><strong>Elaborar:</strong> elige un objeto de tu casa (una licuadora, un machete, un foco) y explica por qué cada parte está hecha de ese material.</li>
            <li><strong>Evaluar:</strong> presenta una tabla con el material, su enlace, su propiedad y su uso.</li>
          </ol>
          <div class="ejemplo"><strong>⚠️ Seguridad:</strong> usa solo pilas, nunca la corriente de la casa.</div>
        `,
        actividades: [
          { pregunta: "Las ollas suelen ser de metal porque los metales:", opciones: ["Conducen bien el calor", "Son aislantes", "Se derriten fácilmente", "Son transparentes"], correcta: "Conducen bien el calor", explicacion: "El enlace metálico permite que el calor pase con facilidad." },
          { pregunta: "El mango de una olla es de plástico o madera porque son:", opciones: ["Buenos conductores", "Aislantes térmicos", "Metales", "Iónicos"], correcta: "Aislantes térmicos", explicacion: "Así no te quemas al tomar la olla." },
          { pregunta: "El agua con sal enciende el LED porque la sal:", opciones: ["Es un metal", "Libera iones al disolverse", "Es un plástico", "Es covalente"], correcta: "Libera iones al disolverse", explicacion: "Los compuestos iónicos conducen electricidad disueltos." },
          { pregunta: "Un comal de barro es un material:", opciones: ["Cerámico, duro y resistente al calor", "Metálico y flexible", "Plástico y ligero", "Líquido"], correcta: "Cerámico, duro y resistente al calor", explicacion: "Por eso no se deforma al ponerlo sobre el fuego." },
          { pregunta: "Un cable eléctrico tiene cobre por dentro y plástico por fuera porque:", opciones: ["El cobre conduce y el plástico aísla", "Los dos conducen", "El plástico conduce mejor", "Es más bonito"], correcta: "El cobre conduce y el plástico aísla", explicacion: "La tecnología combina materiales según sus propiedades." }
        ]
      },
      {
        id: "tcx1-2",
        proposito: "Etapa 3 de la progresión",
        titulo: "La Materia no Desaparece: Conservación y Residuos",
        icono: "♻️",
        imagen: "linear-gradient(135deg, #16a34a, #0891b2)",
        contenido: `
          <h4>«Tirar» la basura no la desaparece</h4>
          <p>Según la <strong>ley de conservación de la materia</strong> (Lavoisier), en un sistema cerrado la masa total no cambia: la materia solo se transforma. La basura que «tiramos» sigue existiendo: termina en un basurero, un río o el mar.</p>
          <table class="tabla-estudio">
            <tr><th>Residuo</th><th>Tiempo aproximado para degradarse</th></tr>
            <tr><td>Cáscaras y restos de comida</td><td>Semanas</td></tr>
            <tr><td>Papel</td><td>Meses</td></tr>
            <tr><td>Lata de aluminio</td><td>Cientos de años</td></tr>
            <tr><td>Botella de plástico PET</td><td>Cientos de años</td></tr>
            <tr><td>Vidrio</td><td>Miles de años</td></tr>
          </table>
          <p>Los tiempos son estimaciones y cambian según las condiciones, pero muestran por qué hay que <strong>gestionar</strong> los residuos: rechazar, reducir, reutilizar, reparar y reciclar.</p>

          <h4>🧪 Práctica (método 5E): ¿se pierde la masa en una reacción?</h4>
          <ol>
            <li><strong>Enganchar:</strong> cuando quemas papel parece que «desaparece». ¿A dónde se va?</li>
            <li><strong>Explorar:</strong> pon dos cucharadas de vinagre en una botella y una cucharadita de bicarbonato dentro de un globo. Coloca el globo en la boca de la botella y pesa todo en una báscula. Levanta el globo para que el bicarbonato caiga y vuelve a pesar. Repite con la botella abierta, sin globo.</li>
            <li><strong>Explicar:</strong> con el globo (sistema cerrado) la masa no cambia; sin globo (sistema abierto) disminuye porque el CO₂ escapa al aire.</li>
            <li><strong>Elaborar:</strong> pesa durante una semana la basura de tu casa y clasifícala: orgánica, reciclable y no reciclable.</li>
            <li><strong>Evaluar:</strong> propone un plan para reducir a la mitad los residuos de tu salón; los orgánicos pueden ir a una composta.</li>
          </ol>
        `,
        actividades: [
          { pregunta: "Según la ley de conservación de la materia, en un sistema cerrado la masa:", opciones: ["Aumenta", "Disminuye", "Permanece constante", "Desaparece"], correcta: "Permanece constante", explicacion: "La materia no se crea ni se destruye, solo se transforma." },
          { pregunta: "En la práctica, la botella sin globo pesa menos al final porque:", opciones: ["El CO₂ escapó al aire", "El vinagre se destruyó", "La báscula falló", "El bicarbonato desapareció"], correcta: "El CO₂ escapó al aire", explicacion: "Es un sistema abierto." },
          { pregunta: "¿Qué residuo tarda más en degradarse?", opciones: ["Cáscara de plátano", "Papel", "Vidrio", "Restos de tortilla"], correcta: "Vidrio", explicacion: "Puede tardar miles de años." },
          { pregunta: "Los restos de comida pueden aprovecharse en una:", opciones: ["Composta", "Fogata", "Botella de PET", "Lata"], correcta: "Composta", explicacion: "Se transforman en abono para el suelo." },
          { pregunta: "La mejor forma de manejar los residuos empieza por:", opciones: ["Reducir lo que generamos", "Quemarlos", "Tirarlos al río", "Enterrarlos en cualquier lugar"], correcta: "Reducir lo que generamos", explicacion: "El residuo que no se genera no contamina." }
        ]
      },
      {
        id: "tcx1-3",
        proposito: "Etapa 4 de la progresión",
        titulo: "Temperatura, Presión y Cambios de Estado en la Tecnología",
        icono: "🫕",
        imagen: "linear-gradient(135deg, #dc2626, #6366f1)",
        contenido: `
          <h4>Dos variables que cambian el estado de la materia</h4>
          <ul>
            <li><strong>Temperatura:</strong> al calentar, las partículas se mueven más y la materia pasa de sólido a líquido y a gas.</li>
            <li><strong>Presión:</strong> a mayor presión, el agua necesita más temperatura para hervir; a menor presión, hierve antes.</li>
          </ul>

          <h4>Tecnologías que aprovechan la temperatura y la presión</h4>
          <table class="tabla-estudio">
            <tr><th>Tecnología</th><th>¿Qué aprovecha?</th></tr>
            <tr><td>Olla de presión</td><td>Al aumentar la presión, el agua hierve por arriba de 100 °C y la comida se cuece más rápido (y se ahorra gas)</td></tr>
            <tr><td>Refrigerador</td><td>Un gas se comprime y se expande; al evaporarse absorbe calor del interior</td></tr>
            <tr><td>Aerosoles y tanques de gas LP</td><td>El gas se guarda líquido a alta presión y sale como gas</td></tr>
            <tr><td>Destiladores</td><td>Evaporan y condensan para separar o purificar líquidos</td></tr>
          </table>

          <h4>🧪 Práctica (método 5E): ¿el agua siempre hierve a 100 °C?</h4>
          <ol>
            <li><strong>Enganchar:</strong> ¿por qué los frijoles tardan más en cocerse en San Cristóbal que en Tuxtla?</li>
            <li><strong>Explorar:</strong> con un termómetro de cocina, mide a qué temperatura hierve el agua en tu comunidad. Después llena una jeringa grande (sin aguja) con un poco de agua tibia, tapa la punta con el dedo y jala el émbolo: ¡el agua tibia hierve!</li>
            <li><strong>Explicar:</strong> al jalar el émbolo baja la presión dentro de la jeringa, y con menos presión el agua hierve a menor temperatura. En las zonas altas hay menos presión atmosférica.</li>
            <li><strong>Elaborar:</strong> compara tu medición con la de compañeros de otras comunidades a distinta altura.</li>
            <li><strong>Evaluar:</strong> explica con un dibujo por qué la olla de presión cuece más rápido.</li>
          </ol>
          <div class="ejemplo"><strong>⚠️ Seguridad:</strong> usa agua tibia, no hirviendo, y siempre con supervisión al manejar fuego.</div>
        `,
        actividades: [
          { pregunta: "En una olla de presión, el agua hierve:", opciones: ["Por arriba de 100 °C", "A 50 °C", "Exactamente a 100 °C siempre", "No hierve"], correcta: "Por arriba de 100 °C", explicacion: "La presión mayor eleva el punto de ebullición." },
          { pregunta: "Al jalar el émbolo de la jeringa tapada, el agua tibia hierve porque:", opciones: ["Baja la presión", "Sube la temperatura", "Entra aire caliente", "Se congela"], correcta: "Baja la presión", explicacion: "Con menos presión, el agua hierve a menor temperatura." },
          { pregunta: "En los Altos de Chiapas el agua hierve a menos de 100 °C porque:", opciones: ["Hay menos presión atmosférica", "Hace más calor", "El agua es diferente", "Hay más oxígeno"], correcta: "Hay menos presión atmosférica", explicacion: "A mayor altura, menos aire encima." },
          { pregunta: "El refrigerador enfría porque un gas, al evaporarse:", opciones: ["Absorbe calor", "Libera luz", "Produce electricidad", "Se vuelve sólido"], correcta: "Absorbe calor", explicacion: "La evaporación necesita energía y la toma del interior." },
          { pregunta: "El gas LP se guarda en los tanques en estado:", opciones: ["Líquido, a alta presión", "Sólido", "Plasma", "Gas a baja presión"], correcta: "Líquido, a alta presión", explicacion: "Al abrir la válvula sale como gas." }
        ]
      },
      {
        id: "tcx1-4",
        proposito: "Etapa 5 de la progresión",
        titulo: "El Ciclo del Agua y la Actividad Humana",
        icono: "💧",
        imagen: "linear-gradient(135deg, #0284c7, #16a34a)",
        contenido: `
          <h4>Los estados del agua en el ciclo hidrológico</h4>
          <p>En el ciclo del agua encontramos los tres estados: <strong>líquido</strong> (ríos, lluvia), <strong>gas</strong> (vapor de agua) y <strong>sólido</strong> (granizo, hielo en las montañas altas). Los cambios de estado dependen de la temperatura y la presión de la atmósfera.</p>

          <h4>La actividad humana modifica el ciclo</h4>
          <ul>
            <li><strong>Deforestación:</strong> sin árboles, el agua escurre rápido, arrastra el suelo y se infiltra menos; los manantiales se secan.</li>
            <li><strong>Pavimento y construcciones:</strong> el agua no se infiltra y provoca inundaciones, como ocurre en algunas colonias de Tuxtla cuando crece el río Sabinal.</li>
            <li><strong>Calentamiento global:</strong> aumenta la evaporación y vuelve más intensas las lluvias y las sequías.</li>
          </ul>
          <p>La tecnología también puede ayudar: captadores de agua de lluvia, presas, plantas potabilizadoras y sistemas de riego por goteo.</p>

          <h4>🧪 Práctica (método 5E): ¿qué pasa con el agua en un suelo sin plantas?</h4>
          <ol>
            <li><strong>Enganchar:</strong> ¿por qué después de la tala aumentan los deslaves en las laderas?</li>
            <li><strong>Explorar:</strong> corta dos botellas de plástico a lo largo y llénalas de tierra; en una siembra pasto o pon hojas y raíces, y deja la otra sin plantas. Inclínalas y vierte la misma cantidad de agua en ambas. Recoge el agua que escurre en dos vasos.</li>
            <li><strong>Explicar:</strong> compara la cantidad y el color del agua: la vegetación retiene el suelo y ayuda a que el agua se infiltre.</li>
            <li><strong>Elaborar:</strong> arma un «ciclo del agua en una bolsa»: una bolsa transparente con un poco de agua pegada a una ventana soleada. Observa durante varios días la evaporación, la condensación y la «lluvia».</li>
            <li><strong>Evaluar:</strong> propone una acción para proteger el agua de tu comunidad.</li>
          </ol>
        `,
        actividades: [
          { pregunta: "En el ciclo del agua, el vapor que forma las nubes está en estado:", opciones: ["Sólido", "Líquido", "Gaseoso", "Plasma"], correcta: "Gaseoso", explicacion: "Al enfriarse se condensa en gotitas." },
          { pregunta: "Al talar un bosque, el agua de lluvia:", opciones: ["Se infiltra más", "Escurre más rápido y arrastra el suelo", "Desaparece", "Se vuelve salada"], correcta: "Escurre más rápido y arrastra el suelo", explicacion: "Las raíces y las hojas retienen el suelo y el agua." },
          { pregunta: "El pavimento de las ciudades provoca inundaciones porque:", opciones: ["El agua no se infiltra", "Atrae la lluvia", "Calienta el agua", "Produce vapor"], correcta: "El agua no se infiltra", explicacion: "Toda el agua corre por la superficie." },
          { pregunta: "En la práctica, el agua que escurre de la botella sin plantas sale más turbia porque:", opciones: ["Arrastra más tierra", "Tiene más oxígeno", "Está más fría", "Tiene azúcar"], correcta: "Arrastra más tierra", explicacion: "Sin vegetación, el suelo se erosiona." },
          { pregunta: "Una tecnología que aprovecha el ciclo del agua es:", opciones: ["El captador de agua de lluvia", "El horno de microondas", "El celular", "El foco LED"], correcta: "El captador de agua de lluvia", explicacion: "Recolecta el agua de la precipitación." }
        ]
      },
            {
        id: "tc1-3",
        proposito: "Etapa 6 de la progresión",
        estudio: "ciencias:tc1-3",
        titulo: "Energía en Acción",
        icono: "⚡",
        imagen: "linear-gradient(135deg, #f59e0b, #d97706)",
        contenido: `
          <p>Investiga cómo la energía se manifiesta en tu comunidad.</p>
          <h4>Progresión 1:</h4>
          <p>"A través de la observación de su contexto, las y los estudiantes identificarán un fenómeno natural de su interés que involucre el flujo de energía en sistemas".</p>
          <h4>Actividades</h4>
          <ul>
            <li>Recorrido por la comunidad para identificar flujos de energía</li>
            <li>Observar el ciclo del agua en tu región</li>
            <li>Analizar cómo se genera la electricidad en Chiapas</li>
          </ul>
        `,
        actividades: [
          { pregunta: "¿Cómo se genera la mayor parte de la electricidad en Chiapas?", opciones: ["Con carbón", "Con presas hidroeléctricas", "Con energía nuclear", "Con placas solares"], correcta: "Con presas hidroeléctricas", explicacion: "El río Grijalva es clave." },
          { pregunta: "El ciclo del agua es un ejemplo de:", opciones: ["Flujo de energía", "Solo lluvia", "Magia", "Materia inerte"], correcta: "Flujo de energía", explicacion: "Usa el calor solar." },
          { pregunta: "Una fuente de energía en tu comunidad podría ser:", opciones: ["El sol", "El humo", "La basura quemada", "El ruido"], correcta: "El sol", explicacion: "Se puede usar con paneles." },
          { pregunta: "Identificar flujos de energía ayuda a:", opciones: ["Ahorrar y cuidar el ambiente", "Gastar más", "Contaminar", "Nada"], correcta: "Ahorrar y cuidar el ambiente", explicacion: "Optimiza su uso." },
          { pregunta: "Las presas hidroeléctricas usan la energía de:", opciones: ["La tierra", "El agua en movimiento", "El viento", "El sol"], correcta: "El agua en movimiento", explicacion: "La fuerza del agua hace girar turbinas." }
        ]
      },
      {
        id: "tcx1-5",
        proposito: "Etapa 7 de la progresión",
        titulo: "Energía que Transforma: Cambios Físicos y Químicos",
        icono: "🕯️",
        imagen: "linear-gradient(135deg, #f97316, #7c3aed)",
        contenido: `
          <h4>La energía cambia la materia</h4>
          <p>El <strong>calor</strong> es energía que pasa de un cuerpo caliente a uno frío. Al recibir energía, la materia puede sufrir:</p>
          <table class="tabla-estudio">
            <tr><th>Cambio físico</th><th>Cambio químico</th></tr>
            <tr><td>Cambia la forma o el estado, pero sigue siendo la misma sustancia</td><td>Se forman sustancias nuevas</td></tr>
            <tr><td>Derretir cera, evaporar agua, fundir metal</td><td>Cocer una tortilla, caramelizar azúcar, quemar leña, oxidar un clavo</td></tr>
            <tr><td>Generalmente reversible</td><td>Generalmente irreversible</td></tr>
          </table>

          <h4>En la tecnología y el ambiente</h4>
          <ul>
            <li><strong>Industria:</strong> fundir metales para darles forma (físico); fabricar cemento calentando caliza (químico).</li>
            <li><strong>Cocina:</strong> la nixtamalización y el tostado del café son cambios químicos provocados por la energía.</li>
            <li><strong>Ambiente:</strong> quemar leña o combustibles libera CO₂ y humo; por eso conviene usar la energía de forma eficiente.</li>
          </ul>

          <h4>🧪 Práctica (método 5E): una vela, dos tipos de cambio</h4>
          <ol>
            <li><strong>Enganchar:</strong> cuando una vela se consume, ¿solo se derrite?</li>
            <li><strong>Explorar:</strong> enciende una vela y observa: la cera junto a la mecha se derrite y la que cae se vuelve a endurecer. Coloca encima un frasco de vidrio boca abajo y mide cuánto tarda en apagarse.</li>
            <li><strong>Explicar:</strong> derretirse es un cambio <strong>físico</strong>; la combustión de la cera en la flama es un cambio <strong>químico</strong>, que consume oxígeno y produce CO₂ y vapor de agua (por eso se apaga dentro del frasco y aparecen gotitas en el vidrio).</li>
            <li><strong>Elaborar:</strong> con ayuda de un adulto, calienta en una cuchara un poco de azúcar: primero se derrite (físico) y luego se oscurece y huele a caramelo (químico).</li>
            <li><strong>Evaluar:</strong> clasifica diez cambios que ocurren en tu cocina como físicos o químicos.</li>
          </ol>
          <div class="ejemplo"><strong>⚠️ Seguridad:</strong> trabaja lejos de materiales inflamables, con el cabello recogido y la supervisión de un adulto. El azúcar caliente quema mucho.</div>
        `,
        actividades: [
          { pregunta: "Derretir la cera de una vela es un cambio:", opciones: ["Físico", "Químico", "Nuclear", "Biológico"], correcta: "Físico", explicacion: "La cera sigue siendo cera; solo cambia de estado." },
          { pregunta: "La combustión de la mecha y la cera es un cambio:", opciones: ["Físico", "Químico", "De estado", "Reversible"], correcta: "Químico", explicacion: "Se forman sustancias nuevas: CO₂ y vapor de agua." },
          { pregunta: "La vela se apaga dentro del frasco porque:", opciones: ["Se acaba el oxígeno", "Se enfría el vidrio", "Se moja la mecha", "Hay mucha luz"], correcta: "Se acaba el oxígeno", explicacion: "La combustión necesita oxígeno." },
          { pregunta: "Cocer una tortilla en el comal es un cambio:", opciones: ["Químico", "Físico", "Sin cambio", "Nuclear"], correcta: "Químico", explicacion: "El calor transforma los almidones y las proteínas de la masa." },
          { pregunta: "El calor es:", opciones: ["Energía que pasa de un cuerpo caliente a uno frío", "Una sustancia", "Lo mismo que la temperatura", "Un tipo de materia"], correcta: "Energía que pasa de un cuerpo caliente a uno frío", explicacion: "La temperatura, en cambio, mide qué tan caliente está algo." }
        ]
      },
            {
        id: "tc1-4",
        proposito: "Etapa 8 de la progresión",
        estudio: "ciencias:tc1-4",
        titulo: "Ciencia, Tecnología y Sociedad",
        icono: "🌍",
        imagen: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        contenido: `
          <p>Reflexiona sobre cómo la ciencia y la tecnología impactan tu vida y tu comunidad.</p>
          <h4>Preguntas para reflexionar</h4>
          <ul>
            <li>¿Cómo ha cambiado la tecnología la forma de vida en tu comunidad?</li>
            <li>¿Qué problemas ambientales identificas en tu entorno?</li>
            <li>¿Qué soluciones científicas o tecnológicas propondrías?</li>
          </ul>
          <div class="ejemplo">
            <strong>Proyecto:</strong> "Casa sustentable" con adobe, plantas acuáticas y paneles solares, ganador del 2° lugar en la Feria Mexicana de Ciencias e Ingenierías 2024.
          </div>
        `,
        actividades: [
          { pregunta: "Una 'casa sustentable' usa:", opciones: ["Mucha energía", "Paneles solares y adobe", "Solo cemento", "Plásticos"], correcta: "Paneles solares y adobe", explicacion: "Busca ahorrar recursos." },
          { pregunta: "La tecnología impacta en la sociedad:", opciones: ["No", "Sí, en la forma de vivir", "Solo en las ciudades", "Solo en el pasado"], correcta: "Sí, en la forma de vivir", explicacion: "Cambia la comunicación y el trabajo." },
          { pregunta: "¿Qué problema ambiental es común en comunidades?", opciones: ["La basura", "El exceso de aire puro", "Sobrepoblación de árboles", "Demasiada agua limpia"], correcta: "La basura", explicacion: "Es un reto principal." },
          { pregunta: "Para resolver un problema ambiental se necesita:", opciones: ["Ignorarlo", "Ciencia y tecnología", "Solo fuerza", "Magia"], correcta: "Ciencia y tecnología", explicacion: "Buscan soluciones prácticas." },
          { pregunta: "El adobe es un material:", opciones: ["Tradicional y sustentable", "De lujo", "Contaminante", "Metálico"], correcta: "Tradicional y sustentable", explicacion: "Usa tierra local." }
        ]
      }
    ]
  },

  8: {
    titulo: "Taller de Ciencias II",
    subtitulo: "Proyectos de investigación aplicados al flujo de energía en nuestro entorno",
    semestre: "Tercer Semestre",
    clase: "s3",
    icono: "🔬",
    descripcion: "Desarrolla paso a paso un proyecto de investigación sobre el flujo de energía en tu entorno.",
    contexto: "Vas a hacer ciencia de verdad: elegirás un fenómeno de tu comunidad, harás un experimento y compartirás tus resultados. Como ejemplo seguiremos un proyecto durante todo el taller: ¿qué envoltura mantiene más calientes las tortillas?",
    temas: [
            {
        id: "tc2-1",
        proposito: "Introducción · Las etapas del proyecto",
        estudio: "ciencias:tc2-1",
        titulo: "Proyecto de Investigación",
        icono: "📋",
        imagen: "linear-gradient(135deg, #0ea5e9, #0284c7)",
        contenido: `
          <p>Diseña y ejecuta un proyecto de investigación sobre el flujo de energía en tu entorno.</p>
          <h4>Fases del proyecto</h4>
          <ol>
            <li>Identificación de un problema o fenómeno</li>
            <li>Formulación de preguntas de investigación</li>
            <li>Planteamiento de hipótesis</li>
            <li>Diseño experimental</li>
            <li>Recolección de datos</li>
            <li>Análisis e interpretación</li>
            <li>Comunicación de resultados</li>
          </ol>
        `,
        actividades: [
          { pregunta: "El proyecto inicia con:", opciones: ["Un problema o fenómeno", "Una conclusión", "Un premio", "Un experimento"], correcta: "Un problema o fenómeno", explicacion: "Es lo que despierta la curiosidad." },
          { pregunta: "Una hipótesis es:", opciones: ["Una ley", "Una suposición a probar", "Un dato final", "Un equipo"], correcta: "Una suposición a probar", explicacion: "Debe validarse con la experimentación." },
          { pregunta: "El diseño experimental debe ser:", opciones: ["Al azar", "Controlado y planificado", "Sin reglas", "Muy rápido"], correcta: "Controlado y planificado", explicacion: "Para que sea confiable." },
          { pregunta: "La recolección de datos requiere:", opciones: ["Medir y registrar", "Adivinar", "Copiar", "Omitir"], correcta: "Medir y registrar", explicacion: "Es la base de la evidencia." },
          { pregunta: "El último paso es:", opciones: ["Llorar", "Comunicar resultados", "Romper todo", "Empezar de nuevo"], correcta: "Comunicar resultados", explicacion: "Para que la ciencia avance." }
        ]
      },
            {
        id: "tc2-2",
        proposito: "Progresión 1",
        estudio: "ciencias:tc2-2",
        titulo: "Flujo de Energía en Ecosistemas",
        icono: "🌳",
        imagen: "linear-gradient(135deg, #22c55e, #16a34a)",
        contenido: `
          <p>Investiga cómo fluye la energía en los ecosistemas de Chiapas.</p>
          <h4>Actividades</h4>
          <ul>
            <li>Identificar cadenas tróficas en tu comunidad</li>
            <li>Medir la temperatura y energía en diferentes ecosistemas</li>
            <li>Analizar el impacto humano en el flujo de energía</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto:</strong> La Selva Lacandona es un laboratorio natural para estudiar el flujo de energía en ecosistemas tropicales.
          </div>
        `,
        actividades: [
          { pregunta: "La energía fluye en un ecosistema a través de:", opciones: ["Cadenas tróficas", "El suelo", "Las rocas", "El viento"], correcta: "Cadenas tróficas", explicacion: "Quién come a quién." },
          { pregunta: "El impacto humano en el flujo de energía puede ser:", opciones: ["Positivo", "Negativo (deforestación)", "Nulo", "Invisible"], correcta: "Negativo (deforestación)", explicacion: "Altera las cadenas." },
          { pregunta: "Un ecosistema tropical en Chiapas es:", opciones: ["La tundra", "La Selva Lacandona", "El desierto", "El polo"], correcta: "La Selva Lacandona", explicacion: "Es un bosque húmedo." },
          { pregunta: "La principal fuente de energía de los ecosistemas es:", opciones: ["El agua", "El sol", "El viento", "Las rocas"], correcta: "El sol", explicacion: "Impulsa la fotosíntesis." },
          { pregunta: "La temperatura es una medida de:", opciones: ["Masa", "Energía interna", "Volumen", "Peso"], correcta: "Energía interna", explicacion: "Qué tan caliente está." }
        ]
      },
      {
        id: "tcx2-1",
        proposito: "Progresión 2",
        titulo: "La Pregunta de Investigación",
        icono: "❓",
        imagen: "linear-gradient(135deg, #0284c7, #6366f1)",
        contenido: `
          <h4>Del tema a la pregunta</h4>
          <p>Una buena investigación empieza con una buena pregunta. Se llega a ella paso a paso:</p>
          <div class="formula">Tema: el calor en la cocina<br>
→ Problema: las tortillas se enfrían rápido cuando las llevamos al campo<br>
→ Pregunta: ¿Qué envoltura (servilleta de tela, hoja de plátano con tela o tortillero de unicel) conserva mejor la temperatura de las tortillas durante 30 minutos?</div>

          <h4>Características de una buena pregunta</h4>
          <ul>
            <li><strong>Clara:</strong> cualquiera entiende qué se quiere saber.</li>
            <li><strong>Delimitada:</strong> dice qué, dónde y en cuánto tiempo.</li>
            <li><strong>Medible:</strong> se puede responder con datos (temperatura en °C).</li>
            <li><strong>Investigable:</strong> se puede responder con los recursos que tienes.</li>
          </ul>
          <table class="tabla-estudio">
            <tr><th>❌ Pregunta débil</th><th>✅ Pregunta mejorada</th></tr>
            <tr><td>¿Cómo funciona el calor?</td><td>¿Qué envoltura conserva mejor la temperatura de las tortillas durante 30 minutos?</td></tr>
            <tr><td>¿El sol es bueno?</td><td>¿Cuánto sube la temperatura del agua en una botella pintada de negro frente a una transparente, después de 2 horas al sol?</td></tr>
            <tr><td>¿Las plantas dan sombra?</td><td>¿Cuántos grados es más fresca la sombra de un árbol que el pavimento a mediodía en el patio de la escuela?</td></tr>
          </table>

          <h4>Ideas de proyectos sobre el flujo de energía</h4>
          <ul>
            <li>¿Qué material de techo (lámina, teja, palma) mantiene más fresca una casa?</li>
            <li>¿Cuánta leña ahorra una estufa ahorradora frente a un fogón abierto?</li>
            <li>¿Cuánto se calienta el agua en un calentador solar casero hecho con botellas?</li>
            <li>¿La sombra de los árboles del cafetal reduce la temperatura del suelo?</li>
          </ul>
        `,
        actividades: [
          { pregunta: "Una buena pregunta de investigación debe ser:", opciones: ["Clara, delimitada y medible", "Muy general", "Imposible de responder", "Igual al título del libro"], correcta: "Clara, delimitada y medible", explicacion: "Así se puede responder con datos." },
          { pregunta: "¿Cuál es la mejor pregunta de investigación?", opciones: ["¿Cómo funciona el calor?", "¿Qué envoltura conserva mejor la temperatura de las tortillas durante 30 minutos?", "¿El calor es bueno?", "¿Qué es la energía?"], correcta: "¿Qué envoltura conserva mejor la temperatura de las tortillas durante 30 minutos?", explicacion: "Dice qué se compara, qué se mide y en cuánto tiempo." },
          { pregunta: "Que una pregunta sea «medible» significa que:", opciones: ["Se puede responder con datos", "Tiene muchas palabras", "La responde el maestro", "No tiene respuesta"], correcta: "Se puede responder con datos", explicacion: "Por ejemplo, temperaturas en °C." },
          { pregunta: "El orden correcto para llegar a la pregunta es:", opciones: ["Tema → problema → pregunta", "Pregunta → tema → problema", "Conclusión → tema → pregunta", "Datos → tema → problema"], correcta: "Tema → problema → pregunta", explicacion: "Se va de lo general a lo particular." },
          { pregunta: "Una pregunta «investigable» es la que:", opciones: ["Se puede responder con los recursos disponibles", "Necesita un laboratorio espacial", "Nadie entiende", "Ya está respondida en el título"], correcta: "Se puede responder con los recursos disponibles", explicacion: "Debe ser realista para tu escuela y tu comunidad." }
        ]
      },
      {
        id: "tcx2-2",
        proposito: "Progresión 3",
        titulo: "La Hipótesis y las Referencias",
        icono: "💡",
        imagen: "linear-gradient(135deg, #6366f1, #9333ea)",
        contenido: `
          <h4>¿Qué es una hipótesis?</h4>
          <p>Es una <strong>posible respuesta</strong> a tu pregunta, basada en lo que ya sabes y en lo que investigaste. Debe poder comprobarse con un experimento.</p>
          <div class="formula">Si … (cambio la variable), entonces … (lo que espero que pase), porque … (explicación científica)</div>
          <div class="ejemplo">
            <strong>Hipótesis del proyecto del tortillero:</strong> «Si envolvemos las tortillas en un tortillero de unicel, entonces conservarán más su temperatura que con la tela o la hoja de plátano, porque el unicel tiene aire atrapado que es un mal conductor del calor».
          </div>

          <h4>Investigación documental: lo que ya se sabe</h4>
          <p>Antes de experimentar, busca información sobre tu tema: cómo se transfiere el calor (conducción, convección y radiación) y qué materiales son aislantes. Usa fuentes confiables:</p>
          <ul>
            <li>✅ Libros de texto, sitios de universidades (UNAM, ECOSUR), dependencias de gobierno, revistas de divulgación como <em>¿Cómo ves?</em></li>
            <li>⚠️ Ten cuidado con blogs sin autor, publicaciones en redes sociales o videos sin fuentes.</li>
          </ul>

          <h4>Cómo citar tus fuentes (formato APA sencillo)</h4>
          <div class="formula">Autor, A. (año). <em>Título del libro</em>. Editorial.<br>
Autor, A. (año). Título del artículo. <em>Nombre de la revista</em>, número, páginas.<br>
Institución. (año). <em>Título de la página</em>. Dirección web</div>
          <p>Citar reconoce el trabajo de otros y evita el <strong>plagio</strong>, que es presentar ideas ajenas como propias.</p>
        `,
        actividades: [
          { pregunta: "Una hipótesis es:", opciones: ["Una posible respuesta a la pregunta que se puede comprobar", "La conclusión final", "Una opinión sin fundamento", "El título del proyecto"], correcta: "Una posible respuesta a la pregunta que se puede comprobar", explicacion: "Se pone a prueba con el experimento." },
          { pregunta: "La estructura recomendada para escribir una hipótesis es:", opciones: ["Si…, entonces…, porque…", "Había una vez…", "En conclusión…", "Me gusta…"], correcta: "Si…, entonces…, porque…", explicacion: "Relaciona la variable, el resultado esperado y la explicación." },
          { pregunta: "¿Cuál es una fuente más confiable?", opciones: ["El sitio web de una universidad", "Un mensaje reenviado en WhatsApp", "Un comentario anónimo", "Un rumor"], correcta: "El sitio web de una universidad", explicacion: "Tiene autores identificables y revisión." },
          { pregunta: "Presentar ideas de otros como propias se llama:", opciones: ["Plagio", "Hipótesis", "Paráfrasis", "Referencia"], correcta: "Plagio", explicacion: "Se evita citando las fuentes." },
          { pregunta: "Antes de experimentar, la investigación documental sirve para:", opciones: ["Conocer lo que ya se sabe del tema", "Inventar los resultados", "Evitar la pregunta", "Copiar otro proyecto"], correcta: "Conocer lo que ya se sabe del tema", explicacion: "Ayuda a escribir una hipótesis fundamentada." }
        ]
      },
      {
        id: "tcx2-3",
        proposito: "Progresión 4",
        titulo: "El Diseño Experimental",
        icono: "📐",
        imagen: "linear-gradient(135deg, #9333ea, #db2777)",
        contenido: `
          <h4>Planear para que la prueba sea justa</h4>
          <table class="tabla-estudio">
            <tr><th>Variable</th><th>¿Qué es?</th><th>En el proyecto del tortillero</th></tr>
            <tr><td><strong>Independiente</strong></td><td>La que tú cambias</td><td>El tipo de envoltura</td></tr>
            <tr><td><strong>Dependiente</strong></td><td>La que mides</td><td>La temperatura de las tortillas (°C)</td></tr>
            <tr><td><strong>Controladas</strong></td><td>Las que mantienes iguales</td><td>Cantidad de tortillas (5), temperatura inicial (70 °C), lugar, tiempo y el mismo termómetro</td></tr>
          </table>
          <ul>
            <li><strong>Grupo control:</strong> unas tortillas <em>sin cubrir</em>, para comparar.</li>
            <li><strong>Repeticiones:</strong> haz el experimento al menos 3 veces y saca el promedio; así reduces los errores.</li>
          </ul>

          <h4>Materiales y procedimiento</h4>
          <ol>
            <li>Materiales: 20 tortillas recién hechas, una servilleta de tela, hojas de plátano, un tortillero de unicel, un termómetro de cocina y un reloj.</li>
            <li>Divide las tortillas en cuatro grupos de 5 y mide su temperatura inicial.</li>
            <li>Envuelve cada grupo con una envoltura distinta y deja uno sin cubrir.</li>
            <li>Coloca los cuatro en la misma mesa, lejos del fogón y de las corrientes de aire.</li>
            <li>Mide la temperatura del centro de cada grupo cada 10 minutos durante 30 minutos.</li>
          </ol>
          <div class="ejemplo"><strong>⚠️ Seguridad:</strong> ten cuidado al manipular el comal y las tortillas calientes. Al terminar, ¡las tortillas se comen!</div>
        `,
        actividades: [
          { pregunta: "En el proyecto del tortillero, la variable independiente es:", opciones: ["El tipo de envoltura", "La temperatura", "La cantidad de tortillas", "El reloj"], correcta: "El tipo de envoltura", explicacion: "Es la que se cambia a propósito." },
          { pregunta: "La temperatura de las tortillas es la variable:", opciones: ["Dependiente", "Independiente", "Controlada", "Aleatoria"], correcta: "Dependiente", explicacion: "Es la que se mide." },
          { pregunta: "Las tortillas sin cubrir funcionan como:", opciones: ["Grupo control", "Variable independiente", "Hipótesis", "Conclusión"], correcta: "Grupo control", explicacion: "Sirven para comparar con las envueltas." },
          { pregunta: "Usar siempre la misma cantidad de tortillas es un ejemplo de:", opciones: ["Variable controlada", "Variable dependiente", "Error", "Conclusión"], correcta: "Variable controlada", explicacion: "Se mantiene igual para que la prueba sea justa." },
          { pregunta: "Repetir el experimento varias veces sirve para:", opciones: ["Reducir los errores y obtener un promedio confiable", "Gastar más tortillas", "Cambiar la pregunta", "Evitar medir"], correcta: "Reducir los errores y obtener un promedio confiable", explicacion: "Un solo intento puede tener errores." }
        ]
      },
      {
        id: "tcx2-4",
        proposito: "Progresión 5",
        titulo: "Recolección de Datos y Medición",
        icono: "📋",
        imagen: "linear-gradient(135deg, #db2777, #ea580c)",
        contenido: `
          <h4>Registrar todo en una bitácora</h4>
          <p>La <strong>bitácora</strong> es el cuaderno del investigador: ahí anotas la fecha, lo que haces, las mediciones y cualquier cosa inesperada.</p>

          <h4>Tabla de registro del proyecto del tortillero (ejemplo)</h4>
          <table class="tabla-estudio">
            <tr><th>Envoltura</th><th>0 min</th><th>10 min</th><th>20 min</th><th>30 min</th></tr>
            <tr><td>Sin cubrir (control)</td><td>70 °C</td><td>52 °C</td><td>41 °C</td><td>34 °C</td></tr>
            <tr><td>Servilleta de tela</td><td>70 °C</td><td>60 °C</td><td>52 °C</td><td>46 °C</td></tr>
            <tr><td>Hoja de plátano + tela</td><td>70 °C</td><td>63 °C</td><td>57 °C</td><td>52 °C</td></tr>
            <tr><td>Tortillero de unicel</td><td>70 °C</td><td>65 °C</td><td>60 °C</td><td>56 °C</td></tr>
          </table>
          <p><em>Datos de ejemplo para practicar; en tu proyecto usarás los que midas.</em></p>

          <h4>Buenas prácticas al medir</h4>
          <ul>
            <li>Escribe siempre la <strong>unidad</strong> (°C, g, mL, minutos).</li>
            <li>Usa el <strong>mismo instrumento</strong> durante todo el experimento.</li>
            <li>Mide <strong>a los mismos tiempos</strong> y en el mismo punto (el centro del paquete de tortillas).</li>
            <li>Anota también lo que no esperabas: «se abrió el tortillero a los 15 minutos».</li>
            <li>No borres ni «arregles» datos que no te gustan: también son resultados.</li>
          </ul>
        `,
        actividades: [
          { pregunta: "El cuaderno donde el investigador anota todo lo que hace y mide se llama:", opciones: ["Bitácora", "Diccionario", "Cartel", "Hipótesis"], correcta: "Bitácora", explicacion: "Incluye fechas, mediciones y observaciones." },
          { pregunta: "Al registrar una temperatura siempre debes anotar:", opciones: ["La unidad (°C)", "Tu nombre en cada dato", "El color de la tortilla", "Nada más"], correcta: "La unidad (°C)", explicacion: "Un número sin unidad no tiene sentido." },
          { pregunta: "Según la tabla de ejemplo, ¿qué envoltura conservó más la temperatura a los 30 minutos?", opciones: ["Tortillero de unicel", "Servilleta de tela", "Sin cubrir", "Hoja de plátano + tela"], correcta: "Tortillero de unicel", explicacion: "Quedó a 56 °C." },
          { pregunta: "Si un dato no te gusta, debes:", opciones: ["Anotarlo tal como salió", "Borrarlo", "Cambiarlo", "Inventar otro"], correcta: "Anotarlo tal como salió", explicacion: "Alterar los datos invalida la investigación." },
          { pregunta: "Medir siempre en el mismo punto y con el mismo termómetro sirve para:", opciones: ["Que los datos sean comparables", "Terminar más rápido", "Cambiar la variable", "Evitar la tabla"], correcta: "Que los datos sean comparables", explicacion: "Reduce los errores de medición." }
        ]
      },
      {
        id: "tcx2-5",
        proposito: "Progresión 6 y 7",
        titulo: "Análisis e Interpretación de Datos",
        icono: "📈",
        imagen: "linear-gradient(135deg, #ea580c, #ca8a04)",
        contenido: `
          <h4>Analizar: organizar y comparar los datos</h4>
          <figure class="diagrama-quimica">
            <img src="images/ciencias/grafica-tortillero.svg" alt="Gráfica de temperatura contra tiempo para cada envoltura" loading="lazy">
            <figcaption>Una gráfica de líneas permite ver cómo cambia la temperatura con el tiempo para cada envoltura.</figcaption>
          </figure>
          <table class="tabla-estudio">
            <tr><th>Envoltura</th><th>Temperatura perdida en 30 min</th></tr>
            <tr><td>Sin cubrir</td><td>70 − 34 = <strong>36 °C</strong></td></tr>
            <tr><td>Servilleta de tela</td><td>70 − 46 = <strong>24 °C</strong></td></tr>
            <tr><td>Hoja de plátano + tela</td><td>70 − 52 = <strong>18 °C</strong></td></tr>
            <tr><td>Tortillero de unicel</td><td>70 − 56 = <strong>14 °C</strong></td></tr>
          </table>
          <p>Si repetiste el experimento, calcula el <strong>promedio</strong>: suma los resultados de cada repetición y divide entre el número de repeticiones.</p>

          <h4>Causa y efecto</h4>
          <p>Como todas las demás variables se mantuvieron iguales, la diferencia en la temperatura se puede atribuir a la <strong>envoltura</strong>: hay una relación causal. Cuidado: si no hubieras controlado las variables (por ejemplo, unas tortillas junto al fogón y otras en la ventana), no podrías saber cuál fue la causa.</p>

          <h4>Interpretar: ¿qué significan los datos?</h4>
          <ul>
            <li>Todas las envolturas redujeron la pérdida de calor frente al grupo control.</li>
            <li>El unicel y la hoja de plátano funcionan mejor porque atrapan aire, un mal conductor, y reducen la <strong>convección</strong> alrededor de las tortillas.</li>
            <li>La pérdida de calor fue más rápida al principio, cuando la diferencia de temperatura con el ambiente era mayor.</li>
          </ul>
        `,
        actividades: [
          { pregunta: "En el ejemplo, ¿cuántos grados perdieron las tortillas sin cubrir en 30 minutos?", opciones: ["36 °C", "14 °C", "24 °C", "70 °C"], correcta: "36 °C", explicacion: "70 − 34 = 36 °C." },
          { pregunta: "Para mostrar cómo cambia la temperatura con el tiempo conviene usar una:", opciones: ["Gráfica de líneas", "Fotografía", "Receta", "Lista de compras"], correcta: "Gráfica de líneas", explicacion: "Muestra la tendencia de cada envoltura." },
          { pregunta: "Se puede decir que la envoltura causó la diferencia de temperatura porque:", opciones: ["Las demás variables se mantuvieron iguales", "Lo dijo un compañero", "La gráfica es bonita", "Se hizo una sola vez"], correcta: "Las demás variables se mantuvieron iguales", explicacion: "Controlar variables permite establecer la causa." },
          { pregunta: "El unicel conserva el calor porque:", opciones: ["Tiene aire atrapado, que es mal conductor", "Es un metal", "Produce calor", "Es transparente"], correcta: "Tiene aire atrapado, que es mal conductor", explicacion: "Reduce la conducción y la convección." },
          { pregunta: "Para calcular el promedio de tres repeticiones:", opciones: ["Sumas los tres resultados y divides entre 3", "Multiplicas los resultados", "Eliges el mayor", "Restas el menor"], correcta: "Sumas los tres resultados y divides entre 3", explicacion: "El promedio representa mejor el resultado." }
        ]
      },
      {
        id: "tcx2-6",
        proposito: "Progresión 8",
        titulo: "Las Conclusiones",
        icono: "✅",
        imagen: "linear-gradient(135deg, #ca8a04, #16a34a)",
        contenido: `
          <h4>¿Se aceptó o se rechazó la hipótesis?</h4>
          <p>Compara tus resultados con tu hipótesis. En el ejemplo, la hipótesis decía que el unicel conservaría mejor el calor, y los datos lo confirman: <strong>la hipótesis se acepta</strong>. Si los datos hubieran mostrado otra cosa, se <strong>rechaza</strong>; eso también es un resultado valioso, porque nos enseña algo nuevo.</p>

          <h4>Partes de una buena conclusión</h4>
          <ol>
            <li><strong>Responde la pregunta</strong> de investigación con base en los datos.</li>
            <li><strong>Acepta o rechaza la hipótesis</strong> y explica por qué.</li>
            <li><strong>Reconoce las limitaciones:</strong> qué pudo afectar los resultados (abrir el tortillero, viento, un termómetro poco preciso).</li>
            <li><strong>Discute la utilidad práctica</strong> en tu contexto.</li>
            <li><strong>Propone nuevas preguntas</strong> para investigar después.</li>
          </ol>

          <div class="ejemplo">
            <strong>Conclusión de ejemplo:</strong> «El tortillero de unicel conservó mejor la temperatura (perdió 14 °C en 30 minutos), seguido de la hoja de plátano con tela (18 °C). Se acepta la hipótesis. Una limitación fue que solo se repitió dos veces. Aunque el unicel funcionó mejor, la <strong>hoja de plátano</strong> es una opción casi igual de buena, gratuita y biodegradable, mientras que el unicel tarda cientos de años en degradarse. Recomendamos la hoja de plátano a las familias que llevan tortillas al campo y a las vendedoras del mercado. Nueva pregunta: ¿cuántas capas de hoja de plátano se necesitan para igualar al unicel?»
          </div>
          <p>Observa que una buena conclusión no solo dice «qué ganó»: considera el impacto en las personas y en el ambiente.</p>
        `,
        actividades: [
          { pregunta: "Si los datos no apoyan la hipótesis, esta se:", opciones: ["Rechaza", "Esconde", "Cambia para que coincida", "Ignora"], correcta: "Rechaza", explicacion: "Rechazarla también es un resultado valioso." },
          { pregunta: "Una conclusión debe responder:", opciones: ["La pregunta de investigación", "Una pregunta diferente", "Solo la opinión personal", "El título del libro"], correcta: "La pregunta de investigación", explicacion: "Con base en los datos obtenidos." },
          { pregunta: "Reconocer las limitaciones de un experimento sirve para:", opciones: ["Saber qué pudo afectar los resultados y mejorar", "Desacreditar el trabajo", "Ocultar errores", "Terminar más rápido"], correcta: "Saber qué pudo afectar los resultados y mejorar", explicacion: "Es parte de la honestidad científica." },
          { pregunta: "En el ejemplo, la hoja de plátano se recomienda porque:", opciones: ["Funciona casi igual, es gratuita y biodegradable", "Es la que peor funcionó", "Es de plástico", "Es la más cara"], correcta: "Funciona casi igual, es gratuita y biodegradable", explicacion: "La conclusión considera el impacto ambiental." },
          { pregunta: "Proponer nuevas preguntas al final de una investigación:", opciones: ["Abre el camino a nuevos proyectos", "Significa que fallaste", "No es necesario nunca", "Cambia los resultados"], correcta: "Abre el camino a nuevos proyectos", explicacion: "La ciencia es un proceso continuo." }
        ]
      },
            {
        id: "tc2-3",
        proposito: "Progresión 9",
        estudio: "ciencias:tc2-3",
        titulo: "Divulgación Científica",
        icono: "📢",
        imagen: "linear-gradient(135deg, #f43f5e, #e11d48)",
        contenido: `
          <p>Aprende a comunicar tus hallazgos científicos a tu comunidad.</p>
          <h4>Formas de divulgación</h4>
          <ul>
            <li>Carteles científicos</li>
            <li>Presentaciones orales</li>
            <li>Videos educativos</li>
            <li>Redes sociales</li>
            <li>Ferias de ciencia</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto:</strong> La Feria Mexicana de Ciencias e Ingenierías es una oportunidad para compartir tus proyectos.
          </div>
        `,
        actividades: [
          { pregunta: "La divulgación científica sirve para:", opciones: ["Guardar secretos", "Compartir conocimiento", "Vender", "Confundir"], correcta: "Compartir conocimiento", explicacion: "Hace la ciencia accesible." },
          { pregunta: "Un cartel científico debe tener:", opciones: ["Solo letras", "Título, datos y conclusiones", "Solo dibujos", "Nada"], correcta: "Título, datos y conclusiones", explicacion: "Resume la investigación." },
          { pregunta: "Las ferias de ciencia permiten:", opciones: ["Mostrar proyectos", "Vender comida", "Dormir", "Pelear"], correcta: "Mostrar proyectos", explicacion: "Se comparten hallazgos." },
          { pregunta: "Un video educativo es una forma de:", opciones: ["Divulgación", "Entretenimiento sin valor", "Pérdida de tiempo", "Chisme"], correcta: "Divulgación", explicacion: "Enseña de forma visual." },
          { pregunta: "Comunicar resultados es el paso final de:", opciones: ["El método científico", "La lectura", "El juego", "La escritura"], correcta: "El método científico", explicacion: "Difunde el conocimiento." }
        ]
      }
    ]
  }
};
