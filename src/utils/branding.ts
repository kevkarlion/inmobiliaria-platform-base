/**
 * Configuración de marca para la plantilla inmobiliaria.
 * Solo paleta de colores, logos y nombre: el resto de la web (redes, horarios, contacto) se mantiene como está.
 */

export const branding = {
  /** Nombre de la inmobiliaria (footer, metadata, alt de logos, admin) */
  companyName: "Inmobiliaria Terra",
  /** Localidad para SEO/metadata (ej: "General Roca") */
  locality: "",
  /** URL base del sitio (metadata, sitemap, compartir) */
  websiteUrl: "https://ejemplo.com",
  /** Color principal (navbar y donde se use). Hex. */
  primaryColor: "#001d3d",
  /** Color secundario / acentos. Hex. */
  secondaryColor: "#f59e0b",
  /** Crédito del desarrollador en el footer */
  developerCredit: {
    name: "devweb Patagonia",
    url: "https://www.devwebpatagonia.com",
  },
  /** Rutas de logos (archivos en /public) */
  logos: {
    navbar: "/inmo-logo-nav.png",
    footer: "/logo-navbar-terra.png",
    footerFallback: "/logo-navbar-terra.png",
  },
} as const;
