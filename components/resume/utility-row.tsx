"use client"

import { useState } from "react"
import { CalendarDays, Copy, Download, Mail, Printer, Check } from "lucide-react"

export function UtilityRow() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hamdane.sidali@hotmail.com")
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch {
      // no-op fallback for unsupported clipboard contexts
    }
  }

  return (
    <section
      id="utility"
      aria-label="Recruiter quick actions"
      className="mb-24 mt-10 rounded-2xl border border-border/50 bg-card/50 p-3 shadow-sm backdrop-blur-sm md:mb-14 md:p-4"
    >
      <div className="flex flex-wrap items-center gap-1.5 md:gap-2">
        <a
          href="/Sid-Ali-HAMDANE-CV.pdf"
          download
          className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-3 py-1.5 text-[11px] font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary md:gap-2 md:px-4 md:py-2 md:text-xs md:font-semibold md:uppercase md:tracking-wider"
        >
          <Download className="h-3.5 w-3.5" />
          Download CV
        </a>

        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-3 py-1.5 text-[11px] font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary md:gap-2 md:px-4 md:py-2 md:text-xs md:font-semibold md:uppercase md:tracking-wider"
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy Email"}
        </button>

        <a
          href="mailto:hamdane.sidali@hotmail.com?subject=Interview%20Request"
          className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-3 py-1.5 text-[11px] font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary md:gap-2 md:px-4 md:py-2 md:text-xs md:font-semibold md:uppercase md:tracking-wider"
        >
          <CalendarDays className="h-3.5 w-3.5" />
          Book a Call
        </a>

        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-3 py-1.5 text-[11px] font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary md:gap-2 md:px-4 md:py-2 md:text-xs md:font-semibold md:uppercase md:tracking-wider"
        >
          <Printer className="h-3.5 w-3.5" />
          Print Mode
        </button>

        <a
          href="mailto:hamdane.sidali@hotmail.com"
          className="hidden ml-auto items-center gap-2 rounded-full px-3 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
        >
          <Mail className="h-3.5 w-3.5" />
          hamdane.sidali@hotmail.com
        </a>
      </div>
    </section>
  )
}
