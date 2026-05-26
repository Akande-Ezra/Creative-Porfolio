"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Mood = "writer" | "speaker" | "vo";

interface ThemeContextType {
  mood: Mood;
  setMood: (mood: Mood) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mood, setMood] = useState<Mood>("writer");

  useEffect(() => {
    // Remove all mood classes
    document.body.classList.remove("mood-writer", "mood-speaker", "mood-vo");
    // Add the current mood class
    document.body.classList.add(`mood-${mood}`);
  }, [mood]);

  return (
    <ThemeContext.Provider value={{ mood, setMood }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
