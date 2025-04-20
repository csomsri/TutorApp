"use client"

import Link from "next/link"

interface ForumTopicProps {
  id: number
  title: string
  author: string
  authorId?: string
  replies: number
  views: number
  lastActivity: string
  pinned: boolean
}

export default function ForumTopic({
  id,
  title,
  author,
  authorId,
  replies,
  views,
  lastActivity,
  pinned,
}: ForumTopicProps) {
  return (
    <Link href={`/forum/${id}`}>
      <div
        className={`p-4 rounded-lg border ${
          pinned ? "bg-emerald-50 border-emerald-200" : "bg-white border-gray-200 hover:border-emerald-200"
        } cursor-pointer transition-all hover:shadow-md`}
      >
        <div className="flex items-start">
          {pinned && (
            <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded mr-2 uppercase font-bold">
              Pinned
            </span>
          )}
          <h3 className="font-medium text-emerald-800 flex-1">{title}</h3>
        </div>
        <div className="mt-2 flex text-sm text-gray-500">
          <span className="mr-4">By: {author}</span>
          <span className="mr-4">{replies} replies</span>
          <span className="mr-4">{views} views</span>
          <span className="flex-1 text-right">Last activity: {lastActivity}</span>
        </div>
      </div>
    </Link>
  )
}
