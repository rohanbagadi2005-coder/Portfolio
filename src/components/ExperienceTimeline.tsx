"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Award,
  Calendar,
  CheckCircle2,
  Users,
  Compass,
  ArrowRight,
} from "lucide-react";

interface TimelineItem {
  period: string;
  role: string;
  organization: string;
  badge?: string;
  badgeColor?: string;
  description: string;
  achievements: string[];
  skills: string[];
}

const experiences: TimelineItem[] = [
  {
    period: "2025 - Present",
    role: "Technical Co-head",
    organization: "CABSSA (CSBS Student Association)",
    badge: "Elected Leadership",
    badgeColor: "border-primary/40 bg-primary/10 text-primary",
    description:
      "Promoted to executive technical leadership to oversee the digital strategy, student technical initiatives, and web platforms for the CSBS student community.",
    achievements: [
      "Architecting and supervising the development of the official CABSSA web portal.",
      "Leading technical logistics, workshops, and student mentorship sessions.",
      "Liaising directly with faculty coordinators and executive student council.",
    ],
    skills: ["Team Leadership", "Web Architecture", "Technical Management", "Mentorship"],
  },
  {
    period: "2025 - 2026",
    role: "Volunteer & Event Coordinator",
    organization: "CABSSA — TECH-NEGOTIA Symposium",
    badge: "Awarded 'Best Volunteer'",
    badgeColor: "border-amber-400/40 bg-amber-400/10 text-amber-300",
    description:
      "Crucial organizational contributor for the marquee annual technical symposium TECH-NEGOTIA at KIT's College of Engineering.",
    achievements: [
      "Assisted in end-to-end planning and execution of TECH-NEGOTIA technical events.",
      "Coordinated with inter-college teams to ensure seamless stage and tech execution.",
      "Supported 300+ participant management and real-time operational logistics.",
      "Conferred the prestigious “BEST VOLUNTEER” award for exemplary dedication and high impact.",
    ],
    skills: ["Event Organization", "Participant Management", "Team Collaboration", "Operations"],
  },
  {
    period: "2024 - Present",
    role: "B.Tech Student & Technical Contributor",
    organization: "KIT's College of Engineering Kolhapur",
    badge: "Academic Pursuits",
    badgeColor: "border-zinc-500/40 bg-zinc-500/10 text-zinc-300",
    description:
      "Pursuing a specialized degree in Computer Science and Business Systems (CSBS), uniting algorithmic problem-solving with business economics and artificial intelligence.",
    achievements: [
      "Mastering core programming in C, Python, Java, and modern JavaScript.",
      "Exploring generative AI, prompt engineering frameworks, and full-stack responsive web design.",
      "Consistently active in peer-to-peer coding groups and student hack initiatives.",
    ],
    skills: ["CSBS", "Algorithms", "Prompt Engineering", "Full-Stack Dev"],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-24 md:py-36 px-4 md:px-8 w-full max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col gap-2 mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center gap-2 text-primary font-mono text-xs uppercase tracking-widest font-semibold mb-1">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span>Milestones &amp; Responsibilities</span>
        </div>
        <h2 className="font-hero text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
          Journey &amp; <span className="text-gradient-orange">Experience</span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed mt-2 font-light">
          An evolving track record of student leadership, technical execution, and community service.
        </p>
      </div>

      {/* Vertical Animated Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central glowing vertical track */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-white/10 md:-translate-x-[1px]" />

        <div className="flex flex-col gap-12">
          {experiences.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.role + index}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Central Node Indicator */}
                <div className="absolute left-4 md:left-1/2 top-5 -translate-x-1/2 z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary bg-[#080808] shadow-glow">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </div>

                {/* Content Card (Half width on desktop) */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                  <div className="glass-panel glass-panel-hover p-6 md:p-8 rounded-2xl border-white/10 relative overflow-hidden">
                    {/* Period & Badge Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        <span>{item.period}</span>
                      </span>

                      {item.badge && (
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider border font-medium ${item.badgeColor}`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>

                    {/* Role & Org */}
                    <h3 className="font-hero text-xl md:text-2xl font-bold text-white">
                      {item.role}
                    </h3>
                    <p className="text-xs font-mono text-primary font-medium mt-0.5">
                      {item.organization}
                    </p>

                    {/* Description */}
                    <p className="text-xs md:text-sm text-zinc-300 font-light mt-3 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="mt-4 pt-3 border-t border-white/5 flex flex-col gap-2">
                      {item.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1.5 mt-5 pt-3 border-t border-white/5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-zinc-300 border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
