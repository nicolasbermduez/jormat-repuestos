export type Brand = "Mercedes-Benz" | "Volvo" | "Scania" | "MAN" | "Freightliner" | "Renault";
export type Category =
  | "Focos"
  | "Parachoques"
  | "Máscaras frontales"
  | "Puertas"
  | "Kits de spoilers"
  | "Filtros de aire"
  | "Portafiltros de aire";

export interface Product {
  id: string;
  name: string;
  category: Category;
  brand: Brand;
  model: string;
  year: string;
  code: string;
  description: string;
  features: string[];
  available: boolean;
  image: string;
  price?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Foco LED Delantero Derecho",
    category: "Focos",
    brand: "Mercedes-Benz",
    model: "Actros MP4",
    year: "2012-2024",
    code: "MB-FOC-001",
    description: "Foco LED delantero de alto rendimiento para Mercedes-Benz Actros MP4. Tecnología LED de última generación con mayor duración y menor consumo.",
    features: ["Tecnología LED", "IP67 resistente al agua", "Certificación ECE", "Plug & Play"],
    available: true,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: "2",
    name: "Parachoques Frontal Completo",
    category: "Parachoques",
    brand: "Mercedes-Benz",
    model: "Actros MP4 / MP5",
    year: "2012-2024",
    code: "MB-PAR-001",
    description: "Parachoques frontal original de alta resistencia para Mercedes-Benz Actros. Fabricado en polipropileno reforzado con fibra de vidrio.",
    features: ["Polipropileno reforzado", "Incluye rejillas de ventilación", "Compatible con sensores de parking", "Listo para pintar"],
    available: true,
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80",
  },
  {
    id: "3",
    name: "Máscara Frontal Completa",
    category: "Máscaras frontales",
    brand: "Mercedes-Benz",
    model: "Actros MP4",
    year: "2012-2020",
    code: "MB-MAS-001",
    description: "Máscara frontal completa original para Mercedes-Benz Actros MP4. Incluye rejilla central y laterales.",
    features: ["ABS de alta resistencia", "Acabado en negro brillante", "Rejilla cromada incluida", "OEM Quality"],
    available: true,
    image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=600&q=80",
  },
  {
    id: "4",
    name: "Puerta Conductor Completa",
    category: "Puertas",
    brand: "Volvo",
    model: "FH 4ta Generación",
    year: "2013-2024",
    code: "VO-PUE-001",
    description: "Puerta lado conductor completa para Volvo FH de 4ta generación. Incluye estructura, vidrio, espejo y mecanismo de cierre.",
    features: ["Estructura de acero de alta resistencia", "Vidrio laminado", "Mecanismo de cierre OEM", "Compatible con calefacción de espejo"],
    available: true,
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&q=80",
  },
  {
    id: "5",
    name: "Kit Spoiler Aerodinámico Completo",
    category: "Kits de spoilers",
    brand: "Volvo",
    model: "FH / FH16",
    year: "2013-2024",
    code: "VO-SPO-001",
    description: "Kit completo de spoilers aerodinámicos para Volvo FH. Incluye spoiler de techo, laterales y deflectores. Mejora aerodinámica y reduce consumo de combustible.",
    features: ["Fibra de vidrio reforzada", "Reduce consumo hasta 8%", "Kit completo 7 piezas", "Manual de instalación incluido"],
    available: true,
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=600&q=80",
  },
  {
    id: "6",
    name: "Filtro de Aire Premium",
    category: "Filtros de aire",
    brand: "Scania",
    model: "R Series / S Series",
    year: "2004-2024",
    code: "SC-FIL-001",
    description: "Filtro de aire de alta eficiencia para Scania R y S Series. Filtra el 99.9% de partículas mayores a 5 micrones.",
    features: ["Eficiencia 99.9%", "Vida útil extendida", "Papel filtrante alemán", "Certificado ISO 5011"],
    available: true,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&q=80",
  },
  {
    id: "7",
    name: "Portafiltro de Aire Doble",
    category: "Portafiltros de aire",
    brand: "Scania",
    model: "R 580 / R 730",
    year: "2012-2024",
    code: "SC-POR-001",
    description: "Portafiltro de aire de doble etapa para Scania R de alta cilindrada. Construcción en acero inoxidable con sellado hermético.",
    features: ["Acero inoxidable 304", "Sellado hermético", "Doble etapa de filtración", "Fácil mantenimiento"],
    available: false,
    image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80",
  },
  {
    id: "8",
    name: "Foco Neblinero LED Par",
    category: "Focos",
    brand: "Volvo",
    model: "FH / FM / FMX",
    year: "2010-2024",
    code: "VO-FOC-001",
    description: "Par de focos neblineros LED de alto rendimiento para Volvo. Luz blanca de 6000K con máxima penetración en condiciones adversas.",
    features: ["6000K luz blanca", "5000 lúmenes por foco", "IP69K waterproof", "Vida útil 50.000 horas"],
    available: true,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: "9",
    name: "Parachoques Frontal Sport",
    category: "Parachoques",
    brand: "Scania",
    model: "S Series",
    year: "2017-2024",
    code: "SC-PAR-001",
    description: "Parachoques frontal sport de línea para Scania S Series. Diseño aerodinámico con integración de luces LED DRL.",
    features: ["DRL LED integrados", "Diseño sport", "Rejillas de alta ventilación", "Acabado premium"],
    available: true,
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=600&q=80",
  },
  {
    id: "10",
    name: "Filtro de Aire Doble Etapa",
    category: "Filtros de aire",
    brand: "Mercedes-Benz",
    model: "Actros / Arocs / Antos",
    year: "2011-2024",
    code: "MB-FIL-001",
    description: "Filtro de aire de doble etapa para toda la línea Mercedes-Benz de camiones pesados. Máxima protección del motor.",
    features: ["Doble etapa de filtración", "Compatible con turbo", "Intervalo 80.000 km", "OEM equivalent"],
    available: true,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&q=80",
  },
  {
    id: "11",
    name: "Máscara Frontal R Series",
    category: "Máscaras frontales",
    brand: "Scania",
    model: "R Series",
    year: "2009-2016",
    code: "SC-MAS-001",
    description: "Máscara frontal completa para Scania R Series. Diseño original con rejilla de alta ventilación.",
    features: ["Polipropileno OEM", "Rejilla de aluminio", "Compatible todas las versiones R", "Incluye emblema"],
    available: true,
    image: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=600&q=80",
  },
  {
    id: "12",
    name: "Kit Spoiler Cabina Alta",
    category: "Kits de spoilers",
    brand: "Mercedes-Benz",
    model: "Actros MP4 GigaSpace",
    year: "2012-2024",
    code: "MB-SPO-001",
    description: "Kit de spoilers para Actros MP4 con cabina GigaSpace. Optimiza el flujo de aire y reduce el consumo de combustible en rutas largas.",
    features: ["Fibra de vidrio + Kevlar", "Certificado aerodinámico", "9 piezas completas", "Colores personalizables"],
    available: true,
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=600&q=80",
  },
];
