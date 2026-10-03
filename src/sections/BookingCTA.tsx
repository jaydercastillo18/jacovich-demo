import { ArrowUpRight, MessageCircle, Scissors } from "lucide-react";
import { ContactAction } from "@/components/ContactProvider";
export function BookingCTA() {
  return (
    <section id="reserva" className="booking-section">
      <div className="container" data-reveal>
        <Scissors className="gold" size={34} strokeWidth={1} />
        <p className="eyebrow">HAZ TIEMPO PARA TI</p>
        <h2>
          Tu próximo corte
          <br />
          empieza <em>aquí.</em>
        </h2>
        <p>Buen estilo. Buen oficio. Un momento que es tuyo.</p>
        <div className="booking-actions">
          <ContactAction>
            Reservar cita <ArrowUpRight size={18} />
          </ContactAction>
          <ContactAction channel="whatsapp" className="button button-outline">
            <MessageCircle size={17} /> WhatsApp <ArrowUpRight size={18} />
          </ContactAction>
        </div>
        <span className="demo-note">
          Canales de reserva pendientes de confirmación.
        </span>
      </div>
    </section>
  );
}
