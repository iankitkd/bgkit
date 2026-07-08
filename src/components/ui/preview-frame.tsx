"use client";

import React, { useState } from "react";
import { BACKGROUND_COMPONENTS } from "@/components/backgrounds";

interface PreviewFrameProps {
  slug: string;
  name: string;
  componentName: string;
}

export default function PreviewFrame({ slug, name, componentName }: PreviewFrameProps) {
  const [imageError, setImageError] = useState(false);
  const Component = BACKGROUND_COMPONENTS[componentName];

  return (
    <div className="w-full max-w-2xl aspect-video rounded-card overflow-hidden border border-border-light bg-bg shadow-2xl relative group">
      {/* Static Thumbnail image (Primary display) */}
      {!imageError ? (
        <img
          src={`/thumbnails/${slug}.webp`}
          alt={`${name} preview`}
          className="absolute inset-0 w-full h-full object-cover z-10"
          onError={() => setImageError(true)}
        />
      ) : null}

      {/* Fallback Live Render inside the frame (so it is fully framed and visible) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {Component && <Component />}
      </div>

      {/* Subtle visual guide watermark */}
      {/* <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-pill bg-bg/80 border border-border text-[10px] font-bold text-muted backdrop-blur-sm z-20">
        PREVIEW FRAME
      </div> */}
    </div>
  );
}
