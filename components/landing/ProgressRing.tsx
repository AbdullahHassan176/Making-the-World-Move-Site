'use client'

import { useEffect, useState } from 'react'

interface ProgressRingProps {
  filmed: number
  released: number
}

export function ProgressRing({ filmed = 24, released = 15 }: ProgressRingProps) {
  const [progress, setProgress] = useState(0)
  const percentage = Math.round((released / filmed) * 100)
  const circumference = 2 * Math.PI * 50 // radius = 50
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage)
    }, 500)
    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <section className="bg-gray-950 py-16">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">What We&apos;re Building</h2>
            <p className="text-gray-400 max-w-lg">
              Season 1 is in production. Follow our journey as we film and release episodes 
              featuring the world&apos;s most impactful dealmakers.
            </p>
          </div>
          
          <div className="relative flex items-center justify-center">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
              <circle 
                cx="60" 
                cy="60" 
                r="50" 
                fill="none" 
                stroke="#374151" 
                strokeWidth="8"
              />
              <circle 
                cx="60" 
                cy="60" 
                r="50" 
                fill="none" 
                stroke="#ffffff" 
                strokeWidth="8" 
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                className="progress-ring"
                style={{
                  strokeDashoffset: strokeDashoffset,
                  transition: 'stroke-dashoffset 0.5s ease-in-out'
                }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold">{percentage}%</div>
                <div className="text-xs text-gray-400">Complete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
