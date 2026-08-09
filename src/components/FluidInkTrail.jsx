import React, { useEffect, useState } from 'react';

const FluidInkTrail = () => {
  const [pos, setPos] = useState({ x: '-1000px', y: '-1000px' });

  useEffect(() => {
    // Mobile safeguard: disable on touch screens or viewports < 768px
    if (
      window.innerWidth < 768 ||
      'ontouchstart' in window ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 0)
    ) {
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: `${e.clientX}px`, y: `${e.clientY}px` });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="fluid-spotlight-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 40,
        overflow: 'hidden',
        background: `radial-gradient(600px circle at ${pos.x} ${pos.y}, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.08) 40%, transparent 80%)`,
        transition: 'background 0.15s ease-out',
      }}
    />
  );
};

export default FluidInkTrail;
