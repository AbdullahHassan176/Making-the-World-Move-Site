export default function AboutPage() {
  return (
    <>
      {/* About Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">About Making the World Move</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We&apos;re on a mission to democratize the art of transformational deal-making by sharing 
              the strategies, tactics, and mindsets of the world&apos;s most successful negotiators.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-950 py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Making the World Move was born from a simple observation: the most transformational 
                  deals in history—from peace treaties to mega-mergers—are often shrouded in mystery. 
                  The strategies, tactics, and mindsets that made these deals possible remain hidden 
                  from public view.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We believe that by sharing these real stories, we can help the next generation of 
                  dealmakers master this critical skill. Every episode features in-depth conversations 
                  with the actual negotiators who closed these historic deals.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our goal is simple: to make the art of transformational deal-making accessible to 
                  everyone, from startup founders to corporate executives to international diplomats.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">What Makes Us Different</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                    <div>
                      <span className="font-medium">Real Deal Makers</span>
                      <p className="text-sm text-gray-400">We interview the actual negotiators, not analysts</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                    <div>
                      <span className="font-medium">Behind-the-Scenes Access</span>
                      <p className="text-sm text-gray-400">Exclusive insights into closed-door negotiations</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                    <div>
                      <span className="font-medium">Practical Strategies</span>
                      <p className="text-sm text-gray-400">Actionable tactics you can apply immediately</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="fa-solid fa-check-circle text-green-500 mt-1"></i>
                    <div>
                      <span className="font-medium">Global Perspective</span>
                      <p className="text-sm text-gray-400">Deals from every continent and industry</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Meet the Founder</h2>
            <p className="text-xl text-gray-300 mb-12">
              Making the World Move is the vision of Abdullah Hassan, an entrepreneur and journalist 
              passionate about sharing the art of transformational negotiations.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-800 rounded-xl p-8 text-center">
                <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  <img src="/images/abdullah-hassan-portrait.jpg" alt="Abdullah Hassan" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Abdullah Hassan</h3>
                <p className="text-lg text-gray-400 mb-4">Founder, CEO & Host</p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Abdullah Hassan is an entrepreneur and journalist with over 15 years of experience in deal-making and business journalism. 
                  He has led multiple transformational deals and now shares his expertise through Making the World Move, 
                  democratizing the art of negotiation for the next generation of dealmakers.
                </p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/abdullah-hassan-635a831b6/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
                  >
                    <i className="fa-brands fa-linkedin text-gray-400 text-lg"></i>
                  </a>
                  <a 
                    href="mailto:abdullah.hassan@globalnext.rocks" 
                    className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
                  >
                    <i className="fa-solid fa-envelope text-gray-400 text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-950 py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-900 rounded-xl p-8">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-handshake text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrity First</h3>
                <p className="text-gray-300">
                  We only feature deals that were conducted ethically and created positive 
                  outcomes for all parties involved.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-8">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-globe text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
                <p className="text-gray-300">
                  We focus on deals that had significant impact on communities, 
                  industries, or international relations.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-8">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-lightbulb text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Educational Focus</h3>
                <p className="text-gray-300">
                  Every episode is designed to teach practical negotiation 
                  strategies that viewers can apply in their own deals.
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-8">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="fa-solid fa-users text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
                <p className="text-gray-300">
                  We build a community of dealmakers who share knowledge, 
                  ask questions, and learn from each other.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-300 mb-12">
              Have a story to share? Know someone who should be featured? 
              We&apos;d love to hear from you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-900 rounded-xl p-6">
                <i className="fa-solid fa-envelope text-2xl text-red-600 mb-4"></i>
                <h3 className="text-lg font-semibold mb-2">General Inquiries</h3>
                <p className="text-sm text-gray-400">abdullah.hassan@globalnext.rocks</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <i className="fa-solid fa-microphone text-2xl text-red-600 mb-4"></i>
                <h3 className="text-lg font-semibold mb-2">Guest Nominations</h3>
                <p className="text-sm text-gray-400">abdullah.hassan@globalnext.rocks</p>
              </div>
              
              <div className="bg-gray-900 rounded-xl p-6">
                <i className="fa-solid fa-handshake text-2xl text-red-600 mb-4"></i>
                <h3 className="text-lg font-semibold mb-2">Partnerships</h3>
                <p className="text-sm text-gray-400">abdullah.hassan@globalnext.rocks</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-gray-950 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                Subscribe to Newsletter
              </button>
              <button className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors">
                Follow on Social
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
