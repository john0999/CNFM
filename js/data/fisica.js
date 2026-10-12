/* ==========================================================
   DATA - Física I, II y Temas Selectos (13 temas)
========================================================== */

const FISICA = {
  3: {
    titulo: "Física I",
    semestre: "Tercer Semestre",
    icono: "⚡",
    descripcion: "Mecánica: movimiento, fuerzas y energía.",
    contexto: "Desde la caída de agua en cascadas hasta el movimiento de vehículos en la carretera.",
    temas: [
      {
        id: "f1-1",
        titulo: "Medición y Magnitudes",
        icono: "📏",
        contenido: `
          <h4>Sistema Internacional (SI)</h4>
          <ul>
            <li>Longitud: metro (m)</li>
            <li>Masa: kilogramo (kg)</li>
            <li>Tiempo: segundo (s)</li>
          </ul>
          <h4>Notación científica</h4>
          <div class="formula">N × 10ⁿ (1 ≤ N < 10)</div>
          <h4>Vectores</h4>
          <div class="formula">
Vx = V·cos θ<br>
Vy = V·sen θ
          </div>
        `
      },
      {
        id: "f1-2",
        titulo: "Movimiento Rectilíneo",
        icono: "🏃",
        contenido: `
          <div class="formula">
MRU: v = d / t<br><br>
MRUA:<br>
v = v₀ + a·t<br>
d = v₀·t + ½·a·t²<br>
v² = v₀² + 2a·d<br><br>
Caída libre:<br>
v = g·t<br>
h = ½·g·t²<br>
g = 9.8 m/s²
          </div>
        `
      },
      {
        id: "f1-3",
        titulo: "Tiro Vertical y Parabólico",
        icono: "🎯",
        contenido: `
          <div class="formula">
Tiro vertical:<br>
h_max = v₀²/(2g)<br>
t_subida = v₀/g<br><br>
Tiro parabólico:<br>
x = v₀ₓ·t<br>
y = v₀ᵧ·t - ½·g·t²<br>
Alcance: R = v₀²·sen(2θ)/g
          </div>
        `
      },
      {
        id: "f1-4",
        titulo: "Movimiento Circular",
        icono: "🔄",
        contenido: `
          <div class="formula">
ω = θ/t (rad/s)<br>
v = ω·r<br>
a_c = v²/r<br>
F_c = m·v²/r<br><br>
T = 1/f<br>
ω = 2π/T
          </div>
        `
      },
      {
        id: "f1-5",
        titulo: "Leyes de Newton",
        icono: "⚖️",
        contenido: `
          <ol>
            <li><strong>Inercia:</strong> F_neta = 0 → reposo o MRU</li>
            <li><strong>Fuerza:</strong> F = m·a</li>
            <li><strong>Acción-Reacción:</strong> F₁₂ = -F₂₁</li>
          </ol>
          <h4>Fuerzas comunes</h4>
          <ul>
            <li>Peso: W = m·g</li>
            <li>Normal: N</li>
            <li>Fricción: f = μ·N</li>
            <li>Tensión: T</li>
          </ul>
        `
      },
      {
        id: "f1-6",
        titulo: "Trabajo y Energía",
        icono: "⚡",
        contenido: `
          <div class="formula">
Trabajo: W = F·d·cos θ (Joule)<br>
Potencia: P = W/t (Watt)<br>
Ec = ½·m·v²<br>
Ep = m·g·h<br><br>
Conservación: Ec₁ + Ep₁ = Ec₂ + Ep₂
          </div>
        `
      }
    ]
  },
  
  4: {
    titulo: "Física II",
    semestre: "Cuarto Semestre",
    icono: "🌡️",
    descripcion: "Fluidos, termodinámica, electricidad y magnetismo.",
    contexto: "Presas hidroeléctricas, calor en la región y electricidad en comunidades.",
    temas: [
      {
        id: "f2-1",
        titulo: "Hidráulica y Fluidos",
        icono: "💧",
        contenido: `
          <div class="formula">
Densidad: ρ = m/V<br>
Presión: P = F/A (Pascal)<br>
Presión hidrostática: P = ρ·g·h<br><br>
Pascal: F₁/A₁ = F₂/A₂<br>
Arquímedes: E = ρ·g·V<br><br>
Gasto: Q = A·v<br>
Torricelli: v = √(2gh)
          </div>
        `
      },
      {
        id: "f2-2",
        titulo: "Calor y Temperatura",
        icono: "🔥",
        contenido: `
          <div class="formula">
°F = (°C × 9/5) + 32<br>
K = °C + 273.15<br><br>
Dilatación lineal: ΔL = α·L₀·ΔT<br>
Calor: Q = m·c·ΔT
          </div>
          <h4>Transferencia</h4>
          <ul>
            <li>Conducción, convección, radiación</li>
          </ul>
        `
      },
      {
        id: "f2-3",
        titulo: "Electricidad",
        icono: "⚡",
        contenido: `
          <div class="formula">
Coulomb: F = k·q₁·q₂/r²<br>
Campo: E = F/q<br>
Potencial: V = k·q/r<br><br>
Corriente: I = q/t<br>
Ley de Ohm: V = I·R<br>
Potencia: P = V·I = I²R<br><br>
Serie: R_eq = R₁ + R₂<br>
Paralelo: 1/R_eq = 1/R₁ + 1/R₂
          </div>
        `
      },
      {
        id: "f2-4",
        titulo: "Magnetismo",
        icono: "🧲",
        contenido: `
          <div class="formula">
Fuerza magnética: F = q·v·B·sen θ
          </div>
          <h4>Leyes</h4>
          <ul>
            <li>Ley de Ampère</li>
            <li>Ley de Faraday (inducción)</li>
          </ul>
          <h4>Aplicaciones</h4>
          <ul>
            <li>Transformadores, motores, generadores</li>
          </ul>
        `
      },
      {
        id: "f2-5",
        titulo: "Ondas",
        icono: "🌊",
        contenido: `
          <div class="formula">v = λ·f</div>
          <h4>Tipos</h4>
          <ul>
            <li>Mecánicas (sonido)</li>
            <li>Electromagnéticas (luz)</li>
          </ul>
          <h4>Fenómenos</h4>
          <ul>
            <li>Reflexión, refracción</li>
            <li>Difracción, interferencia</li>
          </ul>
        `
      }
    ]
  },
  
  5: {
    titulo: "Temas Selectos de Física",
    semestre: "Quinto Semestre",
    icono: "🔬",
    descripcion: "Física moderna, cuántica y relatividad.",
    contexto: "Los descubrimientos del siglo XX que cambiaron nuestra visión del universo.",
    temas: [
      {
        id: "fs-1",
        titulo: "Física Moderna",
        icono: "🔬",
        contenido: `
          <h4>Mecánica cuántica</h4>
          <ul>
            <li>Dualidad onda-partícula</li>
            <li>Principio de incertidumbre (Heisenberg)</li>
            <li>Cuantización de la energía</li>
          </ul>
          <h4>Relatividad</h4>
          <ul>
            <li>Relatividad especial (Einstein)</li>
            <li>E = mc²</li>
            <li>Dilatación del tiempo</li>
          </ul>
        `
      },
      {
        id: "fs-2",
        titulo: "Física Nuclear",
        icono: "☢️",
        contenido: `
          <h4>Estructura nuclear</h4>
          <p>Protones + neutrones. Isótopos: mismo Z, diferente A.</p>
          <h4>Radiactividad</h4>
          <ul>
            <li>Alfa (α): núcleos de He</li>
            <li>Beta (β): electrones</li>
            <li>Gamma (γ): radiación EM</li>
          </ul>
          <h4>Reacciones nucleares</h4>
          <ul>
            <li><strong>Fisión:</strong> división del núcleo</li>
            <li><strong>Fusión:</strong> unión (Sol)</li>
          </ul>
        `
      }
    ]
  }
};