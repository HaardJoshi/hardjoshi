import { useState } from 'react'
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+44 7407051600",
      href: "tel:+447407051600"
    },
    {
      icon: Mail,
      label: "Email", 
      value: "haardj2003@gmail.com",
      href: "mailto:haardj2003@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/hardjoshi",
      href: "https://linkedin.com/in/hardjoshi"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/haardjoshi", 
      href: "https://github.com/haardjoshi"
    }
  ]

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Ready to collaborate on data science projects or discuss opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-neutral-50 transition-colors duration-200 group"
                    >
                      <div className="p-3 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors duration-200">
                        <IconComponent className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
                          {info.label}
                        </p>
                        <p className="text-lg font-medium text-neutral-900">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Location */}
              <div className="mt-8 pt-8 border-t border-neutral-200">
                <div className="flex items-center gap-3 text-neutral-600">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span>London, United Kingdom</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-8">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-neutral-200 text-center">
          <p className="text-neutral-600">
            © 2025 Hard Joshi. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
