"use client"

import { useEffect, useRef, useState } from "react"
import {
  QuantumCircuitBreakthrough,
  QuantumDataProcessing,
  QuantumAcceleration,
  QuantumInnovation,
} from "./custom-symbols"

const steps = [
  {
    icon: QuantumCircuitBreakthrough,
    title: "Choose Elements",
    description: "Pick the basic building blocks - like choosing ingredients for a recipe",
  },
  {
    icon: QuantumDataProcessing,
    title: "Set Properties",
    description: "Tell the AI what you want - stronger than steel, conducts electricity, etc.",
  },
  {
    icon: QuantumAcceleration,
    title: "AI Magic",
    description: "Advanced algorithms explore combinations in seconds",
  },
  {
    icon: QuantumInnovation,
    title: "New Materials",
    description: "Get novel materials with exactly the properties you need",
  },
]

export default function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Auto-cycle through steps
          const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length)
          }, 2000)
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

  useEffect(() => {
    const handleScroll = () => {
      // Force re-render on scroll for binary animation
      setActiveStep((prev) => prev)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      {/* Animated binary background */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-20 gap-4 p-4">
          {Array.from({ length: 400 }, (_, i) => {
            const scrollOffset = typeof window !== "undefined" ? window.scrollY : 0
            const shouldShow1 = Math.floor((scrollOffset / 50 + i) % 2) === 0
            return (
              <div
                key={i}
                className="text-slate-800 text-xs font-thin transition-all duration-300 flex items-center justify-center"
                style={{
                  transform: `translateY(${(scrollOffset * 0.1) % 20}px)`,
                }}
              >
                {shouldShow1 ? "1" : "0"}
              </div>
            )
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin mb-8 text-slate-900 text-ethereal">
            HOW QUNEU <span className="text-gradient-cosmic">GENERATES NEW MATERIALS</span>
          </h2>
          <div className="w-24 h-px bg-red-500 mx-auto" />
        </div>

        {/* Steps flow */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${activeStep === index ? "scale-110" : "scale-100"}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-center relative">
                <div
                  className={`w-20 h-20 rounded-2xl bg-slate-800 border border-red-500 flex items-center justify-center text-3xl mb-4 mx-auto transition-all duration-300 shadow-sm ${activeStep === index ? "shadow-lg shadow-slate-400/25" : ""}`}
                >
                  <step.icon size={40} className="text-white" />
                </div>
                <h3 className="text-lg font-thin mb-2 text-slate-900 text-whisper">{step.title}</h3>
                <p className="text-slate-700 text-sm leading-relaxed font-light text-airy">{step.description}</p>

                {/* Arrow (except for last item on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 z-10">
                    <div className="flex items-center">
                      <div className="w-8 h-0.5 bg-red-600 opacity-70" />
                      <div className="w-0 h-0 border-l-4 border-l-red-600 border-y-2 border-y-transparent opacity-70" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-thin text-slate-800 text-ethereal">
            What used to take years of lab work now happens in minutes!
          </p>
        </div>
      </div>
    </section>
  )
}
