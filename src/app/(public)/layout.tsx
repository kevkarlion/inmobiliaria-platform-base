// layout.tsx
import "@/app/globals.css";
import { PropertyProvider } from "@/context/PropertyContext";
import { Playfair_Display, Manrope } from "next/font/google";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton/WhatsAppButton";
import { branding } from "@/utils/branding";
import { seoConfig } from "@/utils/seo";

/* =========================
   FONTS NUEVAS
========================= */

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

/* =========================
   SEO DINÁMICO
========================= */

const defaultTitle = branding.locality
  ? `${branding.companyName} | Inmobiliaria en ${branding.locality}`
  : branding.companyName;

const defaultDescription = branding.locality
  ? `${branding.companyName} es una inmobiliaria en ${branding.locality}. ${seoConfig.defaultDescription}`
  : seoConfig.defaultDescription;

const ogDescription = branding.locality
  ? `Encontrá casas, departamentos y terrenos en venta y alquiler en ${branding.locality}.`
  : seoConfig.defaultDescription;

export const metadata = {
  metadataBase: new URL(branding.websiteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${branding.companyName}`,
  },
  description: defaultDescription,
  // keywords: branding.locality
  //   ? [
  //       ...seoConfig.defaultKeywords,
  //       `inmobiliaria ${branding.locality.toLowerCase()}`,
  //       `propiedades ${branding.locality.toLowerCase()}`,
  //     ]
  //   : seoConfig.defaultKeywords,
  authors: [{ name: branding.companyName }],
  creator: branding.companyName,
  openGraph: {
    title: defaultTitle,
    description: ogDescription,
    url: branding.websiteUrl,
    siteName: branding.companyName,
    locale: seoConfig.locale,
    type: seoConfig.type,
    images: [
      {
        url: seoConfig.defaultOgImage,
        width: seoConfig.defaultOgImageWidth,
        height: seoConfig.defaultOgImageHeight,
        alt: branding.companyName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: branding.companyName,
    description: defaultDescription,
    images: [seoConfig.defaultOgImage],
  },
  icons: seoConfig.icons,
  robots: seoConfig.robots,
};

/* =========================
   ROOT LAYOUT
========================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${manrope.variable}`}
    >
      <body className="bg-oxford overflow-x-hidden font-sans">
        <PropertyProvider>
          <Navbar />

          <main className="flex flex-col">
            {children}
          </main>

          <Footer />
          <WhatsAppButton />
        </PropertyProvider>
      </body>
    </html>
  );
}