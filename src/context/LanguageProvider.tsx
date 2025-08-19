import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { dictionaries } from '@/i18n'

type Lang = keyof typeof dictionaries;           // 'es' | 'en'
type I18n = (typeof dictionaries)[Lang];         // unión de ambos

type LangCtx = { lang: Lang; t: I18n; setLang: (l: Lang) => void }

const LANG_KEY = 'lang'
const Ctx = createContext<LangCtx | null>(null)

function detectLang(): Lang {
  const saved = localStorage.getItem(LANG_KEY) as Lang | null
  if (saved && ['es','en'].includes(saved)) return saved
  const prefs = (navigator.languages || [navigator.language || 'es']).map(l => l?.toLowerCase().split('-')[0])
  const found = prefs.find(l => ['es','en'].includes(l))
  return (found as Lang) || 'es'
}

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [lang, setLang] = useState<Lang>(() => detectLang())

  useEffect(() => {
    localStorage.setItem(LANG_KEY, lang)
    document.documentElement.setAttribute('lang', lang)
    // Update meta
    const md = document.querySelector('meta[name="description"]')
    md?.setAttribute('content', dictionaries[lang].meta.description)
    const ogd = document.querySelector('meta[property="og:description"]')
    ogd?.setAttribute('content', dictionaries[lang].meta.ogDescription)
    document.title = dictionaries[lang].meta.title
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: dictionaries[lang] as I18n }), [lang])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export const useLang = () => {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
