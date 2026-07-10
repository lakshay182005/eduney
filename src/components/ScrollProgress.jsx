import { useState, useEffect } from 'react'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gray-200">
      <div
        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

export default ScrollProgress
