import { Star } from "lucide-react";
import { business } from "@/data/business";
export function SocialProof() {
  const proof = business.proof;
  return (
    <section className="social-proof" aria-label="Indicadores de ejemplo">
      <div className="container proof-inner">
        <div className="proof-rating">
          <div className="stars" role="img" aria-label="5 estrellas">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} size={13} fill="currentColor" />
            ))}
          </div>
          <p>
            <strong>{proof.rating}</strong> en Google
          </p>
        </div>
        <div className="proof-item">
          <strong>{proof.reviews}</strong>
          <span>reseñas de clientes</span>
        </div>
        <div className="proof-item">
          <strong>{proof.experience}</strong>
          <span>años de experiencia</span>
        </div>
        <p className="proof-note">
          {proof.isDemo ? (
            <>
              CIFRAS DEMOSTRATIVAS
              <br />
              Pendientes de validación
            </>
          ) : (
            ""
          )}
        </p>
      </div>
    </section>
  );
}
