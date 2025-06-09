"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function ContactSection() {
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
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-thin mb-8 text-slate-900 text-ethereal">
            Ready To Transform Your{" "}
            <span className="text-gradient-cosmic">Enterprise and Your Material Discovery?</span>
          </h2>

          <div className="w-24 h-px bg-red-500 mx-auto mb-8" />

          <p className="text-xl text-slate-700 mb-12 max-w-2xl mx-auto font-light text-airy">
            Join the quantum intelligence revolution. Discover how QUNEU can accelerate your innovation cycles and
            unlock new possibilities.
          </p>

          <div className="space-y-6 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <form className="w-full md:w-auto flex flex-col md:flex-row gap-4 items-center">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full md:w-64 px-4 py-3 border border-red-500 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-800 focus:border-transparent transition-all duration-300 font-light bg-white/80 backdrop-blur-sm"
              />
              <button
                type="submit"
                className="w-full md:w-auto bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-lg text-lg font-light transition-all duration-300 hover:scale-105 shadow-sm whitespace-nowrap tracking-wider border border-red-500"
              >
                Schedule a Demo
              </button>
            </form>
            <button className="w-full md:w-auto border border-red-500 hover:border-slate-900 text-slate-800 hover:text-slate-900 px-8 py-3 rounded-lg text-lg font-light transition-all duration-300 hover:scale-105 tracking-wider bg-white/70 backdrop-blur-sm">
              Download Whitepaper
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-12 border-t border-red-500 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <Image src="/images/logo-black.png" alt="QUNEU" width={120} height={36} className="h-8 w-auto" />
            </div>

            {/* Add flags section */}
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🇳🇱</span>
                <span className="text-sm text-slate-600 font-light">Netherlands</span>
              </div>
              <div className="w-px h-6 bg-slate-300"></div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🇵🇱</span>
                <span className="text-sm text-slate-600 font-light">Poland</span>
              </div>
              <div className="w-px h-6 bg-slate-300"></div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🇺🇸</span>
                <span className="text-sm text-slate-600 font-light">United States</span>
              </div>
            </div>

            <div className="text-slate-600 text-sm font-light tracking-wider">© 2025 QUNEU. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </section>
  )
}
