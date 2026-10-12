/* ==========================================================
   VIEW - SOPORTE Y CONTACTO
   Versión corregida: bug reset, honeypot, timeout, a11y
========================================================== */

const VistaSoporte = {
  render(contenedor) {
    const s = SOPORTE;
    const dev = s.desarrollador;

    contenedor.innerHTML = `
      <div class="soporte-header">
        <div class="contenedor">
          <h2>${s.titulo}</h2>
          <p>${s.subtitulo}</p>
        </div>
      </div>

      <div class="contenedor soporte-contenido">
        <!-- ===== Tarjeta del desarrollador ===== -->
        <section class="dev-card">
          <div class="dev-avatar">${dev.avatar}</div>
          <div class="dev-info">
            <h3>${dev.nombre}</h3>
            <p class="dev-rol">${dev.rol}</p>
            <p class="dev-descripcion">${dev.descripcion}</p>
            <p class="dev-meta">
              <span>📍 ${dev.ubicacion}</span>
              <span>📅 ${dev.año}</span>
            </p>
          </div>
        </section>

        <!-- ===== Canales de contacto ===== -->
        <section class="soporte-seccion">
          <h3 class="seccion-titulo">🌐 Canales de contacto</h3>
          <div class="grid-canales">
            ${s.canales.map(c => `
              <a href="${c.enlace}" target="_blank" rel="noopener" class="canal-card">
                <span class="canal-icono">${c.icono}</span>
                <div>
                  <h4>${c.titulo}</h4>
                  <p class="canal-valor">${c.valor}</p>
                  <p class="canal-desc">${c.descripcion}</p>
                </div>
              </a>
            `).join('')}
          </div>
        </section>

        <!-- ===== Formulario ===== -->
        <section class="soporte-seccion">
          <h3 class="seccion-titulo">✉️ Envíanos un mensaje</h3>
          <form id="formSoporte" class="form-soporte" novalidate>

            <!-- Honeypot anti-spam (oculto para humanos) -->
            <input type="text" name="website" tabindex="-1" autocomplete="off"
                   style="position:absolute;left:-9999px;" aria-hidden="true">

            <div class="form-fila">
              <div class="form-grupo">
                <label for="nombre">Nombre completo *</label>
                <input type="text" id="nombre" name="nombre" required
                       placeholder="Ej: Juan Pérez López">
              </div>
              <div class="form-grupo">
                <label for="email">Correo electrónico *</label>
                <input type="email" id="email" name="email" required
                       placeholder="tucorreo@ejemplo.com">
              </div>
            </div>

            <div class="form-fila">
              <div class="form-grupo">
                <label for="centro">Centro EMSAD (opcional)</label>
                <input type="text" id="centro" name="centro"
                       placeholder="Ej: EMSAD 170 Sombra Carrizal">
              </div>
              <div class="form-grupo">
                <label for="tipo">Tipo de mensaje *</label>
                <select id="tipo" name="tipo" required>
                  ${s.tiposMensaje.map(t =>
                    `<option value="${t.value}">${t.label}</option>`
                  ).join('')}
                </select>
              </div>
            </div>

            <div class="form-grupo">
              <label for="asunto">Asunto *</label>
              <input type="text" id="asunto" name="asunto" required
                     placeholder="Resumen breve de tu mensaje" maxlength="100">
            </div>

            <div class="form-grupo">
              <label for="mensaje">Mensaje *</label>
              <textarea id="mensaje" name="mensaje" required rows="6"
                        placeholder="Cuéntanos con detalle tu duda, sugerencia o error encontrado..."
                        maxlength="1000"></textarea>
              <small class="contador"><span id="contadorMsg">0</span> / 1000 caracteres</small>
            </div>

            <div class="form-estado" id="formEstado" role="status" aria-live="polite"></div>

            <div class="form-acciones">
              <button type="submit" class="btn btn-primario" id="btnEnviar">
                📤 Enviar mensaje
              </button>
              <button type="reset" class="btn btn-outline">
                🔄 Limpiar
              </button>
            </div>
          </form>
        </section>

        <!-- ===== FAQ ===== -->
        <section class="soporte-seccion">
          <h3 class="seccion-titulo">❓ Preguntas frecuentes</h3>
          <div class="faq-lista">
            ${s.faq.map(f => `
              <details class="faq-item">
                <summary>${f.pregunta}</summary>
                <p>${f.respuesta}</p>
              </details>
            `).join('')}
          </div>
        </section>

        <!-- ===== Botón volver ===== -->
        <div class="soporte-footer">
          <button class="btn btn-outline" id="btnVolver">
            ← Volver al inicio
          </button>
        </div>
      </div>
    `;

    this.configurarFormulario();
  },

  /* ==========================================================
     CONFIGURACIÓN DEL FORMULARIO
  ========================================================== */
  configurarFormulario() {
    const form      = document.getElementById('formSoporte');
    if (!form) return;

    const estado    = document.getElementById('formEstado');
    const btnEnviar = document.getElementById('btnEnviar');
    const btnVolver = document.getElementById('btnVolver');
    const textarea  = document.getElementById('mensaje');
    const contador  = document.getElementById('contadorMsg');

    // ---------- Helpers ----------
    const escapar = (str = "") => String(str).replace(/[&<>"']/g, c => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));

    const limpiarEstado = () => {
      estado.className = "form-estado";
      estado.textContent = "";
      estado.removeAttribute("role");
      estado.removeAttribute("aria-live");
    };

    const mostrarEstado = (tipo, html, role) => {
      estado.className = `form-estado ${tipo}`;
      estado.setAttribute("role", role);
      estado.setAttribute("aria-live", role === "alert" ? "assertive" : "polite");
      estado.innerHTML = html;
    };

    // ---------- Contador de caracteres ----------
    if (textarea && contador) {
      textarea.addEventListener('input', () => {
        const len = textarea.value.length;
        contador.textContent = len;
        contador.parentElement.classList.toggle('limite', len >= 1000);
      });
    }

    // ---------- Botón volver ----------
    btnVolver?.addEventListener('click', () => Router.ir('home'));

    // ---------- Banderas de control ----------
    let resetPorEnvio = false;   // Evita que el reset borre el mensaje de éxito
    let enviando = false;        // Evita doble submit

    // ---------- Envío ----------
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (enviando) return;

      // Validación nativa
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Honeypot: si un bot lo rellenó, salir silenciosamente
      const formData = new FormData(form);
      if (formData.get('website')) return;

      // Metadatos de Web3Forms
      formData.append("access_key", SOPORTE.web3forms.accessKey);
      formData.append("subject",    `Nuevo mensaje desde Quantix - ${formData.get("tipo")}`);
      formData.append("from_name",  "Portal Quantix");

      // Estado de carga
      enviando = true;
      const textoOriginal = btnEnviar.textContent;
      btnEnviar.textContent = "⏳ Enviando...";
      btnEnviar.disabled    = true;
      form.setAttribute("aria-busy", "true");
      limpiarEstado();

      // Timeout de 15 s
      const controller = new AbortController();
      const timeoutId  = setTimeout(() => controller.abort(), 15000);

      try {
        const response = await fetch(SOPORTE.web3forms.endpoint, {
          method : "POST",
          body   : formData,
          headers: { "Accept": "application/json" },
          signal : controller.signal
        });

        const data = await response.json().catch(() => ({}));

        // 🔎 Diagnóstico (puedes borrarlo cuando todo funcione)
        console.log("📨 Respuesta Web3Forms:", response.status, data);

        const exito = response.ok &&
                      (data.success === true || data.success === "true");

        if (exito) {
          // ✅ Éxito
          mostrarEstado(
            "exito",
            "✅ ¡Mensaje enviado con éxito! Te responderemos a la brevedad.",
            "status"
          );

          // Reset SIN borrar el mensaje
          resetPorEnvio = true;
          form.reset();
          resetPorEnvio = false;
          if (contador) contador.textContent = "0";

          // Auto-ocultar tras 8 s
          setTimeout(limpiarEstado, 8000);

        } else {
          // ⚠️ Error controlado del servidor
          const detalle = data.message || "Error desconocido del servidor";
          throw new Error(detalle);
        }

      } catch (error) {
        console.error("❌ Error al enviar:", error);

        const email = encodeURIComponent(SOPORTE.canales[0].valor);
        const emailVisible = escapar(SOPORTE.canales[0].valor);
        const esTimeout = error.name === "AbortError";

        const html = esTimeout
          ? `⏱️ El envío tardó demasiado. Revisa tu conexión e inténtalo de nuevo.`
          : `⚠️ No se pudo enviar el mensaje. Intenta de nuevo o escríbenos a
             <a href="mailto:${email}">${emailVisible}</a>`;

        mostrarEstado("error", html, "alert");

      } finally {
        clearTimeout(timeoutId);
        btnEnviar.textContent = textoOriginal;
        btnEnviar.disabled    = false;
        form.removeAttribute("aria-busy");
        enviando = false;
      }
    });

    // ---------- Reset manual (botón "Limpiar") ----------
    form.addEventListener('reset', () => {
      // Si el reset viene del envío exitoso, NO borrar el mensaje
      if (resetPorEnvio) return;

      if (contador) contador.textContent = "0";
      limpiarEstado();
    });
  },
};