/* ==========================================================
   DATA - Pensamiento Matemático I-VI
   Alineado al Programa MCCEMS (propósitos formativos de cada
   semestre) y al modelo educativo de COBACH Chiapas.
   Los temas pm* son los originales; los pmx* completan los
   propósitos del programa. Material extra: matematicas-estudio.js
========================================================== */

const MATEMATICAS = {
  1: {
    titulo: "Pensamiento Matemático I",
    subtitulo: "Pensamiento aritmético",
    semestre: "Primer Semestre",
    clase: "s1",
    icono: "🔢",
    descripcion: "Lógica, historia del conteo y el cero maya, números reales, fracciones, potencias, medición y jerarquía de operaciones.",
    meta: "Comprenda las matemáticas como expresión del pensamiento humano para aplicar los elementos esenciales de la aritmética y el pensamiento lógico en situaciones de interés.",
    contexto: "Las matemáticas están en todo: desde calcular la cosecha hasta medir el terreno de tu comunidad.",
    temas: [
      {
        id: "pmx1-1",
        proposito: "Propósito formativo 1",
        titulo: "Lógica Matemática y Tablas de Verdad",
        icono: "🧠",
        imagen: "linear-gradient(135deg, #4f46e5, #2563eb)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> La lógica te enseña a razonar sin contradicciones. Sirve para entender un reglamento, una promesa política o las condiciones de una beca.
          </div>

          <h4>¿Qué es una proposición?</h4>
          <p>Una <strong>proposición</strong> es un enunciado que puede ser <strong>verdadero (V)</strong> o <strong>falso (F)</strong>, pero no ambas cosas a la vez. Se representan con letras: p, q, r…</p>
          <table class="tabla-estudio">
            <tr><th>Enunciado</th><th>¿Es proposición?</th><th>Valor</th></tr>
            <tr><td>Tuxtla Gutiérrez es la capital de Chiapas.</td><td>Sí</td><td>V</td></tr>
            <tr><td>El Cañón del Sumidero está en Oaxaca.</td><td>Sí</td><td>F</td></tr>
            <tr><td>¿Vas a ir a la Fiesta Grande de Chiapa de Corzo?</td><td>No (es pregunta)</td><td>—</td></tr>
            <tr><td>¡Cierra la puerta!</td><td>No (es orden)</td><td>—</td></tr>
          </table>

          <h4>Conectivos lógicos</h4>
          <table class="tabla-estudio">
            <tr><th>Símbolo</th><th>Nombre</th><th>Se lee</th><th>Ejemplo</th></tr>
            <tr><td>¬p</td><td>Negación</td><td>no p</td><td>No llueve.</td></tr>
            <tr><td>p ∧ q</td><td>Conjunción</td><td>p y q</td><td>Estudio y trabajo.</td></tr>
            <tr><td>p ∨ q</td><td>Disyunción</td><td>p o q</td><td>Voy en combi o camino.</td></tr>
            <tr><td>p → q</td><td>Condicional</td><td>si p, entonces q</td><td>Si llueve, entonces crece la milpa.</td></tr>
            <tr><td>p ↔ q</td><td>Bicondicional</td><td>p si y solo si q</td><td>Apruebas si y solo si sacas 6 o más.</td></tr>
          </table>

          <h4>Tabla de verdad</h4>
          <table class="tabla-estudio">
            <tr><th>p</th><th>q</th><th>p ∧ q</th><th>p ∨ q</th><th>p → q</th><th>p ↔ q</th></tr>
            <tr><td>V</td><td>V</td><td>V</td><td>V</td><td>V</td><td>V</td></tr>
            <tr><td>V</td><td>F</td><td>F</td><td>V</td><td>F</td><td>F</td></tr>
            <tr><td>F</td><td>V</td><td>F</td><td>V</td><td>V</td><td>F</td></tr>
            <tr><td>F</td><td>F</td><td>F</td><td>F</td><td>V</td><td>V</td></tr>
          </table>
          <ul>
            <li>La <strong>conjunción</strong> solo es verdadera si ambas son verdaderas.</li>
            <li>La <strong>disyunción</strong> solo es falsa si ambas son falsas.</li>
            <li>El <strong>condicional</strong> solo es falso cuando la causa es verdadera y la consecuencia falsa: una promesa rota.</li>
          </ul>

          <h4>✍️ Ejemplo práctico: ¿se cumplió la promesa?</h4>
          <div class="ejemplo">
            <strong>Regla de una beca escolar:</strong> «Si tienes promedio de 8 o más (p), entonces recibes el apoyo (q)».<br>
            • Ana tiene 8.5 y recibió el apoyo: V → V = <strong>V</strong> (se cumplió).<br>
            • Luis tiene 8.2 y no lo recibió: V → F = <strong>F</strong> (la regla se rompió).<br>
            • Marta tiene 7.4 y no lo recibió: F → F = <strong>V</strong> (la regla no dice nada sobre ella).
          </div>

          <h4>🛠️ Manos a la obra</h4>
          <p>Busca en el reglamento de tu plantel tres reglas con la forma «si…, entonces…». Escribe p y q de cada una y decide en qué caso se rompería la regla.</p>
        `,
        actividades: [
          { pregunta: "¿Cuál de estos enunciados es una proposición?", opciones: ["Chiapa de Corzo está en Chiapas", "¿Vienes a la feria?", "¡Estudia para el examen!", "Ojalá llueva mañana"], correcta: "Chiapa de Corzo está en Chiapas", explicacion: "Es el único enunciado que puede calificarse como verdadero o falso (y es verdadero)." },
          { pregunta: "Si p es verdadera y q es falsa, ¿qué valor tiene p ∧ q?", opciones: ["Falso", "Verdadero", "Depende del tema", "No se puede saber"], correcta: "Falso", explicacion: "La conjunción (y) solo es verdadera cuando las dos proposiciones son verdaderas." },
          { pregunta: "Si p es falsa y q es verdadera, ¿qué valor tiene p ∨ q?", opciones: ["Verdadero", "Falso", "Depende del tema", "No se puede saber"], correcta: "Verdadero", explicacion: "La disyunción (o) es verdadera cuando al menos una de las proposiciones es verdadera." },
          { pregunta: "El condicional p → q solo es falso cuando:", opciones: ["p es verdadera y q es falsa", "p es falsa y q es verdadera", "Ambas son falsas", "Ambas son verdaderas"], correcta: "p es verdadera y q es falsa", explicacion: "Se cumple la condición pero no la consecuencia: es como una promesa rota." },
          { pregunta: "La negación de «Todos los alumnos llegaron» es:", opciones: ["Al menos un alumno no llegó", "Ningún alumno llegó", "Todos los alumnos faltaron", "Algunos alumnos llegaron"], correcta: "Al menos un alumno no llegó", explicacion: "Para que «todos llegaron» sea falso basta con que uno solo no haya llegado." }
        ]
      },
      {
        id: "pmx1-2",
        proposito: "Propósito formativo 2",
        titulo: "Historia del Conteo y el Cero Maya",
        icono: "🗿",
        imagen: "linear-gradient(135deg, #b45309, #d97706)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Contar fue una necesidad social: llevar la cuenta del ganado, de las cosechas y de los días del calendario. Cada pueblo inventó su propio sistema, y los mayas, que habitaron Chiapas, crearon uno de los más avanzados del mundo.
          </div>

          <h4>Sistemas de conteo en la historia</h4>
          <table class="tabla-estudio">
            <tr><th>Pueblo</th><th>Base</th><th>Característica</th></tr>
            <tr><td>Mesopotamia</td><td>60</td><td>Marcas en tablillas de barro. Por eso hoy una hora tiene 60 minutos y el círculo 360°.</td></tr>
            <tr><td>Egipto</td><td>10</td><td>Jeroglíficos que se suman (no posicional).</td></tr>
            <tr><td>Mayas y olmecas (América)</td><td>20</td><td>Posicional, con <strong>cero</strong>. Solo usaban tres símbolos.</td></tr>
            <tr><td>India</td><td>10</td><td>Cifras del 0 al 9 con valor posicional: el origen de nuestros números.</td></tr>
            <tr><td>Árabes</td><td>10</td><td>Difundieron las cifras indias; de al-Juarismi vienen las palabras «algoritmo» y «guarismo».</td></tr>
          </table>

          <h4>El cero en Mesoamérica</h4>
          <p>Los olmecas y los mayas usaron el cero cientos de años antes que Europa. En Chiapas, la <strong>Estela 2 de Chiapa de Corzo</strong> tiene una de las fechas de Cuenta Larga más antiguas que se conocen (año 36 a. C.). Las ciudades mayas de Palenque, Toniná, Yaxchilán y Bonampak registraron fechas, eclipses y ciclos de Venus con este sistema.</p>

          <figure class="diagrama-quimica">
            <img src="images/matematicas/numeros-mayas.svg" alt="Números mayas del 0 al 20" loading="lazy">
            <figcaption>Con punto (1), barra (5) y caracol (0) se escribe cualquier número. En el segundo nivel cada punto vale 20.</figcaption>
          </figure>

          <div class="ejemplo">
            <strong>Escribe 47 en maya:</strong> 47 = 2 × 20 + 7.<br>
            • Nivel de arriba (veintenas): 2 puntos.<br>
            • Nivel de abajo (unidades): 7 = una barra y dos puntos.
          </div>

          <h4>Los números naturales y el sistema indoarábigo</h4>
          <p>Los <strong>números naturales</strong> (1, 2, 3, …) son los que usamos para contar. En 1202 el italiano <strong>Leonardo de Pisa (Fibonacci)</strong> publicó el <em>Liber Abaci</em>, que difundió en Europa las cifras indoarábigas y el cero, y reemplazó poco a poco a los números romanos.</p>

          <h4>El ábaco</h4>
          <p>Un ábaco es una herramienta con cuentas para contar y calcular. Hay muchos: el <em>suanpan</em> chino, el <em>soroban</em> japonés y el <strong>nepohualtzintzin</strong> mesoamericano, que también era de base 20.</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Con frijoles (puntos), palitos (barras) y una concha o semilla grande (cero), escribe en maya tu edad, el número de tu lista y el año de tu nacimiento. Pista: 20 × 20 = 400 es el valor del tercer nivel.</p>
        `,
        actividades: [
          { pregunta: "¿En qué base contaban los mayas?", opciones: ["20", "10", "60", "5"], correcta: "20", explicacion: "Su sistema era vigesimal: cada nivel vale 20 veces más que el de abajo." },
          { pregunta: "En la numeración maya, una barra vale:", opciones: ["5", "1", "10", "20"], correcta: "5", explicacion: "El punto vale 1, la barra 5 y el caracol representa el cero." },
          { pregunta: "¿Qué número forman 2 barras y 3 puntos en el primer nivel?", opciones: ["13", "23", "10", "7"], correcta: "13", explicacion: "2 barras = 10 y 3 puntos = 3, en total 13." },
          { pregunta: "¿Quién difundió en Europa el sistema indoarábigo con su libro Liber Abaci (1202)?", opciones: ["Leonardo de Pisa (Fibonacci)", "Pitágoras", "Euclides", "Isaac Newton"], correcta: "Leonardo de Pisa (Fibonacci)", explicacion: "Fibonacci aprendió las cifras indoarábigas en el norte de África y las dio a conocer en Europa." },
          { pregunta: "¿Por qué el cero es tan importante en un sistema posicional?", opciones: ["Marca las posiciones vacías y distingue 25 de 205", "Solo sirve para restar", "Es el número más grande", "No tiene ninguna utilidad"], correcta: "Marca las posiciones vacías y distingue 25 de 205", explicacion: "Sin un símbolo para el lugar vacío, 25 y 205 se escribirían igual." }
        ]
      },
      {
        id: "pm1-1",
        proposito: "Propósito formativo 3",
        titulo: "Conjunto de Números Reales",
        icono: "🔢",
        imagen: "linear-gradient(135deg, #2563eb, #3b82f6)",
        contenido: `
          <h4>Clasificación de los números</h4>
          <ul>
            <li><strong>Naturales (N):</strong> 1, 2, 3, 4...</li>
            <li><strong>Enteros (Z):</strong> ..., -2, -1, 0, 1, 2...</li>
            <li><strong>Racionales (Q):</strong> fracciones, decimales exactos o periódicos</li>
            <li><strong>Irracionales (I):</strong> √2, π, e (decimales infinitos no periódicos)</li>
            <li><strong>Reales (R):</strong> Q ∪ I</li>
          </ul>
          <h4>Propiedades de los números reales</h4>
          <div class="formula">
Conmutativa: a + b = b + a<br>
Asociativa: (a + b) + c = a + (b + c)<br>
Distributiva: a(b + c) = ab + ac<br>
Identidad: a + 0 = a; a × 1 = a<br>
Inverso: a + (-a) = 0; a × (1/a) = 1
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué tipo de número es π (pi)?", opciones: ["Natural", "Entero", "Racional", "Irracional"], correcta: "Irracional", explicacion: "Tiene decimales infinitos no periódicos." },
          { pregunta: "¿Cuál de estos es un número entero?", opciones: ["1/2", "-5", "0.75", "√2"], correcta: "-5", explicacion: "Los enteros incluyen negativos, positivos y el cero." },
          { pregunta: "La propiedad a(b + c) = ab + ac se llama:", opciones: ["Conmutativa", "Asociativa", "Distributiva", "Identidad"], correcta: "Distributiva", explicacion: "Distribuye la multiplicación sobre la suma." },
          { pregunta: "¿Cuál es el inverso aditivo de 5?", opciones: ["1/5", "-5", "5", "0"], correcta: "-5", explicacion: "Porque 5 + (-5) = 0." },
          { pregunta: "El conjunto de los números naturales empieza en:", opciones: ["0", "1", "-1", "Infinito"], correcta: "1", explicacion: "N = {1, 2, 3, 4...}" }
        ]
      },
      {
        id: "pmx1-3",
        proposito: "Propósito formativo 3",
        titulo: "Factorización, MCD y mcm",
        icono: "🧩",
        imagen: "linear-gradient(135deg, #0891b2, #0e7490)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Todo número natural mayor que 1 se puede escribir como un producto de números primos, y de una sola forma. Es el <strong>teorema fundamental de la aritmética</strong>.
          </div>

          <h4>Primos y compuestos</h4>
          <ul>
            <li><strong>Primo:</strong> solo tiene dos divisores, el 1 y él mismo: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29…</li>
            <li><strong>Compuesto:</strong> tiene más de dos divisores: 4, 6, 8, 9, 10, 12…</li>
            <li>El 1 no es primo ni compuesto.</li>
          </ul>

          <h4>Criterios de divisibilidad</h4>
          <table class="tabla-estudio">
            <tr><th>Entre</th><th>Si…</th><th>Ejemplo</th></tr>
            <tr><td>2</td><td>termina en cifra par</td><td>348</td></tr>
            <tr><td>3</td><td>la suma de sus cifras es múltiplo de 3</td><td>411 → 4+1+1 = 6</td></tr>
            <tr><td>5</td><td>termina en 0 o 5</td><td>735</td></tr>
            <tr><td>10</td><td>termina en 0</td><td>1 250</td></tr>
          </table>

          <h4>Descomposición en factores primos</h4>
          <div class="formula">
360 | 2<br>180 | 2<br>&nbsp;90 | 2<br>&nbsp;45 | 3<br>&nbsp;15 | 3<br>&nbsp;&nbsp;5 | 5<br>&nbsp;&nbsp;1<br><br>
360 = 2³ × 3² × 5
          </div>

          <h4>Máximo común divisor (MCD) y mínimo común múltiplo (mcm)</h4>
          <ul>
            <li><strong>MCD:</strong> el mayor número que divide a ambos. Se multiplican los factores <em>comunes</em> con su <em>menor</em> exponente.</li>
            <li><strong>mcm:</strong> el menor múltiplo que comparten. Se multiplican <em>todos</em> los factores con su <em>mayor</em> exponente.</li>
          </ul>
          <div class="formula">
48 = 2⁴ × 3 &nbsp;&nbsp; 36 = 2² × 3²<br>
MCD(48, 36) = 2² × 3 = 12<br>
mcm(48, 36) = 2⁴ × 3² = 144
          </div>

          <h4>✍️ Ejemplo práctico en Chiapas</h4>
          <div class="ejemplo">
            <strong>MCD:</strong> Una cooperativa de Tapachula tiene 48 bolsas de café y 36 de cacao. Quiere armar paquetes iguales, con la misma cantidad de cada producto y sin que sobre nada. Como MCD(48, 36) = 12, se arman <strong>12 paquetes</strong> de 4 bolsas de café y 3 de cacao.<br><br>
            <strong>mcm:</strong> En la terminal, una combi a Chiapa de Corzo sale cada 12 minutos y otra a Berriozábal cada 18. Si salen juntas a las 7:00, como mcm(12, 18) = 36, vuelven a coincidir a las <strong>7:36</strong>.
          </div>

          <h4>Ley de los signos y operaciones inversas</h4>
          <table class="tabla-estudio">
            <tr><th>Operación</th><th>Signos iguales</th><th>Signos distintos</th></tr>
            <tr><td>× y ÷</td><td>resultado + : (−4)(−3) = 12</td><td>resultado − : (−20) ÷ 5 = −4</td></tr>
          </table>
          <p>La resta es la inversa de la suma y la división es la inversa de la multiplicación: si 7 × 6 = 42, entonces 42 ÷ 6 = 7.</p>
        `,
        actividades: [
          { pregunta: "¿Cuál es la descomposición en factores primos de 60?", opciones: ["2² × 3 × 5", "2 × 3 × 10", "4 × 15", "2³ × 5"], correcta: "2² × 3 × 5", explicacion: "60 = 2 × 2 × 3 × 5. El 10 y el 4 no son primos." },
          { pregunta: "¿Cuál de estos números es primo?", opciones: ["29", "21", "27", "33"], correcta: "29", explicacion: "29 solo es divisible entre 1 y 29. Los otros son múltiplos de 3 o de 7." },
          { pregunta: "¿Cuál es el MCD de 18 y 24?", opciones: ["6", "3", "12", "72"], correcta: "6", explicacion: "18 = 2 × 3² y 24 = 2³ × 3. Factores comunes con menor exponente: 2 × 3 = 6." },
          { pregunta: "¿Cuál es el mcm de 4 y 10?", opciones: ["20", "40", "2", "14"], correcta: "20", explicacion: "4 = 2² y 10 = 2 × 5. Todos los factores con mayor exponente: 2² × 5 = 20." },
          { pregunta: "Una combi sale cada 15 min y otra cada 20 min. Si salen juntas, ¿en cuántos minutos vuelven a coincidir?", opciones: ["60", "35", "5", "300"], correcta: "60", explicacion: "Es el mínimo común múltiplo: mcm(15, 20) = 60 minutos." }
        ]
      },
      {
        id: "pmx1-4",
        proposito: "Propósito formativo 4",
        titulo: "La Unidad y las Fracciones",
        icono: "🫓",
        imagen: "linear-gradient(135deg, #d97706, #ca8a04)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Una fracción indica en cuántas partes iguales se divide una <strong>unidad</strong> (el entero) y cuántas de esas partes tomas.
          </div>

          <figure class="diagrama-quimica">
            <img src="images/matematicas/fracciones-tortilla.svg" alt="Tortillas divididas en medios, cuartos y octavos" loading="lazy">
            <figcaption>La tortilla es la unidad. El denominador dice en cuántas partes iguales la cortas y el numerador cuántas te comes.</figcaption>
          </figure>

          <h4>Tipos de fracciones</h4>
          <ul>
            <li><strong>Propia:</strong> numerador menor que el denominador (3/4). Es menor que 1.</li>
            <li><strong>Impropia:</strong> numerador mayor o igual al denominador (7/4). Es mayor o igual a 1.</li>
            <li><strong>Mixta:</strong> entero más fracción: 7/4 = 1 ¾.</li>
            <li>Todo entero es una fracción: 5 = 5/1 = 10/2.</li>
          </ul>

          <h4>Equivalencia y simplificación</h4>
          <div class="formula">
Equivalentes: 1/2 = 2/4 = 3/6 = 50/100<br>
Simplificar: 18/24 → ÷6 → 3/4 (6 es el MCD)
          </div>

          <h4>Operaciones</h4>
          <div class="formula">
Mismo denominador: 2/7 + 3/7 = 5/7<br>
Distinto denominador: 1/2 + 1/3 = 3/6 + 2/6 = 5/6<br>
Multiplicación: 2/3 × 4/5 = 8/15<br>
División: 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = 5/6
          </div>

          <h4>Fracción, decimal y porcentaje</h4>
          <table class="tabla-estudio">
            <tr><th>Fracción</th><th>Decimal</th><th>Porcentaje</th></tr>
            <tr><td>1/2</td><td>0.5</td><td>50 %</td></tr>
            <tr><td>1/4</td><td>0.25</td><td>25 %</td></tr>
            <tr><td>3/4</td><td>0.75</td><td>75 %</td></tr>
            <tr><td>1/5</td><td>0.2</td><td>20 %</td></tr>
            <tr><td>1/10</td><td>0.1</td><td>10 %</td></tr>
          </table>

          <h4>✍️ Ejemplo práctico: tamales de chipilín</h4>
          <div class="ejemplo">
            Para 10 tamales se usan ¾ kg de masa y ½ kg de manteca de cerdo. Para 40 tamales (4 veces la receta):<br>
            • Masa: 4 × ¾ = 12/4 = <strong>3 kg</strong>.<br>
            • Manteca: 4 × ½ = <strong>2 kg</strong>.
          </div>

          <h4>🛠️ Manos a la obra</h4>
          <p>Dobla hojas de papel para obtener 1/2, 1/4 y 1/8. Colorea y comprueba que 2/4 = 1/2 y que 1/4 + 1/8 = 3/8.</p>
        `,
        actividades: [
          { pregunta: "¿Qué fracción es equivalente a 2/3?", opciones: ["4/6", "3/2", "2/6", "4/3"], correcta: "4/6", explicacion: "Se multiplica numerador y denominador por 2: 2/3 = 4/6." },
          { pregunta: "Simplifica 18/24:", opciones: ["3/4", "9/12", "6/8", "2/3"], correcta: "3/4", explicacion: "Se divide entre el MCD, que es 6: 18 ÷ 6 = 3 y 24 ÷ 6 = 4." },
          { pregunta: "1/2 + 1/3 =", opciones: ["5/6", "2/5", "1/5", "2/6"], correcta: "5/6", explicacion: "Común denominador 6: 3/6 + 2/6 = 5/6." },
          { pregunta: "3/4 expresado en porcentaje es:", opciones: ["75 %", "34 %", "43 %", "7.5 %"], correcta: "75 %", explicacion: "3 ÷ 4 = 0.75, y 0.75 × 100 = 75 %." },
          { pregunta: "Para 10 tamales se usan 3/4 kg de masa. ¿Cuánta masa necesitas para 40 tamales?", opciones: ["3 kg", "4 kg", "1.5 kg", "7.5 kg"], correcta: "3 kg", explicacion: "40 tamales son 4 veces la receta: 4 × 3/4 = 3 kg." }
        ]
      },
      {
        id: "pm1-3",
        proposito: "Propósito formativo 4",
        titulo: "Proporcionalidad y Porcentajes",
        icono: "📊",
        imagen: "linear-gradient(135deg, #10b981, #059669)",
        contenido: `
          <h4>Variación directamente proporcional</h4>
          <div class="formula">y = kx (k = constante de proporcionalidad)</div>
          <h4>Variación inversamente proporcional</h4>
          <div class="formula">y = k / x</div>
          <h4>Porcentajes</h4>
          <div class="formula">% = (parte / total) × 100</div>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> Si el precio de un producto es $255 con 15% de descuento, el precio original fue $300.
          </div>
        `,
        actividades: [
          { pregunta: "Si 1 kg de café cuesta $50, ¿cuánto cuestan 3 kg?", opciones: ["$100", "$150", "$200", "$75"], correcta: "$150", explicacion: "Es una proporción directa: 50 × 3 = 150." },
          { pregunta: "¿Cuál es el 20% de 150?", opciones: ["30", "20", "15", "45"], correcta: "30", explicacion: "150 × 0.20 = 30." },
          { pregunta: "Si 2 trabajadores tardan 6 días, ¿cuánto tardan 3 (inversamente proporcional)?", opciones: ["4 días", "9 días", "6 días", "3 días"], correcta: "4 días", explicacion: "A más trabajadores, menos días: (2×6)/3 = 4." },
          { pregunta: "Un artículo cuesta $80 y tiene 10% de descuento. ¿Cuánto pagas?", opciones: ["$70", "$72", "$75", "$78"], correcta: "$72", explicacion: "10% de 80 es 8. 80 - 8 = 72." },
          { pregunta: "La fórmula y = k/x representa una proporción:", opciones: ["Directa", "Inversa", "Ninguna", "Cuadrática"], correcta: "Inversa", explicacion: "Si x aumenta, y disminuye." }
        ]
      },
      {
        id: "pmx1-5",
        proposito: "Propósito formativo 5",
        titulo: "Potencias y Raíces",
        icono: "✖️",
        imagen: "linear-gradient(135deg, #7c3aed, #4f46e5)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Una potencia es una multiplicación repetida, y la raíz es su operación inversa.
          </div>

          <h4>Partes de una potencia</h4>
          <div class="formula">
2⁵ = 2 × 2 × 2 × 2 × 2 = 32<br>
base = 2 · exponente = 5 · potencia = 32
          </div>

          <h4>Leyes de los exponentes</h4>
          <table class="tabla-estudio">
            <tr><th>Ley</th><th>Regla</th><th>Ejemplo</th></tr>
            <tr><td>Producto</td><td>aᵐ · aⁿ = aᵐ⁺ⁿ</td><td>3² · 3³ = 3⁵ = 243</td></tr>
            <tr><td>Cociente</td><td>aᵐ ÷ aⁿ = aᵐ⁻ⁿ</td><td>5⁶ ÷ 5⁴ = 5² = 25</td></tr>
            <tr><td>Potencia de potencia</td><td>(aᵐ)ⁿ = aᵐⁿ</td><td>(2³)² = 2⁶ = 64</td></tr>
            <tr><td>Potencia de un producto</td><td>(ab)ⁿ = aⁿbⁿ</td><td>(2 · 5)² = 4 · 25 = 100</td></tr>
            <tr><td>Exponente cero</td><td>a⁰ = 1 (a ≠ 0)</td><td>7⁰ = 1</td></tr>
            <tr><td>Exponente negativo</td><td>a⁻ⁿ = 1/aⁿ</td><td>2⁻³ = 1/8</td></tr>
          </table>
          <p>El exponente negativo da el <strong>inverso multiplicativo</strong> de la potencia: 2⁻³ × 2³ = 1.</p>
          <div class="alerta nota-estudio">
            <strong>⚠️ Cuidado con los signos:</strong> (−2)² = 4, pero −2² = −4, porque en el segundo caso el exponente solo afecta al 2.
          </div>

          <h4>Raíces</h4>
          <div class="formula">
√49 = 7 porque 7² = 49<br>
∛27 = 3 porque 3³ = 27<br>
ⁿ√a: n = índice, a = radicando<br>
La raíz cancela la potencia: √(5²) = 5
          </div>
          <p>Si el índice es 2 no se escribe (raíz cuadrada). Los números negativos no tienen raíz cuadrada real.</p>

          <h4>✍️ Ejemplo práctico en Chiapas</h4>
          <div class="ejemplo">
            En muchas comunidades la tierra se mide en <strong>cuerdas</strong>. En algunas regiones una cuerda es un cuadrado de 400 m². ¿Cuánto mide su lado? √400 = <strong>20 m</strong>.<br><br>
            En la composta, la cantidad de bacterias puede duplicarse cada hora: después de n horas hay 2ⁿ veces más. En 10 horas: 2¹⁰ = 1 024 veces más.
          </div>
        `,
        actividades: [
          { pregunta: "2³ × 2⁴ =", opciones: ["2⁷", "2¹²", "4⁷", "2¹"], correcta: "2⁷", explicacion: "Misma base: se conservan la base y se suman los exponentes, 3 + 4 = 7." },
          { pregunta: "¿Cuánto vale 5⁰?", opciones: ["1", "0", "5", "No existe"], correcta: "1", explicacion: "Todo número distinto de cero elevado a la potencia cero vale 1." },
          { pregunta: "¿Cuánto vale 3⁻²?", opciones: ["1/9", "−9", "−6", "9"], correcta: "1/9", explicacion: "El exponente negativo invierte: 3⁻² = 1/3² = 1/9." },
          { pregunta: "√81 =", opciones: ["9", "8", "40.5", "27"], correcta: "9", explicacion: "9 × 9 = 81." },
          { pregunta: "Un terreno cuadrado mide 400 m². ¿Cuánto mide cada lado?", opciones: ["20 m", "100 m", "200 m", "40 m"], correcta: "20 m", explicacion: "El área de un cuadrado es lado², así que lado = √400 = 20 m." }
        ]
      },
      {
        id: "pmx1-6",
        proposito: "Propósito formativo 6",
        titulo: "Medición, Sistema Internacional y Notación Científica",
        icono: "📏",
        imagen: "linear-gradient(135deg, #059669, #0d9488)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Medir es comparar una magnitud con una unidad. Para que todos entendamos lo mismo, el mundo acordó usar unidades comunes.
          </div>

          <h4>Breve historia de la medición</h4>
          <p>Al principio se medía con el cuerpo: el palmo, el pie, la brazada, el paso. En el campo de Chiapas todavía se usan la <strong>cuerda</strong>, la <strong>tarea</strong> o la <strong>vara</strong>, cuyo tamaño cambia de una región a otra. Para acabar con la confusión, en Francia se creó el <strong>metro</strong> a finales del siglo XVIII. En 1960 nació el <strong>Sistema Internacional de Unidades (SI)</strong>, que es el oficial en México.</p>

          <h4>Unidades básicas del SI</h4>
          <table class="tabla-estudio">
            <tr><th>Magnitud</th><th>Unidad</th><th>Símbolo</th></tr>
            <tr><td>Longitud</td><td>metro</td><td>m</td></tr>
            <tr><td>Masa</td><td>kilogramo</td><td>kg</td></tr>
            <tr><td>Tiempo</td><td>segundo</td><td>s</td></tr>
            <tr><td>Corriente eléctrica</td><td>ampere</td><td>A</td></tr>
            <tr><td>Temperatura</td><td>kelvin</td><td>K</td></tr>
            <tr><td>Cantidad de sustancia</td><td>mol</td><td>mol</td></tr>
            <tr><td>Intensidad luminosa</td><td>candela</td><td>cd</td></tr>
          </table>
          <p>Prefijos útiles: kilo (k) = 1 000 · centi (c) = 1/100 · mili (m) = 1/1 000. Así 2.5 m = 250 cm y 3 km = 3 000 m.</p>

          <h4>Notación científica</h4>
          <p>Sirve para escribir números muy grandes o muy pequeños: <strong>a × 10ⁿ</strong>, con 1 ≤ a &lt; 10.</p>
          <table class="tabla-estudio">
            <tr><th>Dato</th><th>Número</th><th>Notación científica</th></tr>
            <tr><td>Habitantes de Chiapas (Censo 2020)</td><td>5 543 828</td><td>≈ 5.54 × 10⁶</td></tr>
            <tr><td>Superficie de Chiapas</td><td>73 311 km²</td><td>≈ 7.33 × 10⁴ km²</td></tr>
            <tr><td>Altura del volcán Tacaná</td><td>≈ 4 060 m</td><td>≈ 4.06 × 10³ m</td></tr>
            <tr><td>Grosor de un cabello</td><td>0.00008 m</td><td>8 × 10⁻⁵ m</td></tr>
          </table>
          <p>Si el punto decimal se mueve a la izquierda, el exponente es positivo. Si se mueve a la derecha, es negativo.</p>

          <h4>Razón, proporción y escala</h4>
          <div class="ejemplo">
            Un mapa de Chiapas a escala <strong>1:250 000</strong> significa que 1 cm en el mapa son 250 000 cm reales = 2.5 km. Si en el mapa Tuxtla y Chiapa de Corzo están a 6 cm, en la realidad están a unos 6 × 2.5 = <strong>15 km</strong> en línea recta.
          </div>

          <h4>🛠️ Manos a la obra</h4>
          <p>Mide el largo de tu salón con tu paso y luego con una cinta métrica. Compara con tus compañeros: ¿por qué los pasos dan resultados distintos y la cinta no?</p>
        `,
        actividades: [
          { pregunta: "¿Cuál es la unidad de longitud del Sistema Internacional?", opciones: ["Metro", "Pie", "Vara", "Kilómetro"], correcta: "Metro", explicacion: "El metro es la unidad básica. El kilómetro es un múltiplo (1 000 m)." },
          { pregunta: "0.00045 en notación científica es:", opciones: ["4.5 × 10⁻⁴", "4.5 × 10⁴", "45 × 10⁻⁵", "0.45 × 10⁻³"], correcta: "4.5 × 10⁻⁴", explicacion: "El punto se mueve 4 lugares a la derecha, y a debe estar entre 1 y 10." },
          { pregunta: "3.2 × 10³ es igual a:", opciones: ["3 200", "320", "32 000", "0.0032"], correcta: "3 200", explicacion: "Multiplicar por 10³ mueve el punto 3 lugares a la derecha." },
          { pregunta: "¿Cuántos centímetros hay en 2.5 m?", opciones: ["250 cm", "25 cm", "2 500 cm", "0.25 cm"], correcta: "250 cm", explicacion: "1 m = 100 cm, así que 2.5 × 100 = 250 cm." },
          { pregunta: "En un mapa a escala 1:100 000, dos pueblos están a 6 cm. ¿Cuál es la distancia real?", opciones: ["6 km", "60 km", "600 m", "0.6 km"], correcta: "6 km", explicacion: "6 × 100 000 = 600 000 cm = 6 000 m = 6 km." }
        ]
      },
      {
        id: "pm1-2",
        proposito: "Propósito formativo 7",
        titulo: "Operaciones Aritméticas y Jerarquía",
        icono: "➕",
        imagen: "linear-gradient(135deg, #f59e0b, #d97706)",
        contenido: `
          <h4>Jerarquía de operaciones</h4>
          <ol>
            <li>Paréntesis y corchetes</li>
            <li>Potencias y raíces</li>
            <li>Multiplicación y división</li>
            <li>Suma y resta</li>
          </ol>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> 2 + 3 × 4 = 2 + 12 = 14 (NO 20)
          </div>
        `,
        actividades: [
          { pregunta: "Resuelve: 5 + 2 × 3", opciones: ["21", "11", "16", "10"], correcta: "11", explicacion: "Primero se multiplica 2×3=6, luego se suma 5+6=11." },
          { pregunta: "Resuelve: (8 - 3) × 2", opciones: ["10", "13", "16", "5"], correcta: "10", explicacion: "Primero paréntesis (8-3=5), luego 5×2=10." },
          { pregunta: "¿Qué se resuelve primero en: 4 + 2²?", opciones: ["4 + 2", "2²", "4 + 2²", "No importa"], correcta: "2²", explicacion: "Las potencias van antes que la suma." },
          { pregunta: "Resuelve: 10 / 2 + 3", opciones: ["2", "8", "5", "6"], correcta: "8", explicacion: "División primero (10/2=5), luego suma 5+3=8." },
          { pregunta: "Resuelve: 2 + 3 × 4 - 1", opciones: ["19", "13", "11", "20"], correcta: "13", explicacion: "3×4=12. Luego 2+12=14. Finalmente 14-1=13." }
        ]
      },
      {
        id: "pm1-4",
        proposito: "Complementario · Patrones y sucesiones",
        titulo: "Sucesiones Numéricas",
        icono: "🔗",
        imagen: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
        contenido: `
          <h4>Sucesiones aritméticas</h4>
          <div class="formula">aₙ = a₁ + (n - 1)d</div>
          <p>Donde: a₁ = primer término, d = diferencia común</p>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> 2, 5, 8, 11, ... → d = 3, a₁ = 2
          </div>
        `,
        actividades: [
          { pregunta: "En la sucesión 2, 4, 6, 8... ¿cuál es la diferencia (d)?", opciones: ["1", "2", "3", "4"], correcta: "2", explicacion: "Cada término aumenta en 2." },
          { pregunta: "¿Cuál es el siguiente término en: 3, 7, 11, 15...?", opciones: ["17", "18", "19", "20"], correcta: "19", explicacion: "La diferencia es 4. 15 + 4 = 19." },
          { pregunta: "En la fórmula aₙ = a₁ + (n-1)d, ¿qué significa 'n'?", opciones: ["El primer término", "La diferencia", "El número de término", "La suma total"], correcta: "El número de término", explicacion: "n es la posición del término que buscas." },
          { pregunta: "Si a₁ = 5 y d = 3, ¿cuál es el tercer término?", opciones: ["8", "11", "14", "17"], correcta: "11", explicacion: "a₃ = 5 + (3-1)3 = 5 + 6 = 11." },
          { pregunta: "La sucesión 10, 20, 30, 40 es:", opciones: ["Geométrica", "Aritmética", "Cuadrática", "Aleatoria"], correcta: "Aritmética", explicacion: "Tiene una diferencia constante de 10." }
        ]
      },
      {
        id: "pm1-5",
        proposito: "Complementario · Estadística básica (se amplía en Pensamiento Matemático VI)",
        titulo: "Estadística Elemental",
        icono: "📉",
        imagen: "linear-gradient(135deg, #ec4899, #db2777)",
        contenido: `
          <h4>Medidas de tendencia central</h4>
          <div class="formula">
Media: x̄ = Σx / n<br>
Mediana: valor central<br>
Moda: valor más frecuente
          </div>
          <h4>Tabla de frecuencias</h4>
          <ul>
            <li>Frecuencia absoluta (fᵢ)</li>
            <li>Frecuencia relativa (fᵢ/n)</li>
            <li>Frecuencia acumulada (Fᵢ)</li>
          </ul>
        `,
        actividades: [
          { pregunta: "¿Cuál es la media de: 2, 4, 6, 8?", opciones: ["4", "5", "6", "10"], correcta: "5", explicacion: "(2+4+6+8) / 4 = 20 / 4 = 5." },
          { pregunta: "¿Cuál es la moda de: 3, 4, 4, 5, 6?", opciones: ["3", "4", "5", "6"], correcta: "4", explicacion: "El 4 se repite más veces." },
          { pregunta: "¿Cuál es la mediana de: 1, 3, 7, 9, 10?", opciones: ["3", "7", "9", "1"], correcta: "7", explicacion: "Es el valor central al ordenarlos." },
          { pregunta: "La media también se conoce como:", opciones: ["Promedio", "Moda", "Mediana", "Rango"], correcta: "Promedio", explicacion: "Es la suma dividida entre el número de datos." },
          { pregunta: "La frecuencia absoluta es:", opciones: ["El total de datos", "Cuántas veces aparece un dato", "El promedio", "El valor central"], correcta: "Cuántas veces aparece un dato", explicacion: "Indica la repetición del valor." }
        ]
      }
    ]
  },

  2: {
    titulo: "Pensamiento Matemático II",
    subtitulo: "Introducción al álgebra",
    semestre: "Segundo Semestre",
    clase: "s2",
    icono: "📐",
    descripcion: "Lenguaje algebraico, monomios y polinomios, factorización, el álgebra en la vida diaria y el concepto de ecuación.",
    meta: "Entienda al lenguaje algebraico como un medio de representación de situaciones cotidianas y escolares para estimular el pensamiento abstracto.",
    contexto: "El álgebra es el lenguaje de las matemáticas. Aprenderla te permite modelar situaciones reales.",
    temas: [
      {
        id: "pm2-1",
        proposito: "Propósito formativo 1",
        titulo: "Lenguaje Algebraico",
        icono: "✏️",
        imagen: "linear-gradient(135deg, #0ea5e9, #0284c7)",
        contenido: `
          <h4>Traducción entre lenguaje coloquial y algebraico</h4>
          <ul>
            <li>"Un número aumentado en 5" → x + 5</li>
            <li>"El doble de un número" → 2x</li>
            <li>"La mitad de un número" → x/2</li>
            <li>"El cuadrado de un número" → x²</li>
          </ul>
          <h4>Uso de la variable</h4>
          <ul>
            <li><strong>Incógnita:</strong> valor desconocido</li>
            <li><strong>Relación funcional:</strong> y = f(x)</li>
          </ul>
        `,
        actividades: [
          { pregunta: "¿Cómo se escribe 'el triple de un número'?", opciones: ["x + 3", "3x", "x/3", "x³"], correcta: "3x", explicacion: "Triple significa multiplicar por 3." },
          { pregunta: "Traduce: 'Un número menos 4'", opciones: ["x + 4", "4 - x", "x - 4", "4x"], correcta: "x - 4", explicacion: "Al número original se le resta 4." },
          { pregunta: "¿Qué significa x/2?", opciones: ["El doble de x", "La mitad de x", "El cuadrado de x", "x más 2"], correcta: "La mitad de x", explicacion: "Dividir entre 2 es obtener la mitad." },
          { pregunta: "Traduce: 'La suma de dos números diferentes'", opciones: ["2x", "x + y", "x²", "x - y"], correcta: "x + y", explicacion: "Usamos variables diferentes para números distintos." },
          { pregunta: "¿Cómo se escribe 'el cuadrado de la suma de a y b'?", opciones: ["a² + b²", "(a + b)²", "a + b²", "2(a + b)"], correcta: "(a + b)²", explicacion: "Primero la suma, luego el cuadrado de todo." }
        ]
      },
      {
        id: "pm2-2",
        proposito: "Propósito formativo 2",
        titulo: "Expresiones Algebraicas y Términos Semejantes",
        icono: "🔢",
        imagen: "linear-gradient(135deg, #14b8a6, #0d9488)",
        contenido: `
          <h4>Elementos de un término</h4>
          <ul>
            <li><strong>Coeficiente:</strong> 3x² → 3</li>
            <li><strong>Literal:</strong> 3x² → x</li>
            <li><strong>Exponente:</strong> 3x² → 2</li>
          </ul>
          <h4>Reducción de términos semejantes</h4>
          <div class="ejemplo">
            <strong>Ejemplo:</strong> 3x + 5x - 2x = 6x
          </div>
        `,
        actividades: [
          { pregunta: "En el término 5y³, ¿cuál es el coeficiente?", opciones: ["y", "3", "5", "5y"], correcta: "5", explicacion: "Es el número que multiplica a la variable." },
          { pregunta: "Simplifica: 4x + 2x", opciones: ["6x", "8x", "6x²", "2x"], correcta: "6x", explicacion: "Se suman los coeficientes (4+2=6)." },
          { pregunta: "¿Cuáles son términos semejantes?", opciones: ["3x y 3y", "2x² y 5x²", "4x y 4", "x y x²"], correcta: "2x² y 5x²", explicacion: "Tienen la misma variable y exponente." },
          { pregunta: "Simplifica: 7a - 3a + a", opciones: ["5a", "4a", "11a", "10a"], correcta: "5a", explicacion: "7 - 3 + 1 = 5." },
          { pregunta: "En 8m², el exponente es:", opciones: ["8", "m", "2", "10"], correcta: "2", explicacion: "Es la potencia a la que está elevada la variable." }
        ]
      },
      {
        id: "pmx2-1",
        proposito: "Propósito formativo 3",
        titulo: "Operaciones con Monomios y Binomios",
        icono: "✖️",
        imagen: "linear-gradient(135deg, #2563eb, #7c3aed)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Con monomios se opera igual que con números, solo que las letras guardan su lugar. Para sumar deben ser <strong>semejantes</strong>; para multiplicar, no.
          </div>

          <figure class="diagrama-quimica">
            <img src="images/matematicas/monomio-partes.svg" alt="Partes del monomio menos siete x al cubo" loading="lazy">
            <figcaption>Un monomio tiene signo, coeficiente, variable (parte literal) y exponente. Su grado es la suma de los exponentes de sus letras.</figcaption>
          </figure>

          <h4>Suma y resta</h4>
          <div class="formula">
5x² + 3x² = 8x²<br>
7y − 10y = −3y<br>
4ab + 2a − ab = 3ab + 2a (no se pueden juntar ab y a)
          </div>

          <h4>Multiplicación: coeficientes por coeficientes, exponentes se suman</h4>
          <div class="formula">
(3x²)(4x³) = 12x⁵<br>
(−2a²b)(5ab³) = −10a³b⁴<br>
2x(x + 5) = 2x² + 10x
          </div>

          <h4>División: coeficientes se dividen, exponentes se restan</h4>
          <div class="formula">
12x⁵ ÷ 3x² = 4x³<br>
(−15a⁴b²) ÷ (5ab) = −3a³b
          </div>

          <h4>Con fracciones</h4>
          <div class="formula">
½x + ⅓x = 3/6 x + 2/6 x = 5/6 x<br>
(⅔x)(¾x²) = 6/12 x³ = ½x³
          </div>

          <h4>Factorizar un monomio: el factor común</h4>
          <p>Es lo contrario de multiplicar: se busca lo que se repite en todos los términos.</p>
          <div class="formula">6x² + 9x = 3x(2x + 3)</div>

          <h4>✍️ Ejemplo práctico</h4>
          <div class="ejemplo">
            Un terreno rectangular en Cintalapa mide <strong>3x</strong> de largo y <strong>2x</strong> de ancho.<br>
            • Perímetro: 3x + 2x + 3x + 2x = <strong>10x</strong>.<br>
            • Área: (3x)(2x) = <strong>6x²</strong>.<br>
            Si x = 10 m, el perímetro es 100 m (lo que mide el alambre del cercado) y el área es 600 m².
          </div>
        `,
        actividades: [
          { pregunta: "(3x²)(4x³) =", opciones: ["12x⁵", "12x⁶", "7x⁵", "7x⁶"], correcta: "12x⁵", explicacion: "Se multiplican los coeficientes (3 × 4 = 12) y se suman los exponentes (2 + 3 = 5)." },
          { pregunta: "15a⁴ ÷ 5a =", opciones: ["3a³", "3a⁴", "10a³", "3a⁵"], correcta: "3a³", explicacion: "15 ÷ 5 = 3 y los exponentes se restan: 4 − 1 = 3." },
          { pregunta: "7y − 10y =", opciones: ["−3y", "3y", "−17y", "−3y²"], correcta: "−3y", explicacion: "Son semejantes: 7 − 10 = −3 y la parte literal no cambia." },
          { pregunta: "2x(x + 5) =", opciones: ["2x² + 10x", "2x + 10", "2x² + 5", "x² + 10x"], correcta: "2x² + 10x", explicacion: "Se distribuye: 2x · x = 2x² y 2x · 5 = 10x." },
          { pregunta: "Factoriza 6x² + 9x:", opciones: ["3x(2x + 3)", "3(2x² + 9x)", "6x(x + 9)", "9x(6x + 1)"], correcta: "3x(2x + 3)", explicacion: "El mayor factor común es 3x: 6x² ÷ 3x = 2x y 9x ÷ 3x = 3." }
        ]
      },
      {
        id: "pm2-3",
        proposito: "Propósito formativo 4",
        titulo: "Operaciones con Polinomios",
        icono: "🧮",
        imagen: "linear-gradient(135deg, #f97316, #ea580c)",
        contenido: `
          <h4>Suma y resta</h4>
          <p>Se agrupan términos semejantes</p>
          <h4>Multiplicación</h4>
          <p>Se aplica la propiedad distributiva</p>
          <h4>Productos notables</h4>
          <div class="formula">
(a + b)² = a² + 2ab + b²<br>
(a - b)² = a² - 2ab + b²<br>
(a + b)(a - b) = a² - b²
          </div>
        `,
        actividades: [
          { pregunta: "Desarrolla: (x + 3)²", opciones: ["x² + 9", "x² + 6x + 9", "x² + 3x + 9", "x² - 6x + 9"], correcta: "x² + 6x + 9", explicacion: "Es un binomio al cuadrado." },
          { pregunta: "Desarrolla: (x - 2)(x + 2)", opciones: ["x² - 4", "x² + 4", "x² - 4x + 4", "x² + 4x + 4"], correcta: "x² - 4", explicacion: "Es una diferencia de cuadrados." },
          { pregunta: "Multiplica: 2x(x + 3)", opciones: ["2x² + 3", "2x² + 6x", "2x + 6", "x² + 6x"], correcta: "2x² + 6x", explicacion: "Se distribuye el 2x." },
          { pregunta: "El producto (a + b)(a - b) se llama:", opciones: ["Binomio al cuadrado", "Diferencia de cuadrados", "Trinomio", "Factor común"], correcta: "Diferencia de cuadrados", explicacion: "Da como resultado a² - b²." },
          { pregunta: "Suma los polinomios: (2x + 3) + (x - 1)", opciones: ["3x + 2", "3x + 4", "2x + 2", "x + 2"], correcta: "3x + 2", explicacion: "2x + x = 3x; 3 - 1 = 2." }
        ]
      },
      {
        id: "pmx2-2",
        proposito: "Propósito formativo 4",
        titulo: "Factorización de Polinomios",
        icono: "🧩",
        imagen: "linear-gradient(135deg, #db2777, #9333ea)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Factorizar es «deshacer» una multiplicación: escribir un polinomio como producto de factores más sencillos. Es la clave para resolver ecuaciones cuadráticas en el siguiente semestre.
          </div>

          <figure class="diagrama-quimica">
            <img src="images/matematicas/modelo-area-binomio.svg" alt="Modelo de áreas de x más 3 por x más 2" loading="lazy">
            <figcaption>El rectángulo de área x² + 5x + 6 tiene lados (x + 3) y (x + 2). Factorizar es encontrar esos lados.</figcaption>
          </figure>

          <h4>Casos principales</h4>
          <table class="tabla-estudio">
            <tr><th>Caso</th><th>Forma</th><th>Ejemplo</th></tr>
            <tr><td>Factor común</td><td>ab + ac = a(b + c)</td><td>4x² − 8x = 4x(x − 2)</td></tr>
            <tr><td>Diferencia de cuadrados</td><td>a² − b² = (a + b)(a − b)</td><td>x² − 25 = (x + 5)(x − 5)</td></tr>
            <tr><td>Trinomio cuadrado perfecto</td><td>a² ± 2ab + b² = (a ± b)²</td><td>x² + 6x + 9 = (x + 3)²</td></tr>
            <tr><td>Trinomio x² + bx + c</td><td>(x + m)(x + n) con m·n = c y m + n = b</td><td>x² + 5x + 6 = (x + 2)(x + 3)</td></tr>
          </table>

          <h4>¿Cómo reconozco un trinomio cuadrado perfecto?</h4>
          <ol>
            <li>El primer y el último término son cuadrados: x² y 9 = 3².</li>
            <li>El término de en medio es el doble del producto de sus raíces: 2 · x · 3 = 6x. ✔️</li>
          </ol>

          <h4>Trinomio x² + bx + c paso a paso</h4>
          <div class="formula">
x² + 7x + 12<br>
Busca dos números que multiplicados den 12 y sumados den 7 → 3 y 4<br>
x² + 7x + 12 = (x + 3)(x + 4)
          </div>
          <p>Si c es negativo, los números tienen signos distintos: x² − x − 6 = (x − 3)(x + 2).</p>

          <h4>✍️ Ejemplo práctico</h4>
          <div class="ejemplo">
            Un huerto escolar tiene un área de <strong>x² + 5x + 6</strong> metros cuadrados. Al factorizar, sus lados miden <strong>(x + 2)</strong> y <strong>(x + 3)</strong> metros. Si x = 7, el huerto mide 9 m por 10 m = 90 m². Comprueba: 49 + 35 + 6 = 90. ✔️
          </div>

          <h4>🛠️ Manos a la obra</h4>
          <p>Recorta en cartulina un cuadrado grande (x²), tiras (x) y cuadritos (1). Arma un rectángulo con 1 cuadrado, 5 tiras y 6 cuadritos: tus lados serán los factores. Puedes practicar también con el simulador <em>Modelo de Áreas: Álgebra</em>.</p>
        `,
        actividades: [
          { pregunta: "Factoriza x² − 25:", opciones: ["(x + 5)(x − 5)", "(x − 5)²", "(x + 25)(x − 1)", "(x + 5)²"], correcta: "(x + 5)(x − 5)", explicacion: "Es una diferencia de cuadrados: x² − 5² = (x + 5)(x − 5)." },
          { pregunta: "Factoriza x² + 7x + 12:", opciones: ["(x + 3)(x + 4)", "(x + 2)(x + 6)", "(x + 12)(x + 1)", "(x + 7)(x + 12)"], correcta: "(x + 3)(x + 4)", explicacion: "3 × 4 = 12 y 3 + 4 = 7." },
          { pregunta: "¿Cuál es un trinomio cuadrado perfecto?", opciones: ["x² + 10x + 25", "x² + 10x + 10", "x² + 5x + 25", "x² + 25"], correcta: "x² + 10x + 25", explicacion: "x² y 25 = 5² son cuadrados y 10x = 2 · x · 5. Es (x + 5)²." },
          { pregunta: "(x + 4)² =", opciones: ["x² + 8x + 16", "x² + 16", "x² + 4x + 16", "x² + 8x + 8"], correcta: "x² + 8x + 16", explicacion: "Cuadrado del primero, más el doble del primero por el segundo, más el cuadrado del segundo." },
          { pregunta: "Un huerto tiene área x² + 5x + 6. Sus lados pueden ser:", opciones: ["(x + 2) y (x + 3)", "(x + 1) y (x + 6)", "(x + 5) y (x + 6)", "x y (x + 5)"], correcta: "(x + 2) y (x + 3)", explicacion: "(x + 2)(x + 3) = x² + 5x + 6. En cambio, (x + 1)(x + 6) da x² + 7x + 6." }
        ]
      },
      {
        id: "pmx2-3",
        proposito: "Propósito formativo 5",
        titulo: "El Álgebra en tu Vida Diaria",
        icono: "🛒",
        imagen: "linear-gradient(135deg, #16a34a, #0d9488)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Una fórmula con letras sirve para muchos casos a la vez: cambias el número y ya tienes la respuesta. Así se usa el álgebra en el dinero, la cocina y las compras.
          </div>

          <h4>1. Presupuesto personal</h4>
          <div class="formula">Ahorro = Ingresos − Gastos &nbsp;→&nbsp; A = I − G</div>
          <table class="tabla-estudio">
            <tr><th>Concepto (mensual)</th><th>Cantidad</th></tr>
            <tr><td>Ingreso: beca + trabajo de fin de semana</td><td>$2 400</td></tr>
            <tr><td>Pasajes</td><td>$900</td></tr>
            <tr><td>Comida en el plantel</td><td>$600</td></tr>
            <tr><td>Datos para el celular</td><td>$200</td></tr>
            <tr><td>Copias y material</td><td>$150</td></tr>
            <tr><td><strong>Ahorro</strong></td><td><strong>2 400 − 1 850 = $550</strong></td></tr>
          </table>
          <p>Si quieres juntar $3 300 para una calculadora científica y unos tenis, ¿cuántos meses necesitas? 550m = 3 300 → <strong>m = 6 meses</strong>.</p>

          <h4>2. Ajustar una receta</h4>
          <div class="formula">Cantidad nueva = Cantidad original × (personas nuevas ÷ personas originales)</div>
          <div class="ejemplo">
            Un caldo de shuti para 4 personas lleva 300 g de shuti (caracol de río). Para 10 personas: 300 × 10/4 = <strong>750 g</strong>. El factor 10/4 = 2.5 se aplica a todos los ingredientes.
          </div>

          <h4>3. Descuentos e IVA</h4>
          <div class="formula">
Precio con descuento: P<sub>f</sub> = P(1 − d)<br>
Precio con IVA (16 %): P<sub>f</sub> = 1.16P<br>
Precio original: P = P<sub>f</sub> ÷ (1 − d)
          </div>
          <div class="ejemplo">
            • Unos tenis de $800 con 25 % de descuento: 800(1 − 0.25) = 800 × 0.75 = <strong>$600</strong>.<br>
            • Pagaste $360 por una mochila con 20 % de descuento. ¿Cuánto costaba? 0.8P = 360 → P = 360 ÷ 0.8 = <strong>$450</strong>.
          </div>

          <h4>🛠️ Manos a la obra</h4>
          <p>Haz tu propio presupuesto de un mes con tus ingresos y gastos reales. Escribe la ecuación de tu ahorro y calcula cuántos meses necesitas para comprar algo que quieras.</p>
        `,
        actividades: [
          { pregunta: "Ganas $2 400 al mes y gastas $1 850. ¿Cuánto ahorras?", opciones: ["$550", "$650", "$4 250", "$450"], correcta: "$550", explicacion: "A = I − G = 2 400 − 1 850 = 550." },
          { pregunta: "Una receta para 4 personas usa 300 g de frijol. ¿Cuánto se necesita para 10 personas?", opciones: ["750 g", "600 g", "1 200 g", "3 000 g"], correcta: "750 g", explicacion: "300 × 10/4 = 300 × 2.5 = 750 g." },
          { pregunta: "Unos tenis cuestan $800 y tienen 25 % de descuento. ¿Cuánto pagas?", opciones: ["$600", "$775", "$200", "$640"], correcta: "$600", explicacion: "800 × (1 − 0.25) = 800 × 0.75 = 600." },
          { pregunta: "Pagaste $360 por una mochila con 20 % de descuento. ¿Cuál era el precio original?", opciones: ["$450", "$432", "$380", "$300"], correcta: "$450", explicacion: "0.8P = 360, entonces P = 360 ÷ 0.8 = 450." },
          { pregunta: "¿Qué expresión da el precio con IVA (16 %) de un artículo que cuesta P?", opciones: ["1.16P", "P + 16", "0.16P", "P − 0.16P"], correcta: "1.16P", explicacion: "P + 0.16P = 1.16P. La expresión 0.16P es solo el impuesto." }
        ]
      },
      {
        id: "pmx2-4",
        proposito: "Propósito formativo 6",
        titulo: "Igualdad, Identidad y sus Propiedades",
        icono: "🟰",
        imagen: "linear-gradient(135deg, #0284c7, #4f46e5)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Una ecuación es como una balanza en equilibrio: lo que hagas de un lado, hazlo también del otro.
          </div>

          <h4>Igualdad, identidad y ecuación</h4>
          <table class="tabla-estudio">
            <tr><th>Tipo</th><th>¿Cuándo es verdadera?</th><th>Ejemplo</th></tr>
            <tr><td>Igualdad numérica</td><td>Siempre (no tiene letras)</td><td>3 + 4 = 7</td></tr>
            <tr><td>Identidad algebraica</td><td>Para <strong>todos</strong> los valores de la letra</td><td>2(x + 1) = 2x + 2</td></tr>
            <tr><td>Ecuación</td><td>Solo para <strong>algunos</strong> valores (las soluciones)</td><td>2x + 1 = 7 → solo si x = 3</td></tr>
          </table>

          <h4>Propiedades de la igualdad</h4>
          <table class="tabla-estudio">
            <tr><th>Propiedad</th><th>Enunciado</th><th>Ejemplo</th></tr>
            <tr><td>Reflexiva</td><td>a = a</td><td>x + 2 = x + 2</td></tr>
            <tr><td>Simétrica</td><td>Si a = b, entonces b = a</td><td>Si 12 = 3x, entonces 3x = 12</td></tr>
            <tr><td>Transitiva</td><td>Si a = b y b = c, entonces a = c</td><td>Si x = y y y = 7, entonces x = 7</td></tr>
            <tr><td>Uniformidad</td><td>Si a = b, entonces a + c = b + c y a · c = b · c</td><td>Si x − 5 = 3, entonces x − 5 + 5 = 3 + 5</td></tr>
          </table>
          <p>La <strong>uniformidad</strong> es la propiedad que usamos para despejar: sumar, restar, multiplicar o dividir lo mismo en ambos lados.</p>

          <h4>✍️ Ejemplo práctico: la báscula del mercado</h4>
          <div class="ejemplo">
            En la báscula hay 3 costalitos iguales de frijol más una pesa de 2 kg de un lado, y 17 kg del otro. Plantea y resuelve:<br>
            3c + 2 = 17<br>
            3c + 2 − 2 = 17 − 2 → 3c = 15 (uniformidad: restamos 2)<br>
            3c ÷ 3 = 15 ÷ 3 → <strong>c = 5 kg</strong> (uniformidad: dividimos entre 3)<br>
            Comprobación: 3(5) + 2 = 17. ✔️
          </div>

          <h4>🛠️ Manos a la obra</h4>
          <p>Con una regla apoyada en un lápiz y monedas iguales construye una balanza. Pon «incógnitas» (bolsitas con monedas escondidas) de un lado y monedas sueltas del otro, y descubre cuántas hay en cada bolsita usando solo la uniformidad.</p>
        `,
        actividades: [
          { pregunta: "¿Cuál de estas expresiones es una identidad?", opciones: ["2(x + 1) = 2x + 2", "2x + 1 = 7", "x² = 9", "3x = 12"], correcta: "2(x + 1) = 2x + 2", explicacion: "Se cumple para cualquier valor de x. Las demás solo se cumplen para ciertos valores." },
          { pregunta: "«Si a = b, entonces b = a» es la propiedad:", opciones: ["Simétrica", "Reflexiva", "Transitiva", "Uniformidad"], correcta: "Simétrica", explicacion: "La simétrica permite intercambiar los miembros de una igualdad." },
          { pregunta: "Si x = y y y = 7, entonces x = 7. ¿Qué propiedad se usó?", opciones: ["Transitiva", "Simétrica", "Reflexiva", "Conmutativa"], correcta: "Transitiva", explicacion: "Si dos cosas son iguales a una tercera, son iguales entre sí." },
          { pregunta: "Si x + 5 = 12 y restas 5 en ambos lados, obtienes:", opciones: ["x = 7", "x = 17", "x = 12", "x = 5"], correcta: "x = 7", explicacion: "Por uniformidad: x + 5 − 5 = 12 − 5, es decir, x = 7." },
          { pregunta: "En una báscula hay 3 costales iguales más 2 kg de un lado y 17 kg del otro. ¿Cuánto pesa cada costal?", opciones: ["5 kg", "6 kg", "3 kg", "15 kg"], correcta: "5 kg", explicacion: "3c + 2 = 17 → 3c = 15 → c = 5 kg." }
        ]
      },
      {
        id: "pm2-4",
        proposito: "Propósito formativo 6",
        titulo: "Ecuaciones de Primer Grado",
        icono: "⚖️",
        imagen: "linear-gradient(135deg, #eab308, #ca8a04)",
        contenido: `
          <div class="formula">ax + b = c → x = (c - b) / a</div>
          <h4>Pasos para resolver</h4>
          <ol>
            <li>Eliminar paréntesis y denominadores</li>
            <li>Agrupar términos semejantes</li>
            <li>Despejar la incógnita</li>
            <li>Verificar la solución</li>
          </ol>
        `,
        actividades: [
          { pregunta: "Resuelve: x + 5 = 12", opciones: ["5", "7", "17", "-7"], correcta: "7", explicacion: "x = 12 - 5 = 7." },
          { pregunta: "Resuelve: 3x = 15", opciones: ["3", "5", "12", "45"], correcta: "5", explicacion: "x = 15 / 3 = 5." },
          { pregunta: "Resuelve: 2x - 4 = 10", opciones: ["3", "5", "7", "10"], correcta: "7", explicacion: "2x = 14, x = 7." },
          { pregunta: "Resuelve: x/2 + 1 = 4", opciones: ["2", "4", "6", "8"], correcta: "6", explicacion: "x/2 = 3, x = 6." },
          { pregunta: "Si 2x + 3 = x + 7, ¿cuánto vale x?", opciones: ["4", "3", "10", "5"], correcta: "4", explicacion: "2x - x = 7 - 3 → x = 4." }
        ]
      },
      {
        id: "pm2-5",
        proposito: "Complementario · Sistemas de ecuaciones (se profundiza en Pensamiento Matemático III)",
        titulo: "Sistemas de Ecuaciones Lineales",
        icono: "🔗",
        imagen: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
        contenido: `
          <h4>Métodos de solución</h4>
          <ol>
            <li>Sustitución</li>
            <li>Eliminación (suma y resta)</li>
            <li>Igualación</li>
            <li>Método gráfico</li>
          </ol>
          <div class="formula">
a₁x + b₁y = c₁<br>
a₂x + b₂y = c₂
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál NO es un método para resolver sistemas de ecuaciones?", opciones: ["Sustitución", "Eliminación", "Igualación", "Factorización"], correcta: "Factorización", explicacion: "La factorización es para polinomios." },
          { pregunta: "En el método de sustitución, se hace:", opciones: ["Sumar ecuaciones", "Despejar una variable y reemplazarla", "Graficar", "Multiplicar todo"], correcta: "Despejar una variable y reemplazarla", explicacion: "Se sustituye en la otra ecuación." },
          { pregunta: "¿Qué representa gráficamente un sistema 2x2?", opciones: ["Una parábola", "Dos rectas", "Un círculo", "Un punto"], correcta: "Dos rectas", explicacion: "La solución es el punto donde se cruzan." },
          { pregunta: "Si un sistema no tiene solución, las rectas son:", opciones: ["Perpendiculares", "Paralelas", "Iguales", "Curvas"], correcta: "Paralelas", explicacion: "Nunca se cruzan." },
          { pregunta: "Método que suma o resta las ecuaciones:", opciones: ["Sustitución", "Igualación", "Eliminación", "Gráfico"], correcta: "Eliminación", explicacion: "Busca eliminar una variable." }
        ]
      }
    ]
  },

  3: {
    titulo: "Pensamiento Matemático III",
    subtitulo: "Pensamiento algebraico e introducción a geometría plana",
    semestre: "Tercer Semestre",
    clase: "s3",
    icono: "📐",
    descripcion: "Ecuaciones lineales y sistemas, ecuaciones cuadráticas, modelos financieros y de crecimiento, y geometría plana.",
    meta: "Aplique el lenguaje algebraico como herramienta para describir situaciones de la realidad y expresar relaciones matemáticas, y mediante procesos de intuición y razonamiento, logre explicar y resolver problemas.",
    contexto: "La geometría está en las construcciones, en la naturaleza y en el arte de tu comunidad.",
    temas: [
      {
        id: "pmx3-1",
        proposito: "Propósito formativo 1",
        titulo: "Ecuaciones Lineales: Plantear y Resolver",
        icono: "🔍",
        imagen: "linear-gradient(135deg, #2563eb, #0891b2)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Lo difícil de una ecuación casi nunca es despejar: es <strong>traducir el problema</strong> a lenguaje algebraico. Lee, nombra la incógnita, plantea, resuelve y comprueba.
          </div>

          <h4>Partes de una ecuación</h4>
          <div class="formula">
3x + 4 = 2x + 9<br>
1er miembro = 3x + 4 · 2º miembro = 2x + 9<br>
incógnita: x · términos: 3x, 4, 2x, 9 · coeficientes: 3 y 2
          </div>
          <p>Una ecuación es <strong>lineal</strong> (de primer grado) cuando la incógnita tiene exponente 1. Su <strong>forma estándar</strong> es <strong>ax + b = 0</strong>, con a ≠ 0.</p>

          <h4>Procedimiento</h4>
          <div class="formula">
3(x − 2) + 4 = 2x + 7<br>
3x − 6 + 4 = 2x + 7 &nbsp;&nbsp;(quitar paréntesis)<br>
3x − 2 = 2x + 7 &nbsp;&nbsp;(reducir)<br>
3x − 2x = 7 + 2 &nbsp;&nbsp;(agrupar)<br>
x = 9<br>
Comprobación: 3(7) + 4 = 25 y 18 + 7 = 25 ✔️
          </div>
          <p>Si hay fracciones, multiplica toda la ecuación por el mcm de los denominadores: x/2 + x/3 = 10 → 3x + 2x = 60 → x = 12.</p>

          <h4>Del problema a la ecuación</h4>
          <table class="tabla-estudio">
            <tr><th>Problema</th><th>Ecuación</th><th>Solución</th></tr>
            <tr><td>La suma de tres números consecutivos es 87.</td><td>x + (x + 1) + (x + 2) = 87</td><td>x = 28 → 28, 29 y 30</td></tr>
            <tr><td>La edad de Juan es el triple de la de su hermana, y juntos suman 48 años.</td><td>x + 3x = 48</td><td>x = 12 → 12 y 36 años</td></tr>
            <tr><td>El perímetro de un corral rectangular es 50 m y el largo mide 5 m más que el ancho.</td><td>2x + 2(x + 5) = 50</td><td>x = 10 → 10 m × 15 m</td></tr>
          </table>

          <h4>✍️ Ejemplo práctico en Chiapas</h4>
          <div class="ejemplo">
            Doña Rosa vende tostadas en el mercado de San Cristóbal. Gana $5 por cada tostada y gastó $120 en material. ¿Cuántas debe vender para tener $380 de ganancia?<br>
            5x − 120 = 380 → 5x = 500 → <strong>x = 100 tostadas</strong>.
          </div>
        `,
        actividades: [
          { pregunta: "Resuelve 4x − 7 = 13:", opciones: ["5", "1.5", "20", "6"], correcta: "5", explicacion: "4x = 20, entonces x = 5. Comprobación: 4(5) − 7 = 13." },
          { pregunta: "Resuelve 3(x − 2) = 2x + 5:", opciones: ["11", "7", "3", "−1"], correcta: "11", explicacion: "3x − 6 = 2x + 5, entonces x = 11." },
          { pregunta: "La forma estándar de una ecuación lineal es:", opciones: ["ax + b = 0", "ax² + bx + c = 0", "y = mx²", "a/x = b"], correcta: "ax + b = 0", explicacion: "Es de primer grado: la incógnita tiene exponente 1." },
          { pregunta: "La suma de tres números consecutivos es 87. ¿Cuál es el menor?", opciones: ["28", "29", "27", "30"], correcta: "28", explicacion: "3x + 3 = 87, entonces x = 28. Los números son 28, 29 y 30." },
          { pregunta: "Doña Rosa gana $5 por tostada y gastó $120 en material. ¿Cuántas debe vender para tener $380 de ganancia?", opciones: ["100", "76", "52", "500"], correcta: "100", explicacion: "5x − 120 = 380 → 5x = 500 → x = 100." }
        ]
      },
      {
        id: "pmx3-2",
        proposito: "Propósito formativo 2",
        titulo: "Ecuaciones con Dos Incógnitas y la Recta",
        icono: "📍",
        imagen: "linear-gradient(135deg, #0d9488, #2563eb)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Una ecuación con dos incógnitas tiene <strong>infinitas soluciones</strong>. Si las dibujas todas, forman una <strong>línea recta</strong>.
          </div>

          <h4>El plano cartesiano</h4>
          <p>Lo inventó René Descartes en el siglo XVII. Son dos rectas numéricas perpendiculares: el eje <strong>X</strong> (horizontal) y el eje <strong>Y</strong> (vertical). Se cruzan en el <strong>origen (0, 0)</strong> y dividen el plano en cuatro cuadrantes. Cada punto se escribe como un par (x, y).</p>
          <figure class="diagrama-quimica">
            <img src="images/matematicas/plano-cartesiano.svg" alt="Plano cartesiano con cuadrantes y puntos" loading="lazy">
            <figcaption>Para ubicar P(3, 2) avanzas 3 a la derecha y subes 2. Q(−4, −2) está en el tercer cuadrante.</figcaption>
          </figure>

          <h4>Ecuación lineal con dos incógnitas</h4>
          <p>Tiene la forma <strong>ax + by = c</strong>. Por ejemplo, x + y = 10 se cumple con (4, 6), (7, 3), (−2, 12)… Si despejas y obtienes la <strong>ecuación de la recta</strong>:</p>
          <div class="formula">y = mx + b &nbsp;&nbsp; m = pendiente (inclinación) · b = ordenada al origen (dónde corta al eje Y)</div>

          <h4>Graficar con una tabla de valores</h4>
          <table class="tabla-estudio">
            <tr><th>x</th><td>−1</td><td>0</td><td>1</td><td>2</td><td>3</td></tr>
            <tr><th>y = 2x − 1</th><td>−3</td><td>−1</td><td>1</td><td>3</td><td>5</td></tr>
          </table>
          <p>Ubicas los puntos y los unes: con dos puntos basta para trazar una recta.</p>
          <figure class="diagrama-quimica">
            <img src="images/matematicas/recta-pendiente.svg" alt="Recta con su pendiente y ordenada al origen" loading="lazy">
            <figcaption>La pendiente es la elevación entre el avance. Si m es positiva la recta sube; si es negativa, baja.</figcaption>
          </figure>

          <h4>✍️ Ejemplo práctico</h4>
          <div class="ejemplo">
            Un mototaxi en Comitán cobra $10 de banderazo más $5 por kilómetro: <strong>y = 5x + 10</strong>.<br>
            • 2 km → y = 5(2) + 10 = $20<br>
            • 6 km → y = 5(6) + 10 = $40<br>
            La pendiente (5) es el costo por kilómetro y la ordenada (10) es lo que pagas aunque no avances.
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál par es solución de x + y = 10?", opciones: ["(4, 6)", "(5, 6)", "(10, 10)", "(3, 8)"], correcta: "(4, 6)", explicacion: "4 + 6 = 10. Los demás pares suman 11 o 20." },
          { pregunta: "¿En qué cuadrante está el punto (−3, 2)?", opciones: ["II", "I", "III", "IV"], correcta: "II", explicacion: "x negativa e y positiva corresponde al segundo cuadrante." },
          { pregunta: "En y = 3x + 2, la pendiente es:", opciones: ["3", "2", "5", "3x"], correcta: "3", explicacion: "En y = mx + b, la pendiente es el coeficiente de x." },
          { pregunta: "Si y = 2x − 1, ¿cuánto vale y cuando x = 4?", opciones: ["7", "8", "9", "3"], correcta: "7", explicacion: "y = 2(4) − 1 = 8 − 1 = 7." },
          { pregunta: "Un mototaxi cobra $10 de banderazo más $5 por kilómetro. ¿Qué ecuación lo representa?", opciones: ["y = 5x + 10", "y = 10x + 5", "y = 15x", "y = 5x − 10"], correcta: "y = 5x + 10", explicacion: "El costo por km (5) multiplica a x y el banderazo (10) es fijo." }
        ]
      },
      {
        id: "pmx3-3",
        proposito: "Propósito formativo 3",
        titulo: "Métodos para Resolver Sistemas de Ecuaciones",
        icono: "🎯",
        imagen: "linear-gradient(135deg, #ea580c, #db2777)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Un sistema de dos ecuaciones lineales busca el punto que cumple las dos a la vez: el lugar donde se <strong>cruzan</strong> las dos rectas.
          </div>

          <h4>Problema</h4>
          <div class="ejemplo">
            En una tienda de Tapachula, 2 kg de café y 1 kg de cacao cuestan $520, y 1 kg de café y 3 kg de cacao cuestan $560. ¿Cuánto cuesta el kilo de cada uno?<br>
            2c + k = 520<br>
            c + 3k = 560
          </div>

          <h4>1. Sustitución</h4>
          <div class="formula">
De la 1ª: k = 520 − 2c<br>
En la 2ª: c + 3(520 − 2c) = 560 → c + 1 560 − 6c = 560 → −5c = −1 000 → c = 200<br>
k = 520 − 400 = 120 &nbsp;→&nbsp; café $200/kg y cacao $120/kg
          </div>

          <h4>2. Igualación</h4>
          <p>Despeja la <strong>misma</strong> incógnita en las dos ecuaciones e iguala: k = 520 − 2c y k = (560 − c)/3, entonces 520 − 2c = (560 − c)/3.</p>

          <h4>3. Reducción (suma y resta)</h4>
          <div class="formula">
Multiplica la 1ª por −3: −6c − 3k = −1 560<br>
Suma con la 2ª: c + 3k = 560<br>
−5c = −1 000 → c = 200
          </div>

          <h4>4. Método gráfico</h4>
          <figure class="diagrama-quimica">
            <img src="images/matematicas/sistema-ecuaciones.svg" alt="Dos rectas que se cortan en el punto tres dos" loading="lazy">
            <figcaption>x + y = 5 y x − y = 1 se cortan en (3, 2): esa es la solución del sistema.</figcaption>
          </figure>

          <h4>5. Determinantes (regla de Cramer)</h4>
          <div class="formula">
a₁x + b₁y = c₁ &nbsp;·&nbsp; a₂x + b₂y = c₂<br>
Δ = a₁b₂ − a₂b₁ &nbsp;&nbsp; Δx = c₁b₂ − c₂b₁ &nbsp;&nbsp; Δy = a₁c₂ − a₂c₁<br>
x = Δx/Δ &nbsp;&nbsp; y = Δy/Δ<br><br>
Para x + y = 5 y x − y = 1:<br>
Δ = (1)(−1) − (1)(1) = −2 · Δx = (5)(−1) − (1)(1) = −6 · Δy = (1)(1) − (1)(5) = −4<br>
x = −6/−2 = 3 &nbsp;&nbsp; y = −4/−2 = 2
          </div>

          <h4>Tipos de sistemas</h4>
          <table class="tabla-estudio">
            <tr><th>Las rectas…</th><th>Soluciones</th><th>Δ</th></tr>
            <tr><td>se cortan</td><td>una (compatible determinado)</td><td>Δ ≠ 0</td></tr>
            <tr><td>son paralelas</td><td>ninguna (incompatible)</td><td>Δ = 0</td></tr>
            <tr><td>son la misma</td><td>infinitas (indeterminado)</td><td>Δ = 0</td></tr>
          </table>
        `,
        actividades: [
          { pregunta: "Resuelve el sistema x + y = 5, x − y = 1:", opciones: ["(3, 2)", "(2, 3)", "(4, 1)", "(5, 0)"], correcta: "(3, 2)", explicacion: "Sumando las ecuaciones: 2x = 6, x = 3, y = 2. Comprueba: 3 − 2 = 1." },
          { pregunta: "Si al graficar un sistema las rectas son paralelas, el sistema:", opciones: ["No tiene solución", "Tiene una solución", "Tiene infinitas soluciones", "Tiene dos soluciones"], correcta: "No tiene solución", explicacion: "Las rectas paralelas nunca se cruzan." },
          { pregunta: "Para 2x + 3y = 7 y x − y = 1, el determinante Δ = a₁b₂ − a₂b₁ vale:", opciones: ["−5", "5", "−1", "1"], correcta: "−5", explicacion: "Δ = (2)(−1) − (1)(3) = −2 − 3 = −5." },
          { pregunta: "¿Qué método suma o resta las ecuaciones para eliminar una incógnita?", opciones: ["Reducción", "Sustitución", "Igualación", "Gráfico"], correcta: "Reducción", explicacion: "También se llama método de eliminación o de suma y resta." },
          { pregunta: "2 kg de café y 1 kg de cacao cuestan $520; 1 kg de café y 3 kg de cacao cuestan $560. ¿Cuánto cuesta el kilo de café?", opciones: ["$200", "$120", "$260", "$180"], correcta: "$200", explicacion: "Resolviendo el sistema: c = 200 y k = 120. Comprueba: 200 + 360 = 560." }
        ]
      },
      {
        id: "pm3-1",
        proposito: "Propósito formativo 4",
        titulo: "Ecuaciones Cuadráticas",
        icono: "📊",
        imagen: "linear-gradient(135deg, #f43f5e, #e11d48)",
        contenido: `
          <div class="formula">
ax² + bx + c = 0<br><br>
Fórmula general:<br>
x = [-b ± √(b² - 4ac)] / 2a<br><br>
Discriminante: Δ = b² - 4ac
          </div>
          <h4>Métodos de solución</h4>
          <ol>
            <li>Factorización</li>
            <li>Completar el cuadrado</li>
            <li>Fórmula general</li>
          </ol>
        `,
        actividades: [
          { pregunta: "La forma general de una ecuación cuadrática es:", opciones: ["ax + b = 0", "ax² + bx + c = 0", "ax³ + bx² = 0", "a/x + b = 0"], correcta: "ax² + bx + c = 0", explicacion: "El mayor exponente es 2." },
          { pregunta: "Si el discriminante Δ es 0, ¿cuántas soluciones hay?", opciones: ["Ninguna", "Una", "Dos", "Infinitas"], correcta: "Una", explicacion: "La parábola toca el eje X en un solo punto." },
          { pregunta: "Resuelve: x² - 9 = 0", opciones: ["x=3", "x=±3", "x=-3", "x=9"], correcta: "x=±3", explicacion: "x² = 9, entonces x = 3 y x = -3." },
          { pregunta: "¿Qué método NO sirve para ecuaciones cuadráticas?", opciones: ["Fórmula general", "Factorización", "Completar cuadrado", "Regla de tres"], correcta: "Regla de tres", explicacion: "La regla de tres es para proporciones." },
          { pregunta: "El discriminante se calcula como:", opciones: ["b² - 4ac", "2a", "-b/2a", "b² + 4ac"], correcta: "b² - 4ac", explicacion: "Indica el número de soluciones reales." }
        ]
      },
      {
        id: "pm3-2",
        proposito: "Propósito formativo 4",
        titulo: "Funciones Cuadráticas",
        icono: "📈",
        imagen: "linear-gradient(135deg, #14b8a6, #0f766e)",
        contenido: `
          <div class="formula">
f(x) = ax² + bx + c<br>
Vértice: (-b/2a, f(-b/2a))
          </div>
          <h4>Concavidad</h4>
          <ul>
            <li>a > 0 → abre arriba (mínimo)</li>
            <li>a < 0 → abre abajo (máximo)</li>
          </ul>
          <div class="ejemplo">
            <strong>Contexto:</strong> Área máxima para cultivos.
          </div>
        `,
        actividades: [
          { pregunta: "Si a > 0 en una parábola, esta abre hacia:", opciones: ["Arriba", "Abajo", "La derecha", "La izquierda"], correcta: "Arriba", explicacion: "Tiene un punto mínimo." },
          { pregunta: "La gráfica de una función cuadrática es una:", opciones: ["Recta", "Parábola", "Circunferencia", "Hipérbola"], correcta: "Parábola", explicacion: "Tiene forma de U." },
          { pregunta: "El vértice de f(x) = x² - 4x + 3 está en x =", opciones: ["2", "-2", "4", "1"], correcta: "2", explicacion: "x = -b/2a = -(-4)/2(1) = 2." },
          { pregunta: "Si una parábola abre hacia abajo, el vértice es un:", opciones: ["Mínimo", "Máximo", "Cero", "Corte"], correcta: "Máximo", explicacion: "Es el punto más alto." },
          { pregunta: "La función f(x) = 2x² es una función:", opciones: ["Lineal", "Cuadrática", "Cúbica", "Exponencial"], correcta: "Cuadrática", explicacion: "El mayor exponente es 2." }
        ]
      },
      {
        id: "pmx3-4",
        proposito: "Propósito formativo 5",
        titulo: "Ecuaciones que Modelan la Vida: Interés y Crecimiento",
        icono: "💰",
        imagen: "linear-gradient(135deg, #15803d, #65a30d)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Las ecuaciones describen el dinero que crece en una cuenta, la población de una ciudad o una epidemia que se propaga. Saber leerlas te ayuda a tomar mejores decisiones.
          </div>

          <h4>1. Interés simple</h4>
          <div class="formula">
I = C · r · t &nbsp;&nbsp;&nbsp; M = C(1 + r · t)<br>
C = capital · r = tasa (en decimal) · t = tiempo · M = monto final
          </div>

          <h4>2. Interés compuesto (los intereses también generan intereses)</h4>
          <div class="formula">M = C(1 + r)ᵗ</div>
          <table class="tabla-estudio">
            <tr><th>$5 000 al 8 % anual</th><th>Simple</th><th>Compuesto</th></tr>
            <tr><td>1 año</td><td>$5 400</td><td>$5 400</td></tr>
            <tr><td>2 años</td><td>$5 800</td><td>$5 832</td></tr>
            <tr><td>3 años</td><td>$6 200</td><td>$6 298.56</td></tr>
          </table>
          <div class="alerta nota-estudio">
            <strong>⚠️ Ojo con los préstamos:</strong> las tarjetas y los préstamos «rápidos» cobran interés compuesto con tasas altas. Una deuda de $2 000 al 5 % mensual se convierte en 2 000 × 1.05¹² ≈ <strong>$3 592</strong> en un año si no pagas nada.
          </div>

          <h4>3. Crecimiento de una población</h4>
          <div class="formula">P = P₀(1 + r)ᵗ</div>
          <div class="ejemplo">
            Chiapas tenía unos 5.54 millones de habitantes en 2020. Si creciera 1.5 % al año, en 10 años tendría: 5.54 × 1.015¹⁰ ≈ 5.54 × 1.16 ≈ <strong>6.43 millones</strong>.
          </div>

          <h4>4. Propagación de una epidemia</h4>
          <p>Si los contagios se duplican cada 3 días: N = N₀ · 2<sup>t/3</sup>. Con 50 casos, en 15 días habría 50 · 2⁵ = <strong>1 600 casos</strong>. Por eso las medidas tempranas son tan importantes.</p>

          <h4>5. Materiales para una construcción</h4>
          <div class="ejemplo">
            • Losa de 6 m × 8 m con 10 cm de grosor: V = 6 × 8 × 0.10 = <strong>4.8 m³ de concreto</strong>.<br>
            • Muro de 10 m × 2.5 m con unos 12.5 blocks por m²: 25 m² × 12.5 ≈ <strong>313 blocks</strong> (más un 5 % de desperdicio ≈ 329).
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es el interés simple de $2 000 al 10 % anual durante 3 años?", opciones: ["$600", "$200", "$2 600", "$662"], correcta: "$600", explicacion: "I = 2 000 × 0.10 × 3 = 600." },
          { pregunta: "Con interés compuesto, $1 000 al 10 % anual durante 2 años se convierten en:", opciones: ["$1 210", "$1 200", "$1 020", "$1 100"], correcta: "$1 210", explicacion: "M = 1 000 × 1.1² = 1 000 × 1.21 = 1 210." },
          { pregunta: "Una población de 1 000 bacterias se duplica cada hora. ¿Cuántas habrá en 3 horas?", opciones: ["8 000", "6 000", "3 000", "4 000"], correcta: "8 000", explicacion: "1 000 × 2³ = 1 000 × 8 = 8 000." },
          { pregunta: "¿Cuántos m³ de concreto lleva una losa de 5 m × 4 m con 0.10 m de grosor?", opciones: ["2 m³", "20 m³", "0.2 m³", "9.1 m³"], correcta: "2 m³", explicacion: "V = 5 × 4 × 0.10 = 2 m³." },
          { pregunta: "La fórmula M = C(1 + r)ᵗ corresponde a:", opciones: ["Interés compuesto", "Interés simple", "Área de un círculo", "Ecuación de la recta"], correcta: "Interés compuesto", explicacion: "El exponente t indica que el interés se acumula sobre el capital y los intereses anteriores." }
        ]
      },
      {
        id: "pmx3-5",
        proposito: "Propósito formativo 6",
        titulo: "Introducción a la Geometría Plana: Ángulos",
        icono: "🧭",
        imagen: "linear-gradient(135deg, #c2410c, #b45309)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> La geometría plana estudia las figuras que se dibujan en una superficie lisa. Hace unos 2 300 años, el griego <strong>Euclides</strong> la organizó en su libro <em>Los Elementos</em>, a partir de unas pocas ideas básicas.
          </div>

          <h4>Conceptos básicos</h4>
          <ul>
            <li><strong>Punto:</strong> una posición sin tamaño (A).</li>
            <li><strong>Recta:</strong> línea infinita en ambas direcciones.</li>
            <li><strong>Segmento:</strong> parte de la recta entre dos puntos (AB).</li>
            <li><strong>Rayo o semirrecta:</strong> tiene origen pero no fin.</li>
            <li><strong>Ángulo:</strong> abertura entre dos rayos con el mismo origen (<strong>vértice</strong>). Los rayos son sus <strong>lados</strong>. Se mide en grados (°) con el transportador.</li>
          </ul>

          <figure class="diagrama-quimica">
            <img src="images/matematicas/angulos-tipos.svg" alt="Ángulos agudo, recto, obtuso y llano" loading="lazy">
            <figcaption>Clasificación de los ángulos según su medida.</figcaption>
          </figure>

          <h4>Parejas de ángulos</h4>
          <table class="tabla-estudio">
            <tr><th>Nombre</th><th>Condición</th><th>Ejemplo</th></tr>
            <tr><td>Complementarios</td><td>suman 90°</td><td>35° y 55°</td></tr>
            <tr><td>Suplementarios</td><td>suman 180°</td><td>110° y 70°</td></tr>
            <tr><td>Opuestos por el vértice</td><td>son iguales</td><td>dos rectas que se cruzan</td></tr>
          </table>

          <h4>Paralelas cortadas por una transversal</h4>
          <p>Los ángulos <strong>correspondientes</strong> y los <strong>alternos internos</strong> son iguales. Por eso, en un techo de dos aguas, las vigas paralelas forman los mismos ángulos con el travesaño.</p>

          <h4>Ángulos en los polígonos</h4>
          <div class="formula">
Triángulo: los ángulos interiores suman 180°<br>
Polígono de n lados: suman (n − 2) × 180°<br>
Cuadrilátero: 360° · Pentágono: 540° · Hexágono: 720°
          </div>

          <h4>✍️ Geometría en los textiles de Chiapas</h4>
          <div class="ejemplo">
            En los huipiles y chalecos de los Altos de Chiapas aparecen <strong>rombos</strong>, grecas y triángulos. En un rombo los ángulos opuestos son iguales y dos ángulos consecutivos son suplementarios: si uno mide 60°, el siguiente mide 120°.
          </div>

          <h4>🛠️ Manos a la obra</h4>
          <p>Dibuja un triángulo cualquiera, recorta sus tres esquinas y júntalas por los vértices. Verás que forman un ángulo llano (180°).</p>
        `,
        actividades: [
          { pregunta: "Un ángulo de 120° es:", opciones: ["Obtuso", "Agudo", "Recto", "Llano"], correcta: "Obtuso", explicacion: "Mide más de 90° y menos de 180°." },
          { pregunta: "¿Cuál es el complemento de 35°?", opciones: ["55°", "145°", "65°", "325°"], correcta: "55°", explicacion: "Los complementarios suman 90°: 90 − 35 = 55." },
          { pregunta: "¿Cuál es el suplemento de 110°?", opciones: ["70°", "250°", "20°", "90°"], correcta: "70°", explicacion: "Los suplementarios suman 180°: 180 − 110 = 70." },
          { pregunta: "¿Cuánto suman los ángulos interiores de un hexágono?", opciones: ["720°", "360°", "540°", "1 080°"], correcta: "720°", explicacion: "(6 − 2) × 180° = 4 × 180° = 720°." },
          { pregunta: "En un triángulo, dos ángulos miden 50° y 60°. ¿Cuánto mide el tercero?", opciones: ["70°", "90°", "110°", "80°"], correcta: "70°", explicacion: "180 − 50 − 60 = 70." }
        ]
      },
      {
        id: "pm3-3",
        proposito: "Propósito formativo 6",
        titulo: "Geometría Plana: Triángulos",
        icono: "🔺",
        imagen: "linear-gradient(135deg, #f59e0b, #d97706)",
        contenido: `
          <h4>Clasificación</h4>
          <ul>
            <li>Por lados: equilátero, isósceles, escaleno</li>
            <li>Por ángulos: acutángulo, rectángulo, obtusángulo</li>
          </ul>
          <div class="formula">
Suma ángulos internos = 180°
          </div>
          <h4>Teorema de Pitágoras</h4>
          <div class="formula">c² = a² + b²</div>
        `,
        actividades: [
          { pregunta: "¿Cuánto suman los ángulos internos de un triángulo?", opciones: ["90°", "180°", "360°", "270°"], correcta: "180°", explicacion: "Es una propiedad fundamental de los triángulos." },
          { pregunta: "Un triángulo con todos sus lados iguales es:", opciones: ["Isósceles", "Escaleno", "Equilátero", "Rectángulo"], correcta: "Equilátero", explicacion: "Equi = igual, latero = lados." },
          { pregunta: "El Teorema de Pitágoras se aplica a triángulos:", opciones: ["Equiláteros", "Rectángulos", "Obtusángulos", "Cualquiera"], correcta: "Rectángulos", explicacion: "Requieren un ángulo de 90°." },
          { pregunta: "Si los catetos miden 3 y 4, ¿cuánto mide la hipotenusa?", opciones: ["5", "6", "7", "12"], correcta: "5", explicacion: "c² = 3² + 4² = 9+16 = 25, c=5." },
          { pregunta: "Un triángulo con un ángulo de 90° se llama:", opciones: ["Acutángulo", "Rectángulo", "Obtusángulo", "Equilátero"], correcta: "Rectángulo", explicacion: "Tiene un ángulo recto." }
        ]
      },
      {
        id: "pmx3-6",
        proposito: "Propósito formativo 6",
        titulo: "Congruencia, Semejanza y el Teorema de Napoleón",
        icono: "🔷",
        imagen: "linear-gradient(135deg, #4338ca, #0369a1)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Dos figuras son <strong>congruentes</strong> si tienen la misma forma y el mismo tamaño, y <strong>semejantes</strong> si tienen la misma forma aunque distinto tamaño (como una foto y su ampliación).
          </div>

          <h4>Criterios de congruencia de triángulos (≅)</h4>
          <table class="tabla-estudio">
            <tr><th>Criterio</th><th>Basta con que sean iguales…</th></tr>
            <tr><td>LLL</td><td>los tres lados</td></tr>
            <tr><td>LAL</td><td>dos lados y el ángulo entre ellos</td></tr>
            <tr><td>ALA</td><td>dos ángulos y el lado entre ellos</td></tr>
          </table>

          <h4>Criterios de semejanza (∼)</h4>
          <table class="tabla-estudio">
            <tr><th>Criterio</th><th>Condición</th></tr>
            <tr><td>AA</td><td>dos ángulos iguales</td></tr>
            <tr><td>LLL</td><td>los tres lados proporcionales</td></tr>
            <tr><td>LAL</td><td>dos lados proporcionales y el ángulo entre ellos igual</td></tr>
          </table>
          <p>En triángulos semejantes los lados correspondientes guardan la misma razón: a/a′ = b/b′ = c/c′.</p>

          <h4>✍️ Ejemplo práctico: la altura de una ceiba</h4>
          <div class="ejemplo">
            A media mañana, una estaca de 1.5 m da una sombra de 2 m. A la misma hora, la ceiba del parque da una sombra de 24 m. Los rayos del sol forman triángulos semejantes (criterio AA):<br>
            h / 24 = 1.5 / 2 → h = 24 × 0.75 = <strong>18 m</strong>.
          </div>

          <h4>Construir un triángulo rectángulo con una cuerda</h4>
          <p>Toma una cuerda con 12 nudos a la misma distancia y forma un triángulo de lados 3, 4 y 5. Como 3² + 4² = 5², el ángulo entre los lados 3 y 4 es <strong>recto</strong>. Los albañiles y los campesinos usan este truco para «escuadrar» cimientos y surcos.</p>

          <h4>El teorema de Napoleón (problema-meta)</h4>
          <p>Dibuja <strong>cualquier</strong> triángulo. Sobre cada lado construye un triángulo equilátero hacia afuera y marca el centro de cada uno. Al unir esos tres centros obtienes <strong>siempre un triángulo equilátero</strong>, sin importar la forma del triángulo original. Se atribuye a Napoleón Bonaparte, que era aficionado a la geometría.</p>
          <div class="nota-estudio">
            <strong>💡 Para demostrarlo</strong> se usan los temas del semestre: congruencia de triángulos, ángulos de 60° del triángulo equilátero y la ley de cosenos (que verás en Pensamiento Matemático IV).
          </div>

          <h4>🛠️ Manos a la obra</h4>
          <p>Con regla y compás, comprueba el teorema de Napoleón con un triángulo escaleno. Mide los tres lados del triángulo de los centros: ¿son iguales? Compara con tus compañeros, que usaron triángulos diferentes.</p>
        `,
        actividades: [
          { pregunta: "Dos triángulos que tienen sus tres lados respectivamente iguales son congruentes por el criterio:", opciones: ["LLL", "AA", "LAL", "ALA"], correcta: "LLL", explicacion: "Lado-lado-lado: si los tres lados coinciden, los triángulos son iguales." },
          { pregunta: "Si dos triángulos tienen dos ángulos iguales, entonces son:", opciones: ["Semejantes", "Congruentes siempre", "Rectángulos", "Equiláteros"], correcta: "Semejantes", explicacion: "Por el criterio AA tienen la misma forma, aunque pueden tener distinto tamaño." },
          { pregunta: "Una estaca de 1.5 m da una sombra de 2 m. A la misma hora, una ceiba da una sombra de 24 m. ¿Cuánto mide la ceiba?", opciones: ["18 m", "32 m", "16 m", "36 m"], correcta: "18 m", explicacion: "h/24 = 1.5/2, entonces h = 24 × 0.75 = 18 m." },
          { pregunta: "Según el teorema de Napoleón, los centros de los equiláteros construidos sobre los lados de cualquier triángulo forman un triángulo:", opciones: ["Equilátero", "Rectángulo", "Escaleno", "Obtusángulo"], correcta: "Equilátero", explicacion: "Es el resultado sorprendente del teorema: no importa la forma del triángulo inicial." },
          { pregunta: "Con una cuerda de 12 nudos se forma un triángulo de lados 3, 4 y 5. ¿Qué se obtiene?", opciones: ["Un ángulo recto", "Un ángulo llano", "Tres ángulos de 60°", "Un ángulo obtuso"], correcta: "Un ángulo recto", explicacion: "3² + 4² = 9 + 16 = 25 = 5², así que por Pitágoras es un triángulo rectángulo." }
        ]
      },
      {
        id: "pm3-4",
        proposito: "Complementario · Perímetros, áreas y volúmenes",
        titulo: "Perímetro, Área y Volumen",
        icono: "📦",
        imagen: "linear-gradient(135deg, #0ea5e9, #0284c7)",
        contenido: `
          <h4>Fórmulas de área</h4>
          <div class="formula">
Triángulo: A = (b × h) / 2<br>
Rectángulo: A = b × h<br>
Círculo: A = π × r²<br>
Polígono regular: A = (P × a) / 2
          </div>
          <h4>Volumen de cuerpos geométricos</h4>
          <div class="formula">
Cubo: V = a³<br>
Prisma: V = A_base × h<br>
Cilindro: V = π × r² × h<br>
Esfera: V = (4/3) × π × r³
          </div>
        `,
        actividades: [
          { pregunta: "El área de un rectángulo de base 5 y altura 3 es:", opciones: ["8", "15", "16", "30"], correcta: "15", explicacion: "A = b × h = 5 × 3 = 15." },
          { pregunta: "El área de un triángulo de base 4 y altura 6 es:", opciones: ["10", "12", "24", "20"], correcta: "12", explicacion: "A = (4×6)/2 = 12." },
          { pregunta: "El volumen de un cubo de lado 3 es:", opciones: ["9", "27", "18", "6"], correcta: "27", explicacion: "V = 3³ = 27." },
          { pregunta: "La fórmula del área del círculo es:", opciones: ["2πr", "πr²", "πd", "r²"], correcta: "πr²", explicacion: "Pi por radio al cuadrado." },
          { pregunta: "El perímetro de un cuadrado de lado 4 es:", opciones: ["8", "12", "16", "4"], correcta: "16", explicacion: "P = 4 × lado = 16." }
        ]
      }
    ]
  },

  4: {
    titulo: "Pensamiento Matemático IV",
    subtitulo: "Trigonometría y geometría analítica",
    semestre: "Cuarto Semestre",
    clase: "s4",
    icono: "📐",
    descripcion: "Punto, recta y circunferencia, razones trigonométricas, gráficas en dos variables, la recta, la parábola, la elipse y las cónicas.",
    meta: "Resuelva problemas a partir del planteamiento y análisis de funciones trigonométricas, ecuaciones de primer y segundo grado, considerando la pertinencia y conocimiento de las variables y relaciones para explicar una situación o fenómeno.",
    contexto: "Medición de distancias inaccesibles: montañas, ríos y terrenos de tu comunidad.",
    temas: [
      {
        id: "pmx4-1",
        proposito: "Propósito formativo 1",
        titulo: "Punto, Recta y Circunferencia",
        icono: "🔵",
        imagen: "linear-gradient(135deg, #1d4ed8, #0891b2)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> La geometría analítica une el álgebra y la geometría: cada punto es un par de números y cada línea es una ecuación.
          </div>

          <h4>Punto y recta</h4>
          <ul>
            <li><strong>Punto:</strong> no tiene dimensiones, solo posición. En el plano se escribe P(x, y).</li>
            <li><strong>Recta:</strong> tiene una dimensión (longitud) y está formada por infinitos puntos alineados. Por dos puntos pasa una sola recta.</li>
            <li>Dos rectas en el plano pueden ser <strong>paralelas</strong> (nunca se cortan), <strong>secantes</strong> (se cortan en un punto) o <strong>perpendiculares</strong> (se cortan formando 90°).</li>
          </ul>

          <h4>Elementos de la circunferencia</h4>
          <table class="tabla-estudio">
            <tr><th>Elemento</th><th>Definición</th></tr>
            <tr><td>Centro</td><td>Punto que está a la misma distancia de todos los puntos de la circunferencia.</td></tr>
            <tr><td>Radio (r)</td><td>Segmento del centro a la circunferencia.</td></tr>
            <tr><td>Diámetro (d)</td><td>Cuerda que pasa por el centro: d = 2r.</td></tr>
            <tr><td>Cuerda</td><td>Segmento que une dos puntos de la circunferencia.</td></tr>
            <tr><td>Arco</td><td>Parte de la circunferencia entre dos puntos.</td></tr>
          </table>
          <div class="formula">Longitud: L = 2πr = πd &nbsp;&nbsp;&nbsp; Área del círculo: A = πr²</div>

          <h4>Posiciones de una recta respecto a una circunferencia</h4>
          <table class="tabla-estudio">
            <tr><th>Recta</th><th>Puntos en común</th></tr>
            <tr><td>Exterior</td><td>0</td></tr>
            <tr><td>Tangente</td><td>1 (es perpendicular al radio en ese punto)</td></tr>
            <tr><td>Secante</td><td>2</td></tr>
          </table>

          <h4>Construcciones con regla y compás</h4>
          <ul>
            <li><strong>Mediatriz:</strong> recta perpendicular que pasa por el punto medio de un segmento. Todos sus puntos están a la misma distancia de los extremos.</li>
            <li><strong>Bisectriz:</strong> recta que divide un ángulo en dos ángulos iguales.</li>
            <li><strong>Circunferencia por tres puntos:</strong> su centro es donde se cruzan las mediatrices.</li>
          </ul>

          <h4>✍️ Ejemplo práctico</h4>
          <div class="ejemplo">
            Un comal de barro de Amatenango del Valle mide 44 cm de diámetro. Su radio es 22 cm, su borde mide L = π(44) ≈ <strong>138 cm</strong> y su superficie es A = π(22)² ≈ <strong>1 521 cm²</strong>.<br><br>
            Para encontrar el centro de un plato roto, dibuja dos cuerdas y sus mediatrices: el centro está donde se cruzan.
          </div>
        `,
        actividades: [
          { pregunta: "Una recta que toca a una circunferencia en un solo punto se llama:", opciones: ["Tangente", "Secante", "Exterior", "Diámetro"], correcta: "Tangente", explicacion: "La tangente toca en un punto y es perpendicular al radio en ese punto." },
          { pregunta: "Una recta secante corta a la circunferencia en:", opciones: ["Dos puntos", "Un punto", "Ningún punto", "Tres puntos"], correcta: "Dos puntos", explicacion: "Secante viene de «cortar»: entra y sale de la circunferencia." },
          { pregunta: "Si el radio de un comal es 22 cm, su diámetro es:", opciones: ["44 cm", "11 cm", "22 cm", "69 cm"], correcta: "44 cm", explicacion: "El diámetro es el doble del radio: d = 2r = 44 cm." },
          { pregunta: "La cuerda que pasa por el centro de la circunferencia se llama:", opciones: ["Diámetro", "Radio", "Arco", "Tangente"], correcta: "Diámetro", explicacion: "Es la cuerda más larga posible." },
          { pregunta: "La recta perpendicular que pasa por el punto medio de un segmento es la:", opciones: ["Mediatriz", "Bisectriz", "Mediana", "Tangente"], correcta: "Mediatriz", explicacion: "La bisectriz, en cambio, divide un ángulo en dos partes iguales." }
        ]
      },
      {
        id: "pm4-1",
        proposito: "Propósito formativo 2",
        titulo: "Razones Trigonométricas",
        icono: "📐",
        imagen: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
        contenido: `
          <div class="formula">
sen θ = cateto opuesto / hipotenusa<br>
cos θ = cateto adyacente / hipotenusa<br>
tan θ = cateto opuesto / cateto adyacente
          </div>
          <h4>Identidad fundamental</h4>
          <div class="formula">sen²θ + cos²θ = 1</div>
        `,
        actividades: [
          { pregunta: "La razón seno relaciona:", opciones: ["Cateto adyacente e hipotenusa", "Cateto opuesto e hipotenusa", "Ambos catetos", "Ángulos"], correcta: "Cateto opuesto e hipotenusa", explicacion: "SOH: Seno = Opuesto / Hipotenusa." },
          { pregunta: "Si sen θ = 0.5, ¿cuál es el ángulo (en grados)?", opciones: ["30°", "45°", "60°", "90°"], correcta: "30°", explicacion: "sen(30°) = 0.5." },
          { pregunta: "La razón coseno relaciona:", opciones: ["Cateto adyacente e hipotenusa", "Cateto opuesto e hipotenusa", "Ambos catetos", "Ángulos"], correcta: "Cateto adyacente e hipotenusa", explicacion: "CAH: Coseno = Adyacente / Hipotenusa." },
          { pregunta: "La tangente es igual a:", opciones: ["sen/cos", "cos/sen", "sen·cos", "1/sen"], correcta: "sen/cos", explicacion: "Tan = Seno / Coseno." },
          { pregunta: "¿Cuánto vale sen(90°)?", opciones: ["0", "0.5", "1", "No existe"], correcta: "1", explicacion: "Es el valor máximo del seno." }
        ]
      },
      {
        id: "pm4-2",
        proposito: "Propósito formativo 2",
        titulo: "Ley de Senos y Cosenos",
        icono: "🔺",
        imagen: "linear-gradient(135deg, #f43f5e, #e11d48)",
        contenido: `
          <h4>Ley de senos</h4>
          <div class="formula">a/sen A = b/sen B = c/sen C</div>
          <h4>Ley de cosenos</h4>
          <div class="formula">c² = a² + b² - 2ab·cos C</div>
          <div class="ejemplo">
            <strong>Aplicación:</strong> Calcular distancias inaccesibles en terrenos.
          </div>
        `,
        actividades: [
          { pregunta: "¿Qué ley se usa si conoces dos ángulos y un lado?", opciones: ["Pitágoras", "Ley de senos", "Ley de cosenos", "Ley de Ohm"], correcta: "Ley de senos", explicacion: "Relaciona lados y senos de ángulos opuestos." },
          { pregunta: "La ley de cosenos es útil cuando conoces:", opciones: ["Tres ángulos", "Dos lados y el ángulo entre ellos", "Un solo lado", "Nada"], correcta: "Dos lados y el ángulo entre ellos", explicacion: "Permite encontrar el tercer lado." },
          { pregunta: "La ley de cosenos es una generalización del teorema de:", opciones: ["Tales", "Pitágoras", "Euclides", "Newton"], correcta: "Pitágoras", explicacion: "Pitágoras es para triángulos rectángulos." },
          { pregunta: "En la ley de senos: a/sen A = ...", opciones: ["b/cos B", "b/sen B", "c/cos C", "a/b"], correcta: "b/sen B", explicacion: "Es la proporción estándar." },
          { pregunta: "¿Para qué tipo de triángulos sirve la ley de senos?", opciones: ["Solo rectángulos", "Solo equiláteros", "Cualquier triángulo", "Solo isósceles"], correcta: "Cualquier triángulo", explicacion: "Sirve para oblicuángulos." }
        ]
      },
      {
        id: "pmx4-2",
        proposito: "Propósito formativo 3",
        titulo: "Gráficas en Dos Variables: Simetría y Extensión",
        icono: "🪞",
        imagen: "linear-gradient(135deg, #7c3aed, #c026d3)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Antes de graficar una ecuación puedes «adivinar» su forma: dónde corta los ejes, si es simétrica y qué valores pueden tomar x e y.
          </div>

          <h4>Polinomios en dos variables</h4>
          <p>Son ecuaciones como y = x², x² + y² = 25, y = x³ − 4x o y² = x. Para estudiarlas se hace una <strong>discusión de la curva</strong> en cuatro pasos.</p>

          <h4>1. Intersecciones con los ejes</h4>
          <ul>
            <li>Con el eje <strong>Y</strong>: haz x = 0.</li>
            <li>Con el eje <strong>X</strong>: haz y = 0.</li>
          </ul>
          <div class="formula">y = 2x − 6 → eje Y: (0, −6) · eje X: 0 = 2x − 6 → (3, 0)</div>

          <h4>2. Simetría</h4>
          <table class="tabla-estudio">
            <tr><th>Simetría respecto…</th><th>Prueba</th><th>Ejemplo</th></tr>
            <tr><td>al eje Y</td><td>cambiar x por −x no altera la ecuación</td><td>y = x² (parábola)</td></tr>
            <tr><td>al eje X</td><td>cambiar y por −y no la altera</td><td>y² = x</td></tr>
            <tr><td>al origen</td><td>cambiar x por −x e y por −y no la altera</td><td>y = x³</td></tr>
          </table>
          <p>La circunferencia x² + y² = 25 tiene las tres simetrías.</p>

          <h4>3. Extensión (dominio y rango)</h4>
          <div class="formula">
x² + y² = 25 → y = ±√(25 − x²) → solo existe si 25 − x² ≥ 0 → −5 ≤ x ≤ 5<br>
y = x² → x puede ser cualquier real, pero y ≥ 0
          </div>

          <h4>4. Tabla de valores y gráfica</h4>
          <table class="tabla-estudio">
            <tr><th>x</th><td>−2</td><td>−1</td><td>0</td><td>1</td><td>2</td></tr>
            <tr><th>y = x³</th><td>−8</td><td>−1</td><td>0</td><td>1</td><td>8</td></tr>
          </table>
          <p>Fíjate: los valores opuestos de x dan valores opuestos de y. Eso es la simetría respecto al origen.</p>

          <h4>✍️ Ejemplo práctico</h4>
          <div class="ejemplo">
            El arco de la entrada de una casa tiene la forma y = 4 − x² (en metros). Corta el piso (y = 0) en x = ±2, así que mide <strong>4 m de ancho</strong>. Su punto más alto está en x = 0: <strong>4 m de altura</strong>. Como es simétrico respecto al eje Y, basta con calcular la mitad.
          </div>
        `,
        actividades: [
          { pregunta: "La gráfica de y = x² es simétrica respecto:", opciones: ["Al eje Y", "Al eje X", "Solo al origen", "No tiene simetría"], correcta: "Al eje Y", explicacion: "(−x)² = x², así que cambiar x por −x no altera la ecuación." },
          { pregunta: "¿En qué punto corta y = 2x − 6 al eje X?", opciones: ["x = 3", "x = −6", "x = 6", "x = −3"], correcta: "x = 3", explicacion: "Se hace y = 0: 2x − 6 = 0, entonces x = 3." },
          { pregunta: "En x² + y² = 25, la extensión de x es:", opciones: ["De −5 a 5", "Todos los reales", "De 0 a 25", "De −25 a 25"], correcta: "De −5 a 5", explicacion: "25 − x² debe ser mayor o igual a 0, así que |x| ≤ 5." },
          { pregunta: "La curva y = x³ es simétrica respecto:", opciones: ["Al origen", "Al eje Y", "Al eje X", "A la recta y = 5"], correcta: "Al origen", explicacion: "(−x)³ = −x³: al cambiar ambos signos la ecuación no cambia." },
          { pregunta: "Para hallar dónde corta una curva al eje Y se hace:", opciones: ["x = 0", "y = 0", "x = y", "x = 1"], correcta: "x = 0", explicacion: "Todos los puntos del eje Y tienen x = 0." }
        ]
      },
      {
        id: "pm4-3",
        proposito: "Propósito formativo 4",
        titulo: "Geometría Analítica: La Recta",
        icono: "📈",
        imagen: "linear-gradient(135deg, #14b8a6, #0d9488)",
        contenido: `
          <div class="formula">
Distancia: d = √[(x₂-x₁)² + (y₂-y₁)²]<br>
Punto medio: M = ((x₁+x₂)/2, (y₁+y₂)/2)<br><br>
Pendiente: m = (y₂-y₁)/(x₂-x₁)
          </div>
        `,
        actividades: [
          { pregunta: "La pendiente de una recta horizontal es:", opciones: ["1", "0", "Infinito", "-1"], correcta: "0", explicacion: "No sube ni baja." },
          { pregunta: "Dos rectas paralelas tienen pendientes:", opciones: ["Iguales", "Inversas", "Opuestas", "Cero"], correcta: "Iguales", explicacion: "Nunca se cruzan." },
          { pregunta: "La pendiente de una recta vertical es:", opciones: ["0", "1", "No definida", "-1"], correcta: "No definida", explicacion: "La división por cero no existe." },
          { pregunta: "La fórmula de la pendiente es:", opciones: ["(y₂-y₁)/(x₂-x₁)", "(x₂-x₁)/(y₂-y₁)", "y₂+y₁", "x₂-x₁"], correcta: "(y₂-y₁)/(x₂-x₁)", explicacion: "Cambio en y sobre cambio en x." },
          { pregunta: "La distancia entre (0,0) y (3,4) es:", opciones: ["3", "4", "5", "7"], correcta: "5", explicacion: "√(3² + 4²) = √25 = 5." }
        ]
      },
      {
        id: "pmx4-3",
        proposito: "Propósito formativo 4",
        titulo: "Formas de la Ecuación de la Recta",
        icono: "↗️",
        imagen: "linear-gradient(135deg, #0f766e, #15803d)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Si dos variables son <strong>directamente proporcionales</strong> (y = kx), su gráfica es una recta que pasa por el origen. La pendiente es la constante de proporcionalidad.
          </div>

          <figure class="diagrama-quimica">
            <img src="images/matematicas/recta-pendiente.svg" alt="Recta con pendiente y ordenada al origen" loading="lazy">
            <figcaption>La pendiente m mide cuánto sube y por cada unidad que avanza x.</figcaption>
          </figure>

          <h4>Las formas de la ecuación</h4>
          <table class="tabla-estudio">
            <tr><th>Forma</th><th>Ecuación</th><th>Úsala cuando conoces…</th></tr>
            <tr><td>Punto-pendiente</td><td>y − y₁ = m(x − x₁)</td><td>un punto y la pendiente</td></tr>
            <tr><td>Pendiente-ordenada al origen</td><td>y = mx + b</td><td>la pendiente y dónde corta al eje Y</td></tr>
            <tr><td>Simétrica</td><td>x/a + y/b = 1</td><td>dónde corta a los dos ejes, (a, 0) y (0, b)</td></tr>
            <tr><td>General</td><td>Ax + By + C = 0</td><td>para compararla con otras rectas</td></tr>
          </table>

          <h4>Ejemplo resuelto</h4>
          <div class="formula">
Recta que pasa por (1, 3) y (3, 7)<br>
m = (7 − 3)/(3 − 1) = 4/2 = 2<br>
Punto-pendiente: y − 3 = 2(x − 1)<br>
Pendiente-ordenada: y = 2x + 1<br>
General: 2x − y + 1 = 0<br>
Simétrica: corta en (−½, 0) y (0, 1) → x/(−½) + y/1 = 1
          </div>

          <h4>Paralelas y perpendiculares</h4>
          <ul>
            <li><strong>Paralelas:</strong> misma pendiente (m₁ = m₂).</li>
            <li><strong>Perpendiculares:</strong> m₁ · m₂ = −1. Si una tiene m = 2, la perpendicular tiene m = −½.</li>
          </ul>

          <h4>✍️ Ejemplo práctico</h4>
          <div class="ejemplo">
            Una pipa con 10 000 litros de agua abastece a una colonia de Tuxtla y se vacía a ritmo constante de 500 L por minuto:<br>
            <strong>V = 10 000 − 500t</strong> (pendiente −500: el volumen baja).<br>
            Queda vacía cuando V = 0: 500t = 10 000 → <strong>t = 20 minutos</strong>.
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es la recta que pasa por (0, 4) con pendiente −2?", opciones: ["y = −2x + 4", "y = 4x − 2", "y = −2x − 4", "y = 2x + 4"], correcta: "y = −2x + 4", explicacion: "En y = mx + b: m = −2 y b = 4 (corta al eje Y en 4)." },
          { pregunta: "¿Cuál es la pendiente de la recta que pasa por (1, 3) y (3, 7)?", opciones: ["2", "4", "1/2", "−2"], correcta: "2", explicacion: "m = (7 − 3)/(3 − 1) = 4/2 = 2." },
          { pregunta: "Las rectas y = 3x + 1 y y = 3x − 5 son:", opciones: ["Paralelas", "Perpendiculares", "La misma recta", "Se cortan en (0, 0)"], correcta: "Paralelas", explicacion: "Tienen la misma pendiente (3) y distinta ordenada al origen." },
          { pregunta: "Una recta perpendicular a y = 2x + 3 tiene pendiente:", opciones: ["−1/2", "2", "−2", "1/2"], correcta: "−1/2", explicacion: "m₁ · m₂ = −1, entonces 2 · m₂ = −1 y m₂ = −1/2." },
          { pregunta: "Una pipa con 10 000 L se vacía a 500 L por minuto. ¿En cuántos minutos queda vacía?", opciones: ["20", "50", "500", "2"], correcta: "20", explicacion: "10 000 − 500t = 0, entonces t = 20 minutos." }
        ]
      },
      {
        id: "pm4-4",
        proposito: "Propósito formativo 5",
        titulo: "La Parábola",
        icono: "🌐",
        imagen: "linear-gradient(135deg, #eab308, #ca8a04)",
        contenido: `
          <div class="formula">
Vertical: (x - h)² = 4p(y - k)<br>
Horizontal: (y - k)² = 4p(x - h)<br><br>
Vértice: (h, k)<br>
Foco: (h, k + p) o (h + p, k)
          </div>
        `,
        actividades: [
          { pregunta: "En (x - 3)² = 8(y - 1), el vértice es:", opciones: ["(3, 1)", "(-3, 1)", "(1, 3)", "(8, 1)"], correcta: "(3, 1)", explicacion: "Vértice = (h, k), donde h=3, k=1." },
          { pregunta: "Si p > 0 en una parábola vertical, abre hacia:", opciones: ["Arriba", "Abajo", "Izquierda", "Derecha"], correcta: "Arriba", explicacion: "El foco está arriba del vértice." },
          { pregunta: "¿Cuántos puntos tiene una parábola en su vértice?", opciones: ["1", "2", "3", "Infinitos"], correcta: "1", explicacion: "Es su punto mínimo o máximo." },
          { pregunta: "El foco es un punto que:", opciones: ["Define la parábola", "No existe", "Es el centro", "Es el radio"], correcta: "Define la parábola", explicacion: "Los puntos equidistan del foco y la directriz." },
          { pregunta: "La parábola (y - 2)² = 12(x - 1) abre hacia:", opciones: ["Arriba", "Abajo", "Derecha", "Izquierda"], correcta: "Derecha", explicacion: "El término y está al cuadrado y p>0." }
        ]
      },
      {
        id: "pmx4-4",
        proposito: "Propósito formativo 6",
        titulo: "Circunferencia, Elipse y las Leyes de Kepler",
        icono: "🪐",
        imagen: "linear-gradient(135deg, #1e3a8a, #6d28d9)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Los planetas no giran en círculos perfectos sino en <strong>elipses</strong>. Johannes Kepler lo descubrió a principios del siglo XVII analizando años de observaciones de Marte.
          </div>

          <h4>Ecuación de la circunferencia</h4>
          <div class="formula">
(x − h)² + (y − k)² = r² &nbsp;&nbsp; centro (h, k), radio r<br>
Centro en el origen: x² + y² = r²<br>
Ejemplo: (x − 2)² + (y + 1)² = 9 → centro (2, −1), radio 3
          </div>

          <h4>La elipse</h4>
          <p>Es el conjunto de puntos cuya <strong>suma de distancias a dos puntos fijos (focos)</strong> es constante e igual a 2a.</p>
          <div class="formula">
x²/a² + y²/b² = 1 &nbsp;&nbsp; (a > b, eje mayor horizontal)<br>
a = semieje mayor · b = semieje menor · c = distancia del centro a cada foco<br>
c² = a² − b² &nbsp;&nbsp; excentricidad e = c/a (0 ≤ e &lt; 1)
          </div>
          <p>Si e = 0 la elipse es una circunferencia. Mientras más cerca de 1, más alargada es. La órbita de la Tierra tiene e ≈ 0.017: es casi un círculo.</p>

          <figure class="diagrama-quimica">
            <img src="images/fisica/orbita-kepler.svg" alt="Órbita elíptica con áreas iguales en tiempos iguales" loading="lazy">
            <figcaption>Segunda ley de Kepler: el planeta barre áreas iguales en tiempos iguales, así que va más rápido cerca del Sol.</figcaption>
          </figure>

          <h4>Las tres leyes de Kepler</h4>
          <ol>
            <li><strong>Órbitas:</strong> cada planeta describe una elipse con el Sol en uno de sus focos.</li>
            <li><strong>Áreas:</strong> la línea Sol–planeta barre áreas iguales en tiempos iguales.</li>
            <li><strong>Periodos:</strong> T² es proporcional a a³ (los planetas lejanos tardan mucho más en dar la vuelta).</li>
          </ol>
          <p><strong>Coplanaridad:</strong> las órbitas de los planetas están casi en el mismo plano, el de la eclíptica. Por eso, desde el cielo oscuro de Chiapas, los planetas siempre se ven cerca de la misma franja por donde pasan el Sol y la Luna.</p>

          <h4>🛠️ Manos a la obra: el método del jardinero</h4>
          <p>Clava dos estacas (los focos) en el patio, ata una cuerda más larga que la distancia entre ellas y, manteniéndola tensa con una vara, traza la curva: es una elipse. Si juntas las estacas en un solo punto, obtienes una circunferencia.</p>
        `,
        actividades: [
          { pregunta: "¿Cuál es el centro y el radio de (x − 2)² + (y + 1)² = 9?", opciones: ["Centro (2, −1) y radio 3", "Centro (−2, 1) y radio 3", "Centro (2, −1) y radio 9", "Centro (2, 1) y radio 9"], correcta: "Centro (2, −1) y radio 3", explicacion: "La forma es (x − h)² + (y − k)² = r²: h = 2, k = −1 y r = √9 = 3." },
          { pregunta: "En una elipse, la suma de las distancias de cualquier punto a los dos focos es:", opciones: ["Constante", "Cero", "Variable", "Igual al radio"], correcta: "Constante", explicacion: "Esa es la definición de la elipse: la suma siempre vale 2a." },
          { pregunta: "¿Qué dice la primera ley de Kepler?", opciones: ["Las órbitas son elipses con el Sol en un foco", "Las órbitas son círculos perfectos", "El Sol gira alrededor de la Tierra", "Los planetas se mueven en línea recta"], correcta: "Las órbitas son elipses con el Sol en un foco", explicacion: "Kepler corrigió la idea antigua de las órbitas circulares." },
          { pregunta: "Si una elipse tiene a = 5 y b = 3, ¿cuánto vale c?", opciones: ["4", "2", "8", "34"], correcta: "4", explicacion: "c² = a² − b² = 25 − 9 = 16, entonces c = 4." },
          { pregunta: "¿Cuál es la ecuación de la circunferencia con centro en el origen y radio 6?", opciones: ["x² + y² = 36", "x² + y² = 6", "(x − 6)² + y² = 0", "x + y = 36"], correcta: "x² + y² = 36", explicacion: "x² + y² = r² y r² = 6² = 36." }
        ]
      },
      {
        id: "pmx4-5",
        proposito: "Propósito formativo 7",
        titulo: "Las Cónicas en tu Entorno: Modelar y Estimar",
        icono: "🛰️",
        imagen: "linear-gradient(135deg, #be123c, #ea580c)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Circunferencia, elipse, parábola e hipérbola se llaman <strong>cónicas</strong> porque se obtienen al cortar un cono doble con un plano. Todas son ecuaciones de segundo grado con dos variables.
          </div>

          <figure class="diagrama-quimica">
            <img src="images/matematicas/conicas.svg" alt="Circunferencia, elipse, parábola e hipérbola" loading="lazy">
            <figcaption>Las cuatro cónicas. Cambia la inclinación del corte y pasarás de una a otra.</figcaption>
          </figure>

          <h4>Resumen de las cónicas</h4>
          <table class="tabla-estudio">
            <tr><th>Cónica</th><th>Ecuación (centro o vértice en el origen)</th><th>Dónde la encuentras</th></tr>
            <tr><td>Circunferencia</td><td>x² + y² = r²</td><td>ruedas, comales, la rueda de la fortuna de la feria</td></tr>
            <tr><td>Elipse</td><td>x²/a² + y²/b² = 1</td><td>órbitas de planetas y satélites, mesas, algunos arcos</td></tr>
            <tr><td>Parábola</td><td>x² = 4py</td><td>antenas parabólicas, chorros de agua, el tiro de un balón, faros</td></tr>
            <tr><td>Hipérbola</td><td>x²/a² − y²/b² = 1</td><td>torres de enfriamiento, sombra de una lámpara en la pared, ubicación por señales (GPS)</td></tr>
          </table>

          <h4>Modelar: ¿dónde va el receptor de una antena?</h4>
          <div class="ejemplo">
            Una antena parabólica de un rancho en la Frailesca mide 1.2 m de diámetro y 15 cm de profundidad. Con el vértice en el origen, el borde pasa por (0.6, 0.15):<br>
            x² = 4py → 0.36 = 4p(0.15) = 0.6p → <strong>p = 0.6 m</strong>.<br>
            El receptor va en el foco, a <strong>60 cm del fondo</strong>: ahí se concentran todas las señales.
          </div>

          <h4>Estimar con una parábola</h4>
          <p>El chorro de una manguera sigue una parábola. Si sale a 1 m de altura, llega a su punto más alto (1.8 m) a 2 m de distancia, y es simétrico, puedes estimar que vuelve a 1 m de altura a 4 m de distancia sin medir nada más.</p>

          <h4>Identificar la cónica por su ecuación</h4>
          <ul>
            <li>x² y y² con el mismo coeficiente y signo: <strong>circunferencia</strong>.</li>
            <li>x² y y² con distinto coeficiente pero el mismo signo: <strong>elipse</strong>.</li>
            <li>Solo una variable al cuadrado: <strong>parábola</strong>.</li>
            <li>x² y y² con signos opuestos: <strong>hipérbola</strong>.</li>
          </ul>
        `,
        actividades: [
          { pregunta: "¿Qué cónica tiene la forma de las antenas parabólicas?", opciones: ["Parábola", "Elipse", "Hipérbola", "Circunferencia"], correcta: "Parábola", explicacion: "Su propiedad reflectora concentra todas las señales en el foco." },
          { pregunta: "La ecuación x²/16 − y²/9 = 1 representa una:", opciones: ["Hipérbola", "Elipse", "Parábola", "Circunferencia"], correcta: "Hipérbola", explicacion: "x² y y² tienen signos opuestos." },
          { pregunta: "Una antena tiene forma x² = 4py y un punto de su borde es (0.6, 0.15). ¿Cuánto vale p?", opciones: ["0.6", "0.15", "2.4", "0.36"], correcta: "0.6", explicacion: "0.36 = 4p(0.15) = 0.6p, entonces p = 0.6 m." },
          { pregunta: "Las cónicas se obtienen al cortar con un plano:", opciones: ["Un cono doble", "Un cubo", "Una esfera", "Un cilindro"], correcta: "Un cono doble", explicacion: "Según la inclinación del corte se obtiene cada una de las cuatro cónicas." },
          { pregunta: "La ecuación x² + y² = 49 representa:", opciones: ["Una circunferencia de radio 7", "Una elipse", "Una parábola", "Una circunferencia de radio 49"], correcta: "Una circunferencia de radio 7", explicacion: "r² = 49, entonces r = 7." }
        ]
      }
    ]
  },

  5: {
    titulo: "Pensamiento Matemático V",
    subtitulo: "Cálculo diferencial",
    semestre: "Quinto Semestre",
    clase: "s5",
    icono: "📉",
    descripcion: "Variación, origen del cálculo, funciones, límites, funciones trascendentes, derivadas, optimización y la integral.",
    meta: "Analice fenómenos donde el cambio es parte central de su estudio con la finalidad de encontrar soluciones óptimas a problemas o situaciones en su entorno u otras áreas del conocimiento.",
    contexto: "El cálculo permite entender cómo cambian las cosas: velocidad, crecimiento, optimización.",
    temas: [
      {
        id: "pmx5-1",
        proposito: "Propósito formativo 1",
        titulo: "Variación Promedio e Instantánea",
        icono: "🐢",
        imagen: "linear-gradient(135deg, #0369a1, #0d9488)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> El cálculo nació para responder una pregunta: <strong>¿qué tan rápido cambia algo en un instante?</strong>
          </div>

          <h4>Los inicios del pensamiento variacional</h4>
          <ul>
            <li><strong>La paradoja de Zenón (siglo V a. C.):</strong> Aquiles nunca alcanzaría a una tortuga, porque cuando llega a donde ella estaba, ella ya avanzó un poco más. La solución es que una suma infinita puede dar un número finito: ½ + ¼ + ⅛ + 1/16 + … = 1.</li>
            <li><strong>Arquímedes (siglo III a. C.):</strong> con el <em>método de exhaución</em> encerró el círculo entre polígonos de hasta 96 lados y obtuvo 3 10/71 &lt; π &lt; 3 1/7. Es la misma idea del límite: acercarse cada vez más.</li>
          </ul>

          <h4>Variación promedio</h4>
          <div class="formula">
Variación promedio = Δy / Δx = [f(b) − f(a)] / (b − a)<br>
Es la pendiente de la recta <strong>secante</strong> que une dos puntos de la curva
          </div>
          <div class="ejemplo">
            En Tuxtla Gutiérrez la temperatura sube de 22 °C a las 7:00 a 34 °C a las 15:00:<br>
            Variación promedio = (34 − 22)/(15 − 7) = 12/8 = <strong>1.5 °C por hora</strong>.<br>
            Pero no subió 1.5 °C cada hora: subió más rápido a media mañana y casi nada después de las 14:00.
          </div>

          <h4>Variación instantánea</h4>
          <p>Un autobús recorre 150 km en 2 horas: su rapidez <strong>promedio</strong> es 75 km/h. Pero el velocímetro marcó 90 km/h en una recta y 40 km/h en una curva de la sierra. Lo que marca el velocímetro es la variación <strong>instantánea</strong>: la variación promedio en un intervalo de tiempo cada vez más pequeño.</p>

          <figure class="diagrama-quimica">
            <img src="images/matematicas/secante-tangente.svg" alt="Recta secante y recta tangente a una curva" loading="lazy">
            <figcaption>Cuando el punto Q se acerca a P, la secante (variación promedio) se convierte en la tangente (variación instantánea).</figcaption>
          </figure>

          <h4>Calcúlalo tú</h4>
          <table class="tabla-estudio">
            <tr><th>f(x) = x², desde x = 1 hasta…</th><th>Variación promedio</th></tr>
            <tr><td>x = 3</td><td>(9 − 1)/2 = 4</td></tr>
            <tr><td>x = 2</td><td>(4 − 1)/1 = 3</td></tr>
            <tr><td>x = 1.1</td><td>(1.21 − 1)/0.1 = 2.1</td></tr>
            <tr><td>x = 1.01</td><td>(1.0201 − 1)/0.01 = 2.01</td></tr>
          </table>
          <p>Los valores se acercan a <strong>2</strong>: esa es la variación instantánea de x² en x = 1.</p>
        `,
        actividades: [
          { pregunta: "La temperatura sube de 22 °C (7:00) a 34 °C (15:00). ¿Cuál es la variación promedio?", opciones: ["1.5 °C por hora", "12 °C por hora", "8 °C por hora", "4 °C por hora"], correcta: "1.5 °C por hora", explicacion: "(34 − 22)/(15 − 7) = 12/8 = 1.5 °C por hora." },
          { pregunta: "Lo que marca el velocímetro en un instante es la variación:", opciones: ["Instantánea", "Promedio", "Total", "Acumulada"], correcta: "Instantánea", explicacion: "Indica qué tan rápido cambia la posición en ese momento." },
          { pregunta: "La suma 1/2 + 1/4 + 1/8 + 1/16 + … se acerca a:", opciones: ["1", "Infinito", "2", "1/2"], correcta: "1", explicacion: "Cada término cubre la mitad de lo que falta para llegar a 1." },
          { pregunta: "¿Cómo aproximó Arquímedes el valor de π?", opciones: ["Con polígonos inscritos y circunscritos en un círculo", "Con una calculadora", "Midiendo sombras", "Con la derivada"], correcta: "Con polígonos inscritos y circunscritos en un círculo", explicacion: "Usó polígonos de hasta 96 lados: es el método de exhaución." },
          { pregunta: "¿Cuál es la variación promedio de f(x) = x² entre x = 1 y x = 3?", opciones: ["4", "8", "2", "9"], correcta: "4", explicacion: "(f(3) − f(1))/(3 − 1) = (9 − 1)/2 = 4." }
        ]
      },
      {
        id: "pmx5-2",
        proposito: "Propósito formativo 2",
        titulo: "Origen del Cálculo y la Recta Tangente",
        icono: "🍎",
        imagen: "linear-gradient(135deg, #b91c1c, #c2410c)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Dos problemas antiguos, trazar la tangente a una curva y calcular la velocidad de un cuerpo, resultaron ser <strong>el mismo problema</strong>. Resolverlo dio origen al cálculo diferencial.
          </div>

          <h4>Línea del tiempo</h4>
          <ul class="linea-tiempo">
            <li><strong>Siglo III a. C.</strong> Arquímedes calcula áreas y tangentes con métodos geométricos.</li>
            <li><strong>1630–1640</strong> Fermat encuentra máximos, mínimos y tangentes; Descartes crea la geometría analítica.</li>
            <li><strong>1638</strong> Galileo estudia la caída de los cuerpos: la distancia crece con el cuadrado del tiempo.</li>
            <li><strong>1665–1666</strong> Isaac Newton desarrolla su «método de fluxiones» para estudiar el movimiento.</li>
            <li><strong>1684</strong> Gottfried Leibniz publica su cálculo, con la notación dy/dx y ∫ que usamos hoy.</li>
          </ul>
          <p>Newton y Leibniz lo desarrollaron de forma <strong>independiente</strong>, y tuvieron una famosa disputa sobre quién lo hizo primero.</p>

          <h4>La pendiente de la recta tangente</h4>
          <div class="formula">
m = lím<sub>h→0</sub> [f(x + h) − f(x)] / h<br><br>
Para f(x) = x² en x = 3:<br>
[(3 + h)² − 9] / h = (6h + h²)/h = 6 + h → si h → 0, m = 6<br>
Tangente en (3, 9): y − 9 = 6(x − 3) → y = 6x − 9
          </div>

          <h4>Aplicación al movimiento</h4>
          <p>Si una piedra cae desde el mirador del Cañón del Sumidero, la distancia que recorre es aproximadamente <strong>s = 5t²</strong> (en metros, sin contar el aire). Su velocidad instantánea es la pendiente de la tangente:</p>
          <table class="tabla-estudio">
            <tr><th>t (s)</th><th>s = 5t² (m)</th><th>v = 10t (m/s)</th></tr>
            <tr><td>1</td><td>5</td><td>10</td></tr>
            <tr><td>2</td><td>20</td><td>20</td></tr>
            <tr><td>3</td><td>45</td><td>30</td></tr>
          </table>
          <p>La velocidad aumenta 10 m/s cada segundo: es la aceleración de la gravedad (≈ 9.8 m/s²).</p>
        `,
        actividades: [
          { pregunta: "¿Quiénes desarrollaron el cálculo de forma independiente en el siglo XVII?", opciones: ["Newton y Leibniz", "Euclides y Pitágoras", "Galileo y Copérnico", "Gauss y Euler"], correcta: "Newton y Leibniz", explicacion: "Newton lo hizo hacia 1665 y Leibniz lo publicó en 1684." },
          { pregunta: "La notación dy/dx se debe a:", opciones: ["Leibniz", "Newton", "Arquímedes", "Fermat"], correcta: "Leibniz", explicacion: "Leibniz creó la notación dy/dx y el símbolo ∫ que seguimos usando." },
          { pregunta: "¿Cuál es la pendiente de la tangente a f(x) = x² en x = 3?", opciones: ["6", "9", "3", "2"], correcta: "6", explicacion: "[(3 + h)² − 9]/h = 6 + h, que tiende a 6 cuando h tiende a 0." },
          { pregunta: "La recta tangente a y = x² en el punto (3, 9) es:", opciones: ["y = 6x − 9", "y = 6x + 9", "y = 3x", "y = 9x − 6"], correcta: "y = 6x − 9", explicacion: "y − 9 = 6(x − 3), entonces y = 6x − 18 + 9 = 6x − 9." },
          { pregunta: "Si la posición de una piedra que cae es s = 5t², ¿cuál es su velocidad en t = 2 s?", opciones: ["20 m/s", "10 m/s", "40 m/s", "5 m/s"], correcta: "20 m/s", explicacion: "La velocidad es v = 10t, entonces v(2) = 20 m/s." }
        ]
      },
      {
        id: "pmx5-3",
        proposito: "Propósito formativo 3",
        titulo: "Funciones de Variable Real",
        icono: "🎢",
        imagen: "linear-gradient(135deg, #6d28d9, #2563eb)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Una <strong>función</strong> es una regla que a cada valor de x le asigna <strong>un único</strong> valor de y. Sirve para modelar cualquier fenómeno donde una cantidad depende de otra.
          </div>

          <h4>Dominio y rango</h4>
          <ul>
            <li><strong>Dominio:</strong> los valores que puede tomar x.</li>
            <li><strong>Rango (imagen):</strong> los valores que resultan para y.</li>
          </ul>
          <table class="tabla-estudio">
            <tr><th>Función</th><th>Tipo</th><th>Dominio</th></tr>
            <tr><td>f(x) = 3x − 2</td><td>lineal</td><td>todos los reales</td></tr>
            <tr><td>f(x) = x² − 4</td><td>cuadrática</td><td>todos los reales</td></tr>
            <tr><td>f(x) = √(x − 2)</td><td>raíz</td><td>x ≥ 2</td></tr>
            <tr><td>f(x) = 1/(x − 1)</td><td>racional</td><td>x ≠ 1</td></tr>
          </table>

          <h4>Desigualdades e intervalos</h4>
          <div class="formula">
2x − 3 > 5 → 2x > 8 → x > 4 → intervalo (4, ∞)<br>
−1 ≤ x &lt; 3 → intervalo [−1, 3)<br>
⚠️ Si multiplicas o divides entre un negativo, la desigualdad se invierte: −2x &lt; 6 → x > −3
          </div>

          <h4>Comportamiento de una función</h4>
          <figure class="diagrama-quimica">
            <img src="images/matematicas/funcion-maxmin.svg" alt="Función con un máximo y un mínimo" loading="lazy">
            <figcaption>Una función crece, alcanza un máximo, decrece, llega a un mínimo y vuelve a crecer.</figcaption>
          </figure>
          <ul>
            <li><strong>Continua:</strong> se dibuja sin levantar el lápiz (sin saltos ni huecos).</li>
            <li><strong>Creciente:</strong> si x aumenta, f(x) aumenta. <strong>Decreciente:</strong> si x aumenta, f(x) disminuye.</li>
            <li><strong>Máximo y mínimo:</strong> el punto más alto y el más bajo de una región.</li>
            <li><strong>Simetría:</strong> par si f(−x) = f(x) (simétrica al eje Y); impar si f(−x) = −f(x) (simétrica al origen).</li>
          </ul>

          <h4>✍️ Ejemplo en Chiapas</h4>
          <div class="ejemplo">
            El nivel de agua de la presa La Angostura es una función del tiempo. <strong>Crece</strong> en la temporada de lluvias (de junio a octubre), alcanza un <strong>máximo</strong> en el otoño, <strong>decrece</strong> en el estiaje mientras se genera electricidad y llega a un <strong>mínimo</strong> antes de las nuevas lluvias. Es continua: el nivel no da saltos.
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es el dominio de f(x) = √(x − 2)?", opciones: ["x ≥ 2", "x > 0", "Todos los reales", "x ≤ 2"], correcta: "x ≥ 2", explicacion: "Lo que está dentro de la raíz no puede ser negativo: x − 2 ≥ 0." },
          { pregunta: "Resuelve 2x − 3 > 5:", opciones: ["x > 4", "x < 4", "x > 1", "x > 8"], correcta: "x > 4", explicacion: "2x > 8, entonces x > 4." },
          { pregunta: "¿En qué valor no está definida f(x) = 1/(x − 1)?", opciones: ["x = 1", "x = 0", "x = −1", "En ningún valor"], correcta: "x = 1", explicacion: "En x = 1 el denominador vale 0, y no se puede dividir entre cero." },
          { pregunta: "Si al aumentar x la función disminuye, la función es:", opciones: ["Decreciente", "Creciente", "Constante", "Siempre continua"], correcta: "Decreciente", explicacion: "Decreciente significa que y baja cuando x sube." },
          { pregunta: "El punto más alto de una gráfica en una región se llama:", opciones: ["Máximo", "Mínimo", "Intercepto", "Asíntota"], correcta: "Máximo", explicacion: "Ahí la función deja de crecer y empieza a decrecer." }
        ]
      },
      {
        id: "pm5-1",
        proposito: "Propósito formativo 4",
        titulo: "Límites",
        icono: "🎯",
        imagen: "linear-gradient(135deg, #2563eb, #1e40af)",
        contenido: `
          <p>El <strong>límite</strong> describe el comportamiento de una función cuando x se acerca a un valor.</p>
          <div class="formula">lim<sub>x→a</sub> f(x) = L</div>
          <h4>Propiedades</h4>
          <ul>
            <li>lim (f + g) = lim f + lim g</li>
            <li>lim (f · g) = lim f · lim g</li>
          </ul>
        `,
        actividades: [
          { pregunta: "El límite describe:", opciones: ["El valor máximo", "El comportamiento de una función", "La derivada", "El área"], correcta: "El comportamiento de una función", explicacion: "Muestra hacia dónde tiende la función." },
          { pregunta: "lim x→2 (x + 3) =", opciones: ["2", "3", "5", "6"], correcta: "5", explicacion: "Se sustituye x=2: 2+3=5." },
          { pregunta: "La notación lim x→a significa:", opciones: ["x es igual a", "x tiende a a", "x es mayor", "x no existe"], correcta: "x tiende a a", explicacion: "Se acerca indefinidamente." },
          { pregunta: "Si una función es continua en un punto, su límite:", opciones: ["No existe", "Es 0", "Es igual al valor de la función", "Es infinito"], correcta: "Es igual al valor de la función", explicacion: "No hay saltos." },
          { pregunta: "lim x→0 (5x) =", opciones: ["5", "0", "1", "Infinito"], correcta: "0", explicacion: "5(0) = 0." }
        ]
      },
      {
        id: "pmx5-4",
        proposito: "Propósito formativo 5",
        titulo: "Funciones Exponenciales, Logarítmicas y Trigonométricas",
        icono: "🌊",
        imagen: "linear-gradient(135deg, #0e7490, #1d4ed8)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> No todo cambia en línea recta. Las poblaciones crecen de forma <strong>exponencial</strong>, los sismos se miden con <strong>logaritmos</strong> y las mareas suben y bajan como un <strong>seno</strong>.
          </div>

          <h4>Función exponencial: f(x) = aˣ</h4>
          <ul>
            <li>Si a > 1 hay <strong>crecimiento</strong>: 2ˣ (1, 2, 4, 8, 16…).</li>
            <li>Si 0 &lt; a &lt; 1 hay <strong>decaimiento</strong>: (½)ˣ (1, ½, ¼, ⅛…).</li>
            <li>La base más usada en ciencia es <strong>e ≈ 2.718</strong>.</li>
          </ul>
          <div class="ejemplo">Un medicamento se reduce a la mitad cada 6 horas: de 400 mg quedan 400 · (½)<sup>t/6</sup>. A las 18 h quedan 400 · (½)³ = <strong>50 mg</strong>.</div>

          <h4>Función logarítmica: la inversa de la exponencial</h4>
          <div class="formula">
log<sub>b</sub> x = y &nbsp;⇔&nbsp; bʸ = x<br>
log₁₀ 1 000 = 3 porque 10³ = 1 000 · log₂ 32 = 5 porque 2⁵ = 32<br>
log(ab) = log a + log b · log(a/b) = log a − log b · log(aⁿ) = n · log a
          </div>
          <div class="ejemplo">
            <strong>Sismos en Chiapas:</strong> la magnitud es logarítmica. Por cada grado más, la amplitud de las ondas es <strong>10 veces mayor</strong> y la energía liberada unas <strong>32 veces mayor</strong>. El sismo del 7 de septiembre de 2017, de magnitud 8.2 frente a Pijijiapan, liberó unas 32 × 32 ≈ 1 000 veces más energía que uno de magnitud 6.2.
          </div>

          <h4>Funciones trigonométricas</h4>
          <table class="tabla-estudio">
            <tr><th>Propiedad</th><th>sen x</th><th>cos x</th><th>tan x</th></tr>
            <tr><td>Periodo</td><td>360° (2π)</td><td>360° (2π)</td><td>180° (π)</td></tr>
            <tr><td>Rango</td><td>[−1, 1]</td><td>[−1, 1]</td><td>todos los reales</td></tr>
            <tr><td>Paridad</td><td>impar: sen(−x) = −sen x</td><td>par: cos(−x) = cos x</td><td>impar</td></tr>
            <tr><td>Recíproca</td><td>csc x = 1/sen x</td><td>sec x = 1/cos x</td><td>cot x = 1/tan x</td></tr>
          </table>
          <p><strong>Periodicidad</strong> significa que la gráfica se repite. Modela las mareas en Puerto Chiapas, la temperatura a lo largo del día, el sonido de una marimba o la corriente alterna de tu casa.</p>
        `,
        actividades: [
          { pregunta: "log₁₀ 1 000 =", opciones: ["3", "100", "10", "30"], correcta: "3", explicacion: "10³ = 1 000." },
          { pregunta: "Si log₂ x = 5, entonces x vale:", opciones: ["32", "10", "25", "7"], correcta: "32", explicacion: "log₂ x = 5 significa 2⁵ = x = 32." },
          { pregunta: "¿Qué función describe mejor un medicamento que se reduce a la mitad cada 6 horas?", opciones: ["Exponencial", "Lineal", "Constante", "Cuadrática"], correcta: "Exponencial", explicacion: "Se multiplica por el mismo factor (½) en cada periodo: es un decaimiento exponencial." },
          { pregunta: "¿Cuál es el periodo de f(x) = sen x?", opciones: ["360° (2π)", "180°", "90°", "No es periódica"], correcta: "360° (2π)", explicacion: "La gráfica del seno se repite cada vuelta completa." },
          { pregunta: "Un sismo de magnitud 8 comparado con uno de magnitud 7 tiene una amplitud de onda:", opciones: ["10 veces mayor", "Igual", "2 veces mayor", "100 veces mayor"], correcta: "10 veces mayor", explicacion: "La escala es logarítmica en base 10: cada grado multiplica la amplitud por 10." }
        ]
      },
      {
        id: "pm5-2",
        proposito: "Propósito formativo 6",
        titulo: "La Derivada",
        icono: "📈",
        imagen: "linear-gradient(135deg, #f43f5e, #be123c)",
        contenido: `
          <p>La <strong>derivada</strong> mide la razón de cambio instantánea.</p>
          <div class="formula">
f'(x) = lim<sub>h→0</sub> [f(x+h) - f(x)] / h
          </div>
          <h4>Reglas básicas</h4>
          <div class="formula">
d/dx (c) = 0<br>
d/dx (xⁿ) = n·xⁿ⁻¹<br>
d/dx (eˣ) = eˣ<br>
d/dx (ln x) = 1/x
          </div>
        `,
        actividades: [
          { pregunta: "La derivada de una constante es:", opciones: ["1", "0", "La constante", "Infinito"], correcta: "0", explicacion: "No tiene razón de cambio." },
          { pregunta: "La derivada de x³ es:", opciones: ["x²", "3x²", "3x", "x³"], correcta: "3x²", explicacion: "Por la regla de la potencia: 3x³⁻¹ = 3x²." },
          { pregunta: "La derivada de x es:", opciones: ["0", "1", "x", "x²"], correcta: "1", explicacion: "La pendiente es constante 1." },
          { pregunta: "La derivada mide:", opciones: ["El área", "La razón de cambio", "El volumen", "La masa"], correcta: "La razón de cambio", explicacion: "Qué tan rápido cambia una función." },
          { pregunta: "La derivada de 5x es:", opciones: ["5", "x", "5x", "0"], correcta: "5", explicacion: "El coeficiente se mantiene." }
        ]
      },
      {
        id: "pm5-3",
        proposito: "Propósito formativo 7",
        titulo: "Aplicaciones de la Derivada",
        icono: "🚀",
        imagen: "linear-gradient(135deg, #10b981, #047857)",
        contenido: `
          <h4>Interpretación</h4>
          <ul>
            <li>Pendiente de la recta tangente</li>
            <li>Velocidad (derivada de posición)</li>
            <li>Aceleración (derivada de velocidad)</li>
          </ul>
          <h4>Optimización</h4>
          <ul>
            <li>Máximos: f'(x) = 0 y f''(x) < 0</li>
            <li>Mínimos: f'(x) = 0 y f''(x) > 0</li>
          </ul>
        `,
        actividades: [
          { pregunta: "La derivada de la posición respecto al tiempo es:", opciones: ["Aceleración", "Velocidad", "Distancia", "Fuerza"], correcta: "Velocidad", explicacion: "Indica qué tan rápido cambia la posición." },
          { pregunta: "Si f'(x) = 0, significa que hay:", opciones: ["Un cruce", "Un máximo o mínimo", "Una asíntota", "Nada"], correcta: "Un máximo o mínimo", explicacion: "La pendiente es cero (tangente horizontal)." },
          { pregunta: "La derivada de la velocidad es:", opciones: ["Posición", "Aceleración", "Fuerza", "Trabajo"], correcta: "Aceleración", explicacion: "Mide el cambio de velocidad." },
          { pregunta: "Si f''(x) > 0 en un punto crítico, es un:", opciones: ["Máximo", "Mínimo", "Punto de inflexión", "Corte"], correcta: "Mínimo", explicacion: "La función es cóncava hacia arriba." },
          { pregunta: "La optimización busca:", opciones: ["Derivar", "Maximizar o minimizar", "Integrar", "Graficar"], correcta: "Maximizar o minimizar", explicacion: "Encontrar el mejor valor posible." }
        ]
      },
      {
        id: "pmx5-5",
        proposito: "Propósito formativo 8",
        titulo: "La Integral y el Teorema Fundamental del Cálculo",
        icono: "🧱",
        imagen: "linear-gradient(135deg, #a16207, #b45309)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> La derivada mide <strong>qué tan rápido cambia</strong> algo y la integral mide <strong>cuánto se acumula</strong>. El Teorema Fundamental del Cálculo dice que son operaciones inversas.
          </div>

          <h4>La integral como inversa de la derivada (antiderivada)</h4>
          <div class="formula">
Si F′(x) = f(x), entonces ∫ f(x) dx = F(x) + C<br>
∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C &nbsp;&nbsp; (n ≠ −1)<br>
∫ 2x dx = x² + C · ∫ 3 dx = 3x + C · ∫ x² dx = x³/3 + C
          </div>
          <p>La constante C aparece porque muchas funciones tienen la misma derivada: x² + 5 y x² − 1 tienen derivada 2x.</p>

          <h4>Área bajo la curva</h4>
          <figure class="diagrama-quimica">
            <img src="images/matematicas/area-bajo-curva.svg" alt="Área bajo una curva aproximada con rectángulos" loading="lazy">
            <figcaption>Se aproxima el área con rectángulos. Si son cada vez más y más delgados, la suma da el área exacta: la integral definida.</figcaption>
          </figure>

          <h4>Teorema Fundamental del Cálculo</h4>
          <div class="formula">
∫ₐᵇ f(x) dx = F(b) − F(a)<br><br>
∫₀³ x² dx = [x³/3]₀³ = 27/3 − 0 = 9 unidades²
          </div>

          <h4>Fenómenos de acumulación</h4>
          <table class="tabla-estudio">
            <tr><th>Si conoces la razón de cambio…</th><th>la integral te da…</th></tr>
            <tr><td>velocidad (km/h)</td><td>distancia recorrida (km)</td></tr>
            <tr><td>lluvia por hora (mm/h)</td><td>lluvia acumulada (mm)</td></tr>
            <tr><td>agua que entra a una presa (m³/s)</td><td>volumen almacenado (m³)</td></tr>
            <tr><td>potencia de un aparato (W)</td><td>energía consumida (Wh)</td></tr>
          </table>
          <div class="ejemplo">
            Un autobús viaja a 60 km/h constantes durante 2 horas. La gráfica velocidad–tiempo es un rectángulo de 60 × 2: el área bajo la curva es <strong>120 km recorridos</strong>. Si la velocidad cambiara, el área seguiría dando la distancia; solo habría que calcularla con una integral.
          </div>
        `,
        actividades: [
          { pregunta: "∫ 2x dx =", opciones: ["x² + C", "2x² + C", "2 + C", "x + C"], correcta: "x² + C", explicacion: "La derivada de x² es 2x, así que x² es su antiderivada." },
          { pregunta: "∫₀³ x² dx =", opciones: ["9", "27", "3", "6"], correcta: "9", explicacion: "[x³/3] de 0 a 3 = 27/3 − 0 = 9." },
          { pregunta: "El Teorema Fundamental del Cálculo relaciona:", opciones: ["La derivada y la integral", "La suma y la resta", "El seno y el coseno", "Los conjuntos y la probabilidad"], correcta: "La derivada y la integral", explicacion: "Establece que la integración y la derivación son operaciones inversas." },
          { pregunta: "Un autobús va a 60 km/h constantes durante 2 horas. El área bajo la gráfica velocidad–tiempo representa:", opciones: ["120 km recorridos", "30 km/h", "62 km", "2 horas"], correcta: "120 km recorridos", explicacion: "Velocidad × tiempo = 60 × 2 = 120 km: el área acumula la distancia." },
          { pregunta: "Si F′(x) = f(x), entonces F se llama:", opciones: ["Antiderivada o primitiva de f", "Derivada de f", "Límite de f", "Inversa de f"], correcta: "Antiderivada o primitiva de f", explicacion: "F es la función cuya derivada es f." }
        ]
      }
    ]
  },

  6: {
    titulo: "Pensamiento Matemático VI",
    subtitulo: "Pensamiento estadístico y probabilístico",
    semestre: "Sexto Semestre",
    clase: "s6",
    icono: "📊",
    descripcion: "Datos y eventos aleatorios, simulaciones, conjuntos, conteo, probabilidad, gráficas, correlación, muestreo y distribución normal.",
    meta: "Aplique procedimientos, técnicas y lenguaje matemático para plantear posibles soluciones a problemas derivados de fenómenos naturales o sociales, cuyo comportamiento puede describirse probabilísticamente y contribuir a una toma de decisiones fundamentada.",
    contexto: "Analiza datos reales de tu comunidad: producción, población, encuestas.",
    temas: [
      {
        id: "pmx6-1",
        proposito: "Propósito formativo 1",
        titulo: "Eventos Deterministas, Aleatorios y Recolección de Datos",
        icono: "📝",
        imagen: "linear-gradient(135deg, #7c3aed, #db2777)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Algunos fenómenos se pueden predecir con exactitud y otros dependen del azar. La estadística empieza por <strong>recolectar bien los datos</strong>.
          </div>

          <h4>Deterministas y aleatorios</h4>
          <table class="tabla-estudio">
            <tr><th>Determinista</th><th>Aleatorio</th></tr>
            <tr><td>Siempre da el mismo resultado si se repite en las mismas condiciones.</td><td>No se sabe el resultado antes, aunque sí los resultados posibles.</td></tr>
            <tr><td>El agua hierve a unos 100 °C en Puerto Arista y a unos 93 °C en San Cristóbal, que está a más de 2 000 m de altura.</td><td>Si mañana lloverá en Palenque.</td></tr>
            <tr><td>Un objeto que sueltas cae.</td><td>El número que sale al lanzar un dado.</td></tr>
            <tr><td>3 × 4 = 12</td><td>Cuántos clientes llegarán hoy a una tienda.</td></tr>
          </table>
          <p>El <strong>espacio muestral (S)</strong> es el conjunto de todos los resultados posibles. Al lanzar dos monedas: S = {AA, AS, SA, SS}, 4 resultados.</p>

          <h4>Técnicas para recolectar datos</h4>
          <ul>
            <li><strong>Encuesta:</strong> preguntas iguales a muchas personas, con un <strong>cuestionario</strong>.</li>
            <li><strong>Entrevista:</strong> conversación más profunda con pocas personas.</li>
            <li><strong>Observación:</strong> registrar lo que ocurre (cuántos autos pasan frente al plantel).</li>
            <li><strong>Experimento:</strong> controlar condiciones y medir (germinación de semillas con y sin abono).</li>
          </ul>

          <h4>La muestra aleatoria y el sesgo</h4>
          <p>Para que una muestra represente a todos, cada persona debe tener la <strong>misma oportunidad</strong> de ser elegida. Si solo preguntas a tus amigos o a quienes llegan primero, la muestra está <strong>sesgada</strong> y las conclusiones serán engañosas.</p>

          <h4>🛠️ Manos a la obra</h4>
          <p>Diseña con tu equipo un cuestionario de 5 preguntas sobre cómo llegan tus compañeros al plantel (caminando, en combi, en bicicleta…), cuánto tardan y cuánto gastan. Elige al azar a 30 estudiantes de la lista y guarda tus datos: los usarás en los siguientes temas.</p>
        `,
        actividades: [
          { pregunta: "¿Cuál es un evento aleatorio?", opciones: ["El resultado de lanzar un dado", "Que el agua hierva al calentarla lo suficiente", "Que 2 + 2 = 4", "Que un objeto caiga al soltarlo"], correcta: "El resultado de lanzar un dado", explicacion: "Se conocen los resultados posibles (1 a 6), pero no cuál saldrá." },
          { pregunta: "¿Cuántos resultados tiene el espacio muestral al lanzar una moneda dos veces?", opciones: ["4", "2", "3", "6"], correcta: "4", explicacion: "AA, AS, SA y SS: 2 × 2 = 4." },
          { pregunta: "Para que una muestra sea aleatoria:", opciones: ["Todos deben tener la misma oportunidad de ser elegidos", "Se elige solo a los amigos", "Se elige a quienes lleguen primero", "Se elige solo a un grupo"], correcta: "Todos deben tener la misma oportunidad de ser elegidos", explicacion: "Así se evita el sesgo y la muestra representa a toda la población." },
          { pregunta: "¿Qué instrumento sirve para recolectar opiniones?", opciones: ["El cuestionario", "El transportador", "El compás", "La calculadora"], correcta: "El cuestionario", explicacion: "Es el instrumento de la encuesta: las mismas preguntas para todos." },
          { pregunta: "Si solo preguntas a los del equipo de fútbol si les gusta el deporte, la muestra es:", opciones: ["Sesgada", "Aleatoria", "Representativa", "Perfecta"], correcta: "Sesgada", explicacion: "Ese grupo no representa a todo el plantel: sus respuestas estarán inclinadas." }
        ]
      },
      {
        id: "pmx6-2",
        proposito: "Propósito formativo 2",
        titulo: "Simulaciones y Probabilidad Frecuencial",
        icono: "🪙",
        imagen: "linear-gradient(135deg, #ca8a04, #ea580c)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> La <strong>incertidumbre</strong> aparece porque los resultados varían. Si repites un experimento muchas veces, la frecuencia de cada resultado se estabiliza y te dice su probabilidad.
          </div>

          <h4>Probabilidad frecuencial (empírica)</h4>
          <div class="formula">P(A) ≈ veces que ocurrió A / número total de repeticiones</div>

          <h4>Equiprobabilidad</h4>
          <p>Si todos los resultados tienen la misma oportunidad (moneda o dado sin trampa), son <strong>equiprobables</strong> y la probabilidad teórica es P(A) = casos favorables / casos posibles. Para una moneda, P(águila) = 1/2.</p>

          <h4>La ley de los grandes números</h4>
          <table class="tabla-estudio">
            <tr><th>Lanzamientos de una moneda</th><th>Águilas</th><th>Frecuencia relativa</th></tr>
            <tr><td>10</td><td>7</td><td>0.70</td></tr>
            <tr><td>50</td><td>28</td><td>0.56</td></tr>
            <tr><td>200</td><td>94</td><td>0.47</td></tr>
            <tr><td>1 000</td><td>507</td><td>0.507</td></tr>
          </table>
          <p>Con pocas repeticiones hay mucha variabilidad. Con muchas, la frecuencia se acerca a la probabilidad teórica de 0.5.</p>

          <h4>Simular en una hoja de cálculo</h4>
          <div class="formula">
=ALEATORIO.ENTRE(1,6) → simula un dado<br>
=ALEATORIO.ENTRE(0,1) → simula una moneda (0 sol, 1 águila)<br>
=CONTAR.SI(A1:A1000,6)/1000 → frecuencia relativa del 6
          </div>

          <h4>🛠️ Manos a la obra: plantea una hipótesis</h4>
          <div class="ejemplo">
            <strong>Pregunta:</strong> En una familia con 3 hijos, ¿qué es más probable, que haya al menos una niña o que todos sean niños?<br>
            <strong>Hipótesis:</strong> es mucho más probable que haya al menos una niña.<br>
            <strong>Simulación:</strong> lanza 3 monedas (águila = niña) 50 veces y registra los resultados.<br>
            <strong>Resultado teórico:</strong> P(todos niños) = (½)³ = 1/8 = 0.125, así que P(al menos una niña) = 7/8 = 0.875. ¿Se parece a lo que obtuviste?
          </div>
        `,
        actividades: [
          { pregunta: "Lanzas una moneda 50 veces y salen 28 águilas. ¿Cuál es la probabilidad frecuencial de águila?", opciones: ["0.56", "0.5", "0.28", "28"], correcta: "0.56", explicacion: "28/50 = 0.56." },
          { pregunta: "Si aumentas mucho el número de repeticiones, la frecuencia relativa:", opciones: ["Se acerca a la probabilidad teórica", "Se aleja cada vez más", "Siempre vale 1", "Se vuelve cero"], correcta: "Se acerca a la probabilidad teórica", explicacion: "Es la ley de los grandes números." },
          { pregunta: "Los eventos equiprobables son los que:", opciones: ["Tienen la misma probabilidad de ocurrir", "Nunca ocurren", "Siempre ocurren juntos", "Tienen probabilidad mayor que 1"], correcta: "Tienen la misma probabilidad de ocurrir", explicacion: "Por ejemplo, cada cara de un dado sin trampa tiene 1/6." },
          { pregunta: "¿Cuál es la probabilidad teórica de obtener 6 al lanzar un dado?", opciones: ["1/6", "1/2", "6", "1/3"], correcta: "1/6", explicacion: "Hay 1 caso favorable entre 6 posibles." },
          { pregunta: "En una hoja de cálculo, ¿qué función simula un dado?", opciones: ["ALEATORIO.ENTRE(1,6)", "SUMA(1,6)", "PROMEDIO(1,6)", "MAX(1,6)"], correcta: "ALEATORIO.ENTRE(1,6)", explicacion: "Devuelve un entero al azar entre 1 y 6 cada vez que se recalcula." }
        ]
      },
      {
        id: "pmx6-3",
        proposito: "Propósito formativo 3",
        titulo: "Teoría de Conjuntos y Diagramas de Venn",
        icono: "⭕",
        imagen: "linear-gradient(135deg, #2563eb, #ca8a04)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Un <strong>conjunto</strong> es una colección de objetos bien definida. Con conjuntos se organizan datos de encuestas y se calculan probabilidades.
          </div>

          <h4>Notación</h4>
          <ul>
            <li><strong>Por extensión:</strong> se listan los elementos. A = {1, 2, 3, 4}</li>
            <li><strong>Por comprensión:</strong> se da la regla. A = {x | x es natural menor que 5}</li>
            <li><strong>Pertenencia:</strong> 3 ∈ A (pertenece), 7 ∉ A (no pertenece).</li>
            <li><strong>Igualdad:</strong> dos conjuntos son iguales si tienen los mismos elementos: {1, 2} = {2, 1}.</li>
            <li><strong>Subconjunto:</strong> B ⊆ A si todo elemento de B está en A.</li>
            <li><strong>Universo (U):</strong> el conjunto que contiene a todos. <strong>Vacío (∅):</strong> el que no tiene elementos.</li>
          </ul>

          <figure class="diagrama-quimica">
            <img src="images/matematicas/diagrama-venn.svg" alt="Diagrama de Venn con dos conjuntos" loading="lazy">
            <figcaption>El rectángulo es el universo U. La zona donde se enciman los círculos es la intersección A ∩ B.</figcaption>
          </figure>

          <h4>Operaciones</h4>
          <table class="tabla-estudio">
            <tr><th>Operación</th><th>Símbolo</th><th>Con A = {1, 2, 3} y B = {3, 4}</th></tr>
            <tr><td>Unión (en A o en B)</td><td>A ∪ B</td><td>{1, 2, 3, 4}</td></tr>
            <tr><td>Intersección (en ambos)</td><td>A ∩ B</td><td>{3}</td></tr>
            <tr><td>Diferencia (en A pero no en B)</td><td>A − B</td><td>{1, 2}</td></tr>
            <tr><td>Complemento (lo que no está en A)</td><td>A′</td><td>todo U excepto 1, 2 y 3</td></tr>
          </table>

          <h4>Leyes de De Morgan</h4>
          <div class="formula">
(A ∪ B)′ = A′ ∩ B′ &nbsp;&nbsp; «no estar en A o B» = «no estar en A y no estar en B»<br>
(A ∩ B)′ = A′ ∪ B′
          </div>

          <h4>✍️ Ejemplo práctico: lenguas de los Altos</h4>
          <div class="ejemplo">
            En un grupo de 40 estudiantes de un plantel de los Altos, 22 hablan tsotsil, 15 hablan tseltal y 5 hablan ambas lenguas.<br>
            • Solo tsotsil: 22 − 5 = 17 · Solo tseltal: 15 − 5 = 10 · Ambas: 5<br>
            • Al menos una: n(A ∪ B) = 22 + 15 − 5 = <strong>32</strong><br>
            • Ninguna de las dos: 40 − 32 = <strong>8</strong><br>
            Probabilidad de elegir al azar a alguien que hable al menos una: 32/40 = 0.8.
          </div>
        `,
        actividades: [
          { pregunta: "Si A = {1, 2, 3} y B = {3, 4}, ¿cuánto es A ∪ B?", opciones: ["{1, 2, 3, 4}", "{3}", "{1, 2}", "{4}"], correcta: "{1, 2, 3, 4}", explicacion: "La unión reúne todos los elementos sin repetirlos." },
          { pregunta: "Con los mismos conjuntos, ¿cuánto es A ∩ B?", opciones: ["{3}", "{1, 2, 3, 4}", "{4}", "∅"], correcta: "{3}", explicacion: "El 3 es el único elemento que está en los dos conjuntos." },
          { pregunta: "De 40 estudiantes, 22 hablan tsotsil, 15 tseltal y 5 ambas. ¿Cuántos hablan al menos una de las dos?", opciones: ["32", "37", "42", "27"], correcta: "32", explicacion: "22 + 15 − 5 = 32. Los 5 se restan porque se contaron dos veces." },
          { pregunta: "Según las leyes de De Morgan, (A ∪ B)′ es igual a:", opciones: ["A′ ∩ B′", "A′ ∪ B′", "A ∩ B", "A ∪ B′"], correcta: "A′ ∩ B′", explicacion: "No estar en la unión es no estar en A y tampoco en B." },
          { pregunta: "¿Cómo se llama el conjunto que no tiene elementos?", opciones: ["Vacío", "Universo", "Unitario", "Infinito"], correcta: "Vacío", explicacion: "Se representa con ∅ o con { }." }
        ]
      },
      {
        id: "pmx6-4",
        proposito: "Propósito formativo 4",
        titulo: "Técnicas de Conteo",
        icono: "🧮",
        imagen: "linear-gradient(135deg, #0d9488, #65a30d)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Para calcular una probabilidad necesitas saber cuántos casos hay. Las técnicas de conteo los cuentan sin tener que escribirlos todos.
          </div>

          <h4>Principio multiplicativo</h4>
          <p>Si una decisión tiene m opciones y otra tiene n, juntas tienen <strong>m × n</strong>.</p>
          <div class="ejemplo">
            En una cocina de Chiapa de Corzo hay 3 tamales (chipilín, bola y cambray) y 2 bebidas (pozol y atole). Menús posibles: 3 × 2 = <strong>6</strong>.
          </div>

          <h4>Factorial</h4>
          <div class="formula">n! = n × (n − 1) × … × 2 × 1 &nbsp;&nbsp; 5! = 120 · 0! = 1</div>
          <p>n! es el número de formas de ordenar n objetos distintos: 5 alumnos se pueden formar en fila de 120 maneras.</p>

          <h4>¿Importa el orden? ¿Se puede repetir?</h4>
          <table class="tabla-estudio">
            <tr><th>Técnica</th><th>¿Importa el orden?</th><th>Fórmula</th><th>Ejemplo</th></tr>
            <tr><td>Permutación</td><td>Sí</td><td>P(n, r) = n! / (n − r)!</td><td>Presidente, secretario y tesorero entre 5: P(5, 3) = 60</td></tr>
            <tr><td>Combinación</td><td>No</td><td>C(n, r) = n! / [r!(n − r)!]</td><td>Equipo de 2 entre 5: C(5, 2) = 10</td></tr>
            <tr><td>Con reemplazo y orden</td><td>Sí, con repetición</td><td>nʳ</td><td>NIP de 4 dígitos: 10⁴ = 10 000</td></tr>
          </table>

          <h4>Probabilidad con conteo</h4>
          <div class="ejemplo">
            En un grupo de 10 alumnos (4 mujeres y 6 hombres) se eligen al azar 2 para representar al plantel en un concurso. ¿Probabilidad de que sean dos mujeres?<br>
            Casos favorables: C(4, 2) = 6 · Casos posibles: C(10, 2) = 45<br>
            P = 6/45 ≈ <strong>0.133</strong> (13.3 %)
          </div>
        `,
        actividades: [
          { pregunta: "Hay 3 tipos de tamal y 2 bebidas (pozol y atole). ¿Cuántos menús de un tamal y una bebida se pueden formar?", opciones: ["6", "5", "9", "8"], correcta: "6", explicacion: "Por el principio multiplicativo: 3 × 2 = 6." },
          { pregunta: "5! =", opciones: ["120", "25", "60", "15"], correcta: "120", explicacion: "5 × 4 × 3 × 2 × 1 = 120." },
          { pregunta: "¿De cuántas formas se pueden elegir presidente, secretario y tesorero entre 5 alumnos?", opciones: ["60", "10", "125", "15"], correcta: "60", explicacion: "Importa el orden (cargos distintos): P(5, 3) = 5 × 4 × 3 = 60." },
          { pregunta: "¿Cuántos equipos de 2 personas se forman con 5 personas, sin importar el orden?", opciones: ["10", "20", "25", "5"], correcta: "10", explicacion: "C(5, 2) = 5!/(2! · 3!) = 10." },
          { pregunta: "¿Cuántos NIP de 4 dígitos (del 0 al 9) se pueden formar si se permite repetir?", opciones: ["10 000", "5 040", "40", "9 999"], correcta: "10 000", explicacion: "10 opciones en cada una de las 4 posiciones: 10⁴ = 10 000." }
        ]
      },
      {
        id: "pm6-4",
        proposito: "Propósito formativo 4",
        titulo: "Probabilidad",
        icono: "🎲",
        imagen: "linear-gradient(135deg, #ec4899, #be185d)",
        contenido: `
          <h4>Probabilidad clásica</h4>
          <div class="formula">P(A) = Casos favorables / Casos posibles</div>
          <h4>Probabilidad condicional</h4>
          <div class="formula">P(A|B) = P(A∩B) / P(B)</div>
          <h4>Eventos independientes</h4>
          <div class="formula">P(A∩B) = P(A) × P(B)</div>
        `,
        actividades: [
          { pregunta: "¿Cuál es la probabilidad de sacar un 3 en un dado?", opciones: ["1/2", "1/3", "1/6", "1/12"], correcta: "1/6", explicacion: "Hay 1 caso favorable y 6 posibles." },
          { pregunta: "La probabilidad de un evento seguro es:", opciones: ["0", "0.5", "1", "100"], correcta: "1", explicacion: "Siempre ocurre." },
          { pregunta: "Si lanzas dos monedas, ¿probabilidad de 2 águilas?", opciones: ["1/2", "1/4", "1/8", "1"], correcta: "1/4", explicacion: "(1/2) × (1/2) = 1/4." },
          { pregunta: "La probabilidad condicional se escribe:", opciones: ["P(A)+P(B)", "P(A|B)", "P(A)×P(B)", "P(A-B)"], correcta: "P(A|B)", explicacion: "Probabilidad de A dado que ocurrió B." },
          { pregunta: "¿Qué probabilidad hay de sacar un número par en un dado?", opciones: ["1/6", "1/3", "1/2", "2/3"], correcta: "1/2", explicacion: "Hay 3 pares (2,4,6) de 6 posibles." }
        ]
      },
      {
        id: "pm6-1",
        proposito: "Propósito formativo 5",
        titulo: "Estadística Descriptiva",
        icono: "📋",
        imagen: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
        contenido: `
          <h4>Conceptos fundamentales</h4>
          <ul>
            <li><strong>Población:</strong> conjunto total</li>
            <li><strong>Muestra:</strong> subconjunto representativo</li>
            <li><strong>Variable:</strong> característica medible</li>
          </ul>
          <h4>Tipos de variables</h4>
          <ul>
            <li><strong>Cualitativas:</strong> categorías</li>
            <li><strong>Cuantitativas:</strong> números (discretas/continuas)</li>
          </ul>
        `,
        actividades: [
          { pregunta: "Una población es:", opciones: ["Un subconjunto", "El conjunto total", "Una variable", "Un promedio"], correcta: "El conjunto total", explicacion: "Es el universo de estudio." },
          { pregunta: "El color de ojos es una variable:", opciones: ["Cuantitativa", "Cualitativa", "Discreta", "Continua"], correcta: "Cualitativa", explicacion: "Es una categoría, no un número." },
          { pregunta: "La estatura de los estudiantes es una variable:", opciones: ["Cualitativa", "Cuantitativa continua", "Cuantitativa discreta", "Nominal"], correcta: "Cuantitativa continua", explicacion: "Puede tomar valores decimales." },
          { pregunta: "Una muestra debe ser:", opciones: ["Pequeña", "Representativa", "Aleatoria y representativa", "Grande"], correcta: "Aleatoria y representativa", explicacion: "Debe reflejar a la población." },
          { pregunta: "El número de hermanos es una variable:", opciones: ["Continua", "Discreta", "Cualitativa", "Nominal"], correcta: "Discreta", explicacion: "Solo toma valores enteros." }
        ]
      },
      {
        id: "pmx6-5",
        proposito: "Propósito formativo 5",
        titulo: "Gráficas Estadísticas y su Interpretación",
        icono: "📶",
        imagen: "linear-gradient(135deg, #1d4ed8, #0891b2)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Cada tipo de variable tiene su gráfica. Una buena gráfica muestra la información de un vistazo; una mal hecha puede engañar.
          </div>

          <h4>¿Qué gráfica uso?</h4>
          <table class="tabla-estudio">
            <tr><th>Variable</th><th>Gráfica</th><th>Ejemplo</th></tr>
            <tr><td>Cualitativa</td><td>Barras o circular (pastel)</td><td>Medio de transporte al plantel</td></tr>
            <tr><td>Cuantitativa discreta</td><td>Puntos o bastones</td><td>Número de hermanos</td></tr>
            <tr><td>Cuantitativa continua</td><td>Histograma o polígono de frecuencias</td><td>Estatura, peso, tiempo de traslado</td></tr>
            <tr><td>Datos en el tiempo</td><td>Gráfica de línea</td><td>Producción de café por año</td></tr>
          </table>

          <figure class="diagrama-quimica">
            <img src="images/matematicas/histograma.svg" alt="Histograma de estaturas de 40 estudiantes" loading="lazy">
            <figcaption>Histograma: las barras van juntas porque la variable es continua. La barra más alta es la clase modal.</figcaption>
          </figure>

          <h4>Construir un histograma</h4>
          <ol>
            <li>Calcula el <strong>rango</strong>: dato mayor − dato menor.</li>
            <li>Elige el número de <strong>clases</strong> (entre 5 y 10) y su <strong>ancho</strong> = rango ÷ número de clases.</li>
            <li>Cuenta cuántos datos caen en cada clase (<strong>frecuencia</strong>).</li>
            <li>Dibuja barras juntas cuya altura sea la frecuencia. La <strong>marca de clase</strong> es el punto medio de cada intervalo.</li>
          </ol>

          <h4>Gráfica circular</h4>
          <div class="formula">Ángulo del sector = (frecuencia / total) × 360°</div>
          <p>Si 10 de 40 alumnos llegan caminando: 10/40 × 360° = 90° (un cuarto del círculo).</p>

          <h4>⚠️ Gráficas que engañan</h4>
          <ul>
            <li>Un eje vertical que no empieza en cero exagera las diferencias.</li>
            <li>Dibujos en 3D o con tamaños desproporcionados distorsionan las cantidades.</li>
            <li>Una gráfica sin fuente ni fecha no se puede comprobar.</li>
          </ul>

          <h4>🛠️ Manos a la obra</h4>
          <p>Con los datos de la encuesta del primer tema, haz una gráfica de barras del medio de transporte y un histograma del tiempo de traslado. ¿Cuál es la clase modal? ¿Qué le propondrías a la dirección del plantel con esa información?</p>
        `,
        actividades: [
          { pregunta: "Para mostrar los colores favoritos de un grupo (variable cualitativa) conviene usar:", opciones: ["Una gráfica de barras", "Un histograma", "Un diagrama de dispersión", "Un polígono de frecuencias"], correcta: "Una gráfica de barras", explicacion: "Las categorías se representan con barras separadas." },
          { pregunta: "Para estaturas agrupadas en intervalos se usa:", opciones: ["Un histograma", "Una gráfica circular", "Un pictograma", "Una tabla de verdad"], correcta: "Un histograma", explicacion: "La estatura es una variable continua; el histograma muestra cómo se distribuye." },
          { pregunta: "En el histograma de estaturas de este tema, ¿cuál es la clase modal?", opciones: ["160–165 cm", "145–150 cm", "175–180 cm", "155–160 cm"], correcta: "160–165 cm", explicacion: "Es la clase con mayor frecuencia: 12 estudiantes." },
          { pregunta: "En una gráfica circular de 40 alumnos, un sector mide 90°. ¿Cuántos alumnos representa?", opciones: ["10", "9", "90", "25"], correcta: "10", explicacion: "90° es la cuarta parte de 360°, y la cuarta parte de 40 es 10." },
          { pregunta: "¿Por qué una gráfica cuyo eje vertical no empieza en cero puede engañar?", opciones: ["Exagera las diferencias entre las barras", "Hace los datos más exactos", "Elimina los datos atípicos", "Cambia el promedio"], correcta: "Exagera las diferencias entre las barras", explicacion: "Una diferencia pequeña parece enorme si se corta la parte de abajo del eje." }
        ]
      },
      {
        id: "pmx6-6",
        proposito: "Propósito formativo 6",
        titulo: "Relación entre Variables: Independencia y Correlación",
        icono: "🔗",
        imagen: "linear-gradient(135deg, #9333ea, #2563eb)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> A veces dos variables están relacionadas: cuando una cambia, la otra también. Pero <strong>correlación no significa causalidad</strong>.
          </div>

          <h4>Variables cualitativas: tabla de contingencia</h4>
          <table class="tabla-estudio">
            <tr><th></th><th>Aprobó</th><th>No aprobó</th><th>Total</th></tr>
            <tr><td>Desayuna antes de clase</td><td>36 (80 %)</td><td>9</td><td>45</td></tr>
            <tr><td>No desayuna</td><td>21 (60 %)</td><td>14</td><td>35</td></tr>
          </table>
          <p>Si las dos variables fueran <strong>independientes</strong>, el porcentaje de aprobados sería parecido en ambas filas. Como 80 % y 60 % son muy distintos, hay evidencia de que están <strong>relacionadas</strong>.</p>

          <h4>Variables cuantitativas: diagrama de dispersión</h4>
          <p>Cada pareja de datos (x, y) es un punto. La forma de la nube indica el tipo de correlación:</p>
          <ul>
            <li><strong>Positiva:</strong> si x sube, y sube (horas de estudio y calificación).</li>
            <li><strong>Negativa:</strong> si x sube, y baja (altitud y temperatura).</li>
            <li><strong>Nula:</strong> no hay patrón (estatura y calificación).</li>
          </ul>
          <p>El <strong>coeficiente de correlación r</strong> va de −1 a 1: cerca de 1 es positiva fuerte, cerca de −1 es negativa fuerte y cerca de 0 casi no hay relación lineal.</p>

          <h4>✍️ Ejemplo en Chiapas: altitud y temperatura</h4>
          <table class="tabla-estudio">
            <tr><th>Ciudad</th><th>Altitud aproximada (m)</th><th>Temperatura media anual aproximada (°C)</th></tr>
            <tr><td>Tapachula</td><td>170</td><td>27</td></tr>
            <tr><td>Tuxtla Gutiérrez</td><td>530</td><td>25</td></tr>
            <tr><td>Comitán</td><td>1 600</td><td>18</td></tr>
            <tr><td>San Cristóbal de las Casas</td><td>2 200</td><td>15</td></tr>
          </table>
          <p>Hay una correlación <strong>negativa fuerte</strong> (r ≈ −0.99): por cada 1 000 m de altura, la temperatura baja unos 6 °C. Por eso el café de altura se da en las montañas y no en la costa.</p>

          <div class="alerta nota-estudio">
            <strong>⚠️ Correlación no es causalidad:</strong> en los meses de calor aumentan las ventas de paletas y también los accidentes en ríos. No es que las paletas causen accidentes: ambas dependen de una tercera variable, el calor.
          </div>
        `,
        actividades: [
          { pregunta: "A mayor altitud, menor temperatura. Esto es una correlación:", opciones: ["Negativa", "Positiva", "Nula", "Perfecta positiva"], correcta: "Negativa", explicacion: "Cuando una variable sube, la otra baja." },
          { pregunta: "Un coeficiente de correlación r = 0.95 indica:", opciones: ["Correlación positiva fuerte", "Correlación negativa fuerte", "Ninguna relación", "Un error de cálculo"], correcta: "Correlación positiva fuerte", explicacion: "Está muy cerca de 1: los puntos casi forman una recta que sube." },
          { pregunta: "Para ver la relación entre dos variables cuantitativas se usa:", opciones: ["Un diagrama de dispersión", "Un diagrama de Venn", "Un pictograma", "Un árbol genealógico"], correcta: "Un diagrama de dispersión", explicacion: "Cada pareja (x, y) se dibuja como un punto." },
          { pregunta: "¿Qué tabla se usa para estudiar si dos variables cualitativas son independientes?", opciones: ["Tabla de contingencia", "Tabla de verdad", "Tabla periódica", "Tabla de multiplicar"], correcta: "Tabla de contingencia", explicacion: "Cruza las categorías de las dos variables y compara los porcentajes." },
          { pregunta: "Si dos variables tienen una correlación fuerte, ¿se puede asegurar que una causa la otra?", opciones: ["No, correlación no implica causalidad", "Sí, siempre", "Solo si r es positivo", "Solo si hay más de 10 datos"], correcta: "No, correlación no implica causalidad", explicacion: "Puede haber una tercera variable que influya en ambas, o ser una coincidencia." }
        ]
      },
      {
        id: "pmx6-7",
        proposito: "Propósito formativo 7",
        titulo: "Población, Muestra y Técnicas de Muestreo",
        icono: "👥",
        imagen: "linear-gradient(135deg, #be185d, #7c3aed)",
        contenido: `
          <div class="nota-estudio">
            <strong>💡 Idea clave:</strong> Casi nunca se puede preguntar a todos. Una <strong>muestra</strong> bien elegida al azar permite conocer a toda la población con poco esfuerzo.
          </div>

          <h4>Conceptos</h4>
          <ul>
            <li><strong>Población:</strong> todos los elementos que quieres estudiar (los 600 alumnos del plantel).</li>
            <li><strong>Muestra:</strong> la parte que realmente observas (60 alumnos).</li>
            <li><strong>Censo:</strong> estudiar a toda la población, como el Censo de Población y Vivienda que hace el INEGI cada 10 años.</li>
            <li><strong>Parámetro:</strong> valor de la población (el promedio real de todos). <strong>Estadístico:</strong> valor calculado con la muestra.</li>
          </ul>

          <h4>Fuentes de información</h4>
          <table class="tabla-estudio">
            <tr><th>Fuente</th><th>¿Qué es?</th><th>Ejemplo</th></tr>
            <tr><td>Primaria</td><td>Datos que tú recolectas directamente.</td><td>Tu encuesta en el plantel.</td></tr>
            <tr><td>Secundaria</td><td>Datos que otros recolectaron y analizaron.</td><td>Tablas del INEGI, artículos, reportes de la Secretaría de Salud.</td></tr>
            <tr><td>Terciaria</td><td>Recopilan y organizan otras fuentes.</td><td>Enciclopedias, catálogos, bases de datos bibliográficas.</td></tr>
          </table>

          <h4>Muestreo aleatorio simple</h4>
          <p>Cada elemento tiene la misma probabilidad de ser elegido. Se hace como una rifa: papelitos con todos los números de lista, una tómbola o la función ALEATORIO.ENTRE de la hoja de cálculo.</p>

          <h4>Muestreo sistemático</h4>
          <div class="formula">
Salto: k = N / n = 600 / 60 = 10<br>
Elige al azar un inicio entre 1 y 10, por ejemplo el 4<br>
Muestra: 4, 14, 24, 34, 44, … hasta completar 60
          </div>

          <h4>✍️ Ejemplo práctico</h4>
          <div class="ejemplo">
            Quieres saber cuántos estudiantes de tu plantel tienen internet en casa. Hay 600 alumnos y encuestas a 60 elegidos con muestreo sistemático. Si 39 dicen que sí, estimas que 39/60 = 65 % de todo el plantel tiene internet, es decir, unos <strong>390 alumnos</strong>.
          </div>
        `,
        actividades: [
          { pregunta: "En un plantel de 600 alumnos se encuesta a 60. Esos 60 son:", opciones: ["La muestra", "La población", "La variable", "El parámetro"], correcta: "La muestra", explicacion: "La muestra es la parte de la población que se estudia." },
          { pregunta: "En un muestreo sistemático con N = 600 y n = 60, el salto k es:", opciones: ["10", "60", "6", "540"], correcta: "10", explicacion: "k = N/n = 600/60 = 10." },
          { pregunta: "Las tablas del Censo del INEGI que consultas en su página son una fuente:", opciones: ["Secundaria", "Primaria", "Terciaria", "Inventada"], correcta: "Secundaria", explicacion: "Los datos los recolectó otra institución, no tú." },
          { pregunta: "En el muestreo aleatorio simple:", opciones: ["Cada elemento tiene la misma probabilidad de ser elegido", "Se elige a los más cercanos", "Se elige cada décimo de la lista", "Se elige a voluntarios"], correcta: "Cada elemento tiene la misma probabilidad de ser elegido", explicacion: "Elegir cada décimo es muestreo sistemático; elegir voluntarios produce sesgo." },
          { pregunta: "Si empiezas en el alumno 4 con k = 10, ¿quiénes son los siguientes elegidos?", opciones: ["14, 24, 34…", "5, 6, 7…", "40, 400…", "10, 20, 30…"], correcta: "14, 24, 34…", explicacion: "Se suma el salto k = 10 al número anterior." }
        ]
      },
      {
        id: "pm6-2",
        proposito: "Propósito formativo 8",
        titulo: "Medidas de Tendencia Central",
        icono: "📊",
        imagen: "linear-gradient(135deg, #0ea5e9, #0284c7)",
        contenido: `
          <div class="formula">
Media: x̄ = Σxᵢ / n<br><br>
Mediana: valor central (datos ordenados)<br><br>
Moda: valor más frecuente
          </div>
          <div class="ejemplo">
            <strong>Contexto:</strong> Promedio de calificaciones, edad media de una comunidad.
          </div>
        `,
        actividades: [
          { pregunta: "¿Cuál es la media de: 4, 8, 6, 10?", opciones: ["6", "7", "8", "9"], correcta: "7", explicacion: "(4+8+6+10)/4 = 28/4 = 7." },
          { pregunta: "¿Cuál es la moda de: 2, 3, 3, 4, 5, 3?", opciones: ["2", "3", "4", "5"], correcta: "3", explicacion: "El 3 se repite más." },
          { pregunta: "¿Cuál es la mediana de: 2, 4, 6, 8, 10?", opciones: ["4", "6", "8", "5"], correcta: "6", explicacion: "Es el valor central." },
          { pregunta: "Si hay dos valores centrales, la mediana es:", opciones: ["El mayor", "El menor", "El promedio de ambos", "No existe"], correcta: "El promedio de ambos", explicacion: "Se suman y se dividen entre 2." },
          { pregunta: "La medida más afectada por valores extremos es:", opciones: ["Media", "Mediana", "Moda", "Rango"], correcta: "Media", explicacion: "Los valores atípicos la distorsionan." }
        ]
      },
      {
        id: "pm6-3",
        proposito: "Propósito formativo 8",
        titulo: "Medidas de Dispersión",
        icono: "📏",
        imagen: "linear-gradient(135deg, #f59e0b, #d97706)",
        contenido: `
          <div class="formula">
Rango: R = x_máx - x_mín<br><br>
Varianza: σ² = Σ(xᵢ - μ)² / N<br><br>
Desviación estándar: σ = √σ²<br><br>
Coef. variación: CV = (σ / x̄) × 100%
          </div>
        `,
        actividades: [
          { pregunta: "El rango se calcula como:", opciones: ["Máx + Mín", "Máx - Mín", "Máx × Mín", "Máx / Mín"], correcta: "Máx - Mín", explicacion: "Es la diferencia entre el mayor y el menor." },
          { pregunta: "La desviación estándar mide:", opciones: ["El centro", "La dispersión", "La moda", "El total"], correcta: "La dispersión", explicacion: "Qué tan alejados están los datos de la media." },
          { pregunta: "Si la desviación estándar es 0, significa que:", opciones: ["No hay datos", "Todos los datos son iguales", "Hay mucha dispersión", "La media es 0"], correcta: "Todos los datos son iguales", explicacion: "No hay variación." },
          { pregunta: "La varianza es el cuadrado de:", opciones: ["La media", "La mediana", "La desviación estándar", "La moda"], correcta: "La desviación estándar", explicacion: "σ = √σ²." },
          { pregunta: "¿Qué medida tiene las mismas unidades que los datos?", opciones: ["Varianza", "Desviación estándar", "Rango", "Coeficiente"], correcta: "Desviación estándar", explicacion: "La varianza tiene unidades al cuadrado." }
        ]
      },
      {
        id: "pm6-5",
        proposito: "Propósito formativo 8",
        titulo: "Distribuciones de Probabilidad",
        icono: "📈",
        imagen: "linear-gradient(135deg, #14b8a6, #0f766e)",
        contenido: `
          <h4>Distribución binomial</h4>
          <div class="formula">P(X=k) = C(n,k)·p^k·(1-p)^(n-k)</div>
          <h4>Distribución normal</h4>
          <ul>
            <li>Forma de campana</li>
            <li>68% dentro de μ ± σ</li>
            <li>95% dentro de μ ± 2σ</li>
          </ul>
          <div class="formula">Estandarización: z = (x - μ) / σ</div>
        `,
        actividades: [
          { pregunta: "La gráfica de la distribución normal tiene forma de:", opciones: ["Recta", "Campana", "U", "Círculo"], correcta: "Campana", explicacion: "Es simétrica y centrada en la media." },
          { pregunta: "En una distribución normal, el 68% de los datos está en:", opciones: ["μ ± σ", "μ ± 2σ", "μ ± 3σ", "Fuera de μ"], correcta: "μ ± σ", explicacion: "Es una propiedad empírica." },
          { pregunta: "La distribución binomial se usa para:", opciones: ["Variables continuas", "Éxitos y fracasos", "Áreas", "Límites"], correcta: "Éxitos y fracasos", explicacion: "Tiene dos resultados posibles." },
          { pregunta: "El valor 'z' en la estandarización indica:", opciones: ["El área", "Cuántas desviaciones estándar de la media", "El total", "La moda"], correcta: "Cuántas desviaciones estándar de la media", explicacion: "Mide la posición relativa." },
          { pregunta: "El área total bajo la curva normal es:", opciones: ["0", "0.5", "1", "100"], correcta: "1", explicacion: "Representa el 100% de probabilidad." }
        ]
      }
    ]
  }
};
