import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ChevronRight, Minus, Plus, Star } from 'lucide-react'
import { useRef } from 'react'
import { gsap, initReveals, useGSAP } from '../../../lib/gsap'
import type { Product } from '../data'
import ProductGallery from '../components/ProductGallery'

export default function ProductDetail({ product }: { product: Product }) {
  const ref = useRef<HTMLElement>(null)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  useGSAP(
    () => {
      initReveals(ref.current)

      gsap.set('.detail-title, .detail-price', { autoAlpha: 0, y: 30 })
      gsap.to('.detail-title, .detail-price', {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 0.1,
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="px-5 pb-20 pt-8 lg:pt-12">
      <div className="mx-auto max-w-[1240px]">
}
        <nav
          data-reveal
          className="flex items-center gap-1.5 text-xs text-ink/45"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="transition-colors hover:text-ink">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link to="/products" className="transition-colors hover:text-ink">
            Products
          </Link>
          <ChevronRight size={12} />
          <span className="max-w-[220px] truncate text-ink">{product.name}</span>
        </nav>

        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery product={product} />

}
          <div className="flex flex-col lg:pt-4">
            <h1 className="detail-title font-display text-[clamp(1.7rem,3vw,2.6rem)] leading-[1.15]">
              {product.name}
            </h1>

            <div className="detail-price mt-4 flex items-center gap-4">
              <span className="text-xl font-medium text-tangerine">GH₵ {product.price}</span>
              <span className="flex items-center gap-0.5 text-tangerine" aria-label="Rated 4.8 of 5">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={14} fill={i < 4 ? 'currentColor' : 'none'} strokeWidth={1.5} />
                ))}
                <span className="ml-1.5 text-xs text-ink/45">(48 reviews)</span>
              </span>
            </div>

            <p data-reveal className="mt-6 max-w-xl text-sm leading-relaxed text-ink/65">
              {product.description}
            </p>

}
            <div data-reveal className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center rounded-full border border-ink/15 bg-white">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="grid size-11 cursor-pointer place-items-center rounded-full text-ink/60 transition hover:text-ink"
                >
                  <Minus size={15} />
                </button>
                <span className="w-6 text-center text-sm font-medium">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="grid size-11 cursor-pointer place-items-center rounded-full text-ink/60 transition hover:text-ink"
                >
                  <Plus size={15} />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setAdded(true)}
                className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-ink py-1.5 pl-7 pr-1.5 text-sm text-white transition-transform hover:scale-[1.03]"
              >
                {added ? `Added ${qty} to cart ✓` : 'Add to cart'}
                <span className="grid size-9 place-items-center rounded-full bg-white/15">
                  <ArrowUpRight size={16} />
                </span>
              </button>
            </div>

            <p data-reveal className="mt-6 text-xs leading-relaxed text-ink/45">
              Category: Serum · 100% authentic · Free delivery on orders over GH₵ 300 in Accra ·
              Pay on delivery available
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

