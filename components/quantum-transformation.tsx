"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function QuantumTransformation() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          // Auto-progress through steps
          const interval = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % 3)
          }, 3000)
          return () => clearInterval(interval)
        }
      },
      { threshold: 0.5 },
    )

    const element = document.getElementById("quantum-transform")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="quantum-transform" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-8">QUNEU Runs on Today's Hardware.</h2>
          <h3 className="text-3xl md:text-4xl text-blue-400 mb-4">No Quantum Computers Needed</h3>
          <p className="text-xl md:text-2xl text-gray-300">Quantum-simulation AI - Powered by GPUs - Deployable now</p>
        </div>

        {/* Transformation visualization */}
        <div className="relative flex items-center justify-center space-x-8 md:space-x-16 mb-16">
          {/* Quantum Computer */}
          <div
            className={`relative transition-all duration-1000 ${currentStep >= 0 ? "opacity-100 scale-100" : "opacity-50 scale-90"}`}
          >
            <div className="relative w-32 h-48 md:w-48 md:h-72">
              <Image src="/images/quantum-computer.webp" alt="Quantum Computer" fill className="object-contain" />
              {currentStep === 0 && <div className="absolute inset-0 bg-blue-400/20 rounded-lg animate-pulse" />}
            </div>
            <p className="text-white mt-4 text-lg">Complex Quantum Hardware</p>
          </div>

          {/* Arrow with particles */}
          <div className="relative">
            <div className="flex items-center">
              <div className="w-8 md:w-16 h-px bg-gradient-to-r from-blue-400 to-purple-400 relative">
                {/* Flowing particles */}
                <div
                  className="absolute top-0 w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                  style={{ left: `${currentStep * 33}%` }}
                />
              </div>
              <div className="w-0 h-0 border-l-8 border-l-purple-400 border-y-4 border-y-transparent ml-2" />
            </div>
          </div>

          {/* QUNEU Q */}
          <div
            className={`relative transition-all duration-1000 ${currentStep >= 1 ? "opacity-100 scale-100" : "opacity-50 scale-90"}`}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center relative">
              <span className="text-4xl md:text-6xl font-bold text-white">Q</span>
              {currentStep === 1 && <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse" />}
              {/* Quantum field effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/50 animate-ping" />
            </div>
            <p className="text-white mt-4 text-lg">QUNEU Simulation</p>
          </div>

          {/* Arrow with particles */}
          <div className="relative">
            <div className="flex items-center">
              <div className="w-8 md:w-16 h-px bg-gradient-to-r from-purple-400 to-cyan-400 relative">
                <div
                  className="absolute top-0 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                  style={{ left: `${currentStep * 33}%` }}
                />
              </div>
              <div className="w-0 h-0 border-l-8 border-l-cyan-400 border-y-4 border-y-transparent ml-2" />
            </div>
          </div>

          {/* GPU */}
          <div
            className={`relative transition-all duration-1000 ${currentStep >= 2 ? "opacity-100 scale-100" : "opacity-50 scale-90"}`}
          >
            <div className="relative w-32 h-32 md:w-48 md:h-48">
              <Image src="/images/gpu-chip.png" alt="GPU Chip" fill className="object-contain" />
              {currentStep === 2 && <div className="absolute inset-0 bg-cyan-400/20 rounded-lg animate-pulse" />}
            </div>
            <p className="text-white mt-4 text-lg">Standard GPU Hardware</p>
          </div>
        </div>

        {/* Benefits */}
        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {["Instant", "Scalable", "Ready"].map((benefit, index) => (
            <div key={benefit} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {benefit}
              </div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto" />
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-2xl md:text-3xl text-gray-300">Veteran Innovators with Decades of Expertise.</p>
          <p className="text-xl md:text-2xl text-blue-400 mt-2">Building the Future of AI & Hardware.</p>
        </div>
      </div>
    </section>
  )
}
