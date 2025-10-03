export default function PlaybooksPage() {
  return (
    <>
      {/* Playbooks Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Negotiation Playbooks</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Master the art of transformational negotiations with our comprehensive 
              collection of proven strategies, frameworks, and tactics from the world&apos;s 
              most successful dealmakers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Playbooks */}
      <section className="bg-gray-950 py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8">Featured Playbooks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Stakeholder Mapping Framework",
                description: "Learn how to identify, analyze, and influence all parties in complex negotiations.",
                category: "Framework",
                difficulty: "Intermediate",
                duration: "45 min read",
                downloads: "2.3K"
              },
              {
                title: "Crisis Negotiation Tactics",
                description: "Master the art of negotiating under extreme pressure and time constraints.",
                category: "Tactics",
                difficulty: "Advanced",
                duration: "60 min read",
                downloads: "1.8K"
              },
              {
                title: "Cross-Cultural Deal Making",
                description: "Navigate cultural differences and build trust in international negotiations.",
                category: "Strategy",
                difficulty: "Intermediate",
                duration: "50 min read",
                downloads: "1.5K"
              },
              {
                title: "The Regulatory Chess Game",
                description: "How to navigate complex regulatory environments in high-stakes deals.",
                category: "Framework",
                difficulty: "Advanced",
                duration: "70 min read",
                downloads: "1.2K"
              },
              {
                title: "Building Consensus in Large Deals",
                description: "Techniques for getting multiple stakeholders to agree on complex terms.",
                category: "Strategy",
                difficulty: "Expert",
                duration: "55 min read",
                downloads: "980"
              },
              {
                title: "Post-Deal Integration Playbook",
                description: "Ensure successful implementation after closing transformational deals.",
                category: "Implementation",
                difficulty: "Intermediate",
                duration: "40 min read",
                downloads: "1.1K"
              }
            ].map((playbook, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {playbook.category}
                  </span>
                  <span className="text-gray-400 text-sm">{playbook.difficulty}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{playbook.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{playbook.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span><i className="fa-solid fa-clock mr-1"></i>{playbook.duration}</span>
                  <span><i className="fa-solid fa-download mr-1"></i>{playbook.downloads}</span>
                </div>
                
                <button className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  Download Playbook
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Playbook Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Frameworks", count: "12", icon: "fa-sitemap", description: "Structured approaches to complex negotiations" },
              { name: "Tactics", count: "18", icon: "fa-chess", description: "Specific techniques for different scenarios" },
              { name: "Strategy", count: "15", icon: "fa-brain", description: "High-level planning and positioning" },
              { name: "Implementation", count: "8", icon: "fa-cogs", description: "Post-deal execution and integration" }
            ].map((category, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors cursor-pointer">
                <i className={`fa-solid ${category.icon} text-3xl text-red-600 mb-4`}></i>
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{category.description}</p>
                <p className="text-gray-500 text-sm">{category.count} playbooks</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Master the Art of Negotiation</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of dealmakers who have transformed their negotiation skills 
            with our proven frameworks and strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-gray-950 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
              Get All Playbooks
            </button>
            <button className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors">
              Join Community
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

