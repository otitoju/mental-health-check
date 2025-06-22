import { getServerSession } from "@/lib/auth"
import { redirect } from "next/navigation"
import TherapistDirectory from "@/components/therapists/therapist-directory"

export default async function TherapistsPage() {
  const session = await getServerSession()

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Find a Therapist</h1>
        <p className="text-gray-600 mt-2">
          Connect with licensed mental health professionals who specialize in your needs.
        </p>
      </div>

      <TherapistDirectory />
    </div>
  )
}
