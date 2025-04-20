"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import ForumTopic from "@/components/forum-topic"
import Logo from "@/components/logo"

type Topic = {
  id: number
  title: string
  author: string
  replies: number
  views: number
  lastActivity: string
  pinned: boolean
}

export default function ForumPage() {
  const [timeFilter, setTimeFilter] = useState<"weekly" | "monthly" | "allTime">("weekly")
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const topicsPerPage = 5
  const totalPages = 3

  // Mock data for different time periods
  const weeklyTopics = [
    {
      id: 1,
      title: "Getting started with the platform",
      author: "Admin",
      replies: 24,
      views: 1250,
      lastActivity: "2 hours ago",
      pinned: true,
    },
    {
      id: 2,
      title: "Weekly challenge discussion",
      author: "ModeratorJane",
      replies: 56,
      views: 890,
      lastActivity: "30 minutes ago",
      pinned: true,
    },
    {
      id: 3,
      title: "Tips for improving your score",
      author: "TopPlayer",
      replies: 42,
      views: 760,
      lastActivity: "1 day ago",
      pinned: false,
    },
    {
      id: 4,
      title: "Feature request: Dark mode",
      author: "NightOwl",
      replies: 18,
      views: 320,
      lastActivity: "3 days ago",
      pinned: false,
    },
    {
      id: 5,
      title: "Introducing myself to the community",
      author: "NewUser123",
      replies: 12,
      views: 180,
      lastActivity: "5 days ago",
      pinned: false,
    },
  ]

  const monthlyTopics = [
    {
      id: 6,
      title: "Monthly challenge announcement",
      author: "Admin",
      replies: 87,
      views: 3200,
      lastActivity: "1 week ago",
      pinned: true,
    },
    {
      id: 7,
      title: "Platform update: New features",
      author: "DevTeam",
      replies: 64,
      views: 2100,
      lastActivity: "2 weeks ago",
      pinned: true,
    },
    {
      id: 8,
      title: "Strategy discussion for advanced users",
      author: "ProGamer",
      replies: 53,
      views: 1450,
      lastActivity: "10 days ago",
      pinned: false,
    },
    {
      id: 9,
      title: "Community event planning",
      author: "EventCoordinator",
      replies: 41,
      views: 980,
      lastActivity: "3 weeks ago",
      pinned: false,
    },
    {
      id: 10,
      title: "Feedback on recent changes",
      author: "RegularUser",
      replies: 38,
      views: 870,
      lastActivity: "2 weeks ago",
      pinned: false,
    },
  ]

  const allTimeTopics = [
    {
      id: 11,
      title: "Welcome to our platform - Read first!",
      author: "Admin",
      replies: 245,
      views: 15000,
      lastActivity: "Updated monthly",
      pinned: true,
    },
    {
      id: 12,
      title: "FAQ and common issues",
      author: "SupportTeam",
      replies: 189,
      views: 12400,
      lastActivity: "Updated weekly",
      pinned: true,
    },
    {
      id: 13,
      title: "Best strategies compilation",
      author: "CommunityModerator",
      replies: 176,
      views: 9800,
      lastActivity: "1 month ago",
      pinned: false,
    },
    {
      id: 14,
      title: "Feature request megathread",
      author: "ProductManager",
      replies: 154,
      views: 7600,
      lastActivity: "2 months ago",
      pinned: false,
    },
    {
      id: 15,
      title: "Share your success stories",
      author: "CommunityManager",
      replies: 132,
      views: 6500,
      lastActivity: "3 months ago",
      pinned: false,
    },
  ]

  // Additional mock data for pagination
  const page2Topics = [
    {
      id: 16,
      title: "Tips and tricks for beginners",
      author: "Mentor",
      replies: 98,
      views: 5200,
      lastActivity: "2 months ago",
      pinned: false,
    },
    {
      id: 17,
      title: "How to optimize your workflow",
      author: "Efficiency",
      replies: 76,
      views: 4100,
      lastActivity: "3 months ago",
      pinned: false,
    },
    {
      id: 18,
      title: "Collaboration opportunities",
      author: "TeamPlayer",
      replies: 65,
      views: 3800,
      lastActivity: "1 month ago",
      pinned: false,
    },
    {
      id: 19,
      title: "Resources for learning",
      author: "Educator",
      replies: 54,
      views: 3200,
      lastActivity: "2 months ago",
      pinned: false,
    },
    {
      id: 20,
      title: "Weekend challenge results",
      author: "Organizer",
      replies: 47,
      views: 2900,
      lastActivity: "3 weeks ago",
      pinned: false,
    },
  ]

  const page3Topics = [
    {
      id: 21,
      title: "Upcoming events calendar",
      author: "Planner",
      replies: 42,
      views: 2700,
      lastActivity: "1 month ago",
      pinned: false,
    },
    {
      id: 22,
      title: "Feedback on platform performance",
      author: "Analyst",
      replies: 38,
      views: 2400,
      lastActivity: "2 months ago",
      pinned: false,
    },
    {
      id: 23,
      title: "Mobile app suggestions",
      author: "AppUser",
      replies: 35,
      views: 2200,
      lastActivity: "3 months ago",
      pinned: false,
    },
    {
      id: 24,
      title: "Integration with other tools",
      author: "TechGuru",
      replies: 31,
      views: 2000,
      lastActivity: "2 months ago",
      pinned: false,
    },
    {
      id: 25,
      title: "Community guidelines discussion",
      author: "Moderator",
      replies: 28,
      views: 1800,
      lastActivity: "1 month ago",
      pinned: false,
    },
  ]

  // State for current topics
  const [currentTopics, setCurrentTopics] = useState<Topic[]>([])

  // Function to get topics based on time filter and page
  const getTopics = (filter: "weekly" | "monthly" | "allTime", page: number) => {
    setIsLoading(true)

    // Simulate API call with setTimeout
    setTimeout(() => {
      let baseTopics: Topic[]

      // Select base topics based on time filter
      switch (filter) {
        case "weekly":
          baseTopics = weeklyTopics
          break
        case "monthly":
          baseTopics = monthlyTopics
          break
        case "allTime":
          baseTopics = allTimeTopics
          break
        default:
          baseTopics = weeklyTopics
      }

      // Select page-specific topics
      let pageTopics: Topic[]
      switch (page) {
        case 1:
          pageTopics = baseTopics
          break
        case 2:
          pageTopics = page2Topics
          break
        case 3:
          pageTopics = page3Topics
          break
        default:
          pageTopics = baseTopics
      }

      setCurrentTopics(pageTopics)
      setIsLoading(false)
    }, 500) // Simulate a short loading time
  }

  // Handle time filter change
  const handleTimeFilterChange = (filter: "weekly" | "monthly" | "allTime") => {
    setTimeFilter(filter)
    setCurrentPage(1) // Reset to first page when changing filter
    getTopics(filter, 1)
  }

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    getTopics(timeFilter, page)

    // Scroll to top of topics
    window.scrollTo({
      top: document.getElementById("forum-topics")?.offsetTop || 0,
      behavior: "smooth",
    })
  }

  // Initial data load
  useEffect(() => {
    getTopics(timeFilter, currentPage)
  }, [])

  return (
    <div className="container mx-auto max-w-4xl px-4 pt-6 pb-24">
      <header className="flex items-center mb-8">
        <Logo />
        <h1 className="text-2xl font-bold ml-4 text-emerald-800">Forum</h1>
      </header>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-emerald-800">Discussion Topics</h2>
          <Link href="/forum/new">
            <button className="py-2 px-4 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors">
              New Topic
            </button>
          </Link>
        </div>

        <div className="flex justify-end mb-4">
          <div className="flex space-x-2">
            <button
              className={`py-1 px-3 rounded-md ${timeFilter === "weekly" ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"}`}
              onClick={() => handleTimeFilterChange("weekly")}
            >
              Weekly
            </button>
            <button
              className={`py-1 px-3 rounded-md ${timeFilter === "monthly" ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"}`}
              onClick={() => handleTimeFilterChange("monthly")}
            >
              Monthly
            </button>
            <button
              className={`py-1 px-3 rounded-md ${timeFilter === "allTime" ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"}`}
              onClick={() => handleTimeFilterChange("allTime")}
            >
              All Time
            </button>
          </div>
        </div>

        <div id="forum-topics" className="space-y-4">
          {isLoading ? (
            <div className="flex justify-center items-center py-10">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-700"></div>
            </div>
          ) : (
            currentTopics.map((topic) => <ForumTopic key={topic.id} {...topic} />)
          )}
        </div>

        <div className="mt-6 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              className={`py-2 px-4 ${currentPage === 1 ? "bg-emerald-600 text-white" : "bg-white text-emerald-700 border-t border-b border-l border-emerald-200 hover:bg-emerald-50"} rounded-l-md transition-colors`}
              onClick={() => handlePageChange(1)}
            >
              1
            </button>
            <button
              className={`py-2 px-4 ${currentPage === 2 ? "bg-emerald-600 text-white" : "bg-white text-emerald-700 border-t border-b border-emerald-200 hover:bg-emerald-50"} transition-colors`}
              onClick={() => handlePageChange(2)}
            >
              2
            </button>
            <button
              className={`py-2 px-4 ${currentPage === 3 ? "bg-emerald-600 text-white" : "bg-white text-emerald-700 border-t border-b border-emerald-200 hover:bg-emerald-50"} transition-colors`}
              onClick={() => handlePageChange(3)}
            >
              3
            </button>
            <button
              className={`py-2 px-4 bg-white text-emerald-700 border-t border-b border-r border-emerald-200 rounded-r-md hover:bg-emerald-50 transition-colors ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
