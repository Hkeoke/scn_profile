'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';


type Position = {
  x: number;
  y: number;
  scale: number;
  opacity: number;
};

const NeonCursor = () => {
  const [position, setPosition] = useState<Position>({
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
  });


  const trailControls = useAnimation();
  const glowControls = useAnimation();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition(prev => ({
      ...prev,
      x: e.clientX,
      y: e.clientY,
    }));
  }, []);



  const handleMouseOver = useCallback((e: Event) => {
    const target = e.target as Element;
    if (target?.matches('a, button, input, [data-hover="true"]')) {

      trailControls.start({
        scale: 1.5,
        borderColor: 'rgb(255, 150, 50)',
        borderWidth: '3px',
      });
      glowControls.start({
        scale: 2,
        opacity: 0.8,
      });
    }
  }, [trailControls, glowControls]);

  const handleMouseOut = useCallback(() => {

    trailControls.start({
      scale: 1,
      borderColor: 'rgb(236, 101, 23)',
      borderWidth: '2px',
    });
    glowControls.start({
      scale: 1,
      opacity: 0.4,
    });
  }, [trailControls, glowControls]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [handleMouseMove, handleMouseOver, handleMouseOut]);

  return (
    <div className='neon-cursor-container'>
      <motion.div
        className='cursor-trail'
        animate={{
          x: position.x - 20,
          y: position.y - 20,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
          mass: 0.8,
        }}
      />
    </div>
  );
};

export default NeonCursor;