import Image from "next/image";
import { EditorialTitle } from "@/components/EditorialTitle";
import { FadeUp } from "@/components/FadeUp";
import { Footer } from "@/components/Footer";
import { HeritageStats } from "@/components/HeritageStats";
import { InfoStrip } from "@/components/InfoStrip";
import { Navbar } from "@/components/Navbar";
import { RecipeCards } from "@/components/RecipeCards";
import { VideoPreview } from "@/components/VideoPreview";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#efe8df]">
      <Navbar />

      <section className="mx-auto max-w-6xl px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44">
        <FadeUp>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#789b78]">
            Murgia Formaggi
          </p>
          <h1 className="font-editorial text-[clamp(4.8rem,15vw,11rem)] font-black uppercase leading-[0.73] text-[#0b4d2c]">
            Monteterno
          </h1>
          <div className="product-float relative mx-auto mt-8 max-w-[18rem] sm:max-w-[28rem]">
            <Image
              src="/monteterno-product.png"
              alt="Forma di formaggio Monteterno"
              width={1226}
              height={970}
              priority
              className="h-auto w-full drop-shadow-[0_28px_32px_rgba(64,45,20,0.20)]"
            />
          </div>
          <p className="mt-6 max-w-sm text-lg font-medium text-[#334f2f] sm:text-xl">
            Scheda tecnica del prodotto
          </p>
        </FadeUp>
        <div className="mt-11 sm:mt-16">
          <InfoStrip />
        </div>
        <HeritageStats />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <FadeUp>
          <EditorialTitle title="Come è fatto" />
        </FadeUp>
        <VideoPreview
          label="Lavorazione del formaggio in vasca d'acciaio"
          image="/come-e-fatto-frame.png"
          orientation="portrait"
        />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <FadeUp>
          <EditorialTitle title="La nostra storia" />
        </FadeUp>
        <VideoPreview
          label="Caseificio sardo contemporaneo"
          image="/caseificio-murgia.png"
        />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <FadeUp>
          <EditorialTitle title="Ricette e abbinamenti" />
        </FadeUp>
        <RecipeCards />
      </section>

      <Footer />
    </main>
  );
}
