"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("hero")
  const waveRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Track if we've scrolled down
      setIsScrolled(window.scrollY > 50)

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Determine active section based on scroll position
      const sections = ["hero", "vision", "solution", "how-it-works", "applications", "enterprise", "team"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Navigation items
  const navItems = [
    { id: "vision", label: "Vision" },
    { id: "solution", label: "Solutions" },
    { id: "how-it-works", label: "Works" },
    { id: "enterprise", label: "Enterprise" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact", isButton: true },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="relative flex items-center justify-center h-20">
          {/* Quantum Wave Navigation */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Wave Container */}
            <div className="relative w-full h-16 overflow-hidden">
              {/* Navigation Items */}
              <div className="absolute inset-0 flex items-center justify-between px-4 bg-white/90 backdrop-blur-sm border border-red-500 rounded-full">
                {/* Logo */}
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="relative z-10 bg-slate-800 text-white rounded-full p-3 border border-red-500 shadow-md hover:shadow-lg hover:bg-slate-700 transition-all duration-300 cursor-pointer"
                >
                  <Image src="/images/logo-white.png" alt="QUNEU" width={100} height={30} className="h-7 w-auto" />
                </a>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-1">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.id === "contact" ? "#" : `#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        if (item.id === "contact") {
                          // Scroll to contact section at the bottom
                          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
                        } else if (item.id === "enterprise") {
                          // Scroll to applications section which contains the Enterprise FOCUS content
                          const element = document.getElementById("applications")
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "start" })
                          }
                        } else {
                          const element = document.getElementById(item.id)
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "start" })
                          }
                        }
                      }}
                      className={`
                        relative px-4 py-2 rounded-full text-sm font-light tracking-wider transition-all duration-300
                        ${activeSection === item.id ? "text-slate-900" : "text-slate-600 hover:text-slate-800"}
                        ${item.isButton ? "bg-slate-800 text-white hover:bg-slate-700 ml-2 border border-red-500" : ""}
                      `}
                    >
                      {item.label}
                      {activeSection === item.id && !item.isButton && (
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-slate-800 rounded-full" />
                      )}
                    </a>
                  ))}
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <button className="w-10 h-10 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all duration-300 shadow-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
