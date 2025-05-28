import { useTheme } from '../contexts/ThemeContext'
import LaptopDisplay from './LaptopDisplay'
import PhoneDisplay from './PhoneDisplay'
import { motion } from 'framer-motion'

// Animation variants
const containerVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
}

const deskVariants = {
  initial: { opacity: 0, scale: 0.9, y: 20 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const deviceVariants = {
  initial: { opacity: 0, y: 30, rotateX: -10 },
  animate: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
}

const accessoryVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const floatingAnimation = {
  y: [-2, 2, -2],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

const lampGlow = {
  opacity: [0.2, 0.4, 0.2],
  scale: [1, 1.1, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

const DeskScene = () => {
  const { isDark } = useTheme()

  return (
    <motion.div 
      className={`min-h-screen w-full transition-colors duration-500 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900' 
          : 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100'
      }`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {/* Desk Surface */}
      <div className="w-full px-4 py-8 lg:py-16">
        <motion.div 
          className={`relative rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl sm:shadow-2xl transition-colors duration-500 min-h-[85vh] w-full ${
            isDark 
              ? 'bg-gradient-to-br from-gray-800 to-gray-700 shadow-black/50' 
              : 'bg-gradient-to-br from-amber-100 to-orange-200 shadow-orange-200/60'
          }`}
          variants={deskVariants}
        >
          
          {/* Main Displays Container */}
          <motion.div 
            className="w-full h-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 p-6 sm:p-8 lg:p-12"
            variants={containerVariants}
          >
            
            {/* Laptop Display Area - Left Side */}
            <motion.div 
              className="w-full lg:w-1/2 flex justify-center lg:justify-start"
              variants={deviceVariants}
            >
              <div className="w-full max-w-2xl">
                <LaptopDisplay />
              </div>
            </motion.div>

            {/* Phone Display Area - Right Side */}
            <motion.div 
              className="w-full lg:w-1/2 flex justify-center lg:justify-end"
              variants={deviceVariants}
            >
              <PhoneDisplay />
            </motion.div>
          </motion.div>

          {/* Desk Accessories - Responsive */}
          <motion.div 
            className="absolute bottom-4 left-4 flex gap-3 lg:gap-4"
            variants={containerVariants}
          >
            {/* Coffee Cup */}
            <motion.div 
              className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full transition-colors duration-500 flex items-center justify-center ${
                isDark 
                  ? 'bg-amber-600 shadow-amber-600/50' 
                  : 'bg-amber-700 shadow-amber-700/30'
              } shadow-lg`}
              variants={accessoryVariants}
              animate={floatingAnimation}
              whileHover={{ 
                scale: 1.2, 
                rotate: 10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="text-lg lg:text-xl">☕</div>
            </motion.div>
            
            {/* Notebook */}
            <motion.div 
              className={`w-12 h-8 lg:w-14 lg:h-10 rounded transition-colors duration-500 flex items-center justify-center ${
                isDark 
                  ? 'bg-blue-600 shadow-blue-600/50' 
                  : 'bg-blue-700 shadow-blue-700/30'
              } shadow-lg`}
              variants={accessoryVariants}
              whileHover={{ 
                scale: 1.1, 
                rotate: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="text-sm text-white">📓</div>
            </motion.div>
          </motion.div>

          {/* Desk Lamp - Desktop Only in Dark Mode */}
          {isDark && (
            <motion.div 
              className="hidden lg:block absolute bottom-4 right-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.div 
                className="w-4 h-12 bg-yellow-300 rounded-full opacity-20 shadow-lg shadow-yellow-300/50"
                animate={lampGlow}
              />
              <motion.div 
                className="text-2xl ml-1"
                animate={floatingAnimation}
              >
                💡
              </motion.div>
            </motion.div>
          )}

          {/* Scroll Down Indicator */}
          <motion.div 
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.div 
              className={`text-sm mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll to explore more
            </motion.div>
            <motion.div 
              className={`w-6 h-10 border-2 rounded-full flex justify-center ${
                isDark ? 'border-gray-300' : 'border-gray-600'
              }`}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div 
                className={`w-1 h-3 rounded-full mt-2 ${
                  isDark ? 'bg-gray-300' : 'bg-gray-600'
                }`}
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default DeskScene 