import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const AboutPanel = () => {
  const { isDark } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Sticky Note */}
      <motion.div
        className={`relative cursor-pointer transform transition-all duration-300 ${
          isDark 
            ? 'bg-yellow-300 text-gray-900' 
            : 'bg-yellow-200 text-gray-800'
        } rounded-lg shadow-lg hover:shadow-xl w-full max-w-xs sm:max-w-sm lg:max-w-xs xl:max-w-sm`}
        whileHover={{ 
          scale: 1.05, 
          rotate: isExpanded ? 0 : 2,
          y: -5 
        }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleExpanded}
        style={{
          transform: 'rotate(-1deg)',
          transformOrigin: 'center'
        }}
      >
        {/* Tape Effect */}
        <div className={`absolute -top-1.5 sm:-top-2 left-1/2 transform -translate-x-1/2 w-12 h-3 sm:w-16 sm:h-4 rounded-sm ${
          isDark ? 'bg-gray-300/60' : 'bg-gray-400/40'
        }`}></div>

        {/* Note Content */}
        <div className="p-4 sm:p-5 lg:p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 font-handwriting">
              About Me
            </h3>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-600 text-sm sm:text-base"
            >
              ▼
            </motion.div>
          </div>

          {/* Basic Info - Always Visible */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl">👋</span>
              <span className="font-semibold text-sm sm:text-base">Hi, I'm Lincoln!</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Full-Stack Developer passionate about creating web and mobile applications.
            </p>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-400/30"
              >
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-start gap-2">
                    <span>🎯</span>
                    <span>
                      <strong>Focus:</strong> React, Node.js, and modern web technologies
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span>📍</span>
                    <span>
                      <strong>Location:</strong> Atlanta, GA
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span>💼</span>
                    <span>
                      <strong>Experience:</strong> 2+ years building scalable applications
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span>🌟</span>
                    <span>
                      <strong>Passion:</strong> Games, sports, and new technologies
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span>🎉</span>
                    <span>
                      <strong>Fun Fact:</strong> I love traveling.
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Click Hint */}
          {!isExpanded && (
            <motion.p 
              className="text-xs text-gray-600 mt-2 sm:mt-3 italic"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Tap to learn more...
            </motion.p>
          )}
        </div>

        {/* Shadow effect */}
        <div className={`absolute inset-0 rounded-lg -z-10 transform translate-x-0.5 translate-y-0.5 sm:translate-x-1 sm:translate-y-1 ${
          isDark ? 'bg-gray-800/20' : 'bg-gray-600/20'
        }`}></div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPanel; 