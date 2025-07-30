"use client"

import Link from 'next/link'

export default function ReferralPage({
  imageUrl,
  title,
  tagline,
  features = [],
  rating = null,
  referralLink,
  buttonLabel = 'Sign up for free',
}) {
  return (
    <div className="max-w-6xl mx-auto bg-white dark:bg-zinc-900 rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row items-center gap-10 p-6 md:p-10 border border-zinc-200 dark:border-zinc-800">
      <div className="w-full md:w-1/2 aspect-video md:aspect-square rounded-xl overflow-hidden">
        <img src={imageUrl} alt="image1" className="w-full h-full object-cover" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-zinc-800 dark:text-white">{title}</h2>
        <p className="text-zinc-600 dark:text-zinc-300">{tagline}</p>

        <ul className="mt-2 space-y-1 text-md text-zinc-800 dark:text-zinc-300">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-blue-500 text-lg">●</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {rating && (
          <div className="mt-2 text-sm text-yellow-500 font-medium">
            {`⭐`.repeat(Math.floor(rating))} <span className="text-zinc-600 dark:text-zinc-400 ml-1">({rating}/5)</span>
          </div>
        )}

        <div className="mt-5">
          <Link
            href={referralLink}
            target="_blank"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm md:text-base px-6 py-3 rounded-full transition duration-300"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}
