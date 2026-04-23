export function AboutSection({ image }) {
  return (
    <section id="about" className="page-gutter pb-20 pt-6 md:pb-24 lg:pb-28 lg:pt-8">
      <div className="grid gap-10 lg:grid-cols-[minmax(280px,0.88fr)_minmax(0,1.12fr)] lg:items-start xl:gap-16 2xl:gap-24">
        <figure className="image-card reveal order-2 h-[420px] md:h-[600px] lg:order-1 lg:h-[720px] xl:h-[780px] 2xl:h-[820px]">
          <img src={image} alt="Hiker walking across a natural ridge" />
        </figure>

        <div className="order-1 flex min-h-full flex-col reveal lg:order-2">
          <div className="max-w-[820px] min-w-0">
            <h2 className="text-[clamp(3.4rem,6vw,6.8rem)] font-extrabold leading-[0.94] tracking-[-0.075em] text-olive">
              About Us
            </h2>
            <div className="mt-10 max-w-[44rem] space-y-8 text-[0.98rem] leading-[1.72] text-ink sm:text-[1rem] lg:mt-12 lg:text-[1.08rem]">
              <p>
                Interrascape lahir dari sebuah kesadaran bahwa desain tidak lagi berdiri sendiri,
                melainkan saling terhubung dalam membentuk kualitas sebuah ruang hidup. Kami melihat
                bahwa saat ini, interior dan lanskap bukan lagi elemen pelengkap, tetapi telah
                menjadi bagian penting yang menentukan kenyamanan, identitas, dan pengalaman dalam
                sebuah bangunan.
              </p>
              <p>
                Namun, keduanya sering kali dirancang secara terpisah, sehingga kehilangan potensi
                untuk saling terintegrasi. Berangkat dari hal tersebut, kami terpanggil untuk
                menghadirkan pendekatan yang berbeda, sebuah konsep desain yang menyatukan interior
                dan lanskap secara harmonis.
              </p>
              <p>
                Interrascape hadir untuk menciptakan ruang yang tidak hanya indah secara visual,
                tetapi juga terasa hidup, mengalir, dan terhubung dengan alam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
