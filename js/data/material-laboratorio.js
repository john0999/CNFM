/* ==========================================================
   DATA - Material de laboratorio de Química
   Cada instrumento usa su dibujo en images/quimica/<id>.svg
   y se muestra en la vista #/laboratorio
========================================================== */

const MATERIAL_LAB = {
  titulo: "🔬 Material de Laboratorio",
  subtitulo: "Conoce los instrumentos que se usan en Química: qué son, para qué sirven y cómo usarlos con seguridad.",

  categorias: {
    volumen: { nombre: "Medir volumen", icono: "📏" },
    contener: { nombre: "Contener, mezclar y calentar", icono: "🔥" },
    medir: { nombre: "Medir masa y temperatura", icono: "⚖️" },
    separar: { nombre: "Separar, sostener y otros usos", icono: "🧰" }
  },

  // Temas donde aparece cada instrumento
  temas: {
    medicion: { texto: "Química I · Propiedades de la Materia y su Medición", ruta: "semestre-1" },
    mezclas: { texto: "Química I · Mezclas y Sustancias Puras", ruta: "semestre-1" },
    soluciones: { texto: "Química II · Soluciones Químicas", ruta: "semestre-2" },
    acidos: { texto: "Química II · Ácidos y Bases", ruta: "semestre-2" }
  },

  instrumentos: [
    {
      id: "probeta",
      nombre: "Probeta graduada",
      categoria: "volumen",
      material: "Vidrio o plástico",
      precision: "Media",
      descripcion: "Cilindro alto y angosto con una escala grabada en mililitros (mL) y una base para mantenerse de pie. Tiene un pequeño pico en la boca para verter sin derramar. Es el instrumento más común para medir volúmenes de líquidos cuando no se necesita una exactitud muy alta.",
      usos: [
        "Medir volúmenes de líquidos, por ejemplo 50 mL de agua para una práctica.",
        "Medir el volumen de un sólido irregular (una piedra) por desplazamiento de agua.",
        "Preparar mezclas y soluciones donde no se requiere gran exactitud."
      ],
      pasos: [
        "Elige una probeta de tamaño cercano al volumen que vas a medir (para 40 mL usa una de 50 mL, no una de 500 mL).",
        "Colócala sobre una superficie plana.",
        "Vierte el líquido poco a poco; al acercarte a la marca, termina con una pipeta o gotero.",
        "Agáchate hasta que tus ojos queden a la altura del líquido y lee la parte más baja del menisco."
      ],
      precauciones: [
        "No la calientes: el vidrio grueso puede romperse y la escala pierde exactitud.",
        "No la uses para mezclar ni para hacer reacciones.",
        "Las de vidrio se voltean fácilmente; mantenlas lejos de la orilla de la mesa."
      ],
      dato: "Una probeta de 100 mL suele tener marcas cada 1 mL, por lo que permite lecturas con una precisión de aproximadamente ±0.5 mL.",
      temas: ["medicion"]
    },
    {
      id: "pipeta",
      nombre: "Pipeta",
      categoria: "volumen",
      material: "Vidrio",
      precision: "Alta",
      descripcion: "Tubo de vidrio delgado y largo, con punta afilada. Hay dos tipos: la pipeta graduada, que tiene una escala y mide distintos volúmenes, y la pipeta volumétrica, que tiene un bulbo en medio y mide un solo volumen con mucha exactitud (por ejemplo, exactamente 10 mL).",
      usos: [
        "Medir y transferir volúmenes pequeños con precisión (de 1 a 25 mL).",
        "Tomar una muestra exacta de una solución para analizarla.",
        "Agregar reactivos en cantidades exactas a un tubo o matraz."
      ],
      pasos: [
        "Coloca una perilla o pipeteador en la parte de arriba.",
        "Introduce la punta en el líquido y aspira con la perilla hasta pasar un poco la marca deseada.",
        "Deja salir el líquido lentamente hasta que el menisco toque la marca.",
        "Pasa la pipeta al recipiente y deja salir el líquido con la punta tocando la pared interior."
      ],
      precauciones: [
        "Nunca succiones con la boca: puedes tragar sustancias tóxicas o corrosivas.",
        "No la sacudas para sacar la última gota; las pipetas están calibradas para dejar esa gota.",
        "Sostenla en posición vertical al leer el volumen."
      ],
      dato: "Antes de existir las perillas, en los laboratorios se pipeteaba con la boca y eran frecuentes los accidentes. Hoy está prohibido en todos los laboratorios.",
      temas: ["medicion"]
    },
    {
      id: "bureta",
      nombre: "Bureta",
      categoria: "volumen",
      material: "Vidrio, con llave de vidrio o teflón",
      precision: "Alta",
      descripcion: "Tubo largo graduado (normalmente de 25 o 50 mL) con una llave en la parte de abajo que controla la salida del líquido. A diferencia de la probeta, su escala empieza en 0 arriba y aumenta hacia abajo, porque mide cuánto líquido ha salido.",
      usos: [
        "Hacer titulaciones o valoraciones ácido-base.",
        "Agregar un líquido gota a gota hasta que ocurra un cambio (por ejemplo, de color).",
        "Medir con exactitud cuánto volumen se gastó en una reacción."
      ],
      pasos: [
        "Sujeta la bureta al soporte universal con una pinza, bien vertical.",
        "Con la llave cerrada, llénala con un embudo un poco arriba del 0.",
        "Abre la llave para sacar el aire de la punta y ajusta el nivel exactamente en 0.00 mL.",
        "Abre la llave poco a poco mientras agitas el matraz de abajo, y anota el volumen final."
      ],
      precauciones: [
        "Retira el embudo antes de empezar la medición, para que no gotee dentro.",
        "Revisa que no queden burbujas en la punta: alteran la lectura.",
        "Llénala por debajo del nivel de los ojos para evitar salpicaduras en la cara."
      ],
      dato: "Con una bureta se pueden leer volúmenes con dos decimales (por ejemplo, 18.35 mL), porque su escala tiene marcas cada 0.1 mL.",
      temas: ["medicion", "acidos"]
    },
    {
      id: "matraz-aforado",
      nombre: "Matraz aforado",
      categoria: "volumen",
      material: "Vidrio",
      precision: "Muy alta",
      descripcion: "Recipiente con forma de pera, base plana y cuello largo y angosto, que tiene una sola marca llamada aforo. Cuando el líquido llega exactamente a esa marca, el matraz contiene el volumen indicado (por ejemplo, 100 mL, 250 mL o 1000 mL). Se cierra con un tapón.",
      usos: [
        "Preparar soluciones de concentración exacta (por ejemplo, NaCl 0.1 M).",
        "Hacer diluciones exactas.",
        "Guardar por poco tiempo una solución recién preparada."
      ],
      pasos: [
        "Disuelve primero el soluto en un vaso de precipitados con un poco de agua.",
        "Pasa la solución al matraz con un embudo y enjuaga el vaso con la piseta, agregando ese enjuague al matraz.",
        "Agrega agua hasta cerca del cuello y termina gota a gota hasta que el menisco toque el aforo.",
        "Tapa el matraz e inviértelo varias veces para que la solución quede homogénea."
      ],
      precauciones: [
        "No lo calientes: el calor dilata el vidrio y deja de medir exacto.",
        "No disuelvas sólidos directamente en él: es difícil agitar por el cuello angosto.",
        "Si te pasas del aforo, no saques líquido: hay que preparar la solución de nuevo."
      ],
      dato: "Los matraces aforados están calibrados a 20 °C. Si la solución está caliente, ocupa más volumen y la concentración resulta incorrecta.",
      temas: ["medicion", "soluciones"]
    },
    {
      id: "vaso-precipitados",
      nombre: "Vaso de precipitados",
      categoria: "contener",
      material: "Vidrio resistente al calor (borosilicato)",
      precision: "Baja (solo aproximada)",
      descripcion: "Recipiente cilíndrico de boca ancha, con fondo plano y un pico para verter. Es uno de los materiales más usados del laboratorio. Tiene marcas de volumen, pero solo sirven como referencia aproximada.",
      usos: [
        "Disolver sustancias y preparar mezclas.",
        "Calentar líquidos sobre una tela de alambre o parrilla.",
        "Contener líquidos y recibir el filtrado en una filtración."
      ],
      pasos: [
        "Elige un vaso más grande que el volumen que usarás, para poder agitar sin derramar.",
        "Para calentar, colócalo sobre una tela de alambre en el aro del soporte, nunca directo sobre la flama.",
        "Agita con una varilla de vidrio, no con el termómetro.",
        "Para verter, usa el pico y, si es necesario, guía el líquido con una varilla."
      ],
      precauciones: [
        "No lo uses para medir volúmenes exactos.",
        "El vidrio caliente se ve igual que el frío: tómalo con pinzas o guantes térmicos.",
        "No lo enfríes de golpe con agua fría: puede estrellarse."
      ],
      dato: "Se llama así porque se usaba para formar precipitados: sólidos que aparecen cuando se mezclan dos soluciones.",
      temas: ["medicion", "soluciones"]
    },
    {
      id: "matraz-erlenmeyer",
      nombre: "Matraz Erlenmeyer",
      categoria: "contener",
      material: "Vidrio resistente al calor",
      precision: "Baja (solo aproximada)",
      descripcion: "Recipiente de forma cónica, con base ancha y cuello angosto. Su forma permite agitar el líquido con movimientos circulares sin que se derrame, y reduce la evaporación. Lleva el nombre del químico alemán Emil Erlenmeyer, que lo diseñó en 1861.",
      usos: [
        "Recibir el líquido de la bureta en una titulación.",
        "Mezclar o agitar soluciones.",
        "Calentar líquidos reduciendo la pérdida por evaporación.",
        "Cultivar microorganismos en laboratorios de biología."
      ],
      pasos: [
        "Coloca el líquido o la solución que vas a trabajar.",
        "Para agitar, sostenlo por el cuello y haz movimientos circulares suaves con la muñeca.",
        "Para calentar, ponlo sobre una tela de alambre o parrilla.",
        "Si necesitas taparlo, usa un tapón de hule o papel aluminio."
      ],
      precauciones: [
        "Su escala es aproximada: no lo uses para medir con exactitud.",
        "No lo tapes herméticamente mientras se calienta: la presión puede romperlo.",
        "Revisa que no tenga grietas o despostilladuras antes de calentarlo."
      ],
      dato: "Gracias a su base ancha es muy estable; por eso es el recipiente favorito para titular mientras se agita.",
      temas: ["medicion", "acidos"]
    },
    {
      id: "tubo-ensayo",
      nombre: "Tubo de ensayo",
      categoria: "contener",
      material: "Vidrio (algunos resistentes al calor)",
      precision: "No mide volumen",
      descripcion: "Tubo de vidrio pequeño, cerrado y redondeado en un extremo. Se usa para hacer reacciones con cantidades pequeñas de sustancias, lo que ahorra reactivos y hace los experimentos más seguros.",
      usos: [
        "Realizar reacciones químicas con poca cantidad de sustancia.",
        "Observar cambios de color, formación de gases o precipitados.",
        "Calentar pequeñas muestras.",
        "Probar indicadores ácido-base."
      ],
      pasos: [
        "Llénalo como máximo hasta un tercio de su altura.",
        "Para agitar, golpea suavemente la parte de abajo con el dedo; no lo tapes con el pulgar.",
        "Para calentarlo, sujétalo con pinzas para tubo, inclínalo unos 45° y muévelo sobre la flama.",
        "Al terminar, colócalo en la gradilla."
      ],
      precauciones: [
        "Nunca apuntes la boca del tubo hacia ti ni hacia otras personas al calentarlo.",
        "No lo calientes por el fondo en un solo punto: el líquido puede salir disparado.",
        "Usa tubos resistentes al calor (Pyrex o borosilicato) si vas a calentar."
      ],
      dato: "El nombre viene de \"ensayar\", es decir, probar. Son la herramienta básica para hacer pruebas rápidas.",
      temas: ["medicion"]
    },
    {
      id: "gradilla",
      nombre: "Gradilla",
      categoria: "contener",
      material: "Madera, metal o plástico",
      precision: "No mide",
      descripcion: "Soporte con orificios donde se colocan los tubos de ensayo de forma vertical y ordenada. Evita que los tubos se volteen o rueden por la mesa.",
      usos: [
        "Sostener tubos de ensayo mientras se trabaja.",
        "Ordenar varias muestras para compararlas (por ejemplo, distintos pH).",
        "Dejar secar los tubos boca abajo después de lavarlos."
      ],
      pasos: [
        "Coloca la gradilla en una zona estable de la mesa.",
        "Numera o etiqueta los tubos para no confundir las muestras.",
        "Pon los tubos verticales en los orificios.",
        "Al terminar, lava los tubos y déjalos boca abajo en los postes de secado."
      ],
      precauciones: [
        "No pongas tubos calientes en gradillas de plástico: se pueden derretir.",
        "No la sobrecargues ni la muevas con tubos llenos."
      ],
      dato: "Muchas gradillas tienen una fila de postes para dejar los tubos boca abajo y que escurran al secarse.",
      temas: ["medicion"]
    },
    {
      id: "mechero-bunsen",
      nombre: "Mechero de Bunsen",
      categoria: "contener",
      material: "Metal",
      precision: "No mide",
      descripcion: "Quemador que funciona con gas. Tiene un tubo vertical con un anillo que regula la entrada de aire. Con el aire cerrado produce una flama amarilla con hollín; con el aire abierto produce una flama azul, mucho más caliente y limpia. Lo popularizó Robert Bunsen hacia 1855.",
      usos: [
        "Calentar sustancias y recipientes.",
        "Esterilizar asas y agujas en microbiología.",
        "Hacer la prueba de la flama: algunos metales dan colores característicos (el sodio amarillo, el cobre verde)."
      ],
      pasos: [
        "Revisa que la manguera esté bien conectada y sin grietas.",
        "Cierra el anillo de aire, acerca el cerillo encendido a la boca del mechero y luego abre la llave de gas.",
        "Abre poco a poco el anillo de aire hasta obtener una flama azul con un cono interno.",
        "Al terminar, cierra primero la llave de gas."
      ],
      precauciones: [
        "Recógete el cabello y no uses ropa suelta cerca de la flama.",
        "Mantén lejos el alcohol y otras sustancias inflamables.",
        "Nunca lo dejes encendido sin vigilancia.",
        "Si hueles gas, cierra la llave y avisa al profesor."
      ],
      dato: "La parte más caliente de la flama azul está justo arriba de la punta del cono interno, donde puede superar los 1000 °C.",
      temas: ["medicion"]
    },
    {
      id: "capsula-porcelana",
      nombre: "Cápsula de porcelana",
      categoria: "contener",
      material: "Porcelana",
      precision: "No mide",
      descripcion: "Recipiente poco profundo, con forma de tazón y un pequeño pico. La porcelana resiste temperaturas muy altas y el contacto directo con la flama, por eso se usa para evaporar líquidos.",
      usos: [
        "Evaporar un líquido para recuperar el sólido disuelto (sal del agua de mar).",
        "Calentar sólidos a altas temperaturas.",
        "Concentrar soluciones."
      ],
      pasos: [
        "Coloca la cápsula sobre un triángulo de porcelana o tela de alambre en el aro del soporte.",
        "Agrega la solución sin llenarla más de la mitad.",
        "Calienta suavemente y baja la flama cuando quede poco líquido, para que no salpique.",
        "Déjala enfriar antes de tocarla o de recoger el sólido."
      ],
      precauciones: [
        "Tómala siempre con pinzas: se mantiene caliente mucho tiempo.",
        "No la pongas caliente sobre una superficie fría o mojada: puede estrellarse."
      ],
      dato: "En las salinas de la costa de Chiapas se aplica el mismo principio a gran escala: el sol evapora el agua de mar y queda la sal.",
      temas: ["medicion", "mezclas"]
    },
    {
      id: "balanza",
      nombre: "Balanza",
      categoria: "medir",
      material: "Metal y plástico (digital) o metal (granataria)",
      precision: "De 0.1 g a 0.0001 g, según el tipo",
      descripcion: "Instrumento para medir la masa de una sustancia en gramos. La balanza granataria usa pesas que se deslizan por unos brazos; la balanza digital muestra la masa en una pantalla. La balanza analítica es la más precisa y tiene puertas de vidrio para que el aire no afecte la medición.",
      usos: [
        "Pesar el soluto para preparar una solución.",
        "Medir la masa de una muestra para calcular su densidad.",
        "Comprobar la Ley de Conservación de la Masa en una reacción."
      ],
      pasos: [
        "Colócala en una mesa firme y nivelada, lejos de corrientes de aire.",
        "Enciéndela y espera a que marque cero.",
        "Pon el recipiente vacío (vidrio de reloj, vaso o papel) y presiona \"Tara\" para regresarla a cero.",
        "Agrega la sustancia poco a poco con una espátula hasta la masa deseada y anota el valor."
      ],
      precauciones: [
        "Nunca pongas reactivos directamente sobre el plato.",
        "No pongas objetos calientes: el aire caliente que sube altera la lectura.",
        "No excedas su capacidad máxima.",
        "Limpia cualquier derrame de inmediato."
      ],
      dato: "Una balanza analítica puede medir diezmilésimas de gramo (0.0001 g): detecta la masa de una huella digital sobre un vidrio.",
      temas: ["medicion", "soluciones"]
    },
    {
      id: "termometro",
      nombre: "Termómetro",
      categoria: "medir",
      material: "Vidrio con alcohol teñido, o digital",
      precision: "Normalmente ±1 °C",
      descripcion: "Mide la temperatura. Los termómetros de laboratorio tienen un bulbo lleno de un líquido (alcohol teñido de rojo) que se expande al calentarse y sube por un tubo muy delgado con escala en grados Celsius, normalmente de −10 °C a 110 °C.",
      usos: [
        "Medir la temperatura de líquidos durante un experimento.",
        "Registrar puntos de fusión y de ebullición.",
        "Controlar la temperatura en una destilación."
      ],
      pasos: [
        "Sumerge el bulbo en el líquido sin que toque el fondo ni las paredes del recipiente.",
        "Espera a que el nivel deje de moverse.",
        "Lee con los ojos a la altura del nivel del líquido.",
        "En una destilación, coloca el bulbo a la altura de la salida lateral del matraz."
      ],
      precauciones: [
        "No lo uses para agitar: se rompe fácilmente.",
        "Si se rompe un termómetro de mercurio, no lo toques ni lo barras: avisa al profesor, porque el mercurio es tóxico.",
        "No lo metas en líquidos más calientes que el máximo de su escala."
      ],
      dato: "Los termómetros de mercurio se están retirando en todo el mundo por el Convenio de Minamata, que busca reducir la contaminación por mercurio.",
      temas: ["medicion"]
    },
    {
      id: "embudo",
      nombre: "Embudo",
      categoria: "separar",
      material: "Vidrio o plástico",
      precision: "No mide",
      descripcion: "Recipiente con forma de cono que termina en un tubo. Junto con el papel filtro permite separar un sólido de un líquido. También ayuda a pasar líquidos a recipientes de boca angosta sin derramarlos.",
      usos: [
        "Filtrar mezclas de sólido y líquido.",
        "Trasvasar líquidos a matraces, buretas o botellas.",
        "Llenar la bureta antes de una titulación."
      ],
      pasos: [
        "Dobla el papel filtro a la mitad dos veces y ábrelo en forma de cono.",
        "Colócalo dentro del embudo y humedécelo con un poco de agua para que se pegue.",
        "Pon el embudo en el aro del soporte con un vaso debajo; la punta debe tocar la pared del vaso.",
        "Vierte la mezcla poco a poco, guiándola con una varilla de vidrio."
      ],
      precauciones: [
        "No llenes el papel filtro hasta el borde: la mezcla puede pasar por fuera.",
        "No perfores el papel con la varilla."
      ],
      dato: "El café de filtro funciona igual: el papel retiene el café molido (residuo) y deja pasar la bebida (filtrado).",
      temas: ["medicion", "mezclas"]
    },
    {
      id: "embudo-separacion",
      nombre: "Embudo de separación",
      categoria: "separar",
      material: "Vidrio, con llave y tapón",
      precision: "No mide",
      descripcion: "Embudo con forma de pera, con tapón arriba y una llave abajo. Sirve para separar líquidos que no se mezclan (inmiscibles), como el agua y el aceite. El líquido más denso queda en la parte de abajo y sale al abrir la llave.",
      usos: [
        "Separar líquidos inmiscibles por decantación (agua y aceite).",
        "Hacer extracciones: pasar una sustancia de un líquido a otro.",
        "Separar el aceite esencial del agua en una destilación de plantas aromáticas."
      ],
      pasos: [
        "Con la llave cerrada, sostenlo en el aro del soporte y pon un vaso debajo.",
        "Agrega la mezcla y coloca el tapón.",
        "Deja reposar hasta que se formen dos capas bien separadas.",
        "Quita el tapón, abre la llave y deja salir la capa de abajo; ciérrala justo cuando llegue la separación."
      ],
      precauciones: [
        "Quita siempre el tapón antes de abrir la llave; si no, el líquido no sale bien.",
        "Si agitas la mezcla, abre la llave hacia arriba de vez en cuando para liberar la presión.",
        "Recoge la capa de arriba por la boca del embudo, no por la llave."
      ],
      dato: "El agua (1.00 g/mL) es más densa que el aceite (≈0.92 g/mL), por eso el agua siempre queda abajo.",
      temas: ["medicion", "mezclas"]
    },
    {
      id: "soporte-universal",
      nombre: "Soporte universal",
      categoria: "separar",
      material: "Metal",
      precision: "No mide",
      descripcion: "Base pesada de metal con una varilla vertical. En la varilla se fijan, con nueces (conectores), aros y pinzas para sostener otros materiales a la altura que se necesite. Es la estructura básica de muchos montajes.",
      usos: [
        "Sostener embudos durante una filtración (con un aro).",
        "Sujetar la bureta en una titulación (con pinza para bureta).",
        "Armar montajes de destilación y de calentamiento."
      ],
      pasos: [
        "Colócalo con la varilla hacia la parte de atrás de la mesa, para que la base dé estabilidad.",
        "Fija la nuez en la varilla a la altura deseada y aprieta el tornillo.",
        "Coloca el aro o la pinza en la nuez.",
        "Comprueba que todo esté firme antes de poner el material de vidrio."
      ],
      precauciones: [
        "Pon el peso sobre la base: si cuelgas mucho hacia afuera, el soporte se puede voltear.",
        "No aprietes demasiado las pinzas sobre el vidrio: puede romperse."
      ],
      dato: "Se llama \"universal\" porque, cambiando aros y pinzas, sirve para casi cualquier montaje del laboratorio.",
      temas: ["medicion", "mezclas"]
    },
    {
      id: "vidrio-reloj",
      nombre: "Vidrio de reloj",
      categoria: "separar",
      material: "Vidrio",
      precision: "No mide",
      descripcion: "Pieza de vidrio redonda y ligeramente cóncava, parecida al cristal de un reloj antiguo. Es útil para manejar pequeñas cantidades de sólidos.",
      usos: [
        "Pesar sólidos en la balanza.",
        "Tapar vasos de precipitados para evitar que caiga polvo o se evapore el líquido.",
        "Dejar evaporar y cristalizar pequeñas muestras.",
        "Observar cristales con la lupa."
      ],
      pasos: [
        "Para pesar: coloca el vidrio en la balanza, presiona \"Tara\" y agrega el sólido con una espátula.",
        "Para tapar: colócalo con la parte cóncava hacia abajo sobre el vaso.",
        "Para cristalizar: pon unas gotas de solución y deja que se evapore a temperatura ambiente."
      ],
      precauciones: [
        "No lo calientes directamente en la flama.",
        "Es delgado y se rompe fácilmente: manéjalo con cuidado y no lo apiles con otros objetos."
      ],
      dato: "Si dejas evaporar en un vidrio de reloj unas gotas de agua con sal o con azúcar, podrás ver con una lupa la forma de sus cristales.",
      temas: ["medicion", "soluciones"]
    },
    {
      id: "mortero",
      nombre: "Mortero con pistilo",
      categoria: "separar",
      material: "Porcelana, ágata o piedra",
      precision: "No mide",
      descripcion: "Recipiente grueso y pesado, acompañado de un mazo llamado pistilo. Sirve para triturar y moler sólidos hasta hacerlos polvo, lo que aumenta su superficie de contacto.",
      usos: [
        "Moler sólidos para que se disuelvan o reaccionen más rápido.",
        "Mezclar polvos de manera uniforme.",
        "Triturar hojas o semillas para extraer pigmentos (por ejemplo, para una cromatografía)."
      ],
      pasos: [
        "Coloca una pequeña cantidad de sólido en el mortero.",
        "Presiona y gira el pistilo con movimientos circulares; no golpees.",
        "Muele hasta obtener un polvo fino y uniforme.",
        "Lávalo y sécalo bien antes de moler otra sustancia."
      ],
      precauciones: [
        "No muelas sustancias que puedan explotar o reaccionar con el roce.",
        "Usa lentes de seguridad: pueden saltar partículas.",
        "No lo llenes demasiado: el polvo se sale."
      ],
      dato: "El molcajete de piedra volcánica, que se usa en México para hacer salsas, es un mortero tradicional con su pistilo llamado tejolote.",
      temas: ["medicion"]
    },
    {
      id: "piseta",
      nombre: "Piseta",
      categoria: "separar",
      material: "Plástico flexible",
      precision: "No mide",
      descripcion: "Botella de plástico blando con un tubo delgado. Al apretarla sale un chorro fino y controlado de líquido, normalmente agua destilada.",
      usos: [
        "Enjuagar material de vidrio con agua destilada.",
        "Completar volúmenes hasta el aforo de un matraz.",
        "Arrastrar restos de sólido de un recipiente a otro."
      ],
      pasos: [
        "Llénala con agua destilada y etiquétala.",
        "Apunta el tubo hacia el recipiente.",
        "Aprieta suavemente para obtener un chorro fino o unas gotas."
      ],
      precauciones: [
        "Etiquétala siempre: algunas pisetas contienen alcohol o acetona, no agua.",
        "No la acerques al mechero si contiene líquidos inflamables."
      ],
      dato: "Se usa agua destilada y no de la llave porque el agua de la llave contiene sales disueltas que pueden alterar los experimentos.",
      temas: ["medicion", "soluciones"]
    }
  ]
};
