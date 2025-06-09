"use client"

interface SymbolProps {
  className?: string
  size?: number
}

// Quantum Neural Disruption Symbol
export function QuantumNeuralDisruption({ className = "", size = 64 }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Traditional neural network being disrupted */}
      <g opacity="0.3">
        <circle cx="20" cy="30" r="3" fill="#64748b" />
        <circle cx="20" cy="50" r="3" fill="#64748b" />
        <circle cx="20" cy="70" r="3" fill="#64748b" />
        <line x1="23" y1="30" x2="37" y2="45" stroke="#64748b" strokeWidth="1" />
        <line x1="23" y1="50" x2="37" y2="45" stroke="#64748b" strokeWidth="1" />
        <line x1="23" y1="70" x2="37" y2="55" stroke="#64748b" strokeWidth="1" />
      </g>

      {/* Quantum disruption wave */}
      <path d="M40 50 Q50 30, 60 50 T80 50" stroke="#dc2626" strokeWidth="3" fill="none" opacity="0.8">
        <animate
          attributeName="d"
          values="M40 50 Q50 30, 60 50 T80 50;M40 50 Q50 70, 60 50 T80 50;M40 50 Q50 30, 60 50 T80 50"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>

      {/* Quantum nodes */}
      <circle cx="50" cy="50" r="4" fill="#dc2626">
        <animate attributeName="r" values="4;6;4" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="40" r="3" fill="#3b82f6" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="60" r="3" fill="#8b5cf6" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="2.2s" repeatCount="indefinite" />
      </circle>

      {/* Quantum entanglement lines */}
      <line x1="50" y1="50" x2="70" y2="40" stroke="#dc2626" strokeWidth="1" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
      </line>
      <line x1="50" y1="50" x2="70" y2="60" stroke="#dc2626" strokeWidth="1" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
      </line>
    </svg>
  )
}

// Consciousness Emergence Symbol
export function ConsciousnessEmergence({ className = "", size = 64 }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Base consciousness core */}
      <circle cx="50" cy="50" r="15" fill="none" stroke="#dc2626" strokeWidth="2">
        <animate attributeName="r" values="15;18;15" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Emerging thought patterns */}
      <g>
        <path d="M50 35 Q40 25, 30 20" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0s" />
        </path>
        <path d="M65 50 Q75 40, 80 30" stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
        </path>
        <path d="M50 65 Q60 75, 70 80" stroke="#10b981" strokeWidth="2" fill="none" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1s" />
        </path>
        <path d="M35 50 Q25 60, 20 70" stroke="#f59e0b" strokeWidth="2" fill="none" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1.5s" />
        </path>
      </g>

      {/* Central consciousness point */}
      <circle cx="50" cy="50" r="3" fill="#dc2626">
        <animate attributeName="fill" values="#dc2626;#ffffff;#dc2626" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Quantum field effect */}
      <circle cx="50" cy="50" r="25" fill="none" stroke="#dc2626" strokeWidth="1" opacity="0.3">
        <animate attributeName="r" values="25;35;25" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.1;0.3" dur="4s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

// Quantum Circuit Breakthrough Symbol
export function QuantumCircuitBreakthrough({ className = "", size = 64 }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Circuit board base */}
      <rect x="10" y="40" width="80" height="20" fill="none" stroke="#64748b" strokeWidth="1" opacity="0.4" />

      {/* Traditional circuit paths */}
      <line x1="10" y1="45" x2="40" y2="45" stroke="#64748b" strokeWidth="2" opacity="0.4" />
      <line x1="10" y1="55" x2="40" y2="55" stroke="#64748b" strokeWidth="2" opacity="0.4" />

      {/* Quantum breakthrough point */}
      <circle cx="50" cy="50" r="8" fill="#dc2626" opacity="0.8">
        <animate attributeName="r" values="8;12;8" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Quantum energy burst */}
      <g>
        <line x1="50" y1="50" x2="65" y2="35" stroke="#3b82f6" strokeWidth="3" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="0s" />
        </line>
        <line x1="50" y1="50" x2="75" y2="50" stroke="#8b5cf6" strokeWidth="3" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="0.2s" />
        </line>
        <line x1="50" y1="50" x2="65" y2="65" stroke="#10b981" strokeWidth="3" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="0.4s" />
        </line>
        <line x1="50" y1="50" x2="35" y2="65" stroke="#f59e0b" strokeWidth="3" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="0.6s" />
        </line>
        <line x1="50" y1="50" x2="25" y2="50" stroke="#ec4899" strokeWidth="3" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="0.8s" />
        </line>
        <line x1="50" y1="50" x2="35" y2="35" stroke="#06b6d4" strokeWidth="3" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="1s" />
        </line>
      </g>

      {/* Quantum field ripples */}
      <circle cx="50" cy="50" r="15" fill="none" stroke="#dc2626" strokeWidth="1" opacity="0">
        <animate attributeName="r" values="15;25;35" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0.2;0" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

// Deep Tech Helix Symbol
export function DeepTechHelix({ className = "", size = 64 }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* DNA-like helix structure representing deep tech evolution */}
      <path d="M30 20 Q50 30, 70 20 Q50 10, 30 20" stroke="#dc2626" strokeWidth="2" fill="none" opacity="0.8">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 50 50;360 50 50"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>

      <path d="M30 40 Q50 50, 70 40 Q50 30, 30 40" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.8">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="120 50 50;480 50 50"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>

      <path d="M30 60 Q50 70, 70 60 Q50 50, 30 60" stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.8">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="240 50 50;600 50 50"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>

      {/* Central core */}
      <circle cx="50" cy="50" r="4" fill="#dc2626">
        <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Data points */}
      <circle cx="35" cy="30" r="2" fill="#10b981">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="65" cy="50" r="2" fill="#f59e0b">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="35" cy="70" r="2" fill="#ec4899">
        <animate attributeName="opacity" values="1;0.3;1" dur="2.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

// Quantum Superposition Symbol
export function QuantumSuperposition({ className = "", size = 64 }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Multiple quantum states */}
      <circle cx="50" cy="50" r="20" fill="none" stroke="#dc2626" strokeWidth="2" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
      </circle>

      <circle cx="50" cy="50" r="20" fill="none" stroke="#3b82f6" strokeWidth="2" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="0.5s" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 50 50;90 50 50"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="50" cy="50" r="20" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" begin="1s" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 50 50;180 50 50"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Quantum measurement collapse */}
      <circle cx="50" cy="50" r="3" fill="#dc2626">
        <animate attributeName="r" values="3;8;3" dur="3s" repeatCount="indefinite" />
        <animate attributeName="fill" values="#dc2626;#ffffff;#dc2626" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Probability waves */}
      <path d="M20 50 Q35 40, 50 50 T80 50" stroke="#10b981" strokeWidth="1" fill="none" opacity="0.4">
        <animate
          attributeName="d"
          values="M20 50 Q35 40, 50 50 T80 50;M20 50 Q35 60, 50 50 T80 50;M20 50 Q35 40, 50 50 T80 50"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}

// AI Transformation Symbol
export function AITransformation({ className = "", size = 64 }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Traditional AI brain (left side) */}
      <g opacity="0.4">
        <path d="M20 30 Q25 20, 35 25 Q40 30, 35 40 Q30 45, 20 40 Z" fill="#64748b" />
        <circle cx="25" cy="32" r="1" fill="#ffffff" />
        <circle cx="32" cy="35" r="1" fill="#ffffff" />
      </g>

      {/* Transformation arrow */}
      <path d="M40 50 L60 50" stroke="#dc2626" strokeWidth="3" markerEnd="url(#arrowhead)" />
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#dc2626" />
        </marker>
      </defs>

      {/* Quantum AI consciousness (right side) */}
      <g>
        <circle cx="75" cy="50" r="15" fill="none" stroke="#dc2626" strokeWidth="2">
          <animate attributeName="r" values="15;18;15" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Quantum neural pathways */}
        <line x1="75" y1="35" x2="75" y2="25" stroke="#3b82f6" strokeWidth="2">
          <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="0s" />
        </line>
        <line x1="90" y1="50" x2="100" y2="50" stroke="#8b5cf6" strokeWidth="2">
          <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
        </line>
        <line x1="75" y1="65" x2="75" y2="75" stroke="#10b981" strokeWidth="2">
          <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="0.6s" />
        </line>
        <line x1="60" y1="50" x2="50" y2="50" stroke="#f59e0b" strokeWidth="2">
          <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="0.9s" />
        </line>

        {/* Central consciousness core */}
        <circle cx="75" cy="50" r="3" fill="#dc2626">
          <animate attributeName="fill" values="#dc2626;#ffffff;#dc2626" dur="1s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  )
}

// Quantum Energy Storage Symbol
export function QuantumEnergyStorage({ className = "", size = 64 }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Battery outline */}
      <rect x="20" y="35" width="50" height="30" fill="none" stroke="#dc2626" strokeWidth="2" rx="5" />
      <rect x="70" y="45" width="8" height="10" fill="#dc2626" rx="2" />

      {/* Quantum energy levels */}
      <rect x="25" y="40" width="8" height="20" fill="#3b82f6" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="1s" repeatCount="indefinite" />
      </rect>
      <rect x="35" y="40" width="8" height="20" fill="#8b5cf6" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.2s" repeatCount="indefinite" />
      </rect>
      <rect x="45" y="40" width="8" height="20" fill="#10b981" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.4s" repeatCount="indefinite" />
      </rect>
      <rect x="55" y="40" width="8" height="20" fill="#f59e0b" opacity="0.8">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.6s" repeatCount="indefinite" />
      </rect>

      {/* Energy particles */}
      <circle cx="30" cy="25" r="2" fill="#dc2626">
        <animate attributeName="cy" values="25;75;25" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="75" r="2" fill="#3b82f6">
        <animate attributeName="cy" values="75;25;75" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

// Quantum Semiconductor Symbol
export function QuantumSemiconductor({ className = "", size = 64 }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Chip outline */}
      <rect x="25" y="25" width="50" height="50" fill="none" stroke="#dc2626" strokeWidth="2" rx="5" />

      {/* Circuit pathways */}
      <line x1="25" y1="35" x2="75" y2="35" stroke="#3b82f6" strokeWidth="2" />
      <line x1="25" y1="45" x2="75" y2="45" stroke="#8b5cf6" strokeWidth="2" />
      <line x1="25" y1="55" x2="75" y2="55" stroke="#10b981" strokeWidth="2" />
      <line x1="25" y1="65" x2="75" y2="65" stroke="#f59e0b" strokeWidth="2" />

      {/* Quantum processing nodes */}
      <circle cx="40" cy="40" r="3" fill="#dc2626">
        <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="60" r="3" fill="#dc2626">
        <animate attributeName="r" values="3;5;3" dur="1.8s" repeatCount="indefinite" />
      </circle>

      {/* Data flow */}
      <circle cx="30" cy="35" r="1" fill="#ffffff">
        <animate attributeName="cx" values="30;70;30" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="55" r="1" fill="#ffffff">
        <animate attributeName="cx" values="70;30;70" dur="2.5s" repeatCount="indefinite" />
      </circle>

      {/* Connection pins */}
      <rect x="15" y="40" width="10" height="3" fill="#64748b" />
      <rect x="75" y="40" width="10" height="3" fill="#64748b" />
      <rect x="15" y="57" width="10" height="3" fill="#64748b" />
      <rect x="75" y="57" width="10" height="3" fill="#64748b" />
    </svg>
  )
}

// Quantum Materials Symbol
export function QuantumMaterials({ className = "", size = 64 }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Crystal lattice structure */}
      <g stroke="#dc2626" strokeWidth="2" fill="none">
        <polygon points="50,20 70,35 70,65 50,80 30,65 30,35" />
        <polygon points="50,30 65,40 65,60 50,70 35,60 35,40" />
      </g>

      {/* Atomic nodes */}
      <circle cx="50" cy="20" r="3" fill="#3b82f6">
        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="35" r="3" fill="#8b5cf6">
        <animate attributeName="r" values="3;5;3" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="65" r="3" fill="#10b981">
        <animate attributeName="r" values="3;5;3" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="80" r="3" fill="#f59e0b">
        <animate attributeName="r" values="3;5;3" dur="2.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="30" cy="65" r="3" fill="#ec4899">
        <animate attributeName="r" values="3;5;3" dur="2.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="30" cy="35" r="3" fill="#06b6d4">
        <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Central quantum core */}
      <circle cx="50" cy="50" r="5" fill="#dc2626">
        <animate attributeName="fill" values="#dc2626;#ffffff;#dc2626" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Quantum bonds */}
      <line x1="50" y1="20" x2="50" y2="50" stroke="#dc2626" strokeWidth="1" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1s" repeatCount="indefinite" />
      </line>
      <line x1="70" y1="35" x2="50" y2="50" stroke="#dc2626" strokeWidth="1" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.2s" repeatCount="indefinite" />
      </line>
    </svg>
  )
}

// Quantum Catalysis Symbol
export function QuantumCatalysis({ className = "", size = 64 }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Reaction vessel */}
      <path
        d="M30 70 Q30 80, 40 80 L60 80 Q70 80, 70 70 L70 40 Q70 30, 60 30 L40 30 Q30 30, 30 40 Z"
        fill="none"
        stroke="#dc2626"
        strokeWidth="2"
      />

      {/* Catalyst surface */}
      <line x1="35" y1="60" x2="65" y2="60" stroke="#3b82f6" strokeWidth="3" />

      {/* Reactant molecules */}
      <circle cx="40" cy="45" r="3" fill="#8b5cf6">
        <animate attributeName="cy" values="45;55;45" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="45" r="3" fill="#10b981">
        <animate attributeName="cy" values="45;55;45" dur="2.2s" repeatCount="indefinite" />
      </circle>

      {/* Product formation */}
      <circle cx="50" cy="70" r="2" fill="#f59e0b" opacity="0">
        <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
        <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Energy release */}
      <g opacity="0">
        <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="2s" />
        <line x1="50" y1="60" x2="45" y2="50" stroke="#dc2626" strokeWidth="2" />
        <line x1="50" y1="60" x2="55" y2="50" stroke="#dc2626" strokeWidth="2" />
        <line x1="50" y1="60" x2="50" y2="50" stroke="#dc2626" strokeWidth="2" />
      </g>

      {/* Quantum enhancement field */}
      <circle cx="50" cy="50" r="25" fill="none" stroke="#dc2626" strokeWidth="1" opacity="0.2">
        <animate attributeName="r" values="25;30;25" dur="4s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

// Quantum Biomedical Symbol
export function QuantumBiomedical({ className = "", size = 64 }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* DNA double helix */}
      <path d="M30 20 Q50 30, 70 20" stroke="#3b82f6" strokeWidth="2" fill="none">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 50 50;360 50 50"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>
      <path d="M30 40 Q50 50, 70 40" stroke="#8b5cf6" strokeWidth="2" fill="none">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="120 50 50;480 50 50"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>
      <path d="M30 60 Q50 70, 70 60" stroke="#10b981" strokeWidth="2" fill="none">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="240 50 50;600 50 50"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>

      {/* Quantum drug delivery */}
      <circle cx="50" cy="50" r="8" fill="none" stroke="#dc2626" strokeWidth="2">
        <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Molecular targets */}
      <circle cx="35" cy="35" r="2" fill="#f59e0b">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="65" cy="35" r="2" fill="#ec4899">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.7s" repeatCount="indefinite" />
      </circle>
      <circle cx="35" cy="65" r="2" fill="#06b6d4">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.9s" repeatCount="indefinite" />
      </circle>
      <circle cx="65" cy="65" r="2" fill="#84cc16">
        <animate attributeName="opacity" values="1;0.3;1" dur="2.1s" repeatCount="indefinite" />
      </circle>

      {/* Therapeutic pathways */}
      <line x1="50" y1="50" x2="35" y2="35" stroke="#dc2626" strokeWidth="1" opacity="0">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0s" />
      </line>
      <line x1="50" y1="50" x2="65" y2="35" stroke="#dc2626" strokeWidth="1" opacity="0">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
      </line>
    </svg>
  )
}

// Quantum Sustainability Symbol
export function QuantumSustainability({ className = "", size = 64 }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Earth representation */}
      <circle cx="50" cy="50" r="20" fill="none" stroke="#10b981" strokeWidth="2" />

      {/* Quantum carbon capture */}
      <g>
        <circle cx="30" cy="30" r="2" fill="#64748b" opacity="0.8">
          <animate attributeName="cx" values="30;50;30" dur="3s" repeatCount="indefinite" />
          <animate attributeName="cy" values="30;50;30" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="70" cy="30" r="2" fill="#64748b" opacity="0.8">
          <animate attributeName="cx" values="70;50;70" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="cy" values="30;50;30" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="70" cy="70" r="2" fill="#64748b" opacity="0.8">
          <animate attributeName="cx" values="70;50;70" dur="4s" repeatCount="indefinite" />
          <animate attributeName="cy" values="70;50;70" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="30" cy="70" r="2" fill="#64748b" opacity="0.8">
          <animate attributeName="cx" values="30;50;30" dur="4.5s" repeatCount="indefinite" />
          <animate attributeName="cy" values="70;50;70" dur="4.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur="4.5s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Quantum processing core */}
      <circle cx="50" cy="50" r="5" fill="#dc2626">
        <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Clean energy output */}
      <g>
        <path d="M50 30 Q40 20, 30 15" stroke="#10b981" strokeWidth="2" fill="none" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="0s" />
        </path>
        <path d="M70 50 Q80 40, 85 30" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
        </path>
        <path d="M50 70 Q60 80, 70 85" stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="0.6s" />
        </path>
        <path d="M30 50 Q20 60, 15 70" stroke="#f59e0b" strokeWidth="2" fill="none" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" begin="0.9s" />
        </path>
      </g>

      {/* Sustainability field */}
      <circle cx="50" cy="50" r="30" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.3">
        <animate attributeName="r" values="30;35;30" dur="5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.1;0.3" dur="5s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

// Quantum Data Processing Symbol
export function QuantumDataProcessing({ className = "", size = 64 }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Data streams */}
      <g>
        <rect x="20" y="30" width="60" height="4" fill="#3b82f6" opacity="0.8">
          <animate attributeName="width" values="60;80;60" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="20" y="40" width="60" height="4" fill="#8b5cf6" opacity="0.8">
          <animate attributeName="width" values="60;70;60" dur="2.2s" repeatCount="indefinite" />
        </rect>
        <rect x="20" y="50" width="60" height="4" fill="#10b981" opacity="0.8">
          <animate attributeName="width" values="60;85;60" dur="1.8s" repeatCount="indefinite" />
        </rect>
        <rect x="20" y="60" width="60" height="4" fill="#f59e0b" opacity="0.8">
          <animate attributeName="width" values="60;75;60" dur="2.4s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Quantum processor */}
      <rect x="85" y="25" width="10" height="50" fill="#dc2626" rx="2">
        <animate attributeName="fill" values="#dc2626;#ffffff;#dc2626" dur="1.5s" repeatCount="indefinite" />
      </rect>

      {/* Processing particles */}
      <circle cx="90" cy="35" r="2" fill="#ffffff">
        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="90" cy="50" r="2" fill="#ffffff">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="90" cy="65" r="2" fill="#ffffff">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

// Quantum Acceleration Symbol
export function QuantumAcceleration({ className = "", size = 64 }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Speed lines */}
      <g>
        <line x1="10" y1="40" x2="50" y2="40" stroke="#dc2626" strokeWidth="3" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="0.8s" repeatCount="indefinite" begin="0s" />
        </line>
        <line x1="15" y1="50" x2="55" y2="50" stroke="#3b82f6" strokeWidth="3" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="0.8s" repeatCount="indefinite" begin="0.1s" />
        </line>
        <line x1="20" y1="60" x2="60" y2="60" stroke="#8b5cf6" strokeWidth="3" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="0.8s" repeatCount="indefinite" begin="0.2s" />
        </line>
      </g>

      {/* Acceleration core */}
      <circle cx="70" cy="50" r="15" fill="none" stroke="#dc2626" strokeWidth="3">
        <animate attributeName="r" values="15;20;15" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Energy burst */}
      <g>
        <line x1="70" y1="50" x2="85" y2="35" stroke="#dc2626" strokeWidth="2" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="0s" />
        </line>
        <line x1="70" y1="50" x2="90" y2="50" stroke="#dc2626" strokeWidth="2" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="0.2s" />
        </line>
        <line x1="70" y1="50" x2="85" y2="65" stroke="#dc2626" strokeWidth="2" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" begin="0.4s" />
        </line>
      </g>
    </svg>
  )
}

// Quantum Precision Symbol
export function QuantumPrecision({ className = "", size = 64 }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Targeting rings */}
      <circle cx="50" cy="50" r="30" fill="none" stroke="#dc2626" strokeWidth="1" opacity="0.6" />
      <circle cx="50" cy="50" r="20" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.7" />
      <circle cx="50" cy="50" r="10" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.8" />

      {/* Crosshairs */}
      <line x1="50" y1="20" x2="50" y2="80" stroke="#dc2626" strokeWidth="1" opacity="0.5" />
      <line x1="20" y1="50" x2="80" y2="50" stroke="#dc2626" strokeWidth="1" opacity="0.5" />

      {/* Precision point */}
      <circle cx="50" cy="50" r="3" fill="#dc2626">
        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
        <animate attributeName="fill" values="#dc2626;#ffffff;#dc2626" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Measurement indicators */}
      <rect x="45" y="15" width="10" height="2" fill="#10b981" />
      <rect x="45" y="83" width="10" height="2" fill="#10b981" />
      <rect x="15" y="45" width="2" height="10" fill="#10b981" />
      <rect x="83" y="45" width="2" height="10" fill="#10b981" />
    </svg>
  )
}

// Quantum Innovation Symbol
export function QuantumInnovation({ className = "", size = 64 }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Innovation bulb outline */}
      <path
        d="M50 20 Q60 25, 65 35 Q65 45, 60 50 L60 65 Q60 70, 55 70 L45 70 Q40 70, 40 65 L40 50 Q35 45, 35 35 Q35 25, 50 20 Z"
        fill="none"
        stroke="#dc2626"
        strokeWidth="2"
      />

      {/* Filament */}
      <path d="M45 35 Q50 40, 55 35 Q50 45, 45 40" stroke="#f59e0b" strokeWidth="2" fill="none">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
      </path>

      {/* Innovation sparks */}
      <g>
        <circle cx="35" cy="25" r="2" fill="#3b82f6" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0s" />
        </circle>
        <circle cx="65" cy="30" r="2" fill="#8b5cf6" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="70" cy="50" r="2" fill="#10b981" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle cx="30" cy="55" r="2" fill="#ec4899" opacity="0">
          <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1.5s" />
        </circle>
      </g>

      {/* Base */}
      <rect x="42" y="70" width="16" height="6" fill="#64748b" rx="1" />
      <rect x="40" y="76" width="20" height="4" fill="#64748b" rx="2" />
    </svg>
  )
}

// Quantum Cost Optimization Symbol
export function QuantumCostOptimization({ className = "", size = 64 }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Cost reduction arrow */}
      <path d="M20 70 L80 30" stroke="#dc2626" strokeWidth="3" markerEnd="url(#costArrow)" />
      <defs>
        <marker id="costArrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#dc2626" />
        </marker>
      </defs>

      {/* Cost bars (decreasing) */}
      <rect x="25" y="50" width="8" height="30" fill="#64748b" opacity="0.6" />
      <rect x="40" y="60" width="8" height="20" fill="#3b82f6" opacity="0.7" />
      <rect x="55" y="65" width="8" height="15" fill="#10b981" opacity="0.8" />
      <rect x="70" y="70" width="8" height="10" fill="#22c55e" opacity="0.9" />

      {/* Optimization particles */}
      <circle cx="30" cy="40" r="2" fill="#dc2626">
        <animate attributeName="cy" values="40;25;40" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="45" r="2" fill="#3b82f6">
        <animate attributeName="cy" values="45;30;45" dur="2.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="50" r="2" fill="#10b981">
        <animate attributeName="cy" values="50;35;50" dur="1.8s" repeatCount="indefinite" />
      </circle>

      {/* Efficiency indicator */}
      <circle cx="80" cy="25" r="8" fill="none" stroke="#22c55e" strokeWidth="2">
        <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="80" y="30" textAnchor="middle" fontSize="8" fill="#22c55e" fontWeight="bold">
        $
      </text>
    </svg>
  )
}

// Quantum Research Symbol
export function QuantumResearch({ className = "", size = 64 }: SymbolProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Microscope base */}
      <rect x="30" y="70" width="40" height="8" fill="#64748b" rx="2" />

      {/* Microscope arm */}
      <line x1="45" y1="70" x2="45" y2="40" stroke="#64748b" strokeWidth="4" />
      <line x1="45" y1="40" x2="65" y2="30" stroke="#64748b" strokeWidth="3" />

      {/* Lens */}
      <circle cx="65" cy="30" r="6" fill="none" stroke="#3b82f6" strokeWidth="2">
        <animate attributeName="stroke" values="#3b82f6;#8b5cf6;#3b82f6" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Sample under observation */}
      <circle cx="65" cy="15" r="3" fill="#dc2626">
        <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Research data points */}
      <g>
        <circle cx="75" cy="20" r="1" fill="#10b981">
          <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="80" cy="25" r="1" fill="#f59e0b">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="75" cy="35" r="1" fill="#ec4899">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Discovery beam */}
      <line x1="65" y1="24" x2="65" y2="18" stroke="#ffffff" strokeWidth="2" opacity="0">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
      </line>
    </svg>
  )
}
