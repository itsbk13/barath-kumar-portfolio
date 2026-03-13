"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const BADGES = [
  { t:"AWS Certified",     s:"Solutions Architect",       y:"2024", icon:"☁️" },
  { t:"Snowflake Trained", s:"Data Engineering",          y:"2024", icon:"❄️" },
  { t:"350+ LeetCode",     s:"Problems Solved",           y:"2024", icon:"⚡" },
  { t:"Drone ML Project",  s:"Image Classification",      y:"2023", icon:"🚁" },
  { t:"NLP Pipeline",      s:"HuggingFace Transformers",  y:"2024", icon:"🧠" },
  { t:"Spring Boot APIs",  s:"Production Ready",          y:"2024", icon:"🔧" },
];

export default function Achievements() {
  const hd  = useRef<HTMLHeadingElement>(null);
  const crs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(()=>{
    gsap.fromTo(hd.current,{opacity:0,y:40},{opacity:1,y:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:hd.current,start:"top 85%"}});
    crs.current.forEach((el,i)=>{
      if(!el) return;
      gsap.fromTo(el,{opacity:0,y:50,scale:.93},{opacity:1,y:0,scale:1,duration:.8,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 90%"},delay:(i%3)*.1});
    });
  },[]);
  return (
    <section id="achievements" style={{ background:"#0a0a0a",padding:"6rem clamp(1.5rem,6vw,5rem)" }}>
      <h2 ref={hd} style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(2rem,5vw,3.5rem)",color:"#F5F5F0",letterSpacing:".05em",marginBottom:".5rem" }}>Hall of Fame</h2>
      <p style={{ fontSize:".65rem",color:"rgba(245,245,240,.3)",letterSpacing:".3em",textTransform:"uppercase",marginBottom:"3rem" }}>Certifications, projects & milestones</p>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",gap:"1.25rem" }}>
        {BADGES.map((b,i)=>(
          <div key={i} ref={el=>{crs.current[i]=el}} className="glow-card" style={{ padding:"1.75rem",borderRadius:"1rem",background:"#111",border:"1px solid rgba(255,255,255,.07)",transition:"all .4s ease",cursor:"default" }}>
            <span style={{ fontSize:"2rem" }}>{b.icon}</span>
            <h3 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"1.25rem",color:"#F5F5F0",marginTop:".75rem" }}>{b.t}</h3>
            <p style={{ fontSize:".7rem",color:"rgba(245,245,240,.4)",marginTop:".3rem" }}>{b.s}</p>
            <p style={{ fontSize:".65rem",color:"#FF8000",marginTop:"1rem",letterSpacing:".1em" }}>{b.y}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
