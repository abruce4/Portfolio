import { motion } from 'framer-motion';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import mobileProjects from '../data/mobileProjects';

const PhoneDisplay = () => {
  const { theme } = useContext(ThemeContext);
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
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered]);

  const phoneVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 }
  };

  const screenVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
    transition: { duration: 0.5, ease: "easeInOut" }
  };

  // Enhanced swipe-like animation for content
  const contentVariants = {
    initial: { x: 30, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -30, opacity: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  const handleProjectSwitch = (index) => {
    setCurrentProjectIndex(index);
    setIsAutoPlaying(false); // Pause auto-play when manually switching
    
    // Resume auto-play after 8 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <motion.div 
      className="flex flex-col items-center"
      {...phoneVariants}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Phone Frame */}
      <div className={`
        relative w-64 h-[500px] 
        ${theme === 'light' ? 'bg-gray-800' : 'bg-gray-700'} 
        rounded-[2.5rem] p-4 shadow-2xl
      `}>
        {/* Phone Screen */}
        <motion.div 
          className={`
            w-full h-full rounded-[2rem] overflow-hidden
            ${theme === 'light' ? 'bg-white' : 'bg-gray-900'}
          `}
          key={currentProjectIndex}
          {...screenVariants}
        >
          {/* Status Bar */}
          <div className={`
            flex justify-between items-center px-4 py-2 text-xs
            ${theme === 'light' ? 'bg-gray-100 text-gray-800' : 'bg-gray-800 text-gray-200'}
          `}>
            <span>9:41</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-green-500 rounded-full"></div>
              <div className="w-3 h-2 border border-current rounded-sm">
                <div className="w-2 h-1 bg-current rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* App Content with swipe animation */}
          <motion.div 
            className="flex-1 p-4"
            key={`content-${currentProjectIndex}`}
            {...contentVariants}
          >
            {/* App Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                {currentProject.title}
              </h3>
              <div className="flex space-x-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-4">
              {currentProject.tech.map((tech, index) => (
                <motion.span 
                  key={tech}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className={`
                    px-2 py-1 text-xs rounded-full
                    ${theme === 'light' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-blue-900 text-blue-200'
                    }
                  `}
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Mock App Interface */}
            <div className="space-y-3">
              {/* Navigation Bar */}
              <div className={`
                flex justify-around p-2 rounded-lg
                ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'}
              `}>
                {['Home', 'Projects', 'Profile'].map((tab, index) => (
                  <button 
                    key={tab}
                    className={`
                      px-3 py-1 text-xs rounded
                      ${index === 0 
                        ? 'bg-blue-500 text-white' 
                        : theme === 'light' 
                          ? 'text-gray-600' 
                          : 'text-gray-300'
                      }
                    `}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Content Cards with enhanced scroll simulation */}
              <motion.div 
                className="space-y-2"
                animate={{ 
                  y: isHovered ? [0, -5, 0] : [0, -15, 0] 
                }}
                transition={{ 
                  duration: isHovered ? 3 : 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {[1, 2, 3].map((item) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: item * 0.1, duration: 0.4 }}
                    className={`
                      p-3 rounded-lg
                      ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-800'}
                    `}
                  >
                    <div className={`h-3 rounded mb-2 ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-600'}`}></div>
                    <div className={`h-2 rounded w-3/4 ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-600'}`}></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Description */}
            <motion.div 
              className="mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className={`text-xs leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                {currentProject.description}
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom Action Bar */}
          <div className={`
            flex justify-around items-center p-4 border-t
            ${theme === 'light' ? 'border-gray-200 bg-gray-50' : 'border-gray-700 bg-gray-800'}
          `}>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-1 text-xs text-blue-500"
              onClick={() => window.open(currentProject.github, '_blank')}
            >
              <span>🔗</span>
              <span>GitHub</span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-1 text-xs text-green-500"
              onClick={() => window.open(currentProject.playStore, '_blank')}
            >
              <span>📱</span>
              <span>Store</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Phone Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"></div>
      </div>

      {/* Project Switcher with Auto-Play Indicator */}
      <div className="flex items-center space-x-3 mt-4">
        {/* Auto-play control */}
        <motion.button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`
            flex items-center space-x-1 text-xs px-2 py-1 rounded
            ${isAutoPlaying 
              ? 'bg-green-100 text-green-700' 
              : theme === 'light' 
                ? 'bg-gray-100 text-gray-600' 
                : 'bg-gray-800 text-gray-400'
            }
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{isAutoPlaying ? '⏸️' : '▶️'}</span>
          <span>{isAutoPlaying ? 'Auto' : 'Manual'}</span>
        </motion.button>

        {/* Project dots */}
        <div className="flex space-x-2">
          {mobileProjects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleProjectSwitch(index)}
              className={`
                w-3 h-3 rounded-full transition-colors relative
                ${index === currentProjectIndex 
                  ? 'bg-blue-500' 
                  : theme === 'light' 
                    ? 'bg-gray-300' 
                    : 'bg-gray-600'
                }
              `}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              {/* Auto-cycle progress indicator */}
              {index === currentProjectIndex && isAutoPlaying && !isHovered && (
                <motion.div
                  className="absolute inset-0 border-2 border-blue-300 rounded-full"
                  initial={{ scale: 1, opacity: 1 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PhoneDisplay; 