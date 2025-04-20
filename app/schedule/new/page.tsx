"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Logo from "@/components/logo"

export default function NewEventPage() {
  const router = useRouter()
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

  const [formData, setFormData] = useState({
    title: "",
    day: days[0],
    time: "",
    duration: "",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the data to a server
    alert(`New event created: ${formData.title} on ${formData.day} at ${formData.time}`)
    router.push("/schedule")
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 pt-6 pb-24">
      <header className="flex items-center mb-8">
        <Logo />
        <div className="ml-4">
          <Link href="/schedule" className="flex items-center text-emerald-600 hover:text-emerald-800 mb-1">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to Schedule</span>
          </Link>
          <h1 className="text-2xl font-bold text-emerald-800">Add New Event</h1>
        </div>
      </header>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Event Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Enter event title"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="day" className="block text-sm font-medium text-gray-700 mb-1">
                Day
              </label>
              <select
                id="day"
                name="day"
                value={formData.day}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              >
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                Duration
              </label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="e.g. 1h 30m"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description (Optional)
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              rows={4}
              placeholder="Add event details..."
            ></textarea>
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="py-2 px-6 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
            >
              Add Event
            </button>
            <Link href="/schedule">
              <button
                type="button"
                className="py-2 px-6 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
