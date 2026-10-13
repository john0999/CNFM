/* ==========================================================
   DATA - Ciencias Naturales, Experimentales y Tecnología
   Unidades de Aprendizaje Curricular (UAC) - COBACH Chiapas
   Currículum Fundamental - Recurso Sociocognitivo
========================================================== */

const CIENCIAS = {

  // ==========================================================
  // 1er SEMESTRE - La materia y sus interacciones
  // ==========================================================
  1: {
    titulo: "La materia y sus interacciones",
    subtitulo: "Ciencias Naturales, Experimentales y Tecnología I",
    semestre: "Primer Semestre",
    clase: "s1",
    icono: "🔬",
    descripcion: "Introducción a la ciencia, el método científico, la materia, sus propiedades e interacciones.",
    contexto: "En Chiapas, el EMSAD forma estudiantes que aprenden ciencia desde su realidad: la milpa, el café, los ríos y las montañas.",
    temas: [
      {
        id: "cn1-1",
        titulo: "La Ciencia y su Método",
        icono: "🧠",
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
        `
      },
      {
        id: "cn1-2",
        titulo: "La Materia y sus Propiedades",
        icono: "🧱",
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
        `
      },
      {
        id: "cn1-3",
        titulo: "Estados de Agregación de la Materia",
        icono: "💧",
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
        `
      },
      {
        id: "cn1-4",
        titulo: "Clasificación de la Materia",
        icono: "🧪",
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
        `
      },
      {
        id: "cn1-5",
        titulo: "Medición y Sistema Internacional",
        icono: "📏",
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
        `
      }
    ]
  },

  // ==========================================================
  // 2do SEMESTRE - Conservación de la energía y sus interacciones
  // ==========================================================
  2: {
    titulo: "Conservación de la energía y sus interacciones con la materia",
    subtitulo: "Ciencias Naturales, Experimentales y Tecnología II",
    semestre: "Segundo Semestre",
    clase: "s2",
    icono: "⚡",
    descripcion: "La energía, sus formas, transformaciones, conservación y su relación con la materia.",
    contexto: "Chiapas es rico en energía: hidroeléctricas en el Grijalva, sol en la costa, biomasa en el campo.",
    temas: [
      {
        id: "cn2-1",
        titulo: "¿Qué es la Energía?",
        icono: "🔋",
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
        `
      },
      {
        id: "cn2-2",
        titulo: "Formas de Energía",
        icono: "💡",
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
        `
      },
      {
        id: "cn2-3",
        titulo: "Ley de Conservación de la Energía",
        icono: "♻️",
        contenido: `
          <p>La energía <strong>no se crea ni se destruye, solo se transforma</strong>.</p>
          <div class="formula">E<sub>total inicial</sub> = E<sub>total final</sub></div>
          <div class="ejemplo">
            Una montaña rusa convierte energía potencial en cinética. Lo mismo ocurre con el agua en una presa.
          </div>
        `
      },
      {
        id: "cn2-4",
        titulo: "Fuentes de Energía",
        icono: "🌞",
        contenido: `
          <h4>Renovables</h4>
          <ul><li>Solar, eólica, hidráulica, geotérmica, biomasa</li></ul>
          <h4>No renovables</h4>
          <ul><li>Carbón, petróleo, gas, nuclear</li></ul>
          <div class="ejemplo">
            <strong>Contexto Chiapas:</strong> Presas hidroeléctricas Chicoasén y Malpaso en el río Grijalva.
          </div>
        `
      },
      {
        id: "cn2-5",
        titulo: "Trabajo y Potencia",
        icono: "🏋️",
        contenido: `
          <div class="formula">
Trabajo: W = F · d · cos(θ)  [Joule]<br>
Potencia: P = W / t  [Watt]
          </div>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> Subir carga de café de 50 kg a 10 m:<br>
            W = 50 × 9.8 × 10 = 4,900 J
          </div>
        `
      },
      {
        id: "cn2-6",
        titulo: "Termodinámica Básica",
        icono: "🔥",
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
        `
      }
    ]
  },

  // ==========================================================
  // 3er SEMESTRE - Ecosistemas: interacciones, energía y dinámica
  // ==========================================================
  3: {
    titulo: "Ecosistemas: interacciones, energía y dinámica",
    subtitulo: "Ciencias Naturales, Experimentales y Tecnología III",
    semestre: "Tercer Semestre",
    clase: "s3",
    icono: "🌎",
    descripcion: "Los ecosistemas, sus interacciones, el flujo de energía y la dinámica de los sistemas terrestres.",
    contexto: "Chiapas es un laboratorio natural: selvas, montañas, ríos y biodiversidad única.",
    temas: [
      {
        id: "cn3-1",
        titulo: "Los Ecosistemas y sus Componentes",
        icono: "🌿",
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
        `
      },
      {
        id: "cn3-2",
        titulo: "Flujo de Energía y Cadenas Tróficas",
        icono: "🔁",
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
        `
      },
      {
        id: "cn3-3",
        titulo: "Ciclos Biogeoquímicos",
        icono: "♻️",
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
        `
      },
      {
        id: "cn3-4",
        titulo: "Biodiversidad Chiapaneca",
        icono: "🦜",
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
        `
      },
      {
        id: "cn3-5",
        titulo: "Geografía y Sistemas Terrestres de Chiapas",
        icono: "🗺️",
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
            <li>Grijalva (más caudaloso de México)</li>
            <li>Usumacinta, Suchiate</li>
          </ul>
        `
      },
      {
        id: "cn3-6",
        titulo: "Problemáticas Ambientales",
        icono: "⚠️",
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
        `
      }
    ]
  },

  // ==========================================================
  // 4to SEMESTRE - Reacciones químicas
  // ==========================================================
  4: {
    titulo: "Reacciones químicas: conservación de la materia en la formación de nuevas sustancias",
    subtitulo: "Ciencias Naturales, Experimentales y Tecnología IV",
    semestre: "Cuarto Semestre",
    clase: "s4",
    icono: "⚗️",
    descripcion: "Reacciones químicas, conservación de la materia, formación de nuevas sustancias y estequiometría.",
    contexto: "La química está en el café, en el suelo, en los medicamentos y en la vida diaria.",
    temas: [
      {
        id: "cn4-1",
        titulo: "El Átomo y sus Partículas",
        icono: "⚛️",
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
        `
      },
      {
        id: "cn4-2",
        titulo: "Tabla Periódica",
        icono: "📊",
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
        `
      },
      {
        id: "cn4-3",
        titulo: "Enlaces Químicos",
        icono: "🔗",
        contenido: `
          <ul>
            <li><strong>Iónico:</strong> metal + no metal. NaCl</li>
            <li><strong>Covalente:</strong> no metal + no metal. H₂O</li>
            <li><strong>Metálico:</strong> metal + metal.</li>
          </ul>
          <div class="ejemplo">
            <strong>Regla del octeto:</strong> los átomos buscan 8 e⁻ en su última capa.
          </div>
        `
      },
      {
        id: "cn4-4",
        titulo: "Reacciones Químicas",
        icono: "💥",
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
        `
      },
      {
        id: "cn4-5",
        titulo: "Balanceo de Ecuaciones",
        icono: "⚖️",
        contenido: `
          <h4>Método por tanteo</h4>
          <ol>
            <li>Escribir la ecuación sin balancear</li>
            <li>Contar átomos de cada elemento</li>
            <li>Ajustar coeficientes</li>
            <li>Verificar balance</li>
          </ol>
          <div class="formula">CH₄ + 2O₂ → CO₂ + 2H₂O</div>
        `
      },
      {
        id: "cn4-6",
        titulo: "Estequiometría: El Mol",
        icono: "🔢",
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
        `
      }
    ]
  },

  // ==========================================================
  // 5to SEMESTRE - La energía en los procesos de la vida diaria
  // ==========================================================
  5: {
    titulo: "La energía en los procesos de la vida diaria",
    subtitulo: "Ciencias Naturales, Experimentales y Tecnología V",
    semestre: "Quinto Semestre",
    clase: "s5",
    icono: "🌌",
    descripcion: "La energía en los procesos cotidianos: fuerzas, electricidad, ondas y fenómenos naturales.",
    contexto: "Desde las fuerzas que mueven el agua en las presas hasta la electricidad en tu comunidad.",
    temas: [
      {
        id: "cn5-1",
        titulo: "Fuerza y Movimiento",
        icono: "🏃",
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
        `
      },
      {
        id: "cn5-2",
        titulo: "Cinemática",
        icono: "🚗",
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
        `
      },
      {
        id: "cn5-3",
        titulo: "Electricidad y Magnetismo",
        icono: "🧲",
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
        `
      },
      {
        id: "cn5-4",
        titulo: "Ondas y Sonido",
        icono: "🌊",
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
        `
      },
      {
        id: "cn5-5",
        titulo: "Hidrostática y Fluidos",
        icono: "💧",
        contenido: `
          <div class="formula">
Pascal: P₁ = P₂ → F₁/A₁ = F₂/A₂<br>
Arquímedes: E = ρ · g · V<br>
Presión hidrostática: P = ρ · g · h
          </div>
          <div class="ejemplo">
            <strong>Contexto:</strong> Presas hidroeléctricas de Chiapas (Chicoasén, Malpaso).
          </div>
        `
      },
      {
        id: "cn5-6",
        titulo: "El Universo y sus Fenómenos",
        icono: "🚀",
        contenido: `
          <h4>Teoría del Big Bang</h4>
          <p>Hace ~13,800 millones de años.</p>
          <h4>Cuerpos celestes</h4>
          <ul>
            <li>Estrellas, planetas, satélites</li>
            <li>Galaxias (Vía Láctea)</li>
            <li>Agujeros negros</li>
          </ul>
        `
      }
    ]
  },

  // ==========================================================
  // 6to SEMESTRE - Organismos: estructuras, procesos, herencia
  // ==========================================================
  6: {
    titulo: "Organismos: estructuras y procesos. Herencia y evolución biológica",
    subtitulo: "Ciencias Naturales, Experimentales y Tecnología VI",
    semestre: "Sexto Semestre",
    clase: "s6",
    icono: "🧬",
    descripcion: "La célula, genética, herencia, evolución y biodiversidad de los organismos.",
    contexto: "Chiapas es un tesoro biológico: selvas, especies únicas y diversidad cultural.",
    temas: [
      {
        id: "cn6-1",
        titulo: "La Célula: Estructura y Función",
        icono: "🔵",
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
        `
      },
      {
        id: "cn6-2",
        titulo: "Genética y Herencia",
        icono: "🧬",
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
        `
      },
      {
        id: "cn6-3",
        titulo: "Evolución Biológica",
        icono: "🦕",
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
        `
      },
      {
        id: "cn6-4",
        titulo: "Biodiversidad",
        icono: "🌳",
        contenido: `
          <p>México es <strong>megadiverso</strong>: 5° lugar mundial.</p>
          <h4>Niveles</h4>
          <ul><li>Genética, de especies, de ecosistemas</li></ul>
          <h4>Amenazas</h4>
          <ul>
            <li>Deforestación, contaminación</li>
            <li>Cambio climático, especies invasoras</li>
          </ul>
        `
      },
      {
        id: "cn6-5",
        titulo: "Ecosistemas de Chiapas",
        icono: "🌴",
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
        `
      },
      {
        id: "cn6-6",
        titulo: "Salud y Enfermedad",
        icono: "🏥",
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
        `
      }
    ]
  },
  7: {
    titulo: "Taller de Ciencias I",
    subtitulo: "Prácticas de ciencia",
    semestre: "Segundo Semestre",
    clase: "s2",
    icono: "🔬",
    descripcion: "Investiga, experimenta y vincula la ciencia con tu comunidad.",
    contexto: "El taller te invita a explorar los fenómenos naturales de tu entorno y a proponer soluciones a problemas reales de tu comunidad.",
    temas: [
      {
        id: "tc1-1",
        titulo: "La Ciencia como Investigación",
        icono: "🔍",
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
            <strong>Contexto Chiapas:</strong> En el CEMSaD Sombra Carrizal, estudiantes usaron el cultivo de maíz como eje articulador para aprender el método científico [citation:5].
          </div>
        `
      },
      {
        id: "tc1-2",
        titulo: "La Materia en mi Comunidad",
        icono: "🧱",
        contenido: `
          <p>Explora las propiedades de la materia que te rodea: el suelo, el agua, el aire.</p>
          <h4>Proyecto sugerido: "La basura"</h4>
          <p>Los materiales del COBACH usan la problemática de la basura como eje para estudiar las propiedades de la materia [citation:29].</p>
          <h4>Actividades prácticas</h4>
          <ul>
            <li>Clasificar residuos según sus propiedades</li>
            <li>Medir densidad de diferentes materiales</li>
            <li>Identificar cambios físicos y químicos en la cocina</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto:</strong> Estudiantes del EMSAD 170 Sombra Carrizal elaboraron invernaderos con materiales reciclables para sembrar café [citation:28].
          </div>
        `
      },
      {
        id: "tc1-3",
        titulo: "Energía en Acción",
        icono: "⚡",
        contenido: `
          <p>Investiga cómo la energía se manifiesta en tu comunidad.</p>
          <h4>Progresión 1:</h4>
          <p>"A través de la observación de su contexto, las y los estudiantes identificarán un fenómeno natural de su interés que involucre el flujo de energía en sistemas" [citation:5].</p>
          <h4>Actividades</h4>
          <ul>
            <li>Recorrido por la comunidad para identificar flujos de energía</li>
            <li>Observar el ciclo del agua en tu región</li>
            <li>Analizar cómo se genera la electricidad en Chiapas</li>
          </ul>
        `
      },
      {
        id: "tc1-4",
        titulo: "Ciencia, Tecnología y Sociedad",
        icono: "🌍",
        contenido: `
          <p>Reflexiona sobre cómo la ciencia y la tecnología impactan tu vida y tu comunidad.</p>
          <h4>Preguntas para reflexionar</h4>
          <ul>
            <li>¿Cómo ha cambiado la tecnología la forma de vida en tu comunidad?</li>
            <li>¿Qué problemas ambientales identificas en tu entorno?</li>
            <li>¿Qué soluciones científicas o tecnológicas propondrías?</li>
          </ul>
          <div class="ejemplo">
            <strong>Proyecto:</strong> "Casa sustentable" con adobe, plantas acuáticas y paneles solares, ganador del 2° lugar en la Feria Mexicana de Ciencias e Ingenierías 2024 [citation:38].
          </div>
        `
      }
    ]
  },
  8: {
    titulo: "Taller de Ciencias II",
    subtitulo: "Proyectos de investigación aplicados",
    semestre: "Tercer Semestre",
    clase: "s3",
    icono: "🔬",
    descripcion: "Desarrolla proyectos de investigación sobre el flujo de energía en tu entorno.",
    contexto: "Consolida tus habilidades de investigación aplicando el método científico a problemas reales de tu comunidad.",
    temas: [
      {
        id: "tc2-1",
        titulo: "Proyecto de Investigación",
        icono: "📋",
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
        `
      },
      {
        id: "tc2-2",
        titulo: "Flujo de Energía en Ecosistemas",
        icono: "🌳",
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
        `
      },
      {
        id: "tc2-3",
        titulo: "Divulgación Científica",
        icono: "📢",
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
            <strong>Contexto:</strong> La Feria Mexicana de Ciencias e Ingenierías es una oportunidad para compartir tus proyectos [citation:38].
          </div>
        `
      }
    ]
  }
};