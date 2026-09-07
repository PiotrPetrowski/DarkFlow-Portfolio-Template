import { Project, SkillGroup, ExperienceItem, SocialLink, MetricStat } from '../types';

export const PERSONAL_INFO = {
  name: 'Your Name',
  title: 'Senior Full-Stack & Frontend Engineer',
  status: 'Available for new projects',
  email: 'your@email.com',
  emailDisplay: 'your@email.com',
  phone: '+1 (555) 000-0000',
  location: 'Your City, Country / Remote',
  bioShort: 'Specialized in building high-performance web applications, responsive user interfaces, design systems, and resilient frontend architectures.',
  bioFull: 'Senior Software Engineer with deep expertise in TypeScript, React, modern web standards, and cloud services. Focused on crafting accessible, high-performance web experiences with smooth animations, robust state management, and clean code architecture.',
  resumeUrl: '#contact',
  yearsExperience: '5+ Years',
  completedProjects: '30+ Projects',
  clientSatisfaction: '100%'
};

export const METRIC_STATS: MetricStat[] = [
  {
    id: 'exp',
    value: '5+ Yrs',
    label: 'Engineering Experience',
    caption: 'Architecting scalable, responsive web systems'
  },
  {
    id: 'projects',
    value: '30+',
    label: 'Production Projects',
    caption: 'From enterprise dashboards to consumer applications'
  },
  {
    id: 'typesafe',
    value: '100%',
    label: 'Type Safety & Quality',
    caption: 'Strict TypeScript and component standards'
  },
  {
    id: 'satisfaction',
    value: '99%',
    label: 'Client Satisfaction',
    caption: 'Consistent focus on craftsmanship and reliability'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'Cloud Analytics Platform',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    summary: 'Real-time telemetry and analytics platform with interactive dashboards, event streaming, and custom reporting.',
    description: 'Enterprise analytics dashboard featuring real-time telemetry, customizable KPI widgets, instant alerts, and hardware-accelerated interactive data visualizers.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    metrics: [
      { label: 'Latency', value: '< 100ms' },
      { label: 'Streaming Events', value: '15,000/s' }
    ],
    features: [
      'Hardware-accelerated visualizers on Canvas and SVG',
      'Real-time reactive state synchronization via WebSockets',
      'Exportable reporting workflows in PDF and CSV'
    ],
    demoUrl: 'https://example.com/project-1',
    githubUrl: 'https://github.com/your-username/cloud-analytics-platform',
    featured: true,
    year: '2026'
  },
  {
    id: 'proj-2',
    title: 'AI Workflow Workspace',
    category: 'frontend',
    categoryLabel: 'Frontend',
    summary: 'Visual node-based canvas for orchestrating prompt pipelines, agent steps, and automated API workflows.',
    description: 'Interactive canvas editor for chaining prompts, tool calling, and API actions. Features infinite zoom, gesture controls, and browser-cached drafts.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
    tags: ['TypeScript', 'React', 'Motion', 'Zustand', 'Canvas API'],
    metrics: [
      { label: 'Rendering', value: 'GPU Accelerated' },
      { label: 'Bundle Footprint', value: 'Optimized' }
    ],
    features: [
      'Infinite zoom canvas with snapping and multi-selection',
      'Client-side state persistence and draft recovery',
      'Dark obsidian UI with glowing vector bezier connectors'
    ],
    demoUrl: 'https://example.com/project-2',
    githubUrl: 'https://github.com/your-username/ai-workflow-workspace',
    featured: true,
    year: '2026'
  },
  {
    id: 'proj-3',
    title: 'NeoPay Digital Wallet',
    category: 'mobile',
    categoryLabel: 'Mobile Interface',
    summary: 'Responsive progressive web app for digital asset management, instantaneous transfers, and currency charts.',
    description: 'Cross-platform PWA wallet featuring Web Biometrics authentication, currency exchange charts, transfers, and offline balance ledger.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop',
    tags: ['React PWA', 'Tailwind CSS', 'Web Crypto API', 'Recharts'],
    metrics: [
      { label: 'Architecture', value: 'Progressive Web App' },
      { label: 'Offline Support', value: 'Service Worker' }
    ],
    features: [
      'Client-side caching with Service Worker integration',
      'Real-time currency converter with interactive charts',
      'Mobile-first responsive interface with tactile touch feedback'
    ],
    demoUrl: 'https://example.com/project-3',
    githubUrl: 'https://github.com/your-username/neopay-digital-wallet',
    featured: true,
    year: '2025'
  },
  {
    id: 'proj-4',
    title: 'Universal Design System',
    category: 'uiux',
    categoryLabel: 'UI/UX & Design System',
    summary: 'Accessible component library with dark/light tokens, micro-animations, and strict typography rules.',
    description: 'A modular library of 40+ accessible UI components built on semantic color tokens, mathematical spacing ratios, and Storybook documentation.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop',
    tags: ['Storybook', 'Design Tokens', 'Radix UI', 'Tailwind', 'Accessibility'],
    metrics: [
      { label: 'Accessibility', value: 'WCAG AA' },
      { label: 'Components', value: '40+ Modules' }
    ],
    features: [
      'Strict semantic design token system for colors and spacing',
      'Full keyboard navigation and screen-reader accessibility',
      'Interactive documentation and component sandbox'
    ],
    demoUrl: 'https://example.com/project-4',
    githubUrl: 'https://github.com/your-username/universal-design-system',
    featured: false,
    year: '2025'
  },
  {
    id: 'proj-5',
    title: 'HyperSpeed E-Commerce Hub',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    summary: 'Modern headless commerce storefront with instant client-side search and responsive image pipeline.',
    description: 'High-conversion online storefront featuring edge rendering, WebP responsive image pipeline, instant client-side filtering, and optimistic cart updates.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Edge Functions', 'Cart API'],
    metrics: [
      { label: 'Search Speed', value: 'Instant' },
      { label: 'Media Format', value: 'Modern WebP' }
    ],
    features: [
      'Instant client search with fuzzy keyword matching',
      'Optimized image loading with skeleton placeholders',
      'Client-side catalog caching for zero-delay navigation'
    ],
    demoUrl: 'https://example.com/project-5',
    githubUrl: 'https://github.com/your-username/hyperspeed-ecommerce',
    featured: false,
    year: '2025'
  },
  {
    id: 'proj-6',
    title: 'Pulse IoT Smart Panel',
    category: 'frontend',
    categoryLabel: 'Frontend',
    summary: 'Interactive smart building dashboard with floor plans, sensor feeds, and energy metrics.',
    description: 'Real-time telemetry dashboard for building automation, climate control sensors, solar energy yield, and anomaly alerts.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop',
    tags: ['React', 'TypeScript', 'WebGL', 'Tailwind CSS', 'IoT Feeds'],
    metrics: [
      { label: 'Sensor Channels', value: '48 Nodes' },
      { label: 'Data Refresh', value: 'Sub-second' }
    ],
    features: [
      'Interactive 3D building floor plan visualization',
      'Energy consumption forecasting and cost insights',
      'Responsive dark HUD with tactile feedback'
    ],
    demoUrl: 'https://example.com/project-6',
    githubUrl: 'https://github.com/your-username/pulse-iot-panel',
    featured: false,
    year: '2024'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend Architecture',
    description: 'Building responsive, accessible, and maintainable web applications',
    iconName: 'Layout',
    skills: [
      { name: 'React 19 / Modern React', level: 95, experienceYears: '5 yrs', highlight: true },
      { name: 'TypeScript / Modern JavaScript', level: 92, experienceYears: '4 yrs', highlight: true },
      { name: 'Tailwind CSS / Design Tokens', level: 98, experienceYears: '4 yrs', highlight: true },
      { name: 'Motion / Parallax Animations', level: 90, experienceYears: '3 yrs', highlight: true },
      { name: 'State Management (Zustand, Context)', level: 88, experienceYears: '4 yrs' },
      { name: 'Semantic HTML5 & Accessibility (WCAG)', level: 94, experienceYears: '5 yrs' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    description: 'Server runtime solutions, API design, and database integration',
    iconName: 'Server',
    skills: [
      { name: 'Node.js / Express Services', level: 88, experienceYears: '4 yrs', highlight: true },
      { name: 'RESTful & GraphQL APIs', level: 90, experienceYears: '4 yrs' },
      { name: 'PostgreSQL & Database Modeling', level: 84, experienceYears: '3 yrs' },
      { name: 'Redis & Caching Layers', level: 82, experienceYears: '3 yrs', highlight: true },
      { name: 'Docker & Containerization', level: 80, experienceYears: '2 yrs' },
      { name: 'Cloud Functions & Serverless', level: 85, experienceYears: '2 yrs' }
    ]
  },
  {
    id: 'performance',
    title: 'Performance & Optimization',
    description: 'Core Web Vitals awareness, asset optimization, and caching strategies',
    iconName: 'Zap',
    skills: [
      { name: 'Performance-conscious Architecture', level: 96, experienceYears: '4 yrs', highlight: true },
      { name: 'Service Workers & Client Caching', level: 92, experienceYears: '3 yrs', highlight: true },
      { name: 'Image Optimization (WebP, Lazy Loading)', level: 94, experienceYears: '4 yrs' },
      { name: 'Code Splitting & Bundle Optimization', level: 90, experienceYears: '4 yrs' },
      { name: 'Semantic SEO & JSON-LD Data', level: 93, experienceYears: '4 yrs', highlight: true },
      { name: 'Responsive Layout Engineering', level: 95, experienceYears: '5 yrs' }
    ]
  },
  {
    id: 'workflow',
    title: 'Tooling & Workflow',
    description: 'Modern build pipelines, testing tools, and developer collaboration',
    iconName: 'Cpu',
    skills: [
      { name: 'Git & GitHub Workflows', level: 92, experienceYears: '5 yrs' },
      { name: 'Vite & Build Configurations', level: 94, experienceYears: '4 yrs', highlight: true },
      { name: 'Automated Testing (Vitest, Playwright)', level: 85, experienceYears: '3 yrs' },
      { name: 'Figma-to-Code Precision', level: 95, experienceYears: '5 yrs' },
      { name: 'Progressive Web App Architecture', level: 90, experienceYears: '3 yrs' },
      { name: 'Code Quality (ESLint, Prettier)', level: 96, experienceYears: '5 yrs' }
    ]
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: '2023 — Present',
    role: 'Lead Frontend Developer',
    company: 'Your Company',
    location: 'Remote',
    type: 'Full-time',
    achievements: [
      'Architected core frontend applications with focus on modular design systems and responsive UX.',
      'Configured Service Worker caching strategies to improve repeat visit performance and offline resilience.',
      'Mentored engineers and established standardized TypeScript component patterns across the organization.'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Service Worker']
  },
  {
    id: 'exp-2',
    period: '2021 — 2023',
    role: 'Senior Frontend Engineer',
    company: 'Previous Company',
    location: 'Your City, Country',
    type: 'Hybrid',
    achievements: [
      'Engineered a real-time WebSocket dashboard displaying market feeds and analytics metrics.',
      'Reduced client bundle footprint through strategic code-splitting and dynamic module imports.',
      'Implemented Schema.org JSON-LD structured metadata to enhance search engine visibility.'
    ],
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Recharts', 'Webpack']
  },
  {
    id: 'exp-3',
    period: '2019 — 2021',
    role: 'Frontend & UI Developer',
    company: 'Agency / Studio Name',
    location: 'Your City, Country',
    type: 'Full-time',
    achievements: [
      'Delivered 20+ responsive web projects featuring smooth CSS and Motion transitions.',
      'Ensured cross-browser consistency across mobile screens and large desktop viewports.'
    ],
    technologies: ['JavaScript', 'HTML5/CSS3', 'Tailwind CSS', 'Motion', 'SVG']
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    handle: '@your-username',
    url: 'https://github.com/your-username',
    icon: 'Github',
    color: '#a855f7'
  },
  {
    id: 'telegram',
    name: 'Telegram',
    handle: '@your-username',
    url: 'https://t.me/your-username',
    icon: 'Send',
    color: '#6366f1'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'in/your-username',
    url: 'https://linkedin.com/in/your-username',
    icon: 'Linkedin',
    color: '#38bdf8'
  },
  {
    id: 'twitter',
    name: 'X / Twitter',
    handle: '@your-username',
    url: 'https://x.com/your-username',
    icon: 'Twitter',
    color: '#ec4899'
  }
];

export const NAVIGATION_ITEMS = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];
