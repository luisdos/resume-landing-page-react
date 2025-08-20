import React from 'react'
import { useLang } from '@/context/LanguageProvider'

export default function About(){
  const { t } = useLang()
  return (
    <section id="sobre-mi" className="py-9">
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="card p-4">
          <h2 className="text-2xl mb-2">{t.aboutTitle}</h2>
          <p className="text-main " dangerouslySetInnerHTML={{__html: t.aboutP}} />
        </div>
      </div>
    </section>
  )
}
