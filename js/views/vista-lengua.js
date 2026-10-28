/* ==========================================================
   VIEW - LENGUA Y COMUNICACIÓN (Gamificada)
========================================================== */

const VistaLengua = {
  DATA: LENGUA,
  semestreActual: null,
  aciertosActuales: 0,

  render(contenedor, params = {}) {
    const { id } = params;
    if (!id) return this.renderSelector(contenedor);

    if (id.startsWith('semestre-')) {
      const sem = id.replace('semestre-', '');
      const data = this.DATA[sem];
      if (!data) return this.renderSelector(contenedor);
      return this.renderSemestre(contenedor, sem, data);
    }
    this.renderSelector(contenedor);
  },

  renderSelector(contenedor) {
    contenedor.innerHTML = `
      <div style="background: linear-gradient(135deg, #e11d48, #be123c); color: #fff; padding: 3rem 1.5rem; text-align: center;">
        <img src="images/lengua/alebrije-jaguar.svg" alt="Balam, el alebrije-jaguar" style="width: 130px; margin: 0 auto 0.5rem; background: rgba(255,255,255,0.9); border-radius: 50%; padding: 0.6rem;">
        <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">📖 Lengua y Comunicación</h2>
        <p style="opacity: 0.9;">Selecciona un semestre para comenzar tu aprendizaje. ¡Balam, el alebrije, te acompaña en el primer semestre!</p>
      </div>
      <div class="contenedor" style="padding: 2rem 1.5rem;">
        <button class="btn-volver" onclick="Router.ir('home')">← Volver al inicio</button>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
          ${Object.entries(this.DATA).map(([num, sem]) => `
            <div class="tarjeta-semestre-btn" data-id="${num}" style="background: #fff; border-radius: 16px; padding: 1.5rem; box-shadow: 0 4px 15px rgba(0,0,0,0.08); cursor: pointer; border-top: 5px solid #e11d48; transition: transform 0.2s;">
              <div style="font-size: 3rem; margin-bottom: 1rem;">${sem.icono || '📘'}</div>
              <h3 style="color: #be123c; margin-bottom: 0.5rem;">${sem.titulo || 'Semestre ' + num}</h3>
              <p style="color: #64748b; font-size: 0.9rem;">${sem.subtitulo || sem.descripcion || ''}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    document.querySelectorAll('.tarjeta-semestre-btn').forEach(btn => {
      btn.addEventListener('click', (e) => Router.ir('lengua', `semestre-${e.currentTarget.dataset.id}`));
      btn.addEventListener('mouseenter', (e) => e.currentTarget.style.transform = 'translateY(-5px)');
      btn.addEventListener('mouseleave', (e) => e.currentTarget.style.transform = 'translateY(0)');
    });
  },

  renderSemestre(contenedor, num, data) {
    this.semestreActual = num;

    contenedor.innerHTML = `
      <div class="contenedor materia-header" style="padding-top: 2rem;">
        <button id="btnVolverSem" class="btn-volver">← Volver a semestres</button>
        <div class="materia-titulo-wrap">
          <span class="materia-numero" style="background: linear-gradient(135deg, #e11d48, #be123c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 4rem; font-weight: 900;">${num}</span>
          <div class="materia-info">
            <h2 style="color: #be123c; font-size: 1.6rem; margin-bottom: 0.2rem;">${data.icono || '📘'} ${data.titulo || 'Semestre ' + num}</h2>
            <p style="color: #e11d48; font-weight: 600;">${data.subtitulo || ''}</p>
            <p style="color: #64748b; font-size: 0.9rem;">${data.semestre || ''}</p>
          </div>
        </div>
        <div class="materia-contexto" style="border-left-color: #e11d48; background: #fff1f2; color: #881337;">
          <strong>📍 Contexto Chiapas:</strong> ${data.contexto || ''}
        </div>
      </div>

      <div class="contenedor materia-contenido">
        <aside class="indice" id="indiceLengua"></aside>
        <section class="temas-detalle" id="temasDetalleLengua"></section>
      </div>
    `;

    document.getElementById('btnVolverSem').addEventListener('click', () => Router.ir('lengua'));
    
    const temas = data.temas || [];
    this.renderIndice(temas);
    this.renderTemas(temas);
  },

  renderIndice(temas) {
    const indice = document.getElementById('indiceLengua');
    if (!indice) return;
    let temasCompletados = JSON.parse(localStorage.getItem(`lengua_progreso_sem${this.semestreActual}`) || '[]');

    indice.innerHTML = `
      <h4>📑 TEMAS (${temas.length})</h4>
      <ul>
        ${temas.map((t, i) => {
          const completado = temasCompletados.includes(t.id);
          const bloqueado = i > 0 && !temasCompletados.includes(temas[i-1].id);
          return `
            <li>
              <a href="#${t.id}" class="${bloqueado ? 'bloqueado' : ''}" data-target="${t.id}" onclick="event.preventDefault(); if(!${bloqueado}) Utils.scrollA('${t.id}')">
                <span style="${bloqueado ? 'opacity: 0.5;' : ''}">${bloqueado ? '🔒' : t.icono} ${t.titulo}</span>
                ${completado ? '<span class="check">✓</span>' : ''}
              </a>
            </li>
          `;
        }).join('')}
      </ul>
    `;

    indice.querySelectorAll('a:not(.bloqueado)').forEach(a => {
      a.addEventListener('click', () => {
        indice.querySelectorAll('a').forEach(x => x.classList.remove('activo'));
        a.classList.add('activo');
      });
    });
  },

  renderTemas(temas) {
    const detalle = document.getElementById('temasDetalleLengua');
    if (!detalle) return;
    let temasCompletados = JSON.parse(localStorage.getItem(`lengua_progreso_sem${this.semestreActual}`) || '[]');

    detalle.innerHTML = temas.map((tema, index) => {
      const estaBloqueado = index > 0 && !temasCompletados.includes(temas[index - 1].id);
      const estaCompletado = temasCompletados.includes(tema.id);
      const opacityStyle = estaBloqueado ? 'opacity: 0.5; filter: grayscale(1);' : '';
      const iconoEstado = estaBloqueado ? '🔒' : (estaCompletado ? '✅' : '📖');

      return `
      <article class="bloque-tema" id="${tema.id}" style="${opacityStyle} position: relative; border-left: 6px solid ${estaBloqueado ? '#94a3b8' : '#e11d48'}; padding: 0; overflow: hidden; margin-bottom: 2rem;">
        
        ${estaBloqueado ? `
          <div style="position: absolute; inset: 0; background: rgba(255,255,255,0.6); z-index: 10; display: flex; flex-direction: column; align-items: center; justify-content: center; backdrop-filter: blur(2px);">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">🔒</div>
            <p style="font-weight: bold; color: #334155; text-align: center; padding: 0 1rem;">Completa el tema anterior para desbloquear.</p>
          </div>
        ` : ''}

        <div style="background: ${estaBloqueado ? '#cbd5e1' : (tema.imagen || '#e11d48')}; padding: 1.5rem; color: #fff; display: flex; align-items: center; gap: 1rem;">
          <div style="font-size: 2rem; background: rgba(255,255,255,0.2); border-radius: 12px; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center;">${iconoEstado}</div>
          <div>
            <h3 style="font-size: 1.3rem; margin: 0; color: #fff;">${tema.titulo}</h3>
          </div>
        </div>

        <div style="padding: 1.5rem;">
          <div class="contenido-tema" style="margin-bottom: 1.5rem;">${tema.contenido}</div>
          ${this.renderEstudio(tema.id)}

          ${!estaBloqueado && tema.actividades ? `
          <div style="background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 12px; padding: 1.5rem; margin-top: 1.5rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-size: 1.5rem;">🎯</span>
                <h4 style="margin: 0; color: #1e293b;">Práctica Interactiva</h4>
              </div>
              <div style="font-size: 0.8rem; color: #e11d48; font-weight: bold;" id="progreso-texto-${tema.id}">Cargando...</div>
            </div>
            <div id="actividad-caja-${tema.id}"></div>
          </div>
          ` : ''}
        </div>
      </article>
      `;
    }).join('');

    temas.forEach((tema, index) => {
      if (tema.actividades && (index === 0 || temasCompletados.includes(temas[index - 1].id))) {
        this.aciertosActuales = 0;
        this.cargarActividad(tema.id, tema.actividades, 0);
      }
    });
  },

  // Material de estudio ampliado (js/data/lengua-estudio.js), plegable
  renderEstudio(temaId) {
    const extra = typeof LENGUA_ESTUDIO !== 'undefined' && LENGUA_ESTUDIO[temaId];
    if (!extra) return '';
    return `
      <details class="estudio-extra">
        <summary>📚 Estudia más sobre este tema</summary>
        <div class="contenido-tema">${extra}</div>
      </details>
    `;
  },

  cargarActividad(temaId, actividades, index) {
    const caja = document.getElementById(`actividad-caja-${temaId}`);
    const progresoTxt = document.getElementById(`progreso-texto-${temaId}`);
    if (!caja) return;

    if (index >= actividades.length) {
      progresoTxt.innerHTML = `✅ Completado`;
      progresoTxt.style.color = `#22c55e`;
      
      if (this.aciertosActuales >= 4) {
        let progreso = JSON.parse(localStorage.getItem(`lengua_progreso_sem${this.semestreActual}`) || '[]');
        if (!progreso.includes(temaId)) {
          progreso.push(temaId);
          localStorage.setItem(`lengua_progreso_sem${this.semestreActual}`, JSON.stringify(progreso));
          
          setTimeout(() => {
            const data = this.DATA[this.semestreActual];
            this.renderIndice(data.temas || []);
            this.renderTemas(data.temas || []);
          }, 1500);
        }
        
        caja.innerHTML = `
          <div style="text-align: center; padding: 1rem;">
            <div style="font-size: 4rem; margin-bottom: 0.5rem; animation: bounceIn 0.5s;">🏆</div>
            <h4 style="color: #22c55e; margin-bottom: 0.5rem; font-size: 1.3rem;">¡Nivel Superado!</h4>
            <p style="color: #64748b; font-size: 0.95rem;">Acertaste ${this.aciertosActuales} de 5. Has desbloqueado el siguiente tema.</p>
          </div>
        `;
      } else {
        progresoTxt.innerHTML = `❌ Reprobado`;
        progresoTxt.style.color = `#ef4444`;
        caja.innerHTML = `
          <div style="text-align: center; padding: 1rem; background: #fee2e2; border-radius: 8px;">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">📚</div>
            <h4 style="color: #991b1b; margin-bottom: 0.5rem; font-size: 1.2rem;">Necesitas repasar</h4>
            <p style="color: #991b1b; font-size: 0.95rem; margin-bottom: 1rem;">Acertaste ${this.aciertosActuales} de 5. Debes acertar al menos 4 para avanzar.</p>
            <button onclick="VistaLengua.reiniciarTema('${temaId}', ${JSON.stringify(actividades).replace(/"/g, '&quot;')})" style="background: #e11d48; color: #fff; border: none; padding: 0.6rem 1.5rem; border-radius: 8px; cursor: pointer; font-weight: bold;">
              🔄 Repasar e Intentar de nuevo
            </button>
          </div>
        `;
      }
      return;
    }

    const act = actividades[index];
    const opcionesMezcladas = [...act.opciones].sort(() => Math.random() - 0.5);

    progresoTxt.innerHTML = `Actividad ${index + 1} de ${actividades.length}`;

    caja.innerHTML = `
      <p style="font-weight: 600; margin-bottom: 1rem; color: #334155; font-size: 1.05rem;">${act.pregunta}</p>
      <div style="display: flex; flex-direction: column; gap: 0.6rem;" id="opciones-${temaId}-${index}">
        ${opcionesMezcladas.map((op, i) => `
          <button class="btn-opcion-lengua" 
                  data-tema="${temaId}" data-index="${index}" data-opcion="${op}"
                  data-correcta="${act.correcta}" data-explicacion="${act.explicacion}" data-total="${actividades.length}"
                  style="background: #ffffff; border: 2px solid #e2e8f0; padding: 0.8rem 1rem; border-radius: 8px; text-align: left; font-size: 0.95rem; cursor: pointer; transition: all 0.2s;">
            <span style="font-weight: bold; color: #64748b; margin-right: 0.5rem;">${String.fromCharCode(65 + i)})</span> ${op}
          </button>
        `).join('')}
      </div>
      <div id="feedback-${temaId}-${index}" style="display: none; margin-top: 1rem;"></div>
    `;

    caja.querySelectorAll('.btn-opcion-lengua').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget;
        this.comprobarRespuesta(target.dataset.tema, target.dataset.opcion, target.dataset.correcta, target.dataset.explicacion, parseInt(target.dataset.index), parseInt(target.dataset.total));
      });
      btn.addEventListener('mouseenter', (e) => e.currentTarget.style.borderColor = '#e11d48');
      btn.addEventListener('mouseleave', (e) => e.currentTarget.style.borderColor = '#e2e8f0');
    });
  },

  comprobarRespuesta(temaId, seleccion, correcta, explicacion, indexActual, totalActividades) {
    const feedback = document.getElementById(`feedback-${temaId}-${indexActual}`);
    const botones = document.querySelectorAll(`#opciones-${temaId}-${indexActual} button`);
    let esCorrecta = (seleccion === correcta);
    
    botones.forEach(btn => {
      btn.disabled = true;
      btn.style.cursor = 'default';
      const textoBtn = btn.innerText.replace(/^[A-E]\)\s/, ''); 

      if (textoBtn === correcta) {
        btn.style.background = '#dcfce7'; btn.style.borderColor = '#22c55e'; btn.style.color = '#166534';
        btn.innerHTML = `✅ ${btn.innerHTML}`;
      } else if (textoBtn === seleccion && !esCorrecta) {
        btn.style.background = '#fee2e2'; btn.style.borderColor = '#ef4444'; btn.style.color = '#991b1b';
        btn.innerHTML = `❌ ${btn.innerHTML}`;
      } else {
        btn.style.opacity = '0.5';
      }
    });

    feedback.style.display = 'block';
    feedback.style.padding = '1rem';
    feedback.style.borderRadius = '8px';
    
    if (esCorrecta) {
      this.aciertosActuales++;
      feedback.style.background = '#dcfce7'; feedback.style.borderLeft = '4px solid #22c55e';
      feedback.innerHTML = `<strong style="color: #166534;">¡Excelente! +20 XP</strong><br><span style="color: #166534; font-size: 0.9rem;">${explicacion}</span>`;
      this.guardarXP(20);
    } else {
      feedback.style.background = '#fee2e2'; feedback.style.borderLeft = '4px solid #ef4444';
      feedback.innerHTML = `<strong style="color: #991b1b;">Incorrecto.</strong><br><span style="color: #991b1b; font-size: 0.9rem;">${explicacion}</span>`;
    }

    const btnSiguiente = document.createElement('button');
    btnSiguiente.innerText = (indexActual + 1 === totalActividades) ? "Terminar Tema 🏁" : "Siguiente Actividad →";
    btnSiguiente.style.cssText = "margin-top: 1rem; background: #e11d48; color: #fff; border: none; padding: 0.6rem 1.5rem; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 0.9rem; float: right; transition: transform 0.2s;";
    
    btnSiguiente.addEventListener('click', () => {
      const data = this.DATA[this.semestreActual];
      const tema = data.temas.find(t => t.id === temaId);
      this.cargarActividad(temaId, tema.actividades, indexActual + 1);
    });

    feedback.appendChild(btnSiguiente);
    const clearDiv = document.createElement('div');
    clearDiv.style.clear = 'both';
    feedback.appendChild(clearDiv);
  },

  reiniciarTema(temaId, actividades) {
    this.aciertosActuales = 0;
    this.cargarActividad(temaId, actividades, 0);
  },

  guardarXP(puntos) {
    let xp = parseInt(localStorage.getItem('emsad_lengua_xp') || '0');
    localStorage.setItem('emsad_lengua_xp', xp + puntos);
    this.mostrarToast(`+${puntos} XP Ganados! 📖`);
  },

  mostrarToast(mensaje) {
    const toast = document.createElement('div');
    toast.style.cssText = "position: fixed; bottom: 30px; right: 30px; background: #e11d48; color: #fff; padding: 1rem 1.5rem; border-radius: 8px; font-weight: bold; box-shadow: 0 4px 15px rgba(0,0,0,0.2); z-index: 9999; animation: slideIn 0.3s;";
    toast.textContent = mensaje;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }
};