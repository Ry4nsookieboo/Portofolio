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
    const starCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 8000))

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.5 + 0.5,
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

    // Mouse move listener
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
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

        // Draw star with glow
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 3)
        gradient.addColorStop(0, `rgba(0, 217, 255, ${star.opacity * 0.6})`)
        gradient.addColorStop(0.5, `rgba(0, 102, 255, ${star.opacity * 0.3})`)
        gradient.addColorStop(1, `rgba(0, 102, 255, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(star.x - star.radius * 3, star.y - star.radius * 3, star.radius * 6, star.radius * 6)

        // Core star
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
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
