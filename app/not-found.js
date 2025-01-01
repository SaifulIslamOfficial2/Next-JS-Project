import Link from 'next/link'
import React from 'react'

export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600"> No Found Data</h1>
      <p className="mt-2 text-lg text-gray-700">
        Sorry, the blog you’re looking for doesn’t exist.
      </p>
      <Link
        href="/blog"
        className="mt-4 px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Go Back Home
      </Link>
    </div>
  )
}

