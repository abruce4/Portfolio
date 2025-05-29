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
      duration: 0.8,
      staggerChildren: 0.3
    }
  }
}

const deskVariants = {
  initial: { opacity: 0, scale: 0.95, y: 30 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 1, ease: "easeOut" }
  }
}

const deviceVariants = {
  initial: { opacity: 0, y: 50, rotateX: -15 },
  animate: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const accessoryVariants = {
  initial: { opacity: 0, scale: 0 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const floatingAnimation = {
  y: [-3, 3, -3],
  transition: {
    duration: 4,
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
      <div className="w-full px-6 py-12 lg:py-20">
        <motion.div 
          className={`relative rounded-2xl lg:rounded-3xl shadow-2xl transition-colors duration-500 min-h-[85vh] w-full overflow-hidden ${
            isDark 
              ? 'bg-gradient-to-br from-gray-800 to-gray-700 shadow-black/50' 
              : 'bg-gradient-to-br from-amber-100 to-orange-200 shadow-orange-200/60'
          }`}
          variants={deskVariants}
        >
          {/* Ambient lighting effects */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 ${
                isDark ? 'bg-blue-500' : 'bg-yellow-300'
              }`}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div 
              className={`absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 ${
                isDark ? 'bg-purple-500' : 'bg-orange-300'
              }`}
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.1, 0.2]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </div>
          
          {/* Main Content */}
          <div className="relative z-10 h-full">
            {/* Header Section */}
            <motion.div 
              className="text-center pt-8 pb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Featured Projects
              </h1>
              <p className={`text-lg md:text-xl ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Interactive showcase of web and mobile applications
              </p>
            </motion.div>

            {/* Devices Container */}
            <motion.div 
              className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 px-8 py-8 lg:py-12"
              variants={containerVariants}
            >
              
              {/* Laptop Display Section */}
              <motion.div 
                className="flex-1 flex justify-center max-w-4xl"
                variants={deviceVariants}
              >
                <div className="w-full">
                  <motion.div
                    className="mb-6 text-center"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    <h2 className={`text-xl font-semibold mb-2 ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      🌐 Web Applications
                    </h2>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Full-stack web projects with modern frameworks
                    </p>
                  </motion.div>
                  <LaptopDisplay />
                </div>
              </motion.div>

              {/* Divider */}
              <motion.div 
                className={`hidden lg:block w-px h-96 ${
                  isDark ? 'bg-gray-600' : 'bg-gray-300'
                } opacity-50`}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              />

              {/* Phone Display Section */}
              <motion.div 
                className="flex-1 flex justify-center max-w-md"
                variants={deviceVariants}
              >
                <div className="w-full">
                  <motion.div
                    className="mb-6 text-center"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    <h2 className={`text-xl font-semibold mb-2 ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      📱 Mobile Apps
                    </h2>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      React Native and cross-platform solutions
                    </p>
                  </motion.div>
                  <PhoneDisplay />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default DeskScene 