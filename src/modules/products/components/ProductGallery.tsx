import { useRef, useState } from 'react'
import { gsap, useGSAP } from '../../../lib/gsap'
import type { Product } from '../data'

export default function ProductGallery({ product }: { product: Product }) {
  const [active, setActive] = useState(0)
  const mainRef = useRef<HTMLImageElement>(null)

  useGSAP(() => {
    gsap.from('.gallery-main', { autoAlpha: 0, scale: 0.96, duration: 0.8, ease: 'power2.out' })
  })

  const swap = (i: number) => {
    if (i === active) return
    setActive(i)
    gsap.fromTo(
      mainRef.current,
      { autoAlpha: 0.3, scale: 1.02 },
      { autoAlpha: 1, scale: 1, duration: 0.45, ease: 'power2.out' },
    )
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-[0_14px_40px_rgba(23,20,15,0.05)]">
        <img
          ref={mainRef}
          src={product.gallery[active]}
          alt={product.name}
          className="gallery-main aspect-square w-full rounded-[1.4rem] object-cover"
        />
      </div>
      {product.gallery.length > 1 && (
        <div className="flex justify-center gap-2.5">
          {product.gallery.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => swap(i)}
              aria-label={`View image ${i + 1}`}
              className={`size-16 cursor-pointer overflow-hidden rounded-xl border-2 transition sm:size-20 ${
                i === active ? 'border-tangerine' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={src} alt="" loading="lazy" referrerPolicy="no-referrer" className="size-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

