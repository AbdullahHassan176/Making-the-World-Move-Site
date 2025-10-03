export default function MissionPage() {
  return (
    <>
      {/* Mission Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Our Mission</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              To democratize the art of transformational deal-making by sharing the strategies, 
              tactics, and mindsets of the world&apos;s most successful negotiators.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Content */}
      <section className="bg-gray-950 py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why We Exist</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Complex deals shape our world—from peace treaties that end decades of conflict 
                  to energy agreements that power entire nations. Yet the art of closing these 
                  transformational deals remains shrouded in mystery.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Abdullah Hassan believes that by sharing the real stories, strategies, and lessons learned 
                  from the world&apos;s most impactful negotiators—including his own experience leading 
                  deals worth over $50B—he can help the next generation of dealmakers master this critical skill.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                    <span className="text-gray-300">Transparency in sharing real negotiation tactics</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                    <span className="text-gray-300">Respect for the complexity of high-stakes deals</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                    <span className="text-gray-300">Commitment to ethical deal-making practices</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                    <span className="text-gray-300">Focus on deals that create positive impact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">$2.1T</div>
                <div className="text-gray-400">Combined Deal Value</div>
                <p className="text-sm text-gray-500 mt-2">From episodes we&apos;ve covered</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">28</div>
                <div className="text-gray-400">Countries Represented</div>
                <p className="text-sm text-gray-500 mt-2">Global deal coverage</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">12,847</div>
                <div className="text-gray-400">Community Members</div>
                <p className="text-sm text-gray-500 mt-2">Active dealmakers learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Movement</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Become part of a community dedicated to mastering the art of transformational negotiations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-gray-950 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
              Watch Episodes
            </button>
            <button className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors">
              Join Newsletter
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
