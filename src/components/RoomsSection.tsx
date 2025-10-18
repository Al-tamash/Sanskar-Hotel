'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const rooms = [
  {
    id: 1,
    name: 'Standard Room',
    price: '₹1,299',
    image: '/images/r8.jpg',
    panoramaUrl:
      'https://www.google.com/maps/embed?pb=!4v1760789915150!6m8!1m7!1sCAoSHENJQUJJaEFHYnlmUUloTGZWMmVrTnJvQUJHelM.!2m2!1d22.4730121533499!2d78.43533002169733!3f143.19869023709975!4f-8.639471418220936!5f0.7820865974627469',
    features: ['AC', 'LED TV with DTH', 'Free Wi-Fi', 'Tea/Coffee Kettle'],
  },
  {
    id: 2,
    name: 'Deluxe Room',
    price: '₹2,999',
    image: '/images/r13.jpg',
    panoramaUrl:
      'https://www.google.com/maps/embed?pb=!4v1760789584687!6m8!1m7!1sCAoSHENJQUJJaEFHYnl3N2d5aTVZMmVrTnNRQUNNQ1k.!2m2!1d22.47293460137321!2d78.43532698535257!3f326.94487420447103!4f-6.655246767277774!5f0.7820865974627469',
    features: [
      'Spacious Seating Area',
      'Mini Fridge',
      'In-Room Safe',
      'Upgraded Toiletries',
    ],
  },
  {
    id: 3,
    name: 'Superior Room',
    price: '₹3,999',
    image: '/images/r23.jpg',
    panoramaUrl:
      'https://www.google.com/maps/embed?pb=!4v1760789771008!6m8!1m7!1sCAoSHENJQUJJaEFHYndQVHlRNjlOV2VrTnRJQUJadW0.!2m2!1d22.47297934963453!2d78.43531752930687!3f170.79773596577255!4f-12.92207803081908!5f0.7820865974627469',
    features: [
      'City/Garden View',
      'Premium Linen',
      'Rain Shower Bathroom',
      'Smart TV & Wi-Fi',
    ],
  },
  {
    id: 4,
    name: 'Family Room',
    price: '₹4,999',
    image: '/images/r15.jpg',
    panoramaUrl:
      'https://www.google.com/maps/embed?pb=!4v1760789984918!6m8!1m7!1sCAoSHENJQUJJaEFHYndQVHlRNjlOV2VrTnJNQUJpZmg.!2m2!1d22.47297222367986!2d78.43536151292484!3f330.3827296896589!4f-10.322273751596498!5f0.7820865974627469',
    features: [
      '2 Queen Beds',
      'Extra Bed on Request',
      'Wardrobe & Luggage Rack',
      'Hot & Cold Water Bathroom',
    ],
  },
]

export default function RoomsSection() {
  const [viewer, setViewer] = useState<{ name: string; url: string } | null>(
    null
  )
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
                <div className='grid grid-cols-1 gap-2'>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={() =>
                        setViewer({ name: room.name, url: room.panoramaUrl })
                      }
                      className='w-full bg-white border border-primary text-primary hover:bg-primary/10 py-2 rounded-lg transition-colors duration-300'
                    >
                      View in 360°
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={() => {
                        try {
                          if (typeof window !== 'undefined') {
                            sessionStorage.setItem('selectedRoom', room.name)
                            const el = document.getElementById('contact')
                            if (el) {
                              el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            } else {
                              window.location.hash = '#contact'
                            }
                          }
                        } catch {}
                      }}
                      className='w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-lg transition-colors duration-300'
                    >
                      Book Room
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {viewer && (
          <div
            className='fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4'
            onClick={() => setViewer(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className='relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl'
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={viewer.url}
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='absolute inset-0 w-full h-full'
                title={viewer.name + ' 360° View'}
              />
              <button
                onClick={() => setViewer(null)}
                aria-label='Close'
                className='absolute top-3 right-3 bg-white/90 hover:bg-white text-primary rounded-full w-9 h-9 flex items-center justify-center shadow'
              >
                ×
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
