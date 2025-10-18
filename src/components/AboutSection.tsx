'use client'

import { motion } from 'framer-motion'
import { Star, Heart, Award, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const AboutSection = () => {
  const features = [
    {
      icon: <Award className='w-6 h-6' />,
      title: 'Award Winning',
      description: 'Internationally recognized luxury hotel',
    },
    {
      icon: <Users className='w-6 h-6' />,
      title: 'Expert Team',
      description: '20+ years of hospitality excellence',
    },
    {
      icon: <Heart className='w-6 h-6' />,
      title: 'Personalized Service',
      description: 'Dedicated concierge for every guest',
    },
  ]

  return (
    <section id='about' className='py-16 bg-background'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl font-bold text-text mb-4'>
            About <span className='text-primary'>Sanskar Hotel</span>
          </h2>
          <p className='text-lg text-light max-w-3xl mx-auto'>
            Experience luxury and elegance at Sanskar Hotel, where exceptional
            service meets sophisticated comfort in the heart of the city.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* <Image
              src='https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop'
              alt='Sanskar Hotel'
              width={600}
              height={400}
              className='rounded-2xl shadow-lg w-full h-64 sm:h-80 md:h-[400px] object-cover'
            /> */}
            <Image src={'/images/f1.jpg'} alt='Sanskar Hotel' width={600} height={400} className='rounded-2xl shadow-lg w-full h-64 sm:h-80 md:h-[400px] object-cover' />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='space-y-6'
          >
            <div>
              <h3 className='text-2xl font-bold text-text mb-4'>
                Our Legacy of Excellence
              </h3>
              <p className='text-light leading-relaxed mb-4'>
                Since 2003, Sanskar Hotel has been synonymous with luxury and
                impeccable service. We pride ourselves on creating unforgettable
                experiences for every guest.
              </p>
              <p className='text-light leading-relaxed'>
                Our dedicated team ensures your stay is nothing short of
                extraordinary, with attention to every detail.
              </p>
            </div>

            <div className='grid grid-cols-3 gap-4 pt-4'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary mb-1'>20+</div>
                <div className='text-sm text-light'>Years</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary mb-1'>50+</div>
                <div className='text-sm text-light'>Awards</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-primary mb-1'>10K+</div>
                <div className='text-sm text-light'>Guests</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='grid md:grid-cols-3 gap-8'
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className='text-center p-6 rounded-xl bg-accent hover:bg-accent/80 transition-colors duration-300'
            >
              <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary'>
                {feature.icon}
              </div>
              <h4 className='font-semibold text-text mb-2'>{feature.title}</h4>
              <p className='text-sm text-light'>{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
