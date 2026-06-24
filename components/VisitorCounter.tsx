'use client'
import { useEffect, useState } from 'react'
import { Eye } from 'lucide-react'

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
    <div className="fixed bottom-4 right-4 z-40">
      <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-border/60 bg-background/80 backdrop-blur-md text-xs text-muted-foreground hover:bg-background/95 transition-colors">
        <Eye className="w-4 h-4" />
        <span className="font-medium">{views}</span>
      </div>
    </div>
  )
}