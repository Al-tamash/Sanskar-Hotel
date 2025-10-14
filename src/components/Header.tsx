'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { slideInFromTop } from '@/lib/animations'
import type { ScrollToSectionProps } from '@/types'
import Image from 'next/image'

export default function Header({ scrollToSection }: ScrollToSectionProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navbarBackground = isScrolled
    ? 'rgba(255, 255, 255, 0.95)'
    : 'rgba(255, 255, 255, 0.8)'

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'awards', label: 'Awards' },
    { id: 'offers', label: 'Offers' },
    { id: 'virtual-tour', label: 'Virtual Tour' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={slideInFromTop.initial}
      animate={slideInFromTop.animate}
      transition={slideInFromTop.transition}
      style={{ backgroundColor: navbarBackground }}
      className='fixed top-0 w-full z-50 backdrop-blur-sm border-b border-primary/20'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center space-x-'>
            <Image
              src={'/mainlogo.png'}
              alt='Sanskar Hotel Logo'
              width={50}
              height={50}
            />
            <h1 className='text-2xl font-serif font-bold text-primary'>
              Sanskar Hotel
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-8'>
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className='text-text hover:text-primary transition-colors'
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-text hover:text-primary'
              aria-label='Toggle menu'
            >
              <span className='text-text hover:text-primary text-2xl'>
                {isMenuOpen ? '✕' : '☰'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden py-4 space-y-2 w-full'>
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id)
                  setIsMenuOpen(false)
                }}
                className='block w-full text-left py-2 text-text hover:text-primary transition-colors'
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  )
}
