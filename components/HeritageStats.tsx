import { FadeUp } from "./FadeUp";

const stats = [
  { value: "1986", label: "Anno di fondazione" },
  { value: "2ª GEN", label: "Di casari" },
];

export function HeritageStats() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:gap-8">
      {stats.map((stat, index) => (
        <FadeUp key={stat.value} delay={index * 0.08}>
          <div className="grid min-h-44 place-items-center rounded-[1.4rem] bg-[#e7ddcf] px-4 py-8 text-center shadow-soft sm:min-h-56 sm:rounded-[1.8rem]">
            <div>
              <p className="font-editorial text-[clamp(3rem,10vw,5rem)] font-black uppercase leading-none text-[#00532f]">
                {stat.value}
              </p>
              <p className="mx-auto mt-5 max-w-40 text-sm font-medium uppercase leading-snug tracking-[0.08em] text-[#666666] sm:text-2xl">
                {stat.label}
              </p>
            </div>
          </div>
        </FadeUp>
      ))}
    </div>
  );
}
