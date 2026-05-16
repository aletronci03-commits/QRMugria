"use client";

import { infoBlocks } from "@/lib/content";
import { FadeUp } from "./FadeUp";

export function InfoStrip() {
  return (
    <div className="no-scrollbar -mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0">
      {infoBlocks.map(({ icon: Icon, label, value }, index) => (
        <FadeUp key={label} delay={index * 0.08} className="min-w-[72%] snap-start sm:min-w-0">
          <div className="h-full rounded-[1.6rem] border border-[#0b4d2c]/12 bg-[#fbf6ee]/58 p-5 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-[#fbf6ee]/86">
            <Icon size={24} strokeWidth={1.5} className="mb-8 text-[#0b4d2c]" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#789b78]">
              {label}
            </p>
            <p className="mt-2 text-xl font-semibold text-[#0b4d2c]">{value}</p>
          </div>
        </FadeUp>
      ))}
    </div>
  );
}
