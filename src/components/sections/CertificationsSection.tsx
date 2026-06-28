"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Section from "@/components/ui/Section";
import { certifications } from "@/data/portfolio";

export default function CertificationsSection() {
  return (
    <Section id="certs" className="py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="section-tag">Credentials</div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
          Certifications & <span className="gradient-text">Participation</span>
        </h2>
        <p className="text-[#64748b] mb-12">
          Continuous learning through recognized platforms and real research projects.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {certifications.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 0 30px rgba(79,70,229,0.18)" }}
              className="glass rounded-xl p-5 text-center border border-[rgba(99,102,241,0.2)] group cursor-pointer transition-all duration-300 no-underline"
            >
              <span className="text-3xl block mb-3">{c.icon}</span>
              <div className="text-sm font-bold text-[#e2e8f0] mb-1 group-hover:text-[#06B6D4] transition-colors">
                {c.name}
              </div>
              <div className="text-xs text-[#64748b] mb-3">{c.issuer}</div>
              <div className="flex items-center justify-center gap-1 text-xs text-[#4F46E5] opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={12} /> View Certificate
              </div>
            </motion.a>
          ))}
        </div>

        {/* Gold Medal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 p-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 flex items-center gap-5"
        >
          <span className="text-5xl flex-shrink-0">🥇</span>
          <div>
            <div className="font-extrabold text-lg text-yellow-400">Gold Medal — Academic Excellence</div>
            <div className="text-sm text-[#94a3b8] mt-1">
              Awarded for securing the highest CGPA & consistently maintaining outstanding academic records in B.Sc Computer Science at SCSVMV University, Kanchipuram.
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
