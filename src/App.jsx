import { useEffect } from 'react'
import { Menu } from './components/Menu'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ConceptSection } from './components/ConceptSection'
import { ContactSection } from './components/ContactSection'

const imageSet = {
  heroLeft:
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
  heroCenter:
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
  heroRight:
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80',
  about:
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
  conceptWide:
    'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1500&q=80',
  conceptSide:
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1100&q=80',
}

function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="page-shell">
      <div className="w-full">
        <Menu />
        <main>
          <HeroSection images={imageSet} />
          <AboutSection image={imageSet.about} />
          <ConceptSection images={imageSet} />
          <ContactSection />
        </main>
      </div>
    </div>
  )
}

export default App
