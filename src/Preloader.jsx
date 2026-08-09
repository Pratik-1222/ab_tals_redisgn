import React, { useState, useEffect } from 'react'

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const DURATION = 1500 // Fixed 1.5 seconds (1500ms)
    let animationFrameId

    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const linearRatio = Math.min(elapsed / DURATION, 1)
      const easedRatio = easeInOutCubic(linearRatio)
      const currentPct = Math.round(easedRatio * 100)

      setProgress(currentPct)

      if (linearRatio < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        // Reached 100% — trigger 500ms fade-out transition before removing from DOM
        setFadeOut(true)
        setTimeout(() => {
          setHidden(true)
        }, 500)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  if (hidden) return null

  return (
    <div className={`preloader-overlay ${fadeOut ? 'fade-out' : ''}`} aria-hidden="true">
      <div className="preloader-content">
        <div className="preloader-eyebrow">// ABTALKS DEVELOPER PLATFORM</div>
        <div className="preloader-counter">
          {progress.toString().padStart(2, '0')}<span className="preloader-pct">%</span>
        </div>
        <div className="preloader-bar-bg">
          <div
            className="preloader-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="preloader-status">
          {progress < 35 && 'INITIALIZING SYSTEM...'}
          {progress >= 35 && progress < 75 && 'LOADING COHORT TRACKS...'}
          {progress >= 75 && progress < 100 && 'ESTABLISHING MATRIX CONNECTION...'}
          {progress === 100 && 'READY'}
        </div>
      </div>
    </div>
  )
}
