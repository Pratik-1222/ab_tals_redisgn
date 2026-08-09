import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const HeroTiltHeading = () => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="w-full flex justify-center items-center py-8 overflow-hidden hero-tilt-wrapper">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="relative cursor-pointer select-none text-center px-4 hero-tilt-card"
      >
        <h1 
          style={{ transform: "translateZ(40px)" }} 
          className="hero-tilt-title text-6xl sm:text-7xl md:text-8xl lg:text-[7.5vw] font-black tracking-widest text-white leading-none drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]"
        >
          ABTALKS
        </h1>
        <p 
          style={{ transform: "translateZ(20px)" }} 
          className="hero-tilt-sub text-emerald-400 font-mono tracking-widest text-xs sm:text-sm md:text-base mt-4"
        >
          CODE CONSISTENTLY. POST PUBLICLY. GET NOTICED.
        </p>
      </motion.div>
    </div>
  );
};

export default HeroTiltHeading;
