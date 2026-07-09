import { NextResponse } from "next/server";
import { BACKGROUNDS } from "@/data";

export function GET() {
  return NextResponse.json({
    backgrounds: BACKGROUNDS.map(({ slug, name, componentName }) => ({
      slug,
      name,
      componentName,
    })),
  });
}
