import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Smooth scroll to top with easing
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [pathname])

  // Intersection Observer for reveal animations
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      }, observerOptions)

      // Observe all animatable elements
      const selectors = [
        '.reveal',
        '.card-grid',
        '.stats',
        '.section__header',
        '.split',
        '.cta',
        '.clients-grid'
      ]

      const revealElements = document.querySelectorAll(selectors.join(', '))
      revealElements.forEach(el => observer.observe(el))

      return () => observer.disconnect()
    }, 100)

    return () => clearTimeout(timer)
  }, [pathname])

  return null
}

export default ScrollToTop
