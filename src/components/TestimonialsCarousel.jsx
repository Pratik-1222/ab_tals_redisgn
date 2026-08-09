import React, { useRef, useState } from 'react'
import { testimonials } from '../data/testimonialsData'

export default function TestimonialsCarousel() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const CARD_WIDTH = 380 + 20

  const scroll = (dir) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir * CARD_WIDTH * 2, behavior: 'smooth' })
  }

  const onScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <div>
          <div className="section-label-mono">// COMMUNITY VERIFIED PROOF</div>
          <h2 className="section-title" style={{ marginBottom: '6px' }}>What our builders say</h2>
          <p className="testimonials-sub">
            Verified stories from developers and professionals who completed the 60-day streak.
          </p>
        </div>
        <div className="carousel-controls">
          <button
            className={`carousel-btn${canScrollLeft ? '' : ' disabled'}`}
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            disabled={!canScrollLeft}
          >
            ←
          </button>
          <button
            className={`carousel-btn${canScrollRight ? '' : ' disabled'}`}
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            disabled={!canScrollRight}
          >
            →
          </button>
        </div>
      </div>

      <div
        className="carousel-track"
        ref={scrollRef}
        onScroll={onScroll}
        role="region"
        aria-label="Testimonials"
        tabIndex={0}
      >
        {testimonials.map((t) => (
          <figure key={t.id} className="testimonial-card testimonial-card-editorial">
            <div className="testimonial-top-row">
              <div className="gold-stars" aria-label="5 stars">★★★★★</div>
              <span className="gold-streak-tag">60 DAYS COMPLETED</span>
            </div>
            <div className="quote-mark">“</div>
            <blockquote className="testimonial-quote">{t.quote}</blockquote>
            <figcaption className="testimonial-author">
              <div className="author-avatar emerald-avatar">
                {t.initials}
              </div>
              <div className="author-info">
                <div className="author-name">{t.name}</div>
                <div className="author-school">{t.school}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
