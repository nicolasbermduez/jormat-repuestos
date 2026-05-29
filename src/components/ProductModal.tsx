"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, CheckCircle, XCircle, Tag, Truck, Calendar, Hash } from "lucide-react";
import { type Product } from "@/data/products";

function buildWhatsAppLink(product: Product) {
  const text = encodeURIComponent(
    `Hola, quiero cotizar este producto:\nProducto: ${product.name}\nMarca: ${product.brand}\nModelo: ${product.model}\nCódigo: ${product.code}\nMi nombre es: `
  );
  return `https://wa.me/56991797881?text=${text}`;
}

export default function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-[#060f06] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
          >
            <X size={16} />
          </button>

          {/* Image */}
          <div className="relative h-56 overflow-hidden rounded-t-2xl">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060f06] to-transparent" />
            <div className={`absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-md ${
              product.available
                ? "bg-green-500/20 border-green-500/30 text-green-400"
                : "bg-orange-500/20 border-orange-500/30 text-orange-400"
            }`}>
              {product.available ? <CheckCircle size={12} /> : <XCircle size={12} />}
              {product.available ? "Disponible" : "Consultar stock"}
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="text-green-400 text-xs mb-2">{product.category}</div>
            <h2 className="text-white text-xl font-bold mb-1">{product.name}</h2>
            <p className="text-gray-400 text-sm mb-5">{product.description}</p>

            {/* Specs grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { icon: Truck, label: "Marca", value: product.brand },
                { icon: Tag, label: "Modelo", value: product.model },
                { icon: Calendar, label: "Año", value: product.year },
                { icon: Hash, label: "Código", value: product.code },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-2 p-3 rounded-lg bg-white/5 border border-white/8">
                  <Icon size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-gray-500 text-xs">{label}</div>
                    <div className="text-white text-xs font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="mb-6">
              <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">Características</div>
              <div className="flex flex-wrap gap-2">
                {product.features.map((f) => (
                  <span key={f} className="px-2.5 py-1 rounded-full text-xs bg-green-500/10 border border-green-500/20 text-green-300">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href={buildWhatsAppLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-semibold transition-all shadow-lg shadow-green-500/25"
            >
              <MessageCircle size={18} />
              Cotizar este producto por WhatsApp
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
