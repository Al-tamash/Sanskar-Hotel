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
      'Rooms were spotless and comfortable. 24/7 reception handled our late check-in smoothly. Highly recommend Sanskar Hotel.',
    location: 'Mumbai, India',
  },
  {
    id: 2,
    name: 'Raj Patel',
    rating: 5,
    comment:
      'Excellent hospitality and quick room service. The property is well maintained and perfect for family stays.',
    location: 'Delhi, India',
  },
  {
    id: 3,
    name: 'Anita Desai',
    rating: 5,
    comment:
      'Great value for money. Clean rooms, courteous staff, and a hassle-free booking experience. Will definitely return.',
    location: 'Bangalore, India',
  },
  {
    id: 4,
    name: 'Vikas Mehta',
    rating: 5,
    comment:
      'Spacious, clean rooms and very responsive reception. Room service was quick and the food was tasty.',
    location: 'Pune, India',
  },
  {
    id: 5,
    name: 'Neha Agarwal',
    rating: 5,
    comment:
      'Smooth check-in at midnight, thanks to 24/7 reception. The staff is polite and the property is well kept.',
    location: 'Jaipur, India',
  },
  {
    id: 6,
    name: 'Aman Verma',
    rating: 5,
    comment:
      'Great hospitality and quick housekeeping support. Excellent value near key attractions.',
    location: 'Ahmedabad, India',
  },
  {
    id: 7,
    name: 'Riya Singh',
    rating: 5,
    comment:
      'Family-friendly stay with clean linens, prompt room service, and courteous staff. Highly recommended.',
    location: 'Udaipur, India',
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
