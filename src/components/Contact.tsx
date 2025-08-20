import React, { useState } from 'react'
import { useLang } from '@/context/LanguageProvider'
import Button from './Button'

export default function Contact(){
  const { t } = useLang()
  const [msg, setMsg] = useState('')

  function submit(e: React.FormEvent){
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const fd = new FormData(form)
    const name = fd.get('name')
    const email = fd.get('email')
    const message = fd.get('message')
    const subject = (t === ({} as any)) ? 'Contacto' : (document.documentElement.lang === 'en' ? 'Contact from portfolio' : 'Contacto desde landing')
    const body = document.documentElement.lang === 'en'
      ? `Name: ${name}\nEmail: ${email}\n\n${message}`
      : `Nombre: ${name}\nEmail: ${email}\n\n${message}`
    const mailto = `mailto:luisfloresvid@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setMsg(t.formOpening)
  }

  async function copyEmail(){
    try{ await navigator.clipboard.writeText('luisfloresvid@gmail.com'); setMsg(t.copied) } catch{ setMsg('Clipboard error') }
    setTimeout(()=> setMsg(''), 1500)
  }

  return (
    <section id="contacto" className="py-9">
      <div className="max-w-[1120px] mx-auto px-5 grid md:grid-cols-[1.1fr_.9fr] gap-5">
        <div className="card p-4">
          <h2 className="text-2xl mb-1">{t.contactTitle}</h2>
          <p className="text-main ">{t.contactLead}</p>
          <div className="flex gap-3 mt-3 flex-wrap">
            <a className="btn btn-primary" href="mailto:luisfloresvid@gmail.com">✉️ luisfloresvid@gmail.com</a>
            <button className="btn" onClick={copyEmail}>{t.copyBtn}</button>
          </div>
          {msg && <p className="text-main  mt-2">{msg}</p>}
        </div>
        <div className="card p-4">
          <h2 className="text-2xl mb-2">{t.quickMsgTitle}</h2>
          <form onSubmit={submit} className="grid gap-3">
            <input required name="name" placeholder={t.placeholders.name} />
            <input required name="email" type="email" placeholder={t.placeholders.email} />
            <textarea required name="message" placeholder={t.placeholders.msg} className="min-h-[130px]" />
            <Button variant="primary" type="submit">{t.submit}</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
