import { getServerSession } from "@/lib/auth"
import { redirect } from "next/navigation"
import JournalEntry from "@/components/journal/journal-entry"

export default async function JournalPage() {
  const session = await getServerSession()

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Mental Health Journal</h1>
        <p className="text-gray-600 mt-2">
          Express your thoughts and feelings. Journaling can help process emotions and track your mental health journey.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <JournalEntry />
      </div>
    </div>
  )
}
