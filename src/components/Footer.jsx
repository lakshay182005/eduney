import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Qualifications', to: 'qualifications' },
    { name: 'Subjects', to: 'subjects' },
    { name: 'Professional Experience', to: 'professionalexperience' },
    { name: 'International Curriculum', to: 'internationalcurriculum' },
    { name: 'Demo Class', to: 'democlass' },
    { name: 'Contact', to: 'contact' },
  ]

  const socialLinks = [
    { icon: <FaFacebook size={16} sm:size={18} md:size={20} />, href: '#' },
    { icon: <FaInstagram size={16} sm:size={18} md:size={20} />, href: '#' },
    { icon: <FaLinkedin size={16} sm:size={18} md:size={20} />, href: '#' },
    { icon: <FaTwitter size={16} sm:size={18} md:size={20} />, href: '#' },
  ]

  return (
    <footer className="bg-dark text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-[clamp(1.5rem,3.5vw,2.25rem)] sm:text-[clamp(1.75rem,4vw,2.5rem)] lg:text-[clamp(2rem,4.5vw,2.75rem)] font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">EDUNEY</h3>
            <p className="text-[clamp(0.85rem,1.8vw,0.95rem)] sm:text-[clamp(0.9rem,1.9vw,1rem)] lg:text-[clamp(0.95rem,2vw,1.05rem)] text-gray-400 mb-6 leading-relaxed">
              Empowering Young Minds, One Lesson at a Time.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 cursor-pointer"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h4 className="text-[clamp(1rem,2.2vw,1.15rem)] sm:text-[clamp(1.1rem,2.4vw,1.25rem)] lg:text-[clamp(1.2rem,2.6vw,1.35rem)] font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-[clamp(0.85rem,1.8vw,0.95rem)] sm:text-[clamp(0.9rem,1.9vw,1rem)] lg:text-[clamp(0.95rem,2vw,1.05rem)] text-gray-400 hover:text-primary hover:pl-2 transition-all duration-300 cursor-pointer block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h4 className="text-[clamp(1rem,2.2vw,1.15rem)] sm:text-[clamp(1.1rem,2.4vw,1.25rem)] lg:text-[clamp(1.2rem,2.6vw,1.35rem)] font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-3 text-[clamp(0.85rem,1.8vw,0.95rem)] sm:text-[clamp(0.9rem,1.9vw,1rem)] lg:text-[clamp(0.95rem,2vw,1.05rem)] text-gray-400">
              <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                <span>📍</span> New Delhi, India
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                <span>📞</span> +91 87001 42920
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                <span>✉️</span> prernamehndiratta005@gmail.com
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-800 mt-12 sm:mt-16 pt-6 sm:pt-8 text-center text-gray-400"
        >
          <p className="text-[clamp(0.8rem,1.7vw,0.9rem)] sm:text-[clamp(0.85rem,1.8vw,0.95rem)] lg:text-[clamp(0.9rem,1.9vw,1rem)]">© 2026 EDUNEY. All Rights Reserved. Designed & Developed by <a href="https://github.com/lakshay182005" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors duration-300 hover:underline">Lakshay ↗</a></p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
