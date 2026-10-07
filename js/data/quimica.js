/* ==========================================================
   DATA - Química I y II
   Alineado al plan de estudios COBACH Chiapas 2026
   Componente: Formación Básica - Ciencias Experimentales
========================================================== */

const QUIMICA = {
  1: {
    titulo: "Química I",
    semestre: "Primer Semestre",
    clase: "s1",
    icono: "⚗️",
    descripcion: "Introducción a la química, estructura atómica, tabla periódica y enlaces.",
    contexto: "La química está en todo: en el café de Chiapas, en el suelo de tu comunidad, en el agua de los ríos y en los medicamentos. Comprenderla te permite entender el mundo que te rodea.",
    
    // Bloque 1: La Química como Ciencia
    temas: [
      {
        id: "q1-1",
        titulo: "La Química como Ciencia",
        icono: "🔬",
        contenido: `
          <p>La <strong>Química</strong> es la ciencia que estudia la composición, estructura, propiedades y transformaciones de la materia.</p>
          
          <h4>Objeto de estudio</h4>
          <ul>
            <li>La <strong>materia</strong>: todo lo que tiene masa y ocupa un volumen</li>
            <li>Los <strong>cambios</strong> que experimenta la materia</li>
            <li>La <strong>energía</strong> involucrada en esas transformaciones</li>
          </ul>
          
          <h4>Relación con otras ciencias</h4>
          <ul>
            <li><strong>Física:</strong> estudia las leyes que rigen la materia y energía</li>
            <li><strong>Biología:</strong> los procesos químicos de los seres vivos</li>
            <li><strong>Geología:</strong> la composición de la Tierra</li>
            <li><strong>Medicina:</strong> fármacos y tratamientos</li>
          </ul>
          
          <h4>Desarrollo histórico</h4>
          <p>Desde la alquimia medieval hasta la química moderna, la humanidad ha buscado comprender la naturaleza de la materia. Lavoisier, Dalton, Mendeleiev y Marie Curie son algunos de los científicos que transformaron esta disciplina.</p>
          
          <div class="ejemplo">
            <strong>Contexto Chiapas:</strong> La fermentación del café y el cacao, productos emblemáticos de Chiapas, son procesos químicos que ocurren gracias a reacciones bioquímicas. ¡La química está en tu comunidad!
          </div>
        `
      },
      {
        id: "q1-2",
        titulo: "Método Científico en Química",
        icono: "🧪",
        contenido: `
          <p>El <strong>método científico</strong> es el procedimiento ordenado que usan los químicos para investigar fenómenos naturales.</p>
          
          <h4>Pasos del método científico</h4>
          <ol>
            <li><strong>Observación:</strong> identificar un fenómeno o problema</li>
            <li><strong>Planteamiento del problema:</strong> formular una pregunta clara</li>
            <li><strong>Hipótesis:</strong> proponer una posible explicación</li>
            <li><strong>Experimentación:</strong> diseñar y realizar pruebas</li>
            <li><strong>Análisis de datos:</strong> organizar y evaluar resultados</li>
            <li><strong>Conclusión:</strong> aceptar o rechazar la hipótesis</li>
            <li><strong>Comunicación:</strong> compartir los hallazgos</li>
          </ol>
          
          <h4>Utilidad en ciencias experimentales</h4>
          <p>El método científico permite proponer soluciones a problemas del entorno, desde la contaminación del agua hasta el uso de fertilizantes en la agricultura.</p>
          
          <div class="ejemplo">
            <strong>Ejemplo contextualizado:</strong> ¿Por qué el agua del río de tu comunidad cambia de color? Hipótesis → toma de muestras → análisis → conclusión.
          </div>
        `
      },
      {
        id: "q1-3",
        titulo: "Propiedades de la Materia y su Medición",
        icono: "📏",
        contenido: `
          <p>La <strong>materia</strong> es todo lo que tiene masa y ocupa un volumen en el espacio.</p>
          
          <h4>Propiedades generales</h4>
          <ul>
            <li><strong>Masa:</strong> cantidad de materia (kg)</li>
            <li><strong>Volumen:</strong> espacio que ocupa (m³, L)</li>
            <li><strong>Inercia:</strong> resistencia al cambio de movimiento</li>
            <li><strong>Impenetrabilidad:</strong> dos cuerpos no ocupan el mismo espacio</li>
          </ul>
          
          <h4>Propiedades específicas</h4>
          <ul>
            <li><strong>Físicas:</strong> densidad, punto de fusión, punto de ebullición, color, dureza</li>
            <li><strong>Químicas:</strong> reactividad, combustibilidad, oxidación</li>
          </ul>
          
          <h4>Sistema Internacional de Unidades (SI)</h4>
          <div class="formula">
Longitud: metro (m)<br>
Masa: kilogramo (kg)<br>
Tiempo: segundo (s)<br>
Temperatura: kelvin (K)<br>
Cantidad de sustancia: mol (mol)
          </div>
          
          <h4>Instrumentos de medición</h4>
          <ul>
            <li><strong>Balanza:</strong> masa (g, kg)</li>
            <li><strong>Probeta:</strong> volumen de líquidos (mL, L)</li>
            <li><strong>Termómetro:</strong> temperatura (°C, K)</li>
            <li><strong>Vernier:</strong> longitudes pequeñas (mm)</li>
          </ul>
          
          <div class="ejemplo">
            <strong>Contexto:</strong> Medición de temperatura en Tuxtla Gutiérrez (35°C) vs San Cristóbal de las Casas (18°C).
          </div>
        `
      },
      {
        id: "q1-4",
        titulo: "Estados de Agregación de la Materia",
        icono: "💧",
        contenido: `
          <h4>Los tres estados clásicos</h4>
          <ul>
            <li><strong>Sólido:</strong> forma y volumen definidos. Fuerzas de atracción fuertes. Ej: hielo, roca</li>
            <li><strong>Líquido:</strong> volumen definido, forma variable. Fuerzas intermedias. Ej: agua, aceite</li>
            <li><strong>Gaseoso:</strong> forma y volumen variables. Fuerzas débiles. Ej: vapor de agua, aire</li>
          </ul>
          
          <h4>Cambios de estado</h4>
          <div class="formula">
Fusión: sólido → líquido (absorbe calor)<br>
Solidificación: líquido → sólido (libera calor)<br>
Evaporación: líquido → gas (absorbe calor)<br>
Condensación: gas → líquido (libera calor)<br>
Sublimación: sólido → gas (absorbe calor)<br>
Deposición: gas → sólido (libera calor)
          </div>
          
          <div class="ejemplo">
            <strong>Contexto Chiapas:</strong> El ciclo del agua en la Selva Lacandona: evaporación en los ríos, condensación en las montañas y precipitación en forma de lluvia.
          </div>
        `
      },
      {
        id: "q1-5",
        titulo: "Clasificación de la Materia: Mezclas y Sustancias Puras",
        icono: "🧱",
        contenido: `
          <h4>Sustancias puras</h4>
          <ul>
            <li><strong>Elementos:</strong> no se pueden descomponer en sustancias más simples. Ej: Fe, O, H, C, Au</li>
            <li><strong>Compuestos:</strong> formados por dos o más elementos en proporción fija. Ej: H₂O, NaCl, CO₂</li>
          </ul>
          
          <h4>Mezclas</h4>
          <ul>
            <li><strong>Homogéneas:</strong> componentes no se distinguen a simple vista. Ej: agua salada, aire, café filtrado</li>
            <li><strong>Heterogéneas:</strong> componentes se distinguen a simple vista. Ej: granito, ensalada, agua con aceite</li>
          </ul>
          
          <h4>Métodos de separación</h4>
          <ul>
            <li><strong>Filtración:</strong> separa sólido de líquido</li>
            <li><strong>Destilación:</strong> separa líquidos con diferente punto de ebullición</li>
            <li><strong>Decantación:</strong> separa líquidos inmiscibles</li>
            <li><strong>Tamizado:</strong> separa sólidos de diferente tamaño</li>
            <li><strong>Evaporación:</strong> separa sólido disuelto de líquido</li>
          </ul>
          
          <div class="ejemplo">
            <strong>Práctica contextualizada:</strong> Separar sal de agua de mar mediante evaporación solar. ¡Útil para comunidades costeras de Chiapas!
          </div>
        `
      }
    ],
    
    // Bloque 2: Estructura Atómica
    temasAtómicos: [
      {
        id: "q1-6",
        titulo: "El Átomo y sus Partículas Subatómicas",
        icono: "⚛️",
        contenido: `
          <p>El <strong>átomo</strong> es la unidad más pequeña de un elemento que conserva sus propiedades químicas.</p>
          
          <h4>Partículas subatómicas</h4>
          <ul>
            <li><strong>Protón:</strong> carga positiva (+), se encuentra en el núcleo</li>
            <li><strong>Neutrón:</strong> sin carga, se encuentra en el núcleo</li>
            <li><strong>Electrón:</strong> carga negativa (-), gira alrededor del núcleo</li>
          </ul>
          
          <h4>Número atómico (Z) y número de masa (A)</h4>
          <div class="formula">
Z = número de protones = número de electrones (átomo neutro)<br>
A = número de protones + número de neutrones<br>
Neutrones = A - Z
          </div>
          
          <h4>Isótopos</h4>
          <p>Átomos del mismo elemento con diferente número de neutrones. Ej: Carbono-12, Carbono-14</p>
          
          <div class="ejemplo">
            <strong>Ejemplo:</strong> El carbono (C) tiene Z=6 y A=12. Neutrones = 12 - 6 = 6.
          </div>
        `
      },
      {
        id: "q1-7",
        titulo: "Configuración Electrónica y Números Cuánticos",
        icono: "🔢",
        contenido: `
          <h4>Niveles de energía</h4>
          <p>Los electrones se distribuyen en niveles y subniveles de energía.</p>
          
          <div class="formula">
Niveles: 1, 2, 3, 4, 5, 6, 7<br>
Subniveles: s, p, d, f<br><br>
Capacidad máxima:<br>
s → 2 electrones<br>
p → 6 electrones<br>
d → 10 electrones<br>
f → 14 electrones
          </div>
          
          <h4>Regla de Aufbau (diagonal)</h4>
          <div class="formula">
1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶ 5s² 4d¹⁰ 5p⁶...
          </div>
          
          <h4>Números cuánticos</h4>
          <ul>
            <li><strong>n:</strong> nivel de energía (1, 2, 3...)</li>
            <li><strong>l:</strong> forma del orbital (0=s, 1=p, 2=d, 3=f)</li>
            <li><strong>m:</strong> orientación del orbital</li>
            <li><strong>s:</strong> espín del electrón (+½, -½)</li>
          </ul>
          
          <div class="ejemplo">
            <strong>Ejemplo:</strong> La configuración del sodio (Na, Z=11) es: 1s² 2s² 2p⁶ 3s¹
          </div>
        `
      }
    ],
    
    // Bloque 3: Tabla Periódica
    temasTabla: [
      {
        id: "q1-8",
        titulo: "La Tabla Periódica Moderna",
        icono: "📊",
        contenido: `
          <p>La <strong>tabla periódica</strong> organiza los 118 elementos conocidos según su número atómico y propiedades químicas.</p>
          
          <h4>Organización</h4>
          <ul>
            <li><strong>Grupos (columnas):</strong> 18 grupos. Elementos con propiedades similares</li>
            <li><strong>Periodos (filas):</strong> 7 periodos. Indican el número de niveles de energía</li>
          </ul>
          
          <h4>Grupos importantes</h4>
          <ul>
            <li><strong>Grupo 1:</strong> Metales alcalinos (Li, Na, K, Rb, Cs, Fr)</li>
            <li><strong>Grupo 2:</strong> Metales alcalinotérreos (Be, Mg, Ca, Sr, Ba, Ra)</li>
            <li><strong>Grupos 3-12:</strong> Metales de transición</li>
            <li><strong>Grupo 17:</strong> Halógenos (F, Cl, Br, I, At)</li>
            <li><strong>Grupo 18:</strong> Gases nobles (He, Ne, Ar, Kr, Xe, Rn)</li>
          </ul>
          
          <h4>Bloques</h4>
          <ul>
            <li><strong>Bloque s:</strong> grupos 1 y 2</li>
            <li><strong>Bloque p:</strong> grupos 13-18</li>
            <li><strong>Bloque d:</strong> grupos 3-12 (transición)</li>
            <li><strong>Bloque f:</strong> lantánidos y actínidos</li>
          </ul>
        `
      },
      {
        id: "q1-9",
        titulo: "Propiedades Periódicas",
        icono: "📈",
        contenido: `
          <h4>Radio atómico</h4>
          <p>Distancia del núcleo al electrón más externo.</p>
          <ul>
            <li>Aumenta de arriba hacia abajo (más niveles)</li>
            <li>Disminuye de izquierda a derecha (mayor carga nuclear)</li>
          </ul>
          
          <h4>Electronegatividad</h4>
          <p>Tendencia de un átomo a atraer electrones.</p>
          <ul>
            <li>Aumenta de izquierda a derecha</li>
            <li>Disminuye de arriba hacia abajo</li>
            <li>El flúor (F) es el más electronegativo</li>
          </ul>
          
          <h4>Energía de ionización</h4>
          <p>Energía necesaria para quitar un electrón.</p>
          <ul>
            <li>Aumenta de izquierda a derecha</li>
            <li>Disminuye de arriba hacia abajo</li>
          </ul>
          
          <h4>Carácter metálico</h4>
          <ul>
            <li><strong>Metales:</strong> izquierda y centro de la tabla</li>
            <li><strong>No metales:</strong> derecha superior</li>
            <li><strong>Metaloides:</strong> entre metales y no metales (B, Si, Ge, As, Sb, Te)</li>
          </ul>
          
          <div class="ejemplo">
            <strong>Contexto:</strong> El litio (Li) es un metal alcalino usado en baterías de celulares. La electronegatividad del oxígeno (O) explica por qué forma enlaces covalentes con el hidrógeno (H₂O).
          </div>
        `
      }
    ],
    
    // Bloque 4: Enlaces Químicos
    temasEnlaces: [
      {
        id: "q1-10",
        titulo: "Enlace Químico y Regla del Octeto",
        icono: "🔗",
        contenido: `
          <p>El <strong>enlace químico</strong> es la fuerza que mantiene unidos a los átomos para formar compuestos.</p>
          
          <h4>Regla del octeto</h4>
          <p>Los átomos tienden a tener 8 electrones en su última capa (capa de valencia) para alcanzar estabilidad, como los gases nobles.</p>
          
          <h4>Electrones de valencia</h4>
          <p>Son los electrones de la última capa y son los responsables de la formación de enlaces.</p>
          
          <div class="formula">
Grupo 1: 1 electrón de valencia<br>
Grupo 2: 2 electrones de valencia<br>
Grupo 13: 3 electrones de valencia<br>
Grupo 14: 4 electrones de valencia<br>
Grupo 15: 5 electrones de valencia<br>
Grupo 16: 6 electrones de valencia<br>
Grupo 17: 7 electrones de valencia<br>
Grupo 18: 8 electrones de valencia (estables)
          </div>
          
          <h4>Estructuras de Lewis</h4>
          <p>Representación de los electrones de valencia mediante puntos.</p>
          <div class="formula">
H• (1 electrón)<br>
•O• (6 electrones)<br>
Cl• (7 electrones)
          </div>
        `
      },
      {
        id: "q1-11",
        titulo: "Tipos de Enlace Químico",
        icono: "🔗",
        contenido: `
          <h4>Enlace iónico</h4>
          <ul>
            <li><strong>Formación:</strong> transferencia de electrones de un metal a un no metal</li>
            <li><strong>Entre:</strong> metal + no metal</li>
            <li><strong>Ejemplo:</strong> NaCl (cloruro de sodio), CaO (óxido de calcio)</li>
            <li><strong>Propiedades:</strong> sólidos cristalinos, altos puntos de fusión, conducen electricidad en disolución</li>
          </ul>
          
          <h4>Enlace covalente</h4>
          <ul>
            <li><strong>Formación:</strong> compartición de electrones entre no metales</li>
            <li><strong>Entre:</strong> no metal + no metal</li>
            <li><strong>Ejemplo:</strong> H₂O (agua), CO₂ (dióxido de carbono), CH₄ (metano)</li>
            <li><strong>Propiedades:</strong> puntos de fusión bajos, malos conductores</li>
            <li><strong>Tipos:</strong> polar (electronegatividad diferente) y no polar (similar)</li>
          </ul>
          
          <h4>Enlace metálico</h4>
          <ul>
            <li><strong>Formación:</strong> mar de electrones deslocalizados</li>
            <li><strong>Entre:</strong> metal + metal</li>
            <li><strong>Ejemplo:</strong> Cu, Fe, Al, Au</li>
            <li><strong>Propiedades:</strong> buenos conductores, maleables, dúctiles, brillantes</li>
          </ul>
          
          <div class="ejemplo">
            <strong>Contexto Chiapas:</strong> El enlace iónico del NaCl (sal de mesa) es el mismo que se extrae de las salinas de Chiapas. El enlace covalente del H₂O explica por qué el agua es líquida a temperatura ambiente.
          </div>
        `
      }
    ]
  },

  2: {
    titulo: "Química II",
    semestre: "Segundo Semestre",
    clase: "s2",
    icono: "⚗️",
    descripcion: "Nomenclatura, reacciones químicas, estequiometría y soluciones.",
    contexto: "Las reacciones químicas están presentes en la cocina, en la agricultura, en la industria y en los procesos biológicos de tu cuerpo.",
    
    temas: [
      {
        id: "q2-1",
        titulo: "Nomenclatura Química",
        icono: "📝",
        contenido: `
          <p>La <strong>nomenclatura química</strong> es el sistema de reglas para nombrar los compuestos químicos.</p>
          
          <h4>Óxidos básicos</h4>
          <p>Metal + Oxígeno → Óxido básico</p>
          <div class="formula">
2Ca + O₂ → 2CaO (Óxido de calcio)
          </div>
          
          <h4>Óxidos ácidos (anhídridos)</h4>
          <p>No metal + Oxígeno → Óxido ácido</p>
          <div class="formula">
S + O₂ → SO₂ (Dióxido de azufre)
          </div>
          
          <h4>Hidróxidos</h4>
          <p>Óxido básico + Agua → Hidróxido</p>
          <div class="formula">
CaO + H₂O → Ca(OH)₂ (Hidróxido de calcio)
          </div>
          
          <h4>Ácidos oxácidos</h4>
          <p>Óxido ácido + Agua → Oxácido</p>
          <div class="formula">
SO₃ + H₂O → H₂SO₄ (Ácido sulfúrico)
          </div>
          
          <h4>Ácidos hidrácidos</h4>
          <p>Hidrógeno + No metal → Hidrácido</p>
          <div class="formula">
H₂ + Cl₂ → 2HCl (Ácido clorhídrico)
          </div>
          
          <h4>Sales binarias y oxisales</h4>
          <div class="formula">
Ácido + Hidróxido → Sal + Agua<br>
HCl + NaOH → NaCl + H₂O
          </div>
          
          <div class="ejemplo">
            <strong>Contexto:</strong> El hidróxido de calcio (Ca(OH)₂) se usa para encalar las milpas en Chiapas, controlando la acidez del suelo.
          </div>
        `
      },
      {
        id: "q2-2",
        titulo: "Reacciones Químicas",
        icono: "💥",
        contenido: `
          <p>Una <strong>reacción química</strong> es un proceso en el que una o más sustancias (reactivos) se transforman en otras (productos).</p>
          
          <h4>Ecuación química</h4>
          <div class="formula">
Reactivos → Productos<br>
A + B → C + D
          </div>
          
          <h4>Tipos de reacciones</h4>
          <ul>
            <li><strong>Síntesis o combinación:</strong> A + B → AB. Ej: 2Na + Cl₂ → 2NaCl</li>
            <li><strong>Descomposición:</strong> AB → A + B. Ej: 2H₂O → 2H₂ + O₂</li>
            <li><strong>Sustitución simple:</strong> AB + C → AC + B. Ej: Zn + 2HCl → ZnCl₂ + H₂</li>
            <li><strong>Doble sustitución:</strong> AB + CD → AD + CB. Ej: AgNO₃ + NaCl → AgCl + NaNO₃</li>
          </ul>
          
          <h4>Reacciones exotérmicas y endotérmicas</h4>
          <ul>
            <li><strong>Exotérmicas:</strong> liberan energía (calor). Ej: combustión</li>
            <li><strong>Endotérmicas:</strong> absorben energía. Ej: fotosíntesis</li>
          </ul>
          
          <h4>Ley de Conservación de la Masa (Lavoisier)</h4>
          <p>La masa de los reactivos es igual a la masa de los productos. La materia no se crea ni se destruye, solo se transforma.</p>
          
          <div class="ejemplo">
            <strong>Contexto:</strong> La combustión del gas butano en la estufa es una reacción exotérmica que usamos a diario para cocinar.
          </div>
        `
      },
      {
        id: "q2-3",
        titulo: "Balanceo de Ecuaciones Químicas",
        icono: "⚖️",
        contenido: `
          <p>El <strong>balanceo</strong> consiste en igualar el número de átomos de cada elemento en ambos lados de la ecuación.</p>
          
          <h4>Método por tanteo</h4>
          <ol>
            <li>Escribir la ecuación sin balancear</li>
            <li>Contar átomos de cada elemento en reactivos y productos</li>
            <li>Ajustar coeficientes hasta igualar</li>
            <li>Verificar el balance final</li>
          </ol>
          
          <h4>Ejemplo</h4>
          <div class="formula">
CH₄ + 2O₂ → CO₂ + 2H₂O
          </div>
          <p>Verificación:</p>
          <ul>
            <li>C: 1 = 1 ✓</li>
            <li>H: 4 = 4 ✓</li>
            <li>O: 4 = 4 ✓</li>
          </ul>
          
          <h4>Métodos adicionales</h4>
          <ul>
            <li><strong>Algebraico:</strong> usar sistemas de ecuaciones</li>
            <li><strong>Redox:</strong> para reacciones de oxidación-reducción</li>
          </ul>
          
          <div class="ejemplo">
            <strong>Ejercicio:</strong> Balancear: Fe + O₂ → Fe₂O₃<br>
            Solución: 4Fe + 3O₂ → 2Fe₂O₃
          </div>
        `
      },
      {
        id: "q2-4",
        titulo: "Estequiometría: El Mol",
        icono: "🔢",
        contenido: `
          <p>La <strong>estequiometría</strong> estudia las relaciones cuantitativas en las reacciones químicas.</p>
          
          <h4>Conceptos fundamentales</h4>
          <ul>
            <li><strong>Mol:</strong> cantidad de sustancia que contiene 6.022×10²³ partículas (número de Avogadro)</li>
            <li><strong>Masa molar:</strong> masa en gramos de 1 mol de una sustancia (g/mol)</li>
            <li><strong>Volumen molar:</strong> 22.4 L de cualquier gas en condiciones normales</li>
          </ul>
          
          <h4>Fórmulas clave</h4>
          <div class="formula">
n = m / M<br>
n = número de moles<br>
m = masa en gramos<br>
M = masa molar (g/mol)<br><br>
n = N / 6.022×10²³<br>
N = número de partículas
          </div>
          
          <h4>Cálculos estequiométricos</h4>
          <ol>
            <li>Balancear la ecuación</li>
            <li>Convertir a moles</li>
            <li>Usar proporciones molares</li>
            <li>Convertir a unidades deseadas</li>
          </ol>
          
          <div class="ejemplo">
            <strong>Ejemplo:</strong> ¿Cuántos moles hay en 36 g de agua (H₂O)?<br>
            M(H₂O) = 2(1) + 16 = 18 g/mol<br>
            n = 36 / 18 = 2 moles
          </div>
        `
      },
      {
        id: "q2-5",
        titulo: "Soluciones Químicas",
        icono: "🧴",
        contenido: `
          <p>Una <strong>solución</strong> es una mezcla homogénea de dos o más sustancias.</p>
          
          <h4>Componentes</h4>
          <ul>
            <li><strong>Soluto:</strong> sustancia que se disuelve (generalmente en menor cantidad)</li>
            <li><strong>Disolvente:</strong> sustancia que disuelve (generalmente en mayor cantidad)</li>
          </ul>
          
          <h4>Tipos de soluciones</h4>
          <ul>
            <li><strong>Diluida:</strong> poco soluto</li>
            <li><strong>Concentrada:</strong> mucho soluto</li>
            <li><strong>Saturada:</strong> máxima cantidad de soluto disuelto</li>
            <li><strong>Sobresaturada:</strong> más soluto del que puede disolver normalmente</li>
          </ul>
          
          <h4>Concentración</h4>
          <div class="formula">
% masa = (masa soluto / masa solución) × 100<br><br>
% volumen = (volumen soluto / volumen solución) × 100<br><br>
Molaridad (M) = moles de soluto / litros de solución<br><br>
Molalidad (m) = moles de soluto / kg de disolvente
          </div>
          
          <div class="ejemplo">
            <strong>Contexto:</strong> La preparación de suero oral (agua, sal y azúcar) es un ejemplo de solución que puede salvar vidas en casos de deshidratación.
          </div>
        `
      },
      {
        id: "q2-6",
        titulo: "Ácidos y Bases",
        icono: "🧪",
        contenido: `
          <h4>Teoría de Arrhenius</h4>
          <ul>
            <li><strong>Ácido:</strong> sustancia que libera H⁺ en agua</li>
            <li><strong>Base:</strong> sustancia que libera OH⁻ en agua</li>
          </ul>
          
          <h4>Teoría de Brønsted-Lowry</h4>
          <ul>
            <li><strong>Ácido:</strong> dona protones (H⁺)</li>
            <li><strong>Base:</strong> acepta protones (H⁺)</li>
          </ul>
          
          <h4>Escala de pH</h4>
          <div class="formula">
pH = -log[H⁺]<br><br>
pH < 7 → ácido<br>
pH = 7 → neutro<br>
pH > 7 → base
          </div>
          
          <h4>Indicadores</h4>
          <ul>
            <li><strong>Tornasol:</strong> rojo en ácido, azul en base</li>
            <li><strong>Fenolftaleína:</strong> incolora en ácido, rosa en base</li>
            <li><strong>Papel pH:</strong> cambia de color según el pH</li>
          </ul>
          
          <div class="ejemplo">
            <strong>Contexto:</strong> El jugo de limón (pH ~2) es ácido. El jabón (pH ~10) es básico. El agua pura tiene pH 7.
          </div>
        `
      },
      {
        id: "q2-7",
        titulo: "Reacciones de Óxido-Reducción (Redox)",
        icono: "⚡",
        contenido: `
          <p>Las <strong>reacciones redox</strong> son aquellas donde hay transferencia de electrones entre sustancias.</p>
          
          <h4>Conceptos clave</h4>
          <ul>
            <li><strong>Oxidación:</strong> pérdida de electrones (aumenta el número de oxidación)</li>
            <li><strong>Reducción:</strong> ganancia de electrones (disminuye el número de oxidación)</li>
            <li><strong>Agente oxidante:</strong> sustancia que se reduce y oxida a otra</li>
            <li><strong>Agente reductor:</strong> sustancia que se oxida y reduce a otra</li>
          </ul>
          
          <h4>Ejemplo</h4>
          <div class="formula">
Zn + Cu²⁺ → Zn²⁺ + Cu<br><br>
Zn se oxida (pierde 2e⁻)<br>
Cu²⁺ se reduce (gana 2e⁻)
          </div>
          
          <h4>Aplicaciones</h4>
          <ul>
            <li>Pilas y baterías</li>
            <li>Corrosión de metales (oxidación del hierro)</li>
            <li>Respiración celular (obtención de energía)</li>
            <li>Fotosíntesis (producción de glucosa)</li>
          </ul>
          
          <div class="ejemplo">
            <strong>Contexto:</strong> La oxidación del hierro (herrumbre) es una reacción redox que deteriora estructuras metálicas en ambientes húmedos como la costa de Chiapas.
          </div>
        `
      },
      {
        id: "q2-8",
        titulo: "Química y Vida Cotidiana",
        icono: "🏠",
        contenido: `
          <p>La química está presente en todos los aspectos de nuestra vida diaria.</p>
          
          <h4>En el hogar</h4>
          <ul>
            <li><strong>Limpieza:</strong> jabones, detergentes, blanqueadores</li>
            <li><strong>Cocina:</strong> fermentación, cocción, conservación de alimentos</li>
            <li><strong>Medicina:</strong> fármacos, vacunas, antisépticos</li>
          </ul>
          
          <h4>En la agricultura</h4>
          <ul>
            <li>Fertilizantes (nitratos, fosfatos, potasio)</li>
            <li>Pesticidas y herbicidas</li>
            <li>Control de pH del suelo</li>
            <li>Compostaje (descomposición química)</li>
          </ul>
          
          <h4>En la industria</h4>
          <ul>
            <li>Petroquímica (plásticos, combustibles)</li>
            <li>Farmacéutica (medicamentos)</li>
            <li>Alimentaria (conservadores, colorantes)</li>
            <li>Textil (tintes, fibras sintéticas)</li>
          </ul>
          
          <h4>Impacto ambiental</h4>
          <ul>
            <li><strong>Contaminación del agua:</strong> desechos industriales, agroquímicos</li>
            <li><strong>Contaminación del aire:</strong> gases de combustión (CO₂, SO₂, NOx)</li>
            <li><strong>Lluvia ácida:</strong> SO₂ + H₂O → H₂SO₄</li>
            <li><strong>Cambio climático:</strong> efecto invernadero por CO₂</li>
          </ul>
          
          <div class="ejemplo">
            <strong>Contexto Chiapas:</strong> El uso de fertilizantes en las plantaciones de café puede contaminar los ríos si no se aplican correctamente. La química verde propone alternativas sostenibles.
          </div>
        `
      }
    ]
  }
};