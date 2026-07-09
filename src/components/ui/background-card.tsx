"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Copy, Check, Code } from "lucide-react";
import { BackgroundItem } from "@/types";
import Image from "next/image";

interface BackgroundCardProps {
  item: BackgroundItem;
  code: string;
}

export default function BackgroundCard({ item, code }: BackgroundCardProps) {
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-card border border-border bg-surface-2/50 hover:border-primary/20 hover:bg-surface-2/85 transition-all duration-300 shadow-xl min-h-85">
      {/* Stretched Link to Detail Page */}
      <Link
        href={`/backgrounds/${item.category}/${item.slug}`}
        className="absolute inset-0 z-0"
        aria-label={`View details of ${item.name}`}
      />

      {/* Background Preview Container */}
      <div className="relative w-full aspect-video overflow-hidden border-b border-border bg-bg pointer-events-none select-none">
        {!imageError ? (
          <Image
            src={`/thumbnails/${item.slug}.webp`}
            alt={item.name}
            height={180}
            width={360}
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          /* Fallback view: CSS grid pattern and glowing accent */
          <div className="absolute inset-0 flex items-center justify-center bg-grid-dot-pattern">
            {/* Glowing Accent Core */}
            <div className="absolute h-32 w-32 rounded-full opacity-20 blur-2xl transition-all duration-500 group-hover:scale-110 bg-primary" />
            {/* Simple static icon helper */}
            <div className="z-10 rounded-full bg-surface/80 p-3 border border-border shadow-lg text-muted group-hover:text-primary transition-colors">
              <Code className="w-5 h-5" />
            </div>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="flex flex-1 flex-col p-4 justify-between relative z-10 pointer-events-none">
        <div>
          {/* Header & Tag */}
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-2">
              {item.category}
            </span>
          </div>

          {/* Name & Description */}
          <h3 className="font-bold text-fg/90 group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <p className="mt-1 text-xs text-muted line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Action Footer */}
        <div className="mt-4 flex items-center gap-2 pointer-events-auto">
          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className={`relative z-10 flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-btn text-xs font-bold transition-all cursor-pointer ${copied
              ? "bg-emerald-500/20 border border-emerald-500/30 text-emerald-400"
              : "bg-surface hover:bg-surface-2 border border-border text-muted"
              }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Copied TSX!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
