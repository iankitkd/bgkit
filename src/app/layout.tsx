import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";

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
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: `${SITE_NAME} - Copy-Paste React & Tailwind CSS Backgrounds`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "React backgrounds",
    "Tailwind CSS backgrounds",
    "copy paste components",
    "Next.js backgrounds",
    "animated backgrounds",
    "background components",
    "web design patterns",
    "developer UI gallery",
  ],
  authors: [{ name: `${SITE_NAME} Team` }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Design and development",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon.png", type: "image/png" }],
    apple: "/favicon.png",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${SITE_NAME} - Copy-Paste React & Tailwind CSS Backgrounds`,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/thumbnails/mesh-gradient.webp",
        width: 320,
        height: 180,
        alt: `${SITE_NAME} background component preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - React & Tailwind CSS Backgrounds`,
    description: SITE_DESCRIPTION,
    images: ["/thumbnails/mesh-gradient.webp"],
  },

  verification: {
    google: "feDE98MDGtK8H8od7Y9V8yt_TNp63pkhd7VXEezzEHI",
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
