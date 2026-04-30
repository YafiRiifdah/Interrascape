export function ContactSection({ image }) {
  return (
    <section id="contact" className="page-gutter scroll-mt-24 pb-24 pt-4 lg:scroll-mt-28">
      <div className="reveal grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="max-w-[420px]">
          <p className="text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold leading-[1.12] tracking-[-0.05em] text-[#2b2421]">
            Begin Your Interior Story
          </p>
          <p className="mt-5 text-sm leading-7 text-[#7f6a61] sm:text-base">
            Share your room, lifestyle, and design goals with us. We will help translate them into
            a composed interior direction with clear materials, layouts, and styling priorities.
          </p>
          <div className="mt-8">
            <p className="text-[2.4rem] font-extrabold text-[#2c2420]">
              Free<span className="text-[#b98b69]"> Intro Call</span>
            </p>
            <p className="mt-3 text-sm italic leading-6 text-[#847166]">
              A focused first conversation to understand your space, timeline, and preferred
              atmosphere.
            </p>
            <div className="mt-5 flex items-center gap-3 text-[#9b8578]">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[#b98b69]">
                Trusted by homeowners and boutique spaces
              </span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@interrascape.studio"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#b98b69] px-6 text-sm font-semibold text-white transition hover:bg-[#a77d5e]"
              >
                Schedule Consultation
              </a>
              <a
                href="#products"
                className="inline-flex min-h-12 items-center justify-center px-4 text-sm font-semibold text-[#7d6558] transition hover:text-[#b98b69]"
              >
                See Portfolio
              </a>
            </div>
          </div>
        </div>

        <figure className="overflow-hidden rounded-[22px] bg-[#efe8df] shadow-[0_18px_36px_rgba(35,33,29,0.08)]">
          <img
            src={image}
            alt="Interrascape living room"
            className="h-[320px] w-full object-cover md:h-[520px]"
          />
        </figure>
      </div>
    </section>
  )
}
