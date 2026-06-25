"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data";
import type { ProjectCategory } from "@/types";
import ProjectCard from "@/components/ui/ProjectCard";
import { cn } from "@/lib/utils";

const categories: ProjectCategory[] = [
  "All",
  "Full-Stack",
  "Backend / API",
  "Machine Learning",
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState<ProjectCategory>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/40">
      <div className="container-narrow" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Projects I've shipped.</h2>
          <p className="section-subtitle mx-auto">
            A selection of systems, platforms, and applications built across different domains and
            problem spaces.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="mb-10 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200",
                active === cat
                  ? "bg-brand-600 text-white shadow-brand-sm"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-brand-600 dark:hover:bg-brand-900/30"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-14 rounded-2xl border border-brand-100 bg-gradient-to-r from-brand-50 to-blue-50 p-8 text-center dark:border-brand-800/30 dark:from-brand-900/20 dark:to-blue-900/10"
        >
          <p className="font-display text-lg font-semibold text-slate-800 dark:text-white">
            Have a project or idea you'd like to build?
          </p>
          <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
            I'm available for freelance work and open to discussing new opportunities.
          </p>
          <a href="#contact" className="btn-primary mt-5 inline-flex">
            Let's talk about it
          </a>
        </motion.div>
      </div>
    </section>
  );
}
