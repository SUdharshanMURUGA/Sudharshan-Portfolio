"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import React from "react";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Section({ id, children, className = "", style }: SectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative z-10 ${className}`}
      style={style}
    >
      {children}
    </motion.section>
  );
}
