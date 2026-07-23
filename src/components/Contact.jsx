import { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'

// TODO: For real form delivery, swap the mailto handler below for a service like
// Formspree — e.g. POST to https://formspree.io/f/{your-id} — or Vercel Forms.
const CONTACT_EMAIL = 'r_beyan@yahoo.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Lightweight mailto fallback — opens the visitor's email client pre-filled.
    const subject = encodeURIComponent(`Message from ${form.name || 'a friend'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  const fieldClass =
    'w-full rounded-2xl border border-ink/15 bg-cream/60 px-4 py-3 text-ink placeholder:text-ink/40 transition focus:border-forest focus:bg-white focus:outline-none focus:ring-2 focus:ring-forest/30'

  return (
    <section id="contact" className="scroll-mt-20 bg-cream py-24 sm:py-28">
      <div className="container-rb">
        <div className="overflow-hidden rounded-4xl border border-ink/10 bg-white shadow-soft">
          <div className="grid lg:grid-cols-2">
            {/* Left: invitation */}
            <div className="relative flex flex-col justify-between gap-10 bg-forest p-10 text-cream sm:p-12 lg:p-14">
              <div className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-gold/20 blur-2xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">
                  Get In Touch
                </span>
                <h2 className="mt-6 font-serif text-4xl font-bold leading-tight sm:text-5xl">
                  Let&rsquo;s talk.
                </h2>
                <p className="mt-5 max-w-md text-lg leading-8 text-cream/80">
                  Questions, partnership ideas, or a word of encouragement — we
                  would love to hear from you.
                </p>
              </div>

              <ul className="relative space-y-4 text-cream/85">
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Mail className="h-5 w-5" />
                  </span>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-cream/90 transition hover:text-gold-soft"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <MapPin className="h-5 w-5" />
                  </span>
                  {/* TODO: add real location / mailing address */}
                  <span>Serving communities worldwide</span>
                </li>
              </ul>
            </div>

            {/* Right: form */}
            <form onSubmit={handleSubmit} className="p-10 sm:p-12 lg:p-14">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-semibold text-ink/70"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={update}
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-semibold text-ink/70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update}
                    placeholder="you@example.com"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-semibold text-ink/70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update}
                    placeholder="How can we connect?"
                    className={`${fieldClass} resize-none`}
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary mt-7 w-full">
                <Send className="h-4 w-4" />
                Send Message
              </button>
              <p className="mt-3 text-center text-xs text-ink/45">
                This opens your email app. {/* TODO: wire to Formspree for inbox delivery */}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
