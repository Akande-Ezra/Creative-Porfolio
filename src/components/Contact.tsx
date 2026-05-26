"use client";

import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-[var(--color-glass)] border border-[var(--color-glass-border)] rounded-3xl text-center">
        <div className="w-20 h-20 bg-[var(--color-accent)]/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="text-[var(--color-accent)]" size={40} />
        </div>
        <h3 className="text-3xl font-serif font-bold mb-4">Message Sent!</h3>
        <p className="text-foreground/70 max-w-md mx-auto">
          Thank you for reaching out. I'll get back to you as soon as possible to discuss your project.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-8 px-6 py-3 border border-[var(--color-glass-border)] hover:bg-[var(--color-glass)] rounded-full transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[var(--color-glass)] border border-[var(--color-glass-border)] rounded-3xl p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)] rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none transition-colors duration-500" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground/80">Full Name</label>
          <input
            id="name"
            required
            className="w-full bg-background/50 border border-[var(--color-glass-border)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email Address</label>
          <input
            id="email"
            type="email"
            required
            className="w-full bg-background/50 border border-[var(--color-glass-border)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div className="space-y-2 mb-8 relative z-10">
        <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject / Project Type</label>
        <select 
          id="subject"
          className="w-full bg-background/50 border border-[var(--color-glass-border)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all appearance-none text-foreground"
          defaultValue=""
        >
          <option value="" disabled>Select a topic...</option>
          <option value="writer">Writing Project</option>
          <option value="speaker">Speaking Engagement</option>
          <option value="vo">Voice Over Work</option>
          <option value="other">Other Inquiry</option>
        </select>
      </div>

      <div className="space-y-2 mb-8 relative z-10">
        <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
        <textarea
          id="message"
          required
          rows={5}
          className="w-full bg-background/50 border border-[var(--color-glass-border)] rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto px-8 py-4 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white rounded-xl font-medium transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(var(--color-accent),0.2)]"
      >
        <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
        {status !== "submitting" && <Send size={18} />}
      </button>
    </form>
  );
}
