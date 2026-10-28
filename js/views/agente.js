/* ==========================================================
   VIEW - AGENTE IA (Chat con OpenRouter vía Cloudflare Worker)
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
          ${a.sugerencias.map((s, i) => `
            <button onclick="VistaAgente.usarSugerencia(${i})" style="
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
                 maxlength="${a.config.maxLargoMensaje}"
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

    this.historial = [
      { role: "assistant", content: AGENTE.mensajes.bienvenida, inicial: true }
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
          <div class="msg-contenido">${this.formatearContenido(msg)}</div>
        </div>
      </div>
    `;
    }).join('');

    chatArea.scrollTop = chatArea.scrollHeight;
    this.renderizarFormulas(chatArea);
  },

  // Actualiza solo la burbuja del último mensaje (mientras llega el texto)
  actualizarUltimo(conFormulas = false) {
    const chatArea = document.getElementById('chatArea');
    const nodos = chatArea?.querySelectorAll('.msg-contenido');
    if (!nodos?.length) return;

    const ultimo = nodos[nodos.length - 1];
    ultimo.innerHTML = this.formatearContenido(this.historial[this.historial.length - 1]);
    if (conFormulas) this.renderizarFormulas(ultimo);

    // Solo baja el scroll si el usuario ya estaba abajo
    const cercaDelFinal = chatArea.scrollHeight - chatArea.scrollTop - chatArea.clientHeight < 80;
    if (cercaDelFinal) chatArea.scrollTop = chatArea.scrollHeight;
  },

  formatearContenido(msg) {
    if (msg.role === 'user') return this.escaparHTML(msg.content);
    if (!msg.content) return `⏳ ${AGENTE.mensajes.pensando}`;
    return this.formatearMarkdown(msg.content);
  },

  renderizarFormulas(elemento) {
    if (!window.renderMathInElement) return;
    window.renderMathInElement(elemento, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false }
      ],
      throwOnError: false
    });
  },

  // Escapar HTML para mensajes del usuario (seguridad)
  escaparHTML(texto) {
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML.replace(/\n/g, '<br>');
  },

  // Formatear markdown básico en respuestas de la IA
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

  usarSugerencia(indice) {
    const input = document.getElementById('inputMensaje');
    input.value = AGENTE.sugerencias[indice].texto;
    this.enviar();
  },

  async enviar() {
    const input = document.getElementById('inputMensaje');
    const btnEnviar = document.getElementById('btnEnviar');
    const mensaje = input.value.trim();

    if (!mensaje || this.enviando) return;

    // El historial se toma antes de agregar el mensaje nuevo, para no duplicarlo
    const historial = this.historialReciente();

    this.historial.push({ role: 'user', content: mensaje });
    input.value = '';

    // Estado de carga
    this.enviando = true;
    btnEnviar.disabled = true;
    btnEnviar.textContent = 'Escribiendo...';
    btnEnviar.style.background = '#94a3b8';

    // Burbuja vacía que se va llenando conforme llega el texto
    const respuesta = { role: 'assistant', content: '' };
    this.historial.push(respuesta);
    this.renderHistorial();

    let pendiente = false;
    const alRecibir = (texto) => {
      respuesta.content = texto;
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(() => {
        pendiente = false;
        this.actualizarUltimo();
      });
    };

    try {
      respuesta.content = await this.consultarIA(mensaje, historial, alRecibir);
    } catch (error) {
      console.error('Error:', error);

      let mensajeError = AGENTE.mensajes.errorGeneral;
      if (error.message.includes('401') || error.message.includes('403') || error.message.includes('key')) {
        mensajeError = AGENTE.mensajes.errorConfig;
      } else if (error.message.includes('429') || error.message.includes('503')) {
        mensajeError = AGENTE.mensajes.errorLimite;
      } else if (error.message.includes('fetch') || error.message.includes('network')) {
        mensajeError = AGENTE.mensajes.errorRed;
      }

      // Si ya había llegado texto parcial, se conserva y se avisa abajo
      respuesta.content = respuesta.content
        ? respuesta.content + '\n\n' + mensajeError
        : mensajeError;
      respuesta.error = true;
    } finally {
      requestAnimationFrame(() => this.actualizarUltimo(true));
      this.enviando = false;
      btnEnviar.disabled = false;
      btnEnviar.textContent = 'Enviar';
      btnEnviar.style.background = '#0d9488';
      input.focus();
    }
  },

  // Últimos mensajes para dar contexto (sin la bienvenida ni los errores).
  // El system prompt vive en el Worker; aquí solo va la conversación.
  historialReciente() {
    return this.historial
      .filter(m => !m.error && !m.inicial && m.content)
      .slice(-AGENTE.config.maxHistorial)
      .map(({ role, content }) => ({ role, content }));
  },

  /**
   * Consulta al Worker. Si responde en streaming (text/event-stream) va
   * llamando alRecibir(textoAcumulado) con cada fragmento; si responde con
   * JSON normal devuelve todo de una vez.
   */
  async consultarIA(mensaje, historial, alRecibir) {
    const response = await fetch(AGENTE.config.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mensaje, historial, stream: true })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`HTTP ${response.status}: ${errorData.error?.message || errorData.error || 'Error en el Worker'}`);
    }

    const esStream = (response.headers.get('Content-Type') || '').includes('text/event-stream');
    const { texto, finishReason } = esStream
      ? await this.leerStream(response, alRecibir)
      : this.leerRespuesta(await response.json());

    if (finishReason === 'SAFETY') {
      return '🔒 La respuesta fue bloqueada por los filtros de seguridad. Intenta reformular tu pregunta.';
    }
    if (finishReason === 'PROHIBITED_CONTENT') {
      return '🚫 El contenido fue marcado como prohibido. Reformula tu pregunta.';
    }
    if (!texto) {
      throw new Error('Respuesta vacía del asistente');
    }
    if (finishReason === 'MAX_TOKENS') {
      return texto + '\n\n---\n\n⚠️ *La respuesta fue muy larga. Pídeme que continúe o que resuma.*';
    }
    if (finishReason && finishReason !== 'STOP') {
      console.warn('Finish reason inesperado:', finishReason);
      return texto + '\n\n*[Respuesta detenida: ' + finishReason + ']*';
    }
    return texto;
  },

  // Lee el stream SSE del Worker: líneas "data: {json}" con fragmentos de texto
  async leerStream(response, alRecibir) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let texto = '';
    let finishReason = null;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lineas = buffer.split('\n');
      buffer = lineas.pop(); // la última puede venir incompleta

      for (const linea of lineas) {
        if (!linea.startsWith('data:')) continue;
        const json = linea.slice(5).trim();
        if (!json || json === '[DONE]') continue;

        const parte = this.leerRespuesta(JSON.parse(json));
        if (parte.texto) {
          texto += parte.texto;
          alRecibir(texto);
        }
        if (parte.finishReason) finishReason = parte.finishReason;
      }
    }

    return { texto, finishReason };
  },

  // Extrae texto y finishReason de la respuesta del Worker
  leerRespuesta(data) {
    if (data.error) {
      throw new Error(data.error.message || data.error);
    }
    const candidate = data.candidates?.[0];
    return {
      texto: candidate?.content?.parts?.map(p => p.text || '').join('') || '',
      finishReason: this.normalizarFin(candidate?.finishReason)
    };
  },

  // OpenRouter usa "stop" / "length" / "content_filter"; se unifican en mayúsculas
  normalizarFin(motivo) {
    if (!motivo) return null;
    const equivalencias = { STOP: 'STOP', LENGTH: 'MAX_TOKENS', CONTENT_FILTER: 'SAFETY' };
    const m = String(motivo).toUpperCase();
    return equivalencias[m] || m;
  }
};
