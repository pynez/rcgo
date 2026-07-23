# RB Foundation Website

A single-page marketing site for **RB Foundation**, a Christian nonprofit founded by
Rebecca Pyne (Rebecca Christian Global Outreach). Built with **Vite + React +
Tailwind CSS** and designed to deploy as a static site on **Vercel**.

## Tech stack

- [Vite](https://vitejs.dev/) — build tooling / dev server
- [React 18](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/) — utility styling + brand theme
- [lucide-react](https://lucide.dev/) — icons
- Fonts: **Playfair Display** (headings) + **Inter** (body) via Google Fonts

## Brand palette

| Token     | Hex       | Use                         |
| --------- | --------- | --------------------------- |
| `gold`    | `#C9A84C` | Warm accents, kickers       |
| `forest`  | `#4A7C59` | Grounding green, callouts   |
| `sunrise` | `#E8843A` | Primary CTAs, highlights    |
| `ink`     | `#21323D` | Body text, dark sections    |
| `cream`   | `#FBF6EB` | Page canvas                 |

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
public/img/            Optimized photography + logo
src/
  App.jsx              Wires all sections; exports shared NAV_LINKS
  index.css            Tailwind layers, brand utilities, animations
  components/
    Navbar.jsx         Sticky nav, mobile hamburger drawer
    Hero.jsx           Two-column hero with CTAs
    About.jsx          Founder story + mission callout
    Impact.jsx         Three focus-area cards (lucide icons)
    Shop.jsx           Product grid (4 placeholders)
    Donate.jsx         Emotional appeal + donate CTA
    Contact.jsx        Contact form (mailto fallback)
    Footer.jsx         Logo, tagline, repeated nav, copyright
    Sunburst.jsx       Decorative logo-inspired rays
```

## TODOs before launch

Search the codebase for `TODO` — key items:

- **Copy:** replace placeholder About / mission / appeal text with finalized wording.
- **Donate:** set the real donation URL in `Donate.jsx` (Stripe / Givebutter / PayPal).
- **Shop:** point each product `Buy Now` link to a Stripe Payment Link or Gumroad URL.
- **Contact:** wire the form to [Formspree](https://formspree.io/) and set the real
  contact email (currently a `mailto:` fallback in `Contact.jsx`).
- **Products:** replace the shared placeholder photo with real product imagery.

## Deploying to Vercel

Push to a Git repo and import it in Vercel. The framework preset (Vite) and
`vercel.json` are already configured — no extra setup needed. Output is a fully
static `dist/` bundle.
