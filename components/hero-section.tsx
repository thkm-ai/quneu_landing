"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main headline */}
        <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
          <h1
            className={`text-2xl sm:text-4xl md:text-6xl lg:text-8xl font-thin leading-tight transition-all duration-1000 delay-300 text-ethereal ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="block text-slate-900 mb-4 sm:mb-6 mt-16 sm:mt-24">Bringing Machine Conscious Intelligence To Life</span>
          </h1>

          <div className="w-24 sm:w-32 h-px bg-red-500 mx-auto my-6 sm:my-8" />

          <p
            className={`text-lg sm:text-xl md:text-3xl text-slate-700 max-w-4xl mx-auto transition-all duration-1000 delay-500 text-airy font-light px-4 sm:px-0 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            LAUNCH YOUR ENTERPRISE INTO THE NEXT ERA OF INNOVATION
          </p>
        </div>
      </div>
    </section>
  )
}
