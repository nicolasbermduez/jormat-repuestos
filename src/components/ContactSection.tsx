"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+56 9 9179 7881",
    href: "https://wa.me/56991797881",
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
  },
  {
    icon: Phone,
    label: "Teléfono 1",
    value: "+56 9 9205 0943",
    href: "tel:+56992050943",
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
  },
  {
    icon: Phone,
    label: "Teléfono 2",
    value: "+56 9 8807 5107",
    href: "tel:+56988075107",
    color: "text-green-400",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "jormatrepuestos@gmail.com",
    href: "mailto:jormatrepuestos@gmail.com",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: MapPin,
    label: "Casa Matriz",
    value: "Valdivia 906, Los Ángeles, Bío Bío",
    href: "https://maps.google.com/?q=Valdivia+906+Los+Angeles+Chile",
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/20",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun–Vie 9:00–13:00 / 15:00–17:00",
    href: "#",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/20",
  },
];

const sucursales = ["Los Ángeles", "Chillán", "Concepción", "Constitución", "Temuco"];

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-[#020c02] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-medium tracking-widest uppercase mb-5">
            Contáctanos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Estamos en Todo Chile
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Más de 20 años de experiencia. Casa matriz en Los Ángeles con sucursales en 5 ciudades.
          </p>
          {/* Sucursales */}
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {sucursales.map((s) => (
              <span key={s} className="px-3 py-1 rounded-full text-xs bg-green-500/10 border border-green-500/20 text-green-400">
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {contacts.map(({ icon: Icon, label, value, href, color, bg }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={`flex items-center gap-3 p-4 rounded-xl border ${bg} hover:opacity-80 transition-opacity`}
              >
                <div className={`w-9 h-9 rounded-lg ${bg} flex items-center justify-center flex-shrink-0 ${color}`}>
                  <Icon size={16} />
                </div>
                <div>
                  <div className="text-gray-500 text-xs">{label}</div>
                  <div className="text-white font-medium text-xs leading-tight">{value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-white/10 h-80 lg:h-auto relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.0!2d-72.3500!3d-37.4700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sValdivia+906%2C+Los+%C3%81ngeles%2C+Chile!5e0!3m2!1ses!2scl!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[300px]"
            />
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12"
        >
          {[
            { num: "2001", label: "Fundada" },
            { num: "+22.000", label: "Artículos en Stock" },
            { num: "5", label: "Sucursales en Chile" },
            { num: "+20", label: "Años de Experiencia" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center p-5 rounded-2xl bg-white/3 border border-white/8">
              <div className="text-2xl font-black text-white mb-1">{num}</div>
              <div className="text-gray-500 text-xs">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
