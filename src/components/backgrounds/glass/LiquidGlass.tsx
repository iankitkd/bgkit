import type { BackgroundProps } from "@/types";

type BlobConfig = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  width: string;
  height: string;
  opacity: number;
  blur: number;
  color: string;
};

type VariantConfig = {
  inset: string;
  borderRadius: string;
  panelBlur: number;
  panelOpacity: number;
  highlightOpacity: number;
  blobs: readonly BlobConfig[];
};

const CONFIG = {
  hero: {
    inset: "9%",
    borderRadius: "42% 58% 52% 48% / 48% 44% 56% 52%",
    panelBlur: 28,
    panelOpacity: 0.74,
    highlightOpacity: 0.16,
    blobs: [
      {
        top: "8%",
        left: "5%",
        width: "46%",
        height: "62%",
        opacity: 0.36,
        blur: 130,
        color: "bg-bg-accent",
      },
      {
        bottom: "6%",
        right: "5%",
        width: "48%",
        height: "64%",
        opacity: 0.32,
        blur: 140,
        color: "bg-bg-secondary",
      },
      {
        top: "40%",
        left: "34%",
        width: "28%",
        height: "36%",
        opacity: 0.18,
        blur: 95,
        color: "bg-bg-accent-2",
      },
    ],
  },

  preview: {
    inset: "10%",
    borderRadius: "42% 58% 52% 48% / 48% 44% 56% 52%",
    panelBlur: 22,
    panelOpacity: 0.74,
    highlightOpacity: 0.13,
    blobs: [
      {
        top: "9%",
        left: "6%",
        width: "44%",
        height: "60%",
        opacity: 0.34,
        blur: 90,
        color: "bg-bg-accent",
      },
      {
        bottom: "8%",
        right: "6%",
        width: "46%",
        height: "62%",
        opacity: 0.30,
        blur: 95,
        color: "bg-bg-secondary",
      },
      {
        top: "42%",
        left: "34%",
        width: "28%",
        height: "36%",
        opacity: 0.16,
        blur: 70,
        color: "bg-bg-accent-2",
      },
    ],
  },

  thumbnail: {
    inset: "11%",
    borderRadius: "40% 60% 52% 48% / 50% 46% 54% 50%",
    panelBlur: 14,
    panelOpacity: 0.76,
    highlightOpacity: 0.20,
    blobs: [
      {
        top: "10%",
        left: "8%",
        width: "50%",
        height: "66%",
        opacity: 0.44,
        blur: 55,
        color: "bg-bg-accent",
      },
      {
        bottom: "8%",
        right: "8%",
        width: "52%",
        height: "68%",
        opacity: 0.38,
        blur: 60,
        color: "bg-bg-secondary",
      },
    ],
  },
} satisfies Record<string, VariantConfig>;

export default function LiquidGlass({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <style>{`
        @keyframes lg-morph-1 {
          0%,100%{
            border-radius:60% 40% 70% 30% / 50% 60% 40% 50%;
            transform:translate(0,0) rotate(0deg);
          }
          25%{
            border-radius:40% 60% 30% 70% / 60% 40% 60% 40%;
            transform:translate(6px,-8px) rotate(5deg);
          }
          50%{
            border-radius:50% 50% 60% 40% / 40% 50% 50% 60%;
            transform:translate(-4px,6px) rotate(-3deg);
          }
          75%{
            border-radius:70% 30% 40% 60% / 50% 70% 30% 50%;
            transform:translate(5px,2px) rotate(3deg);
          }
        }

        @keyframes lg-morph-2 {
          0%,100%{
            border-radius:40% 60% 50% 50% / 55% 35% 65% 45%;
            transform:translate(0,0) rotate(0deg);
          }
          33%{
            border-radius:60% 40% 35% 65% / 45% 55% 45% 55%;
            transform:translate(-6px,4px) rotate(-4deg);
          }
          66%{
            border-radius:35% 65% 55% 45% / 65% 35% 55% 45%;
            transform:translate(5px,-5px) rotate(4deg);
          }
        }

        @keyframes lg-float {
          0%,100%{
            transform:translateY(0);
          }
          50%{
            transform:translateY(-8px);
          }
        }

        .lg-blob-1{
          animation:lg-morph-1 10s ease-in-out infinite;
        }

        .lg-blob-2{
          animation:lg-morph-2 12s ease-in-out infinite;
        }

        .lg-blob-3{
          animation:lg-float 8s ease-in-out infinite;
        }
      `}</style>

      {config.blobs.map((blob, index) => (
        <div
          key={index}
          className={`absolute ${blob.color
            } ${index === 0
              ? "lg-blob-1"
              : index === 1
                ? "lg-blob-2"
                : "lg-blob-3"
            }`}
          style={{
            top: blob.top,
            bottom: blob.bottom,
            left: blob.left,
            right: blob.right,
            width: blob.width,
            height: blob.height,
            opacity: blob.opacity,
            filter: `blur(${blob.blur}px)`,
          }}
        />
      ))}

      <div
        className="absolute border border-bg-border/40"
        style={{
          inset: config.inset,
          borderRadius: config.borderRadius,
          opacity: config.panelOpacity,
          background:
            "linear-gradient(145deg, var(--color-bg-canvas), transparent 70%)",
          backdropFilter: `blur(${config.panelBlur}px)`,
          WebkitBackdropFilter: `blur(${config.panelBlur}px)`,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: config.highlightOpacity,
          background:
            "radial-gradient(circle at 22% 18%, white 0%, transparent 34%)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}