import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] sm:text-[clamp(2rem,4.5vw,3rem)] lg:text-[clamp(2.25rem,5vw,3.5rem)] xl:text-[clamp(2.5rem,5.5vw,4rem)] font-bold mb-4 text-dark">
            Get In <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-[clamp(0.9rem,2vw,1.05rem)] sm:text-[clamp(0.95rem,2.1vw,1.1rem)] lg:text-[clamp(1rem,2.2vw,1.15rem)] text-gray-600">We'd love to hear from you</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-white rounded-[20px] p-6 sm:p-8 shadow-sm border border-gray-200/60 hover:shadow-xl hover:border-primary/30 transition-all duration-300 text-center group"
          >
            <div className="bg-gradient-to-br from-primary/10 to-primary/15 rounded-2xl p-5 sm:p-6 inline-block mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
              <FaPhone size={28} sm:size={30} md:size={32} className="text-primary" />
            </div>
            <h3 className="text-[clamp(1rem,2.2vw,1.15rem)] sm:text-[clamp(1.1rem,2.4vw,1.25rem)] lg:text-[clamp(1.2rem,2.6vw,1.35rem)] font-bold text-dark mb-2 group-hover:text-primary transition-colors">Phone</h3>
            <p className="text-[clamp(0.85rem,1.8vw,0.95rem)] sm:text-[clamp(0.9rem,1.9vw,1rem)] lg:text-[clamp(0.95rem,2vw,1.05rem)] text-gray-600">+91 87001 42920</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-white rounded-[20px] p-6 sm:p-8 shadow-sm border border-gray-200/60 hover:shadow-xl hover:border-primary/30 transition-all duration-300 text-center group"
          >
            <div className="bg-gradient-to-br from-primary/10 to-primary/15 rounded-2xl p-5 sm:p-6 inline-block mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
              <FaEnvelope size={28} sm:size={30} md:size={32} className="text-primary" />
            </div>
            <h3 className="text-[clamp(1rem,2.2vw,1.15rem)] sm:text-[clamp(1.1rem,2.4vw,1.25rem)] lg:text-[clamp(1.2rem,2.6vw,1.35rem)] font-bold text-dark mb-2 group-hover:text-primary transition-colors">Email</h3>
            <p className="text-[clamp(0.85rem,1.8vw,0.95rem)] sm:text-[clamp(0.9rem,1.9vw,1rem)] lg:text-[clamp(0.95rem,2vw,1.05rem)] text-gray-600">prernamehndiratta005@gmail.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-white rounded-[20px] p-6 sm:p-8 shadow-sm border border-gray-200/60 hover:shadow-xl hover:border-primary/30 transition-all duration-300 text-center group"
          >
            <div className="bg-gradient-to-br from-primary/10 to-primary/15 rounded-2xl p-5 sm:p-6 inline-block mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
              <FaMapMarkerAlt size={28} sm:size={30} md:size={32} className="text-primary" />
            </div>
            <h3 className="text-[clamp(1rem,2.2vw,1.15rem)] sm:text-[clamp(1.1rem,2.4vw,1.25rem)] lg:text-[clamp(1.2rem,2.6vw,1.35rem)] font-bold text-dark mb-2 group-hover:text-primary transition-colors">Location</h3>
            <p className="text-[clamp(0.85rem,1.8vw,0.95rem)] sm:text-[clamp(0.9rem,1.9vw,1rem)] lg:text-[clamp(0.95rem,2vw,1.05rem)] text-gray-600">New Delhi, India</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-white rounded-[20px] p-6 sm:p-8 shadow-sm border border-gray-200/60 hover:shadow-xl hover:border-primary/30 transition-all duration-300 text-center group"
          >
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/15 rounded-2xl p-5 sm:p-6 inline-block mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
              <FaWhatsapp size={28} sm:size={30} md:size={32} className="text-secondary" />
            </div>
            <h3 className="text-[clamp(1rem,2.2vw,1.15rem)] sm:text-[clamp(1.1rem,2.4vw,1.25rem)] lg:text-[clamp(1.2rem,2.6vw,1.35rem)] font-bold text-dark mb-2 group-hover:text-secondary transition-colors">WhatsApp</h3>
            <motion.a
              href="https://wa.me/918700142920"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="text-[clamp(0.85rem,1.8vw,0.95rem)] sm:text-[clamp(0.9rem,1.9vw,1rem)] lg:text-[clamp(0.95rem,2vw,1.05rem)] text-primary hover:text-secondary transition-colors inline-block"
            >
              Chat with us
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
