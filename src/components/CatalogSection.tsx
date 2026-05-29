"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MessageCircle, Eye, CheckCircle, XCircle, SlidersHorizontal, X } from "lucide-react";
import { products, type Brand, type Category, type Product } from "@/data/products";
import ProductModal from "./ProductModal";

const brands: Brand[] = ["Mercedes-Benz", "Volvo", "Scania", "MAN", "Freightliner", "Renault"];
const categories: Category[] = [
  "Focos", "Parachoques", "Máscaras frontales", "Puertas",
  "Kits de spoilers", "Filtros de aire", "Portafiltros de aire",
];

function buildWhatsAppLink(product: Product) {
  const text = encodeURIComponent(
    `Hola, quiero cotizar este producto:\nProducto: ${product.name}\nMarca: ${product.brand}\nModelo: ${product.model}\nCódigo: ${product.code}\nMi nombre es: `
  );
  return `https://wa.me/56991797881?text=${text}`;
}

export default function CatalogSection() {
  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<Brand | "">("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "">("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.code.toLowerCase().includes(search.toLowerCase()) ||
        p.model.toLowerCase().includes(search.toLowerCase());
      const matchBrand = !selectedBrand || p.brand === selectedBrand;
      const matchCategory = !selectedCategory || p.category === selectedCategory;
      return matchSearch && matchBrand && matchCategory;
    });
  }, [search, selectedBrand, selectedCategory]);

  const clearFilters = () => {
    setSearch("");
    setSelectedBrand("");
    setSelectedCategory("");
  };

  const hasFilters = search || selectedBrand || selectedCategory;

  return (
    <section id="catalogo" className="py-24 bg-[#010118] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-900/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-medium tracking-widest uppercase mb-5">
            Catálogo Completo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Repuestos Disponibles
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Filtra por marca, categoría o busca directamente por nombre, código o modelo.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          {/* Search bar */}
          <div className="flex gap-3 mb-4">
            <div className="flex-1 relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Buscar por nombre, código o modelo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all text-sm"
            >
              <SlidersHorizontal size={16} />
              <span className="hidden sm:inline">Filtros</span>
            </button>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-all text-sm"
              >
                <X size={16} />
                <span className="hidden sm:inline">Limpiar</span>
              </button>
            )}
          </div>

          {/* Brand filters */}
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-gray-500 text-xs self-center mr-1">Marca:</span>
            <button
              onClick={() => setSelectedBrand("")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                !selectedBrand
                  ? "bg-blue-600/30 border-blue-500/50 text-blue-300"
                  : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
              }`}
            >
              Todas
            </button>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBrand(b === selectedBrand ? "" : b)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                  selectedBrand === b
                    ? "bg-blue-600/30 border-blue-500/50 text-blue-300"
                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                }`}
              >
                {b}
              </button>
            ))}
          </div>

          {/* Category filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-wrap gap-2"
              >
                <span className="text-gray-500 text-xs self-center mr-1">Categoría:</span>
                <button
                  onClick={() => setSelectedCategory("")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                    !selectedCategory
                      ? "bg-blue-600/30 border-blue-500/50 text-blue-300"
                      : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                  }`}
                >
                  Todas
                </button>
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCategory(c === selectedCategory ? "" : c)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                      selectedCategory === c
                        ? "bg-blue-600/30 border-blue-500/50 text-blue-300"
                        : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results count */}
        <div className="text-gray-500 text-sm mb-6">
          {filtered.length} producto{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
        </div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/8 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010118] via-transparent to-transparent" />
                  {/* Availability badge */}
                  <div className={`absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border backdrop-blur-md ${
                    product.available
                      ? "bg-green-500/20 border-green-500/30 text-green-400"
                      : "bg-orange-500/20 border-orange-500/30 text-orange-400"
                  }`}>
                    {product.available ? <CheckCircle size={10} /> : <XCircle size={10} />}
                    {product.available ? "Disponible" : "Consultar"}
                  </div>
                  {/* Brand badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium bg-blue-600/30 border border-blue-500/30 text-blue-300 backdrop-blur-md">
                    {product.brand.split("-")[0]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="text-blue-400 text-xs mb-1">{product.category}</div>
                  <h3 className="text-white font-semibold text-sm mb-1 leading-snug line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="text-gray-500 text-xs mb-1">
                    {product.model} · {product.year}
                  </div>
                  <div className="text-gray-600 text-xs font-mono mb-4">{product.code}</div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <a
                      href={buildWhatsAppLink(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-green-600/15 border border-green-500/25 text-green-400 hover:bg-green-600/30 transition-all text-xs font-medium"
                    >
                      <MessageCircle size={12} />
                      Cotizar
                    </a>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 hover:bg-blue-600/25 transition-all text-xs"
                    >
                      <Eye size={12} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-gray-500"
          >
            <Search size={40} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg">No se encontraron productos</p>
            <button onClick={clearFilters} className="mt-4 text-blue-400 hover:text-blue-300 text-sm">
              Limpiar filtros
            </button>
          </motion.div>
        )}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
}
