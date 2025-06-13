"use client"

import { useEffect, useState } from "react"

export default function PrivacyPolicyPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const sections = [
    {
      title: "Information We Collect",
      content: [
        "When you visit our website or use our services, we may collect the following types of information:",
        "• Personal Information: Name, email address, company name, job title, and contact details when you voluntarily provide them through forms, demo requests, or communications.",
        "• Technical Information: IP address, browser type, operating system, device information, and website usage data through cookies and analytics tools.",
        "• Communication Data: Records of your interactions with us, including emails, demo sessions, and support requests."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "We use the collected information for the following purposes:",
        "• Service Delivery: To provide you with our quantum simulation AI services and respond to your inquiries.",
        "• Communication: To send you requested information, updates about our services, and respond to your questions.",
        "• Improvement: To analyze and improve our website, services, and user experience.",
        "• Legal Compliance: To comply with applicable laws, regulations, and legal processes."
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:",
        "• Service Providers: With trusted third-party service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.",
        "• Legal Requirements: When required by law, regulation, legal process, or governmental request.",
        "• Business Transfers: In connection with any merger, acquisition, or sale of company assets, with appropriate safeguards for your data."
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:",
        "• Encryption of data in transit and at rest",
        "• Regular security assessments and updates",
        "• Access controls and authentication procedures",
        "• Employee training on data protection practices"
      ]
    },
    {
      title: "Cookies and Tracking Technologies",
      content: [
        "Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze website usage. You can control cookie settings through your browser preferences. Note that disabling cookies may affect website functionality."
      ]
    },
    {
      title: "International Data Transfers",
      content: [
        "Your information may be processed and stored in countries other than your own, including the Netherlands, Poland, and the United States. We ensure appropriate safeguards are in place for international data transfers in compliance with applicable data protection laws."
      ]
    },
    {
      title: "Your Rights and Choices",
      content: [
        "Depending on your location, you may have the following rights regarding your personal information:",
        "• Access: Request access to your personal information we hold",
        "• Correction: Request correction of inaccurate or incomplete information",
        "• Deletion: Request deletion of your personal information",
        "• Portability: Request transfer of your information to another service provider",
        "• Objection: Object to certain processing activities",
        "• Withdrawal: Withdraw consent where processing is based on consent"
      ]
    },
    {
      title: "Data Retention",
      content: [
        "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we securely delete or anonymize it."
      ]
    },
    {
      title: "Children's Privacy",
      content: [
        "Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information promptly."
      ]
    },
    {
      title: "Updates to This Privacy Policy",
      content: [
        "We may update this privacy policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website and updating the effective date."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-stone-100 to-stone-50 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-50/30 via-transparent to-blue-50/30 pointer-events-none" />
      
      {/* Header */}
      <header className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="text-4xl md:text-6xl font-thin mb-6 text-slate-900 text-ethereal">
              Privacy <span className="text-gradient-cosmic">Policy</span>
            </h1>
            <div className="w-24 h-px bg-red-500 mx-auto mb-8" />
            <p className="text-xl text-slate-700 max-w-2xl mx-auto font-light text-airy">
              Your privacy is important to us. This policy explains how QUNEU collects, uses, and protects your personal information.
            </p>
            <p className="text-sm text-slate-600 mt-6 font-light">
              Effective Date: January 15, 2025 | Last Updated: January 15, 2025
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-16">
            <div className="border border-red-500 rounded-lg p-8 bg-white/70 backdrop-blur-sm">
              <h2 className="text-2xl font-thin mb-4 text-slate-900 text-whisper">Welcome to QUNEU</h2>
              <p className="text-slate-700 leading-relaxed font-light text-airy mb-4">
                QUNEU ("we," "us," or "our") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website or use our quantum simulation AI services.
              </p>
              <p className="text-slate-700 leading-relaxed font-light text-airy">
                By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with our practices, please do not use our services.
              </p>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className={`transition-all duration-700 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="border border-red-500 rounded-lg p-8 bg-white/70 backdrop-blur-sm hover:border-red-600 transition-colors duration-300">
                  <h2 className="text-xl font-thin mb-4 text-slate-900 text-whisper">
                    {index + 1}. {section.title}
                  </h2>
                  <div className="space-y-3">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-slate-700 leading-relaxed font-light text-airy">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-16">
            <div className="border border-red-500 rounded-lg p-8 bg-white/70 backdrop-blur-sm">
              <h2 className="text-2xl font-thin mb-4 text-slate-900 text-whisper">Contact Us</h2>
              <p className="text-slate-700 leading-relaxed font-light text-airy mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-slate-700 font-light text-airy">
                <p><strong>Email:</strong> privacy@quneu.com</p>
                <p><strong>Address:</strong> QUNEU Privacy Office</p>
                <p className="ml-16">Netherlands | Poland | United States</p>
              </div>
              <p className="text-slate-700 leading-relaxed font-light text-airy mt-4">
                We will respond to your inquiry within 30 days of receipt.
              </p>
            </div>
          </div>

          {/* Regional Compliance Notice */}
          <div className="mt-8">
            <div className="border border-red-500 rounded-lg p-8 bg-white/70 backdrop-blur-sm">
              <h2 className="text-2xl font-thin mb-4 text-slate-900 text-whisper">Regional Compliance</h2>
              <p className="text-slate-700 leading-relaxed font-light text-airy mb-4">
                QUNEU complies with applicable data protection laws in the regions where we operate:
              </p>
              <div className="space-y-2 text-slate-700 font-light text-airy">
                <p>🇪🇺 <strong>European Union:</strong> General Data Protection Regulation (GDPR)</p>
                <p>🇺🇸 <strong>United States:</strong> California Consumer Privacy Act (CCPA) and other applicable state laws</p>
                <p>🇳🇱 🇵🇱 <strong>Netherlands & Poland:</strong> Local data protection regulations</p>
              </div>
            </div>
          </div>

          {/* Back to Top */}
          <div className="mt-16 text-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 rounded-lg text-lg font-light transition-all duration-300 hover:scale-105 shadow-sm tracking-wider border border-red-500"
            >
              Back to Top
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}