import { Quote } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 bg-cream py-24 sm:py-28">
      <div className="container-rb">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Founder imagery */}
          <div className="relative order-last lg:order-first">
            <div className="absolute -inset-4 rotate-2 rounded-[2.5rem] bg-gradient-to-tr from-forest/15 via-gold/15 to-sunrise/15" />
            <div className="relative grid grid-cols-5 gap-4">
              <img
                src="/img/founder.jpg"
                alt="Rebecca Pyne"
                className="col-span-3 aspect-[3/4] w-full rounded-3xl object-cover shadow-lift"
                loading="lazy"
              />
              <img
                src="/img/outreach-tall.jpg"
                alt="RB Foundation outreach in the community"
                className="col-span-2 mt-10 aspect-[3/5] w-full rounded-3xl object-cover shadow-lift"
                loading="lazy"
              />
            </div>
          </div>

          {/* Story */}
          <div>
            <span className="kicker">Our Story</span>
            <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl">
              A calling that began with one open heart.
            </h2>

            {/* TODO: Replace placeholder copy with Rebecca Pyne's real story & history. */}
            <div className="mt-6 space-y-5 text-lg leading-8 text-ink/75">
              <p>
                Rebecca Pyne founded RB Foundation out of a simple conviction: that
                faith is most alive when it shows up at someone&rsquo;s door with help
                in hand. What started as small acts of kindness in her own community
                has grown into{' '}
                <span className="font-semibold text-forest-deep">
                  Rebecca Christian Global Outreach
                </span>{' '}
                — a ministry meeting real needs across borders.
              </p>
              <p>
                {/* TODO: Add specifics — founding year, regions served, milestones. */}
                Today, the foundation channels generosity toward families who need it
                most: food and essentials, encouragement, and the dignity of being
                seen. Every effort is rooted in the belief that love, freely given,
                changes lives.
              </p>
            </div>
          </div>
        </div>

        {/* ---- Mission statement callout — wide accent block ---- */}
        <div className="relative mt-20 overflow-hidden rounded-4xl bg-forest px-8 py-14 text-cream shadow-soft sm:px-14 sm:py-16 lg:px-20">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-sunrise/20 blur-2xl" />
          <div className="relative mx-auto max-w-4xl text-center">
            <Quote className="mx-auto h-10 w-10 text-gold-soft" />
            <p className="mt-6 font-serif text-2xl font-medium leading-relaxed text-balance sm:text-[2rem] sm:leading-[1.4]">
              {/* TODO: Confirm official mission statement wording. */}
              &ldquo;Our mission is to carry hope to forgotten places — serving
              communities with compassion, sharing the love of Christ, and lifting
              families toward a brighter tomorrow.&rdquo;
            </p>
            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.25em] text-gold-soft">
              The Mission of RB Foundation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
