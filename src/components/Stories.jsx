import { Quote, GraduationCap, MapPin } from "lucide-react";

// Featured testimony — a real letter of appreciation from a supported student.
// Text is preserved in the writer's own voice (whitespace tidied for the web).
const FEATURED = {
  date: "May 7, 2026",
  ref: "Letter of recognition and appreciation",
  name: "Smith J. Swen",
  role: "Student, University of Liberia",
  location: "Monrovia, Liberia",
  photo: "/img/smith.jpg",
  initials: "SS",
  salutation: "To Oldma Rebecca Pyne,",
  // Pull-quote shown large at the top of the letter.
  highlight:
    "Your generosity has opened doors to amazing opportunities for me — doors that will let me be a help to others in the future as well.",
  paragraphs: [
    "I don’t even know where to start. I want to take this moment to express my heartfelt thanks for your generous support toward my life, paying my entrance fees at the University of Liberia. Through your great contribution and humanitarian effort, I am currently accessing a quality and better education at the University of Liberia (UL).",
    "Thanks to your support, I’m getting a quality education and making awesome connections. I’ve met some really cool people here, and it’s been a blast. Your kindness has made a huge difference in my life, and I’m super grateful.",
    "I promise to make the most of this chance and work hard to achieve my goals. You’re a big part of my journey, and I’ll always appreciate what you’ve done for me.",
    "May God Almighty continue to strengthen you and add more grace to your life and your family.",
  ],
  signOff: "Truly yours,",
};

// TODO: Add more real testimonies here as they come in.
const MORE = [
  {
    quote:
      "RCGO has blessed me in more ways than I thought possible. I'm forever grateful for their support.",
    name: "Testimony",
    role: "Outreach recipient",
  },
  {
    quote:
      "Being involved in a faith-driven community like RCGO has motivated me to live God's word every single day.",
    name: "Testimony",
    role: "Community member",
  },
];

export default function Stories() {
  return (
    <section
      id="stories"
      className="relative scroll-mt-20 overflow-hidden bg-sunrise-wash bg-grain py-24 sm:py-28"
    >
      <div className="container-rb">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="kicker">Stories & Testimonies</span>
          <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Lives touched, in their own words.
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink/70">
            Behind every act of generosity is a real person and a real story.
            Here are a few of the voices we&rsquo;re honored to walk alongside.
          </p>
        </div>

        {/* Featured letter — portrait beside the correspondence */}
        <article className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute -inset-3 -rotate-1 rounded-[2.5rem] bg-gradient-to-br from-gold/20 via-sunrise/10 to-forest/15" />
          <div className="relative grid overflow-hidden rounded-4xl border border-ink/10 bg-white shadow-soft lg:grid-cols-[19rem_1fr]">
            {/* Portrait */}
            <div className="relative order-first">
              <img
                src={FEATURED.photo}
                alt={`${FEATURED.name}, ${FEATURED.role}`}
                className="h-72 w-full object-cover object-[center_20%] sm:h-96 lg:h-full lg:min-h-[30rem]"
                loading="lazy"
              />
              {/* Soft fade — bottom on mobile, right edge on desktop — to blend into the letter */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white/25" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-ink shadow-lift backdrop-blur lg:hidden">
                {FEATURED.name}
              </span>
            </div>

            {/* Letter */}
            <div className="p-8 sm:p-12">
              {/* Letterhead row */}
              <div className="flex flex-col gap-4 border-b border-ink/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-forest-deep">
                    <GraduationCap className="h-3.5 w-3.5" />
                    University sponsorship
                  </span>
                  <p className="mt-3 font-serif text-lg font-bold text-ink">
                    {FEATURED.salutation}
                  </p>
                </div>
                <div className="text-left text-sm text-ink/55 sm:text-right">
                  <p className="font-medium text-ink/70">{FEATURED.date}</p>
                  <p className="mt-0.5 italic">Ref: {FEATURED.ref}</p>
                </div>
              </div>

              {/* Pull quote */}
              <div className="relative mt-8">
                <Quote className="absolute -left-1 -top-3 h-10 w-10 text-gold/50" />
                <p className="relative pl-8 font-serif text-2xl font-medium leading-relaxed text-ink text-balance sm:text-[1.7rem] sm:leading-[1.5]">
                  {FEATURED.highlight}
                </p>
              </div>

              {/* Letter body */}
              <div className="mt-8 space-y-5 text-base leading-8 text-ink/75">
                {FEATURED.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Signature */}
              <div className="mt-9 flex items-center gap-4 border-t border-ink/10 pt-7">
                <img
                  src={FEATURED.photo}
                  alt=""
                  aria-hidden="true"
                  className="h-12 w-12 shrink-0 rounded-full object-cover object-[center_20%] ring-2 ring-forest/30"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm italic text-ink/55">
                    {FEATURED.signOff}
                  </p>
                  <p className="font-serif text-lg font-bold text-ink">
                    {FEATURED.name}
                  </p>
                  <p className="flex items-center gap-1.5 text-sm text-ink/60">
                    {FEATURED.role}
                    <span className="text-ink/25">•</span>
                    <MapPin className="h-3.5 w-3.5" />
                    {FEATURED.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Room for future testimonies */}
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-2">
          {MORE.map((t, i) => (
            <div
              key={i}
              className="flex flex-col rounded-3xl border border-dashed border-ink/20 bg-white/50 p-6"
            >
              <Quote className="h-6 w-6 text-gold/50" />
              <p className="mt-3 flex-1 text-base leading-7 text-ink/60">
                {t.quote}
              </p>
              <div className="mt-5">
                <p className="font-serif text-base font-bold text-ink/70">
                  {t.name}
                </p>
                <p className="text-sm text-ink/50">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink/55">
          Has RB Foundation made a difference in your life?{" "}
          <a
            href="#contact"
            className="font-semibold text-sunrise-deep underline-offset-4 transition hover:underline"
          >
            Share your story
          </a>
          .
        </p>
      </div>
    </section>
  );
}
