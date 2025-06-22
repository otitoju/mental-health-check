import { getServerSession } from "@/lib/auth"
import { redirect } from "next/navigation"
import MoodTracker from "@/components/mood/mood-tracker"

export default async function MoodPage() {
  const session = await getServerSession()

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Mood Tracking</h1>
        <p className="text-gray-600 mt-2">
          Track your daily mood and activities to identify patterns and improve your mental wellness.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <MoodTracker />
      </div>
    </div>
  )
}
