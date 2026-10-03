"use client";
import { createContext, useContext, useRef, type ReactNode } from "react";
import { X, CalendarDays, ArrowUpRight } from "lucide-react";
import { business } from "@/data/business";
import type { ContactChannel } from "@/types/business";

const ContactContext = createContext<(channel: ContactChannel) => void>(
  () => {},
);
export function ContactProvider({ children }: { children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const open = () => dialog.current?.showModal();
  return (
    <ContactContext.Provider value={open}>
      {children}
      <dialog
        ref={dialog}
        className="contact-dialog"
        aria-labelledby="contact-dialog-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="dialog-close icon-button"
          aria-label="Cerrar aviso"
          onClick={() => dialog.current?.close()}
        >
          <X size={22} />
        </button>
        <CalendarDays size={30} className="gold" aria-hidden="true" />
        <p className="eyebrow">UNA VISTA A LO QUE VIENE</p>
        <h2 id="contact-dialog-title">Tu ritual, muy pronto.</h2>
        <p>
          Estás explorando una propuesta de diseño. Las reservas y los canales
          de contacto estarán disponibles cuando la barbería confirme sus datos.
        </p>
        <p className="demo-note">Demo conceptual · Sitio no oficial</p>
        <button
          className="button button-gold"
          onClick={() => dialog.current?.close()}
        >
          Seguir explorando <ArrowUpRight size={17} />
        </button>
      </dialog>
    </ContactContext.Provider>
  );
}
export function ContactAction({
  channel = "booking",
  children,
  className = "button button-gold",
  label,
}: {
  channel?: ContactChannel;
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  const open = useContext(ContactContext);
  const href = business.links[channel];
  if (href)
    return (
      <a
        href={href}
        className={className}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  return (
    <button
      type="button"
      className={className}
      aria-label={label}
      onClick={() => open(channel)}
    >
      {children}
    </button>
  );
}
