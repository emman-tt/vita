import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './modules/home/pages/HomePage'
import ProductsPage from './modules/products/pages/ProductsPage'
import ProductPage from './modules/products/pages/ProductPage'
import ContactPage from './modules/contact/pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-clip bg-cream font-body text-ink">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
