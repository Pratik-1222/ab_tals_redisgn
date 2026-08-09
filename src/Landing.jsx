import React from 'react'
import { Link } from 'react-router-dom'
import { tracks } from '../data/tracksData'
import TestimonialsCarousel from '../components/TestimonialsCarousel'
import PhilosophySection from '../components/PhilosophySection'

const stats = [
  { icon: '👥', value: '10,000+', label: 'members' },
  { icon: '🗂️', value: '500+', label: 'projects shipped' },
  { icon: '💼', value: '100+', label: 'hiring partners' },
]

const timelineSteps = [
  {
    stepNumber: '01',
    icon: '🎓',
    title: 'Learn Daily',
    desc: 'Choose your track and build practical skills through focused challenges and live sessions.',
    badge: 'STAGE 1'
  },
  {
    stepNumber: '02',
    icon: '💻',
    title: 'Build & Showcase',
    desc: 'Ship real work, publish your progress, and turn consistent effort into a visible portfolio.',
    badge: 'STAGE 2'
  },
  {
    stepNumber: '03',
    icon: '🏆',
    title: 'Get Hired',
    desc: 'Stand out through proof of work and become discoverable to recruiters in the ABTalks network.',
    badge: 'STAGE 3'
  }
]

export default function Landing() {
  return (
    <div className="landing-root">

      {/* ── Hero Editorial Section ───────────────────────────────── */}
      <section className="hero-section hero-editorial">
        {/* Ambient Cool Spotlights */}
        <div className="cool-spotlight spotlight-emerald" aria-hidden="true" />
        <div className="cool-spotlight spotlight-cyan" aria-hidden="true" />

        {/* Monospace Metadata Pins */}
        <div className="hero-metadata-pin pin-left">[ EST. 2026 ]</div>
        <div className="hero-metadata-pin pin-right">// BATCH 04</div>

        <div className="hero-inner">
          <p className="hero-eyebrow hero-eyebrow-mono fade-up">
            <span className="dot dot-emerald" /> // BUILD IN PUBLIC. GROW TOGETHER.
          </p>

          {/* Main Giant Hero Title "ABTALKS" */}
          <h1 className="hero-main-brand-title fade-up">
            ABTALKS
          </h1>

          {/* Sub-headline & Animated Neon Accent */}
          <div className="hero-title-sub-block fade-up fade-up-1">
            <h2 className="hero-sub-headline">Code consistently. Post publicly.</h2>
            <div className="hero-accent-reveal">GET NOTICED.</div>
          </div>

          <p className="hero-sub fade-up fade-up-2">
            India's premiere developer-first platform for college students to learn, build,
            and accelerate their software careers through visible proof of work.
          </p>

          <div className="hero-cta-row fade-up fade-up-3">
            <Link to="/dashboard" className="btn primary hero-btn-primary" style={{ minWidth: '220px' }}>
              🚀 Start the Challenge
            </Link>
            <a
              href="https://chat.whatsapp.com/LSru1BgvifpEB4OMZsaZEi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost hero-btn-secondary"
            >
              💬 Join Community
            </a>
          </div>
        </div>
      </section>

      {/* ── Asymmetric Cohort Cards Section ────────────────────────── */}
      <section className="tracks-section fade-up fade-up-2">
        <div className="asymmetric-section-header">
          <div className="section-label-mono">// FEATURED TRACKS</div>
          <h2 className="section-title-lg">Choose Your Cohort</h2>
        </div>

        {/* Electric Green & Cyan Ambient Light Spotlights behind card clusters */}
        <div className="tracks-spotlight-wrapper">
          <div className="card-cluster-spotlight cluster-emerald" aria-hidden="true" />
          <div className="card-cluster-spotlight cluster-cyan" aria-hidden="true" />

          <div className="tracks-grid-asymmetric">
            {tracks.map((t) => (
              <Link
                key={t.id}
                to={t.href.startsWith('http') ? t.href : t.href}
                className={`track-card track-card-editorial ${t.size === 'large' ? 'card-large' : 'card-wide'}${t.disabled ? ' disabled' : ''}`}
                style={{
                  '--track-border': t.borderColor,
                  '--track-border-hover': t.borderHover,
                  '--track-glow': t.glowColor,
                }}
                onClick={t.href.startsWith('http') ? (e) => { e.preventDefault(); window.open(t.href, '_blank') } : undefined}
              >
                {/* Dynamic Dark Graphic SVG Overlay on Hover */}
                <div className="card-graphic-bg" aria-hidden="true">
                  <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="none">
                    <path d="M 0 0 L 400 300 M 400 0 L 0 300" stroke="rgba(255,255,255,0.03)" strokeWidth="1.5" fill="none" />
                    <circle cx="200" cy="150" r="120" stroke="rgba(16,185,129,0.05)" strokeWidth="1" fill="none" />
                    <circle cx="200" cy="150" r="60" stroke="rgba(6,182,212,0.05)" strokeWidth="1" fill="none" />
                  </svg>
                </div>

                <div className="track-glow-top" style={{ background: `linear-gradient(to bottom, ${t.glowColor}, transparent)` }} />

                <div className="track-header">
                  <span className={`track-status track-status-${t.statusColor}`}>{t.status}</span>
                  <span className="track-arrow">↗</span>
                </div>

                <h2 className="track-title">{t.title}</h2>
                <p className="track-desc">{t.description}</p>

                <div className="track-tags">
                  {t.tags.map((tag, i) => (
                    <span key={i} className="track-tag" style={{ background: t.tagStyle.bg, color: t.tagStyle.color }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={`track-cta track-cta-cool`}
                  style={{ background: t.statusColor === 'gold' ? 'linear-gradient(135deg, #F59E0B, #D97706)' : t.statusColor === 'cyan' ? 'linear-gradient(135deg, #06B6D4, #3B82F6)' : 'linear-gradient(135deg, #10B981, #059669)' }}>
                  {t.ctaText}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scroll-Driven Expanding "Philosophy / Mission" Container ── */}
      <PhilosophySection />

      {/* ── Stats Bar ──────────────────────────── */}
      <section className="stats-bar-section fade-up">
        <div className="stats-bar">
          {stats.map((s, i) => (
            <div key={i} className="stats-bar-item">
              <span className="stats-bar-icon">{s.icon}</span>
              <div>
                <strong className="stats-bar-value">{s.value}</strong>
                <span className="stats-bar-label">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How ABTalks Works (Vertical Connected Timeline) ───── */}
      <section className="how-section fade-up">
        <div className="landing-container">
          <div className="section-center">
            <div className="section-label-mono">// ROADMAP</div>
            <h2 className="section-title-lg">How ABTalks works</h2>
            <p className="timeline-subtitle">A step-by-step developer progression model built for visibility</p>
          </div>

          <div className="vertical-timeline-container">
            {/* Vertical glowing connector line */}
            <div className="timeline-line-track" aria-hidden="true">
              <div className="timeline-line-glow" />
            </div>

            <div className="timeline-items-list">
              {timelineSteps.map((step, index) => (
                <div key={index} className="timeline-item-row">
                  {/* Step node badge */}
                  <div className="timeline-node-wrap">
                    <div className="timeline-node-circle">
                      <span>{step.stepNumber}</span>
                    </div>
                  </div>

                  {/* Step Content Card */}
                  <div className="timeline-card-content">
                    <div className="timeline-card-header">
                      <span className="timeline-stage-badge">{step.badge}</span>
                      <span className="timeline-card-icon">{step.icon}</span>
                    </div>
                    <h3 className="timeline-card-title">{step.title}</h3>
                    <p className="timeline-card-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WhatsApp Community CTA ─────────────── */}
      <section className="community-section fade-up">
        <div className="landing-container">
          <div className="community-banner">
            <div className="community-glow" />
            <div className="community-left">
              <div className="community-icon">💬</div>
              <div>
                <h2 className="community-title">Join our community for instant updates</h2>
                <p className="community-sub">Meet builders, get event alerts, and stay accountable.</p>
              </div>
            </div>
            <a
              href="https://chat.whatsapp.com/LSru1BgvifpEB4OMZsaZEi"
              target="_blank"
              rel="noopener noreferrer"
              className="community-btn"
            >
              Join now →
            </a>
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────── */}
      <div className="landing-container fade-up">
        <TestimonialsCarousel />
      </div>

      {/* ── Final CTA ──────────────────────────── */}
      <section className="final-cta-section fade-up">
        <div className="landing-container">
          <div className="final-cta-card">
            <div className="final-cta-glow" />
            <div className="section-label" style={{ textAlign: 'center', marginBottom: '12px' }}>Ready to build?</div>
            <h2 className="final-cta-title">Start your 60-day journey today 🔥</h2>
            <p className="final-cta-sub">
              Join 10,000+ builders who are turning consistency into careers.
              Your streak starts on Day 1.
            </p>
            <div className="final-cta-btns">
              <Link to="/day/12" className="btn primary" style={{ minWidth: '200px' }}>
                ⚡ Open Today's Challenge
              </Link>
              <Link to="/dashboard" className="btn ghost">
                View Dashboard →
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
