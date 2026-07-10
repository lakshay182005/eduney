import { motion } from 'framer-motion'

const Experience = () => {
  const milestones = [
    { year: '2019', title: 'Started Teaching', description: 'Began the journey of educating young minds' },
    { year: '2021', title: 'Expanded Home Tuition', description: 'Extended services to home tuition' },
    { year: '2023', title: 'Started Online Classes', description: 'Launched online teaching platform' },
    { year: '2026', title: '100+ Students Mentored', description: 'Successfully guided over 100 students' },
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Experience <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-gray-600 text-lg">A journey of growth and excellence</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2 rounded-full" />
          
          {/* Timeline Items */}
          <div className="grid md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Year Badge */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-block bg-gradient-to-br from-primary to-secondary text-white px-6 py-3 rounded-full font-bold text-lg mb-6 shadow-lg relative z-10"
                >
                  {milestone.year}
                </motion.div>
                
                {/* Arrow */}
                <div className="hidden md:block text-2xl text-primary mb-4">↓</div>
                
                {/* Content */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
