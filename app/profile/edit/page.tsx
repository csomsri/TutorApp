"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Logo from "@/components/logo"

export default function EditProfilePage() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Mock initial user data
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "user@example.com",
    location: "New York, USA",
    memberSince: "January 2023",
  })

  const [profilePicture, setProfilePicture] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          setProfilePicture(e.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the updated profile data to a server
    alert("Profile updated successfully!")
    router.push("/profile")
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 pt-6 pb-24">
      <header className="flex items-center mb-8">
        <Logo />
        <div className="ml-4">
          <Link href="/profile" className="flex items-center text-emerald-600 hover:text-emerald-800 mb-1">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to Profile</span>
          </Link>
          <h1 className="text-2xl font-bold text-emerald-800">Edit Profile</h1>
        </div>
      </header>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center mb-6">
            <div
              className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-4 overflow-hidden cursor-pointer relative"
              onClick={triggerFileInput}
            >
              {profilePicture ? (
                <img src={profilePicture || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <span className="text-emerald-700 text-4xl">👤</span>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-sm font-medium">Change</span>
              </div>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
              aria-label="Upload profile picture"
            />
            <button
              type="button"
              onClick={triggerFileInput}
              className="text-sm text-emerald-600 hover:text-emerald-800"
            >
              Upload Profile Picture
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="memberSince" className="block text-sm font-medium text-gray-700 mb-1">
                Member Since
              </label>
              <input
                type="text"
                id="memberSince"
                name="memberSince"
                value={formData.memberSince}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <button
                type="submit"
                className="py-2 px-6 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
              >
                Save Changes
              </button>
              <Link href="/profile">
                <button
                  type="button"
                  className="py-2 px-6 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
