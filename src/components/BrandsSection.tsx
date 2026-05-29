"use client";
import { motion } from "framer-motion";

const brands = [
  {
    name: "Mercedes-Benz",
    tagline: "La Estrella de la Ruta",
    desc: "Stock completo para Actros MP1 al MP4, Sprinter, Axor, Atego y Arocs. Carrocería, impacto y filtración. Importación directa de calidad OEM.",
    models: ["Actros MP1–MP4", "Sprinter", "Axor", "Atego", "Arocs"],
    color: "from-green-600/20 to-green-900/10",
    accent: "text-green-400",
    border: "border-green-500/20",
    glow: "bg-green-500/10",
    logo: "MB",
  },
  {
    name: "Volvo",
    tagline: "Potencia Escandinava",
    desc: "Focos, parachoques, máscaras, puertas, spoilers, filtros y portafiltros para camiones Volvo. Piezas de importación directa con garantía.",
    models: ["FH 4ta Gen", "FH16", "FM", "FMX", "FL"],
    color: "from-cyan-600/20 to-cyan-900/10",
    accent: "text-green-400",
    border: "border-cyan-500/20",
    glow: "bg-cyan-500/10",
    logo: "VO",
  },
  {
    name: "Scania",
    tagline: "Ingeniería de Alto Rendimiento",
    desc: "Repuestos seleccionados para Scania R, S y G Series. Importación desde Europa con componentes de marcas como Febi Bilstein y Euroricambi.",
    models: ["R Series", "S Series", "G Series", "P Series"],
    color: "from-orange-600/20 to-orange-900/10",
    accent: "text-orange-400",
    border: "border-orange-500/20",
    glow: "bg-orange-500/10",
    logo: "SC",
  },
  {
    name: "MAN",
    tagline: "Ingeniería Alemana",
    desc: "Repuestos para camiones MAN con la confianza de la ingeniería alemana. Amplio stock de carrocería y filtración para los modelos más exigentes.",
    models: ["TGX", "TGS", "TGM", "TGL"],
    color: "from-red-600/20 to-red-900/10",
    accent: "text-red-400",
    border: "border-red-500/20",
    glow: "bg-red-500/10",
    logo: "MAN",
  },
  {
    name: "Freightliner",
    tagline: "Fuerza Americana",
    desc: "Componentes de impacto y carrocería para la línea Freightliner. Piezas importadas con respaldo de calidad para el mercado chileno.",
    models: ["Cascadia", "Columbia", "Coronado", "Classic"],
    color: "from-green-600/20 to-green-900/10",
    accent: "text-green-400",
    border: "border-green-500/20",
    glow: "bg-green-500/10",
    logo: "FL",
  },
  {
    name: "Renault",
    tagline: "Tecnología Francesa",
    desc: "Stock de repuestos para camiones Renault Trucks. Piezas de filtración, carrocería e impacto importadas directamente desde Europa.",
    models: ["T Series", "C Series", "K Series", "D Series"],
    color: "from-yellow-600/20 to-yellow-900/10",
    accent: "text-yellow-400",
    border: "border-yellow-500/20",
    glow: "bg-yellow-500/10",
    logo: "RT",
  },
];

export default function BrandsSection() {
  return (
    <section id="marcas" className="py-24 bg-[#020c02] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-900/40 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-medium tracking-widest uppercase mb-5">
            Marcas Disponibles
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Las Mejores Marcas
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Importación directa desde Alemania, Italia, Turquía y China. Marcas premium como Febi Bilstein, Euroricambi, ZF, SKF y Knorr.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {brands.map(({ name, tagline, desc, models, color, accent, border, glow, logo }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className={`group relative p-6 rounded-2xl bg-gradient-to-br ${color} border ${border} transition-all duration-300 overflow-hidden`}
            >
              <div className={`absolute -top-10 -right-10 w-36 h-36 ${glow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`w-12 h-12 rounded-xl ${glow} border ${border} flex items-center justify-center mb-4`}>
                <span className={`${accent} font-black text-sm`}>{logo}</span>
              </div>

              <div className={`${accent} text-xs font-medium tracking-widest uppercase mb-1`}>{tagline}</div>
              <h3 className="text-white text-lg font-bold mb-2">{name}</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">{desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {models.map((m) => (
                  <span key={m} className={`px-2 py-0.5 rounded-full text-xs border ${border} ${accent} bg-white/3`}>
                    {m}
                  </span>
                ))}
              </div>

              <a href="#catalogo" className={`inline-flex items-center gap-1 text-xs ${accent} hover:opacity-70 transition-opacity`}>
                Ver repuestos →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Import origins */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 rounded-2xl bg-white/3 border border-white/8 text-center"
        >
          <div className="text-gray-500 text-xs uppercase tracking-widest mb-3">Importación directa desde</div>
          <div className="flex flex-wrap justify-center gap-6">
            {["🇩🇪 Alemania", "🇮🇹 Italia", "🇹🇷 Turquía", "🇨🇳 China"].map((origin) => (
              <span key={origin} className="text-gray-300 text-sm font-medium">{origin}</span>
            ))}
          </div>
          <div className="text-gray-600 text-xs mt-3">Marcas: Febi Bilstein · Euroricambi · Master Power · ZF · SKF · Knorr</div>
        </motion.div>
      </div>
    </section>
  );
}
