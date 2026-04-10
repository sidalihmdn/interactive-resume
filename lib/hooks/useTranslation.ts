import { useLanguage } from '@/lib/context/LanguageContext'
import en from '@/lib/translations/en.json'
import fr from '@/lib/translations/fr.json'

type Language = 'en' | 'fr'

const translations: Record<Language, typeof en> = {
  en,
  fr,
}

export function useTranslation() {
  const { language } = useLanguage()

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    if (!value) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }

    return value
  }

  return { t, language }
}
