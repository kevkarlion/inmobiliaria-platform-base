import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Zap,
  Users,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { branding } from "@/utils/branding";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  registration?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Julián Ferraro",
    title: "Director de Estrategia Inmobiliaria",
    image: "/img1.png", // Mantengo los paths para que no se rompan las imágenes
    registration: "Mat. Prof. 882-DF",
  },
  {
    name: "Valentina Soler",
    title: "Head of Luxury Real Estate",
    image: "/img2.png",
  },
  {
    name: "Maria Lombardi",
    title: "Consultora de Inversiones",
    image: "/img3.png",
  },
];

interface NosotrosContentProps {
  isMobile: boolean;
}

export default function NosotrosPage() {
  return (
    <main className="min-h-screen relative bg-light-bg">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] md:h-screen flex items-center justify-center overflow-hidden bg-deep">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/nosotros.webp"
              alt="Lifestyle Real Estate"
              fill
              className="object-cover opacity-40 mix-blend-luminosity"
              priority
              quality={90}
            />
            {/* Gradiente sutil para fusionar con el fondo deep */}
            <div className="absolute inset-0 bg-linear-to-b from-deep/20 via-transparent to-deep" />
          </div>
        </div>

        <div className="relative z-10 text-center px-6 mt-12 lg:mt-52 max-w-5xl">
          <h1 className="font-montserrat text-white mb-6">
            Redefiniendo el <span className="text-emerald">Estándar</span> Inmobiliario
          </h1>
          <p className="font-lora text-white/70 text-lg md:text-2xl italic max-w-2xl mx-auto leading-relaxed">
            Fusionamos análisis de datos, visión de mercado y un servicio boutique para transformar su patrimonio.
          </p>
        </div>
      </section>

      {/* --- SECCIÓN 1: MANIFIESTO --- */}
      <section className="relative py-24 bg-white   rounded-t-[3rem] z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="relative h-[500px] w-full group">
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl border-12 border-light-bg">
                <Image
                  src="/nosotros-section.webp"
                  alt="Nuestra Oficina"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-deep/20 lg:hidden" />
              </div>
              {/* Elemento decorativo */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald/10 rounded-full blur-3xl" />
            </div>

            <div className="space-y-8">
              <div className="inline-block bg-emerald/10 text-emerald px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                Nuestra Firma
              </div>
              <h2 className="font-montserrat text-deep text-3xl md:text-5xl font-bold leading-tight uppercase">
                Expertos en <br /> activos de alto valor
              </h2>
              <NosotrosContent isMobile={false} />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 2: PILARES --- */}
      <section className="py-24 bg-light-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Seguridad Jurídica",
                desc: "Cada movimiento está respaldado por un análisis legal exhaustivo, eliminando cualquier riesgo operativo.",
                color: "text-emerald"
              },
              {
                icon: Zap,
                title: "Agilidad Digital",
                desc: "Utilizamos tecnología de punta para que los tiempos de cierre sean récord, sin perder la atención al detalle.",
                color: "text-coral"
              },
              {
                icon: Users,
                title: "Trato Exclusivo",
                desc: "No somos una inmobiliaria de volumen. Somos una consultora de relaciones a largo plazo.",
                color: "text-deep"
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-10 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-deep/5 group"
              >
                <item.icon
                  size={40}
                  className={`${item.color} mb-6 transition-transform group-hover:scale-110 duration-300`}
                />
                <h4 className="font-montserrat text-xl font-bold uppercase tracking-tight text-deep mb-4">
                  {item.title}
                </h4>
                <p className="font-inter text-soft-gray text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 3: EL TEAM --- */}
      <section className="py-24 bg-deep relative overflow-hidden">
        {/* Luces de fondo (Glows) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral/5 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-xl">
              <h2 className="font-montserrat text-white text-4xl md:text-5xl font-bold uppercase mb-4">
                Liderazgo <span className="text-emerald">Efectivo</span>
              </h2>
              <p className="font-lora text-white/50 italic text-lg">
                Un equipo multidisciplinario enfocado en maximizar el rendimiento de su inversión.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="relative w-full aspect-4/5 mb-8 overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-deep via-transparent to-transparent opacity-60" />
                </div>
                <h4 className="font-montserrat text-2xl font-bold text-white uppercase mb-2 group-hover:text-emerald transition-colors">
                  {member.name}
                </h4>
                <p className="font-inter text-emerald font-semibold text-xs tracking-[0.2em] uppercase mb-2">
                  {member.title}
                </p>
                {member.registration && (
                  <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest px-3 py-1 border border-white/10 rounded-full">
                    {member.registration}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-montserrat text-deep text-4xl md:text-6xl font-bold uppercase mb-10 leading-none">
            Comience su <br />
            <span className="text-coral">nueva etapa</span> hoy
          </h2>
          <a
            href="#"
            
            rel="noopener noreferrer"
            className="btn-cta rounded-full group px-10 py-5"
          >
            <MessageCircle size={20} className="mr-3" />
            Consultar con un Asesor
            <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </section>
    </main>
  );
}

function NosotrosContent({ isMobile }: NosotrosContentProps) {
  return (
    <div className="space-y-6">
      <p className="font-inter text-soft-gray text-lg leading-relaxed">
        En <span className="text-deep font-bold">Inmobiliaria Terra</span>, no solo gestionamos metros cuadrados; diseñamos 
        <span className="text-deep font-bold italic"> soluciones de vida</span>. Entendemos que una propiedad es el activo más importante de una persona, por eso nuestro enfoque es 100% estratégico.
      </p>
      <div className="border-l-4 border-emerald pl-6 space-y-4">
        <p className="font-lora text-soft-gray italic text-lg leading-relaxed">
          "Nuestra misión es transformar la complejidad del mercado en una experiencia fluida, transparente y, sobre todo, altamente rentable para usted."
        </p>
      </div>
      <p className="font-inter text-soft-gray text-base leading-relaxed">
        Acompañamos a inversores y familias en la toma de decisiones críticas, aportando claridad técnica y un profundo conocimiento del mercado regional.
      </p>
    </div>
  );
}