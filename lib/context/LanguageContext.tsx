"use client"

import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { en } from "@/lib/content/en"
import { fr } from "@/lib/content/fr"
import type { Content, Language } from "@/lib/content/types"

const content: Record<Language, Content> = { en, fr }
const STORAGE_KEY = "language"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: Content
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const isLanguage = (value: unknown): value is Language => value === "en" || value === "fr"

/**
 * Order of precedence: ?lang= in the URL (used to generate the French CV),
 * then the visitor's last choice, then the browser language.
 */
function detectLanguage(): Language {
  const fromUrl = new URLSearchParams(window.location.search).get("lang")
  if (isLanguage(fromUrl)) return fromUrl
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isLanguage(stored)) return stored
  } catch {
    // Storage can be blocked (private mode, disabled cookies); fall through.
  }
  return navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en"
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // The static HTML is rendered in English; the detected language is applied after hydration.
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    setLanguageState(detectLanguage())
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.title = content[language].meta.title
  }, [language])

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Not persisting is fine; the choice still applies for this visit.
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: content[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
