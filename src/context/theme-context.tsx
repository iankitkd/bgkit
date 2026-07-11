"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface ColorPreset {
  name: string;
  value: string;
}

// ─── Presets per variable ─────────────────────────────────────────────────────

export const CANVAS_PRESETS: ColorPreset[] = [
  { name: "Midnight", value: "#060b15" },
  { name: "Ink", value: "#06080d" },
  { name: "Pitch", value: "#020617" },
  { name: "Slate", value: "#0f172a" },
  { name: "Charcoal", value: "#111827" },
  { name: "Indigo", value: "#090514" },
];

export const ACCENT_PRESETS: ColorPreset[] = [
  { name: "Violet", value: "#7c3aed" },
  { name: "Cyan", value: "#22d3ee" },
  { name: "Rose", value: "#f43f5e" },
  { name: "Emerald", value: "#10b981" },
  { name: "Amber", value: "#f59e0b" },
  { name: "Blue", value: "#3b82f6" },
];

export const SECONDARY_PRESETS: ColorPreset[] = [
  { name: "Sky", value: "#0ea5e9" },
  { name: "Cyan", value: "#06b6d4" },
  { name: "Teal", value: "#14b8a6" },
  { name: "Indigo", value: "#6366f1" },
  { name: "Purple", value: "#a855f7" },
  { name: "Blue", value: "#3b82f6" },
];

export const ACCENT2_PRESETS: ColorPreset[] = [
  { name: "Rose", value: "#f43f5e" },
  { name: "Pink", value: "#ec4899" },
  { name: "Fuchsia", value: "#d946ef" },
  { name: "Orange", value: "#f97316" },
  { name: "Amber", value: "#f59e0b" },
  { name: "Red", value: "#ef4444" },
];

export const ACCENT3_PRESETS: ColorPreset[] = [
  { name: "Emerald", value: "#10b981" },
  { name: "Green", value: "#22c55e" },
  { name: "Lime", value: "#84cc16" },
  { name: "Teal", value: "#14b8a6" },
  { name: "Mint", value: "#34d399" },
  { name: "Jade", value: "#4ade80" },
];

export const FG_PRESETS: ColorPreset[] = [
  { name: "Silver", value: "#dde4ef" },
  { name: "White", value: "#f8fafc" },
  { name: "Gray", value: "#cbd5e1" },
  { name: "Warm", value: "#fafaf9" },
  { name: "Cool", value: "#f1f5f9" },
  { name: "Soft", value: "#f9fafb" },
];

export const BORDER_PRESETS: ColorPreset[] = [
  { name: "Slate", value: "#2a4468" },
  { name: "Dim", value: "#1f2937" },
  { name: "Mist", value: "#334155" },
  { name: "Stone", value: "#292524" },
  { name: "Ash", value: "#2d3748" },
];

export const LINE_PRESETS: ColorPreset[] = [
  { name: "Sky Blue", value: "#7dd3fc" },
  { name: "Slate Blue", value: "#6388b4" },
  { name: "Muted Sky", value: "#5b80a5" },
  { name: "Cool Gray", value: "#94a3b8" },
  { name: "Dim Slate", value: "#4b6d9b" },
];

// ─── Defaults ─────────────────────────────────────────────────────────────────

const DEFAULTS = {
  canvas: "#060b15",
  accent: "#7c3aed",
  secondary: "#0ea5e9",
  accent2: "#f43f5e",
  accent3: "#10b981",
  fg: "#dde4ef",
  border: "#2a4468",
  line: "#7dd3fc",
} as const;

// ─── Context type ─────────────────────────────────────────────────────────────

interface ThemeContextType {
  canvas: string;
  accent: string;
  secondary: string;
  accent2: string;
  accent3: string;
  fg: string;
  border: string;
  line: string;
  setCanvas: (v: string) => void;
  setAccent: (v: string) => void;
  setSecondary: (v: string) => void;
  setAccent2: (v: string) => void;
  setAccent3: (v: string) => void;
  setFg: (v: string) => void;
  setBorder: (v: string) => void;
  setLine: (v: string) => void;
  resetTheme: () => void;
  // Legacy aliases kept for backward compat (used in header / modal glows)
  accentColor: string;
  bgColor: string;
  setAccentColor: (v: string) => void;
  setBgColor: (v: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ─── Helper ───────────────────────────────────────────────────────────────────

function setProp(name: string, value: string) {
  document.documentElement.style.setProperty(name, value);
}

function save(key: string, value: string) {
  localStorage.setItem(`bg-gallery-${key}`, value);
}

function load(key: string, fallback: string): string {
  if (typeof window === "undefined") return fallback;
  return localStorage.getItem(`bg-gallery-${key}`) ?? fallback;
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [canvas, setCanvas] = useState<string>(DEFAULTS.canvas);
  const [accent, setAccent] = useState<string>(DEFAULTS.accent);
  const [secondary, setSecondary] = useState<string>(DEFAULTS.secondary);
  const [accent2, setAccent2] = useState<string>(DEFAULTS.accent2);
  const [accent3, setAccent3] = useState<string>(DEFAULTS.accent3);
  const [fg, setFg] = useState<string>(DEFAULTS.fg);
  const [border, setBorder] = useState<string>(DEFAULTS.border);
  const [line, setLine] = useState<string>(DEFAULTS.line);
  const [mounted, setMounted] = useState(false);

  // Load persisted values once on mount
  useEffect(() => {
    setCanvas(load("canvas", DEFAULTS.canvas));
    setAccent(load("accent", DEFAULTS.accent));
    setSecondary(load("secondary", DEFAULTS.secondary));
    setAccent2(load("accent2", DEFAULTS.accent2));
    setAccent3(load("accent3", DEFAULTS.accent3));
    setFg(load("fg", DEFAULTS.fg));
    setBorder(load("border", DEFAULTS.border));
    setLine(load("line", DEFAULTS.line));
    setMounted(true);
  }, []);

  // Apply each variable to :root whenever it changes
  useEffect(() => { if (!mounted) return; setProp("--bg-canvas", canvas); save("canvas", canvas); }, [canvas, mounted]);
  useEffect(() => { if (!mounted) return; setProp("--bg-accent", accent); save("accent", accent); }, [accent, mounted]);
  useEffect(() => { if (!mounted) return; setProp("--bg-secondary", secondary); save("secondary", secondary); }, [secondary, mounted]);
  useEffect(() => { if (!mounted) return; setProp("--bg-accent-2", accent2); save("accent2", accent2); }, [accent2, mounted]);
  useEffect(() => { if (!mounted) return; setProp("--bg-accent-3", accent3); save("accent3", accent3); }, [accent3, mounted]);
  useEffect(() => { if (!mounted) return; setProp("--bg-foreground", fg); save("fg", fg); }, [fg, mounted]);
  useEffect(() => { if (!mounted) return; setProp("--bg-border", border); save("border", border); }, [border, mounted]);
  useEffect(() => { if (!mounted) return; setProp("--bg-line", line); save("line", line); }, [line, mounted]);

  const resetTheme = () => {
    setCanvas(DEFAULTS.canvas);
    setAccent(DEFAULTS.accent);
    setSecondary(DEFAULTS.secondary);
    setAccent2(DEFAULTS.accent2);
    setAccent3(DEFAULTS.accent3);
    setFg(DEFAULTS.fg);
    setBorder(DEFAULTS.border);
    setLine(DEFAULTS.line);
  };

  return (
    <ThemeContext.Provider
      value={{
        canvas, accent, secondary, accent2, accent3, fg, border, line,
        setCanvas, setAccent, setSecondary, setAccent2, setAccent3, setFg, setBorder, setLine,
        resetTheme,
        // Legacy aliases
        accentColor: accent,
        bgColor: canvas,
        setAccentColor: setAccent,
        setBgColor: setCanvas,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}

// ─── Utilities ────────────────────────────────────────────────────────────────

export function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : null;
}

// Legacy export kept so existing imports don't break
export const BG_PRESETS = CANVAS_PRESETS;
