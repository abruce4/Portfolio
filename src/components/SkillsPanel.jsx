import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const SkillsPanel = () => {
  const { isDark } = useTheme();
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      id: 1,
      name: 'React',
      icon: '⚛️',
      level: 95,
      description: 'Advanced proficiency with hooks, context, and state management',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 2,
      name: 'JavaScript',
      icon: '🟨',
      level: 90,
      description: 'ES6+, async/await, functional programming, and modern patterns',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      id: 3,
      name: 'Node.js',
      icon: '🟢',
      level: 85,
      description: 'Server-side development, APIs, and microservices architecture',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 4,
      name: 'Firebase',
      icon: '🔥',
      level: 95,
      description: 'Type-safe development and large-scale application architecture',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      id: 5,
      name: 'CSS/Tailwind',
      icon: '🎨',
      level: 88,
      description: 'Responsive design, animations, and modern CSS frameworks',
      color: 'from-purple-400 to-pink-600'
    },
    {
      id: 6,
      name: 'Wordpress',
      icon: '💻',
      level: 90,
      description: 'NoSQL database design, aggregation, and performance optimization',
      color: 'from-blue-500 to-blue-700'
    }
  ];

  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill?.id === skill.id ? null : skill);
  };

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {/* Skills Panel Container */}
      <div className={`relative p-4 md:p-6 rounded-2xl shadow-xl transition-all duration-500 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600' 
          : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
      }`}>
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="text-2xl"
          >
            🛠️
          </motion.div>
          <h3 className={`text-xl font-bold ${
            isDark ? 'text-gray-100' : 'text-gray-800'
          }`}>
            Skills & Technologies
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className={`relative cursor-pointer p-3 md:p-4 rounded-xl transition-all duration-300 ${
                selectedSkill?.id === skill.id
                  ? isDark 
                    ? 'bg-gray-600 shadow-lg' 
                    : 'bg-blue-50 shadow-lg'
                  : isDark 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-100 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSkillClick(skill)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Skill Icon */}
              <div className="text-center">
                <motion.div
                  className="text-2xl md:text-3xl mb-2"
                  animate={{ 
                    rotate: selectedSkill?.id === skill.id ? [0, 5, -5, 0] : 0 
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {skill.icon}
                </motion.div>
                <p className={`text-xs md:text-sm font-semibold ${
                  isDark ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  {skill.name}
                </p>
              </div>

              {/* Selection Indicator */}
              {selectedSkill?.id === skill.id && (
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-blue-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Skill Details Popup */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={`overflow-hidden rounded-xl border-t-2 border-blue-400 mt-4 p-4 ${
                isDark 
                  ? 'bg-gray-600' 
                  : 'bg-blue-50'
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Skill Icon Large */}
                <motion.div
                  className="text-4xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {selectedSkill.icon}
                </motion.div>

                <div className="flex-1">
                  {/* Skill Name & Level */}
                  <div className="flex items-center justify-between mb-3">
                    <h4 className={`text-lg font-bold ${
                      isDark ? 'text-gray-100' : 'text-gray-800'
                    }`}>
                      {selectedSkill.name}
                    </h4>
                    <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                      isDark 
                        ? 'bg-gray-700 text-blue-300' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {selectedSkill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className={`w-full h-2 rounded-full mb-3 ${
                    isDark ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${selectedSkill.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {selectedSkill.description}
                  </p>
                </div>
              </div>

              {/* Close Hint */}
              <motion.p 
                className={`text-xs text-center mt-3 italic ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Click again to close
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instructions when no skill selected */}
        {!selectedSkill && (
          <motion.p 
            className={`text-xs text-center italic ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Click on any skill to see details
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default SkillsPanel;

 