"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/90 backdrop-blur-xl border-b border-[rgba(99,102,241,0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        <motion.a
          href="#"
          className="text-lg font-bold gradient-text-blue"
          whileHover={{ scale: 1.05 }}
        >
          SM
        </motion.a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[#64748b] hover:text-[#06B6D4] transition-colors duration-200 font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white"
          style={{ background: "linear-gradient(135deg, #2563EB, #4F46E5)" }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 24px rgba(37,99,235,0.5)" }}
          whileTap={{ scale: 0.97 }}
        >
          Let&apos;s Talk
        </motion.a>

        {/* Mobile */}
        <button
          className="md:hidden text-[#64748b] hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0f1e]/95 backdrop-blur-xl border-b border-[rgba(99,102,241,0.2)]"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block py-2 text-sm text-[#64748b] hover:text-[#06B6D4] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="block mt-2 py-2 px-4 rounded-lg text-sm font-semibold text-white text-center"
                  style={{ background: "linear-gradient(135deg, #2563EB, #4F46E5)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Let&apos;s Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
