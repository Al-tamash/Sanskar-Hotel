'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const specialOffers = [
  {
    id: 1,
    title: 'Summer Getaway Package',
    discount: '30% OFF',
    description: 'Enjoy luxurious stays with exclusive summer discounts',
    features: ['Complimentary Breakfast', 'Spa Credit', 'Late Checkout'],
    validUntil: '2024-09-30',
    code: 'SUMMER30',
  },
  {
    id: 2,
    title: 'Romantic Escape',
    discount: '25% OFF',
    description: 'Perfect package for couples seeking luxury and privacy',
    features: ['Candlelight Dinner', 'Room Upgrade', 'Wine & Chocolates'],
    validUntil: '2024-12-31',
    code: 'ROMANCE25',
  },
]

export default function SpecialOffersSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section id='offers' className='py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-serif font-bold text-primary mb-4'>
            Exclusive Offers
          </h2>
          <div className='w-24 h-1 bg-primary mx-auto mb-6'></div>
          <p className='text-text-light max-w-2xl mx-auto'>
            Discover our specially curated packages designed to make your stay
            unforgettable
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-8'>
          {specialOffers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              variants={index === 0 ? fadeInLeft : fadeInRight}
              whileHover={{ scale: 1.02 }}
              className='bg-gradient-to-br from-primary/10 to-accent/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/20'
            >
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h3 className='text-2xl font-serif font-bold text-primary mb-2'>
                    {offer.title}
                  </h3>
                  <p className='text-text-light'>{offer.description}</p>
                </div>
                <div className='bg-primary text-white px-4 py-2 rounded-full text-lg font-bold'>
                  {offer.discount}
                </div>
              </div>

              <ul className='space-y-2 mb-6'>
                {offer.features.map((feature, idx) => (
                  <li key={idx} className='flex items-center text-text-light'>
                    <span className='text-primary mr-2'>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className='flex justify-between items-center'>
                <div>
                  <p className='text-sm text-text-muted'>
                    Valid until {offer.validUntil}
                  </p>
                  <p className='text-xs text-text-muted'>Code: {offer.code}</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className='bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300'>
                    Book Now
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
