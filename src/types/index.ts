// ─── Project Types ────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  type: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  problem: string;
  features: string[];
  approach: string;
  tech: string[];
  role: string;
  challenges: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export type ProjectCategory =
  | "All"
  | "Backend / API"
  | "Full-Stack"
  | "Machine Learning"
  | "Mobile";

// ─── Skill Types ──────────────────────────────────────────────────────────────

export interface SkillGroup {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level?: number;
}

// ─── Service Types ────────────────────────────────────────────────────────────

export interface Service {
  icon: string;
  title: string;
  description: string;
}

// ─── Nav Link Types ───────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

// ─── Social Types ─────────────────────────────────────────────────────────────

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

// ─── Education Types ──────────────────────────────────────────────────────────

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  year: string;
  description: string;
  highlights: string[];
}

// ─── Experience Types ─────────────────────────────────────────────────────────

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  tech: string;
}
