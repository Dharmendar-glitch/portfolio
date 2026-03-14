import React, { useRef, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// FloatingLines uses WebGL (Three.js) — lazy load so it doesn't block FCP
const FloatingLines = lazy(() => import('../components/FloatingLines'));

const HeroSection = () => {
  const container = useRef();
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  // ─── GSAP loaded lazily, only after hero mounts ───────────────────────────
  React.useEffect(() => {
    // Use dynamic import so GSAP doesn't block initial render/FCP
    let cleanup = () => {};
    const loadGsap = async () => {
      const { default: gsap } = await import('gsap');
      const { useGSAP } = await import('@gsap/react');

      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });
      tl.from('.hero-badge',    { y: 40, opacity: 0, scale: 0.8, duration: 1.2 })
        .from('.hero-title',    { y: 100, opacity: 0, skewY: 7, stagger: 0.1, delay: -1 })
        .from('.hero-subtitle', { y: 30, opacity: 0, delay: -1.2 })
        .from('.hero-btn',      { y: 30, opacity: 0, stagger: 0.15, delay: -1.3 });

      cleanup = () => tl.kill();
    };

    // Defer GSAP animation until after browser is idle — doesn't block FCP/LCP
    if (typeof requestIdleCallback !== 'undefined') {
      const id = requestIdleCallback(() => loadGsap());
      return () => { cancelIdleCallback(id); cleanup(); };
    } else {
      const id = setTimeout(() => loadGsap(), 100);
      return () => { clearTimeout(id); cleanup(); };
    }
  }, []);

  return (
    <section
      id="home"
      ref={container}
      className="relative h-screen flex items-center justify-center p-6 overflow-hidden"
    >
      {/* ── FloatingLines WebGL Background — lazy, won't block FCP ── */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={
          // Lightweight CSS-only fallback while WebGL loads
          <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        }>
          <FloatingLines
            linesGradient={['#7C3AED', '#06B6D4', '#F43F5E', '#7C3AED']}
            enabledWaves={['top', 'middle', 'bottom']}
            lineCount={[10, 8, 6]}
            lineDistance={[8, 5, 4]}
            animationSpeed={0.35}
            interactive={true}
            bendRadius={5.0}
            bendStrength={-0.4}
            mouseDamping={0.03}
            parallax={true}
            parallaxStrength={0.1}
            mixBlendMode="screen"
          />
        </Suspense>
      </div>

      {/* ── Overlays for depth and readability ── */}
      <div className="absolute inset-0 z-[1] bg-background/50 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-80 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[40vh] z-[1] bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />

      {/* ── Centered Content ── */}
      <motion.div
        style={{ opacity, y: useTransform(scrollY, [0, 500], [0, -50]) }}
        className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10 w-full"
      >
        {/* Availability Badge */}
        <div className="hero-badge mb-10 inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-2xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative rounded-full h-2.5 w-2.5 bg-primary" />
          </span>
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/90">Available for Work</span>
        </div>

        {/* Master Headline */}
        <h1 className="hero-title text-6xl md:text-8xl lg:text-[7.5rem] font-heading font-bold mb-8 leading-[0.9] tracking-tighter text-white">
          Turning Ideas Into <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,theme(colors.primary),35%,rgba(255,255,255,0.7),40%,#fff,45%,rgba(255,255,255,0.7),65%,theme(colors.secondary))] bg-[length:200%_100%] animate-text-shimmer drop-shadow-[0_0_30px_rgba(124,58,237,0.3)] transition-all duration-1000">
            Viral Visual Stories
          </span>
        </h1>

        {/* Descriptive Subtitle */}
        <p className="hero-subtitle text-xl md:text-2xl text-white/50 max-w-3xl mb-14 leading-relaxed font-light tracking-wide">
          Professional Video Editor crafting high-converting <span className="text-white/80 font-medium italic">cinematic reels</span>, <span className="text-white/80 font-medium italic">brand ads</span>, and high-impact social media assets.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
          <a
            href="#contact"
            className="hero-btn group relative w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-5 rounded-full text-xl font-bold text-background bg-white shadow-[0_20px_50px_rgba(255,255,255,0.15)] hover:shadow-[0_25px_60px_rgba(255,255,255,0.25)] transition-all duration-500 overflow-hidden hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative">Work With Me</span>
            <ArrowRight size={20} className="relative group-hover:translate-x-2 transition-transform duration-500" />
          </a>
        </div>

      </motion.div>
    </section>
  );
};

export default HeroSection;
