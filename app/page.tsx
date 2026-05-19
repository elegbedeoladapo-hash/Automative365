import Navbar from '@/components/navigation/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import BentoGrid from '@/components/sections/BentoGrid'
import MembershipTiers from '@/components/sections/MembershipTiers'
import ContactForm from '@/components/sections/ContactForm'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="bg-black overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BentoGrid />
      <MembershipTiers />
      <ContactForm />
      <Footer />
    </main>
  )
}

