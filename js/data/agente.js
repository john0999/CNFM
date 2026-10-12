/* ==========================================================
   DATA - Agente IA Educativo
   Usa Gemini API (gratis)
========================================================== */

const AGENTE = {
    titulo: "🤖 Asistente CienTIA",
    subtitulo: "Tu tutor virtual para dudas de Ciencias, Matemáticas, Química y Física",

    // ===== Configuración de Gemini =====
    config: {
        // Endpoint oficial de Gemini
        endpoint: "https://quantix-gemini-proxy.moralesgomezjohnny.workers.dev",

        // maxTokens: 3000,

        // temperature: 0.7,

        // Opcional: desactivar filtros de seguridad restrictivos
        // (deja los defaults si no estás seguro)
        safetySettings: [
            { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_ONLY_HIGH" },
            { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_ONLY_HIGH" },
            { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_ONLY_HIGH" },
            { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" }
        ]
    },

    // ===== System Prompt (idéntico) =====
    systemPrompt: `Eres un tutor educativo te llamas CienTIA ayudas a estudiantes de EMSAD (Educación Media Superior a Distancia) en Chiapas, México asistende creado por Johnny.

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

    // ===== Sugerencias (idénticas) =====
    sugerencias: [
        { texto: "¿Qué es la fotosíntesis?", icono: "🌱" },
        { texto: "Explícame la Ley de Ohm", icono: "⚡" },
        { texto: "¿Cómo balanceo una ecuación química?", icono: "⚗️" },
        { texto: "¿Qué es una función cuadrática?", icono: "📐" },
        { texto: "Diferencia entre célula procariota y eucariota", icono: "🧬" },
        { texto: "¿Qué es la probabilidad condicional?", icono: "📊" }
    ],

    // ===== Mensajes (idénticos) =====
    mensajes: {
        bienvenida: `¡Hola! 👋 Soy CienTIA  para Ciencias.

Puedo ayudarte con:
- 📚 Dudas de Química, Física, Biología y Matemáticas
- ✏️ Explicaciones paso a paso
- 💡 Ejemplos contextualizados a Chiapas

¿En qué te puedo ayudar hoy?`,

        pensando: "Pensando...",

        errorApiKey: `⚠️ **Configuración incompleta**

El asistente necesita una API key de Gemini para funcionar.

**¿Cómo obtenerla gratis?**
1. Ve a [Google AI Studio](https://aistudio.google.com/app/apikey) y regístrate (gratis)
2. Click en "Get API key" → "Create API key"
3. Copia la key y pégala en el archivo \`js/data/agente.js\`

**Alternativa:** Pídele a tu asesor EMSAD que configure el asistente.`,

        errorRed: `❌ **Error de conexión**

No se pudo conectar con el asistente. Verifica tu conexión a internet e intenta de nuevo.`,

        errorLimite: `⏱️ **Límite alcanzado**

Has alcanzado el límite de mensajes gratuitos por ahora. Intenta de nuevo en unos minutos o mañana.`,

        errorGeneral: `😅 **Algo salió mal**

No pude procesar tu mensaje. Intenta reformular tu pregunta.`
    }
};