"use client"

import Image from "next/image"
import { CalendarDays, Download, Github, Linkedin, Mail, MapPin } from "lucide-react"
import profileImg from "@/public/profile.webp"
import { useLanguage } from "@/lib/context/LanguageContext"
import { CALENDLY_URL, cvFile, EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/site"
import { TestRun } from "./test-run"

export function Hero() {
  const { t, language } = useLanguage()

  const socials = [
    { icon: Github, href: GITHUB_URL, label: "GitHub" },
    { icon: Linkedin, href: LINKEDIN_URL, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${EMAIL}`, label: EMAIL },
  ]

  return (
    <section
      aria-labelledby="hero-name"
      className="grid items-center gap-12 pb-16 pt-10 md:pb-24 md:pt-16 lg:grid-cols-[1fr_minmax(0,27rem)] lg:gap-16 print:hidden"
    >
      <div>
        <Image
          src={profileImg}
          alt={t.hero.photoAlt}
          priority
          sizes="(min-width: 640px) 96px, 160px"
          className="size-40 rounded-full object-cover ring-1 ring-border sm:size-24"
        />

        <h1 id="hero-name" className="mt-8 text-5xl font-semibold tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl">
          Sid-Ali Hamdane
        </h1>
        <p className="mt-3 text-xl font-medium text-primary sm:text-2xl">{t.hero.role}</p>
        <p className="mt-5 max-w-[34rem] text-lg leading-relaxed text-muted-foreground">{t.hero.intro}</p>

        <p className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-4" aria-hidden="true" />
          {t.contact.location}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <CalendarDays className="size-4" aria-hidden="true" />
            {t.hero.bookCall}
          </a>
          <a
            href={cvFile(language)}
            download
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Download className="size-4" aria-hidden="true" />
            {t.hero.downloadCv}
          </a>
          <ul className="flex items-center gap-1" aria-label="Social links">
            {socials.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid size-11 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <Icon className="size-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <TestRun />
    </section>
  )
}
