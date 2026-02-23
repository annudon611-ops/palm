/**
 * 🤖 AI SERVICE - OPENROUTER INTEGRATION
 * Models used: 
 * - Vision: google/gemini-flash-1.5-8b (Fast & Stable)
 * - Text: meta-llama/llama-3.2-3b-instruct:free (Free & Fast)
 */

const BASE_URL = "https://openrouter.ai/api/v1/chat/completions";
const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

const MODELS = {
  VISION: "google/gemini-flash-1.5-8b", 
  REASONING: "meta-llama/llama-3.2-3b-instruct:free" 
};

// 🧠 Helper: System Prompt for tone and safety
const getSystemPrompt = (language = 'en', userName = 'Seeker') => {
  return `You are a professional Spiritual Guide and AI Oracle. 
  Tone: Calm, empathetic, and mystical.
  Rules: 
  1. Never give medical, financial, or legal advice. 
  2. Avoid fear-based predictions.
  3. Keep responses structured and poetic.
  4. Respond only in ${language}.
  5. Address the user as ${userName}.`;
};

/**
 * 🖐️ 1. ANALYZE PALM IMAGE (Vision Model)
 */
export const analyzePalmImage = async (base64Image, language, userName) => {
  if (!API_KEY) throw new Error("VITE_OPENROUTER_API_KEY is missing in Env Variables");

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": window.location.origin,
      },
      body: JSON.stringify({
        model: MODELS.VISION,
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: `Identify and analyze the Heart, Head, and Life lines of this palm in ${language} for ${userName}. Provide symbolic spiritual guidance.` },
              { type: "image_url", image_url: { url: base64Image } }
            ]
          }
        ]
      })
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error.message);
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Vision API Error:", error);
    throw error;
  }
};

/**
 * 💬 2. GET SPIRITUAL GUIDANCE (The missing export fixed!)
 * Used for AI Chat and General Questions
 */
export const getSpiritualGuidance = async (userPrompt, language, userName, context = "General Chat") => {
  if (!API_KEY) throw new Error("VITE_OPENROUTER_API_KEY is missing");

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": window.location.origin,
      },
      body: JSON.stringify({
        model: MODELS.REASONING,
        messages: [
          { role: "system", content: getSystemPrompt(language, userName) + ` Context: ${context}` },
          { role: "user", content: userPrompt }
        ]
      })
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error.message);
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Reasoning API Error:", error);
    throw error;
  }
};

/**
 * 🃏 3. TAROT READING GENERATOR
 */
export const generateTarotReading = (cardNames, category, language, userName) => {
  const prompt = `I have drawn these Tarot cards: ${cardNames.join(", ")} for a ${category} reading. Provide a deep interpretation.`;
  return getSpiritualGuidance(prompt, language, userName, "Tarot Reading Session");
};

/**
 * ♈ 4. HOROSCOPE GENERATOR
 */
export const generateDailyHoroscope = (zodiacSign, language, userName) => {
  const prompt = `Generate a detailed daily horoscope for ${zodiacSign}. Include Mood, Love, and Career insights.`;
  return getSpiritualGuidance(prompt, language, userName, "Daily Astrology Update");
};
