"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-card transition-all duration-300 hover:shadow-card-hover dark:border-slate-700/60 dark:bg-slate-800/60",
        project.featured && "ring-1 ring-brand-200/50 dark:ring-brand-700/30"
      )}
    >
      {/* ── Image area ── */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Fallback gradient */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-500/10 to-brand-600/20">
          <span className="font-display text-4xl font-bold text-brand-300/40">
            {project.title[0]}
          </span>
        </div>

        {/* Category badge */}
        <div className="absolute left-3 top-3">
          <span className="rounded-md bg-white/90 px-2.5 py-1 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur-sm dark:bg-slate-900/90 dark:text-brand-400">
            {project.category}
          </span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute right-3 top-3">
            <span className="rounded-md bg-brand-600/90 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-1 text-xs font-medium uppercase tracking-widest text-slate-400">
          {project.type}
        </div>
        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {project.summary}
        </p>

        {/* Tech tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="tech-badge">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="tech-badge">+{project.tech.length - 4}</span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 dark:border-slate-700">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex-1 justify-center text-xs"
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex-1 justify-center text-xs"
          >
            <Github size={13} />
            GitHub
          </a>
          <button
            onClick={() => setExpanded(!expanded)}
            aria-label="Toggle project details"
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 dark:border-slate-700 dark:hover:border-brand-600 dark:hover:bg-brand-900/30 dark:hover:text-brand-400"
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* ── Expandable Details ── */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-5 space-y-5 border-t border-slate-100 pt-5 dark:border-slate-700">
                {/* Problem */}
                <div>
                  <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                    Problem Solved
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.problem}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Approach */}
                <div>
                  <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                    Architecture & Approach
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.approach}
                  </p>
                </div>

                {/* Role */}
                <div>
                  <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                    My Role
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.role}
                  </p>
                </div>

                {/* Challenges */}
                <div>
                  <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                    Challenges
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.challenges}
                  </p>
                </div>

                {/* All tech tags */}
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                    Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
