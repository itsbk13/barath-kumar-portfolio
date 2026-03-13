"use client";
import { useState } from "react";

const SOCIALS = [
  { l:"GitHub",   href:"https://github.com/itsbk13",  icon:"⌥" },
  { l:"LinkedIn", href:"https://linkedin.com/in/",    icon:"in" },
  { l:"LeetCode", href:"https://leetcode.com/",       icon:"⚡" },
];

export default function Contact() {
  const [fc, setFc] = useState<string | null>(null);
  const is = (id: string): React.CSSProperties => ({
    width:"100%",padding:"1rem 0",background:"transparent",border:"none",
    borderBottom:`1px solid ${fc===id?"#FF8000":"rgba(255,255,255,.15)"}`,
    color:"#F5F5F0",fontSize:".9rem",outline:"none",transition:"border-color .3s ease"
  });
  return (
    <section id="contact" style={{ background:"#111",padding:"6rem clamp(1.5rem,6vw,5rem)" }}>
      <h2 style={{ fontFamily:"'Bebas Neue',sans-serif",fontSize:"clamp(3rem,9vw,8rem)",lineHeight:.95,color:"#F5F5F0",marginBottom:".5rem" }}>
        LET'S BUILD<br /><span style={{ color:"#FF8000" }}>SOMETHING</span>
      </h2>
      <p style={{ fontSize:".8rem",color:"rgba(245,245,240,.4)",letterSpacing:".15em",textTransform:"uppercase",marginBottom:"4rem" }}>Open to internships, collaborations & full-time roles</p>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"5rem",alignItems:"start" }}>
        <form onSubmit={e=>e.preventDefault()} style={{ display:"flex",flexDirection:"column",gap:"2rem" }}>
          {[
            {id:"name", label:"Your Name",  type:"text"},
            {id:"email",label:"Your Email", type:"email"},
          ].map(f=>(
            <div key={f.id}>
              <label style={{ fontSize:".6rem",color:"#FF8000",letterSpacing:".3em",textTransform:"uppercase",display:"block",marginBottom:".5rem" }}>{f.label}</label>
              <input type={f.type} style={is(f.id)} onFocus={()=>setFc(f.id)} onBlur={()=>setFc(null)} />
            </div>
          ))}
          <div>
            <label style={{ fontSize:".6rem",color:"#FF8000",letterSpacing:".3em",textTransform:"uppercase",display:"block",marginBottom:".5rem" }}>Message</label>
            <textarea rows={4} style={{...is("msg"),resize:"none",display:"block"}} onFocus={()=>setFc("msg")} onBlur={()=>setFc(null)} />
          </div>
          <button type="submit"
            style={{ padding:"1rem 2.5rem",background:"transparent",border:"1px solid rgba(245,245,240,.3)",color:"#F5F5F0",fontSize:".75rem",letterSpacing:".25em",textTransform:"uppercase",borderRadius:"9999px",cursor:"pointer",transition:"all .3s ease",width:"fit-content" }}
            onMouseEnter={e=>{const b=e.currentTarget;b.style.background="#FF8000";b.style.borderColor="#FF8000";b.style.color="#0a0a0a";}}
            onMouseLeave={e=>{const b=e.currentTarget;b.style.background="transparent";b.style.borderColor="rgba(245,245,240,.3)";b.style.color="#F5F5F0";}}>Send Message</button>
        </form>
        <div>
          <div style={{ display:"flex",gap:"1rem",marginBottom:"3rem",flexWrap:"wrap" }}>
            {SOCIALS.map(s=>(
              <a key={s.l} href={s.href} target="_blank" rel="noopener noreferrer" className="glow-card"
                style={{ display:"flex",flexDirection:"column",alignItems:"center",padding:"1.25rem 1.5rem",border:"1px solid rgba(255,255,255,.08)",borderRadius:".75rem",background:"#161616",color:"#F5F5F0",textDecoration:"none",transition:"all .3s ease",gap:".5rem" }}>
                <span style={{ fontSize:"1.3rem",fontFamily:"monospace",fontWeight:700 }}>{s.icon}</span>
                <span style={{ fontSize:".6rem",letterSpacing:".2em",textTransform:"uppercase",color:"rgba(245,245,240,.45)" }}>{s.l}</span>
              </a>
            ))}
          </div>
          <a href="/resume.pdf" download
            style={{ display:"inline-flex",alignItems:"center",gap:".75rem",padding:"1rem 2.5rem",border:"1px solid #FF8000",color:"#FF8000",fontSize:".75rem",letterSpacing:".25em",textTransform:"uppercase",borderRadius:"9999px",textDecoration:"none",transition:"all .3s ease" }}
            onMouseEnter={e=>{const a=e.currentTarget;a.style.background="#FF8000";a.style.color="#0a0a0a";}}
            onMouseLeave={e=>{const a=e.currentTarget;a.style.background="transparent";a.style.color="#FF8000";}}>↓ Download Resume</a>
          <p style={{ marginTop:"4rem",fontSize:".65rem",color:"rgba(245,245,240,.18)",letterSpacing:".1em" }}>© 2024 Barath Kumar — Coimbatore, India</p>
        </div>
      </div>
    </section>
  );
}
