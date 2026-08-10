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
import {
  GitHubIcon,
  LinkedInIcon,
  UpworkIcon,
} from "@/components/social-icons";
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
    icon: UpworkIcon,
  },
];

export const stats: Stat[] = [
  { value: "3+", label: "Years of hands-on web development" },
  { value: "40%", label: "Performance gain on a client store" },
  { value: "Global", label: "Remote collaboration with clients" },
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
    title: "Service Business Websites",
    description:
      "Clear, responsive websites that explain your services, build trust, and turn visits into enquiries.",
    icon: Rocket,
  },
  {
    title: "React & Next.js Development",
    description:
      "Production-ready front ends for MVPs, dashboards, onboarding flows, and customer-facing products.",
    icon: Blocks,
  },
  {
    title: "WordPress Development",
    description:
      "New builds, redesigns, and performance improvements that keep content easy for your team to manage.",
    icon: Store,
  },
  {
    title: "Internal Tools",
    description:
      "Practical admin panels and workflow tools that make everyday business tasks simpler and faster.",
    icon: BriefcaseBusiness,
  },
];

export const experiences: Experience[] = [
  {
    role: "Discovery & Planning",
    company: "How I work",
    description:
      "I clarify the audience, business goal, content, and technical scope before development begins.",
  },
  {
    role: "Interface Development",
    company: "Core expertise",
    description:
      "I build responsive React interfaces with reusable components, accessible interactions, and clean code.",
  },
  {
    role: "CMS & Integrations",
    company: "Practical delivery",
    description:
      "I connect content management, forms, databases, and third-party services around the needs of the project.",
  },
  {
    role: "Launch & Support",
    company: "After the build",
    description:
      "I test across screen sizes, improve performance, support deployment, and make handoff straightforward.",
  },
];

export const projects: Project[] = [
  {
    title: "Lnkeee",
    category: "SaaS product",
    description:
      "A link-management platform for creating short, trackable URLs and understanding how each link performs through useful analytics.",
    image: "/assets/lnkeee-live.webp",
    href: "https://www.lnkeee.com/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "WM Electric LLC",
    category: "Electrical contractor website",
    image: "/assets/wm-electric-live.webp",
    description:
      "A responsive lead-generation website for a Texas electrical subcontractor, presenting capabilities across multifamily, commercial, and residential construction.",
    href: "https://wmelectrictx.com/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Premier Academy Management System",
    category: "Operations dashboard",
    description:
      "A centralized academy-management system for student records, fee collection, expenses, reporting, and daily administrative work.",
    image: "/assets/pams-live.webp",
    href: "https://pams-six.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Estimation Service",
    category: "Trade estimating platform",
    image: "/assets/estimation-service-live.webp",
    description:
      "A professional estimating website for construction and trade contractors across the USA and Canada, with a clear plan-upload journey.",
    href: "https://estimationservice.com/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Solution Office 247",
    category: "Digital services website",
    description:
      "A modern multi-service website bringing academic writing, front-end development, and e-commerce support into one clear customer journey.",
    image: "/assets/solution-office-live.webp",
    href: "https://solutionoffice247.com/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "REN Services & Restoration",
    category: "Emergency restoration website",
    image: "/assets/ren-services-live.webp",
    description:
      "A conversion-focused website for a North Carolina restoration company, built around 24/7 emergency response and local service coverage.",
    href: "https://renservicesnc.com/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Gattaca Geomarketing",
    category: "French software landing page",
    image: "/assets/gattaca-live.webp",
    description:
      "A French-language marketing page for customer-loyalty software, explaining the benefits, automated workflow, social proof, and free trial.",
    href: "https://gattaca-geomarketing.com/",
    tech: ["HTML", "CSS", "Responsive Landing Page"],
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
      "Zaman revamped our WordPress site flawlessly—clean, fast, and responsive. Communication was smooth, and everything was delivered on time.",
    author: "Engel Rosario",
    role: "CEO at RenServicesNc.com",
  },
  {
    quote:
      "Our WordPress store saw a 40% speed boost after Zaman's optimization. He also improved the checkout experience, leading to higher conversions.",
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
    role: "CEO at Gattaca Loyalty Company",
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
