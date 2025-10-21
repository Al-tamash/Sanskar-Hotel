'use client'

import { motion } from 'framer-motion'
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface FooterProps {
  scrollToSection: (sectionId: string) => void
}

export default function Footer({ scrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-background text-text py-16 px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-4 gap-8'>
          <div>
            <div className='flex items-center space-x-2 '>
              <Image
                src='/mainlogo.png'
                alt='Sanskar Hotel Logo'
                width={50}
                height={50}
              />
              <h3 className='text-2xl font-bold text-primary '>
                Sanskar Hotel
              </h3>
            </div>
            <p className='text-light leading-relaxed mt-2'>
              Where luxury meets tradition, creating unforgettable experiences.
            </p>
          </div>

          <div>
            <h4 className='font-semibold text-text mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className='text-light hover:text-primary transition-colors'
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('rooms')}
                  className='text-light hover:text-primary transition-colors'
                >
                  Rooms
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('amenities')}
                  className='text-light hover:text-primary transition-colors'
                >
                  Amenities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className='text-light hover:text-primary transition-colors'
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-semibold text-text mb-4'>Contact Info</h4>
            <ul className='space-y-3 text-light'>
              <li className='flex items-center gap-2'>
                <Phone className='w-4 h-4 text-primary' />
                +91 9479592023 | +91 7470817923
              </li>
              <li className='flex items-center gap-2'>
                <Mail className='w-4 h-4 text-primary' />
                info@sanskarhotel.com
              </li>
              <li className='flex items-center gap-2'>
                <MapPin className='w-4 h-4 text-primary' />
                <Link
                  href='https://maps.app.goo.gl/EGmbyk4LMfg1dwaTA'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary transition-colors'
                >
                  Subhash Road, Near Old SBI, Pachmarhi, Madhya Pradesh 461881,
                  India
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='font-semibold text-text mb-4'>Follow Us</h4>
            <div className='flex space-x-3'>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors'
              >
                <Link href='#' aria-label='Facebook'>
                  <Facebook className='w-5 h-5 text-text' />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors'
              >
                <Link href='#' aria-label='Twitter'>
                  <Twitter className='w-5 h-5 text-text' />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors'
              >
                <Link href='#' aria-label='Instagram'>
                  <Instagram className='w-5 h-5 text-text' />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary transition-colors'
              >
                <Link href='#' aria-label='Youtube'>
                  <Youtube className='w-5 h-5 text-text' />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* <div className='border-t border-border mt-12 pt-8 text-center text-muted'>
          <p>
            &copy; {currentYear} Sanskar Hotel. All rights reserved. | Privacy
            Policy | Terms of Service
          </p>
        </div> */}

        <div className='border-t border-border mt-12 pt-6 text-center text-text-light'>
          <p className='text-sm'>
            &copy; {currentYear} Sanskar Hotel. All rights reserved. | Privacy
            Policy | Terms of Service
          </p>
          <p className='mt-1 text-sm'>
            Designed & Developed by{' '}
            <Link
              href='https://edonesolution.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary hover:text-primary/80 transition-colors font-medium'
            >
              Edone Solutions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
