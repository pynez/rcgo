import { HandHeart, Globe2, Gift } from 'lucide-react'

const FOCUS_AREAS = [
  {
    icon: HandHeart,
    title: 'Community Support',
    body: 'Meeting practical needs — food, essentials, and encouragement — so families facing hardship know they are not alone.',
    accent: 'sunrise',
  },
  {
    icon: Globe2,
    title: 'Global Outreach',
    body: 'Carrying the love of Christ across borders through Rebecca Christian Global Outreach, reaching communities others overlook.',
    accent: 'forest',
  },
  {
    icon: Gift,
    title: 'Generous Giving',
    body: 'Turning every donation into tangible care — directing generosity toward the people and places that need it most.',
    accent: 'gold',
  },
]

// Tailwind-safe accent maps (no dynamic class strings).
const ACCENTS = {
  sunrise: {
    ring: 'group-hover:border-sunrise/40',
    chip: 'bg-sunrise/12 text-sunrise-deep',
    bar: 'bg-sunrise',
  },
  forest: {
    ring: 'group-hover:border-forest/40',
    chip: 'bg-forest/12 text-forest-deep',
    bar: 'bg-forest',
  },
  gold: {
    ring: 'group-hover:border-gold/50',
    chip: 'bg-gold/15 text-gold-deep',
    bar: 'bg-gold',
  },
}

export default function Impact() {
  return (
    <section
      id="impact"
      className="relative scroll-mt-20 overflow-hidden bg-sand/60 bg-grain py-24 sm:py-28"
    >
      <div className="container-rb">
        <div className="mx-auto max-w-2xl text-center">
          <span className="kicker">What We Do</span>
          <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Three ways we put faith into action.
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink/70">
            Every part of our work flows from one purpose: to love our neighbors
            near and far in real, measurable ways.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {FOCUS_AREAS.map((area) => {
            const Icon = area.icon
            const a = ACCENTS[area.accent]
            return (
              <article
                key={area.title}
                className={`group relative flex flex-col rounded-3xl border border-ink/10 bg-white/90 p-8 shadow-lift transition duration-300 hover:-translate-y-1.5 hover:shadow-soft ${a.ring}`}
              >
                <span
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${a.chip}`}
                >
                  <Icon className="h-7 w-7" strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-bold text-ink">
                  {area.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-ink/70">{area.body}</p>
                <span
                  className={`mt-7 h-1 w-12 origin-left rounded-full transition-transform duration-300 group-hover:scale-x-[2] ${a.bar}`}
                />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
