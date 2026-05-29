"use client";
import { useRef, Suspense, lazy } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, Truck, Zap } from "lucide-react";

const TruckScene = lazy(() => import("./TruckScene"));

const badges = [
  { icon: Shield, label: "Garantía Oficial" },
  { icon: Truck, label: "Despacho a Chile" },
  { icon: Zap, label: "Respuesta Rápida" },
];

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#010118]"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(74,158,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(74,158,255,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-800/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* LEFT - Text content */}
        <motion.div
          style={{ y, opacity }}
          className="flex-1 flex flex-col justify-center py-10 lg:py-0 z-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-medium tracking-widest uppercase mb-6 self-start"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Especialistas en Camiones Pesados
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
          >
            Repuestos para
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
              Camiones
            </span>
            <br />
            en Chile
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-base lg:text-lg max-w-xl mb-8 leading-relaxed"
          >
            Importación directa desde Alemania, Italia, Turquía y China. Más de{" "}
            <span className="text-white font-semibold">22.000 artículos</span> para{" "}
            <span className="text-white font-semibold">Mercedes-Benz</span>,{" "}
            <span className="text-white font-semibold">Volvo</span>,{" "}
            <span className="text-white font-semibold">Scania</span> y más.
            Desde 2001. Despacho a todo Chile.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs"
              >
                <Icon size={13} className="text-blue-400" />
                {label}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#catalogo"
              className="group flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold text-sm transition-all duration-300 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50"
            >
              Ver Catálogo
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/56991797881?text=Hola%2C%20quiero%20cotizar%20un%20repuesto."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-green-600/15 border border-green-500/30 hover:bg-green-600/30 hover:border-green-400/50 text-green-400 hover:text-green-300 font-semibold text-sm transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Cotizar por WhatsApp
            </a>
          </motion.div>

          {/* Brand logos */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="flex items-center gap-6 mt-12"
          >
            <span className="text-gray-600 text-xs uppercase tracking-wider">Marcas:</span>
            {["Mercedes-Benz", "Volvo", "Scania", "MAN", "Freightliner"].map((brand) => (
              <span
                key={brand}
                className="text-gray-400 text-xs font-semibold tracking-wide hover:text-white transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT - 3D Truck */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex-1 w-full lg:w-auto h-[380px] lg:h-[580px] relative"
        >
          {/* Glow under truck */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-72 h-16 bg-blue-500/20 rounded-full blur-2xl" />
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-blue-500/30 border-t-blue-400 animate-spin" />
              </div>
            }
          >
            <TruckScene />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
