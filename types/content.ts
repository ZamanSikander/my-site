import type { ComponentType, SVGProps } from "react";
import type { LucideIcon } from "lucide-react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export type SocialLink = {
  label: string;
  href: string;
  icon: IconComponent;
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
  category: string;
  image: string;
  href: string;
  tech: string[];
  featured?: boolean;
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
