import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ContactPanel = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      // Log form data to console (as per task requirements)
      console.log('📧 Contact Form Submission:', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString()
      });
      
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  const downloadResume = () => {
    // Placeholder for resume download
    console.log('📄 Resume download requested');
    // In a real implementation, this would trigger a download
    alert('Resume download feature coming soon!');
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      {/* Contact Panel Container */}
      <div className={`relative p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl shadow-lg sm:shadow-xl transition-all duration-500 w-full max-w-xs sm:max-w-sm lg:max-w-md ${
        isDark 
          ? 'bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600' 
          : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
      }`}>
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 sm:mb-5 lg:mb-6">
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, 0],
              scale: [1, 1.1, 1] 
            }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            className="text-xl sm:text-2xl"
          >
            📬
          </motion.div>
          <h3 className={`text-lg sm:text-xl font-bold ${
            isDark ? 'text-gray-100' : 'text-gray-800'
          }`}>
            Get In Touch
          </h3>
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.9 }}
              className={`mb-3 sm:mb-4 p-3 rounded-lg text-center text-sm sm:text-base ${
                isDark 
                  ? 'bg-green-800 text-green-200 border border-green-600' 
                  : 'bg-green-100 text-green-800 border border-green-300'
              }`}
            >
              <span className="text-base sm:text-lg mr-2">✅</span>
              Message sent successfully!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {/* Name Input */}
          <div>
            <label className={`block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Name *
            </label>
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base transition-all duration-300 ${
                errors.name
                  ? 'border-red-400 focus:border-red-500'
                  : isDark 
                    ? 'bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-400' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
              } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
              placeholder="Your full name"
              whileFocus={{ scale: 1.02 }}
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-xs mt-1"
              >
                {errors.name}
              </motion.p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label className={`block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Email *
            </label>
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base transition-all duration-300 ${
                errors.email
                  ? 'border-red-400 focus:border-red-500'
                  : isDark 
                    ? 'bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-400' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
              } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
              placeholder="your.email@example.com"
              whileFocus={{ scale: 1.02 }}
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-xs mt-1"
              >
                {errors.email}
              </motion.p>
            )}
          </div>

          {/* Message Textarea */}
          <div>
            <label className={`block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Message *
            </label>
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={3}
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base transition-all duration-300 resize-none ${
                errors.message
                  ? 'border-red-400 focus:border-red-500'
                  : isDark 
                    ? 'bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-400' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
              } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
              placeholder="Tell me about your project or just say hello..."
              whileFocus={{ scale: 1.02 }}
            />
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-xs mt-1"
              >
                {errors.message}
              </motion.p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
              isSubmitting
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:shadow-lg'
            } ${
              isDark 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
            whileHover={!isSubmitting ? { scale: 1.05 } : {}}
            whileTap={!isSubmitting ? { scale: 0.95 } : {}}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                />
                Sending...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <span>Send Message</span>
                <span>📤</span>
              </span>
            )}
          </motion.button>
        </form>

        {/* Resume Download Button */}
        <div className="mt-4 sm:mt-5 lg:mt-6 pt-3 sm:pt-4 border-t border-gray-300 dark:border-gray-600">
          <motion.button
            onClick={downloadResume}
            className={`w-full py-2 sm:py-2.5 px-3 sm:px-4 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 ${
              isDark 
                ? 'bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-600' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center justify-center gap-2">
              <span>📄</span>
              <span>Download Resume</span>
            </span>
          </motion.button>
        </div>

        {/* Contact Info */}
        <div className={`mt-3 sm:mt-4 text-center text-xs sm:text-sm ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <p>Or reach out directly:</p>
          <p className="mt-1">
            <span className="font-medium">alex.dev@example.com</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPanel; 