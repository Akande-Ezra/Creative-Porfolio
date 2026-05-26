"use client";

import React, { useState } from "react";
import { PenTool, Mic, Mic2, Play, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "all" | "writer" | "speaker" | "vo";

interface PortfolioItem {
  id: string;
  title: string;
  category: "writer" | "speaker" | "vo";
  description: string;
  image?: string;
  link?: string;
  audio?: string;
}

const mockData: PortfolioItem[] = [
  {
    id: "1",
    title: "The Art of Storytelling",
    category: "writer",
    description: "An essay exploring the depths of narrative structure in modern literature.",
    link: "#",
  },
  {
    id: "2",
    title: "TEDx: Finding Your Voice",
    category: "speaker",
    description: "Keynote address to an audience of 500+ on the power of authentic communication.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop&q=60",
    link: "#",
  },
  {
    id: "3",
    title: "Commercial Reel 2026",
    category: "vo",
    description: "A compilation of recent national broadcast commercial voice over work.",
    audio: "#",
  },
  {
    id: "4",
    title: "Echoes of Tomorrow",
    category: "writer",
    description: "Award-winning short fiction published in The New Yorker.",
    link: "#",
  },
  {
    id: "5",
    title: "Corporate Narration: Tech Innovators",
    category: "vo",
    description: "B2B explainer video voice over for a Fortune 500 tech company.",
    audio: "#",
  },
  {
    id: "6",
    title: "Youth Leadership Summit",
    category: "speaker",
    description: "Interactive workshop on developing leadership skills in young adults.",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&auto=format&fit=crop&q=60",
    link: "#",
  }
];

export function Portfolio() {
  const [filter, setFilter] = useState<Category>("all");

  const filteredItems = filter === "all" ? mockData : mockData.filter(item => item.category === filter);

  return (
    <div className="w-full">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start">
        {[
          { id: "all", label: "All Work" },
          { id: "writer", label: "Writer", icon: <PenTool size={16} /> },
          { id: "speaker", label: "Speaker", icon: <Mic size={16} /> },
          { id: "vo", label: "Voice Over", icon: <Mic2 size={16} /> }
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id as Category)}
            className={cn(
              "flex items-center space-x-2 px-6 py-2 rounded-full border transition-all",
              filter === cat.id
                ? "bg-[var(--color-accent)] border-[var(--color-accent)] text-white shadow-[0_0_15px_rgba(var(--color-accent),0.3)]"
                : "bg-[var(--color-glass)] border-[var(--color-glass-border)] text-foreground/70 hover:text-foreground hover:border-foreground/30"
            )}
          >
            {cat.icon}
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div 
            key={item.id}
            className="group relative bg-[var(--color-glass)] border border-[var(--color-glass-border)] rounded-2xl overflow-hidden hover:border-[var(--color-accent)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--color-accent),0.1)] flex flex-col"
          >
            {/* Image or Pattern Header */}
            <div className="h-48 w-full bg-[#0a0a0a] relative overflow-hidden border-b border-[var(--color-glass-border)]">
              {item.image ? (
                <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
              ) : (
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--color-accent)_0%,_transparent_70%)]" />
              )}
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider border border-white/10 flex items-center space-x-2">
                {item.category === "writer" && <PenTool size={12} className="text-[#10b981]" />}
                {item.category === "speaker" && <Mic size={12} className="text-[#fbbf24]" />}
                {item.category === "vo" && <Mic2 size={12} className="text-[#818cf8]" />}
                <span>{item.category}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-[var(--color-accent)] transition-colors">{item.title}</h3>
              <p className="text-foreground/70 font-light mb-6 flex-grow leading-relaxed">{item.description}</p>
              
              {/* Action Button */}
              {item.audio ? (
                <button className="flex items-center space-x-2 text-sm font-medium hover:text-[var(--color-accent)] transition-colors w-fit">
                  <span className="w-8 h-8 rounded-full bg-[var(--color-glass)] border border-[var(--color-glass-border)] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] group-hover:text-white transition-all">
                    <Play size={14} fill="currentColor" />
                  </span>
                  <span>Listen to Demo</span>
                </button>
              ) : (
                <a href={item.link} className="flex items-center space-x-2 text-sm font-medium hover:text-[var(--color-accent)] transition-colors w-fit">
                  <span>Explore Work</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
