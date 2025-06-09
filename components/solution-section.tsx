"use client"

import { useEffect, useRef, useState } from "react"

const capabilities = [
  {
    title: "Electron Correlation",
    description: "Models strong electron interactions in superconductors and magnetic materials",
  },
  {
    title: "Entanglement",
    description: "Models quantum states that are deeply correlated—critical for advanced quantum materials",
  },
  {
    title: "Quantum Spintronics",
    description: "Simulates spin behavior for magnetic and spintronic device innovation",
  },
  {
    title: "Quantum Tunneling",
    description: "Simulates electron flow through barriers—essential for quantum dots and semiconductors",
  },
  {
    title: "Band Structure",
    description: "Accurately predicts electronic band gaps for designing semiconductors and photovoltaics",
  },
  {
    title: "Electron Density",
    description: "Maps electron distribution to understand bonding, reactivity, and material interfaces",
  },
]

export default function SolutionSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCapability, setActiveCapability] = useState<number | null>(null)
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
    <section id="solution" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-thin mb-6 text-slate-900 text-ethereal">
            <span className="text-gradient-cosmic">SOLUTIONS:</span> QUNEU Simulation
          </h2>
          <h3 className="text-2xl md:text-4xl text-slate-700 mb-8 font-light text-whisper">
            for New Material Discovery
          </h3>
        </div>

        {/* Central visualization with capabilities */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central quantum sphere */}
          <div className="flex items-center justify-center mb-16">
            <div
              className={`relative w-64 h-64 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
            >
              {/* Wireframe sphere */}
              <svg className="w-full h-full" viewBox="0 0 200 200">
                {/* Main circle outline */}
                <circle cx="100" cy="100" r="80" fill="none" stroke="#dc2626" strokeWidth="2" opacity="0.8" />

                {/* Vertical lines */}
                <ellipse cx="100" cy="100" rx="40" ry="80" fill="none" stroke="#dc2626" strokeWidth="1" opacity="0.6" />
                <ellipse cx="100" cy="100" rx="60" ry="80" fill="none" stroke="#dc2626" strokeWidth="1" opacity="0.6" />
                <ellipse cx="100" cy="100" rx="80" ry="80" fill="none" stroke="#dc2626" strokeWidth="1" opacity="0.6" />

                {/* Horizontal lines */}
                <ellipse cx="100" cy="100" rx="80" ry="20" fill="none" stroke="#dc2626" strokeWidth="1" opacity="0.6" />
                <ellipse cx="100" cy="100" rx="80" ry="40" fill="none" stroke="#dc2626" strokeWidth="1" opacity="0.6" />
                <ellipse cx="100" cy="100" rx="80" ry="60" fill="none" stroke="#dc2626" strokeWidth="1" opacity="0.6" />

                {/* Internal interconnecting lines with heartbeat animation */}
                <g>
                  {/* Center to all nodes */}
                  <line x1="100" y1="100" x2="100" y2="20" stroke="#dc2626" strokeWidth="1" opacity="0.4">
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="100" y1="100" x2="160" y2="60" stroke="#dc2626" strokeWidth="1" opacity="0.4">
                    <animate
                      attributeName="opacity"
                      values="0.2;0.6;0.2"
                      dur="1.5s"
                      repeatCount="indefinite"
                      begin="0.2s"
                    />
                  </line>
                  <line x1="100" y1="100" x2="160" y2="140" stroke="#dc2626" strokeWidth="1" opacity="0.4">
                    <animate
                      attributeName="opacity"
                      values="0.2;0.6;0.2"
                      dur="1.5s"
                      repeatCount="indefinite"
                      begin="0.4s"
                    />
                  </line>
                  <line x1="100" y1="100" x2="100" y2="180" stroke="#dc2626" strokeWidth="1" opacity="0.4">
                    <animate
                      attributeName="opacity"
                      values="0.2;0.6;0.2"
                      dur="1.5s"
                      repeatCount="indefinite"
                      begin="0.6s"
                    />
                  </line>
                  <line x1="100" y1="100" x2="40" y2="140" stroke="#dc2626" strokeWidth="1" opacity="0.4">
                    <animate
                      attributeName="opacity"
                      values="0.2;0.6;0.2"
                      dur="1.5s"
                      repeatCount="indefinite"
                      begin="0.8s"
                    />
                  </line>
                  <line x1="100" y1="100" x2="40" y2="60" stroke="#dc2626" strokeWidth="1" opacity="0.4">
                    <animate
                      attributeName="opacity"
                      values="0.2;0.6;0.2"
                      dur="1.5s"
                      repeatCount="indefinite"
                      begin="1.0s"
                    />
                  </line>

                  {/* Cross connections between nodes */}
                  <line x1="100" y1="20" x2="160" y2="60" stroke="#dc2626" strokeWidth="0.5" opacity="0.3">
                    <animate attributeName="opacity" values="0.1;0.4;0.1" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="160" y1="60" x2="160" y2="140" stroke="#dc2626" strokeWidth="0.5" opacity="0.3">
                    <animate
                      attributeName="opacity"
                      values="0.1;0.4;0.1"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="0.3s"
                    />
                  </line>
                  <line x1="160" y1="140" x2="100" y2="180" stroke="#dc2626" strokeWidth="0.5" opacity="0.3">
                    <animate
                      attributeName="opacity"
                      values="0.1;0.4;0.1"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="0.6s"
                    />
                  </line>
                  <line x1="100" y1="180" x2="40" y2="140" stroke="#dc2626" strokeWidth="0.5" opacity="0.3">
                    <animate
                      attributeName="opacity"
                      values="0.1;0.4;0.1"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="0.9s"
                    />
                  </line>
                  <line x1="40" y1="140" x2="40" y2="60" stroke="#dc2626" strokeWidth="0.5" opacity="0.3">
                    <animate
                      attributeName="opacity"
                      values="0.1;0.4;0.1"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="1.2s"
                    />
                  </line>
                  <line x1="40" y1="60" x2="100" y2="20" stroke="#dc2626" strokeWidth="0.5" opacity="0.3">
                    <animate
                      attributeName="opacity"
                      values="0.1;0.4;0.1"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="1.5s"
                    />
                  </line>

                  {/* Additional diagonal connections */}
                  <line x1="100" y1="20" x2="40" y2="140" stroke="#dc2626" strokeWidth="0.5" opacity="0.2">
                    <animate attributeName="opacity" values="0.1;0.3;0.1" dur="2.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="160" y1="60" x2="40" y2="140" stroke="#dc2626" strokeWidth="0.5" opacity="0.2">
                    <animate
                      attributeName="opacity"
                      values="0.1;0.3;0.1"
                      dur="2.5s"
                      repeatCount="indefinite"
                      begin="0.5s"
                    />
                  </line>
                  <line x1="160" y1="140" x2="40" y2="60" stroke="#dc2626" strokeWidth="0.5" opacity="0.2">
                    <animate
                      attributeName="opacity"
                      values="0.1;0.3;0.1"
                      dur="2.5s"
                      repeatCount="indefinite"
                      begin="1.0s"
                    />
                  </line>
                  <line x1="100" y1="180" x2="160" y2="60" stroke="#dc2626" strokeWidth="0.5" opacity="0.2">
                    <animate
                      attributeName="opacity"
                      values="0.1;0.3;0.1"
                      dur="2.5s"
                      repeatCount="indefinite"
                      begin="1.5s"
                    />
                  </line>
                </g>

                {/* Static connection nodes (qubit dots) */}
                <circle cx="100" cy="20" r="4" fill="#dc2626" />
                <circle cx="160" cy="60" r="4" fill="#dc2626" />
                <circle cx="160" cy="140" r="4" fill="#dc2626" />
                <circle cx="100" cy="180" r="4" fill="#dc2626" />
                <circle cx="40" cy="140" r="4" fill="#dc2626" />
                <circle cx="40" cy="60" r="4" fill="#dc2626" />
              </svg>

              {/* Central core */}
              <div
                className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse shadow-sm"
                style={{ animationDuration: "1.5s" }}
              />
            </div>
          </div>

          {/* Capabilities grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${activeCapability === index ? "scale-105" : "scale-100"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveCapability(index)}
                onMouseLeave={() => setActiveCapability(null)}
              >
                <div className="border border-red-500 rounded-lg p-8 h-full hover:border-red-600 transition-all duration-300 bg-white/70 backdrop-blur-sm">
                  <h4 className="text-lg font-thin text-slate-800 mb-3 text-whisper font-medium">{capability.title}</h4>
                  <p className="text-slate-700 text-sm leading-relaxed font-light text-airy">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
