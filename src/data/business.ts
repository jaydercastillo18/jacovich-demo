import type { ConceptImage, Service } from "@/types/business";

// Única fuente de datos del negocio. null = dato todavía no confirmado.
export const business = {
  name: "Jacovich Barbería Clásica",
  wordmark: "JACOVICH",
  area: "San Isidro · Lima",
  areaConfirmed: false,
  phone: null as string | null,
  address: null as string | null,
  hours: null as string | null,
  links: {
    booking: null,
    whatsapp: null,
    instagram: null,
    maps: null,
  } as Record<import("@/types/business").ContactChannel, string | null>,
  proof: { rating: "4.9", reviews: "+600", experience: "20+", isDemo: true },
  hero: {
    src: "/images/barbershop.webp",
    alt: "Interior conceptual de barbería clásica con sillón de cuero y espejos antiguos",
  },
  experienceImage: {
    src: "/images/ritual.webp",
    alt: "Imagen de concepto de una navaja, brocha y tijeras sobre madera",
  },
  services: [
    {
      name: "Corte clásico",
      description:
        "Líneas limpias, proporciones precisas y un estilo que siempre te representa.",
      icon: "scissors",
      price: "Consultar",
    },
    {
      name: "Corte + barba",
      description:
        "El equilibrio perfecto. Un corte a tu medida y una barba con carácter.",
      icon: "beard",
      price: "Consultar",
    },
    {
      name: "Afeitado tradicional",
      description:
        "Toalla caliente, navaja y el tiempo que merece un buen ritual.",
      icon: "razor",
      price: "Consultar",
    },
    {
      name: "Perfilado de barba",
      description:
        "Contornos definidos y detalles cuidados para una presencia impecable.",
      icon: "brush",
      price: "Consultar",
    },
    {
      name: "Tratamiento capilar",
      description:
        "Cuidado especializado para devolver bienestar a tu cabello.",
      icon: "droplet",
      price: "Consultar",
    },
    {
      name: "Experiencia completa",
      description:
        "Corte, barba y cuidado personal. Un momento dedicado enteramente a ti.",
      icon: "crown",
      price: "Consultar",
    },
  ] satisfies Service[],
  gallery: [
    {
      src: "/images/barbershop.webp",
      alt: "Sillón de cuero en interior de demostración",
      title: "Un lugar para desconectar",
      position: "85% center",
    },
    {
      src: "/images/ritual.webp",
      alt: "Herramientas clásicas de afeitado, imagen conceptual",
      title: "Las herramientas del oficio",
      position: "30% center",
    },
    {
      src: "/images/barbershop.webp",
      alt: "Espejos, madera y luz cálida en espacio conceptual",
      title: "El detalle hace la diferencia",
      position: "55% 30%",
    },
  ] satisfies ConceptImage[],
  team: [
    {
      name: "Barbero 01",
      specialty: "Cortes clásicos & asesoría",
      image: "/images/barbero-01.webp",
    },
    {
      name: "Barbero 02",
      specialty: "Barba & afeitado tradicional",
      image: "/images/barbero-02.webp",
    },
    {
      name: "Barbero 03",
      specialty: "Estilo & cuidado capilar",
      image: "/images/barbero-03.webp",
    },
  ],
  testimonials: [
    {
      text: "Ese momento en el que te sientas, desconectas y sabes que cada detalle está en buenas manos.",
      label: "El valor de una pausa",
    },
    {
      text: "Un buen corte se nota. La atención, la calma y el cuidado hacen que la experiencia se recuerde.",
      label: "El cuidado del detalle",
    },
    {
      text: "Tradición y estilo en el mismo lugar. Así imaginamos una barbería a la que siempre quieres volver.",
      label: "Un ritual propio",
    },
  ],
};
export const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Galería", href: "#galeria" },
  { label: "Ubicación", href: "#ubicacion" },
];
