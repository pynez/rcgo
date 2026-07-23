import { useEffect, useState } from 'react'
import { Menu, X, Heart } from 'lucide-react'
import { NAV_LINKS } from '../App'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add a touch more shadow / opacity once the user leaves the very top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-ink/10 bg-white/90 shadow-lift backdrop-blur-md'
          : 'border-ink/5 bg-white/80 backdrop-blur'
      }`}
    >
      <nav className="container-rb flex h-[4.5rem] items-center justify-between">
        {/* Logo / wordmark */}
        <a
          href="#home"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src="/img/logo.png"
            alt="RB Foundation"
            className="h-11 w-11 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-bold tracking-tight text-ink">
              RB Foundation
            </span>
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
              Rebecca Christian Global Outreach
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition
                hover:text-ink after:absolute after:inset-x-4 after:-bottom-0.5 after:h-0.5
                after:origin-left after:scale-x-0 after:rounded-full after:bg-sunrise
                after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
          <a href="#donate" className="btn-primary ml-3 px-5 py-2.5">
            <Heart className="h-4 w-4" strokeWidth={2.4} />
            Donate Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border
            border-ink/10 bg-white text-ink transition hover:bg-sand md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-ink/5 bg-white/95 backdrop-blur-md transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="container-rb flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-medium text-ink/80 transition hover:bg-sand"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            <Heart className="h-4 w-4" strokeWidth={2.4} />
            Donate Now
          </a>
        </div>
      </div>
    </header>
  )
}
