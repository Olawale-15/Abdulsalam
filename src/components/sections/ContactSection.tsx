"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle2, Phone, Download, MessageCircle } from "lucide-react";
import { personalInfo } from "@/data";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "text-blue-500",
    bg:    "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    color: "text-green-500",
    bg:    "bg-green-50 dark:bg-green-900/20",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: personalInfo.whatsapp,
    color: "text-emerald-500",
    bg:    "bg-emerald-50 dark:bg-emerald-900/20",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Olawale-15",
    href: personalInfo.github,
    color: "text-slate-700 dark:text-slate-300",
    bg:    "bg-slate-100 dark:bg-slate-800",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Abdus-Salaam Abdul-Qayyum",
    href: personalInfo.linkedin,
    color: "text-blue-600",
    bg:    "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lagos, Nigeria",
    href: null,
    color: "text-rose-500",
    bg:    "bg-rose-50 dark:bg-rose-900/20",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate EmailJS or backend route
    console.log("Form submitted:", form);
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-900/40">
      <div className="container-narrow" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let&apos;s build scalable, meaningful software.</h2>
          <p className="section-subtitle mx-auto">
            Whether you have a project in mind, a role to fill, or just want to connect — my inbox is open.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* ── Left: Contact cards ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              I&apos;m currently available for backend engineering roles, API development contracts, and
              full-stack freelance work. Remote opportunities are welcome.
            </p>

            <div className="mt-1 space-y-2">
              {contactCards.map(({ icon: Icon, label, value, href, color, bg }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3.5 shadow-card dark:border-slate-700/50 dark:bg-slate-800/60"
                >
                  <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg ${bg}`}>
                    <Icon size={16} className={color} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="truncate text-sm font-medium text-slate-700 hover:text-brand-600 dark:text-slate-200 dark:hover:text-brand-400"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Download CV */}
            <a
              href={personalInfo.cvPath}
              download
              className="btn-primary mt-2 justify-center text-sm"
            >
              <Download size={15} />
              Download My CV
            </a>
          </motion.div>

          {/* ── Right: Contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-card dark:border-slate-700/50 dark:bg-slate-800/60">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 size={52} className="text-green-500" />
                  <h3 className="mt-4 font-display text-xl font-bold text-slate-900 dark:text-white">
                    Message sent!
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Thanks for reaching out. I&apos;ll get back to you as soon as I can.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        Name
                      </label>
                      <input id="name" name="name" type="text" required placeholder="Your name"
                        value={form.name} onChange={handleChange} className="input-field" />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        Email
                      </label>
                      <input id="email" name="email" type="email" required placeholder="your@email.com"
                        value={form.email} onChange={handleChange} className="input-field" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Subject
                    </label>
                    <input id="subject" name="subject" type="text" required placeholder="What&apos;s this about?"
                      value={form.subject} onChange={handleChange} className="input-field" />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      Message
                    </label>
                    <textarea id="message" name="message" required rows={5}
                      placeholder="Tell me about your project, role, or idea..."
                      value={form.message} onChange={handleChange} className="input-field resize-none" />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send size={16} />
                    Send Message
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    I typically respond within 24–48 hours. You can also reach me directly at{" "}
                    <a href={`mailto:${personalInfo.email}`} className="text-brand-500 hover:underline">
                      {personalInfo.email}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}