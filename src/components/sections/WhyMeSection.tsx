"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Cpu,
  Puzzle,
  TrendingUp,
  Boxes,
  Handshake,
  type LucideProps,
} from "lucide-react";
import { valuePoints } from "@/data";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  "shield-check": ShieldCheck,
  cpu: Cpu,
  puzzle: Puzzle,
  "trending-up": TrendingUp,
  boxes: Boxes,
  handshake: Handshake,
};

export default function WhyMeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="why-me"
      className="section-padding relative overflow-hidden bg-slate-900 dark:bg-slate-950"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="container-narrow relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-700/50 bg-brand-900/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400">
            Why Work With Me
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            What you can expect.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-slate-400 md:text-lg">
            Beyond technical skills — how I think, work, and deliver.
          </p>
        </motion.div>

        {/* Value points grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {valuePoints.map((point, i) => {
            const Icon = iconMap[point.icon];
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-xl border border-slate-700/50 bg-slate-800/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand-700/60 hover:bg-slate-800/80"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-600/20 text-brand-400 transition-colors group-hover:bg-brand-600/30">
                  {Icon && <Icon size={20} />}
                </div>
                <h3 className="font-display text-base font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-16 flex flex-col items-center gap-4 text-center"
        >
          <p className="font-display text-xl font-semibold text-white">
            Ready to build something great?
          </p>
          <p className="text-sm text-slate-400">
            I&apos;m available for backend engineering roles, freelance API projects, and full-stack
            contracts.
          </p>
          <a href="#contact" className="btn-primary mt-2">
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
