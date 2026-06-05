import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
  trail: number;
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 320;
    const stars: Star[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.4 + 0.2,
      opacity: Math.random() * 0.6 + 0.2,
      twinkleSpeed: Math.random() * 0.015 + 0.004,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    const shooters: ShootingStar[] = Array.from({ length: 4 }, () =>
      makeShooter(canvas)
    );

    function makeShooter(c: HTMLCanvasElement): ShootingStar {
      return {
        x: Math.random() * c.width * 0.7,
        y: Math.random() * c.height * 0.4,
        length: Math.random() * 120 + 60,
        speed: Math.random() * 6 + 4,
        angle: Math.PI / 5 + Math.random() * 0.3,
        opacity: 0,
        active: false,
        trail: 0,
      };
    }

    let nextShoot = 120 + Math.random() * 200;

    const nebulae = [
      { x: 0.75, y: 0.18, r: 320, color: "56, 100, 255", a: 0.06 },
      { x: 0.15, y: 0.55, r: 280, color: "120, 60, 220", a: 0.05 },
      { x: 0.55, y: 0.82, r: 260, color: "0, 180, 255", a: 0.045 },
      { x: 0.90, y: 0.65, r: 200, color: "80, 40, 200", a: 0.04 },
      { x: 0.30, y: 0.10, r: 180, color: "30, 140, 255", a: 0.035 },
    ];

    function draw() {
      t++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nebulae.forEach((n) => {
        const grd = ctx.createRadialGradient(
          n.x * canvas.width, n.y * canvas.height, 0,
          n.x * canvas.width, n.y * canvas.height, n.r
        );
        grd.addColorStop(0, `rgba(${n.color}, ${n.a})`);
        grd.addColorStop(1, `rgba(${n.color}, 0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(n.x * canvas.width, n.y * canvas.height, n.r, 0, Math.PI * 2);
        ctx.fill();
      });

      stars.forEach((s) => {
        const twinkle = Math.sin(t * s.twinkleSpeed + s.twinkleOffset);
        const op = Math.max(0.05, s.opacity + twinkle * 0.25);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 255, ${op})`;
        ctx.fill();

        if (s.radius > 1.1) {
          const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.radius * 3);
          grd.addColorStop(0, `rgba(180, 210, 255, ${op * 0.4})`);
          grd.addColorStop(1, "rgba(180, 210, 255, 0)");
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      nextShoot--;
      if (nextShoot <= 0) {
        const idle = shooters.find((s) => !s.active);
        if (idle) {
          idle.x = Math.random() * canvas.width * 0.6;
          idle.y = Math.random() * canvas.height * 0.35;
          idle.length = Math.random() * 130 + 70;
          idle.speed = Math.random() * 7 + 5;
          idle.angle = Math.PI / 5 + Math.random() * 0.35;
          idle.opacity = 1;
          idle.trail = 0;
          idle.active = true;
        }
        nextShoot = 180 + Math.random() * 300;
      }

      shooters.forEach((s) => {
        if (!s.active) return;
        s.trail += s.speed;
        s.opacity = Math.max(0, 1 - s.trail / s.length);

        const ex = s.x + Math.cos(s.angle) * s.trail;
        const ey = s.y + Math.sin(s.angle) * s.trail;
        const sx = ex - Math.cos(s.angle) * Math.min(s.trail, s.length * 0.6);
        const sy = ey - Math.sin(s.angle) * Math.min(s.trail, s.length * 0.6);

        const grad = ctx.createLinearGradient(sx, sy, ex, ey);
        grad.addColorStop(0, `rgba(200, 220, 255, 0)`);
        grad.addColorStop(1, `rgba(220, 235, 255, ${s.opacity})`);

        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(ex, ey);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (s.trail >= s.length + 30) s.active = false;
      });

      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
