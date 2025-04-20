"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Eye, EyeOff } from "lucide-react"
import Logo from "@/components/logo"

export default function ChangePasswordPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError("")
  }

  const togglePasswordVisibility = (field: "current" | "new" | "confirm") => {
    if (field === "current") setShowCurrentPassword(!showCurrentPassword)
    if (field === "new") setShowNewPassword(!showNewPassword)
    if (field === "confirm") setShowConfirmPassword(!showConfirmPassword)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (formData.newPassword !== formData.confirmPassword) {
      setError("New passwords do not match")
      return
    }

    if (formData.newPassword.length < 8) {
      setError("Password must be at least 8 characters long")
      return
    }

    // In a real app, this would send the password change request to a server
    alert("Password changed successfully!")
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
          <h1 className="text-2xl font-bold text-emerald-800">Change Password</h1>
        </div>
      </header>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <form onSubmit={handleSubmit}>
          {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">{error}</div>}

          <div className="space-y-4">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Current Password
              </label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  id="currentPassword"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => togglePasswordVisibility("current")}
                  aria-label={showCurrentPassword ? "Hide password" : "Show password"}
                >
                  {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => togglePasswordVisibility("new")}
                  aria-label={showNewPassword ? "Hide password" : "Show password"}
                >
                  {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters long</p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => togglePasswordVisibility("confirm")}
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <button
                type="submit"
                className="py-2 px-6 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
              >
                Update Password
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
