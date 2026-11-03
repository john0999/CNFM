/* ==========================================================
   DATA - Matemáticas · Material de estudio ampliado
   Complementa los temas originales de MATEMATICAS (pm*)
   sin modificarlos: se muestra en "Estudia más" bajo cada tema.
========================================================== */

// Diagrama con pie de figura
const mateDiagrama = (imagen, alt, pie) => `
  <figure class="diagrama-quimica">
    <img src="images/matematicas/${imagen}.svg" alt="${alt}" loading="lazy">
    <figcaption>${pie}</figcaption>
  </figure>`;

// Ejercicio con la respuesta oculta
const mateEjercicio = (pregunta, respuesta) => `
  <details class="ejercicio-estudio">
    <summary>${pregunta}</summary>
    <div>${respuesta}</div>
  </details>`;

// Enlace a un simulador de views/matematicas
const mateSimulador = (archivo, nombre, descripcion) => `
  <a class="enlace-simulador" href="views/matematicas/${archivo}.html" target="_blank" rel="noopener">
    <span>🧪</span>
    <span><strong>Simulador: ${nombre}</strong><br><small>${descripcion}</small></span>
  </a>`;

const MATEMATICAS_ESTUDIO = {

  // ===================== PENSAMIENTO MATEMÁTICO I =====================
  "pm1-1": `
    ${mateDiagrama('conjuntos-numericos', 'Conjuntos numéricos anidados', 'Cada conjunto contiene al anterior: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Los irracionales también son reales, pero no son racionales.')}

    <h4>¿Por qué se necesitó cada conjunto?</h4>
    <table class="tabla-estudio">
      <tr><th>Conjunto</th><th>Resuelve el problema de…</th><th>Ejemplo en Chiapas</th></tr>
      <tr><td>Naturales</td><td>contar</td><td>12 costales de café</td></tr>
      <tr><td>Enteros</td><td>restar más de lo que hay, temperaturas bajo cero</td><td>En una helada de los Altos el termómetro marca −2 °C</td></tr>
      <tr><td>Racionales</td><td>repartir en partes iguales</td><td>½ kg de queso de Ocosingo</td></tr>
      <tr><td>Irracionales</td><td>medidas que no son fracción exacta</td><td>La diagonal de una cuerda cuadrada de 20 m mide 20√2 ≈ 28.28 m</td></tr>
    </table>

    <h4>De decimal periódico a fracción</h4>
    <div class="formula">
x = 0.333… → 10x = 3.333… → 10x − x = 3 → x = 3/9 = 1/3<br>
x = 0.272727… → 100x − x = 27 → x = 27/99 = 3/11
    </div>
    <p>Todo decimal exacto o periódico es racional. Si el decimal es infinito y <strong>no</strong> se repite (π = 3.14159265…), es irracional.</p>

    <h4>Propiedades con números</h4>
    <table class="tabla-estudio">
      <tr><th>Propiedad</th><th>Ejemplo</th></tr>
      <tr><td>Cerradura</td><td>La suma de dos enteros es entero: −4 + 9 = 5</td></tr>
      <tr><td>Conmutativa</td><td>3 × 8 = 8 × 3</td></tr>
      <tr><td>Asociativa</td><td>(2 + 5) + 4 = 2 + (5 + 4)</td></tr>
      <tr><td>Distributiva</td><td>6 × 23 = 6 × 20 + 6 × 3 = 138 (sirve para el cálculo mental)</td></tr>
      <tr><td>Inverso multiplicativo</td><td>4 × ¼ = 1</td></tr>
    </table>

    <h4>Practica</h4>
    ${mateEjercicio('¿Es −7 un número natural? ¿Entero? ¿Racional? ¿Real?', 'No es natural; sí es entero, racional (−7/1) y real.')}
    ${mateEjercicio('Convierte 0.454545… a fracción.', '100x − x = 45 → 99x = 45 → x = 45/99 = 5/11.')}
    ${mateEjercicio('Calcula mentalmente 7 × 98 usando la propiedad distributiva.', '7 × (100 − 2) = 700 − 14 = 686.')}
    ${mateSimulador('RectaNumerica', 'Recta numérica: distancia', 'Ubica enteros en la recta y razona la resta como distancia dirigida.')}
  `,

  "pm1-2": `
    <h4>Signos de agrupación: de adentro hacia afuera</h4>
    <div class="formula">
2{3 + [4 − (5 − 2)²]}<br>
= 2{3 + [4 − 3²]} &nbsp;&nbsp;(paréntesis)<br>
= 2{3 + [4 − 9]} &nbsp;&nbsp;(potencia)<br>
= 2{3 + (−5)} &nbsp;&nbsp;(corchetes)<br>
= 2(−2) = −4 &nbsp;&nbsp;(llaves y multiplicación)
    </div>
    <p>Se resuelven primero los paréntesis ( ), luego los corchetes [ ] y al final las llaves { }. Un punto (·) también indica multiplicación: 3 · 4 = 12.</p>

    <h4>Restar es sumar el opuesto</h4>
    <div class="formula">
5 − (−3) = 5 + 3 = 8<br>
−4 − 6 = −4 + (−6) = −10<br>
−8 − (−8) = −8 + 8 = 0
    </div>

    <h4>Multiplicaciones y divisiones: de izquierda a derecha</h4>
    <div class="formula">24 ÷ 4 × 2 = 6 × 2 = 12 &nbsp;&nbsp;(no 24 ÷ 8 = 3)</div>

    <h4>✍️ Ejemplo práctico: la cuenta de la tienda</h4>
    <div class="ejemplo">
      Compras 3 refrescos de $18, 2 kg de tortillas a $24 el kilo y pagas con un billete de $200. ¿Cuánto te regresan?<br>
      200 − (3 × 18 + 2 × 24) = 200 − (54 + 48) = 200 − 102 = <strong>$98</strong>.
    </div>

    <h4>Practica</h4>
    ${mateEjercicio('Resuelve: 18 − 3 × (4 − 6)²', '(4 − 6)² = (−2)² = 4; 3 × 4 = 12; 18 − 12 = 6.')}
    ${mateEjercicio('Resuelve: [12 ÷ (−3) + 7] × 2 − √25', '12 ÷ (−3) = −4; −4 + 7 = 3; 3 × 2 = 6; 6 − 5 = 1.')}
    ${mateEjercicio('Resuelve: −10 − (−4) + 3²', '−10 + 4 + 9 = 3.')}
    ${mateSimulador('RectaNumericaOperaciones', 'Recta numérica: operaciones', 'Comprueba por qué restar un negativo equivale a sumar.')}
    ${mateSimulador('aritmetica', 'Aritmética', 'Practica sumas, restas, multiplicaciones y divisiones con enteros y fracciones.')}
  `,

  "pm1-3": `
    <h4>Regla de tres</h4>
    <table class="tabla-estudio">
      <tr><th>Directa (más → más)</th><th>Inversa (más → menos)</th></tr>
      <tr><td>4 kg de frijol cuestan $120. ¿Cuánto cuestan 7 kg?<br>x = 7 × 120 / 4 = <strong>$210</strong></td><td>5 cortadores levantan la cosecha de café en 12 días. ¿Cuánto tardan 6?<br>x = 5 × 12 / 6 = <strong>10 días</strong></td></tr>
    </table>

    <h4>Aumentos y descuentos porcentuales</h4>
    <div class="formula">
Aumento de r %: nuevo = original × (1 + r/100)<br>
Descuento de r %: nuevo = original × (1 − r/100)<br>
Porcentaje de cambio = (nuevo − original) / original × 100
    </div>
    <div class="ejemplo">
      Una cooperativa vendía el kilo de café pergamino a $80 y ahora lo vende a $92. El aumento fue (92 − 80)/80 × 100 = <strong>15 %</strong>.
    </div>
    <div class="alerta nota-estudio">
      <strong>⚠️ Error común:</strong> subir 10 % y luego bajar 10 % <strong>no</strong> te regresa al precio original. $100 → $110 → $99.
    </div>

    <h4>Practica</h4>
    ${mateEjercicio('En un grupo de 45 alumnos, 18 son hombres. ¿Qué porcentaje son mujeres?', '27/45 = 0.6 → 60 %.')}
    ${mateEjercicio('Si 3 bombas llenan un tanque en 8 horas, ¿cuánto tardan 4 bombas?', 'Proporción inversa: 3 × 8 / 4 = 6 horas.')}
    ${mateEjercicio('Una bicicleta de $2 500 sube 8 %. ¿Cuál es el nuevo precio?', '2 500 × 1.08 = $2 700.')}
  `,

  "pm1-4": `
    <h4>Sucesiones geométricas</h4>
    <div class="formula">
aₙ = a₁ · rⁿ⁻¹ &nbsp;&nbsp; (r = razón: cada término se multiplica por r)<br>
3, 6, 12, 24, … → a₁ = 3, r = 2 → a₈ = 3 · 2⁷ = 384
    </div>

    <h4>Suma de una sucesión aritmética</h4>
    <div class="formula">Sₙ = n(a₁ + aₙ) / 2</div>
    <p>Cuentan que de niño Carl F. Gauss sumó 1 + 2 + … + 100 en segundos: emparejó 1 + 100, 2 + 99, 3 + 98… Son 50 parejas de 101: <strong>5 050</strong>.</p>

    <h4>✍️ Ejemplo práctico: plan de ahorro</h4>
    <div class="ejemplo">
      Ahorras $20 la primera semana y cada semana $10 más que la anterior: 20, 30, 40, …<br>
      Semana 20: a₂₀ = 20 + 19(10) = $210<br>
      Total en 20 semanas: S₂₀ = 20(20 + 210)/2 = <strong>$2 300</strong>
    </div>

    <h4>La sucesión de Fibonacci en la naturaleza</h4>
    <p>1, 1, 2, 3, 5, 8, 13, 21… (cada término es la suma de los dos anteriores). Las espirales de un girasol, de una piña de pino o de una piña tropical suelen ser números de esta sucesión.</p>

    <h4>Practica</h4>
    ${mateEjercicio('Encuentra el término 15 de 7, 11, 15, 19, …', 'd = 4: a₁₅ = 7 + 14(4) = 63.')}
    ${mateEjercicio('¿Cuál es el siguiente término de 2, 6, 18, 54, …?', 'Es geométrica con r = 3: 54 × 3 = 162.')}
    ${mateEjercicio('Suma los números del 1 al 50.', 'S = 50(1 + 50)/2 = 1 275.')}
  `,

  "pm1-5": `
    <h4>✍️ Ejemplo completo: la cosecha de café</h4>
    <p>Kilos de café cereza cosechados en un día por 9 familias de una comunidad de la Sierra Madre:</p>
    <div class="formula">120, 95, 110, 95, 130, 100, 95, 140, 105</div>
    <table class="tabla-estudio">
      <tr><th>Medida</th><th>Procedimiento</th><th>Resultado</th></tr>
      <tr><td>Media</td><td>suma (990) ÷ 9</td><td>110 kg</td></tr>
      <tr><td>Mediana</td><td>ordenar: 95, 95, 95, 100, <strong>105</strong>, 110, 120, 130, 140</td><td>105 kg</td></tr>
      <tr><td>Moda</td><td>el que más se repite</td><td>95 kg</td></tr>
      <tr><td>Rango</td><td>140 − 95</td><td>45 kg</td></tr>
    </table>
    <p>Si el número de datos es par, la mediana es el promedio de los dos centrales.</p>

    <h4>Tabla de frecuencias</h4>
    <table class="tabla-estudio">
      <tr><th>Hermanos</th><th>fᵢ</th><th>Fᵢ (acumulada)</th><th>fᵢ / n</th></tr>
      <tr><td>0</td><td>3</td><td>3</td><td>0.15</td></tr>
      <tr><td>1</td><td>7</td><td>10</td><td>0.35</td></tr>
      <tr><td>2</td><td>6</td><td>16</td><td>0.30</td></tr>
      <tr><td>3 o más</td><td>4</td><td>20</td><td>0.20</td></tr>
    </table>
    <p>La suma de las frecuencias relativas siempre es 1 (100 %). Profundizarás en estos temas en Pensamiento Matemático VI.</p>

    <h4>Practica</h4>
    ${mateEjercicio('Calcula media, mediana y moda de: 7, 9, 6, 9, 8, 10.', 'Media = 49/6 ≈ 8.17. Ordenados: 6, 7, 8, 9, 9, 10 → mediana = (8 + 9)/2 = 8.5. Moda = 9.')}
  `,

  // ===================== PENSAMIENTO MATEMÁTICO II =====================
  "pm2-1": `
    <h4>Vocabulario de las operaciones</h4>
    <table class="tabla-estudio">
      <tr><th>Palabra</th><th>Significa</th><th>En álgebra</th></tr>
      <tr><td>Suma</td><td>resultado de sumar</td><td>a + b</td></tr>
      <tr><td>Diferencia</td><td>resultado de restar</td><td>a − b</td></tr>
      <tr><td>Producto</td><td>resultado de multiplicar</td><td>ab</td></tr>
      <tr><td>Cociente</td><td>resultado de dividir</td><td>a/b</td></tr>
      <tr><td>Razón</td><td>comparación por cociente</td><td>a : b</td></tr>
      <tr><td>Residuo</td><td>lo que sobra en una división entera</td><td>17 = 5 × 3 + <strong>2</strong></td></tr>
    </table>

    <h4>Más traducciones</h4>
    <table class="tabla-estudio">
      <tr><th>Lenguaje común</th><th>Lenguaje algebraico</th></tr>
      <tr><td>El triple de un número disminuido en 4</td><td>3x − 4</td></tr>
      <tr><td>El triple de: un número disminuido en 4</td><td>3(x − 4)</td></tr>
      <tr><td>La suma de dos números consecutivos</td><td>x + (x + 1)</td></tr>
      <tr><td>Un número par</td><td>2n</td></tr>
      <tr><td>El cuadrado de la suma de dos números</td><td>(a + b)²</td></tr>
      <tr><td>La suma de los cuadrados de dos números</td><td>a² + b²</td></tr>
    </table>
    <p>Fíjate en la diferencia entre las dos primeras filas: la coma o el orden de las palabras cambian la expresión.</p>

    <h4>Practica</h4>
    ${mateEjercicio('Traduce: «La mitad de un número más 7 es igual a 15».', 'x/2 + 7 = 15.')}
    ${mateEjercicio('Traduce: «El precio de 3 cuadernos y 2 lápices».', '3c + 2l, donde c es el precio de un cuaderno y l el de un lápiz.')}
  `,

  "pm2-2": `
    <h4>Clasificación por número de términos</h4>
    <table class="tabla-estudio">
      <tr><th>Nombre</th><th>Términos</th><th>Ejemplo</th></tr>
      <tr><td>Monomio</td><td>1</td><td>−5x²y</td></tr>
      <tr><td>Binomio</td><td>2</td><td>3a + 7</td></tr>
      <tr><td>Trinomio</td><td>3</td><td>x² − 4x + 4</td></tr>
      <tr><td>Polinomio</td><td>4 o más</td><td>2x³ − x² + 5x − 1</td></tr>
    </table>

    <h4>Grado</h4>
    <ul>
      <li>De un monomio: suma de los exponentes de sus letras. 4x³y² es de grado 5.</li>
      <li>De un polinomio: el mayor grado de sus términos. 2x³ − x² + 5 es de grado 3.</li>
    </ul>

    <h4>Valor numérico</h4>
    <div class="formula">Si x = 2 y y = −1: &nbsp; 3x² − 2xy + y = 3(4) − 2(2)(−1) + (−1) = 12 + 4 − 1 = 15</div>

    <h4>✍️ Ejemplo práctico</h4>
    <div class="ejemplo">
      Un vendedor de elotes en el parque gana $15 por elote y $20 por esquite, y paga $150 de permiso al día: <strong>G = 15e + 20s − 150</strong>. Si vende 30 elotes y 12 esquites: 450 + 240 − 150 = <strong>$540</strong>.
    </div>

    <h4>Practica</h4>
    ${mateEjercicio('Reduce: 4x² − 3x + 2x² + 7x − 5', '6x² + 4x − 5 (trinomio de grado 2).')}
    ${mateEjercicio('¿Cuál es el grado de −2a²b³c?', '2 + 3 + 1 = 6.')}
  `,

  "pm2-3": `
    <h4>Multiplicar polinomios: cada término por cada término</h4>
    <div class="formula">
(2x + 3)(x − 4) = 2x² − 8x + 3x − 12 = 2x² − 5x − 12<br>
(x + 2)(x² − x + 1) = x³ − x² + x + 2x² − 2x + 2 = x³ + x² − x + 2
    </div>

    <h4>Productos notables (hay que reconocerlos de memoria)</h4>
    <table class="tabla-estudio">
      <tr><th>Nombre</th><th>Regla</th><th>Ejemplo</th></tr>
      <tr><td>Binomio al cuadrado</td><td>(a + b)² = a² + 2ab + b²</td><td>(x + 5)² = x² + 10x + 25</td></tr>
      <tr><td>Binomios conjugados</td><td>(a + b)(a − b) = a² − b²</td><td>(x + 3)(x − 3) = x² − 9</td></tr>
      <tr><td>Término común</td><td>(x + a)(x + b) = x² + (a + b)x + ab</td><td>(x + 2)(x + 5) = x² + 7x + 10</td></tr>
      <tr><td>Binomio al cubo</td><td>(a + b)³ = a³ + 3a²b + 3ab² + b³</td><td>(x + 1)³ = x³ + 3x² + 3x + 1</td></tr>
    </table>

    <h4>Dividir un polinomio entre un monomio</h4>
    <div class="formula">(12x³ − 8x² + 4x) ÷ 4x = 3x² − 2x + 1</div>

    <h4>Practica</h4>
    ${mateEjercicio('Desarrolla (3x − 2)²', '9x² − 12x + 4.')}
    ${mateEjercicio('Multiplica (x − 7)(x + 7)', 'x² − 49 (binomios conjugados).')}
    ${mateEjercicio('Calcula mentalmente 21 × 19 con binomios conjugados.', '(20 + 1)(20 − 1) = 400 − 1 = 399.')}
    ${mateSimulador('modeloalgebra', 'Modelo de áreas: álgebra', 'Multiplica monomios y binomios como el área de un rectángulo.')}
    ${mateSimulador('modelodeareas', 'Modelo de áreas: decimales', 'La misma idea del área aplicada a números decimales.')}
  `,

  "pm2-4": `
    <h4>Ecuaciones con fracciones</h4>
    <div class="formula">
x/3 + x/4 = 14 &nbsp;&nbsp;→ multiplica todo por 12 (mcm)<br>
4x + 3x = 168 → 7x = 168 → x = 24
    </div>

    <h4>Ecuaciones con paréntesis</h4>
    <div class="formula">
5(x − 2) − 3(x + 1) = 7<br>
5x − 10 − 3x − 3 = 7 → 2x − 13 = 7 → 2x = 20 → x = 10
    </div>

    <h4>✍️ Ejemplo práctico en Chiapas</h4>
    <div class="ejemplo">
      Para la fiesta del pueblo se rentan sillas. La empresa A cobra $300 de flete más $5 por silla; la empresa B cobra $8 por silla sin flete. ¿Con cuántas sillas cuestan lo mismo?<br>
      300 + 5x = 8x → 300 = 3x → <strong>x = 100 sillas</strong>. Con más de 100 sillas conviene la empresa A.
    </div>

    <h4>Practica</h4>
    ${mateEjercicio('Resuelve 7x − 5 = 3x + 11', '4x = 16 → x = 4.')}
    ${mateEjercicio('Resuelve (x + 2)/5 = 3', 'x + 2 = 15 → x = 13.')}
    ${mateEjercicio('El perímetro de un triángulo isósceles es 40 cm y la base mide 10 cm. ¿Cuánto mide cada lado igual?', '2x + 10 = 40 → x = 15 cm.')}
  `,

  "pm2-5": `
    ${mateDiagrama('sistema-ecuaciones', 'Dos rectas que se cortan', 'La solución de un sistema es el punto donde se cruzan sus rectas.')}

    <h4>✍️ Ejemplo resuelto por eliminación</h4>
    <div class="ejemplo">
      En la taquilla del Zoológico Miguel Álvarez del Toro (ZooMAT) entraron 250 personas, entre niños y adultos. Si cada niño pagó $20, cada adulto $40 y se juntaron $7 400, ¿cuántos niños y cuántos adultos entraron? (Precios de ejemplo.)<br>
      n + a = 250 &nbsp;&nbsp; 20n + 40a = 7 400<br>
      Multiplica la primera por −20: −20n − 20a = −5 000<br>
      Suma: 20a = 2 400 → <strong>a = 120 adultos</strong> y <strong>n = 130 niños</strong>.
    </div>
    <p>En Pensamiento Matemático III estudiarás los cinco métodos con detalle, incluidos los determinantes.</p>

    <h4>Practica</h4>
    ${mateEjercicio('Resuelve por sustitución: y = 2x, x + y = 12', 'x + 2x = 12 → x = 4, y = 8.')}
    ${mateEjercicio('Resuelve: 3x + 2y = 16, x − 2y = 0', 'Sumando: 4x = 16 → x = 4; 4 − 2y = 0 → y = 2.')}
  `,

  // ===================== PENSAMIENTO MATEMÁTICO III =====================
  "pm3-1": `
    <h4>Método de completar el cuadrado</h4>
    <div class="formula">
x² + 6x − 7 = 0<br>
x² + 6x = 7<br>
x² + 6x + 9 = 7 + 9 &nbsp;&nbsp;(sumo (6/2)² = 9 en ambos lados)<br>
(x + 3)² = 16 → x + 3 = ±4 → x = 1 o x = −7
    </div>

    <h4>Fórmula general (fórmula de Bhaskara)</h4>
    <p>Lleva el nombre del matemático indio Bhaskara II (siglo XII), aunque se usaba desde antes.</p>
    <div class="formula">
2x² − 3x − 2 = 0 → a = 2, b = −3, c = −2<br>
Δ = (−3)² − 4(2)(−2) = 9 + 16 = 25<br>
x = [3 ± 5] / 4 → x₁ = 2, x₂ = −½
    </div>

    <h4>El discriminante te dice cuántas soluciones hay</h4>
    <table class="tabla-estudio">
      <tr><th>Δ = b² − 4ac</th><th>Soluciones reales</th><th>La parábola…</th></tr>
      <tr><td>Δ > 0</td><td>dos distintas</td><td>corta el eje X en dos puntos</td></tr>
      <tr><td>Δ = 0</td><td>una (doble)</td><td>toca el eje X en su vértice</td></tr>
      <tr><td>Δ &lt; 0</td><td>ninguna</td><td>no toca el eje X</td></tr>
    </table>

    <h4>✍️ Ejemplo práctico</h4>
    <div class="ejemplo">
      Un terreno rectangular mide 3 m más de largo que de ancho y su área es 108 m². x(x + 3) = 108 → x² + 3x − 108 = 0 → (x + 12)(x − 9) = 0 → <strong>x = 9 m</strong> (la solución negativa no tiene sentido). El terreno mide 9 m × 12 m.
    </div>

    <h4>Practica</h4>
    ${mateEjercicio('Resuelve por factorización: x² − 5x + 6 = 0', '(x − 2)(x − 3) = 0 → x = 2 o x = 3.')}
    ${mateEjercicio('¿Cuántas soluciones reales tiene x² + 2x + 5 = 0?', 'Δ = 4 − 20 = −16 &lt; 0: ninguna solución real.')}
  `,

  "pm3-2": `
    <h4>Análisis completo de f(x) = x² − 4x + 3</h4>
    <table class="tabla-estudio">
      <tr><th>Elemento</th><th>Cálculo</th><th>Resultado</th></tr>
      <tr><td>Concavidad</td><td>a = 1 > 0</td><td>abre hacia arriba</td></tr>
      <tr><td>Vértice</td><td>x = −b/2a = 4/2 = 2; f(2) = 4 − 8 + 3</td><td>(2, −1), es un mínimo</td></tr>
      <tr><td>Eje de simetría</td><td>x = 2</td><td>recta vertical</td></tr>
      <tr><td>Raíces</td><td>(x − 1)(x − 3) = 0</td><td>x = 1 y x = 3</td></tr>
      <tr><td>Corte con el eje Y</td><td>f(0) = c</td><td>(0, 3)</td></tr>
    </table>

    <h4>✍️ Optimización: el corral más grande</h4>
    <div class="ejemplo">
      Con 40 m de malla quieres cercar un corral rectangular para gallinas. Si el ancho es x, el largo es 20 − x:<br>
      A(x) = x(20 − x) = −x² + 20x<br>
      Vértice: x = −20/(2·(−1)) = 10 → A(10) = <strong>100 m²</strong>.<br>
      El corral de mayor área es un cuadrado de 10 m × 10 m.
    </div>

    <h4>Practica</h4>
    ${mateEjercicio('Encuentra el vértice de f(x) = −2x² + 8x − 1', 'x = −8/(−4) = 2; f(2) = −8 + 16 − 1 = 7. Vértice (2, 7), es un máximo.')}
    ${mateSimulador('graficandocuadraticas', 'Graficando cuadráticas', 'Mueve a, b y c y observa cómo cambian el vértice, las raíces y la abertura.')}
  `,

  "pm3-3": `
    ${mateDiagrama('pitagoras', 'Teorema de Pitágoras con el triángulo 3-4-5', 'El área del cuadrado de la hipotenusa es igual a la suma de las áreas de los cuadrados de los catetos.')}

    <h4>Ternas pitagóricas</h4>
    <p>Son tres enteros que cumplen a² + b² = c²: (3, 4, 5), (5, 12, 13), (8, 15, 17), (7, 24, 25)… y sus múltiplos, como (6, 8, 10).</p>

    <h4>✍️ Ejemplos prácticos</h4>
    <div class="ejemplo">
      <strong>La escalera:</strong> una escalera de 5 m se apoya en una pared con su base a 1.4 m de la pared. ¿A qué altura llega? h = √(25 − 1.96) = √23.04 = <strong>4.8 m</strong>.<br><br>
      <strong>¿Está a escuadra?</strong> Un albañil mide 60 cm y 80 cm sobre dos paredes desde la esquina. Si la diagonal mide 1 m, la esquina es recta (60-80-100 es múltiplo de 3-4-5).
    </div>

    <h4>Rectas y puntos notables del triángulo</h4>
    <table class="tabla-estudio">
      <tr><th>Rectas</th><th>Se cortan en el…</th></tr>
      <tr><td>Medianas (vértice al punto medio del lado opuesto)</td><td>baricentro (centro de gravedad)</td></tr>
      <tr><td>Alturas</td><td>ortocentro</td></tr>
      <tr><td>Mediatrices</td><td>circuncentro</td></tr>
      <tr><td>Bisectrices</td><td>incentro</td></tr>
    </table>

    <h4>Practica</h4>
    ${mateEjercicio('Los catetos de un triángulo rectángulo miden 9 cm y 12 cm. ¿Cuánto mide la hipotenusa?', 'c = √(81 + 144) = √225 = 15 cm.')}
    ${mateEjercicio('¿Un triángulo de lados 6, 7 y 9 es rectángulo?', '6² + 7² = 85 y 9² = 81. Como no son iguales, no es rectángulo.')}
  `,

  "pm3-4": `
    <h4>Más fórmulas</h4>
    <table class="tabla-estudio">
      <tr><th>Figura</th><th>Perímetro</th><th>Área</th></tr>
      <tr><td>Cuadrado de lado l</td><td>4l</td><td>l²</td></tr>
      <tr><td>Rombo</td><td>4l</td><td>(D × d)/2</td></tr>
      <tr><td>Trapecio</td><td>suma de lados</td><td>(B + b) × h / 2</td></tr>
      <tr><td>Círculo</td><td>2πr</td><td>πr²</td></tr>
    </table>
    <table class="tabla-estudio">
      <tr><th>Cuerpo</th><th>Volumen</th></tr>
      <tr><td>Pirámide</td><td>(A<sub>base</sub> × h) / 3</td></tr>
      <tr><td>Cono</td><td>(πr² × h) / 3</td></tr>
    </table>
    <p>Recuerda las equivalencias: 1 m³ = 1 000 L y 1 L = 1 000 cm³.</p>

    <h4>✍️ Ejemplos prácticos</h4>
    <div class="ejemplo">
      <strong>El tinaco:</strong> un tinaco cilíndrico mide 1.1 m de diámetro y 1.2 m de altura. V = π(0.55)²(1.2) ≈ 1.14 m³ ≈ <strong>1 140 litros</strong>.<br><br>
      <strong>Pintar el salón:</strong> un salón mide 8 m × 6 m y 3 m de altura. Las cuatro paredes suman 2(8 × 3) + 2(6 × 3) = 84 m². Si quitas 10 m² de puertas y ventanas y un litro de pintura cubre 10 m², necesitas unos <strong>7.4 litros</strong> por mano.
    </div>

    <h4>Practica</h4>
    ${mateEjercicio('¿Cuántos litros caben en una cisterna de 2 m × 1.5 m × 1.2 m?', '2 × 1.5 × 1.2 = 3.6 m³ = 3 600 L.')}
    ${mateEjercicio('Un comal mide 40 cm de diámetro. ¿Cuál es su área?', 'A = π(20)² ≈ 1 257 cm².')}
  `,

  // ===================== PENSAMIENTO MATEMÁTICO IV =====================
  "pm4-1": `
    ${mateDiagrama('triangulo-trig', 'Triángulo rectángulo con sus catetos e hipotenusa', 'Los catetos se nombran según el ángulo que observas: el opuesto está enfrente y el adyacente lo toca.')}

    <h4>Ángulos notables</h4>
    <table class="tabla-estudio">
      <tr><th>Ángulo</th><th>sen</th><th>cos</th><th>tan</th></tr>
      <tr><td>30°</td><td>1/2</td><td>√3/2 ≈ 0.866</td><td>√3/3 ≈ 0.577</td></tr>
      <tr><td>45°</td><td>√2/2 ≈ 0.707</td><td>√2/2 ≈ 0.707</td><td>1</td></tr>
      <tr><td>60°</td><td>√3/2 ≈ 0.866</td><td>1/2</td><td>√3 ≈ 1.732</td></tr>
    </table>

    <h4>✍️ Ejemplo práctico: la altura de un árbol</h4>
    <div class="ejemplo">
      Te paras a 50 m de la base de un árbol y con un clinómetro mides un ángulo de elevación de 35° hasta la punta:<br>
      tan 35° = h / 50 → h = 50 × 0.700 = <strong>35 m</strong> (más la altura de tus ojos, unos 1.5 m).
    </div>

    <h4>🛠️ Construye un clinómetro</h4>
    <p>Pega un popote en el borde recto de un transportador, cuelga un hilo con una piedrita desde el centro y mira la punta de un árbol o del asta bandera por el popote. El ángulo que marca el hilo te da (90° − ángulo de elevación).</p>

    <h4>Identidades trigonométricas</h4>
    <div class="formula">
sen²θ + cos²θ = 1 &nbsp;&nbsp; tan θ = sen θ / cos θ<br>
1 + tan²θ = sec²θ &nbsp;&nbsp; 1 + cot²θ = csc²θ
    </div>
    ${mateEjercicio('Si sen θ = 3/5 y θ es agudo, ¿cuánto vale cos θ?', 'cos²θ = 1 − 9/25 = 16/25 → cos θ = 4/5.')}
    ${mateEjercicio('Una rampa sube 1 m en 12 m de recorrido horizontal. ¿Qué ángulo forma?', 'tan θ = 1/12 ≈ 0.083 → θ ≈ 4.8°.')}
  `,

  "pm4-2": `
    <h4>¿Cuándo uso cada ley?</h4>
    <table class="tabla-estudio">
      <tr><th>Datos que conoces</th><th>Ley</th></tr>
      <tr><td>Dos ángulos y un lado (ALA o LAA)</td><td>Senos</td></tr>
      <tr><td>Dos lados y el ángulo opuesto a uno de ellos</td><td>Senos</td></tr>
      <tr><td>Dos lados y el ángulo entre ellos (LAL)</td><td>Cosenos</td></tr>
      <tr><td>Los tres lados (LLL)</td><td>Cosenos</td></tr>
    </table>

    <h4>✍️ Ejemplo: el ancho de un río</h4>
    <div class="ejemplo">
      Para medir el ancho del río Grijalva, desde dos puntos A y B en la misma orilla, separados 100 m, se observa un árbol C en la otra orilla. Los ángulos miden A = 70° y B = 60°, así que C = 180° − 130° = 50°.<br>
      Ley de senos: AC / sen 60° = 100 / sen 50° → AC = 100 × 0.866 / 0.766 ≈ <strong>113 m</strong>.<br>
      Ancho del río (distancia de C a la orilla): AC × sen 70° ≈ 113 × 0.940 ≈ <strong>106 m</strong>.
    </div>

    <h4>✍️ Ejemplo con la ley de cosenos</h4>
    <div class="formula">
a = 8, b = 5, C = 60°<br>
c² = 64 + 25 − 2(8)(5)(0.5) = 89 − 40 = 49 → c = 7
    </div>

    <h4>Practica</h4>
    ${mateEjercicio('En un triángulo, A = 40°, B = 75° y a = 10. Calcula b.', 'b = 10 × sen 75° / sen 40° ≈ 10 × 0.966 / 0.643 ≈ 15.0.')}
    ${mateEjercicio('Dos caminos salen de un pueblo formando 120°. Uno mide 3 km y otro 5 km. ¿Qué distancia separa sus extremos?', 'c² = 9 + 25 − 2(3)(5)(−0.5) = 34 + 15 = 49 → c = 7 km.')}
  `,

  "pm4-3": `
    <h4>✍️ Ejemplo: puntos en un mapa</h4>
    <div class="ejemplo">
      En un mapa con cuadrícula en kilómetros, la escuela está en A(1, 2) y la clínica en B(7, 10).<br>
      Distancia: d = √[(7 − 1)² + (10 − 2)²] = √(36 + 64) = <strong>10 km</strong> en línea recta.<br>
      Punto medio (para poner una parada de combi): M = (4, 6).
    </div>

    <h4>Pendiente, inclinación y porcentaje</h4>
    <div class="formula">
m = tan θ &nbsp;&nbsp; (θ = ángulo de inclinación de la recta)<br>
Pendiente en % = m × 100
    </div>
    <p>Una señal de carretera de «pendiente 8 %» en la bajada hacia el Sumidero significa que bajas 8 m por cada 100 m horizontales: m = 0.08 y θ ≈ 4.6°.</p>

    <h4>Practica</h4>
    ${mateEjercicio('Calcula la distancia entre (−2, 3) y (4, −5).', 'd = √(36 + 64) = 10.')}
    ${mateEjercicio('¿Qué ángulo de inclinación tiene una recta con pendiente 1?', 'tan θ = 1 → θ = 45°.')}
    ${mateEjercicio('Los puntos (1, 1), (3, 5) y (5, 9), ¿están alineados?', 'Las pendientes entre ellos son 4/2 = 2 y 4/2 = 2. Como son iguales, sí están alineados.')}
  `,

  "pm4-4": `
    ${mateDiagrama('parabola-elementos', 'Elementos de la parábola', 'Todos los puntos de la parábola están a la misma distancia del foco y de la directriz.')}

    <h4>✍️ Ejemplo resuelto</h4>
    <div class="formula">
x² = 8y → 4p = 8 → p = 2<br>
Vértice (0, 0) · Foco (0, 2) · Directriz y = −2<br>
Lado recto = |4p| = 8 (ancho de la parábola a la altura del foco)<br>
Abre hacia arriba porque p > 0
    </div>

    <h4>Forma general y ordinaria</h4>
    <div class="formula">
x² − 4x − 8y + 12 = 0<br>
(x − 2)² = 8y − 8 = 8(y − 1)<br>
Vértice (2, 1), p = 2, foco (2, 3), directriz y = −1
    </div>

    <h4>Practica</h4>
    ${mateEjercicio('Encuentra el foco y la directriz de y² = −12x.', '4p = −12 → p = −3. Foco (−3, 0), directriz x = 3. Abre hacia la izquierda.')}
    ${mateEjercicio('Escribe la ecuación de la parábola con vértice en el origen y foco en (0, 5).', 'p = 5: x² = 20y.')}
  `,

  // ===================== PENSAMIENTO MATEMÁTICO V =====================
  "pm5-1": `
    <h4>Calcular un límite con una tabla</h4>
    <table class="tabla-estudio">
      <tr><th>x</th><td>1.9</td><td>1.99</td><td>1.999</td><td>2</td><td>2.001</td><td>2.01</td></tr>
      <tr><th>f(x) = 3x + 1</th><td>6.7</td><td>6.97</td><td>6.997</td><td>→ 7</td><td>7.003</td><td>7.03</td></tr>
    </table>
    <p>Por la izquierda y por la derecha f(x) se acerca a 7: lím<sub>x→2</sub> (3x + 1) = 7.</p>

    <h4>Indeterminación 0/0: factoriza y simplifica</h4>
    <div class="formula">
lím<sub>x→1</sub> (x² − 1)/(x − 1) → sustituir da 0/0<br>
= lím<sub>x→1</sub> (x + 1)(x − 1)/(x − 1) = lím<sub>x→1</sub> (x + 1) = 2
    </div>

    <h4>Límites al infinito</h4>
    <div class="formula">
lím<sub>x→∞</sub> 1/x = 0<br>
lím<sub>x→∞</sub> (3x² + 1)/(x² − 5) = 3 &nbsp;&nbsp;(divide entre la mayor potencia)
    </div>

    <h4>Continuidad</h4>
    <p>f es continua en x = a si: 1) f(a) existe, 2) el límite existe y 3) el límite es igual a f(a). El costo de un estacionamiento que cobra por hora completa <strong>no</strong> es continuo: da saltos cada hora.</p>

    <h4>Practica</h4>
    ${mateEjercicio('Calcula lím x→3 de (x² − 9)/(x − 3)', '(x + 3)(x − 3)/(x − 3) = x + 3 → 6.')}
    ${mateEjercicio('Calcula lím x→∞ de (5x + 2)/(2x − 1)', 'Se divide entre x: (5 + 2/x)/(2 − 1/x) → 5/2.')}
  `,

  "pm5-2": `
    <h4>La regla de los cuatro pasos</h4>
    <div class="formula">
f(x) = 3x²<br>
1. f(x + h) = 3(x + h)² = 3x² + 6xh + 3h²<br>
2. f(x + h) − f(x) = 6xh + 3h²<br>
3. Divide entre h: 6x + 3h<br>
4. Límite cuando h → 0: f′(x) = 6x
    </div>

    <h4>Reglas de derivación</h4>
    <table class="tabla-estudio">
      <tr><th>Regla</th><th>Fórmula</th><th>Ejemplo</th></tr>
      <tr><td>Constante por función</td><td>(c·f)′ = c·f′</td><td>(5x³)′ = 15x²</td></tr>
      <tr><td>Suma</td><td>(f + g)′ = f′ + g′</td><td>(x² + 4x − 7)′ = 2x + 4</td></tr>
      <tr><td>Producto</td><td>(fg)′ = f′g + fg′</td><td>(x² · x³)′ = 2x · x³ + x² · 3x² = 5x⁴</td></tr>
      <tr><td>Cociente</td><td>(f/g)′ = (f′g − fg′)/g²</td><td>(1/x)′ = −1/x²</td></tr>
      <tr><td>Cadena</td><td>[f(g(x))]′ = f′(g(x)) · g′(x)</td><td>[(2x + 1)³]′ = 3(2x + 1)² · 2</td></tr>
    </table>

    <h4>Interpretación</h4>
    <p>Si C(x) = 0.5x² + 10x es el costo (en pesos) de producir x litros de pozol, C′(x) = x + 10 es el <strong>costo marginal</strong>: cuánto cuesta producir un litro más. En x = 20: C′(20) = $30 por litro.</p>

    <h4>Practica</h4>
    ${mateEjercicio('Deriva f(x) = 4x³ − 2x² + 7x − 9', 'f′(x) = 12x² − 4x + 7.')}
    ${mateEjercicio('Deriva f(x) = (x² + 1)⁴', 'f′(x) = 4(x² + 1)³ · 2x = 8x(x² + 1)³.')}
  `,

  "pm5-3": `
    ${mateDiagrama('funcion-maxmin', 'Función con máximo y mínimo', 'En un máximo o un mínimo la tangente es horizontal: la derivada vale cero.')}

    <h4>Pasos para optimizar</h4>
    <ol>
      <li>Escribe la función de lo que quieres maximizar o minimizar.</li>
      <li>Déjala con una sola variable usando las condiciones del problema.</li>
      <li>Deriva e iguala a cero para encontrar los puntos críticos.</li>
      <li>Verifica con la segunda derivada (o con una tabla) si es máximo o mínimo.</li>
    </ol>

    <h4>✍️ Ejemplo: la caja de cartón</h4>
    <div class="ejemplo">
      De una lámina cuadrada de 30 cm se cortan cuadros de lado x en las esquinas y se doblan para hacer una caja sin tapa. ¿Qué x da el mayor volumen?<br>
      V(x) = x(30 − 2x)²<br>
      V′(x) = (30 − 2x)² − 4x(30 − 2x) = (30 − 2x)(30 − 6x) = 0 → x = 15 (no sirve) o <strong>x = 5 cm</strong><br>
      V(5) = 5 × 20² = <strong>2 000 cm³</strong> (2 litros).
    </div>

    <h4>Movimiento</h4>
    <div class="formula">
s(t) = −5t² + 20t (altura de una pelota lanzada hacia arriba)<br>
v(t) = s′(t) = −10t + 20 · a(t) = v′(t) = −10<br>
Altura máxima cuando v = 0: t = 2 s → s(2) = 20 m
    </div>

    <h4>Practica</h4>
    ${mateEjercicio('Dos números suman 50. ¿Cuáles son si su producto es el máximo posible?', 'P = x(50 − x); P′ = 50 − 2x = 0 → x = 25. Los números son 25 y 25.')}
    ${mateEjercicio('Encuentra los puntos críticos de f(x) = x³ − 3x.', 'f′ = 3x² − 3 = 0 → x = ±1. f″ = 6x: en x = −1 hay un máximo y en x = 1 un mínimo.')}
  `,

  // ===================== PENSAMIENTO MATEMÁTICO VI =====================
  "pm6-1": `
    <h4>Escalas de medición</h4>
    <table class="tabla-estudio">
      <tr><th>Escala</th><th>Tipo</th><th>Ejemplo</th></tr>
      <tr><td>Nominal</td><td>cualitativa, sin orden</td><td>municipio, lengua materna, color</td></tr>
      <tr><td>Ordinal</td><td>cualitativa con orden</td><td>nivel de satisfacción (malo, regular, bueno)</td></tr>
      <tr><td>Intervalo</td><td>cuantitativa sin cero absoluto</td><td>temperatura en °C</td></tr>
      <tr><td>Razón</td><td>cuantitativa con cero absoluto</td><td>peso, estatura, ingreso</td></tr>
    </table>

    <h4>Discretas y continuas</h4>
    <ul>
      <li><strong>Discreta:</strong> se cuenta (número de hermanos, de árboles de café).</li>
      <li><strong>Continua:</strong> se mide y puede tomar decimales (lluvia en mm, tiempo de traslado).</li>
    </ul>

    <h4>Practica</h4>
    ${mateEjercicio('Clasifica: grado escolar, kilos de maíz cosechados, número de celulares en casa, lugar de nacimiento.', 'Grado escolar: cualitativa ordinal. Kilos de maíz: cuantitativa continua. Celulares: cuantitativa discreta. Lugar de nacimiento: cualitativa nominal.')}
  `,

  "pm6-2": `
    <h4>Media de datos agrupados</h4>
    <table class="tabla-estudio">
      <tr><th>Minutos de traslado</th><th>Marca de clase (xₘ)</th><th>f</th><th>f · xₘ</th></tr>
      <tr><td>0–10</td><td>5</td><td>8</td><td>40</td></tr>
      <tr><td>10–20</td><td>15</td><td>12</td><td>180</td></tr>
      <tr><td>20–30</td><td>25</td><td>6</td><td>150</td></tr>
      <tr><td>30–40</td><td>35</td><td>4</td><td>140</td></tr>
      <tr><td><strong>Total</strong></td><td></td><td>30</td><td>510</td></tr>
    </table>
    <div class="formula">x̄ = Σ(f · xₘ) / n = 510 / 30 = 17 minutos</div>

    <h4>¿Media o mediana?</h4>
    <div class="ejemplo">
      Ingresos semanales de 5 personas: $1 500, $1 600, $1 700, $1 800 y $15 000. La media es $4 320, pero nadie gana algo parecido. La mediana ($1 700) representa mejor al grupo, porque no se deja llevar por el dato atípico.
    </div>

    <h4>Practica</h4>
    ${mateEjercicio('Las calificaciones de un alumno son 8, 9, 7 y 10. ¿Qué necesita en el quinto examen para tener promedio 9?', '(34 + x)/5 = 9 → x = 11. No es posible: con 10 alcanzaría 8.8.')}
  `,

  "pm6-3": `
    <h4>✍️ Cálculo paso a paso</h4>
    <table class="tabla-estudio">
      <tr><th>xᵢ</th><th>xᵢ − x̄</th><th>(xᵢ − x̄)²</th></tr>
      <tr><td>4</td><td>−4</td><td>16</td></tr>
      <tr><td>6</td><td>−2</td><td>4</td></tr>
      <tr><td>8</td><td>0</td><td>0</td></tr>
      <tr><td>10</td><td>2</td><td>4</td></tr>
      <tr><td>12</td><td>4</td><td>16</td></tr>
      <tr><td>x̄ = 8</td><td></td><td>Σ = 40</td></tr>
    </table>
    <div class="formula">σ² = 40/5 = 8 &nbsp;&nbsp; σ = √8 ≈ 2.83 &nbsp;&nbsp; CV = 2.83/8 × 100 ≈ 35 %</div>
    <p>Si los datos son una <strong>muestra</strong>, se divide entre n − 1: s² = 40/4 = 10.</p>

    <h4>¿Para qué sirve la dispersión?</h4>
    <div class="ejemplo">
      Dos grupos tienen promedio 8. En el grupo A las calificaciones van de 7.5 a 8.5 (σ pequeña); en el grupo B van de 5 a 10 (σ grande). El promedio es igual, pero el grupo B necesita apoyo para los alumnos con calificaciones bajas.
    </div>

    <h4>Practica</h4>
    ${mateEjercicio('Calcula el rango y la desviación estándar de 2, 4, 4, 4, 5, 5, 7, 9.', 'Rango = 7. Media = 5. Suma de cuadrados = 9 + 1 + 1 + 1 + 0 + 0 + 4 + 16 = 32 → σ² = 4 → σ = 2.')}
  `,

  "pm6-4": `
    <h4>Reglas básicas</h4>
    <div class="formula">
0 ≤ P(A) ≤ 1 &nbsp;&nbsp; P(no A) = 1 − P(A)<br>
P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
    </div>

    <h4>Diagrama de árbol</h4>
    <div class="ejemplo">
      Lanzas una moneda y luego un dado. Resultados posibles: 2 × 6 = 12. P(águila y número par) = (1/2)(3/6) = <strong>1/4</strong>. Como una cosa no afecta a la otra, son eventos <strong>independientes</strong>.
    </div>

    <h4>Probabilidad condicional con una tabla</h4>
    <table class="tabla-estudio">
      <tr><th></th><th>Usa transporte público</th><th>Camina</th><th>Total</th></tr>
      <tr><td>Vive a más de 2 km</td><td>30</td><td>5</td><td>35</td></tr>
      <tr><td>Vive a menos de 2 km</td><td>10</td><td>35</td><td>45</td></tr>
      <tr><td>Total</td><td>40</td><td>40</td><td>80</td></tr>
    </table>
    <p>P(camina | vive a menos de 2 km) = 35/45 ≈ 0.78. P(camina) = 40/80 = 0.5. Como son diferentes, las variables <strong>no</strong> son independientes.</p>

    <h4>Practica</h4>
    ${mateEjercicio('En una bolsa hay 5 canicas rojas y 3 azules. Sacas 2 sin regresar la primera. ¿Probabilidad de que ambas sean rojas?', '(5/8)(4/7) = 20/56 = 5/14 ≈ 0.357. Son eventos dependientes.')}
  `,

  "pm6-5": `
    ${mateDiagrama('campana-normal', 'Curva normal con los porcentajes 68, 95 y 99.7', 'Regla empírica: casi todos los datos (99.7 %) están a menos de 3 desviaciones estándar de la media.')}

    <h4>Puntuación z</h4>
    <div class="ejemplo">
      En un examen estatal la media fue 7 y la desviación estándar 1. Una calificación de 9 tiene z = (9 − 7)/1 = 2. Como el 95 % de los datos está entre z = −2 y z = 2, solo el 2.5 % de los alumnos sacó más de 9.
    </div>

    <h4>Distribución binomial</h4>
    <div class="ejemplo">
      Una semilla de maíz criollo germina con probabilidad 0.8. Si siembras 5, ¿cuál es la probabilidad de que germinen exactamente 3?<br>
      P(X = 3) = C(5, 3)(0.8)³(0.2)² = 10 × 0.512 × 0.04 = <strong>0.2048</strong> (unos 20 %).
    </div>

    <h4>¿Dónde aparece la curva normal?</h4>
    <p>Estaturas, pesos al nacer, errores de medición, el peso de los costales de café que llena una máquina o las calificaciones de un examen grande. Cuando muchos factores pequeños se suman, el resultado tiende a la forma de campana.</p>

    <h4>Practica</h4>
    ${mateEjercicio('Las estaturas de un plantel tienen media 162 cm y σ = 6 cm. ¿Entre qué valores está el 68 % central?', 'μ ± σ: entre 156 cm y 168 cm.')}
  `
};
