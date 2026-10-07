/* ==========================================================
   DATA - Ciencias Naturales (6 semestres × 7 temas)
========================================================== */

const CIENCIAS = {
  1: {
    titulo: "Invitación a la Ciencia",
    semestre: "Primer Semestre",
    clase: "s1",
    icono: "🔬",
    descripcion: "Naturaleza de la materia, método científico y medición.",
    contexto: "Aprende ciencia desde tu realidad: la milpa, el café, los ríos y las montañas de Chiapas.",
    temas: [
      {
        id: "t1-1",
        titulo: "¿Qué es la Ciencia?",
        icono: "🧠",
        contenido: `
          <p>La <strong>ciencia</strong> es el conjunto de conocimientos sistemáticos obtenidos mediante observación y experimentación.</p>
          <h4>Características</h4>
          <ul>
            <li><strong>Objetiva:</strong> se basa en hechos verificables.</li>
            <li><strong>Sistemática:</strong> sigue un método.</li>
            <li><strong>Falible:</strong> sus teorías se corrigen.</li>
            <li><strong>Comunicable:</strong> se difunde.</li>
          </ul>
          <h4>Ramas</h4>
          <ul>
            <li><strong>Formales:</strong> matemáticas, lógica</li>
            <li><strong>Naturales:</strong> química, física, biología</li>
            <li><strong>Sociales:</strong> historia, sociología</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto Chiapas:</strong> Los antiguos mayas observaron los ciclos de lluvia en la Selva Lacandona y desarrollaron calendarios precisos.
          </div>
        `
      },
      {
        id: "t1-2",
        titulo: "Método Científico",
        icono: "🧪",
        contenido: `
          <p>Procedimiento ordenado para investigar fenómenos naturales.</p>
          <h4>Pasos</h4>
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
            <strong>Ejemplo:</strong> ¿Por qué el café de Chiapas crece mejor en ciertas altitudes? Hipótesis → experimento → conclusión.
          </div>
        `
      },
      {
        id: "t1-3",
        titulo: "La Materia y sus Propiedades",
        icono: "🧱",
        contenido: `
          <p>La <strong>materia</strong> es todo lo que tiene masa y ocupa volumen.</p>
          <h4>Propiedades generales</h4>
          <ul><li>Masa</li><li>Volumen</li><li>Inercia</li><li>Impenetrabilidad</li></ul>
          <h4>Propiedades específicas</h4>
          <ul>
            <li><strong>Físicas:</strong> densidad, punto de fusión, color</li>
            <li><strong>Químicas:</strong> reactividad, combustibilidad</li>
          </ul>
          <div class="formula">d = m / V   (densidad = masa / volumen)</div>
        `
      },
      {
        id: "t1-4",
        titulo: "Estados de Agregación",
        icono: "💧",
        contenido: `
          <h4>Los 3 estados clásicos</h4>
          <ul>
            <li><strong>Sólido:</strong> forma y volumen definidos.</li>
            <li><strong>Líquido:</strong> volumen definido, forma variable.</li>
            <li><strong>Gaseoso:</strong> forma y volumen variables.</li>
          </ul>
          <h4>Cambios de estado</h4>
          <ul>
            <li>Fusión, evaporación, subliminación</li>
            <li>Solidificación, condensación, deposición</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto:</strong> Ciclo del agua en Chiapas: evaporación en la costa, condensación en montañas, precipitación en la selva.
          </div>
        `
      },
      {
        id: "t1-5",
        titulo: "Medición y Sistema Internacional",
        icono: "📏",
        contenido: `
          <h4>Magnitudes fundamentales (SI)</h4>
          <ul>
            <li>Longitud → metro (m)</li>
            <li>Masa → kilogramo (kg)</li>
            <li>Tiempo → segundo (s)</li>
            <li>Temperatura → kelvin (K)</li>
            <li>Cantidad de sustancia → mol</li>
            <li>Corriente → ampere (A)</li>
          </ul>
          <h4>Instrumentos</h4>
          <ul>
            <li>Balanza, probeta, termómetro, vernier</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto:</strong> Temperatura en Tuxtla (30°C) vs San Cristóbal (18°C).
          </div>
        `
      },
      {
        id: "t1-6",
        titulo: "Clasificación de la Materia",
        icono: "🧪",
        contenido: `
          <h4>Sustancias puras</h4>
          <ul>
            <li><strong>Elementos:</strong> Fe, O, H, C</li>
            <li><strong>Compuestos:</strong> H₂O, NaCl, CO₂</li>
          </ul>
          <h4>Mezclas</h4>
          <ul>
            <li><strong>Homogéneas:</strong> agua salada, café filtrado</li>
            <li><strong>Heterogéneas:</strong> granito, ensalada</li>
          </ul>
          <h4>Métodos de separación</h4>
          <ul><li>Filtración, destilación, decantación, tamizado</li></ul>
        `
      },
      {
        id: "t1-7",
        titulo: "Tabla Periódica Básica",
        icono: "📊",
        contenido: `
          <p>Organiza los <strong>118 elementos</strong> según número atómico.</p>
          <h4>Grupos importantes</h4>
          <ul>
            <li>Grupo 1: alcalinos (Li, Na, K)</li>
            <li>Grupo 2: alcalinotérreos (Mg, Ca)</li>
            <li>Grupo 17: halógenos (F, Cl, Br)</li>
            <li>Grupo 18: gases nobles (He, Ne, Ar)</li>
          </ul>
        `
      }
    ]
  },
  
  2: {
    titulo: "El Poder de la Energía",
    semestre: "Segundo Semestre",
    clase: "s2",
    icono: "⚡",
    descripcion: "Energía, sus formas, transformaciones y conservación.",
    contexto: "Chiapas es rico en energía: hidroeléctricas en el Grijalva, sol en la costa, biomasa en el campo.",
    temas: [
      {
        id: "t2-1",
        titulo: "¿Qué es la Energía?",
        icono: "🔋",
        contenido: `
          <p>La <strong>energía</strong> es la capacidad de realizar un trabajo o producir un cambio.</p>
          <h4>Características</h4>
          <ul>
            <li>Se transforma (no se crea ni destruye).</li>
            <li>Se transfiere entre cuerpos.</li>
            <li>Se mide en joules (J).</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto:</strong> La energía solar puede transformarse en eléctrica mediante paneles en comunidades rurales.
          </div>
        `
      },
      {
        id: "t2-2",
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
        id: "t2-3",
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
        id: "t2-4",
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
        id: "t2-5",
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
        id: "t2-6",
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
      },
      {
        id: "t2-7",
        titulo: "Energía en los Ecosistemas",
        icono: "🌳",
        contenido: `
          <p>La energía fluye por <strong>cadenas tróficas</strong>.</p>
          <h4>Niveles tróficos</h4>
          <ul>
            <li><strong>Productores:</strong> plantas (fotosíntesis)</li>
            <li><strong>Consumidores:</strong> herbívoros, carnívoros</li>
            <li><strong>Descomponedores:</strong> hongos, bacterias</li>
          </ul>
          <div class="ejemplo">
            Solo el ~10% de la energía pasa al siguiente nivel trófico.
          </div>
        `
      }
    ]
  },
  
  3: {
    titulo: "Nuestro Hogar. El Sistema Terrestre",
    semestre: "Tercer Semestre",
    clase: "s3",
    icono: "🌎",
    descripcion: "Geósfera, atmósfera, hidrósfera y biósfera.",
    contexto: "Chiapas es un laboratorio natural: selvas, montañas, ríos y biodiversidad única.",
    temas: [
      { id: "t3-1", titulo: "La Tierra como Sistema", icono: "🌍", contenido: `
        <p>La Tierra es un <strong>sistema</strong> con subsistemas que interactúan.</p>
        <h4>Subsistemas</h4>
        <ul>
          <li><strong>Geósfera:</strong> parte sólida</li>
          <li><strong>Atmósfera:</strong> gases</li>
          <li><strong>Hidrósfera:</strong> agua</li>
          <li><strong>Biósfera:</strong> seres vivos</li>
        </ul>
      `},
      { id: "t3-2", titulo: "Estructura Interna de la Tierra", icono: "🌋", contenido: `
        <h4>Capas</h4>
        <ol>
          <li><strong>Corteza:</strong> 5-70 km</li>
          <li><strong>Manto:</strong> hasta 2,900 km</li>
          <li><strong>Núcleo externo:</strong> líquido</li>
          <li><strong>Núcleo interno:</strong> sólido, ~5,500°C</li>
        </ol>
        <div class="ejemplo">
          <strong>Contexto:</strong> Chiapas está en zona sísmica activa (placas Norteamérica y Cocos).
        </div>
      `},
      { id: "t3-3", titulo: "Atmósfera y Clima", icono: "🌤️", contenido: `
        <h4>Capas</h4>
        <ul>
          <li>Troposfera (clima)</li>
          <li>Estratosfera (ozono)</li>
          <li>Mesosfera, Termosfera, Exosfera</li>
        </ul>
        <p>Gases: N₂ (78%), O₂ (21%), Ar, CO₂</p>
        <div class="ejemplo">
          <strong>Chiapas:</strong> climas cálidos húmedos, subhúmedos y templados húmedos.
        </div>
      `},
      { id: "t3-4", titulo: "Ciclos Biogeoquímicos", icono: "🔁", contenido: `
        <h4>Ciclo del agua</h4>
        <p>Evaporación → Condensación → Precipitación → Infiltración</p>
        <h4>Ciclo del carbono</h4>
        <p>Fotosíntesis ↔ Respiración ↔ Combustión</p>
        <h4>Ciclo del nitrógeno</h4>
        <p>Fijación → Nitrificación → Asimilación → Amonificación</p>
        <div class="ejemplo">
          <strong>Contexto:</strong> Cuenca del Grijalva clave en el ciclo del agua.
        </div>
      `},
      { id: "t3-5", titulo: "Geografía de Chiapas", icono: "🗺️", contenido: `
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
      `},
      { id: "t3-6", titulo: "Biodiversidad Chiapaneca", icono: "🦜", contenido: `
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
      `},
      { id: "t3-7", titulo: "Problemáticas Ambientales", icono: "⚠️", contenido: `
        <h4>Amenazas en Chiapas</h4>
        <ul>
          <li><strong>Deforestación:</strong> pérdida de selvas</li>
          <li><strong>Contaminación de ríos:</strong> desechos y agroquímicos</li>
          <li><strong>Cambio climático:</strong> alteración de lluvias</li>
          <li><strong>Especies invasoras</strong></li>
        </ul>
        <div class="ejemplo">
          La Selva Lacandona es uno de los pulmones más importantes de México.
        </div>
      `}
    ]
  },
  
  4: {
    titulo: "El Poder de la Química",
    semestre: "Cuarto Semestre",
    clase: "s4",
    icono: "⚗️",
    descripcion: "Átomos, tabla periódica, enlaces y reacciones.",
    contexto: "La química está en el café, en el suelo, en los medicamentos y en la vida diaria.",
    temas: [
      { id: "t4-1", titulo: "El Átomo y sus Partículas", icono: "⚛️", contenido: `
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
      `},
      { id: "t4-2", titulo: "Tabla Periódica", icono: "📊", contenido: `
        <p>118 elementos ordenados por número atómico.</p>
        <h4>Grupos importantes</h4>
        <ul>
          <li>1: alcalinos | 2: alcalinotérreos</li>
          <li>17: halógenos | 18: gases nobles</li>
        </ul>
      `},
      { id: "t4-3", titulo: "Enlaces Químicos", icono: "🔗", contenido: `
        <ul>
          <li><strong>Iónico:</strong> metal + no metal. NaCl</li>
          <li><strong>Covalente:</strong> no metal + no metal. H₂O</li>
          <li><strong>Metálico:</strong> metal + metal.</li>
        </ul>
        <div class="ejemplo">
          <strong>Regla del octeto:</strong> los átomos buscan 8 e⁻ en su última capa.
        </div>
      `},
      { id: "t4-4", titulo: "Reacciones Químicas", icono: "💥", contenido: `
        <h4>Tipos</h4>
        <ul>
          <li>Síntesis: A + B → AB</li>
          <li>Descomposición: AB → A + B</li>
          <li>Sustitución: AB + C → AC + B</li>
          <li>Doble sustitución: AB + CD → AD + CB</li>
        </ul>
        <div class="ejemplo">
          Ley de Lavoisier: masa reactivos = masa productos.
        </div>
      `},
      { id: "t4-5", titulo: "Modelos Atómicos", icono: "🔬", contenido: `
        <h4>Evolución</h4>
        <ul>
          <li>Dalton (1808): esfera sólida</li>
          <li>Thomson (1897): budín de pasas</li>
          <li>Rutherford (1911): núcleo</li>
          <li>Bohr (1913): órbitas cuantizadas</li>
          <li>Modelo actual: nube de probabilidad</li>
        </ul>
      `},
      { id: "t4-6", titulo: "Nomenclatura Química", icono: "📝", contenido: `
        <h4>Óxidos</h4>
        <p>Metal + O → Óxido básico. Ej: 2Ca + O₂ → 2CaO</p>
        <h4>Hidróxidos</h4>
        <p>Óxido + H₂O → Hidróxido. Ej: CaO + H₂O → Ca(OH)₂</p>
        <h4>Ácidos</h4>
        <p>No metal + O + H → Oxácido. Ej: S + O₂ + H₂O → H₂SO₄</p>
        <h4>Sales</h4>
        <p>Ácido + Hidróxido → Sal + Agua. Ej: HCl + NaOH → NaCl + H₂O</p>
      `},
      { id: "t4-7", titulo: "Estequiometría", icono: "⚖️", contenido: `
        <h4>Conceptos clave</h4>
        <ul>
          <li><strong>Mol:</strong> 6.022×10²³ partículas</li>
          <li><strong>Masa molar:</strong> masa de 1 mol</li>
        </ul>
        <div class="formula">n = m / M</div>
        <div class="ejemplo">
          <strong>Ejemplo:</strong> 36 g de agua (M = 18 g/mol) → n = 2 moles
        </div>
      `}
    ]
  },
  
  5: {
    titulo: "Del Átomo al Universo",
    semestre: "Quinto Semestre",
    clase: "s5",
    icono: "🌌",
    descripcion: "Física moderna, fuerza, energía y el universo.",
    contexto: "Desde las fuerzas que mueven el agua en las presas hasta la electricidad en tu comunidad.",
    temas: [
      { id: "t5-1", titulo: "Fuerza y Movimiento", icono: "🏃", contenido: `
        <h4>Leyes de Newton</h4>
        <ol>
          <li><strong>Inercia:</strong> reposo o MRU si F=0</li>
          <li><strong>Fuerza:</strong> F = m·a</li>
          <li><strong>Acción-Reacción</strong></li>
        </ol>
        <div class="ejemplo">
          F = 20 N sobre 5 kg → a = 4 m/s²
        </div>
      `},
      { id: "t5-2", titulo: "Cinemática", icono: "🚗", contenido: `
        <div class="formula">
MRU: v = d / t<br>
MRUA: v = v₀ + a·t<br>
d = v₀·t + ½·a·t²<br>
Caída libre: v = g·t (g = 9.8 m/s²)
        </div>
        <div class="ejemplo">
          Auto a 20 m/s durante 5 s → d = 100 m
        </div>
      `},
      { id: "t5-3", titulo: "Electricidad y Magnetismo", icono: "🧲", contenido: `
        <h4>Ley de Ohm</h4>
        <div class="formula">V = I · R</div>
        <h4>Ley de Coulomb</h4>
        <div class="formula">F = k · q₁·q₂ / r²</div>
        <h4>Potencia</h4>
        <div class="formula">P = V · I</div>
      `},
      { id: "t5-4", titulo: "Ondas y Sonido", icono: "🌊", contenido: `
        <div class="formula">v = λ · f</div>
        <h4>Tipos</h4>
        <ul>
          <li>Mecánicas: necesitan medio (sonido)</li>
          <li>Electromagnéticas: no necesitan medio (luz)</li>
        </ul>
      `},
      { id: "t5-5", titulo: "El Universo", icono: "🚀", contenido: `
        <h4>Teoría del Big Bang</h4>
        <p>Hace ~13,800 millones de años.</p>
        <h4>Cuerpos celestes</h4>
        <ul>
          <li>Estrellas, planetas, satélites</li>
          <li>Galaxias (Vía Láctea)</li>
          <li>Agujeros negros</li>
        </ul>
      `},
      { id: "t5-6", titulo: "Hidrostática", icono: "💧", contenido: `
        <div class="formula">
Pascal: P₁ = P₂ → F₁/A₁ = F₂/A₂<br>
Arquímedes: E = ρ · g · V<br>
Presión hidrostática: P = ρ · g · h
        </div>
        <div class="ejemplo">
          <strong>Contexto:</strong> Presas hidroeléctricas de Chiapas.
        </div>
      `},
      { id: "t5-7", titulo: "Energía y Trabajo", icono: "⚡", contenido: `
        <div class="formula">
Trabajo: W = F · d · cos(θ)<br>
Ec = ½ · m · v²<br>
Ep = m · g · h<br>
Ec₁ + Ep₁ = Ec₂ + Ep₂
        </div>
        <div class="ejemplo">
          Objeto 2 kg a 10 m → Ep = 196 J
        </div>
      `}
    ]
  },
  
  6: {
    titulo: "¿Qué es la Vida?",
    semestre: "Sexto Semestre",
    clase: "s6",
    icono: "🧬",
    descripcion: "Células, genética, evolución y biodiversidad.",
    contexto: "Chiapas es un tesoro biológico: selvas, especies únicas y diversidad cultural.",
    temas: [
      { id: "t6-1", titulo: "La Célula", icono: "🔵", contenido: `
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
      `},
      { id: "t6-2", titulo: "Genética y Herencia", icono: "🧬", contenido: `
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
      `},
      { id: "t6-3", titulo: "Evolución", icono: "🦕", contenido: `
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
      `},
      { id: "t6-4", titulo: "Biodiversidad", icono: "🌳", contenido: `
        <p>México es <strong>megadiverso</strong>: 5° lugar mundial.</p>
        <h4>Niveles</h4>
        <ul><li>Genética, de especies, de ecosistemas</li></ul>
        <h4>Amenazas</h4>
        <ul>
          <li>Deforestación, contaminación</li>
          <li>Cambio climático, especies invasoras</li>
        </ul>
      `},
      { id: "t6-5", titulo: "Ecosistemas de Chiapas", icono: "🌴", contenido: `
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
      `},
      { id: "t6-6", titulo: "Genética y Biotecnología", icono: "🔬", contenido: `
        <h4>Dogma central</h4>
        <p>ADN → ARN → Proteína</p>
        <h4>Aplicaciones</h4>
        <ul>
          <li>Biotecnología agrícola (maíz, café)</li>
          <li>Medicina (vacunas, insulina)</li>
          <li>Forense (huella genética)</li>
        </ul>
      `},
      { id: "t6-7", titulo: "Salud y Enfermedad", icono: "🏥", contenido: `
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
      `}
    ]
  }
};