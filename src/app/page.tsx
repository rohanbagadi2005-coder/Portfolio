import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import ResumeSection from "@/components/ResumeSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground flex flex-col selection:bg-primary selection:text-black">
      {/* Top Floating Glassmorphic Navbar */}
      <Navbar />

      {/* Fullscreen Cinematic Hero with Uploaded Video Frame Sequence */}
      <Hero />

      {/* Infinite Scrolling Ticker (Robin Ahmed Style) */}
      <Ticker />

      {/* 1. About Me */}
      <About />

      {/* 2. Skills */}
      <Skills />

      {/* 3. Leadership */}
      <Leadership />

      {/* 4. Experience Timeline */}
      <ExperienceTimeline />

      {/* 5. Achievements */}
      <Achievements />

      {/* 6. Projects (Building & Learning) */}
      <Projects />

      {/* 7. Resume Preview & Download */}
      <ResumeSection />

      {/* 8. Contact & Socials */}
      <Contact />

      {/* Footer with Kolhapur Live Time */}
      <Footer />
    </main>
  );
}
