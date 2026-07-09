"use client";

import React, { useState } from "react";
import { X, RotateCcw, Paintbrush } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  useThemeContext,
  CANVAS_PRESETS,
  ACCENT_PRESETS,
  SECONDARY_PRESETS,
  ACCENT2_PRESETS,
  ACCENT3_PRESETS,
  FG_PRESETS,
  BORDER_PRESETS,
  type ColorPreset,
} from "@/context/theme-context";
import { BACKGROUNDS } from "@/data";
import { BACKGROUND_COMPONENTS } from "@/components/backgrounds";

interface ColorCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ─── Single variable row ──────────────────────────────────────────────────────

interface VarRowProps {
  label: string;
  varName: string;
  value: string;
  onChange: (v: string) => void;
  presets: ColorPreset[];
  accentColor: string;
  swatchShape?: "circle" | "square";
}

function VarRow({ label, varName, value, onChange, presets, accentColor, swatchShape = "circle" }: VarRowProps) {
  const [focused, setFocused] = useState(false);
  const isActive = (preset: ColorPreset) => value.toLowerCase() === preset.value.toLowerCase();
  const swatchClass = swatchShape === "circle" ? "rounded-full" : "rounded-sm";

  return (
    <div className="space-y-2">
      {/* Label */}
      <div className="flex items-center gap-2">
        <span
          className={`w-2.5 h-2.5 shrink-0 ${swatchClass} border border-white/10`}
          style={{ backgroundColor: value }}
        />
        <span className="text-xs font-bold uppercase tracking-wider text-muted">{label}</span>
        <span className="text-[10px] font-mono text-muted-2 ml-auto">{varName}</span>
      </div>

      {/* Chip row — horizontal scroll on mobile, flex-wrap on desktop */}
      <div className="flex gap-1.5 overflow-x-auto md:flex-wrap md:overflow-x-visible pb-0.5 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
        {presets.map((preset) => {
          const active = isActive(preset);
          return (
            <button
              key={preset.value}
              onClick={() => onChange(preset.value)}
              title={preset.name}
              className="flex items-center gap-1.5 shrink-0 px-2.5 py-1.5 rounded-full border text-[10px] font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap"
              style={{
                borderColor: active ? accentColor : "var(--border)",
                color: active ? accentColor : "var(--muted)",
                backgroundColor: active ? `${accentColor}12` : "var(--surface-3)",
              }}
            >
              <span
                className={`w-3 h-3 shrink-0 ${swatchClass} border border-white/10`}
                style={{ backgroundColor: preset.value }}
              />
              <span>{preset.name}</span>
            </button>
          );
        })}
      </div>

      {/* Custom hex input */}
      <div
        className="flex items-center gap-2.5 bg-surface-3/40 px-3 py-2 rounded-input border transition-all duration-200"
        style={{
          borderColor: focused ? accentColor : "var(--border)",
          boxShadow: focused ? `0 0 10px ${accentColor}12` : "none",
        }}
      >
        <span className="text-[10px] text-muted-2 font-medium shrink-0">Hex</span>
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-5 h-5 rounded-full cursor-pointer border-0 bg-transparent shrink-0"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="#000000"
          className="bg-transparent border-0 text-fg/90 focus:ring-0 text-xs flex-1 font-mono uppercase focus:outline-none"
        />
      </div>
    </div>
  );
}

// ─── 16:9 Live background preview pane ───────────────────────────────────────

function LivePreviewPane({ componentName, bgName }: { componentName: string; bgName: string }) {
  const Component = BACKGROUND_COMPONENTS[componentName];
  if (!Component) return null;

  return (
    <div className="w-full space-y-2">
      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-2">Live Preview</p>
      {/* Strict 16:9 aspect ratio container */}
      <div className="relative w-full overflow-hidden flex flex-col rounded-input border border-border bg-bg aspect-video">
        {/* Component fills the entire pane */}
        <div className="absolute inset-0 pointer-events-none">
          <Component variant="thumbnail" />
        </div>
      </div>
      {/* Name badge */}
      {/* <div className="px-3 py-1.5 bg-bg/70 backdrop-blur-sm rounded-btn border-t border-border/50 flex items-center justify-between">
        <span className="text-[10px] font-mono text-muted truncate">{bgName}</span>
        <span className="text-[9px] text-muted-2 shrink-0 ml-2">Updates live</span>
      </div> */}
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────

export default function ColorCustomizerModal({ isOpen, onClose }: ColorCustomizerModalProps) {
  const {
    canvas, accent, secondary, accent2, accent3, fg, border,
    setCanvas, setAccent, setSecondary, setAccent2, setAccent3, setFg, setBorder,
    resetTheme,
  } = useThemeContext();

  // Detect if we're on a background detail page and resolve its component
  const pathname = usePathname();
  const detailMatch = pathname?.match(/^\/backgrounds\/[^/]+\/([^/]+)$/);
  const slug = detailMatch?.[1] ?? null;
  const bgItem = slug ? BACKGROUNDS.find((b) => b.slug === slug) : null;
  const hasPreview = !!(bgItem && BACKGROUND_COMPONENTS[bgItem.componentName]);

  if (!isOpen) return null;

  const rows: VarRowProps[] = [
    { label: "Canvas", varName: "--bg-canvas", value: canvas, onChange: setCanvas, presets: CANVAS_PRESETS, accentColor: accent, swatchShape: "square" },
    { label: "Accent", varName: "--bg-accent", value: accent, onChange: setAccent, presets: ACCENT_PRESETS, accentColor: accent, swatchShape: "circle" },
    { label: "Secondary", varName: "--bg-secondary", value: secondary, onChange: setSecondary, presets: SECONDARY_PRESETS, accentColor: accent, swatchShape: "circle" },
    { label: "Accent 2", varName: "--bg-accent-2", value: accent2, onChange: setAccent2, presets: ACCENT2_PRESETS, accentColor: accent, swatchShape: "circle" },
    { label: "Accent 3", varName: "--bg-accent-3", value: accent3, onChange: setAccent3, presets: ACCENT3_PRESETS, accentColor: accent, swatchShape: "circle" },
    { label: "Foreground", varName: "--bg-foreground", value: fg, onChange: setFg, presets: FG_PRESETS, accentColor: accent, swatchShape: "square" },
    { label: "Border", varName: "--bg-border", value: border, onChange: setBorder, presets: BORDER_PRESETS, accentColor: accent, swatchShape: "square" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Modal Card — extra wide when preview is shown */}
      <div
        className={`relative w-full rounded-panel border border-border-light bg-surface text-fg shadow-2xl flex flex-col max-h-[92vh] overflow-hidden transition-all duration-300 ${hasPreview ? "max-w-5xl" : "max-w-lg"
          }`}
        onClick={(e) => e.stopPropagation()}
        style={{ boxShadow: `0 24px 60px rgba(0,0,0,0.55), 0 0 50px ${accent}0D` }}
      >
        <div className="p-6 sm:p-8 flex flex-col gap-5 overflow-hidden h-full min-h-0">

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-btn bg-surface-2 hover:bg-surface-3 text-muted hover:text-fg transition-colors border border-border cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-4 pr-10 shrink-0">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-btn border transition-colors shrink-0"
              style={{ color: accent, backgroundColor: `${accent}15`, borderColor: `${accent}25` }}
            >
              <Paintbrush className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight text-fg">Global Color Customizer</h2>
              <p className="text-xs sm:text-sm text-muted">
                {hasPreview
                  ? `Adjust colors and see ${bgItem!.name} update live.`
                  : "Adjust all 7 CSS variables live across every component."}
              </p>
            </div>
          </div>

          {/* Body */}
          {hasPreview ? (
            /* ── Desktop: preview LEFT | color rows RIGHT
               ── Mobile: preview TOP (col-reverse puts color rows below) ── */
            <div className="flex-1 min-h-0 flex flex-col md:flex-row gap-6 overflow-hidden">

              {/* 16:9 preview — left on desktop, top on mobile */}
              <div className="md:w-[420px] shrink-0 flex flex-col justify-start gap-2">
                <LivePreviewPane componentName={bgItem!.componentName} bgName={bgItem!.name} />
              </div>

              {/* Color rows — right on desktop, bottom on mobile */}
              <div className="flex-1 min-w-0 overflow-y-auto pr-1 space-y-5 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
                {rows.map((row) => (
                  <VarRow key={row.varName} {...row} />
                ))}
              </div>

            </div>
          ) : (
            /* No preview — single column color rows */
            <div className="flex-1 min-h-0 overflow-y-auto pr-1 space-y-5 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
              {rows.map((row) => (
                <VarRow key={row.varName} {...row} />
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border shrink-0">
            <button
              onClick={resetTheme}
              className="flex items-center gap-1.5 text-xs sm:text-sm text-muted hover:text-fg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-btn text-bg font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer hover:opacity-95"
              style={{ backgroundColor: accent, boxShadow: `0 4px 20px ${accent}33` }}
            >
              Apply &amp; Close
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
