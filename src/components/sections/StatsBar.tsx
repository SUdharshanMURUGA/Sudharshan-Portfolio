"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data/portfolio";

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative z-10 px-5 py-4">
      <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4, boxShadow: "0 0 30px rgba(6,182,212,0.18)" }}
            className="glass rounded-xl p-4 text-center border border-[rgba(99,102,241,0.2)] transition-all duration-300"
          >
            <div
              className="text-2xl md:text-3xl font-extrabold mb-1"
              style={{
                background: "linear-gradient(135deg, #06B6D4, #2563EB)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {s.value}
            </div>
            <div className="text-[#64748b] text-xs tracking-wide uppercase font-medium">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
