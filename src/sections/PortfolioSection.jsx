import React, { useState, useRef, useCallback, useEffect, useContext } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Play, X, Pause, Volume2, VolumeX, Maximize2, ArrowRight } from 'lucide-react';
import { AudioContext } from '../App';

// ─── Simple CountUp Component ────────────────────────────────────────────────
const CountUp = ({ to, suffix = "", duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

// ─── All 9 real videos ───────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "Singer Krish in CBE",
    category: "Reels",
    platform: "YouTube Shorts",
    url: "https://res.cloudinary.com/dlmk17r9h/video/upload/v1773572898/day_in_cbe_krishh_11_web_web_e4z5gg.mp4",
    size: "normal",
  },
  {
    id: 2,
    title: "DK Gold – Brand Ad Vol.1",
    category: "Ads",
    platform: "Instagram / YouTube",
    url: "https://res.cloudinary.com/dlmk17r9h/video/upload/v1773572851/DK_GOLD_VD_web_web_l0mqlk.mp4",
    size: "normal",
  },
  {
    id: 3,
    title: "IHS Voice Promo",
    category: "Social Media",
    platform: "YouTube Shorts",
    url: "https://res.cloudinary.com/dlmk17r9h/video/upload/v1773572874/IHS_voice_1__web_web_ip3gqs.mp4",
    size: "normal",
  },
  {
    id: 4,
    title: "DK Gold – Brand Ad Vol.2",
    category: "Ads",
    platform: "Instagram / YouTube",
    url: "https://res.cloudinary.com/dlmk17r9h/video/upload/v1773573418/DK_GOLD_2_VD_web_web_vw2w9j.mp4",
    size: "normal",
  },
  {
    id: 5,
    title: "YEF Madurai",
    category: "Events",
    platform: "YouTube",
    url: "https://res.cloudinary.com/dlmk17r9h/video/upload/v1773572902/YEF_Madurai_final_web_web_d1te8z.mp4",
    size: "normal",
  },
  {
    id: 6,
    title: "PSNA Badminton Reel",
    category: "Reels",
    platform: "Instagram Reels",
    url: "https://res.cloudinary.com/dlmk17r9h/video/upload/v1773572876/PSNA_BADMINTON_01_web_web_mkfnni.mp4",
    size: "normal",
  },
  {
    id: 7,
    title: "Holi Festival Celebration",
    category: "Events",
    platform: "Instagram Reels",
    url: "https://res.cloudinary.com/dlmk17r9h/video/upload/v1773572873/holi_final_19_web_web_tdkphs.mp4",
    size: "normal",
  },
  {
    id: 8,
    title: "DJ Deepika – Artist Intro",
    category: "Social Media",
    platform: "Instagram Reels",
    url: "https://res.cloudinary.com/dlmk17r9h/video/upload/v1773572903/DJ_DEEPIKA_INTRO_web_web_web_web_zsmbz9.mp4",
    size: "normal",
  },
  {
    id: 9,
    title: "Shree Samparpan – Brand Film",
    category: "Ads",
    platform: "YouTube",
    url: "https://res.cloudinary.com/dlmk17r9h/video/upload/v1773572900/SHREE_SAMPARPAN_HD_MP4_web_web_ydb1mg.mp4",
    size: "normal",
  },
  {
    id: 10,
    title: "Miss South India",
    category: "Events",
    platform: "Instagram",
    url: "https://res.cloudinary.com/dlmk17r9h/video/upload/v1773500942/Miss_South_India_adhg2k.mp4",
    size: "normal",
  },
  {
    id: 11,
    title: "Hilaricas – Auditorium Reel",
    category: "Events",
    platform: "Instagram",
    url: "https://res.cloudinary.com/dlmk17r9h/video/upload/v1773501366/This_year_s_Hilaricas_is_gonna_be_massive_Awaiting_for_you_all_to_set_the_auditorium_on_fire.No_fgv1jx.mp4",
    size: "normal",
  },
  {
    id: 12,
    title: "GET – Brand Story",
    category: "Ads",
    platform: "YouTube",
    url: "https://res.cloudinary.com/dlmk17r9h/video/upload/v1773501368/get_yokwvn.mp4",
    size: "normal",
  },
];

const categories = ['All', 'Reels', 'Ads', 'Social Media', 'Events'];

const categoryColors = {
  Reels: { bg: 'from-primary to-violet-400', glow: 'rgba(124,58,237,0.5)' },
  Ads: { bg: 'from-accent to-cyan-300', glow: 'rgba(6,182,212,0.5)' },
  'Social Media': { bg: 'from-secondary to-rose-400', glow: 'rgba(244,63,94,0.5)' },
  Events: { bg: 'from-amber-400 to-orange-500', glow: 'rgba(245,158,11,0.5)' },
};

// ─── Helper to generate Cloudinary thumbnails from Video URLs ──────────────────
const getThumbnail = (url) => {
  if (!url) return "";
  // Injects transformations for a representative frame (so_auto), quality/format (q_auto, f_webp)
  return url.replace('/video/upload/', '/video/upload/so_auto,q_auto,f_webp/').replace('.mp4', '.webp');
};

// ─── Sleek Skeleton Loader ───────────────────────────────────────────────────
const CardSkeleton = () => (
  <div className="absolute inset-0 bg-white/[0.03] animate-pulse overflow-hidden rounded-[2rem]">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
    <div className="absolute top-5 left-5 w-24 h-8 rounded-full bg-white/[0.05]" />
    <div className="absolute bottom-5 left-5 right-5 h-16 rounded-2xl bg-white/[0.05]" />
  </div>
);

// ─── Individual Video Card ────────────────────────────────────────────────────
const VideoCard = ({ project, onOpen }) => {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const { isMuted: globalMuted } = useContext(AudioContext);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Cloudinary: serve compressed WebP thumbnail, 400px wide, auto quality
  const thumbnailUrl = project.url
    .replace('/video/upload/', '/video/upload/so_auto,q_auto,f_webp,w_400/')
    .replace('.mp4', '.webp');

  // ─── Intersection Observer: lazy-load video src ONLY when card is visible ───
  useEffect(() => {
    let playTimeout;
    const isMobile = window.matchMedia('(pointer: coarse)').matches;
    
    // Mobile needs tight thresholds to only play 1-2 centered videos. Desktop needs large margins to preload early.
    const observerOptions = isMobile 
      ? { threshold: [0, 0.25, 0.5, 0.75], rootMargin: '-15% 0px -15% 0px' }
      : { threshold: [0, 0.1], rootMargin: '400px' };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!isMobile) {
          // Desktop: preload metadata completely off-screen so plays are instantaneous
          if (entry.isIntersecting && videoRef.current && !videoRef.current.src) {
            videoRef.current.src = project.url;
            videoRef.current.preload = "auto"; // aggressively buffer when nearby
          }
        } else {
          // Mobile auto-play when tightly visible (Avoids mult-video bandwidth choke)
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            setIsHovered(true);
            // Debounce play on scroll
            playTimeout = setTimeout(() => {
              if (videoRef.current) {
                if (!videoRef.current.src) {
                  videoRef.current.src = project.url;
                  videoRef.current.preload = "auto";
                }
                videoRef.current.play().catch(() => {});
              }
            }, 100);
          } else {
            setIsHovered(false);
            clearTimeout(playTimeout);
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        }
      });
    }, observerOptions);

    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      observer.disconnect();
      clearTimeout(playTimeout);
    };
  }, [project.url]);

  // ─── Sync Audio with Global Toggle ───
  useEffect(() => {
    if (videoRef.current && isHovered) {
      videoRef.current.muted = globalMuted;
    }
  }, [globalMuted, isHovered]);

  const handleMouseEnter = useCallback(() => {
    if (!window.matchMedia('(hover: hover)').matches) return;
    setIsHovered(true);
    if (videoRef.current) {
      if (!videoRef.current.src) {
        videoRef.current.src = project.url;
        videoRef.current.preload = "auto";
      }
      
      // Syncing currentTime to 0 synchronously before it's loaded causes scroll stuttering
      if (videoRef.current.readyState >= 1) {
        videoRef.current.currentTime = 0;
      }
      
      videoRef.current.muted = globalMuted;
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => { });
        }
      });
    }
  }, [globalMuted, project.url]);

  const handleMouseLeave = useCallback(() => {
    if (!window.matchMedia('(hover: hover)').matches) return;
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
      videoRef.current.currentTime = 0;
    }
  }, []);

  const col = categoryColors[project.category] || categoryColors.Ads;

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileTap={{ scale: 0.97, transition: { type: "spring", stiffness: 400, damping: 25 } }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        layout: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
      }}
      className={`group relative rounded-[2rem] overflow-hidden cursor-pointer bg-[#0a0a0a] border border-white/[0.08]
        hover:border-white/[0.2] transition-all duration-500
        shadow-[0_8px_30px_rgb(0,0,0,0.5)]`}
      style={{ aspectRatio: '9/16' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onOpen(project)}
    >
      {/* ── Skeleton while thumbnail loads ── */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-white/[0.03] animate-pulse overflow-hidden rounded-[2rem]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
          <div className="absolute top-5 left-5 w-24 h-8 rounded-full bg-white/[0.05]" />
          <div className="absolute bottom-5 left-5 right-5 h-16 rounded-2xl bg-white/[0.05]" />
        </div>
      )}

      {/* ── Inner Glow Ring ── */}
      <div className="absolute inset-0 rounded-[2rem] pointer-events-none border border-white/5 group-hover:border-transparent transition-colors z-10" />

      {/* ── Static Thumbnail — lazy, WebP, compressed ── */}
      <img
        src={thumbnailUrl}
        alt={project.title}
        loading="lazy"
        decoding="async"
        width="400"
        onLoad={() => setImageLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-[opacity,transform] duration-700 ease-out
          ${imageLoaded ? 'opacity-100' : 'opacity-0'}
          ${isHovered ? 'scale-[1.05] opacity-0' : 'scale-100 opacity-100'}`}
      />

      {/* ── Video: NO src attribute — injected lazily by IntersectionObserver ── */}
      <video
        ref={videoRef}
        poster={thumbnailUrl}
        preload="metadata"
        muted
        playsInline
        loop
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-[opacity,transform] duration-500 ease-out
          ${isHovered ? 'scale-[1.03] opacity-100' : 'scale-100 opacity-0'}`}
      />

      {/* ── Refined Scrims ── */}
      <div className={`absolute inset-0 transition-opacity duration-700
        ${isHovered ? 'opacity-100' : 'opacity-0'}
        bg-gradient-to-t from-black via-black/40 to-black/20`}
      />
      <div className={`absolute inset-0 transition-opacity duration-700
        ${!isHovered ? 'opacity-100' : 'opacity-0'}
        bg-gradient-to-t from-black/80 via-transparent to-black/30`}
      />

      {/* ── Glow Overlay on hover ── */}
      <div
        className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen"
        style={{ boxShadow: `inset 0 0 100px -30px ${col?.glow || 'rgba(124,58,237,0.4)'}` }}
      />

      {/* ── Audio Status Indicator ── */}
      <AnimatePresence>
        {isHovered && !globalMuted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-5 right-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 pointer-events-none shadow-[0_4px_20px_rgba(124,58,237,0.3)]"
          >
            <Volume2 size={12} className="text-white animate-pulse" />
            <span className="text-[10px] font-semibold text-white uppercase tracking-widest mt-px">Audio On</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-5 left-5 z-20 pointer-events-none">
        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.25em]
          text-white bg-gradient-to-r ${col?.bg} shadow-[0_4px_12px_rgba(0,0,0,0.5)] backdrop-blur-md border border-white/20`}>
          {project.category}
        </span>
      </div>

      {/* Floating Play Ring removed for cleaner hover experience */}

      {/* ── Info bar ── */}
      <div className={`absolute bottom-0 left-0 right-0 z-20 p-5 flex flex-col justify-end transition-all duration-700 pointer-events-none
        ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-70'}`}>
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 mb-1">{project.platform}</p>
        <h3 className="text-base md:text-lg font-heading font-semibold text-white leading-tight tracking-tight drop-shadow-2xl line-clamp-2">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
};

// ─── Fullscreen Cinematic Modal ───────────────────────────────────────────────
const VideoModal = ({ project, onClose }) => {
  const videoRef = useRef(null);
  const { isMuted: globalMuted } = useContext(AudioContext);
  const [muted, setMuted] = useState(false); // Default to unmuted for immersive viewing
  const [playing, setPlaying] = useState(true);

  // ─── Force Autoplay Fallback ───
  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Autoplay blocked, retrying muted...");
            setMuted(true);
            videoRef.current.play().catch(e => console.error("Final play attempt failed:", e));
          });
        }
      }
    };

    // Small timeout to ensure video source is ready
    const timer = setTimeout(playVideo, 100);
    return () => clearTimeout(timer);
  }, [project.url]);
  const col = categoryColors[project.category] || categoryColors.Ads;

  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else { videoRef.current.play(); setPlaying(true); }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !muted;
    setMuted(!muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const dur = videoRef.current.duration;
    setCurrentTime(current);
    setProgress((current / dur) * 100);
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const seekTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
    setProgress(e.target.value);
  };

  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/95 backdrop-blur-3xl"
      onClick={onClose}
    >
      {/* ── Ambient glow behind modal ── */}
      <div className="absolute inset-0 bg-gradient-radial opacity-30 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 50%, ${col?.glow || 'rgba(124,58,237,0.3)'}, transparent 70%)` }}
      />

      {/* ── Floating Close Button ── */}
      <button onClick={onClose}
        className="absolute top-6 right-6 md:top-10 md:right-10 z-[9001] w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 hover:scale-110 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group"
      >
        <X size={20} className="group-hover:rotate-90 transition-transform duration-500" />
      </button>

      {/* ── Immersive Video Modal Container ── */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex flex-col items-center justify-center w-full h-full max-h-[100dvh] md:p-12 xl:p-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full md:h-auto md:max-w-5xl md:aspect-video md:rounded-3xl overflow-hidden shadow-[0_0_150px_rgba(0,0,0,0.9)] md:border md:border-white/10 group md:ring-1 md:ring-white/20">

          <video
            ref={videoRef}
            src={project.url}
            poster={getThumbnail(project.url)}
            autoPlay
            playsInline
            muted={muted}
            loop
            className="w-full h-full object-contain md:bg-black"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={() => setDuration(videoRef.current.duration)}
          />

          {/* ── Seek Bar ── */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10 group-hover:h-2 transition-all cursor-pointer z-30">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-40"
            />
            <div
              className={`absolute top-0 left-0 h-full bg-gradient-to-r ${col?.bg} shadow-[0_0_10px_rgba(124,58,237,0.5)] transition-all duration-100`}
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Pause overlay removed as per request for autoplay experience */}

          {/* ── Dynamic Island Style Control Bar ── */}
          <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 px-4 py-3 rounded-full bg-black/60 backdrop-blur-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)] opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out translate-y-4 group-hover:translate-y-0 z-20">

            {/* Play/Pause control removed for non-stop autoplay experience */}

            <button onClick={(e) => { e.stopPropagation(); toggleMute(); }}
              className="w-10 h-10 rounded-full bg-white/10 border border-transparent hover:border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition-all outline-none"
            >
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>

            <div className="w-px h-6 bg-white/10" />

            <div className="flex flex-col pr-2 justify-center min-w-[100px]">
              <div className="flex justify-between items-center mb-0.5">
                <span className={`text-[8px] font-bold uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r ${col?.bg}`}>
                  {project.category}
                </span>
                <span className="text-[9px] font-mono text-white/50">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>
              <span className="text-xs font-medium text-white truncate max-w-[120px] md:max-w-[200px] leading-tight">
                {project.title}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ─── Main Section ─────────────────────────────────────────────────────────────
const PortfolioSection = () => {
  const [filter, setFilter] = useState('All');
  const [activeVideo, setActiveVideo] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(12); // Default to all for desktop

  // ─── Detect Mobile for Initial Limit ───
  useEffect(() => {
    let lastWidth = window.innerWidth;
    const checkMobile = () => {
      if (window.innerWidth === lastWidth) return;
      lastWidth = window.innerWidth;
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setItemsToShow(mobile ? 5 : 100);
    };
    const initMobile = window.innerWidth <= 768;
    setIsMobile(initMobile);
    setItemsToShow(initMobile ? 5 : 100);
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset itemsToShow when filter changes to show only the first few of the new category
  useEffect(() => {
    if (isMobile) setItemsToShow(5);
    else setItemsToShow(100);
  }, [filter, isMobile]);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  const displayedProjects = filtered.slice(0, itemsToShow);
  const hasMore = itemsToShow < filtered.length;

  return (
    <section id="portfolio" className="relative py-28 px-4 md:px-8 overflow-hidden">

      {/* ── Background atmosphere ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/6 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
            </span>
            <span className="text-xs uppercase tracking-[0.35em] text-white/80 font-bold mt-px">Selected Works</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tighter mb-6 text-white">
            Cinematic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary drop-shadow-[0_0_40px_rgba(124,58,237,0.5)]">Brilliance.</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide">
            Explore a curated collection of high-end editing projects that define modern visual storytelling. Hover to listen.
          </p>
        </motion.div>

        {/* ── Filter Tabs ──────────────────────────────────────────────────────── */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {categories.map(cat => {
            const active = filter === cat;
            const col = categoryColors[cat];
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-6 py-3 rounded-full text-sm font-semibold tracking-wider transition-all duration-500 overflow-hidden group
                  ${active
                    ? `text-white bg-black scale-105 border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.8)]`
                    : 'bg-white/[0.03] border border-white/10 text-white/50 hover:text-white hover:bg-white/[0.08]'}`}
              >
                {/* Active intense background glow */}
                {active && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${col?.bg} opacity-20`} />
                )}
                {/* Active inner top border gleam */}
                {active && (
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </motion.div>

        {/* ── Flawless CSS Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 relative z-10">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <VideoCard
                  project={project}
                  onOpen={setActiveVideo}
                  isLarge={project.size === 'large'}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>


        {/* ── View More Button ── */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => setItemsToShow(filtered.length)}
              className="group relative px-10 py-4 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl text-white font-bold tracking-widest uppercase text-xs hover:bg-white/[0.1] hover:border-white/20 transition-all duration-500 shadow-2xl overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              View All {filtered.length} Works
            </button>
          </motion.div>
        )}

        {/* ── Ultra Premium Stats Bar ── */}
        <motion.div
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 lg:p-6 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {[
            { label: 'High-End Edits', value: 500, suffix: '+', color: 'text-white' },
            { label: 'Major Brands', value: 20, suffix: '+', color: 'text-white' },
            { label: 'Global Reaches', value: 1, suffix: 'M+', color: 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent' },
            { label: 'Platforms Mastered', value: 5, suffix: '+', color: 'text-white' },
          ].map((s, i) => (
            <div key={i}
              className="relative flex flex-col items-center justify-center p-6 lg:p-10 rounded-[1.5rem] bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className={`text-4xl md:text-5xl font-heading font-medium tracking-tight mb-3 ${s.color}`}>
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.4em] font-medium text-center">{s.label}</p>
            </div>
          ))}
        </motion.div>

      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal project={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
