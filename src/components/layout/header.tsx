"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ColorCustomizerModal from "../ui/color-customizer-modal";
import { SITE_NAME, GITHUB_URL } from "@/lib/constants";
import Image from "next/image";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Browse", href: "/backgrounds" },
    { label: "How to Use", href: "/how-to-use" },
  ];

  if (pathname.startsWith("/thumbnail")) {
    return null;
  }

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo Container */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-btn transition-all duration-300 group-hover:rotate-12 group-hover:scale-105 border border-primary/20 bg-primary/10 text-primary">
              {/* <Layers className="w-4.5 h-4.5" /> */}
              <Image
                src={"/favicon.png"}
                width={28}
                height={28}
                alt="Icon"
                className="rounded-btn w-full h-full"
              />
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-linear-to-b from-fg via-fg to-muted bg-clip-text text-transparent group-hover:from-slate-50 group-hover:to-slate-200 transition-all">
              {SITE_NAME}
            </span>
          </Link>

          {/* Navigation Links (Visible on all devices) */}
          <nav className="hidden lg:flex items-center gap-5 sm:gap-8">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <div key={link.href} className="relative py-1">
                  <Link
                    href={link.href}
                    className={`text-xs sm:text-sm font-semibold transition-colors duration-200 ${active ? "text-primary" : "text-muted hover:text-fg"
                      }`}
                  >
                    <span>{link.label}</span>
                  </Link>
                  {active && (
                    <div className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full transition-all duration-300 bg-primary shadow-[0_0_8px_var(--glow)]" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Customizer Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-btn text-xs sm:text-sm font-semibold border border-border bg-surface/60 hover:bg-surface/90 hover:border-border-light text-fg/90 transition-all shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="w-2 h-2 rounded-full animate-pulse bg-primary shadow-[0_0_10px_var(--glow)]" />
              <span className="hidden xs:inline">Customize Colors</span>
              <span className="xs:hidden">Customize</span>
            </button>

            {/* GitHub Link */}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-btn text-xs font-semibold border border-border bg-surface/60 hover:bg-surface/90 hover:border-border-light text-muted hover:text-fg transition-all shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
              {/* <span className="hidden sm:inline">GitHub</span> */}
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center p-2 rounded-btn border border-border bg-surface/60 text-muted hover:text-fg transition-all cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Collapsible Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-bg/95 backdrop-blur-md px-4 py-4 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const active =
                  pathname === link.href ||
                  (link.href !== "/" && pathname?.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-btn text-sm font-semibold transition-all ${active
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-muted hover:text-fg hover:bg-surface-2"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-4 py-3 rounded-btn text-sm font-semibold text-muted hover:text-fg hover:bg-surface-2 transition-all border border-border"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a> */}
            </nav>
          </div>
        )}
      </header>

      {/* Theme Modal */}
      <ColorCustomizerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
