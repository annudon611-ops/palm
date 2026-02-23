const BASE_URL = "https://openrouter.ai/api/v1/chat/completions";
const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

const MODELS = {
  VISION: "google/gemini-flash-1.5-8b", 
  REASONING: "meta-llama/llama-3.2-3b-instruct:free" 
};

const getSystemPrompt = (language = 'en', userName = 'Seeker') => {
  return `You are a Spiritual Guide & Oracle. Tone: Calm, Mystic. 
  Rules: No medical/legal advice. No fear-based predictions. 
  Language: ${language}. User Name: ${userName}.`;
};

// 1. Palm Image Analysis
export const analyzePalmImage = async (base64Image, language, userName) => {
  if (!API_KEY) throw new Error("API Key missing");
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Authorization": `Bearer ${API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: MODELS.VISION,
      messages: [{ role: "user", content: [
        { type: "text", text: `Analyze palm in ${language} for ${userName}.` },
        { type: "image_url", image_url: { url: base64Image } }
      ]}]
    })
  });
  const data = await response.json();
  return data.choices[0].message.content;
};

// 2. Chat / General Guidance (Missing was here)
export const getSpiritualGuidance = async (userPrompt, language, userName) => {
  if (!API_KEY) throw new Error("API Key missing");
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Authorization": `Bearer ${API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      model: MODELS.REASONING,
      messages: [
        { role: "system", content: getSystemPrompt(language, userName) },
        { role: "user", content: userPrompt }
      ]
    })
  });
  const data = await response.json();
  return data.choices[0].message.content;
};

// 3. Tarot Specialist
export const generateTarotReading = (cardNames, category, language, userName) => {
  const prompt = `Tarot cards: ${cardNames.join(", ")} for ${category}. Give interpretation in ${language}.`;
  return getSpiritualGuidance(prompt, language, userName);
};

// 4. Horoscope Specialist
export const generateDailyHoroscope = (zodiacSign, language, userName) => {
  const prompt = `Daily horoscope for ${zodiacSign} in ${language}.`;
  return getSpiritualGuidance(prompt, language, userName);
};
