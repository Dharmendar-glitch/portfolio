import React from 'react';
import { motion } from 'framer-motion';
import { Film, PenTool, TrendingUp, Users } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      title: "Video Editing",
      icon: <Film className="text-primary group-hover:text-white transition-colors" />,
      items: ["CapCut", "Adobe After Effects", "Adobe Premiere Pro"],
      color: "from-primary to-accent"
    },
    {
      title: "Design",
      icon: <PenTool className="text-accent group-hover:text-white transition-colors" />,
      items: ["Canva", "Adobe Photoshop"],
      color: "from-accent to-secondary"
    },
    {
      title: "Marketing",
      icon: <TrendingUp className="text-secondary group-hover:text-white transition-colors" />,
      items: ["Digital Marketing", "Social Media Strategy", "Brand Promotion"],
      color: "from-secondary to-primary"
    },
    {
      title: "Business",
      icon: <Users className="text-primary group-hover:text-white transition-colors" />,
      items: ["Event Management", "Team Leadership", "Market Research"],
      color: "from-[#F59E0B] to-primary"
    }
  ];

  return (
    <section id="skills" className="relative py-32 px-6">
      
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px] mix-blend-screen mix-blend-color-dodge"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[150px] mix-blend-screen mix-blend-color-dodge"></div>
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/5 bg-white/5 mx-auto">
            <span className="text-xs uppercase tracking-widest text-accent font-bold">Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold leading-tight">
            My <span className="text-gradient hover-target">Arsenal</span>
          </h2>
          <p className="text-lg text-textMain/70 max-w-2xl mx-auto mt-6">
            Mastering industry-standard tools to craft cinematic visuals and data-driven marketing campaigns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              {/* Animated Glow Border Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-3xl blur opacity-0 group-hover:opacity-40 transition duration-500`}></div>
              
              <div className="relative h-full flex flex-col p-8 bg-[#0a0a0a] rounded-3xl border border-white/5 glass-hover hover:-translate-y-2 transition-transform duration-500 overflow-hidden z-10">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none mix-blend-overlay"></div>
                
                {/* Icon Wrapper */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8 shadow-inner shadow-white/5 group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary/20 group-hover:border-primary/50">
                   {skill.icon}
                </div>
                
                <h3 className="relative z-10 text-2xl font-heading font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-textMain/50 transition-all">
                  {skill.title}
                </h3>
                
                <ul className="relative z-10 space-y-4 flex-1">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center text-textMain/70 text-sm font-medium tracking-wide">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${skill.color} mr-3 group-hover:scale-150 transition-transform duration-300`}></span>
                      <span className="group-hover:text-white transition-colors duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
