"use client";

const ITEMS = [
  "Java","Python","SQL","AWS","Spring Boot","Machine Learning",
  "DSA","NLP","REST APIs","Data Engineering","TypeScript","PostgreSQL"
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <section style={{
      background: "#111",
      borderTop: "1px solid rgba(255,255,255,.05)",
      borderBottom: "1px solid rgba(255,255,255,.05)",
      padding: "1.25rem 0", overflow: "hidden"
    }}>
      <div className="ticker-track" style={{ display: "flex", whiteSpace: "nowrap", width: "max-content" }}>
        {doubled.map((t, i) => (
          <span key={i} style={{
            display: "inline-flex", alignItems: "center", gap: "1rem",
            padding: "0 1.5rem", fontFamily: "'Bebas Neue',sans-serif",
            fontSize: "clamp(1rem,2vw,1.35rem)", color: "rgba(245,245,240,.6)",
            letterSpacing: ".2em", textTransform: "uppercase"
          }}>
            {t}<span style={{ color: "#FF8000", fontSize: ".85rem" }}>✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
