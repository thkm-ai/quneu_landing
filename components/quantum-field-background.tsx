"use client"

import { useEffect, useRef } from "react"

export default function QuantumFieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Quantum particles
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      color: string
      pulsePhase: number
    }> = []

    // Neural network nodes
    const nodes: Array<{
      x: number
      y: number
      connections: number[]
      pulsePhase: number
    }> = []

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: ["#dc2626", "#3b82f6", "#8b5cf6", "#10b981"][Math.floor(Math.random() * 4)],
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    // Initialize neural network nodes
    for (let i = 0; i < 15; i++) {
      const node = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: [] as number[],
        pulsePhase: Math.random() * Math.PI * 2,
      }

      // Connect to nearby nodes
      nodes.forEach((otherNode, index) => {
        const distance = Math.sqrt((node.x - otherNode.x) ** 2 + (node.y - otherNode.y) ** 2)
        if (distance < 200 && Math.random() > 0.7) {
          node.connections.push(index)
        }
      })

      nodes.push(node)
    }

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.01

      // Clear canvas with subtle gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(245, 245, 244, 0.98)")
      gradient.addColorStop(0.5, "rgba(250, 250, 249, 0.98)")
      gradient.addColorStop(1, "rgba(245, 245, 244, 0.98)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw quantum field waves
      ctx.strokeStyle = "rgba(220, 38, 38, 0.35)"
      ctx.lineWidth = 1
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        for (let x = 0; x < canvas.width; x += 10) {
          const y =
            canvas.height / 2 +
            Math.sin(x * 0.01 + time * 2 + (i * Math.PI) / 3) * 20 +
            Math.sin(x * 0.005 + time * 1.5 + (i * Math.PI) / 2) * 10
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      // Draw neural network connections
      ctx.strokeStyle = "rgba(59, 130, 246, 0.45)"
      ctx.lineWidth = 0.5
      nodes.forEach((node, index) => {
        node.connections.forEach((connectionIndex) => {
          if (connectionIndex < nodes.length) {
            const targetNode = nodes[connectionIndex]
            const pulse = Math.sin(time * 3 + node.pulsePhase) * 0.5 + 0.5
            ctx.globalAlpha = pulse * 0.3
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(targetNode.x, targetNode.y)
            ctx.stroke()
          }
        })
      })

      // Draw neural network nodes
      nodes.forEach((node) => {
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.3 + 0.7
        ctx.globalAlpha = pulse * 0.7
        ctx.fillStyle = "#8b5cf6"
        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Pulse effect
        const pulse = Math.sin(time * 3 + particle.pulsePhase) * 0.3 + 0.7
        ctx.globalAlpha = (particle.opacity + 0.3) * pulse

        // Draw particle
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * pulse, 0, Math.PI * 2)
        ctx.fill()

        // Draw particle trail
        ctx.globalAlpha = particle.opacity * 0.2
        ctx.beginPath()
        ctx.arc(particle.x - particle.vx * 10, particle.y - particle.vy * 10, particle.size * 0.5, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw quantum interference patterns
      ctx.globalAlpha = 0.18
      for (let i = 0; i < 5; i++) {
        const centerX = canvas.width * (0.2 + i * 0.2)
        const centerY = canvas.height * 0.5
        const radius = 50 + Math.sin(time * 2 + i) * 20

        ctx.strokeStyle = i % 2 === 0 ? "#dc2626" : "#3b82f6"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.stroke()
      }

      ctx.globalAlpha = 1
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
