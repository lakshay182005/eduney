import { motion } from 'framer-motion'
import { FaGlobeAmericas, FaBookOpen } from 'react-icons/fa'
import Reviews from './Reviews'

const InternationalCurriculum = () => {
  return (
    <section id="internationalcurriculum" className="py-16 sm:py-20 lg:py-24 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] sm:text-[clamp(2rem,4.5vw,3rem)] lg:text-[clamp(2.25rem,5vw,3.5rem)] xl:text-[clamp(2.5rem,5.5vw,4rem)] font-bold mb-4 text-dark">
            International Curriculum <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-[clamp(0.9rem,2vw,1.05rem)] sm:text-[clamp(0.95rem,2.1vw,1.1rem)] lg:text-[clamp(1rem,2.2vw,1.15rem)] text-gray-600">Global educational standards and methodologies</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Geographic Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-4 sm:p-5 lg:p-6 shadow-sm border border-gray-200/60 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/15 rounded-2xl w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
                <FaGlobeAmericas size={24} sm:size={28} md:size={32} className="text-primary" />
              </div>
              <h3 className="text-[clamp(1.25rem,2.8vw,1.6rem)] sm:text-[clamp(1.35rem,3vw,1.75rem)] lg:text-[clamp(1.5rem,3.2vw,1.9rem)] font-bold text-dark">
                Geographic Experience
              </h3>
            </div>
            <p className="text-[clamp(0.9rem,2vw,1.05rem)] sm:text-[clamp(0.95rem,2.1vw,1.1rem)] lg:text-[clamp(1rem,2.2vw,1.15rem)] text-gray-600 leading-relaxed mb-6">
              Prerna has extensive experience teaching students from diverse international backgrounds, including the United States, United Kingdom, Singapore, Canada, and Dubai. This cross-cultural exposure has enabled her to develop adaptable teaching approaches that resonate with learners from various educational systems and cultural contexts.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['USA', 'United Kingdom', 'Singapore', 'Canada', 'Dubai'].map((country) => (
                <motion.span
                  key={country}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-lightBlue text-primary rounded-full text-[clamp(0.8rem,1.7vw,0.9rem)] sm:text-[clamp(0.85rem,1.8vw,0.95rem)] font-medium cursor-pointer shadow-sm hover:shadow-md transition-all"
                >
                  {country}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Curriculum Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-4 sm:p-5 lg:p-6 shadow-sm border border-gray-200/60 hover:shadow-xl hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <div className="bg-gradient-to-br from-primary/10 to-primary/15 rounded-2xl w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
                <FaBookOpen size={24} sm:size={28} md:size={32} className="text-primary" />
              </div>
              <h3 className="text-[clamp(1.25rem,2.8vw,1.6rem)] sm:text-[clamp(1.35rem,3vw,1.75rem)] lg:text-[clamp(1.5rem,3.2vw,1.9rem)] font-bold text-dark">
                Curriculum Expertise
              </h3>
            </div>
            <p className="text-[clamp(0.9rem,2vw,1.05rem)] sm:text-[clamp(0.95rem,2.1vw,1.1rem)] lg:text-[clamp(1rem,2.2vw,1.15rem)] text-gray-600 leading-relaxed mb-6">
              Her teaching methodology is informed by comprehensive knowledge of multiple international curricula, including Cambridge, IB, US Common Core, British, CBSE, ICSE, and Singapore MoE frameworks. Prerna adapts her instructional strategies according to each curriculum's specific requirements while maintaining consistency in educational standards.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Cambridge', 'IB', 'US Common Core', 'British', 'CBSE', 'ICSE', 'Singapore MoE'].map((curriculum) => (
                <motion.span
                  key={curriculum}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-lightBlue text-primary rounded-full text-[clamp(0.8rem,1.7vw,0.9rem)] sm:text-[clamp(0.85rem,1.8vw,0.95rem)] font-medium cursor-pointer shadow-sm hover:shadow-md transition-all"
                >
                  {curriculum}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default InternationalCurriculum
