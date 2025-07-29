"use client"

import { useEffect, useRef, useState } from "react"
import { QuantumNeuralDisruption, ConsciousnessEmergence, DeepTechHelix } from "./custom-symbols"

const visionItems = [
  {
    icon: QuantumNeuralDisruption,
    title: "VISION",
    content:
      "Quneu leads the quantum intelligence revolution by using quantum computing principles through advanced simulation—no quantum hardware required. We deliver powerful, practical solutions today to solve complex problems across industries.",
  },
  {
    icon: ConsciousnessEmergence,
    title: "MISSION",
    content:
      "With curiosity, creativity, and a focus on sustainability and impact, Quneu builds quantum-enhanced technologies that help machines think and communicate like humans—driving innovation and responsible change.",
  },
  {
    icon: DeepTechHelix,
    title: "VALUE",
    content:
      "Quneu creates intelligent systems that outperform traditional AI, helping businesses save money, move faster, and unlock new opportunities.",
  },
]

export default function VisionSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
    <section id="vision" ref={sectionRef} className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-thin mb-4 sm:mb-6 text-slate-900 text-ethereal">
            Our <span className="text-gradient-cosmic">FOUNDATION</span>
          </h2>
          <div className="w-20 sm:w-24 h-px bg-red-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {visionItems.map((item, index) => (
            <div
              key={item.title}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-center border border-red-500 rounded-lg p-6 sm:p-8 hover:border-red-600 transition-colors duration-300 h-full bg-white/70 backdrop-blur-sm">
                <div className="inline-flex items-center justify-center w-20 h-20 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 text-white text-3xl sm:text-3xl mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 border border-red-500">
                  <item.icon size={40} className="text-white sm:w-8 sm:h-8" />
                </div>

                <h3 className="text-xl sm:text-2xl font-thin mb-3 sm:mb-4 tracking-wider text-slate-900 text-whisper uppercase">
                  {item.title}
                </h3>

                <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-4 sm:mb-6"></div>

                <p className="text-slate-700 leading-relaxed font-light text-airy text-sm sm:text-base max-w-sm mx-auto">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
