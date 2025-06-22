"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Clock, DollarSign } from "lucide-react"

interface Therapist {
  id: string
  first_name: string
  last_name: string
  bio: string
  specializations: string[]
  years_experience: number
  approach_description: string
  hourly_rate: number
  rating: number
  total_sessions: number
  is_accepting_clients: boolean
}

export default function TherapistDirectory() {
  const [therapists, setTherapists] = useState<Therapist[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialization, setSelectedSpecialization] = useState("")
  const [maxRate, setMaxRate] = useState("")

  useEffect(() => {
    fetchTherapists()
  }, [selectedSpecialization, maxRate])

  const fetchTherapists = async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (selectedSpecialization) params.append("specialization", selectedSpecialization)
      if (maxRate) params.append("maxRate", maxRate)

      const response = await fetch(`/api/therapists?${params}`)
      const data = await response.json()

      if (response.ok) {
        setTherapists(data.therapists)
      }
    } catch (error) {
      console.error("Error fetching therapists:", error)
    } finally {
      setLoading(false)
    }
  }

  const filteredTherapists = therapists.filter(
    (therapist) =>
      `${therapist.first_name} ${therapist.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      therapist.bio.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const specializations = [
    "Anxiety Disorders",
    "Depression",
    "Trauma",
    "CBT",
    "PTSD",
    "Relationship Issues",
    "Addiction",
    "Eating Disorders",
    "ADHD",
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Find Your Therapist</CardTitle>
          <CardDescription>Connect with licensed mental health professionals who match your needs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Search</label>
              <Input
                placeholder="Search by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Specialization</label>
              <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
                <SelectTrigger>
                  <SelectValue placeholder="Any specialization" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any specialization</SelectItem>
                  {specializations.map((spec) => (
                    <SelectItem key={spec} value={spec}>
                      {spec}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Max Rate ($/hour)</label>
              <Input type="number" placeholder="200" value={maxRate} onChange={(e) => setMaxRate(e.target.value)} />
            </div>
          </div>
        </CardContent>
      </Card>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTherapists.map((therapist) => (
            <Card key={therapist.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="text-lg">
                      {therapist.first_name[0]}
                      {therapist.last_name[0]}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold">
                        Dr. {therapist.first_name} {therapist.last_name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{therapist.rating.toFixed(1)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{therapist.years_experience} years</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          <span>${therapist.hourly_rate}/hr</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 line-clamp-3">{therapist.bio}</p>

                    <div className="flex flex-wrap gap-1">
                      {therapist.specializations.slice(0, 3).map((spec) => (
                        <Badge key={spec} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                      {therapist.specializations.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{therapist.specializations.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">
                        View Profile
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        Book Session
                      </Button>
                    </div>

                    {!therapist.is_accepting_clients && (
                      <p className="text-sm text-amber-600 font-medium">Currently not accepting new clients</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {!loading && filteredTherapists.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-gray-500">No therapists found matching your criteria.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchTerm("")
                setSelectedSpecialization("")
                setMaxRate("")
              }}
            >
              Clear Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
