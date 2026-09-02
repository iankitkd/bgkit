"use client";

import Link from "next/link";
import { SITE_NAME, GITHUB_URL } from "@/lib/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Footer Link Definitions

interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

const EXPLORE_LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "All Backgrounds", href: "/backgrounds" },
  { label: "Features", href: "/#features" },
  { label: "Documentation", href: "/how-to-use" },
];

const CATEGORY_LINKS: FooterLink[] = [
  { label: "Gradients", href: "/backgrounds/gradients" },
  { label: "Grid & Mesh", href: "/backgrounds/grid" },
  { label: "Technology", href: "/backgrounds/technology" },
  { label: "Glassmorphism", href: "/backgrounds/glass" },
  { label: "Optics & Flare", href: "/backgrounds/optics" },
  { label: "Abstract & Motion", href: "/backgrounds/abstract" },
];

const RESOURCE_LINKS: FooterLink[] = [
  { label: "GitHub Repository", href: GITHUB_URL, isExternal: true },
  { label: "How to Use", href: "/how-to-use" },
  { label: "FAQs", href: "/#faq" },
  // {
  //   label: "MIT License",
  //   href: `${GITHUB_URL}/blob/main/LICENSE`,
  //   isExternal: true,
  // },
];

const BOTTOM_LINKS: FooterLink[] = [
  { label: "GitHub", href: GITHUB_URL, isExternal: true },
  { label: "Browse Library", href: "/backgrounds" },
  // { label: "Integration Guide", href: "/how-to-use" },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/thumbnail")) {
    return null;
  }

  return (
    <footer className="w-full border-t border-border bg-bg pt-16 pb-12 mt-auto relative overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-44 w-80 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 pb-12 border-b border-border">
          {/* Logo & Info column */}
          <div className="sm:col-span-2 md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex h-7 w-7 items-center justify-center rounded-pill bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105">
                <Image
                  src={"/favicon.png"}
                  width={28}
                  height={28}
                  alt="Icon"
                  className="rounded-btn w-full h-full"
                />
              </div>
              <span className="font-bold text-base tracking-tight text-fg">
                {SITE_NAME}
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-muted max-w-xs leading-relaxed">
              A curated library of beautiful, interactive React and Tailwind CSS
              backgrounds. Open-source, production-ready, and copy-pasteable.
            </p>
          </div>

          {/* Links Column 1: Explore */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-muted-2">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-fg transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: Popular Categories for SEO Link Authority */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
              Categories
            </h4>
            <ul className="space-y-2 text-xs text-muted-2">
              {CATEGORY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-fg transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3: Resources & GitHub */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
              Resources
            </h4>
            <ul className="space-y-2 text-xs text-muted-2">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.href}>
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-fg transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="hover:text-fg transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <span className="text-muted-2 cursor-not-allowed">
                  MIT License
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-muted-2">
            © {new Date().getFullYear()} {SITE_NAME}. Open-source background
            component library.
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-2">
            {BOTTOM_LINKS.map((link, idx) => (
              <span key={link.href} className="flex items-center gap-4">
                {idx > 0 && <span>•</span>}
                {link.isExternal ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-fg transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className="hover:text-fg transition-colors">
                    {link.label}
                  </Link>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
