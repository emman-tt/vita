import { useRef } from 'react'
import { initReveals, useGSAP } from '../../../lib/gsap'
import type { Product } from '../data'
import ProductCard from '../components/ProductCard'

export default function RelatedProducts({
  products,
}: {
  products: Product[]
}) {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      initReveals(ref.current)
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="px-5 pb-24">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="font-display text-[clamp(1.6rem,2.8vw,2.4rem)]">
          You may also <span className="text-clay">like</span>
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
