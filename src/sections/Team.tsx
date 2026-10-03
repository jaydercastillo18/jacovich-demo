import Image from "next/image";
import { business } from "@/data/business";
import { SectionHeading } from "@/components/SectionHeading";
export function Team() {
  return (
    <section className="section team-section">
      <div className="container">
        <SectionHeading
          number="04"
          eyebrow="MANOS EXPERTAS"
          title="Maestros del oficio"
          text="Detrás de cada detalle, una persona que entiende el valor de hacer bien su trabajo."
        />
        <div className="team-grid">
          {business.team.map((member) => (
            <article className="team-card" key={member.name} data-reveal>
              <div className="team-photo">
                <Image
                  src={member.image}
                  alt={`Retrato ficticio de demostración para ${member.name}`}
                  fill
                  sizes="(max-width: 767px) 100vw, 33vw"
                />
                <span className="image-label">RETRATO FICTICIO · DEMO</span>
              </div>
              <h3>{member.name}</h3>
              <p>{member.specialty}</p>
            </article>
          ))}
        </div>
        <p className="demo-note team-note">
          Equipo de ejemplo. Los nombres, especialidades y retratos se
          reemplazarán con información autorizada.
        </p>
      </div>
    </section>
  );
}
