import { ArrowUpRight, Scissors } from "lucide-react";
import { business, navigation } from "@/data/business";
import { ContactAction } from "./ContactProvider";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a className="brand" href="#inicio">
            <Scissors size={24} className="gold" strokeWidth={1.2} />
            <span>
              {business.wordmark}
              <small>BARBERÍA CLÁSICA</small>
            </span>
          </a>
          <nav aria-label="Navegación del pie">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="footer-social">
            {(
              [
                ["instagram", "Instagram"],
                ["whatsapp", "WhatsApp"],
                ["maps", "Google Maps"],
              ] as const
            ).map(([channel, label]) => (
              <ContactAction
                key={channel}
                channel={channel}
                className="footer-social-link"
              >
                {label}
                <ArrowUpRight size={13} />
              </ContactAction>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Concepto demostrativo creado por <strong>KALILOGIC TECH</strong>
            <br />
            <span>Sitio no oficial.</span>
          </p>
          <a href="#inicio">VOLVER ARRIBA ↑</a>
        </div>
      </div>
    </footer>
  );
}
