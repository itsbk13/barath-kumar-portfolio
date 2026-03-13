"use client";
import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const c = document.getElementById("cursor");
    const f = document.getElementById("cursor-follower");
    if (!c || !f) return;
    let fx = 0, fy = 0, mx = 0, my = 0;
    const mv = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", mv);
    const tick = () => {
      fx += (mx - fx) * 0.08;
      fy += (my - fy) * 0.08;
      c.style.left = mx + "px"; c.style.top = my + "px";
      f.style.left = fx + "px"; f.style.top = fy + "px";
      requestAnimationFrame(tick);
    };
    tick();
    return () => window.removeEventListener("mousemove", mv);
  }, []);
  return (
    <>
      <div id="cursor" />
      <div id="cursor-follower" />
    </>
  );
}
