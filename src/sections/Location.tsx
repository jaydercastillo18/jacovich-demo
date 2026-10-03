import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";
import { business } from "@/data/business";
import { ContactAction } from "@/components/ContactProvider";
export function Location() {
  return (
    <section id="ubicacion" className="section container location-grid">
      <div data-reveal>
        <p className="eyebrow">
          <span>06</span> NOS ENCONTRAMOS AQUÍ
        </p>
        <h2>Visítanos</h2>
        <p className="location-intro">
          Una pausa con estilo, en medio de la ciudad.
        </p>
        <dl className="location-details">
          <div>
            <dt>
              <MapPin size={19} aria-hidden="true" />
              Dirección
            </dt>
            <dd>
              {business.address ?? "Dirección pendiente de confirmación"}
              <small>
                {business.area}
                {!business.areaConfirmed && " · Referencial"}
              </small>
            </dd>
          </div>
          <div>
            <dt>
              <Clock3 size={19} aria-hidden="true" />
              Horario
            </dt>
            <dd>{business.hours ?? "Horarios pendientes de confirmación"}</dd>
          </div>
          <div>
            <dt>
              <Phone size={19} aria-hidden="true" />
              Contacto
            </dt>
            <dd>{business.phone ?? "Teléfono pendiente de confirmación"}</dd>
          </div>
        </dl>
        <ContactAction channel="whatsapp" className="text-link">
          Conversemos por WhatsApp <ArrowUpRight size={18} />
        </ContactAction>
      </div>
      <div className="map-concept" data-reveal>
        <div className="map-streets" aria-hidden="true" />
        <div className="map-content">
          <div className="map-pin">
            <MapPin size={27} strokeWidth={1.5} />
          </div>
          <span className="eyebrow">{business.wordmark}</span>
          <p>{business.area}</p>
          <ContactAction channel="maps" className="button button-outline">
            Ver en Google Maps <ArrowUpRight size={17} />
          </ContactAction>
          <small>Mapa conceptual · Ubicación por confirmar</small>
        </div>
      </div>
    </section>
  );
}
