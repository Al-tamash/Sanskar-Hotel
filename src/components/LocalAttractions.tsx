'use client'

import { MapPin } from 'lucide-react'
import Image from 'next/image'

const spots = [
  {
    name: 'Bee Falls',
    distance: '3.2 km',
    image: '/nearbyattractionimg/e1.jpeg',
  },
  {
    name: 'Jata Shankar Caves',
    distance: '1.8 km',
    image: '/nearbyattractionimg/e3.jpeg',
  },
  {
    name: 'Dhoopgarh Sunset Point',
    distance: '5.4 km',
    image: '/nearbyattractionimg/e2.jpeg',
  },
  {
    name: 'Pandav Caves',
    distance: '2.1 km',
    image: '/nearbyattractionimg/e4.jpeg',
  },
]

export default function LocalAttractions() {
  return (
    <section id='local-attractions' className='py-16'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl sm:text-4xl font-bold text-text'>
            Nearby Attractions
          </h2>
          <p className='text-text-light mt-2'>
            Make the most of your stay with must‑see spots
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-6'>
          <div className='rounded-2xl overflow-hidden shadow-md border border-primary/10'>
            <div className='relative aspect-video'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14772.713!2d78.433!3d22.467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSanskar%20Hotel!5e0!3m2!1sen!2sin!4v1700000000000'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                className='absolute inset-0 w-full h-full'
              />
            </div>
          </div>

          <ul className='grid sm:grid-cols-2 gap-4'>
            {spots.map((s) => (
              <li
                key={s.name}
                className='flex items-center gap-3 p-4 rounded-xl bg-accent/40 border border-primary/10'
              >
                <div className='relative w-20 h-16 flex-shrink-0 rounded-lg overflow-hidden'>
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes='80px'
                    className='object-cover'
                  />
                </div>
                <span className='text-primary'>
                  <MapPin className='w-5 h-5' />
                </span>
                <div>
                  <div className='font-medium text-text'>{s.name}</div>
                  <div className='text-xs text-text-muted'>
                    {s.distance} from hotel
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
