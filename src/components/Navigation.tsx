'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { fadeInDown } from '@/lib/motion'
import { Button } from '@/components/ui/button'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        variants={fadeInDown}
        initial='initial'
        animate='animate'
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-20'>
            {/* Logo */}
            <motion.div
              className='flex-shrink-0'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h1 className='text-2xl font-serif font-bold text-primary'>
                Sanskar Hotel
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-8'>
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      variant='ghost'
                      onClick={() => handleNavClick(item.href)}
                      className='text-text hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 relative group'
                    >
                      {item.name}
                      <span className='absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200' />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Book Now CTA */}
            <div className='hidden md:block'>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => handleNavClick('#contact')}
                  className='bg-primary text-background px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors duration-200'
                >
                  Book Now
                </Button>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className='md:hidden'>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  variant='ghost'
                  onClick={() => setIsOpen(!isOpen)}
                  className='text-text hover:text-primary p-2'
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='md:hidden bg-background/95 backdrop-blur-md border-t border-primary/20'
            >
              <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      variant='ghost'
                      onClick={() => handleNavClick(item.href)}
                      className='text-text hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200'
                    >
                      {item.name}
                    </Button>
                  </motion.div>
                ))}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => handleNavClick('#contact')}
                    className='bg-primary text-background block px-3 py-2 rounded-full font-medium hover:bg-primary-dark transition-colors duration-200 w-full text-center mt-4'
                  >
                    Book Now
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}

export default Navigation
