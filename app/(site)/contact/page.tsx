'use client'

import { useState } from 'react'
import { track } from '@/components/analytics/track'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Track form submission
      track({ name: 'question_submit', props: { episodeId: undefined, length: formData.message.length } })

      // Try API call first
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          setSubmitStatus('success')
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            subject: 'General Inquiry',
            message: ''
          })
          return
        }
      } catch (apiError) {
        console.log('API not available, falling back to email')
      }

      // Fallback: Create mailto link
      const mailtoSubject = encodeURIComponent(`Contact Form: ${formData.subject}`)
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.firstName} ${formData.lastName}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}`
      )
      
      const mailtoLink = `mailto:abdullah.hassan@globalnext.rocks?subject=${mailtoSubject}&body=${mailtoBody}`
      if (typeof window !== 'undefined') {
        window.open(mailtoLink, '_blank')
      }
      
      setSubmitStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Contact Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Get in Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Have a story to share? Know someone who should be featured? 
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-950 py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors" 
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors" 
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors" 
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition-colors"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Guest Nomination">Guest Nomination</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="Media Inquiry">Media Inquiry</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6} 
                      className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none" 
                      placeholder="Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-900/50 border border-green-600 rounded-lg p-4">
                      <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-check-circle text-green-500"></i>
                        <span className="text-green-300">Message sent successfully! We&apos;ll get back to you soon.</span>
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-900/50 border border-red-600 rounded-lg p-4">
                      <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-exclamation-circle text-red-500"></i>
                        <span className="text-red-300">Failed to send message. Please try again or contact us directly.</span>
                      </div>
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-white text-gray-950 font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <i className="fa-solid fa-envelope text-red-600"></i>
                      <span className="text-gray-300">abdullah.hassan@globalnext.rocks</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fa-solid fa-phone text-red-600"></i>
                      <a 
                        href="tel:+971504900392" 
                        className="text-gray-300 hover:text-white transition-colors"
                        onClick={() => track({ name: 'contact_click', props: { source: 'contact_page', type: 'phone' } })}
                      >
                        +971 50 490 0392
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fa-solid fa-map-marker-alt text-red-600"></i>
                      <span className="text-gray-300">New York, NY</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Specialized Contacts</h3>
                  <div className="space-y-3">
                    <div className="bg-gray-900 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-1">Guest Nominations</h4>
                      <p className="text-sm text-gray-400">abdullah.hassan@globalnext.rocks</p>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-1">Partnerships</h4>
                      <p className="text-sm text-gray-400">abdullah.hassan@globalnext.rocks</p>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-1">Media Inquiries</h4>
                      <p className="text-sm text-gray-400">abdullah.hassan@globalnext.rocks</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://twitter.com/abdullahhassan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                      onClick={() => track({ name: 'contact_click', props: { source: 'contact_page', type: 'social' } })}
                    >
                      <i className="fa-brands fa-twitter text-gray-400"></i>
                    </a>
                    <a 
                      href="https://linkedin.com/in/abdullahhassan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                      onClick={() => track({ name: 'contact_click', props: { source: 'contact_page', type: 'social' } })}
                    >
                      <i className="fa-brands fa-linkedin text-gray-400"></i>
                    </a>
                    <a 
                      href="https://youtube.com/@makingtheworldmove" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                      onClick={() => track({ name: 'contact_click', props: { source: 'contact_page', type: 'social' } })}
                    >
                      <i className="fa-brands fa-youtube text-gray-400"></i>
                    </a>
                    <a 
                      href="https://instagram.com/makingtheworldmove" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                      onClick={() => track({ name: 'contact_click', props: { source: 'contact_page', type: 'social' } })}
                    >
                      <i className="fa-brands fa-instagram text-gray-400"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "How do I nominate someone to be featured on the show?",
                  answer: "You can nominate a guest by filling out our guest nomination form or emailing us at abdullah.hassan@globalnext.rocks with details about the person and their deal."
                },
                {
                  question: "Can I suggest a deal to be covered?",
                  answer: "Absolutely! We welcome suggestions for deals to cover. Please email us with details about the deal and why it would be valuable for our audience."
                },
                {
                  question: "Do you offer consulting services?",
                  answer: "Yes, we offer consulting services for companies looking to improve their negotiation capabilities. Contact us for more information about our services."
                },
                {
                  question: "How can I partner with Making the World Move?",
                  answer: "We&apos;re always interested in strategic partnerships. Please reach out to abdullah.hassan@globalnext.rocks to discuss opportunities."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
