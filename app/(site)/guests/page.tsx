import { GuestCard } from '@/components/guests/GuestCard'

// Sample guests data - in production this would come from Sanity
const guests = [
  {
    slug: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    role: 'CEO',
    organization: 'EnergyCore',
    bio: 'Closed the largest energy sector merger in history - $50B deal that reshaped the renewable energy landscape.',
    headshot: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg',
    dealType: 'M&A',
    region: 'North America',
    episodeSlug: 'energy-mega-merger'
  },
  {
    slug: 'ambassador-chen',
    name: 'Ambassador Chen',
    role: 'Former UN Diplomat',
    organization: 'United Nations',
    bio: 'Orchestrated a historic peace agreement between two nations after decades of conflict through masterful diplomacy.',
    headshot: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg',
    dealType: 'Peace Treaty',
    region: 'Asia Pacific',
    episodeSlug: 'impossible-negotiation'
  },
  {
    slug: 'marcus-rodriguez',
    name: 'Marcus Rodriguez',
    role: 'Founder',
    organization: 'TechFlow AI',
    bio: 'Negotiated a $2B acquisition of his startup in record time, setting new standards for tech valuations.',
    headshot: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg',
    dealType: 'Tech Acquisition',
    region: 'North America',
    episodeSlug: 'unicorn-exit'
  },
  {
    slug: 'elena-volkov',
    name: 'Elena Volkov',
    role: 'Energy Minister',
    organization: 'European Union',
    bio: 'Secured a multi-billion dollar energy partnership that transformed her country\'s economic landscape.',
    headshot: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg',
    dealType: 'Energy Contract',
    region: 'Europe',
    episodeSlug: 'pipeline-gambit'
  },
  {
    slug: 'david-kim',
    name: 'David Kim',
    role: 'Investment Banker',
    organization: 'Goldman Sachs',
    bio: 'Led the largest tech IPO in Asian markets, raising $15B for a revolutionary fintech platform.',
    headshot: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg',
    dealType: 'IPO',
    region: 'Asia Pacific',
    episodeSlug: 'digital-revolution'
  },
  {
    slug: 'maria-santos',
    name: 'Maria Santos',
    role: 'Healthcare Executive',
    organization: 'PharmaCorp',
    bio: 'Structured a groundbreaking pharmaceutical joint venture that accelerated global vaccine distribution.',
    headshot: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg',
    dealType: 'Joint Venture',
    region: 'Latin America',
    episodeSlug: 'cure-consolidation'
  }
]

export default function GuestsPage() {
  return (
    <>
      {/* Guests Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">
              <span className="gradient-text">Meet the Dealmakers</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The world&apos;s most influential negotiators, CEOs, and statesmen who have closed 
              transformational deals. Each guest brings decades of experience in high-stakes negotiations.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-gray-950 py-8 border-b border-gray-800">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="flex items-center space-x-2 bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-sm hover:bg-gray-700 transition-colors">
                  <i className="fa-solid fa-briefcase"></i>
                  <span>All Sectors</span>
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
              </div>
              
              <div className="relative">
                <button className="flex items-center space-x-2 bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-sm hover:bg-gray-700 transition-colors">
                  <i className="fa-solid fa-globe"></i>
                  <span>All Regions</span>
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
              </div>
              
              <div className="relative">
                <button className="flex items-center space-x-2 bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-sm hover:bg-gray-700 transition-colors">
                  <i className="fa-solid fa-chart-line"></i>
                  <span>Deal Type</span>
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search guests..." 
                  className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 pl-10 text-sm focus:outline-none focus:border-white transition-colors w-64"
                />
                <i className="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              
              <button className="flex items-center space-x-2 bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-sm hover:bg-gray-700 transition-colors">
                <i className="fa-solid fa-sort"></i>
                <span>Featured</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Guests Grid */}
      <section className="bg-gray-950 py-16">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {guests.map((guest) => (
              <GuestCard key={guest.slug} guest={guest} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors">
              Load More Guests
            </button>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Ask the Dealmakers</h2>
              <p className="text-xl text-gray-300">
                Have a burning question about negotiation tactics, deal structures, or high-stakes decision making? 
                Submit your question and our community will vote on the most compelling ones.
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-xl p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors" 
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email (optional)</label>
                    <input 
                      type="email" 
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors" 
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Select Guest (optional)</label>
                  <select className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors">
                    <option>Any Guest</option>
                    {guests.map((guest) => (
                      <option key={guest.slug} value={guest.slug}>{guest.name}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Your Question</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition-colors resize-none" 
                    placeholder="What would you like to know about deal making, negotiation tactics, or high-stakes decision making?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-white text-gray-950 font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Submit Question
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
