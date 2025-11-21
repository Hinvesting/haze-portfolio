import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  link: string;
  icon?: LucideIcon;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export interface Skill {
  name: string;
}