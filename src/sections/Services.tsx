import {
  ArrowUpRight,
  Scissors,
  Shell,
  Sparkles,
  Droplets,
  Crown,
  Spline,
  type LucideIcon,
} from "lucide-react";
import { business } from "@/data/business";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactAction } from "@/components/ContactProvider";
import type { ServiceIcon } from "@/types/business";
const icons: Record<ServiceIcon, LucideIcon> = {
  scissors: Scissors,
  razor: Spline,
  brush: Shell,
  beard: Sparkles,
  droplet: Droplets,
  crown: Crown,
};
export function Services() {
  return (
    <section id="servicios" className="section container">
      <SectionHeading
        number="01"
        eyebrow="EL OFICIO, EN CADA DETALLE"
        title="El ritual Jacovich"
        text="El estilo no se improvisa. Se construye con técnica, tiempo y atención a lo que te hace único."
      />
      <div className="services-grid">
        {business.services.map((service, i) => {
          const Icon = icons[service.icon];
          return (
            <article className="service-card" key={service.name} data-reveal>
              <div className="service-top">
                <Icon size={29} strokeWidth={1.2} />
                <span>0{i + 1}</span>
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <ContactAction
                className="service-consult"
                label={`Consultar ${service.name}`}
              >
                <span>{service.price}</span>
                <ArrowUpRight size={18} />
              </ContactAction>
            </article>
          );
        })}
      </div>
    </section>
  );
}
