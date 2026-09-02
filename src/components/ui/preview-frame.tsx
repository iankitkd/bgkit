"use client";

import React from "react";
import { BACKGROUND_COMPONENTS } from "@/components/backgrounds";

interface PreviewFrameProps {
  slug: string;
  name: string;
  componentName: string;
}

export default function PreviewFrame({
  name,
  componentName,
}: PreviewFrameProps) {
  const Component = BACKGROUND_COMPONENTS[componentName];

  return (
    <div className="w-full max-w-2xl aspect-video rounded-card overflow-hidden border border-border-light bg-bg shadow-2xl relative isolate">
      {/* Live component fills the entire frame */}
      <div className="absolute inset-0 overflow-hidden">
        {Component ? (
          <Component variant="preview" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-surface-2 text-muted text-xs">
            {name} — component not found
          </div>
        )}
      </div>

      {/* Subtle visual guide watermark */}
      {/* <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-pill bg-bg/80 border border-border text-[10px] font-bold text-muted backdrop-blur-sm z-20">
        PREVIEW FRAME
      </div> */}
    </div>
  );
}
