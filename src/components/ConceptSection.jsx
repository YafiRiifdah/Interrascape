import { useState } from 'react'

const conceptItems = [
  {
    title: 'Interior Concept',
    body: 'Mood direction, color palettes, materials, furniture, and spatial storytelling.',
    icon: '01',
  },
  {
    title: 'Space Planning',
    body: 'Functional layouts for living rooms, bedrooms, dining areas, and compact homes.',
    icon: '02',
  },
  {
    title: 'Styling Direction',
    body: 'Finishing touches, art, lighting, soft furnishings, and installation guidance.',
    icon: '03',
  },
]

const categories = ['All Projects', 'Bedroom', 'Living Room', 'Dining', 'Home Office', 'More']

export function ConceptSection({ category }) {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const filteredProducts =
    activeCategory === 'All Projects'
      ? category.products
      : category.products.filter((product) => product.category === activeCategory)

  return (
    <section id="services" className="page-gutter scroll-mt-24 pb-20 pt-4 md:pb-24">
      <div className="reveal">
        <h2 className="text-center text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.04em] text-[#2c2420]">
          Services for Refined Living
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {conceptItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[18px] bg-[#fffaf5] px-5 py-5 shadow-[0_12px_24px_rgba(34,46,37,0.04)]"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#f4ece6] text-[#b98b69]">
                <span className="text-sm font-extrabold">{item.icon}</span>
              </div>
              <h3 className="text-base font-bold text-[#302723]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#7f6a61]">{item.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div id="products" className="reveal mt-20 scroll-mt-32 lg:scroll-mt-36">
        <h2 className="text-center text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.04em] text-[#2c2420]">
          Selected Portfolio
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {categories.map((item) => {
            const isActive = item === activeCategory

            return (
            <button
              key={item}
              type="button"
              onClick={() => setActiveCategory(item)}
              aria-pressed={isActive}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
                isActive
                  ? 'bg-[#b98b69] text-white'
                  : 'bg-[#f4ece6] text-[#9b8578] hover:bg-[#eadfd6]'
              }`}
            >
              {item}
            </button>
            )
          })}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <article
              key={product.title}
              className="overflow-hidden rounded-[20px] bg-white shadow-[0_16px_32px_rgba(35,33,29,0.06)]"
            >
              <div className="overflow-hidden bg-[#efe8df]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[240px] w-full object-cover transition duration-500 hover:scale-[1.04]"
                />
              </div>
              <div className="px-4 py-4 text-center">
                <h3 className="text-sm font-semibold text-[#2b2522]">{product.title}</h3>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-[#b98b69]">
                  {product.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
