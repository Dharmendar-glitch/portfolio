import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/5 bg-white/5 mx-auto">
            <span className="text-xs uppercase tracking-widest text-secondary font-bold">Journey</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold leading-tight">
            My <span className="text-gradient hover-target">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 pl-8 ml-4 md:ml-0 md:pl-0 md:border-none space-y-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:flex items-center justify-between w-full relative"
          >
            {/* Center dot/line for tablet/desktop */}
            <div className="hidden md:absolute md:left-1/2 md:-translate-x-1/2 md:w-0.5 md:h-full md:-top-4 md:-bottom-4 md:bg-white/10"></div>
            <div className="hidden md:absolute md:left-1/2 md:-translate-x-1/2 md:w-4 md:h-4 md:rounded-full md:bg-secondary md:shadow-[0_0_15px_rgba(244,63,94,0.6)] md:border-2 md:border-[#050505]"></div>

            {/* Content card */}
            <div className="md:w-[47%] glass p-8 rounded-3xl border border-white/5 hover:border-secondary/30 transition-all duration-300 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-secondary">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-white">Video Editor</h3>
                  <h4 className="text-primary font-medium">Bhogan Mediasoft</h4>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-textMain/50 font-medium">
                <div className="flex items-center gap-1.5"><Calendar size={16} /> Nov 2025 – Present</div>
                <div className="flex items-center gap-1.5"><MapPin size={16} /> Coimbatore</div>
              </div>

              <p className="text-textMain/70 leading-relaxed font-sans">
                Managing end-to-end post production for 20+ brand accounts creating high converting reels and paid social media ads. Working closely with marketing teams to deliver engaging and optimized digital content.
              </p>
            </div>
            
            <div className="hidden md:block md:w-[47%]"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
