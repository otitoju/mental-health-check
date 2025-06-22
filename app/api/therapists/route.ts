import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "@/lib/auth"
import { executeQuery } from "@/lib/database"

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession()
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const specialization = searchParams.get("specialization")
    const maxRate = searchParams.get("maxRate")

    let query = `
      SELECT 
        t.id,
        u.first_name,
        u.last_name,
        up.bio,
        t.specializations,
        t.years_experience,
        t.approach_description,
        t.hourly_rate,
        t.rating,
        t.total_sessions,
        t.is_accepting_clients
      FROM therapists t
      JOIN users u ON t.user_id = u.id
      JOIN user_profiles up ON u.id = up.user_id
      WHERE t.is_verified = TRUE AND t.is_accepting_clients = TRUE
    `

    const params: any[] = []

    if (specialization) {
      query += ` AND JSON_CONTAINS(t.specializations, ?)`
      params.push(`"${specialization}"`)
    }

    if (maxRate) {
      query += ` AND t.hourly_rate <= ?`
      params.push(Number.parseFloat(maxRate))
    }

    query += ` ORDER BY t.rating DESC, t.total_sessions DESC`

    const therapists = (await executeQuery(query, params)) as any[]

    const formattedTherapists = therapists.map((therapist) => ({
      ...therapist,
      specializations: JSON.parse(therapist.specializations || "[]"),
    }))

    return NextResponse.json({ therapists: formattedTherapists })
  } catch (error) {
    console.error("Therapists retrieval error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
