/* ==========================================================
   DATA - Agente IA Educativo
   Usa un Cloudflare Worker como proxy seguro hacia OpenRouter.
   El system prompt y la API Key viven en el Worker.
========================================================== */

const AGENTE = {
    titulo: "🤖 Asistente CienTIA",
    subtitulo: "Tu tutor virtual para dudas de Ciencias, Química, Matemáticas, Física, Inglés y Lengua",

    // ===== Configuración (apunta al Worker, sin API Key) =====
    config: {
        endpoint: "https://quantix.moralesgomezjohnny.workers.dev",
        maxHistorial: 6,       // mensajes previos que se envían como contexto
        maxLargoMensaje: 2000  // debe coincidir con MAX_LARGO_MENSAJE del Worker
    },

    // ===== Sugerencias =====
    sugerencias: [
        { texto: "¿Qué es la fotosíntesis?", icono: "🌱" },
        { texto: "Explícame la Ley de Ohm", icono: "⚡" },
        { texto: "¿Cómo balanceo una ecuación química?", icono: "⚗️" },
        { texto: "¿Qué es una función cuadrática?", icono: "📐" },
        { texto: "Diferencia entre célula procariota y eucariota", icono: "🧬" },
        { texto: "¿Cuándo uso el presente simple en inglés?", icono: "🇬🇧" },
        { texto: "¿Qué es una figura retórica?", icono: "📖" },
        { texto: "¿Quién es CienTIA?", icono: "👋" }
    ],

    // ===== Mensajes =====
    mensajes: {
        bienvenida: `¡Hola! 👋 Soy CienTIA, tu asistente de Quantix.

Puedo ayudarte con:
- 📚 Dudas de Química, Física, Biología, Matemáticas, Inglés y Lengua
- ✏️ Explicaciones paso a paso
- 💡 Ejemplos contextualizados a Chiapas

¿En qué te puedo ayudar hoy?`,

        pensando: "Pensando...",

        errorRed: `❌ **Error de conexión**

No se pudo conectar con el asistente. Verifica tu conexión a internet e intenta de nuevo.`,

        errorLimite: `⏱️ **Límite alcanzado**

El asistente está recibiendo muchas consultas. Intenta de nuevo en unos minutos.`,

        errorGeneral: `😅 **Algo salió mal**

No pude procesar tu mensaje. Intenta reformular tu pregunta.`,

        errorConfig: `⚠️ **Asistente no disponible**

El asistente CienTIA está en mantenimiento en este momento. Intenta de nuevo más tarde o consulta tu duda con tu asesor EMSAD.`
    }
};
