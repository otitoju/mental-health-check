import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "@/lib/auth"
import { executeQuery } from "@/lib/database"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const {
      moodScore,
      emotions = [],
      notes = "",
      triggers = "",
      activities = [],
      sleepHours,
      exerciseMinutes,
    } = await request.json()

    if (!moodScore || moodScore < 1 || moodScore > 10) {
      return NextResponse.json({ error: "Valid mood score (1-10) is required" }, { status: 400 })
    }

    const result = (await executeQuery(
      `INSERT INTO mood_entries 
       (user_id, mood_score, emotions, notes, triggers, activities, sleep_hours, exercise_minutes) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        session.id,
        moodScore,
        JSON.stringify(emotions),
        notes,
        triggers,
        JSON.stringify(activities),
        sleepHours,
        exerciseMinutes,
      ],
    )) as any

    return NextResponse.json(
      {
        id: result.insertId,
        message: "Mood entry saved successfully",
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Mood tracking error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const days = Number.parseInt(searchParams.get("days") || "30")

    const moodEntries = (await executeQuery(
      `SELECT mood_score, emotions, notes, triggers, activities, sleep_hours, exercise_minutes, created_at
       FROM mood_entries 
       WHERE user_id = ? AND created_at >= DATE_SUB(NOW(), INTERVAL ? DAY)
       ORDER BY created_at DESC`,
      [session.id, days],
    )) as any[]

    // Parse JSON fields
    const formattedEntries = moodEntries.map((entry) => ({
      ...entry,
      emotions: JSON.parse(entry.emotions || "[]"),
      activities: JSON.parse(entry.activities || "[]"),
    }))

    return NextResponse.json({ moodEntries: formattedEntries })
  } catch (error) {
    console.error("Mood retrieval error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
