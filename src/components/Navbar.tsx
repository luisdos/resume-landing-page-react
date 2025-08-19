import React, { useEffect, useMemo, useState } from 'react'
import { useLang } from '@/context/LanguageProvider'
import { useTheme } from '@/context/ThemeProvider'

type SectionId = 'sobre-mi' | 'skills' | 'experiencia' | 'proyectos' | 'contacto'

const sections: SectionId[] = ['sobre-mi', 'skills', 'experiencia', 'proyectos', 'contacto']

function useActiveSection(ids: SectionId[]) {
  const [active, setActive] = useState<SectionId | null>(null)

  useEffect(() => {
    const els = ids
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)

    if (els.length === 0) return

    const obs = new IntersectionObserver(
      entries => {
        // Tomamos la entrada con mayor intersección
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target?.id && ids.includes(visible.target.id as SectionId)) {
          setActive(visible.target.id as SectionId)
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    )

    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [ids])

  return active
}

export default function Navbar() {
  const { t, lang, setLang } = useLang()
  const { theme, toggle } = useTheme()
  const active = useActiveSection(sections)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Cierra el menú móvil al cambiar de sección
  useEffect(() => {
    if (open) setOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  const navItems = useMemo(
    () => [
      { id: 'sobre-mi', label: t.nav.about },
      { id: 'skills', label: t.nav.skills },
      { id: 'experiencia', label: t.nav.experience },
      { id: 'proyectos', label: t.nav.projects },
      { id: 'contacto', label: t.nav.contact },
    ] as { id: SectionId; label: string }[],
    [t]
  )

  const baseBar =
    'fixed top-0 inset-x-0 z-50 transition-colors'
  const glass =
    // fondo translúcido con blur; cambia en claro/oscuro
    'backdrop-blur-xl ' +
    (scrolled
      ? 'bg-white/70 dark:bg-slate-900/60 border-b border-slate-200/70 dark:border-white/10 shadow-sm'
      : 'bg-white/40 dark:bg-slate-900/40 border-b border-transparent')
  const container = 'max-w-[1120px] mx-auto px-4 md:px-5'

  const linkBase =
    'relative px-3 py-2 rounded-lg text-sm md:text-[15px] transition-colors ' +
    'text-slate-700 hover:text-slate-900 hover:bg-black/5 ' +
    'dark:text-slate-300 dark:hover:text-slate-100 dark:hover:bg-white/10 focus:outline-none ' +
    'focus-visible:ring-2 focus-visible:ring-brand'
  const linkActive =
    'text-slate-900 dark:text-white ' +
    "after:content-[''] after:absolute after:left-2 after:right-2 after:-bottom-0.5 " +
    'after:h-[2px] after:rounded-full after:bg-brand'

  const iconBtn =
    'inline-flex items-center justify-center rounded-lg px-2.5 py-2 ' +
    'text-slate-700 hover:text-slate-900 hover:bg-black/5 ' +
    'dark:text-slate-300 dark:hover:text-slate-100 dark:hover:bg-white/10 ' +
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand'

  return (
    <header className={`${baseBar} ${glass}`} aria-label="Main navigation">
      <div className={container}>
        <nav className="flex h-16 items-center justify-between gap-2">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded-xl">
            <div
              className="w-9 h-9 rounded-xl shadow-[0_8px_24px_rgba(124,156,255,.45)]"
              style={{ background: 'linear-gradient(145deg, #7c9cff, #6df0c2)' }}
              aria-hidden="true"
            />
            <div className="leading-4">
              <strong className="block">Luis Flores</strong>
              <span className="text-xs text-slate-500 dark:text-slate-400">Full-Stack Software Engineer</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`${linkBase} ${active === item.id ? linkActive : ''}`}
              >
                {item.label}
              </a>
            ))}

            {/* Language */}
            <select
              aria-label={t.language}
              title={t.language}
              value={lang}
              onChange={e => setLang(e.target.value as any)}
              className="ml-2 rounded-lg border border-slate-300 dark:border-white/20 bg-transparent text-slate-800 dark:text-slate-200 px-2.5 py-1.5
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <option value="es">ES</option>
              <option value="en">EN</option>
            </select>

            {/* Theme toggle */}
            <button onClick={toggle} className={iconBtn} title={t.themeToggle} aria-label={t.themeToggle} aria-pressed={theme === 'dark'}>
              {theme === 'dark' ? (
                // Sun for light (we're in dark now)
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 4V2M12 22v-2M4.93 4.93 3.51 3.51M20.49 20.49l-1.42-1.42M4 12H2M22 12h-2M4.93 19.07 3.51 20.49M20.49 3.51l-1.42 1.42" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6"/>
                </svg>
              ) : (
                // Moon for dark (we're in light now)
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-1">
            <button onClick={toggle} className={iconBtn} title={t.themeToggle} aria-label={t.themeToggle} aria-pressed={theme === 'dark'}>
              {theme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 4V2M12 22v-2M4.93 4.93 3.51 3.51M20.49 20.49l-1.42-1.42M4 12H2M22 12h-2M4.93 19.07 3.51 20.49M20.49 3.51l-1.42 1.42" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
            <button
              onClick={() => setOpen(v => !v)}
              className={iconBtn}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? (
                // close
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              ) : (
                // hamburger
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all origin-top ${
          open ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className={`${container} pb-3`}>
          <div className="mt-1 grid gap-1 p-2 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`block ${linkBase} ${active === item.id ? linkActive : ''}`}
              >
                {item.label}
              </a>
            ))}

            <div className="flex items-center gap-2 px-2 pt-1">
              <label className="text-sm text-slate-700 dark:text-slate-300">{t.language}</label>
              <select
                aria-label={t.language}
                title={t.language}
                value={lang}
                onChange={e => setLang(e.target.value as any)}
                className="ml-auto rounded-lg border border-slate-300 dark:border-white/20 bg-transparent text-slate-800 dark:text-slate-200 px-2.5 py-1.5
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}