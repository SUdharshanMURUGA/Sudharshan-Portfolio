"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot } from "lucide-react";
import { aiKnowledge } from "@/data/portfolio";

interface Msg { role: "bot" | "user"; text: string }

function getResponse(q: string): string {
  const lq = q.toLowerCase();
  if (lq.includes("skill") || lq.includes("tech") || lq.includes("python") || lq.includes("sql")) return aiKnowledge.skills;
  if (lq.includes("experience") || lq.includes("work") || lq.includes("tcs") || lq.includes("job") || lq.includes("intern")) return aiKnowledge.experience;
  if (lq.includes("project") || lq.includes("built") || lq.includes("lung") || lq.includes("stock")) return aiKnowledge.projects;
  if (lq.includes("education") || lq.includes("degree") || lq.includes("study") || lq.includes("srm") || lq.includes("cgpa")) return aiKnowledge.education;
  if (lq.includes("hire") || lq.includes("available") || lq.includes("opportunit") || lq.includes("contact")) return aiKnowledge.hire;
  if (lq.includes("cert") || lq.includes("isro") || lq.includes("coursera") || lq.includes("guvi")) return aiKnowledge.certs;
  return aiKnowledge.default;
}

const suggestions = ["Skills", "Experience", "Projects", "Education", "Hiring?"];

export default function AIWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Hi! 👋 I can tell you about Sudharshan's skills, experience, projects, and more. What would you like to know?" }
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = (q?: string) => {
    const text = q || input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: getResponse(text) }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9000]">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            className="absolute bottom-16 right-0 w-80 glass rounded-2xl border border-[rgba(99,102,241,0.3)] overflow-hidden"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-[rgba(99,102,241,0.2)] flex items-center justify-between"
              style={{ background: "linear-gradient(135deg,rgba(37,99,235,0.15),rgba(79,70,229,0.15))" }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg,#2563EB,#4F46E5)" }}>
                  <Bot size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#e2e8f0]">Ask About Sudharshan</div>
                  <div className="text-xs text-[#6ee7b7]">● Online</div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-[#64748b] hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-52 overflow-y-auto p-3 space-y-2">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[82%] px-3 py-2 rounded-xl text-xs leading-relaxed"
                    style={m.role === "bot"
                      ? { background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.2)", color: "#e2e8f0" }
                      : { background: "linear-gradient(135deg,rgba(79,70,229,0.4),rgba(37,99,235,0.4))", color: "white" }
                    }
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Suggestions */}
            <div className="px-3 py-2 flex gap-1.5 flex-wrap border-t border-[rgba(99,102,241,0.15)]">
              {suggestions.map((s) => (
                <button key={s} onClick={() => send(s)}
                  className="text-xs px-2.5 py-1 rounded-full border border-[rgba(6,182,212,0.25)] bg-[rgba(6,182,212,0.08)] text-[#06B6D4] hover:bg-[rgba(6,182,212,0.15)] transition-colors">
                  {s}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="px-3 pb-3 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Ask anything..."
                className="flex-1 bg-[rgba(255,255,255,0.05)] border border-[rgba(99,102,241,0.2)] rounded-lg px-3 py-2 text-xs text-[#e2e8f0] placeholder-[#64748b] outline-none focus:border-[#2563EB]"
              />
              <button onClick={() => send()}
                className="px-3 py-2 rounded-lg text-white font-semibold text-xs flex items-center gap-1"
                style={{ background: "linear-gradient(135deg,#2563EB,#4F46E5)" }}>
                <Send size={12} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full flex items-center justify-center text-white"
        style={{
          background: "linear-gradient(135deg,#2563EB,#4F46E5)",
          boxShadow: "0 0 24px rgba(37,99,235,0.5), 0 4px 20px rgba(0,0,0,0.4)",
        }}
      >
        {open ? <X size={22} /> : <Bot size={22} />}
      </motion.button>
    </div>
  );
}
