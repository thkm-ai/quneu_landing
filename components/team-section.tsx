"use client"

import { useEffect, useRef, useState } from "react"

const founders = [
  {
    name: "Frank Lisitano",
    title: "Director of Quantum AI",
    image: "/placeholder.svg?height=200&width=200&text=Frank+Lisitano",
  },
  {
    name: "Charles Siebenberg",
    title: "Director of Business Development",
    image: "/placeholder.svg?height=200&width=200&text=Charles+Siebenberg",
  },
]



export default function TeamSection() {
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
    <section id="team" ref={sectionRef} className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin mb-4 sm:mb-6 text-slate-900 text-ethereal">
            OUR <span className="text-gradient-cosmic">TEAM</span>
          </h2>
          <div className="w-20 sm:w-24 h-px bg-red-500 mx-auto" />
        </div>

        {/* Co-founders */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl md:text-3xl text-center mb-6 sm:mb-8 text-slate-900 font-light text-whisper">Co-Founders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <div
                key={founder.name}
                className={`transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : index === 0
                      ? "opacity-0 -translate-x-16"
                      : "opacity-0 translate-x-16"
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="border border-red-500 rounded-xl p-6 sm:p-8 text-center hover:border-red-600 transition-colors duration-300 bg-white/70 backdrop-blur-sm">
                  <div className="w-32 h-32 sm:w-32 sm:h-32 bg-gradient-to-br from-black via-slate-900 to-black rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center text-white border-2 border-red-500 shadow-2xl relative overflow-hidden group">
                    {/* Black hole effect with swirling animation */}
                    <div
                      className="absolute inset-0 bg-gradient-radial from-transparent via-slate-800/30 to-black rounded-full animate-spin"
                      style={{ animationDuration: "8s" }}
                    ></div>
                    <div
                      className="absolute inset-2 bg-gradient-radial from-transparent via-slate-700/20 to-slate-900 rounded-full animate-spin"
                      style={{ animationDuration: "6s", animationDirection: "reverse" }}
                    ></div>
                    <div
                      className="absolute inset-4 bg-gradient-radial from-transparent via-slate-600/10 to-slate-800 rounded-full animate-spin"
                      style={{ animationDuration: "4s" }}
                    ></div>

                    {/* Pure black hole center */}
                    <div className="w-20 h-20 sm:w-16 sm:h-16 bg-black rounded-full relative z-10 border border-red-500/50 shadow-inner">
                      {/* Inner event horizon */}
                      <div className="absolute inset-2 bg-gradient-radial from-slate-800 to-black rounded-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-red-500/20 rounded-full animate-[pulse_2.5s_ease-in-out_infinite]"></div>
                      </div>
                      {/* Singularity point */}
                      <div className="absolute top-1/2 left-1/2 w-3 h-3 sm:w-2 sm:h-2 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-[pulse_0.8s_ease-in-out_infinite] shadow-[0_0_12px_rgba(220,38,38,0.9),0_0_8px_rgba(59,130,246,0.7)]"></div>
                    </div>

                    {/* Event horizon glow */}
                    <div className="absolute inset-0 rounded-full border border-red-500/50 animate-[pulse_1.5s_ease-in-out_infinite] shadow-[0_0_25px_rgba(220,38,38,0.5),0_0_15px_rgba(59,130,246,0.5),0_0_20px_rgba(139,92,246,0.5)]"></div>
                    <div className="absolute inset-2 rounded-full border border-blue-500/50 animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                  </div>
                  <h4 className="text-lg sm:text-xl font-thin mb-2 text-slate-900 text-whisper">{founder.name}</h4>
                  <p className="text-sm sm:text-base text-slate-700 font-light text-airy">{founder.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core team */}
        <div>
          
        </div>

        {/* AI agents tagline */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-block bg-red-500 h-px w-24 sm:w-32 mb-4" />
          <p className="text-lg sm:text-xl md:text-2xl text-slate-800 font-light text-airy">
            ENDLESS AI AGENTS PER TEAM MEMBER AS NEEDED
          </p>
        </div>
      </div>
    </section>
  )
}
