"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Play, RefreshCw } from "lucide-react";

export default function HeroVideoCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Scroll parallax effects
  const { scrollY } = useScroll();
  const videoScale = useTransform(scrollY, [0, 800], [1, 1.12]);
  const videoOpacity = useTransform(scrollY, [0, 600], [1, 0.35]);
  const videoTranslateY = useTransform(scrollY, [0, 800], [0, 150]);

  // Subtle mouse interactive parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* Dynamic Background Aura Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[85vw] max-w-[900px] h-[85vh] max-h-[750px] rounded-full bg-gradient-to-tr from-primary/30 via-orange-600/15 to-transparent blur-[120px] transform-gpu pointer-events-none animate-pulse-slow" />
      </div>

      {/* Video Container with Parallax & Breathe */}
      <motion.div
        style={{
          scale: videoScale,
          opacity: videoOpacity,
          y: videoTranslateY,
          x: mouseOffset.x,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 20 }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Seamless looping 48fps interpolated video generated exclusively from 240 frames */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/rohan-hero-poster.jpg"
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover object-center filter contrast-[1.08] brightness-[0.96] transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-90" : "opacity-0"
          }`}
        >
          <source src="/videos/hero-loop-smooth.mp4" type="video/mp4" />
          <source src="/videos/hero-seamless-loop.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Fallback image if video is initializing */}
        {!isVideoLoaded && (
          <img
            src="/images/rohan-hero-poster.jpg"
            alt="Rohan Bagadi Hero Frame"
            className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.08] brightness-[0.96]"
          />
        )}
      </motion.div>

      {/* Cinematic Studio Gradient Vignettes - Blending video edges seamlessly into deep black */}
      {/* Top gradient for navbar readability */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#070708] via-[#070708]/70 to-transparent z-10" />

      {/* Bottom deep fade gradient into the About section */}
      <div className="absolute inset-x-0 bottom-0 h-72 md:h-96 bg-gradient-to-t from-[#070708] via-[#070708]/85 to-transparent z-10" />

      {/* Left and right subtle side vignettes */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#070708] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#070708] to-transparent z-10" />

      {/* Center atmospheric radial mask */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(7,7,8,0.75)_100%)] z-10" />

      {/* Asset Badge in Bottom Corner */}
      <div className="absolute bottom-6 left-6 z-20 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-[11px] font-mono text-zinc-400">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>CINEMATIC SEQUENCE &bull; 240 FRAMES &bull; 48FPS INTERPOLATED</span>
      </div>
    </div>
  );
}
