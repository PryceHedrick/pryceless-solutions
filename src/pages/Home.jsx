import { useEffect, useState } from 'react';
import SEOHead from '../components/SEOHead';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import PortfolioSection from '../components/Portfolio';
import Credentials from '../components/Credentials';
import WhyWorkWithMe from '../components/WhyWorkWithMe';
import PricingSection from '../components/Pricing';
import FAQSection from '../components/FAQ';
import ContactSection from '../components/Contact';
import Footer from '../components/layout/Footer';
import BackToTop from '../components/BackToTop';
import { businessInfo, services, faqs } from '../data/seo-data';

// Lead Generation Components
import FloatingCTA from '../components/FloatingCTA';
import ExitIntentPopup from '../components/ExitIntentPopup';
import CaseStudyMetrics from '../components/CaseStudyMetrics';
import CostComparison from '../components/CostComparison';
import ROICalculator from '../components/ROICalculator';
import ProcessTimeline from '../components/ProcessTimeline';
import RecentActivity from '../components/RecentActivity';

const Home = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${businessInfo.url}/#website`,
        "url": businessInfo.url,
        "name": businessInfo.name,
        "description": "Custom websites, e-commerce, and web applications for small businesses in Indiana",
        "publisher": { "@id": `${businessInfo.url}/#organization` }
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${businessInfo.url}/#localbusiness`,
        "name": businessInfo.name,
        "image": `${businessInfo.url}/og-image.png`,
        "telephone": businessInfo.phone,
        "email": businessInfo.email,
        "url": businessInfo.url,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": businessInfo.address.city,
          "addressRegion": businessInfo.address.state,
          "postalCode": businessInfo.address.zip,
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": businessInfo.geo.latitude,
          "longitude": businessInfo.geo.longitude
        },
        "priceRange": "$750-$5000",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:00"
        },
        "areaServed": businessInfo.areasServed.map(area => ({
          "@type": "City",
          "name": area
        })),
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Development Services",
          "itemListElement": services.map((service, index) => ({
            "@type": "Offer",
            "position": index + 1,
            "itemOffered": {
              "@type": "Service",
              "name": service.name,
              "description": service.description
            }
          }))
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.slice(0, 10).map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <SEOHead
        title={null}
        description="Pryceless Solutions creates custom websites, e-commerce stores, and web applications for small businesses in Indiana. Professional web design starting at $750. Based in Loogootee, serving Bedford, Jasper, Washington, Vincennes, Bloomington and beyond."
        keywords="web design Indiana, website development Bedford, web developer Jasper, custom websites Southern Indiana, small business websites, e-commerce development, Pryceless Solutions"
        canonical="/"
        schema={homeSchema}
      />
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <RecentActivity className="py-8" />
        <ProcessTimeline />
        <Services />
        <PortfolioSection />
        <CaseStudyMetrics />
        <Credentials />
        <WhyWorkWithMe />
        <CostComparison />
        <PricingSection />
        <ROICalculator />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <FloatingCTA />
      <ExitIntentPopup />
    </>
  );
};

export default Home;
