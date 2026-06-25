"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Server,
  Layers,
  Database,
  GitBranch,
  Cloud,
  Brain,
  type LucideProps,
} from "lucide-react";
import { services } from "@/data";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  server: Server,
  layers: Layers,
  database: Database,
  "git-branch": GitBranch,
  cloud: Cloud,
  brain: Brain,
};

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="services" className="section-padding bg-white dark:bg-slate-950">
      <div className="container-narrow" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="section-label">What I Do</span>
          <h2 className="section-title">How I can help.</h2>
          <p className="section-subtitle mx-auto">
            The core engineering services I deliver — from API design to cloud deployment and applied
            ML.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon];
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group card hover:border-brand-200 dark:hover:border-brand-700/50"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100 dark:bg-brand-900/30 dark:text-brand-400 dark:group-hover:bg-brand-900/50">
                  {Icon && <Icon size={22} />}
                </div>

                <h3 className="font-display text-base font-semibold text-slate-900 dark:text-white">
                  {svc.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {svc.description}
                </p>

                {/* Animated underline accent on hover */}
                <div className="mt-5 h-0.5 w-0 rounded-full bg-brand-500 transition-all duration-300 group-hover:w-12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
