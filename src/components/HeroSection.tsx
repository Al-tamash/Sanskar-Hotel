'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section
      id='home'
      className='relative min-h-screen lg:h-screen flex items-center justify-center overflow-hidden'
    >
      <div className='absolute inset-0'>
        <Image
          src='/hero.jpg'
          alt='Sanskar Hotel Hero Banner'
          fill
          className='object-cover'
          sizes='100vw'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-r from-secondary/60 to-secondary/40' />
      </div>

      <motion.div
        initial='initial'
        animate='animate'
        variants={fadeInUp}
        className='relative z-10 text-center px-4 max-w-6xl mx-auto w-full'
      >
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight'>
          Welcome to Sanskar Hotel
        </h1>
        <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary mb-8 font-light'>
          Where Luxury Meets Tradition
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
          className='bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl'
        >
          Book Now
        </motion.button>
      </motion.div>
    </section>
  )
}
