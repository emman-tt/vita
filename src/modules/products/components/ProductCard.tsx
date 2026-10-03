import { Link } from 'react-router-dom'
import type { Product } from '../data'
import Shimmer from './Shimmer'

export default function ProductCard({ product }: { product: Product }) {
  const image = product.gallery[0] ?? null

  return (
    <Link
      to={`/products/${product.slug}`}
      data-reveal
      className="group block rounded-[1.5rem] bg-white p-3 shadow-[0_14px_40px_rgba(23,20,15,0.05)] transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="overflow-hidden rounded-[1.1rem] bg-shell">
        {image ? (
          <img
            src={image}
            alt={product.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="aspect-square w-full object-cover"
          />
        ) : (
          <Shimmer className="aspect-square w-full" />
        )}
      </div>
      <div className="flex items-start justify-between gap-2 px-1 pb-1 pt-3">
        <h3 className="text-sm leading-snug font-medium">{product.name}</h3>
        <p className="shrink-0 text-xs text-ink/50">GH₵ {product.price}</p>
      </div>
    </Link>
  )
}
