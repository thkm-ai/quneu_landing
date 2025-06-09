"use client"

import { useEffect, useRef, useState } from "react"
import {
  QuantumEnergyStorage,
  QuantumSemiconductor,
  QuantumMaterials,
  QuantumCatalysis,
  QuantumBiomedical,
  QuantumSustainability,
} from "./custom-symbols"

const applications = [
  {
    title: "Energy Storage",
    description: "Next-gen batteries & supercapacitors",
    icon: QuantumEnergyStorage,
  },
  {
    title: "Semiconductors",
    description: "Next-gen electronics & photonics",
    icon: QuantumSemiconductor,
  },
  {
    title: "Advanced Materials",
    description: "Aerospace & structural applications",
    icon: QuantumMaterials,
  },
  {
    title: "Catalysis",
    description: "Green chemistry & sustainability",
    icon: QuantumCatalysis,
  },
  {
    title: "Biomedical",
    description: "Drug delivery & medical devices",
    icon: QuantumBiomedical,
  },
  {
    title: "Sustainability",
    description: "Carbon capture & environmental",
    icon: QuantumSustainability,
  },
]

export default function ApplicationsSection() {
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
    <section id="applications" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin mb-6 text-slate-900 text-ethereal">
            Quneu Enterprise <span className="text-gradient-cosmic">FOCUS</span>
          </h2>
          <h3 className="text-2xl md:text-3xl text-slate-700 mb-8 font-light text-whisper">
            HOW TO USE CONSCIOUS INTELLIGENCE
          </h3>
          <div className="w-24 h-px bg-red-500 mx-auto mb-8" />
          <p className="text-lg text-slate-600 max-w-4xl mx-auto font-light text-airy">
            Explore and implement Quneu's Quantum Conscious Simulation AI to exponentially launch your enterprise into
            the next era of innovation, manufacturing, and advanced research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div
              key={app.title}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="border border-red-500 rounded-lg p-8 h-full hover:border-red-600 transition-all duration-300 group text-center bg-white/70 backdrop-blur-sm">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <app.icon size={64} />
                </div>

                <h3 className="text-xl font-thin mb-3 text-slate-900 text-whisper">{app.title}</h3>

                <p className="text-slate-700 font-light text-airy">{app.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
