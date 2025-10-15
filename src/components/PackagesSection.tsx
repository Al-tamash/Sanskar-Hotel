'use client'

import { Button } from '@/components/ui/button'

const packages = [
  {
    title: 'Romantic Getaway',
    price: '₹6,999',
    features: ['1 Night Stay', 'Candle-light Dinner', 'Breakfast Included'],
    badge: 'Most Popular',
  },
  {
    title: 'Family Escape',
    price: '₹8,499',
    features: ['2 Nights Stay', 'Kids Activities', 'Breakfast & Dinner'],
    badge: 'Best Value',
  },
  {
    title: 'Wellness Retreat',
    price: '₹7,999',
    features: ['Spa Access', 'Yoga Session', 'Healthy Breakfast'],
  },
]

export default function PackagesSection() {
  return (
    <section className='py-16 bg-white'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='text-center mb-10'>
          <h2 className='text-3xl sm:text-4xl font-bold text-text'>Curated Packages</h2>
          <p className='text-text-light mt-2'>Handpicked experiences for every occasion</p>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {packages.map((p) => (
            <div key={p.title} className='bg-white rounded-2xl border border-primary/10 shadow-sm p-6 flex flex-col'>
              {p.badge && (
                <span className='self-start text-xs bg-primary text-white px-2 py-1 rounded-full mb-3'>
                  {p.badge}
                </span>
              )}
              <h3 className='text-xl font-semibold text-text'>{p.title}</h3>
              <div className='text-2xl font-bold text-primary mt-2'>{p.price}</div>
              <ul className='mt-4 space-y-2 text-text-light text-sm'>
                {p.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <Button className='mt-6 bg-primary hover:bg-primary-dark text-white rounded-full'>Book Now</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
