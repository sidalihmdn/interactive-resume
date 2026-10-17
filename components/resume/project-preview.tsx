"use client"

import { useEffect, useRef } from "react"
import { useReducedMotion } from "@/lib/use-reduced-motion"
import type { ProjectPreview as Preview } from "@/lib/content/types"
import { asset } from "@/lib/site"

/** Plays only while on screen, and never for people who asked for reduced motion. */
function InViewVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const video = ref.current
    if (!video || reduceMotion) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0.4 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [reduceMotion])

  return (
    <video
      ref={ref}
      className="h-full w-full object-cover"
      poster={asset(poster)}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
    >
      <source src={asset(`${src}.webm`)} type="video/webm" />
      <source src={asset(`${src}.mp4`)} type="video/mp4" />
    </video>
  )
}

export function ProjectPreview({ preview, label }: { preview: Preview; label: string }) {
  switch (preview.kind) {
    case "video":
      return <InViewVideo src={preview.src} poster={preview.poster} label={label} />
    case "image":
      return <img src={asset(preview.src)} alt={label} loading="lazy" className="h-full w-full object-cover" />
    case "code":
      return (
        <pre
          aria-label={label}
          className="h-full overflow-auto bg-terminal p-4 font-mono text-[11.5px] leading-5 text-terminal-foreground sm:text-xs sm:leading-5"
        >
          <code>{preview.code}</code>
        </pre>
      )
  }
}
