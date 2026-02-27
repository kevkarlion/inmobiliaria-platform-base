"use client"

import { useCallback, useMemo, useState } from "react"
import { usePathname } from "next/navigation"
import { branding } from "@/utils/branding"
import { Share2, Link, MessageCircle, Facebook, Linkedin, Check } from "lucide-react"

interface PropertyShareProps {
  title: string
  price: string
  zone: string
}

export default function PropertyShare({
  title,
  price,
  zone,
}: PropertyShareProps) {
  const pathname = usePathname()
  const [copied, setCopied] = useState(false)

  const url = useMemo(() => {
    const base =
      (typeof process !== "undefined" && process.env.NEXT_PUBLIC_BASE_URL) ||
      branding.websiteUrl
    return `${base.replace(/\/$/, "")}${pathname}`
  }, [pathname])

  const shareText = `${title} | ${price} | ${zone}`

  const canNativeShare =
    typeof navigator !== "undefined" && typeof navigator.share === "function"

  const handleNativeShare = useCallback(async () => {
    if (!canNativeShare) return
    try {
      await navigator.share({
        title,
        text: shareText,
        url,
      })
    } catch (error) {
      console.error("Native share error:", error)
    }
  }, [canNativeShare, title, shareText, url])

  const shareWhatsapp = useCallback(() => {
    const wa = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${url}`)}`
    window.open(wa, "_blank", "noopener,noreferrer")
  }, [shareText, url])

  const shareFacebook = useCallback(() => {
    const fb = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    window.open(fb, "_blank", "noopener,noreferrer")
  }, [url])

  const shareLinkedin = useCallback(() => {
    const li = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    window.open(li, "_blank", "noopener,noreferrer")
  }, [url])

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      console.error("Copy link error:", error)
    }
  }, [url])

  return (
    <div className="w-full flex flex-col gap-4 relative">
      {/* Separador sutil */}
      <div className="flex items-center gap-3 my-2">
        <div className="h-px flex-1 bg-white/10" />
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">Difundir</span>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      {/* Botón principal estilizado */}
      <button
        onClick={handleNativeShare}
        disabled={!canNativeShare}
        className="flex items-center justify-center gap-3 w-full py-4 px-4 rounded-xl font-montserrat text-[11px] font-black uppercase tracking-[0.15em] bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-emerald/50 transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed group"
      >
        <Share2 size={16} className="text-emerald group-hover:scale-110 transition-transform" />
        Compartir Ficha
      </button>

      {/* Grilla de Redes */}
      <div className="grid grid-cols-4 gap-2">
        <a
          href="#!"
          onClick={(e) => { e.preventDefault(); shareWhatsapp(); }}
          className="flex items-center justify-center py-3 rounded-xl bg-white/5 border border-white/5 text-white/70 hover:text-[#25D366] hover:bg-[#25D366]/10 transition-all group"
          title="WhatsApp"
        >
          <MessageCircle size={18} className="group-hover:scale-110 transition-transform" />
        </a>

        <a
          href="#!"
          onClick={(e) => { e.preventDefault(); shareFacebook(); }}
          className="flex items-center justify-center py-3 rounded-xl bg-white/5 border border-white/5 text-white/70 hover:text-[#1877F2] hover:bg-[#1877F2]/10 transition-all group"
          title="Facebook"
        >
          <Facebook size={18} className="group-hover:scale-110 transition-transform" />
        </a>

        <a
          href="#!"
          onClick={(e) => { e.preventDefault(); shareLinkedin(); }}
          className="flex items-center justify-center py-3 rounded-xl bg-white/5 border border-white/5 text-white/70 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-all group"
          title="LinkedIn"
        >
          <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
        </a>

        <a
          href="#!"
          onClick={(e) => { e.preventDefault(); copyLink(); }}
          className={`flex items-center justify-center py-3 rounded-xl transition-all group ${
            copied 
              ? "bg-emerald text-white" 
              : "bg-white/5 border border-white/5 text-white/70 hover:text-emerald hover:bg-emerald/10"
          }`}
          title="Copiar Link"
        >
          {copied ? <Check size={18} /> : <Link size={18} className="group-hover:scale-110 transition-transform" />}
        </a>
      </div>

      {/* Toast minimalista */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 -top-12 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest
        backdrop-blur-xl bg-emerald text-white shadow-[0_10px_20px_rgba(16,185,129,0.3)]
        transition-all duration-500 flex items-center gap-2 whitespace-nowrap z-50
        ${
          copied
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-90 pointer-events-none"
        }`}
      >
        <Check size={12} strokeWidth={4} />
        Enlace listo para enviar
      </div>
    </div>
  )
}