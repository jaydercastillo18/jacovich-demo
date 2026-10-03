import Image from "next/image";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { business } from "@/data/business";
import { ContactAction } from "@/components/ContactProvider";
export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <Image
        src={business.hero.src}
        alt={business.hero.alt}
        fill
        priority
        sizes="(max-width: 1023px) 150vh, 100vw"
        className="hero-image"
        quality={85}
      />
      <div className="hero-shade" />
      <div className="hero-content container">
        <p className="eyebrow hero-eyebrow">
          <span className="small-line" /> EL ESTILO ES UNA FORMA DE SER
        </p>
        <h1 id="hero-title">
          Tradición,
          <br />
          precisión
          <br />y <em>estilo.</em>
        </h1>
        <p className="hero-copy">
          Barbería clásica para hombres
          <br className="desktop-break" /> que cuidan cada detalle.
        </p>
        <div className="hero-actions">
          <ContactAction>
            Reservar cita <ArrowUpRight size={18} />
          </ContactAction>
          <a href="#servicios" className="button button-outline">
            Conocer servicios <ArrowUpRight size={18} />
          </a>
        </div>
        <p className="hero-location">
          <MapPin size={13} />
          {business.area}
          <span>UBICACIÓN REFERENCIAL</span>
        </p>
      </div>
      <div className="hero-bottom container">
        <a href="#servicios" className="discover">
          <ArrowDown size={15} /> DESCUBRE EL RITUAL
        </a>
        <span className="image-label">IMAGEN DE CONCEPTO</span>
        <span className="hero-index">
          01 <span>/</span> EL ARTE DE CUIDARTE
        </span>
      </div>
      <div className="hero-side">
        CLÁSICO POR NATURALEZA. ÚNICO POR ELECCIÓN.
      </div>
    </section>
  );
}
