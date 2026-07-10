import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaUser, FaGraduationCap, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { db } from '../firebase'
import { collection, addDoc, query, where, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore'

const StarRating = ({ rating, setRating, interactive = true }) => {
  const [hover, setHover] = useState(0)

  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.button
          key={star}
          type="button"
          disabled={!interactive}
          whileHover={interactive ? { scale: 1.2 } : {}}
          whileTap={interactive ? { scale: 0.9 } : {}}
          onHoverEnter={() => interactive && setHover(star)}
          onHoverLeave={() => interactive && setHover(0)}
          onClick={() => interactive && setRating(star)}
          className={`text-[clamp(1.25rem,2.5vw,1.5rem)] sm:text-[clamp(1.5rem,3vw,1.75rem)] transition-colors ${
            star <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
          } ${interactive ? 'cursor-pointer' : 'cursor-default'}`}
          aria-label={`Rate ${star} stars`}
        >
          <FaStar />
        </motion.button>
      ))}
    </div>
  )
}

const ReviewCard = ({ review }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLongReview, setIsLongReview] = useState(false)
  
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const formatDate = (timestamp) => {
    if (!timestamp) return ''
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const reviewText = review.review
  const maxLines = 4
  
  // Check if review is long enough to need truncation
  useEffect(() => {
    const lineHeight = 1.5
    const fontSize = 1 // rem
    const maxHeight = maxLines * lineHeight * fontSize * 16 // px
    // Simple check based on character count
    setIsLongReview(reviewText.length > 150)
  }, [reviewText])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-br from-[#F8FCFF] to-[#EEF7FF] rounded-3xl p-5 sm:p-6 lg:p-7 shadow-lg border border-[#D7EAFF] hover:shadow-2xl hover:border-primary/40 transition-all duration-300 w-full flex flex-col h-full"
      style={{ boxShadow: '0 4px 20px rgba(37, 99, 235, 0.08)' }}
    >
      <div className="flex flex-col sm:flex-row items-start gap-4 mb-4 text-center sm:text-left flex-shrink-0">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-[clamp(0.9rem,1.8vw,1rem)] sm:text-[clamp(1rem,2vw,1.1rem)] flex-shrink-0 mx-auto sm:mx-0">
          {getInitials(review.name)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h4 className="font-bold text-dark text-[clamp(0.9rem,1.8vw,1rem)] sm:text-[clamp(0.95rem,1.9vw,1.05rem)] lg:text-[clamp(1rem,2vw,1.1rem)] truncate">{review.name}</h4>
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
              review.role === 'Student' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
            }`}>
              {review.role}
            </span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-2 text-[clamp(0.8rem,1.7vw,0.9rem)] sm:text-[clamp(0.85rem,1.8vw,0.95rem)] lg:text-[clamp(0.9rem,1.9vw,1rem)] text-gray-500 flex-wrap">
            {review.class && <span>Class {review.class}</span>}
            {review.country && <span>• {review.country}</span>}
            <span>• {formatDate(review.createdAt)}</span>
          </div>
        </div>
      </div>
      <div className="mb-3 flex-shrink-0">
        <StarRating rating={review.rating} interactive={false} />
      </div>
      <div className="flex-grow flex flex-col">
        <p className={`text-[clamp(0.85rem,1.8vw,0.95rem)] sm:text-[clamp(0.9rem,1.9vw,1rem)] lg:text-[clamp(0.95rem,2vw,1.05rem)] text-gray-700 leading-relaxed ${!isExpanded && isLongReview ? 'line-clamp-4' : ''}`}>
          {review.review}
        </p>
        {isLongReview && !isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#EEF7FF] to-transparent" />
        )}
        <div className="mt-auto pt-3">
          {isLongReview && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary font-medium text-sm hover:text-secondary transition-colors flex items-center gap-1"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
              {isExpanded ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const Reviews = () => {
  const [reviews, setReviews] = useState([])
  const [visibleCount, setVisibleCount] = useState(3)
  const [formData, setFormData] = useState({
    name: '',
    role: 'Parent',
    class: '',
    country: '',
    review: '',
    rating: 0
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errors, setErrors] = useState({})
  const [submittedReviews, setSubmittedReviews] = useState([])

  useEffect(() => {
    const q = query(
      collection(db, 'reviews'),
      where('status', '==', 'approved'),
      orderBy('createdAt', 'desc')
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const reviewsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setReviews(reviewsData)
    }, (error) => {
      console.error('Error fetching reviews:', error)
    })

    return () => unsubscribe()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.review.trim()) newErrors.review = 'Review is required'
    else if (formData.review.trim().length < 10) newErrors.review = 'Review must be at least 10 characters'
    if (formData.rating === 0) newErrors.rating = 'Please select a rating'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    // Check for duplicate submission in current session
    const reviewKey = `${formData.name.trim()}-${formData.review.trim()}-${formData.rating}`
    if (submittedReviews.includes(reviewKey)) {
      setErrors({ submit: 'You have already submitted this review. Please try a different one.' })
      return
    }

    setIsSubmitting(true)
    setSubmitSuccess(false)
    setErrors({})

    console.log('Starting review submission...')
    console.log('Firebase db:', db)

    try {
      console.log('Attempting to add document to Firestore...')
      const docRef = await addDoc(collection(db, 'reviews'), {
        name: formData.name,
        role: formData.role,
        class: formData.class,
        country: formData.country,
        review: formData.review,
        rating: formData.rating,
        status: 'approved',
        createdAt: serverTimestamp()
      })
      console.log('Document added successfully with ID:', docRef.id)

      // Add to submitted reviews to prevent duplicates in this session
      setSubmittedReviews(prev => [...prev, reviewKey])

      setFormData({
        name: '',
        role: 'Parent',
        class: '',
        country: '',
        review: '',
        rating: 0
      })
      setSubmitSuccess(true)
    } catch (error) {
      console.error('Error submitting review:', error)
      console.error('Error code:', error.code)
      console.error('Error message:', error.message)
      console.error('Full error details:', JSON.stringify(error, null, 2))
      
      // Display the exact Firebase error message
      let errorMessage = 'Failed to submit review. Please try again.'
      
      if (error.code === 'permission-denied') {
        errorMessage = 'Permission denied. Please check Firestore security rules.'
      } else if (error.code === 'unavailable') {
        errorMessage = 'Firebase is currently unavailable. Please check your internet connection.'
      } else if (error.code === 'failed-precondition') {
        errorMessage = 'Firestore database is not initialized. Please create a Firestore database in Firebase Console.'
      } else if (error.code === 'invalid-argument') {
        errorMessage = 'Invalid data provided. Please check your inputs.'
      } else if (error.message) {
        errorMessage = `Error: ${error.message}`
      }
      
      setErrors({ submit: errorMessage })
    } finally {
      setIsSubmitting(false)
      console.log('Submission process completed')
    }
  }

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : '0.0'

  const visibleReviews = reviews.slice(0, visibleCount)
  const hasMoreReviews = visibleCount < reviews.length
  const reviewsToShow = visibleCount > reviews.length ? reviews.length : visibleCount

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, reviews.length))
  }

  const handleShowLess = () => {
    setVisibleCount(3)
    document.getElementById('reviews').scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-section">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] sm:text-[clamp(2rem,4.5vw,3rem)] lg:text-[clamp(2.25rem,5vw,3.5rem)] xl:text-[clamp(2.5rem,5.5vw,4rem)] font-bold mb-4 text-dark">
            What Parents & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Students Say</span>
          </h2>
          <p className="text-[clamp(0.9rem,2vw,1.05rem)] sm:text-[clamp(0.95rem,2.1vw,1.1rem)] lg:text-[clamp(1rem,2.2vw,1.15rem)] text-gray-600">
            Hear from students and parents who have experienced personalized online learning with EDUNEY
          </p>
        </motion.div>

        {/* Average Rating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[20px] p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-200/60 mb-8 sm:mb-12 text-center"
        >
          <div className="flex justify-center mb-3">
            <StarRating rating={Math.round(averageRating)} interactive={false} />
          </div>
          <p className="text-[clamp(2rem,4.5vw,3rem)] sm:text-[clamp(2.5rem,5vw,3.5rem)] lg:text-[clamp(3rem,5.5vw,4rem)] font-bold text-dark mb-2">{averageRating} / 5</p>
          <p className="text-gray-600">Based on <span className="font-semibold text-primary">{reviews.length}</span> Reviews</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {/* Reviews Display */}
          {reviews.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center"
            >
              <div className="bg-white rounded-3xl p-4 sm:p-5 lg:p-6 shadow-sm border border-gray-200/60 text-center w-full max-w-[380px] mx-auto">
                <p className="text-gray-600">No reviews yet. Be the first to share your experience!</p>
              </div>
            </motion.div>
          ) : (
            <>
              {visibleReviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <ReviewCard review={review} />
                </motion.div>
              ))}
            </>
          )}
        </div>
        
        {reviews.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-8"
          >
            {hasMoreReviews ? (
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLoadMore}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg shadow-primary/20 transition-all duration-300 flex items-center gap-2 text-[clamp(0.9rem,1.8vw,1rem)] sm:text-[clamp(0.95rem,1.9vw,1.05rem)]"
              >
                <span>View More Reviews</span>
                <span className="opacity-80">({reviewsToShow} of {reviews.length} shown)</span>
                <FaChevronDown size={14} sm:size={16} />
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                onClick={handleShowLess}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg shadow-primary/20 transition-all duration-300 flex items-center gap-2 text-[clamp(0.9rem,1.8vw,1rem)] sm:text-[clamp(0.95rem,1.9vw,1.05rem)]"
              >
                <span>Show Less</span>
                <FaChevronUp size={14} sm:size={16} />
              </motion.button>
            )}
          </motion.div>
        )}

        {/* Write a Review Form */}
        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-4 sm:p-5 lg:p-6 shadow-sm border border-gray-200/60 hover:shadow-xl hover:border-primary/30 transition-all duration-300 sticky top-24 w-full max-w-[380px] mx-auto"
          >
            <h3 className="text-2xl font-bold text-dark mb-6">Write a Review</h3>
            
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6"
              >
                <p className="text-green-800 text-sm">
                  Thank you! Your review has been submitted successfully.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border outline-none transition-all duration-300 bg-white ${
                    errors.name
                      ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                      : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/50'
                  }`}
                  placeholder="Enter your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  I am a *
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-white hover:border-primary/40"
                >
                  <option value="Parent">Parent</option>
                  <option value="Student">Student</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Class (Optional)
                </label>
                <input
                  type="text"
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-white hover:border-primary/40"
                  placeholder="e.g., Class 8"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country (Optional)
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-white hover:border-primary/40"
                  placeholder="e.g., India"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating *
                </label>
                <StarRating rating={formData.rating} setRating={(rating) => setFormData({...formData, rating})} />
                {errors.rating && <p className="mt-1 text-sm text-red-500">{errors.rating}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Review *
                </label>
                <textarea
                  name="review"
                  value={formData.review}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl border outline-none transition-all duration-300 resize-none bg-white ${
                    errors.review
                      ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                      : 'border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 hover:border-primary/40'
                  }`}
                  placeholder="Share your experience with EDUNEY..."
                />
                {errors.review && <p className="mt-1 text-sm text-red-500">{errors.review}</p>}
              </div>

              {errors.submit && (
                <p className="text-sm text-red-500">{errors.submit}</p>
              )}

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg shadow-primary/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
