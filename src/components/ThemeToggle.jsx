import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

// Animation variants
const buttonVariants = {
  hover: { 
    scale: 1.1, 
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.2 }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
}

const iconVariants = {
  light: { 
    opacity: 1, 
    rotate: 0,
    transition: { duration: 0.3, ease: "easeInOut" }
  },
  dark: { 
    opacity: 0, 
    rotate: -90,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
}

const moonVariants = {
  light: { 
    opacity: 0, 
    rotate: 90,
    transition: { duration: 0.3, ease: "easeInOut" }
  },
  dark: { 
    opacity: 1, 
    rotate: 0,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
}

const ThemeToggle = () => {
  const { theme, toggleTheme, isLight } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 group overflow-hidden"
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      {/* Sun Icon for Light Mode */}
      <motion.svg
        className="w-6 h-6 text-yellow-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        variants={iconVariants}
        animate={isLight ? "light" : "dark"}
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
          clipRule="evenodd"
        />
      </motion.svg>

      {/* Moon Icon for Dark Mode */}
      <motion.svg
        className="absolute w-6 h-6 text-blue-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        variants={moonVariants}
        animate={isLight ? "light" : "dark"}
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </motion.svg>

      {/* Animated Background Glow */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0"
        animate={{
          opacity: isLight ? 0.1 : 0,
          scale: isLight ? 1.2 : 1
        }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div 
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0"
        animate={{
          opacity: isLight ? 0 : 0.1,
          scale: isLight ? 1 : 1.2
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default ThemeToggle; 