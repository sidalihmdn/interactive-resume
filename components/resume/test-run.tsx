"use client"

import { useEffect, useState } from "react"
import { useReducedMotion } from "@/lib/use-reduced-motion"
import { RotateCcw } from "lucide-react"
import { useLanguage } from "@/lib/context/LanguageContext"

const STEP_MS = 420
const START_DELAY_MS = 500

/**
 * The hero's one piece of motion: resume facts run as a pytest session and pass
 * one by one. With reduced motion it shows the finished run straight away.
 */
export function TestRun() {
  const { t, language } = useLanguage()
  const { command, checks, summary, replay } = t.hero.run
  const reduceMotion = useReducedMotion()
  const [passed, setPassed] = useState(0)
  const [runId, setRunId] = useState(0)

  useEffect(() => {
    if (reduceMotion) {
      setPassed(checks.length)
      return
    }
    setPassed(0)
    const timers = checks.map((_, i) =>
      window.setTimeout(() => setPassed(i + 1), START_DELAY_MS + STEP_MS * (i + 1)),
    )
    return () => timers.forEach(window.clearTimeout)
  }, [reduceMotion, checks, runId, language])

  const done = passed === checks.length
  // Deterministic, so the server and client render the same text.
  const seconds = ((checks.length * STEP_MS) / 1000).toFixed(2)

  return (
    <figure
      className="overflow-hidden rounded-xl bg-terminal font-mono text-[13px] leading-6 text-terminal-foreground shadow-[0_24px_60px_-28px_rgb(15_26_34/0.55)] ring-1 ring-white/10"
      aria-label={`${command}: ${summary(checks.length, seconds)}`}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
      </div>

      <div className="px-4 py-4 sm:px-5" aria-hidden="true">
        <p className="text-terminal-muted">
          <span className="text-terminal-pass">$</span> {command}
        </p>
        <ol className="mt-3 space-y-1.5">
          {checks.map((check, i) => {
            const state = i < passed ? "passed" : i === passed && !done ? "running" : "queued"
            return (
              <li key={check.name} className="grid grid-cols-[4.5rem_1fr] gap-x-3 sm:grid-cols-[5rem_1fr]">
                <span
                  className={
                    state === "passed"
                      ? "font-medium text-terminal-pass"
                      : state === "running"
                        ? "text-terminal-foreground"
                        : "text-terminal-muted"
                  }
                >
                  {state === "passed" ? "PASSED" : state === "running" ? "RUNNING" : "·"}
                </span>
                <span className={state === "queued" ? "text-terminal-muted" : undefined}>
                  <span className={state === "passed" ? "text-terminal-foreground" : undefined}>{check.name}</span>
                  <span className="block text-terminal-muted font-sans text-[13px] leading-5">{check.detail}</span>
                </span>
              </li>
            )
          })}
        </ol>
      </div>

      <figcaption className="flex min-h-12 items-center justify-between gap-3 border-t border-white/10 px-4 py-2.5 sm:px-5">
        <span className={done ? "font-medium text-terminal-pass" : "text-terminal-muted"} aria-hidden="true">
          {done ? summary(checks.length, seconds) : `${passed}/${checks.length}`}
        </span>
        {done && !reduceMotion && (
          <button
            type="button"
            onClick={() => setRunId((id) => id + 1)}
            className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-sans text-xs text-terminal-muted transition-colors hover:bg-white/10 hover:text-terminal-foreground"
          >
            <RotateCcw className="size-3.5" aria-hidden="true" />
            {replay}
          </button>
        )}
      </figcaption>
    </figure>
  )
}
