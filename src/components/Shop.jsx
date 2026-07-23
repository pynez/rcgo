import { Clock, Bell, ShoppingBag } from "lucide-react";
import Sunburst from "./Sunburst";

export default function Shop() {
  return (
    <section id="shop" className="scroll-mt-20 bg-cream py-24 sm:py-28">
      <div className="container-rb">
        {/* Coming-soon splash — a single warm panel, no product photos yet */}
        <div className="relative overflow-hidden rounded-4xl border border-ink/10 bg-sand/60 bg-grain px-6 py-20 text-center shadow-lift sm:px-12 sm:py-24">
          {/* Signature sunrise rays behind the panel */}
          <Sunburst
            rays={32}
            className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/3 text-gold/25 animate-spin-slow"
          />
          <div className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-forest/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-sunrise/10 blur-2xl" />

          <div className="relative mx-auto max-w-2xl">
            <span className="kicker mt-8">
              <Clock className="h-3.5 w-3.5" />
              Coming Soon
            </span>

            <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-ink text-balance sm:text-5xl">
              Wear the message. Fund the mission.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-ink/70">
              Our shop is on its way. Soon, every purchase will help fund
              outreach through Rebecca Christian Global Outreach — faith you can
              wear, generosity you can feel.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary">
                <Bell className="h-4 w-4" />
                Notify Me When It Opens
              </a>
              <a href="#donate" className="btn-secondary">
                Support Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
