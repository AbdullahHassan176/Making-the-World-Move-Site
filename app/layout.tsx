import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Making the World Move - The Art of the Deal',
  description: 'On-location conversations with operators who close complex deals. Master the art of transformational negotiations.',
  keywords: ['deals', 'negotiations', 'business', 'M&A', 'peace treaties', 'energy contracts'],
  authors: [{ name: 'Abdullah Hassan' }],
  creator: 'Making the World Move',
  publisher: 'Making the World Move',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'Making the World Move - The Art of the Deal',
    description: 'On-location conversations with operators who close complex deals.',
    url: '/',
    siteName: 'Making the World Move',
    images: [
      {
        url: '/og/og-template.png',
        width: 1200,
        height: 630,
        alt: 'Making the World Move - The Art of the Deal',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Making the World Move - The Art of the Deal',
    description: 'On-location conversations with operators who close complex deals.',
    images: ['/og/og-template.png'],
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
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='white'/><text x='16' y='22' font-family='Arial,sans-serif' font-size='14' font-weight='bold' text-anchor='middle' fill='black'>MWM</text></svg>" />
        <link rel="shortcut icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='white'/><text x='16' y='22' font-family='Arial,sans-serif' font-size='14' font-weight='bold' text-anchor='middle' fill='black'>MWM</text></svg>" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
        <AnalyticsProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </AnalyticsProvider>
      </body>
    </html>
  )
}
