"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme, Mood } from "./ThemeProvider";
import { Menu, X, PenTool, Mic, Mic2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { mood, setMood } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const moodOptions: { id: Mood; label: string; icon: React.ReactNode }[] = [
    { id: "writer", label: "Writer", icon: <PenTool size={16} /> },
    { id: "speaker", label: "Speaker", icon: <Mic size={16} /> },
    { id: "vo", label: "Voice Over", icon: <Mic2 size={16} /> },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-[var(--color-glass-border)] shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold tracking-tighter">
          Creative<span className="text-[var(--color-accent)] transition-colors duration-500">Hub</span>.
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 text-sm font-medium">
            <Link href="#portfolio" className="hover:text-[var(--color-accent)] transition-colors">Portfolio</Link>
            <Link href="#gallery" className="hover:text-[var(--color-accent)] transition-colors">Gallery</Link>
            <Link href="#contact" className="hover:text-[var(--color-accent)] transition-colors">Contact</Link>
          </div>

          <div className="h-6 w-px bg-[var(--color-glass-border)]" />

          {/* Mood Switcher */}
          <div className="flex bg-[var(--color-glass)] p-1 rounded-full border border-[var(--color-glass-border)]">
            {moodOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setMood(option.id)}
                className={cn(
                  "flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
                  mood === option.id
                    ? "bg-[var(--color-accent)] text-white shadow-md"
                    : "text-foreground/70 hover:text-foreground hover:bg-[var(--color-glass)]"
                )}
              >
                {option.icon}
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-[var(--color-glass-border)] p-6 flex flex-col space-y-6">
          <div className="flex flex-col space-y-4 text-lg">
            <Link href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</Link>
            <Link href="#gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
            <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-sm text-foreground/50 uppercase tracking-widest font-semibold mb-2">Select Persona</p>
            {moodOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  setMood(option.id);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all",
                  mood === option.id
                    ? "bg-[var(--color-accent)] text-white"
                    : "bg-[var(--color-glass)] border border-[var(--color-glass-border)]"
                )}
              >
                {option.icon}
                <span className="font-medium">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
