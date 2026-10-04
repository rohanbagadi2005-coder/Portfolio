"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Clock,
} from "lucide-react";

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-36 px-4 md:px-8 w-full max-w-7xl mx-auto">
      {/* Background glow aura */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[170px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col gap-2 mb-16 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center gap-2 text-primary font-mono text-xs uppercase tracking-widest font-semibold mb-1">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span>Get In Touch</span>
        </div>
        <h2 className="font-hero text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white">
          Let&apos;s Build <span className="text-gradient-orange">Together.</span>
        </h2>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed mt-2 font-light">
          Whether you want to discuss AI engineering opportunities, web development, or CABSSA
          initiatives, feel free to reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Contact Info & Socials (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Availability Card */}
          <div className="glass-panel p-6 rounded-3xl border-white/10 relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Internships &amp; Collaborations</span>
            </div>
            <h3 className="font-hero text-xl font-bold text-white">
              Open to New Opportunities
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm mt-2 leading-relaxed font-light">
              Currently open for Summer 2026 AI / Web development internships, student leadership
              exchanges, and hackathon partnerships.
            </p>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span>Kolhapur, MH, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-primary" />
                <span>IST (UTC+5:30)</span>
              </div>
            </div>
          </div>

          {/* Direct Channels Cards */}
          <div className="flex flex-col gap-3">
            {/* Email Card */}
            <div className="glass-panel p-4 rounded-2xl border-white/10 flex items-center justify-between gap-4 group">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Email Address</span>
                  <a
                    href="mailto:rohanbagadi2005@gmail.com"
                    className="block text-sm font-semibold text-white hover:text-primary transition-colors truncate"
                  >
                    rohanbagadi2005@gmail.com
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard("rohanbagadi2005@gmail.com", "email")}
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/10 text-zinc-400 hover:text-white border border-white/5 transition-colors shrink-0"
                title="Copy email to clipboard"
              >
                {copiedField === "email" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-4 rounded-2xl border-white/10 flex items-center justify-between gap-4 group">
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Direct Phone</span>
                  <a
                    href="tel:+918237012005"
                    className="block text-sm font-semibold text-white hover:text-primary transition-colors truncate"
                  >
                    +91 8237012005
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard("+918237012005", "phone")}
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/10 text-zinc-400 hover:text-white border border-white/5 transition-colors shrink-0"
                title="Copy phone to clipboard"
              >
                {copiedField === "phone" ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/rohanbagadi"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover p-4 rounded-2xl border-white/10 flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-11 w-11 rounded-xl bg-[#0077B5]/15 border border-[#0077B5]/30 flex items-center justify-center text-[#0077B5] shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">LinkedIn Profile</span>
                  <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors truncate">
                    linkedin.com/in/rohanbagadi
                  </p>
                </div>
              </div>

              <div className="p-2 text-zinc-400 group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/rohanbagadi2005-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover p-4 rounded-2xl border-white/10 flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">GitHub Workspace</span>
                  <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors truncate">
                    github.com/rohanbagadi2005-coder
                  </p>
                </div>
              </div>

              <div className="p-2 text-zinc-400 group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Direct Interactive Message Form (7 cols) */}
        <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border-white/10 relative overflow-hidden">
          <h3 className="font-hero text-2xl font-bold text-white mb-2">
            Send a Direct Message
          </h3>
          <p className="text-zinc-400 text-xs md:text-sm mb-6 font-light">
            Fill out the form below to reach Rohan directly for inquiries, technical projects, or
            leadership speaking.
          </p>

          {formSubmitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="h-14 w-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="font-hero text-xl font-bold text-white">Message Dispatched!</h4>
              <p className="text-zinc-400 text-xs md:text-sm mt-1 max-w-sm">
                Thank you for reaching out. Rohan Bagadi will review your message and reply promptly.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-6 text-xs font-mono text-primary underline underline-offset-4 hover:text-white"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@domain.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. AI Internship / CABSSA Collaboration"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, idea, or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-2 group inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-primary text-black font-semibold text-sm transition-all duration-300 hover:bg-primary-hover hover:shadow-glow hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Transmit Message</span>
                <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
