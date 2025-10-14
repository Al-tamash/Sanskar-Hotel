'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    rating: 5,
    comment:
      'Absolutely stunning hotel with impeccable service. The rooms are luxurious and the staff goes above and beyond.',
    location: 'Mumbai, India',
  },
  {
    id: 2,
    name: 'Raj Patel',
    rating: 5,
    comment:
      'A perfect blend of traditional elegance and modern comfort. The spa facilities are world-class.',
    location: 'Delhi, India',
  },
  {
    id: 3,
    name: 'Anita Desai',
    rating: 5,
    comment:
      'Exceeded all expectations! The attention to detail and personalized service made our stay memorable.',
    location: 'Bangalore, India',
  },
]

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section id='testimonials' className='py-20 px-4'>
      <div className='max-w-4xl mx-auto'>
        <motion.div
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-serif font-bold text-primary mb-4'>
            What Our Guests Say
          </h2>
          <div className='w-24 h-1 bg-primary mx-auto mb-6'></div>
        </motion.div>

        <div className='relative'>
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-2xl shadow-2xl p-8 md:p-12'
          >
            <div className='flex justify-center mb-6'>
              {[...Array(testimonials[currentTestimonial].rating)].map(
                (_, i) => (
                  <span key={i} className='text-3xl text-primary'>
                    ⭐
                  </span>
                )
              )}
            </div>
            <p className='text-xl text-text-light text-center mb-8 italic'>
              "{testimonials[currentTestimonial].comment}"
            </p>
            <div className='text-center'>
              <div className='font-semibold text-primary text-lg'>
                {testimonials[currentTestimonial].name}
              </div>
              <div className='text-text-muted'>
                {testimonials[currentTestimonial].location}
              </div>
            </div>
          </motion.div>

          <div className='flex justify-center mt-8 space-x-4'>
            <Button
              onClick={() =>
                setCurrentTestimonial(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors'
            >
              <span className='text-primary'>‹</span>
            </Button>
            <Button
              onClick={() =>
                setCurrentTestimonial(
                  (prev) => (prev + 1) % testimonials.length
                )
              }
              className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors'
            >
              <span className='text-primary'>›</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
