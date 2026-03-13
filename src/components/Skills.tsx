"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const GROUPS = [
  { label:"Languages",   skills:[{n:"Java",v:88},{n:"Python",v:85},{n:"SQL",v:80}] },
  { label:"Backend",     skills:[{n:"Spring Boot",v:80},{n:"REST APIs",v:85},{n:"PostgreSQL",v:75}] },
  { label:"Cloud/Data",  skills:[{n:"AWS (SAA)",v:70},{n:"Snowflake",v:65},{n:"Docker",v:72}] },
  { label:"ML / AI",     skills:[{n:"NLP",v:72},{n:"Image Classification",v:76},{n:"PyTorch",v:68}] },
  { label:"DSA / Tools", skills:[{n:"LeetCode 350+",v:82},{n:"Git",v:88},{n:"System Design",v:65}] },
];

function Bar({ n, v }: { n: string; v: number }) {
  const br = useRef<HTMLDivElement>(null);
  const cr = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!br.current) return;
    gsap.fromTo(br.current,{scaleX:0},{scaleX:1,duration:1.2,ease:"power3.out",scrollTrigger:{trigger:br.current,start:"top 92%",toggleActions:"play none none none"}});
    const o = { val: 0 };
    gsap.to(o,{val:v,duration:1.2,ease:"power3.out",onUpdate:()=>{if(cr.current) cr.current.textContent=Math.round(o.val)+"%";},scrollTrigger:{trigger:br.current,start:"top 92%",toggleActions:"play none none none"}});
  },[v]);
  return (
    <div style={{ marginBottom:"1.25rem" }}>
      <div style={{ display:"flex",justifyContent:"space-between",marginBottom:".4rem" }}>
        <span style={{ fontSize:".8rem",color:"rgba(245,245,240,.7)" }}>{n}</span>
        <span ref={cr} style={{ fontSize:".8rem",color:"#FF8000",fontWeight:500 }}>0%</span>
      </div>
      <div style={{ height:"1px",background:"rgba(255,255,255,.08)",borderRadius:"9999px",overflow:"hidden" }}>
        <div ref={br} style={{ height:"100%",background:"#FF8000",width:`${v}%`,transformOrigin:"left center",transform:"scaleX(0)",borderRadius:"9999px" }}/>
      </div>
    </div>
  );
}

export default function Skills() {
  const h1=useRef<HTMLHeadingElement>(null),h2=useRef<HTMLHeadingElement>(null);
  useEffect(()=>{
    gsap.fromTo(h1.current,{xPercent:-12,opacity:0},{xPercent:0,opacity:1,duration:1.1,ease:"power4.out",scrollTrigger:{trigger:h1.current,start:"top 85%"}});
    gsap.fromTo(h2.current,{xPercent:12,opacity:0},{xPercent:0,opacity:1,duration:1.1,ease:"power4.out",scrollTrigger:{trigger:h2.current,start:"top 85%"}});
  },[]);
  return (
    <section id="skills" style={{ background:"#111",padding:"6rem clamp(1.5rem,6vw,5rem)" }}>
      <h2 ref={h1} style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(5rem,14vw,13rem)",lineHeight:.9,color:"#F5F5F0" }}>OFF</h2>
      <h2 ref={h2} style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(5rem,14vw,13rem)",lineHeight:.9,color:"#FF8000",textAlign:"right",marginTop:"-.05em",marginBottom:"4rem" }}>TRACK</h2>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))",gap:"3rem" }}>
        {GROUPS.map(g=>(
          <div key={g.label}>
            <p style={{ fontSize:".6rem",color:"#FF8000",letterSpacing:".35em",textTransform:"uppercase",marginBottom:"1.5rem" }}>{g.label}</p>
            {g.skills.map(s=><Bar key={s.n} n={s.n} v={s.v}/>)}
          </div>
        ))}
      </div>
    </section>
  );
}
