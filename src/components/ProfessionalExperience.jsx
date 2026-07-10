import { motion } from 'framer-motion'
import { FaSchool } from 'react-icons/fa'

const ProfessionalExperience = () => {
  return (
    <section id="professionalexperience" className="py-16 sm:py-20 lg:py-24 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] sm:text-[clamp(2rem,4.5vw,3rem)] lg:text-[clamp(2.25rem,5vw,3.5rem)] xl:text-[clamp(2.5rem,5.5vw,4rem)] font-bold mb-4 text-dark">
            Professional <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-[clamp(0.9rem,2vw,1.05rem)] sm:text-[clamp(0.95rem,2.1vw,1.1rem)] lg:text-[clamp(1rem,2.2vw,1.15rem)] text-gray-600">Teaching excellence in educational institutions</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -4 }}
          className="flex justify-center"
        >
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-200/60 hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden w-full max-w-[1100px] lg:w-[75%]">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary" />
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 pl-0 sm:pl-8">
              <div className="bg-gradient-to-br from-primary/10 to-primary/15 rounded-2xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                <FaSchool size={28} sm:size={32} md:size={36} className="text-primary" />
              </div>
              <div>
                <h3 className="text-[clamp(1.1rem,2.5vw,1.4rem)] sm:text-[clamp(1.25rem,2.8vw,1.6rem)] lg:text-[clamp(1.4rem,3vw,1.8rem)] font-bold text-dark mb-4 line-clamp-2">
                  Teaching Experience at Renowned Schools
                </h3>
                <p className="text-[clamp(0.9rem,2vw,1.05rem)] sm:text-[clamp(0.95rem,2.1vw,1.1rem)] lg:text-[clamp(1rem,2.2vw,1.15rem)] text-gray-600 leading-relaxed mb-4">
                  Prerna has gained extensive teaching experience working with prestigious educational institutions in Delhi. Her professional journey encompasses diverse classroom settings where she has developed and implemented comprehensive instructional strategies tailored to meet varied learning requirements.
                </p>
                <p className="text-[clamp(0.9rem,2vw,1.05rem)] sm:text-[clamp(0.95rem,2.1vw,1.1rem)] lg:text-[clamp(1rem,2.2vw,1.15rem)] text-gray-600 leading-relaxed">
                  Through her tenure at established schools, she has honed her expertise in curriculum delivery, student assessment, and creating inclusive learning environments that support academic growth and holistic development of learners across different age groups and proficiency levels.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProfessionalExperience
