"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import VisionSection from "@/components/vision-section"
import DifferentiatorSection from "@/components/differentiator-section"
import ProblemSection from "@/components/problem-section"
import SolutionSection from "@/components/solution-section"
import HowItWorksSection from "@/components/how-it-works-section"
import AdvantagesSection from "@/components/advantages-section"
import ApplicationsSection from "@/components/applications-section"
import TeamSection from "@/components/team-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min((window.scrollY / totalHeight) * 100, 100)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative">
      {/* Main Content */}
      <div className="relative z-20">
        <Navigation />
        <HeroSection />
        <VisionSection />
        <DifferentiatorSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <AdvantagesSection />
        <ApplicationsSection />
        <TeamSection />
        <ContactSection />
      </div>
    </main>
  )
}
