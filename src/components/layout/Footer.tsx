"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { personal } from "@/data/portfolio";

export default function Footer() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <footer className="relative z-10 border-t border-[rgba(99,102,241,0.2)] bg-[rgba(5,8,22,0.95)] px-5 py-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-xl font-extrabold mb-1"
            style={{ background: "linear-gradient(135deg,#2563EB,#06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Sudharshan Murugan
          </div>
          <div className="text-sm text-[#64748b] mb-6">
            Data Engineer · Frontend Developer · AI/ML Enthusiast
          </div>

          <div className="flex justify-center gap-8 mb-6 flex-wrap">
            {["About", "Experience", "Projects", "Skills", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}
                className="text-sm text-[#64748b] hover:text-[#06B6D4] transition-colors">
                {l}
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-3 mb-6">
            {[
              { href: personal.github, icon: <Github size={18} /> },
              { href: personal.linkedin, icon: <Linkedin size={18} /> },
              { href: `mailto:${personal.email}`, icon: <Mail size={18} /> },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-[rgba(99,102,241,0.2)] flex items-center justify-center text-[#64748b] hover:text-[#06B6D4] hover:border-[#06B6D4] transition-all">
                {s.icon}
              </a>
            ))}
          </div>

          <div className="text-xs text-[#64748b]">
            © {new Date().getFullYear()} Sudharshan Murugan. Built with Next.js & Framer Motion.
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 left-6 z-[9000] w-11 h-11 rounded-full border border-[rgba(99,102,241,0.3)] glass flex items-center justify-center text-[#64748b] hover:text-[#06B6D4] hover:border-[#06B6D4] transition-all"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
