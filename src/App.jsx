import { ThemeProvider } from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import DeskScene from './components/DeskScene'
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
        className="relative"
        variants={pageVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Theme Toggle - Responsive positioning */}
          <motion.div 
            className="fixed top-4 right-4 sm:top-6 sm:right-6 lg:absolute lg:top-8 lg:right-8 z-20"
            variants={fadeInUp}
          >
            <ThemeToggle />
          </motion.div>
          
          {/* Main Desk Scene */}
          <motion.div variants={fadeInUp}>
            <DeskScene />
          </motion.div>
        </motion.div>
      </motion.div>
    </ThemeProvider>
  )
}

export default App 