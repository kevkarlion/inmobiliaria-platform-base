"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, BedDouble, Square, ChevronRight, Sparkles } from "lucide-react";
import { PropertyUI } from "@/domain/types/PropertyUI.types";

interface Props {
  property: PropertyUI;
}

export default function PropertyCardHome({ property }: Props) {
  return (
    <Link 
      href={`/property/${property.slug}`}
      className="group relative shrink-0 w-75 md:w-105 h-64 bg-deep rounded-4xl overflow-hidden shadow-lg hover:shadow-emerald/20 transition-all duration-700 border border-white/5 block"
    >
      {/* Imagen de fondo con opacidad controlada */}
      <div className="absolute inset-0 z-0">
        <Image
          src={property.images[0] || "/placeholder.jpg"}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60 group-hover:opacity-40"
        />
      </div>

      {/* Gradiente usando tu color Deep */}
      <div className="absolute inset-0 bg-linear-to-t from-deep via-deep/40 to-transparent z-10" />

      {/* Contenido */}
      <div className="relative z-20 h-full p-7 flex flex-col justify-between font-montserrat">
        
        {/* Superior: Tags con Emerald */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <span className="bg-emerald text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-xl tracking-widest w-fit shadow-lg shadow-emerald/20">
              {property.operationType === "alquiler" ? "Alquiler" : "Venta"}
            </span>
            {property.opportunity && (
              <span className="bg-white/10 backdrop-blur-md text-emerald text-[9px] font-black uppercase px-3 py-1.5 rounded-xl tracking-[0.2em] border border-emerald/30 flex items-center gap-1 w-fit">
                <Sparkles size={12} /> Destacada
              </span>
            )}
          </div>
          
          {/* Características */}
          <div className="flex gap-2 font-inter">
            <div className="flex items-center gap-1.5 backdrop-blur-md bg-deep/60 px-3 py-1.5 rounded-xl border border-white/10 text-white">
              <BedDouble size={14} className="text-emerald" />
              <span className="text-[11px] font-bold">{property.rooms || 0}</span>
            </div>
            <div className="flex items-center gap-1.5 backdrop-blur-md bg-deep/60 px-3 py-1.5 rounded-xl border border-white/10 text-white">
              <Square size={12} className="text-emerald" />
              <span className="text-[11px] font-bold">{property.coveredM2 || 0}m²</span>
            </div>
          </div>
        </div>

        {/* Inferior: Información Principal */}
        <div className="space-y-3">
          <div>
            <p className="text-emerald text-[9px] font-black uppercase tracking-[0.4em] mb-1">
              {property.typeName}
            </p>
            <h3 className="text-white text-xl md:text-2xl font-black leading-tight uppercase italic tracking-tighter line-clamp-1 group-hover:text-emerald transition-colors">
              {property.title}
            </h3>
          </div>

          <div className="flex items-end justify-between border-t border-white/10 pt-4">
            <div className="space-y-1">
              <div className="text-white text-2xl font-black tracking-tighter leading-none flex items-baseline">
                <span className="text-emerald text-xs font-bold mr-1">{property.currency}</span>
                {property.amount.toLocaleString("es-AR")}
              </div>
              <div className="flex items-center gap-1.5 text-white/50">
                <MapPin size={13} className="text-emerald" />
                <p className="font-lora text-[12px] italic truncate w-36 md:w-52">
                  {property.cityName || "Patagonia"}
                </p>
              </div>
            </div>

            {/* Botón de acción con Emerald y Emerald-Hover */}
            <div className="bg-emerald p-3 rounded-2xl text-white shadow-lg shadow-emerald/20 group-hover:bg-emerald-hover group-hover:scale-110 transition-all duration-500">
              <ChevronRight size={20} strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}