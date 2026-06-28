"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Section from "@/components/ui/Section";
import { skills, techStack } from "@/data/portfolio";

const categories = ["All", "Language", "Data Eng.", "AI/ML", "Frontend", "Framework", "Database", "Tools", "Cloud"];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Group techStack by category
  const grouped = techStack.reduce((acc, t) => {
    acc[t.category] = acc[t.category] || [];
    acc[t.category].push(t);
    return acc;
  }, {} as Record<string, typeof techStack>);

  return (
    <Section id="skills" className="py-24 px-5" style={{ background: "rgba(5,8,22,0.5)" } as React.CSSProperties}>
      <div className="max-w-6xl mx-auto">
        <div className="section-tag">Proficiency</div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-[#64748b] mb-12 max-w-xl">
          Skills honed through academic projects, internships, and real-world engineering at TCS.
        </p>

        {/* Skill bars */}
        <div ref={ref} className="grid md:grid-cols-2 gap-4 mb-16">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="glass rounded-xl p-4 border border-[rgba(99,102,241,0.2)]"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-[#e2e8f0]">{s.name}</span>
                <span className="text-xs font-bold text-[#06B6D4]">{s.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-[rgba(99,102,241,0.12)] overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #2563EB, #06B6D4)" }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${s.pct}%` } : {}}
                  transition={{ duration: 1.4, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
                />
              </div>
              <div className="mt-1.5 text-xs text-[#64748b]">{s.category}</div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack grid */}
        <div className="section-tag">Technologies</div>
        <h3 className="text-2xl font-bold text-[#e2e8f0] mb-8">Full Tech <span className="gradient-text">Stack</span></h3>

        {Object.entries(grouped).map(([cat, items]) => (
          <div key={cat} className="mb-8">
            <div className="text-xs text-[#64748b] font-semibold uppercase tracking-widest mb-3">{cat}</div>
            <div className="flex flex-wrap gap-3">
              {items.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -3, boxShadow: "0 0 20px rgba(6,182,212,0.2)" }}
                  className="flex items-center gap-2 px-4 py-2.5 glass rounded-xl border border-[rgba(99,102,241,0.2)] cursor-default transition-all duration-200"
                >
                  <span className="text-lg">{t.icon}</span>
                  <span className="text-sm font-medium text-[#94a3b8]">{t.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
