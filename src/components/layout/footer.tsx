"use client";

import Link from "next/link";
// import { Sparkles, Heart } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-border">
          {/* Logo & Info column */}
          <div className="md:col-span-2 space-y-4">
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
              <li>
                <Link href="/" className="hover:text-fg transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/backgrounds"
                  className="hover:text-fg transition-colors"
                >
                  Browse Backgrounds
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  className="hover:text-fg transition-colors"
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Legal & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
              Resources
            </h4>
            <ul className="space-y-2 text-xs text-muted-2">
              <li>
                <Link
                  href="/#how-to-use"
                  className="hover:text-fg transition-colors"
                >
                  How to Use
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-fg transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <span className="text-muted-2 cursor-not-allowed">
                  MIT License
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="text-xs text-muted-2">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
