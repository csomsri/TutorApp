"use client"

import type React from "react"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock, Video, Calendar, Check } from "lucide-react"
import Logo from "@/components/logo"

// Mock user data
const users = {
  admin1: {
    name: "Admin",
    role: "Administrator",
    availability: [
      { day: "Monday", slots: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"] },
      { day: "Tuesday", slots: ["10:00 AM", "1:00 PM", "3:00 PM"] },
      { day: "Wednesday", slots: ["9:00 AM", "11:00 AM", "2:00 PM"] },
      { day: "Thursday", slots: ["10:00 AM", "1:00 PM", "4:00 PM"] },
      { day: "Friday", slots: ["9:00 AM", "11:00 AM", "3:00 PM"] },
    ],
  },
  moderator1: {
    name: "ModeratorJane",
    role: "Moderator",
    availability: [
      { day: "Monday", slots: ["10:00 AM", "2:00 PM", "5:00 PM"] },
      { day: "Wednesday", slots: ["9:00 AM", "1:00 PM", "4:00 PM"] },
      { day: "Friday", slots: ["11:00 AM", "3:00 PM"] },
    ],
  },
  competitor1: {
    name: "Competitor1",
    role: "Member",
    availability: [
      { day: "Tuesday", slots: ["10:00 AM", "2:00 PM"] },
      { day: "Thursday", slots: ["11:00 AM", "3:00 PM"] },
      { day: "Saturday", slots: ["10:00 AM", "1:00 PM"] },
    ],
  },
  competitor2: {
    name: "Competitor2",
    role: "Member",
    availability: [
      { day: "Monday", slots: ["9:00 AM", "4:00 PM"] },
      { day: "Wednesday", slots: ["11:00 AM", "2:00 PM"] },
      { day: "Friday", slots: ["10:00 AM", "3:00 PM"] },
    ],
  },
  enthusiast1: {
    name: "Enthusiast",
    role: "Member",
    availability: [
      { day: "Monday", slots: ["5:00 PM"] },
      { day: "Tuesday", slots: ["5:00 PM"] },
      { day: "Wednesday", slots: ["5:00 PM"] },
      { day: "Thursday", slots: ["5:00 PM"] },
      { day: "Friday", slots: ["5:00 PM"] },
    ],
  },
  firstuser1: {
    name: "FirstUser",
    role: "Member",
    availability: [
      { day: "Tuesday", slots: ["9:00 AM", "11:00 AM"] },
      { day: "Thursday", slots: ["9:00 AM", "11:00 AM"] },
      { day: "Saturday", slots: ["10:00 AM", "12:00 PM"] },
    ],
  },
  seconduser1: {
    name: "SecondUser",
    role: "Member",
    availability: [
      { day: "Monday", slots: ["8:00 PM", "9:00 PM"] },
      { day: "Wednesday", slots: ["8:00 PM", "9:00 PM"] },
      { day: "Friday", slots: ["8:00 PM", "9:00 PM"] },
    ],
  },
  newuser1: {
    name: "NewUser",
    role: "Member",
    availability: [
      { day: "Monday", slots: ["10:00 AM", "3:00 PM"] },
      { day: "Wednesday", slots: ["10:00 AM", "3:00 PM"] },
      { day: "Friday", slots: ["10:00 AM", "3:00 PM"] },
    ],
  },
  anotheruser1: {
    name: "AnotherUser",
    role: "Member",
    availability: [
      { day: "Tuesday", slots: ["1:00 PM", "4:00 PM"] },
      { day: "Thursday", slots: ["1:00 PM", "4:00 PM"] },
    ],
  },
  unknown: {
    name: "Unknown User",
    role: "Unknown",
    availability: [],
  },
}

type AvailabilitySlot = {
  day: string
  time: string
}

export default function ScheduleMeetingPage() {
  const router = useRouter()
  const params = useParams()
  const userId = params.userId as string
  const user = users[userId as keyof typeof users] || users.unknown

  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [meetingTopic, setMeetingTopic] = useState("")
  const [isScheduled, setIsScheduled] = useState(false)

  const handleSelectSlot = (day: string, time: string) => {
    setSelectedDate(day)
    setSelectedTime(time)
  }

  const handleScheduleMeeting = (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedDate || !selectedTime || !meetingTopic) {
      alert("Please select a date, time, and enter a meeting topic.")
      return
    }

    // In a real app, this would send the meeting request to a server
    setIsScheduled(true)

    // Simulate API call delay
    setTimeout(() => {
      router.push("/forum")
    }, 3000)
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 pt-6 pb-24">
      <header className="flex items-center mb-8">
        <Logo />
        <div className="ml-4">
          <Link href="/forum" className="flex items-center text-emerald-600 hover:text-emerald-800 mb-1">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to Forum</span>
          </Link>
          <h1 className="text-2xl font-bold text-emerald-800">Schedule a Meeting</h1>
        </div>
      </header>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        {isScheduled ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <Check className="h-8 w-8 text-emerald-600" />
            </div>
            <h2 className="text-xl font-semibold text-emerald-800 mb-2">Meeting Scheduled!</h2>
            <p className="text-gray-600 mb-6">
              Your meeting with {user.name} has been scheduled for {selectedDate} at {selectedTime}.
            </p>
            <p className="text-gray-500 text-sm">Redirecting to forum...</p>
          </div>
        ) : (
          <>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-emerald-700 font-bold text-lg">{user.name.charAt(0)}</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-emerald-800">{user.name}</h2>
                <p className="text-gray-500">{user.role}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium text-emerald-800 mb-3 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Available Time Slots
              </h3>

              {user.availability && user.availability.length > 0 ? (
                <div className="space-y-4">
                  {user.availability.map((daySlot, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-700 mb-2">{daySlot.day}</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                        {daySlot.slots.map((time, timeIndex) => (
                          <button
                            key={timeIndex}
                            className={`p-2 rounded-md text-sm flex items-center justify-center ${
                              selectedDate === daySlot.day && selectedTime === time
                                ? "bg-emerald-600 text-white"
                                : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                            }`}
                            onClick={() => handleSelectSlot(daySlot.day, time)}
                          >
                            <Clock className="h-3 w-3 mr-1" />
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No availability information found for this user.</p>
              )}
            </div>

            {selectedDate && selectedTime && (
              <form onSubmit={handleScheduleMeeting} className="border-t border-gray-200 pt-6">
                <h3 className="font-medium text-emerald-800 mb-3 flex items-center">
                  <Video className="h-5 w-5 mr-2" />
                  Schedule Video Meeting
                </h3>

                <div className="mb-4">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 mb-4">
                    <p className="text-emerald-800">
                      Selected time:{" "}
                      <span className="font-medium">
                        {selectedDate} at {selectedTime}
                      </span>
                    </p>
                  </div>

                  <label htmlFor="meetingTopic" className="block text-sm font-medium text-gray-700 mb-1">
                    Meeting Topic
                  </label>
                  <input
                    type="text"
                    id="meetingTopic"
                    value={meetingTopic}
                    onChange={(e) => setMeetingTopic(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Enter the topic for your meeting"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="py-2 px-6 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors flex items-center"
                >
                  <Video className="h-4 w-4 mr-2" />
                  Schedule Meeting
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  )
}
