import { ThemeProvider } from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-surface-light dark:bg-surface-dark transition-colors duration-300">
        {/* Theme Toggle - positioned in top right */}
        <div className="absolute top-8 right-8 z-10">
          <ThemeToggle />
        </div>
        
        <div className="container mx-auto p-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8 animate-fade-in">
              Interactive Developer Desk Portfolio
            </h1>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8 animate-slide-up">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                🚀 Project initialized successfully!
              </p>
              <p className="text-gray-500 dark:text-gray-400 mt-4">
                ThemeProvider is now active. Try the theme toggle in the top right! ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App 