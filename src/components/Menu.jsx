const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#about' },
  { label: 'Service', href: '#service' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export function Menu() {
  return (
    <header className="page-gutter grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-8 md:py-10 lg:grid-cols-[auto_1fr_auto] lg:gap-8 lg:py-12">
      <a
        href="#home"
        className="min-w-0 text-[0.92rem] font-extrabold uppercase leading-none tracking-[-0.03em] text-black sm:text-[1rem] lg:text-[1.05rem]"
      >
        WARNER &amp; SPENCER
      </a>

      <nav
        className="hidden items-center justify-center gap-8 lg:flex xl:gap-12 2xl:gap-14"
        aria-label="Primary navigation"
      >
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        aria-label="Open menu"
        className="group ml-auto flex h-12 w-12 items-center justify-center rounded-full border border-transparent transition hover:border-black/10 lg:h-14 lg:w-14"
      >
        <span className="flex flex-col gap-1.5">
          <span className="h-[2px] w-8 bg-ink transition group-hover:w-7" />
          <span className="h-[2px] w-8 bg-ink transition group-hover:w-6" />
          <span className="h-[2px] w-8 bg-ink transition group-hover:w-7" />
        </span>
      </button>
    </header>
  )
}
