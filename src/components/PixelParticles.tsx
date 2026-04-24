import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: 'square' | 'sparkle' | 'heart';
}

export function PixelParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles: Particle[] = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 4,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      type: Math.random() > 0.8 ? 'heart' : Math.random() > 0.5 ? 'sparkle' : 'square',
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          initial={{ 
            opacity: 0, 
            y: `${p.y}vh`, 
            x: `${p.x}vw` 
          }}
          animate={{ 
            opacity: [0, 0.4, 0.4, 0], 
            y: [`${p.y}vh`, `${p.y - 20}vh`] 
          }}
          transition={{ 
            duration: p.duration, 
            delay: p.delay, 
            repeat: Infinity,
            ease: "linear" 
          }}
          style={{ width: p.size, height: p.size }}
        >
          {p.type === 'square' && (
            <div className="w-full h-full bg-pink-soft opacity-50" />
          )}
          {p.type === 'sparkle' && (
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-full h-1/3 bg-pink-warm opacity-60" />
              <div className="absolute w-1/3 h-full bg-pink-warm opacity-60" />
            </div>
          )}
          {p.type === 'heart' && (
            <div className="relative w-full h-full flex items-center justify-center text-pink-warm opacity-50">
               <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-pink-warm opacity-50">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
