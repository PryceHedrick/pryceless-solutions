import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { businessInfo } from '../data/seo-data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    service: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xdkobgjy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', business: '', service: '', budget: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Pryceless Solutions",
    "description": "Get a free quote for your web design project. Contact Pryceless Solutions for custom websites in Indiana.",
    "url": `${businessInfo.url}/contact`,
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": businessInfo.name,
      "telephone": businessInfo.phone,
      "email": businessInfo.email
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get a free quote for your web design project. Contact Pryceless Solutions for custom websites, e-commerce, and web applications in Southern Indiana."
        keywords="contact web designer, get website quote, Indiana web design contact, free website consultation"
        canonical="/contact"
        schema={contactSchema}
      />

      <main className="pt-20 min-h-screen bg-slate-900">
        {/* Hero */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Build Something <span className="text-sky-400">Great</span>
            </h1>
            <p className="text-xl text-gray-300">
              Ready to start your project? Get a free quote today.
            </p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <a href={`tel:${businessInfo.phone}`} className="text-gray-300 hover:text-sky-400 transition-colors">
                      {businessInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <a href={`mailto:${businessInfo.email}`} className="text-gray-300 hover:text-sky-400 transition-colors">
                      {businessInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Location</h3>
                    <p className="text-gray-300">{businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}</p>
                    <p className="text-gray-500 text-sm">Serving all of Southern Indiana</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Business Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-500 text-sm">Weekends by appointment</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-4">What Happens Next?</h3>
                <ol className="space-y-3 text-gray-300 text-sm">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-sky-600 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">1</span>
                    I&apos;ll review your project details within 24 hours
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-sky-600 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">2</span>
                    We&apos;ll schedule a call to discuss your goals
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 bg-sky-600 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">3</span>
                    You&apos;ll receive a detailed proposal and quote
                  </li>
                </ol>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Request a Quote</h2>

              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300">I&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-300 mb-1">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-sky-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-300 mb-1">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-sky-500"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm text-gray-300 mb-1">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-sky-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="business" className="block text-sm text-gray-300 mb-1">Business Name</label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-sky-500"
                        placeholder="Your business"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-sm text-gray-300 mb-1">Service Needed</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-sky-500"
                      >
                        <option value="">Select a service</option>
                        <option value="starter">Starter Website ($750)</option>
                        <option value="professional">Professional Website ($1,800)</option>
                        <option value="ecommerce">E-Commerce Store ($2,500+)</option>
                        <option value="custom">Custom Web App ($3,500+)</option>
                        <option value="redesign">Website Redesign</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm text-gray-300 mb-1">Budget Range</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-sky-500"
                      >
                        <option value="">Select budget</option>
                        <option value="under1000">Under $1,000</option>
                        <option value="1000-2000">$1,000 - $2,000</option>
                        <option value="2000-5000">$2,000 - $5,000</option>
                        <option value="5000+">$5,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-300 mb-1">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-sky-500 resize-none"
                      placeholder="Tell me about your project, goals, and timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3 bg-sky-600 hover:bg-sky-700 disabled:bg-sky-800 text-white rounded-lg font-semibold transition-colors"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm text-center">
                      Something went wrong. Please try again or email me directly.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
