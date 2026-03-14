import React from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import SkillsSection from '../sections/SkillsSection';
import PortfolioSection from '../sections/PortfolioSection';
import ExperienceSection from '../sections/ExperienceSection';
import AchievementsSection from '../sections/AchievementsSection';
import CommunitySection from '../sections/CommunitySection';
import ContactSection from '../sections/ContactSection';

const HomePage = () => {
  return (
    <div className="w-full flex-col flex overflow-hidden">
      <HeroSection />
      
      {/* Decorative line divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <AboutSection />
      
      <SkillsSection />
      
      <PortfolioSection />
      
      <ExperienceSection />
      
      <AchievementsSection />
      
      <CommunitySection />
      
      {/* Final dramatic divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent my-10 relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-[1px] bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
      </div>
      
      <ContactSection />
    </div>
  );
};

export default HomePage;
