import React from 'react'
import { useLang } from '@/context/LanguageProvider'

const Card: React.FC<{title:string, chips:string[]}> = ({title, chips}) => (
  <div className="card p-4">
    <strong>{title}</strong>
    <div className="flex flex-wrap gap-2 mt-2">
      {chips.map(c => <span key={c} className="badge text-sm">{c}</span>)}
    </div>
  </div>
)

export default function Skills(){
  const { t } = useLang()
  return (
    <section id="skills" className="py-9">
      <div className="max-w-[1120px] mx-auto px-5">
        <h2 className="text-2xl mb-3">{t.skillsTitle}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card title="Backend" chips={["C# • .NET 8","Entity Framework","REST APIs","Node.js","Express","Sequelize"]} />
          <Card title="Frontend" chips={["React 18","Angular 17","TypeScript","Fluent UI","Vite"]} />
          <Card title="Cloud & DevOps" chips={["Azure","Azure DevOps","Pipelines • Slots","CI/CD","CORS • Config"]} />
          <Card title="Datos" chips={["SQL Server","PostgreSQL","T-SQL","OpenXML (Excel)"]} />
          <Card title="Testing & Calidad" chips={["Unit tests","API testing","Code reviews","Observabilidad"]} />
          <Card title="Extras" chips={["Tauri + React","Sockets","AWS (en curso)"]} />
        </div>
      </div>
    </section>
  )
}
