"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import Section from "@/components/ui/Section";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  const [modal, setModal] = useState<(typeof projects)[0] | null>(null);

  return (
    <Section id="projects" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="section-tag">Portfolio</div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-[#64748b] mb-12 max-w-xl">
          Real-world solutions built with purpose — from healthcare AI to enterprise data management.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -6, boxShadow: "0 0 40px rgba(37,99,235,0.14)" }}
              className="glass rounded-2xl border border-[rgba(99,102,241,0.2)] overflow-hidden cursor-pointer group transition-all duration-400"
              onClick={() => setModal(p)}
            >
              {/* Card header */}
              <div className={`h-36 flex items-center justify-center bg-gradient-to-br ${p.color} relative overflow-hidden`}>
                <span className="text-6xl z-10 relative">{p.icon}</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "radial-gradient(circle at center, rgba(37,99,235,0.15), transparent)" }}
                />
                <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full border border-[rgba(99,102,241,0.3)] text-[#94a3b8] bg-[rgba(13,20,40,0.6)]">
                  {p.tag}
                </span>
              </div>

              <div className="p-6">
                <div className="text-xs text-[#64748b] font-semibold tracking-wide uppercase mb-1">{p.subtitle}</div>
                <h3 className="text-lg font-bold text-[#e2e8f0] mb-2">{p.title}</h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed mb-4 line-clamp-3">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tools.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded text-xs font-medium border border-[rgba(37,99,235,0.35)] bg-[rgba(37,99,235,0.08)] text-[#60a5fa]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    className="flex-1 py-2 rounded-lg text-xs font-semibold text-white transition-all"
                    style={{ background: "linear-gradient(135deg, #2563EB, #4F46E5)" }}
                    onClick={(e) => { e.stopPropagation(); setModal(p); }}
                  >
                    📖 Case Study
                  </button>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg border border-[rgba(99,102,241,0.3)] text-[#64748b] hover:text-[#06B6D4] hover:border-[#06B6D4] transition-all text-xs flex items-center gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModal(null)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <motion.div
              className="relative w-full max-w-2xl glass rounded-2xl border border-[rgba(99,102,241,0.3)] p-8 z-10 max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-[#64748b] hover:text-white transition-colors"
                onClick={() => setModal(null)}
              >
                <X size={20} />
              </button>
              <div className="text-4xl mb-3">{modal.icon}</div>
              <div className="text-xs text-[#64748b] font-semibold uppercase tracking-wider mb-1">{modal.subtitle}</div>
              <h3 className="text-2xl font-extrabold text-[#e2e8f0] mb-1">{modal.title}</h3>
              <span className="text-xs text-[#06B6D4] font-semibold">{modal.tag}</span>

              <p className="text-sm text-[#94a3b8] leading-relaxed mt-4 mb-4">{modal.longDescription}</p>

              <div className="mb-4">
                <div className="text-sm font-semibold text-[#e2e8f0] mb-2">✨ Key Features</div>
                <ul className="space-y-1">
                  {modal.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#94a3b8]">
                      <span className="text-[#06B6D4] mt-0.5">▸</span>{f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <div className="text-sm font-semibold text-[#e2e8f0] mb-2">🛠 Tools Used</div>
                <div className="flex flex-wrap gap-2">
                  {modal.tools.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg text-xs border border-[rgba(37,99,235,0.35)] bg-[rgba(37,99,235,0.08)] text-[#60a5fa]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.06)] text-sm text-[#6ee7b7]">
                <span className="font-semibold">✅ Outcome: </span>{modal.outcome}
              </div>

              <div className="flex gap-3 mt-5">
                <a href={modal.github} className="flex-1 py-2.5 rounded-lg font-semibold text-sm text-white text-center transition-all"
                  style={{ background: "linear-gradient(135deg,#2563EB,#4F46E5)" }}>
                  <Github size={14} className="inline mr-1" /> View on GitHub
                </a>
                <a href={modal.demo} className="flex-1 py-2.5 rounded-lg font-semibold text-sm border border-[rgba(99,102,241,0.3)] text-[#94a3b8] hover:text-[#06B6D4] text-center transition-all">
                  <ExternalLink size={14} className="inline mr-1" /> Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
