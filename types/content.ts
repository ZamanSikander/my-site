import type { LucideIcon } from 'lucide-react';

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Stat = {
  label: string;
  value: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  href: string;
  tech: string[];
  isPlaceholder?: boolean;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type Experience = {
  role: string;
  company: string;
  description: string;
};
