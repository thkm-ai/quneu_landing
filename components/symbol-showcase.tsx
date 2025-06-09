"use client"

import {
  QuantumNeuralDisruption,
  ConsciousnessEmergence,
  QuantumCircuitBreakthrough,
  DeepTechHelix,
  QuantumSuperposition,
  AITransformation,
} from "./custom-symbols"

export default function SymbolShowcase() {
  const symbols = [
    {
      component: QuantumNeuralDisruption,
      name: "Quantum Neural Disruption",
      description: "Represents the disruption of traditional neural networks through quantum computing",
    },
    {
      component: ConsciousnessEmergence,
      name: "Consciousness Emergence",
      description: "Symbolizes the emergence of conscious intelligence from quantum processes",
    },
    {
      component: QuantumCircuitBreakthrough,
      name: "Quantum Circuit Breakthrough",
      description: "Shows the breakthrough moment when quantum computing transforms traditional circuits",
    },
    {
      component: DeepTechHelix,
      name: "Deep Tech Helix",
      description: "Represents the evolution and complexity of deep technology",
    },
    {
      component: QuantumSuperposition,
      name: "Quantum Superposition",
      description: "Visualizes quantum superposition and multiple simultaneous states",
    },
    {
      component: AITransformation,
      name: "AI Transformation",
      description: "Shows the transformation from traditional AI to quantum-enhanced consciousness",
    },
  ]

  return (
    <section className="py-24 px-6 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-thin mb-6 text-white text-ethereal">
            Deep Tech <span className="text-red-500">Symbols</span>
          </h2>
          <div className="w-24 h-px bg-red-500 mx-auto mb-8" />
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light">
            Custom symbols representing the disruption of traditional AI through quantum consciousness
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {symbols.map((symbol, index) => {
            const SymbolComponent = symbol.component
            return (
              <div
                key={symbol.name}
                className="border border-red-500/30 rounded-lg p-8 text-center hover:border-red-500 transition-all duration-300 bg-slate-800/50 backdrop-blur-sm"
              >
                <div className="flex justify-center mb-6">
                  <SymbolComponent size={80} className="drop-shadow-lg" />
                </div>
                <h3 className="text-lg font-thin mb-3 text-white">{symbol.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{symbol.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
