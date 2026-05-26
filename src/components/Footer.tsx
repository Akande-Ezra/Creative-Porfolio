import React from "react";
import Link from "next/link";
import { Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-[var(--color-glass-border)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-serif font-bold tracking-tighter mb-4 block">
              Creative<span className="text-[var(--color-accent)] transition-colors duration-500">Hub</span>.
            </Link>
            <p className="text-foreground/70 max-w-sm mt-4">
              A multifaceted creator blending words, voice, and presence into compelling narratives that inspire and engage.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 font-serif">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="#portfolio" className="text-foreground/70 hover:text-[var(--color-accent)] transition-colors">Portfolio</Link></li>
              <li><Link href="#gallery" className="text-foreground/70 hover:text-[var(--color-accent)] transition-colors">Event Gallery</Link></li>
              <li><Link href="#contact" className="text-foreground/70 hover:text-[var(--color-accent)] transition-colors">Bookings</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 font-serif">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-[var(--color-glass)] border border-[var(--color-glass-border)] rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-all text-foreground/70">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-[var(--color-glass)] border border-[var(--color-glass-border)] rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-all text-foreground/70">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-[var(--color-glass)] border border-[var(--color-glass-border)] rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-all text-foreground/70">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-[var(--color-glass)] border border-[var(--color-glass-border)] rounded-full hover:bg-[var(--color-accent)] hover:text-white transition-all text-foreground/70">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[var(--color-glass-border)] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/50 text-sm">
            © {new Date().getFullYear()} CreativeHub. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-foreground/50">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
