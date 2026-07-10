"use client";

import React, { useState } from "react";
import { AlignCenter, AlignLeft, Monitor, Sparkles } from "lucide-react";
import { BACKGROUND_COMPONENTS } from "@/components/backgrounds";

interface HeroPreviewProps {
  componentName: string;
  name: string;
}

type Alignment = "center" | "left";

export default function HeroPreview({ componentName, name }: HeroPreviewProps) {
  const [alignment, setAlignment] = useState<Alignment>("center");

  const Component = BACKGROUND_COMPONENTS[componentName];

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Monitor className="w-4 h-4 text-primary" />
            <h2 className="text-xl font-bold tracking-tight text-fg sm:text-2xl">
              How It Looks
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted">
            A live preview of{" "}
            <span className="text-fg/80 font-medium">{name}</span> used as a
            full-width hero section background.
          </p>
        </div>

        {/* Alignment Toggle */}
        <div className="flex items-center gap-1 p-1 rounded-input bg-bg border border-border w-fit shrink-0">
          <button
            onClick={() => setAlignment("center")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-input text-xs font-bold transition-all duration-200 cursor-pointer ${alignment === "center"
              ? "bg-surface text-fg shadow-sm border border-border"
              : "text-muted hover:text-fg"
              }`}
          >
            <AlignCenter className="w-3.5 h-3.5" />
            <span>Center</span>
          </button>
          <button
            onClick={() => setAlignment("left")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-input text-xs font-bold transition-all duration-200 cursor-pointer ${alignment === "left"
              ? "bg-surface text-fg shadow-sm border border-border"
              : "text-muted hover:text-fg"
              }`}
          >
            <AlignLeft className="w-3.5 h-3.5" />
            <span>Left</span>
          </button>
        </div>
      </div>

      {/* Hero Preview Container — full width, 16:9-ish */}
      <div className="relative w-full aspect-9/16 md:aspect-video lg:aspect-16/7 min-h-[280px] rounded-card overflow-hidden border border-border shadow-2xl bg-bg">
        {/* Live Background Layer */}
        <div className="absolute inset-0">
          {Component ? (
            <Component variant="hero" />
          ) : (
            <div className="absolute inset-0 bg-surface-2" />
          )}
        </div>

        {/* Subtle dark overlay to make content pop */}
        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />

        {/* Simulated Hero Content */}
        <div
          className={`absolute inset-0 flex flex-col justify-center gap-5 px-8 sm:px-14 lg:px-20 py-10 transition-all duration-300 ${alignment === "center" ? "items-center text-center" : "items-start text-left"
            }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/80 text-[10px] sm:text-xs font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>Your tagline goes here</span>
          </div>

          {/* Heading */}
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg leading-tight">
              Build something{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-white to-white/70">
                amazing.
              </span>
            </h3>
            <p className={`text-sm sm:text-base text-white/70 leading-relaxed max-w-sm ${alignment === "center" ? "mx-auto" : ""}`}>
              This is how your hero section looks with the{" "}
              <span className="text-white/90 font-semibold">{name}</span>{" "}
              background applied.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex items-center gap-3 flex-wrap ${alignment === "center" ? "justify-center" : "justify-start"}`}>
            <button className="px-5 py-2.5 rounded-btn text-sm font-bold bg-white text-black hover:bg-white/90 transition-colors shadow-lg">
              Get started
            </button>
            <button className="px-5 py-2.5 rounded-btn text-sm font-semibold border border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors">
              Learn more
            </button>
          </div>
        </div>

        {/* Bottom label */}
        {/* <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-pill bg-black/40 border border-white/10 text-[10px] font-bold text-white/60 backdrop-blur-sm">
          PREVIEW
        </div> */}
      </div>
    </div>
  );
}
