"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe2,
  Users2,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Compass,
} from "lucide-react";

const languages = [
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Fluent" },
  { name: "Marathi", level: "Native" },
  { name: "German", level: "Elementary" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 px-4 md:px-8 w-full max-w-7xl mx-auto">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />

      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span>About Me</span>
        </div>
        <h2 className="font-hero text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white max-w-4xl">
          Bridging Computer Science &amp; Business Strategy with{" "}
          <span className="text-gradient-orange">Artificial Intelligence.</span>
        </h2>
      </div>

      {/* Main Grid: Narrative & Interactive Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Left Column: Narrative Story (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-base md:text-lg text-zinc-300 leading-relaxed font-light">
          <p>
            I am <strong className="text-white font-medium">Rohan Bagadi</strong>, a second-year
            Computer Science and Business Systems (CSBS) student at{" "}
            <span className="text-white font-normal underline decoration-primary/50 underline-offset-4">
              KIT&apos;s College of Engineering Kolhapur
            </span>
            . My educational background is uniquely structured at the crossroads of rigorous software
            engineering principles and modern organizational business systems.
          </p>

          <p>
            As the elected <strong className="text-primary font-semibold">Technical Co-head at CABSSA</strong>{" "}
            (Computer Science &amp; Business Systems Student Association), I don&apos;t just study technology—I
            orchestrate it. Having served as a dedicated volunteer and received the{" "}
            <span className="text-white font-medium">“Best Volunteer Award”</span> for orchestrating{" "}
            <strong className="text-white">TECH-NEGOTIA</strong>, I coordinate multi-disciplinary teams,
            manage technical event architectures, and build digital platforms that empower hundreds of peers.
          </p>

          <p>
            My technical focus centers on <strong className="text-white">Full-Stack Web Development</strong>,{" "}
            <strong className="text-white">Prompt Engineering</strong>, and the practical application of{" "}
            <strong className="text-white">Generative AI Tools</strong>. I believe that artificial
            intelligence is the great multiplier: when combined with thoughtful design and solid backend
            fundamentals, it allows developers to build systems that scale effortlessly.
          </p>

          {/* Core Values / Strengths */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="glass-panel p-4 rounded-xl border-white/5 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Engineering Rigor</h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Proficient in C, Python, Java, and modern web frameworks with clean architecture.
                </p>
              </div>
            </div>

            <div className="glass-panel p-4 rounded-xl border-white/5 flex items-start gap-3">
              <Compass className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-semibold text-white">Leadership &amp; Execution</h4>
                <p className="text-xs text-zinc-400 mt-1">
                  Proven track record of coordinating large-scale symposiums and technical teams.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Profile & Fast Stats (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Portrait & Title Card */}
          <div className="glass-panel p-6 rounded-3xl border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-primary/40 shadow-glow shrink-0">
                <img
                  src="/images/rohan-portrait.jpg"
                  alt="Rohan Bagadi"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="font-hero text-xl font-bold text-white uppercase">Rohan .R. Bagadi</h3>
                <p className="text-xs font-mono text-primary font-medium">B.Tech CSBS &bull; 2024 - 2028</p>
                <p className="text-xs text-zinc-400 mt-0.5">KIT&apos;s College of Engineering Kolhapur</p>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-xs text-zinc-400 font-mono">Current Status</span>
                <p className="text-sm font-bold text-white mt-0.5">S.Y. B.Tech (CSBS)</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-xs text-zinc-400 font-mono">Association</span>
                <p className="text-sm font-bold text-primary mt-0.5">CABSSA Co-head</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-xs text-zinc-400 font-mono">Major Recognition</span>
                <p className="text-sm font-bold text-amber-400 mt-0.5">Best Volunteer &apos;25</p>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-xs text-zinc-400 font-mono">Future Vision</span>
                <p className="text-sm font-bold text-white mt-0.5">AI Systems &amp; Labs</p>
              </div>
            </div>

            {/* Multilingual proficiency from resume */}
            <div className="mt-5 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-zinc-400">
                <Globe2 className="w-3.5 h-3.5 text-primary" />
                <span>Languages Spoken</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs"
                  >
                    <span className="text-white font-medium">{lang.name}</span>
                    <span className="text-[10px] font-mono text-zinc-400">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
