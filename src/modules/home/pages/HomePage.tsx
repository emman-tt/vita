import Navbar from '../../../components/layout/Navbar'
import Footer from '../../../components/layout/Footer'
import Hero from '../sections/Hero'
import Organic from '../sections/Organic'
import Solutions from '../sections/Solutions'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Organic />
        <Solutions />
      </main>
      <Footer />
    </>
  )
}
