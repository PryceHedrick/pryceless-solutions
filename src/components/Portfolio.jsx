import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

// Portfolio projects - real projects only (CTA card is separate)
const projects = [
  {
    id: 1,
    title: 'Vault - Pokemon TCG Portfolio Tracker',
    shortDescription: 'Full-stack web application for collectors to track their card investments',
    fullDescription: 'A comprehensive portfolio tracking application designed for Pokemon TCG collectors. Features real-time price fetching, financial analytics including P&L tracking and portfolio health scoring, plus AI-powered investment insights.',
    image: '/images/portfolio/vault/dashboard.png',
    tags: ['Python', 'Flask', 'SQL', 'REST API', 'Tailwind CSS'],
    features: [
      'Real-time price fetching via Pokemon TCG API',
      'Financial analytics: P&L tracking, portfolio health scoring',
      'AI-powered investment insights',
      'Chart.js visualizations for data analysis'
    ],
    links: {
      github: 'https://github.com/PryceHedrick/vault',
      live: null
    },
    featured: true
  },
  {
    id: 2,
    title: 'CardGuys.store E-Commerce Platform',
    shortDescription: 'E-commerce platform built as Trading Card Sales Lead',
    fullDescription: 'E-commerce platform I helped design and launch as Trading Card Sales Lead at Card Guys Sports Cards. Built a user-friendly storefront with eBay API integration for inventory syncing, PayPal/Venmo payment processing, categorized navigation, and email subscription system. Expanded the business beyond eBay to a dedicated online presence.',
    image: '/images/portfolio/cardguys/homepage.png',
    tags: ['Python', 'SQL', 'HTML/CSS', 'eBay API', 'Git'],
    features: [
      'eBay API integration for inventory sync',
      'PayPal/Venmo payment processing',
      'Categorized navigation system',
      'Email subscription system'
    ],
    links: {
      github: null,
      live: 'https://cardguys.store'
    },
    clientWork: true,
    featured: true
  },
  {
    id: 3,
    title: 'Panda International OMS',
    shortDescription: 'Award-winning senior capstone project - Order Management System',
    fullDescription: 'Enterprise-grade Order Management System developed as a senior capstone project for Panda International. Features FedEx API integration for shipping labels, real-time tracking, inventory management, and multi-warehouse support. This project won the Outstanding Senior Project Award at USI in 2024.',
    image: '/images/portfolio/panda-oms/Panda_OMS_Dashboard.png',
    tags: ['C#', 'ASP.NET Core', 'SQL Server', 'REST API', 'FedEx API'],
    features: [
      'FedEx API integration for shipping labels',
      'Real-time shipment tracking',
      'Multi-warehouse inventory management',
      'Platform order aggregation (Amazon, eBay)'
    ],
    links: {
      github: 'https://github.com/PryceHedrick/OrderManagementSystem',
      live: null
    },
    award: 'Outstanding Senior Project Award - USI 2024',
    featured: true
  }
]

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-dark-800/30">
      <div className="section-container">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading">
            Real solutions built for real businesses
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
          {/* CTA Card - Always last */}
          <CTACard index={projects.length} />
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

function ProjectCard({ project, index, onClick }) {
  const [cardRef, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        onClick={onClick}
        className="glass-card overflow-hidden h-full group cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/20 hover:border-primary-500/30"
      >
        {/* Project Image - Fixed cropping with object-position: top */}
        <div className="relative h-56 bg-gradient-to-br from-dark-700 to-dark-800 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />

          {/* Award Badge - Prominent positioning */}
          {project.award && (
            <div className="absolute top-4 right-4 px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full text-xs font-bold text-dark-900 flex items-center gap-1.5 shadow-lg shadow-yellow-500/30">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Award Winner
            </div>
          )}

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="px-5 py-2.5 bg-primary-500 rounded-lg text-white font-semibold shadow-lg shadow-primary-500/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              View Details
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">{project.title}</h3>
          <p className="text-gray-400 mb-4 line-clamp-2">{project.shortDescription}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium bg-dark-700/80 text-gray-300 rounded-full border border-dark-600 hover:border-primary-500/50 hover:text-primary-300 transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          {(project.links.github || project.links.live) && (
            <div className="flex gap-4 pt-4 border-t border-dark-700">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-all duration-200 group/link"
                >
                  <svg className="w-4 h-4 group-hover/link:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                  </svg>
                  <span className="font-medium">GitHub</span>
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-all duration-200 group/link"
                >
                  <svg className="w-4 h-4 group-hover/link:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="font-medium">Live Site</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function CTACard({ index }) {
  const [cardRef, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Animated gradient border wrapper */}
      <div className="relative h-full group">
        {/* Animated gradient border - glow effect */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-primary-500 to-cyan-500 rounded-2xl opacity-50 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-gradient-x" />
        <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-primary-500 to-cyan-500 rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-x" />

        {/* Card content */}
        <div className="relative h-full bg-dark-800 rounded-2xl overflow-hidden flex flex-col min-h-[400px]">
          {/* Top section with icon */}
          <div className="flex-1 flex flex-col items-center justify-center p-8 pt-12">
            {/* Animated brackets icon */}
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-primary-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary-400 animate-pulse-slow">
                  &lt;/&gt;
                </span>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Headline */}
            <h3 className="text-xl font-bold text-white mb-3 text-center">
              Your Project Here
            </h3>

            {/* Subtext */}
            <p className="text-gray-400 text-center max-w-xs leading-relaxed">
              Ready to bring your idea to life? Let's build something great together.
            </p>
          </div>

          {/* CTA Button */}
          <div className="p-6 pt-0">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-cyan-500 hover:bg-cyan-400 text-dark-900 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 group/btn"
            >
              <span>Start Your Project</span>
              <svg
                className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-dark-900/90 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image - Fixed cropping with object-position: top */}
        <div className="h-56 sm:h-72 bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="w-20 h-20 rounded-2xl bg-primary-500/20 flex items-center justify-center">
              <svg className="w-10 h-10 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Award Badge */}
          {project.award && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-400 rounded-full text-sm font-semibold border border-yellow-500/30">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {project.award}
            </div>
          )}

          <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
          <p className="text-gray-300 mb-6">{project.fullDescription}</p>

          {/* Features */}
          <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
          <ul className="space-y-2 mb-6">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm font-medium bg-primary-500/20 text-primary-400 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
                View on GitHub
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Visit Live Site
              </a>
            )}
            {!project.links.github && !project.links.live && (
              <p className="text-gray-400 italic">Enterprise project - no public link available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
