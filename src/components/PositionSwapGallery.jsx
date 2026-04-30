import { useEffect, useMemo, useState } from 'react'

function getResponsiveSlots(type, isCompact) {
  if (type === 'hero') {
    if (isCompact) {
      return [
        {
          className:
            'left-0 right-0 top-3 h-[230px] scale-[0.94] sm:h-[260px] rounded-[26px] border-0 z-10',
        },
        {
          className:
            'left-0 right-0 top-[244px] h-[290px] rotate-0 scale-100 sm:top-[272px] sm:h-[340px] rounded-[26px] border-[5px] border-teal z-20',
        },
        {
          className:
            'left-0 right-0 top-[566px] scale-[0.94] h-[230px] sm:top-[646px] sm:h-[260px] rounded-[26px] border-0 z-10',
        },
      ]
    }

    return [
      {
        className:
          'left-0 top-[86px] h-[350px] w-[22%] scale-[0.9] rounded-[26px] border-0 z-10 xl:top-[92px] xl:h-[420px]',
      },
      {
        className:
          'left-[27%] top-[-8px] h-[438px] w-[46%] rotate-0 scale-100 rounded-[26px] border-[5px] border-teal z-20 xl:top-[-10px] xl:h-[512px]',
      },
      {
        className:
          'right-0 top-[86px] h-[350px] w-[22%] scale-[0.9] rounded-[26px] border-0 z-10 xl:top-[92px] xl:h-[420px]',
      },
    ]
  }

  if (type === 'concept') {
    if (isCompact) {
      return [
        {
          className:
            'left-0 right-0 top-0 h-[280px] rounded-[26px] border-0 z-10',
        },
        {
          className:
            'left-0 right-0 top-[300px] h-[220px] rounded-[28px] border-0 z-10',
        },
      ]
    }

    return [
      {
        className:
          'left-0 top-0 h-[360px] w-[66%] rounded-[26px] border-0 z-10 xl:h-[390px]',
      },
      {
        className:
          'right-0 top-0 h-[360px] w-[30%] rounded-[26px] border-0 z-10 xl:h-[390px]',
      },
    ]
  }

  if (isCompact) {
    return [
      {
        className:
          'left-0 right-0 top-2 h-[280px] rotate-[-2deg] scale-[0.95] rounded-[26px] border-0 z-10',
      },
      {
        className:
          'left-0 right-0 top-[304px] h-[220px] rotate-[2deg] scale-[0.95] rounded-[28px] border-0 z-10',
      },
    ]
  }

  return [
    {
      className:
        'left-0 top-2 h-[360px] w-[66%] -rotate-[3deg] scale-[0.95] rounded-[26px] border-0 z-10 xl:h-[390px]',
    },
    {
      className:
        'right-0 top-2 h-[360px] w-[30%] rotate-[3deg] scale-[0.95] rounded-[26px] border-0 z-10 xl:h-[390px]',
    },
  ]
}

export function PositionSwapGallery({
  images,
  type = 'hero',
  interval = 4200,
  alts = [],
  order: controlledOrder,
  onOrderChange,
}) {
  const [internalOrder, setInternalOrder] = useState(images.map((_, index) => index))
  const [isCompact, setIsCompact] = useState(() =>
    typeof window === 'undefined' ? false : window.innerWidth < 1280,
  )
  const order = controlledOrder ?? internalOrder
  const setOrder = onOrderChange ?? setInternalOrder

  useEffect(() => {
    const onResize = () => {
      setIsCompact(window.innerWidth < 1280)
    }

    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (isCompact || images.length <= 1 || type === 'concept') {
      return undefined
    }

    const timer = window.setInterval(() => {
      setOrder((current) => [...current.slice(1), current[0]])
    }, interval)

    return () => window.clearInterval(timer)
  }, [images.length, interval, isCompact, setOrder, type])

  const slots = useMemo(() => getResponsiveSlots(type, isCompact), [type, isCompact])
  const imageIndices = useMemo(() => images.map((_, index) => index), [images])

  return (
    <div
      className={`relative w-full ${
        type === 'hero'
          ? 'h-[810px] sm:h-[920px] lg:h-[500px]'
          : 'h-[520px] md:h-[360px] xl:h-[390px]'
      }`}
      style={type === 'hero' ? { perspective: '1200px' } : undefined}
    >
      {imageIndices.map((imageIndex) => {
        const slotIndex = order.indexOf(imageIndex)
        const slot = slots[slotIndex]
        const isFocused = type === 'hero' ? slotIndex === 1 : false

        return (
          <figure
            key={imageIndex}
            className={`absolute overflow-hidden bg-mist transition-all ${
              type === 'hero'
                ? 'duration-[820ms] ease-[cubic-bezier(0.22,0.86,0.24,1)]'
                : 'duration-[900ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]'
            } transform-gpu ${slot.className} ${
              isFocused
                ? 'shadow-[0_14px_26px_rgba(34,46,37,0.12)]'
                : type === 'hero'
                  ? 'shadow-[0_8px_18px_rgba(34,46,37,0.06)]'
                  : 'shadow-[0_12px_24px_rgba(34,46,37,0.1)]'
            }`}
          >
            <img
              src={images[imageIndex]}
              alt={alts[imageIndex] ?? 'Gallery image'}
              className={`h-full w-full object-cover transition ${
                type === 'hero'
                  ? 'duration-[820ms] ease-[cubic-bezier(0.22,0.86,0.24,1)]'
                  : 'duration-[900ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]'
              } hover:scale-[1.015] ${
                isFocused ? 'scale-[1.005]' : 'scale-100'
              }`}
            />
          </figure>
        )
      })}
    </div>
  )
}
