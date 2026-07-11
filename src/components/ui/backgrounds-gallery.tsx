"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Search, Grid, SlidersHorizontal, RefreshCcw } from "lucide-react";
import { BackgroundItem } from "@/types";
import { CATEGORIES } from "@/data";
import BackgroundCard from "./background-card";

interface BackgroundsGalleryProps {
  initialBackgrounds: (BackgroundItem & { code: string })[];
}

export default function BackgroundsGallery({ initialBackgrounds }: BackgroundsGalleryProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const catParam = searchParams?.get("category") ?? "all";

  // Derive activeCategory directly from URL — no useState needed
  const activeCategory = CATEGORIES.some((c) => c.id === catParam) ? catParam : "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Push a new URL when the user picks a category
  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    if (categoryId === "all") {
      params.delete("category");
    } else {
      params.set("category", categoryId);
    }
    const query = params.toString();
    router.push(`${pathname}${query ? `?${query}` : ""}`, { scroll: false });
  };

  // Filter background items based on search and category
  const filteredBackgrounds = useMemo(() => {
    return initialBackgrounds.filter((bg) => {
      const matchesCategory = activeCategory === "all" || bg.category.toLowerCase() === activeCategory;
      const matchesSearch =
        bg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bg.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (bg.tags && bg.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [initialBackgrounds, activeCategory, searchQuery]);

  return (
    <div className="space-y-8">

      {/* Unified Search & Filtering Dashboard */}
      <div className="p-6 rounded-card bg-surface-2/20 border border-border backdrop-blur-md shadow-2xl space-y-6">

        {/* Row 1: Search & Counter */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">

          {/* Search Input */}
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search backgrounds (e.g. grid, animated, dots)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full pl-11 pr-4 py-2.5 text-sm rounded-input border bg-bg/60 text-fg/90 placeholder-muted-2 focus:outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_16px_var(--glow)] border-border"
            />
          </div>

          {/* Results count */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
            <div>
              Showing <span className="font-bold text-fg">{filteredBackgrounds.length}</span> of <span className="font-bold text-fg">{initialBackgrounds.length}</span> backgrounds
            </div>
          </div>

        </div>

        {/* Row 2: Category Pills */}
        <div className="space-y-3 pt-4 border-t border-border">
          <h2 className="text-xs font-bold uppercase tracking-wider text-muted-2 flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filter by Category</span>
          </h2>

          <div className="flex sm:flex-wrap gap-2 overflow-x-auto pb-2 sm:pb-0 snap-x snap-mandatory [-ms-overflow-style:none] scrollbar-none">
            {CATEGORIES.map((category) => {
              const count = category.id === "all"
                ? initialBackgrounds.length
                : initialBackgrounds.filter(b => b.category.toLowerCase() === category.id).length;

              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-pill text-xs font-semibold transition-all duration-200 border cursor-pointer flex items-center gap-2 shrink-0 snap-start ${isActive
                    ? "border-primary text-primary bg-primary/10"
                    : "border-border bg-surface-2/30 hover:bg-surface-2/60 text-muted hover:text-fg"
                    }`}
                >
                  <span>{category.name}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold transition-colors ${isActive
                      ? "bg-primary/20 text-primary"
                      : "bg-surface text-muted-2"
                      }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Category Description */}
          <p className="text-xs text-muted italic pt-1">
            {CATEGORIES.find(c => c.id === activeCategory)?.description}
          </p>
        </div>

      </div>

      {/* Grid Layout */}
      {filteredBackgrounds.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBackgrounds.map((bg) => (
            <BackgroundCard key={bg.slug} item={bg} code={bg.code} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center rounded-card border border-dashed border-border-light bg-surface-2/10">
          <Grid className="w-12 h-12 text-muted-2 mb-4 stroke-1" />
          <h3 className="text-lg font-bold text-fg/90">No backgrounds found</h3>
          <p className="text-sm text-muted-2 mt-1 max-w-xs leading-relaxed">
            We couldn&apos;t find any backgrounds matching &quot;{searchQuery}&quot; in this category.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              handleCategoryChange("all");
            }}
            className="mt-4 flex items-center gap-1.5 text-xs text-primary hover:underline font-semibold"
          >
            <RefreshCcw className="w-3.5 h-3.5" />
            Clear filters and search
          </button>
        </div>
      )}
    </div>
  );
}
