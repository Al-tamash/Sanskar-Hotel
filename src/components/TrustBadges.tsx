'use client'

import { Star } from 'lucide-react'

export default function TrustBadges() {
  return (
    <section className='py-10'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='rounded-2xl bg-white shadow-sm border border-primary/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6'>
          <div className='flex items-center gap-3'>
            <div className='flex text-primary'>
              <Star className='w-5 h-5 fill-primary' />
              <Star className='w-5 h-5 fill-primary' />
              <Star className='w-5 h-5 fill-primary' />
              <Star className='w-5 h-5 fill-primary' />
              <Star className='w-5 h-5 fill-primary' />
            </div>
            <div>
              <p className='text-sm text-text-light'>Rated 4.8/5 by 1,200+ guests</p>
              <p className='text-xs text-text-muted'>Trusted by travelers worldwide</p>
            </div>
          </div>
          <div className='flex items-center gap-4 opacity-80'>
            <div className='text-xs sm:text-sm text-text-muted'>Verified Reviews</div>
            <div className='w-px h-6 bg-border' />
            <div className='text-xs sm:text-sm text-text-muted'>Secure Booking</div>
            <div className='w-px h-6 bg-border' />
            <div className='text-xs sm:text-sm text-text-muted'>No Hidden Fees</div>
          </div>
        </div>
      </div>
    </section>
  )
}
