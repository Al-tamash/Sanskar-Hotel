'use client'

import { Wifi, BadgeCheck, MapPin, ShieldCheck } from 'lucide-react'

export default function BenefitsStrip() {
  const items = [
    { icon: <BadgeCheck className='w-5 h-5' />, label: 'Best Rate Guarantee' },
    { icon: <Wifi className='w-5 h-5' />, label: 'Free High-Speed Wi‑Fi' },
    { icon: <ShieldCheck className='w-5 h-5' />, label: 'Free Cancellation*' },
    { icon: <MapPin className='w-5 h-5' />, label: 'Prime Location' },
  ]

  return (
    <section className='bg-accent/40 py-6'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6'>
          {items.map((it, i) => (
            <div
              key={i}
              className='flex items-center gap-2 bg-white/70 rounded-lg px-3 py-2 sm:px-4 sm:py-3 shadow-sm'
            >
              <span className='text-primary'>{it.icon}</span>
              <span className='text-sm sm:text-base text-text'>{it.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
