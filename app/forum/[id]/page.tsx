"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Calendar } from "lucide-react"
import Logo from "@/components/logo"

export default function ForumTopicPage() {
  const params = useParams()
  const router = useRouter()
  const topicId = Number(params.id)
  const [replyText, setReplyText] = useState("")

  // Mock data for forum topics
  const allTopics = [
    {
      id: 1,
      title: "Getting started with the platform",
      author: "Admin",
      authorId: "admin1",
      content:
        "Welcome to our platform! This guide will help you get started with all the features available. Feel free to ask any questions in the comments below.",
      date: "April 15, 2025",
      pinned: true,
      replies: [
        {
          id: 101,
          author: "NewUser",
          authorId: "newuser1",
          content: "Thanks for this guide! How do I change my profile picture?",
          date: "April 16, 2025",
        },
        {
          id: 102,
          author: "Admin",
          authorId: "admin1",
          content: "You can change your profile picture by going to your profile page and clicking on the edit button.",
          date: "April 16, 2025",
        },
        {
          id: 103,
          author: "AnotherUser",
          authorId: "anotheruser1",
          content: "Is there a mobile app available?",
          date: "April 17, 2025",
        },
      ],
    },
    {
      id: 2,
      title: "Weekly challenge discussion",
      author: "ModeratorJane",
      authorId: "moderator1",
      content: "Let's discuss this week's challenge! Share your strategies and ask for help if you're stuck.",
      date: "April 18, 2025",
      pinned: true,
      replies: [
        {
          id: 201,
          author: "Competitor1",
          authorId: "competitor1",
          content: "I found that focusing on speed rather than accuracy worked better for me this week.",
          date: "April 18, 2025",
        },
        {
          id: 202,
          author: "Competitor2",
          authorId: "competitor2",
          content: "I'm stuck on level 3. Any tips?",
          date: "April 19, 2025",
        },
      ],
    },
    // Add more topics as needed to match the IDs in the forum page
    {
      id: 6,
      title: "Monthly challenge announcement",
      author: "Admin",
      authorId: "admin1",
      content:
        "We're excited to announce this month's challenge! The theme is 'Innovation' and you'll have 30 days to complete it.",
      date: "April 1, 2025",
      pinned: true,
      replies: [
        {
          id: 601,
          author: "Enthusiast",
          authorId: "enthusiast1",
          content: "Can't wait to get started! Will there be any special rewards?",
          date: "April 1, 2025",
        },
        {
          id: 602,
          author: "Admin",
          authorId: "admin1",
          content: "Yes! The top 3 participants will receive exclusive badges and premium features for a month.",
          date: "April 2, 2025",
        },
      ],
    },
    {
      id: 11,
      title: "Welcome to our platform - Read first!",
      author: "Admin",
      authorId: "admin1",
      content:
        "This is the official welcome thread for all new members. Please read our community guidelines and introduce yourself!",
      date: "January 1, 2025",
      pinned: true,
      replies: [
        {
          id: 1101,
          author: "FirstUser",
          authorId: "firstuser1",
          content: "Hello everyone! I'm excited to join this community.",
          date: "January 2, 2025",
        },
        {
          id: 1102,
          author: "SecondUser",
          authorId: "seconduser1",
          content: "Hi from Australia! Looking forward to participating in the challenges.",
          date: "January 3, 2025",
        },
      ],
    },
  ]

  // Find the current topic
  const topic = allTopics.find((t) => t.id === topicId) || {
    id: topicId,
    title: `Topic ${topicId}`,
    author: "Unknown",
    authorId: "unknown",
    content: "Content not found",
    date: "Unknown date",
    pinned: false,
    replies: [],
  }

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the reply to a server
    alert(`Reply submitted: ${replyText}`)
    setReplyText("")
  }

  const handleCheckAvailability = (userId: string) => {
    router.push(`/forum/schedule/${userId}`)
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
          <h1 className="text-2xl font-bold text-emerald-800">{topic.title}</h1>
        </div>
      </header>

      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        {/* Original post */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-emerald-700 font-bold">{topic.author.charAt(0)}</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">{topic.author}</h3>
                <p className="text-sm text-gray-500">{topic.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {topic.pinned && (
                <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded uppercase font-bold">
                  Pinned
                </span>
              )}
              <button
                onClick={() => handleCheckAvailability(topic.authorId)}
                className="flex items-center bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-sm px-3 py-1 rounded border border-emerald-200 transition-colors"
              >
                <Calendar className="h-4 w-4 mr-1" />
                <span>Availability</span>
              </button>
            </div>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700">{topic.content}</p>
          </div>
        </div>

        {/* Replies */}
        <h3 className="font-semibold text-lg text-emerald-800 mb-4">Replies ({topic.replies.length})</h3>

        {topic.replies.length > 0 ? (
          <div className="space-y-6">
            {topic.replies.map((reply) => (
              <div key={reply.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-emerald-700 font-bold">{reply.author.charAt(0)}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{reply.author}</h4>
                      <p className="text-xs text-gray-500">{reply.date}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCheckAvailability(reply.authorId)}
                    className="flex items-center bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded border border-emerald-200 transition-colors"
                  >
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>Availability</span>
                  </button>
                </div>
                <p className="text-gray-700">{reply.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">No replies yet. Be the first to reply!</p>
        )}

        {/* Reply form */}
        <div className="mt-8">
          <h3 className="font-semibold text-lg text-emerald-800 mb-4">Post a Reply</h3>
          <form onSubmit={handleSubmitReply}>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              rows={4}
              placeholder="Write your reply here..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="mt-3 py-2 px-4 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
            >
              Submit Reply
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
