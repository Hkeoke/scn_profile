'use client';
import { useTheme } from "next-themes";
import { useEffect, useRef, useCallback } from 'react';

const DataFlowBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>(null);
  const lines = useRef<Line[]>([]);
  const { theme } = useTheme();

  const goldenColor = 'hsl(45, 100%, 50%)';
  const numLines = 15;

  class Line {
    x: number;
    thickness: number;
    speed: number;
    direction: number;
    segments: Array<{ position: number; length: number; speedMultiplier: number }>;
    phase: number;

    constructor(canvasWidth: number, canvasHeight: number) {
      this.x = Math.random() * canvasWidth;
      this.thickness = Math.random() * 2 + 0.5;
      this.speed = (Math.random() * 0.3 + 0.1); // Algunas líneas más rápidas
      this.direction = Math.random() < 0.5 ? 1 : -1; // Algunas van en dirección contraria
      this.segments = [];
      this.phase = Math.random() * Math.PI * 2;

      // Crear entre 1 y 4 segmentos
      const numSegments = Math.floor(Math.random() * 4) + 1;
      for (let i = 0; i < numSegments; i++) {
        this.segments.push({
          position: Math.random() * canvasHeight,
          length: Math.random() * 60 + 20,
          speedMultiplier: Math.random() * 0.4 + 0.2
        });
      }
    }

    update(canvasHeight: number) {
      this.phase += this.speed * 0.01;

      this.segments.forEach(segment => {
        segment.position += Math.sin(this.phase * segment.speedMultiplier) * 0.5 * this.direction;

        if (segment.position > canvasHeight) {
          segment.position = -segment.length;
        } else if (segment.position < -segment.length) {
          segment.position = canvasHeight;
        }
      });
    }

    draw(ctx: CanvasRenderingContext2D, canvasHeight: number) {
      if (!canvasRef.current) return;

      // Línea base de altura completa
      ctx.strokeStyle = `hsla(0, 0%, 15%, ${0.3 + Math.random() * 0.1})`;
      ctx.lineWidth = this.thickness;
      ctx.beginPath();
      ctx.moveTo(this.x, 0);
      ctx.lineTo(this.x, canvasHeight);
      ctx.stroke();

      // Segmentos brillantes
      this.segments.forEach(segment => {
        ctx.strokeStyle = goldenColor;
        ctx.lineWidth = this.thickness * 1.5;
        ctx.globalAlpha = 0.3 + Math.random() * 0.3;

        ctx.beginPath();
        ctx.moveTo(this.x, segment.position);
        ctx.lineTo(this.x, segment.position + segment.length);
        ctx.stroke();
      });
    }
  }

  const init = useCallback(() => {
    if (!canvasRef.current) return;

    const { width, height } = canvasRef.current.getBoundingClientRect();
    canvasRef.current.width = width;
    canvasRef.current.height = height;

    lines.current = Array.from({ length: numLines }, () => (
      new Line(width, height)
    ));
  }, []);

  const animate = useCallback(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const { height } = canvasRef.current;
    ctx.clearRect(0, 0, canvasRef.current.width, height);
    ctx.fillStyle = theme === 'light' ? 'oklch(1 0 0)' : 'oklch(0.30 0 0)';

    lines.current.forEach(line => {
      line.update(height);
      line.draw(ctx, height);
    });

    animationFrameId.current = requestAnimationFrame(animate);
  }, [theme]);

  const handleResize = useCallback(() => {
    init();
  }, [init]);

  useEffect(() => {
    init();
    animate();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animate, handleResize, init]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'block',
        zIndex: -1
      }}
    />
  );
};

export default DataFlowBackground;