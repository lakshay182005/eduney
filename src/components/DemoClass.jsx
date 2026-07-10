import { useState } from 'react'
import { motion } from 'framer-motion'

const DemoClass = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    classGrade: '',
    subject: '',
    tuitionMode: 'online',
    preferredTime: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    const requiredFields = {
      studentName: 'Student Name',
      parentName: 'Parent Name',
      phone: 'Phone Number',
      classGrade: 'Class',
      subject: 'Subject',
      preferredTime: 'Preferred Time',
    }

    Object.keys(requiredFields).forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = `${requiredFields[field]} is required`
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const message = `Hello Prerna,\n\nI would like to book a free demo class.\n\nStudent Name: ${formData.studentName}\nParent Name: ${formData.parentName}\nPhone Number: ${formData.phone}\nClass: ${formData.classGrade}\nSubject: ${formData.subject}\nPreferred Time: ${formData.preferredTime}\nMessage: ${formData.message || 'N/A'}\n\nLooking forward to your response.\n\nThank you.`

      const encodedMessage = encodeURIComponent(message)
      const whatsappUrl = `https://wa.me/918700142920?text=${encodedMessage}`

      window.open(whatsappUrl, '_blank')

      setFormData({
        studentName: '',
        parentName: '',
        phone: '',
        classGrade: '',
        subject: '',
        tuitionMode: 'online',
        preferredTime: '',
        message: '',
      })
      setErrors({})
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="democlass" className="py-16 sm:py-20 lg:py-24 bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] sm:text-[clamp(2rem,4.5vw,3rem)] lg:text-[clamp(2.25rem,5vw,3.5rem)] xl:text-[clamp(2.5rem,5.5vw,4rem)] font-bold mb-4 text-dark">
            Book Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Free Demo Class</span>
          </h2>
          <p className="text-[clamp(0.9rem,2vw,1.05rem)] sm:text-[clamp(0.95rem,2.1vw,1.1rem)] lg:text-[clamp(1rem,2.2vw,1.15rem)] text-gray-600">Schedule a complimentary online session to discuss educational needs</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/90 backdrop-blur-lg rounded-[20px] p-6 sm:p-8 lg:p-12 shadow-sm border border-gray-200/60 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[clamp(0.85rem,1.8vw,0.95rem)] sm:text-[clamp(0.9rem,1.9vw,1rem)] font-medium text-gray-700 mb-2">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border outline-none transition-all duration-300 bg-white text-[clamp(0.9rem,1.9vw,1rem)] sm:text-[clamp(0.95rem,2vw,1.05rem)] ${
                      errors.studentName
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/50'
                    }`}
                    placeholder="Enter student name"
                  />
                  {errors.studentName && (
                    <p className="mt-1 text-[clamp(0.8rem,1.7vw,0.9rem)] sm:text-[clamp(0.85rem,1.8vw,0.95rem)] text-red-500">{errors.studentName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-[clamp(0.85rem,1.8vw,0.95rem)] sm:text-[clamp(0.9rem,1.9vw,1rem)] font-medium text-gray-700 mb-2">
                    Parent Name *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border outline-none transition-all duration-300 bg-white text-[clamp(0.9rem,1.9vw,1rem)] sm:text-[clamp(0.95rem,2vw,1.05rem)] ${
                      errors.parentName
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/50'
                    }`}
                    placeholder="Enter parent name"
                  />
                  {errors.parentName && (
                    <p className="mt-1 text-[clamp(0.8rem,1.7vw,0.9rem)] sm:text-[clamp(0.85rem,1.8vw,0.95rem)] text-red-500">{errors.parentName}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[clamp(0.85rem,1.8vw,0.95rem)] sm:text-[clamp(0.9rem,1.9vw,1rem)] font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border outline-none transition-all duration-300 bg-white text-[clamp(0.9rem,1.9vw,1rem)] sm:text-[clamp(0.95rem,2vw,1.05rem)] ${
                      errors.phone
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/50'
                    }`}
                    placeholder="Enter phone number"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-[clamp(0.8rem,1.7vw,0.9rem)] sm:text-[clamp(0.85rem,1.8vw,0.95rem)] text-red-500">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block text-[clamp(0.85rem,1.8vw,0.95rem)] sm:text-[clamp(0.9rem,1.9vw,1rem)] font-medium text-gray-700 mb-2">
                    Class *
                  </label>
                  <input
                    type="text"
                    name="classGrade"
                    value={formData.classGrade}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border outline-none transition-all duration-300 bg-white text-[clamp(0.9rem,1.9vw,1rem)] sm:text-[clamp(0.95rem,2vw,1.05rem)] ${
                      errors.classGrade
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/50'
                    }`}
                    placeholder="e.g., Class 8"
                  />
                  {errors.classGrade && (
                    <p className="mt-1 text-[clamp(0.8rem,1.7vw,0.9rem)] sm:text-[clamp(0.85rem,1.8vw,0.95rem)] text-red-500">{errors.classGrade}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[clamp(0.85rem,1.8vw,0.95rem)] sm:text-[clamp(0.9rem,1.9vw,1rem)] font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border outline-none transition-all duration-300 bg-white text-[clamp(0.9rem,1.9vw,1rem)] sm:text-[clamp(0.95rem,2vw,1.05rem)] ${
                      errors.subject
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/50'
                    }`}
                    placeholder="e.g., Mathematics"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-[clamp(0.8rem,1.7vw,0.9rem)] sm:text-[clamp(0.85rem,1.8vw,0.95rem)] text-red-500">{errors.subject}</p>
                  )}
                </div>
                <div>
                  <label className="block text-[clamp(0.85rem,1.8vw,0.95rem)] sm:text-[clamp(0.9rem,1.9vw,1rem)] font-medium text-gray-700 mb-2">
                    Tuition Mode *
                  </label>
                  <select
                    name="tuitionMode"
                    value={formData.tuitionMode}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-white hover:border-primary/40 text-[clamp(0.9rem,1.9vw,1rem)] sm:text-[clamp(0.95rem,2vw,1.05rem)]"
                  >
                    <option value="online">Online Tuition</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[clamp(0.85rem,1.8vw,0.95rem)] sm:text-[clamp(0.9rem,1.9vw,1rem)] font-medium text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <input
                  type="text"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border outline-none transition-all duration-300 bg-white text-[clamp(0.9rem,1.9vw,1rem)] sm:text-[clamp(0.95rem,2vw,1.05rem)] ${
                    errors.preferredTime
                      ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                      : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/40'
                  }`}
                  placeholder="e.g., Evening 5-6 PM"
                />
                {errors.preferredTime && (
                  <p className="mt-1 text-[clamp(0.8rem,1.7vw,0.9rem)] sm:text-[clamp(0.85rem,1.8vw,0.95rem)] text-red-500">{errors.preferredTime}</p>
                )}
              </div>

              <div>
                <label className="block text-[clamp(0.85rem,1.8vw,0.95rem)] sm:text-[clamp(0.9rem,1.9vw,1rem)] font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none bg-white hover:border-primary/40 text-[clamp(0.9rem,1.9vw,1rem)] sm:text-[clamp(0.95rem,2vw,1.05rem)]"
                  placeholder="Any additional information..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg shadow-primary/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-[clamp(0.9rem,1.8vw,1rem)] sm:text-[clamp(0.95rem,1.9vw,1.05rem)]"
              >
                {isSubmitting ? 'Booking...' : 'Book Free Demo'}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DemoClass
