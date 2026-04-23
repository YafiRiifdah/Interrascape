export function HeroSection({ images }) {
  return (
    <section id="home" className="page-gutter pb-20 pt-4 md:pb-24 lg:pb-28 lg:pt-8">
      <div className="grid gap-12 lg:gap-14 xl:grid-cols-12 xl:items-start xl:gap-10 2xl:gap-14">
        <div className="reveal min-w-0 pt-8 sm:pt-10 lg:pt-14 xl:col-span-7 xl:pt-16">
          <h1 className="max-w-[9ch] text-[clamp(3.2rem,6.2vw,6.9rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.078em] text-olive 2xl:text-[7.2rem]">
            INTERRASCAPE
          </h1>
          <p className="mt-5 max-w-[40rem] pl-1 text-[0.8rem] tracking-[0.24em] text-black sm:text-[0.9rem] sm:tracking-[0.3em] lg:mt-6">
            seamless interior, connected landscape
          </p>
        </div>

        <div className="reveal min-w-0 xl:col-span-5 xl:justify-self-end xl:pt-5 2xl:pt-7">
          <p className="max-w-[22rem] text-balance text-[1.32rem] font-medium leading-[1.45] tracking-[-0.04em] text-ink sm:max-w-[26rem] sm:text-[1.55rem] md:max-w-[30rem] lg:max-w-[34rem] lg:text-[1.8rem] xl:max-w-[28rem] xl:text-[1.9rem] 2xl:max-w-[30rem] 2xl:text-[2.05rem]">
            Diantara ruang dan alam, ada rasa yang tak terlihat namun bisa dirasakan. Interrascape
            merancang ruang yang mengalir, tempat di mana cahaya, udara, dan kehidupan saling
            terhubung tanpa batas
          </p>
          <a href="#contact" className="cta-button mt-8 w-full max-w-[340px] self-start lg:mt-10">
            Konsultasi Sekarang
          </a>
        </div>
      </div>

      <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-[0.8fr_1.2fr] md:items-end lg:gap-6 xl:grid-cols-[0.8fr_1.32fr_0.8fr] xl:gap-7">
        <figure className="image-card reveal h-[270px] md:h-[360px] lg:h-[400px] xl:h-[430px]">
          <img src={images.heroLeft} alt="Mountain ridge landscape" />
        </figure>

        <figure className="image-card reveal h-[320px] border-[5px] border-teal md:h-[430px] lg:h-[470px] xl:h-[500px]">
          <img src={images.heroCenter} alt="Expansive green valley landscape" />
        </figure>

        <figure className="image-card reveal h-[270px] md:col-span-2 md:h-[360px] lg:h-[400px] xl:col-span-1 xl:h-[430px]">
          <img src={images.heroRight} alt="Forest valley scenery" />
        </figure>
      </div>

      <div className="mt-10 hidden justify-center gap-5 md:flex lg:mt-12">
        <span className="h-5 w-[min(28vw,220px)] rounded-full bg-teal" />
        <span className="h-5 w-[min(28vw,220px)] rounded-full bg-teal" />
      </div>
    </section>
  )
}
