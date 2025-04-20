"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Logo from "@/components/logo"

export default function NewTopicPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the data to a server
    alert(`New topic created: ${formData.title}`)
    router.push("/forum")
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
          <h1 className="text-2xl font-bold text-emerald-800">Create New Topic</h1>
        </div>
      </header>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Topic Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="Enter a descriptive title"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              rows={8}
              placeholder="Write your topic content here..."
              required
            ></textarea>
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="py-2 px-6 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
            >
              Create Topic
            </button>
            <Link href="/forum">
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
