'use client'

import { useState } from 'react'
import { EpisodeCard } from '@/components/episodes/EpisodeCard'
import { EpisodeFilters } from '@/components/episodes/EpisodeFilters'
import { track } from '@/components/analytics/track'

// Sample episodes data - in production this would come from Sanity
const allEpisodes = [
  {
    slug: 'energy-mega-merger',
    title: 'The $50B Energy Merger',
    guest: 'Sarah Mitchell',
    summary: 'How regulatory pressure shaped the largest energy deal of the decade',
    cover: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/11ad36e556-99d5bee9a3e4a288379e.png',
    tags: ['M&A', 'Energy', 'Regulatory'],
    duration: '52 min',
    dealValue: '$50B'
  },
  {
    slug: 'impossible-negotiation',
    title: 'The Impossible Negotiation',
    guest: 'Ambassador Chen',
    summary: 'Behind the scenes of a historic peace agreement',
    cover: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/a4378feaa9-7bcfb3802d94c13d5b68.png',
    tags: ['Peace Treaty', 'Diplomacy'],
    duration: '48 min',
    dealValue: 'Historic'
  },
  {
    slug: 'unicorn-exit',
    title: 'The Unicorn Exit',
    guest: 'Marcus Rodriguez',
    summary: 'From startup to $2B acquisition in 18 months',
    cover: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/2db28bf62d-1f547335f77885c34445.png',
    tags: ['Tech Acquisition', 'AI/ML'],
    duration: '38 min',
    dealValue: '$2B'
  },
  {
    slug: 'pipeline-gambit',
    title: 'The Pipeline Gambit',
    guest: 'Viktor Petrov',
    summary: 'Navigating geopolitics to secure critical energy infrastructure',
    cover: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/6c347048e4-2d166f82beeceb6167eb.png',
    tags: ['Energy', 'Infrastructure'],
    duration: '45 min',
    dealValue: '$8B'
  },
  {
    slug: 'streaming-wars',
    title: 'The Streaming Wars',
    guest: 'Jessica Park',
    summary: 'How exclusive content rights reshaped the entertainment industry',
    cover: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/3ec335c1b0-a14e8a50e295e01fffde.png',
    tags: ['Media Rights', 'Entertainment'],
    duration: '41 min',
    dealValue: '$1.2B'
  },
  {
    slug: 'cure-consolidation',
    title: 'The Cure Consolidation',
    guest: 'Dr. Michael Chen',
    summary: 'When two biotech giants merged to accelerate breakthrough treatments',
    cover: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/32ee961d21-59a59c4b8f8c5bc05059.png',
    tags: ['Pharma', 'Healthcare'],
    duration: '55 min',
    dealValue: '$15B'
  }
]

export default function EpisodesPage() {
  const [visibleEpisodes, setVisibleEpisodes] = useState(6) // Show 6 episodes initially
  const episodesToShow = allEpisodes.slice(0, visibleEpisodes)

  const handleLoadMore = () => {
    const newCount = Math.min(visibleEpisodes + 6, allEpisodes.length)
    setVisibleEpisodes(newCount)
    track({ name: 'episode_search', props: { search_term: 'load_more', results_count: newCount } })
  }

  return (
    <>
      {/* Episodes Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Episodes Library</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore the world&apos;s most transformational deals. Filter by sector, region, and deal type to find the negotiations that changed everything.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <EpisodeFilters />

      {/* Episodes Grid */}
      <section className="bg-gray-950 py-12">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Showing {episodesToShow.length} of {allEpisodes.length} episodes</span>
              <div className="flex items-center space-x-2">
                <button className="p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
                  <i className="fa-solid fa-th-large"></i>
                </button>
                <button className="p-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors">
                  <i className="fa-solid fa-list"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {episodesToShow.map((episode) => (
              <EpisodeCard key={episode.slug} ep={episode} />
            ))}
          </div>
          
          {visibleEpisodes < allEpisodes.length && (
            <div className="flex justify-center mt-12">
              <button 
                onClick={handleLoadMore}
                className="px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                Load More Episodes
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Metrics */}
      <section className="bg-gray-900/50 py-12 border-y border-gray-800/50">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">{allEpisodes.length}</div>
              <div className="text-sm text-gray-400">Total Episodes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">$2.1T</div>
              <div className="text-sm text-gray-400">Combined Deal Value</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">28</div>
              <div className="text-sm text-gray-400">Countries Featured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">156K</div>
              <div className="text-sm text-gray-400">Total Watch Hours</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
