import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdus-Salaam Abdul-Qayyum — .NET Backend Engineer",
  description:
    "Results-driven .NET Backend Engineer with 5 years of experience designing scalable REST APIs, microservices, and distributed backend systems using C#, ASP.NET Core, and SQL technologies.",
  keywords: [
    "Software Engineer",
    "ASP.NET Core",
    "C#",
    ".NET Backend Engineer",
    "Backend Developer",
    "Full-Stack Developer",
    "API Development",
    "Angular",
    "Nigeria",
    "Clean Architecture",
    "Microservices",
  ],
  authors: [{ name: "Abdus-Salaam Abdul-Qayyum" }],
  creator: "Abdus-Salaam Abdul-Qayyum",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "Abdus-Salaam Abdul-Qayyum",
    title: "Abdus-Salaam Abdul-Qayyum — .NET Backend Engineer",
    description:
      ".NET Backend Engineer specializing in scalable REST APIs, microservices, and distributed backend systems.",
    images: [
      {
        url: "/images/profile/abdus-salaam-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Abdus-Salaam Abdul-Qayyum — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdus-Salaam Abdul-Qayyum — .NET Backend Engineer",
    description:
      ".NET Backend Engineer specializing in scalable REST APIs, microservices, and distributed backend systems.",
    images: ["/images/profile/abdus-salaam-profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-white font-sans text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
