import { Link, useParams } from 'react-router-dom'
import Navbar from '../../../components/layout/Navbar'
import Footer from '../../../components/layout/Footer'
import { findProduct, relatedProducts } from '../data'
import ProductDetail from '../sections/ProductDetail'
import RelatedProducts from '../sections/RelatedProducts'

export default function ProductPage() {
  const { slug } = useParams()
  const product = findProduct(slug)

  return (
    <>
      <Navbar />
      <main>
        {product ? (
          <>
            <ProductDetail product={product} />
            <RelatedProducts products={relatedProducts(product.slug)} />
          </>
        ) : (
          <div className="px-5 py-32 text-center">
            <h1 className="font-display text-4xl">Product not found</h1>
            <p className="mt-4 text-sm text-ink/55">
              The product you're looking for doesn't exist or was removed.
            </p>
            <Link
              to="/products"
              className="mt-8 inline-flex rounded-full bg-ink px-7 py-3 text-sm text-white"
            >
              Back to all products
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
