"use client";

import { motion } from "framer-motion";
import {
  Users,
  ShieldCheck,
  Calendar,
  Layers,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
} from "lucide-react";

const leadershipPillars = [
  {
    title: "Technical Management",
    role: "Core Technical Architect",
    icon: Layers,
    description:
      "Spearheading the engineering and deployment of CABSSA's official digital platform. Enforcing code quality, modern tech stack adoption (Next.js & Tailwind), and guiding students on best practices.",
    stat: "100%",
    statLabel: "Modern Tech Standards",
  },
  {
    title: "Event Planning & Execution",
    role: "Symposium Co-organizer",
    icon: Calendar,
    description:
      "Played a pivotal role in organizing TECH-NEGOTIA, managing schedule synchronization, guest speaker coordination, and real-time operational contingencies.",
    stat: "300+",
    statLabel: "Participants Managed",
  },
  {
    title: "Team Coordination",
    role: "Cross-Functional Sync",
    icon: Users,
    description:
      "Directing volunteer squads, delegating responsibilities, and ensuring open communication channels between faculty, committee heads, and student teams.",
    stat: "20+",
    statLabel: "Volunteer Committee",
  },
  {
    title: "Community Building",
    role: "Peer Mentorship & Growth",
    icon: ShieldCheck,
    description:
      "Cultivating an open engineering culture within the CSBS department, hosting interactive discussions on prompt engineering, generative AI tools, and full-stack development.",
    stat: "150+",
    statLabel: "Students Impacted",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="relative py-24 md:py-36 px-4 md:px-8 w-full max-w-7xl mx-auto">
      {/* Background glow aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col gap-2 mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center gap-2 text-primary font-mono text-xs uppercase tracking-widest font-semibold mb-1">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span>Organizational Impact</span>
        </div>
        <h2 className="font-hero text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
          Leadership at <span className="text-gradient-orange">CABSSA</span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed mt-2 font-light">
          Serving as the Technical Co-head for the Computer Science &amp; Business Systems Student
          Association at KIT&apos;s College of Engineering Kolhapur.
        </p>
      </div>

      {/* Spotlight Banner: Co-head Mission */}
      <div className="relative glass-panel p-8 md:p-10 rounded-3xl border-white/10 mb-12 overflow-hidden">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs font-mono font-medium mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Executive Committee 2025 - 2026</span>
            </div>
            <h3 className="font-hero text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Driving Technical Innovation &amp; Student Synergy
            </h3>
            <p className="text-zinc-300 text-sm md:text-base mt-3 leading-relaxed font-light">
              As Technical Co-head, I bridge the gap between academic theory and real-world tech
              execution. My mission is to empower peers to build impactful digital products, master
              modern development tooling, and organize events that leave an indelible mark on our college
              community.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Position</span>
              <p className="text-lg font-bold text-white mt-0.5">Technical Co-head</p>
              <p className="text-xs text-primary font-mono mt-0.5">CABSSA Executive Body</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Flagship Event</span>
              <p className="text-lg font-bold text-white mt-0.5">TECH-NEGOTIA</p>
              <p className="text-xs text-zinc-400 mt-0.5">State-level Technical Symposium</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {leadershipPillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.title}
              className="glass-panel glass-panel-hover p-6 md:p-8 rounded-2xl border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-xl md:text-2xl font-black text-white font-hero">
                      {pillar.stat}
                    </span>
                    <p className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase">
                      {pillar.statLabel}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono text-primary uppercase tracking-wider">
                  {pillar.role}
                </span>
                <h3 className="font-hero text-xl font-bold text-white mt-1">
                  {pillar.title}
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm mt-3 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Active Leadership Responsibility</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
