import React from 'react'
import { useLang } from '@/context/LanguageProvider'

const Project: React.FC<{title:string, desc:string, roadmap?:boolean}> = ({title, desc, roadmap}) => (
  <article className="card p-4">
    <h3 className="text-xl mb-1">{title}</h3>
    <p className="text-main" dangerouslySetInnerHTML={{__html: desc}} />
    <div className="flex gap-2 mt-2">
      <a className="btn btn-ghost" href="#">🔗 Demo</a>
      <a className="btn btn-ghost" href="#">{roadmap ? '🗺️ Roadmap' : '💻 Código'}</a>
    </div>
  </article>
)

export default function Projects(){
  const { t } = useLang()
  return (
    <section id="proyectos" className="py-9">
      <div className="max-w-[1120px] mx-auto px-5">
        <h2 className="text-2xl mb-3">{t.projectsTitle}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Project title="Lavadoras El Hermano" desc={t.projects.p1Desc} />
          <Project title="Restaurante Roberts" desc={t.projects.p2Desc} />
          <Project title="Centro Browser" desc={t.projects.p3Desc} />
          <Project title="TaskOS (WIP)" desc={t.projects.p4Desc} roadmap />
        </div>
      </div>
    </section>
  )
}
