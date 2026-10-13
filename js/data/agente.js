/* ==========================================================
   DATA - Agente IA Educativo
   Usa Cloudflare Worker como proxy seguro hacia Gemini
========================================================== */

const AGENTE = {
    titulo: "🤖 Asistente CienTIA",
    subtitulo: "Tu tutor virtual para dudas de Ciencias, Matemáticas, Química y Física",

    // ===== Configuración (apunta al Worker, sin API Key) =====
    config: {
        endpoint: "https://quantix-gemini-proxy.moralesgomezjohnny.workers.dev"
    },

    // ===== System Prompt =====
    systemPrompt: `Eres un tutor educativo te llamas CienTIA ayudas a estudiantes de EMSAD (Educación Media Superior a Distancia) en Chiapas, México asistente creado por Johnny.

Tu rol:
- Explicar conceptos de Química, Física, Biología, Matemáticas y Probabilidad de forma clara y sencilla
- Usar ejemplos contextualizados a Chiapas (café, milpa, ríos, selva, comunidad)
- Dar respuestas breves (máximo 3 párrafos) pero completas
- Fomentar el pensamiento crítico, no solo dar respuestas directas
- Si el estudiante comete un error, corrígelo con amabilidad y explica por qué

Reglas:
- Responde SIEMPRE en español
- Usa un tono cercano y motivador
- Cuando sea útil, usa fórmulas con texto claro (ej: F = m × a)
- Si no sabes algo, admítelo y sugiere consultar con su asesor EMSAD`,

    // ===== Sugerencias =====
    sugerencias: [
        { texto: "¿Qué es la fotosíntesis?", icono: "🌱" },
        { texto: "Explícame la Ley de Ohm", icono: "⚡" },
        { texto: "¿Cómo balanceo una ecuación química?", icono: "⚗️" },
        { texto: "¿Qué es una función cuadrática?", icono: "📐" },
        { texto: "Diferencia entre célula procariota y eucariota", icono: "🧬" },
        { texto: "¿Qué es la probabilidad condicional?", icono: "📊" }
    ],

    // ===== Mensajes =====
    mensajes: {
        bienvenida: `¡Hola! 👋 Soy CienTIA, tu asistente de Ciencias.

Puedo ayudarte con:
- 📚 Dudas de Química, Física, Biología y Matemáticas
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

El asistente CienTIA no está configurado correctamente en este momento.

**Alternativa:** Problemas de conexión y mantenimiento.`
    }
};