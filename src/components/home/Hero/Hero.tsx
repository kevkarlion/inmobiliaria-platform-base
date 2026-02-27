export const dynamic = "force-dynamic";
import SearchBar from "@/components/shared/SearchBar/SearchBar";
import { getUiProperties } from "@/components/server/data-access/get-ui-properties";
import Image from "next/image";

export default async function Hero() {
  const allProperties = await getUiProperties({ limit: 20 });

  return (
    <section className="w-full bg-deep">
      {/* BLOQUE HERO */}
      <div className="relative w-full">
        {/* IMAGEN MOBILE */}
        <div className="block lg:hidden">
          <Image
            src="/hero-mobile.webp"
            alt="Hero Mobile"
            width={1600}
            height={1000}
            priority
            className="w-full h-[92vh] object-cover"
          />
        </div>

        {/* IMAGEN DESKTOP */}
        <div className="hidden lg:block">
          <Image
            src="/bg-hero.webp"
            alt="Hero Desktop"
            width={2400}
            height={1400}
            priority
            className="w-full h-[96vh] object-cover"
          />
        </div>

        {/* OVERLAY NUEVO (deep + blur premium) */}
        <div className="absolute inset-0 bg-deep/70 backdrop-blur-[2px]" />

        {/* CONTENIDO */}
        <div className="absolute inset-0 z-20 flex items-center justify-center mt-32">
          <div className="w-full max-w-7xl mx-auto px-6 text-center mb-8">
            <h1 className="mb-4">
              Expertos en gestión, <br />
              <span className="text-emerald">líderes en resultados.</span>
            </h1>

            <div className="w-full max-w-md md:max-w-3xl lg:max-w-5xl mx-auto">
              <SearchBar initialProperties={allProperties} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
