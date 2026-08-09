import React, { useEffect, useRef } from 'react'

export default function CursorTrail() {
  const canvasRef = useRef(null)

  useEffect(() => {
    // Mobile & Touch Safeguard: Disable on screens < 768px or touch devices
    if (window.innerWidth < 768 || ('ontouchstart' in window) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0)) {
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animationFrameId
    let particles = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const handleMouseMove = (e) => {
      const x = e.clientX
      const y = e.clientY

      // Emit 2 glowing particles on mouse movement
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: x + (Math.random() - 0.5) * 8,
          y: y + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          radius: Math.random() * 14 + 10,
          maxLife: 36, // 0.6 seconds at 60fps
          life: 36,
          color: Math.random() > 0.4 ? 'rgba(16, 185, 129, 0.5)' : 'rgba(6, 182, 212, 0.45)'
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.life -= 1
        p.x += p.vx
        p.y += p.vy
        p.radius *= 0.95 // Shrink

        if (p.life <= 0 || p.radius <= 0.5) {
          particles.splice(i, 1)
          continue
        }

        const opacity = p.life / p.maxLife

        // Radial glow gradient particle
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius)
        if (p.color.includes('185')) {
          gradient.addColorStop(0, `rgba(16, 185, 129, ${0.5 * opacity})`)
          gradient.addColorStop(0.5, `rgba(52, 211, 153, ${0.25 * opacity})`)
          gradient.addColorStop(1, 'rgba(16, 185, 129, 0)')
        } else {
          gradient.addColorStop(0, `rgba(6, 182, 212, ${0.45 * opacity})`)
          gradient.addColorStop(0.5, `rgba(56, 189, 248, ${0.2 * opacity})`)
          gradient.addColorStop(1, 'rgba(6, 182, 212, 0)')
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 cursor-trail-canvas"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
