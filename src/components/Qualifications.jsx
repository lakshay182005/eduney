import { motion } from 'framer-motion'
import { FaGraduationCap, FaLanguage, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa'

const Qualifications = () => {
  const qualifications = [
    {
      icon: <FaGraduationCap size={24} sm:size={28} md:size={32} />,
      title: "Master's in Education",
      subtitle: 'Currently Pursuing • Specialisation: English & Political Science',
      color: 'from-primary/10 to-primary/15',
      iconColor: 'text-primary',
    },
    {
      icon: <FaGraduationCap size={24} sm:size={28} md:size={32} />,
      title: "Bachelor's in Elementary Education",
      subtitle: 'Completed',
      color: 'from-primary/10 to-primary/15',
      iconColor: 'text-primary',
    },
    {
      icon: <FaCertificate size={24} sm:size={28} md:size={32} />,
      title: 'CTET Qualified',
      subtitle: 'Paper I & Paper II',
      color: 'from-primary/10 to-primary/15',
      iconColor: 'text-primary',
    },
    {
      icon: <FaLanguage size={24} sm:size={28} md:size={32} />,
      title: 'French Language',
      subtitle: 'Level B1',
      color: 'from-primary/10 to-primary/15',
      iconColor: 'text-primary',
    },
    {
      icon: <FaChalkboardTeacher size={24} sm:size={28} md:size={32} />,
      title: 'Teaching Experience',
      subtitle: '6+ Years',
      color: 'from-primary/10 to-primary/15',
      iconColor: 'text-primary',
    },
  ]

  return (
    <section id="qualifications" className="py-16 sm:py-20 lg:py-24 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] sm:text-[clamp(2rem,4.5vw,3rem)] lg:text-[clamp(2.25rem,5vw,3.5rem)] xl:text-[clamp(2.5rem,5.5vw,4rem)] font-bold mb-4 text-dark">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Qualifications</span>
          </h2>
          <p className="text-[clamp(0.9rem,2vw,1.05rem)] sm:text-[clamp(0.95rem,2.1vw,1.1rem)] lg:text-[clamp(1rem,2.2vw,1.15rem)] text-gray-600">Expertise that matters</p>
        </motion.div>

        <div className="flex justify-center items-stretch flex-wrap gap-6">
          {qualifications.map((qualification, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-white rounded-3xl p-4 sm:p-5 lg:p-6 shadow-sm border border-gray-200/60 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group w-full max-w-[380px] mx-auto"
            >
                <div className={`bg-gradient-to-br ${qualification.color} rounded-2xl w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:scale-105 transition-transform duration-300`}>
                  <div className={qualification.iconColor}>{qualification.icon}</div>
                </div>
                <h3 className="text-[clamp(1rem,2.2vw,1.15rem)] sm:text-[clamp(1.1rem,2.4vw,1.25rem)] lg:text-[clamp(1.2rem,2.6vw,1.35rem)] font-bold text-dark mb-2 sm:mb-3 text-center group-hover:text-primary transition-colors">
                  {qualification.title}
                </h3>
                <p className="text-[clamp(0.85rem,1.8vw,0.95rem)] sm:text-[clamp(0.9rem,1.9vw,1rem)] lg:text-[clamp(0.95rem,2vw,1.05rem)] text-gray-600 leading-relaxed text-center">{qualification.subtitle}</p>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Qualifications
