import { ArrowRight, Sparkles } from 'lucide-react'
import Sunburst from './Sunburst'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-sunrise-wash bg-grain"
    >
      {/* Oversized sunrise rays bleeding off the top-right corner */}
      <Sunburst
        rays={36}
        className="pointer-events-none absolute -right-40 -top-44 h-[34rem] w-[34rem]
          text-gold/30 animate-spin-slow"
      />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-forest/10 blur-3xl" />

      <div className="container-rb relative grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-32">
        {/* ---- Text column ---- */}
        <div className="max-w-2xl">
          <span className="kicker reveal d-1">
            <Sparkles className="h-3.5 w-3.5" />
            Faith · Compassion · Community
          </span>

          <h1 className="reveal d-2 mt-6 font-serif text-[2.75rem] font-bold leading-[1.05] tracking-tight text-ink text-balance sm:text-6xl lg:text-[4.2rem]">
            Hope, held in{' '}
            <span className="relative whitespace-nowrap text-sunrise-deep">
              open hands
              <svg
                aria-hidden="true"
                viewBox="0 0 300 14"
                className="absolute -bottom-2 left-0 h-3 w-full text-gold"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C60 3 120 3 180 6c40 2 80 3 118 1"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          {/* Bio — generous line-height, capped width so it never over-stretches */}
          <p className="reveal d-3 mt-7 max-w-xl text-lg leading-8 text-ink/75">
            {/* TODO: Replace with Rebecca Pyne's finalized founder bio / mission summary. */}
            RB Foundation is a Christian nonprofit founded by{' '}
            <span className="font-semibold text-ink">Rebecca Pyne</span>. Through{' '}
            Rebecca Christian Global Outreach, we walk alongside families and
            communities — offering practical support, heartfelt outreach, and the
            steady reminder that no one is forgotten.
          </p>

          <div className="reveal d-4 mt-9 flex flex-wrap items-center gap-4">
            <a href="#donate" className="btn-primary">
              Donate Now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#about" className="btn-secondary">
              Learn More
            </a>
          </div>

          {/* Light trust strip */}
          <dl className="reveal d-5 mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-7">
            {[
              { n: '100%', l: 'Faith-driven' },
              { n: '3', l: 'Focus areas' },
              { n: 'Global', l: 'Outreach reach' },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-serif text-2xl font-bold text-forest">
                  {s.n}
                </dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-ink/55">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ---- Photo column ---- */}
        <div className="reveal d-3 relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Soft tinted frame behind the photo */}
          <div className="absolute -inset-4 -rotate-2 rounded-[2.5rem] bg-gradient-to-br from-gold/25 via-sunrise/15 to-forest/20" />
          <div className="relative overflow-hidden rounded-[2.25rem] shadow-soft ring-1 ring-white/60">
            <img
              src="/img/hero.jpg"
              alt="Rebecca Pyne, founder of RB Foundation"
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          </div>

          {/* Floating caption card */}
          <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-white/70 bg-white/90 px-5 py-3.5 shadow-lift backdrop-blur sm:-left-6">
            <img
              src="/img/logo.png"
              alt=""
              aria-hidden="true"
              className="h-9 w-9 object-contain"
            />
            <div className="leading-tight">
              <p className="font-serif text-sm font-bold text-ink">Rebecca Pyne</p>
              <p className="text-xs text-ink/60">Founder & Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
