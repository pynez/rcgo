import { Heart, ArrowRight } from 'lucide-react'
import Sunburst from './Sunburst'

export default function Donate() {
  return (
    <section
      id="donate"
      className="relative scroll-mt-20 overflow-hidden bg-ink py-24 text-cream sm:py-32"
    >
      {/* Warm sunrise glows over the dark canvas */}
      <Sunburst
        rays={32}
        className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 text-gold/15 animate-spin-slow"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-forest-deep/40 to-transparent" />

      <div className="container-rb relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">
            <Heart className="h-3.5 w-3.5" />
            Give Today
          </span>

          {/* TODO: Tailor this emotional appeal with real impact figures / stories. */}
          <h2 className="mt-7 font-serif text-4xl font-bold leading-tight text-balance sm:text-6xl">
            Your generosity becomes someone&rsquo;s tomorrow.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-cream/75">
            A gift of any size puts food on a table, hope in a heart, and the love
            of Christ into action. Stand with us — and help carry that hope
            further than we ever could alone.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href="https://www.paypal.com/ncp/payment/7FV6JZ7WJE2ZW"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-sunrise px-10 py-5 text-base font-bold tracking-wide text-white shadow-glow transition duration-300 hover:-translate-y-0.5 hover:bg-sunrise-soft"
            >
              Donate Now
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <p className="text-sm text-cream/55">
              Donations support{' '}
              <span className="font-semibold text-gold-soft">
                Rebecca Christian Global Outreach
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
