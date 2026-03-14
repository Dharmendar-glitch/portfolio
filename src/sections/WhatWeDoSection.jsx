import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Youtube, 
  MousePointerClick, 
  Video, 
  Volume2, 
  Palette,
  CheckCircle2
} from 'lucide-react';

const services = [
  {
    title: "Retention-Focused Editing",
    description: "Data-driven pacing and structure designed to maximize average view duration and minimize drop-offs.",
    icon: <Zap className="text-yellow-400" />,
    color: "from-yellow-400/20 to-orange-500/20"
  },
  {
    title: "YouTube Growth Editing",
    description: "Long-form storytelling that turns casual viewers into subscribers through emotional connection.",
    icon: <Youtube className="text-red-500" />,
    color: "from-red-500/20 to-rose-600/20"
  },
  {
    title: "Viral Short-Form",
    description: "Hook-optimized Reels & Shorts engineered to stop the scroll and drive immediate engagement.",
    icon: <MousePointerClick className="text-cyan-400" />,
    color: "from-cyan-400/20 to-blue-500/20"
  },
  {
    title: "Visual Storytelling",
    description: "Transforming dry information into compelling narratives using b-roll, sound design, and motion.",
    icon: <Video className="text-purple-400" />,
    color: "from-purple-400/20 to-pink-500/20"
  },
  {
    title: "Sound Design & Mix",
    description: "Immersive audio atmospheres that keep viewers subconsciously engaged and focused.",
    icon: <Volume2 className="text-emerald-400" />,
    color: "from-emerald-400/20 to-teal-500/20"
  },
  {
    title: "Premium Color Grading",
    description: "Cinematic looks that establish brand identity and perceived production value.",
    icon: <Palette className="text-indigo-400" />,
    color: "from-indigo-400/20 to-violet-500/20"
  }
];

const WhatWeDoSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 bg-white/5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs uppercase tracking-[0.3em] text-white/70 font-bold">Expertise</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white"
          >
            What We <span className="text-gradient">Do</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/50 max-w-2xl mx-auto font-light"
          >
            Professional video editing services tailored to your content goals
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br transition-all duration-500 opacity-0 group-hover:opacity-100 blur-2xl rounded-3xl -z-10 bg-primary/20"></div>
              
              <div className="h-full glass p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-2xl transition-all duration-500 group-hover:bg-white/[0.05] group-hover:border-white/20 flex flex-col items-start">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 backdrop-blur-md border border-white/10`}>
                  {React.cloneElement(service.icon, { size: 32 })}
                </div>

                <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-white/60 leading-relaxed font-light mb-8 group-hover:text-white/80 transition-colors duration-300">
                  {service.description}
                </p>

                <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/0 group-hover:text-primary transition-all duration-500">
                  <span className="w-0 group-hover:w-8 h-px bg-primary transition-all duration-500"></span>
                  <span>Impact Ready</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action bottom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 p-12 rounded-[3rem] glass border border-white/10 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 relative z-10">
            Ready to scale your <span className="text-gradient">content?</span>
          </h3>
          
          <a
            href="#contact"
            className="inline-flex items-center gap-4 px-10 py-5 rounded-full text-xl font-bold text-background bg-white hover:scale-105 active:scale-95 transition-all duration-300 relative z-10 shadow-2xl"
          >
            Start Your Project
            <CheckCircle2 size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
