"use client"

import { useLanguage } from "@/lib/context/LanguageContext"
import { EMAIL, LINKEDIN_URL, SITE_URL } from "@/lib/site"

/** Only rendered in print, where it replaces the interactive hero as the CV header. */
export function PrintHeader() {
  const { t } = useLanguage()
  const strip = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")

  return (
    <header className="hidden print:block print:border-b print:border-border print:pb-3">
      <h1 className="text-3xl font-semibold tracking-tight">Sid-Ali Hamdane</h1>
      <p className="mt-1 text-base font-medium text-primary">{t.hero.role}</p>
      <p className="mt-2 text-xs text-muted-foreground">
        {[t.contact.location, EMAIL, strip(LINKEDIN_URL), strip(SITE_URL)].join("   |   ")}
      </p>
    </header>
  )
}
