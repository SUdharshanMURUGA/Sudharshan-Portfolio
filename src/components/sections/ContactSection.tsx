"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import Section from "@/components/ui/Section";
import { personal } from "@/data/portfolio";

const FORMSPREE_ID = "mojowznq";

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      if (res.ok) {
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSent(false), 5000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const btnLabel = () => {
    if (loading) return "Sending...";
    if (sent)    return "✅ Message Sent! I'll reply soon.";
    if (error)   return "❌ Failed — try emailing directly";
    return null;
  };

  return (
    <Section id="contact" className="py-24 px-5" style={{ background: "rgba(5,8,22,0.5)" } as React.CSSProperties}>
      <div className="max-w-5xl mx-auto">
        <div className="section-tag">Get In Touch</div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
          Let&apos;s <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-[#64748b] mb-12 max-w-xl">
          Open to new opportunities, collaborations, and interesting data engineering challenges.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { id: "name",    label: "Your Name",      placeholder: "Your full name",                    type: "text"  },
              { id: "email",   label: "Email Address",  placeholder: "yourname@example.com",              type: "email" },
              { id: "subject", label: "Subject",        placeholder: "Let's discuss an opportunity, project collaboration, or general inquiry",  type: "text"  },
            ].map((f) => (
              <div key={f.id}>
                <label className="block text-xs text-[#64748b] font-medium mb-1.5 uppercase tracking-wider">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.id as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                  required={f.id !== "subject"}
                  disabled={loading || sent}
                  className="w-full bg-[rgba(13,20,40,0.8)] border border-[rgba(99,102,241,0.2)] rounded-lg px-4 py-3 text-sm text-[#e2e8f0] placeholder-[#64748b] outline-none focus:border-[#2563EB] transition-colors disabled:opacity-50"
                />
              </div>
            ))}

            <div>
              <label className="block text-xs text-[#64748b] font-medium mb-1.5 uppercase tracking-wider">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about the opportunity or project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                disabled={loading || sent}
                className="w-full bg-[rgba(13,20,40,0.8)] border border-[rgba(99,102,241,0.2)] rounded-lg px-4 py-3 text-sm text-[#e2e8f0] placeholder-[#64748b] outline-none focus:border-[#2563EB] transition-colors resize-none disabled:opacity-50"
              />
            </div>

            <motion.button
              type="submit"
              disabled={loading || sent}
              whileHover={!loading && !sent ? { scale: 1.02, boxShadow: "0 0 30px rgba(37,99,235,0.5)" } : {}}
              whileTap={!loading && !sent ? { scale: 0.98 } : {}}
              className="w-full py-3 rounded-lg font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                background: sent
                  ? "linear-gradient(135deg,#059669,#10b981)"
                  : error
                  ? "linear-gradient(135deg,#dc2626,#b91c1c)"
                  : "linear-gradient(135deg,#2563EB,#4F46E5)",
              }}
            >
              {btnLabel() ?? (<><Send size={15} /> Send Message</>)}
            </motion.button>

            {/* Fallback hint */}
            <p className="text-xs text-[#64748b] text-center">
              Or email directly at{" "}
              <a href={`mailto:${personal.email}`} className="text-[#06B6D4] hover:underline">
                {personal.email}
              </a>
            </p>
          </form>

          {/* Info */}
          <div className="space-y-4">
            {[
              { icon: <Mail size={18} />,  label: "Email",    value: personal.email,                         href: `mailto:${personal.email}` },
              { icon: <Phone size={18} />, label: "Phone",    value: personal.phone,                         href: `tel:${personal.phone}`    },
              { icon: <MapPin size={18} />,label: "Location", value: `${personal.location} (Open to Remote)`,href: null                       },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 glass rounded-xl p-4 border border-[rgba(99,102,241,0.2)] transition-all duration-200"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-[#06B6D4] flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,rgba(37,99,235,0.15),rgba(79,70,229,0.15))" }}
                >
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs text-[#64748b] mb-0.5">{item.label}</div>
                  {item.href
                    ? <a href={item.href} className="text-sm font-semibold text-[#e2e8f0] hover:text-[#06B6D4] transition-colors">{item.value}</a>
                    : <div className="text-sm font-semibold text-[#e2e8f0]">{item.value}</div>
                  }
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <div className="flex gap-3 pt-2">
              {[
                { href: personal.github,              icon: <Github size={18} />,  label: "GitHub"   },
                { href: personal.linkedin,             icon: <Linkedin size={18} />,label: "LinkedIn"  },
                { href: `mailto:${personal.email}`,   icon: <Mail size={18} />,    label: "Email"    },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl border border-[rgba(99,102,241,0.2)] glass flex items-center justify-center gap-2 text-sm text-[#64748b] hover:text-[#06B6D4] hover:border-[#06B6D4] transition-all"
                >
                  {s.icon} {s.label}
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="p-4 rounded-xl border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.05)] flex items-center gap-3">
              <span
                className="w-2.5 h-2.5 rounded-full bg-[#10b981] flex-shrink-0"
                style={{ boxShadow: "0 0 8px #10b981", animation: "pulse 2s infinite" }}
              />
              <div>
                <div className="text-sm font-semibold text-[#6ee7b7]">Open to Opportunities</div>
                <div className="text-xs text-[#64748b]">Data Engineering &amp; Analytics roles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
