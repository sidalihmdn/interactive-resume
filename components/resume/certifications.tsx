"use client"

import { ArrowUpRight, BadgeCheck } from "lucide-react"
import { useLanguage } from "@/lib/context/LanguageContext"
import { Section } from "./section"

export function Certifications() {
  const { t } = useLanguage()

  return (
    <Section id="certifications" title={t.certifications.title}>
      <ul className="divide-y divide-border rounded-xl border border-border bg-card print:divide-y-0 print:border-0">
        {t.certifications.items.map((cert) => (
          <li key={cert.title} className="grid gap-x-4 gap-y-1 p-5 sm:grid-cols-[auto_1fr] print:p-0 print:pb-3">
            <BadgeCheck className="mt-0.5 size-5 text-primary print:hidden" aria-hidden="true" />
            <div>
              <h3 className="font-semibold leading-snug text-foreground">{cert.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {cert.issuer}, {cert.year}
              </p>
              <p className="mt-2 max-w-[40rem] text-sm leading-relaxed text-muted-foreground">{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline print:hidden"
              >
                {t.certifications.view}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
