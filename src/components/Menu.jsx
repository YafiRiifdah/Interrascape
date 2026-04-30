import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Service', href: '#services' },
  { label: 'Portfolio', href: '#products' },
  { label: 'About Us', href: '#showcase' },
  { label: 'Contact Us', href: '#contact' },
]

const mobileNavItems = [
  { label: 'Home', href: '#home' },
  { label: 'Service', href: '#services' },
  { label: 'Portfolio', href: '#products' },
  { label: 'About Us', href: '#showcase' },
  { label: 'Contact Us', href: '#contact' },
]

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled
          ? 'border-b border-[#c9ad96]/30 bg-[#fcf8f2] shadow-[0_8px_24px_rgba(27,31,26,0.05)]'
          : 'border-b border-transparent bg-[#fcf8f2]'
      }`}
    >
      <div className="page-gutter relative py-5 md:py-6 lg:py-7">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 lg:grid-cols-[auto_1fr_auto] lg:gap-10">
          <a
            href="#home"
            className="min-w-0 font-serif text-[1.45rem] uppercase leading-[0.82] tracking-[-0.05em] text-[#352620] sm:text-[1.7rem] lg:text-[1.9rem]"
          >
            Interra
            <span className="ml-1 block text-[#b98b69]">scape</span>
          </a>

          <nav
            className="hidden items-center justify-center gap-7 lg:flex xl:gap-10"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link text-[0.78rem] tracking-[0.04em] text-[#665149]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3">
            <a
              href="#contact"
              className="hidden min-h-10 items-center justify-center rounded-xl bg-[#b98b69] px-5 text-xs font-semibold text-white transition hover:bg-[#a67b5c] lg:inline-flex"
            >
              Consult
            </a>

            <button
              type="button"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsOpen((value) => !value)}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#d9cabf] bg-white/80 transition hover:border-[#b98b69] lg:hidden"
            >
              <span className="relative flex h-5 w-6 flex-col items-end justify-center gap-1.5">
                <span
                  className={`h-[2px] bg-[#352620] transition-all duration-300 ${isOpen ? 'w-6 translate-y-[7px] rotate-45' : 'w-6'}`}
                />
                <span
                  className={`h-[2px] bg-[#352620] transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-6'}`}
                />
                <span
                  className={`h-[2px] bg-[#352620] transition-all duration-300 ${isOpen ? 'w-6 -translate-y-[7px] -rotate-45' : 'w-6'}`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={`absolute left-5 right-5 top-full z-30 overflow-hidden transition-all duration-300 sm:left-7 sm:right-7 md:left-10 md:right-10 lg:hidden ${
            isOpen ? 'pointer-events-auto max-h-80 pt-4 opacity-100' : 'pointer-events-none max-h-0 pt-0 opacity-0'
          }`}
        >
          <nav
            className="rounded-[24px] border border-[#e0d4ca] bg-[#fffaf5] px-6 py-5 shadow-[0_18px_40px_rgba(34,46,37,0.08)]"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-4">
              {mobileNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="nav-link text-base text-[#55423b]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
