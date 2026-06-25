import type { NavLink, Project, Service, SkillGroup, SocialLink } from "@/types";

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { label: "Home",      href: "#home"      },
  { label: "About",    href: "#about"     },
  { label: "Education",href: "#education" },
  { label: "Skills",   href: "#skills"    },
  { label: "Projects", href: "#projects"  },
  { label: "Contact",  href: "#contact"   },
];

// ─── Social Links (real) ──────────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  { label: "GitHub",   href: "https://github.com/Olawale-15",                                           icon: "github"   },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abdus-salaam-abdul-qayyum-72635b2a1/",       icon: "linkedin" },
  { label: "Email",    href: "mailto:pakorichie@gmail.com",                                             icon: "mail"     },
  { label: "WhatsApp", href: "https://wa.me/2349138888736",                                             icon: "message-circle" },
];

// ─── Personal Info ────────────────────────────────────────────────────────────

export const personalInfo = {
  name:        "Abdus-Salaam Abdul-Qayyum",
  role:        "Software Engineer",
  tagline:     ".NET Backend Engineer · ASP.NET Core Specialist",
  email:       "pakorichie@gmail.com",
  phone:       "+234 913 888 8736",
  location:    "Lagos, Nigeria",
  github:      "https://github.com/Olawale-15",
  linkedin:    "https://www.linkedin.com/in/abdus-salaam-abdul-qayyum-72635b2a1/",
  whatsapp:    "https://wa.me/2349138888736",
  cvPath:      "/documents/Abdul-Qayyum-Olawale-CV.pdf",
  profileImage:"/images/profile/abdus-salaam-profile.jpg",
};

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    icon: "code-2",
    skills: [
      { name: "C#",         level: 93 },
      { name: "Python",     level: 76 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 80 },
      { name: "HTML / CSS", level: 88 },
      { name: "SQL",        level: 88 },
    ],
  },
  {
    category: "Frontend",
    icon: "monitor",
    skills: [
      { name: "Angular",           level: 80 },
      { name: "Next.js",           level: 70 },
      { name: "Tailwind CSS",      level: 82 },
      { name: "Responsive Design", level: 86 },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "server",
    skills: [
      { name: "ASP.NET Core Web API", level: 94 },
      { name: "ASP.NET MVC",          level: 88 },
      { name: "Entity Framework Core",level: 87 },
      { name: "Clean Architecture",   level: 86 },
      { name: "CQRS / DDD",           level: 80 },
      { name: "JWT / Auth",           level: 86 },
      { name: "Microservices",        level: 78 },
    ],
  },
  {
    category: "Databases",
    icon: "database",
    skills: [
      { name: "SQL Server",  level: 90 },
      { name: "PostgreSQL",  level: 80 },
      { name: "MySQL",       level: 80 },
      { name: "MongoDB",     level: 68 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      { name: "Azure",        level: 80 },
      { name: "Docker",       level: 72 },
      { name: "Git / GitHub", level: 90 },
      { name: "CI/CD",        level: 72 },
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "suskii",
    title: "Suskii",
    type: "E-commerce / Marketplace Platform",
    category: "Full-Stack",
    summary:
      "A scalable e-commerce marketplace platform supporting product discovery, seller management, and end-to-end shopping workflows.",
    description:
      "Suskii is a modern marketplace platform inspired by large-scale commerce platforms like Jumia. It provides a structured environment for online buying and selling — supporting product discovery, category-based browsing, seller product management, and a streamlined shopping experience. The system is architected for scalability and designed to serve as a solid foundation for digital retail operations.",
    problem:
      "Sellers needed a reliable, structured platform to list and manage products online, while buyers needed a clean and discoverable shopping experience without friction.",
    features: [
      "Product listing and management with category organization",
      "Seller-side product and inventory workflows",
      "User-friendly product discovery and browsing",
      "Shopping cart and order placement workflow",
      "Scalable commerce architecture for multi-vendor support",
      "Admin dashboard for platform management",
    ],
    approach:
      "Built with a layered architecture approach using ASP.NET Web API for the backend, with clean separation between data, business logic, and API layers. The frontend consumes a structured REST API, and the database is normalized to support multi-category product structures.",
    tech: ["ASP.NET Web API", "C#", "SQL Server", "Entity Framework Core", "Angular", "TypeScript"],
    role: "Sole developer — designed the data model, built the API, integrated the frontend, and handled deployment.",
    challenges:
      "Designing a flexible product schema that can accommodate multiple categories and attribute types without over-engineering the data layer.",
    image: "/images/projects/suskii.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/Olawale-15",
    featured: true,
  },
  {
    id: "academia",
    title: "Academia",
    type: "School Management System",
    category: "Full-Stack",
    summary:
      "A comprehensive school management system that digitizes academic operations, student records, assessments, and administrative workflows.",
    description:
      "Academia is a school management platform designed to streamline the day-to-day operations of educational institutions. From student enrollment and class management to result processing and staff administration, the system brings structure and clarity to academic workflows. It is built to scale across multiple schools and academic sessions.",
    problem:
      "Educational institutions were managing critical academic data in fragmented tools — leading to errors, slow processes, and lack of visibility across departments.",
    features: [
      "Student enrollment and record management",
      "Class and academic session management",
      "Assessment and result processing workflow",
      "Staff and administrative data handling",
      "Result sheet generation and export",
      "Multi-role access: Admin, Staff, Student",
    ],
    approach:
      "Implemented as a multi-tenant SaaS architecture on ASP.NET Core with separate database provisioning per school. Angular frontend provides role-based dashboards for different user types.",
    tech: ["ASP.NET Core", "C#", "SQL Server", "Entity Framework Core", "Angular", "TypeScript", "Azure"],
    role: "Full-stack developer — architected the system, built the backend API, developed the Angular frontend, and managed Azure deployment.",
    challenges:
      "Designing a flexible result computation engine that handles different grading systems and academic session configurations across schools.",
    image: "/images/projects/academia-dashboard.png",
    liveUrl: "#",
    githubUrl: "https://github.com/Olawale-15",
    featured: true,
  },
  {
    id: "hostel-management",
    title: "Hostel Management System",
    type: "Student Accommodation Platform",
    category: "Full-Stack",
    summary:
      "A student accommodation platform enabling hostel discovery, listing management, and streamlined booking workflows.",
    description:
      "This hostel management system connects students with available accommodation options in a structured, searchable platform. Students can discover nearby hostels, view detailed listings, and navigate the housing process with ease. Administrators and agents manage listings, availability, and student interactions from a centralized dashboard. Paystack is integrated for seamless rent payment automation.",
    problem:
      "Students faced significant difficulty finding and securing off-campus accommodation due to scattered, informal listings and no centralized discovery system.",
    features: [
      "Hostel listing creation and management",
      "Location-based hostel discovery",
      "Accommodation detail pages with room types",
      "Admin and agent management dashboard",
      "Paystack payment integration for rent automation",
      "Secure user and landlord management workflows",
    ],
    approach:
      "REST API-first design with ASP.NET Core backend. Paystack integrated for payment flows. Angular frontend handles the discovery and listing experience with a clean, student-friendly UI.",
    tech: ["ASP.NET Core Web API", "C#", "SQL Server", "Entity Framework Core", "Paystack", "Angular", "TypeScript"],
    role: "Backend developer — designed the data schema, built the core REST API, integrated Paystack payments, and built the listing discovery features.",
    challenges:
      "Implementing efficient location-based search across hostel listings while maintaining strong performance as the dataset grows.",
    image: "/images/projects/hostel-management.png",
    liveUrl: "#",
    githubUrl: "https://github.com/Olawale-15",
    featured: true,
  },
  {
    id: "genetic-disease",
    title: "Genetic Disease Prediction",
    type: "Machine Learning / Health Risk Prediction",
    category: "Machine Learning",
    summary:
      "A machine learning web application that analyzes DNA sequence data to predict potential genetic health risks.",
    description:
      "This project demonstrates how software engineering and machine learning can be applied to healthcare-related risk analysis. Users input DNA sequences through a web interface, and the system processes the data through ML-driven predictive models to return genetic health risk assessments. Built with ASP.NET MVC for the web layer, the project shows practical integration of bioinformatics algorithms with a production-ready web application.",
    problem:
      "Early identification of genetic health risks requires complex analysis typically inaccessible to most people. This project demonstrates how ML-driven tools can make early risk screening more accessible.",
    features: [
      "DNA sequence input and validation workflow",
      "ML-powered genetic health risk prediction",
      "Fast results — predictions based on DNA sequences without delay",
      "AI-powered bioinformatics algorithms",
      "Secure data processing without permanent storage",
      "Clean result presentation with risk probability output",
    ],
    approach:
      "ASP.NET MVC web application with machine learning model integration. Data preprocessing pipeline cleanses and encodes DNA sequences before feeding into the predictive model. Results are surfaced through a clean, accessible web UI.",
    tech: ["ASP.NET MVC", "C#", "ML.NET", "Python", "Data Preprocessing", "Predictive Modelling"],
    role: "Full developer — designed the data pipeline, integrated the ML model, and built the ASP.NET MVC web interface for input and result display.",
    challenges:
      "Handling class imbalance in the genetic dataset and selecting features that meaningfully contribute to prediction accuracy without introducing data leakage.",
    image: "/images/projects/genetic-disease.png",
    liveUrl: "#",
    githubUrl: "https://github.com/Olawale-15",
    featured: true,
  },
  {
    id: "delivery-app",
    title: "Delivery App",
    type: "Logistics / Delivery Platform",
    category: "Backend / API",
    summary:
      "A logistics platform connecting customers, dispatch riders, and vendors through structured delivery booking and order management.",
    description:
      "This delivery application provides a structured operational layer for logistics and last-mile delivery services. Customers place delivery orders, which are routed to available dispatch riders through an assignment workflow. Vendors manage their service availability, and all parties interact through a clean API-driven interface. The system is designed for scalability and operational reliability.",
    problem:
      "Logistics businesses lacked a structured digital system to manage order intake, rider assignment, and delivery tracking — relying on manual coordination that slowed operations and introduced errors.",
    features: [
      "Customer order placement and booking flow",
      "Rider assignment and delivery management",
      "Vendor and service management interface",
      "Order status tracking and delivery updates",
      "Role-based access for Customer, Rider, and Admin",
      "Scalable delivery platform structure",
    ],
    approach:
      "Clean Architecture ASP.NET Core 8 backend with clearly separated application, domain, and infrastructure layers. RESTful API designed around delivery workflow states, with Azure deployment for production hosting.",
    tech: ["ASP.NET Core 8", "C#", "Clean Architecture", "SQL Server", "Azure", "Entity Framework Core"],
    role: "Backend developer — designed the system architecture, built the core delivery workflow API, implemented role-based auth, and deployed to Azure.",
    challenges:
      "Designing an efficient rider auto-assignment algorithm that accounts for proximity and availability without complex real-time infrastructure.",
    image: "/images/projects/delivery-app.jpg",
    liveUrl: "#",
    githubUrl: "https://github.com/Olawale-15",
    featured: false,
  },
];

// ─── Services ─────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    icon: "server",
    title: "Backend API Development",
    description:
      "Design and build production-ready REST APIs using ASP.NET Core — with clean architecture, layered patterns, JWT security, and Swagger documentation.",
  },
  {
    icon: "layers",
    title: "Full-Stack Web Applications",
    description:
      "End-to-end application development from database design to Angular/Next.js frontend — cohesive, maintainable, and deployment-ready.",
  },
  {
    icon: "database",
    title: "Database Design & Optimization",
    description:
      "Relational and document database modelling using SQL Server, PostgreSQL, MySQL, and MongoDB — with a focus on performance, normalization, and data integrity.",
  },
  {
    icon: "git-branch",
    title: "Business Workflow Automation",
    description:
      "Converting complex operational workflows into structured software systems — from school management to logistics, e-commerce, and accommodation platforms.",
  },
  {
    icon: "cloud",
    title: "Cloud Deployment & DevOps",
    description:
      "Deploying and maintaining scalable applications on Azure with Docker, CI/CD pipelines, environment configuration, and third-party API integration.",
  },
  {
    icon: "brain",
    title: "Applied Machine Learning",
    description:
      "Building data preprocessing pipelines and predictive models for real-world problems — including ML.NET integration within .NET applications.",
  },
];

// ─── Why Work With Me ─────────────────────────────────────────────────────────

export const valuePoints = [
  {
    icon: "shield-check",
    title: "Clean, Maintainable Code",
    description:
      "Code written to be read by the next developer — or your future self. Consistent patterns, clear naming, and well-structured architecture.",
  },
  {
    icon: "cpu",
    title: "Strong Backend Engineering",
    description:
      "Five years of focused .NET backend work — API design, data layer integrity, microservices, CQRS, and system reliability at the core.",
  },
  {
    icon: "puzzle",
    title: "Practical Problem Solving",
    description:
      "I focus on solving real business problems, not over-engineering. The right tool and the right scope for the problem at hand.",
  },
  {
    icon: "trending-up",
    title: "Product-Focused Thinking",
    description:
      "Engineering decisions made with the end user and business outcome in mind — not just technical correctness.",
  },
  {
    icon: "boxes",
    title: "Scalable Architecture",
    description:
      "Systems designed to grow — with clean separation of concerns, Clean Architecture, CQRS, and DDD principles built into the foundation.",
  },
  {
    icon: "handshake",
    title: "Reliable Delivery",
    description:
      "Clear communication, consistent delivery, and a strong sense of ownership across every project I contribute to.",
  },
];
