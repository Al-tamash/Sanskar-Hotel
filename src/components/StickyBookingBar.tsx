'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function StickyBookingBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div
      className='fixed left-0 right-0 z-50'
      style={{ bottom: 'calc(env(safe-area-inset-bottom, 0) + 0.5rem)' }}
    >
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div className='bg-white/95 backdrop-blur-md border border-primary/10 shadow-lg rounded-2xl p-3 sm:p-2'>
          <div className='grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-3 items-center'>
            <div className='sm:col-span-1'>
              <label className='block text-[11px] leading-none text-text-muted px-1 mb-1'>Check-in</label>
              <input
                type='date'
                className='w-full bg-white px-3 py-2 rounded-lg text-sm border'
                aria-label='Check-in date'
              />
            </div>
            <div className='sm:col-span-1'>
              <label className='block text-[11px] leading-none text-text-muted px-1 mb-1'>Check-out</label>
              <input
                type='date'
                className='w-full bg-white px-3 py-2 rounded-lg text-sm border'
                aria-label='Check-out date'
              />
            </div>
            <div className='hidden sm:block sm:col-span-1'>
              <label className='block text-[11px] leading-none text-text-muted px-1 mb-1'>Guests</label>
              <input
                type='number'
                min={1}
                placeholder='2'
                className='w-full bg-white px-3 py-2 rounded-lg text-sm border'
                aria-label='Number of guests'
              />
            </div>
            <div className='sm:col-span-2'>
              <Button
                type='button'
                onClick={() => {
                  const el = document.getElementById('rooms')
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' })
                  } else {
                    window.location.hash = 'rooms'
                  }
                }}
                className='w-full bg-primary hover:bg-primary-dark text-white rounded-lg h-10 sm:h-11'
              >
                Check Availability
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
