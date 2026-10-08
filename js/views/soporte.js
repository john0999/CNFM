/* ==========================================================
   VIEW - SOPORTE Y CONTACTO
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

            <div class="form-estado" id="formEstado"></div>

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
            ${s.faq.map((f, i) => `
              <details class="faq-item">
                <summary>${f.pregunta}</summary>
                <p>${f.respuesta}</p>
              </details>
            `).join('')}
          </div>
        </section>

        <!-- ===== Botón volver ===== -->
        <div class="soporte-footer">
          <button class="btn btn-outline" onclick="Router.ir('home')">
            ← Volver al inicio
          </button>
        </div>
      </div>
    `;

    this.configurarFormulario();
  },

  configurarFormulario() {
    const form = document.getElementById('formSoporte');
    if (!form) return;

    const estado = document.getElementById('formEstado');
    const btnEnviar = document.getElementById('btnEnviar');
    const textarea = document.getElementById('mensaje');
    const contador = document.getElementById('contadorMsg');

    // ===== Contador de caracteres =====
    if (textarea && contador) {
      textarea.addEventListener('input', () => {
        contador.textContent = textarea.value.length;
      });
    }

    // ===== Envío del formulario =====
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Validación nativa
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Preparar datos con access_key
      const formData = new FormData(form);
      formData.append("access_key", SOPORTE.web3forms.accessKey);
      formData.append("subject", "Nuevo mensaje desde EMSAD Chiapas - " + formData.get("tipo"));
      formData.append("from_name", "Portal Ciencias EMSAD");

      // Estado de carga
      const textoOriginal = btnEnviar.textContent;
      btnEnviar.textContent = "⏳ Enviando...";
      btnEnviar.disabled = true;
      estado.className = "form-estado";
      estado.textContent = "";

      try {
        const response = await fetch(SOPORTE.web3forms.endpoint, {
          method: "POST",
          body: formData,
          headers: { "Accept": "application/json" }
        });

        const data = await response.json();

        if (response.ok && data.success) {
          // ✅ Éxito
          estado.className = "form-estado exito";
          estado.innerHTML = `
          ✅ ¡Mensaje enviado con éxito! Te responderemos a la brevedad.
        `;

          // Limpiar formulario
          form.reset();
          if (contador) contador.textContent = "0";

          // Auto-ocultar el mensaje después de 8 segundos
          setTimeout(() => {
            estado.className = "form-estado";
            estado.textContent = "";
          }, 8000);

        } else {
          // ❌ Error del servidor
          throw new Error(data.message || "Error al enviar");
        }

      } catch (error) {
        console.error("Error al enviar:", error);

        estado.className = "form-estado error";
        estado.innerHTML = `
        ⚠️ No se pudo enviar el mensaje. 
        Intenta de nuevo o escríbenos directamente a 
        <a href="mailto:${SOPORTE.canales[0].valor}">${SOPORTE.canales[0].valor}</a>
      `;

      } finally {
        // Restaurar botón
        btnEnviar.textContent = textoOriginal;
        btnEnviar.disabled = false;
      }
    });

    // ===== Botón de limpiar =====
    form.addEventListener('reset', () => {
      if (contador) contador.textContent = "0";
      estado.className = "form-estado";
      estado.textContent = "";
    });
  },
};