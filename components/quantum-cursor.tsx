"use client"

import { useEffect, useState } from "react"

export default function QuantumCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const hideCursor = () => setIsVisible(false)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseleave", hideCursor)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseleave", hideCursor)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      style={{
        left: position.x - 10,
        top: position.y - 10,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-5 h-5 border border-white rounded-full animate-pulse">
        <div className="w-1 h-1 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="absolute inset-0 w-5 h-5 border border-blue-400 rounded-full animate-ping opacity-30" />
    </div>
  )
}
