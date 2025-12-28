import SEOHead from '../components/SEOHead';
import { businessInfo } from '../data/seo-data';

const Links = () => {
  const links = [
    { title: 'My Website', subtitle: 'See my work and services', url: '/', primary: true, icon: '🌐' },
    { title: 'Get a Free Quote', subtitle: 'Start your project today', url: '/contact', primary: true, icon: '💼' },
    { title: 'View Pricing', subtitle: 'Transparent, no monthly fees', url: '/pricing', icon: '💰' },
    { title: 'Read the Blog', subtitle: 'Web design tips & guides', url: '/blog', icon: '📖' },
    { title: 'FAQ', subtitle: 'Common questions answered', url: '/faq', icon: '❓' },
    { title: 'Areas We Serve', subtitle: 'Southern Indiana & beyond', url: '/areas-served', icon: '📍' },
    { title: 'Facebook', subtitle: 'Follow us', url: businessInfo.social.facebook, external: true, icon: '📘' },
    { title: 'LinkedIn', subtitle: 'Professional profile', url: businessInfo.social.linkedin, external: true, icon: '💼' },
    { title: 'GitHub', subtitle: 'Open source projects', url: businessInfo.social.github, external: true, icon: '🐙' },
    { title: 'Call Me', subtitle: businessInfo.phone, url: `tel:${businessInfo.phone.replace(/[^\d]/g, '')}`, icon: '📞' },
    { title: 'Email Me', subtitle: businessInfo.email, url: `mailto:${businessInfo.email}`, icon: '✉️' }
  ];

  return (
    <>
      <SEOHead
        title="Links"
        description="Quick links to Pryceless Solutions - web design for Indiana small businesses"
        canonical="/links"
        noindex={true}
      />

      <div className="min-h-screen bg-gradient-to-br from-sky-600 to-blue-800 py-12 px-4">
        <div className="max-w-md mx-auto">
          {/* Profile */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <span className="text-4xl">💻</span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-1">Pryce Hedrick</h1>
            <p className="text-sky-100">Web Developer</p>
            <p className="text-sky-200 text-sm mt-1">Pryceless Solutions</p>
            <p className="text-sky-200/70 text-xs mt-2">Custom websites for small businesses</p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.external ? link.url : undefined}
                onClick={!link.external ? (e) => { e.preventDefault(); window.location.href = link.url; } : undefined}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className={`block rounded-xl p-4 transition-all transform hover:scale-[1.02] ${
                  link.primary
                    ? 'bg-white text-gray-900 shadow-lg hover:shadow-xl'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{link.icon}</span>
                  <div className="flex-1">
                    <div className="font-semibold">{link.title}</div>
                    {link.subtitle && (
                      <div className={`text-sm ${link.primary ? 'text-gray-500' : 'text-sky-100'}`}>
                        {link.subtitle}
                      </div>
                    )}
                  </div>
                  <svg className={`w-5 h-5 ${link.primary ? 'text-gray-400' : 'text-sky-200'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-sky-200 text-sm">
            <p>Loogootee, Indiana</p>
            <p className="mt-2">© {new Date().getFullYear()} Pryceless Solutions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Links;
