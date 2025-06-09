"use client"

import { useEffect, useRef, useState } from "react"

const problems = [
  {
    title: "Slow Innovation Cycles",
    description:
      "Traditional R&D processes take 5-10 years, relying on costly trial-and-error approaches that delay breakthrough discoveries.",
    impact: "Years to market",
  },
  {
    title: "Fragmented Data",
    description:
      "Research teams work in silos with incompatible systems, leading to lost institutional knowledge and duplicated efforts.",
    impact: "Wasted resources",
  },
  {
    title: "Resource Intensity",
    description:
      "Physical testing requires expensive lab equipment, limited capacity, and generates significant material waste.",
    impact: "High costs",
  },
]

const consequences = [
  { title: "Delayed Market Entry", impact: "2-5 years behind competitors" },
  { title: "Increased Operational Costs", impact: "40-70% higher R&D expenses" },
  { title: "Lost Competitive Edge", impact: "Market share erosion" },
]

export default function ProblemSection() {
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
    <section ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin mb-6 text-slate-900 text-ethereal">
            The <span className="text-gradient-cosmic">Business Problem</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-700 mb-8 font-light text-airy">
            Enterprise Material Innovation: A Cross-Industry Challenge
          </p>
          <div className="w-24 h-px bg-red-500 mx-auto" />
        </div>

        {/* Universal Issues */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl text-center mb-12 text-slate-900 font-light text-whisper">
            Universal Issues:
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div
                key={problem.title}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="border border-red-500 rounded-lg p-8 h-full hover:border-red-600 transition-colors duration-300 bg-white/70 backdrop-blur-sm">
                  <h4 className="text-lg font-thin text-slate-900 mb-3 text-whisper">{problem.title}</h4>
                  <p className="text-slate-700 mb-4 leading-relaxed font-light text-airy">{problem.description}</p>
                  <div className="text-sm font-light text-slate-800 bg-stone-100/80 border border-red-500 rounded-lg px-3 py-1 inline-block tracking-wider">
                    {problem.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consequences */}
        <div>
          <h3 className="text-2xl md:text-3xl text-center mb-12 text-slate-900 font-light text-whisper">
            Consequences:
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {consequences.map((consequence, index) => (
              <div
                key={consequence.title}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 3) * 200}ms` }}
              >
                <div className="border border-red-500 rounded-lg p-8 text-center h-full hover:border-red-600 transition-colors duration-300 bg-white/70 backdrop-blur-sm">
                  <h4 className="text-lg font-thin text-slate-900 mb-3 text-whisper">{consequence.title}</h4>
                  <p className="text-slate-700 font-light text-airy">{consequence.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-red-500 h-px w-32 mb-4" />
          <p className="text-xl text-slate-700 font-light text-airy">What if there was a better way?</p>
        </div>
      </div>
    </section>
  )
}
