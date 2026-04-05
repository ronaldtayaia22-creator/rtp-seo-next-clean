'use client';

import { useEffect, useRef } from 'react';

const AISphere = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 200;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    let time = 0;
    const centerX = size / 2;
    const centerY = size / 2;

    // Orbital ring configuration
    const orbits = [
      { radius: 50, speed: 0.8, tilt: 0.3, phase: 0, trailLength: 80 },
      { radius: 55, speed: -0.6, tilt: 0.5, phase: Math.PI / 3, trailLength: 70 },
      { radius: 45, speed: 1.0, tilt: 0.7, phase: Math.PI / 2, trailLength: 90 },
      { radius: 60, speed: -0.9, tilt: 0.2, phase: Math.PI, trailLength: 60 },
      { radius: 52, speed: 0.7, tilt: 0.6, phase: Math.PI * 1.5, trailLength: 75 },
    ];

    const animate = () => {
      time += 0.02;
      
      // Fade effect for trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, size, size);

      // Draw central glow
      const coreGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 30);
      coreGradient.addColorStop(0, 'hsla(217, 91%, 60%, 0.4)');
      coreGradient.addColorStop(0.5, 'hsla(217, 91%, 50%, 0.2)');
      coreGradient.addColorStop(1, 'hsla(217, 91%, 40%, 0)');
      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
      ctx.fill();

      // Draw orbiting light trails
      orbits.forEach((orbit, orbitIndex) => {
        const points = orbit.trailLength;
        
        for (let i = 0; i < points; i++) {
          const progress = i / points;
          const angle = time * orbit.speed + orbit.phase + (i * 0.08);
          
          // 3D projection with tilt
          const x3d = Math.cos(angle) * orbit.radius;
          const y3d = Math.sin(angle) * orbit.radius * Math.cos(orbit.tilt + Math.sin(time * 0.5) * 0.2);
          const z3d = Math.sin(angle) * orbit.radius * Math.sin(orbit.tilt + Math.sin(time * 0.5) * 0.2);
          
          // Project to 2D
          const perspective = 1 + z3d * 0.005;
          const x = centerX + x3d * perspective;
          const y = centerY + y3d * perspective;
          
          // Size and opacity based on position in trail and depth
          const depthFactor = (z3d + orbit.radius) / (orbit.radius * 2);
          const trailFade = Math.pow(progress, 0.5);
          const size = (2 + depthFactor * 3) * trailFade;
          const opacity = trailFade * (0.4 + depthFactor * 0.6);
          
          // Color variation - blue to cyan
          const hue = 200 + orbitIndex * 15 + Math.sin(time + orbitIndex) * 10;
          const saturation = 80 + depthFactor * 20;
          const lightness = 50 + depthFactor * 30;
          
          // Draw glowing point
          const pointGradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);
          pointGradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`);
          pointGradient.addColorStop(0.5, `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity * 0.5})`);
          pointGradient.addColorStop(1, `hsla(${hue}, ${saturation}%, ${lightness}%, 0)`);
          
          ctx.beginPath();
          ctx.arc(x, y, size * 2, 0, Math.PI * 2);
          ctx.fillStyle = pointGradient;
          ctx.fill();
        }
      });

      // Bright leading points
      orbits.forEach((orbit, orbitIndex) => {
        const angle = time * orbit.speed + orbit.phase;
        
        const x3d = Math.cos(angle) * orbit.radius;
        const y3d = Math.sin(angle) * orbit.radius * Math.cos(orbit.tilt + Math.sin(time * 0.5) * 0.2);
        const z3d = Math.sin(angle) * orbit.radius * Math.sin(orbit.tilt + Math.sin(time * 0.5) * 0.2);
        
        const perspective = 1 + z3d * 0.005;
        const x = centerX + x3d * perspective;
        const y = centerY + y3d * perspective;
        
        const hue = 200 + orbitIndex * 15;
        
        // Bright core
        const brightGradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
        brightGradient.addColorStop(0, `hsla(${hue}, 100%, 90%, 0.9)`);
        brightGradient.addColorStop(0.3, `hsla(${hue}, 90%, 70%, 0.6)`);
        brightGradient.addColorStop(1, `hsla(${hue}, 80%, 50%, 0)`);
        
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fillStyle = brightGradient;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initial clear
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, size, size);
    
    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow effect */}
      <div className="absolute w-[200px] h-[200px] rounded-full bg-primary/20 blur-3xl animate-pulse" />
      
      {/* Canvas sphere */}
      <canvas
        ref={canvasRef}
        className="relative z-10 rounded-full"
        style={{ width: '200px', height: '200px' }}
      />
    </div>
  );
};

export default AISphere;

