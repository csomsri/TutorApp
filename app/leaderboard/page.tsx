"use client"

import { useState, useEffect } from "react"
import Logo from "@/components/logo"

type LeaderboardEntry = {
  rank: number
  name: string
  score: number
  avatar: string
}

export default function LeaderboardPage() {
  const [timeFilter, setTimeFilter] = useState<"weekly" | "monthly" | "allTime">("weekly")
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardEntry[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Mock data for different time periods
  const weeklyData = [
    { rank: 1, name: "Alex Johnson", score: 2450, avatar: "👨‍💼" },
    { rank: 2, name: "Sarah Williams", score: 2340, avatar: "👩‍💼" },
    { rank: 3, name: "Michael Brown", score: 2210, avatar: "👨‍💻" },
    { rank: 4, name: "Emily Davis", score: 2150, avatar: "👩‍🔬" },
    { rank: 5, name: "David Miller", score: 2080, avatar: "👨‍🎓" },
    { rank: 6, name: "Jessica Wilson", score: 1950, avatar: "👩‍🎨" },
    { rank: 7, name: "Robert Taylor", score: 1890, avatar: "👨‍🚀" },
    { rank: 8, name: "Jennifer Moore", score: 1820, avatar: "👩‍⚕️" },
    { rank: 9, name: "Thomas Anderson", score: 1760, avatar: "👨‍🔧" },
    { rank: 10, name: "Lisa Martin", score: 1690, avatar: "👩‍🏫" },
  ]

  const monthlyData = [
    { rank: 1, name: "Michael Brown", score: 9870, avatar: "👨‍💻" },
    { rank: 2, name: "Alex Johnson", score: 9540, avatar: "👨‍💼" },
    { rank: 3, name: "Emily Davis", score: 8920, avatar: "👩‍🔬" },
    { rank: 4, name: "Sarah Williams", score: 8750, avatar: "👩‍💼" },
    { rank: 5, name: "Robert Taylor", score: 8320, avatar: "👨‍🚀" },
    { rank: 6, name: "David Miller", score: 7980, avatar: "👨‍🎓" },
    { rank: 7, name: "Jessica Wilson", score: 7650, avatar: "👩‍🎨" },
    { rank: 8, name: "Thomas Anderson", score: 7340, avatar: "👨‍🔧" },
    { rank: 9, name: "Jennifer Moore", score: 7120, avatar: "👩‍⚕️" },
    { rank: 10, name: "Lisa Martin", score: 6890, avatar: "👩‍🏫" },
  ]

  const allTimeData = [
    { rank: 1, name: "Sarah Williams", score: 45670, avatar: "👩‍💼" },
    { rank: 2, name: "Michael Brown", score: 42340, avatar: "👨‍💻" },
    { rank: 3, name: "Alex Johnson", score: 39870, avatar: "👨‍💼" },
    { rank: 4, name: "Emily Davis", score: 36540, avatar: "👩‍🔬" },
    { rank: 5, name: "Robert Taylor", score: 34290, avatar: "👨‍🚀" },
    { rank: 6, name: "Jessica Wilson", score: 32180, avatar: "👩‍🎨" },
    { rank: 7, name: "David Miller", score: 30750, avatar: "👨‍🎓" },
    { rank: 8, name: "Thomas Anderson", score: 28960, avatar: "👨‍🔧" },
    { rank: 9, name: "Jennifer Moore", score: 27340, avatar: "👩‍⚕️" },
    { rank: 10, name: "Lisa Martin", score: 25780, avatar: "👩‍🏫" },
  ]

  // Function to fetch leaderboard data based on time filter
  const fetchLeaderboardData = (filter: "weekly" | "monthly" | "allTime") => {
    setIsLoading(true)

    // Simulate API call with setTimeout
    setTimeout(() => {
      switch (filter) {
        case "weekly":
          setLeaderboardData(weeklyData)
          break
        case "monthly":
          setLeaderboardData(monthlyData)
          break
        case "allTime":
          setLeaderboardData(allTimeData)
          break
        default:
          setLeaderboardData(weeklyData)
      }
      setIsLoading(false)
    }, 500) // Simulate a short loading time
  }

  // Handle time filter change
  const handleTimeFilterChange = (filter: "weekly" | "monthly" | "allTime") => {
    setTimeFilter(filter)
    fetchLeaderboardData(filter)
  }

  // Initial data load
  useEffect(() => {
    fetchLeaderboardData(timeFilter)
  }, [])

  return (
    <div className="container mx-auto max-w-4xl px-4 pt-6 pb-24">
      <header className="flex items-center mb-8">
        <Logo />
        <h1 className="text-2xl font-bold ml-4 text-emerald-800">Leaderboard</h1>
      </header>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-emerald-800">Top Performers</h2>
          <div className="flex space-x-2">
            <button
              className={`py-1 px-3 rounded-md ${
                timeFilter === "weekly"
                  ? "bg-emerald-600 text-white"
                  : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
              }`}
              onClick={() => handleTimeFilterChange("weekly")}
            >
              Weekly
            </button>
            <button
              className={`py-1 px-3 rounded-md ${
                timeFilter === "monthly"
                  ? "bg-emerald-600 text-white"
                  : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
              }`}
              onClick={() => handleTimeFilterChange("monthly")}
            >
              Monthly
            </button>
            <button
              className={`py-1 px-3 rounded-md ${
                timeFilter === "allTime"
                  ? "bg-emerald-600 text-white"
                  : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
              }`}
              onClick={() => handleTimeFilterChange("allTime")}
            >
              All Time
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-700"></div>
          </div>
        ) : (
          <div className="space-y-3">
            {leaderboardData.map((item, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg flex items-center ${
                  index < 3 ? "bg-emerald-50 border border-emerald-200" : "bg-gray-50 border border-gray-200"
                }`}
              >
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full mr-3 font-bold ${
                    index === 0
                      ? "bg-yellow-400 text-yellow-800"
                      : index === 1
                        ? "bg-gray-300 text-gray-700"
                        : index === 2
                          ? "bg-amber-600 text-amber-100"
                          : "bg-white text-gray-500 border border-gray-300"
                  }`}
                >
                  {item.rank}
                </div>
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  <span className="text-xl">{item.avatar}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{item.name}</h4>
                </div>
                <div className="font-bold text-emerald-700">{item.score}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
