const BASE_URL = "https://openrouter.ai/api/v1/chat/completions";
const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

const MODELS = {
  // Is model ko OpenRouter pe sabse zyada stability milti hai vision ke liye
  VISION: "google/gemini-flash-1.5-8b", 
  REASONING: "meta-llama/llama-3.2-3b-instruct:free" 
};

export const analyzePalmImage = async (base64Image, language, userName) => {
  if (!API_KEY) {
    alert("Bhai, Vercel Settings mein API Key add karna bhool gaya shayad!");
    throw new Error("API Key missing");
  }

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://palm-bhwt.vercel.app", // Domain fix
        "X-Title": "AI Palm Reader"
      },
      body: JSON.stringify({
        model: MODELS.VISION,
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `Analyze this palm in ${language} for ${userName}. Focus on Heart, Head, and Life lines. Keep it spiritual, poetic, and long.`
              },
              {
                type: "image_url",
                image_url: {
                  url: base64Image // Direct base64 support
                }
              }
            ]
          }
        ],
        temperature: 0.7
      })
    });

    const data = await response.json();
    
    if (data.error) {
      console.error("AI Error:", data.error.message);
      throw new Error(data.error.message);
    }

    return data.choices[0].message.content;
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
};

// ... baaki chat function ko mat chhedna, wo sahi chal raha hai
