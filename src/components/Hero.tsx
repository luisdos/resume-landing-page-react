import React from 'react'
import Badge from './Badge'
import Button from './Button'
import Stat from './Stat'
import { useLang } from '@/context/LanguageProvider'

export default function Hero(){
  const { t } = useLang()
  return (
    <section className="py-18">
      <div className="max-w-[1120px] mx-auto px-5 grid md:grid-cols-[1.4fr_.9fr] gap-8">
        <div>
          <Badge>{t.hero.badge}</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2 mb-3">{t.hero.h1}</h1>
          <p className="text-slate-300 max-w-[60ch]" dangerouslySetInnerHTML={{__html: t.hero.lead}} />
          <div className="flex flex-wrap gap-3 mt-5">
            <Button as="a" href="mailto:luisfloresvid@gmail.com" variant="primary">{t.hero.ctaContact}</Button>
            <Button as="a" href="/LuisFlores_CV.pdf">{t.hero.ctaCV}</Button>
            <Button as="a" href="https://github.com/luisdos" className="btn-ghost">GitHub</Button>
            <Button as="a" href="https://www.linkedin.com/in/luisfloresl" className="btn-ghost">LinkedIn</Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <Stat num={t.hero.stat1Num} txt={t.hero.stat1Txt} />
            <Stat num={t.hero.stat2Num} txt={t.hero.stat2Txt} />
            <Stat num={t.hero.stat3Num} txt={t.hero.stat3Txt} />
            <Stat num={t.hero.stat4Num} txt={t.hero.stat4Txt} />
          </div>
        </div>
        <div className="card p-4">
          <h2 className="text-xl mb-2">Highlights</h2>
          <ul className="list-disc pl-5 text-slate-300 space-y-1">
            <li dangerouslySetInnerHTML={{__html: t.highlights[0]}} />
            <li dangerouslySetInnerHTML={{__html: t.highlights[1]}} />
            <li dangerouslySetInnerHTML={{__html: t.highlights[2]}} />
            <li dangerouslySetInnerHTML={{__html: t.highlights[3]}} />
            <li dangerouslySetInnerHTML={{__html: t.highlights[4]}} />
          </ul>
        </div>
      </div>
    </section>
  )
}
