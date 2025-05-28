import { ThemeProvider } from './contexts/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import DeskScene from './components/DeskScene'

function App() {
  return (
    <ThemeProvider>
      <div className="relative">
        {/* Theme Toggle - positioned in top right */}
        <div className="absolute top-8 right-8 z-20">
          <ThemeToggle />
        </div>
        
        {/* Main Desk Scene */}
        <DeskScene />
      </div>
    </ThemeProvider>
  )
}

export default App 