'use client'

// Import components
import ErrorBoundary from '@/components/ErrorBoundary'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import AwardsSection from '@/components/AwardsSection'
import SpecialOffersSection from '@/components/SpecialOffersSection'
import VirtualTourSection from '@/components/VirtualTourSection'
import RoomsSection from '@/components/RoomsSection'
import AmenitiesSection from '@/components/AmenitiesSection'
import GallerySection from '@/components/GallerySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import FloatingCTA from '@/components/FloatingCTA'
import BenefitsStrip from '@/components/BenefitsStrip'
import TrustBadges from '@/components/TrustBadges'
import BookingWidget from '@/components/BookingWidget'
import PackagesSection from '@/components/PackagesSection'
import FAQSection from '@/components/FAQSection'
import StickyBookingBar from '@/components/StickyBookingBar'
import LocalAttractions from '@/components/LocalAttractions'
import NewsletterSignup from '@/components/NewsletterSignup'

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <ErrorBoundary>
      <div className='min-h-screen bg-background'>
        <Header scrollToSection={scrollToSection} />
        <main>
          <HeroSection scrollToSection={scrollToSection} />
          <BenefitsStrip />
          <AboutSection />
          <TrustBadges />
          <AwardsSection />
          <VirtualTourSection />
          {/* <BookingWidget /> */}
          <RoomsSection />
          <PackagesSection />
          <AmenitiesSection />
          <GallerySection />
          <TestimonialsSection />
          <LocalAttractions />
          <SpecialOffersSection />
          <FAQSection />
          <ContactSection />
          <NewsletterSignup />
        </main>
        <Footer scrollToSection={scrollToSection} />
        {/* <CookieConsent /> */}
        {/* <StickyBookingBar /> */}
        <FloatingCTA />
      </div>
    </ErrorBoundary>
  )
}
