"use client"

import { useEffect, useRef, useState } from "react"
import {
  QuantumSuperposition,
  QuantumPrecision,
  DeepTechHelix,
  QuantumCostOptimization,
  QuantumSustainability,
  QuantumResearch,
} from "./custom-symbols"

const advantages = [
  {
    icon: QuantumSuperposition,
    title: "Accelerated Discovery",
    description:
      "Quantum superposition enables parallel exploration of material configurations, reducing discovery time from years to months",
    metric: "Years → Months",
  },
  {
    icon: QuantumPrecision,
    title: "Enhanced Targeting",
    description:
      "Quantum entanglement captures complex property correlations, achieving 3x better accuracy in targeting specific material properties",
    metric: "3x Better Accuracy",
  },
  {
    icon: DeepTechHelix,
    title: "Novel Discovery",
    description:
      "Access previously unexplored regions of chemical space through quantum interference effects and non-local correlations",
    metric: "Unexplored Regions",
  },
  {
    icon: QuantumCostOptimization,
    title: "Cost Reduction",
    description:
      "Reduce experimental screening cost by 70% through more accurate computational predictions and focused synthesis efforts",
    metric: "70% Cost Reduction",
  },
  {
    icon: QuantumSustainability,
    title: "Sustainability Focus",
    description:
      "Design environmentally friendly materials with optimized recyclability and reduced environment impact",
    metric: "Green Materials",
  },
  {
    icon: QuantumResearch,
    title: "Scientific Insight",
    description:
      "Gain fundamental understanding of quantum effects in material through direct quantum mechanical modeling approaches",
    metric: "Deep Understanding",
  },
]

export default function AdvantagesSection() {
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
    <section ref={sectionRef} className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin mb-4 sm:mb-6 text-slate-900 text-ethereal">
            <span className="text-gradient-cosmic">ADVANTAGES</span>
          </h2>
          <div className="w-20 sm:w-24 h-px bg-red-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="border border-red-500 rounded-lg p-6 sm:p-8 h-full hover:border-red-600 transition-all duration-300 group bg-white/70 backdrop-blur-sm">
                <div className="text-4xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <advantage.icon size={56} className="sm:w-12 sm:h-12" />
                </div>

                <h3 className="text-lg sm:text-xl font-thin mb-3 text-slate-900 text-whisper">{advantage.title}</h3>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 font-light text-airy">
                  {advantage.description}
                </p>

                <div className="text-slate-800 font-light text-xs sm:text-sm bg-stone-100/80 rounded-lg px-3 py-1 inline-block tracking-wider border border-red-500">
                  {advantage.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
