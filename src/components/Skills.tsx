"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Terminal,
  Cpu,
  Brain,
  Layers,
  Sparkles,
  Users,
  Mic,
  CalendarCheck,
  Workflow,
  Globe,
  Database,
} from "lucide-react";

interface SkillItem {
  name: string;
  category: "languages" | "ai" | "web" | "leadership";
  level: string;
  icon: any;
  highlight: string;
  tags: string[];
}

const skillsData: SkillItem[] = [
  {
    name: "Python",
    category: "languages",
    level: "Advanced",
    icon: Terminal,
    highlight: "Core language for algorithms, scripting, and GenAI integrations.",
    tags: ["Data Logic", "Automation", "AI Tooling"],
  },
  {
    name: "Java",
    category: "languages",
    level: "Proficient",
    icon: Cpu,
    highlight: "Object-oriented programming, data structures, and enterprise CSBS principles.",
    tags: ["OOP", "Data Structures", "Backend Logic"],
  },
  {
    name: "C Language",
    category: "languages",
    level: "Proficient",
    icon: Code,
    highlight: "Low-level memory management, pointers, and foundational computation.",
    tags: ["Memory Mgmt", "Algorithms", "Core CS"],
  },
  {
    name: "JavaScript",
    category: "languages",
    level: "Advanced",
    icon: Workflow,
    highlight: "Modern ES6+, asynchronous programming, and interactive UI logic.",
    tags: ["ES6+", "Async/Await", "DOM APIs"],
  },
  {
    name: "Web Development",
    category: "web",
    level: "Advanced",
    icon: Globe,
    highlight: "Full architectural design of responsive, fast, high-performance web applications.",
    tags: ["Next.js", "Tailwind CSS", "Architecture"],
  },
  {
    name: "HTML5 & CSS3",
    category: "web",
    level: "Expert",
    icon: Layers,
    highlight: "Semantic HTML, modern CSS grid/flexbox, animations, and glassmorphism.",
    tags: ["Semantic Markup", "Responsive", "Glassmorphism"],
  },
  {
    name: "Prompt Engineering",
    category: "ai",
    level: "Advanced",
    icon: Sparkles,
    highlight: "Context framing, few-shot prompting, and chain-of-thought system prompts.",
    tags: ["System Prompts", "Few-Shot", "AI Orchestration"],
  },
  {
    name: "Generative AI Tools",
    category: "ai",
    level: "Advanced",
    icon: Brain,
    highlight: "Leveraging LLMs, automated agents, and vision models to accelerate workflows.",
    tags: ["LLM Workflows", "Agentic AI", "Model Tuning"],
  },
  {
    name: "Team Leadership",
    category: "leadership",
    level: "Elected Lead",
    icon: Users,
    highlight: "Serving as Technical Co-head @ CABSSA, mentoring peers and guiding teams.",
    tags: ["CABSSA", "Mentorship", "Execution"],
  },
  {
    name: "Event Management",
    category: "leadership",
    level: "Awarded Lead",
    icon: CalendarCheck,
    highlight: "Assisted organizing TECH-NEGOTIA symposium, earning the 'Best Volunteer' award.",
    tags: ["TECH-NEGOTIA", "Logistics", "Operations"],
  },
  {
    name: "Public Speaking",
    category: "leadership",
    level: "Proficient",
    icon: Mic,
    highlight: "Technical presentations, community orientation, and symposium moderation.",
    tags: ["Presentations", "Keynotes", "Debate"],
  },
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "languages", label: "Languages" },
  { id: "ai", label: "AI & Future Tech" },
  { id: "web", label: "Web Engineering" },
  { id: "leadership", label: "Leadership & Impact" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="relative py-24 md:py-36 px-4 md:px-8 w-full max-w-7xl mx-auto">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-widest font-semibold mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>Technical &amp; Leadership Repertoire</span>
          </div>
          <h2 className="font-hero text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
            Skills &amp; <span className="text-gradient-orange">Capabilities</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 glass-pill p-1.5 rounded-2xl border-white/10 bg-white/[0.02]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium tracking-wider transition-all duration-200 ${
                activeTab === cat.id
                  ? "bg-primary text-black font-semibold shadow-glow"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Card Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence>
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative glass-panel glass-panel-hover p-6 rounded-2xl border-white/10 overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle top corner gradient accent */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />

                <div>
                  {/* Top Bar: Icon + Level Badge */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono tracking-wider border border-primary/30 bg-primary/10 text-primary font-semibold">
                      {skill.level}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className="font-hero text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>

                  {/* Highlight sentence */}
                  <p className="mt-2 text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                    {skill.highlight}
                  </p>
                </div>

                {/* Bottom Tags */}
                <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-white/5">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white/[0.03] text-[10px] font-mono text-zinc-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
