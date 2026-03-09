import { useEffect, useRef } from 'react';

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let nodes = [];
    let W, H;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      nodes = [];
      const count = Math.floor((W * H) / 26000);
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          r: Math.random() * 1.6 + 0.5
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, W, H);
      const D = 120;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(84, 224, 205, 0.55)';
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const d = Math.hypot(dx, dy);

          if (d < D) {
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.strokeStyle = `rgba(84, 224, 205, ${(1 - d / D) * 0.13})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    resize();
    initParticles();
    drawParticles();

    const handleResize = () => {
      resize();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Background Grid */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.18]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'linear-gradient(to bottom, rgba(255,255,255,.9), rgba(255,255,255,.2))'
        }}
      />

      {/* Background Noise */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,.8) .55px, transparent .7px)',
          backgroundSize: '12px 12px'
        }}
      />

      {/* Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute animate-float-orb opacity-35"
          style={{
            width: '420px',
            height: '420px',
            left: '-120px',
            top: '140px',
            borderRadius: '50%',
            filter: 'blur(18px)',
            background: 'radial-gradient(circle, rgba(54,225,198,.38), transparent 62%)'
          }}
        />
        <div 
          className="absolute animate-float-orb opacity-35"
          style={{
            width: '500px',
            height: '500px',
            right: '-160px',
            top: '60px',
            borderRadius: '50%',
            filter: 'blur(18px)',
            background: 'radial-gradient(circle, rgba(104,168,255,.28), transparent 62%)',
            animationDelay: '-4s'
          }}
        />
        <div 
          className="absolute animate-float-orb opacity-35"
          style={{
            width: '360px',
            height: '360px',
            right: '24%',
            bottom: '-120px',
            borderRadius: '50%',
            filter: 'blur(18px)',
            background: 'radial-gradient(circle, rgba(139,140,255,.22), transparent 62%)',
            animationDelay: '-8s'
          }}
        />
      </div>

      {/* Particle Canvas */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 pointer-events-none z-0 opacity-55"
      />
    </>
  );
}

export default ParticleBackground;
