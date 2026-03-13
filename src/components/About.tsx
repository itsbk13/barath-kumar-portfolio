"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const WORDS = [
  "Redefining","limits,","solving","hard","problems,","building",
  "systems","that","scale.","Defining","a","legacy","in","software,",
  "on","and","off","the","keyboard."
];
const PHOTOS = [
  { l: "Coding Setup", icon: "💻", bg: "#161616" },
  { l: "Gym Session",  icon: "🏋️", bg: "#121212" },
  { l: "Drone ML",     icon: "🚁", bg: "#141414" },
  { l: "Cloud Arch",   icon: "☁️", bg: "#111"    },
];

export default function About() {
  const sec = useRef<HTMLElement>(null);
  const hd  = useRef<HTMLParagraphElement>(null);
  const wrs = useRef<(HTMLSpanElement | null)[]>([]);
  const prs = useRef<(HTMLDivElement   | null)[]>([]);

  useEffect(() => {
    if (!sec.current) return;
    gsap.fromTo(hd.current, { xPercent: -8, opacity: 0 }, {
      xPercent: 0, opacity: 1, duration: 1.2, ease: "power4.out",
      scrollTrigger: { trigger: hd.current, start: "top 85%" }
    });
    wrs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(el, { opacity: 0.08 }, {
        opacity: 1, duration: 0.3,
        scrollTrigger: { trigger: sec.current, start: `top+=${i*28} center`, toggleActions: "play none none reverse" }
      });
    });
    prs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(el, { opacity: 0, y: 60, scale: 0.95 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%" }, delay: i * 0.12
      });
    });
  }, []);

  return (
    <section id="about" ref={sec} style={{
      minHeight: "100vh", background: "#0a0a0a",
      padding: "6rem clamp(1.5rem,6vw,5rem)",
      display: "flex", flexDirection: "column", justifyContent: "center"
    }}>
      <p ref={hd} style={{
        fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(.75rem,2vw,1rem)",
        color: "#FF8000", letterSpacing: ".4em", textTransform: "uppercase", marginBottom: "3rem"
      }}>Message from Barath</p>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
        gap: "4rem", alignItems: "start", maxWidth: "1400px", margin: "0 auto", width: "100%"
      }}>
        <div>
          <p style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "clamp(2rem,5vw,4.5rem)", lineHeight: 1.1, color: "#F5F5F0" }}>
            {WORDS.map((w, i) => (
              <span key={i} ref={el => { wrs.current[i] = el; }}
                style={{ opacity: 0.08, marginRight: ".3em", display: "inline-block", transition: "opacity .3s ease" }}>
                {w}
              </span>
            ))}
          </p>
          <p style={{ marginTop: "2rem", fontSize: ".7rem", color: "rgba(245,245,240,.3)", letterSpacing: ".3em", textTransform: "uppercase" }}>
            Coimbatore, India · 2024
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {PHOTOS.map((p, i) => (
            <div key={i} ref={el => { prs.current[i] = el; }} className="glow-card" style={{
              aspectRatio: "1", borderRadius: "1rem",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              border: "1px solid rgba(255,255,255,.06)", background: p.bg,
              transition: "all .4s ease", cursor: "default"
            }}>
              <span style={{ fontSize: "2.5rem" }}>{p.icon}</span>
              <span style={{ marginTop: ".75rem", fontSize: ".6rem", color: "rgba(245,245,240,.4)", letterSpacing: ".2em", textTransform: "uppercase" }}>{p.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
