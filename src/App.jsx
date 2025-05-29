import { ThemeProvider } from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import DeskScene from './components/DeskScene'
import AboutSection from './components/AboutSection'
import { motion } from 'framer-motion'

// Animation variants for page entrance
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

function App() {
  return (
    <ThemeProvider>
      <motion.div 
        className="relative w-full"
        variants={pageVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="w-full"
        >
          {/* Theme Toggle - Fixed position across all sections */}
          <motion.div 
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50"
            variants={fadeInUp}
          >
            <ThemeToggle />
          </motion.div>
          
          {/* Section 1: Desk Scene */}
          <motion.section variants={fadeInUp} className="w-full">
            <DeskScene />
          </motion.section>

          {/* Section 2: About Section */}
          <motion.section className="w-full">
            <AboutSection />
          </motion.section>
        </motion.div>
      </motion.div>
    </ThemeProvider>
  )
}

export default App 