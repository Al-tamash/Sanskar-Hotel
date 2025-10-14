'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className='fixed bottom-0 left-0 right-0 bg-secondary text-white p-4 z-50 border-t border-primary/20'
    >
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between'>
        <div className='mb-4 md:mb-0'>
          <p className='text-sm'>
            We use cookies to enhance your experience. By continuing to visit
            this site you agree to our use of cookies.
          </p>
        </div>
        <div className='flex space-x-4'>
          <Button
            onClick={() => setIsVisible(false)}
            className='bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300'
          >
            Accept All
          </Button>
          <Button
            onClick={() => setIsVisible(false)}
            variant='outline'
            className='border border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300'
          >
            Learn More
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
