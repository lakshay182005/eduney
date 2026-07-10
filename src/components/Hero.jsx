import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-scroll'
import prernaImage from '../assets/image.jpeg'

const Hero = () => {
  return (
    <section id="home" className="min-h-[80vh] lg:min-h-[90vh] flex items-center pt-16 sm:pt-20 pb-8 sm:pb-12 relative overflow-hidden bg-gradient-to-br from-[#FAFBFF] via-blue-50/30 to-white">
      {/* Premium soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-primary/5" />
      <div className="absolute top-16 sm:top-20 left-1/4 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] bg-primary/8 rounded-full blur-3xl" />
      <div className="absolute bottom-16 sm:bottom-20 right-1/4 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px] bg-secondary/8 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/3 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] bg-blue-100/30 rounded-full blur-2xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg shadow-primary/15"
            >
              <span className="text-xs sm:text-sm font-medium text-white">⭐ Live Online Classes</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[clamp(1.75rem,5vw,3rem)] sm:text-[clamp(2rem,5.5vw,3.5rem)] md:text-[clamp(2.25rem,6vw,4rem)] lg:text-[clamp(2.5rem,6.5vw,4.5rem)] xl:text-[clamp(2.75rem,7vw,5rem)] font-bold leading-[1.1] lg:leading-[1.1] text-dark tracking-tight text-center lg:text-left"
            >
              Personalized Learning That Builds{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Confidence</span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[clamp(0.95rem,2vw,1.1rem)] sm:text-[clamp(1rem,2.2vw,1.15rem)] lg:text-[clamp(1.05rem,2.3vw,1.2rem)] text-gray-600 leading-relaxed max-w-full lg:max-w-2xl text-center lg:text-left"
            >
              Welcome to EDUNEY. At EDUNEY, we believe every student thrives with personalized guidance, engaging instruction, and a learning approach tailored to their unique academic needs. Led by Prerna, an accomplished educator with 6+ years of teaching experience, EDUNEY offers high-quality online tuition designed to foster academic excellence, critical thinking, and lifelong confidence in learners.
            </motion.p>

            {/* Second Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-[clamp(0.95rem,2vw,1.1rem)] sm:text-[clamp(1rem,2.2vw,1.15rem)] lg:text-[clamp(1.05rem,2.3vw,1.2rem)] text-gray-600 leading-relaxed max-w-full lg:max-w-2xl text-center lg:text-left"
            >
Prerna has extensive experience teaching students across national and international curricula, including specialized preparation for the PSLE (Singapore) examination.            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 w-full max-w-md mx-auto lg:mx-0 lg:max-w-none"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="democlass"
                  smooth={true}
                  duration={500}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg shadow-primary/25 transition-all duration-300 text-center cursor-pointer block text-[clamp(0.9rem,2vw,1rem)] sm:text-[clamp(0.95rem,2.1vw,1.05rem)]"
                >
                  Book Free Demo
                </Link>
              </motion.button>
              <motion.a
                href="https://wa.me/918700142920"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(16, 185, 129, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold shadow-lg shadow-green-500/25 transition-all duration-300 flex items-center justify-center gap-2 text-[clamp(0.9rem,2vw,1rem)] sm:text-[clamp(0.95rem,2.1vw,1.05rem)]"
              >
                <FaWhatsapp size={16} sm:size={20} />
                WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center mt-12 lg:mt-8 order-1 lg:order-2"
          >
            {/* Premium Image Container */}
            <div className="relative w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[20rem] lg:w-[28rem] lg:h-[28rem] xl:w-[36rem] xl:h-[36rem]">
              {/* Large soft blue glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-primary/15 rounded-full blur-3xl" />
              {/* Secondary soft glow */}
              <div className="absolute inset-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full blur-2xl" />
              
              {/* Large circular gradient border */}
              <div className="absolute inset-6 bg-gradient-to-br from-primary via-white to-secondary rounded-full p-[4px] shadow-2xl shadow-primary/20">
                <div className="w-full h-full rounded-full bg-white overflow-hidden relative">
                  <img
                    src={prernaImage}
                    alt="Prerna - EDUNEY Educator"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 15%' }}
                  />
                </div>
              </div>

              {/* Floating Glass Card 1: 6+ Years Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="absolute -top-2 -left-2 top-2 left-2 sm:top-12 sm:-left-12 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-4 sm:p-5 lg:p-6 border border-gray-100 hidden sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl text-white">🎓</span>
                  </div>
                  <div>
                    <p className="font-bold text-dark text-lg">6+ Years</p>
                    <p className="text-sm text-gray-600">Experience</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Glass Card 2: CTET Qualified */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="absolute top-1/3 -right-8 sm:-right-16 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-4 sm:p-5 lg:p-6 border border-gray-100 hidden sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl text-white">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-dark text-lg">CTET</p>
                    <p className="text-sm text-gray-600">Qualified</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Glass Card 3: International Curriculum */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="absolute bottom-1/4 -left-8 sm:-left-16 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-4 sm:p-5 lg:p-6 border border-gray-100 hidden sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl text-white">🌍</span>
                  </div>
                  <div>
                    <p className="font-bold text-dark text-lg">International</p>
                    <p className="text-sm text-gray-600">Curriculum</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Glass Card 4: PSLE Preparation */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="absolute -bottom-2 -right-2 sm:bottom-12 sm:-right-12 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-4 sm:p-5 lg:p-6 border border-gray-100 hidden sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl text-white">🇸🇬</span>
                  </div>
                  <div>
                    <p className="font-bold text-dark text-lg">PSLE</p>
                    <p className="text-sm text-gray-600">Singapore</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
