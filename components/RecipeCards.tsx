"use client";

import { recipes } from "@/lib/content";
import { FadeUp } from "./FadeUp";

export function RecipeCards() {
  return (
    <div className="no-scrollbar -mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0">
      {recipes.map((recipe, index) => (
        <FadeUp key={recipe.title} delay={index * 0.08} className="min-w-[82%] snap-start sm:min-w-0">
          <article className="group flex h-full flex-col overflow-hidden rounded-[1.65rem] bg-[#fbf6ee]/62 shadow-premium">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.65rem] bg-[#0b4d2c] shadow-premium sm:aspect-[4/5]">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="flex min-h-[13.5rem] flex-1 flex-col px-5 pb-5 pt-5 text-[#0b4d2c] sm:min-h-[14.5rem] sm:px-6 sm:pb-6">
              <h3 className="font-editorial text-[clamp(1.55rem,6vw,2.05rem)] font-black uppercase leading-[0.95] sm:text-[clamp(1.3rem,2vw,1.75rem)]">
                {recipe.title}
              </h3>
              <p className="mt-3 text-[0.92rem] font-medium leading-snug text-[#334f2f]/82 sm:text-sm">
                {recipe.description}
              </p>
              <p className="mt-auto inline-flex w-fit rounded-full border border-[#0b4d2c]/15 bg-[#efe8df]/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#0b4d2c]/76 shadow-soft">
                {recipe.time}
              </p>
            </div>
          </article>
        </FadeUp>
      ))}
    </div>
  );
}
