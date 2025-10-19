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
import HowToReachSection from '@/components/HowToReachSection'

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const sections = [
    <HeroSection key='hero' scrollToSection={scrollToSection} />,
    <BenefitsStrip key='benefits' />,
    <AboutSection key='about' />,
    <TrustBadges key='trust' />,
    // <AwardsSection key='awards' />,
    <VirtualTourSection key='virtual' />,
    // <BookingWidget key='booking' />,
    <RoomsSection key='rooms' />,
    // <PackagesSection key='packages' />,
    <AmenitiesSection key='amenities' />,
    <GallerySection key='gallery' />,
    <TestimonialsSection key='testimonials' />,
    <LocalAttractions key='local' />,
    <HowToReachSection key='reach' />,
    // <SpecialOffersSection key='offers' />,
    <FAQSection key='faq' />,
    <ContactSection key='contact' />,
    // <NewsletterSignup key='newsletter' />,
  ]

  return (
    <ErrorBoundary>
      <div className='min-h-screen bg-background'>
        <Header scrollToSection={scrollToSection} />
        <main>
          {sections.map((el, idx) => (
            <div key={idx} className={`${idx % 2 === 0 ? 'bg-background' : 'bg-accent/30'} border-t border-border/40`}>
              {el}
            </div>
          ))}
        </main>
        {/* Accent band above footer */}
        <div className='bg-accent/30 border-t border-border/40'>
          <div className='max-w-6xl mx-auto h-4 sm:h-6' />
        </div>
        <Footer scrollToSection={scrollToSection} />
        {/* <CookieConsent /> */}
        {/* <StickyBookingBar /> */}
        <FloatingCTA />
      </div>
    </ErrorBoundary>
  )
}
