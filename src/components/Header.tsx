import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { COMPANY, NAV } from "../data";
import { useActiveSection, useScrollFrame, type Theme } from "../hooks";
import { ScrollProgress } from "./Motion";

const IDS = NAV.map((n) => n.href.slice(1));

export default function Header({ theme, onToggleTheme }: { theme: Theme; onToggleTheme: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(IDS);
  useScrollFrame((y) => setScrolled(y > 40));

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="util">
        <div className="wrap util-in">
          <span>{COMPANY.hours}</span>
          <span className="util-r">
            <span>{COMPANY.phone}</span>
            <span className="hide-sm">{COMPANY.email}</span>
          </span>
        </div>
      </div>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap bar">
          <a className="brand" href="#top" aria-label={`${COMPANY.name}, home`}>
            <span className="logo" aria-hidden="true"><b>E</b></span>
            <span>
              <strong>{COMPANY.name}</strong>
              <small>{COMPANY.tagline}</small>
            </span>
          </a>
          <nav className="nav" aria-label="Main">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} aria-current={active === n.href.slice(1) ? "true" : undefined}>{n.label}</a>
            ))}
          </nav>
          <div className="tools">
            <button
              type="button" className="icon-btn" onClick={onToggleTheme}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            >
              {theme === "dark" ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
            </button>
            <a className="btn btn-amber hide-md" href="#quote">Get a quote</a>
            <button
              type="button" className="icon-btn menu-btn" onClick={() => setOpen((o) => !o)}
              aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
        <ScrollProgress />
        {open && (
          <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
            <div className="wrap">
              {NAV.map((n) => <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>)}
              <a className="btn btn-amber" href="#quote" onClick={() => setOpen(false)}>Get a quote</a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
