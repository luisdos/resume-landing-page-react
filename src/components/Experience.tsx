import React from 'react'
import { useLang } from '@/context/LanguageProvider'

export default function Experience(){
  const { t } = useLang()
  return (
    <section id="experiencia" className="py-9">
      <div className="max-w-[1120px] mx-auto px-5">
        <h2 className="text-2xl mb-3">{t.experienceTitle}</h2>
        <div className="grid gap-3">
          <div className="card p-4 grid md:grid-cols-[140px_1fr] gap-4">
            <time className="text-slate-300">{t.expTime}</time>
            <div>
              <div className="font-bold">Software Engineer — Ascendion (Remoto)</div>
              <div className="text-slate-400">Stack: C# .NET 8, EF, React 18, SQL Server, Azure, Azure DevOps</div>
              <ul className="list-disc pl-5 space-y-1 mt-2 text-slate-300">
                <li dangerouslySetInnerHTML={{__html: t.exp[0]}} />
                <li dangerouslySetInnerHTML={{__html: t.exp[1]}} />
                <li dangerouslySetInnerHTML={{__html: t.exp[2]}} />
                <li dangerouslySetInnerHTML={{__html: t.exp[3]}} />
                <li dangerouslySetInnerHTML={{__html: t.exp[4]}} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
