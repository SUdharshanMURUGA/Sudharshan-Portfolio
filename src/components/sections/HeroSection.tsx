"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { personal } from "@/data/portfolio";

const typingTexts = [
  "Scalable Data Pipelines",
  "ETL Workflows",
  "Business Intelligence",
  "Data Architectures",
  "Cloud Solutions",
];

const pipelineNodes = [
  { label: "Data Sources", icon: "🗄️", color: "#2563EB" },
  { label: "ETL Pipeline", icon: "🔄", color: "#06B6D4" },
  { label: "Data Models", icon: "📐", color: "#4F46E5" },
  { label: "Cloud Storage", icon: "☁️", color: "#06B6D4" },
  { label: "Data Warehouse", icon: "🏛️", color: "#2563EB" },
  { label: "Analytics & BI", icon: "📊", color: "#4F46E5" },
];

export default function HeroSection() {
  const [typed, setTyped] = useState("");
  const [ti, setTi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const text = typingTexts[ti];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && typed === text) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && typed === "") {
      setDeleting(false);
      setTi((prev) => (prev + 1) % typingTexts.length);
    } else {
      timeout = setTimeout(
        () => {
          setTyped(deleting ? typed.slice(0, -1) : text.slice(0, typed.length + 1));
        },
        deleting ? 50 : 90
      );
    }
    return () => clearTimeout(timeout);
  }, [typed, ti, deleting]);

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center pt-16 px-5"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, rgba(37,99,235,0.07) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(79,70,229,0.07) 0%, transparent 60%)",
      }}
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(6,182,212,0.4)] bg-[rgba(6,182,212,0.08)] text-[#06B6D4] text-xs font-semibold tracking-widest uppercase mb-6">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]"
                style={{ animation: "pulse 2s infinite" }}
              />
              Data Engineer @ TCS
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-5"
          >
            Building{" "}
            <span className="gradient-text">
              {typed}
              <span className="typing-cursor text-[#06B6D4]">|</span>
            </span>
            <br />
            <span style={{ color: "#e2e8f0" }}>That Drive Results</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#64748b] text-base md:text-lg leading-[1.85] mb-8 max-w-[520px]"
          >
            Data Engineer at{" "}
            <span className="text-[#e2e8f0] font-semibold">Tata Consultancy Services</span>{" "}
            working on{" "}
            <span className="text-[#06B6D4] font-semibold">Liberty Mutual Insurance</span>.
            Gold Medalist with M.Sc CS (CGPA: 9.19). Transforming raw data into
            high-performance business intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #2563EB, #4F46E5)",
                boxShadow: "0 0 20px rgba(37,99,235,0.4)",
              }}
            >
              ⚡ View Projects
            </a>
            <a
              href="/Sudharshan_Murugan_Resume.pdf" download="Sudharshan_Murugan_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm border transition-all duration-300 hover:border-[#06B6D4] hover:text-[#06B6D4]"
              style={{ borderColor: "rgba(99,102,241,0.4)", color: "#e2e8f0" }}
            >
              📄 Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-3"
          >
            {[
              { href: personal.github, icon: <Github size={18} />, label: "GitHub" },
              { href: personal.linkedin, icon: <Linkedin size={18} />, label: "LinkedIn" },
              { href: `mailto:${personal.email}`, icon: <Mail size={18} />, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-10 h-10 rounded-lg flex items-center justify-center border text-[#64748b] transition-all duration-300 hover:text-[#06B6D4] hover:border-[#06B6D4]"
                style={{ borderColor: "rgba(99,102,241,0.25)" }}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — Pipeline */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden md:flex flex-col items-center gap-0"
        >
          {pipelineNodes.map((node, i) => (
            <div key={node.label} className="flex flex-col items-center">
              <motion.div
                className="relative flex items-center gap-3 px-5 py-3 rounded-xl border glass w-52 text-center justify-center"
                style={{ borderColor: `${node.color}50` }}
                whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${node.color}40` }}
                animate={{ boxShadow: [`0 0 8px ${node.color}20`, `0 0 20px ${node.color}40`, `0 0 8px ${node.color}20`] }}
                transition={{ boxShadow: { duration: 2.5, repeat: Infinity, delay: i * 0.3 } }}
              >
                <span className="text-lg">{node.icon}</span>
                <span className="text-sm font-semibold" style={{ color: node.color }}>
                  {node.label}
                </span>
              </motion.div>
              {i < pipelineNodes.length - 1 && (
                <div className="relative flex justify-center" style={{ width: 2, height: 28 }}>
                  <div
                    className="absolute top-0 bottom-0 w-0.5"
                    style={{ background: `linear-gradient(to bottom, ${node.color}80, ${pipelineNodes[i + 1].color}80)` }}
                  />
                  <motion.div
                    className="absolute w-1.5 h-1.5 rounded-full"
                    style={{ background: "#06B6D4", boxShadow: "0 0 6px #06B6D4", top: 0, left: -2 }}
                    animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.35, ease: "linear" }}
                  />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#64748b] flex flex-col items-center gap-1"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
