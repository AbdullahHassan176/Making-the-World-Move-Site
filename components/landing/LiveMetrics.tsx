'use client'

import { useEffect, useState } from 'react'

type Metrics = { 
  episodes: number; 
  subscribers: number; 
  watchHours: number; 
  guests: number; 
  countries: number; 
}

export function LiveMetrics({ initial }: { initial?: Partial<Metrics> }) {
  const [metrics, setMetrics] = useState<Metrics>({
    episodes: initial?.episodes ?? 24,
    subscribers: initial?.subscribers ?? 12847,
    watchHours: initial?.watchHours ?? 156,
    guests: initial?.guests ?? 18,
    countries: initial?.countries ?? 12,
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounters()
        }
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById('metrics-bar')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const counters = document.querySelectorAll('.counter-animation')
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target') || '0')
      const increment = target / 100
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        counter.textContent = Math.floor(current).toLocaleString()
      }, 20)
    })
  }

  return (
    <section id="metrics-bar" className="bg-gray-900/80 backdrop-blur-sm py-8 border-y border-gray-800/50">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="text-center">
            <div 
              className="text-3xl font-bold text-white counter-animation" 
              data-target={metrics.episodes}
            >
              {metrics.episodes}
            </div>
            <div className="text-sm text-gray-400 font-medium">Episodes Published</div>
          </div>
          <div className="text-center">
            <div 
              className="text-3xl font-bold text-white counter-animation" 
              data-target={metrics.subscribers}
            >
              {metrics.subscribers}
            </div>
            <div className="text-sm text-gray-400 font-medium">Newsletter Subscribers</div>
          </div>
          <div className="text-center">
            <div 
              className="text-3xl font-bold text-white counter-animation" 
              data-target={metrics.watchHours}
            >
              {metrics.watchHours}
            </div>
            <div className="text-sm text-gray-400 font-medium">Total Watch Hours</div>
          </div>
          <div className="text-center">
            <div 
              className="text-3xl font-bold text-white counter-animation" 
              data-target={metrics.guests}
            >
              {metrics.guests}
            </div>
            <div className="text-sm text-gray-400 font-medium">Guests Confirmed</div>
          </div>
          <div className="text-center">
            <div 
              className="text-3xl font-bold text-white counter-animation" 
              data-target={metrics.countries}
            >
              {metrics.countries}
            </div>
            <div className="text-sm text-gray-400 font-medium">Countries Covered</div>
          </div>
        </div>
      </div>
    </section>
  )
}
