"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Brain,
  Sparkles,
  Layers,
  ArrowUpRight,
  Code2,
  Clock,
  Terminal,
  Activity,
  Cpu,
} from "lucide-react";

interface BuildingProject {
  title: string;
  stage: string;
  stageColor: string;
  progress: number;
  icon: any;
  category: string;
  description: string;
  keyFeatures: string[];
  techStack: string[];
  eta: string;
}

const buildingProjects: BuildingProject[] = [
  {
    title: "CABSSA Official Portal",
    stage: "In Active Development",
    stageColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
    progress: 75,
    icon: Globe,
    category: "Full-Stack Web Engineering",
    description:
      "Developing a responsive, high-performance web platform for the Computer Science & Business Systems Student Association at KIT Kolhapur. Centralizes student symposium registrations, announcements, and technical resources.",
    keyFeatures: [
      "Responsive luxury UI with accessible design system",
      "Symposium registration & event catalog architecture",
      "Department resource library & executive showcase",
    ],
    techStack: ["Next.js 15", "Tailwind CSS", "TypeScript", "Framer Motion"],
    eta: "Q2 2026",
  },
  {
    title: "AI-Guide & Guided Project Platform",
    stage: "Concept & Prototyping",
    stageColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    progress: 40,
    icon: Brain,
    category: "Generative AI & EdTech",
    description:
      "Collaborating on an intelligent learning platform that scaffolds real-world software projects for beginners through guided prompting, contextual code reviews, and structured milestones.",
    keyFeatures: [
      "Prompt-guided step-by-step coding milestones",
      "Contextual LLM hints without giving direct solutions",
      "Personalized learning trajectory based on student pace",
    ],
    techStack: ["Python", "Generative AI APIs", "Prompt Engineering", "React"],
    eta: "Concept Stage",
  },
  {
    title: "Autonomous Agent Exploration Lab",
    stage: "Research & Prototyping",
    stageColor: "text-primary border-primary/30 bg-primary/10",
    progress: 25,
    icon: Cpu,
    category: "AI Engineering & Systems",
    description:
      "Experimental testbed researching multi-agent reasoning, automated tool calling, and local LLM workflows for developer productivity and workflow automation.",
    keyFeatures: [
      "Multi-agent task decomposition experiments",
      "Context-window optimization & memory trees",
      "Open-source workflow blueprints",
    ],
    techStack: ["Python", "Agentic Frameworks", "Vector Stores", "LLMs"],
    eta: "Future Roadmap",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-36 px-4 md:px-8 w-full max-w-7xl mx-auto">
      {/* Background glow aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col gap-2 mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center gap-2 text-primary font-mono text-xs uppercase tracking-widest font-semibold mb-1">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span>Building &amp; Learning</span>
        </div>
        <h2 className="font-hero text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
          Active <span className="text-gradient-orange">Creations</span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed mt-2 font-light">
          An honest, transparent view into what I am actively architecting, prototyping, and
          refining right now.
        </p>
      </div>

      {/* Futuristic Project Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {buildingProjects.map((project) => {
          const Icon = project.icon;
          return (
            <div
              key={project.title}
              className="group relative glass-panel glass-panel-hover p-7 rounded-3xl border-white/10 flex flex-col justify-between overflow-hidden"
            >
              {/* Top glow accent */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Header: Icon + Stage Badge */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="h-12 w-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider border font-medium ${project.stageColor}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                    <span>{project.stage}</span>
                  </span>
                </div>

                {/* Category & Title */}
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-hero text-2xl font-bold text-white mt-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Progress Bar Component */}
                <div className="mt-5 mb-5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                    <span className="text-zinc-400">Development Progress</span>
                    <span className="text-primary font-bold">{project.progress}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-orange-400 transition-all duration-1000 ease-out"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-300 text-xs md:text-sm leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Feature Checklist */}
                <div className="mt-5 pt-4 border-t border-white/5 flex flex-col gap-2">
                  {project.keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-400 font-light">
                      <span className="text-primary font-mono text-xs">&#8250;</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tech Tags + Timeline Indicator */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col gap-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span>Timeline:</span>
                  </span>
                  <span className="text-white font-medium">{project.eta}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-zinc-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Info Note */}
      <div className="mt-12 text-center">
        <p className="text-xs font-mono text-zinc-400">
          Interested in collaborating on these open builds or learning platforms?{" "}
          <a href="#contact" className="text-primary underline underline-offset-4 hover:text-white">
            Get in touch
          </a>
        </p>
      </div>
    </section>
  );
}
