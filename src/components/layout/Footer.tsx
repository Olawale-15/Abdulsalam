import { Github, Linkedin, Mail, MessageCircle, Code2, Heart, Download, type LucideProps } from "lucide-react";
import { socialLinks, personalInfo } from "@/data";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  github:          Github,
  linkedin:        Linkedin,
  mail:            Mail,
  "message-circle": MessageCircle,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/60 bg-slate-50 dark:border-slate-800/60 dark:bg-slate-950">
      <div className="container-narrow py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex flex-col items-center gap-1 md:items-start">
            <div className="flex items-center gap-2 font-display text-lg font-bold text-slate-900 dark:text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-600 text-white">
                <Code2 size={14} />
              </span>
              Abdus-Salaam Abdul-Qayyum
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              .NET Backend Engineer · Software Engineer
            </p>
          </div>

          {/* Social + CV */}
          <div className="flex items-center gap-3">
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
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-brand-700 dark:hover:bg-brand-900/30 dark:hover:text-brand-400"
                >
                  {Icon && <Icon size={16} />}
                </a>
              );
            })}
            <a
              href={personalInfo.cvPath}
              download
              aria-label="Download CV"
              title="Download CV"
              className="flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 px-3 text-xs font-medium text-slate-600 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 dark:border-slate-700 dark:text-slate-400 dark:hover:border-brand-700 dark:hover:text-brand-400"
            >
              <Download size={13} />
              CV
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 border-t border-slate-200/60 pt-8 dark:border-slate-800/60 md:flex-row md:justify-between">
          <p className="text-xs text-slate-400">
            © {year} Abdus-Salaam Abdul-Qayyum. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-slate-400">
            Built with <Heart size={11} className="text-red-400" /> using Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
