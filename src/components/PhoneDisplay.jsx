import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import mobileProjects from '../data/mobileProjects';

const PhoneDisplay = () => {
  const { theme } = useTheme();
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const currentProject = mobileProjects[currentProjectIndex];

  // Auto-cycle logic
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => 
        (prevIndex + 1) % mobileProjects.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered]);

  const handleProjectSwitch = (index) => {
    setCurrentProjectIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleLiveClick = () => {
    if (currentProject.playStore) {
      window.open(currentProject.playStore, '_blank', 'noopener,noreferrer')
    }
  }
  
  const handleGithubClick = () => {
    if (currentProject.github) {
      window.open(currentProject.github, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <motion.div 
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
    >
      {/* Phone Shadow */}
      <div className="absolute inset-0 top-8 bg-black/30 blur-2xl rounded-[3rem] transform scale-90" />
      
      {/* Phone Frame */}
      <motion.div 
        className={`
          relative w-72 h-[580px] 
          ${theme === 'light' ? 'bg-gray-900' : 'bg-gray-800'} 
          rounded-[2.5rem] p-2 shadow-2xl
          border-4 border-gray-700
        `}
        whileHover={{ 
          rotateY: 5, 
          scale: 1.03,
          boxShadow: theme === 'light' 
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.4)' 
            : '0 25px 50px -12px rgba(0, 0, 0, 0.6)'
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Camera Notch */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
          <div className={`
            w-32 h-6 rounded-full flex items-center justify-center
            ${theme === 'light' ? 'bg-gray-900' : 'bg-gray-800'}
          `}>
            <div className="w-12 h-3 bg-gray-700 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-600 rounded-full mr-1" />
              <div className="w-6 h-1 bg-gray-600 rounded-full" />
            </div>
          </div>
        </div>

        {/* Phone Screen */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentProjectIndex}
            className={`
              w-full h-full rounded-[2rem] overflow-hidden
              ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}
              shadow-inner border border-gray-600
            `}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            {/* Status Bar */}
            <motion.div 
              className={`
                flex justify-between items-center px-6 py-3 text-sm font-medium
                ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}
              `}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span>9:41</span>
              <div className="flex items-center space-x-1">
                <motion.div 
                  className="w-1 h-1 bg-green-500 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="flex items-center">
                  <div className="w-6 h-3 border border-current rounded-sm mr-1">
                    <motion.div 
                      className="w-4 h-1.5 bg-green-500 rounded-sm mt-0.5 ml-0.5"
                      animate={{ width: [16, 8, 16] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                  <span className="text-xs">100%</span>
                </div>
              </div>
            </motion.div>

            {/* App Content */}
            <motion.div 
              className="flex-1 p-6"
              key={`content-${currentProjectIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* App Header */}
              <motion.div 
                className="flex items-center justify-between mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div>
                  <h3 className={`text-xl font-bold mb-1 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                    {currentProject.title}
                  </h3>
                  <p className={`text-sm ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                    Mobile Application
                  </p>
                </div>
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-white text-xl">📱</span>
                </motion.div>
              </motion.div>

              {/* Tech Stack Pills */}
              <motion.div 
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {currentProject.tech.map((tech, index) => (
                  <motion.span 
                    key={tech}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                    className={`
                      px-3 py-1 text-xs font-medium rounded-full
                      ${theme === 'light' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-blue-900 text-blue-200'
                      }
                    `}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Project Action Buttons */}
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex gap-3">
                  <motion.button
                    onClick={handleLiveClick}
                    className={`
                      flex-1 py-3 px-4 rounded-xl font-medium text-sm transition-colors
                      ${theme === 'light' 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                      }
                    `}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Live Demo
                  </motion.button>
                  
                  <motion.button
                    onClick={handleGithubClick}
                    className={`
                      flex-1 py-3 px-4 rounded-xl font-medium text-sm border transition-colors
                      ${theme === 'light' 
                        ? 'border-gray-300 text-gray-700 hover:bg-gray-50' 
                        : 'border-gray-600 text-gray-300 hover:bg-gray-700'
                      }
                    `}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    GitHub
                  </motion.button>
                </div>
              </motion.div>

              {/* Mock Interface */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {/* Content Cards with Scroll Animation */}
                <motion.div 
                  className="space-y-3 h-32 overflow-hidden"
                  animate={{ 
                    y: isHovered ? [0, -10, 0] : [0, -20, 0] 
                  }}
                  transition={{ 
                    duration: isHovered ? 4 : 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  {[1, 2, 3].map((item) => (
                    <motion.div 
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + item * 0.1, duration: 0.4 }}
                      className={`
                        p-3 rounded-lg shadow-sm
                        ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'}
                      `}
                    >
                      <div className={`h-3 rounded-lg mb-2 ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-600'}`} />
                      <div className={`h-2 rounded-lg w-3/4 mb-1 ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-600'}`} />
                      <div className={`h-2 rounded-lg w-1/2 ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-600'}`} />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Description */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="mt-4"
                >
                  <p className={`text-xs leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                    {currentProject.description}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Bottom Action Bar */}
            <motion.div 
              className={`
                flex justify-around items-center p-4 border-t
                ${theme === 'light' ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center space-y-1 text-blue-500"
                onClick={() => window.open(currentProject.github, '_blank')}
              >
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">🔗</span>
                </div>
                <span className="text-xs font-medium">Code</span>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center space-y-1 text-green-500"
                onClick={() => window.open(currentProject.playStore, '_blank')}
              >
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">🏪</span>
                </div>
                <span className="text-xs font-medium">Store</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Home Indicator */}
        <motion.div 
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        />
      </motion.div>

      {/* Controls */}
      <motion.div 
        className="flex items-center space-x-4 mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        {/* Auto-play Toggle */}
        <motion.button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`
            flex items-center space-x-2 text-sm px-4 py-2 rounded-full border transition-all
            ${isAutoPlaying 
              ? 'bg-green-100 text-green-700 border-green-300' 
              : theme === 'light' 
                ? 'bg-gray-100 text-gray-600 border-gray-300' 
                : 'bg-gray-800 text-gray-400 border-gray-600'
            }
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{isAutoPlaying ? '⏸️' : '▶️'}</span>
          <span className="font-medium">{isAutoPlaying ? 'Auto' : 'Manual'}</span>
        </motion.button>

        {/* Project Dots */}
        <div className="flex space-x-2">
          {mobileProjects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleProjectSwitch(index)}
              className={`
                w-3 h-3 rounded-full transition-all relative
                ${index === currentProjectIndex 
                  ? 'bg-blue-500 shadow-lg' 
                  : theme === 'light' 
                    ? 'bg-gray-300 hover:bg-gray-400' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }
              `}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
            >
              {index === currentProjectIndex && isAutoPlaying && !isHovered && (
                <motion.div
                  className="absolute inset-0 border-2 border-blue-300 rounded-full"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PhoneDisplay; 