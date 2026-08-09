import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const HeroHeading = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for natural delay
  const springConfig = { damping: 20, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Transforms for 3D tilt and movement offset
  const moveX = useTransform(smoothX, [-0.5, 0.5], [-30, 30]);
  const moveY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Calculate cursor position relative to center (-0.5 to 0.5)
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="perspective-1000 py-6 flex flex-col items-center justify-center hero-heading-container">
      <motion.h1
        style={{
          x: moveX,
          y: moveY,
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        className="hero-heading-text text-[12vw] font-black tracking-widest text-white leading-none select-none drop-shadow-[0_0_35px_rgba(16,185,129,0.4)]"
      >
        ABTALKS
      </motion.h1>
      <p className="text-emerald-400 font-mono tracking-widest text-sm sm:text-base mt-2 hero-heading-sub">
        CODE CONSISTENTLY. POST PUBLICLY. GET NOTICED.
      </p>
    </div>
  );
};

export default HeroHeading;
