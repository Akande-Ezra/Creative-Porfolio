import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      {/* Portfolio Section */}
      <section id="portfolio" className="min-h-screen border-t border-[var(--color-glass-border)] py-20 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-20" />
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12">Portfolio Showcase</h2>
          <Portfolio />
        </div>
      </section>
      
      {/* Gallery Section */}
      <section id="gallery" className="min-h-screen border-t border-[var(--color-glass-border)] py-20 relative">
         <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Captured Moments</h2>
              <p className="text-foreground/70 font-light max-w-lg">A visual journey through stages, studios, and storytelling sessions.</p>
            </div>
          </div>
          <Gallery />
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="min-h-[70vh] border-t border-[var(--color-glass-border)] py-24 relative">
         <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-20" />
         <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Let's Work Together</h2>
            <p className="text-foreground/70 font-light max-w-xl mx-auto">
              Whether you need a compelling narrative, a captivating voice, or a dynamic speaker, I'm ready to bring your vision to life.
            </p>
          </div>
          <Contact />
        </div>
      </section>
    </div>
  );
}
