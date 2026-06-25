"use client";

import { Github, Linkedin, Mail, ArrowRight, Download, ChevronDown, MessageCircle, type LucideProps } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { socialLinks, personalInfo } from "@/data";
import { scrollToSection } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  github:          Github,
  linkedin:        Linkedin,
  mail:            Mail,
  "message-circle": MessageCircle,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-radial-brand" />
      <div className="pointer-events-none absolute -right-64 -top-64 h-[600px] w-[600px] rounded-full bg-brand-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-blue-400/5 blur-3xl" />

      <div className="container-narrow relative z-10 w-full pb-16 pt-24">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">

          {/* ── Left: Text ── */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
            {/* Status pill */}
            <motion.div
              custom={0} initial="hidden" animate="show" variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 dark:border-green-800/50 dark:bg-green-900/20"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                Open to opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              custom={1} initial="hidden" animate="show" variants={fadeUp}
              className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white"
            >
              Abdus-Salaam
              <br />
              <span className="text-gradient">Abdul-Qayyum</span>
            </motion.h1>

            {/* Role chip */}
            <motion.p
              custom={2} initial="hidden" animate="show" variants={fadeUp}
              className="mt-4 font-mono-code text-sm font-medium tracking-wider text-brand-600 dark:text-brand-400"
            >
              {"<"} .NET Backend Engineer · ASP.NET Core Specialist {"/>"}
            </motion.p>

            {/* Tagline */}
            <motion.p
              custom={3} initial="hidden" animate="show" variants={fadeUp}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-500 md:text-lg dark:text-slate-400"
            >
              Software Engineer focused on{" "}
              <span className="font-semibold text-slate-700 dark:text-slate-200">backend systems</span>,{" "}
              <span className="font-semibold text-slate-700 dark:text-slate-200">scalable APIs</span>, and{" "}
              <span className="font-semibold text-slate-700 dark:text-slate-200">business-driven software solutions</span>.
              I build applications across education, e-commerce, accommodation, logistics, and applied
              machine learning — with a strong emphasis on maintainable architecture and clean implementation.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              custom={4} initial="hidden" animate="show" variants={fadeUp}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <button onClick={() => scrollToSection("#projects")} className="btn-primary">
                View Projects
                <ArrowRight size={16} />
              </button>
              <a href={personalInfo.cvPath} download className="btn-ghost">
                <Download size={16} />
                Download CV
              </a>
              <button onClick={() => scrollToSection("#contact")} className="btn-ghost">
                Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              custom={5} initial="hidden" animate="show" variants={fadeUp}
              className="mt-8 flex items-center gap-2"
            >
              {socialLinks.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-all hover:border-brand-400 hover:bg-brand-50 hover:text-brand-600 hover:shadow-brand-sm dark:border-slate-700 dark:text-slate-400 dark:hover:border-brand-600 dark:hover:bg-brand-900/30 dark:hover:text-brand-400"
                  >
                    {Icon && <Icon size={18} />}
                  </a>
                );
              })}
            </motion.div>

            {/* Stats row */}
            <motion.div
              custom={6} initial="hidden" animate="show" variants={fadeUp}
              className="mt-10 flex items-center gap-6 border-t border-slate-100 pt-8 dark:border-slate-800"
            >
              {[
                { value: "5+", label: "Years experience" },
                { value: "10+", label: "Projects shipped" },
                { value: "3+", label: "Domains served" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display text-2xl font-bold text-brand-600">{stat.value}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Profile image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            {/* Decorative rings */}
            <div className="absolute -inset-4 rounded-full border border-brand-200/40 dark:border-brand-700/30" />
            <div className="absolute -inset-8 rounded-full border border-brand-100/30 dark:border-brand-800/20" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-400/20 to-blue-400/10 blur-2xl" />

            {/* Profile image */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-brand-lg dark:border-slate-800 sm:h-80 sm:w-80">
              <Image
                src={personalInfo.profileImage}
                alt="Abdus-Salaam Abdul-Qayyum — Software Engineer"
                fill
                className="object-cover object-[center_65%]"
                priority
                sizes="(max-width: 640px) 256px, 320px"
              />
            </div>

            {/* Floating badge: tech */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-6 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-card dark:border-slate-700 dark:bg-slate-800"
            >
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">🛠 ASP.NET · C# · Azure</p>
            </motion.div>

            {/* Floating badge: exp */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -right-6 top-8 rounded-xl border border-slate-100 bg-white px-3 py-2 shadow-card dark:border-slate-700 dark:bg-slate-800"
            >
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">💼 5+ Yrs Backend</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => scrollToSection("#about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 transition-colors hover:text-brand-500"
          aria-label="Scroll to about section"
        >
          <span className="text-xs">Scroll down</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
