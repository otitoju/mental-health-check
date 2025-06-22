import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "@/lib/auth"
import { executeQuery } from "@/lib/database"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { title, content, moodBefore, moodAfter, tags = [] } = await request.json()

    if (!content) {
      return NextResponse.json({ error: "Content is required" }, { status: 400 })
    }

    const result = (await executeQuery(
      `INSERT INTO journal_entries (user_id, title, content, mood_before, mood_after, tags) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [session.id, title, content, moodBefore, moodAfter, JSON.stringify(tags)],
    )) as any

    return NextResponse.json(
      {
        id: result.insertId,
        message: "Journal entry saved successfully",
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Journal save error:", error)
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
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const offset = (page - 1) * limit

    const entries = (await executeQuery(
      `SELECT id, title, content, mood_before, mood_after, tags, created_at, updated_at
       FROM journal_entries 
       WHERE user_id = ? 
       ORDER BY created_at DESC 
       LIMIT ? OFFSET ?`,
      [session.id, limit, offset],
    )) as any[]

    const formattedEntries = entries.map((entry) => ({
      ...entry,
      tags: JSON.parse(entry.tags || "[]"),
    }))

    return NextResponse.json({ entries: formattedEntries })
  } catch (error) {
    console.error("Journal retrieval error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
