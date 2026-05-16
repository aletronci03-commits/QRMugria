"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu } from "lucide-react";

export function Navbar() {
  const { scrollY } = useScroll();
  const blur = useTransform(scrollY, [0, 80], [0, 18]);
  const opacity = useTransform(scrollY, [0, 80], [0.86, 0.96]);
  const backdropFilter = useTransform(blur, (value) => `blur(${value}px)`);
  const backgroundColor = useTransform(
    opacity,
    (value) => `rgba(239, 232, 223, ${value})`,
  );

  return (
    <motion.header
      style={{ backdropFilter, backgroundColor }}
      className="fixed inset-x-0 top-0 z-50 border-b border-[#0b4d2c]/10 shadow-[0_10px_34px_rgba(28,38,25,0.08)]"
    >
      <nav className="mx-auto flex h-24 max-w-6xl items-center justify-between px-5 sm:h-28 sm:px-8">
        <a href="#" aria-label="Murgia Formaggi Sardi" className="flex items-center">
          <Image
            src="/murgia-logo.png"
            alt="Murgia Formaggi Sardi"
            width={84}
            height={84}
            priority
            className="h-16 w-16 object-contain sm:h-20 sm:w-20"
          />
        </a>
        <button
          aria-label="Apri menu"
          className="grid h-11 w-11 place-items-center rounded-full border border-[#0b4d2c]/20 bg-[#fbf6ee]/55 text-[#0b4d2c] shadow-soft transition duration-300 hover:-translate-y-0.5 hover:bg-[#fbf6ee]"
        >
          <Menu size={22} strokeWidth={1.75} />
        </button>
      </nav>
    </motion.header>
  );
}
