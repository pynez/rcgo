import { useEffect, useRef, useState } from 'react'
import { Play, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'

// What's New — a manually-advanced video carousel.
// Videos never autoplay: each slide shows a poster with a branded play button,
// and native controls appear only once the viewer chooses to play.
//
// TODO: Replace the placeholder title/caption for each clip with real copy.
const VIDEOS = [
  {
    src: '/videos/whats-new-1.mp4',
    poster: '/videos/whats-new-1.jpg',
    title: 'Moments of Hope',
    caption: 'A glimpse of the families and communities RB Foundation walks alongside.',
  },
  {
    src: '/videos/whats-new-2.mp4',
    poster: '/videos/whats-new-2.jpg',
    title: 'On the Ground',
    caption: 'Rebecca Christian Global Outreach in action, carrying help where it’s needed.',
  },
  {
    src: '/videos/whats-new-3.mp4',
    poster: '/videos/whats-new-3.jpg',
    title: 'From the Field',
    caption: 'Faces and stories from our most recent outreach efforts.',
  },
  {
    src: '/videos/whats-new-4.mp4',
    poster: '/videos/whats-new-4.jpg',
    title: 'Together in Service',
    caption: 'Compassion put into practice, one community at a time.',
  },
]

export default function WhatsNew() {
  const [active, setActive] = useState(0)
  const videoRefs = useRef([])
  const count = VIDEOS.length

  const go = (next) => setActive(((next % count) + count) % count)

  // Whenever the active slide changes, pause every off-screen video so audio
  // never keeps playing behind the scenes.
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (v && i !== active) {
        v.pause()
        v.currentTime = 0
      }
    })
  }, [active])

  return (
    <section
      id="whats-new"
      className="relative scroll-mt-20 overflow-hidden bg-sand/60 bg-grain py-24 sm:py-28"
    >
      <div className="container-rb">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="kicker">
            <Sparkles className="h-3.5 w-3.5" />
            What&rsquo;s New
          </span>
          <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Straight from the heart of our work.
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink/70">
            Watch the latest moments from RB Foundation — updates, outreach, and
            glimpses of hope in the communities we serve.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Soft tinted frame echoing the site's card treatment */}
          <div className="absolute -inset-4 -rotate-1 rounded-[2.5rem] bg-gradient-to-br from-gold/20 via-sunrise/10 to-forest/15" />

          <div className="relative overflow-hidden rounded-4xl border border-ink/10 bg-white shadow-soft">
            {/* Sliding track */}
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {VIDEOS.map((v, i) => (
                <div key={v.src} className="relative aspect-video w-full shrink-0 bg-ink">
                  <video
                    ref={(el) => (videoRefs.current[i] = el)}
                    src={v.src}
                    poster={v.poster}
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full bg-ink object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Caption bar */}
            <div className="flex items-center justify-between gap-4 border-t border-ink/10 bg-white px-6 py-5 sm:px-8">
              <div className="min-w-0">
                <p className="truncate font-serif text-lg font-bold text-ink">
                  {VIDEOS[active].title}
                </p>
                <p className="mt-0.5 truncate text-sm text-ink/60">
                  {VIDEOS[active].caption}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-sunrise/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sunrise-deep">
                {String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
              </span>
            </div>

            {/* Prev / Next arrows */}
            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label="Previous video"
              className="group absolute left-3 top-[calc(50%-2.75rem)] -translate-y-1/2 rounded-full border border-white/70 bg-white/80 p-2.5 text-ink shadow-lift backdrop-blur transition hover:-translate-y-[calc(50%+2px)] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sunrise focus-visible:ring-offset-2 sm:left-4"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label="Next video"
              className="group absolute right-3 top-[calc(50%-2.75rem)] -translate-y-1/2 rounded-full border border-white/70 bg-white/80 p-2.5 text-ink shadow-lift backdrop-blur transition hover:-translate-y-[calc(50%+2px)] hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sunrise focus-visible:ring-offset-2 sm:right-4"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Thumbnail selector */}
          <div className="mt-6 grid grid-cols-4 gap-3 sm:gap-4">
            {VIDEOS.map((v, i) => (
              <button
                key={v.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Play ${v.title}`}
                aria-current={i === active}
                className={`group relative aspect-video overflow-hidden rounded-2xl border-2 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sunrise focus-visible:ring-offset-2 ${
                  i === active
                    ? 'border-sunrise shadow-lift'
                    : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={v.poster}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/25 transition group-hover:bg-ink/10">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sunrise-deep shadow-lift">
                    <Play className="h-3.5 w-3.5 translate-x-[1px] fill-current" />
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
