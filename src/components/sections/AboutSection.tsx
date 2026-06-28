"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Section from "@/components/ui/Section";
import { personal, timeline, education } from "@/data/portfolio";

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section id="about" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="section-tag">Who I Am</div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
          My <span className="gradient-text">Journey</span>
        </h2>
        <p className="text-[#64748b] text-base mb-14 max-w-xl">
          From academic gold medalist to enterprise data engineer — here&apos;s my story.
        </p>

        <div className="grid md:grid-cols-2 gap-14 mb-16">
          {/* Bio */}
          <div>
            <div className="space-y-4 text-[#94a3b8] text-sm leading-[1.9]">
              <p>
                Hello! I&apos;m <span className="text-[#e2e8f0] font-semibold">Sudharshan Murugan</span>, a passionate Data Engineer at{" "}
                <span className="text-[#06B6D4] font-semibold">Tata Consultancy Services</span>, currently working on the{" "}
                <span className="text-[#e2e8f0] font-semibold">Liberty Mutual Insurance</span> project. I&apos;m from the historic city of Kanchipuram, Tamil Nadu.
              </p>
              <p>
                I hold an <span className="text-[#e2e8f0] font-semibold">M.Sc in Computer Science from SRM Institute (CGPA: 9.19)</span> and a B.Sc from SCSVMV University where I was awarded a{" "}
                <span className="text-yellow-400 font-semibold">🥇 Gold Medal</span> for securing the highest CGPA.
              </p>
              <p>
                What drives me? I thrive on transforming ideas into interactive and user-friendly experiences. Coding, for me, is about crafting impactful solutions — whether it&apos;s building reliable data pipelines or creating AI/ML-driven insights.
              </p>
              <blockquote className="border-l-2 border-[#06B6D4] pl-4 italic text-[#64748b]">
                &quot;Passion, perseverance, and creativity fuel my journey as a developer.&quot;
              </blockquote>
            </div>

            <div className="mt-6 p-4 rounded-xl border border-[rgba(99,102,241,0.2)] bg-[rgba(13,20,40,0.6)]">
              <div className="text-sm font-semibold text-[#06B6D4] mb-3">Beyond Coding</div>
              <div className="space-y-1">
                {personal.hobbies.map((h) => (
                  <div key={h} className="text-sm text-[#64748b]">{h}</div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mt-6 space-y-3">
              {education.map((e) => (
                <div key={e.degree} className="p-4 rounded-xl border border-[rgba(99,102,241,0.2)] glass">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{e.icon}</span>
                    <div>
                      <div className="font-semibold text-sm text-[#e2e8f0]">{e.degree}</div>
                      <div className="text-xs text-[#64748b] mt-0.5">{e.institution}</div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-[#06B6D4] font-semibold">CGPA: {e.cgpa}</span>
                        <span className="text-xs text-[#64748b]">{e.period}</span>
                      </div>
                      {e.highlight && (
                        <div className="mt-1 text-xs text-yellow-400 font-semibold">{e.highlight}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div ref={ref}>
            <div className="relative pl-8">
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5"
                style={{ background: "linear-gradient(to bottom, #2563EB, #4F46E5, #06B6D4)" }}
              />
              {timeline.map((item, i) => (
                <motion.div
                  key={`${item.year}-${i}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative mb-7"
                >
                  <div
                    className="absolute -left-8 top-1 w-4 h-4 rounded-full border-2 border-[#06B6D4] bg-[#050816]"
                    style={{ boxShadow: "0 0 10px rgba(6,182,212,0.5)" }}
                  />
                  <div className="text-xs text-[#06B6D4] font-semibold tracking-wider mb-0.5">{item.year}</div>
                  <div className="font-bold text-sm text-[#e2e8f0]">{item.icon} {item.title}</div>
                  <div className="text-xs text-[#64748b] mt-0.5 leading-relaxed">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
