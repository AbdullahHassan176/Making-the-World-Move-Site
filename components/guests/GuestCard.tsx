'use client'

import Link from 'next/link'
import { track } from '@/components/analytics/track'

interface GuestCardProps {
  guest: {
    slug: string
    name: string
    role: string
    organization: string
    bio: string
    headshot: string
    dealType: string
    region: string
    episodeSlug: string
  }
}

export function GuestCard({ guest }: GuestCardProps) {
  const handleClick = () => {
    track({ name: 'guest_profile_click', props: { guest_id: guest.slug } })
  }

  return (
    <Link href={`/guests/${guest.slug}`} className="group" onClick={handleClick}>
      <article className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-colors">
        <div className="aspect-square relative">
          <img 
            src={guest.headshot} 
            alt={guest.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          <div className="absolute top-4 left-4">
            <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-medium">
              {guest.dealType}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="bg-gray-900/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
              {guest.region}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors">
            {guest.name}
          </h3>
          <p className="text-sm text-gray-400 mb-2">{guest.role}</p>
          <p className="text-sm text-gray-500 mb-4">{guest.organization}</p>
          <p className="text-sm text-gray-300 mb-4 line-clamp-3">{guest.bio}</p>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">Featured Episode</span>
            <div className="flex items-center text-sm text-gray-400 group-hover:text-white transition-colors">
              <span>Watch Episode</span>
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
