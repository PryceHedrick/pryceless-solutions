import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    service: '',
    message: '',
    referral: ''
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
        setFormData({ name: '', email: '', phone: '', business: '', service: '', message: '', referral: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const quickAnswers = [
    'Free consultations, no obligation',
    'Typical response within 24 hours',
    'Projects start with 50% deposit',
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Get a Free Consultation | Pryceless Solutions</title>
        <meta name="description" content="Let's talk about your project. Free consultation, no obligation. Call (812) 709-2406 or send us a message." />
      </Helmet>

      <div className="min-h-screen bg-off-white">
        <Navigation />

        {/* Hero Section */}
        <section className="bg-primary pt-32 pb-20">
          <div className="section-container text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Let's Talk About Your Project
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              No pressure. No obligation. Just a conversation about what you need.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="card">
                  {status === 'success' ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-primary-dark mb-2">Thanks!</h2>
                      <p className="text-medium-gray">We'll be in touch within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="form-label">Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="form-input"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="form-label">Email *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="form-input"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="form-label">Phone (optional)</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                        <div>
                          <label htmlFor="business" className="form-label">Business Name (optional)</label>
                          <input
                            type="text"
                            id="business"
                            name="business"
                            value={formData.business}
                            onChange={handleChange}
                            className="form-input"
                            placeholder="Your business"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="form-label">What do you need help with?</label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option value="">Select an option</option>
                          <option value="new-website">New website</option>
                          <option value="redesign">Website redesign</option>
                          <option value="local-seo">Local SEO / Google Business</option>
                          <option value="automation">Business automation</option>
                          <option value="not-sure">Not sure yet</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="form-label">Tell us about your project (optional)</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="form-textarea"
                          placeholder="What are your goals? Any specific features you need?"
                        />
                      </div>

                      <div>
                        <label htmlFor="referral" className="form-label">How did you hear about us? (optional)</label>
                        <input
                          type="text"
                          id="referral"
                          name="referral"
                          value={formData.referral}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Google, referral, social media, etc."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full btn-primary"
                      >
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                      </button>

                      {status === 'error' && (
                        <p className="text-error text-sm text-center">
                          Something went wrong. Please try again or email us directly.
                        </p>
                      )}
                    </form>
                  )}
                </div>
              </div>

              {/* Contact Info Sidebar */}
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-lg font-bold text-primary-dark mb-4">Contact Info</h3>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="tel:+18127092406"
                        className="flex items-center gap-3 text-dark-gray hover:text-primary transition-colors"
                      >
                        <div className="feature-icon w-10 h-10">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <span>(812) 709-2406</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:pryce@prycehedrick.com"
                        className="flex items-center gap-3 text-dark-gray hover:text-primary transition-colors"
                      >
                        <div className="feature-icon w-10 h-10">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span>pryce@prycehedrick.com</span>
                      </a>
                    </li>
                    <li className="flex items-center gap-3 text-dark-gray">
                      <div className="feature-icon w-10 h-10">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block">Southern Indiana</span>
                        <span className="text-sm text-medium-gray">Serving clients nationwide</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="card bg-primary/5 border-none">
                  <h3 className="text-lg font-bold text-primary-dark mb-4">Quick Answers</h3>
                  <ul className="space-y-3">
                    {quickAnswers.map((answer, index) => (
                      <li key={index} className="flex items-start gap-2 text-dark-gray text-sm">
                        <svg className="w-4 h-4 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {answer}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card">
                  <h3 className="text-lg font-bold text-primary-dark mb-4">Response Time</h3>
                  <p className="text-medium-gray text-sm">
                    We respond to all inquiries within 24 hours on business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
