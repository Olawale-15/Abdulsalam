"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const education = {
  degree:      "Bachelor of Technology (B.Tech)",
  field:       "Computer Science",
  institution: "Ladoke Akintola University of Technology",
  location:    "Ogbomoso, Nigeria",
  year:        "Graduated 2025",
  description:
    "A strong academic foundation in computer science, software engineering, data structures, algorithms, system design, and applied computing — forming the technical backbone for my work in backend engineering, API development, and software architecture.",
  highlights: [
    "Software Engineering & System Design",
    "Data Structures & Algorithms",
    "Database Systems & Management",
    "Computer Networks & Distributed Systems",
    "Artificial Intelligence & Machine Learning",
    "Web Technologies & Application Development",
  ],
};

export default function EducationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="education" className="section-padding bg-white dark:bg-slate-950">
      <div className="container-narrow" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="section-label">Education</span>
          <h2 className="section-title">Academic background.</h2>
          <p className="section-subtitle mx-auto">
            The academic foundation underpinning my engineering work.
          </p>
        </motion.div>

        {/* Education card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto max-w-3xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card dark:border-slate-700/50 dark:bg-slate-800/60">
            {/* Top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-brand-600 via-brand-500 to-blue-400" />

            <div className="p-8 sm:p-10">
              {/* Degree header */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
                    <GraduationCap size={24} />
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                      {education.degree}
                    </h3>
                    <p className="mt-0.5 text-base font-semibold text-brand-600 dark:text-brand-400">
                      {education.field}
                    </p>
                  </div>
                </div>

                {/* Year badge */}
                <span className="inline-flex self-start items-center gap-1.5 rounded-lg border border-brand-100 bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700 dark:border-brand-800/50 dark:bg-brand-900/30 dark:text-brand-400">
                  <Calendar size={12} />
                  {education.year}
                </span>
              </div>

              {/* Institution */}
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-300">
                  <BookOpen size={14} className="text-brand-500" />
                  {education.institution}
                </div>
                <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                  <MapPin size={14} className="text-brand-500" />
                  {education.location}
                </div>
              </div>

              {/* Description */}
              <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {education.description}
              </p>

              {/* Highlights */}
              <div className="mt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Areas Covered
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.highlights.map((h) => (
                    <span key={h} className="tech-badge">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
