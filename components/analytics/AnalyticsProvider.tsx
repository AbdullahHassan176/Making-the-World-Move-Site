'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    dataLayer: any[]
    posthog: any
  }
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    // Initialize dataLayer for GA4
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      
      // Initialize PostHog only if key is available and not 'demo'
      const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
      if (posthogKey && posthogKey !== 'demo') {
        import('posthog-js').then((posthog) => {
          posthog.default.init(posthogKey, {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
            loaded: (posthog) => {
              if (process.env.NODE_ENV === 'development') {
                posthog.debug()
              }
            }
          })
          window.posthog = posthog.default
        }).catch((error) => {
          console.warn('PostHog initialization failed:', error)
        })
      }
    }
  }, [isMounted])

  return (
    <>
      {/* Google Analytics */}
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID !== 'demo' && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `}
          </Script>
        </>
      )}
      {children}
    </>
  )
}
