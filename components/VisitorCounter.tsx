'use client'
import { useEffect, useState } from 'react'

export default function VisitorCounter() {
  const [views, setViews] = useState<string>('...')

  useEffect(() => {
    fetch(
      'https://berkukes.goatcounter.com/counter//interactive-resume.json'
    )
      .then((res) => res.json())
      .then((data) => setViews(data.count))
      .catch(() => setViews('N/A'))
  }, [])

  return (
    <div className="flex items-center gap-2 text-sm text-gray-500">
      <span>👀</span>
      <span>{views} views</span>
    </div>
  )
}