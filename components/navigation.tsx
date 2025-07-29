"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const waveRef = useRef<HTMLDivElement>(null)

  // Check if we're on the home page
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      // Track if we've scrolled down
      setIsScrolled(window.scrollY > 50)

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Only track sections on home page
      if (isHomePage) {
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
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMobileMenuOpen])

  // Navigation items
  const navItems = [
    { id: "vision", label: "Vision" },
    { id: "solution", label: "Solutions" },
    { id: "how-it-works", label: "Works" },
    { id: "enterprise", label: "Enterprise" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact", isButton: true },
  ]

  const handleNavClick = (item: any) => {
    setIsMobileMenuOpen(false) // Close mobile menu when item is clicked
    
    if (!isHomePage) {
      // If not on home page, navigate to home page with hash
      window.location.href = `/#${item.id}`
      return
    }

    // If on home page, scroll to section
    if (item.id === "contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
    } else if (item.id === "enterprise") {
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
  }

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="relative flex items-center justify-center h-16 sm:h-20">
          {/* Quantum Wave Navigation */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Wave Container */}
            <div className="relative w-full h-12 sm:h-16 overflow-hidden">
              {/* Navigation Items */}
              <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4 bg-white/90 backdrop-blur-sm border border-red-500 rounded-full">
                {/* Mobile menu button - Inside the border */}
                <div className="md:hidden mobile-menu">
                  <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all duration-300 shadow-sm"
                    aria-label="Toggle mobile menu"
                  >
                    <svg 
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      {isMobileMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
                      )}
                    </svg>
                  </button>
                </div>

                {/* Logo - Centered */}
                <div className="flex-1 flex justify-center">
                  <Link
                    href="/"
                    className="relative z-10 bg-slate-800 text-white rounded-full p-2 sm:p-3 border border-red-500 shadow-md hover:shadow-lg hover:bg-slate-700 transition-all duration-300 cursor-pointer"
                  >
                    <Image src="/images/logo-white.png" alt="QUNEU" width={100} height={30} className="h-5 sm:h-7 w-auto" />
                  </Link>
                </div>

                {/* Desktop Navigation Links - Hidden on mobile */}
                <div className="hidden md:flex items-center space-x-1 flex-1 justify-end">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item)}
                      className={`
                        relative px-4 py-2 rounded-full text-sm font-light tracking-wider transition-all duration-300
                        ${isHomePage && activeSection === item.id ? "text-slate-900" : "text-slate-600 hover:text-slate-800"}
                        ${item.isButton ? "bg-slate-800 text-white hover:bg-slate-700 ml-2 border border-red-500" : ""}
                      `}
                    >
                      {item.label}
                      {isHomePage && activeSection === item.id && !item.isButton && (
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-slate-800 rounded-full" />
                      )}
                    </button>
                  ))}

                  {/* Privacy Policy Link */}
                  <Link
                    href="/privacy"
                    className={`relative px-4 py-2 rounded-full text-sm font-light tracking-wider transition-all duration-300 ml-2 ${
                      pathname === "/privacy" ? "text-slate-900 bg-slate-100" : "text-slate-600 hover:text-slate-800"
                    }`}
                  >
                    Privacy
                    {pathname === "/privacy" && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-slate-800 rounded-full" />
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border border-red-500 rounded-lg mt-2 mx-4 shadow-lg">
            <div className="py-4 px-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`
                    w-full text-left px-4 py-3 rounded-lg text-sm font-light tracking-wider transition-all duration-300
                    ${isHomePage && activeSection === item.id ? "text-slate-900 bg-slate-100" : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"}
                    ${item.isButton ? "bg-slate-800 text-white hover:bg-slate-700 border border-red-500" : ""}
                  `}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Privacy Policy Link in Mobile Menu */}
              <Link
                href="/privacy"
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-light tracking-wider transition-all duration-300 ${
                  pathname === "/privacy" ? "text-slate-900 bg-slate-100" : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
                }`}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}