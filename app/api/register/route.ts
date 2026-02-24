import { sql } from "@vercel/postgres"
import { NextResponse } from "next/server"

type UserType = "investor" | "developer" | "partner"
type ProjectScale = "under_1m" | "1m_10m" | "10m_50m" | "50m_plus"

interface RegisterPayload {
  userType: UserType
  projectScale: ProjectScale
  fullName: string
  email: string
  company?: string
  message?: string
}

const USER_TYPES = new Set<UserType>(["investor", "developer", "partner"])
const PROJECT_SCALES = new Set<ProjectScale>([
  "under_1m",
  "1m_10m",
  "10m_50m",
  "50m_plus",
])

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function isRegisterPayload(payload: unknown): payload is RegisterPayload {
  if (!payload || typeof payload !== "object") return false

  const value = payload as Record<string, unknown>
  return (
    typeof value.fullName === "string" &&
    typeof value.email === "string" &&
    USER_TYPES.has(value.userType as UserType) &&
    PROJECT_SCALES.has(value.projectScale as ProjectScale)
  )
}

export async function POST(request: Request) {
  try {
    const payload: unknown = await request.json()

    if (!isRegisterPayload(payload)) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
    }

    const fullName = payload.fullName.trim()
    const email = payload.email.trim().toLowerCase()
    const company = payload.company?.trim() ?? ""
    const message = payload.message?.trim() ?? ""

    if (!fullName || !email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid name and email address." },
        { status: 400 },
      )
    }

    await sql`
      CREATE TABLE IF NOT EXISTS registrations (
        id SERIAL PRIMARY KEY,
        user_type TEXT NOT NULL,
        project_scale TEXT NOT NULL,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL,
        company TEXT,
        message TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `

    await sql`
      INSERT INTO registrations (
        user_type,
        project_scale,
        full_name,
        email,
        company,
        message
      ) VALUES (
        ${payload.userType},
        ${payload.projectScale},
        ${fullName},
        ${email},
        ${company || null},
        ${message || null}
      );
    `

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Registration insert failed", error)
    return NextResponse.json(
      { error: "Server error while saving registration." },
      { status: 500 },
    )
  }
}
