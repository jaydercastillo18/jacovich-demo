import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { business } from "@/data/business";
export function Testimonials() {
  return (
    <section className="section container">
      <SectionHeading
        number="05"
        eyebrow="UNA EXPERIENCIA QUE SE RECUERDA"
        title="Lo que se siente, se cuenta."
      />
      <div className="testimonials-grid">
        {business.testimonials.map((item) => (
          <article className="testimonial" key={item.label} data-reveal>
            <div className="testimonial-top">
              <div
                className="stars"
                role="img"
                aria-label="5 estrellas de ejemplo"
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <Quote size={24} strokeWidth={1} />
            </div>
            <blockquote>“{item.text}”</blockquote>
            <p>{item.label}</p>
            <span className="demo-note">EJEMPLO VISUAL · RESEÑA DEMO</span>
          </article>
        ))}
      </div>
    </section>
  );
}
