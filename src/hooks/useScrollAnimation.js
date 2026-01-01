import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin for observer
 * @param {boolean} options.triggerOnce - Only trigger animation once
 * @returns {[React.RefObject, boolean]} - Ref to attach and visibility state
 */
export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options

  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce])

  return [ref, isVisible]
}

/**
 * GSAP ScrollTrigger animation hook
 * @param {Object} config - Animation configuration
 */
export function useGsapScrollAnimation(config = {}) {
  const ref = useRef(null)
  const timeline = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      timeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: config.start || 'top 80%',
          end: config.end || 'bottom 20%',
          toggleActions: config.toggleActions || 'play none none reverse',
          ...config.scrollTrigger
        }
      })

      if (config.animation) {
        config.animation(timeline.current, ref.current)
      }
    }, ref)

    return () => ctx.revert()
  }, [])

  return ref
}

/**
 * Parallax effect hook
 * @param {number} speed - Parallax speed (0.5 = half speed)
 */
export function useParallax(speed = 0.5) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: () => window.innerHeight * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    }, ref)

    return () => ctx.revert()
  }, [speed])

  return ref
}

export default useScrollAnimation
