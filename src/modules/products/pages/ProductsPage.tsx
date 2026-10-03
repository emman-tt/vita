import Navbar from '../../../components/layout/Navbar'
import Footer from '../../../components/layout/Footer'
import ProductsHeader from '../sections/ProductsHeader'
import ProductsGrid from '../sections/ProductsGrid'

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductsHeader />
        <ProductsGrid />
      </main>
      <Footer />
    </>
  )
}
