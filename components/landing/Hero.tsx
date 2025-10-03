'use client'

import Link from 'next/link'
import { useState } from 'react'
import { trackHeroCTA } from '@/components/analytics/track'

export function Hero() {
  const [showNewsletterModal, setShowNewsletterModal] = useState(false)
  const [showGuestModal, setShowGuestModal] = useState(false)

  const handleWatchEpisodes = () => {
    trackHeroCTA('watch')
    // Navigate to episodes page
    if (typeof window !== 'undefined') {
      window.location.href = '/episodes'
    }
  }

  const handleJoinMovement = () => {
    trackHeroCTA('subscribe')
    setShowNewsletterModal(true)
  }

  const handleNominateGuest = () => {
    trackHeroCTA('nominate')
    setShowGuestModal(true)
  }

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image - Abdullah Hassan's professional portrait */}
          <div className="absolute inset-0">
            <img 
              className="w-full h-full object-cover" 
              src="/images/abdullah-hassan-hero.jpg" 
              alt="cinematic dark portrait of professional businessman Abdullah Hassan in suit, dramatic lighting, corporate authority, confidence" 
            />
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-20">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">The Art of the Deal.</span><br />
              <span className="text-white">The Power to Move the World.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
              A show about closing complex deals—stakeholders, pressure points, and the moment it crosses the line. 
              Join the movement to master the art of transformational negotiations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <button 
                onClick={handleWatchEpisodes}
                className="btn-primary"
              >
                <i className="fa-solid fa-play mr-3 group-hover:scale-110 transition-transform"></i>
                Watch Episodes
              </button>
              <button 
                onClick={handleJoinMovement}
                className="btn-secondary"
              >
                Join the Movement
              </button>
              <button 
                onClick={handleNominateGuest}
                className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border border-gray-600 hover:border-white transition-all duration-300"
              >
                Nominate a Guest
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Modal */}
      {showNewsletterModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl p-8 max-w-md w-full border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Join the Movement</h2>
              <button 
                onClick={() => setShowNewsletterModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fa-solid fa-times text-xl"></i>
              </button>
            </div>
            
            <p className="text-gray-300 mb-6">
              Get exclusive access to new episodes, behind-the-scenes content, and negotiation insights.
            </p>
            
            <form className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Your name (optional)" 
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-white text-gray-950 font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Subscribe Now
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      )}

      {/* Guest Nomination Modal */}
      {showGuestModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl p-8 max-w-lg w-full border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Nominate a Guest</h2>
              <button 
                onClick={() => setShowGuestModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fa-solid fa-times text-xl"></i>
              </button>
            </div>
            
            <p className="text-gray-300 mb-6">
              Know someone who has closed a transformational deal? Nominate them to be featured on the show.
            </p>
            
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Guest's name" 
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Their role/title" 
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Company/organization" 
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Tell us about the deal they closed and why it should be featured..."
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none"
                ></textarea>
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your email (for follow-up)" 
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-white text-gray-950 font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Submit Nomination
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
