"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Scissors, X } from "lucide-react";
import { business, navigation } from "@/data/business";
import { ContactAction } from "./ContactProvider";
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const menu = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 35);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-inner">
        <a
          href="#inicio"
          className="brand"
          aria-label={`${business.name}, inicio`}
        >
          <Scissors size={25} strokeWidth={1.2} className="gold" />
          <span>
            {business.wordmark}
            <small>BARBERÍA CLÁSICA</small>
          </span>
        </a>
        <nav aria-label="Navegación principal" className="desktop-nav">
          {navigation.map((link) => (
            <a className="nav-link" key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <ContactAction className="button nav-booking">
          Reservar cita <ArrowUpRight size={16} />
        </ContactAction>
        <button
          className="icon-button menu-toggle"
          aria-label="Abrir menú de navegación"
          aria-haspopup="dialog"
          onClick={() => menu.current?.showModal()}
        >
          <Menu />
        </button>
      </div>
      <dialog
        ref={menu}
        className="mobile-menu"
        aria-label="Menú de navegación"
      >
        <div className="mobile-menu-top">
          <span className="brand">{business.wordmark}</span>
          <button
            className="icon-button"
            aria-label="Cerrar menú"
            onClick={() => menu.current?.close()}
          >
            <X />
          </button>
        </div>
        <nav aria-label="Navegación móvil">
          {navigation.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => menu.current?.close()}
            >
              <span>0{i + 1}</span>
              {link.label}
              <ArrowUpRight size={22} />
            </a>
          ))}
        </nav>
        <a
          className="button button-gold"
          href="#reserva"
          onClick={() => menu.current?.close()}
        >
          Reservar cita <ArrowUpRight size={18} />
        </a>
        <p className="demo-note">Propuesta conceptual · Sitio no oficial</p>
      </dialog>
    </header>
  );
}
