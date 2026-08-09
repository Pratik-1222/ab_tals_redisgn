import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import data from '../data/mockData.json'
import StreakHeatmap from '../components/StreakHeatmap'

export default function Dashboard() {
  const profiles = data.profiles || []
  const defaultId = profiles[0]?.id || null
  const [selected, setSelected] = useState(defaultId)
  const user = profiles.find(p => p.id === selected) || profiles[0] || { name: 'Guest', currentDay: 12, totalDays: 60, streak: 12, missedYesterday: false, githubCommits: 0, linkedinPosts: 0, achievements: [] }
  const pct = Math.round((user.currentDay / user.totalDays) * 100)
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric'
  })

  return (
    <div className="page dashboard">
      {/* Greeting */}
      <div className="dash-greeting-wrap fade-up">
        <div>
          <div className="dash-greeting">Good evening, {user.name || 'Friend'} 👋</div>
          <div className="dash-date">{today}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <select aria-label="Demo profile" value={selected} onChange={e => setSelected(e.target.value)} style={{ padding: 8, borderRadius: 8, background: 'var(--card)', color: 'var(--text)' }}>
            {profiles.map(p => (
              <option key={p.id} value={p.id}>{p.id} {p.name ? `— ${p.name}` : ''}</option>
            ))}
          </select>
          <div className="dash-avatar">{user.name ? user.name[0] : '?'}</div>
        </div>
      </div>

      {/* Missed day banner */}
      {user.missedYesterday && (
        <div className="missed-banner fade-up fade-up-1">
          <span>⚠️ You missed yesterday. Let's get moving again.</span>
          <Link to="/day/12">Resume →</Link>
        </div>
      )}

      {/* Streak card */}
      <div className="streak-card card glow fade-up fade-up-1">
        <div className="streak-top">
          <div className="streak-left">
            <div className="streak-flame">🔥</div>
            <div>
              <div className="streak-number">{user.streak}</div>
              <div className="streak-label">Day Streak</div>
            </div>
          </div>
          <div className="streak-day-info">
            <div className="streak-day-bold">Day {user.currentDay}</div>
            <div style={{ fontSize: '11px', color: 'var(--text-3)' }}>of {user.totalDays} days</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="progress-meta-row">
          <span className="progress-title">Challenge Progress</span>
          <span className="progress-pct">{pct}%</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      {/* 60-Day Builder Streak Heatmap Widget */}
      <div className="fade-up fade-up-1">
        <StreakHeatmap 
          currentDay={user.currentDay || 12} 
          totalDays={user.totalDays || 60} 
          streak={user.streak || 12} 
        />
      </div>

      {/* Today's Build */}
      <div className="section-label" style={{ marginTop: '20px' }}>Today's Mission</div>
      <div className="today-card fade-up fade-up-2">
        <div className="today-header">
          <div>
            <div className="chip purple" style={{ marginBottom: '8px' }}>Day {user.currentDay} · ~45 min</div>
            <div className="today-title">Build a responsive landing page</div>
            <div className="today-meta">HTML · CSS · JavaScript · Mobile-first</div>
          </div>
        </div>
        <Link to="/day/12" className="btn primary btn-full">
          ⚡ Continue today's challenge
        </Link>
      </div>

      {/* Stats */}
      <div className="section-label" style={{ marginTop: '20px' }}>Your Stats</div>
      <div className="stats-row fade-up fade-up-2">
        <div className="stat-card">
          <div className="stat-value">{user.currentDay}<span style={{ fontSize: '12px', fontWeight: 500 }}>/{user.totalDays}</span></div>
          <div className="stat-label">Days Done</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{user.githubCommits}</div>
          <div className="stat-label">Commits</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{user.linkedinPosts}</div>
          <div className="stat-label">LI Posts</div>
        </div>
      </div>

      {/* Achievements */}
      <div className="section-label" style={{ marginTop: '20px' }}>Achievements</div>
      <div className="achievements-section fade-up fade-up-3">
        <div className="achievement-list">
          {(user.achievements || []).map((a, i) => (
            <div key={i} className="achievement-item">
              <div className="achievement-icon">🏅</div>
              <div>
                <div className="achievement-name">{a}</div>
                <div className="achievement-sub">&nbsp;</div>
              </div>
              <div className="chip green" style={{ marginLeft: 'auto', flexShrink: 0 }}>Earned</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <nav className="bottom-nav">
        <Link to="/" className="bottom-nav-item">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </Link>
        <Link to="/dashboard" className="bottom-nav-item active">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
          Dashboard
        </Link>
        <Link to="/day/12" className="bottom-nav-item">
          <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Challenge
        </Link>
      </nav>
    </div>
  )
}
