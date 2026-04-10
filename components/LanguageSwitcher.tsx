"use client"

import { useLanguage } from '@/lib/context/LanguageContext'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex gap-1 rounded-full bg-secondary/50 backdrop-blur-sm p-1 border border-border/50">
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
          language === 'en'
            ? 'bg-primary text-primary-foreground shadow-lg scale-105'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
          language === 'fr'
            ? 'bg-primary text-primary-foreground shadow-lg scale-105'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        FR
      </button>
    </div>
  )
}
