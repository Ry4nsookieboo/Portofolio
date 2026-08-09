'use client';

import { useEffect, useRef } from 'react'

export default function StarBackground() {
  const canvasRef = useRef(null)
  const starsRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize stars
    const stars = []
    const starCount = Math.min(520, Math.max(230, Math.floor((canvas.width * canvas.height) / 3900)))

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.35 + 0.2,
        opacity: Math.random() * 0.5 + 0.5,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.006 + 0.003,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        originalX: 0,
        originalY: 0,
        targetX: 0,
        targetY: 0,
      })
    }

    stars.forEach(star => {
      star.originalX = star.x
      star.originalY = star.y
      star.targetX = star.x
      star.targetY = star.y
    })

    starsRef.current = stars

    // Mouse and touch movement use the same avoidance target.
    const updatePointerPosition = (x, y) => {
      mouseRef.current = { x, y }
    }

    const handleMouseMove = (e) => {
      updatePointerPosition(e.clientX, e.clientY)
    }

    const handleTouchMove = (e) => {
      const touch = e.touches[0]
      if (touch) updatePointerPosition(touch.clientX, touch.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchstart', handleTouchMove, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    // Animation loop
    const animate = (time = 0) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(10, 14, 39, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach(star => {
        const dx = mouseRef.current.x - star.x
        const dy = mouseRef.current.y - star.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const minDistance = 150

        // Star runs away from cursor
        if (distance < minDistance) {
          const angle = Math.atan2(dy, dx)
          star.targetX = star.originalX - Math.cos(angle) * (minDistance - distance) * 0.5
          star.targetY = star.originalY - Math.sin(angle) * (minDistance - distance) * 0.5
          star.opacity = Math.min(1, star.opacity + 0.02)
        } else {
          star.targetX = star.originalX
          star.targetY = star.originalY
          star.opacity = Math.max(0.5, star.opacity - 0.01)
        }

        // Smooth movement
        star.x += (star.targetX - star.x) * 0.1
        star.y += (star.targetY - star.y) * 0.1

        const twinkle = 0.15 + ((Math.sin(time * star.twinkleSpeed + star.twinklePhase) + 1) / 2) * 0.85
        const renderOpacity = star.opacity * twinkle

        // Draw star with glow
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 6)
        gradient.addColorStop(0, `rgba(235, 251, 255, ${renderOpacity})`)
        gradient.addColorStop(0.25, `rgba(94, 217, 255, ${renderOpacity * 0.55})`)
        gradient.addColorStop(1, `rgba(0, 102, 255, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(star.x - star.radius * 6, star.y - star.radius * 6, star.radius * 12, star.radius * 12)

        // Core star
        ctx.fillStyle = `rgba(255, 255, 255, ${renderOpacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchstart', handleTouchMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  )
}
