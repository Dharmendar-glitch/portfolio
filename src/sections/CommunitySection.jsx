import React from 'react';
import { motion } from 'framer-motion';
import { Users, LayoutList, HeartHandshake } from 'lucide-react';

const CommunitySection = () => {
  return (
    <section id="community" className="relative py-32 px-6 overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-primary/5 rounded-l-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2"
          >
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/5 bg-white/5 mx-auto">
              <span className="text-xs uppercase tracking-widest text-[#06B6D4] font-bold">Leadership</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold leading-tight mb-8">
              <span className="text-gradient hover-target">Community</span> & Leadership
            </h2>
            
            <div className="glass p-10 rounded-3xl border border-white/5 group relative hover:border-accent/40 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
              
              <div className="flex items-center gap-6 mb-8 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  <HeartHandshake size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-1">Rotaract Club of HICAS</h3>
                  <p className="text-primary font-medium tracking-wide text-sm uppercase">Board Member</p>
                  <p className="text-textMain/50 text-sm mt-1">2023 - 2025</p>
                </div>
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mt-1 shrink-0">
                    <LayoutList size={16} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">BBA Department Inaugural Function</h4>
                    <p className="text-textMain/70 leading-relaxed text-sm">Led the organizing committee for the department's flagship event.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mt-1 shrink-0">
                    <Users size={16} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">Community Development</h4>
                    <p className="text-textMain/70 leading-relaxed text-sm">Organized and executed multiple grassroots community development projects.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-1/2 relative hidden md:block"
          >
            <div className="w-full h-full aspect-[4/3] rounded-3xl overflow-hidden glass border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2070&auto=format&fit=crop" 
                alt="Community work" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-[1s]"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
