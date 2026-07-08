import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { SITE_NAME } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE_NAME} — Copy-Paste React & Tailwind CSS Backgrounds`,
  description:
    "Curated library of beautiful, interactive React + Tailwind CSS backgrounds. Change colors globally, preview in real time, and copy code in one click.",
  keywords: [
    "Next.js",
    "Tailwind CSS",
    "React Backgrounds",
    "Copy Paste Components",
    "Web Design Patterns",
    "Animated SVGs",
    "Developer Gallery",
  ],
  authors: [{ name: `${SITE_NAME} Team` }],
  openGraph: {
    title: `${SITE_NAME} — Copy-Paste React & Tailwind CSS Backgrounds`,
    description:
      "Curated library of beautiful, interactive React + Tailwind CSS backgrounds. Customize colors globally and copy instantly.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg selection:bg-primary/30 selection:text-primary">
        <ThemeProvider>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
