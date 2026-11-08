/* ==========================================================
   DATA - Cultura Digital I, II y III
   Alineado al Programa MCCEMS: Cultura Digital se cursa en
   primero, segundo y sexto semestre. Prioriza software libre,
   recursos sin costo y una mirada crítica a la tecnología.
========================================================== */

const CULTURA_DIGITAL = {
  1: {
    titulo: "Cultura Digital I",
    subtitulo: "Ciudadanía digital",
    semestre: "Primer Semestre",
    clase: "s1",
    icono: "🪪",
    descripcion: "Hardware y software, licencias libres, impacto social de la tecnología, software libre, seguridad digital, identidad digital y pensamiento algorítmico.",
    meta: "Conozca y utilice de manera crítica y responsable el ciberespacio y los distintos recursos digitales, apegándose a su marco normativo para ejercer una ciudadanía digital, acceder al conocimiento y resolver situaciones, fenómenos o problemas de su contexto.",
    contexto: "En Chiapas muchas personas se conectan solo con el celular, con datos limitados o subiendo al cerro para encontrar señal. Por eso esta materia no se queda en «saber usar» aparatos: te ayuda a usarlos con seguridad, con herramientas gratuitas y pensando en tu comunidad.",
    temas: [
      {
        id: "cd1-1",
        proposito: "Propósito formativo 1",
        titulo: "Hardware y Software: ¿Cómo Funciona un Dispositivo?",
        icono: "🖥️",
        imagen: "linear-gradient(135deg, #047857, #0f766e)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Todo dispositivo digital tiene dos partes que no funcionan una sin la otra: el <strong>hardware</strong> (lo que puedes tocar) y el <strong>software</strong> (los programas, instrucciones y reglas que le dicen qué hacer).
          </div>

          <figure class="diagrama-quimica">
            <img src="images/cultura-digital/partes-computadora.svg" alt="Esquema entrada, procesamiento, memoria, almacenamiento y salida" loading="lazy">
            <figcaption>Un dispositivo recibe datos (entrada), los procesa, los guarda y muestra resultados (salida).</figcaption>
          </figure>

          <h4>Componentes del hardware</h4>
          <table class="tabla-estudio">
            <tr><th>Parte</th><th>Función</th><th>Ejemplos</th></tr>
            <tr><td>Procesador (CPU)</td><td>Ejecuta las instrucciones; es el «cerebro».</td><td>El chip de tu celular o computadora.</td></tr>
            <tr><td>Memoria RAM</td><td>Guarda por un momento lo que estás usando; se borra al apagar.</td><td>4 GB u 8 GB de RAM.</td></tr>
            <tr><td>Almacenamiento</td><td>Guarda tus archivos aunque apagues el equipo.</td><td>Disco duro, SSD, memoria USB, tarjeta microSD.</td></tr>
            <tr><td>Entrada</td><td>Introducen datos.</td><td>Teclado, ratón, micrófono, cámara, pantalla táctil.</td></tr>
            <tr><td>Salida</td><td>Muestran resultados.</td><td>Pantalla, bocinas, impresora.</td></tr>
          </table>

          <h4>Tipos de software</h4>
          <ul>
            <li><strong>Software de sistema:</strong> el sistema operativo (Android, Windows, GNU/Linux) que administra el hardware.</li>
            <li><strong>Software de aplicación:</strong> los programas que usas para una tarea: procesador de textos, navegador, juegos.</li>
            <li><strong>Software de programación:</strong> herramientas para crear otros programas.</li>
          </ul>

          <h4>Historia crítica de la tecnología digital</h4>
          <ul class="linea-tiempo">
            <li><strong>1946:</strong> se presenta la ENIAC, una computadora que ocupaba una habitación entera.</li>
            <li><strong>1947:</strong> el transistor permite equipos más pequeños.</li>
            <li><strong>1958:</strong> llega a la UNAM la IBM 650, primera computadora de México y de América Latina.</li>
            <li><strong>1971:</strong> el primer microprocesador comercial (Intel 4004).</li>
            <li><strong>1981–1990:</strong> computadoras personales en hogares y oficinas.</li>
            <li><strong>1991:</strong> la World Wide Web se abre al público.</li>
            <li><strong>2007 en adelante:</strong> los teléfonos inteligentes se vuelven la principal forma de conectarse.</li>
          </ul>
          <p>Una historia <strong>crítica</strong> no solo cuenta inventos: pregunta <em>quién</em> los controla, <em>quién</em> tiene acceso a ellos y <em>qué costos</em> dejan, como la extracción de minerales para fabricar baterías o la basura electrónica.</p>

          <h4>Historia del software libre</h4>
          <p>En los primeros años, los programadores compartían el código. Cuando las empresas empezaron a cerrarlo, Richard Stallman anunció en 1983 el proyecto <strong>GNU</strong> y en 1984 comenzó a desarrollarlo, para crear un sistema operativo que todos pudieran usar, estudiar y compartir. En 1991 Linus Torvalds creó el núcleo <strong>Linux</strong>; juntos formaron <strong>GNU/Linux</strong>.</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Revisa la configuración de tu celular (Ajustes → Acerca del teléfono) y anota: sistema operativo, memoria RAM y almacenamiento. Compáralo con el de dos compañeros: ¿qué equipo puede guardar más fotos?, ¿cuál abrirá las aplicaciones más rápido?</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> En muchas comunidades el celular es la única computadora de la familia. Por eso conocer su hardware (cuánto almacenamiento le queda, cuánta RAM tiene) te ayuda a decidir qué aplicaciones instalar y a hacer que el equipo dure más años.
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál de estos elementos es hardware?", opciones: ["La memoria RAM", "El sistema operativo Android", "Un procesador de textos", "Un videojuego"], correcta: "La memoria RAM", explicacion: "El hardware es la parte física que se puede tocar; los demás son programas (software)." },
          { pregunta: "¿Qué pasa con la información de la memoria RAM al apagar el equipo?", opciones: ["Se borra", "Se guarda para siempre", "Se envía a internet", "Se imprime"], correcta: "Se borra", explicacion: "La RAM es memoria temporal; para conservar archivos se usa el almacenamiento." },
          { pregunta: "El sistema operativo es un ejemplo de:", opciones: ["Software de sistema", "Software de aplicación", "Dispositivo de entrada", "Dispositivo de salida"], correcta: "Software de sistema", explicacion: "Administra el hardware y permite que funcionen las aplicaciones." },
          { pregunta: "¿Quién inició el proyecto GNU para crear software libre?", opciones: ["Richard Stallman", "Bill Gates", "Steve Jobs", "Tim Berners-Lee"], correcta: "Richard Stallman", explicacion: "Lo anunció en 1983 como respuesta al software cerrado." },
          { pregunta: "Una historia crítica de la tecnología se pregunta, además de los inventos:", opciones: ["Quién tiene acceso a ella y qué costos deja", "Solo qué aparato es más nuevo", "Cuál es la marca más cara", "Nada más; basta con las fechas"], correcta: "Quién tiene acceso a ella y qué costos deja", explicacion: "El programa pide analizar la tecnología en su contexto social y ambiental." }
        ]
      },
      {
        id: "cd1-2",
        proposito: "Propósito formativo 2",
        titulo: "Licencias, Conectividad y Unidades de Medida",
        icono: "📜",
        imagen: "linear-gradient(135deg, #0f766e, #0e7490)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Cada programa, foto o canción tiene una <strong>licencia</strong>: las reglas que dicen qué puedes hacer con ella. Hay licencias <strong>privativas</strong> (todo prohibido salvo lo que paga o autoriza el dueño) y licencias <strong>libres</strong> (permiten usar, compartir y modificar).
          </div>

          <h4>Licencias de software y de contenidos</h4>
          <table class="tabla-estudio">
            <tr><th>Licencia</th><th>Qué permite</th></tr>
            <tr><td>Privativa</td><td>Usar el programa bajo las condiciones del fabricante; no puedes ver ni cambiar el código.</td></tr>
            <tr><td>GPL (General Public License)</td><td>Usar, estudiar, modificar y compartir el software; las versiones modificadas deben seguir siendo libres.</td></tr>
            <tr><td>Creative Commons</td><td>Para fotos, textos, música y videos. La persona autora elige condiciones: BY (dar crédito), SA (compartir igual), NC (no comercial), ND (sin obras derivadas).</td></tr>
          </table>

          <h4>¿Qué necesito para conectarme?</h4>
          <ul>
            <li><strong>Conectividad:</strong> datos móviles, wifi o internet satelital.</li>
            <li><strong>Sistema operativo:</strong> Android, iOS, Windows o GNU/Linux.</li>
            <li><strong>Navegador:</strong> el programa para ver páginas web (Firefox, Chrome, Edge…).</li>
            <li><strong>Niveles de acceso:</strong> no basta tener señal. También se necesitan habilidades para usar la tecnología y contenidos útiles en tu lengua y para tu contexto.</li>
          </ul>

          <h4>Unidades de medida</h4>
          <table class="tabla-estudio">
            <tr><th>Qué se mide</th><th>Unidad</th><th>Equivalencias</th></tr>
            <tr><td>Almacenamiento</td><td>byte (B)</td><td>1 byte = 8 bits · KB → MB → GB → TB (cada paso ≈ 1 000; en informática se usa también 1 024)</td></tr>
            <tr><td>Velocidad de conexión</td><td>bits por segundo (bps)</td><td>Mbps = megabits por segundo</td></tr>
            <tr><td>Procesamiento</td><td>hercios (Hz)</td><td>Un procesador de 2 GHz hace 2 mil millones de ciclos por segundo</td></tr>
          </table>
          <div class="nota-estudio alerta">
            <strong>⚠️ Ojo:</strong> la velocidad se anuncia en <strong>megabits</strong> (Mb) y los archivos se miden en <strong>megabytes</strong> (MB). Como 1 byte = 8 bits, una conexión de 8 Mbps descarga alrededor de 1 MB por segundo.
          </div>
          <details class="ejercicio-estudio">
            <summary>Tu internet es de 16 Mbps. ¿Cuánto tarda, aproximadamente, en bajar un video de 100 MB?</summary>
            <div>16 Mbps ÷ 8 = 2 MB por segundo → 100 MB ÷ 2 = 50 segundos.</div>
          </details>

          <h4>🛠️ Manos a la obra</h4>
          <p>Busca una foto con licencia Creative Commons (por ejemplo en Wikimedia Commons) y escribe cómo darías crédito a su autor o autora si la usas en una tarea.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Si en tu comunidad hay poca señal, saber cuántos MB pesa un video te ayuda a cuidar tus datos: puedes descargar la tarea en el ciber o en la escuela y verla después sin conexión.
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué permite la licencia GPL?", opciones: ["Usar, estudiar, modificar y compartir el software", "Solo usar el programa si pagas", "Ver el programa sin poder instalarlo", "Venderlo sin dar el código"], correcta: "Usar, estudiar, modificar y compartir el software", explicacion: "Además exige que las versiones modificadas sigan siendo libres." },
          { pregunta: "En Creative Commons, la condición BY significa:", opciones: ["Dar crédito a la persona autora", "Prohibido compartir", "Solo uso comercial", "Borrar el nombre del autor"], correcta: "Dar crédito a la persona autora", explicacion: "BY (atribución) pide reconocer quién hizo la obra." },
          { pregunta: "¿Cuántos bits tiene un byte?", opciones: ["8", "2", "10", "1 000"], correcta: "8", explicacion: "Un byte está formado por 8 bits." },
          { pregunta: "La velocidad de conexión a internet se mide en:", opciones: ["Bits por segundo", "Hercios", "Gramos", "Píxeles"], correcta: "Bits por segundo", explicacion: "Por ejemplo, 20 Mbps son 20 megabits por segundo." },
          { pregunta: "Los niveles de acceso a la tecnología incluyen, además de la conexión:", opciones: ["Las habilidades para usarla y contenidos útiles", "Solo tener el celular más caro", "Únicamente la marca del equipo", "Nada más; con señal basta"], correcta: "Las habilidades para usarla y contenidos útiles", explicacion: "El acceso va más allá de lo material: también cuentan las competencias digitales." }
        ]
      },
      {
        id: "cd1-3",
        proposito: "Propósito formativo 3",
        titulo: "¿Quién se Queda con tus Datos? Tecnología y Poder",
        icono: "🕵️",
        imagen: "linear-gradient(135deg, #7f1d1d, #9f1239)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Muchas aplicaciones son «gratis» porque <strong>el producto eres tú</strong>: tu atención y tus datos se venden a anunciantes. Pensar críticamente la tecnología es preguntar quién gana y quién pierde con ella.
          </div>

          <h4>Conceptos para analizar el mundo digital</h4>
          <table class="tabla-estudio">
            <tr><th>Concepto</th><th>Qué significa</th></tr>
            <tr><td>Corporaciones de innovación tecnológica</td><td>Grandes empresas (como Google, Apple, Microsoft o Meta) que dominan el hardware, el software y los servicios que usamos a diario.</td></tr>
            <tr><td>Colonialismo de datos</td><td>Extraer datos de personas y comunidades, muchas veces del Sur Global, para generar ganancias en otros países.</td></tr>
            <tr><td>Mercantilización de la atención</td><td>Las plataformas diseñan funciones (avisos, desplazamiento infinito, videos que se reproducen solos) para que pases más tiempo y vean más anuncios.</td></tr>
            <tr><td>Dependencia tecnológica</td><td>Cuando un país o comunidad depende de tecnología hecha fuera y pierde autonomía para decidir.</td></tr>
            <tr><td>Brecha digital</td><td>Desigualdad en el acceso y uso de la tecnología por razones económicas, regionales o de género.</td></tr>
          </table>

          <h4>Algunos datos de México</h4>
          <p>Según la ENDUTIH 2023 del INEGI y el IFT, el 97.1% de las personas usuarias de internet se conecta con el celular y solo el 44% con computadora. En el país, el 85.5% de la población urbana usa internet, pero en el ámbito rural la cifra baja al 66%. Las personas de 12 a 17 años lo usan unas 5.6 horas al día.</p>
          <p>La ONU (2023) señala que en los países de bajos ingresos el 90% de las jóvenes no tiene acceso a internet. La brecha también es <strong>de género</strong>.</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Durante un día, anota cuántas veces abres tu red social favorita y cuántos anuncios ves. En equipo, respondan: ¿qué datos tuyos crees que usa la aplicación para elegir esos anuncios?</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Según la ENDUTIH del INEGI, Chiapas está entre los estados con menor proporción de personas usuarias de internet. En muchas familias el único celular lo usa el papá o el hermano mayor, y las mujeres tienen menos tiempo para conectarse. ¿Qué medidas se podrían tomar en casa para que todas y todos tengan acceso?
          </div>
        `,
        actividades: [
          { pregunta: "La mercantilización de la atención consiste en:", opciones: ["Vender la atención de las personas usuarias a anunciantes", "Regalar celulares", "Prohibir el uso de redes sociales", "Pagar a quienes usan una aplicación"], correcta: "Vender la atención de las personas usuarias a anunciantes", explicacion: "Las plataformas capturan tu tiempo y lo convierten en ganancias por publicidad." },
          { pregunta: "El colonialismo de datos se refiere a:", opciones: ["Extraer datos de personas y comunidades para generar ganancias en otro lugar", "Guardar archivos en una USB", "Estudiar la historia de la Colonia", "Usar software libre"], correcta: "Extraer datos de personas y comunidades para generar ganancias en otro lugar", explicacion: "Los datos se tratan como materia prima, igual que antes los recursos naturales." },
          { pregunta: "Según la ENDUTIH 2023, el principal equipo para conectarse a internet en México es:", opciones: ["El celular", "La computadora", "La consola de videojuegos", "La televisión inteligente"], correcta: "El celular", explicacion: "El 97.1% de las personas usuarias se conecta con el smartphone." },
          { pregunta: "La brecha digital puede deberse a razones:", opciones: ["Socioeconómicas, regionales y de género", "Solo de edad", "Únicamente de gustos personales", "Ninguna; todos tienen el mismo acceso"], correcta: "Socioeconómicas, regionales y de género", explicacion: "El programa pide analizar esas tres desigualdades." },
          { pregunta: "La dependencia tecnológica limita:", opciones: ["La autonomía de un país o comunidad para decidir", "La velocidad del procesador", "La batería del celular", "El tamaño de la pantalla"], correcta: "La autonomía de un país o comunidad para decidir", explicacion: "Depender de tecnología ajena reduce la soberanía y la innovación propia." }
        ]
      },
      {
        id: "cd1-4",
        proposito: "Propósito formativo 4",
        titulo: "Software Libre: Libertad para Usar, Estudiar y Compartir",
        icono: "🐧",
        imagen: "linear-gradient(135deg, #065f46, #15803d)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> «Libre» no significa solo «gratis»: significa que respeta la <strong>libertad</strong> de las personas usuarias. Hay programas libres para casi todo lo que necesitas en la escuela.
          </div>

          <h4>Las 4 libertades del software libre</h4>
          <table class="tabla-estudio">
            <tr><th>Libertad</th><th>Qué puedes hacer</th></tr>
            <tr><td>0</td><td>Usar el programa con cualquier propósito.</td></tr>
            <tr><td>1</td><td>Estudiar cómo funciona y modificarlo (requiere acceso al código fuente).</td></tr>
            <tr><td>2</td><td>Distribuir copias para ayudar a otras personas.</td></tr>
            <tr><td>3</td><td>Distribuir tus versiones modificadas para que toda la comunidad se beneficie.</td></tr>
          </table>

          <h4>Software libre vs. open source</h4>
          <p>El <strong>software libre</strong> (Free Software Foundation, 1985) pone el acento en la ética y la libertad. El término <strong>open source</strong> o código abierto (1998) pone el acento en las ventajas técnicas de compartir el código. En la práctica, muchos programas son las dos cosas.</p>

          <h4>Alternativas libres para la escuela</h4>
          <table class="tabla-estudio">
            <tr><th>Para…</th><th>Programa privativo común</th><th>Alternativa libre</th></tr>
            <tr><td>Textos</td><td>Microsoft Word</td><td>LibreOffice Writer</td></tr>
            <tr><td>Hojas de cálculo</td><td>Microsoft Excel</td><td>LibreOffice Calc</td></tr>
            <tr><td>Presentaciones</td><td>PowerPoint</td><td>LibreOffice Impress</td></tr>
            <tr><td>Imágenes</td><td>Photoshop</td><td>GIMP o Krita</td></tr>
            <tr><td>Sistema operativo</td><td>Windows</td><td>GNU/Linux (Ubuntu, Linux Mint…)</td></tr>
          </table>
          <p>El <strong>software como servicio</strong> (programas que usas en línea mediante suscripción) también tiene alternativas libres y te ayuda a no depender de una sola empresa.</p>

          <h4>Cultura hacker y el «hazlo tú mismx»</h4>
          <p>Para la cultura <em>hacker</em> original, «hackear» no es robar, sino <strong>explorar cómo funcionan las cosas</strong>, repararlas y mejorarlas compartiendo el conocimiento. Reparar tu celular o reutilizar una computadora vieja con GNU/Linux es parte de este espíritu.</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Instala LibreOffice (o úsalo en el centro de cómputo) y elabora tu horario de clases en Calc. Guárdalo en formato abierto (.ods) y también en .xlsx: ¿se abre bien en los dos programas?</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Una computadora vieja que ya no funciona bien con Windows puede revivir con una distribución ligera de GNU/Linux. Así el centro de cómputo de un plantel EMSAD puede seguir funcionando sin pagar licencias.
          </div>
        `,
        actividades: [
          { pregunta: "La libertad 1 del software libre permite:", opciones: ["Estudiar cómo funciona el programa y modificarlo", "Usarlo solo un mes", "Venderlo sin el código", "Borrar el programa"], correcta: "Estudiar cómo funciona el programa y modificarlo", explicacion: "Para eso se necesita acceso al código fuente." },
          { pregunta: "¿Cuál es una alternativa libre a Microsoft Excel?", opciones: ["LibreOffice Calc", "PowerPoint", "Photoshop", "WhatsApp"], correcta: "LibreOffice Calc", explicacion: "Calc es la hoja de cálculo libre de la suite LibreOffice." },
          { pregunta: "Software libre significa principalmente:", opciones: ["Que respeta la libertad de las personas usuarias", "Que siempre es de mala calidad", "Que no se puede instalar", "Que es ilegal"], correcta: "Que respeta la libertad de las personas usuarias", explicacion: "Puede ser gratuito, pero lo esencial son sus 4 libertades." },
          { pregunta: "Para la cultura hacker original, hackear es:", opciones: ["Explorar cómo funcionan las cosas y compartir el conocimiento", "Robar contraseñas", "Romper computadoras", "Copiar tareas"], correcta: "Explorar cómo funcionan las cosas y compartir el conocimiento", explicacion: "El sentido original es la curiosidad y la colaboración." },
          { pregunta: "GNU/Linux es:", opciones: ["Un sistema operativo libre", "Un navegador", "Una red social", "Un procesador"], correcta: "Un sistema operativo libre", explicacion: "Une el proyecto GNU con el núcleo Linux." }
        ]
      },
      {
        id: "cd1-5",
        proposito: "Propósito formativo 5",
        titulo: "Seguridad Digital, Privacidad y Uso Ético de la IA",
        icono: "🔐",
        imagen: "linear-gradient(135deg, #1e3a8a, #4338ca)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> En el ciberespacio también hay <strong>leyes y derechos</strong>. Cuidar tu información y la de otras personas es parte de ser ciudadana o ciudadano digital.
          </div>

          <h4>Normatividad en México</h4>
          <ul>
            <li><strong>Constitución, artículo 6.°:</strong> reconoce el derecho de acceso a las tecnologías de la información y a internet de banda ancha.</li>
            <li><strong>Protección de datos personales:</strong> la ley federal te da los derechos <strong>ARCO</strong>: Acceso, Rectificación, Cancelación y Oposición sobre tus datos.</li>
            <li><strong>Ley Olimpia:</strong> reformas que reconocen la <strong>violencia digital</strong>, como difundir imágenes íntimas sin consentimiento. Es un delito.</li>
          </ul>

          <h4>Reglas básicas de seguridad</h4>
          <table class="tabla-estudio">
            <tr><th>Riesgo</th><th>Cómo protegerte</th></tr>
            <tr><td>Contraseñas débiles</td><td>Usa frases largas y distintas para cada cuenta; activa la verificación en dos pasos.</td></tr>
            <tr><td>Phishing (engaño)</td><td>No abras enlaces de mensajes que prometen premios o piden tus datos con urgencia.</td></tr>
            <tr><td>Exceso de datos públicos</td><td>Revisa la privacidad de tus redes y no publiques tu dirección ni tu ubicación en tiempo real.</td></tr>
            <tr><td>Acoso o violencia digital</td><td>Guarda evidencias (capturas), bloquea, denuncia en la plataforma y busca apoyo de un adulto de confianza.</td></tr>
          </table>

          <h4>Uso responsable y ético de la Inteligencia Artificial</h4>
          <ul>
            <li>La IA puede <strong>equivocarse o inventar datos</strong>: verifica siempre con otras fuentes.</li>
            <li>No entregues como tuyo un trabajo hecho por IA: úsala para entender, no para copiar.</li>
            <li>No subas fotos ni datos personales de otras personas sin su permiso.</li>
            <li>Las IA pueden tener <strong>sesgos</strong> (por género, origen o lengua) porque aprenden de datos humanos.</li>
          </ul>

          <h4>Licenciamiento copyleft</h4>
          <p>El <em>copyleft</em> usa el derecho de autor «al revés»: en lugar de prohibir, garantiza que una obra y sus versiones modificadas sigan siendo libres. La GPL y la condición SA de Creative Commons son copyleft.</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Revisa la configuración de privacidad de una de tus redes sociales: ¿quién puede ver tus publicaciones?, ¿la aplicación conoce tu ubicación? Activa la verificación en dos pasos en tu correo.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> En los grupos de WhatsApp de la comunidad circulan mensajes falsos como «regalan apoyos del gobierno, manda tus datos aquí». Antes de reenviarlos, verifica en la página oficial de la institución: así proteges a tu familia y a tus vecinos.
          </div>
        `,
        actividades: [
          { pregunta: "Los derechos ARCO sobre tus datos personales son:", opciones: ["Acceso, Rectificación, Cancelación y Oposición", "Almacenar, Robar, Copiar y Ocultar", "Abrir, Registrar, Comprar y Ofrecer", "Ninguno; los datos son de las empresas"], correcta: "Acceso, Rectificación, Cancelación y Oposición", explicacion: "Te permiten saber qué datos tienen de ti, corregirlos, borrarlos u oponerte a su uso." },
          { pregunta: "Difundir imágenes íntimas de alguien sin su consentimiento es:", opciones: ["Violencia digital y un delito", "Una broma sin consecuencias", "Legal si es en un grupo privado", "Permitido si la persona es tu amigo"], correcta: "Violencia digital y un delito", explicacion: "La Ley Olimpia reconoce y sanciona la violencia digital." },
          { pregunta: "Un mensaje que te pide tus datos con urgencia para darte un premio probablemente es:", opciones: ["Phishing", "Un regalo seguro", "Un aviso oficial", "Una actualización del sistema"], correcta: "Phishing", explicacion: "Es un engaño para robar información; no abras el enlace." },
          { pregunta: "Un uso ético de la Inteligencia Artificial en la escuela es:", opciones: ["Usarla para entender un tema y verificar lo que dice", "Entregar como propio un trabajo hecho por IA", "Subir fotos de compañeros sin permiso", "Creer todo lo que responde"], correcta: "Usarla para entender un tema y verificar lo que dice", explicacion: "La IA puede equivocarse y no sustituye tu aprendizaje." },
          { pregunta: "¿Qué artículo de la Constitución reconoce el derecho de acceso a internet?", opciones: ["Artículo 6.°", "Artículo 27", "Artículo 123", "Artículo 130"], correcta: "Artículo 6.°", explicacion: "Desde 2013 incluye el acceso a las TIC y a la banda ancha." }
        ]
      },
      {
        id: "cd1-6",
        proposito: "Propósito formativo 6",
        titulo: "Identidad Digital y Huella Ecológica de la Tecnología",
        icono: "♻️",
        imagen: "linear-gradient(135deg, #3f6212, #15803d)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Todo lo que haces en línea deja una <strong>huella digital</strong> que forma tu identidad digital. Y cada aparato y cada video también deja una <strong>huella ecológica</strong> en el planeta.
          </div>

          <h4>Ciudadanía e identidad digital</h4>
          <p>Tu <strong>identidad digital</strong> es la imagen que los demás se forman de ti con lo que publicas, comentas y compartes. Ser <strong>ciudadana o ciudadano digital</strong> significa ejercer tus derechos en línea y respetar los de los demás.</p>
          <ul>
            <li>Antes de publicar, pregúntate: ¿me gustaría que esto lo viera mi familia o la escuela dentro de 5 años?</li>
            <li>Lo que se sube a internet es muy difícil de borrar por completo.</li>
          </ul>

          <h4>Credenciales de acceso</h4>
          <p>Tu usuario y contraseña son la llave de tu identidad. Nunca los compartas, cierra la sesión en equipos públicos (como el ciber) y usa un correo de recuperación que sí consultes.</p>

          <h4>Plataformas de uso cotidiano</h4>
          <table class="tabla-estudio">
            <tr><th>Uso</th><th>Ejemplos</th></tr>
            <tr><td>Comunicarte</td><td>Correo electrónico, WhatsApp, Signal, Telegram</td></tr>
            <tr><td>Estudiar</td><td>Plataformas escolares, Wikipedia, simuladores PhET</td></tr>
            <tr><td>Trámites</td><td>Páginas oficiales (CURP, becas, inscripción)</td></tr>
          </table>

          <h4>Contaminación digital y tecnológica</h4>
          <ul>
            <li><strong>Basura electrónica:</strong> celulares, cargadores y pilas contienen metales tóxicos. México es de los mayores generadores de basura electrónica de América Latina.</li>
            <li><strong>Consumo de energía:</strong> los centros de datos que guardan nuestras fotos y videos usan mucha electricidad y agua.</li>
            <li><strong>Qué puedes hacer:</strong> reparar antes de cambiar, llevar los aparatos a un acopio de residuos electrónicos, bajar la calidad del video cuando no la necesitas y borrar archivos que ya no usas.</li>
          </ul>

          <h4>🛠️ Manos a la obra</h4>
          <p>Busca tu nombre en internet: ¿qué aparece? Después, hagan en el grupo un inventario de aparatos electrónicos que ya no sirven en sus casas y propongan dónde llevarlos.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> En muchas comunidades las pilas y los celulares viejos terminan en la basura común o quemados, y sus metales contaminan el suelo y los ríos. Organizar un acopio de residuos electrónicos en el plantel es una forma concreta de ciudadanía digital.
          </div>
        `,
        actividades: [
          { pregunta: "La identidad digital es:", opciones: ["La imagen que los demás se forman de ti con lo que haces en línea", "Tu credencial del INE", "La marca de tu celular", "Tu número de teléfono"], correcta: "La imagen que los demás se forman de ti con lo que haces en línea", explicacion: "Se construye con lo que publicas, comentas y compartes." },
          { pregunta: "Al usar una computadora en un ciber, lo más seguro es:", opciones: ["Cerrar la sesión de tus cuentas al terminar", "Dejar abierta tu cuenta", "Guardar tu contraseña en el navegador", "Anotar tu contraseña en un papel junto al teclado"], correcta: "Cerrar la sesión de tus cuentas al terminar", explicacion: "Así evitas que otra persona entre con tu identidad." },
          { pregunta: "¿Qué hacer con un celular viejo que ya no sirve?", opciones: ["Llevarlo a un acopio de residuos electrónicos", "Quemarlo", "Tirarlo al río", "Enterrarlo en el patio"], correcta: "Llevarlo a un acopio de residuos electrónicos", explicacion: "Contiene metales tóxicos que deben recuperarse de forma segura." },
          { pregunta: "La contaminación digital incluye:", opciones: ["El consumo de energía de los centros de datos y la basura electrónica", "Solo los virus informáticos", "Únicamente el ruido de las bocinas", "Nada; lo digital no contamina"], correcta: "El consumo de energía de los centros de datos y la basura electrónica", explicacion: "Lo digital tiene una huella ecológica real." },
          { pregunta: "Antes de publicar algo en redes conviene preguntarte:", opciones: ["Si te gustaría que lo vieran tu familia o la escuela en unos años", "Cuántos likes tendrá", "Si es más largo que el de tus amigos", "Nada; todo se puede borrar"], correcta: "Si te gustaría que lo vieran tu familia o la escuela en unos años", explicacion: "Lo que se sube a internet es muy difícil de borrar por completo." }
        ]
      },
      {
        id: "cd1-7",
        proposito: "Propósito formativo 7",
        titulo: "Resolver Problemas: Pasos y Diagramas de Flujo",
        icono: "🧩",
        imagen: "linear-gradient(135deg, #b45309, #c2410c)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Un <strong>algoritmo</strong> es una serie de pasos ordenados y precisos para resolver un problema. Las recetas de cocina, las instrucciones para llegar a un lugar y los programas de computadora son algoritmos.
          </div>

          <h4>Pasos para solucionar un problema</h4>
          <ol>
            <li><strong>Identificar</strong> el problema por resolver: ¿qué quiero lograr?</li>
            <li><strong>Comprender</strong> el problema: ¿qué datos tengo?, ¿qué me falta?</li>
            <li><strong>Analizar alternativas</strong> de solución.</li>
            <li><strong>Seleccionar</strong> la mejor alternativa.</li>
            <li><strong>Representar</strong> la solución con un método, una técnica o un diagrama de flujo, y probarla.</li>
          </ol>

          <h4>Símbolos del diagrama de flujo</h4>
          <table class="tabla-estudio">
            <tr><th>Símbolo</th><th>Significado</th></tr>
            <tr><td>Óvalo</td><td>Inicio o fin</td></tr>
            <tr><td>Paralelogramo</td><td>Entrada o salida de datos (leer, mostrar)</td></tr>
            <tr><td>Rectángulo</td><td>Proceso (un cálculo o acción)</td></tr>
            <tr><td>Rombo</td><td>Decisión (una pregunta de sí o no)</td></tr>
            <tr><td>Flechas</td><td>Indican el orden en que se siguen los pasos</td></tr>
          </table>

          <figure class="diagrama-quimica">
            <img src="images/cultura-digital/diagrama-flujo.svg" alt="Diagrama de flujo para saber si un alumno aprobó" loading="lazy">
            <figcaption>Diagrama de flujo: leer la calificación y decidir si aprobó (mayor o igual a 6).</figcaption>
          </figure>

          <h4>Del diagrama al pseudocódigo</h4>
          <div class="formula">Inicio → Leer calificación → Si calificación ≥ 6 entonces Mostrar «Aprobado» si no Mostrar «No aprobado» → Fin</div>

          <details class="ejercicio-estudio">
            <summary>Ordena los pasos para preparar café de olla: hervir el agua, servir, poner el café y el piloncillo, colar.</summary>
            <div>1) Hervir el agua, 2) poner el café y el piloncillo, 3) colar, 4) servir.</div>
          </details>

          <h4>🛠️ Manos a la obra</h4>
          <p>Elige un problema de tu escuela (por ejemplo, la fila larga en la cooperativa) y sigue los cinco pasos. Dibuja el diagrama de flujo de tu solución en una hoja o en LibreOffice Draw.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Una cooperativa de café de la Sierra puede usar un algoritmo para clasificar su cosecha: «Si el grano tiene defectos, va a segunda calidad; si no, va a exportación». Pensar en pasos ordenados ayuda a organizar el trabajo de toda la comunidad.
          </div>
        `,
        actividades: [
          { pregunta: "Un algoritmo es:", opciones: ["Una serie de pasos ordenados para resolver un problema", "Un tipo de computadora", "Una red social", "Un virus"], correcta: "Una serie de pasos ordenados para resolver un problema", explicacion: "Una receta de cocina es un buen ejemplo de algoritmo." },
          { pregunta: "En un diagrama de flujo, el rombo representa:", opciones: ["Una decisión", "El inicio", "Un cálculo", "La impresión de resultados"], correcta: "Una decisión", explicacion: "Plantea una pregunta con dos salidas: sí o no." },
          { pregunta: "¿Cuál es el primer paso para resolver un problema?", opciones: ["Identificar el problema por resolver", "Seleccionar la solución", "Dibujar el diagrama", "Mostrar el resultado"], correcta: "Identificar el problema por resolver", explicacion: "Sin saber qué quieres lograr no puedes buscar soluciones." },
          { pregunta: "El símbolo para inicio y fin de un diagrama de flujo es:", opciones: ["El óvalo", "El rombo", "El rectángulo", "El paralelogramo"], correcta: "El óvalo", explicacion: "Marca dónde empieza y dónde termina el algoritmo." },
          { pregunta: "Leer un dato o mostrar un resultado se representa con:", opciones: ["Un paralelogramo", "Un rombo", "Un círculo pequeño", "Una estrella"], correcta: "Un paralelogramo", explicacion: "Es el símbolo de entrada y salida de datos." }
        ]
      },
      {
        id: "cd1-8",
        proposito: "Propósito formativo 8",
        titulo: "Lenguaje Algorítmico: Datos, Variables y Operadores",
        icono: "🔣",
        imagen: "linear-gradient(135deg, #6d28d9, #4338ca)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Para que una computadora resuelva un problema hay que darle <strong>datos</strong> y decirle qué hacer con ellos usando <strong>variables, constantes y operadores</strong>.
          </div>

          <h4>Dato e información</h4>
          <p>Un <strong>dato</strong> es un valor aislado («28»). La <strong>información</strong> es el dato con sentido («la temperatura en Tuxtla hoy es de 28 °C»).</p>

          <h4>Variables y constantes</h4>
          <table class="tabla-estudio">
            <tr><th>Elemento</th><th>Qué es</th><th>Ejemplo</th></tr>
            <tr><td>Variable</td><td>Un espacio con nombre cuyo valor puede cambiar.</td><td>edad ← 16</td></tr>
            <tr><td>Constante</td><td>Un valor que no cambia durante el programa.</td><td>PI ← 3.1416</td></tr>
            <tr><td>Expresión</td><td>Combinación de variables, constantes y operadores que da un resultado.</td><td>area ← PI * radio * radio</td></tr>
          </table>

          <h4>Operadores</h4>
          <table class="tabla-estudio">
            <tr><th>Tipo</th><th>Operadores</th><th>Ejemplo y resultado</th></tr>
            <tr><td>Aritméticos</td><td>+ − * / y mod (residuo)</td><td>17 mod 5 = 2</td></tr>
            <tr><td>Relacionales</td><td>&gt; &lt; ≥ ≤ = ≠</td><td>8 ≥ 6 → verdadero</td></tr>
            <tr><td>Lógicos</td><td>Y, O, NO</td><td>(edad ≥ 15) Y (promedio ≥ 8) → verdadero solo si se cumplen las dos</td></tr>
          </table>
          <p>Como en matemáticas, primero se resuelven los paréntesis, luego multiplicaciones y divisiones y al final sumas y restas: 2 + 3 * 4 = 14.</p>

          <h4>Estructuras de control</h4>
          <ul>
            <li><strong>Condicional (Si… entonces… si no):</strong> elige entre dos caminos.</li>
            <li><strong>Selectiva (Según sea):</strong> elige entre varios casos, por ejemplo el día de la semana.</li>
            <li><strong>Repetitiva (Mientras / Para):</strong> repite pasos, por ejemplo sumar las calificaciones de 30 alumnos.</li>
          </ul>
          <div class="formula">Para i ← 1 hasta 5 hacer  Mostrar i * 3  FinPara   →   3, 6, 9, 12, 15</div>

          <details class="ejercicio-estudio">
            <summary>Si x ← 10 y y ← 4, ¿cuánto vale (x − y) * 2 y es verdadero que x mod y = 2?</summary>
            <div>(10 − 4) * 2 = 12. 10 mod 4 = 2, así que la expresión es verdadera.</div>
          </details>

          <h4>🛠️ Manos a la obra</h4>
          <p>Prueba tus algoritmos en una herramienta libre como PSeInt (pseudocódigo en español) o Scratch: escribe un programa que pida tres calificaciones, calcule el promedio y diga si aprobaste.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Una tienda comunitaria puede calcular su venta del día con variables (precio, cantidad), una expresión (total ← precio * cantidad) y una estructura repetitiva que suma cada venta. ¡Es la lógica que usan las cajas registradoras!
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es la diferencia entre una variable y una constante?", opciones: ["El valor de la variable puede cambiar y el de la constante no", "No hay diferencia", "La constante siempre es una palabra", "La variable solo guarda números negativos"], correcta: "El valor de la variable puede cambiar y el de la constante no", explicacion: "Por ejemplo, la edad cambia, pero PI siempre vale lo mismo." },
          { pregunta: "¿Cuánto es 17 mod 5?", opciones: ["2", "3", "3.4", "12"], correcta: "2", explicacion: "17 ÷ 5 = 3 y sobran 2; mod da el residuo." },
          { pregunta: "La expresión (8 ≥ 6) Y (3 > 5) es:", opciones: ["Falsa", "Verdadera", "Igual a 14", "Un error"], correcta: "Falsa", explicacion: "Con Y, ambas condiciones deben cumplirse, y 3 > 5 es falso." },
          { pregunta: "Para repetir una acción 30 veces se usa una estructura:", opciones: ["Repetitiva", "Condicional", "Constante", "Relacional"], correcta: "Repetitiva", explicacion: "Las estructuras Mientras o Para repiten pasos." },
          { pregunta: "¿Cuánto vale 2 + 3 * 4?", opciones: ["14", "20", "24", "9"], correcta: "14", explicacion: "Primero se multiplica (3 * 4 = 12) y luego se suma 2." }
        ]
      }
    ]
  },

  2: {
    titulo: "Cultura Digital II",
    subtitulo: "Aprendizaje individual y colaborativo",
    semestre: "Segundo Semestre",
    clase: "s2",
    icono: "🤝",
    descripcion: "Trabajo colaborativo con herramientas libres, búsqueda y evaluación de información, investigación digital, análisis de datos y páginas web.",
    meta: "Interactúe con las TICCAD para potenciar su aprendizaje autónomo y colaborativo, de una forma creativa e innovadora, de acuerdo con las características y necesidades de su contexto.",
    contexto: "Trabajar en equipo no siempre es fácil cuando cada quien vive en una comunidad distinta. Con herramientas digitales gratuitas pueden escribir un mismo documento, encuestar a su comunidad, analizar los datos y compartir los resultados con todo el pueblo.",
    temas: [
      {
        id: "cd2-1",
        proposito: "Propósito formativo 1",
        titulo: "Trabajo Colaborativo Digital",
        icono: "👥",
        imagen: "linear-gradient(135deg, #9f1239, #be123c)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> El <strong>trabajo colaborativo digital</strong> es cuando dos o más personas construyen algo juntas usando herramientas en línea: escriben, comentan y corrigen el mismo documento aunque estén en lugares distintos.
          </div>

          <h4>Colaborar no es repartirse el trabajo</h4>
          <p>Si cada quien hace un pedazo y al final lo pegan, solo se <em>cooperó</em>. <strong>Colaborar</strong> es discutir, revisar el trabajo de los demás y tomar decisiones juntos. Para lograrlo conviene:</p>
          <ul>
            <li>Definir <strong>roles</strong> (coordinación, redacción, revisión, diseño).</li>
            <li>Acordar <strong>fechas</strong> y un solo documento compartido.</li>
            <li>Usar <strong>comentarios</strong> en lugar de borrar lo que escribió otra persona.</li>
          </ul>

          <h4>Herramientas de trabajo colaborativo libre</h4>
          <table class="tabla-estudio">
            <tr><th>Herramienta</th><th>Para qué sirve</th><th>Ventaja</th></tr>
            <tr><td>CryptPad</td><td>Documentos, hojas de cálculo, presentaciones, encuestas y pizarras compartidas.</td><td>Cifra la información; no necesitas dar tus datos personales.</td></tr>
            <tr><td>Riseup Pad</td><td>Escribir un texto entre varias personas al mismo tiempo.</td><td>Muy ligero; funciona bien con poca señal.</td></tr>
            <tr><td>LibreOffice</td><td>Editar documentos sin conexión y compartirlos después.</td><td>No depende de internet.</td></tr>
          </table>

          <h4>Aprendizaje autónomo</h4>
          <p>Aprender por tu cuenta también es una habilidad digital: fijar una meta, buscar un recurso confiable (un video, un simulador, un libro libre), practicar y revisar si lo lograste.</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>En equipo, abran un documento en CryptPad o Riseup Pad y escriban juntos un resumen de un tema de otra materia. Cada integrante debe hacer al menos un comentario de mejora al texto de otra persona.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Si un compañero vive en una ranchería sin señal, el equipo puede dejarle el documento descargado en LibreOffice para que avance sin conexión y lo suba al documento compartido cuando llegue a la cabecera municipal.
          </div>
        `,
        actividades: [
          { pregunta: "La diferencia entre cooperar y colaborar es que al colaborar:", opciones: ["Se discute, se revisa y se decide en conjunto", "Cada quien hace su parte y se pega al final", "Una sola persona hace todo", "No se usa ninguna herramienta"], correcta: "Se discute, se revisa y se decide en conjunto", explicacion: "Colaborar implica construir el resultado entre todos." },
          { pregunta: "CryptPad es una herramienta que:", opciones: ["Permite trabajar documentos compartidos y cifra la información", "Solo sirve para jugar", "Es una red social de fotos", "Es un sistema operativo"], correcta: "Permite trabajar documentos compartidos y cifra la información", explicacion: "Es una alternativa libre que cuida la privacidad." },
          { pregunta: "En un documento compartido, para sugerir un cambio conviene:", opciones: ["Dejar un comentario", "Borrar lo que escribió otra persona", "Copiar el documento a tu nombre", "No decir nada"], correcta: "Dejar un comentario", explicacion: "Así se respeta el trabajo de los demás y se decide juntos." },
          { pregunta: "Una herramienta que permite avanzar sin conexión es:", opciones: ["LibreOffice", "Una videollamada", "Un pad en línea", "Una transmisión en vivo"], correcta: "LibreOffice", explicacion: "Se instala en el equipo y no necesita internet." },
          { pregunta: "Definir roles en un equipo sirve para:", opciones: ["Que cada integrante sepa su responsabilidad", "Que una sola persona trabaje", "Evitar hablar con el equipo", "Terminar sin revisar"], correcta: "Que cada integrante sepa su responsabilidad", explicacion: "Los roles organizan el trabajo colaborativo." }
        ]
      },
      {
        id: "cd2-2",
        proposito: "Propósito formativo 2",
        titulo: "Buscar, Discriminar y Gestionar Información",
        icono: "🔎",
        imagen: "linear-gradient(135deg, #be123c, #c2410c)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> En internet hay muchísima información, pero no toda es confiable. <strong>Discriminar</strong> información es separar lo verdadero y útil de lo falso o engañoso.
          </div>

          <h4>Buscar mejor</h4>
          <table class="tabla-estudio">
            <tr><th>Estrategia</th><th>Ejemplo</th></tr>
            <tr><td>Usar palabras clave, no oraciones largas</td><td>roya café Chiapas control</td></tr>
            <tr><td>Comillas para una frase exacta</td><td>«energía solar comunitaria»</td></tr>
            <tr><td>Buscar en sitios oficiales</td><td>agregar site:gob.mx o site:unam.mx</td></tr>
            <tr><td>Excluir palabras con el signo menos</td><td>jaguar -auto</td></tr>
          </table>

          <h4>¿Es confiable? Revisa antes de compartir</h4>
          <ul>
            <li><strong>¿Quién lo dice?</strong> Una institución, una persona experta o una cuenta anónima.</li>
            <li><strong>¿Cuándo se publicó?</strong> Un dato de hace diez años puede estar desactualizado.</li>
            <li><strong>¿Cita fuentes?</strong> Los textos serios dicen de dónde sacan sus datos.</li>
            <li><strong>¿Otras fuentes dicen lo mismo?</strong> Contrasta al menos dos.</li>
            <li><strong>¿Busca asustarte o enojarte?</strong> Los titulares exagerados suelen ser desinformación.</li>
          </ul>

          <h4>Gestionar la información</h4>
          <p>Guarda tus fuentes con orden: anota el autor, el título, la fecha y el enlace. Una carpeta por proyecto y nombres claros de archivo («entrevista_don_pedro_2026.ods») ahorran mucho tiempo.</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Elijan una noticia que haya circulado en los grupos de WhatsApp de su comunidad y verifíquenla con los cinco criterios. Presenten al grupo si es confiable y por qué.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Cuando hay temporada de lluvias circulan audios falsos sobre «presas que se van a romper». Consultar la página oficial de Protección Civil del estado antes de reenviar evita el pánico en la comunidad.
          </div>
        `,
        actividades: [
          { pregunta: "Discriminar información significa:", opciones: ["Separar lo confiable de lo falso o engañoso", "Rechazar a las personas que la publican", "Borrar todo lo que encuentras", "Compartir sin leer"], correcta: "Separar lo confiable de lo falso o engañoso", explicacion: "Es evaluar la calidad de la información antes de usarla." },
          { pregunta: "Para buscar una frase exacta se usan:", opciones: ["Comillas", "Signos de interrogación", "Mayúsculas", "Emojis"], correcta: "Comillas", explicacion: "El buscador muestra resultados con esas palabras en ese orden." },
          { pregunta: "Una señal de posible desinformación es:", opciones: ["Un titular exagerado que busca asustarte", "Que cite varias fuentes oficiales", "Que tenga fecha reciente", "Que la publique una institución reconocida"], correcta: "Un titular exagerado que busca asustarte", explicacion: "La desinformación apela a las emociones para que compartas rápido." },
          { pregunta: "Para comprobar un dato conviene:", opciones: ["Contrastarlo con al menos otra fuente", "Creerlo si tiene muchos likes", "Reenviarlo de inmediato", "Preguntar solo a un amigo"], correcta: "Contrastarlo con al menos otra fuente", explicacion: "Si fuentes confiables coinciden, es más probable que sea cierto." },
          { pregunta: "Gestionar la información incluye:", opciones: ["Guardar autor, título, fecha y enlace de tus fuentes", "Olvidar de dónde sacaste los datos", "Guardar todo en una sola carpeta sin nombres", "Copiar sin citar"], correcta: "Guardar autor, título, fecha y enlace de tus fuentes", explicacion: "Así puedes citar y volver a consultar tus fuentes." }
        ]
      },
      {
        id: "cd2-3",
        proposito: "Propósito formativo 3",
        titulo: "Técnicas de Investigación Digital",
        icono: "🧭",
        imagen: "linear-gradient(135deg, #7c2d12, #9a3412)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Las herramientas digitales te permiten <strong>investigar</strong> una situación de tu comunidad: recopilar datos, organizarlos y difundir lo que descubres.
          </div>

          <h4>Técnicas y métodos</h4>
          <table class="tabla-estudio">
            <tr><th>Técnica</th><th>En qué consiste</th><th>Herramienta digital</th></tr>
            <tr><td>Ciberetnografía</td><td>Observar y analizar cómo se comporta una comunidad en línea (un grupo de Facebook, un canal de videos).</td><td>Capturas, notas en un documento</td></tr>
            <tr><td>Análisis de contenido en línea</td><td>Contar y clasificar lo que aparece en publicaciones, noticias o comentarios.</td><td>Hoja de cálculo</td></tr>
            <tr><td>Encuesta</td><td>Preguntas iguales a muchas personas para obtener datos que se pueden contar.</td><td>Formularios de CryptPad</td></tr>
            <tr><td>Entrevista</td><td>Conversación a profundidad con una persona que sabe del tema.</td><td>Grabadora del celular</td></tr>
            <tr><td>Grupo focal</td><td>Plática guiada con un grupo pequeño para conocer opiniones.</td><td>Videollamada o grabación</td></tr>
            <tr><td>Observación</td><td>Registrar lo que ocurre en un lugar o situación.</td><td>Fotos y bitácora</td></tr>
          </table>

          <h4>Ética de la investigación</h4>
          <ul>
            <li>Pide <strong>permiso</strong> antes de grabar o fotografiar a alguien.</li>
            <li>Explica para qué usarás la información y protege los datos personales.</li>
            <li>Respeta la lengua y las costumbres de la comunidad.</li>
          </ul>

          <h4>Ruta de una investigación</h4>
          <ol>
            <li>Pregunta de investigación: ¿qué quiero saber?</li>
            <li>Elegir la técnica adecuada.</li>
            <li>Recopilar y extraer los datos.</li>
            <li>Organizar los datos (tablas, categorías).</li>
            <li>Analizar y difundir los resultados.</li>
          </ol>

          <h4>🛠️ Manos a la obra</h4>
          <p>Diseñen una encuesta de 5 preguntas sobre el acceso a internet en las familias del grupo (¿con qué se conectan?, ¿cuántas horas?, ¿quién usa el celular?). Aplíquenla con un formulario digital o en papel.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Un equipo puede entrevistar a las abuelas y abuelos sobre las plantas medicinales de la comunidad, grabar con su permiso y organizar la información en una tabla. Así se preserva un saber local con herramientas digitales.
          </div>
        `,
        actividades: [
          { pregunta: "La ciberetnografía consiste en:", opciones: ["Observar y analizar comunidades en espacios digitales", "Reparar computadoras", "Crear virus", "Dibujar mapas a mano"], correcta: "Observar y analizar comunidades en espacios digitales", explicacion: "Adapta la etnografía tradicional al mundo en línea." },
          { pregunta: "Para obtener datos que se puedan contar de muchas personas conviene una:", opciones: ["Encuesta", "Entrevista a profundidad", "Fotografía", "Canción"], correcta: "Encuesta", explicacion: "Hace las mismas preguntas a muchas personas." },
          { pregunta: "Un grupo focal es:", opciones: ["Una plática guiada con un grupo pequeño", "Una lente de cámara", "Un grupo de WhatsApp de memes", "Una tabla de datos"], correcta: "Una plática guiada con un grupo pequeño", explicacion: "Sirve para conocer opiniones y experiencias." },
          { pregunta: "Antes de grabar una entrevista es indispensable:", opciones: ["Pedir permiso a la persona", "Subirla a redes", "Cambiar lo que dijo", "No decirle para qué es"], correcta: "Pedir permiso a la persona", explicacion: "La ética de la investigación protege a quienes participan." },
          { pregunta: "El primer paso de una investigación es:", opciones: ["Plantear la pregunta de investigación", "Difundir los resultados", "Hacer gráficas", "Publicar en redes"], correcta: "Plantear la pregunta de investigación", explicacion: "Saber qué quieres averiguar orienta todo lo demás." }
        ]
      },
      {
        id: "cd2-4",
        proposito: "Propósito formativo 4",
        titulo: "Procesar Datos: Estadística con Software Libre",
        icono: "📊",
        imagen: "linear-gradient(135deg, #1d4ed8, #0e7490)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Los datos de una encuesta cobran sentido cuando los <strong>resumimos</strong> con medidas y <strong>gráficas</strong>. El software libre hace estos cálculos por ti.
          </div>

          <h4>Medidas de tendencia central</h4>
          <table class="tabla-estudio">
            <tr><th>Medida</th><th>Qué indica</th><th>Función en LibreOffice Calc</th></tr>
            <tr><td>Media (promedio)</td><td>Suma de los datos entre cuántos son.</td><td>=PROMEDIO(A2:A31)</td></tr>
            <tr><td>Mediana</td><td>El valor de en medio cuando los datos están ordenados.</td><td>=MEDIANA(A2:A31)</td></tr>
            <tr><td>Moda</td><td>El dato que más se repite.</td><td>=MODA(A2:A31)</td></tr>
          </table>

          <h4>Medidas de dispersión</h4>
          <table class="tabla-estudio">
            <tr><th>Medida</th><th>Qué indica</th><th>Función</th></tr>
            <tr><td>Rango</td><td>Diferencia entre el dato mayor y el menor.</td><td>=MAX(A2:A31)-MIN(A2:A31)</td></tr>
            <tr><td>Desviación estándar</td><td>Qué tan alejados están los datos del promedio.</td><td>=DESVEST(A2:A31)</td></tr>
          </table>

          <details class="ejercicio-estudio">
            <summary>Horas de internet al día de 5 estudiantes: 2, 4, 4, 5, 10. Calcula la media, la mediana, la moda y el rango.</summary>
            <div>Media = 25 ÷ 5 = 5 · Mediana = 4 · Moda = 4 · Rango = 10 − 2 = 8. El dato 10 jala la media hacia arriba; la mediana representa mejor al grupo.</div>
          </details>

          <h4>Representaciones gráficas</h4>
          <ul>
            <li><strong>Barras:</strong> comparar categorías (con qué se conectan).</li>
            <li><strong>Circular o de pastel:</strong> partes de un todo (porcentajes que suman 100%).</li>
            <li><strong>Histograma:</strong> cómo se distribuyen datos numéricos (horas de uso).</li>
            <li><strong>Líneas:</strong> cambios a lo largo del tiempo.</li>
          </ul>

          <h4>Software estadístico libre</h4>
          <p>Además de LibreOffice Calc, existen programas gratuitos como <strong>Jamovi</strong> y <strong>JASP</strong>, alternativas a programas de pago como SPSS, y la versión gratuita <strong>XLSTAT Free</strong>.</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Capturen en Calc los resultados de la encuesta del tema anterior, calculen media, mediana, moda y desviación estándar de las horas de uso y hagan una gráfica de barras de los equipos con que se conectan.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Un grupo puede registrar durante un mes la lluvia diaria con un pluviómetro casero, capturar los datos en Calc y graficarlos. Así relacionan Cultura Digital con Ciencias y entienden mejor el clima de su región.
          </div>
        `,
        actividades: [
          { pregunta: "La mediana es:", opciones: ["El valor de en medio de los datos ordenados", "El dato que más se repite", "La suma de todos los datos", "El dato mayor"], correcta: "El valor de en medio de los datos ordenados", explicacion: "Divide los datos ordenados en dos mitades iguales." },
          { pregunta: "En los datos 3, 5, 5, 7, 10, la moda es:", opciones: ["5", "6", "7", "10"], correcta: "5", explicacion: "Es el valor que más se repite (dos veces)." },
          { pregunta: "La desviación estándar indica:", opciones: ["Qué tan alejados están los datos del promedio", "El total de datos", "El dato más pequeño", "La cantidad de gráficas"], correcta: "Qué tan alejados están los datos del promedio", explicacion: "Es una medida de dispersión." },
          { pregunta: "Para mostrar partes de un todo que suman 100% se usa una gráfica:", opciones: ["Circular", "De líneas", "Histograma", "De dispersión"], correcta: "Circular", explicacion: "También se le llama gráfica de pastel." },
          { pregunta: "¿Cuál es un software estadístico libre?", opciones: ["Jamovi", "Photoshop", "WhatsApp", "PowerPoint"], correcta: "Jamovi", explicacion: "Es una alternativa gratuita a programas como SPSS." }
        ]
      },
      {
        id: "cd2-5",
        proposito: "Propósito formativo 5",
        titulo: "Páginas Web para Difundir en tu Comunidad",
        icono: "🌐",
        imagen: "linear-gradient(135deg, #0e7490, #047857)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Una <strong>página web</strong> sencilla permite que tu investigación llegue a más personas: tu comunidad, otras escuelas o el mundo entero.
          </div>

          <h4>Plataformas de diseño simple</h4>
          <table class="tabla-estudio">
            <tr><th>Plataforma</th><th>Características</th></tr>
            <tr><td>WordPress</td><td>Software libre para crear blogs y sitios; tiene una opción gratuita en línea.</td></tr>
            <tr><td>Blogger (Blogspot)</td><td>Blogs gratuitos y fáciles de usar con una cuenta de correo.</td></tr>
            <tr><td>Google Sites</td><td>Sitios sencillos arrastrando bloques de texto e imagen.</td></tr>
          </table>

          <h4>Partes de una buena página</h4>
          <ul>
            <li><strong>Título claro</strong> y una presentación de quiénes son y qué investigaron.</li>
            <li><strong>Secciones:</strong> problema, cómo investigaron, resultados (con sus gráficas), propuestas.</li>
            <li><strong>Imágenes</strong> propias o con licencia Creative Commons, con crédito a sus autores.</li>
            <li><strong>Fuentes</strong> consultadas al final.</li>
            <li><strong>Accesible:</strong> letra legible, buen contraste y que se vea bien en celular.</li>
          </ul>

          <h4>Antes de publicar</h4>
          <ul>
            <li>No publiques datos personales de las personas entrevistadas sin permiso.</li>
            <li>Revisa la ortografía con el equipo.</li>
            <li>Comparte el enlace por los canales que usa tu comunidad (grupos, radio comunitaria, carteles con código QR).</li>
          </ul>

          <h4>🛠️ Manos a la obra</h4>
          <p>Creen un blog del grupo y publiquen los resultados de su encuesta sobre el acceso a internet, con su gráfica y una propuesta para mejorar el acceso en su comunidad.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Un plantel puede crear un blog bilingüe (español y tsotsil o tseltal) sobre las fiestas, la gastronomía o los problemas ambientales de su municipio. Difundir en la lengua de la comunidad también es ciudadanía digital.
          </div>
        `,
        actividades: [
          { pregunta: "¿Para qué sirve una página web en un proyecto escolar?", opciones: ["Para difundir la información a más personas", "Para esconder los resultados", "Solo para jugar", "Para borrar datos"], correcta: "Para difundir la información a más personas", explicacion: "Permite que la comunidad conozca la investigación." },
          { pregunta: "WordPress es:", opciones: ["Un software libre para crear blogs y sitios web", "Un procesador de textos de pago", "Una consola de videojuegos", "Un antivirus"], correcta: "Un software libre para crear blogs y sitios web", explicacion: "Es una de las plataformas más usadas para crear páginas." },
          { pregunta: "Antes de publicar fotos de las personas entrevistadas debes:", opciones: ["Pedir su permiso", "Publicarlas sin decirles", "Recortarlas", "Venderlas"], correcta: "Pedir su permiso", explicacion: "Es su derecho a la privacidad y a su imagen." },
          { pregunta: "Una página accesible es aquella que:", opciones: ["Se lee bien, tiene buen contraste y funciona en celular", "Solo se abre en computadora", "Usa letras muy pequeñas", "No tiene títulos"], correcta: "Se lee bien, tiene buen contraste y funciona en celular", explicacion: "Así la puede usar la mayor cantidad de personas." },
          { pregunta: "Al usar imágenes de otras personas en tu página debes:", opciones: ["Usar imágenes con licencia libre y dar crédito", "Tomar cualquiera sin citar", "Quitarles la marca de agua", "Decir que son tuyas"], correcta: "Usar imágenes con licencia libre y dar crédito", explicacion: "Respeta el derecho de autor." }
        ]
      }
    ]
  },

  6: {
    titulo: "Cultura Digital III",
    subtitulo: "Uso y difusión del conocimiento",
    semestre: "Sexto Semestre",
    clase: "s6",
    icono: "📡",
    descripcion: "Redes alámbricas e inalámbricas, comunicación digital, creación de contenido digital y vocaciones tecnológicas con perspectiva de género.",
    meta: "Interactúe con las TICCAD para ampliar su conocimiento y vincularse con su entorno de una manera crítica, creativa e innovadora.",
    contexto: "En el último semestre ya no solo consumes contenido: lo creas. Un video, un podcast o una transmisión hechos con tu celular pueden llevar el conocimiento de tu plantel a toda la comunidad, y quizá abrirte el camino a una carrera tecnológica.",
    temas: [
      {
        id: "cd6-1",
        proposito: "Propósito formativo 1",
        titulo: "Redes: Alcance y Medios de Transmisión",
        icono: "📶",
        imagen: "linear-gradient(135deg, #14532d, #0f766e)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Para que dos dispositivos se comuniquen, la información viaja por un <strong>medio de transmisión</strong>: un cable (alámbrico) o el aire (inalámbrico). Cada uno tiene un <strong>alcance</strong> distinto.
          </div>

          <figure class="diagrama-quimica">
            <img src="images/cultura-digital/redes-alcance.svg" alt="Redes PAN, LAN, MAN y WAN según su alcance" loading="lazy">
            <figcaption>De lo más cercano a lo más lejano: red personal, local, metropolitana y de área amplia.</figcaption>
          </figure>

          <h4>Redes según su alcance</h4>
          <table class="tabla-estudio">
            <tr><th>Red</th><th>Alcance</th><th>Ejemplo</th></tr>
            <tr><td>PAN (personal)</td><td>Unos metros</td><td>Audífonos Bluetooth conectados al celular.</td></tr>
            <tr><td>LAN (local)</td><td>Una casa, escuela u oficina</td><td>El wifi y los equipos del centro de cómputo.</td></tr>
            <tr><td>MAN (metropolitana)</td><td>Una ciudad</td><td>La red que une las oficinas de un municipio.</td></tr>
            <tr><td>WAN (área amplia)</td><td>Países y continentes</td><td>Internet, la red de redes.</td></tr>
          </table>

          <h4>Medios de transmisión</h4>
          <table class="tabla-estudio">
            <tr><th>Tipo</th><th>Medio</th><th>Características</th></tr>
            <tr><td rowspan="3">Alámbrico</td><td>Par trenzado (cable UTP)</td><td>Barato; común en redes locales.</td></tr>
            <tr><td>Cable coaxial</td><td>Usado en televisión por cable.</td></tr>
            <tr><td>Fibra óptica</td><td>Transmite con luz; muy rápida y de largo alcance.</td></tr>
            <tr><td rowspan="3">Inalámbrico</td><td>Wifi y Bluetooth</td><td>Ondas de radio de corto alcance.</td></tr>
            <tr><td>Telefonía móvil (4G, 5G)</td><td>Antenas que cubren varios kilómetros.</td></tr>
            <tr><td>Satélite</td><td>Llega a lugares remotos, pero con más retraso y costo.</td></tr>
          </table>

          <h4>Elegir según tus recursos y contexto</h4>
          <ul>
            <li>Para compartir archivos entre dos celulares sin internet: Bluetooth o una aplicación de transferencia por wifi directo.</li>
            <li>Para un centro de cómputo: cables UTP y un router.</li>
            <li>Para una comunidad sin cobertura celular: internet satelital compartido en un punto común.</li>
          </ul>

          <h4>🛠️ Manos a la obra</h4>
          <p>Dibujen el mapa de la red de su plantel o de su casa: ¿dónde está el módem?, ¿qué equipos se conectan por cable y cuáles por wifi?, ¿en qué lugares llega mal la señal y por qué?</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> En zonas de la Selva y la Sierra la señal celular no llega por las montañas y la distancia a las antenas. Por eso muchas comunidades usan internet satelital en un punto común, como la escuela o la casa ejidal.
          </div>
        `,
        actividades: [
          { pregunta: "Unos audífonos Bluetooth conectados a tu celular forman una red:", opciones: ["PAN", "WAN", "MAN", "Satelital"], correcta: "PAN", explicacion: "Es una red de área personal, de unos cuantos metros." },
          { pregunta: "¿Qué medio alámbrico transmite la información con luz?", opciones: ["La fibra óptica", "El cable coaxial", "El par trenzado", "El Bluetooth"], correcta: "La fibra óptica", explicacion: "Es el medio más rápido y de mayor alcance." },
          { pregunta: "Internet es un ejemplo de red:", opciones: ["WAN", "PAN", "LAN", "Bluetooth"], correcta: "WAN", explicacion: "Une redes de todo el mundo." },
          { pregunta: "Para una comunidad sin cobertura celular, una opción es:", opciones: ["Internet satelital", "Cable de audífonos", "Bluetooth", "Una memoria USB conectada a la antena"], correcta: "Internet satelital", explicacion: "Llega a lugares remotos donde no hay antenas." },
          { pregunta: "El wifi es un medio de transmisión:", opciones: ["Inalámbrico", "Alámbrico", "De fibra óptica", "Coaxial"], correcta: "Inalámbrico", explicacion: "Usa ondas de radio." }
        ]
      },
      {
        id: "cd6-2",
        proposito: "Propósito formativo 2",
        titulo: "Herramientas de Comunicación Digital",
        icono: "💬",
        imagen: "linear-gradient(135deg, #065f46, #1d4ed8)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Hay herramientas digitales para cada forma de comunicar: platicar, transmitir en vivo, publicar videos o guardar y compartir lecturas. Elegir bien depende de tu propósito y de tu conexión.
          </div>

          <h4>Tipos de herramientas</h4>
          <table class="tabla-estudio">
            <tr><th>Tipo</th><th>Para qué sirve</th><th>Ejemplos</th></tr>
            <tr><td>Comunicación directa</td><td>Mensajes, llamadas y videollamadas.</td><td>Signal, Telegram, WhatsApp, Messenger, Jitsi, Zoom, Google Meet</td></tr>
            <tr><td>Emisión y descarga continua</td><td>Publicar videos para que otros los vean cuando quieran.</td><td>PeerTube, YouTube, Twitch, Facebook Gaming</td></tr>
            <tr><td>Transmisión por secuencias</td><td>Programas para producir transmisiones en vivo (escenas, cámaras, pantallas).</td><td>OBS Studio (libre), Wirecast, vMix</td></tr>
            <tr><td>Lectura y difusión continuas</td><td>Guardar fuentes, notas y lecturas para compartirlas.</td><td>Zotero (libre), Evernote, Google Keep</td></tr>
          </table>

          <h4>Alternativas libres y descentralizadas</h4>
          <p><strong>PeerTube</strong> es una plataforma de video libre y <strong>descentralizada</strong>: no pertenece a una sola empresa y comparte la carga entre quienes ven los videos (punto a punto). <strong>Jitsi</strong> permite videollamadas sin crear una cuenta, y <strong>Signal</strong> cifra los mensajes de extremo a extremo.</p>

          <h4>Comunicar con responsabilidad</h4>
          <ul>
            <li>Elige el canal según tu público: un audio corto llega mejor a quien tiene pocos datos.</li>
            <li>Cuida el tono: escribir todo en mayúsculas se lee como gritar.</li>
            <li>Respeta los horarios y la privacidad de los demás en los grupos.</li>
          </ul>

          <h4>🛠️ Manos a la obra</h4>
          <p>Organicen una videollamada con Jitsi con estudiantes de otro grupo o plantel para compartir lo que aprendieron en un proyecto. Antes, prueben la conexión y acuerden quién modera.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Varias radios comunitarias de Chiapas transmiten también por internet. Con OBS Studio y un celular, el plantel puede transmitir un programa sobre la feria del pueblo y guardarlo después en una plataforma de video.
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué tiene de especial PeerTube?", opciones: ["Es libre y descentralizado", "Solo funciona sin internet", "Es propiedad de una sola empresa", "Solo sirve para mensajes de texto"], correcta: "Es libre y descentralizado", explicacion: "Distribuye los videos entre quienes los ven y no depende de una sola corporación." },
          { pregunta: "OBS Studio es un programa para:", opciones: ["Producir transmisiones en vivo y grabar la pantalla", "Hacer hojas de cálculo", "Escribir pseudocódigo", "Navegar en internet"], correcta: "Producir transmisiones en vivo y grabar la pantalla", explicacion: "Es software libre de transmisión por secuencias." },
          { pregunta: "Zotero sirve para:", opciones: ["Guardar y organizar fuentes y lecturas", "Hacer videollamadas", "Editar fotos", "Jugar en línea"], correcta: "Guardar y organizar fuentes y lecturas", explicacion: "Es una herramienta libre de lectura y difusión." },
          { pregunta: "Una herramienta de comunicación directa es:", opciones: ["Signal", "PeerTube", "OBS Studio", "Zotero"], correcta: "Signal", explicacion: "Permite mensajes y llamadas cifradas." },
          { pregunta: "Si tu público tiene pocos datos móviles, conviene enviarle:", opciones: ["Un audio corto o un texto", "Un video en alta definición de 1 hora", "Muchas fotos pesadas", "Una transmisión en 4K"], correcta: "Un audio corto o un texto", explicacion: "Elige el canal según los recursos de tu público." }
        ]
      },
      {
        id: "cd6-3",
        proposito: "Propósito formativo 3",
        titulo: "Crear y Editar Contenido Digital",
        icono: "🎬",
        imagen: "linear-gradient(135deg, #831843, #6d28d9)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Con un celular puedes crear contenido que enseñe, documente, demuestre o informe. Lo importante no es el equipo más caro, sino tener un <strong>propósito</strong> y un buen <strong>guion</strong>.
          </div>

          <h4>Tipos de contenido digital</h4>
          <table class="tabla-estudio">
            <tr><th>Tipo</th><th>Propósito</th><th>Ejemplo</th></tr>
            <tr><td>Didáctico</td><td>Enseñar un tema.</td><td>Video que explica la Ley de Ohm con una pila y un foco.</td></tr>
            <tr><td>Documental</td><td>Mostrar una realidad con testimonios.</td><td>Historia de la cooperativa de café de tu comunidad.</td></tr>
            <tr><td>Demostrativo</td><td>Enseñar cómo se hace algo paso a paso.</td><td>Cómo instalar LibreOffice o reparar un cargador.</td></tr>
            <tr><td>Entretenimiento e informativo</td><td>Divertir o informar sobre un hecho.</td><td>Cápsula sobre la feria del pueblo o noticiero escolar.</td></tr>
          </table>

          <h4>Etapas de producción</h4>
          <ol>
            <li><strong>Preproducción:</strong> tema, público, guion y lista de tomas.</li>
            <li><strong>Producción:</strong> grabar con buena luz (de frente a una ventana), sonido claro (cerca de quien habla) y el celular en horizontal para video.</li>
            <li><strong>Posproducción:</strong> editar, agregar títulos, música con licencia libre y subtítulos.</li>
            <li><strong>Difusión:</strong> publicar en la plataforma adecuada y compartir el enlace.</li>
          </ol>

          <h4>Herramientas libres para editar</h4>
          <ul>
            <li><strong>Video:</strong> Shotcut o Kdenlive.</li>
            <li><strong>Audio y podcast:</strong> Audacity.</li>
            <li><strong>Imagen:</strong> GIMP, Krita o Inkscape.</li>
            <li><strong>Grabar pantalla:</strong> OBS Studio.</li>
          </ul>

          <h4>🛠️ Manos a la obra</h4>
          <p>Elaboren un video informativo de 2 a 3 minutos sobre el uso responsable de las redes sociales. Escriban el guion en equipo, grábenlo con el celular, edítenlo con Shotcut y compártanlo con la comunidad escolar.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Un podcast en tseltal o tsotsil, grabado con el celular y editado en Audacity, puede llevar consejos de salud o noticias del plantel a familias que escuchan más de lo que leen. Crear contenido en la lengua propia también fortalece la identidad.
          </div>
        `,
        actividades: [
          { pregunta: "Un video que explica paso a paso cómo reparar un cargador es contenido:", opciones: ["Demostrativo", "Documental", "De entretenimiento", "Publicitario"], correcta: "Demostrativo", explicacion: "Muestra cómo se hace algo." },
          { pregunta: "La etapa en la que se escribe el guion es la:", opciones: ["Preproducción", "Producción", "Posproducción", "Difusión"], correcta: "Preproducción", explicacion: "Se planea antes de grabar." },
          { pregunta: "Un programa libre para editar audio es:", opciones: ["Audacity", "Signal", "Zotero", "Calc"], correcta: "Audacity", explicacion: "Sirve para grabar y editar podcasts." },
          { pregunta: "Para que tu voz se escuche clara al grabar con el celular conviene:", opciones: ["Grabar cerca de quien habla y en un lugar silencioso", "Grabar desde lejos", "Poner música fuerte al fondo", "Grabar en la calle con tráfico"], correcta: "Grabar cerca de quien habla y en un lugar silencioso", explicacion: "El buen sonido es más importante que una cámara cara." },
          { pregunta: "Un video que muestra la historia de una cooperativa con testimonios es:", opciones: ["Documental", "Demostrativo", "Didáctico de matemáticas", "Un anuncio"], correcta: "Documental", explicacion: "Muestra una realidad a través de testimonios." }
        ]
      },
      {
        id: "cd6-4",
        proposito: "Propósito formativo 4",
        titulo: "Vocaciones Tecnológicas con Perspectiva de Género",
        icono: "👩‍💻",
        imagen: "linear-gradient(135deg, #7e22ce, #be185d)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> La tecnología no es «cosa de hombres». Las desigualdades de género y económicas influyen en quién elige una carrera tecnológica, pero <strong>se pueden cambiar</strong>.
          </div>

          <h4>Campos tecnológico-digitales</h4>
          <table class="tabla-estudio">
            <tr><th>Campo</th><th>Qué se hace</th></tr>
            <tr><td>Inteligencia Artificial</td><td>Programas que aprenden de datos para reconocer patrones, traducir o predecir.</td></tr>
            <tr><td>Internet de las cosas</td><td>Objetos conectados: sensores de humedad en un cultivo, medidores de agua.</td></tr>
            <tr><td>Industria 4.0</td><td>Fábricas automatizadas que combinan robots, sensores y análisis de datos.</td></tr>
            <tr><td>Ciberseguridad</td><td>Proteger sistemas y datos de ataques.</td></tr>
            <tr><td>Ciencia de datos</td><td>Analizar grandes cantidades de datos para tomar decisiones.</td></tr>
            <tr><td>Robótica</td><td>Diseñar y programar máquinas que realizan tareas.</td></tr>
            <tr><td>Ingeniería computacional</td><td>Diseñar hardware y software.</td></tr>
          </table>

          <h4>¿Por qué hay menos mujeres en tecnología?</h4>
          <ul>
            <li><strong>Estereotipos:</strong> desde niñas se les regala menos tecnología y se les dice que «no son buenas para las matemáticas».</li>
            <li><strong>Roles de cuidado:</strong> muchas jóvenes cargan con tareas del hogar que les quitan tiempo de estudio.</li>
            <li><strong>Pocos referentes:</strong> si no ves mujeres programadoras, es difícil imaginarte como una.</li>
            <li><strong>Violencia digital:</strong> el acoso en línea aleja a muchas jóvenes de los espacios tecnológicos.</li>
          </ul>
          <p>Y sin embargo, mujeres como <strong>Ada Lovelace</strong> (escribió el primer algoritmo para una máquina, en el siglo XIX), <strong>Grace Hopper</strong> (pionera de los lenguajes de programación) y <strong>Katherine Johnson</strong> (calculó trayectorias para la NASA) cambiaron la historia de la computación.</p>

          <h4>Desigualdad socioeconómica</h4>
          <p>Vivir lejos de una ciudad, no tener computadora en casa o necesitar trabajar al terminar el bachillerato también limita las opciones. Conocer las <strong>becas</strong>, las universidades públicas y las carreras en línea ayuda a ampliar el camino.</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Investiguen dos universidades o institutos tecnológicos públicos cercanos que ofrezcan carreras de tecnología. Hagan una tabla con: carrera, duración, requisitos y becas disponibles. Inviten a una egresada de una carrera tecnológica a platicar con el grupo.</p>
        `,
        ejemploChiapas: `
          <div class="ejemplo">
            <strong>📍 Contexto Chiapas:</strong> Un sensor de humedad conectado a internet puede avisar a un productor de café cuándo regar. Esa tecnología la pueden diseñar jóvenes de Chiapas, mujeres y hombres, que conocen los problemas del campo mejor que nadie. Tu comunidad necesita sus propias ingenieras e ingenieros.
          </div>
        `,
        actividades: [
          { pregunta: "Un sensor de humedad conectado a internet en un cultivo es un ejemplo de:", opciones: ["Internet de las cosas", "Ciberseguridad", "Software de oficina", "Red social"], correcta: "Internet de las cosas", explicacion: "Son objetos conectados que envían datos." },
          { pregunta: "¿Quién escribió el primer algoritmo pensado para una máquina?", opciones: ["Ada Lovelace", "Grace Hopper", "Katherine Johnson", "Marie Curie"], correcta: "Ada Lovelace", explicacion: "Lo hizo en el siglo XIX para la máquina analítica de Charles Babbage." },
          { pregunta: "Una causa de que haya menos mujeres en carreras tecnológicas es:", opciones: ["Los estereotipos de género", "Que las mujeres no pueden programar", "Que la tecnología es solo para hombres", "Que no existen carreras tecnológicas"], correcta: "Los estereotipos de género", explicacion: "Son ideas sociales que se pueden cambiar, no capacidades." },
          { pregunta: "La ciberseguridad se encarga de:", opciones: ["Proteger sistemas y datos de ataques", "Diseñar ropa", "Vender celulares", "Hacer videos de entretenimiento"], correcta: "Proteger sistemas y datos de ataques", explicacion: "Es uno de los campos con más demanda de profesionales." },
          { pregunta: "Para reducir la desigualdad socioeconómica en las vocaciones ayuda:", opciones: ["Conocer becas y universidades públicas", "Dejar de estudiar", "Elegir solo lo que dicen los demás", "Ignorar las opciones en línea"], correcta: "Conocer becas y universidades públicas", explicacion: "La información amplía las opciones de estudio y trabajo." }
        ]
      }
    ]
  }

};
