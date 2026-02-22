/**
 * 🤖 AI SERVICE - OPENROUTER INTEGRATION
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Models:
 * - Vision: allenai/molmo-2-8b:free (Image Analysis)
 * - Reasoning: liquid/lfm-2.5-1.2b-thinking:free (Text Generation)
 */

const BASE_URL = "https://openrouter.ai/api/v1/chat/completions";
const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

const MODELS = {
  VISION: "allenai/molmo-2-8b:free",
  REASONING: "liquid/lfm-2.5-1.2b-thinking:free"
};

/**
 * 🧠 MASTER SYSTEM PROMPT
 * Enforces safety, tone, and spiritual boundaries.
 */
const getSystemPrompt = (language = 'en', userName = 'Seeker') => {
  const prompts = {
    en: `You are an expert Spiritual Guide, Palmist, and Tarot Reader. 
    Your tone is calm, empathetic, and human-like.
    
    RULES:
    1. NEVER provide medical, legal, or financial advice.
    2. NEVER make absolute predictions about future events (e.g., "You will die on X date" or "You will win the lottery").
    3. NEVER use fear-based language or "doom-and-gloom" interpretations.
    4. Focus on symbolic meanings, personal growth, and spiritual reflection.
    5. Always address the user as ${userName}.
    6. Provide long-form, structured, and poetic responses.
    7. If analyzing a palm, explain the Heart, Head, Life, and Fate lines symbolically.
    
    Current Language: English. Respond ONLY in English.`,
    
    hi: `आप एक विशेषज्ञ आध्यात्मिक मार्गदर्शक, हस्तरेखा शास्त्री और टै로 रीडर हैं।
    आपका स्वर शांत, सहानुभूतिपूर्ण और मानवीय है।
    
    नियम:
    1. कभी भी चिकित्सा, कानूनी या वित्तीय सलाह न दें।
    2. भविष्य की घटनाओं के बारे में पूर्ण भविष्यवाणी कभी न करें।
    3. कभी भी डर आधारित भाषा का प्रयोग न करें।
    4. प्रतीकात्मक अर्थों, व्यक्तिगत विकास और आध्यात्मिक चिंतन पर ध्यान केंद्रित करें।
    5. हमेशा उपयोगकर्ता को ${userName} के रूप में संबोधित करें।
    6. विस्तृत, संरचित और काव्यात्मक उत्तर प्रदान करें।
    
    वर्तमान भाषा: हिंदी। केवल हिंदी में उत्तर दें।`,
    
    // Additional language system prompts (es, fr, it, ko) would be added here
  };

  return prompts[language] || prompts['en'];
};

/**
 * 👁️ ANALYZE PALM IMAGE (Vision)
 * Sends base64 image to Molmo model for line tracing.
 */
export const analyzePalmImage = async (base64Image, language, userName) => {
  if (!API_KEY) throw new Error("API Key missing");

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": window.location.origin,
        "X-Title": "AI Palm Reader PWA"
      },
      body: JSON.stringify({
        model: MODELS.VISION,
        messages: [
          {
            role: "system",
            content: getSystemPrompt(language, userName)
          },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "Please analyze this palm image. Identify the Heart Line, Head Line, Life Line, and Fate Line. Provide a spiritual and symbolic interpretation of their depth, length, and curves."
              },
              {
                type: "image_url",
                image_url: {
                  url: base64Image // Must be data:image/jpeg;base64,...
                }
              }
            ]
          }
        ]
      })
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Vision API Error:", error);
    throw error;
  }
};

/**
 * 🔮 GET SPIRITUAL GUIDANCE (Reasoning)
 * Generic chat or specialized tarot/horoscope generation.
 */
export const getSpiritualGuidance = async (userPrompt, language, userName, context = "") => {
  if (!API_KEY) throw new Error("API Key missing");

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": window.location.origin,
        "X-Title": "AI Palm Reader PWA"
      },
      body: JSON.stringify({
        model: MODELS.REASONING,
        messages: [
          {
            role: "system",
            content: getSystemPrompt(language, userName) + "\nContext: " + context
          },
          {
            role: "user",
            content: userPrompt
          }
        ],
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Reasoning API Error:", error);
    throw error;
  }
};

/**
 * ✨ SPECIALIZED HELPERS
 */
export const generateTarotReading = (cardNames, category, language, userName) => {
  const prompt = `I have drawn these Tarot cards for a ${category} reading: ${cardNames.join(", ")}. Please explain their combined meaning and guidance for my journey.`;
  return getSpiritualGuidance(prompt, language, userName, "Tarot Reading Session");
};

export const generateDailyHoroscope = (zodiacSign, language, userName) => {
  const prompt = `Generate a daily horoscope for ${zodiacSign}. Include focus on Mood, Love, and Career.`;
  return getSpiritualGuidance(prompt, language, userName, "Daily Astrology Update");
};
