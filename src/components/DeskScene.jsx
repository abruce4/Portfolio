import { useTheme } from '../contexts/ThemeContext'

const DeskScene = () => {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900' 
        : 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100'
    }`}>
      {/* Desk Surface */}
      <div className="container mx-auto px-4 py-8">
        <div className={`relative rounded-3xl shadow-2xl transition-colors duration-500 min-h-[80vh] ${
          isDark 
            ? 'bg-gradient-to-br from-gray-800 to-gray-700 shadow-black/50' 
            : 'bg-gradient-to-br from-amber-100 to-orange-200 shadow-orange-200/60'
        }`}>
          
          {/* Desk Items Container */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 p-8 lg:p-16">
            
            {/* Laptop Display Area */}
            <div className="flex-1 max-w-2xl">
              <div className={`relative rounded-2xl shadow-xl transition-colors duration-500 ${
                isDark 
                  ? 'bg-gray-900 shadow-black/40' 
                  : 'bg-gray-800 shadow-gray-400/30'
              }`}>
                {/* Laptop Screen */}
                <div className="aspect-[16/10] p-4">
                  <div className={`w-full h-full rounded-lg border-2 transition-colors duration-500 ${
                    isDark 
                      ? 'bg-gray-800 border-gray-600' 
                      : 'bg-white border-gray-300'
                  }`}>
                    {/* Placeholder content for web projects */}
                    <div className="h-full flex flex-col items-center justify-center text-center p-8">
                      <div className={`text-6xl mb-4 ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        💻
                      </div>
                      <h3 className={`text-xl font-semibold mb-2 ${
                        isDark ? 'text-gray-200' : 'text-gray-800'
                      }`}>
                        Web Projects
                      </h3>
                      <p className={`text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Interactive web applications showcase
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Laptop Base */}
                <div className={`h-6 rounded-b-2xl transition-colors duration-500 ${
                  isDark 
                    ? 'bg-gray-700' 
                    : 'bg-gray-600'
                }`}></div>
              </div>
            </div>

            {/* Phone Display Area */}
            <div className="flex-shrink-0">
              <div className={`relative rounded-3xl shadow-xl transition-colors duration-500 ${
                isDark 
                  ? 'bg-gray-900 shadow-black/40' 
                  : 'bg-gray-800 shadow-gray-400/30'
              }`}>
                {/* Phone Screen */}
                <div className="w-64 h-[500px] p-3">
                  <div className={`w-full h-full rounded-2xl border-2 transition-colors duration-500 ${
                    isDark 
                      ? 'bg-gray-800 border-gray-600' 
                      : 'bg-white border-gray-300'
                  }`}>
                    {/* Notch */}
                    <div className={`w-32 h-6 mx-auto mt-2 rounded-full transition-colors duration-500 ${
                      isDark 
                        ? 'bg-gray-900' 
                        : 'bg-gray-200'
                    }`}></div>
                    
                    {/* Placeholder content for mobile projects */}
                    <div className="h-full flex flex-col items-center justify-center text-center p-6">
                      <div className={`text-5xl mb-4 ${
                        isDark ? 'text-green-400' : 'text-green-600'
                      }`}>
                        📱
                      </div>
                      <h3 className={`text-lg font-semibold mb-2 ${
                        isDark ? 'text-gray-200' : 'text-gray-800'
                      }`}>
                        Mobile Apps
                      </h3>
                      <p className={`text-xs ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        React Native & mobile demos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desk Accessories */}
          <div className="absolute bottom-4 left-4 flex gap-4">
            {/* Coffee Cup */}
            <div className={`w-8 h-8 rounded-full transition-colors duration-500 ${
              isDark 
                ? 'bg-amber-600 shadow-amber-600/50' 
                : 'bg-amber-700 shadow-amber-700/30'
            } shadow-lg`}>
              <div className="text-lg text-center">☕</div>
            </div>
            
            {/* Notebook */}
            <div className={`w-12 h-8 rounded transition-colors duration-500 ${
              isDark 
                ? 'bg-blue-600 shadow-blue-600/50' 
                : 'bg-blue-700 shadow-blue-700/30'
            } shadow-lg`}>
              <div className="text-xs text-center text-white pt-1">📓</div>
            </div>
          </div>

          {/* Desk Lamp (only visible in dark mode) */}
          {isDark && (
            <div className="absolute top-4 right-4">
              <div className="w-4 h-12 bg-yellow-300 rounded-full opacity-20 shadow-lg shadow-yellow-300/50"></div>
              <div className="text-2xl ml-1">💡</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DeskScene 