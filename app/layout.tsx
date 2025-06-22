import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { getServerSession } from "@/lib/auth"
import Navbar from "@/components/navigation/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MindBridge - AI-Powered Mental Health Platform",
  description:
    "Transform your mental wellness journey with AI support, professional therapy, and comprehensive tracking tools.",
  keywords: "mental health, AI therapy, mood tracking, wellness, mindfulness, depression, anxiety",
    generator: 'v0.dev'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar user={session} />
        <main>{children}</main>
      </body>
    </html>
  )
}
