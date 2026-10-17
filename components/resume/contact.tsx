"use client"

import { useState } from "react"
import { CalendarDays, Check, Copy, Download, Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/lib/context/LanguageContext"
import { CALENDLY_URL, cvFile, EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/site"
import { Section } from "./section"

const actionClass =
  "inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-card px-4 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:text-primary"

export function Contact() {
  const { t, language } = useLanguage()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard can be unavailable (insecure context, permissions); the mailto link still works.
    }
  }

  return (
    <Section id="contact" title={t.contact.title} className="print:hidden">
      <p className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{t.contact.heading}</p>
      <p className="mt-4 max-w-[36rem] text-lg leading-relaxed text-muted-foreground">{t.contact.description}</p>

      <a
        href={`mailto:${EMAIL}`}
        className="mt-8 inline-flex items-center gap-3 break-all text-xl font-medium text-primary underline-offset-4 hover:underline sm:text-2xl"
      >
        <Mail className="size-6 shrink-0" aria-hidden="true" />
        {EMAIL}
      </a>

      <div className="mt-8 flex flex-wrap gap-2">
        <button type="button" onClick={copyEmail} className={actionClass}>
          {copied ? <Check className="size-4 text-primary" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
          <span aria-live="polite">{copied ? t.contact.copied : t.contact.copyEmail}</span>
        </button>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className={actionClass}>
          <CalendarDays className="size-4" aria-hidden="true" />
          {t.contact.bookCall}
        </a>
        <a href={cvFile(language)} download className={actionClass}>
          <Download className="size-4" aria-hidden="true" />
          {t.contact.downloadCv}
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={actionClass}>
          <Linkedin className="size-4" aria-hidden="true" />
          LinkedIn
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={actionClass}>
          <Github className="size-4" aria-hidden="true" />
          GitHub
        </a>
      </div>
    </Section>
  )
}
