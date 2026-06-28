"use client";
import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, tx = 0, ty = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${mx - 10}px`;
        cursorRef.current.style.top = `${my - 10}px`;
      }
    };

    const loop = () => {
      tx += (mx - tx) * 0.15;
      ty += (my - ty) * 0.15;
      if (trailRef.current) {
        trailRef.current.style.left = `${tx - 4}px`;
        trailRef.current.style.top = `${ty - 4}px`;
      }
      animId = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    loop();
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-5 h-5 rounded-full pointer-events-none z-[9999]"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.8), transparent)",
          mixBlendMode: "screen",
          transition: "transform 0.1s ease",
        }}
      />
      <div
        ref={trailRef}
        className="fixed w-2 h-2 rounded-full pointer-events-none z-[9998]"
        style={{ background: "rgba(79,70,229,0.6)" }}
      />
    </>
  );
}
