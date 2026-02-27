/**
 * Configuración base SEO reutilizable para la plantilla inmobiliaria.
 * Se combina con branding para generar metadata en layout y páginas.
 */

export const seoConfig = {
  defaultTitle: "Plataforma Inmobiliaria Profesional",
  defaultDescription: "Sistema completo de gestión inmobiliaria. Venta y alquiler de propiedades.",
  defaultKeywords: [
    "inmobiliaria",
    "venta de propiedades",
    "alquiler",
    "terrenos",
    "gestión inmobiliaria",
  ],
  locale: "es_AR" as const,
  type: "website" as const,
  /** Rutas de imágenes por defecto (en /public) */
  defaultOgImage: "/og-image.png",
  defaultOgImageWidth: 1200,
  defaultOgImageHeight: 630,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
} as const;
