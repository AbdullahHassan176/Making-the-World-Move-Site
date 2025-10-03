'use client'

import Link from 'next/link'
import { track } from '@/components/analytics/track'

interface EpisodeCardProps {
  ep: {
    slug: string
    title: string
    guest: string
    summary: string
    cover: string
    tags: string[]
    duration?: string
    dealValue?: string
  }
}

export function EpisodeCard({ ep }: EpisodeCardProps) {
  const handleClick = () => {
    track({ name: 'episode_click', props: { episode_id: ep.slug, episode_title: ep.title, source: 'episode_card' } })
  }

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    track({ name: 'episode_play', props: { episodeId: ep.slug, source: 'episode_card_play_button' } })
    // Navigate to episode page
    if (typeof window !== 'undefined') {
      window.location.href = `/episodes/${ep.slug}`
    }
  }

  return (
    <Link href={`/episodes/${ep.slug}`} className="group block" onClick={handleClick}>
      <article className="episode-card bg-gray-900 rounded-xl overflow-hidden">
        <div className="aspect-video relative">
          <img 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
            src={ep.cover} 
            alt={`${ep.title} - ${ep.guest}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          <div className="absolute top-4 left-4">
            <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-medium">
              {ep.tags[0]}
            </span>
          </div>
          {ep.duration && (
            <div className="absolute top-4 right-4">
              <span className="bg-gray-900/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
                {ep.duration}
              </span>
            </div>
          )}
          {ep.dealValue && (
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between">
                <span className="text-white text-sm font-medium">{ep.dealValue}</span>
                <button 
                  onClick={handlePlayClick}
                  className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors"
                >
                  <i className="fa-solid fa-play text-white text-sm"></i>
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-300 transition-colors">
            {ep.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4">{ep.summary}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{ep.guest}</span>
            {ep.duration && <span>{ep.duration}</span>}
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {ep.tags.map(tag => (
              <span 
                key={tag} 
                className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}
