export default function StreamingWarsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-red-600 text-white text-sm px-4 py-2 rounded-full font-medium">Media Rights</span>
              <span className="bg-gray-800 text-gray-300 text-sm px-4 py-2 rounded-full">Entertainment</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">The Streaming Wars</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              How exclusive content rights reshaped the entertainment industry. Jessica Park 
              reveals the negotiations that changed how we consume media.
            </p>
            
            <div className="flex items-center space-x-8 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-user text-xl text-gray-400"></i>
                </div>
                <div>
                  <div className="font-semibold">Jessica Park</div>
                  <div className="text-sm text-gray-400">Media Executive</div>
                </div>
              </div>
              <div className="text-gray-400">
                <i className="fa-solid fa-clock mr-2"></i>
                41 min
              </div>
              <div className="text-gray-400">
                <i className="fa-solid fa-dollar-sign mr-2"></i>
                $1.2B Deal Value
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-white text-gray-950 font-semibold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center">
                <i className="fa-solid fa-play mr-3"></i>
                Watch Episode
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

