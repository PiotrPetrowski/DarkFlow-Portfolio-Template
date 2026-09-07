export interface Project {
  id: string;
  title: string;
  category: 'frontend' | 'fullstack' | 'mobile' | 'uiux';
  categoryLabel: string;
  summary: string;
  description: string;
  image: string;
  thumbnail: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  features: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  year: string;
}

export interface Skill {
  name: string;
  level: number; // 0 - 100
  experienceYears: string;
  highlight?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  achievements: string[];
  technologies: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  serviceType: string;
  budget: string;
  message: string;
}

export interface SocialLink {
  id: string;
  name: string;
  handle: string;
  url: string;
  icon: string;
  color: string;
}

export interface MetricStat {
  id: string;
  value: string;
  label: string;
  caption: string;
}

export type Language = 'en' | 'es' | 'de' | 'ru';

export interface LanguageOption {
  code: Language;
  label: string;
  nativeName: string;
  flag: string;
}
