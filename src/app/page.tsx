import { Navbar } from "@/components/Navbar";
import { ContactProvider } from "@/components/ContactProvider";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { Reveal } from "@/components/Reveal";
import { Hero } from "@/sections/Hero";
import { SocialProof } from "@/sections/SocialProof";
import { Services } from "@/sections/Services";
import { Experience } from "@/sections/Experience";
import { Gallery } from "@/sections/Gallery";
import { Team } from "@/sections/Team";
import { Testimonials } from "@/sections/Testimonials";
import { BookingCTA } from "@/sections/BookingCTA";
import { Location } from "@/sections/Location";
export default function Home() {
  return (
    <ContactProvider>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <SocialProof />
        <Services />
        <Experience />
        <Gallery />
        <Team />
        <Testimonials />
        <BookingCTA />
        <Location />
      </main>
      <Footer />
      <MobileCTA />
      <Reveal />
    </ContactProvider>
  );
}
