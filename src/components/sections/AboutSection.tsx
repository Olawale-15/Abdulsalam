"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, MapPin, Briefcase, ExternalLink } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "@/data";

const highlights = [
  "Backend & REST API development with C# and ASP.NET Core",
  "Scalable application architecture: Clean Architecture, CQRS, DDD, Microservices",
  "Database modelling and integration across SQL Server, PostgreSQL, MySQL, and MongoDB",
  "Full-stack collaboration using Angular, TypeScript, and JavaScript",
  "Cloud deployment and DevOps on Azure with Docker and CI/CD pipelines",
  "Applied machine learning experimentation for real-world problem solving",
];

const experience = [
  {
    role: "Full Stack Developer",
    company: "Cloudware Ltd",
    period: "Feb 2025 – Present",
    tech: "Angular · TypeScript · ASP.NET Core · C# · SQL Server · Docker",
  },
  {
    role: ".Net Full Stack Developer",
    company: "Jimax Solution",
    period: "Mar 2023 – Oct 2024",
    tech: "ASP.NET Core · EF Core · SQL Server · JWT · Docker",
  },
  {
    role: ".NET Developer (Contract)",
    company: "Fyndah",
    period: "Jan 2023 – Mar 2023",
    tech: "ASP.NET Core · Kafka · Microservices · PostgreSQL",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-900/40">
      <div className="container-narrow" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">Engineering with intention.</h2>
          <p className="section-subtitle mx-auto">
            A bit about who I am, what I do, and how I think about software.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* ── Left: Bio + Experience ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              I'm a software engineer with five years of experience building backend systems, REST APIs,
              business platforms, and practical software solutions across education, e-commerce,
              accommodation, logistics, and applied machine learning.
            </p>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              My work focuses on designing maintainable backend architectures, building scalable APIs,
              integrating relational and non-relational databases, and translating real operational problems
              into usable software products. My primary stack is{" "}
              <span className="font-semibold text-slate-800 dark:text-white">C# and ASP.NET Core</span>,
              and I work across Clean Architecture, CQRS, and domain-driven design for backend systems —
              with full-stack capability spanning Angular frontends and Azure cloud deployments.
            </p>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
              I enjoy combining engineering structure with product thinking to deliver systems that are
              both technically sound and useful in practice.
            </p>

            {/* Location / availability */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                <MapPin size={14} className="text-brand-500" />
                Lagos, Nigeria
              </div>
              <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                <Briefcase size={14} className="text-brand-500" />
                Available for remote roles
              </div>
            </div>

            {/* Experience timeline */}
            <div className="mt-2 space-y-3 pt-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Professional Experience
              </p>
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  className="flex gap-3 rounded-xl border border-slate-100 bg-white p-4 dark:border-slate-700/50 dark:bg-slate-800/50"
                >
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <span className="text-sm font-semibold text-slate-800 dark:text-white">
                        {exp.role}
                      </span>
                      <span className="text-xs text-slate-400">{exp.period}</span>
                    </div>
                    <p className="text-xs font-medium text-brand-600 dark:text-brand-400">
                      {exp.company}
                    </p>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{exp.tech}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href={personalInfo.cvPath}
              download
              className="btn-ghost inline-flex w-fit"
            >
              <ExternalLink size={14} />
              View Full CV
            </a>
          </motion.div>

          {/* ── Right: Profile image + highlights ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-6"
          >
            {/* Profile card */}
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card dark:border-slate-700/50 dark:bg-slate-800/60">
              <div className="relative h-56 w-full sm:h-64">
                <Image
                  src={personalInfo.profileImage}
                  alt="Abdus-Salaam Abdul-Qayyum"
                  fill
                  className="object-cover object-[center_65%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="font-display text-lg font-bold text-white">Abdus-Salaam Abdul-Qayyum</p>
                  <p className="text-sm text-white/80">Software Engineer · Lagos, Nigeria</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 divide-x divide-slate-100 dark:divide-slate-700">
                {[
                  { value: "5+", label: "Years" },
                  { value: "10+", label: "Projects" },
                  { value: "3+", label: "Companies" },
                ].map((s) => (
                  <div key={s.label} className="py-4 text-center">
                    <div className="font-display text-xl font-bold text-brand-600">{s.value}</div>
                    <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card dark:border-slate-700/50 dark:bg-slate-800/60">
              <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-widest text-slate-400">
                Core competencies
              </h3>
              <ul className="space-y-3">
                {highlights.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.35 + i * 0.07, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-brand-500" />
                    <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
