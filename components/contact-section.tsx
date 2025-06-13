"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      // Your Formspree endpoint
      const response = await fetch('https://formspree.io/f/mdkzewzy', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        // Handle Formspree validation errors
        const data = await response.json()
        if (data.errors) {
          alert(data.errors.map((error: any) => error.message).join(', '))
        } else {
          throw new Error('Failed to submit')
        }
      }
    } catch (error) {
      alert('Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-green-800 font-medium mb-2">Thank you!</h3>
              <p className="text-green-700">We'll be in touch shortly to schedule your demo.</p>
            </div>
          ) : (
            <div className="space-y-6 md:space-y-0 md:space-x-6 md:flex md:justify-center">
              <form onSubmit={handleSubmit} className="w-full md:w-auto flex flex-col md:flex-row gap-4 items-center">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  disabled={isSubmitting}
                  className="w-full md:w-64 px-4 py-3 border border-red-500 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-800 focus:border-transparent transition-all duration-300 font-light bg-white/80 backdrop-blur-sm disabled:opacity-50"
                />
                <input type="hidden" name="subject" value="Demo Request from QUNEU Website" />
                <input type="hidden" name="message" value="New demo request submitted" />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-lg text-lg font-light transition-all duration-300 hover:scale-105 shadow-sm whitespace-nowrap tracking-wider border border-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Schedule a Demo'}
                </button>
              </form>
              
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 pt-12 border-t border-red-500 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="mb-6 md:mb-0">
              <img src="/images/logo-black.png" alt="QUNEU" className="h-8 w-auto" />
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

          {/* Legal Links */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200">
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-4 md:mb-0">
              <Link 
                href="/privacy" 
                className="text-sm text-slate-600 hover:text-slate-800 font-light transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <span className="text-slate-400">•</span>
              <Link 
                href="/terms" 
                className="text-sm text-slate-600 hover:text-slate-800 font-light transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <span className="text-slate-400">•</span>
              <a 
                href="mailto:legal@quneu.com" 
                className="text-sm text-slate-600 hover:text-slate-800 font-light transition-colors duration-300"
              >
                Legal Inquiries
              </a>
            </div>
            <div className="text-xs text-slate-500 font-light">
              Last updated: January 15, 2025
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}