import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "@/lib/auth"
import { executeQuery } from "@/lib/database"
import { generateAIResponse, detectCrisisKeywords, analyzeMood } from "@/lib/ai-service"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { message, sessionId } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // Check for crisis keywords
    const isCrisis = detectCrisisKeywords(message)

    let currentSessionId = sessionId

    // Create new session if none provided
    if (!currentSessionId) {
      const sessionResult = (await executeQuery("INSERT INTO ai_chat_sessions (user_id, session_title) VALUES (?, ?)", [
        session.id,
        "New Chat Session",
      ])) as any
      currentSessionId = sessionResult.insertId
    }

    // Get recent messages for context
    const recentMessages = (await executeQuery(
      `SELECT sender, message FROM ai_chat_messages 
       WHERE session_id = ? 
       ORDER BY created_at DESC 
       LIMIT 10`,
      [currentSessionId],
    )) as any[]

    // Build conversation history
    const conversationHistory = recentMessages.reverse().map((msg) => ({
      role: msg.sender === "user" ? "user" : "assistant",
      content: msg.message,
      timestamp: new Date(),
    }))

    // Add current message
    conversationHistory.push({
      role: "user" as const,
      content: message,
      timestamp: new Date(),
    })

    // Get user context for better responses
    const recentMood = (await executeQuery(
      `SELECT mood_score FROM mood_entries 
       WHERE user_id = ? 
       ORDER BY created_at DESC 
       LIMIT 1`,
      [session.id],
    )) as any[]

    const userContext = {
      recentMood: recentMood[0]?.mood_score,
      currentGoals: [],
      preferredTechniques: [],
    }

    // Generate AI response
    let aiResponse = await generateAIResponse(conversationHistory, userContext)

    // Add crisis resources if needed
    if (isCrisis) {
      aiResponse = `🚨 I'm concerned about what you've shared. Please reach out for immediate support:

• National Suicide Prevention Lifeline: 988
• Crisis Text Line: Text HOME to 741741
• Emergency Services: 911

${aiResponse}

Remember, you don't have to go through this alone. Professional help is available 24/7.`
    }

    // Save messages to database
    await executeQuery("INSERT INTO ai_chat_messages (session_id, sender, message) VALUES (?, ?, ?)", [
      currentSessionId,
      "user",
      message,
    ])

    // Analyze mood for the user message
    const moodAnalysis = await analyzeMood(message)

    await executeQuery(
      "INSERT INTO ai_chat_messages (session_id, sender, message, sentiment_score) VALUES (?, ?, ?, ?)",
      [currentSessionId, "ai", aiResponse, moodAnalysis.sentiment],
    )

    // Update session message count
    await executeQuery(
      "UPDATE ai_chat_sessions SET total_messages = total_messages + 2, updated_at = CURRENT_TIMESTAMP WHERE id = ?",
      [currentSessionId],
    )

    return NextResponse.json({
      response: aiResponse,
      sessionId: currentSessionId,
      isCrisis,
      moodAnalysis,
    })
  } catch (error) {
    console.error("AI chat error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
