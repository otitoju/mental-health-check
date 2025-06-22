"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Brain, MessageCircle, BookOpen, Heart, TrendingUp, Calendar, Target, Award } from "lucide-react"
import Link from "next/link"

interface DashboardStats {
  totalSessions: number
  journalEntries: number
  moodAverage: number
  streakDays: number
  weeklyGoalProgress: number
}

export default function DashboardOverview() {
  const [stats, setStats] = useState<DashboardStats>({
    totalSessions: 0,
    journalEntries: 0,
    moodAverage: 0,
    streakDays: 0,
    weeklyGoalProgress: 0,
  })
  const [recentMoods, setRecentMoods] = useState<number[]>([])

  useEffect(() => {
    // In a real app, fetch actual user stats
    setStats({
      totalSessions: 12,
      journalEntries: 8,
      moodAverage: 6.8,
      streakDays: 5,
      weeklyGoalProgress: 71,
    })
    setRecentMoods([6, 7, 5, 8, 7, 6, 8])
  }, [])

  const getMoodTrend = () => {
    if (recentMoods.length < 2) return "stable"
    const recent = recentMoods.slice(-3).reduce((a, b) => a + b, 0) / 3
    const previous = recentMoods.slice(-6, -3).reduce((a, b) => a + b, 0) / 3
    if (recent > previous + 0.5) return "improving"
    if (recent < previous - 0.5) return "declining"
    return "stable"
  }

  const moodTrend = getMoodTrend()

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Welcome back!</h2>
              <p className="text-gray-600 mt-1">You're on a {stats.streakDays}-day wellness streak. Keep it up!</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-600">{stats.moodAverage.toFixed(1)}</div>
              <div className="text-sm text-gray-600">Average mood this week</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MessageCircle className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.totalSessions}</div>
                <div className="text-sm text-gray-600">AI Sessions</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <BookOpen className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.journalEntries}</div>
                <div className="text-sm text-gray-600">Journal Entries</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Heart className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.moodAverage.toFixed(1)}</div>
                <div className="text-sm text-gray-600">Avg Mood</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Award className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stats.streakDays}</div>
                <div className="text-sm text-gray-600">Day Streak</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mood Trend & Weekly Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Mood Trend
            </CardTitle>
            <CardDescription>Your mood pattern over the last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Trend Status</span>
                <Badge
                  variant={
                    moodTrend === "improving" ? "default" : moodTrend === "declining" ? "destructive" : "secondary"
                  }
                >
                  {moodTrend === "improving"
                    ? "📈 Improving"
                    : moodTrend === "declining"
                      ? "📉 Needs attention"
                      : "➡️ Stable"}
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Recent average</span>
                  <span>{recentMoods.slice(-3).reduce((a, b) => a + b, 0) / 3 || 0}</span>
                </div>
                <Progress value={(stats.moodAverage / 10) * 100} className="h-2" />
              </div>

              <div className="grid grid-cols-7 gap-1 mt-4">
                {recentMoods.map((mood, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`h-8 rounded text-xs flex items-center justify-center text-white font-medium ${
                        mood >= 8
                          ? "bg-green-500"
                          : mood >= 6
                            ? "bg-blue-500"
                            : mood >= 4
                              ? "bg-yellow-500"
                              : "bg-red-500"
                      }`}
                    >
                      {mood}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Weekly Goals
            </CardTitle>
            <CardDescription>Track your mental wellness objectives</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Daily check-ins</span>
                  <span>5/7 days</span>
                </div>
                <Progress value={71} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Journal entries</span>
                  <span>3/5 entries</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>AI chat sessions</span>
                  <span>4/3 sessions</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>

              <div className="pt-2">
                <p className="text-sm text-gray-600">
                  Great progress this week! You're {stats.weeklyGoalProgress}% towards your goals.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Continue your mental wellness journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/chat">
              <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                <Brain className="h-6 w-6" />
                <span>Chat with AI</span>
              </Button>
            </Link>

            <Link href="/mood">
              <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                <Heart className="h-6 w-6" />
                <span>Track Mood</span>
              </Button>
            </Link>

            <Link href="/journal">
              <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                <BookOpen className="h-6 w-6" />
                <span>Write Journal</span>
              </Button>
            </Link>

            <Link href="/therapists">
              <Button variant="outline" className="w-full h-20 flex flex-col gap-2">
                <Calendar className="h-6 w-6" />
                <span>Find Therapist</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
