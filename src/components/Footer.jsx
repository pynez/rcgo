import { Heart } from 'lucide-react'
import { NAV_LINKS } from '../App'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 bg-sand/70 bg-grain">
      <div className="container-rb py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          {/* Brand + tagline */}
          <div className="max-w-md">
            <a href="#home" className="flex items-center gap-3">
              <img
                src="/img/logo.png"
                alt="RB Foundation"
                className="h-12 w-12 object-contain"
              />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-xl font-bold text-ink">
                  RB Foundation
                </span>
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
                  Rebecca Christian Global Outreach
                </span>
              </span>
            </a>
            <p className="mt-5 text-base leading-7 text-ink/65">
              Carrying hope to forgotten places — serving communities with
              compassion and the love of Christ.
            </p>
          </div>

          {/* Repeated nav */}
          <nav className="md:justify-self-end">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">
              Explore
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-10 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base font-medium text-ink/70 transition hover:text-sunrise-deep"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-8 text-sm text-ink/55 sm:flex-row">
          <p>
            © {year} RB Foundation. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5">
            Built with
            <Heart className="h-4 w-4 fill-sunrise text-sunrise" />
            for the mission.
          </p>
        </div>
      </div>
    </footer>
  )
}
