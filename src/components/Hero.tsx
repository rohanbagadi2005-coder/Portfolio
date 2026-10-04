"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Linkedin,
  Sparkles,
  Award,
  Users,
  Code2,
} from "lucide-react";
import HeroVideoCanvas from "./HeroVideoCanvas";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-4 md:px-8 overflow-hidden"
    >
      {/* Cinematic Fullscreen Hero Video Background */}
      <HeroVideoCanvas />

      {/* Main Hero Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto my-auto flex flex-col justify-center">
        {/* Top Tag & Availability Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-3 mb-4 md:mb-6"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-mono font-medium tracking-wide backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            ASPIRING AI ENGINEER &bull; CSBS UNDERGRAD
          </span>

          <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-xs backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Technical Co-head @ CABSSA</span>
          </span>
        </motion.div>

        {/* Large Cinematic Typography (Robin Ahmed Inspired) */}
        <div className="relative">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary font-mono text-sm md:text-base tracking-widest uppercase mb-1 font-semibold"
          >
            Hi, I am
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-hero text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white"
          >
            ROHAN <span className="text-gradient-orange">BAGADI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-3 md:mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed"
          >
            B.Tech Computer Science &amp; Business Systems student at{" "}
            <span className="text-white font-medium">KIT&apos;s College of Engineering</span>.
            Bridging technical precision, web engineering, and modern AI innovation to create
            transformative digital experiences.
          </motion.p>
        </div>

        {/* Floating Stat & Recognition Cards (Inspired by Robin Ahmed Portfolio Layout) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 md:mt-10 max-w-4xl"
        >
          {/* Card 1: CABSSA Role */}
          <div className="glass-panel glass-panel-hover p-4 rounded-2xl flex items-center gap-3.5">
            <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Leadership</p>
              <h3 className="text-sm md:text-base font-semibold text-white">Technical Co-head</h3>
              <p className="text-xs text-zinc-400">CABSSA Student Association</p>
            </div>
          </div>

          {/* Card 2: Recognition */}
          <div className="glass-panel glass-panel-hover p-4 rounded-2xl flex items-center gap-3.5">
            <div className="h-11 w-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Honors</p>
              <h3 className="text-sm md:text-base font-semibold text-white">&quot;Best Volunteer&quot; Award</h3>
              <p className="text-xs text-zinc-400">TECH-NEGOTIA 2025-26</p>
            </div>
          </div>

          {/* Card 3: Domain Focus */}
          <div className="glass-panel glass-panel-hover p-4 rounded-2xl sm:col-span-2 lg:col-span-1 flex items-center gap-3.5">
            <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Specialization</p>
              <h3 className="text-sm md:text-base font-semibold text-white">Web Architecture &amp; AI</h3>
              <p className="text-xs text-zinc-400">Prompting &bull; Generative AI Tools</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Button Group */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-wrap items-center gap-3 md:gap-4 mt-8 md:mt-10"
        >
          {/* Download Resume Button */}
          <a
            href="/rohan-bagadi-resume.pdf"
            download="Rohan_Bagadi_Resume.pdf"
            className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-primary text-black font-semibold text-sm transition-all duration-300 hover:bg-primary-hover hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            <span>Download Resume</span>
          </a>

          {/* Contact Me Button */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium text-sm backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="w-4 h-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Connect on LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rohanbagadi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/10 text-zinc-300 hover:text-white font-medium text-sm backdrop-blur-md transition-all duration-300"
          >
            <Linkedin className="w-4 h-4 text-[#0077B5]" />
            <span className="hidden sm:inline">Connect on</span> LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-20 w-full flex items-center justify-between pt-8 border-t border-white/5 text-xs text-zinc-400 font-mono"
      >
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span>KOLHAPUR, INDIA &bull; S.Y. B.TECH CSBS</span>
        </div>

        <a
          href="#about"
          className="group flex items-center gap-2 hover:text-white transition-colors"
        >
          <span className="tracking-widest uppercase">Scroll to explore</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-transform duration-300 group-hover:translate-y-1">
            <ArrowDown className="w-3 h-3 text-primary animate-bounce" />
          </span>
        </a>
      </motion.div>
    </section>
  );
}
