"use client";

const tickerItems = [
  "B.TECH CSBS @ KIT KOLHAPUR",
  "TECHNICAL CO-HEAD @ CABSSA",
  "BEST VOLUNTEER AWARD 2025-26",
  "ASPIRING AI ENGINEER",
  "WEB ARCHITECTURE & DEVELOPMENT",
  "PROMPT ENGINEERING & GENAI",
  "TECH-NEGOTIA SYMPOSIUM LEAD",
  "COMMUNITY & TEAM LEADERSHIP",
];

export default function Ticker() {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-[#0c0c10] py-4 md:py-6">
      {/* Subtle orange glow line */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Fade masks on sides */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div key={index} className="flex items-center mx-4 md:mx-8">
            <span className="font-hero text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors">
              {item}
            </span>
            <span className="mx-4 md:mx-8 text-primary text-lg md:text-2xl select-none">
              &#10022;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
