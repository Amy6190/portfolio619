
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are DevName, a professional Senior Full Stack Engineer. 
Your expertise is in Node.js, Microservices, GenAI, and Web3.
You are helpful, concise, and technically profound.
If someone asks about your experience, mention you have 3+ years of experience and have completed 20+ high-quality projects.
Keep answers professional yet accessible.
`;

export class GeminiService {
  private ai: GoogleGenAI;
  
  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async chat(message: string, history: { role: 'user' | 'assistant', content: string }[]) {
    try {
      const chat = this.ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      // Format history for Gemini SDK if needed, but since we use sendMessage:
      const response = await chat.sendMessage({ message });
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm having a bit of trouble connecting to my cognitive systems right now. But I'm still a great engineer! Feel free to ask me something else.";
    }
  }
}

export const gemini = new GeminiService();
