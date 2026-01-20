import { useState, useEffect, useRef } from 'react'

function Stats({ children }) {
  return <div className="stats">{children}</div>
}

function Stat({ number, label }) {
  const [displayNumber, setDisplayNumber] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  // Parse the number - extract numeric value and suffix (like +, %)
  const parseNumber = (str) => {
    const match = str.match(/^(\d+)(.*)$/)
    if (match) {
      return { value: parseInt(match[1], 10), suffix: match[2] }
    }
    return { value: 0, suffix: str }
  }

  const { value: targetNumber, suffix } = parseNumber(number)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateNumber()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateNumber = () => {
    const duration = 2000 // 2 seconds
    const startTime = performance.now()
    const startValue = 0

    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)

    const updateNumber = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutQuart(progress)
      const currentValue = Math.floor(startValue + (targetNumber - startValue) * easedProgress)

      setDisplayNumber(currentValue)

      if (progress < 1) {
        requestAnimationFrame(updateNumber)
      } else {
        setDisplayNumber(targetNumber)
      }
    }

    requestAnimationFrame(updateNumber)
  }

  return (
    <div className="stat" ref={ref}>
      <div className="stat__number">
        {hasAnimated ? displayNumber : 0}{suffix}
      </div>
      <div className="stat__label">{label}</div>
    </div>
  )
}

export { Stats, Stat }
