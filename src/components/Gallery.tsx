"use client";

import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const photos = [
  { src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=1200&q=80", width: 800, height: 600, alt: "Speaking at summit" },
  { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80", width: 1080, height: 720, alt: "TEDx Talk" },
  { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=80", width: 800, height: 1200, alt: "Event hosting" },
  { src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1200&q=80", width: 1200, height: 800, alt: "Writing desk" },
  { src: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1200&q=80", width: 800, height: 600, alt: "Voice over booth" },
  { src: "https://images.unsplash.com/photo-1475721025870-24608f5fd0ce?w=1200&q=80", width: 800, height: 1200, alt: "Creative planning" },
];

export function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="w-full relative">
      <div className="absolute top-0 inset-x-0 h-40 bg-[radial-gradient(ellipse_at_top,_var(--color-accent)_0%,_transparent_70%)] opacity-10 pointer-events-none" />
      
      <PhotoAlbum
        layout="masonry"
        photos={photos}
        onClick={({ index }) => setIndex(index)}
        renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
          <div style={{ ...wrapperStyle, position: "relative" }} className="group overflow-hidden rounded-xl border border-[var(--color-glass-border)] cursor-pointer">
            <div className="transition-all duration-500 group-hover:scale-105 group-hover:opacity-80">
              {renderDefaultPhoto({ wrapped: true })}
            </div>
            <div className="absolute inset-0 bg-[var(--color-accent)] opacity-0 group-hover:opacity-20 transition-opacity duration-300 mix-blend-overlay" />
          </div>
        )}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Zoom]}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.95)" } }}
      />
    </div>
  );
}
