import React, { useEffect, useRef } from 'react';

const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      hue: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.hue = Math.random() * 60 + 200; // Blue to purple range
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;

        // Keep particles within bounds
        this.x = Math.max(0, Math.min(canvas!.width, this.x));
        this.y = Math.max(0, Math.min(canvas!.height, this.y));
      }

      draw() {
        if (!ctx) return;
        
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = `hsl(${this.hue}, 70%, 60%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Beam effects
    class Beam {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      opacity: number;
      life: number;
      maxLife: number;

      constructor() {
        this.x1 = Math.random() * canvas!.width;
        this.y1 = Math.random() * canvas!.height;
        this.x2 = this.x1 + (Math.random() - 0.5) * 200;
        this.y2 = this.y1 + (Math.random() - 0.5) * 200;
        this.maxLife = 60 + Math.random() * 60;
        this.life = this.maxLife;
        this.opacity = 0;
      }

      update() {
        this.life--;
        
        if (this.life > this.maxLife * 0.7) {
          this.opacity = (this.maxLife - this.life) / (this.maxLife * 0.3);
        } else if (this.life < this.maxLife * 0.3) {
          this.opacity = this.life / (this.maxLife * 0.3);
        } else {
          this.opacity = 1;
        }
        
        this.opacity *= 0.3; // Make beams subtle
      }

      draw() {
        if (!ctx || this.life <= 0) return;

        const gradient = ctx.createLinearGradient(this.x1, this.y1, this.x2, this.y2);
        gradient.addColorStop(0, `rgba(59, 130, 246, ${this.opacity})`); // Blue
        gradient.addColorStop(0.5, `rgba(147, 51, 234, ${this.opacity * 0.8})`); // Purple
        gradient.addColorStop(1, `rgba(59, 130, 246, 0)`); // Transparent blue

        ctx.save();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
        ctx.restore();
      }

      isDead() {
        return this.life <= 0;
      }
    }

    const beams: Beam[] = [];
    let beamSpawnCounter = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Spawn new beams occasionally
      beamSpawnCounter++;
      if (beamSpawnCounter % 40 === 0 && beams.length < 8) {
        beams.push(new Beam());
      }

      // Update and draw beams
      for (let i = beams.length - 1; i >= 0; i--) {
        beams[i].update();
        beams[i].draw();
        
        if (beams[i].isDead()) {
          beams.splice(i, 1);
        }
      }

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.1;
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Additional gradient overlays for depth */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-blue-500/10 to-transparent blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-radial from-purple-500/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-1/3 h-1/3 bg-gradient-radial from-pink-500/10 to-transparent blur-3xl"></div>
      </div>
    </>
  );
};

export default BackgroundEffects;