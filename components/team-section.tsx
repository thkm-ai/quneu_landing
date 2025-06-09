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

const teamMembers = [
  { name: "Michal Ogierman", title: "CTO" },
  { name: "Praveen Bhandari", title: "AI Engineer" },
  { name: "Krzysztof Sulima", title: "AI Scientist" },
  { name: "Jakub Bednarek", title: "Senior Machine Learning" },
  { name: "Kamil Kleban", title: "Fullstack Developer" },
  { name: "Pawel Molicki", title: "Cloud Engineer" },
  { name: "Zbigniew Plawecki", title: "Senior QA" },
  { name: "Alfred Driessen", title: "Theoretical Physics Advisor" },
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
    <section id="team" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin mb-6 text-slate-900 text-ethereal">
            OUR <span className="text-gradient-cosmic">TEAM</span>
          </h2>
          <div className="w-24 h-px bg-red-500 mx-auto" />
        </div>

        {/* Co-founders */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl text-center mb-8 text-slate-900 font-light text-whisper">Co-Founders</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                <div className="border border-red-500 rounded-xl p-8 text-center hover:border-red-600 transition-colors duration-300 bg-white/70 backdrop-blur-sm">
                  <div className="w-32 h-32 bg-gradient-to-br from-black via-slate-900 to-black rounded-full mx-auto mb-6 flex items-center justify-center text-white border-2 border-red-500 shadow-2xl relative overflow-hidden group">
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
                    <div className="w-16 h-16 bg-black rounded-full relative z-10 border border-red-500/50 shadow-inner">
                      {/* Inner event horizon */}
                      <div className="absolute inset-2 bg-gradient-radial from-slate-800 to-black rounded-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-red-500/20 rounded-full animate-[pulse_2.5s_ease-in-out_infinite]"></div>
                      </div>
                      {/* Singularity point */}
                      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-[pulse_0.8s_ease-in-out_infinite] shadow-[0_0_12px_rgba(220,38,38,0.9),0_0_8px_rgba(59,130,246,0.7)]"></div>
                    </div>

                    {/* Event horizon glow */}
                    <div className="absolute inset-0 rounded-full border border-red-500/50 animate-[pulse_1.5s_ease-in-out_infinite] shadow-[0_0_25px_rgba(220,38,38,0.5),0_0_15px_rgba(59,130,246,0.5),0_0_20px_rgba(139,92,246,0.5)]"></div>
                    <div className="absolute inset-2 rounded-full border border-blue-500/50 animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                  </div>
                  <h4 className="text-xl font-thin mb-2 text-slate-900 text-whisper">{founder.name}</h4>
                  <p className="text-slate-700 font-light text-airy">{founder.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core team */}
        <div>
          <h3 className="text-2xl md:text-3xl text-center mb-8 text-slate-900 font-light text-whisper">Core Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="border border-red-500 rounded-lg p-6 text-center hover:border-red-600 transition-colors duration-300 h-full bg-white/70 backdrop-blur-sm">
                  <h4 className="font-thin mb-1 text-slate-900 text-whisper">{member.name}</h4>
                  <p className="text-slate-600 text-sm font-light text-airy">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI agents tagline */}
        <div className="text-center mt-16">
          <div className="inline-block bg-red-500 h-px w-32 mb-4" />
          <p className="text-xl md:text-2xl text-slate-800 font-light text-airy">
            ENDLESS AI AGENTS PER TEAM MEMBER AS NEEDED
          </p>
        </div>
      </div>
    </section>
  )
}
