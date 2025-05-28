import { useTheme } from '../contexts/ThemeContext'
import AboutPanel from './AboutPanel'
import SkillsPanel from './SkillsPanel'
import ContactPanel from './ContactPanel'
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

const panelVariants = {
  initial: { opacity: 0, y: 50, scale: 0.9 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const headerVariants = {
  initial: { opacity: 0, y: -30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const AboutSection = () => {
  const { isDark } = useTheme()

  return (
    <motion.div 
      className={`min-h-screen w-full transition-colors duration-500 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 via-gray-900 to-gray-800' 
          : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
      }`}
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Section Header */}
      <motion.div 
        className="pt-16 pb-8 text-center"
        variants={headerVariants}
      >
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Get to Know Me
        </h1>
        <p className={`text-lg md:text-xl max-w-2xl mx-auto px-4 ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Discover my skills, experience, and let's connect to build something amazing together
        </p>
      </motion.div>

      {/* Panels Container */}
      <div className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <motion.div 
              className="grid grid-cols-12 gap-8 h-[600px]"
              variants={containerVariants}
            >
              {/* About Panel - Left Column */}
              <motion.div 
                className="col-span-4 flex"
                variants={panelVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <AboutPanel />
              </motion.div>

              {/* Skills Panel - Center Column */}
              <motion.div 
                className="col-span-4 flex"
                variants={panelVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <SkillsPanel />
              </motion.div>

              {/* Contact Panel - Right Column */}
              <motion.div 
                className="col-span-4 flex"
                variants={panelVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <ContactPanel />
              </motion.div>
            </motion.div>
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:block lg:hidden">
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
            >
              {/* About Panel - Full Width */}
              <motion.div 
                variants={panelVariants}
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.3 }
                }}
              >
                <AboutPanel />
              </motion.div>

              {/* Skills and Contact - Side by Side */}
              <div className="grid grid-cols-2 gap-8">
                <motion.div 
                  variants={panelVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <SkillsPanel />
                </motion.div>
                <motion.div 
                  variants={panelVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <ContactPanel />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              {/* About Panel */}
              <motion.div 
                variants={panelVariants}
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.3 }
                }}
              >
                <AboutPanel />
              </motion.div>

              {/* Skills Panel */}
              <motion.div 
                variants={panelVariants}
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.3 }
                }}
              >
                <SkillsPanel />
              </motion.div>

              {/* Contact Panel */}
              <motion.div 
                variants={panelVariants}
                whileHover={{ 
                  scale: 1.01,
                  transition: { duration: 0.3 }
                }}
              >
                <ContactPanel />
              </motion.div>
            </motion.div>
          </div>

          {/* Back to Top Indicator */}
          <motion.div 
            className="flex justify-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`flex flex-col items-center group ${
                isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              } transition-colors duration-300`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div 
                className={`w-6 h-10 border-2 rounded-full flex justify-center mb-2 ${
                  isDark ? 'border-gray-400 group-hover:border-white' : 'border-gray-600 group-hover:border-gray-900'
                } transition-colors duration-300`}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div 
                  className={`w-1 h-3 rounded-full mt-2 ${
                    isDark ? 'bg-gray-400 group-hover:bg-white' : 'bg-gray-600 group-hover:bg-gray-900'
                  } transition-colors duration-300`}
                  animate={{ y: [12, 0, 12] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <span className="text-sm">Back to top</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutSection 