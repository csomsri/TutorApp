"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { User, Home, Clock, AlignJustify, MessageSquare } from "lucide-react"

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/profile", icon: User, label: "Profile" },
    { href: "/", icon: Home, label: "Home" },
    { href: "/schedule", icon: Clock, label: "Schedule" },
    { href: "/leaderboard", icon: AlignJustify, label: "Leaderboard" },
    { href: "/forum", icon: MessageSquare, label: "Forum" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
      <div className="container mx-auto max-w-md">
        <div className="flex justify-between items-center px-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                  isActive ? "text-emerald-600" : "text-gray-700 hover:text-emerald-500"
                }`}
              >
                <item.icon className={`h-6 w-6 ${isActive ? "text-emerald-600" : ""}`} />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
