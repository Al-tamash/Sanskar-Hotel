'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Phone, X } from 'lucide-react'
import { useState } from 'react'

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumber = '+919479592023' // Replace with actual WhatsApp number
  const phoneNumber = '+919479592023' // Replace with actual phone number

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in booking a room at Sanskar Hotel."
    )
    const phone = whatsappNumber.replace(/[^\d]/g, '')
    const deepLink = `whatsapp://send?phone=${phone}&text=${message}`
    const webLink = `https://wa.me/${phone}?text=${message}`

    let fallbackTimeout: number | null = null

    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden' && fallbackTimeout) {
        window.clearTimeout(fallbackTimeout)
        fallbackTimeout = null
        document.removeEventListener('visibilitychange', onVisibilityChange)
      }
    }

    document.addEventListener('visibilitychange', onVisibilityChange)

    fallbackTimeout = window.setTimeout(() => {
      window.open(webLink, '_blank')
      if (onVisibilityChange) {
        document.removeEventListener('visibilitychange', onVisibilityChange)
      }
    }, 1500)

    window.location.href = deepLink
  }

  const handleCallClick = () => {
    window.open(`tel:${phoneNumber}`, '_self')
  }

  return (
    <div
      className='fixed z-50 flex flex-col items-end gap-2'
      style={{
        bottom: 'calc(env(safe-area-inset-bottom, 0) + 1rem)',
        right: 'calc(env(safe-area-inset-right, 0) + 1rem)',
      }}
    >
      {/* Expanded Options */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className='flex flex-col gap-2 sm:gap-3 mb-2 items-end'
        >
          {/* WhatsApp Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleWhatsAppClick}
            className='bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 sm:gap-3 pl-4 sm:pl-6'
          >
            <span className='text-xs sm:text-sm font-medium whitespace-nowrap'>
              Chat
            </span>
            <MessageCircle className='w-5 h-5 sm:w-6 sm:h-6' />
          </motion.button>

          {/* Call Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleCallClick}
            className='bg-primary hover:bg-primary/90 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 sm:gap-3 pl-4 sm:pl-6'
          >
            <span className='text-xs sm:text-sm font-medium whitespace-nowrap'>
              Call
            </span>
            <Phone className='w-5 h-5 sm:w-6 sm:h-6' />
          </motion.button>
        </motion.div>
      )}

      {/* Main Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-primary hover:bg-primary/90 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative ${
          isOpen ? 'rotate-45' : ''
        }`}
      >
        {isOpen ? (
          <X className='w-5 h-5 sm:w-6 sm:h-6' />
        ) : (
          <MessageCircle className='w-5 h-5 sm:w-6 sm:h-6' />
        )}

        {/* Pulse Animation for Main Button */}
        {!isOpen && (
          <span className='absolute inset-0 rounded-full bg-primary animate-ping opacity-75'></span>
        )}
      </motion.button>

      {/* Help Text - Only show on larger screens */}
      {isOpen && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className='hidden sm:block text-xs text-text-muted bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md whitespace-nowrap text-right'
        >
          How can we help you?
        </motion.p>
      )}
    </div>
  )
}
