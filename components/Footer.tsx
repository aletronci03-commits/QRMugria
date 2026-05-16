import { Camera } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-5 pb-8 pt-12 sm:px-8 sm:pb-14">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] bg-[#00532f] px-7 py-12 text-center text-[#fbf6ee] shadow-premium sm:px-12 sm:py-16">
        <div className="flex items-center justify-center">
          <h2 className="font-editorial text-4xl font-black uppercase leading-none sm:text-5xl">
            Murgia Formaggi
          </h2>
        </div>

        <div className="mt-14 space-y-2">
          <p className="text-lg uppercase tracking-[0.12em] text-[#fbf6ee]/68">Indirizzo</p>
          <p className="mx-auto max-w-xl text-2xl leading-snug sm:text-3xl">
            Via Madrid n.5 zona P, I.P, 09094 Marrubiu OR
          </p>
        </div>

        <div className="mt-12 space-y-2">
          <p className="text-lg uppercase tracking-[0.12em] text-[#fbf6ee]/68">Contatti</p>
          <p className="text-2xl leading-snug sm:text-3xl">0783 858020</p>
          <p className="break-words text-2xl leading-snug sm:text-3xl">
            murgia@murgiaformaggi.com
          </p>
        </div>

        <div className="mt-14 flex justify-center gap-7">
          <a
            href="#"
            aria-label="Facebook Murgia Formaggi"
            className="grid h-20 w-20 place-items-center rounded-full bg-white/13 text-4xl font-black transition duration-300 hover:-translate-y-1 hover:bg-white/20"
          >
            f
          </a>
          <a
            href="#"
            aria-label="Instagram Murgia Formaggi"
            className="grid h-20 w-20 place-items-center rounded-full bg-white/13 transition duration-300 hover:-translate-y-1 hover:bg-white/20"
          >
            <Camera size={38} strokeWidth={2} />
          </a>
        </div>

        <div className="mt-16 border-t border-white/25 pt-9 text-[#fbf6ee]/62">
          <p className="text-lg sm:text-xl">© 2026 Murgia Formaggi. Tutti i diritti riservati.</p>
          <p className="mt-5 text-lg sm:text-xl">Prodotto tracciato con tecnologia QR Code</p>
        </div>
      </div>
    </footer>
  );
}
