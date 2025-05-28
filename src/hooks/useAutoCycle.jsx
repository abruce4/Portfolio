import { useState, useEffect, useRef } from 'react'

const useAutoCycle = (items, interval = 4000) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)

  // Auto-cycle logic
  useEffect(() => {
    if (!isPaused && items.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        )
      }, interval)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused, items.length, interval])

  // Pause/resume functions
  const pause = () => setIsPaused(true)
  const resume = () => setIsPaused(false)

  // Manual navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    )
  }

  const goToIndex = (index) => {
    if (index >= 0 && index < items.length) {
      setCurrentIndex(index)
    }
  }

  // Current item
  const currentItem = items[currentIndex] || null

  return {
    currentIndex,
    currentItem,
    isPaused,
    pause,
    resume,
    goToNext,
    goToPrevious,
    goToIndex,
    totalItems: items.length
  }
}

export default useAutoCycle 