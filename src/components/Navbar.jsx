import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ['home', 'about', 'qualifications', 'subjects', 'professionalexperience', 'internationalcurriculum', 'reviews', 'whychooseus', 'democlass', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Qualifications', to: 'qualifications' },
    { name: 'Subjects', to: 'subjects' },
    { name: 'Professional Experience', to: 'professionalexperience' },
    { name: 'International Curriculum', to: 'internationalcurriculum' },
    { name: 'Reviews', to: 'reviews' },
    { name: 'Demo Class', to: 'democlass' },
    { name: 'Contact', to: 'contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-200/60' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-[clamp(1.25rem,3vw,1.75rem)] sm:text-[clamp(1.35rem,3.2vw,1.85rem)] lg:text-[clamp(1.5rem,3.5vw,2rem)] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer tracking-tight"
            >
              EDUNEY
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <motion.div
                key={link.to}
                whileHover={{ y: -1 }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className={`text-[clamp(0.85rem,1.8vw,0.95rem)] sm:text-[clamp(0.9rem,1.9vw,1rem)] lg:text-[clamp(0.95rem,2vw,1.05rem)] font-medium cursor-pointer transition-colors duration-300 relative ${
                    activeSection === link.to
                      ? 'text-primary'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {link.name}
                  {activeSection === link.to && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 10px 30px -10px rgba(37, 99, 235, 0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="democlass"
                smooth={true}
                duration={500}
                className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-[clamp(0.85rem,1.8vw,0.95rem)] sm:text-[clamp(0.9rem,1.9vw,1rem)] font-medium shadow-lg shadow-primary/20 transition-all duration-300 cursor-pointer block"
              >
                Book Demo
              </Link>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={20} sm:size={24} /> : <FaBars size={20} sm:size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-20 bg-white/95 backdrop-blur-lg z-40 py-6 px-4 overflow-y-auto"
          >
            <div className="flex flex-col space-y-6 max-w-md mx-auto pt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-[clamp(1rem,2.2vw,1.15rem)] sm:text-[clamp(1.1rem,2.4vw,1.25rem)] font-medium cursor-pointer transition-colors duration-300 py-2 ${
                    activeSection === link.to
                      ? 'text-primary'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="democlass"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full px-6 py-3 sm:py-3.5 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-[clamp(0.95rem,2vw,1.05rem)] sm:text-[clamp(1rem,2.2vw,1.1rem)] font-medium shadow-lg shadow-primary/20 transition-all duration-300 text-center cursor-pointer block"
                >
                  Book Demo
                </Link>
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
