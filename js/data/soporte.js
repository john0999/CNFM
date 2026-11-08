/* ==========================================================
   DATA - Centro de Soporte
   Solo canales de soporte: WhatsApp y correo.
========================================================== */

const SOPORTE = {
  titulo: "🛟 Centro de Soporte",
  subtitulo: "¿Algo no funciona, encontraste un error o tienes una duda sobre la app? Escríbenos y te ayudamos.",

  // ===== Correo de soporte =====
  // No se muestra escrito en la página: solo se usa en el botón «Escribir un correo».
  correo: "moralesgomezjohnny@gmail.com",

  // ===== Web3Forms (envío del formulario) =====
  web3forms: {
    endpoint: "https://api.web3forms.com/submit",
    accessKey: "dbe1ab12-e847-4372-8bff-1285077480d6"
  },

  // ===== Canales de contacto =====
  canales: [
    {
      tipo: "whatsapp",
      icono: '<i class="fa-brands fa-whatsapp"></i>',
      titulo: "Canal de WhatsApp",
      descripcion: "Sigue el canal oficial de Quantix para recibir avisos, novedades y actualizaciones.",
      accion: "Seguir el canal",
      enlace: "https://whatsapp.com/channel/0029Vb96OZrDuMRozgYqyc1n"
    },
    {
      tipo: "correo",
      icono: '<i class="fa-solid fa-envelope"></i>',
      titulo: "Correo de soporte",
      descripcion: "Para reportes, dudas técnicas o enviar capturas de pantalla. Respuesta en 24 a 48 horas hábiles.",
      accion: "Escribir un correo",
      enlace: "correo" // se arma con SOPORTE.correo
    }
  ],

  // ===== Antes de escribir =====
  consejos: [
    { icono: "📚", texto: "Indica la <strong>materia, el semestre y el tema</strong> donde está el problema." },
    { icono: "📱", texto: "Dinos qué <strong>dispositivo y navegador</strong> usas (por ejemplo: celular Android con Chrome)." },
    { icono: "🖼️", texto: "Si puedes, envía una <strong>captura de pantalla</strong> por correo." },
    { icono: "🔄", texto: "Si no ves un cambio reciente, <strong>cierra y vuelve a abrir</strong> la app antes de reportarlo." }
  ],

  // ===== Tipos de mensaje para el formulario =====
  tiposMensaje: [
    { value: "error",      label: "🐛 Reportar un error en el contenido" },
    { value: "tecnico",    label: "⚙️ Problema técnico (no carga, no se guarda mi avance)" },
    { value: "duda",       label: "❓ Duda sobre cómo usar la app" },
    { value: "sugerencia", label: "💡 Sugerencia" },
    { value: "contenido",  label: "📚 Solicitar un tema o materia" },
    { value: "otro",       label: "💬 Otro" }
  ],

  // ===== Preguntas frecuentes =====
  faq: [
    {
      pregunta: "Un tema sigue bloqueado aunque ya contesté el anterior. ¿Qué hago?",
      respuesta: "Cada tema se desbloquea al aprobar el anterior con al menos 4 de 5 aciertos. Si tuviste 3 o menos, repasa el tema y la sección «Estudia más», y vuelve a intentarlo."
    },
    {
      pregunta: "Perdí mi avance o mis XP. ¿Por qué?",
      respuesta: "Tu avance se guarda en el navegador de tu dispositivo. Si borras los datos del navegador, usas modo incógnito o cambias de celular, el avance no se conserva."
    },
    {
      pregunta: "No veo los temas o cambios nuevos.",
      respuesta: "La app guarda una copia para funcionar sin internet. Cierra todas las pestañas de Quantix y vuelve a abrirla con conexión: se actualizará sola."
    },
    {
      pregunta: "¿La app funciona sin internet?",
      respuesta: "Sí. Después de la primera visita con conexión, funciona sin internet. Puedes instalarla desde el menú del navegador con la opción «Instalar app» o «Agregar a pantalla de inicio»."
    },
    {
      pregunta: "¿Cómo reporto un error en el contenido?",
      respuesta: "Usa el formulario con la opción «Reportar un error en el contenido» y menciona la materia, el semestre y el tema. Si es una pregunta con la respuesta equivocada, copia la pregunta."
    },
    {
      pregunta: "¿Puedo usar este material en mi escuela?",
      respuesta: "Sí. El contenido es de libre uso con fines educativos. Solo te pedimos mencionar a Quantix como fuente."
    }
  ]
};
