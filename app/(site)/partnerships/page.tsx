'use client'

import { useState } from 'react'
import { track } from '@/components/analytics/track'

export default function PartnershipsPage() {
  const [selectedPartnership, setSelectedPartnership] = useState<string | null>(null)
  const [showPartnershipModal, setShowPartnershipModal] = useState(false)
  const [showDownloadModal, setShowDownloadModal] = useState(false)

  const handleLearnMore = (partnershipType: string) => {
    setSelectedPartnership(partnershipType)
    setShowPartnershipModal(true)
    track({ name: 'partnership_learn_more', props: { partnership_type: partnershipType } })
  }

  const handleStartDiscussion = () => {
    track({ name: 'partnership_discussion_start', props: { partnership_type: 'general' } })
    // Open email client with pre-filled subject
    const subject = encodeURIComponent('Partnership Discussion - Making the World Move')
    const body = encodeURIComponent(
      'Hi Abdullah,\n\nI\'m interested in discussing a partnership opportunity with Making the World Move.\n\n' +
      'Partnership Type: [Please specify]\n' +
      'Company: [Your company name]\n' +
      'Role: [Your role]\n' +
      'Brief Description: [Tell us about your organization and partnership goals]\n\n' +
      'Best regards,\n[Your name]'
    )
    const mailtoLink = `mailto:abdullah.hassan@globalnext.rocks?subject=${subject}&body=${body}`
    if (typeof window !== 'undefined') {
      window.open(mailtoLink, '_blank')
    }
  }

  const handleDownloadKit = () => {
    setShowDownloadModal(true)
    track({ name: 'partnership_kit_download', props: { partnership_type: 'general' } })
  }

  const handleDownloadConfirm = (version: string) => {
    // Simulate download - in production this would download actual files
    track({ name: 'partnership_kit_downloaded', props: { version, source: 'partnerships_page' } })
    alert(`Downloading Partnership Kit v${version}...`)
    setShowDownloadModal(false)
  }

  return (
    <>
      {/* Partnerships Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <i className="fa-solid fa-handshake text-red-600"></i>
              <span className="text-sm text-gray-300">Strategic Partnerships</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join us in building the world&apos;s most comprehensive platform for 
              transformational deal-making and negotiation mastery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3">
                <i className="fa-solid fa-users text-red-600"></i>
                <div className="text-left">
                  <div className="text-sm text-gray-400">Active Partners</div>
                  <div className="text-lg font-semibold text-white">25+</div>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3">
                <i className="fa-solid fa-globe text-red-600"></i>
                <div className="text-left">
                  <div className="text-sm text-gray-400">Countries</div>
                  <div className="text-lg font-semibold text-white">15+</div>
                </div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 flex items-center space-x-3">
                <i className="fa-solid fa-chart-line text-red-600"></i>
                <div className="text-left">
                  <div className="text-sm text-gray-400">Growth Rate</div>
                  <div className="text-lg font-semibold text-white">300%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="bg-gray-950 py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Content Partnerships",
                description: "Collaborate on exclusive content, co-produced episodes, and cross-platform promotion.",
                benefits: [
                  "Access to our premium content library",
                  "Co-branded episode production",
                  "Cross-platform audience reach",
                  "Shared revenue opportunities"
                ],
                icon: "fa-video",
                featured: true
              },
              {
                title: "Educational Partnerships",
                description: "Partner with universities, business schools, and training organizations.",
                benefits: [
                  "Curriculum integration",
                  "Student access programs",
                  "Faculty collaboration",
                  "Research partnerships"
                ],
                icon: "fa-graduation-cap"
              },
              {
                title: "Corporate Partnerships",
                description: "Help organizations improve their negotiation capabilities and deal-making skills.",
                benefits: [
                  "Custom training programs",
                  "Executive coaching",
                  "Deal analysis services",
                  "Team workshops"
                ],
                icon: "fa-building"
              },
              {
                title: "Media Partnerships",
                description: "Work with media outlets, podcasts, and publications to expand reach.",
                benefits: [
                  "Cross-promotion opportunities",
                  "Guest appearances",
                  "Content syndication",
                  "Joint marketing campaigns"
                ],
                icon: "fa-microphone"
              },
              {
                title: "Technology Partnerships",
                description: "Integrate with platforms, tools, and technologies that enhance the learning experience.",
                benefits: [
                  "API integrations",
                  "Platform partnerships",
                  "Tool integrations",
                  "Technical collaboration"
                ],
                icon: "fa-code"
              },
              {
                title: "Community Partnerships",
                description: "Partner with professional organizations and industry groups.",
                benefits: [
                  "Member access programs",
                  "Event partnerships",
                  "Community building",
                  "Networking opportunities"
                ],
                icon: "fa-users"
              }
            ].map((partnership, index) => (
              <div key={index} className={`bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors relative ${partnership.featured ? 'ring-2 ring-red-600/50' : ''}`}>
                {partnership.featured && (
                  <div className="absolute -top-3 left-6 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Featured
                  </div>
                )}
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <i className={`fa-solid ${partnership.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{partnership.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{partnership.description}</p>
                <ul className="space-y-2 mb-6">
                  {partnership.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start space-x-2 text-sm text-gray-400">
                      <i className="fa-solid fa-check text-green-500 mt-1"></i>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handleLearnMore(partnership.title)}
                  className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors font-medium flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <i className="fa-solid fa-arrow-right text-sm"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Partnership Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                partner: "Harvard Business School",
                type: "Educational Partnership",
                description: "Integrated our negotiation frameworks into their executive education programs, reaching 2,000+ executives annually.",
                impact: "2,000+ executives trained"
              },
              {
                partner: "McKinsey & Company",
                type: "Corporate Partnership",
                description: "Developed custom training programs for their consultants, improving deal success rates by 35%.",
                impact: "35% improvement in deal success"
              },
              {
                partner: "The Wall Street Journal",
                type: "Media Partnership",
                description: "Co-produced exclusive content series that reached 500K+ readers and generated significant engagement.",
                impact: "500K+ readers reached"
              },
              {
                partner: "LinkedIn Learning",
                type: "Technology Partnership",
                description: "Created premium course content that has been completed by over 50,000 professionals worldwide.",
                impact: "50,000+ course completions"
              }
            ].map((story, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">{story.partner}</h3>
                  <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                    {story.type}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{story.description}</p>
                <div className="flex items-center space-x-2">
                  <i className="fa-solid fa-chart-line text-green-500"></i>
                  <span className="text-sm font-semibold text-green-500">{story.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="bg-gray-950 py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">How to Partner With Us</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Initial Contact",
                  description: "Reach out to us with your partnership idea and goals."
                },
                {
                  step: "2",
                  title: "Discovery Call",
                  description: "We&apos;ll schedule a call to understand your needs and explore opportunities."
                },
                {
                  step: "3",
                  title: "Proposal Development",
                  description: "We&apos;ll create a customized partnership proposal for your review."
                },
                {
                  step: "4",
                  title: "Implementation",
                  description: "Once approved, we&apos;ll work together to launch and execute the partnership."
                }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let&apos;s work together to build the future of transformational deal-making 
            and negotiation education.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleStartDiscussion}
              className="px-8 py-4 bg-white text-gray-950 font-semibold rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
            >
              <i className="fa-solid fa-comments"></i>
              <span>Start Partnership Discussion</span>
            </button>
            <button 
              onClick={handleDownloadKit}
              className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors flex items-center justify-center space-x-2"
            >
              <i className="fa-solid fa-download"></i>
              <span>Download Partnership Kit</span>
            </button>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Contact our partnerships team:</p>
            <a href="mailto:abdullah.hassan@globalnext.rocks" className="text-red-600 hover:text-red-500 transition-colors">
              abdullah.hassan@globalnext.rocks
            </a>
          </div>
        </div>
      </section>

      {/* Partnership Details Modal */}
      {showPartnershipModal && selectedPartnership && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl p-8 max-w-2xl w-full border border-gray-700 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{selectedPartnership} Partnership</h2>
              <button 
                onClick={() => setShowPartnershipModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fa-solid fa-times text-xl"></i>
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Partnership Overview</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our {selectedPartnership.toLowerCase()} partnerships are designed to create mutual value 
                  and expand our reach in the deal-making community. We work with organizations that share 
                  our mission of democratizing negotiation education.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">What We Offer</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <i className="fa-solid fa-check text-green-500 mt-1"></i>
                    <span>Dedicated partnership manager</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fa-solid fa-check text-green-500 mt-1"></i>
                    <span>Custom content collaboration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fa-solid fa-check text-green-500 mt-1"></i>
                    <span>Joint marketing opportunities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fa-solid fa-check text-green-500 mt-1"></i>
                    <span>Revenue sharing arrangements</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="fa-solid fa-check text-green-500 mt-1"></i>
                    <span>Access to our community</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Next Steps</h3>
                <p className="text-gray-300 mb-4">
                  Ready to start a partnership? Contact us to discuss your specific needs and how we can work together.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={handleStartDiscussion}
                    className="px-6 py-3 bg-white text-gray-950 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Start Discussion
                  </button>
                  <button 
                    onClick={() => setShowPartnershipModal(false)}
                    className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Download Kit Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl p-8 max-w-md w-full border border-gray-700">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Download Partnership Kit</h2>
              <button 
                onClick={() => setShowDownloadModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fa-solid fa-times text-xl"></i>
              </button>
            </div>
            
            <p className="text-gray-300 mb-6">
              Choose the version of our partnership kit that best suits your needs:
            </p>
            
            <div className="space-y-4">
              <button 
                onClick={() => handleDownloadConfirm('1.0')}
                className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-between"
              >
                <div className="text-left">
                  <div className="font-semibold">Partnership Kit v1.0</div>
                  <div className="text-sm text-gray-400">Basic partnership information and guidelines</div>
                </div>
                <i className="fa-solid fa-download"></i>
              </button>
              
              <button 
                onClick={() => handleDownloadConfirm('2.0')}
                className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-between"
              >
                <div className="text-left">
                  <div className="font-semibold">Partnership Kit v2.0</div>
                  <div className="text-sm text-gray-400">Complete kit with templates and case studies</div>
                </div>
                <i className="fa-solid fa-download"></i>
              </button>
              
              <button 
                onClick={() => handleDownloadConfirm('Premium')}
                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-between"
              >
                <div className="text-left">
                  <div className="font-semibold">Premium Partnership Kit</div>
                  <div className="text-sm text-red-200">Exclusive content and detailed partnership frameworks</div>
                </div>
                <i className="fa-solid fa-crown"></i>
              </button>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                All downloads include our latest partnership terms and collaboration guidelines.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
