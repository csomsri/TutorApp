"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Logo from "@/components/logo"

interface NotificationSetting {
  id: string
  title: string
  description: string
  email: boolean
  push: boolean
  inApp: boolean
}

export default function NotificationSettingsPage() {
  const router = useRouter()

  // Mock notification settings
  const [notificationSettings, setNotificationSettings] = useState<NotificationSetting[]>([
    {
      id: "forum_replies",
      title: "Forum Replies",
      description: "When someone replies to your forum posts",
      email: true,
      push: true,
      inApp: true,
    },
    {
      id: "forum_mentions",
      title: "Forum Mentions",
      description: "When someone mentions you in a forum post",
      email: true,
      push: true,
      inApp: true,
    },
    {
      id: "event_reminders",
      title: "Event Reminders",
      description: "Reminders for upcoming events",
      email: true,
      push: true,
      inApp: true,
    },
    {
      id: "leaderboard_updates",
      title: "Leaderboard Updates",
      description: "When leaderboard rankings change",
      email: false,
      push: true,
      inApp: true,
    },
    {
      id: "system_announcements",
      title: "System Announcements",
      description: "Important announcements about the platform",
      email: true,
      push: false,
      inApp: true,
    },
  ])

  const handleToggle = (id: string, channel: "email" | "push" | "inApp") => {
    setNotificationSettings((prev) =>
      prev.map((setting) => {
        if (setting.id === id) {
          return { ...setting, [channel]: !setting[channel] }
        }
        return setting
      }),
    )
  }

  const handleSave = () => {
    // In a real app, this would send the updated notification settings to a server
    alert("Notification settings saved successfully!")
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
          <h1 className="text-2xl font-bold text-emerald-800">Notification Settings</h1>
        </div>
      </header>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="mb-6">
          <p className="text-gray-600">
            Choose how you want to be notified about activities and updates on the platform.
          </p>
        </div>

        <div className="mb-6">
          <div className="grid grid-cols-4 gap-4 mb-2 px-4">
            <div className="col-span-1"></div>
            <div className="text-center text-sm font-medium text-gray-600">Email</div>
            <div className="text-center text-sm font-medium text-gray-600">Push</div>
            <div className="text-center text-sm font-medium text-gray-600">In-App</div>
          </div>

          <div className="space-y-4">
            {notificationSettings.map((setting) => (
              <div key={setting.id} className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-4 gap-4 items-center">
                  <div className="col-span-1">
                    <h3 className="font-medium text-gray-800">{setting.title}</h3>
                    <p className="text-xs text-gray-500">{setting.description}</p>
                  </div>
                  <div className="flex justify-center">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={setting.email}
                        onChange={() => handleToggle(setting.id, "email")}
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                      <span className="sr-only">Email notifications</span>
                    </label>
                  </div>
                  <div className="flex justify-center">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={setting.push}
                        onChange={() => handleToggle(setting.id, "push")}
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                      <span className="sr-only">Push notifications</span>
                    </label>
                  </div>
                  <div className="flex justify-center">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={setting.inApp}
                        onChange={() => handleToggle(setting.id, "inApp")}
                      />
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                      <span className="sr-only">In-app notifications</span>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={handleSave}
            className="py-2 px-6 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
          >
            Save Settings
          </button>
          <Link href="/profile">
            <button className="py-2 px-6 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
