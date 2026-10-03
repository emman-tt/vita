import { useRef } from 'react'
import { initReveals, useGSAP } from '../../../lib/gsap'
import { PRODUCTS } from '../data'
import ProductCard from '../components/ProductCard'

export default function ProductsGrid() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      initReveals(ref.current)
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="px-5 pb-24">
      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  )
}
