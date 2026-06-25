"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X, Moon, Sun, Code2, Download } from "lucide-react";
import { navLinks, personalInfo } from "@/data";
import { scrollToSection, cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved === "dark" || (!saved && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    for (const id of [...sections].reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        setActive(id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNav = (href: string) => {
    setOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/60 bg-white/90 shadow-sm backdrop-blur-md dark:border-slate-700/40 dark:bg-slate-950/90"
          : "bg-transparent"
      )}
    >
      <div className="container-narrow flex h-[72px] items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("#home")}
          className="flex items-center gap-2.5 font-display text-lg font-bold text-slate-900 dark:text-white"
          aria-label="Home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
            <Code2 size={16} />
          </span>
          <span>
            AA<span className="text-brand-600">.</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={cn(
                "nav-link",
                active === link.href.replace("#", "") && "active"
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href={personalInfo.cvPath}
            download
            className="btn-primary hidden items-center gap-2 text-xs sm:inline-flex"
          >
            <Download size={13} />
            Download CV
          </a>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-md transition-all duration-300 dark:border-slate-700/40 dark:bg-slate-950/95 lg:hidden",
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container-narrow flex flex-col gap-1 py-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={cn(
                "rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors",
                active === link.href.replace("#", "")
                  ? "bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              )}
            >
              {link.label}
            </button>
          ))}
          <a
            href={personalInfo.cvPath}
            download
            className="btn-primary mt-2 justify-center text-xs"
          >
            <Download size={13} />
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}
