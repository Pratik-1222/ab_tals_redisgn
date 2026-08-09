import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const isLanding = location.pathname === '/'
  const isDashboard = location.pathname === '/dashboard'
  const isDay = location.pathname.startsWith('/day')

  return (
    <header className="nav">
      <div className="nav-left">
        <Link to="/" className="logo brand-creative-logo">
          <span className="brand-ab">AB</span>
          <span className="brand-talks">TALKS</span>
        </Link>
      </div>
      <nav className="nav-right">
        <Link to="/" className={`nav-link${isLanding ? ' active' : ''}`}>
          <span className="nav-num">01 /</span> HOME
        </Link>
        <Link to="/dashboard" className={`nav-link${isDashboard ? ' active' : ''}`}>
          <span className="nav-num">02 /</span> DASHBOARD
        </Link>
        <Link to="/day/12" className={`nav-link${isDay ? ' active' : ''}`}>
          <span className="nav-num">03 /</span> TODAY'S TASK
        </Link>
        {(isDashboard || isDay) && (
          <div className="nav-streak-badge">
            <span className="fire-icon">⚡</span> 11 DAYS
          </div>
        )}
      </nav>
    </header>
  )
}
