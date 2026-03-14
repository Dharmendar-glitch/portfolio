import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollProgressBar from './components/ScrollProgressBar';

// Pages
import HomePage from './pages/HomePage';

const Loader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      </div>
      
      <motion.div
        className="relative z-10 text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary tracking-tighter"
        >
          Mr Shaheeth Editz
        </motion.h1>
        <motion.p 
          className="mt-4 text-textMain/70 tracking-[0.3em] uppercase text-sm md:text-base font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Professional Editor
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  );
};

import { Volume2, VolumeX } from 'lucide-react';

// Create a simple Global Audio Context
export const AudioContext = React.createContext();

const SoundToggle = () => {
  const { isMuted, setIsMuted } = React.useContext(AudioContext);
  
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsMuted(prev => !prev)}
      className="fixed bottom-8 right-8 z-[10000] flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl transition-colors hover:bg-white/20 group"
      title={isMuted ? "Unmute Portfolio" : "Mute Portfolio"}
    >
      <div className="relative">
        {isMuted ? (
          <VolumeX size={20} className="text-white/40 group-hover:text-white transition-colors" />
        ) : (
          <div className="relative flex items-center justify-center">
            <Volume2 size={20} className="text-primary group-hover:text-white transition-colors animate-pulse" />
            <span className="absolute -inset-2 rounded-full border border-primary/30 animate-ping opacity-60" />
          </div>
        )}
      </div>
    </motion.button>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(() => {
    // Check localStorage for preference, default to muted for UX best practices
    const saved = localStorage.getItem('site-muted');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('site-muted', JSON.stringify(isMuted));
  }, [isMuted]);

  return (
    <AudioContext.Provider value={{ isMuted, setIsMuted }}>
      <Router>
        <CustomCursor />
        <ScrollProgressBar />
        {!loading && <SoundToggle />}
        
        <AnimatePresence>
          {loading ? (
            <Loader key="loader" onFinish={() => setLoading(false)} />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="min-h-screen flex flex-col relative"
            >
              {/* Global Background Elements */}
              <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-blob"></div>
                <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] mix-blend-screen opacity-40 animate-blob animation-delay-4000"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
              </div>

              <Navbar />
              <main className="flex-grow pt-20">
                <AnimatedRoutes />
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </Router>
    </AudioContext.Provider>
  );
}

export default App;
