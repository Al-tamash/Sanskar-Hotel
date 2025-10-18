'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What are the check‑in and check‑out times?',
    a: 'Check‑in is 2:00 PM and check‑out is 11:00 AM.',
  },
  {
    q: 'Do you offer free cancellation?',
    a: 'Yes, selected rates offer free cancellation before 24 hours of arrival.',
  },
  {
    q: 'Is parking available?',
    a: 'Yes, complimentary on‑site parking is available for guests.',
  },
  { q: 'Are pets allowed?', a: 'Pets are not allowed at the property.' },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className='py-16' id='faq'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl sm:text-4xl font-bold text-text'>
            Frequently Asked Questions
          </h2>
          <p className='text-text-light mt-2'>
            Everything you need to know before you book
          </p>
        </div>
        <div className='divide-y rounded-2xl border border-primary/10 bg-white shadow-sm'>
          {faqs.map((f, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className='w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center'
              >
                <span className='font-medium text-text'>{f.q}</span>
                <span className='text-primary'>{open === i ? '-' : '+'}</span>
              </button>
              {open === i && (
                <div className='px-4 sm:px-6 pb-4 sm:pb-5 text-text-light'>
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
