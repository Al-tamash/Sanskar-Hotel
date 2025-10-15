'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function BookingWidget() {
  const today = new Date().toISOString().split('T')[0]
  const [checkIn, setCheckIn] = useState<string>(today)
  const [checkOut, setCheckOut] = useState<string>(today)
  const [guests, setGuests] = useState<number>(2)

  const submit = () => {
    const el = document.getElementById('rooms')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.hash = 'rooms'
    }
  }

  return (
    <section className='py-8'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm border border-primary/10 p-4 sm:p-6'>
          <div className='grid grid-cols-2 md:grid-cols-5 gap-3'>
            <div className='col-span-2 md:col-span-1'>
              <label className='block text-xs text-text-muted mb-1'>Check‑in</label>
              <input
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                type='date'
                className='w-full border rounded-md px-3 py-2 bg-white text-text'
              />
            </div>
            <div className='col-span-2 md:col-span-1'>
              <label className='block text-xs text-text-muted mb-1'>Check‑out</label>
              <input
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                type='date'
                className='w-full border rounded-md px-3 py-2 bg-white text-text'
              />
            </div>
            <div className='col-span-2 md:col-span-1'>
              <label className='block text-xs text-text-muted mb-1'>Guests</label>
              <input
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                type='number'
                min={1}
                className='w-full border rounded-md px-3 py-2 bg-white text-text'
              />
            </div>
            <div className='col-span-2 md:col-span-2 flex items-end'>
              <Button onClick={submit} className='w-full bg-primary hover:bg-primary-dark text-white h-10 rounded-md'>
                Check Availability
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
