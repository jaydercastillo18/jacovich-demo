import { ArrowUpRight, MessageCircle } from "lucide-react";
import { ContactAction } from "./ContactProvider";
export function MobileCTA() {
  return (
    <aside className="mobile-cta" aria-label="Reserva rápida">
      <ContactAction>
        Reservar <ArrowUpRight size={17} />
      </ContactAction>
      <ContactAction channel="whatsapp" className="button button-outline">
        <MessageCircle size={17} /> WhatsApp
      </ContactAction>
    </aside>
  );
}
