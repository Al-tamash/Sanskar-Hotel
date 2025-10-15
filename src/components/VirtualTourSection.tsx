'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function VirtualTourSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section id='virtual-tour' className='py-20 px-4 bg-background'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-serif font-bold text-primary mb-4'>
            Virtual Tour
          </h2>
          <div className='w-24 h-1 bg-primary mx-auto mb-6'></div>
          <p className='text-text-light max-w-2xl mx-auto'>
            Experience the luxury of Sanskar Hotel from the comfort of your home
            with our immersive virtual tours
          </p>
        </motion.div>

        <motion.div
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='grid grid-cols-1 gap-8'
        >
          {/* 360° Virtual Tour */}
          <div className='space-y-4'>
            <h3 className='text-2xl font-semibold text-primary text-center'>
              360° Hotel Tour
            </h3>
            <div className='relative rounded-2xl overflow-hidden shadow-2xl aspect-video'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!4v1760415678434!6m8!1m7!1sCAoSK0FGMVFpcE9uXzJhN3gydGk5M3hFT1FjQUFBCjE.!2m2!1d22.47300479424883!2d78.43534598419402!3f182.65335602840915!4f7.657203425583134!5f0.7820865974627469'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='absolute inset-0 w-full h-full'
              />
            </div>
            <p className='text-center text-text-light'>
              Explore our luxurious interiors with immersive 360° views
            </p>
          </div>
        </motion.div>

        <motion.div
          initial='initial'
          whileInView='animate'
          viewport={{ once: true }}
          variants={fadeInUp}
          className='text-center mt-12'
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => window.open('#contact', '_self')}
              className='bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl'
            >
              Book Your Visit
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
