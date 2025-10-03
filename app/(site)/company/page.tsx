export default function CompanyPage() {
  return (
    <>
      {/* Company Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Our Company</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Building the world&apos;s most comprehensive platform for mastering 
              transformational negotiations and deal-making.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-gray-950 py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Making the World Move was founded by Abdullah Hassan on a simple belief: the art of 
                  transformational deal-making should be accessible to everyone. As an entrepreneur and 
                  journalist with over 15 years of experience, Abdullah is building the world&apos;s 
                  most comprehensive platform for mastering high-stakes negotiations.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Abdullah&apos;s mission is to democratize the strategies, tactics, and mindsets that have 
                  shaped the world&apos;s most impactful deals—from peace treaties to mega-mergers—based 
                  on his own experience leading deals worth over $50B.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Through exclusive interviews, detailed case studies, and practical frameworks, 
                  Abdullah is creating a movement of skilled negotiators who can close deals that 
                  truly move the world forward.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">Company Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Founded</span>
                    <span className="text-white">2023</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Team Members</span>
                    <span className="text-white">1</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Episodes Produced</span>
                    <span className="text-white">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Community Members</span>
                    <span className="text-white">12,847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Countries Reached</span>
                    <span className="text-white">28</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Leadership</h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-800 rounded-xl p-8 text-center">
                <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden">
                  <img src="/images/abdullah-hassan-portrait.jpg" alt="Abdullah Hassan" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Abdullah Hassan</h3>
                <p className="text-lg text-gray-400 mb-4">Founder, CEO & Host</p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Abdullah Hassan is an entrepreneur and journalist with over 15 years of experience in deal-making and business journalism. 
                  He founded Making the World Move to democratize the art of transformational negotiations, sharing insights from his own 
                  experience leading deals worth over $50B across energy, tech, and healthcare sectors.
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
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Transparency",
                  description: "We believe in sharing real negotiation tactics and strategies, not just theory.",
                  icon: "fa-eye"
                },
                {
                  title: "Excellence",
                  description: "We maintain the highest standards in content quality and production value.",
                  icon: "fa-star"
                },
                {
                  title: "Impact",
                  description: "We focus on deals that create positive change in the world.",
                  icon: "fa-heart"
                },
                {
                  title: "Community",
                  description: "We build a supportive network of skilled negotiators and dealmakers.",
                  icon: "fa-users"
                }
              ].map((value, index) => (
                <div key={index} className="bg-gray-900 rounded-xl p-6">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                    <i className={`fa-solid ${value.icon} text-white text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals who share our passion 
            for transformational deal-making and storytelling.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Content Producer</h3>
              <p className="text-gray-400 text-sm mb-4">Create compelling episodes and content</p>
              <button className="text-red-600 hover:text-red-500 transition-colors">View Details</button>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Research Analyst</h3>
              <p className="text-gray-400 text-sm mb-4">Deep dive into deal structures and strategies</p>
              <button className="text-red-600 hover:text-red-500 transition-colors">View Details</button>
            </div>
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">Community Manager</h3>
              <p className="text-gray-400 text-sm mb-4">Build and engage our community</p>
              <button className="text-red-600 hover:text-red-500 transition-colors">View Details</button>
            </div>
          </div>
          
          <button className="px-8 py-4 bg-white text-gray-950 font-semibold rounded-lg hover:bg-gray-200 transition-colors">
            View All Openings
          </button>
        </div>
      </section>
    </>
  )
}
