'use client'
import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5492984123456";
  const message = "Hola! Me gustaría obtener más información sobre una propiedad.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href="#!"
      onClick={(e) => {
        e.preventDefault();
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      }}
      className="fixed bottom-6 right-6 z-999 flex items-center justify-center 
                 w-14 h-14 md:w-16 md:h-16 
                 bg-[#25D366] text-white rounded-full shadow-2xl 
                 hover:scale-110 active:scale-95 transition-all duration-300
                 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Tooltip: Aseguramos visibilidad con z-50 y quitando cualquier posible overflow del padre */}
      <span className="absolute right-full mr-4 bg-deep text-white text-[11px] font-black uppercase tracking-widest
                       px-4 py-2.5 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 
                       pointer-events-none transition-all duration-300 whitespace-nowrap hidden md:block
                       translate-x-2 group-hover:translate-x-0">
        ¿Necesitás ayuda?
        {/* Flechita del tooltip */}
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-deep rotate-45" />
      </span>

      {/* Icono de Lucide */}
      <MessageCircle size={30} className="fill-current relative z-10" />

      {/* Efecto de pulso suave */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping" />
    </a>
  );
};

export default WhatsAppButton;