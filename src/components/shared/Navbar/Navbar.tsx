"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Clock,
  Menu,
  X,
  MessageCircle,
  Facebook,
  Instagram,
  Share2,
} from "lucide-react";
import { branding } from "@/utils/branding";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Destacadas", href: "/search-type/oportunidad" },
    { name: "Venta", href: "/search-type/venta" },
    { name: "Alquiler", href: "/search-type/alquiler" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="navbar-container w-full shadow-sm">

      {/* TOP BAR DESKTOP */}
      <div className="hidden lg:block bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <Link href="/" scroll className="shrink-0 pl-6">
            <Image
              src={branding.logos.navbar}
              alt={branding.companyName}
              width={180}
              height={50}
              className="object-contain"
              priority
            />
          </Link>

          <div className="flex flex-1 justify-end space-x-8 font-lora">

            {/* Redes */}
            <div className="flex items-center gap-3">
              <Share2 className="text-emerald" size={20} />
              <div className="flex flex-col">
                <span className="text-[10px] text-soft-gray uppercase tracking-wider">
                  Seguinos
                </span>
                <div className="flex gap-3 mt-0.5">
                  <a
                    href="#"
                    className="text-dark hover:text-emerald transition-colors"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="#"
                    className="text-dark hover:text-emerald transition-colors"
                  >
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <a
              href="#"
              className="flex items-center gap-3 border-l pl-8 border-gray-200"
            >
              <Mail className="text-emerald" size={20} />
              <div className="flex flex-col">
                <span className="text-[10px] text-soft-gray uppercase tracking-wider">
                  Email
                </span>
                <p className="text-[13px] font-semibold text-dark lowercase tracking-tight">
                  inmobiliariaterra@gmail.com
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="#"
              className="flex items-center gap-3 border-l pl-8 border-gray-200"
            >
              <MessageCircle className="text-emerald" size={20} />
              <div className="flex flex-col">
                <span className="text-[10px] text-soft-gray uppercase tracking-wider">
                  WhatsApp
                </span>
                <p className="text-[13px] font-semibold text-dark">
                  +54 9 298 123456
                </p>
              </div>
            </a>

            {/* Horario */}
            <div className="flex items-center gap-3 border-l pl-8 border-gray-200">
              <Clock className="text-emerald" size={20} />
              <div className="flex flex-col">
                <span className="text-[10px] text-soft-gray uppercase tracking-wider">
                  Atención
                </span>
                <p className="text-[13px] font-semibold text-dark uppercase">
                  Lun a Vie 9 - 18hs
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="relative z-10 font-montserrat bg-deep lg:bg-white text-white lg:text-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-6 xl:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo Mobile */}
            <div className="lg:hidden shrink-0">
              <button
                onClick={() => window.scrollTo(0, 0)}
                className="flex items-center"
              >
                <Image
                  src={branding.logos.footerFallback}
                  alt={branding.companyName}
                  width={110}
                  height={30}
                  className="object-contain"
                  priority
                />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-10">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  scroll
                  className="text-sm font-semibold tracking-wide hover:text-emerald transition-colors py-5 border-b-2 border-transparent hover:border-emerald"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Botón */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="hidden lg:block text-xs font-bold bg-coral hover:bg-coral-hover text-white px-5 py-2.5 rounded-sm transition-all shadow-md active:scale-95"
              >
                COTIZAR PROPIEDAD
              </a>

              <button
                className="lg:hidden p-2 text-emerald focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden absolute w-full bg-deep transition-all duration-300 ease-in-out z-50 overflow-hidden shadow-xl
          ${isOpen ? "max-h-125 border-t border-white/10" : "max-h-0"}`}
        >
          <div className="px-6 py-8 flex flex-col space-y-5">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                scroll
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold uppercase tracking-wider text-white hover:text-emerald transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Redes mobile */}
            <div className="flex flex-col gap-4 mt-6 border-t border-white/10 pt-4">
              <div className="flex items-center gap-3">
                <Share2 className="text-emerald" size={20} />
                <span className="text-white font-medium text-sm uppercase tracking-wide">
                  Seguinos
                </span>
              </div>
              <div className="flex gap-4 pl-5">
                <a
                  href="#"
                  className="text-white hover:text-emerald transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-emerald transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

          </div>
        </div>

      </nav>
    </header>
  );
}