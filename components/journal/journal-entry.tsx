"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, BookOpen } from "lucide-react"

const JOURNAL_TAGS = [
  "Gratitude",
  "Goals",
  "Reflection",
  "Anxiety",
  "Depression",
  "Relationships",
  "Work",
  "Family",
  "Health",
  "Growth",
  "Challenges",
  "Success",
  "Dreams",
  "Fears",
]

export default function JournalEntry() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [moodBefore, setMoodBefore] = useState([5])
  const [moodAfter, setMoodAfter] = useState([5])
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSuccess(false)

    try {
      const response = await fetch("/api/journal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title || "Untitled Entry",
          content,
          moodBefore: moodBefore[0],
          moodAfter: moodAfter[0],
          tags: selectedTags,
        }),
      })

      if (response.ok) {
        setSuccess(true)
        // Reset form
        setTitle("")
        setContent("")
        setMoodBefore([5])
        setMoodAfter([5])
        setSelectedTags([])
      } else {
        throw new Error("Failed to save journal entry")
      }
    } catch (error) {
      console.error("Error saving journal:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Journal Entry
        </CardTitle>
        <CardDescription>
          Express your thoughts and feelings. Journaling can help process emotions and track your mental health journey.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {success && (
          <Alert className="mb-6 border-green-500 bg-green-50">
            <CheckCircle className="h-4 w-4" />
            <AlertDescription className="text-green-700">
              Journal entry saved successfully! Your thoughts have been recorded.
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Entry Title (Optional)</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give your entry a title..."
            />
          </div>

          <div className="space-y-3">
            <Label>Mood Before Writing (1 = Very Low, 10 = Excellent)</Label>
            <div className="px-3">
              <Slider value={moodBefore} onValueChange={setMoodBefore} max={10} min={1} step={1} className="w-full" />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>1</span>
                <span className="font-medium">Before: {moodBefore[0]}</span>
                <span>10</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Your Thoughts</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's on your mind? Write about your day, feelings, thoughts, or anything you'd like to express..."
              rows={8}
              required
            />
            <p className="text-sm text-gray-500">{content.length} characters • Your entries are private and secure</p>
          </div>

          <div className="space-y-3">
            <Label>Tags (Select topics that relate to your entry)</Label>
            <div className="flex flex-wrap gap-2">
              {JOURNAL_TAGS.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label>Mood After Writing (1 = Very Low, 10 = Excellent)</Label>
            <div className="px-3">
              <Slider value={moodAfter} onValueChange={setMoodAfter} max={10} min={1} step={1} className="w-full" />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>1</span>
                <span className="font-medium">After: {moodAfter[0]}</span>
                <span>10</span>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading || !content.trim()}>
            {isLoading ? "Saving..." : "Save Journal Entry"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
