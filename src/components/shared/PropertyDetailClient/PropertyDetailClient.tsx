import { mapPropertyToUI } from "@/domain/mappers/mapPropertyToUI";
import { PropertyGallery } from "@/components/shared/PropertyGalllery/PropertyGallery";
import { PropertyResponse } from "@/dtos/property/property-response.dto";
import { formatPrice } from "@/utils/formatPrice";
import PropertyShare from "@/components/shared/PropertyShare/PropertyShare";
import { MapPin, CheckCircle2, Ruler, BedDouble, Bath, Car } from "lucide-react";

export function PropertyDetailClient({
  property,
}: {
  property: PropertyResponse;
}) {
  const p = mapPropertyToUI(property);

  return (
    <section className="w-full bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 py-14">
        {/* CABECERA DINÁMICA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-8 border-b border-deep/10 pb-12 pt-12 lg:pt-32">
          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-deep text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                {p.operationType}
              </span>
              {p.opportunity && (
                <span className="bg-emerald text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg shadow-emerald/20">
                  Oportunidad
                </span>
              )}
              {p.featured && (
                <span className="bg-coral text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                  Destacada
                </span>
              )}
              {p.premium && (
                <span className="bg-gradient-to-r from-deep to-slate-700 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-white/20">
                  Premium Estate
                </span>
              )}
            </div>

            <h1 className="font-montserrat text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9] text-deep">
              {p.title}
            </h1>

            <div className="flex items-center gap-2 text-soft-gray font-medium text-lg">
              <MapPin size={20} className="text-emerald" />
              <span>{p.street} {p.number}</span>
              <span className="text-deep/20 mx-2">|</span>
              <span className="italic">{p.zoneName}</span>
            </div>
          </div>

          <div className="flex flex-col md:items-end bg-white p-6 rounded-3xl shadow-sm border border-deep/5">
            <span className="text-xs font-black uppercase tracking-widest text-soft-gray mb-2">
              Valor de Inversión
            </span>
            <div className="font-montserrat text-4xl md:text-5xl font-black text-emerald flex items-baseline gap-2">
              <span className="text-xl opacity-60 font-bold">{p.currency}</span>
              <span>{formatPrice(p.amount)}</span>
            </div>
          </div>
        </div>

        {/* GALERÍA DE ALTO IMPACTO */}
        <div className="mb-16 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
          <PropertyGallery images={p.images} />
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            
            {/* Descripción Estilo Editorial */}
            {p.description && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-deep/10" />
                  <h3 className="font-montserrat text-sm font-black uppercase tracking-[0.3em] text-deep">
                    Reseña de la Propiedad
                  </h3>
                  <div className="h-px flex-1 bg-deep/10" />
                </div>
                <p className="whitespace-pre-line leading-relaxed text-xl font-inter text-soft-gray italic">
                  {p.description}
                </p>
              </div>
            )}

            {/* Ficha técnica con Iconos */}
            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-deep/5 border border-deep/5 p-10 md:p-14">
               <h4 className="font-montserrat text-xs font-black uppercase tracking-widest text-emerald mb-10 flex items-center gap-3">
                 <CheckCircle2 size={18} /> Especificaciones Técnicas
               </h4>
               <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-12 gap-x-8">
                <Item label="Categoría" value={p.typeName} icon={<CheckCircle2 size={16}/>} />
                <Item label="Ambientes" value={p.rooms} icon={<BedDouble size={16}/>} />
                <Item label="Dormitorios" value={p.bedrooms} icon={<BedDouble size={16}/>} />
                <Item label="Baños" value={p.bathrooms} icon={<Bath size={16}/>} />
                <Item label="Sup. Total" value={p.totalM2 ? `${p.totalM2} m²` : null} icon={<Ruler size={16}/>} />
                <Item label="Sup. Cubierta" value={p.coveredM2 ? `${p.coveredM2} m²` : null} icon={<Ruler size={16}/>} />
                <Item label="Cochera" value={p.garage ? "Espacio Incluido" : "No posee"} icon={<Car size={16}/>} />
                <Item label="Antigüedad" value={p.age ? `${p.age} años` : "A estrenar"} />
                <Item label="Estado" value={p.status} />
              </div>
            </div>

            {/* Tags Modernas */}
            {p.tags?.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {p.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-[11px] font-black uppercase tracking-widest bg-emerald/5 text-emerald border border-emerald/10 px-5 py-2 rounded-full"
                  >
                    # {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* SIDEBAR DE UBICACIÓN Y CONTACTO */}
          <div className="space-y-8">
            <div className="bg-deep p-8 md:p-10 rounded-[2.5rem] shadow-2xl sticky top-24 text-white overflow-hidden">
              {/* Glow decorativo interno */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald/20 blur-3xl rounded-full" />
              
              <h3 className="font-montserrat text-lg font-bold uppercase tracking-tight mb-8 relative z-10">
                Ubicación <span className="text-emerald">Estratégica</span>
              </h3>

              <div className="space-y-6 relative z-10">
                <Item label="Dirección" value={`${p.street} ${p.number}`} light />
                <Item label="Zona / Barrio" value={`${p.barrioName}, ${p.cityName}`} light />
                <Item label="Provincia" value={p.provinceName} light />
              </div>

              {p.mapsUrl && (
                <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                  <div className="w-full h-48 rounded-2xl overflow-hidden border border-white/5 mb-6 grayscale hover:grayscale-0 transition-all duration-700">
                    <iframe
                      src={p.mapsUrl}
                      className="w-full h-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <a
                    href={p.externalMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-emerald text-xs font-black uppercase tracking-widest transition-all"
                  >
                    Ver en pantalla completa ↗
                  </a>
                </div>
              )}

              <div className="mt-10 flex flex-col gap-4 w-full relative z-10">
                {p.contactPhone && (
                  <a
                    href={`https://wa.me/54${p.contactPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta bg-emerald hover:bg-white hover:text-deep text-center w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all transform hover:-translate-y-1 shadow-lg shadow-emerald/20"
                  >
                    Contactar Agente
                  </a>
                )}

                <PropertyShare
                  title={p.title}
                  price={`${p.currency} ${formatPrice(p.amount)}`}
                  zone={p.zoneName}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  function Item({
    label,
    value,
    light = false,
    icon,
  }: {
    label: string;
    value: React.ReactNode;
    light?: boolean;
    icon?: React.ReactNode;
  }) {
    if (!value) return null;

    return (
      <div className="flex flex-col gap-1">
        <span
          className={`text-[10px] font-black uppercase tracking-widest ${
            light ? "text-emerald/60" : "text-soft-gray/60"
          }`}
        >
          {label}
        </span>
        <div className="flex items-center gap-2">
           {icon && <span className={`${light ? "text-emerald" : "text-deep"} opacity-40`}>{icon}</span>}
           <span
            className={`text-lg font-bold leading-tight ${
              light ? "text-white" : "text-deep"
            }`}
          >
            {value}
          </span>
        </div>
      </div>
    );
  }
}