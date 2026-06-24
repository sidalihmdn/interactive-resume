"use client"

import { useLanguage } from '@/lib/context/LanguageContext'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="fixed top-4 right-4 z-50 rounded-full border border-border/50 bg-secondary/70 p-1 shadow-lg backdrop-blur-md">
      <div className="relative grid grid-cols-2 items-center">
        <span
          className={`pointer-events-none absolute left-1 top-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.25rem)] rounded-full bg-primary shadow-md transition-transform duration-300 ease-out ${
            language === 'fr' ? 'translate-x-full' : 'translate-x-0'
          }`}
        />

        <button
          onClick={() => setLanguage('en')}
          className={`relative z-10 w-12 px-2 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
            language === 'en'
              ? 'text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('fr')}
          className={`relative z-10 w-12 px-2 py-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
            language === 'fr'
              ? 'text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          FR
        </button>
      </div>
    </div>
  )
}
