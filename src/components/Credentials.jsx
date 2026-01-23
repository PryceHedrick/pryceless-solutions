import { useState, useEffect, useRef } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

// Animated counter hook
function useCountUp(end, duration = 1500, shouldStart = false) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)

  useEffect(() => {
    if (!shouldStart) return

    let startTime = null
    const startValue = 0

    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(startValue + (end - startValue) * easeOut)

      setCount(currentCount)

      if (progress < 1) {
        countRef.current = requestAnimationFrame(animate)
      }
    }

    countRef.current = requestAnimationFrame(animate)

    return () => {
      if (countRef.current) {
        cancelAnimationFrame(countRef.current)
      }
    }
  }, [end, duration, shouldStart])

  return count
}

// Stats data
const stats = [
  { value: 12, suffix: '+', label: 'Projects Completed' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 24, suffix: 'hr', label: 'Response Time' },
  { value: 2, suffix: '+', label: 'Years Experience' }
]

// EDIT: Credentials and achievements
const credentials = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    title: 'BS Computer Science',
    subtitle: 'University of Southern Indiana'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Outstanding Senior Project',
    subtitle: 'Award 2024'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Dean's List",
    subtitle: 'Fall 2022, Spring 2023'
  }
]

// EDIT: Tech stack - Add or modify technologies you work with
const techStack = [
  { name: 'Python', color: '#3B82F6' },      // Blue
  { name: 'SQL', color: '#6366F1' },          // Blue-Indigo
  { name: 'Flask', color: '#818CF8' },        // Indigo
  { name: 'C#', color: '#A78BFA' },           // Purple
  { name: 'ASP.NET', color: '#C084FC' },      // Violet
  { name: 'React', color: '#22D3EE' },        // Cyan
  { name: 'JavaScript', color: '#2DD4BF' },   // Teal
  { name: 'Tailwind', color: '#34D399' },     // Teal-Green
  { name: 'Git', color: '#FB923C' },          // Orange
  { name: 'REST APIs', color: '#F87171' }     // Coral
]

function Credentials() {
  const [sectionRef, isVisible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="py-16 bg-dark-900 border-y border-dark-700/50">
      <div
        ref={sectionRef}
        className={`section-container transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Stats Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <StatCounter key={index} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>

        {/* Award Badge - Clean yellow badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-amber-500/10 border border-amber-500/20 rounded-full">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium text-amber-300">Outstanding Senior Project Award</span>
            <span className="text-amber-500/50">·</span>
            <span className="text-sm text-amber-400/70">USI 2024</span>
          </div>
        </div>

        {/* Credentials Row */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 mb-12">
          {credentials.filter(c => c.title !== 'Outstanding Senior Project').map((credential, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-3 glass-card hover:bg-dark-700/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/10 w-full sm:w-auto min-h-[72px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-primary-500/20 flex items-center justify-center text-primary-400">
                {credential.icon}
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-white">{credential.title}</p>
                <p className="text-sm text-gray-400">{credential.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="text-center">
          <p className="text-gray-400 mb-6 text-sm uppercase tracking-wider">
            {/* EDIT: Tech stack label */}
            Technologies I Work With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group relative px-4 py-2 glass-card cursor-default
                           transition-all duration-300 ease-out
                           hover:bg-dark-700/50 hover:scale-105 hover:-translate-y-0.5
                           hover:shadow-lg hover:shadow-primary-500/10
                           animate-fade-in-up opacity-0"
                style={{
                  animationDelay: `${index * 80}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="relative flex items-center justify-center">
                    {/* Base dot with subtle synchronized pulse */}
                    <div
                      className="w-2 h-2 rounded-full animate-subtle-pulse"
                      style={{ backgroundColor: tech.color }}
                    />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                    {tech.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCounter({ stat, index, isVisible }) {
  const count = useCountUp(stat.value, 1200, isVisible)

  return (
    <div
      className="text-center p-4 glass-card hover:bg-dark-700/50 transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
        {isVisible ? count : 0}
        <span className="text-primary-400">{stat.suffix}</span>
      </div>
      <p className="text-sm text-gray-400">{stat.label}</p>
    </div>
  )
}

export default Credentials
