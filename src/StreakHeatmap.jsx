import React, { useState } from 'react'

export default function StreakHeatmap({ currentDay = 12, totalDays = 60, streak = 11 }) {
  const [hoveredDay, setHoveredDay] = useState(null)

  const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1)
  const missedDays = [6] // Day 6 missed example

  return (
    <div className="dash-calendar-card">
      {/* Header Bar */}
      <div className="dash-calendar-header">
        <div>
          <div className="dash-calendar-tag">// CONSISTENCY TRACKER</div>
          <h2 className="dash-calendar-title">60-Day Consistency Heatmap</h2>
        </div>

        {/* Metric Badges */}
        <div className="dash-calendar-badges">
          <span className="dash-badge badge-amber">🔥 {streak} Day Streak</span>
          <span className="dash-badge badge-emerald">⚡ 91% Consistency</span>
        </div>
      </div>

      {/* Hover Status Bar */}
      <div className="dash-calendar-hover-bar">
        {hoveredDay ? (
          <div className="dash-hover-tooltip">
            {missedDays.includes(hoveredDay) ? (
              <span className="text-missed">Day {hoveredDay}: Missed ❌ (0 submissions)</span>
            ) : hoveredDay < currentDay ? (
              <span className="text-verified">Day {hoveredDay}: 1 Submission (Verified ✅)</span>
            ) : hoveredDay === currentDay ? (
              <span className="text-today">Day {hoveredDay}: Today — In Progress 🚀</span>
            ) : (
              <span className="text-upcoming">Day {hoveredDay}: Unattempted 🔒</span>
            )}
          </div>
        ) : (
          <span className="dash-hover-placeholder">Hover over any day tile to inspect daily submissions...</span>
        )}
      </div>

      {/* Month Section Headers */}
      <div className="dash-month-headers">
        <div className="dash-month-label">MONTH 1 (DAYS 1 – 30)</div>
        <div className="dash-month-label">MONTH 2 (DAYS 31 – 60)</div>
      </div>

      {/* 60-Day Clean Tile Matrix Grid */}
      <div className="dash-heatmap-grid-wrap">
        <div className="dash-heatmap-matrix">
          {daysArray.map((d) => {
            const isMissed = missedDays.includes(d)
            const isCompleted = d < currentDay && !isMissed
            const isCurrent = d === currentDay
            const isUpcoming = d > currentDay

            let tileClass = 'tile-upcoming'
            if (isCompleted) tileClass = 'tile-completed'
            if (isMissed) tileClass = 'tile-missed'
            if (isCurrent) tileClass = 'tile-current'

            return (
              <div
                key={d}
                onMouseEnter={() => setHoveredDay(d)}
                onMouseLeave={() => setHoveredDay(null)}
                className={`dash-tile ${tileClass}`}
              >
                {d}
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer Legend */}
      <div className="dash-calendar-footer">
        <div className="dash-footer-stat">10 submissions in past 60 days</div>

        <div className="dash-legend">
          <span className="legend-text">Less</span>
          <span className="legend-swatch swatch-upcoming" title="Unattempted" />
          <span className="legend-swatch swatch-missed" title="Missed" />
          <span className="legend-swatch swatch-current" title="Today" />
          <span className="legend-swatch swatch-completed" title="Completed" />
          <span className="legend-text">More</span>
        </div>
      </div>
    </div>
  )
}
