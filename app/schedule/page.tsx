"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { MoreHorizontal } from "lucide-react"
import Logo from "@/components/logo"

type Event = {
  id: number
  day: string
  time: string
  title: string
  duration: string
}

export default function SchedulePage() {
  const router = useRouter()
  // Define all days of the week
  const allDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  // Get current date information
  const currentDate = new Date()
  const currentDayIndex = currentDate.getDay() - 1 // Convert to 0-6 where 0 is Monday
  const adjustedDayIndex = currentDayIndex === -1 ? 6 : currentDayIndex // Handle Sunday

  // State for the selected day index
  const [selectedDayIndex, setSelectedDayIndex] = useState(adjustedDayIndex)
  const selectedDay = allDays[selectedDayIndex]

  // Calculate the current month and year to display
  const getDisplayMonth = () => {
    const date = new Date()
    return date.toLocaleString("default", { month: "long", year: "numeric" })
  }

  // Navigate to previous day
  const goToPreviousDay = () => {
    setSelectedDayIndex((prevIndex) => (prevIndex === 0 ? 6 : prevIndex - 1))
  }

  // Navigate to next day
  const goToNextDay = () => {
    setSelectedDayIndex((prevIndex) => (prevIndex === 6 ? 0 : prevIndex + 1))
  }

  // Handle event edit
  const handleEditEvent = (eventId: number) => {
    router.push(`/schedule/edit/${eventId}`)
  }

  // Mock events data
  const allEvents: Event[] = [
    { id: 1, day: "Mon", time: "9:00 AM", title: "Team Meeting", duration: "1h" },
    { id: 2, day: "Mon", time: "2:30 PM", title: "Project Kickoff", duration: "45m" },
    { id: 3, day: "Tue", time: "10:00 AM", title: "Client Presentation", duration: "1h 30m" },
    { id: 4, day: "Wed", time: "2:00 PM", title: "Project Review", duration: "2h" },
    { id: 5, day: "Wed", time: "5:00 PM", title: "Team Building", duration: "1h" },
    { id: 6, day: "Thu", time: "11:00 AM", title: "Client Call", duration: "30m" },
    { id: 7, day: "Thu", time: "4:00 PM", title: "Sprint Planning", duration: "1h" },
    { id: 8, day: "Fri", time: "3:30 PM", title: "Weekly Wrap-up", duration: "1h" },
    { id: 9, day: "Sat", time: "10:00 AM", title: "Weekend Workshop", duration: "3h" },
    { id: 10, day: "Sun", time: "2:00 PM", title: "Preparation for Next Week", duration: "1h" },
  ]

  // Filter events for the selected day
  const filteredEvents = allEvents.filter((event) => event.day === selectedDay)

  return (
    <div className="container mx-auto max-w-4xl px-4 pt-6 pb-24">
      <header className="flex items-center mb-8">
        <Logo />
        <h1 className="text-2xl font-bold ml-4 text-emerald-800">Schedule</h1>
      </header>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-emerald-800">{getDisplayMonth()}</h2>
          <div className="flex space-x-2">
            <button
              onClick={goToPreviousDay}
              className="p-2 rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
              aria-label="Previous day"
            >
              <span className="sr-only">Previous</span>←
            </button>
            <button
              onClick={goToNextDay}
              className="p-2 rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
              aria-label="Next day"
            >
              <span className="sr-only">Next</span>→
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-6">
          {allDays.map((day, index) => (
            <button
              key={day}
              className={`text-center p-2 rounded-md transition-colors ${
                index === selectedDayIndex
                  ? "bg-emerald-600 text-white"
                  : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
              }`}
              onClick={() => setSelectedDayIndex(index)}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-emerald-800 mb-2">Events for {selectedDay}</h3>

          {filteredEvents.length > 0 ? (
            <div className="space-y-3">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 flex items-center"
                >
                  <div className="bg-white p-2 rounded-md border border-emerald-200 mr-3">
                    <span className="text-emerald-700 font-medium">{event.time}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-emerald-800">{event.title}</h4>
                    <p className="text-sm text-gray-500">Duration: {event.duration}</p>
                  </div>
                  <button
                    className="p-2 text-emerald-600 hover:bg-emerald-100 rounded-md"
                    onClick={() => handleEditEvent(event.id)}
                    aria-label={`Edit ${event.title}`}
                  >
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No events scheduled for {selectedDay}.</p>
          )}

          <Link href="/schedule/new">
            <button className="w-full mt-4 py-2 px-4 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors">
              Add New Event
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
