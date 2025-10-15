'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const rooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    price: '₹8,999',
    image: '/room1.jpg',
    features: ['King Size Bed', 'City View', 'Mini Bar', 'Free WiFi'],
  },
  {
    id: 2,
    name: 'Executive Suite',
    price: '₹14,999',
    image: '/room2.jpg',
    features: ['Living Area', 'Ocean View', 'Jacuzzi', 'Butler Service'],
  },
  {
    id: 3,
    name: 'Presidential Suite',
    price: '₹24,999',
    image: '/room3.jpg',
    features: ['2 Bedrooms', 'Panoramic View', 'Private Pool', 'Personal Chef'],
  },
  {
    id: 4,
    name: 'Family Suite',
    price: '₹12,999',
    image: '/room4.jpg',
    features: ['2 Queen Beds', 'Garden View', 'Kids Area', 'Game Console'],
  },
]

export default function RoomsSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id='rooms' className='py-20 px-4 bg-accent/20'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-serif font-bold text-primary mb-4'>
            Rooms & Suites
          </h2>
          <div className='w-24 h-1 bg-primary mx-auto mb-6'></div>
          <p className='text-text-light max-w-2xl mx-auto'>
            Each room is a sanctuary of comfort and elegance, designed to
            provide you with the ultimate luxury experience
          </p>
        </motion.div>

        <motion.div
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={staggerContainer}
          className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'
        >
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300'
            >
              <div className='relative h-48'>
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                />
                <div className='absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold'>
                  {room.price}
                </div>
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-serif font-bold text-primary mb-3'>
                  {room.name}
                </h3>
                <ul className='space-y-2 mb-4'>
                  {room.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className='text-sm text-text-light flex items-center'
                    >
                      <div className='w-2 h-2 bg-primary rounded-full mr-2'></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className='w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-lg transition-colors duration-300'>
                    View Details
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
