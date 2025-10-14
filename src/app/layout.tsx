import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'), // TODO: Update for production deployment
  icons: {
    icon: '/faviconlogo.png',
  },
  title: 'Sanskar Hotel - Luxury & Elegance Redefined',
  description:
    'Experience unparalleled luxury and comfort at Sanskar Hotel. Elegant rooms, world-class amenities, and exceptional service await you.',
  keywords: [
    'Sanskar Hotel',
    'luxury hotel',
    'elegance',
    'hospitality',
    'premium accommodation',
    'resort',
    'Pachmarhi',
    'Madhya Pradesh',
    '5 star hotel',
  ],
  authors: [{ name: 'Sanskar Hotel' }],
  openGraph: {
    title: 'Sanskar Hotel - Luxury & Elegance Redefined',
    description: 'Experience unparalleled luxury and comfort at Sanskar Hotel',
    url: 'https://sanskarhotel.com',
    siteName: 'Sanskar Hotel',
    type: 'website',
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Sanskar Hotel - Luxury Resort',
      },
      {
        url: '/logo.png',
        width: 1024,
        height: 1024,
        alt: 'Sanskar Hotel Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanskar Hotel - Luxury & Elegance Redefined',
    description: 'Experience unparalleled luxury and comfort at Sanskar Hotel',
    images: ['/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: 'Sanskar Hotel',
    description:
      'Luxury hotel in Pachmarhi offering world-class amenities and exceptional service',
    url: 'https://sanskarhotel.com',
    telephone: '+91 98765 43210',
    email: 'info@sanskarhotel.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Subhash Road, near SBI',
      addressLocality: 'Pachmarhi',
      addressRegion: 'Madhya Pradesh',
      postalCode: '461881',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '22.4674',
      longitude: '78.4337',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1250',
      bestRating: '5',
    },
    priceRange: '$$$$',
    starRating: {
      '@type': 'Rating',
      ratingValue: '5',
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Free WiFi',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Swimming Pool',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Luxury Spa',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Fine Dining Restaurant',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Room Types',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'HotelRoom',
            name: 'Deluxe Room',
            description: 'Luxurious room with king size bed and city view',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'HotelRoom',
            name: 'Executive Suite',
            description: 'Spacious suite with living area and ocean view',
          },
        },
      ],
    },
  }

  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/faviconlogo.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/faviconlogo.png'
        />
        <link rel='apple-touch-icon' sizes='180x180' href='/faviconlogo.png' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} antialiased bg-background text-text font-sans`}
        suppressHydrationWarning={true}
      >
        {children}
        <Toaster />
      </body>
    </html>
  )
}
