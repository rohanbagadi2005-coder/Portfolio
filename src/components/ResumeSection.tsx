"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  ExternalLink,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Sparkles,
  Maximize2,
} from "lucide-react";

export default function ResumeSection() {
  const [showFullModal, setShowFullModal] = useState(false);

  return (
    <section id="resume" className="relative py-24 md:py-36 px-4 md:px-8 w-full max-w-7xl mx-auto">
      {/* Background glow aura */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col gap-2 mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center gap-2 text-primary font-mono text-xs uppercase tracking-widest font-semibold mb-1">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span>Curriculum Vitae</span>
        </div>
        <h2 className="font-hero text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
          Verified <span className="text-gradient-orange">Resume</span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed mt-2 font-light">
          Review my credentials, educational background, leadership tenures, and technical skills.
        </p>
      </div>

      {/* Main Resume Showcase Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Quick Snapshot & Action Buttons (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6 glass-panel p-8 rounded-3xl border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-hero text-2xl font-bold text-white uppercase">
                  Rohan .R. Bagadi
                </h3>
                <p className="text-xs font-mono text-primary">Official Resume &bull; Updated 2026</p>
              </div>
            </div>

            <p className="text-zinc-300 text-sm leading-relaxed font-light mb-6">
              Comprehensive overview of my academic credentials at KIT&apos;s College of Engineering
              Kolhapur, executive leadership at CABSSA, and ongoing web &amp; AI initiatives.
            </p>

            {/* Quick Key Bullet Highlights */}
            <div className="flex flex-col gap-3.5 pt-4 border-t border-white/10">
              <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>Degree:</strong> S.Y. B.Tech Computer Science &amp; Business Systems
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>Leadership:</strong> Technical Co-head @ CABSSA Executive Council
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>Honor:</strong> “Best Volunteer Award” for TECH-NEGOTIA 2025-26
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>Languages:</strong> C, Python, Java, JavaScript, HTML, CSS
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>Spoken:</strong> English, Hindi, Marathi, German
                </span>
              </div>
            </div>
          </div>

          {/* Action Download & View Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/10">
            <a
              href="/rohan-bagadi-resume.pdf"
              download="Rohan_Bagadi_Resume.pdf"
              className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-primary text-black font-semibold text-sm transition-all duration-300 hover:bg-primary-hover hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href="/rohan-bagadi-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-all duration-300 hover:scale-[1.02]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Fullscreen</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Embedded Resume Preview (7 cols) */}
        <div className="lg:col-span-7 glass-panel p-4 md:p-6 rounded-3xl border-white/10 flex flex-col justify-between relative group overflow-hidden">
          {/* Top Bar of Preview */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>rohan-bagadi-resume.pdf (Single Page Executive)</span>
            </div>
            <a
              href="/rohan-bagadi-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-primary hover:text-white transition-colors"
            >
              <span>Open raw file</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Embedded PDF iframe / high-res visual frame */}
          <div className="relative w-full h-[520px] md:h-[620px] rounded-2xl overflow-hidden bg-[#111116] border border-white/5 shadow-2xl">
            <iframe
              src="/rohan-bagadi-resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
              className="w-full h-full border-0"
              title="Rohan Bagadi Resume Preview"
            />

            {/* Subtle overlay gradient at the bottom for smooth aesthetics */}
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#111116] to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
