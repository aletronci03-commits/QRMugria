"use client";

import { Play } from "lucide-react";
import { FadeUp } from "./FadeUp";

export function VideoPreview({
  image,
  label,
  orientation = "landscape",
}: {
  image: string;
  label: string;
  orientation?: "landscape" | "portrait";
}) {
  const frameClass =
    orientation === "portrait"
      ? "aspect-[4/5] sm:aspect-[9/12] md:aspect-[16/10]"
      : "aspect-[4/5] sm:aspect-[16/9]";

  return (
    <FadeUp>
      <div
        className={`group relative overflow-hidden rounded-[2rem] bg-[#0b4d2c] shadow-premium ${frameClass}`}
      >
        <img
          src={image}
          alt={label}
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#092d1c]/45 via-transparent to-transparent" />
        <button
          aria-label={`Riproduci video: ${label}`}
          className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/35 bg-white/20 text-white shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-md transition duration-300 group-hover:scale-105 group-hover:bg-white/28"
        >
          <Play size={31} strokeWidth={1.8} fill="currentColor" className="ml-1" />
        </button>
      </div>
    </FadeUp>
  );
}
