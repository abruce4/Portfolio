import { useContext } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

const ProjectCard = ({ project }) => {
  const { theme } = useTheme()
  
  const handleLiveClick = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer')
    }
  }
  
  const handleGithubClick = () => {
    if (project.github) {
      window.open(project.github, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <motion.div
      className={`
        p-6 rounded-lg border transition-all duration-300 cursor-pointer
        ${theme === 'light' 
          ? 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg' 
          : 'bg-gray-800 border-gray-700 hover:border-blue-500 hover:shadow-xl'
        }
      `}
      whileHover={{ 
        scale: 1.02,
        y: -4
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Project Image */}
      <div className="mb-4 overflow-hidden rounded-lg">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            e.target.src = '/assets/placeholder-project.png'
          }}
        />
      </div>
      
      {/* Project Title */}
      <h3 className={`
        text-xl font-bold mb-2
        ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}
      `}>
        {project.title}
      </h3>
      
      {/* Project Description */}
      <p className={`
        text-sm mb-4 line-clamp-3
        ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}
      `}>
        {project.description}
      </p>
      
      {/* Tech Stack */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className={`
                px-2 py-1 text-xs rounded-full font-medium
                ${theme === 'light' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-blue-900 text-blue-200'
                }
              `}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-3">
        <motion.button
          onClick={handleLiveClick}
          className={`
            flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-colors
            ${theme === 'light' 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-blue-500 text-white hover:bg-blue-600'
            }
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Live Demo
        </motion.button>
        
        <motion.button
          onClick={handleGithubClick}
          className={`
            flex-1 py-2 px-4 rounded-lg font-medium text-sm border transition-colors
            ${theme === 'light' 
              ? 'border-gray-300 text-gray-700 hover:bg-gray-50' 
              : 'border-gray-600 text-gray-300 hover:bg-gray-700'
            }
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          GitHub
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ProjectCard 