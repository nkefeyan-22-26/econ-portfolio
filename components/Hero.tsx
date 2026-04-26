"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number; alpha: number; r: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.1,
        r: Math.random() * 1.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #071527 0%, #0d1f3c 40%, #0b3225 80%, #071527 100%)",
      }}
    >
      {/* Animated particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Radial glow accents */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(21,96,68,0.25) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(13,31,60,0.5) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Thin gold rule above */}
        <div
          className="mx-auto mb-8"
          style={{
            height: "1px",
            width: "80px",
            background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
          }}
        />

        <p
          className="font-[family-name:var(--font-inter)] text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-6"
          style={{ letterSpacing: "0.35em" }}
        >
          Economics · Data Science · Research
        </p>

        <h1
          className="font-[family-name:var(--font-syne)] font-700 leading-tight mb-6"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            background: "linear-gradient(135deg, #f2ede4 30%, #e0bb70 60%, #f2ede4 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Nathan Kefeyan
        </h1>

        <div
          className="mx-auto my-6"
          style={{
            height: "1px",
            width: "120px",
            background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
          }}
        />

        <p
          className="font-[family-name:var(--font-inter)] font-300 text-[#c8bfaf] mb-2 tracking-wide"
          style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.1rem)" }}
        >
          B.S. Economics · Minor in Data Science
        </p>
        <p
          className="font-[family-name:var(--font-inter)] font-300 text-[#8fa3bb] tracking-wide"
          style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)" }}
        >
          Northeastern University
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase px-8 py-3.5 border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#071527] transition-all duration-300"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase px-8 py-3.5 bg-[#0f4533]/40 border border-[#156044] text-[#f2ede4] hover:bg-[#156044] hover:border-[#c9a84c] transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-widest uppercase text-[#8fa3bb]">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-[#c9a84c] to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
