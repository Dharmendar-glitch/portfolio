import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, Trophy } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      title: "Hilaricas Cultural Fest",
      role: "Core Organizing Team",
      desc: "Managed 30+ cultural events.",
      icon: <Star className="text-secondary" />,
      delay: 0.1
    },
    {
      title: "District Editorial Workshop",
      role: "Zaade 25",
      desc: "Best Performer Award",
      icon: <Award className="text-primary" />,
      delay: 0.2
    },
    {
      title: "Adividya 24",
      role: "Treasure Hunt",
      desc: "1st Prize",
      icon: <Trophy className="text-accent" />,
      delay: 0.3
    }
  ];

  return (
    <section id="achievements" className="relative py-32 px-6 bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/5 bg-white/5 mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#F59E0B] font-bold">Milestones</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold leading-tight">
            Key <span className="text-gradient hover-target">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: item.delay, duration: 0.5 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-[#F59E0B]/50 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Glow overlay */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-[40px] group-hover:bg-[#F59E0B]/20 transition-all duration-500 pointer-events-none"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 shadow-inner relative z-10 group-hover:scale-110 transition-transform duration-500">
                {React.cloneElement(item.icon, { size: 32 })}
              </div>

              <h3 className="text-2xl font-heading font-bold text-white mb-2 relative z-10">{item.title}</h3>
              <h4 className="text-primary font-medium tracking-wide text-sm uppercase mb-4 relative z-10">{item.role}</h4>
              <p className="text-textMain/70 relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
