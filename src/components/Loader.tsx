"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loader() {
  const wrap = useRef<HTMLDivElement>(null);
  const txt  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.timeline()
      .set(txt.current,  { opacity: 0, scale: 1.3, filter: "blur(20px)" })
      .to(txt.current,   { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.9, ease: "power4.out" })
      .to(wrap.current,  { yPercent: -100, duration: 0.8, ease: "power4.inOut", delay: 0.5 })
      .set(wrap.current, { display: "none" });
  }, []);

  return (
    <div ref={wrap} style={{
      position: "fixed", inset: 0, background: "#0a0a0a",
      zIndex: 9997, display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div ref={txt} style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(3rem,10vw,8rem)",
        color: "#FF8000", letterSpacing: "0.2em"
      }}>BK</div>
    </div>
  );
}
