"use client";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, Share2, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#010118] border-t border-white/8 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-white font-black text-sm">JR</span>
              </div>
              <div>
                <div className="text-white font-bold text-sm">JORMAT</div>
                <div className="text-blue-400 text-xs tracking-widest uppercase">Repuestos</div>
              </div>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed mb-1">
              Desde 2001 ofreciendo la mayor gama de repuestos y accesorios que su camión necesita.
            </p>
            <p className="text-blue-400 text-xs font-medium mb-4">
              Repuestos que mueven Chile 🇨🇱
            </p>
            <div className="flex gap-3">
              {[Share2, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href={i === 0 ? "https://www.facebook.com/repuestosjormat" : "https://importadorajormat.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Catálogo */}
          <div>
            <div className="text-white font-semibold text-sm mb-4">Catálogo</div>
            <ul className="space-y-2">
              {["Focos", "Parachoques", "Máscaras frontales", "Puertas", "Kits de spoilers", "Filtros de aire", "Portafiltros"].map((item) => (
                <li key={item}>
                  <a href="#catalogo" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Marcas */}
          <div>
            <div className="text-white font-semibold text-sm mb-4">Marcas</div>
            <ul className="space-y-2">
              {["Mercedes-Benz", "Volvo", "Scania", "MAN", "Freightliner", "Renault"].map((item) => (
                <li key={item}>
                  <a href="#marcas" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="text-white font-semibold text-sm mt-5 mb-3">Sucursales</div>
            <ul className="space-y-1.5">
              {["Los Ángeles", "Chillán", "Concepción", "Constitución", "Temuco"].map((item) => (
                <li key={item} className="text-gray-600 text-xs">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <div className="text-white font-semibold text-sm mb-4">Contacto</div>
            <div className="space-y-3">
              {[
                { icon: MessageCircle, text: "+56 9 9179 7881", href: "https://wa.me/56991797881", color: "text-green-400" },
                { icon: Phone, text: "+56 9 9205 0943", href: "tel:+56992050943", color: "text-blue-400" },
                { icon: Phone, text: "+56 9 8807 5107", href: "tel:+56988075107", color: "text-blue-400" },
                { icon: Mail, text: "jormatrepuestos@gmail.com", href: "mailto:jormatrepuestos@gmail.com", color: "text-purple-400" },
              ].map(({ icon: Icon, text, href, color }) => (
                <a key={text} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 hover:text-gray-300 text-xs transition-colors">
                  <Icon size={12} className={color} />
                  {text}
                </a>
              ))}
              <div className="pt-1 text-gray-600 text-xs">Valdivia 906, Los Ángeles, Bío Bío</div>
              <div className="text-gray-600 text-xs">Lun–Vie 9:00–13:00 / 15:00–17:00</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Importadora Jormat. Todos los derechos reservados. Desde 2001.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Políticas de Privacidad</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
