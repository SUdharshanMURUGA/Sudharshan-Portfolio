"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Section from "@/components/ui/Section";
import { experience } from "@/data/portfolio";

const colorMap: Record<string, string> = {
  blue: "#2563EB",
  cyan: "#06B6D4",
  purple: "#4F46E5",
};

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section id="experience" className="py-24 px-5" style={{ background: "rgba(5,8,22,0.5)" } as React.CSSProperties}>
      <div className="max-w-4xl mx-auto">
        <div className="section-tag">Work History</div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-[#64748b] mb-12">
          Building real-world data solutions across enterprise and startup environments.
        </p>

        <div ref={ref} className="space-y-6">
          {experience.map((exp, i) => {
            const color = colorMap[exp.color] || "#2563EB";
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative glass rounded-2xl p-6 md:p-8 border border-[rgba(99,102,241,0.2)] overflow-hidden"
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
                />

                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="text-xl font-extrabold text-[#e2e8f0] mb-1">{exp.company}</div>
                    <div className="font-semibold" style={{ color }}>
                      {exp.role}
                    </div>
                    {exp.project && (
                      <div className="text-xs text-[#64748b] mt-1">
                        📍 Project: <span className="text-[#e2e8f0]">{exp.project}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold border"
                      style={{ color, borderColor: `${color}50`, background: `${color}15` }}
                    >
                      {exp.period}
                    </span>
                    <span className="text-xs text-[#64748b]">
                      {exp.location} · {exp.type}
                    </span>
                  </div>
                </div>

                <ul className="grid md:grid-cols-2 gap-2 mb-5">
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-[#94a3b8] leading-relaxed">
                      <span style={{ color, flexShrink: 0 }} className="mt-0.5">▸</span>
                      {r}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md text-xs font-medium border"
                      style={{
                        background: `${color}0f`,
                        borderColor: `${color}30`,
                        color: `${color}`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
