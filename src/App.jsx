import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Qualifications from './components/Qualifications'
import Subjects from './components/Subjects'
import ProfessionalExperience from './components/ProfessionalExperience'
import InternationalCurriculum from './components/InternationalCurriculum'
import Reviews from './components/Reviews'
import WhyChooseUs from './components/WhyChooseUs'
import DemoClass from './components/DemoClass'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import FloatingButtons from './components/FloatingButtons'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.h1
                className="text-4xl font-bold gradient-text"
                animate={{ 
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                EDUNEY
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-2 text-gray-500"
              >
                Empowering Young Minds
              </motion.p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ScrollProgress />
            <Navbar />
            <Hero />
            <About />
            <Qualifications />
            <Subjects />
            <ProfessionalExperience />
            <InternationalCurriculum />
            <Reviews />
            <WhyChooseUs />
            <DemoClass />
            <Contact />
            <Footer />
            <FloatingButtons />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
