"use client";
import { motion } from "framer-motion";
import { Lightbulb, Shield, Car, DoorOpen, Wind, Filter, Box } from "lucide-react";

const categories = [
  {
    icon: Lightbulb,
    name: "Focos",
    desc: "LED y halógenos para Mercedes, Volvo y Scania. Mayor seguridad en ruta.",
    color: "from-yellow-500/20 to-yellow-600/5",
    border: "border-yellow-500/20",
    iconColor: "text-yellow-400",
    href: "#catalogo",
  },
  {
    icon: Shield,
    name: "Parachoques",
    desc: "Protección frontal de alta resistencia. Diseños originales y sport.",
    color: "from-green-500/20 to-green-600/5",
    border: "border-green-500/20",
    iconColor: "text-green-400",
    href: "#catalogo",
  },
  {
    icon: Car,
    name: "Máscaras Frontales",
    desc: "Máscaras completas con rejilla. Calidad OEM para todas las marcas.",
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
    iconColor: "text-purple-400",
    href: "#catalogo",
  },
  {
    icon: DoorOpen,
    name: "Puertas",
    desc: "Puertas completas con vidrio y mecanismo. Stock para principales modelos.",
    color: "from-cyan-500/20 to-cyan-600/5",
    border: "border-cyan-500/20",
    iconColor: "text-green-400",
    href: "#catalogo",
  },
  {
    icon: Wind,
    name: "Kits de Spoilers",
    desc: "Aerodinámica profesional. Reduce consumo y mejora estabilidad a alta velocidad.",
    color: "from-green-500/20 to-green-600/5",
    border: "border-green-500/20",
    iconColor: "text-green-400",
    href: "#catalogo",
  },
  {
    icon: Filter,
    name: "Filtros de Aire",
    desc: "Alta eficiencia de filtración. Protege el motor en condiciones extremas.",
    color: "from-red-500/20 to-red-600/5",
    border: "border-red-500/20",
    iconColor: "text-red-400",
    href: "#catalogo",
  },
  {
    icon: Box,
    name: "Portafiltros",
    desc: "Carcasas de alta durabilidad. Sellado hermético para máximo rendimiento.",
    color: "from-orange-500/20 to-orange-600/5",
    border: "border-orange-500/20",
    iconColor: "text-orange-400",
    href: "#catalogo",
  },
];

export default function CategoriesSection() {
  return (
    <section id="categorias" className="py-24 bg-[#020c02] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-medium tracking-widest uppercase mb-5">
            Categorías
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Todo lo que Necesitas
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Repuestos de impacto, carrocería y filtración para mantener tu camión en la ruta.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map(({ icon: Icon, name, desc, color, border, iconColor, href }, i) => (
            <motion.a
              key={name}
              href={href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className={`group relative p-5 rounded-2xl bg-gradient-to-br ${color} border ${border} hover:border-opacity-60 transition-all duration-300 cursor-pointer overflow-hidden`}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/3 rounded-2xl" />

              <div className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-3 ${iconColor}`}>
                <Icon size={20} />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1.5">{name}</h3>
              <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
