import React from "react";
import Link from "next/link";
import { Instagram, MessageCircle, Facebook, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { branding } from "@/utils/branding";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-deep text-white border-t border-white/5">
      {/* Línea decorativa superior con degradado Emerald */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-emerald/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {/* Columna 1: Branding y Propuesta de Valor */}
        <div className="flex flex-col gap-6">
          <div className="w-48 h-12 relative">
            <Image
              src={branding.logos.footer}
              alt={branding.companyName}
              fill
              className="object-contain object-left"
              priority
            />
          </div>
          <p className="font-lora text-sm text-white/50 leading-relaxed max-w-xs italic">
            Elevando los estándares de la gestión inmobiliaria a través de análisis estratégico y un servicio personalizado de excelencia.
          </p>
        </div>

        {/* Columna 2: Navegación Curada */}
        <div className="flex flex-col gap-6">
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald">Navegación</h3>
          <nav className="flex flex-col gap-4 text-[11px] font-bold uppercase tracking-[0.15em]">
            <Link href="/" className="text-white/60 hover:text-white transition-all flex items-center gap-2 group">
              Inicio <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald" />
            </Link>
            <Link href="/search-type/venta" className="text-white/60 hover:text-white transition-all flex items-center gap-2 group">
              Portfolio de Ventas <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald" />
            </Link>
            <Link href="/search-type/alquiler" className="text-white/60 hover:text-white transition-all flex items-center gap-2 group">
              Alquileres Selectos <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald" />
            </Link>
            <Link href="/search-type/oportunidad" className="text-white/60 hover:text-white transition-all flex items-center gap-2 group">
              Oportunidades <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald" />
            </Link>
            <Link href="/contacto" className="text-white/60 hover:text-white transition-all flex items-center gap-2 group">
              Canales de Contacto <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald" />
            </Link>
          </nav>
        </div>

        {/* Columna 3: Ecosistema Digital */}
        <div className="flex flex-col gap-6">
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald">Conectividad</h3>
          <div className="flex gap-3">
            <a
              href="#!"
              className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-emerald hover:text-deep transition-all duration-500 group"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="#!"
              className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-emerald hover:text-deep transition-all duration-500 group"
              aria-label="Facebook"
            >
              <Facebook size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="#!"
              className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-emerald hover:text-deep transition-all duration-500 group"
              aria-label="Instagram"
            >
              <Instagram size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
          <p className="font-inter text-[11px] text-white/30 max-w-[200px]">
            Únase a nuestra comunidad digital para recibir ingresos exclusivos y análisis de mercado.
          </p>
        </div>
      </div>

      {/* Footer Inferior (Créditos) */}
      <div className="border-t border-white/5 bg-black/20 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold">
            © {new Date().getFullYear()} {branding.companyName} <span className="mx-2 text-white/10">|</span> Propiedades de Vanguardia
          </p>
          
          <div className="flex items-center gap-1.5 text-[10px] text-white/20 tracking-widest uppercase group">
            Desarrollo por{" "}
            <a
              href={branding.developerCredit.url}
              
              rel="noopener noreferrer"
              className="text-white/40 hover:text-emerald transition-colors duration-300 font-black border-b border-transparent hover:border-emerald pb-0.5"
            >
              {branding.developerCredit.name}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;