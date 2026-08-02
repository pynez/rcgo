import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatsNew from './components/WhatsNew'
import About from './components/About'
import Impact from './components/Impact'
import Stories from './components/Stories'
import Shop from './components/Shop'
import Donate from './components/Donate'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Single shared source of truth for the in-page anchor navigation.
export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Stories', href: '#stories' },
  { label: 'Donate', href: '#donate' },
  { label: 'Shop', href: '#shop' },
  { label: 'Contact', href: '#contact' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />
      <main>
        <Hero />
        <WhatsNew />
        <About />
        <Impact />
        <Stories />
        <Shop />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
