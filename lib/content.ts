import {
  Blocks,
  BriefcaseBusiness,
  Code2,
  Layers3,
  MonitorSmartphone,
  Rocket,
  Sparkles,
  Store,
  WandSparkles,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/social-icons";
import type {
  Experience,
  Project,
  Service,
  SocialLink,
  Stat,
  Testimonial,
} from "@/types/content";

export const site = {
  name: "Zaman Sikander",
  title: "Full-Stack Web Developer",
  description:
    "Freelance full-stack web developer specializing in modern websites, React interfaces, WordPress, business systems, and fast responsive front-end development.",
  url: "https://zamansikander.com",
  email: "contact@zamansikander.com",
  phone: "+923046282698",
  displayPhone: "+92 304 6282698",
  location: "Pakistan",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/zamansikander/",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/zamansikander/",
    icon: LinkedInIcon,
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01ef4eb25f55486b6f?mp_source=share",
    icon: BriefcaseBusiness,
  },
];

export const stats: Stat[] = [
  { value: "3+", label: "Years building responsive web products" },
  { value: "40%", label: "Speed lift delivered for a client store" },
  { value: "7", label: "Client testimonials migrated from the old site" },
];

export const coreStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "Framer Motion",
];

export const services: Service[] = [
  {
    title: "Marketing Sites",
    description:
      "Fast, polished landing pages and portfolio sites that make the offer clear on every screen.",
    icon: Rocket,
  },
  {
    title: "SaaS Products",
    description:
      "Responsive front ends for dashboards, MVPs, onboarding flows, and product interfaces.",
    icon: Blocks,
  },
  {
    title: "Business Websites",
    description:
      "Modern business sites, WordPress rebuilds, and service pages with clean UX and SEO fundamentals.",
    icon: Store,
  },
  {
    title: "Management Systems",
    description:
      "Practical admin panels, internal tools, and data-heavy interfaces built for daily use.",
    icon: BriefcaseBusiness,
  },
];

export const experiences: Experience[] = [
  {
    role: "WordPress Developer",
    company: "Freelance",
    description:
      "Created and maintained WordPress websites, including custom themes and plugin work for clients.",
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    description:
      "Built responsive and interactive web applications with React, Tailwind CSS, and modern tooling.",
  },
  {
    role: "Web Designer",
    company: "Freelance",
    description:
      "Designed and developed responsive websites with HTML, CSS, and Bootstrap for small businesses.",
  },
  {
    role: "MVP Developer",
    company: "Freelance",
    description:
      "Designed and developed a responsive MVP for a construction business using React and Tailwind CSS.",
  },
];

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    image: "/assets/portfolio-website.webp",
    description:
      "A personal portfolio site built with React and Tailwind CSS to present services and selected work.",
    href: "https://yourportfolio.com",
    tech: ["React", "Tailwind CSS", "Responsive UI"],
    isPlaceholder: true,
  },
  {
    title: "E-commerce Platform",
    image: "/assets/ecommerce-platform.webp",
    description:
      "A storefront concept with shopping cart flows, product presentation, and payment-oriented UX.",
    href: "https://yourecommerce.com",
    tech: ["React", "Commerce UX", "Payments"],
    isPlaceholder: true,
  },
  {
    title: "Dashboard UI",
    image: "/assets/dashboard-ui.webp",
    description:
      "Analytics dashboard interface with KPIs, charts, and scan-friendly reporting layouts.",
    href: "https://yourdashboard.com",
    tech: ["React", "Dashboard", "Charts"],
    isPlaceholder: true,
  },
  {
    title: "Landing Page",
    image: "/assets/portfolio-website.webp",
    description:
      "A marketing page for a product or service, focused on crisp messaging and conversion paths.",
    href: "https://landingpage.com",
    tech: ["Tailwind CSS", "SEO", "Landing Page"],
    isPlaceholder: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Zaman is very friendly and did a great job.",
    author: "Larvi Debiane",
    role: "CEO at Gattaca Fidielty Company",
  },
  {
    quote:
      "Zaman revamped our WordPress site flawlessly - clean, fast, and responsive. Communication was smooth, and everything was delivered on time.",
    author: "Engel Rosario",
    role: "CEO at RenServicesNc.com",
  },
  {
    quote:
      "Our WordPress store saw a 40% speed boost after Zaman optimization. He also improved the checkout UX, leading to higher conversions.",
    author: "Peter O",
    role: "Manager at The Greenhouse",
  },
  {
    quote:
      "Zaman is a very honorable and professional developer. He has helped me with my projects, very responsive and very fast with work.",
    author: "Engel Rosario",
    role: "CEO at Ren Services Nc",
  },
  {
    quote: "Zaman went above and beyond and I admired his efforts.",
    author: "Rafeeq Fredericks",
    role: "Owner at Eco Built Nc",
  },
  {
    quote:
      "Zaman technical expertise and creative approach helped transform our outdated platform into a modern, user-friendly experience.",
    author: "Larvi Debiane",
    role: "CEO at Gattaca Fidielty Company",
  },
  {
    quote:
      "He helped me create the website and the output was really good. Everything worked. I will hire him for my next project and refer other business owners too.",
    author: "Aamir Ahmed Mohammad",
    role: "Founder and CEO at electricalestimate.com",
  },
];

export const skills = [
  { name: "HTML", icon: Code2 },
  { name: "CSS", icon: WandSparkles },
  { name: "React.js", icon: Sparkles },
  { name: "Tailwind CSS", icon: Layers3 },
  { name: "Bootstrap", icon: MonitorSmartphone },
  { name: "WordPress", icon: Store },
  { name: "Cursor AI", icon: WandSparkles },
  { name: "Motion.dev", icon: Sparkles },
  { name: "Git & GitHub", icon: Code2 },
];
