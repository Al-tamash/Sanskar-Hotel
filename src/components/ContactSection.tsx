'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const paymentMethods = [
  { name: 'Visa', icon: '💳' },
  { name: 'Mastercard', icon: '💳' },
  { name: 'American Express', icon: '💳' },
  { name: 'UPI', icon: '📱' },
  { name: 'NetBanking', icon: '🏦' },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    rooms: '1',
    message: '',
  })

  const [selectedRoom, setSelectedRoom] = useState<string | null>(null)

  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  }

  const buildWhatsAppUrl = (phone: string, text: string) => {
    const encoded = encodeURIComponent(text)
    try {
      const ua = navigator.userAgent || ''
      const isMobile =
        /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(ua)
      if (!isMobile) {
        return `https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`
      }
    } catch {}
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`
  }

  const openWhatsApp = (url: string) => {
    if (typeof window === 'undefined') return
    const win = window.open(url, '_blank')
    if (!win) {
      window.location.href = url
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email'
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required'
    } else if (!/^\+?\d{10,15}$/.test(formData.phone.replace(/\s|-/g, ''))) {
      errors.phone = 'Please enter a valid phone number'
    }

    if (!formData.checkIn) {
      errors.checkIn = 'Check-in date is required'
    }

    if (!formData.checkOut) {
      errors.checkOut = 'Check-out date is required'
    }

    if (
      formData.checkIn &&
      formData.checkOut &&
      new Date(formData.checkOut) <= new Date(formData.checkIn)
    ) {
      errors.checkOut = 'Check-out date must be after check-in date'
    }

    if (!formData.guests || parseInt(formData.guests, 10) < 1) {
      errors.guests = 'Guests must be at least 1'
    }

    if (!formData.rooms || parseInt(formData.rooms, 10) < 1) {
      errors.rooms = 'Rooms must be at least 1'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    const lines = [
      'Booking Request - Sanskar Hotel',
      '--------------------------------',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      selectedRoom ? `Room: ${selectedRoom}` : undefined,
      `Check-in: ${formData.checkIn}`,
      `Check-out: ${formData.checkOut}`,
      `Guests: ${formData.guests}`,
      `Rooms: ${formData.rooms}`,
      formData.message ? `Message: ${formData.message}` : undefined,
      `Submitted: ${new Date().toLocaleString()}`,
    ].filter(Boolean) as string[]

    const whatsappUrl = buildWhatsAppUrl('919479592023', lines.join('\n'))

    try {
      openWhatsApp(whatsappUrl)
    } finally {
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '1',
        rooms: '1',
        message: '',
      })
      setSelectedRoom(null)
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const room = sessionStorage.getItem('selectedRoom')
        if (room) {
          setSelectedRoom(room)
          setFormData((prev) => ({
            ...prev,
            message: prev.message || `Interested in booking: ${room}`,
          }))
          sessionStorage.removeItem('selectedRoom')
        }
      }
    } catch {}
  }, [])

  return (
    <>
      <section id='contact' className='py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            variants={fadeInUp}
            className='text-center mb-16'
          >
            <h2 className='text-4xl md:text-5xl font-serif font-bold text-primary mb-4'>
              Contact & Booking
            </h2>
            <div className='w-24 h-1 bg-primary mx-auto mb-6'></div>
          </motion.div>

          <div className='grid md:grid-cols-2 gap-12'>
            <motion.div
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <h3 className='text-2xl font-serif font-bold text-primary mb-6'>
                Get in Touch
              </h3>

              <div className='space-y-4 mb-8'>
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                    <span className='text-primary'>📞</span>
                  </div>
                  <div>
                    <div className='font-semibold text-primary'>Phone</div>
                    <div className='text-text-light'>+91 9479592023</div>
                    <div className='text-text-light'>+91 7470817923</div>
                  </div>
                </div>

                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                    <span className='text-primary'>✉️</span>
                  </div>
                  <div>
                    <div className='font-semibold text-primary'>Email</div>
                    <div className='text-text-light'>info@sanskarhotel.com</div>
                  </div>
                </div>

                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center'>
                    <span className='text-primary'>📍</span>
                  </div>
                  <div>
                    <div className='font-semibold text-primary'>Address</div>
                    <div className='text-text-light'>
                      <a
                        href='https://maps.app.goo.gl/EGmbyk4LMfg1dwaTA'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-primary transition-colors'
                      >
                        Subhash Road, near SBI,
                        <br />
                        Pachmarhi, Madhya Pradesh
                        <br />
                        461881, India
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-lg p-6'>
                <div className='w-full h-64 rounded overflow-hidden mb-4'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.830454376884!2d78.4327010747543!3d22.473004736614307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397e3a322a38a84b%3A0x2eb36a95a5d2ec83!2sOYO%20Hotel%20Sanskaar!5e0!3m2!1sen!2sin!4v1760773245618!5m2!1sen!2sin'
                    width='100%'
                    height='100%'
                    style={{ border: 0 }}
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    title='Sanskar Hotel Location Map'
                    className='rounded-lg'
                    aria-label='Interactive map showing Sanskar Hotel location'
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial='initial'
              whileInView='animate'
              viewport={{ once: true }}
              variants={fadeInRight}
            >
              <h3 className='text-2xl font-serif font-bold text-primary mb-2'>
                Book Your Stay
              </h3>
              {selectedRoom && (
                <div className='mb-4'>
                  <span className='inline-block text-sm bg-primary/10 text-primary px-3 py-1 rounded-full'>
                    Selected Room: {selectedRoom}
                  </span>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className='bg-white rounded-lg shadow-lg p-6 space-y-4'
              >
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-primary mb-2'
                  >
                    Name
                  </label>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      formErrors.name ? 'border-red-500' : 'border-primary/20'
                    }`}
                    placeholder='Your Name'
                    aria-required='true'
                    aria-describedby={
                      formErrors.name ? 'name-error' : undefined
                    }
                  />
                  {formErrors.name && (
                    <p id='name-error' className='text-red-500 text-sm mt-1'>
                      {formErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-primary mb-2'
                  >
                    Email
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      formErrors.email ? 'border-red-500' : 'border-primary/20'
                    }`}
                    placeholder='your@email.com'
                    aria-required='true'
                    aria-describedby={
                      formErrors.email ? 'email-error' : undefined
                    }
                  />
                  {formErrors.email && (
                    <p id='email-error' className='text-red-500 text-sm mt-1'>
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-primary mb-2'
                  >
                    Phone
                  </label>
                  <input
                    id='phone'
                    name='phone'
                    type='tel'
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      formErrors.phone ? 'border-red-500' : 'border-primary/20'
                    }`}
                    placeholder='+91 9479592023'
                    aria-required='true'
                    aria-describedby={
                      formErrors.phone ? 'phone-error' : undefined
                    }
                  />
                  {formErrors.phone && (
                    <p id='phone-error' className='text-red-500 text-sm mt-1'>
                      {formErrors.phone}
                    </p>
                  )}
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <label
                      htmlFor='checkIn'
                      className='block text-sm font-medium text-primary mb-2'
                    >
                      Check-in Date
                    </label>
                    <input
                      id='checkIn'
                      name='checkIn'
                      type='date'
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                        formErrors.checkIn
                          ? 'border-red-500'
                          : 'border-primary/20'
                      }`}
                      aria-required='true'
                      aria-describedby={
                        formErrors.checkIn ? 'checkin-error' : undefined
                      }
                    />
                    {formErrors.checkIn && (
                      <p
                        id='checkin-error'
                        className='text-red-500 text-sm mt-1'
                      >
                        {formErrors.checkIn}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor='checkOut'
                      className='block text-sm font-medium text-primary mb-2'
                    >
                      Check-out Date
                    </label>
                    <input
                      id='checkOut'
                      name='checkOut'
                      type='date'
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                        formErrors.checkOut
                          ? 'border-red-500'
                          : 'border-primary/20'
                      }`}
                      aria-required='true'
                      aria-describedby={
                        formErrors.checkOut ? 'checkout-error' : undefined
                      }
                    />
                    {formErrors.checkOut && (
                      <p
                        id='checkout-error'
                        className='text-red-500 text-sm mt-1'
                      >
                        {formErrors.checkOut}
                      </p>
                    )}
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <label
                      htmlFor='guests'
                      className='block text-sm font-medium text-primary mb-2'
                    >
                      No. of Guests
                    </label>
                    <input
                      id='guests'
                      name='guests'
                      type='number'
                      min={1}
                      value={formData.guests}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                        formErrors.guests
                          ? 'border-red-500'
                          : 'border-primary/20'
                      }`}
                      aria-required='true'
                      aria-describedby={
                        formErrors.guests ? 'guests-error' : undefined
                      }
                    />
                    {formErrors.guests && (
                      <p
                        id='guests-error'
                        className='text-red-500 text-sm mt-1'
                      >
                        {formErrors.guests}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor='rooms'
                      className='block text-sm font-medium text-primary mb-2'
                    >
                      No. of Rooms
                    </label>
                    <input
                      id='rooms'
                      name='rooms'
                      type='number'
                      min={1}
                      value={formData.rooms}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                        formErrors.rooms
                          ? 'border-red-500'
                          : 'border-primary/20'
                      }`}
                      aria-required='true'
                      aria-describedby={
                        formErrors.rooms ? 'rooms-error' : undefined
                      }
                    />
                    {formErrors.rooms && (
                      <p id='rooms-error' className='text-red-500 text-sm mt-1'>
                        {formErrors.rooms}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-primary mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    className='w-full px-4 py-2 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 h-32'
                    placeholder='Special requests or messages...'
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold transition-colors duration-300 disabled:cursor-not-allowed'
                >
                  {isSubmitting ? (
                    <span className='flex items-center justify-center'>
                      <svg
                        className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                      >
                        <circle
                          className='opacity-25'
                          cx='12'
                          cy='12'
                          r='10'
                          stroke='currentColor'
                          strokeWidth='4'
                        ></circle>
                        <path
                          className='opacity-75'
                          fill='currentColor'
                          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Submit Booking Request'
                  )}
                </motion.button>
              </form>

              {/* Quick Contact Options */}
              <div className='mt-6 flex flex-col sm:flex-row gap-4'>
                <motion.a
                  href='#'
                  onClick={(e) => {
                    e.preventDefault()
                    openWhatsApp(
                      buildWhatsAppUrl(
                        '919479592023',
                        "Hello! I'm interested in booking a room at Sanskar Hotel."
                      )
                    )
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2'
                >
                  <svg
                    className='w-5 h-5'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
                  </svg>
                  Chat on WhatsApp
                </motion.a>

                <motion.a
                  href='tel:+919479592923'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='flex-1 bg-primary hover:bg-primary/90 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2'
                >
                  <svg
                    className='w-5 h-5'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                  Call Now
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Methods & Trust Section */}
      <section className='py-12 px-4 bg-accent/30'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-8'>
            <h3 className='text-2xl font-serif font-bold text-primary mb-4'>
              Secure Payment Methods
            </h3>
            <p className='text-text-light'>
              We accept all major payment methods for your convenience
            </p>
          </div>

          <div className='flex flex-wrap justify-center items-center gap-6 mb-8'>
            {paymentMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className='bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300'
              >
                <div className='flex items-center space-x-2'>
                  <span className='text-2xl'>{method.icon}</span>
                  <span className='text-sm font-medium text-text'>
                    {method.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className='text-center'>
            <div className='flex justify-center items-center space-x-8 text-sm text-text-muted'>
              <div className='flex items-center space-x-2'>
                <span className='text-green-600'>🔒</span>
                <span>SSL Secured</span>
              </div>
              <div className='flex items-center space-x-2'>
                <span className='text-blue-600'>🛡️</span>
                <span>PCI DSS Compliant</span>
              </div>
              <div className='flex items-center space-x-2'>
                <span className='text-purple-600'>✓</span>
                <span>Safe & Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
