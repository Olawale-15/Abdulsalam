"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Monitor,
  Server,
  Database,
  Cloud,
  type LucideProps,
} from "lucide-react";
import { skillGroups } from "@/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  "code-2": Code2,
  monitor: Monitor,
  server: Server,
  database: Database,
  cloud: Cloud,
};

function SkillBar({ name, level, delay }: { name: string; level?: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{name}</span>
        {level !== undefined && (
          <span className="text-xs font-mono-code text-slate-400 dark:text-slate-500">
            {level}%
          </span>
        )}
      </div>
      {level !== undefined && (
        <div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${level}%` } : {}}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-400"
          />
        </div>
      )}
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="section-padding bg-white dark:bg-slate-950">
      <div className="container-narrow" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="section-label">Tech Stack</span>
          <h2 className="section-title">Tools I work with.</h2>
          <p className="section-subtitle mx-auto">
            A breakdown of the technologies, frameworks, and tools I use to build and ship software.
          </p>
        </motion.div>

        {/* Skill groups grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = iconMap[group.icon];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                className={cn(
                  "card group",
                  gi === 0 && "sm:col-span-2 xl:col-span-1"
                )}
              >
                {/* Card header */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-100 dark:bg-brand-900/30 dark:text-brand-400 dark:group-hover:bg-brand-900/50">
                    {Icon && <Icon size={18} />}
                  </div>
                  <h3 className="font-display text-sm font-semibold text-slate-800 dark:text-white">
                    {group.category}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {group.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={gi * 0.05 + si * 0.06}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 rounded-2xl border border-slate-100 bg-slate-50 p-6 dark:border-slate-700/50 dark:bg-slate-800/30"
        >
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
            Also comfortable with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "REST API", "OAuth / JWT", "Repository Pattern", "Unit of Work",
              "CQRS", "Clean Architecture", "Express.js", "Microservices",
              "API Integration", "HTML Email", "EF Core Migrations", "Swagger / OpenAPI",
            ].map((tag) => (
              <span key={tag} className="tech-badge">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
