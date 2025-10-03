'use client'

import { useState } from 'react'
import { track } from '@/components/analytics/track'

export function EpisodeFilters() {
  const [activeFilter, setActiveFilter] = useState('All')

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter)
    track({ name: 'filter_applied', props: { filter_type: filter.toLowerCase() } })
  }

  return (
    <section className="bg-gray-950 py-8 border-b border-gray-800/50">
      <div className="container mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <input 
              type="text" 
              placeholder="Search episodes, guests, or deal types..." 
              className="w-full px-6 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors pr-12"
              onChange={(e) => {
                if (e.target.value.length > 2) {
                  track({ name: 'episode_search', props: { search_term: e.target.value, results_count: 6 } })
                }
              }}
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
              <i className="fa-solid fa-search"></i>
            </button>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {['All', 'M&A', 'Peace Treaties', 'Energy', 'Tech', 'Media Rights'].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-white text-gray-950'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
            <div className="relative">
              <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all flex items-center">
                More <i className="fa-solid fa-chevron-down ml-2 text-sm"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-6 text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">Sort by:</span>
            <select className="bg-gray-800 border border-gray-600 rounded px-3 py-1 text-white focus:outline-none focus:border-white">
              <option>Latest</option>
              <option>Most Watched</option>
              <option>Deal Size</option>
              <option>Duration</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">Region:</span>
            <select className="bg-gray-800 border border-gray-600 rounded px-3 py-1 text-white focus:outline-none focus:border-white">
              <option>All Regions</option>
              <option>North America</option>
              <option>Europe</option>
              <option>Asia Pacific</option>
              <option>Middle East</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">Deal Size:</span>
            <select className="bg-gray-800 border border-gray-600 rounded px-3 py-1 text-white focus:outline-none focus:border-white">
              <option>Any Size</option>
              <option>$1M - $100M</option>
              <option>$100M - $1B</option>
              <option>$1B+</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  )
}

