/* ==========================================================
   VIEW - AGENTE IA (Chat con OpenRouter)
========================================================== */

const VistaAgente = {
  // ===== Estado del chat =====
  historial: [],
  enviando: false,

  render(contenedor) {
    const a = AGENTE;

    contenedor.innerHTML = `
      <div style="
        background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
        color: #ffffff;
        padding: 2.5rem 1.5rem;
        text-align: center;
      ">
        <h2 style="font-size: 1.9rem; margin: 0 0 0.5rem 0;">${a.titulo}</h2>
        <p style="opacity: 0.9; max-width: 600px; margin: 0 auto; font-size: 1rem;">
          ${a.subtitulo}
        </p>
        <div style="margin-top: 1rem; display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
          <span style="background: rgba(255,255,255,0.15); padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem;">
            🆓 Gratis
          </span>
          <span style="background: rgba(255,255,255,0.15); padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem;">
            🌐 En español
          </span>
          <span style="background: rgba(255,255,255,0.15); padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.8rem;">
            📚 Contexto Chiapas
          </span>
        </div>
      </div>

      <div style="max-width: 800px; margin: 0 auto; padding: 1.5rem;">

        <button onclick="Router.ir('home')" style="
          background: #f1f5f9; color: #1e293b; padding: 0.6rem 1.2rem;
          border: none; border-radius: 8px; font-weight: 600; cursor: pointer;
          margin-bottom: 1.5rem;
        ">← Volver al inicio</button>

        <!-- ===== Área de chat ===== -->
        <div id="chatArea" style="
          background: #ffffff;
          border-radius: 16px;
          padding: 1.5rem;
          min-height: 400px;
          max-height: 500px;
          overflow-y: auto;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          margin-bottom: 1rem;
        "></div>

        <!-- ===== Sugerencias rápidas ===== -->
        <div id="sugerencias" style="
          display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;
        ">
          ${a.sugerencias.map(s => `
            <button onclick="VistaAgente.usarSugerencia('${s.texto}')" style="
              background: #f0fdfa; color: #0f766e; padding: 0.5rem 1rem;
              border: 1px solid #0d9488; border-radius: 20px; font-size: 0.85rem;
              cursor: pointer; font-weight: 500;
            ">${s.icono} ${s.texto}</button>
          `).join('')}
        </div>

        <!-- ===== Input ===== -->
        <div style="display: flex; gap: 0.5rem;">
          <input type="text" id="inputMensaje" 
                 placeholder="Escribe tu pregunta..."
                 style="
                   flex: 1;
                   padding: 0.9rem 1.2rem;
                   border: 2px solid #e2e8f0;
                   border-radius: 12px;
                   font-size: 1rem;
                   outline: none;
                 "
                 onfocus="this.style.borderColor='#0d9488'"
                 onblur="this.style.borderColor='#e2e8f0'">
          <button id="btnEnviar" onclick="VistaAgente.enviar()" style="
            background: #0d9488; color: #ffffff; padding: 0.9rem 1.5rem;
            border: none; border-radius: 12px; font-weight: 600; cursor: pointer;
            font-size: 1rem;
          ">Enviar</button>
        </div>

        <p style="font-size: 0.75rem; color: #64748b; text-align: center; margin-top: 0.8rem;">
          El asistente puede cometer errores. Verifica la información con tu asesor EMSAD.
        </p>
      </div>
    `;

    // Cargar historial previo
    this.historial = [
      { role: "assistant", content: AGENTE.mensajes.bienvenida }
    ];

    this.renderHistorial();

    // Enter para enviar
    const input = document.getElementById('inputMensaje');
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.enviar();
      }
    });
  },

  renderHistorial() {
    const chatArea = document.getElementById('chatArea');
    if (!chatArea) return;

    chatArea.innerHTML = this.historial.map(msg => {
      const esUsuario = msg.role === 'user';

      // 🆕 Convertir markdown básico a HTML
      const contenidoFormateado = esUsuario
        ? this.escaparHTML(msg.content)
        : this.formatearMarkdown(msg.content);

      return `
      <div style="
        display: flex;
        justify-content: ${esUsuario ? 'flex-end' : 'flex-start'};
        margin-bottom: 1rem;
      ">
        <div style="
          background: ${esUsuario ? '#0d9488' : '#f1f5f9'};
          color: ${esUsuario ? '#ffffff' : '#1e293b'};
          padding: 0.8rem 1.2rem;
          border-radius: ${esUsuario ? '12px 12px 4px 12px' : '12px 12px 12px 4px'};
          max-width: 85%;
          font-size: 0.95rem;
          line-height: 1.6;
          word-wrap: break-word;
        ">
          ${esUsuario ? '' : '<strong style="display:block;margin-bottom:0.3rem;color:#0f766e;font-size:0.85rem;">CienTIA</strong>'}
          ${contenidoFormateado}
        </div>
      </div>
    `;
    }).join('');

    chatArea.scrollTop = chatArea.scrollHeight;
    // 🆕 Renderizar las fórmulas LaTeX después de insertar el HTML
    if (window.renderMathInElement) {
      window.renderMathInElement(chatArea, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    }
  },

  // 🆕 Escapar HTML para mensajes del usuario (seguridad)
  escaparHTML(texto) {
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML.replace(/\n/g, '<br>');
  },

  // 🆕 Formatear markdown básico en respuestas de la IA
  formatearMarkdown(texto) {
    let html = texto;

    // Escapar HTML primero (seguridad)
    html = html
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Negritas: **texto**
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Cursivas: *texto*
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // Código inline: `texto`
    html = html.replace(/`(.+?)`/g, '<code style="background:#e2e8f0;padding:2px 6px;border-radius:4px;font-size:0.9em;">$1</code>');

    // Saltos de línea
    html = html.replace(/\n\n/g, '</p><p style="margin:0.6rem 0;">');
    html = html.replace(/\n/g, '<br>');

    return '<p style="margin:0;">' + html + '</p>';
  },

  usarSugerencia(texto) {
    const input = document.getElementById('inputMensaje');
    input.value = texto;
    this.enviar();
  },

  async enviar() {
    const input = document.getElementById('inputMensaje');
    const btnEnviar = document.getElementById('btnEnviar');
    const mensaje = input.value.trim();

    if (!mensaje || this.enviando) return;

    // Verificar API key
    // if (!AGENTE.config.apiKey || AGENTE.config.apiKey === "TU-OPENROUTER-API-KEY") {
    //     this.agregarMensaje('assistant', AGENTE.mensajes.errorApiKey);
    //     return;
    // }

    // Agregar mensaje del usuario
    this.agregarMensaje('user', mensaje);
    input.value = '';

    // Estado de carga
    this.enviando = true;
    btnEnviar.disabled = true;
    btnEnviar.textContent = 'Pensando...';
    btnEnviar.style.background = '#94a3b8';

    // Agregar placeholder de respuesta
    this.agregarMensaje('assistant', '⏳ Pensando...');

    try {
      const respuesta = await this.consultarIA(mensaje);

      // Reemplazar el placeholder
      this.historial.pop();
      this.agregarMensaje('assistant', respuesta);

    } catch (error) {
      console.error('Error:', error);
      this.historial.pop();

      let mensajeError = AGENTE.mensajes.errorGeneral;
      if (error.message.includes('401') || error.message.includes('key')) {
        mensajeError = AGENTE.mensajes.errorApiKey;
      } else if (error.message.includes('429')) {
        mensajeError = AGENTE.mensajes.errorLimite;
      } else if (error.message.includes('fetch') || error.message.includes('network')) {
        mensajeError = AGENTE.mensajes.errorRed;
      }

      this.agregarMensaje('assistant', mensajeError);

    } finally {
      this.enviando = false;
      btnEnviar.disabled = false;
      btnEnviar.textContent = 'Enviar';
      btnEnviar.style.background = '#0d9488';
      document.getElementById('inputMensaje').focus();
    }
  },

  agregarMensaje(role, content) {
    this.historial.push({ role, content });
    this.renderHistorial();
  },

  async consultarIA(mensajeUsuario) {
    const config = AGENTE.config;

    // 1. Reconstruimos el historial reciente como texto plano
    //    (El Worker de Cloudflare es simple y solo recibe { prompt: "..." })
    const historialReciente = this.historial
      .filter(m => !m.content.startsWith('⏳') && !m.content.startsWith('⚠️'))
      .slice(-4) // Últimos 4 mensajes para dar contexto
      .map(m => `${m.role === 'user' ? 'Estudiante' : 'CienTIA'}: ${m.content}`)
      .join('\n\n');

    // 2. Construimos el prompt final que enviaremos al Worker
    const promptParaWorker = `
${AGENTE.systemPrompt}

--- HISTORIAL DE CONVERSACIÓN ---
${historialReciente}

--- NUEVA PREGUNTA DEL ESTUDIANTE ---
${mensajeUsuario}

CienTIA:`;

    // 3. Petición a TU Worker de Cloudflare (no a Google directamente)
    const response = await fetch(config.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: promptParaWorker
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`HTTP ${response.status}: ${errorData.error || 'Error en el Worker'}`);
    }

    // 4. Tu Worker devuelve el JSON crudo de Gemini, así que lo parseamos aquí
    const data = await response.json();

    // Si Gemini devolvió un error, lo lanzamos
    if (data.error) {
      throw new Error(data.error.message || 'Error desde Gemini');
    }

    const candidate = data.candidates?.[0];

    if (!candidate) {
      throw new Error('El asistente no devolvió respuesta');
    }

    const finishReason = candidate.finishReason;
    const texto = candidate.content?.parts?.[0]?.text;

    if (!texto) {
      throw new Error('Respuesta vacía del asistente');
    }

    // Si se cortó por MAX_TOKENS
    if (finishReason === 'MAX_TOKENS') {
      return texto + '\n\n---\n\n⚠️ *La respuesta fue muy larga. Pídeme que continúe o que resuma.*';
    }

    // Si fue bloqueado por seguridad
    if (finishReason === 'SAFETY') {
      return '🔒 La respuesta fue bloqueada por los filtros de seguridad. Intenta reformular tu pregunta.';
    }

    // Si fue bloqueado por contenido prohibido
    if (finishReason === 'PROHIBITED_CONTENT') {
      return '🚫 El contenido fue marcado como prohibido. Reformula tu pregunta.';
    }

    // Si se detuvo por otra razón anormal
    if (finishReason && finishReason !== 'STOP') {
      console.warn('Finish reason inesperado:', finishReason);
      return texto + '\n\n*[Respuesta detenida: ' + finishReason + ']*';
    }

    // ✅ Respuesta completa
    return texto;
  }
};