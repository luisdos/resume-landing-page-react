import React from 'react'
import { useLang } from '@/context/LanguageProvider'

export default function Footer(){
  const { t } = useLang()
  return (
    <footer className="py-7 text-slate-400">
      <div className="max-w-[1120px] mx-auto px-5 flex justify-between items-center gap-3 flex-wrap">
        <small>© {new Date().getFullYear()} Luis Carlos Flores Contreras</small>
        <div className="flex gap-2">
          <a className="badge" href="/LuisFlores_CV.pdf">{t.footerCV}</a>
          <a className="badge" href="https://github.com/luisdos" target="_blank" rel="noreferrer">GitHub</a>
          <a className="badge" href="https://www.linkedin.com/in/luisfloresl" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
