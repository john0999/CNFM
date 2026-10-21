/* ==========================================================
   VIEW - QUÍMICA GAMIFICADA 5.0 (Aprobación 4/5 y Aleatorio)
========================================================== */

const VistaQuimica = {
  DATA: QUIMICA,
  semestreActual: null,
  aciertosActuales: 0, // <-- Contador de aciertos para el tema actual

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
      <div style="background: linear-gradient(135deg, #dc2626, #f87171); color: #fff; padding: 3rem 1.5rem; text-align: center;">
        <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">⚗️ Química</h2>
        <p style="opacity: 0.9;">Selecciona un semestre para comenzar tu entrenamiento.</p>
      </div>
      <div class="contenedor" style="padding: 2rem 1.5rem;">
        <button class="btn-volver" onclick="Router.ir('home')">← Volver al inicio</button>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
          ${Object.entries(this.DATA).map(([num, sem]) => `
            <div class="tarjeta-semestre-btn" data-id="${num}" style="background: #fff; border-radius: 16px; padding: 1.5rem; box-shadow: 0 4px 15px rgba(0,0,0,0.08); cursor: pointer; border-top: 5px solid #dc2626; transition: transform 0.2s;">
              <div style="font-size: 3rem; margin-bottom: 1rem;">${sem.icono}</div>
              <h3 style="color: #dc2626; margin-bottom: 0.5rem;">${sem.titulo}</h3>
              <p style="color: #64748b; font-size: 0.9rem;">${sem.descripcion}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    document.querySelectorAll('.tarjeta-semestre-btn').forEach(btn => {
      btn.addEventListener('click', (e) => Router.ir('quimica', `semestre-${e.currentTarget.dataset.id}`));
      btn.addEventListener('mouseenter', (e) => e.currentTarget.style.transform = 'translateY(-5px)');
      btn.addEventListener('mouseleave', (e) => e.currentTarget.style.transform = 'translateY(0)');
    });
  },

  renderSemestre(contenedor, num, data) {
    this.semestreActual = num;

    contenedor.innerHTML = `
      <div style="background: linear-gradient(135deg, #dc2626, #f87171); color: #fff; padding: 2rem 1.5rem;">
        <div class="contenedor">
          <button id="btnVolverSem" style="background: rgba(255,255,255,0.2); border: none; color: #fff; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer; margin-bottom: 1rem;">← Volver a semestres</button>
          <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem;">${data.icono} ${data.titulo}</h2>
          <p style="opacity: 0.9;">${data.subtitulo || data.descripcion}</p>
        </div>
      </div>
      <div class="contenedor" style="padding: 2rem 1.5rem; max-width: 850px; margin: 0 auto;">
        <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 1rem; border-radius: 8px; margin-bottom: 2rem; color: #7f1d1d;">
          <strong>📍 Contexto Chiapas:</strong> ${data.contexto}
        </div>
        <div id="listaTemasQuimica"></div>
      </div>
    `;

    document.getElementById('btnVolverSem').addEventListener('click', () => Router.ir('quimica'));
    
    let todosLosTemas = [];
    if (data.temas) todosLosTemas = todosLosTemas.concat(data.temas);
    if (data.temasAtómicos) todosLosTemas = todosLosTemas.concat(data.temasAtómicos);
    if (data.temasTabla) todosLosTemas = todosLosTemas.concat(data.temasTabla);
    if (data.temasEnlaces) todosLosTemas = todosLosTemas.concat(data.temasEnlaces);

    if (data.temas && data.temas.length === 1 && data.temas[0].esEnlace) {
      this.renderTablaEnlace(data.temas[0]);
      return;
    }

    this.renderTemas(todosLosTemas);
  },

  renderTablaEnlace(tema) {
    const contenedor = document.getElementById('listaTemasQuimica');
    contenedor.innerHTML = `
      <div style="background: #ffffff; border-radius: 16px; padding: 2rem; box-shadow: 0 4px 15px rgba(0,0,0,0.08); border-left: 6px solid #dc2626; text-align: center;">
        <div style="font-size: 4rem; margin-bottom: 1rem;">⚛️</div>
        <h3 style="color: #dc2626; font-size: 1.5rem; margin-bottom: 1rem;">${tema.titulo}</h3>
        <div class="contenido-tema" style="margin-bottom: 2rem; text-align: left; display: inline-block;">
          ${tema.contenido}
        </div>
        <br>
        <button onclick="Router.ir('${tema.ruta}')" style="background: #dc2626; color: #fff; border: none; padding: 1rem 2rem; border-radius: 8px; font-weight: bold; font-size: 1.1rem; cursor: pointer; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
          🚀 Abrir tabla periódica →
        </button>
      </div>
    `;
  },

  renderTemas(temas) {
    const contenedor = document.getElementById('listaTemasQuimica');
    let temasCompletados = JSON.parse(localStorage.getItem(`quimica_progreso_sem${this.semestreActual}`) || '[]');

    contenedor.innerHTML = temas.map((tema, index) => {
      const estaBloqueado = index > 0 && !temasCompletados.includes(temas[index - 1].id);
      const estaCompletado = temasCompletados.includes(tema.id);
      const opacityStyle = estaBloqueado ? 'opacity: 0.5; filter: grayscale(1);' : '';
      const iconoEstado = estaBloqueado ? '🔒' : (estaCompletado ? '✅' : '📖');

      return `
      <div style="background: #ffffff; border-radius: 16px; padding: 0; box-shadow: 0 4px 15px rgba(0,0,0,0.08); margin-bottom: 2.5rem; border-left: 6px solid ${estaBloqueado ? '#94a3b8' : '#dc2626'}; overflow: hidden; ${opacityStyle} position: relative;">
        
        ${estaBloqueado ? `
          <div style="position: absolute; inset: 0; background: rgba(255,255,255,0.6); z-index: 10; display: flex; flex-direction: column; align-items: center; justify-content: center; backdrop-filter: blur(2px);">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">🔒</div>
            <p style="font-weight: bold; color: #334155; text-align: center; padding: 0 1rem;">Completa el tema anterior para desbloquear.</p>
          </div>
        ` : ''}

        <div style="background: ${estaBloqueado ? '#cbd5e1' : (tema.imagen || '#dc2626')}; padding: 2rem 1.5rem; color: #fff; display: flex; align-items: center; gap: 1rem;">
          <div style="font-size: 2.5rem; background: rgba(255,255,255,0.2); border-radius: 12px; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center;">${iconoEstado}</div>
          <div>
            <span style="font-size: 0.8rem; text-transform: uppercase; font-weight: bold; opacity: 0.9;">Tema ${index + 1}</span>
            <h3 style="font-size: 1.5rem; margin: 0; color: #fff;">${tema.titulo}</h3>
          </div>
        </div>

        <div style="padding: 1.5rem;">
          <div class="contenido-tema" style="margin-bottom: 1.5rem;">${tema.contenido}</div>

          ${!estaBloqueado && tema.actividades ? `
          <div style="background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 12px; padding: 1.5rem; margin-top: 1.5rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-size: 1.5rem;">🎯</span>
                <h4 style="margin: 0; color: #1e293b;">Práctica Interactiva</h4>
              </div>
              <div style="font-size: 0.8rem; color: #dc2626; font-weight: bold;" id="progreso-texto-${tema.id}">Cargando...</div>
            </div>
            <div id="actividad-caja-${tema.id}"></div>
          </div>
          ` : ''}
        </div>
      </div>
      `;
    }).join('');

    temas.forEach((tema, index) => {
      if (tema.actividades && (index === 0 || temasCompletados.includes(temas[index - 1].id))) {
        this.aciertosActuales = 0; // Reiniciamos aciertos al cargar
        this.cargarActividad(tema.id, tema.actividades, 0);
      }
    });
  },

  cargarActividad(temaId, actividades, index) {
    const caja = document.getElementById(`actividad-caja-${temaId}`);
    const progresoTxt = document.getElementById(`progreso-texto-${temaId}`);
    if (!caja) return;

    // SI COMPLETÓ TODAS LAS ACTIVIDADES
    if (index >= actividades.length) {
      progresoTxt.innerHTML = `✅ Completado`;
      progresoTxt.style.color = `#22c55e`;
      
      // VALIDACIÓN DE APROBACIÓN (Mínimo 4 aciertos)
      if (this.aciertosActuales >= 4) {
        // APROBADO: Guardar progreso
        let progreso = JSON.parse(localStorage.getItem(`quimica_progreso_sem${this.semestreActual}`) || '[]');
        if (!progreso.includes(temaId)) {
          progreso.push(temaId);
          localStorage.setItem(`quimica_progreso_sem${this.semestreActual}`, JSON.stringify(progreso));
          
          setTimeout(() => {
            const data = this.DATA[this.semestreActual];
            let todosLosTemas = [];
            if (data.temas) todosLosTemas = todosLosTemas.concat(data.temas);
            if (data.temasAtómicos) todosLosTemas = todosLosTemas.concat(data.temasAtómicos);
            if (data.temasTabla) todosLosTemas = todosLosTemas.concat(data.temasTabla);
            if (data.temasEnlaces) todosLosTemas = todosLosTemas.concat(data.temasEnlaces);
            this.renderTemas(todosLosTemas);
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
        // REPROBADO: Mostrar alerta y botón para reintentar
        progresoTxt.innerHTML = `❌ Reprobado`;
        progresoTxt.style.color = `#ef4444`;
        
        caja.innerHTML = `
          <div style="text-align: center; padding: 1rem; background: #fee2e2; border-radius: 8px;">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">📚</div>
            <h4 style="color: #991b1b; margin-bottom: 0.5rem; font-size: 1.2rem;">Necesitas repasar</h4>
            <p style="color: #991b1b; font-size: 0.95rem; margin-bottom: 1rem;">Acertaste ${this.aciertosActuales} de 5. Debes acertar al menos 4 para avanzar.</p>
            <button onclick="VistaQuimica.reiniciarTema('${temaId}', ${JSON.stringify(actividades).replace(/"/g, '&quot;')})" style="background: #dc2626; color: #fff; border: none; padding: 0.6rem 1.5rem; border-radius: 8px; cursor: pointer; font-weight: bold;">
              🔄 Repasar e Intentar de nuevo
            </button>
          </div>
        `;
      }
      return;
    }

    const act = actividades[index];
    // MEZCLAR RESPUESTAS EN CADA INTENTO
    const opcionesMezcladas = [...act.opciones].sort(() => Math.random() - 0.5);

    progresoTxt.innerHTML = `Actividad ${index + 1} de ${actividades.length}`;

    caja.innerHTML = `
      <p style="font-weight: 600; margin-bottom: 1rem; color: #334155; font-size: 1.05rem;">${act.pregunta}</p>
      <div style="display: flex; flex-direction: column; gap: 0.6rem;" id="opciones-${temaId}-${index}">
        ${opcionesMezcladas.map((op, i) => `
          <button class="btn-opcion-quimica" 
                  data-tema="${temaId}" data-index="${index}" data-opcion="${op}"
                  data-correcta="${act.correcta}" data-explicacion="${act.explicacion}" data-total="${actividades.length}"
                  style="background: #ffffff; border: 2px solid #e2e8f0; padding: 0.8rem 1rem; border-radius: 8px; text-align: left; font-size: 0.95rem; cursor: pointer; transition: all 0.2s;">
            <span style="font-weight: bold; color: #64748b; margin-right: 0.5rem;">${String.fromCharCode(65 + i)})</span> ${op}
          </button>
        `).join('')}
      </div>
      <div id="feedback-${temaId}-${index}" style="display: none; margin-top: 1rem;"></div>
    `;

    caja.querySelectorAll('.btn-opcion-quimica').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget;
        this.comprobarRespuesta(target.dataset.tema, target.dataset.opcion, target.dataset.correcta, target.dataset.explicacion, parseInt(target.dataset.index), parseInt(target.dataset.total));
      });
      btn.addEventListener('mouseenter', (e) => e.currentTarget.style.borderColor = '#dc2626');
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
      this.aciertosActuales++; // <-- SUMAMOS ACIERTO
      feedback.style.background = '#dcfce7'; feedback.style.borderLeft = '4px solid #22c55e';
      feedback.innerHTML = `<strong style="color: #166534;">¡Excelente! +20 XP</strong><br><span style="color: #166534; font-size: 0.9rem;">${explicacion}</span>`;
      this.guardarXP(20);
    } else {
      feedback.style.background = '#fee2e2'; feedback.style.borderLeft = '4px solid #ef4444';
      feedback.innerHTML = `<strong style="color: #991b1b;">Incorrecto.</strong><br><span style="color: #991b1b; font-size: 0.9rem;">${explicacion}</span>`;
    }

    const btnSiguiente = document.createElement('button');
    btnSiguiente.innerText = (indexActual + 1 === totalActividades) ? "Terminar Tema 🏁" : "Siguiente Actividad →";
    btnSiguiente.style.cssText = "margin-top: 1rem; background: #dc2626; color: #fff; border: none; padding: 0.6rem 1.5rem; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 0.9rem; float: right; transition: transform 0.2s;";
    
    btnSiguiente.addEventListener('click', () => {
      const data = this.DATA[this.semestreActual];
      let listaTemas = [];
      if (data.temas) listaTemas = listaTemas.concat(data.temas);
      if (data.temasAtómicos) listaTemas = listaTemas.concat(data.temasAtómicos);
      if (data.temasTabla) listaTemas = listaTemas.concat(data.temasTabla);
      if (data.temasEnlaces) listaTemas = listaTemas.concat(data.temasEnlaces);
      
      const tema = listaTemas.find(t => t.id === temaId);
      this.cargarActividad(temaId, tema.actividades, indexActual + 1);
    });

    btnSiguiente.addEventListener('mouseenter', () => btnSiguiente.style.transform = 'scale(1.05)');
    btnSiguiente.addEventListener('mouseleave', () => btnSiguiente.style.transform = 'scale(1)');

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
    let xp = parseInt(localStorage.getItem('emsad_quimica_xp') || '0');
    localStorage.setItem('emsad_quimica_xp', xp + puntos);
    this.mostrarToast(`+${puntos} XP Ganados! ⚗️`);
  },

  mostrarToast(mensaje) {
    const toast = document.createElement('div');
    toast.style.cssText = "position: fixed; bottom: 30px; right: 30px; background: #dc2626; color: #fff; padding: 1rem 1.5rem; border-radius: 8px; font-weight: bold; box-shadow: 0 4px 15px rgba(0,0,0,0.2); z-index: 9999; animation: slideIn 0.3s;";
    toast.textContent = mensaje;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }
};