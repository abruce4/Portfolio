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
      className={`
        relative w-full max-w-4xl mx-auto
        ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}
      `}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {/* Laptop Frame */}
      <div className={`
        relative rounded-t-2xl p-1
        ${theme === 'light' 
          ? 'bg-gradient-to-b from-gray-300 to-gray-400' 
          : 'bg-gradient-to-b from-gray-700 to-gray-800'
        }
      `}>
        {/* Laptop Screen */}
        <div className={`
          rounded-t-xl overflow-hidden
          ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-900'}
        `}>
          {/* Browser Header */}
          <div className={`
            flex items-center px-4 py-3 border-b
            ${theme === 'light' 
              ? 'bg-white border-gray-200' 
              : 'bg-gray-800 border-gray-700'
            }
          `}>
            {/* Browser Buttons */}
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            {/* Address Bar */}
            <div className={`
              flex-1 mx-4 px-3 py-1 rounded-lg text-sm
              ${theme === 'light' 
                ? 'bg-gray-100 text-gray-600' 
                : 'bg-gray-700 text-gray-300'
              }
            `}>
              portfolio.dev/projects/{currentProject?.id || 1}
            </div>
            
            {/* Navigation Controls */}
            <div className="flex space-x-2">
              <motion.button
                onClick={goToPrevious}
                className={`
                  w-6 h-6 rounded flex items-center justify-center text-xs
                  ${theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'}
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ←
              </motion.button>
              <motion.button
                onClick={goToNext}
                className={`
                  w-6 h-6 rounded flex items-center justify-center text-xs
                  ${theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'}
                `}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                →
              </motion.button>
            </div>
          </div>
          
          {/* Browser Content - Single Project Display */}
          <div className={`
            p-6 min-h-[500px] flex flex-col
            ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}
          `}>
            {/* Page Header */}
            <motion.div 
              className="mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h2 className={`
                text-3xl font-bold mb-2
                ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}
              `}>
                Featured Projects
              </h2>
              <p className={`
                text-lg
                ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}
              `}>
                Project {currentIndex + 1} of {totalItems}
              </p>
            </motion.div>
            
            {/* Current Project Display */}
            <div className="flex-1 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {currentProject && (
                  <motion.div
                    key={currentProject.id}
                    className="w-full max-w-md"
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ProjectCard project={currentProject} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Project Indicators */}
            <motion.div 
              className="flex justify-center space-x-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {webProjects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${index === currentIndex
                      ? (theme === 'light' ? 'bg-blue-600' : 'bg-blue-400')
                      : (theme === 'light' ? 'bg-gray-300' : 'bg-gray-600')
                    }
                  `}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </motion.div>
            
            {/* Auto-cycle Status */}
            <motion.div 
              className="text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <p className={`
                text-xs
                ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}
              `}>
                Hover to pause auto-cycling
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Laptop Base */}
      <div className={`
        h-4 rounded-b-2xl
        ${theme === 'light' 
          ? 'bg-gradient-to-b from-gray-400 to-gray-500' 
          : 'bg-gradient-to-b from-gray-800 to-gray-900'
        }
      `}>
        {/* Trackpad */}
        <div className={`
          absolute bottom-1 left-1/2 transform -translate-x-1/2
          w-16 h-2 rounded-sm
          ${theme === 'light' ? 'bg-gray-500' : 'bg-gray-700'}
        `}></div>
      </div>
    </motion.div>
  )
}

export default LaptopDisplay 