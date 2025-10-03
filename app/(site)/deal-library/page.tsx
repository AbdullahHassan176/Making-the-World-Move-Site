export default function DealLibraryPage() {
  return (
    <>
      {/* Deal Library Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Deal Library</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive database of transformational deals, negotiation frameworks, 
              and deal structures from around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-gray-950 py-8 border-b border-gray-800/50">
        <div className="container mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <input 
                type="text" 
                placeholder="Search deals, companies, or deal types..." 
                className="w-full px-6 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors pr-12"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                <i className="fa-solid fa-search"></i>
              </button>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['All Deals', 'M&A', 'IPO', 'Joint Ventures', 'Peace Treaties', 'Energy Deals'].map((filter) => (
                <button
                  key={filter}
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all font-medium"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Deals */}
      <section className="bg-gray-950 py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8">Featured Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample deal cards */}
            {[
              {
                title: "The $50B Energy Merger",
                company: "EnergyCore & PowerGrid",
                value: "$50B",
                type: "M&A",
                year: "2023",
                description: "Largest renewable energy merger in history, reshaping the global energy landscape."
              },
              {
                title: "Historic Peace Agreement",
                company: "Nation A & Nation B",
                value: "Historic",
                type: "Peace Treaty",
                year: "2023",
                description: "Ended decades of conflict through masterful diplomatic negotiations."
              },
              {
                title: "Tech Unicorn Exit",
                company: "TechFlow AI",
                value: "$2B",
                type: "Acquisition",
                year: "2023",
                description: "Record-breaking AI startup acquisition in just 18 months."
              }
            ].map((deal, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {deal.type}
                  </span>
                  <span className="text-gray-400 text-sm">{deal.year}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{deal.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{deal.company}</p>
                <p className="text-gray-300 text-sm mb-4">{deal.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{deal.value}</span>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deal Categories */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Deal Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Mergers & Acquisitions", count: "156", icon: "fa-handshake" },
              { name: "Initial Public Offerings", count: "89", icon: "fa-chart-line" },
              { name: "Joint Ventures", count: "67", icon: "fa-users" },
              { name: "Peace Treaties", count: "23", icon: "fa-dove" },
              { name: "Energy Deals", count: "134", icon: "fa-bolt" },
              { name: "Tech Acquisitions", count: "201", icon: "fa-microchip" },
              { name: "Healthcare Mergers", count: "78", icon: "fa-heart-pulse" },
              { name: "Media Rights", count: "45", icon: "fa-film" }
            ].map((category, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors cursor-pointer">
                <i className={`fa-solid ${category.icon} text-3xl text-red-600 mb-4`}></i>
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-400">{category.count} deals</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Contribute to the Library</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Know of a transformational deal that should be featured? Help us build the world&apos;s 
            most comprehensive database of high-impact negotiations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-gray-950 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
              Submit a Deal
            </button>
            <button className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors">
              Download Dataset
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

