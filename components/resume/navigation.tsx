"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useTranslation } from "@/lib/hooks/useTranslation"

export function Navigation() {
  const { t } = useTranslation()
  const navItems = [
    { id: "about", label: t("navigation.about") },
    { id: "experience", label: t("navigation.experience") },
    { id: "projects", label: t("navigation.projects") },
    { id: "certifications", label: t("navigation.certifications") },
    { id: "skills", label: t("navigation.skills") },
    { id: "contact", label: t("navigation.contact") },
  ]

  const [activeSection, setActiveSection] = useState("about")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showHelper, setShowHelper] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "0px 0px -70% 0px" }
    )

    navItems.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })

    const handleScroll = () => {
      const doc = document.documentElement
      const maxScroll = doc.scrollHeight - window.innerHeight
      const ratio = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0
      setScrollProgress(Math.min(100, Math.max(0, ratio)))

      // Keep helper hidden while hero landing is on screen.
      setShowHelper(window.scrollY > window.innerHeight * 0.82)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <nav
        className={`fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 transition-opacity duration-300 lg:block ${
          showHelper ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-label={t("navigation.sectionProgressRail")}
      >
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
          className="w-48 rounded-2xl border border-border/60 bg-background/75 p-3 shadow-xl backdrop-blur-md"
        >
          <div className="mb-3">
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{t("navigation.progress")}</p>
            <div className="mt-2 h-1.5 rounded-full bg-secondary">
              <motion.div
                className="h-full rounded-full bg-primary"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
            <p className="mt-1 text-[10px] text-muted-foreground">{Math.round(scrollProgress)}%</p>
          </div>

          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left text-xs uppercase tracking-wider transition-colors ${
                    activeSection === item.id
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-[10px]">{activeSection === item.id ? "•" : ""}</span>
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>

      <nav
        className={`fixed bottom-3 left-1/2 z-40 w-[min(94%,520px)] -translate-x-1/2 rounded-2xl border border-border/40 bg-background/70 px-2 py-1.5 shadow-lg backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          showHelper ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-label={t("navigation.mobileSectionNavigation")}
      >
        <div className="mb-1.5 h-0.5 w-full overflow-hidden rounded-full bg-secondary/70">
          <motion.div className="h-full rounded-full bg-primary/85" style={{ width: `${scrollProgress}%` }} />
        </div>
        <ul className="flex items-center gap-1 overflow-x-auto pb-0.5">
          {navItems.map((item) => (
            <li key={item.id} className="shrink-0">
              <button
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full px-2.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.08em] transition-colors ${
                  activeSection === item.id
                    ? "bg-primary/85 text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
