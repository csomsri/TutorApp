"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Logo from "@/components/logo"

export default function ProfilePage() {
  const router = useRouter()

  // Mock user data
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "user@example.com",
    location: "New York, USA",
    memberSince: "January 2023",
    profilePicture: null as string | null,
  })

  const handleEditProfile = () => {
    router.push("/profile/edit")
  }

  const handleChangePassword = () => {
    router.push("/profile/change-password")
  }

  const handleNotificationSettings = () => {
    router.push("/profile/notifications")
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 pt-6 pb-24">
      <header className="flex items-center mb-8">
        <Logo />
        <h1 className="text-2xl font-bold ml-4 text-emerald-800">Profile</h1>
      </header>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-4 overflow-hidden">
            {userData.profilePicture ? (
              <img
                src={userData.profilePicture || "/placeholder.svg"}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-emerald-700 text-4xl">👤</span>
            )}
          </div>
          <h2 className="text-xl font-semibold text-emerald-800">{userData.name}</h2>
          <p className="text-gray-500">{userData.email}</p>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <h3 className="font-medium text-emerald-800 mb-2">Personal Information</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-gray-500">Name:</span>
              <span className="text-gray-700">{userData.name}</span>
              <span className="text-gray-500">Location:</span>
              <span className="text-gray-700">{userData.location}</span>
              <span className="text-gray-500">Member since:</span>
              <span className="text-gray-700">{userData.memberSince}</span>
            </div>
          </div>

          <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
            <h3 className="font-medium text-emerald-800 mb-2">Account Settings</h3>
            <div className="space-y-2">
              <button
                onClick={handleEditProfile}
                className="w-full py-2 px-4 bg-white border border-emerald-300 rounded-md text-emerald-700 hover:bg-emerald-50 transition-colors text-sm"
              >
                Edit Profile
              </button>
              <button
                onClick={handleChangePassword}
                className="w-full py-2 px-4 bg-white border border-emerald-300 rounded-md text-emerald-700 hover:bg-emerald-50 transition-colors text-sm"
              >
                Change Password
              </button>
              <button
                onClick={handleNotificationSettings}
                className="w-full py-2 px-4 bg-white border border-emerald-300 rounded-md text-emerald-700 hover:bg-emerald-50 transition-colors text-sm"
              >
                Notification Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
