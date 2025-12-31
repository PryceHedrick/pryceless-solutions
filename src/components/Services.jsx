import useScrollAnimation from '../hooks/useScrollAnimation'

// EDIT: Services offered - Modify your services here
const services = [
  {
    id: 'service-custom-websites',
    title: 'Custom Websites',
    description: 'Get online fast with a site that looks great and loads faster.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    features: ['Looks perfect on every device your customers use', 'Sites that load fast — no lost customers', 'Get found when customers search for you', 'Modern design that builds trust'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'service-web-applications',
    title: 'Web Applications',
    description: 'Automate the busywork. Build tools your team actually uses.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    features: ['Built exactly for how your business works', 'Keep your business data secure', 'Organize and access your data easily', 'Manage everything from one dashboard'],
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'service-ecommerce',
    title: 'E-Commerce Solutions',
    description: 'Sell online without the headaches. Payments, inventory, done.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    features: ['Accept payments securely', 'Inventory updates automatically', 'Track orders from purchase to delivery', 'Smooth checkout that converts'],
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'service-api-integration',
    title: 'API Integration & Automation',
    description: 'Connect your tools. Stop copying data between apps.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    features: ['Connect your existing tools seamlessly', 'Data flows automatically between systems', 'Automate the repetitive stuff', 'Works with the software you already use'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'service-consulting',
    title: 'Technical Consulting',
    description: "Not sure where to start? Let's figure it out together.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    features: ['Understand exactly what you need', 'Pick the right tools for your budget', 'Clear plan before any code is written', 'Built to scale as your business grows'],
    gradient: 'from-yellow-500 to-orange-500'
  }
]

function Services() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="services" className="py-16 lg:py-24 bg-dark-900">
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
            What I <span className="gradient-text">Build</span>
          </h2>
          <p className="section-subheading">
            {/* EDIT: Section description */}
            From simple landing pages to complex web applications, I&apos;ve got you covered
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-[calc(50%-1rem)]">
              <ServiceCard service={service} index={index} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            {/* EDIT: CTA text */}
            Not sure which service fits your needs?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base"
          >
            <span className="sm:hidden">Free Consultation</span>
            <span className="hidden sm:inline">Book a Free Consultation</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }) {
  const [cardRef, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <div
      id={service.id}
      ref={cardRef}
      className={`group transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="glass-card h-full p-6 lg:p-8 hover:bg-dark-700/50 transition-all duration-300 ease-out relative overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/10 gradient-border-animate rounded-2xl">
        {/* Gradient Glow Effect */}
        <div
          className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full`}
        />

        {/* Icon with glow effect */}
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-10 flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-all duration-300 icon-glow`}
        >
          {service.icon}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
        <p className="text-gray-400 mb-5">{service.description}</p>

        {/* Features List */}
        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
              <svg className="w-4 h-4 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Services
