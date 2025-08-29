const OpenAI = require("openai");

// Initialize OpenAI client with API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Generate an AI outreach message for a given prospect
 * @param {Object} prospect - Prospect details (name, title, company, skills, etc.)
 * @returns {Promise<string>} - Generated personalized message
 */
const generateMessage = async (prospect) => {
  try {
    const prompt = `
      Write a short, professional LinkedIn outreach message.
      Prospect Details:
      - Name: ${prospect.name}
      - Title: ${prospect.title}
      - Company: ${prospect.company}
      - Skills: ${prospect.skills?.join(", ")}
      - Additional Info: ${prospect.additionalInfo}

      Keep the tone friendly, personalized, and under 50 words.
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // fast & cost-effective
      messages: [
        { role: "system", content: "You are an expert in writing LinkedIn outreach messages." },
        { role: "user", content: prompt },
      ],
      max_tokens: 100,
      temperature: 0.7,
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("OpenAI API Error:", error.message);
    throw new Error("Failed to generate AI message");
  }
};

module.exports = { generateMessage };
