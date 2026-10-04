"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  BookOpen,
  Users2,
  Sparkles,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

const achievementsList = [
  {
    title: "Best Volunteer Award",
    subtitle: "Conferred by CABSSA &amp; TECH-NEGOTIA 2025-26",
    category: "Honors &amp; Awards",
    icon: Trophy,
    color: "from-amber-500/20 via-orange-500/10 to-transparent",
    badge: "Top Contributor",
    description:
      "Awarded for exceptional commitment, relentless work ethic, and superior event execution during the college's flagship technical symposium TECH-NEGOTIA.",
    metrics: "Recognized among entire volunteer cohort",
    tags: ["TECH-NEGOTIA", "CABSSA", "Excellence", "Event Operations"],
  },
  {
    title: "Technical Co-head Appointment",
    subtitle: "Computer Science &amp; Business Systems Association",
    category: "Leadership Election",
    icon: Award,
    color: "from-primary/20 via-orange-600/10 to-transparent",
    badge: "Core Executive",
    description:
      "Elected to the prestigious Executive Council of CABSSA to spearhead the department's digital infrastructure, developer initiatives, and technical symposiums.",
    metrics: "Direct leadership of student technical wing",
    tags: ["Executive Council", "Technical Strategy", "Mentorship"],
  },
  {
    title: "Academic Distinction in CSBS",
    subtitle: "KIT's College of Engineering Kolhapur",
    category: "Academic Standing",
    icon: BookOpen,
    color: "from-blue-500/20 via-indigo-500/10 to-transparent",
    badge: "S.Y. B.Tech",
    description:
      "Maintaining strong scholastic performance across core computer science subjects, algorithmic foundations, business dynamics, and modern software architectures.",
    metrics: "Specialized dual CS &amp; Business curriculum",
    tags: ["Data Structures", "Algorithms", "Business Systems"],
  },
  {
    title: "Leadership Contributions &amp; Community Impact",
    subtitle: "Symposium Logistics &amp; Student Coordination",
    category: "Impact Milestone",
    icon: Users2,
    color: "from-emerald-500/20 via-teal-500/10 to-transparent",
    badge: "300+ Students",
    description:
      "Successfully orchestrated team communications and participant engagement for 300+ symposium attendees, establishing a high benchmark for future student events.",
    metrics: "Zero-friction event flow &amp; team synergy",
    tags: ["Public Speaking", "Team Coordination", "Logistics"],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-36 px-4 md:px-8 w-full max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col gap-2 mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center gap-2 text-primary font-mono text-xs uppercase tracking-widest font-semibold mb-1">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span>Honors &amp; Recognitions</span>
        </div>
        <h2 className="font-hero text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
          Achievements &amp; <span className="text-gradient-orange">Milestones</span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed mt-2 font-light">
          Celebrating dedication, verified impact, and earned trust in technology and leadership.
        </p>
      </div>

      {/* Achievement Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievementsList.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group relative glass-panel glass-panel-hover p-8 rounded-3xl border-white/10 flex flex-col justify-between overflow-hidden"
            >
              {/* Corner ambient glow */}
              <div
                className={`absolute -top-10 -right-10 w-44 h-44 rounded-full bg-gradient-to-br ${item.color} blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500`}
              />

              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="h-14 w-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider border border-primary/30 bg-primary/10 text-primary font-semibold">
                    {item.badge}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                  {item.category}
                </span>

                <h3 className="font-hero text-2xl font-bold text-white mt-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p
                  className="text-xs font-mono text-primary/90 mt-0.5"
                  dangerouslySetInnerHTML={{ __html: item.subtitle }}
                />

                <p className="text-zinc-300 text-sm mt-4 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Bottom Metric & Tags */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 mb-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item.metrics}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full bg-white/[0.03] text-[10px] font-mono text-zinc-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
