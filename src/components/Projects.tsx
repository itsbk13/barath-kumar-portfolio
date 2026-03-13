"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  { id:1, title:"Agricultural Drone System",   desc:"Autonomous drone with ML-powered crop disease detection using image classification and edge inference.", tech:["Python","PyTorch","OpenCV","Raspberry Pi"], icon:"🚁", acc:"rgba(255,128,0,.18)",   gh:"https://github.com/itsbk13" },
  { id:2, title:"Intelligent Pesticide System", desc:"Computer Vision pipeline that identifies pests in real-time and prescribes targeted pesticide dosages.",  tech:["Python","TensorFlow","OpenCV","Flask"],    icon:"🌿", acc:"rgba(34,197,94,.14)",   gh:"https://github.com/itsbk13" },
  { id:3, title:"LeetCode Tracker API",         desc:"Spring Boot REST API tracking DSA progress, streaks, difficulty analytics and weekly reports.",           tech:["Java","Spring Boot","MySQL","Docker"],     icon:"⚡", acc:"rgba(59,130,246,.14)",  gh:"https://github.com/itsbk13" },
  { id:4, title:"NLP Sentiment Pipeline",       desc:"End-to-end NLP pipeline for multi-class sentiment with HuggingFace transformer models.",                  tech:["Python","HuggingFace","FastAPI","AWS"],    icon:"🧠", acc:"rgba(168,85,247,.14)", gh:"https://github.com/itsbk13" },
];

function Card({ p }: { p: typeof PROJECTS[0] }) {
  const [hov, setHov] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const mm = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    ref.current!.style.transform = `perspective(800px) rotateY(${x*14}deg) rotateX(${-y*14}deg) scale(1.03)`;
  };
  const ml = () => { ref.current!.style.transform = "perspective(800px) rotateY(0) rotateX(0) scale(1)"; setHov(false); };
  return (
    <div ref={ref} onMouseMove={mm} onMouseEnter={() => setHov(true)} onMouseLeave={ml} style={{
      minWidth: "clamp(270px,28vw,380px)", height: 500, borderRadius: "1.25rem",
      overflow: "hidden", flexShrink: 0, cursor: "pointer", position: "relative",
      background: "#111", border: "1px solid rgba(255,255,255,.07)",
      transition: "transform .15s ease, box-shadow .3s ease",
      boxShadow: hov ? `0 0 40px 4px ${p.acc}` : "none"
    }}>
      <div style={{ position:"absolute",inset:0, background:`radial-gradient(ellipse at 30% 30%,${p.acc},transparent 70%)`, opacity:hov?1:.5, transition:"opacity .5s ease" }} />
      <div style={{ position:"relative",zIndex:2,padding:"2rem",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between" }}>
        <div>
          <span style={{ fontSize:"3.5rem" }}>{p.icon}</span>
          <h3 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(1.5rem,3vw,2rem)",color:"#F5F5F0",marginTop:"1rem",lineHeight:1.1 }}>{p.title}</h3>
          <p style={{ fontSize:".82rem",color:"rgba(245,245,240,.5)",marginTop:".75rem",lineHeight:1.7 }}>{p.desc}</p>
        </div>
        <div style={{ opacity:hov?1:0, transform:hov?"translateY(0)":"translateY(16px)", transition:"all .4s ease" }}>
          <div style={{ display:"flex",flexWrap:"wrap",gap:".4rem",marginBottom:"1rem" }}>
            {p.tech.map(t => <span key={t} style={{ padding:".2rem .65rem",fontSize:".65rem",background:"rgba(255,128,0,.1)",border:"1px solid rgba(255,128,0,.3)",color:"#FF8000",borderRadius:"9999px" }}>{t}</span>)}
          </div>
          <a href={p.gh} target="_blank" rel="noopener noreferrer"
            style={{ display:"inline-flex",alignItems:"center",gap:".5rem",padding:".45rem 1.1rem",border:"1px solid rgba(245,245,240,.3)",borderRadius:"9999px",color:"#F5F5F0",fontSize:".75rem",textDecoration:"none",transition:"all .3s ease" }}
            onMouseEnter={e=>{const a=e.currentTarget as HTMLAnchorElement;a.style.borderColor="#FF8000";a.style.color="#FF8000";}}
            onMouseLeave={e=>{const a=e.currentTarget as HTMLAnchorElement;a.style.borderColor="rgba(245,245,240,.3)";a.style.color="#F5F5F0";}}>GitHub →</a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const h1 = useRef<HTMLHeadingElement>(null);
  const h2 = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    gsap.fromTo(h1.current,{xPercent:-12,opacity:0},{xPercent:0,opacity:1,duration:1.1,ease:"power4.out",scrollTrigger:{trigger:h1.current,start:"top 85%"}});
    gsap.fromTo(h2.current,{xPercent:12,opacity:0},{xPercent:0,opacity:1,duration:1.1,ease:"power4.out",scrollTrigger:{trigger:h2.current,start:"top 85%"}});
  },[]);
  return (
    <section id="projects" style={{ background:"#0a0a0a",paddingTop:"6rem",overflow:"hidden" }}>
      <div style={{ padding:"0 clamp(1.5rem,6vw,5rem)",marginBottom:"3rem" }}>
        <h2 ref={h1} style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(5rem,14vw,13rem)",lineHeight:.9,color:"#F5F5F0" }}>ON</h2>
        <h2 ref={h2} style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(5rem,14vw,13rem)",lineHeight:.9,color:"#FF8000",textAlign:"right",marginTop:"-.05em" }}>TRACK</h2>
        <p style={{ marginTop:"1.5rem",fontSize:".65rem",color:"rgba(245,245,240,.3)",letterSpacing:".3em",textTransform:"uppercase" }}>Most recent projects, systems & builds</p>
      </div>
      <div style={{ display:"flex",gap:"1.5rem",overflowX:"auto",padding:"0 clamp(1.5rem,6vw,5rem) 3rem",scrollbarWidth:"none" as any }}>
        {PROJECTS.map(p => <Card key={p.id} p={p} />)}
      </div>
    </section>
  );
}
