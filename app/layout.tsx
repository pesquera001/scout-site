import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scout\'s Window Cleaning | Professional Window Cleaning Services',
  description: 'Honest work, minimal aesthetics, and impossibly clean windows. Professional window cleaning services for residential and commercial properties. Get your free quote today.',
  keywords: 'window cleaning, professional window cleaning, residential window cleaning, commercial window cleaning, window washing, building maintenance',
  authors: [{ name: 'Scout\'s Window Cleaning' }],
  creator: 'Scout\'s Window Cleaning',
  publisher: 'Scout\'s Window Cleaning',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://scout-window-cleaning.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Scout\'s Window Cleaning | Professional Window Cleaning Services',
    description: 'Honest work, minimal aesthetics, and impossibly clean windows. Professional window cleaning services for residential and commercial properties.',
    url: 'https://scout-window-cleaning.vercel.app',
    siteName: 'Scout\'s Window Cleaning',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Luxury floor-to-ceiling windows with pristine glass',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scout\'s Window Cleaning | Professional Window Cleaning Services',
    description: 'Honest work, minimal aesthetics, and impossibly clean windows. Professional window cleaning services for residential and commercial properties.',
    images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#708B91" />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        
        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Scout's Window Cleaning",
              "description": "Professional window cleaning services for residential and commercial properties",
              "url": "https://scout-window-cleaning.vercel.app",
              "telephone": "+1-555-123-CLEAN",
              "email": "hello@scout.work",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Your City",
                "addressRegion": "Your State",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "YOUR_LATITUDE",
                "longitude": "YOUR_LONGITUDE"
              },
              "openingHours": "Mo-Fr 08:00-18:00",
              "priceRange": "$$",
              "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
              "sameAs": [
                "https://www.facebook.com/scoutwindowcleaning",
                "https://www.instagram.com/scoutwindowcleaning"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
} 