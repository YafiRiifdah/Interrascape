import { useEffect, useState } from 'react'

const decor = 'absolute border border-dashed border-[#d9c0af] opacity-70'
const headlineText = 'Calm Spaces,\nBoldly Defined'

export function HeroSection({ images }) {
  const [headline, setHeadline] = useState('')

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      setHeadline(headlineText)
      return undefined
    }

    let index = 0
    let timeoutId

    const typeHeadline = (isDeleting = false) => {
      setHeadline(headlineText.slice(0, index))

      if (!isDeleting && index < headlineText.length) {
        index += 1
        timeoutId = window.setTimeout(typeHeadline, 80)
        return
      }

      if (!isDeleting) {
        timeoutId = window.setTimeout(() => typeHeadline(true), 1600)
        return
      }

      if (index > 0) {
        index -= 1
        timeoutId = window.setTimeout(() => typeHeadline(true), 42)
        return
      }

      timeoutId = window.setTimeout(() => {
        index = 0
        timeoutId = window.setTimeout(() => typeHeadline(false), 300)
      }, 200)
    }

    typeHeadline()

    return () => window.clearTimeout(timeoutId)
  }, [])

  const [firstLine = '', secondLine = ''] = headline.split('\n')

  return (
    <section id="home" className="page-gutter relative scroll-mt-24 overflow-hidden pb-16 pt-6 md:pb-20 lg:pb-24">
      <div className={`${decor} -left-14 top-16 h-28 w-28 rounded-[34px] border-r-0 border-t-0`} />
      <div className={`${decor} right-0 top-44 hidden h-32 w-32 rounded-[40px] border-l-0 border-b-0 lg:block`} />

      <div className="reveal grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start lg:gap-16 xl:gap-24">
        <div className="min-w-0 lg:pt-6 xl:pt-8">
          <h1
            aria-label="Calm Spaces, Boldly Defined"
            className="hero-typewriter max-w-[16ch] text-[clamp(2.2rem,4.2vw,4.35rem)] font-extrabold uppercase leading-[0.98] text-[#2d2623]"
          >
            <span aria-hidden="true" className="hero-type-line">
              {firstLine || '\u00A0'}
            </span>
            <span aria-hidden="true" className="hero-type-line">
              {secondLine || '\u00A0'}
            </span>
          </h1>
          <div className="mt-7 max-w-[560px] border-l-2 border-[#b98b69] pl-5">
            <p className="text-base leading-8 text-[#6f5c54] md:text-lg">
              Interrascape designs warm, tactile interiors where material, light, and everyday
              rituals feel connected.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#2d2623] px-7 text-sm font-semibold text-white transition hover:bg-[#b98b69]"
            >
              Book Consultation
            </a>
            <a
              href="#products"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#d9c0af] px-6 text-sm font-semibold text-[#6f5c54] transition hover:border-[#b98b69] hover:text-[#b98b69]"
            >
              Explore Portfolio
            </a>
          </div>
          <div className="mt-10 grid max-w-[520px] grid-cols-3 gap-4 border-t border-[#d9c0af] pt-6">
            <div>
              <p className="text-lg font-extrabold text-[#2d2623]">120+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#8c756b]">Spaces</p>
            </div>
            <div>
              <p className="text-lg font-extrabold text-[#2d2623]">Warm</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#8c756b]">Minimalism</p>
            </div>
            <div>
              <p className="text-lg font-extrabold text-[#2d2623]">ID</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#8c756b]">Indonesia</p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[480px] lg:min-h-[590px]">
          <figure className="absolute inset-x-0 top-0 h-[400px] overflow-hidden rounded-t-[76px] rounded-b-[24px] bg-[#efe8df] shadow-[0_24px_54px_rgba(35,33,29,0.12)] sm:h-[460px] lg:left-20 lg:h-[560px] xl:left-24">
            <img
              src={images.gallery[1]}
              alt="Warm premium living room"
              className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
            />
          </figure>

          <figure className="absolute bottom-0 left-0 h-[160px] w-[46%] overflow-hidden rounded-[18px] border-[8px] border-[#fcf8f2] bg-[#efe8df] shadow-[0_18px_36px_rgba(35,33,29,0.1)] sm:h-[200px] lg:w-[40%]">
            <img
              src={images.gallery[0]}
              alt="Calm white interior"
              className="h-full w-full object-cover"
            />
          </figure>

          <div className="absolute bottom-8 right-0 max-w-[220px] rounded-[18px] bg-[#2d2623] px-5 py-5 text-white shadow-[0_18px_36px_rgba(35,33,29,0.16)] sm:max-w-[250px] lg:right-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d9c0af]">
              Design Note
            </p>
            <p className="mt-3 text-sm leading-6 text-[#f6efe8]">
              Every room starts with atmosphere, then becomes layout, texture, and detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
