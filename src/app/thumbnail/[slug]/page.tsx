import { notFound } from "next/navigation";
import { BACKGROUND_COMPONENTS } from "@/components/backgrounds";
import { BACKGROUNDS, getBackgroundBySlug } from "@/data";

interface ThumbnailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export function generateStaticParams() {
  return BACKGROUNDS.map((bg) => ({
    slug: bg.slug,
  }));
}

export default async function ThumbnailPage({ params }: ThumbnailPageProps) {
  const { slug } = await params;
  const background = getBackgroundBySlug(slug);

  if (!background) {
    notFound();
  }

  const Component = BACKGROUND_COMPONENTS[background.componentName];

  if (!Component) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full bg-bg">
      <div
        data-thumbnail-root
        aria-label={`${background.name} thumbnail render`}
        className="relative h-[180px] w-[320px] overflow-hidden bg-bg-canvas"
      >
        <Component variant="thumbnail" />
      </div>
    </div>
  );
}
