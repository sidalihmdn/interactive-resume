"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about")

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

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="hidden lg:block mt-16" aria-label="In-page jump links">
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-max"
      >
        {navItems.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
          >
            <button
              onClick={() => scrollToSection(item.id)}
              className="group flex items-center py-3"
            >
              <span
                className={`mr-4 h-px transition-all duration-300 ${
                  activeSection === item.id
                    ? "w-16 bg-foreground"
                    : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                }`}
              />
              <span
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-muted-foreground group-hover:text-foreground"
                }`}
              >
                {item.label}
              </span>
            </button>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  )
}
