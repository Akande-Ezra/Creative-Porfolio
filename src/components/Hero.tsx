"use client";

import React, { useState, useRef } from "react";
import { Volume2, VolumeX, ArrowDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

export function Hero() {
  const { mood } = useTheme();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-background/70 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
        
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="object-cover w-full h-full opacity-60"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-23652-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto mt-16">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-6">
          Crafting <span className="text-[var(--color-accent)] transition-colors duration-500 italic">Narratives</span>
          <br /> That Resonate.
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl font-light mb-10">
          Writer. Speaker. Voice Over Artist. <br className="md:hidden"/> Bringing stories to life across every medium.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white rounded-full font-medium text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
          >
            Book Me
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 bg-[var(--color-glass)] border border-[var(--color-glass-border)] hover:bg-white/10 text-foreground rounded-full font-medium text-lg transition-all text-center"
          >
            Explore Work
          </a>
        </div>
      </div>

      {/* Audio Toggle */}
      <button
        onClick={toggleAudio}
        className="absolute bottom-8 right-6 md:bottom-12 md:right-8 z-30 p-3 bg-[var(--color-glass)] backdrop-blur-md border border-[var(--color-glass-border)] rounded-full hover:bg-white/10 transition-all group"
        aria-label="Toggle Audio"
      >
        {isMuted ? (
          <VolumeX size={24} className="text-foreground/70 group-hover:text-foreground" />
        ) : (
          <Volume2 size={24} className="text-[var(--color-accent)]" />
        )}
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
        <span className="text-xs uppercase tracking-widest text-foreground/50 mb-2 font-semibold">Discover</span>
        <ArrowDown size={20} className="text-[var(--color-accent)]" />
      </div>
    </section>
  );
}
