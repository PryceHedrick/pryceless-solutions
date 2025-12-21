import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

// EDIT: Portfolio projects - Add your projects here
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
  },
  {
    id: 4,
    title: 'Your Project Here',
    shortDescription: "Let's build something together",
    fullDescription: "Have an idea you want to bring to life? I'd love to help you build it. From simple landing pages to complex web applications, every great project starts with a conversation.",
    image: null,
    tags: ['Your Tech', 'Your Vision', 'Custom Solution'],
    features: [
      'Custom-built for your needs',
      'Modern tech stack',
      'Scalable architecture',
      'Ongoing support available'
    ],
    links: {
      github: null,
      live: null
    },
    cta: true,
    featured: false
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
            {/* EDIT: Section heading */}
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subheading">
            {/* EDIT: Section description */}
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
              onClick={() => !project.cta && setSelectedProject(project)}
            />
          ))}
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
        className={`glass-card overflow-hidden h-full group ${
          project.cta ? '' : 'cursor-pointer'
        } hover:bg-dark-700/50 transition-all duration-300`}
      >
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-dark-700 to-dark-800 overflow-hidden">
          {project.image ? (
            // EDIT: Replace with actual project images
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              {project.cta ? (
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <p className="text-gray-400">Your next project could be here</p>
                </div>
              ) : (
                <div className="w-16 h-16 rounded-xl bg-primary-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              )}
            </div>
          )}

          {/* Award Badge */}
          {project.award && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-500/90 rounded-full text-xs font-semibold text-dark-900 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Award Winner
            </div>
          )}

          {/* Overlay on hover */}
          {!project.cta && (
            <div className="absolute inset-0 bg-dark-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="px-4 py-2 bg-primary-500 rounded-lg text-white font-semibold">
                View Details
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.shortDescription}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium bg-dark-700 text-gray-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA for placeholder project */}
          {project.cta && (
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary w-full text-center"
            >
              Start Your Project
            </a>
          )}

          {/* Links for real projects */}
          {!project.cta && (project.links.github || project.links.live) && (
            <div className="flex gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                  </svg>
                  GitHub
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Site
                </a>
              )}
            </div>
          )}
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

        {/* Image */}
        <div className="h-48 sm:h-64 bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
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
