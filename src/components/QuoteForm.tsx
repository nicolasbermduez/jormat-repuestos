"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const truckBrands = ["Mercedes-Benz", "Volvo", "Scania", "MAN", "Freightliner", "Renault", "Otro"];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="cotizar" className="py-24 bg-[#020c02] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-900/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-medium tracking-widest uppercase mb-5">
            Formulario de Cotización
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Solicita tu Cotización
          </h2>
          <p className="text-gray-400">
            Completa el formulario y te respondemos a la brevedad.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-2xl bg-white/3 border border-white/10 backdrop-blur-sm"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-400" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">¡Solicitud enviada!</h3>
              <p className="text-gray-400">Te contactaremos a la brevedad para confirmar tu cotización.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-green-400 hover:text-green-300 text-sm"
              >
                Enviar otra solicitud
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Nombre *" placeholder="Tu nombre completo" required />
                <Field label="Teléfono *" type="tel" placeholder="+56 9 XXXX XXXX" required />
                <Field label="Correo *" type="email" placeholder="correo@ejemplo.com" required />
                <Field label="Empresa" placeholder="Nombre de empresa (opcional)" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="text-gray-400 text-xs font-medium block mb-1.5">Marca del camión *</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-green-500/50 transition-all"
                  >
                    <option value="">Seleccionar</option>
                    {truckBrands.map((b) => (
                      <option key={b} value={b} className="bg-[#060f06]">{b}</option>
                    ))}
                  </select>
                </div>
                <Field label="Modelo *" placeholder="Ej: Actros MP4" required />
                <Field label="Año" placeholder="Ej: 2018" />
              </div>

              <Field label="Producto que necesita *" placeholder="Ej: Parachoques frontal" required />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Código / N° de parte" placeholder="Ej: MB-PAR-001 (si lo tienes)" />
                <div>
                  <label className="text-gray-400 text-xs font-medium block mb-1.5">Foto de referencia</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-sm focus:outline-none focus:border-green-500/50 transition-all file:mr-3 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:bg-green-500/20 file:text-green-400 cursor-pointer"
                  />
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-xs font-medium block mb-1.5">Mensaje adicional</label>
                <textarea
                  rows={4}
                  placeholder="Información adicional que nos ayude a encontrar el repuesto correcto..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-green-500/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-semibold transition-all shadow-lg shadow-green-500/25 disabled:opacity-70"
              >
                {loading ? (
                  <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                ) : (
                  <>
                    <Send size={16} />
                    Solicitar Cotización
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label, placeholder, type = "text", required = false,
}: {
  label: string; placeholder: string; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="text-gray-400 text-xs font-medium block mb-1.5">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-green-500/50 focus:bg-white/8 transition-all"
      />
    </div>
  );
}
