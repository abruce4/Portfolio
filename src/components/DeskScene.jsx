import { useTheme } from '../contexts/ThemeContext'
import AboutPanel from './AboutPanel'
import SkillsPanel from './SkillsPanel'
import ContactPanel from './ContactPanel'
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

const panelVariants = {
  initial: { opacity: 0, scale: 0.8, rotate: -5 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut" }
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
      <div className="w-full px-4 py-4 sm:py-8">
        <motion.div 
          className={`relative rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl sm:shadow-2xl transition-colors duration-500 min-h-[90vh] sm:min-h-[85vh] lg:min-h-[80vh] w-full ${
            isDark 
              ? 'bg-gradient-to-br from-gray-800 to-gray-700 shadow-black/50' 
              : 'bg-gradient-to-br from-amber-100 to-orange-200 shadow-orange-200/60'
          }`}
          variants={deskVariants}
        >
          
          {/* Main Displays Container */}
          <motion.div 
            className="w-full h-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8"
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

          {/* Panels Container - Desktop Only */}
          <div className="hidden xl:block">
            {/* About Panel - Top Left */}
            <motion.div 
              className="absolute top-8 xl:top-16 left-4 xl:left-8"
              variants={panelVariants}
              whileHover={{ 
                scale: 1.05, 
                rotate: 2,
                transition: { duration: 0.3 }
              }}
            >
              <AboutPanel />
            </motion.div>

            {/* Skills Panel - Top Right */}
            <motion.div 
              className="absolute top-8 xl:top-16 right-4 xl:right-8 max-w-xs xl:max-w-sm"
              variants={panelVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <SkillsPanel />
            </motion.div>

            {/* Contact Panel - Bottom Center */}
            <motion.div 
              className="absolute bottom-6 xl:bottom-8 left-1/2 transform -translate-x-1/2"
              variants={panelVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <ContactPanel />
            </motion.div>
          </div>

          {/* Mobile/Tablet Panel Layout */}
          <div className="xl:hidden">
            {/* Panels Grid for Mobile/Tablet */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8 px-4 sm:px-6"
              variants={containerVariants}
            >
              {/* About Panel */}
              <motion.div variants={panelVariants}>
                <AboutPanel />
              </motion.div>

              {/* Skills Panel */}
              <motion.div variants={panelVariants}>
                <SkillsPanel />
              </motion.div>

              {/* Contact Panel - Full Width on Mobile */}
              <motion.div 
                className="md:col-span-2"
                variants={panelVariants}
              >
                <ContactPanel />
              </motion.div>
            </motion.div>
          </div>

          {/* Desk Accessories - Responsive */}
          <motion.div 
            className="absolute bottom-2 sm:bottom-3 lg:bottom-4 left-2 sm:left-3 lg:left-4 flex gap-2 sm:gap-3 lg:gap-4"
            variants={containerVariants}
          >
            {/* Coffee Cup */}
            <motion.div 
              className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full transition-colors duration-500 flex items-center justify-center ${
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
              <div className="text-sm sm:text-base lg:text-lg">☕</div>
            </motion.div>
            
            {/* Notebook */}
            <motion.div 
              className={`w-8 h-6 sm:w-10 sm:h-7 lg:w-12 lg:h-8 rounded transition-colors duration-500 flex items-center justify-center ${
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
              <div className="text-xs sm:text-sm text-white">📓</div>
            </motion.div>
          </motion.div>

          {/* Desk Lamp - Desktop Only in Dark Mode */}
          {isDark && (
            <motion.div 
              className="hidden lg:block absolute bottom-2 sm:bottom-3 lg:bottom-4 right-2 sm:right-3 lg:right-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.div 
                className="w-3 h-8 sm:w-4 sm:h-10 lg:w-4 lg:h-12 bg-yellow-300 rounded-full opacity-20 shadow-lg shadow-yellow-300/50"
                animate={lampGlow}
              />
              <motion.div 
                className="text-lg sm:text-xl lg:text-2xl ml-1"
                animate={floatingAnimation}
              >
                💡
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default DeskScene 