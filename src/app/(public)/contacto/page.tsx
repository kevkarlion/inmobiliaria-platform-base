import React from "react";
import {
  Mail,
  MessageCircle,
  Clock,
  Facebook,
  Instagram,
  ArrowRight,
  MapPin,
} from "lucide-react";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-light-bg pt-32 lg:pt-52 pb-0">
      {/* Patrón decorativo de fondo sutil */}
      <div
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none h-150"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230B132B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- CABECERA --- */}
        <div className="flex flex-col items-center text-center mb-20 space-y-6">
          <div className="inline-block bg-emerald/10 text-emerald px-4 py-1 rounded-full text-xs font-black uppercase tracking-[0.2em]">
            Canales Oficiales
          </div>
          <h1 className="font-montserrat text-deep text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Hablemos de su <br /> <span className="text-emerald">Próximo Paso</span>
          </h1>
          <p className="font-lora text-soft-gray text-lg md:text-xl italic max-w-2xl mx-auto leading-relaxed">
            Gestión personalizada y asesoramiento técnico para asegurar la rentabilidad de sus activos inmobiliarios.
          </p>
        </div>

        {/* --- GRILLA DE CONTACTO --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          
          {/* WhatsApp Card */}
          <a
            href="#"
            
            rel="noopener noreferrer"
            className="group p-10 bg-white rounded-4xl border border-deep/5 hover:border-emerald transition-all duration-500 shadow-sm hover:shadow-xl"
          >
            <div className="w-16 h-16 bg-deep rounded-2xl flex items-center justify-center text-emerald mb-8 group-hover:scale-110 group-hover:bg-emerald group-hover:text-white transition-all duration-500">
              <MessageCircle size={32} />
            </div>
            <h4 className="font-montserrat text-xl font-bold uppercase tracking-tight text-deep mb-2">
              WhatsApp
            </h4>
            <p className="font-inter text-soft-gray text-sm mb-6">
              Respuesta inmediata y atención directa por chat.
            </p>
            <span className="flex items-center gap-2 font-montserrat text-sm font-black text-deep group-hover:text-emerald transition-colors">
              +54 9 298 123456
              <ArrowRight size={16} />
            </span>
          </a>

          {/* Email Card */}
          <a
            href="#"
            className="group p-10 bg-white rounded-4xl border border-deep/5 hover:border-emerald transition-all duration-500 shadow-sm hover:shadow-xl"
          >
            <div className="w-16 h-16 bg-deep rounded-2xl flex items-center justify-center text-emerald mb-8 group-hover:scale-110 group-hover:bg-emerald group-hover:text-white transition-all duration-500">
              <Mail size={32} />
            </div>
            <h4 className="font-montserrat text-xl font-bold uppercase tracking-tight text-deep mb-2">
              Email
            </h4>
            <p className="font-inter text-soft-gray text-sm mb-6">
              Envío de documentación y consultas formales.
            </p>
            <span className="flex items-center gap-2 font-montserrat text-sm font-black text-deep group-hover:text-emerald transition-colors">
              inmoterra@gmail.com
              <ArrowRight size={16} />
            </span>
          </a>

          {/* Atención Card */}
          <div className="p-10 bg-deep rounded-4xl border border-deep shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald/10 blur-3xl rounded-full" />
            <div className="w-16 h-16 bg-emerald rounded-2xl flex items-center justify-center text-white mb-8">
              <Clock size={32} />
            </div>
            <h4 className="font-montserrat text-xl font-bold uppercase tracking-tight text-white mb-2">
              Horarios
            </h4>
            <p className="font-inter text-white/50 text-sm mb-6">
              Nuestra oficina operativa se encuentra a su disposición.
            </p>
            <div className="space-y-1">
              <span className="block font-montserrat text-xs font-black text-emerald uppercase tracking-[0.2em]">
                Lunes a Viernes
              </span>
              <span className="block font-montserrat text-lg font-bold text-white">
                09:00 — 18:00 HS
              </span>
            </div>
          </div>
        </div>

        {/* --- REDES SOCIALES --- */}
        <div className="py-20 border-t border-deep/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h3 className="font-montserrat text-2xl font-bold uppercase tracking-tight text-deep mb-2">
                Conectemos en <span className="text-emerald">Digital</span>
              </h3>
              <p className="font-lora text-soft-gray italic">
                Tendencias, nuevos ingresos y análisis del mercado real.
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-deep/5 text-deep hover:bg-deep hover:text-white transition-all duration-500 shadow-sm"
              >
                <Facebook size={22} />
              </a>
              <a
                href="#"
                className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white border border-deep/5 text-deep hover:bg-deep hover:text-white transition-all duration-500 shadow-sm"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- TASACIÓN SECTION (Impacto Coral) --- */}
      <section className="mt-20 py-32 bg-deep relative overflow-hidden rounded-t-[4rem]">
        {/* Glow decorativo Coral */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-coral/20 blur-[120px] rounded-full" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-montserrat text-3xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-10 leading-tight">
            ¿Necesita una <br />
            <span className="text-coral">Tasación Profesional?</span>
          </h2>
          <p className="font-inter text-white/60 mb-12 text-lg max-w-xl mx-auto">
            Utilizamos métodos comparativos y análisis de entorno para determinar el valor real de mercado de su propiedad.
          </p>
          <a
            href="#"
            
            rel="noopener noreferrer"
            className="btn-cta rounded-full group px-12 py-6 text-sm uppercase tracking-widest shadow-[0_20px_50px_rgba(255,90,95,0.3)]"
          >
            Agendar Tasación
            <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </section>
    </main>
  );
}