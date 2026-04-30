const features = [
  {
    title: 'Tailored Planning',
    body: 'Layouts, material direction, and room flow shaped around your daily rhythm.',
    icon: '01',
  },
  {
    title: 'Curated Materials',
    body: 'A refined palette of textures, finishes, lighting, and furniture recommendations.',
    icon: '02',
  },
  {
    title: 'Project Guidance',
    body: 'Clear design direction from first concept through styling and installation.',
    icon: '03',
  },
]

const stats = [
  { value: '120+', label: 'Spaces styled' },
  { value: '38+', label: 'Private clients' },
  { value: '12+', label: 'Design partners' },
]

export function AboutSection({ images }) {
  return (
    <section id="showcase" className="page-gutter scroll-mt-24 pb-20 pt-6 md:pb-24">
      <div className="reveal grid gap-4 border-t border-[#d9c0af] pt-10 md:grid-cols-3 md:gap-8">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-[18px] bg-[#fffaf5] px-5 py-5 shadow-[0_12px_24px_rgba(34,46,37,0.04)]"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#f4ece6] text-[#b98b69]">
              <span className="text-sm font-extrabold">{feature.icon}</span>
            </div>
            <h3 className="text-base font-bold text-[#302723]">{feature.title}</h3>
            <p className="mt-1 text-sm leading-6 text-[#7f6a61]">{feature.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center xl:gap-16">
        <div className="reveal grid gap-4 sm:grid-cols-[0.72fr_0.72fr_1fr]">
          <figure className="hidden overflow-hidden rounded-[18px] bg-[#efe8df] sm:block sm:h-[180px] sm:self-end">
            <img src={images.images[0]} alt="Interior vignette" className="h-full w-full object-cover" />
          </figure>
          <div className="grid gap-4">
            <figure className="h-[220px] overflow-hidden rounded-[18px] bg-[#efe8df] sm:h-[200px]">
              <img src={images.images[1]} alt="Soft bedroom interior" className="h-full w-full object-cover" />
            </figure>
            <figure className="h-[220px] overflow-hidden rounded-[18px] bg-[#efe8df] sm:h-[200px]">
              <img src={images.images[2]} alt="Styled interior corner" className="h-full w-full object-cover" />
            </figure>
          </div>
          <figure className="h-[260px] overflow-hidden rounded-[18px] bg-[#efe8df] sm:h-[420px]">
            <img src={images.images[3]} alt="Minimal arch interior" className="h-full w-full object-cover" />
          </figure>
        </div>

        <div className="reveal max-w-[520px]">
          <h2 className="max-w-[13ch] text-[clamp(2.2rem,4.4vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#2e2522]">
            We Design Calm, Elegant Living Spaces
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#78655d] sm:text-base">
            Our work is rooted in warm minimalism, tactile finishes, and spatial clarity.
            Interrascape combines interior styling, material direction, and thoughtful planning to
            make each room feel composed, personal, and quietly luxurious.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-[1.7rem] font-extrabold text-[#b98b69]">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#8c756b]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
