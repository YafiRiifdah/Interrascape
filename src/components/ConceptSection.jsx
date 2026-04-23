const conceptItems = [
  {
    title: 'Seamless Interior',
    body: 'Ruang yang mengalir tanpa sekat yang terasa kaku. Setiap sudut terhubung dengan lembut, menghadirkan ketenangan, cahaya alami, dan kenyamanan yang utuh.',
  },
  {
    title: 'Connected Landscape',
    body: 'Tanaman tidak lagi berada di luar, melainkan hadir dan menjadi bagian dari keseharian. Hijau yang menyapa dari dalam, udara yang bergerak bebas, dan menciptakan suasana menyenangkan.',
  },
]

export function ConceptSection({ images }) {
  return (
    <section id="service" className="page-gutter pb-24 pt-8 md:pb-28 lg:pb-32 lg:pt-10">
      <div className="grid gap-10 xl:grid-cols-[minmax(300px,0.86fr)_minmax(0,1.14fr)] xl:gap-14 2xl:gap-20">
        <div className="reveal min-w-0">
          <div className="max-w-[540px]">
            <h2 className="text-[clamp(3.2rem,5.8vw,6.4rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.075em] text-olive">
              KONSEP
            </h2>
            <p className="mt-4 text-sm tracking-[0.18em] text-black sm:text-base">
              seamless interior, connected landscape
            </p>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:gap-10 xl:gap-12">
          {conceptItems.map((item) => (
            <article key={item.title} className="reveal min-w-0">
              <div className="inline-flex min-h-16 w-full max-w-[320px] items-center justify-center rounded-2xl bg-teal px-6 text-center text-[0.98rem] font-medium uppercase tracking-[0.03em] text-white sm:text-[1.02rem]">
                {item.title}
              </div>
              <p className="mt-10 max-w-[32ch] text-[1.02rem] leading-[1.65] text-ink lg:text-[1.05rem]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="reveal mt-14 md:mt-16">
        <a href="#portfolio" className="cta-button w-full max-w-[320px]">
          Lihat Portfolio
        </a>
      </div>

      <div
        id="portfolio"
        className="mt-10 grid scroll-mt-24 gap-5 md:grid-cols-[1fr_0.75fr] md:items-stretch lg:mt-12 xl:grid-cols-[1.2fr_0.46fr_0.54fr] xl:gap-6"
      >
        <figure className="image-card reveal h-[290px] md:row-span-2 md:h-full lg:h-[360px] xl:row-span-1 xl:h-[390px]">
          <img src={images.conceptWide} alt="People walking through a lush natural path" />
        </figure>

        <div className="section-marker reveal h-[220px] md:h-auto lg:h-[360px] xl:h-[390px]">03.</div>

        <figure className="image-card reveal h-[290px] md:h-[260px] lg:h-[360px] xl:h-[390px]">
          <img src={images.conceptSide} alt="Travelers moving through a misty landscape" />
        </figure>
      </div>
    </section>
  )
}
