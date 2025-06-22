import { getServerSession } from "@/lib/auth"
import { redirect } from "next/navigation"
import DashboardOverview from "@/components/dashboard/dashboard-overview"

export default async function DashboardPage() {
  const session = await getServerSession()

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {session.firstName}!</h1>
        <p className="text-gray-600 mt-2">Here's your mental wellness overview for today.</p>
      </div>

      <DashboardOverview />
    </div>
  )
}
