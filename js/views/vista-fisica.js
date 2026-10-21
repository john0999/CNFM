/* ==========================================================
   VIEW - FÍSICA GAMIFICADA 5.0 (Regla de Aprobación 4/5)
========================================================== */

const VistaFisica = {
  DATA: FISICA,
  semestreActual: null,
  aciertosTemaActual: 0, // Contador de aciertos del tema en curso

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
      <div style="background: linear-gradient(135deg, #1e293b, #334155); color: #fff; padding: 3rem 1.5rem; text-align: center;">
        <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">⚡ Física</h2>
        <p style="opacity: 0.9;">Selecciona un semestre para comenzar tu entrenamiento.</p>
      </div>
      <div class="contenedor" style="padding: 2rem 1.5rem;">
        <button class="btn-volver" onclick="Router.ir('home')">← Volver al inicio</button>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 2rem;">
          ${Object.entries(this.DATA).map(([num, sem]) => `
            <div class="tarjeta-semestre-btn" data-id="${num}" style="background: #fff; border-radius: 16px; padding: 1.5rem; box-shadow: 0 4px 15px rgba(0,0,0,0.08); cursor: pointer; border-top: 5px solid #7c3aed; transition: transform 0.2s;">
              <div style="font-size: 3rem; margin-bottom: 1rem;">${sem.icono}</div>
              <h3 style="color: #0f766e; margin-bottom: 0.5rem;">${sem.titulo}</h3>
              <p style="color: #64748b; font-size: 0.9rem;">${sem.descripcion}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    document.querySelectorAll('.tarjeta-semestre-btn').forEach(btn => {
      btn.addEventListener('click', (e) => Router.ir('fisica', `semestre-${e.currentTarget.dataset.id}`));
      btn.addEventListener('mouseenter', (e) => e.currentTarget.style.transform = 'translateY(-5px)');
      btn.addEventListener('mouseleave', (e) => e.currentTarget.style.transform = 'translateY(0)');
    });
  },

  renderSemestre(contenedor, num, data) {
    this.semestreActual = num;

    contenedor.innerHTML = `
      <div style="background: linear-gradient(135deg, #7c3aed, #a78bfa); color: #fff; padding: 2rem 1.5rem;">
        <div class="contenedor">
          <button id="btnVolverSem" style="background: rgba(255,255,255,0.2); border: none; color: #fff; padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer; margin-bottom: 1rem;">← Volver a semestres</button>
          <h2 style="font-size: 1.8rem; margin-bottom: 0.5rem;">${data.icono} ${data.titulo}</h2>
          <p style="opacity: 0.9;">${data.subtitulo}</p>
        </div>
      </div>
      <div class="contenedor" style="padding: 2rem 1.5rem; max-width: 850px; margin: 0 auto;">
        <div style="background: #f5f3ff; border-left: 4px solid #7c3aed; padding: 1rem; border-radius: 8px; margin-bottom: 2rem; color: #4c1d95;">
          <strong>📍 Contexto Chiapas:</strong> ${data.contexto}
        </div>
        <div id="listaTemasFisica"></div>
      </div>
    `;

    document.getElementById('btnVolverSem').addEventListener('click', () => Router.ir('fisica'));
    this.renderTemas(data.temas);
  },

  renderTemas(temas) {
    const contenedor = document.getElementById('listaTemasFisica');
    
    // Obtener el progreso guardado en el navegador
    let temasCompletados = JSON.parse(localStorage.getItem(`fisica_progreso_sem${this.semestreActual}`) || '[]');

    contenedor.innerHTML = temas.map((tema, index) => {
      // Lógica de bloqueo: El tema 1 siempre está libre. El tema N requiere que N-1 esté completado.
      const estaBloqueado = index > 0 && !temasCompletados.includes(temas[index - 1].id);
      const estaCompletado = temasCompletados.includes(tema.id);

      const opacityStyle = estaBloqueado ? 'opacity: 0.5; filter: grayscale(1);' : '';
      const iconoEstado = estaBloqueado ? '🔒' : (estaCompletado ? '✅' : '📖');

      return `
      <div style="background: #ffffff; border-radius: 16px; padding: 0; box-shadow: 0 4px 15px rgba(0,0,0,0.08); margin-bottom: 2.5rem; border-left: 6px solid ${estaBloqueado ? '#94a3b8' : '#7c3aed'}; overflow: hidden; ${opacityStyle} position: relative;">
        
        ${estaBloqueado ? `
          <div style="position: absolute; inset: 0; background: rgba(255,255,255,0.6); z-index: 10; display: flex; flex-direction: column; align-items: center; justify-content: center; backdrop-filter: blur(2px);">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">🔒</div>
            <p style="font-weight: bold; color: #334155; text-align: center; padding: 0 1rem;">Completa el Tema ${index} para desbloquear.</p>
          </div>
        ` : ''}

        <div style="background: ${estaBloqueado ? '#cbd5e1' : tema.imagen}; padding: 2rem 1.5rem; color: #fff; display: flex; align-items: center; gap: 1rem;">
          <div style="font-size: 2.5rem; background: rgba(255,255,255,0.2); border-radius: 12px; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center;">${iconoEstado}</div>
          <div>
            <span style="font-size: 0.8rem; text-transform: uppercase; font-weight: bold; opacity: 0.9;">Tema ${index + 1}</span>
            <h3 style="font-size: 1.5rem; margin: 0; color: #fff;">${tema.titulo}</h3>
          </div>
        </div>

        <div style="padding: 1.5rem;">
          <div class="contenido-tema" style="margin-bottom: 1.5rem;">${tema.concepto}</div>
          ${tema.ejemploChiapas}

          ${!estaBloqueado ? `
          <div id="seccion-actividad-${tema.id}" style="background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 12px; padding: 1.5rem; margin-top: 1.5rem;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <span style="font-size: 1.5rem;">🎯</span>
                <h4 style="margin: 0; color: #1e293b;">Práctica Interactiva (Necesitas 4 aciertos para pasar)</h4>
              </div>
              <div style="font-size: 0.8rem; color: #7c3aed; font-weight: bold;" id="progreso-texto-${tema.id}">Cargando...</div>
            </div>
            <div id="actividad-caja-${tema.id}"></div>
          </div>
          ` : ''}
        </div>
      </div>
      `;
    }).join('');

    // Iniciar actividades solo si no están bloqueados
    temas.forEach((tema, index) => {
      if (index === 0 || temasCompletados.includes(temas[index - 1].id)) {
        // Reiniciar contador de aciertos al cargar el tema
        this.aciertosTemaActual = 0; 
        this.cargarActividad(tema.id, tema.actividades, 0);
      }
    });
  },

  cargarActividad(temaId, actividades, index) {
    const caja = document.getElementById(`actividad-caja-${temaId}`);
    const progresoTxt = document.getElementById(`progreso-texto-${temaId}`);
    if (!caja) return;

    // SI COMPLETÓ TODAS LAS ACTIVIDADES (Fin del intento)
    if (index >= actividades.length) {
      progresoTxt.innerHTML = `Resultados...`;
      
      // EVALUACIÓN: ¿Aprobó al menos 4 de 5?
      if (this.aciertosTemaActual >= 4) {
        progresoTxt.innerHTML = `✅ Aprobado (${this.aciertosTemaActual}/5)`;
        progresoTxt.style.color = `#22c55e`;
        
        // Guardar en localStorage que este tema se completó
        let progreso = JSON.parse(localStorage.getItem(`fisica_progreso_sem${this.semestreActual}`) || '[]');
        if (!progreso.includes(temaId)) {
          progreso.push(temaId);
          localStorage.setItem(`fisica_progreso_sem${this.semestreActual}`, JSON.stringify(progreso));
          
          setTimeout(() => {
            const data = this.DATA[this.semestreActual];
            this.renderTemas(data.temas);
          }, 2000);
        }
        
        caja.innerHTML = `
          <div style="text-align: center; padding: 1rem;">
            <div style="font-size: 4rem; margin-bottom: 0.5rem; animation: bounceIn 0.5s;">🏆</div>
            <h4 style="color: #7c3aed; margin-bottom: 0.5rem; font-size: 1.3rem;">¡Tema Superado!</h4>
            <p style="color: #64748b; font-size: 0.95rem;">Tuviste ${this.aciertosTemaActual} aciertos de 5. Has desbloqueado el siguiente nivel.</p>
          </div>
        `;
      } else {
        // REPROBÓ
        progresoTxt.innerHTML = `❌ Reprobado (${this.aciertosTemaActual}/5)`;
        progresoTxt.style.color = `#ef4444`;
        
        caja.innerHTML = `
          <div style="text-align: center; padding: 1rem;">
            <div style="font-size: 4rem; margin-bottom: 0.5rem; animation: shake 0.5s;">📚</div>
            <h4 style="color: #ef4444; margin-bottom: 0.5rem; font-size: 1.3rem;">Necesitas repasar</h4>
            <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 1rem;">Solo acertaste ${this.aciertosTemaActual}. Necesitas al menos 4 aciertos para avanzar.</p>
            <button id="btnReintentar-${temaId}" style="background: #7c3aed; color: #fff; border: none; padding: 0.6rem 1.5rem; border-radius: 8px; cursor: pointer; font-weight: bold;">
              🔄 Volver a intentar
            </button>
          </div>
        `;

        document.getElementById(`btnReintentar-${temaId}`).addEventListener('click', () => {
          this.aciertosTemaActual = 0; // Reiniciar contador
          this.cargarActividad(temaId, actividades, 0);
        });
      }
      return;
    }

    const act = actividades[index];
    
    // ALEATORIZACIÓN DOBLE: Mezcla las opciones y se asegura que no salgan en el orden original
    const opcionesMezcladas = [...act.opciones].sort(() => Math.random() - 0.5);

    progresoTxt.innerHTML = `Actividad ${index + 1} de ${actividades.length} | Aciertos: ${this.aciertosTemaActual}`;

    caja.innerHTML = `
      <p style="font-weight: 600; margin-bottom: 1rem; color: #334155; font-size: 1.05rem;">${act.pregunta}</p>
      <div style="display: flex; flex-direction: column; gap: 0.6rem;" id="opciones-${temaId}-${index}">
        ${opcionesMezcladas.map((op, i) => `
          <button class="btn-opcion-fisica" 
                  data-tema="${temaId}" data-index="${index}" data-opcion="${op}"
                  data-correcta="${act.correcta}" data-explicacion="${act.explicacion}" data-total="${actividades.length}"
                  style="background: #ffffff; border: 2px solid #e2e8f0; padding: 0.8rem 1rem; border-radius: 8px; text-align: left; font-size: 0.95rem; cursor: pointer; transition: all 0.2s;">
            <span style="font-weight: bold; color: #64748b; margin-right: 0.5rem;">${String.fromCharCode(65 + i)})</span> ${op}
          </button>
        `).join('')}
      </div>
      <div id="feedback-${temaId}-${index}" style="display: none; margin-top: 1rem;"></div>
    `;

    caja.querySelectorAll('.btn-opcion-fisica').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget;
        this.comprobarRespuesta(target.dataset.tema, target.dataset.opcion, target.dataset.correcta, target.dataset.explicacion, parseInt(target.dataset.index), parseInt(target.dataset.total));
      });
      btn.addEventListener('mouseenter', (e) => e.currentTarget.style.borderColor = '#7c3aed');
      btn.addEventListener('mouseleave', (e) => e.currentTarget.style.borderColor = '#e2e8f0');
    });
  },

  comprobarRespuesta(temaId, seleccion, correcta, explicacion, indexActual, totalActividades) {
    const feedback = document.getElementById(`feedback-${temaId}-${indexActual}`);
    const botones = document.querySelectorAll(`#opciones-${temaId}-${indexActual} button`);
    let esCorrecta = (seleccion === correcta);
    
    if (esCorrecta) {
      this.aciertosTemaActual++;
      // Actualizar el contador en la pantalla
      document.getElementById(`progreso-texto-${temaId}`).innerHTML = `Actividad ${indexActual + 1} de ${totalActividades} | Aciertos: ${this.aciertosTemaActual}`;
    }

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
      feedback.style.background = '#dcfce7'; feedback.style.borderLeft = '4px solid #22c55e';
      feedback.innerHTML = `<strong style="color: #166534;">¡Correcto! +20 XP</strong><br><span style="color: #166534; font-size: 0.9rem;">${explicacion}</span>`;
      this.guardarXP(20);
    } else {
      feedback.style.background = '#fee2e2'; feedback.style.borderLeft = '4px solid #ef4444';
      feedback.innerHTML = `<strong style="color: #991b1b;">Incorrecto.</strong><br><span style="color: #991b1b; font-size: 0.9rem;">${explicacion}</span>`;
    }

    const btnSiguiente = document.createElement('button');
    btnSiguiente.innerText = (indexActual + 1 === totalActividades) ? "Ver Resultados 🏁" : "Siguiente Actividad →";
    btnSiguiente.style.cssText = "margin-top: 1rem; background: #7c3aed; color: #fff; border: none; padding: 0.6rem 1.5rem; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 0.9rem; float: right; transition: transform 0.2s;";
    
    btnSiguiente.addEventListener('click', () => {
      const tema = this.DATA[this.semestreActual].temas.find(t => t.id === temaId);
      this.cargarActividad(temaId, tema.actividades, indexActual + 1);
    });

    btnSiguiente.addEventListener('mouseenter', () => btnSiguiente.style.transform = 'scale(1.05)');
    btnSiguiente.addEventListener('mouseleave', () => btnSiguiente.style.transform = 'scale(1)');

    feedback.appendChild(btnSiguiente);
    const clearDiv = document.createElement('div');
    clearDiv.style.clear = 'both';
    feedback.appendChild(clearDiv);
  },

  guardarXP(puntos) {
    let xp = parseInt(localStorage.getItem('emsad_fisica_xp') || '0');
    localStorage.setItem('emsad_fisica_xp', xp + puntos);
    this.mostrarToast(`+${puntos} XP Ganados! ⚡`);
  },

  mostrarToast(mensaje) {
    const toast = document.createElement('div');
    toast.style.cssText = "position: fixed; bottom: 30px; right: 30px; background: #7c3aed; color: #fff; padding: 1rem 1.5rem; border-radius: 8px; font-weight: bold; box-shadow: 0 4px 15px rgba(0,0,0,0.2); z-index: 9999; animation: slideIn 0.3s;";
    toast.textContent = mensaje;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }
};