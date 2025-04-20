import Link from "next/link"
import Logo from "@/components/logo"

export default function Home() {
  return (
    <div className="container mx-auto max-w-4xl px-4 pt-6 pb-24">
      <header className="flex items-center mb-8">
        <Logo />
        <h1 className="text-2xl font-bold ml-4 text-emerald-800">Welcome</h1>
      </header>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-emerald-800 mb-4">Home Page</h2>
        <p className="text-gray-700 mb-4">
          Welcome to our platform! Use the navigation bar at the bottom to explore different sections.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Link
            href="/profile"
            className="bg-emerald-50 hover:bg-emerald-100 p-4 rounded-lg border border-emerald-200 flex flex-col items-center transition-colors"
          >
            <span className="text-emerald-700 font-medium">Profile</span>
          </Link>
          <Link
            href="/schedule"
            className="bg-emerald-50 hover:bg-emerald-100 p-4 rounded-lg border border-emerald-200 flex flex-col items-center transition-colors"
          >
            <span className="text-emerald-700 font-medium">Schedule</span>
          </Link>
          <Link
            href="/leaderboard"
            className="bg-emerald-50 hover:bg-emerald-100 p-4 rounded-lg border border-emerald-200 flex flex-col items-center transition-colors"
          >
            <span className="text-emerald-700 font-medium">Leaderboard</span>
          </Link>
          <Link
            href="/forum"
            className="bg-emerald-50 hover:bg-emerald-100 p-4 rounded-lg border border-emerald-200 flex flex-col items-center transition-colors"
          >
            <span className="text-emerald-700 font-medium">Forum</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
