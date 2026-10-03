export type ContactChannel = "booking" | "whatsapp" | "instagram" | "maps";
export type ServiceIcon =
  "scissors" | "razor" | "brush" | "beard" | "droplet" | "crown";
export interface Service {
  name: string;
  description: string;
  icon: ServiceIcon;
  price: string;
}
export interface ConceptImage {
  src: string;
  alt: string;
  title: string;
  position?: string;
}
