import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative z-10 py-12 border-t border-white/5 bg-background overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-xl font-heading font-bold flex items-center gap-2">
              <span className="text-gradient">SS.</span>
              <span className="text-white">Studio</span>
            </h3>
            <p className="text-textMain/50 text-sm mt-2">
              © 2026 S. Shaheeth – Creative Video Editor
            </p>
            <p className="text-white/20 text-[10px] mt-2 uppercase tracking-[0.3em] font-medium">
              Developed by <a href="https://bharanidharan.dev" target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-primary transition-colors hover-target">bharanidharan.dev</a>
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex space-x-8"
          >
            <a href="#home" className="text-textMain/70 hover:text-white transition-colors text-sm hover-target">Home</a>
            <a href="#portfolio" className="text-textMain/70 hover:text-white transition-colors text-sm hover-target">Portfolio</a>
            <a href="#contact" className="text-textMain/70 hover:text-white transition-colors text-sm hover-target">Contact</a>
          </motion.div>

        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
