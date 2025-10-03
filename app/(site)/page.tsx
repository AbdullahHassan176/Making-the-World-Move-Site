import { Hero } from '@/components/landing/Hero'
import { LiveMetrics } from '@/components/landing/LiveMetrics'
import { ProgressRing } from '@/components/landing/ProgressRing'
import { EpisodeCard } from '@/components/episodes/EpisodeCard'

// Sample data - in production this would come from Sanity
const featuredEpisodes = [
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
  }
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <LiveMetrics />
      <ProgressRing filmed={24} released={15} />
      
      {/* Featured Episodes Section */}
      <section className="bg-gray-950 py-20">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Latest Episodes</h2>
            <a 
              href="/episodes" 
              className="text-gray-400 hover:text-white transition-colors flex items-center"
            >
              View All <i className="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEpisodes.map((episode) => (
              <EpisodeCard key={episode.slug} ep={episode} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Movement</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Get the weekly Deal Dossier: one real case, one tool, one clause. 
            Master the art of transformational deals.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
              />
              <button className="px-8 py-4 bg-white text-gray-950 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">Join 12,847 operators and dealmakers</p>
          </div>
        </div>
      </section>
    </>
  )
}
