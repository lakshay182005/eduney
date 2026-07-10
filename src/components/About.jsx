import { motion } from 'framer-motion'
import prernaImage from '../assets/image.jpeg'

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] sm:text-[clamp(2rem,4.5vw,3rem)] lg:text-[clamp(2.25rem,5vw,3.5rem)] xl:text-[clamp(2.5rem,5.5vw,4rem)] font-bold mb-4 sm:mb-6 lg:mb-8 text-dark">
            Meet Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Educator</span>
          </h2>
          <p className="text-[clamp(0.9rem,2vw,1.05rem)] sm:text-[clamp(0.95rem,2.1vw,1.1rem)] lg:text-[clamp(1rem,2.2vw,1.15rem)] text-gray-600 leading-relaxed mb-3 sm:mb-4">
            Prerna is an experienced educator with 6+ years of teaching expertise across diverse educational settings. She had completed a Master's in Education with specialisation in English and Political Science, having completed her Bachelor's in Elementary Education. Prerna is qualified in both CTET Paper I and Paper II, demonstrating her comprehensive understanding of pedagogical frameworks and educational standards.
          </p>
          <p className="text-[clamp(0.9rem,2vw,1.05rem)] sm:text-[clamp(0.95rem,2.1vw,1.1rem)] lg:text-[clamp(1rem,2.2vw,1.15rem)] text-gray-600 leading-relaxed mt-3 sm:mt-4">
            Her teaching philosophy emphasises learner-centred approaches that foster critical thinking and personalised instruction. Prerna is committed to creating engaging learning environments that adapt to individual student needs, promoting continuous professional growth and meaningful student engagement through concept-based learning methodologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.01 }}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <div className="relative">
            <div className="w-[14rem] h-[14rem] sm:w-[18rem] sm:h-[18rem] md:w-[22rem] md:h-[22rem] lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 flex items-center justify-center shadow-xl">
              <div className="w-[12rem] h-[12rem] sm:w-[16rem] sm:h-[16rem] md:w-[20rem] md:h-[20rem] lg:w-[26rem] lg:h-[26rem] xl:w-[30rem] xl:h-[30rem] rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden border border-gray-200/60">
                <img
                  src={prernaImage}
                  alt="Prerna - EDUNEY Educator"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 15%' }}
                />
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -2 }}
              className="absolute -bottom-3 sm:-bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-lg rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-sm border border-gray-200/60"
            >
              <p className="font-semibold text-[clamp(0.9rem,2vw,1rem)] sm:text-[clamp(0.95rem,2.1vw,1.05rem)] lg:text-[clamp(1rem,2.2vw,1.1rem)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Prerna</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
