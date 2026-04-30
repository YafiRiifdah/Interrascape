import { Menu } from './components/Menu'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ConceptSection } from './components/ConceptSection'
import { ContactSection } from './components/ContactSection'

const landingData = {
  hero: {
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  showcase: {
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1505409628601-edc9af17fda6?auto=format&fit=crop&w=900&q=80',
    ],
  },
  category: {
    products: [
      {
        title: 'Serene Living Suite',
        category: 'Living Room',
        price: 'Residential',
        image:
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Warm Dining Composition',
        category: 'Dining',
        price: 'Hospitality',
        image:
          'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Layered Bedroom Retreat',
        category: 'Bedroom',
        price: 'Apartment',
        image:
          'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Focused Home Office',
        category: 'Home Office',
        price: 'Private Home',
        image:
          'https://images.unsplash.com/photo-1593476550610-87baa860004a?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Minimal Lounge Concept',
        category: 'Living Room',
        price: 'Apartment',
        image:
          'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80',
      },
      {
        title: 'Boutique Styling Detail',
        category: 'More',
        price: 'Commercial',
        image:
          'https://images.unsplash.com/photo-1505409628601-edc9af17fda6?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },
  contact: {
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
}

function App() {
  return (
    <div className="page-shell">
      <div className="w-full">
        <Menu />
        <main className="pt-[96px] md:pt-[108px] lg:pt-[116px]">
          <HeroSection images={landingData.hero} />
          <AboutSection images={landingData.showcase} />
          <ConceptSection category={landingData.category} />
          <ContactSection image={landingData.contact.image} />
        </main>
      </div>
    </div>
  )
}

export default App
