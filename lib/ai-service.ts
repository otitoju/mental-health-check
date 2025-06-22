import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export interface ChatMessage {
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export interface MoodAnalysis {
  sentiment: number // -1 to 1
  emotions: string[]
  suggestions: string[]
}

const MENTAL_HEALTH_SYSTEM_PROMPT = `You are MindBridge AI, a compassionate and professional mental health support assistant. Your role is to:

1. Provide emotional support and active listening
2. Offer evidence-based coping strategies and techniques
3. Help users identify patterns in their thoughts and feelings
4. Suggest appropriate mental health resources when needed
5. Recognize crisis situations and provide appropriate guidance

IMPORTANT GUIDELINES:
- You are NOT a replacement for professional therapy
- Always encourage users to seek professional help for serious concerns
- If someone expresses suicidal thoughts, provide crisis resources immediately
- Use empathetic, non-judgmental language
- Focus on coping strategies, mindfulness, and emotional regulation
- Keep responses concise but meaningful (2-3 paragraphs max)

Crisis Resources:
- National Suicide Prevention Lifeline: 988
- Crisis Text Line: Text HOME to 741741
- International Association for Suicide Prevention: https://www.iasp.info/resources/Crisis_Centres/

Remember: You're here to support, not diagnose or treat.`

export async function generateAIResponse(
  messages: ChatMessage[],
  userContext?: {
    recentMood?: number
    currentGoals?: string[]
    preferredTechniques?: string[]
  },
): Promise<string> {
  try {
    const contextPrompt = userContext
      ? `
User Context:
- Recent mood level: ${userContext.recentMood}/10
- Current goals: ${userContext.currentGoals?.join(", ") || "None specified"}
- Preferred techniques: ${userContext.preferredTechniques?.join(", ") || "None specified"}
`
      : ""

    const { text } = await generateText({
      model: openai("gpt-4o"),
      system: MENTAL_HEALTH_SYSTEM_PROMPT + contextPrompt,
      messages: messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
    })

    return text
  } catch (error) {
    console.error("AI service error:", error)
    return "I'm sorry, I'm having trouble responding right now. Please try again in a moment, or consider reaching out to a mental health professional if you need immediate support."
  }
}

export async function analyzeMood(text: string): Promise<MoodAnalysis> {
  try {
    const { text: analysis } = await generateText({
      model: openai("gpt-4o"),
      system: `Analyze the emotional content of the user's text and return a JSON response with:
      - sentiment: number between -1 (very negative) and 1 (very positive)
      - emotions: array of detected emotions (max 3)
      - suggestions: array of helpful coping strategies (max 3)
      
      Return only valid JSON.`,
      prompt: `Analyze this text: "${text}"`,
    })

    return JSON.parse(analysis)
  } catch (error) {
    console.error("Mood analysis error:", error)
    return {
      sentiment: 0,
      emotions: ["neutral"],
      suggestions: ["Take a few deep breaths", "Consider journaling about your feelings"],
    }
  }
}

export function detectCrisisKeywords(text: string): boolean {
  const crisisKeywords = [
    "suicide",
    "kill myself",
    "end it all",
    "not worth living",
    "hurt myself",
    "self harm",
    "want to die",
    "better off dead",
  ]

  const lowerText = text.toLowerCase()
  return crisisKeywords.some((keyword) => lowerText.includes(keyword))
}
