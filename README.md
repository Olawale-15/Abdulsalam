# Abdus-Salaam Abdul-Qayyum — Portfolio

A professional, responsive software engineer portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Features smooth Framer Motion animations, dark mode, project filtering, and a working contact form UI.

---

## Tech Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Framework   | Next.js 14 (App Router)           |
| Language    | TypeScript                        |
| Styling     | Tailwind CSS                      |
| Animations  | Framer Motion                     |
| Icons       | Lucide React                      |
| Font        | Inter (body) + Syne (display)     |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install & Run

```bash
# 1. Clone or unzip the project
cd abdus-salaam-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, Tailwind layers, CSS utilities
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Main page — assembles all sections
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky navbar, dark mode toggle, mobile menu
│   │   └── Footer.tsx       # Footer with social links
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx      # Landing hero with profile image + CTAs
│   │   ├── AboutSection.tsx     # About me with competencies list
│   │   ├── SkillsSection.tsx    # Animated skill bars by category
│   │   ├── ProjectsSection.tsx  # Filterable project grid
│   │   ├── ServicesSection.tsx  # What I do / services cards
│   │   ├── WhyMeSection.tsx     # Value proposition section (dark bg)
│   │   └── ContactSection.tsx   # Contact form + contact cards
│   │
│   └── ui/
│       ├── ProjectCard.tsx      # Project card with expandable details
│       ├── BackToTop.tsx        # Scroll-to-top floating button
│       └── SectionReveal.tsx    # Reusable scroll-reveal animation wrapper
│
├── data/
│   └── index.ts             # All content: projects, skills, services, nav links
│
├── lib/
│   └── utils.ts             # cn() class helper, scrollToSection()
│
└── types/
    └── index.ts             # TypeScript interfaces (Project, Skill, Service, etc.)

public/
└── images/
    ├── profile/
    │   └── profile-placeholder.jpg   ← Replace with your photo
    └── projects/
        ├── suskii.jpg                ← Replace with project screenshots
        ├── academia.jpg
        ├── hostel-management.jpg
        ├── genetic-disease.jpg
        └── delivery-app.jpg
```

---

## How to Replace Images

### Profile Photo

1. Add your photo to `public/images/profile/`
2. Rename it `profile-placeholder.jpg` (or update the path in `HeroSection.tsx`)
3. Recommended: square, at least 400×400px, JPG or PNG

### Project Screenshots

1. Take screenshots of your projects (recommended: 1200×675px, 16:9)
2. Replace the placeholder files in `public/images/projects/`
3. Filename must match exactly: `suskii.jpg`, `academia.jpg`, etc.

---

## How to Update Content

All site content lives in **`src/data/index.ts`**. To update:

- **Projects** — Edit the `projects` array. Each project has: `title`, `summary`, `description`, `features`, `tech`, `approach`, `role`, `challenges`, `liveUrl`, `githubUrl`.
- **Skills** — Edit the `skillGroups` array. Add/remove skills or adjust `level` (0–100).
- **Services** — Edit the `services` array.
- **Social links** — Edit `socialLinks` with your real URLs.
- **Navigation** — Edit `navLinks` if you add new sections.

---

## How to Connect the Contact Form

The contact form is frontend-only. To make it functional, choose one:

### Option A: EmailJS (Recommended — no backend needed)

```bash
npm install @emailjs/browser
```

Then in `ContactSection.tsx`, replace the `handleSubmit` body with:

```ts
import emailjs from "@emailjs/browser";

emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  { from_name: form.name, reply_to: form.email, subject: form.subject, message: form.message },
  "YOUR_PUBLIC_KEY"
);
```

### Option B: API Route (Next.js backend)

Create `src/app/api/contact/route.ts` and POST to it from the form. Use `nodemailer` or Resend to send emails.

---

## Deploying

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or push to GitHub and import the repo on [vercel.com](https://vercel.com).

### Azure Static Web Apps / Other

```bash
npm run build
# Output in .next folder — configure your host accordingly
```

---

## Customisation Checklist

- [ ] Replace `profile-placeholder.jpg` with real photo
- [ ] Replace project screenshots in `public/images/projects/`
- [ ] Update `socialLinks` in `src/data/index.ts` with real URLs
- [ ] Update `contactCards` in `ContactSection.tsx` with real email/LinkedIn
- [ ] Update `liveUrl` and `githubUrl` for each project
- [ ] Replace `your@email.com` with your actual email
- [ ] Add your real CV file to `/public/` and update the download link
- [ ] Update `metadata` in `src/app/layout.tsx` with your domain
- [ ] Connect the contact form via EmailJS or an API route

---

## License

Personal use only. Do not redistribute as a template.
