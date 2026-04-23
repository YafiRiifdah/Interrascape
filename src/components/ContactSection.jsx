export function ContactSection() {
  return (
    <section id="contact" className="page-gutter scroll-mt-24 pb-20 pt-2 md:pb-24">
      <div className="reveal grid gap-8 border-t border-black/10 py-10 md:grid-cols-[1.1fr_0.9fr] md:items-end md:py-14">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-black/60">Contact</p>
          <h2 className="mt-4 max-w-[11ch] text-[2.8rem] font-extrabold leading-[0.95] tracking-[-0.065em] text-olive sm:text-[4rem] lg:text-[4.8rem]">
            Ruang yang tenang, terhubung, dan hidup.
          </h2>
        </div>

        <div className="space-y-2 text-base leading-7 text-ink md:justify-self-end md:text-right">
          <p>hello@interrascape.studio</p>
          <p>+62 812 0000 0000</p>
          <p>Jakarta, Indonesia</p>
        </div>
      </div>
    </section>
  )
}
