import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Video, Award } from 'lucide-react';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="relative py-32 px-6">
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-background overflow-hidden pointer-events-none z-[-1]">
        <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-accent/10 rounded-full blur-[120px] mix-blend-screen mix-blend-color-dodge"></div>
        <div className="absolute bottom-0 right-1/4 w-1/4 h-1/4 bg-primary/10 rounded-full blur-[100px] mix-blend-screen mix-blend-color-dodge"></div>
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-16 items-center"
        >
          {/* Left Column: Image Card */}
          <motion.div variants={itemVariants} className="w-full lg:w-5/12">
            <div className="relative group w-full max-w-md mx-auto aspect-[4/5] rounded-[2rem] overflow-hidden glass p-4 border border-white/10 hover-target transition-all duration-500 hover:border-primary/50">
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10 mix-blend-multiply transition-opacity group-hover:opacity-50 duration-500"></div>
              
              {/* Replace with actual high-quality portrait */}
              <img 
                src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop" 
                alt="S. Shakeeth" 
                className="w-full h-full object-cover rounded-[1.5rem] filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
              />
              
              <div className="absolute bottom-8 left-8 right-8 z-20 transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-3xl font-heading font-bold mb-2">S. Shakeeth</h3>
                <div className="flex items-center gap-2 text-textMain/80 font-medium tracking-wide text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                  <MapPin size={16} className="text-primary" />
                  <span>Coimbatore, India</span>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full blur-[40px] opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Stats */}
          <motion.div variants={itemVariants} className="w-full lg:w-7/12">
            
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/5 bg-white/5">
              <span className="text-xs uppercase tracking-widest text-primary font-bold">About Me</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-8 leading-tight">
              Bridging <span className="text-gradient">Business Strategy</span> <br/>
              with Creative Storytelling.
            </h2>

            <p className="text-lg text-textMain/70 leading-relaxed font-sans mb-12 max-w-2xl">
              I am a motivated BBA graduate combining sharp business acumen with creative video editing skills. Specialized in producing engaging reels, dynamic brand advertisements, and digital storytelling that drives measurable audience engagement and boosts marketing performance.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
              {[
                { label: "Accounts Managed", value: "20+", icon: <Briefcase /> },
                { label: "Videos Edited", value: "500+", icon: <Video /> },
                { label: "Total Views", value: "Millions", icon: <Award /> },
                { label: "Experience", value: "Since 2025", icon: <MapPin /> },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="glass p-6 rounded-2xl border-white/5 hover:bg-white/[0.08] hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/30 transition-all">
                    {React.cloneElement(stat.icon, { size: 24, className: "text-primary group-hover:text-white transition-colors" })}
                  </div>
                  <h4 className="text-3xl font-heading font-bold text-white mb-2 group-hover:text-primary transition-colors">{stat.value}</h4>
                  <p className="text-sm font-medium text-textMain/60 uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
