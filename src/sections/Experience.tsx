import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { business } from "@/data/business";
export function Experience() {
  return (
    <section id="experiencia" className="experience section">
      <div className="container experience-grid">
        <div className="experience-visual" data-reveal>
          <Image
            src={business.experienceImage.src}
            alt={business.experienceImage.alt}
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
          />
          <span className="image-label">IMAGEN DE CONCEPTO</span>
          <div className="experience-stamp">
            J
            <span>
              EL ARTE DEL
              <br />
              BUEN CUIDADO
            </span>
          </div>
        </div>
        <div className="experience-copy" data-reveal>
          <p className="eyebrow">
            <span>02</span> LA EXPERIENCIA
          </p>
          <h2>
            Más que
            <br />
            un <em>corte.</em>
          </h2>
          <p>
            Hay tradiciones que merecen quedarse. El sonido de las tijeras, la
            toalla caliente, una conversación sin prisa.
          </p>
          <p>
            Imaginamos Jacovich como ese espacio donde el oficio clásico se
            encuentra con tu estilo. Asesoría personal, precisión y un servicio
            que se toma el tiempo de hacer las cosas bien.
          </p>
          <ul>
            {[
              "Un estilo pensado para ti",
              "El cuidado está en los detalles",
              "Tu momento para desconectar",
            ].map((item) => (
              <li key={item}>
                <Check size={16} />
                {item}
              </li>
            ))}
          </ul>
          <a href="#reserva" className="text-link">
            Vive el ritual <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
