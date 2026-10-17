"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/context/LanguageContext"
import { SOURCE_URL } from "@/lib/site"

export function SiteFooter() {
  const { t } = useLanguage()
  const [views, setViews] = useState<string | null>(null)

  useEffect(() => {
    // Same counter URL the site used before; it counts the "/interactive-resume" path.
    fetch("https://berkukes.goatcounter.com/counter//interactive-resume.json")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { count?: string }) => data.count && setViews(data.count))
      .catch(() => {
        // The counter is a nice-to-have; hide it if the request fails.
      })
  }, [])

  return (
    <footer className="border-t border-border py-8 text-sm text-muted-foreground print:hidden">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <p>
          © {new Date().getFullYear()} Sid-Ali Hamdane. {t.footer.builtWith}
        </p>
        <div className="flex items-center gap-6">
          {views && <p>{t.footer.views(views)}</p>}
          <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:text-foreground hover:underline">
            {t.footer.source}
          </a>
        </div>
      </div>
    </footer>
  )
}
