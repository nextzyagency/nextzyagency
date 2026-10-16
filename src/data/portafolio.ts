// portafolio.ts — Proyectos terminados y maquetas mostrados en la home y en /portafolio
import type { ImageMetadata } from "astro";
import oralproface from "../assets/portafolio/oralproface.webp";
import goessence from "../assets/portafolio/goessence.webp";
import jaimeCorcho from "../assets/portafolio/jaime-corcho.webp";
import telshop from "../assets/portafolio/telshop.webp";
import nutriva from "../assets/portafolio/nutriva.webp";

export interface Project {
  slug: string;
  name: string;
  category: string;
  location?: string;
  url: string;
  image: ImageMetadata;
  summary: string;
  challenge?: string;
  solution?: string;
  highlights: string[];
  tags: string[];
}

export const finishedProjects: Project[] = [
  {
    slug: "oralproface",
    name: "Oral ProFace",
    category: "Salud & Odontología",
    location: "Barranquilla · Bogotá · Maracaibo",
    url: "https://oralproface.online/",
    image: oralproface,
    summary:
      "Sitio web para una clínica de implantología estratégica con carga inmediata: dientes fijos en 72 horas para pacientes con casos complejos.",
    challenge:
      "Explicar un tratamiento médico técnico (implantes basales sin injertos óseos) de forma clara y generar confianza en pacientes que creían no tener solución.",
    solution:
      "Diseñamos una experiencia centrada en la conversión: narrativa por etapas, visor del implante en 3D, resultados reales, preguntas frecuentes y agendamiento directo por WhatsApp para sus 3 sedes.",
    highlights: [
      "Visor 3D interactivo del implante",
      "Agendamiento de valoración por WhatsApp",
      "Sección de resultados y casos reales",
      "Contenido multi-sede optimizado para SEO",
    ],
    tags: ["Diseño Web", "SEO On-Page", "Visor 3D", "Optimización de Velocidad"],
  },
  {
    slug: "goessence",
    name: "GO Essence",
    category: "Estética & Bienestar",
    location: "Barranquilla",
    url: "https://goessence.site/",
    image: goessence,
    summary:
      "Sitio web para una clínica y spa de estética facial y corporal, posicionada como referente de estética en Barranquilla.",
    challenge:
      "Destacar en un mercado local muy competido y convertir visitas de redes sociales en evaluaciones agendadas.",
    solution:
      "Construimos una landing con identidad visual premium, servicios organizados por protocolo (facial, medicina estética y corporal), prueba social integrada desde Instagram y SEO local enfocado en búsquedas de estética en Barranquilla.",
    highlights: [
      "SEO local para \"estética en Barranquilla\"",
      "Servicios estructurados por protocolo",
      "Testimonios y contenido de Instagram",
      "CTA de evaluación gratuita en cada sección",
    ],
    tags: ["SEO Local", "Landing Page", "Copy Persuasivo", "Branding Digital"],
  },
];

export const mockupProjects: Project[] = [
  {
    slug: "jaime-corcho",
    name: "Jaime Corcho",
    category: "Barbería Premium",
    location: "Barranquilla",
    url: "https://jaime-corcho.pages.dev/",
    image: jaimeCorcho,
    summary:
      "Concepto para una barbería premium: estética oscura y dorada, catálogo de servicios con precios y reserva de citas por WhatsApp.",
    highlights: [
      "Catálogo de servicios con precios y duración",
      "Reserva directa por WhatsApp",
      "SEO local y metadatos optimizados",
    ],
    tags: ["Landing Page", "SEO Local", "Reservas"],
  },
  {
    slug: "telshop",
    name: "Telshop",
    category: "E-commerce · Tecnología",
    url: "https://telshop-nextzy.pages.dev/",
    image: telshop,
    summary:
      "Concepto de tienda online de iPhone y accesorios Apple con carrito de compras, catálogo por categorías y estilo minimalista inspirado en Apple.",
    highlights: [
      "Carrito de compras funcional",
      "Catálogo por categorías (iPhone, AirPods, accesorios)",
      "Animaciones fluidas con GSAP",
    ],
    tags: ["E-commerce", "Carrito", "GSAP"],
  },
  {
    slug: "nutriva",
    name: "Nutriva Global",
    category: "Alimentos · Distribución",
    url: "https://nutriva-global.pages.dev/",
    image: nutriva,
    summary:
      "Concepto para una marca internacional de snacks orgánicos y superfoods con catálogo de productos y canal para distribuidores mayoristas.",
    highlights: [
      "Catálogo de productos con precios",
      "Flujo dedicado para distribuidores",
      "Diseño enfocado en confianza y certificaciones",
    ],
    tags: ["Catálogo", "UI/UX", "B2B + B2C"],
  },
];
