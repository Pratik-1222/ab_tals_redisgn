import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const buildItems = [
  { icon: '🦸', label: 'Hero section with headline & CTA' },
  { icon: '🧭', label: 'Sticky navigation bar' },
  { icon: '🃏', label: 'Feature cards grid' },
  { icon: '📱', label: 'Responsive mobile layout' },
]

export default function ChallengeDay() {
  const [repo, setRepo]       = useState('')
  const [commit, setCommit]   = useState('')
  const [post, setPost]       = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [saved, setSaved]     = useState(false)

  const canSubmit = repo.trim() || commit.trim() || post.trim()

  const handleSubmit = () => {
    if (!canSubmit) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="page day">
        <Link to="/dashboard" className="day-back-btn">← Back to Dashboard</Link>
        <div className="success-state">
          <div className="success-icon">🎉</div>
          <div className="success-title">Day 12 Complete!</div>
          <div className="success-sub">
            Your proof has been recorded. Keep the streak alive — Day 13 drops tomorrow.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link to="/dashboard" className="btn primary btn-full">Back to Dashboard</Link>
            <Link to="/" className="btn ghost btn-full">← Home</Link>
          </div>
        </div>

        <nav className="bottom-nav">
          <Link to="/" className="bottom-nav-item">
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Link>
          <Link to="/dashboard" className="bottom-nav-item">
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            Dashboard
          </Link>
          <Link to="/day/12" className="bottom-nav-item active">
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Challenge
          </Link>
        </nav>
      </div>
    )
  }

  return (
    <div className="page day">
      <Link to="/dashboard" className="day-back-btn fade-up">
        ← Dashboard
      </Link>

      {/* Day header */}
      <div className="day-header-card fade-up fade-up-1">
        <div className="day-badge-row">
          <div className="day-number-badge">12</div>
          <div className="chip amber">Today's Build</div>
          <div className="chip green" style={{ marginLeft: 'auto' }}>~45 min</div>
        </div>
        <div className="day-title">Build a Responsive Landing Page</div>
        <div className="day-sub">
          Create a mobile-first landing page using HTML, CSS and vanilla JavaScript
          that works beautifully at 390px and scales up.
        </div>
      </div>

      {/* What to build */}
      <div className="build-section fade-up fade-up-2">
        <div className="section-label">What to Build</div>
        <ul className="build-list">
          {buildItems.map((item, i) => (
            <li key={i} className="build-item">
              <div className="build-item-icon">{item.icon}</div>
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Tip */}
      <div className="tip-card fade-up fade-up-2">
        <span className="tip-icon">💡</span>
        <span>
          <strong>Pro tip:</strong> Start with the mobile layout first, then use a
          min-width media query to enhance for desktop. Flexbox and CSS Grid are your best friends today.
        </span>
      </div>

      {/* Proof form */}
      <div className="proof-section fade-up fade-up-3">
        <div className="proof-title">Submit Your Proof 🔗</div>
        <div className="proof-sub">Fill in at least one URL to submit today's work.</div>

        <div className="input-group">
          <label>GitHub Repository URL</label>
          <input
            id="repo-url"
            type="url"
            value={repo}
            onChange={e => setRepo(e.target.value)}
            placeholder="https://github.com/you/repo"
            className={repo.trim() ? 'filled' : ''}
            aria-label="GitHub repository URL"
          />
        </div>

        <div className="input-group">
          <label>Commit URL</label>
          <input
            id="commit-url"
            type="url"
            value={commit}
            onChange={e => setCommit(e.target.value)}
            placeholder="https://github.com/you/repo/commit/abc123"
            className={commit.trim() ? 'filled' : ''}
            aria-label="GitHub commit URL"
          />
        </div>

        <div className="input-group">
          <label>LinkedIn Post URL</label>
          <input
            id="linkedin-url"
            type="url"
            value={post}
            onChange={e => setPost(e.target.value)}
            placeholder="https://www.linkedin.com/feed/update/..."
            className={post.trim() ? 'filled' : ''}
            aria-label="LinkedIn post URL"
          />
        </div>

        <button
          id="submit-proof-btn"
          className="btn primary btn-full"
          disabled={!canSubmit}
          onClick={handleSubmit}
          style={{ marginTop: '6px' }}
        >
          ✅ Submit Today's Proof
        </button>

        <button
          className={`save-btn${saved ? ' saved' : ''}`}
          onClick={() => setSaved(s => !s)}
          aria-label="Save for later"
        >
          {saved ? '✓ Saved for later' : '🔖 Save for later'}
        </button>
      </div>

      {/* Bottom Nav */}
      <nav className="bottom-nav">
        <Link to="/" className="bottom-nav-item">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </Link>
        <Link to="/dashboard" className="bottom-nav-item">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
          Dashboard
        </Link>
        <Link to="/day/12" className="bottom-nav-item active">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Challenge
        </Link>
      </nav>
    </div>
  )
}
