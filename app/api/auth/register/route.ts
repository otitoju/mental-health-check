import { type NextRequest, NextResponse } from "next/server"
import { executeQuery } from "@/lib/database"
import { hashPassword, generateToken } from "@/lib/auth"
import { cookies } from "next/headers"

export async function POST(request: NextRequest) {
  try {
    const { email, password, firstName, lastName, userType = "client" } = await request.json()

    // Validate input
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if user already exists
    const existingUser = (await executeQuery("SELECT id FROM users WHERE email = ?", [email])) as any[]

    if (existingUser.length > 0) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 })
    }

    // Hash password and create user
    const passwordHash = await hashPassword(password)

    const result = (await executeQuery(
      `INSERT INTO users (email, password_hash, first_name, last_name, user_type) 
       VALUES (?, ?, ?, ?, ?)`,
      [email, passwordHash, firstName, lastName, userType],
    )) as any

    const userId = result.insertId

    // Create user profile
    await executeQuery("INSERT INTO user_profiles (user_id) VALUES (?)", [userId])

    // Generate token and set cookie
    const user = {
      id: userId,
      email,
      firstName,
      lastName,
      userType,
      subscriptionTier: "free" as const,
    }

    const token = generateToken(user)

    const cookieStore = cookies()
    cookieStore.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return NextResponse.json({ user }, { status: 201 })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
