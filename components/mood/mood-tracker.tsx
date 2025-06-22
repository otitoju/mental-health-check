"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"

const EMOTION_OPTIONS = [
  "Happy",
  "Sad",
  "Anxious",
  "Calm",
  "Angry",
  "Excited",
  "Frustrated",
  "Content",
  "Overwhelmed",
  "Peaceful",
  "Stressed",
  "Grateful",
]

const ACTIVITY_OPTIONS = [
  "Exercise",
  "Meditation",
  "Reading",
  "Socializing",
  "Work",
  "Hobbies",
  "Nature",
  "Music",
  "Cooking",
  "Cleaning",
  "Shopping",
  "Gaming",
]

export default function MoodTracker() {
  const [moodScore, setMoodScore] = useState([5])
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>([])
  const [selectedActivities, setSelectedActivities] = useState<string[]>([])
  const [notes, setNotes] = useState("")
  const [triggers, setTriggers] = useState("")
  const [sleepHours, setSleepHours] = useState("")
  const [exerciseMinutes, setExerciseMinutes] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const toggleEmotion = (emotion: string) => {
    setSelectedEmotions((prev) => (prev.includes(emotion) ? prev.filter((e) => e !== emotion) : [...prev, emotion]))
  }

  const toggleActivity = (activity: string) => {
    setSelectedActivities((prev) =>
      prev.includes(activity) ? prev.filter((a) => a !== activity) : [...prev, activity],
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSuccess(false)

    try {
      const response = await fetch("/api/mood", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          moodScore: moodScore[0],
          emotions: selectedEmotions,
          notes,
          triggers,
          activities: selectedActivities,
          sleepHours: sleepHours ? Number.parseFloat(sleepHours) : null,
          exerciseMinutes: exerciseMinutes ? Number.parseInt(exerciseMinutes) : null,
        }),
      })

      if (response.ok) {
        setSuccess(true)
        // Reset form
        setMoodScore([5])
        setSelectedEmotions([])
        setSelectedActivities([])
        setNotes("")
        setTriggers("")
        setSleepHours("")
        setExerciseMinutes("")
      } else {
        throw new Error("Failed to save mood entry")
      }
    } catch (error) {
      console.error("Error saving mood:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Mood Check-in</CardTitle>
        <CardDescription>
          Track your mood and daily activities to identify patterns and improve your mental wellness
        </CardDescription>
      </CardHeader>
      <CardContent>
        {success && (
          <Alert className="mb-6 border-green-500 bg-green-50">
            <CheckCircle className="h-4 w-4" />
            <AlertDescription className="text-green-700">
              Mood entry saved successfully! Keep up the great work tracking your wellness.
            </AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-3">
            <Label>Overall Mood (1 = Very Low, 10 = Excellent)</Label>
            <div className="px-3">
              <Slider value={moodScore} onValueChange={setMoodScore} max={10} min={1} step={1} className="w-full" />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>1</span>
                <span className="font-medium">Current: {moodScore[0]}</span>
                <span>10</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Label>How are you feeling? (Select all that apply)</Label>
            <div className="flex flex-wrap gap-2">
              {EMOTION_OPTIONS.map((emotion) => (
                <Badge
                  key={emotion}
                  variant={selectedEmotions.includes(emotion) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleEmotion(emotion)}
                >
                  {emotion}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label>What activities did you do today?</Label>
            <div className="flex flex-wrap gap-2">
              {ACTIVITY_OPTIONS.map((activity) => (
                <Badge
                  key={activity}
                  variant={selectedActivities.includes(activity) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => toggleActivity(activity)}
                >
                  {activity}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="sleep">Hours of Sleep</Label>
              <Input
                id="sleep"
                type="number"
                step="0.5"
                min="0"
                max="24"
                value={sleepHours}
                onChange={(e) => setSleepHours(e.target.value)}
                placeholder="8.5"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="exercise">Exercise (minutes)</Label>
              <Input
                id="exercise"
                type="number"
                min="0"
                value={exerciseMinutes}
                onChange={(e) => setExerciseMinutes(e.target.value)}
                placeholder="30"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="triggers">What triggered strong emotions today?</Label>
            <Textarea
              id="triggers"
              value={triggers}
              onChange={(e) => setTriggers(e.target.value)}
              placeholder="Work stress, family conversation, news..."
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional notes about your day</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Reflect on your day, thoughts, or anything else you'd like to remember..."
              rows={3}
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Mood Entry"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
