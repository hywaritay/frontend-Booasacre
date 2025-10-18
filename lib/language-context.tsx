"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'fr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: React.ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en')
  const [translations, setTranslations] = useState<Record<string, any>>({})

  // Load translations based on current language
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translationModule = await import(`./translations/${language}.json`)
        setTranslations(translationModule.default)
      } catch (error) {
        console.error(`Failed to load translations for ${language}:`, error)
        // Fallback to English if the requested language fails to load
        if (language !== 'en') {
          try {
            const englishModule = await import('./translations/en.json')
            setTranslations(englishModule.default)
          } catch (fallbackError) {
            console.error('Failed to load fallback English translations:', fallbackError)
          }
        }
      }
    }

    loadTranslations()
  }, [language])

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
    // Update document language attribute
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }

  // Translation function with nested key support
  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // Fallback to key if translation not found
        console.warn(`Translation key "${key}" not found for language "${language}"`)
        return key
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
