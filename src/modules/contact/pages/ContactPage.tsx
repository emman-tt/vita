import Navbar from '../../../components/layout/Navbar'
import Footer from '../../../components/layout/Footer'
import ContactHeader from '../sections/ContactHeader'
import ContactInfo from '../sections/ContactInfo'
import ContactForm from '../sections/ContactForm'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHeader />
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
