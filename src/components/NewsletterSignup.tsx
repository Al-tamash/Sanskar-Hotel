'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    // Hook up to ESP later
    setSubmitted(true)
  }

  return (
    <section className='py-16 bg-accent/30'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='rounded-2xl bg-white shadow-sm border border-primary/10 p-6 sm:p-10 text-center'>
          <h2 className='text-2xl sm:text-3xl font-bold text-text'>Get Exclusive Offers</h2>
          <p className='text-text-light mt-2'>Join our mailing list and never miss special deals</p>
          {submitted ? (
            <p className='mt-6 text-primary font-medium'>Thanks! You\'re subscribed.</p>
          ) : (
            <form onSubmit={submit} className='mt-6 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto'>
              <input
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                className='flex-1 border rounded-full px-4 h-11'
              />
              <Button type='submit' className='h-11 rounded-full bg-primary hover:bg-primary-dark text-white px-6'>
                Subscribe
              </Button>
            </form>
          )}
          <p className='text-xs text-text-muted mt-3'>We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
