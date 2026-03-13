"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const LINKS = ["About", "Projects", "Skills", "Achievements", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(nav.current,
      { yPercent: -100, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1.8 }
    );
  }, []);

  const go = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav ref={nav} style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.25rem clamp(1.5rem,5vw,3rem)", mixBlendMode: "difference"
      }}>
        <button onClick={() => go("hero")} style={{
          fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.5rem",
          color: "#F5F5F0", letterSpacing: "0.2em",
          background: "none", border: "none", cursor: "pointer"
        }}>BK</button>

        <div className="nav-desktop">
          {LINKS.map(l => (
            <button key={l} onClick={() => go(l)}
              style={{
                fontFamily: "'Bebas Neue',sans-serif", fontSize: "0.85rem",
                color: "rgba(245,245,240,0.65)", letterSpacing: "0.2em",
                background: "none", border: "none", cursor: "pointer", textTransform: "uppercase"
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FF8000")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,245,240,0.65)")}>
              {l}
            </button>
          ))}
        </div>

        <button onClick={() => setOpen(true)} className="nav-hamburger"
          style={{ background: "none", border: "none", cursor: "pointer",
            display: "none", flexDirection: "column", gap: "5px" }}>
          <span style={{ display: "block", width: "24px", height: "1px", background: "#F5F5F0" }} />
          <span style={{ display: "block", width: "24px", height: "1px", background: "#F5F5F0" }} />
          <span style={{ display: "block", width: "16px", height: "1px", background: "#F5F5F0" }} />
        </button>
      </nav>

      <div style={{
        position: "fixed", inset: 0, background: "#0a0a0a", zIndex: 60,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform .5s cubic-bezier(.23,1,.32,1)"
      }}>
        <button onClick={() => setOpen(false)} style={{
          position: "absolute", top: "1.5rem", right: "1.5rem",
          background: "none", border: "none", cursor: "pointer",
          color: "#F5F5F0", fontSize: "1.5rem"
        }}>✕</button>
        {LINKS.map((l, i) => (
          <button key={l} onClick={() => go(l)} style={{
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: "clamp(2.5rem,8vw,4rem)",
            color: "rgba(245,245,240,0.8)", letterSpacing: "0.1em",
            background: "none", border: "none", cursor: "pointer", margin: "0.5rem 0",
            transitionDelay: `${i * 60}ms`
          }}
            onMouseEnter={e => (e.currentTarget.style.color = "#FF8000")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,245,240,0.8)")}>
            {l}
          </button>
        ))}
      </div>

      <style>{`
        .nav-desktop { display: flex; gap: 2rem; }
        @media (max-width: 768px) {
          .nav-desktop  { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
