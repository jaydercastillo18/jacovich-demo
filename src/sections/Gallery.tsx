"use client";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { business } from "@/data/business";
import { SectionHeading } from "@/components/SectionHeading";
export function Gallery() {
  const rail = useRef<HTMLDivElement>(null);
  return (
    <section id="galeria" className="section container">
      <SectionHeading
        number="03"
        eyebrow="LA ESENCIA DEL ESPACIO"
        title="Donde el tiempo se detiene."
        text="Materiales con carácter. Luz cálida. Una atmósfera que invita a quedarte."
      />
      <div
        className="gallery-grid"
        ref={rail}
        tabIndex={0}
        role="region"
        aria-label="Galería de imágenes conceptuales, desliza para explorar"
      >
        {business.gallery.map((item, i) => (
          <figure
            key={item.title}
            className={`gallery-image gallery-image-${i}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 767px) 85vw, (max-width: 1023px) 50vw, 45vw"
              style={{ objectPosition: item.position }}
            />
            <figcaption>
              <span>0{i + 1}</span>
              {item.title}
              <ArrowUpRight size={18} />
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="gallery-footer">
        <p className="demo-note">
          Visuales de concepto generados con IA · Reemplazables por fotografías
          autorizadas.
        </p>
        <div className="gallery-controls">
          <button
            className="icon-button"
            aria-label="Imagen anterior"
            onClick={() =>
              rail.current?.scrollBy({
                left: -rail.current.clientWidth,
                behavior: "smooth",
              })
            }
          >
            <ArrowLeft size={20} />
          </button>
          <button
            className="icon-button"
            aria-label="Imagen siguiente"
            onClick={() =>
              rail.current?.scrollBy({
                left: rail.current.clientWidth,
                behavior: "smooth",
              })
            }
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
