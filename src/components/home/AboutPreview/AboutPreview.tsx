import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe } from "lucide-react";
import { branding } from "@/utils/branding";

interface ContentProps {
  isMobile: boolean;
}

export default function AboutPreview() {
  return (
    <section className="relative w-full min-h-[600px] lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* CONTENEDOR PRINCIPAL (Imagen de fondo en Mobile) */}
          <div className="relative h-[700px] sm:h-[600px] lg:h-[650px] w-full group lg:order-2">
            <div className="relative h-full w-full lg:rounded-[2.5rem] overflow-hidden shadow-2xl z-10 lg:border-12 border-white">
              <Image
                src="/img-about-home.webp"
                alt={branding.companyName}
                fill
                priority
                className="object-cover grayscale lg:hover:grayscale-0 transition-all duration-1000"
              />
              
              {/* Overlay Mobile: Oscurecemos toda la imagen para que el texto sea el protagonista */}
              <div className="absolute inset-0 bg-deep/70 backdrop-blur-[2px] lg:hidden" />
              
              {/* CONTENIDO MOBILE: Absoluto sobre la imagen */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 sm:px-12 lg:hidden text-center items-center">
                <Content isMobile={true} />
              </div>
            </div>

            {/* Decoraciones Desktop */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald/10 z-0 rounded-full blur-3xl hidden lg:block" />
          </div>

          {/* BLOQUE TEXTO DESKTOP: Sobre fondo blanco */}
          <div className="hidden lg:flex flex-col gap-10 lg:order-1">
            <Content isMobile={false} />
          </div>

        </div>
      </div>
    </section>
  );
}

function Content({ isMobile }: ContentProps) {
  const textColor = isMobile ? "text-white" : "text-deep";
  const subTextColor = isMobile ? "text-white/60" : "text-slate-500";
  const pColor = isMobile ? "text-white/90" : "text-slate-600";

  return (
    <div className={`flex flex-col gap-8 ${isMobile ? 'max-w-md' : ''}`}>
      <div className={`space-y-4 ${isMobile ? 'items-center' : ''}`}>
        <div className={`flex items-center gap-4 ${isMobile ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-emerald" />
          <h3 className="font-montserrat text-[10px] font-black uppercase tracking-[0.4em] text-emerald">
            Nuestra Visión
          </h3>
          <span className={`h-px w-8 bg-emerald ${isMobile ? 'block' : 'hidden'}`} />
        </div>

        <h2 className={`font-montserrat text-4xl lg:text-6xl italic leading-tight tracking-tight ${textColor}`}>
          Transformamos datos en <br />
          <span className="text-emerald uppercase font-black not-italic block mt-1">
            Valor Real.
          </span>
        </h2>
      </div>

      <p className={`font-inter text-base lg:text-xl leading-relaxed ${pColor}`}>
        En <span className={`font-black uppercase ${textColor}`}>{branding.companyName}</span>, diseñamos el puente entre su{" "}
        <span className={`font-bold italic ${textColor}`}>capital</span> y su{" "}
        <span className="text-emerald font-black uppercase">potencial</span>.
      </p>

      {/* Pilares simplificados para Mobile para no saturar la imagen */}
      <div className={`grid grid-cols-1 ${isMobile ? 'gap-6' : 'sm:grid-cols-2 gap-10'} pt-2`}>
        <div className={`flex flex-col ${isMobile ? 'items-center gap-2' : 'gap-4'}`}>
          <div className={`flex items-center gap-3 ${isMobile ? 'text-emerald' : 'text-deep'}`}>
            <ShieldCheck size={20} className={isMobile ? 'text-emerald' : ''} />
            <h4 className={`font-montserrat text-[11px] font-black uppercase tracking-widest ${textColor}`}>
              Seguridad Jurídica
            </h4>
          </div>
          {!isMobile && (
            <p className="text-[12px] leading-relaxed font-medium text-slate-500">
              Blindamos cada operación con procesos auditados.
            </p>
          )}
        </div>

        <div className={`flex flex-col ${isMobile ? 'items-center gap-2' : 'gap-4'}`}>
          <div className={`flex items-center gap-3 ${isMobile ? 'text-emerald' : 'text-deep'}`}>
            <Globe size={20} className={isMobile ? 'text-emerald' : ''} />
            <h4 className={`font-montserrat text-[11px] font-black uppercase tracking-widest ${textColor}`}>
              Alcance Global
            </h4>
          </div>
          {!isMobile && (
            <p className="text-[12px] leading-relaxed font-medium text-slate-500">
              Conectamos activos con inversores internacionales.
            </p>
          )}
        </div>
      </div>

      <div className={`pt-6 ${isMobile ? 'w-full' : ''}`}>
        <Link 
          href="/nosotros" 
          className={`flex items-center gap-4 font-black text-[11px] uppercase tracking-[0.2em] transition-all group ${
            isMobile 
            ? 'bg-emerald text-white px-8 py-5 rounded-2xl w-full justify-center shadow-xl shadow-emerald/30' 
            : 'text-deep hover:text-emerald w-fit'
          }`}
        >
          Ver nuestro enfoque
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}