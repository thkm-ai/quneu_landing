import type React from "react"
import type { Metadata } from "next"
import { Inter, Raleway } from "next/font/google"
import "./globals.css"
import QuantumFieldBackground from "@/components/quantum-field-background"
import Navigation from "@/components/navigation"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
  variable: "--font-raleway",
  display: "swap",
})

export const metadata: Metadata = {
  title: "QUNEU - Quantum Intelligence",
  description: "Bringing quantum intelligence to life, making the impossible possible by solving problems that matter.",
  generator: 'v0.dev',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={`${inter.variable} ${raleway.variable} text-slate-900 relative font-sans`}>
        <QuantumFieldBackground />
        <Navigation />
        {children}
      </body>
    </html>
  )
}