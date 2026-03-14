import React, { lazy, Suspense } from 'react';

// ─── Only HeroSection loads eagerly (above the fold) ─────────────────────────
import HeroSection from '../sections/HeroSection';

// ─── Everything below the fold loads lazily via code splitting ────────────────
const WhatWeDoSection   = lazy(() => import('../sections/WhatWeDoSection'));
const AboutSection      = lazy(() => import('../sections/AboutSection'));
const SkillsSection     = lazy(() => import('../sections/SkillsSection'));
const PortfolioSection  = lazy(() => import('../sections/PortfolioSection'));
const ExperienceSection = lazy(() => import('../sections/ExperienceSection'));
const AchievementsSection = lazy(() => import('../sections/AchievementsSection'));
const CommunitySection  = lazy(() => import('../sections/CommunitySection'));
const ContactSection    = lazy(() => import('../sections/ContactSection'));

// ─── Minimal fallback that preserves layout height to avoid CLS ───────────────
const SectionFallback = () => (
  <div style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{
      width: '40px', height: '40px', borderRadius: '50%',
      border: '2px solid rgba(124,58,237,0.3)',
      borderTopColor: '#7C3AED',
      animation: 'spin 0.8s linear infinite'
    }} />
  </div>
);

const HomePage = () => {
  return (
    <div className="w-full flex-col flex overflow-hidden">
      {/* Hero is NOT lazy — it IS the LCP element */}
      <HeroSection />

      {/* Decorative line divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* All below-the-fold sections are lazy-loaded */}
      <Suspense fallback={<SectionFallback />}>
        <WhatWeDoSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <SkillsSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <PortfolioSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ExperienceSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <AchievementsSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <CommunitySection />
      </Suspense>

      {/* Final dramatic divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent my-10 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-[1px] bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
      </div>

      <Suspense fallback={<SectionFallback />}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default HomePage;
