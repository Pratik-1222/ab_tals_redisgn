import React from 'react'

export default function PhilosophySection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16 flex justify-center items-center philosophy-reset-wrapper">
      <div className="w-full bg-[#0A0E17] border border-emerald-500/20 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl backdrop-blur-xl text-center philosophy-reset-card">
        
        {/* Subtle Non-Breaking Ambient Glow */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-transparent blur-2xl pointer-events-none" 
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.12) 0%, rgba(6, 182, 212, 0.08) 50%, transparent 80%)' }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Top Label */}
          <div className="text-emerald-400 font-mono text-xs sm:text-sm tracking-widest uppercase mb-4 philosophy-top-label">
            // THE PHILOSOPHY
          </div>

          {/* Headline Text */}
          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-black text-white text-center leading-snug tracking-tight my-6 uppercase philosophy-headline">
            "PROOF OF WORK IS THE ONLY CV THAT MATTERS IN THE ERA OF AGI. CODE DAILY. SHIP PUBLICLY. OWN YOUR FUTURE."
          </blockquote>

          {/* Footer Subline */}
          <div className="text-slate-400 font-mono text-xs tracking-wider border border-slate-800 rounded-full px-4 py-1.5 inline-block philosophy-footer-tag">
            [ ABTALKS MANIFESTO — ENGINEERING EXCELLENCE ]
          </div>
        </div>
      </div>
    </section>
  )
}
