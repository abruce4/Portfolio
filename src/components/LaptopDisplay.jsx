import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'
import ProjectCard from './ProjectCard'
import webProjects from '../data/webProjects'
import useAutoCycle from '../hooks/useAutoCycle'

const LaptopDisplay = () => {
  const { theme } = useTheme()
  const { 
    currentItem: currentProject, 
    currentIndex, 
    totalItems,
    pause, 
    resume, 
    goToNext, 
    goToPrevious,
    goToIndex 
  } = useAutoCycle(webProjects, 4000)

  return (
    <motion.div
      className="relative w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      onMouseEnter={pause}
      onMouseLeave={resume}
      style={{ perspective: '1000px' }}
    >
      {/* Laptop Shadow */}
      <div className="absolute inset-0 top-8 bg-black/20 blur-xl rounded-3xl transform scale-95" />
      
      {/* Laptop Frame */}
      <motion.div 
        className={`
          relative rounded-t-3xl p-2 shadow-2xl
          ${theme === 'light' 
            ? 'bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400' 
            : 'bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800'
          }
        `}
        whileHover={{ rotateX: -2, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Screen */}
        <div className={`
          rounded-t-2xl overflow-hidden border-2
          ${theme === 'light' ? 'bg-white border-gray-300' : 'bg-gray-900 border-gray-600'}
          shadow-inner
        `}>
          
          {/* macOS-style Window Header */}
          <div className={`
            flex items-center justify-between px-4 py-3 border-b
            ${theme === 'light' 
              ? 'bg-gray-50 border-gray-200' 
              : 'bg-gray-800 border-gray-700'
            }
          `}>
            {/* Traffic Light Buttons */}
            <div className="flex space-x-2">
              <motion.div 
                className="w-3 h-3 rounded-full bg-red-500 shadow-sm"
                whileHover={{ scale: 1.2, shadow: '0 0 8px rgba(239, 68, 68, 0.5)' }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"
                whileHover={{ scale: 1.2, shadow: '0 0 8px rgba(245, 158, 11, 0.5)' }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-green-500 shadow-sm"
                whileHover={{ scale: 1.2, shadow: '0 0 8px rgba(34, 197, 94, 0.5)' }}
              />
            </div>
            
            {/* URL Bar */}
            <motion.div 
              className={`
                flex-1 mx-6 px-4 py-1.5 rounded-lg text-sm font-mono
                ${theme === 'light' 
                  ? 'bg-white text-gray-700 border border-gray-200' 
                  : 'bg-gray-700 text-gray-300 border border-gray-600'
                }
              `}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              🔒 portfolio.dev/projects/{currentProject?.id || 1}
            </motion.div>
            
            {/* Navigation Controls */}
            <div className="flex space-x-2">
              <motion.button
                onClick={goToPrevious}
                className={`
                  w-7 h-7 rounded-md flex items-center justify-center text-sm font-bold
                  ${theme === 'light' 
                    ? 'hover:bg-gray-100 text-gray-600' 
                    : 'hover:bg-gray-700 text-gray-300'
                  } transition-colors
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ←
              </motion.button>
              <motion.button
                onClick={goToNext}
                className={`
                  w-7 h-7 rounded-md flex items-center justify-center text-sm font-bold
                  ${theme === 'light' 
                    ? 'hover:bg-gray-100 text-gray-600' 
                    : 'hover:bg-gray-700 text-gray-300'
                  } transition-colors
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                →
              </motion.button>
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className={`
            min-h-[500px] flex flex-col justify-center items-center p-8
            ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}
          `}>
            
            {/* Project Display */}
            <div className="w-full max-w-lg">
              <AnimatePresence mode="wait">
                {currentProject && (
                  <motion.div
                    key={currentProject.id}
                    initial={{ opacity: 0, x: 300, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -300, scale: 0.8 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <ProjectCard project={currentProject} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Project Navigation */}
            <motion.div 
              className="flex items-center space-x-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {/* Project Counter */}
              <div className={`
                text-sm font-medium px-3 py-1 rounded-full
                ${theme === 'light' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'bg-blue-900 text-blue-300'
                }
              `}>
                {currentIndex + 1} / {totalItems}
              </div>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {webProjects.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToIndex(index)}
                    className={`
                      w-3 h-3 rounded-full transition-all duration-300 relative
                      ${index === currentIndex
                        ? (theme === 'light' ? 'bg-blue-600' : 'bg-blue-400')
                        : (theme === 'light' ? 'bg-gray-300' : 'bg-gray-600')
                      }
                    `}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {index === currentIndex && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-blue-400"
                        initial={{ scale: 1 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      
      {/* Laptop Base */}
      <motion.div 
        className={`
          h-6 rounded-b-3xl shadow-lg relative
          ${theme === 'light' 
            ? 'bg-gradient-to-b from-gray-400 via-gray-500 to-gray-600' 
            : 'bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900'
          }
        `}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
      >
        {/* Trackpad */}
        <motion.div 
          className={`
            absolute top-1 left-1/2 transform -translate-x-1/2
            w-20 h-3 rounded-sm
            ${theme === 'light' ? 'bg-gray-600' : 'bg-gray-800'}
            shadow-inner
          `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        />
        
        {/* Apple Logo */}
        <motion.div
          className="absolute top-1 right-4 text-xs opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.5 }}
        >
          
        </motion.div>
      </motion.div>

      {/* Status Text */}
      <motion.div 
        className="text-center mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <p className={`
          text-sm
          ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}
        `}>
          Hover to pause • Click dots to navigate
        </p>
      </motion.div>
    </motion.div>
  )
}

export default LaptopDisplay 