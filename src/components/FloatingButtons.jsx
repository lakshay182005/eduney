import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp, FaWhatsapp } from 'react-icons/fa'

const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918700142920"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:shadow-xl transition-all duration-300"
      >
        <FaWhatsapp size={24} />
      </motion.a>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-4 right-16 sm:bottom-6 sm:right-24 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-secondary transition-colors"
          >
            <FaArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default FloatingButtons
