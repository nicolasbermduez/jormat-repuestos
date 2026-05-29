"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, Truck, Zap, Package } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

const badges = [
  { icon: Shield, label: "Garantía Oficial" },
  { icon: Truck, label: "Despacho a Chile" },
  { icon: Zap, label: "Respuesta Rápida" },
  { icon: Package, label: "+22.000 Artículos" },
];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section id="inicio" ref={ref} className="relative bg-[#020c02] overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,197,94,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.12) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Green glow orbs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-green-800/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-green-500/8 rounded-full blur-[100px] pointer-events-none" />

      {/* === TOP HERO — text + badges === */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-0">
        <motion.div style={{ y, opacity }} className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-medium tracking-widest uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Desde 2001 — Repuestos que mueven Chile 🇨🇱
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.0] tracking-tight mb-6"
          >
            Repuestos para
            <br />
            <span className="bg-gradient-to-r from-green-400 via-green-300 to-emerald-400 bg-clip-text text-transparent">
              Camiones
            </span>
            <br />
            <span className="text-white">en Chile</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-base lg:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Importación directa desde Alemania, Italia, Turquía y China.{" "}
            <span className="text-white font-semibold">+22.000 artículos</span> para{" "}
            <span className="text-green-400 font-semibold">Mercedes-Benz</span>,{" "}
            <span className="text-white font-semibold">Volvo</span>,{" "}
            <span className="text-white font-semibold">Scania</span> y más.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/4 border border-white/10 text-gray-300 text-xs font-medium backdrop-blur-sm"
              >
                <Icon size={13} className="text-green-400" />
                {label}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
          >
            <a
              href="#catalogo"
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold text-sm transition-all duration-300 shadow-2xl shadow-green-600/30 hover:shadow-green-500/50 hover:scale-105"
            >
              Ver Catálogo
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/56991797881?text=Hola%2C%20quiero%20cotizar%20un%20repuesto."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-black/40 border border-green-500/30 hover:bg-green-600/15 hover:border-green-400/50 text-green-400 hover:text-green-300 font-bold text-sm transition-all duration-300 backdrop-blur-sm"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Cotizar por WhatsApp
            </a>
          </motion.div>

          {/* Brand pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-6"
          >
            <span className="text-gray-600 text-xs uppercase tracking-wider">Marcas:</span>
            {["Mercedes-Benz", "Volvo", "Scania", "MAN", "Freightliner"].map((brand) => (
              <span key={brand} className="text-gray-500 hover:text-gray-300 text-xs font-medium tracking-wide transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* === 3D SCROLL SECTION — Truck image === */}
      <ContainerScroll
        titleComponent={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium tracking-widest uppercase">
              ✦ Mercedes-Benz Actros — Ingeniería de precisión
            </div>
          </motion.div>
        }
      >
        {/* Truck image inside the 3D card */}
        <div className="relative w-full h-full bg-[#030a03] rounded-xl overflow-hidden flex items-center justify-center">
          {/* Green scan line effect */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, transparent 0%, rgba(34,197,94,0.03) 50%, transparent 100%)",
            }}
          />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 z-10 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,197,94,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.2) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Corner brackets */}
          {[
            "top-4 left-4 border-t-2 border-l-2",
            "top-4 right-4 border-t-2 border-r-2",
            "bottom-4 left-4 border-b-2 border-l-2",
            "bottom-4 right-4 border-b-2 border-r-2",
          ].map((cls, i) => (
            <div key={i} className={`absolute w-8 h-8 ${cls} border-green-500/60 z-20`} />
          ))}
          {/* The truck image */}
          <img
            src="/actros.jpg"
            alt="Mercedes-Benz Actros"
            className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0 0 40px rgba(34,197,94,0.25)) drop-shadow(0 0 80px rgba(34,197,94,0.1))",
            }}
          />
          {/* Bottom green glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-green-500/15 blur-3xl rounded-full z-0" />
          {/* HUD labels */}
          <div className="absolute top-6 left-6 z-20">
            <div className="text-green-400/60 text-xs font-mono tracking-widest">ACTROS MP4</div>
            <div className="text-white/30 text-xs font-mono">S·MB·1845</div>
          </div>
          <div className="absolute bottom-6 right-6 z-20 text-right">
            <div className="text-green-400/60 text-xs font-mono tracking-widest">JORMAT REPUESTOS</div>
            <div className="text-white/30 text-xs font-mono">DESDE 2001</div>
          </div>
        </div>
      </ContainerScroll>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 z-20"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
