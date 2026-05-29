"use client";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, MessageCircle, PackageCheck, CreditCard, Truck } from "lucide-react";

const steps = [
  { icon: Search, num: "01", title: "Busca tu producto", desc: "Explora nuestro catálogo completo de repuestos para Mercedes-Benz, Volvo y Scania." },
  { icon: SlidersHorizontal, num: "02", title: "Filtra por marca o categoría", desc: "Usa los filtros por marca, modelo, año o categoría para encontrar exactamente lo que necesitas." },
  { icon: MessageCircle, num: "03", title: "Cotiza por WhatsApp", desc: "Envía tu consulta directamente por WhatsApp con un click. Respuesta en minutos." },
  { icon: PackageCheck, num: "04", title: "Confirma disponibilidad", desc: "Verificamos el stock en tiempo real y te confirmamos disponibilidad y plazo de entrega." },
  { icon: CreditCard, num: "05", title: "Coordina el pago", desc: "Aceptamos transferencia bancaria, WebPay y otros métodos de pago seguros." },
  { icon: Truck, num: "06", title: "Despacho a tu ciudad", desc: "Enviamos a todo Chile. Coordinamos transporte de carga para repuestos de gran tamaño." },
];

export default function HowToBuySection() {
  return (
    <section id="como-comprar" className="py-24 bg-[#010118] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-medium tracking-widest uppercase mb-5">
            Proceso de Compra
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            ¿Cómo Comprar?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Simple y rápido. Encuentra tu repuesto y cotiza en minutos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map(({ icon: Icon, num, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-blue-500/25 hover:bg-white/5 transition-all duration-300"
            >
              {/* Step number */}
              <div className="text-6xl font-black text-white/4 absolute top-4 right-5 select-none">
                {num}
              </div>

              <div className="relative">
                <div className="w-11 h-11 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center mb-4 group-hover:bg-blue-500/25 transition-colors">
                  <Icon size={20} className="text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="https://wa.me/56991797881?text=Hola%2C%20quiero%20cotizar%20un%20repuesto."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-semibold transition-all shadow-xl shadow-green-500/25 hover:shadow-green-500/40"
          >
            <MessageCircle size={18} />
            Cotizar ahora por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
