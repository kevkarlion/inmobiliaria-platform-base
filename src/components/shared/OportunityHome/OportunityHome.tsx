// components/home/OportunityHome.tsx
export const revalidate = 120;
import PropertyGrid from "@/components/shared/PropertyGrid/PropertyGrid";
import { getUiProperties } from "@/components/server/data-access/get-ui-properties";

export default async function OportunityHome() {
  const properties = await getUiProperties({ 
    isOpportunity: true, 
    limit: 6 
  });

   if (!properties || properties.length === 0) {
    return null;
  }

  return (
    <PropertyGrid
      title="Destacadas"
      subtitle="Una selección exclusiva de inmuebles que sobresalen por su ubicación estratégica, valor competitivo y alto potencial de revalorización.
Cada unidad ha sido cuidadosamente elegida por reunir condiciones diferenciales dentro del mercado actual, ofreciendo una ventaja concreta para quienes buscan invertir con visión y asegurar resultados desde el primer momento."
      properties={properties}
      filter="oportunidad"
    />
  );
}
