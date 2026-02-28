"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { PropertyUI } from "@/domain/types/PropertyUI.types";
import PropertyCardHome from "@/components/shared/PropertyCardHome/PropertyCardHome";
import { BASE_URL } from "@/lib/config";

interface Props {
  title?: string;
  subtitle?: string;
  properties: PropertyUI[];
  filter: "oportunidad" | "venta" | "alquiler";
}

export default function PropertyGrid({
  title,
  subtitle,
  properties,
  filter,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);


  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = 400;
      const scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const getButtonText = () => {
    if (filter === "oportunidad") return "Explorar Oportunidades";
    if (filter === "venta") return "Ver Portfolio en Venta";
    if (filter === "alquiler") return "Catálogo de Alquileres";
    return "Ver todas las propiedades";
  };

  return (
    <div className="relative w-full py-20 overflow-hidden bg-white">
      {/* Patrón decorativo con el nuevo Emerald */}
      <div
        className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%2300B894'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Cabecera con acento Emerald */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-emerald" />
              <span className="font-montserrat text-[10px] font-black uppercase tracking-[0.4em] text-emerald">
                Selección de Activos
              </span>
              <span className="h-px w-10 bg-emerald" />
            </div>

            <h2 className="font-montserrat text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">
              {title}
            </h2>
            
            <p className="font-lora text-slate-500 text-base md:text-xl leading-relaxed max-w-2xl mx-auto italic">
              {subtitle}
            </p>
          </div>

          {/* Divisor Emerald */}
          <div className="flex justify-center items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald" />
            <div className="w-16 h-px bg-emerald/30" />
            <div className="w-2 h-2 rounded-full bg-emerald" />
          </div>
        </div>

        {/* Carrusel */}
        <div className="relative group/carousel">
          <div className="hidden lg:block">
            <button
              onClick={() => scroll("left")}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-xl border border-emerald/20 text-emerald hover:bg-emerald hover:text-white transition-all duration-500 opacity-0 group-hover/carousel:opacity-100 -translate-x-4 group-hover/carousel:translate-x-0"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 flex items-center justify-center rounded-2xl bg-white shadow-xl border border-emerald/20 text-emerald hover:bg-emerald hover:text-white transition-all duration-500 opacity-0 group-hover/carousel:opacity-100 translate-x-4 group-hover/carousel:translate-x-0"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex flex-nowrap gap-6 lg:gap-10 overflow-x-auto pb-16 scrollbar-hide snap-x snap-mandatory px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {properties.map((item) => (
              <div
                key={item.id}
                className="snap-start shrink-0 transition-transform duration-700"
              >
                {/* Aquí el componente PropertyCardHome debería recibir colores de marca internos */}
                <PropertyCardHome property={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Controles Mobile Emerald */}
        <div className="flex lg:hidden justify-center gap-4 -mt-6 mb-10">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-xl bg-white border border-emerald/20 shadow-lg flex items-center justify-center text-emerald active:scale-90 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-xl bg-emerald text-white shadow-lg flex items-center justify-center active:scale-90 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* CTA con Emerald Hover */}
        <div className="flex justify-center mt-4">
          <Link href={`${BASE_URL}/search-type/${filter}`}>
            <button className="flex items-center gap-4 bg-emerald hover:bg-emerald-hover text-white px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] transition-all duration-500 shadow-xl shadow-emerald/20 group">
              {getButtonText()}
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}