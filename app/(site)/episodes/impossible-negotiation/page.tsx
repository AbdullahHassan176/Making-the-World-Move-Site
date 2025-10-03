export default function ImpossibleNegotiationPage() {
  return (
    <>
      {/* Episode Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-red-600 text-white text-sm px-4 py-2 rounded-full font-medium">Peace Treaty</span>
              <span className="bg-gray-800 text-gray-300 text-sm px-4 py-2 rounded-full">Diplomacy</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">The Impossible Negotiation</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Behind the scenes of a historic peace agreement. Ambassador Chen reveals 
              the diplomatic strategies that ended decades of conflict between two nations.
            </p>
            
            <div className="flex items-center space-x-8 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-user text-xl text-gray-400"></i>
                </div>
                <div>
                  <div className="font-semibold">Ambassador Chen</div>
                  <div className="text-sm text-gray-400">Former UN Diplomat</div>
                </div>
              </div>
              <div className="text-gray-400">
                <i className="fa-solid fa-clock mr-2"></i>
                48 min
              </div>
              <div className="text-gray-400">
                <i className="fa-solid fa-dove mr-2"></i>
                Historic
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-gray-950 font-semibold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                <i className="fa-solid fa-play mr-3"></i>
                Watch Episode
              </button>
              <button className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors">
                <i className="fa-solid fa-download mr-3"></i>
                Download Audio
              </button>
              <button className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border border-gray-600 hover:border-white transition-colors">
                <i className="fa-solid fa-share mr-3"></i>
                Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Episode Content */}
      <section className="bg-gray-950 py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Episode Overview</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Ambassador Chen takes us inside the most challenging diplomatic negotiation of his career. 
                    This episode reveals the strategies, setbacks, and breakthrough moments that led to a 
                    historic peace agreement between two nations that had been in conflict for decades.
                  </p>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    From secret backchannel communications to public pressure tactics, Ambassador Chen 
                    shares the complete story of how impossible negotiations became possible through 
                    masterful diplomacy and strategic thinking.
                  </p>
                  
                  <h3 className="text-2xl font-semibold mb-4">Key Topics Covered:</h3>
                  <ul className="text-gray-300 space-y-2 mb-8">
                    <li>• Building trust in high-stakes negotiations</li>
                    <li>• Managing multiple stakeholders with conflicting interests</li>
                    <li>• Crisis management during negotiations</li>
                    <li>• The role of public opinion in diplomatic deals</li>
                    <li>• Long-term relationship building</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Episode Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration</span>
                      <span className="text-white">48 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Deal Type</span>
                      <span className="text-white">Peace Treaty</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Industry</span>
                      <span className="text-white">Diplomacy</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Year</span>
                      <span className="text-white">2023</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Guest Bio</h3>
                  <p className="text-gray-300 text-sm">
                    Ambassador Chen is a former UN diplomat with over 20 years of experience in 
                    international relations. He has facilitated peace agreements in multiple 
                    conflict zones and is recognized as one of the world&apos;s leading 
                    diplomatic negotiators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

