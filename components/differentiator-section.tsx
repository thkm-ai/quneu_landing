"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function DifferentiatorSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Auto-cycle through steps
          const interval = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % 3)
          }, 3000)
          return () => clearInterval(interval)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin mb-3 sm:mb-4 text-slate-900 text-ethereal">
            QUNEU RUNS ON TODAY'S <span className="text-gradient-cosmic">HARDWARE</span>
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl text-slate-800 mb-4 sm:mb-6 font-light text-whisper">
            NO QUANTUM COMPUTERS INVOLVED
          </h3>
          <p className="text-lg sm:text-xl text-slate-700 font-light text-airy">
            Quantum-simulation AI • Powered by GPUs • Deployable now
          </p>
        </div>

        {/* Transformation Flow */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12">
            {/* QUNEU Q - Now First */}
            <div
              className={`text-center transition-all duration-500 flex-shrink-0 flex flex-col ${currentStep === 1 ? "scale-110" : "scale-100 opacity-70"}`}
            >
              <div className="w-28 h-28 sm:w-28 sm:h-28 md:w-36 md:h-36 mx-auto mb-3 sm:mb-4 relative">
                {/* Circular container with red border and black background */}
                <div className="absolute inset-0 rounded-full border-4 border-red-600 overflow-hidden bg-black">
                  {/* Brain image */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/brain-black-bg.png"
                      alt="QUNEU Brain Anatomy"
                      fill
                      className="object-contain rounded-full p-1"
                      priority
                    />
                  </div>
                </div>

                {/* QUNEU logo overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/70 rounded-full px-3 sm:px-3 py-1 backdrop-blur-sm">
                    <Image
                      src="/images/logo-white.png"
                      alt="QUNEU Logo"
                      width={50}
                      height={15}
                      className="object-contain h-4 sm:h-4 w-auto"
                    />
                  </div>
                </div>

                {/* Pulse effect overlay */}
                {currentStep === 1 && <div className="absolute inset-0 bg-red-500/20 rounded-full animate-pulse" />}
              </div>
              <div className="h-10 sm:h-12 flex items-end justify-center">
                <p className="text-sm sm:text-sm md:text-base text-slate-700 font-light text-airy text-center">QUNEU Simulation</p>
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="flex items-center justify-center flex-shrink-0 -mt-4 sm:-mt-8">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
                {/* Plus sign */}
                <div className="relative">
                  <div className="w-8 sm:w-8 md:w-10 h-1 bg-red-500 rounded"></div>
                  <div className="w-1 h-8 sm:h-8 md:h-10 bg-red-500 rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>

            {/* GPU - Now Second */}
            <div className="text-center transition-all duration-500 flex-shrink-0 flex flex-col">
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-52 md:h-52 mx-auto mb-3 sm:mb-4">
                <Image src="/images/gpu-chip.png" alt="GPU Chip" fill className="object-contain" />
              </div>
              <div className="h-10 sm:h-12 flex items-center justify-center">
                <p className="text-sm sm:text-sm md:text-base text-slate-700 font-light text-airy text-center">
                  Standard GPU Hardware
                </p>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="flex items-center justify-center flex-shrink-0 -mt-4 sm:-mt-8">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
                {/* Equals sign */}
                <div className="relative">
                  <div className="w-8 sm:w-8 md:w-10 h-1 bg-red-500 rounded mb-1 sm:mb-2"></div>
                  <div className="w-8 sm:w-8 md:w-10 h-1 bg-red-500 rounded"></div>
                </div>
              </div>
            </div>

            {/* Quantum Computer - Now Last */}
            <div className="text-center transition-all duration-500 flex-shrink-0 flex flex-col">
              <div className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-56 md:h-56 mx-auto mb-3 sm:mb-4">
                <Image src="/images/quantum-computer.webp" alt="Quantum Computer" fill className="object-contain" />

                {/* Red X overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute top-1/2 left-1/2 w-full h-1 bg-red-500/80 transform -translate-x-1/2 -translate-y-1/2 rotate-45 rounded"></div>
                  <div className="absolute top-1/2 left-1/2 w-full h-1 bg-red-500/80 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded"></div>
                </div>
              </div>
              <div className="h-10 sm:h-12 flex items-end justify-center">
                <p className="text-sm sm:text-sm md:text-base text-slate-700 font-light text-airy text-center">
                  Complex Quantum Computing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          {["Instant", "Scalable", "Ready"].map((benefit, index) => (
            <div
              key={benefit}
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-thin text-slate-800 mb-2 text-ethereal">{benefit}</div>
              <div className="w-10 sm:w-12 h-px bg-red-500 mx-auto" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16 py-6 sm:py-8">
          <p className="text-lg sm:text-xl md:text-2xl text-slate-700 mb-2 font-light text-airy">
            Veteran Innovators with Decades of Expertise
          </p>
          <p className="text-base sm:text-lg md:text-xl text-red-500 font-light text-whisper">
            BUILDING THE FUTURE OF CONSCIOUS AI SOFTWARE
          </p>
        </div>
      </div>
    </section>
  )
}
