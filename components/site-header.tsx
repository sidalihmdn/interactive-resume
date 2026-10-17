"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useLanguage } from "@/lib/context/LanguageContext"
import type { Language } from "@/lib/content/types"
import { SECTION_IDS, type SectionId } from "@/lib/site"
import { cn } from "@/lib/utils"

function useActiveSection() {
  const [active, setActive] = useState<SectionId | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId)
        }
      },
      // A section counts as current while it crosses the upper third of the screen.
      { rootMargin: "-30% 0px -65% 0px" },
    )
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return active
}

function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()
  const options: Language[] = ["en", "fr"]

  return (
    <div role="group" aria-label={t.nav.language} className="flex rounded-lg border border-border p-0.5">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          lang={option}
          aria-pressed={language === option}
          onClick={() => setLanguage(option)}
          className={cn(
            "h-8 w-9 rounded-md text-xs font-semibold transition-colors",
            language === option ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // The theme is unknown until after hydration; render a same-size placeholder.
  if (!mounted) return <span className="size-9" aria-hidden="true" />

  const isDark = resolvedTheme === "dark"
  const label = isDark ? t.nav.theme.toLight : t.nav.theme.toDark
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
    >
      {isDark ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
    </button>
  )
}

export function SiteHeader() {
  const { t } = useLanguage()
  const active = useActiveSection()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false)
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false)
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("mousedown", onClick)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("mousedown", onClick)
    }
  }, [menuOpen])

  const links = SECTION_IDS.map((id) => ({ id, label: t.nav[id] }))

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md print:hidden">
      <div ref={menuRef} className="mx-auto flex h-16 max-w-6xl items-center gap-2 px-4 sm:gap-4 sm:px-6 lg:px-8">
        <a href="#top" className="mr-auto text-sm font-semibold tracking-tight text-foreground">
          Sid-Ali Hamdane
        </a>

        <nav aria-label={t.nav.sections} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "location" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm transition-colors",
                    active === id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {label}
                  <span
                    className={cn(
                      "mx-auto mt-0.5 block h-0.5 rounded-full bg-primary transition-all",
                      active === id ? "w-4" : "w-0",
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <LanguageToggle />
        <ThemeToggle />

        <button
          type="button"
          className="grid size-9 place-items-center rounded-lg border border-border text-foreground lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-sections"
          aria-label={t.nav.sections}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
        </button>

        {menuOpen && (
          <nav
            id="mobile-sections"
            aria-label={t.nav.sections}
            className="absolute inset-x-0 top-16 border-b border-border bg-background px-4 pb-4 pt-2 shadow-lg sm:px-6 lg:hidden"
          >
            <ul className="grid gap-1">
              {links.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active === id ? "location" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-lg px-3 py-3 text-base",
                      active === id ? "bg-secondary text-foreground" : "text-muted-foreground",
                    )}
                  >
                    {label}
                    {active === id && <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
