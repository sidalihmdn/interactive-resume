"use client"

import { useLanguage } from "@/lib/context/LanguageContext"
import { Section } from "./section"

export function About() {
  const { t } = useLanguage()

  return (
    <Section id="about" title={t.about.title}>
      <div className="max-w-[40rem] space-y-4 text-lg leading-relaxed text-muted-foreground print:max-w-none print:text-sm">
        {t.about.paragraphs.map((paragraph, i) => (
          <p key={i} className={i === 0 ? "text-foreground" : undefined}>
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  )
}
