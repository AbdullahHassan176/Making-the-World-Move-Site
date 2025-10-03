export default function EnergyMegaMergerPage() {
  return (
    <>
      {/* Episode Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-red-600 text-white text-sm px-4 py-2 rounded-full font-medium">M&A</span>
              <span className="bg-gray-800 text-gray-300 text-sm px-4 py-2 rounded-full">Energy</span>
              <span className="bg-gray-800 text-gray-300 text-sm px-4 py-2 rounded-full">Regulatory</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">The $50B Energy Merger</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              How regulatory pressure shaped the largest energy deal of the decade. 
              Sarah Mitchell reveals the behind-the-scenes negotiations that reshaped 
              the renewable energy landscape.
            </p>
            
            <div className="flex items-center space-x-8 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-user text-xl text-gray-400"></i>
                </div>
                <div>
                  <div className="font-semibold">Sarah Mitchell</div>
                  <div className="text-sm text-gray-400">CEO, EnergyCore</div>
                </div>
              </div>
              <div className="text-gray-400">
                <i className="fa-solid fa-clock mr-2"></i>
                52 min
              </div>
              <div className="text-gray-400">
                <i className="fa-solid fa-dollar-sign mr-2"></i>
                $50B Deal Value
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
                    In this exclusive interview, Sarah Mitchell, CEO of EnergyCore, takes us behind the scenes 
                    of the largest energy sector merger in history. The $50 billion deal between EnergyCore and 
                    PowerGrid wasn&apos;t just about combining two companies—it was about reshaping the entire 
                    renewable energy landscape.
                  </p>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Sarah reveals the complex regulatory challenges they faced, the stakeholder negotiations 
                    that lasted months, and the moment she knew the deal would close. From initial discussions 
                    to final regulatory approval, this episode covers every aspect of transformational deal-making.
                  </p>
                  
                  <h3 className="text-2xl font-semibold mb-4">Key Topics Covered:</h3>
                  <ul className="text-gray-300 space-y-2 mb-8">
                    <li>• Regulatory strategy and stakeholder management</li>
                    <li>• Navigating complex energy sector regulations</li>
                    <li>• Building consensus among diverse stakeholders</li>
                    <li>• Crisis management during deal negotiations</li>
                    <li>• Post-merger integration challenges</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Episode Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration</span>
                      <span className="text-white">52 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Deal Value</span>
                      <span className="text-white">$50B</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Industry</span>
                      <span className="text-white">Energy</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Deal Type</span>
                      <span className="text-white">M&A</span>
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
                    Sarah Mitchell is the CEO of EnergyCore, a leading renewable energy company. 
                    She has over 15 years of experience in the energy sector and has led multiple 
                    transformational deals worth over $100 billion combined.
                  </p>
                </div>
                
                <div className="bg-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4">Related Episodes</h3>
                  <div className="space-y-3">
                    <a href="/episodes/pipeline-gambit" className="block text-gray-300 hover:text-white transition-colors">
                      The Pipeline Gambit
                    </a>
                    <a href="/episodes/impossible-negotiation" className="block text-gray-300 hover:text-white transition-colors">
                      The Impossible Negotiation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transcript Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Episode Transcript</h2>
            <div className="bg-gray-800 rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-red-600 font-semibold">Abdullah Hassan:</span>
                    <span className="text-gray-400 text-sm">00:00</span>
                  </div>
                  <p className="text-gray-300">
                    Welcome to Making the World Move. Today we&apos;re speaking with Sarah Mitchell, 
                    CEO of EnergyCore, about the largest energy sector merger in history...
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-blue-400 font-semibold">Sarah Mitchell:</span>
                    <span className="text-gray-400 text-sm">02:15</span>
                  </div>
                  <p className="text-gray-300">
                    When we first started discussions with PowerGrid, we knew this wasn&apos;t going 
                    to be a typical merger. The regulatory landscape was incredibly complex...
                  </p>
                </div>
                
                <div className="text-center pt-8">
                  <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                    View Full Transcript
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

