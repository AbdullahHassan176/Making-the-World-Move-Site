'use client'

import Link from 'next/link'
import { useState } from 'react'
import { trackHeroCTA } from '@/components/analytics/track'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-950/95 backdrop-blur-sm text-white p-6 flex items-center justify-between fixed w-full z-50 border-b border-gray-800/50">
        <div className="flex items-center space-x-12">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <span className="gradient-text">Making the World Move</span>
          </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/episodes" className="text-sm font-medium hover:text-gray-300 transition-colors">
            Episodes
          </Link>
          <Link href="/guests" className="text-sm font-medium hover:text-gray-300 transition-colors">
            Guests
          </Link>
          <Link href="/deal-library" className="text-sm font-medium hover:text-gray-300 transition-colors">
            Deal Library
          </Link>
          <Link href="/playbooks" className="text-sm font-medium hover:text-gray-300 transition-colors">
            Playbooks
          </Link>
          <Link href="/company" className="text-sm font-medium hover:text-gray-300 transition-colors">
            Company
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="/mission" className="text-sm font-medium hover:text-gray-300 transition-colors">
            Mission
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-gray-300 transition-colors">
            Contact
          </Link>
          <Link href="/partnerships" className="text-sm font-medium hover:text-gray-300 transition-colors">
            Partnerships
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-white hover:text-gray-300 transition-colors">
          <i className="fa-solid fa-search text-lg"></i>
        </button>
        <button 
          onClick={() => trackHeroCTA('subscribe')}
          className="px-6 py-2 bg-white text-gray-950 font-medium rounded-lg hover:bg-gray-200 transition-colors"
        >
          Join Movement
        </button>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden text-white hover:text-gray-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-950 border-b border-gray-800 md:hidden">
          <div className="px-6 py-4 space-y-4">
            <Link href="/episodes" className="block text-sm font-medium hover:text-gray-300 transition-colors">
              Episodes
            </Link>
            <Link href="/guests" className="block text-sm font-medium hover:text-gray-300 transition-colors">
              Guests
            </Link>
            <Link href="/deal-library" className="block text-sm font-medium hover:text-gray-300 transition-colors">
              Deal Library
            </Link>
            <Link href="/playbooks" className="block text-sm font-medium hover:text-gray-300 transition-colors">
              Playbooks
            </Link>
            <Link href="/company" className="block text-sm font-medium hover:text-gray-300 transition-colors">
              Company
            </Link>
            <Link href="/about" className="block text-sm font-medium hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="/mission" className="block text-sm font-medium hover:text-gray-300 transition-colors">
              Mission
            </Link>
            <Link href="/contact" className="block text-sm font-medium hover:text-gray-300 transition-colors">
              Contact
            </Link>
            <Link href="/partnerships" className="block text-sm font-medium hover:text-gray-300 transition-colors">
              Partnerships
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
