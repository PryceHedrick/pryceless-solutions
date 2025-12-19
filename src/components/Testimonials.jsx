import useScrollAnimation from '../hooks/useScrollAnimation'

// EDIT: Testimonials - Replace with real testimonials when available
const testimonials = [
  {
    id: 1,
    quote: "Pryce delivered exactly what we needed. Professional, communicative, and the end result exceeded our expectations.",
    name: "Client Name",
    title: "Founder, Company Name",
    // EDIT: Add client avatar image path
    avatar: null
  },
  {
    id: 2,
    quote: "Working with Pryceless Solutions was seamless from start to finish. They understood our vision and brought it to life perfectly.",
    name: "Client Name",
    title: "CEO, Business Name",
    // EDIT: Add client avatar image path
    avatar: null
  },
  {
    id: 3,
    quote: "The attention to detail and commitment to quality was impressive. I would highly recommend Pryce for any web development project.",
    name: "Client Name",
    title: "Owner, Company Name",
    // EDIT: Add client avatar image path
    avatar: null
  }
]

function Testimonials() {
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-dark-800/30">
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
            What <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="section-subheading">
            {/* EDIT: Section description */}
            Don't just take my word for it
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Placeholder Note */}
        <p className="text-center text-gray-500 text-sm mt-8 italic">
          {/* EDIT: Remove this note once you have real testimonials */}
          Testimonials will be updated with real client feedback
        </p>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, index }) {
  const [cardRef, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="glass-card p-6 lg:p-8 h-full flex flex-col hover:bg-dark-700/50 transition-colors">
        {/* Quote Icon */}
        <div className="text-primary-500/30 mb-4">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Quote */}
        <blockquote className="text-gray-300 text-lg mb-6 flex-grow">
          "{testimonial.quote}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full overflow-hidden bg-dark-700 flex-shrink-0">
            {testimonial.avatar ? (
              // EDIT: Replace with actual client photos
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            )}
          </div>

          {/* Name & Title */}
          <div>
            <p className="font-semibold text-white">{testimonial.name}</p>
            <p className="text-sm text-gray-400">{testimonial.title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
