"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#060608] pt-16 pb-12 px-4 md:px-8">
      {/* Top subtle orange line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <a
              href="#home"
              className="font-hero text-2xl md:text-3xl font-black uppercase tracking-tight text-white inline-block"
            >
              ROHAN <span className="text-primary font-black">BAGADI</span>
            </a>
            <p className="text-zinc-400 text-xs md:text-sm mt-1 max-w-md font-light">
              B.Tech CSBS &bull; Technical Co-head @ CABSSA &bull; KIT&apos;s College of Engineering
              Kolhapur. Aspiring to engineer resilient AI-powered software systems.
            </p>
          </div>

          {/* Kolhapur Live Time & Status */}
          <div className="flex items-center gap-6">
            <div className="glass-panel px-4 py-2.5 rounded-2xl border-white/5 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                  Kolhapur, India (IST)
                </span>
                <span className="text-xs font-mono font-semibold text-white">
                  {time || "12:00:00 PM"}
                </span>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-primary hover:text-black text-white transition-all duration-300 hover:scale-105"
              aria-label="Back to top"
              title="Return to top of page"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-xs font-mono text-zinc-400">
          <p>
            &copy; {new Date().getFullYear()} Rohan Bagadi. Built with Next.js, GSAP &amp; Framer Motion.
          </p>

          <p className="flex items-center gap-1.5">
            <span>Designed with</span>
            <span className="text-primary">&#10022;</span>
            <span>Inspired by modern luxury web craft</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
