import { getServerSession } from "@/lib/auth"
import { redirect } from "next/navigation"
import ChatInterface from "@/components/ai-chat/chat-interface"

export default async function ChatPage() {
  const session = await getServerSession()

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">AI Mental Health Assistant</h1>
        <p className="text-gray-600 mt-2">
          Chat with our AI assistant for support, coping strategies, and mental health guidance.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <ChatInterface />
      </div>
    </div>
  )
}
