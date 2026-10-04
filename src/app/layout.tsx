import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import GrainOverlay from "@/components/GrainOverlay";

export const metadata: Metadata = {
  title: "Rohan Bagadi | B.Tech CSBS • Technical Co-head @ CABSSA • Aspiring AI Engineer",
  description:
    "Official cinematic portfolio of Rohan Bagadi — Computer Science and Business Systems student at KIT's College of Engineering Kolhapur, Technical Co-head @ CABSSA, and Aspiring AI Engineer.",
  keywords: [
    "Rohan Bagadi",
    "CABSSA",
    "Technical Co-head",
    "KIT Kolhapur",
    "CSBS",
    "Aspiring AI Engineer",
    "Web Developer",
    "Prompt Engineering",
    "TECH-NEGOTIA",
  ],
  authors: [{ name: "Rohan Bagadi", url: "https://www.linkedin.com/in/rohanbagadi" }],
  creator: "Rohan Bagadi",
  openGraph: {
    title: "Rohan Bagadi | B.Tech CSBS & Aspiring AI Engineer",
    description:
      "Explore the cinematic portfolio of Rohan Bagadi — student leader, developer, and aspiring AI engineer.",
    url: "https://rohanbagadi.dev",
    siteName: "Rohan Bagadi Portfolio",
    images: [
      {
        url: "/images/rohan-hero-poster.jpg",
        width: 1280,
        height: 720,
        alt: "Rohan Bagadi Portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#070708",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-primary selection:text-white relative">
        <GrainOverlay />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
