import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Youtube, AlertCircle, CheckCircle2 } from 'lucide-react';

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 3000);
    e.target.reset();
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      
      {/* Background glowing sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none z-[-1]"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/5 bg-white/5 mx-auto">
            <span className="text-xs uppercase tracking-widest text-[#F43F5E] font-bold">Collaborate</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold leading-tight">
            Let's create something <span className="text-gradient hover-target">iconic.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-start">
          
          {/* Contact Info & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-5/12 space-y-12"
          >
            <div className="space-y-8">
              <a href="mailto:shaheeths13@gmail.com" className="flex items-center gap-6 group hover-target w-fit">
                <div className="w-16 h-16 rounded-full glass border border-white/10 flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-textMain/50 text-sm uppercase tracking-widest mb-1">Email</h4>
                  <p className="text-xl font-heading font-semibold text-white group-hover:text-secondary transition-colors">shaheeths13@gmail.com</p>
                </div>
              </a>

              <a href="tel:09597770761" className="flex items-center gap-6 group hover-target w-fit">
                <div className="w-16 h-16 rounded-full glass border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-textMain/50 text-sm uppercase tracking-widest mb-1">Phone</h4>
                  <p className="text-xl font-heading font-semibold text-white group-hover:text-primary transition-colors">09597770761</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group hover-target w-fit">
                <div className="w-16 h-16 rounded-full glass border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-textMain/50 text-sm uppercase tracking-widest mb-1">Location</h4>
                  <p className="text-xl font-heading font-semibold text-white group-hover:text-accent transition-colors">Coimbatore, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h4 className="text-textMain/50 text-sm uppercase tracking-widest mb-6">Social Networks</h4>
              <div className="flex gap-4">
                {[
                  { icon: <Instagram />, label: "Instagram", color: "hover:text-pink-500", link: "#" },
                  { icon: <Linkedin />, label: "LinkedIn", color: "hover:text-blue-500", link: "#" },
                  { icon: <Youtube />, label: "YouTube", color: "hover:text-red-500", link: "#" }
                ].map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.link} 
                    className={`w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center text-white/70 transition-all duration-300 hover-target hover:-translate-y-2 hover:border-white/30 ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Glass Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full lg:w-7/12"
          >
            <form onSubmit={handleSubmit} className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-textMain/70 uppercase tracking-wider ml-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all hover-target" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-textMain/70 uppercase tracking-wider ml-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all hover-target" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-textMain/70 uppercase tracking-wider ml-1">Message</label>
                  <textarea 
                    id="message" 
                    required 
                    rows={5} 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] transition-all resize-none hover-target" 
                    placeholder="Tell me about your project..." 
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full relative group/btn inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white text-background font-bold text-lg hover-target overflow-hidden transition-all duration-300 mt-4"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
                  <span>Send Message</span>
                  <Send size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>

                {/* Form Status Message */}
                {formStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="flex items-center gap-2 p-4 mt-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400"
                  >
                    <CheckCircle2 size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
