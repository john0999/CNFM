/* ==========================================================
   DATA - Soporte y Contacto
========================================================== */

const SOPORTE = {
  titulo: "📬 Soporte y Contacto",
  subtitulo: "¿Tienes dudas, sugerencias o encontraste un error? Escríbenos.",
  
  // ===== Web3Forms =====
  web3forms: {
    endpoint: "https://api.web3forms.com/submit",
    accessKey: "dbe1ab12-e847-4372-8bff-1285077480d6"    // ← Tu access key
  },

  // ===== Información del desarrollador =====
  desarrollador: {
    nombre: "Johnny Morales Gómez",              // ← CAMBIA ESTO
    rol: "ING. EN DESARROLLO Y GESTION DE SOFTWARE",          // ← CAMBIA ESTO
    descripcion: "Soy un desarrollador apasionado por la tecnología y la educación. Este portal fue creado para apoyar a los estudiantes de EMSAD Chiapas con recursos digitales de calidad.",
    avatar: "👨‍💻",                             // ← Puedes poner un emoji o URL de imagen
    ubicacion: "Chiapas, México",
    año: "2026"
  },

  // ===== Canales de contacto =====
  // Elige los que uses y borra los que no
  canales: [
    {
      tipo: "email",
      icono: "📧",
      titulo: "Correo electrónico",
      valor: "moralesgomezjohnny@gmail.com",           // ← CAMBIA ESTO
      enlace: "mailto:moralesgomezjohnny@gmail.com",
      descripcion: "Respuesta en 24-48 horas"
    },
    {
      tipo: "github",
      icono: "🐙",
      titulo: "GitHub",
      valor: "john0999",                      // ← CAMBIA ESTO
      enlace: "https://github.com/john0999",
      descripcion: "Reporta errores técnicos"
    }
  ],

  // ===== Tipos de mensaje para el formulario =====
  tiposMensaje: [
    { value: "sugerencia", label: "💡 Sugerencia" },
    { value: "error",      label: "🐛 Reportar error" },
    { value: "contenido",  label: "📚 Solicitar contenido" },
    { value: "colaboracion", label: "🤝 Colaboración" },
    { value: "otro",       label: "💬 Otro" }
  ],

  // ===== Preguntas frecuentes =====
  faq: [
    {
      pregunta: "¿Cómo puedo reportar un error en el contenido?",
      respuesta: "Usa el formulario con la opción 'Reportar error', o escríbenos por WhatsApp. Menciona la materia, semestre y tema donde encontraste el error."
    },
    {
      pregunta: "¿Puedo usar este material en mi escuela?",
      respuesta: "¡Sí! El contenido es de libre uso con fines educativos. Solo te pedimos mencionar la fuente cuando lo compartas."
    },
    {
      pregunta: "¿Van a agregar más materias o temas?",
      respuesta: "Sí, estamos trabajando constantemente. Envía tu sugerencia con la opción 'Solicitar contenido' y lo tomaremos en cuenta."
    },
    {
      pregunta: "¿La página funciona sin internet?",
      respuesta: "Sí, está configurada como PWA. Después de la primera visita, funciona sin conexión. Puedes instalarla desde el menú del navegador."
    }
  ],

  // ===== Cómo se reciben los mensajes =====
  // Formspree (gratis, sin backend) - solo 1 paso
  formEndpoint: "https://formspree.io/f/TU-CODIGO",  // ← CAMBIA ESTO (ver instrucciones abajo)
};