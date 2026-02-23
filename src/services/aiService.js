const BASE_URL = "https://openrouter.ai/api/v1/chat/completions";
const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

// Maine yahan models ko simplify kiya hai taaki error na aaye
const MODELS = {
  VISION: "google/gemini-flash-1.5-8b", // Ye zyada fast aur stable hai vision ke liye
  REASONING: "meta-llama/llama-3.2-3b-instruct:free" 
};

export const analyzePalmImage = async (base64Image, language, userName) => {
  if (!API_KEY) {
    console.error("API KEY IS MISSING!");
    throw new Error("API Key missing");
  }

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: MODELS.VISION,
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: "Analyze this palm for spiritual guidance. Identify Heart, Head, and Life lines." },
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
    console.error("Vision Error:", error);
    throw error;
  }
};

// ... baaki functions ko aise hi rehne do
