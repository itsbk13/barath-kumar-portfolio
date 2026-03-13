"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import dynamic from "next/dynamic";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

export default function Hero() {
  const l1  = useRef<HTMLDivElement>(null);
  const l2  = useRef<HTMLDivElement>(null);
  const sub = useRef<HTMLParagraphElement>(null);
  const arr = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.9 });

    const split = (el: HTMLElement) => {
      const chars = el.textContent!.split("").map(ch => {
        const wrap  = document.createElement("span");
        const inner = document.createElement("span");
        wrap.style.cssText  = "display:inline-block;overflow:hidden;vertical-align:bottom";
        inner.style.cssText = "display:inline-block";
        inner.textContent   = ch === " " ? "\u00A0" : ch;
        wrap.appendChild(inner);
        return { wrap, inner };
      });
      el.innerHTML = "";
      chars.forEach(c => el.appendChild(c.wrap));
      return chars.map(c => c.inner);
    };

    if (l1.current && l2.current) {
      const c1 = split(l1.current);
      const c2 = split(l2.current);
      tl.fromTo(c1, { y: "120%", opacity: 0 },
          { y: "0%", opacity: 1, stagger: 0.05, duration: 1, ease: "power4.out" })
        .fromTo(c2, { y: "120%", opacity: 0 },
          { y: "0%", opacity: 1, stagger: 0.05, duration: 1, ease: "power4.out" }, "-=0.7");
    }

    tl.fromTo(sub.current,  { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, "-=0.4")
      .fromTo(arr.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.2");

    gsap.to(arr.current, { y: 10, duration: 0.85, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 3 });
  }, []);

  return (
    <section id="hero" style={{
      position: "relative", width: "100%", height: "100vh",
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden", background: "#0a0a0a"
    }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <ParticleField />
      </div>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 60% 60% at 50% 60%, rgba(255,128,0,.07) 0%, transparent 70%)"
      }} />
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", userSelect: "none", padding: "0 1rem" }}>
        <div ref={l1} style={{
          fontFamily: "'Bebas Neue',sans-serif",
          fontSize: "clamp(5rem,18vw,16rem)", lineHeight: 1, color: "#F5F5F0"
        }}>BARATH</div>
        <div ref={l2} style={{
          fontFamily: "'Bebas Neue',sans-serif",
          fontSize: "clamp(5rem,18vw,16rem)", lineHeight: 1, color: "#FF8000", marginTop: "-0.05em"
        }}>KUMAR</div>
        <p ref={sub} style={{
          marginTop: "1.5rem",
          fontSize: "clamp(.65rem,1.2vw,.85rem)",
          letterSpacing: ".3em", textTransform: "uppercase",
          color: "rgba(245,245,240,.5)", fontWeight: 300
        }}>
          Computer Science Engineer&nbsp;·&nbsp;Backend&nbsp;·&nbsp;ML&nbsp;·&nbsp;Cloud
          <span style={{ animation: "blink 1s step-end infinite" }}>▌</span>
        </p>
      </div>
      <div ref={arr} style={{
        position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
        zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: ".5rem",
        color: "rgba(245,245,240,.3)"
      }}>
        <span style={{ fontSize: ".6rem", letterSpacing: ".25em", textTransform: "uppercase" }}>Scroll</span>
        <svg width="18" height="28" viewBox="0 0 18 28" fill="none">
          <path d="M9 0v18M2 12l7 8 7-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  );
}
