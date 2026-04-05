'use client';

import { useEffect, useState } from 'react';
const logoSplash = '/images/logo-splash.png';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'break'>('enter');

  useEffect(() => {
    const enterTimer = setTimeout(() => setPhase('hold'), 800);
    const holdTimer = setTimeout(() => setPhase('break'), 2000);
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(holdTimer);
      clearTimeout(completeTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Generate 12 fragments with different directions
  const fragments = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 360) / 12;
    const distance = 150 + Math.random() * 100;
    const tx = Math.cos((angle * Math.PI) / 180) * distance;
    const ty = Math.sin((angle * Math.PI) / 180) * distance;
    const rotation = Math.random() * 360 - 180;
    
    return { tx, ty, rotation, delay: Math.random() * 0.2 };
  });

  return (
    <div 
      className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 50% 50%, hsl(220 40% 10%), hsl(222 47% 7%))'
      }}
    >
      {/* Scan lines effect */}
      {phase === 'break' && (
        <>
          <div className="absolute inset-0 opacity-30">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-px bg-primary/50"
                style={{
                  top: `${(i + 1) * 12.5}%`,
                  animation: `scan-lines 0.6s ease-out ${i * 0.05}s forwards`,
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Main logo container */}
      <div className="relative w-full max-w-2xl px-8">
        {/* Glow background */}
        <div 
          className={`absolute inset-0 blur-3xl transition-opacity duration-1000 ${
            phase === 'hold' ? 'opacity-60' : 'opacity-0'
          }`}
          style={{
            background: 'radial-gradient(circle, hsl(200 100% 50% / 0.3), transparent 70%)'
          }}
        />

        {/* Logo fragments for break effect */}
        {phase === 'break' && (
          <div className="absolute inset-0 flex items-center justify-center">
            {fragments.map((fragment, i) => (
              <img
                key={i}
                src={logoSplash}
                alt=""
                className="absolute w-full h-auto"
                style={{
                  animation: `fragment-disperse 1s ease-out ${fragment.delay}s forwards`,
                  '--tx': `${fragment.tx}px`,
                  '--ty': `${fragment.ty}px`,
                  '--r': `${fragment.rotation}deg`,
                  filter: i % 3 === 0 
                    ? 'hue-rotate(10deg) brightness(1.2)' 
                    : i % 3 === 1 
                    ? 'hue-rotate(-10deg) brightness(0.8)' 
                    : 'none',
                } as React.CSSProperties}
              />
            ))}
          </div>
        )}

        {/* Main logo */}
        <div className="relative">
          <img
            src={logoSplash}
            alt="RTP Digital Solutions"
            className={`w-full h-auto relative z-10 transition-all duration-1000 ${
              phase === 'enter' 
                ? 'opacity-0 scale-90' 
                : phase === 'hold'
                ? 'opacity-100 scale-100 animate-logo-glow'
                : 'opacity-0 scale-110'
            }`}
            style={{
              filter: phase === 'break' ? 'blur(8px)' : 'drop-shadow(0 0 30px hsl(200 100% 50% / 0.6))',
              animation: phase === 'break' ? 'glitch-rgb 0.3s ease-in-out 3' : undefined,
            }}
          />
        </div>

        {/* Digital particles */}
        {phase === 'break' && (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-primary rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  animation: `particle-disperse 1s ease-out ${i * 0.05}s forwards`,
                  '--px': `${Math.cos((i * 360) / 20 * Math.PI / 180) * (100 + Math.random() * 100)}px`,
                  '--py': `${Math.sin((i * 360) / 20 * Math.PI / 180) * (100 + Math.random() * 100)}px`,
                } as React.CSSProperties}
              />
            ))}
          </div>
        )}
      </div>

      {/* Full screen break overlay */}
      {phase === 'break' && (
        <div 
          className="absolute inset-0 bg-background"
          style={{
            animation: 'digital-break 1s ease-out forwards',
          }}
        />
      )}
    </div>
  );
};

export default SplashScreen;

