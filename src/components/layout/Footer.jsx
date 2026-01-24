import { useState } from 'react';
import { Link } from 'react-router-dom';
import { businessInfo } from '../../data/seo-data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/xzdpvvlr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'Newsletter Signup'
        })
      });

      if (response.ok) {
        setSubscribeStatus('success');
        setEmail('');
      } else {
        setSubscribeStatus('error');
      }
    } catch {
      setSubscribeStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Pryceless Solutions</h3>
            <p className="text-gray-400 text-sm mb-4">
              Professional websites for small businesses. You own everything. No monthly fees.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <a href={`mailto:${businessInfo.email}`} className="hover:text-sky-400 transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {businessInfo.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {businessInfo.address.city}, {businessInfo.address.state}
              </p>
              {businessInfo.phone && businessInfo.phoneLink && (
                <p>
                  <a href={businessInfo.phoneLink} className="hover:text-sky-400 transition-colors flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {businessInfo.phone}
                  </a>
                </p>
              )}
              <p className="flex items-center gap-2 pt-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mon-Fri: 9am - 5pm EST
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-sky-400 transition-colors">Home</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-sky-400 transition-colors">Pricing</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-sky-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-sky-400 transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-sky-400 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-sky-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get tips on growing your business online. No spam, ever.
            </p>

            {subscribeStatus === 'success' ? (
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>You&apos;re subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white text-sm placeholder-gray-500 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-md text-sm font-medium transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? '...' : 'Join'}
                  </button>
                </div>
                {subscribeStatus === 'error' && (
                  <p className="text-red-400 text-xs">Something went wrong. Try again.</p>
                )}
              </form>
            )}

            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-block px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-md text-sm font-medium transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Pryceless Solutions. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              You own your website. No monthly fees. No lock-in.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
