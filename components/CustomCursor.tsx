import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Sembunyikan di perangkat mobile
    if (window.innerWidth < 768) {
      setIsMobile(true);
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-emerald-400/50 rounded-full pointer-events-none z-[9999] mix-blend-soft-light"
      style={{ translateX: position.x - 16, translateY: position.y - 16 }}
      animate={{ scale: isHovering ? 1.5 : 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  );
};

export default CustomCursor;