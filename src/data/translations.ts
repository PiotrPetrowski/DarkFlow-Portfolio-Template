import { Language, LanguageOption, Project, SkillGroup, ExperienceItem, MetricStat, SocialLink } from '../types';

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'de', label: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru', label: 'Russian', nativeName: 'Русский', flag: '🇷🇺' }
];

export interface TranslationData {
  personalInfo: {
    name: string;
    title: string;
    status: string;
    email: string;
    emailDisplay: string;
    phone: string;
    location: string;
    bioShort: string;
    bioFull: string;
    resumeUrl: string;
    yearsExperience: string;
    completedProjects: string;
    clientSatisfaction: string;
  };
  navigation: { id: string; label: string; href: string }[];
  navCta: string;
  hero: {
    badge: string;
    headingLine1: string;
    headingLine2: string;
    features: { motion: string; cache: string; seo: string };
    ctaProjects: string;
    ctaContact: string;
    ctaResume: string;
    terminalTitle: string;
    terminalBadge: string;
    floatingBadgeTitle: string;
    floatingBadgeDesc: string;
  };
  metrics: MetricStat[];
  about: {
    badge: string;
    heading: string;
    headingAccent: string;
    subheading: string;
    features: { icon: string; title: string; desc: string }[];
    bannerTitle: string;
    bannerDesc: string;
    bannerCta: string;
  };
  projects: {
    badge: string;
    heading: string;
    headingAccent: string;
    subheading: string;
    categories: { id: string; label: string }[];
    cardDetails: string;
    cardOverview: string;
    modalSource: string;
    modalLive: string;
    modalFeaturesTitle: string;
    modalStackTitle: string;
    modalDisclaimer: string;
    items: Project[];
  };
  skills: {
    badge: string;
    heading: string;
    headingAccent: string;
    subheading: string;
    metricsTitle: string;
    footerNote: string;
    groups: SkillGroup[];
  };
  experience: {
    badge: string;
    heading: string;
    headingAccent: string;
    subheading: string;
    items: ExperienceItem[];
  };
  contact: {
    badge: string;
    heading: string;
    headingAccent: string;
    subheading: string;
    directTitle: string;
    directStatus: string;
    emailLabel: string;
    telegramLabel: string;
    phoneLabel: string;
    locationLabel: string;
    socialsTitle: string;
    draftCached: string;
    successTitle: string;
    successDesc: string;
    successButton: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      serviceLabel: string;
      serviceOptions: string[];
      budgetLabel: string;
      budgetOptions: string[];
      messageLabel: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      responseTime: string;
    };
  };
  footer: {
    description: string;
    contactLabel: string;
    navTitle: string;
    archTitle: string;
    cacheActive: string;
    motionActive: string;
    seoActive: string;
    themeActive: string;
    copyright: string;
    backToTop: string;
  };
  performance: {
    title: string;
    swLabel: string;
    swActive: string;
    swReady: string;
    loadTimeLabel: string;
    cachesLabel: string;
    featuresLabel: string;
    featuresVal: string;
    purgeBtn: string;
    score: string;
    toggleLabel: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationData> = {
  en: {
    personalInfo: {
      name: 'Your Name',
      title: 'Senior Full-Stack & Frontend Engineer',
      status: 'Available for commercial projects',
      email: 'your@email.com',
      emailDisplay: 'your@email.com',
      phone: '+1 (555) 019-2834',
      location: 'San Francisco, CA / Remote',
      bioShort: 'Modern developer portfolio template. Engineered for rapid load speeds, responsive layouts, resource caching, and fluid parallax motion.',
      bioFull: 'Senior Software Engineer with deep expertise in TypeScript, React, modern web standards, and cloud services. Focused on crafting accessible, high-performance web experiences with smooth animations, robust state management, and clean code architecture.',
      resumeUrl: '#contact',
      yearsExperience: '5+ Years',
      completedProjects: '35+ Projects',
      clientSatisfaction: '100%'
    },
    navigation: [
      { id: 'hero', label: 'Home', href: '#hero' },
      { id: 'about', label: 'About', href: '#about' },
      { id: 'skills', label: 'Skills', href: '#skills' },
      { id: 'projects', label: 'Projects', href: '#projects' },
      { id: 'experience', label: 'Experience', href: '#experience' },
      { id: 'contact', label: 'Contact', href: '#contact' }
    ],
    navCta: 'Get in Touch',
    hero: {
      badge: 'Available for new projects',
      headingLine1: 'Portfolio Template',
      headingLine2: 'Your Name',
      features: {
        motion: 'Parallax & Motion',
        cache: 'Service Worker Cache',
        seo: 'SEO & JSON-LD'
      },
      ctaProjects: 'Explore Projects',
      ctaContact: 'Contact Author',
      ctaResume: 'Resume',
      terminalTitle: 'developer-profile.ts',
      terminalBadge: 'PORTFOLIO',
      floatingBadgeTitle: 'Ultra Fast Speed',
      floatingBadgeDesc: 'Service Worker Cache'
    },
    metrics: [
      { id: 'exp', value: '5+ Yrs', label: 'Experience', caption: 'Architecting scalable web applications' },
      { id: 'projects', value: '35+', label: 'Completed Projects', caption: 'From early-stage startups to enterprise systems' },
      { id: 'speed', value: '99/100', label: 'PageSpeed Score', caption: 'Top-tier Core Web Vitals metrics' },
      { id: 'uptime', value: '99.9%', label: 'System Reliability', caption: 'Fault-tolerant edge architecture' }
    ],
    about: {
      badge: 'Architecture & Principles',
      heading: 'Modern Tech Stack & Uncompromising Performance',
      headingAccent: '(Obsidian Violet)',
      subheading: 'Engineering modern web applications with focus on clean component design, accessible interfaces, and optimized performance.',
      features: [
        { icon: 'Gauge', title: 'Rapid Page Speed', desc: 'Optimized Core Web Vitals, preconnected origins, asset compression, and Service Worker caching.' },
        { icon: 'Palette', title: 'Obsidian Violet UI', desc: 'Deep dark palette with WCAG AA compliance, ambient neon glow, and calibrated typography.' },
        { icon: 'Layers', title: 'Parallax & Motion', desc: 'Smooth hardware-accelerated transforms powered by Motion for fluid, 60 FPS scrolling depth.' },
        { icon: 'Search', title: 'Search Engine SEO', desc: 'Complete semantic HTML5 hierarchy, Schema.org JSON-LD structured data, and Open Graph cards.' }
      ],
      bannerTitle: 'Production Ready',
      bannerDesc: 'All components are modular, TypeScript type-safe, accessible, and theme-synchronized.',
      bannerCta: 'Explore Projects →'
    },
    projects: {
      badge: 'Project Portfolio',
      heading: 'Featured Work',
      headingAccent: '(Obsidian Violet)',
      subheading: 'Production-grade web services, progressive web applications, and component architectures with focus on speed, clean code, and resilience.',
      categories: [
        { id: 'all', label: 'All Projects' },
        { id: 'fullstack', label: 'Full-Stack' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'mobile', label: 'Mobile' },
        { id: 'uiux', label: 'UI/UX' }
      ],
      cardDetails: 'Details',
      cardOverview: 'Overview',
      modalSource: 'Source Code',
      modalLive: 'Live Preview',
      modalFeaturesTitle: 'Key Architecture Features:',
      modalStackTitle: 'Tech Stack:',
      modalDisclaimer: '* Interactive project showcase demonstrating component structure and responsive layout.',
      items: [
        {
          id: 'proj-1',
          title: 'Cloud Analytics Platform',
          category: 'fullstack',
          categoryLabel: 'Full-Stack',
          summary: 'Real-time high-throughput cloud analytics platform with interactive dashboards and live event streaming.',
          description: 'Enterprise-grade analytics engine providing real-time telemetry, customizable KPI widgets, instant alerts, and WebGL-accelerated interactive data visualizers.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
          tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Production Ready'],
          metrics: [
            { label: 'Initial Page Load', value: '0.4s' },
            { label: 'Events Handled/sec', value: '15,000' }
          ],
          features: [
            'Hardware-accelerated data visualizers on Canvas/WebGL',
            'Sub-millisecond reactive state sync via WebSockets',
            'One-click automated report generation in PDF and Excel'
          ],
          demoUrl: 'https://example.com/project-1',
          githubUrl: 'https://github.com/your-username/cloud-analytics',
          featured: true,
          year: '2026'
        },
        {
          id: 'proj-2',
          title: 'AI Workflow Workspace',
          category: 'frontend',
          categoryLabel: 'Frontend',
          summary: 'Visual node-based canvas for orchestrating LLM pipelines and multi-agent workflows.',
          description: 'Visual flow editor for chaining prompts, tool calling, and API actions. Features infinite zoom canvas, gesture controls, and browser-cached drafts.',
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
          tags: ['Next.js', 'TypeScript', 'Motion', 'Zustand', 'Canvas API', 'Production Ready'],
          metrics: [
            { label: 'Frame Rate at Peak Load', value: '60 FPS' },
            { label: 'Bundle Size (gzipped)', value: '82 KB' }
          ],
          features: [
            'Infinite zoom canvas with seamless pan and snap',
            'Offline state synchronization via IndexedDB',
            'Electric dark theme with glowing bezier connectors'
          ],
          demoUrl: 'https://example.com/project-2',
          githubUrl: 'https://github.com/your-username/ai-workflow',
          featured: true,
          year: '2026'
        },
        {
          id: 'proj-3',
          title: 'NeoPay Digital Wallet',
          category: 'mobile',
          categoryLabel: 'Mobile Interface',
          summary: 'Cross-platform progressive web app for instant payments and currency exchanges.',
          description: 'Installable PWA wallet featuring Web Biometrics authentication, real-time FX rate charts, zero-latency transfers, and offline balance ledger.',
          image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop',
          tags: ['React PWA', 'Tailwind CSS', 'Web Crypto API', 'Recharts', 'Production Ready'],
          metrics: [
            { label: 'Offline Readiness', value: '100% PWA' },
            { label: 'Sign-in Conversion', value: '+34%' }
          ],
          features: [
            'Full offline capabilities with Service Worker cache',
            'Real-time currency converter with interactive charts',
            'Ergonomic mobile-first dark UI with haptic touch feedback'
          ],
          demoUrl: 'https://example.com/project-3',
          githubUrl: 'https://github.com/your-username/neopay-wallet',
          featured: true,
          year: '2025'
        },
        {
          id: 'proj-4',
          title: 'Universal Design System',
          category: 'uiux',
          categoryLabel: 'UI/UX & Design System',
          summary: 'Accessible component library with dark/light tokens, micro-animations, and strict typography.',
          description: 'A modular library of 40+ WCAG AA-compliant accessible components built on semantic color tokens, mathematical spacing ratios, and interactive Storybook documentation.',
          image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop',
          tags: ['Storybook', 'Figma Tokens', 'Radix UI', 'Tailwind', 'Accessibility', 'Production Ready'],
          metrics: [
            { label: 'Unit Test Coverage', value: '98%' },
            { label: 'WCAG Standard', value: 'Level AA' }
          ],
          features: [
            'Strict semantic design tokenization',
            'Full keyboard navigation and screen-reader support',
            'Built-in contrast ratio and layout shift auditor'
          ],
          demoUrl: 'https://example.com/project-4',
          githubUrl: 'https://github.com/your-username/design-system',
          featured: false,
          year: '2025'
        },
        {
          id: 'proj-5',
          title: 'HyperSpeed E-Commerce Hub',
          category: 'fullstack',
          categoryLabel: 'Full-Stack',
          summary: 'Ultra-fast headless commerce store with instant client search and Core Web Vitals optimization.',
          description: 'High-conversion online storefront with edge rendering, WebP responsive image pipeline, instant client-side search, and optimistic cart updates.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
          tags: ['React', 'Edge Functions', 'Redis Cache', 'Tailwind CSS', 'Stripe Integration', 'Production Ready'],
          metrics: [
            { label: 'Time to Interactive', value: '0.6s' },
            { label: 'Cumulative Layout Shift', value: '0.00' }
          ],
          features: [
            'Instant client search with fuzzy keyword matching',
            'WebP picture optimization with skeleton placeholders',
            'Client-side catalog caching for zero-delay pagination'
          ],
          demoUrl: 'https://example.com/project-5',
          githubUrl: 'https://github.com/your-username/hyperspeed-store',
          featured: false,
          year: '2025'
        },
        {
          id: 'proj-6',
          title: 'Pulse IoT Smart Panel',
          category: 'frontend',
          categoryLabel: 'Frontend',
          summary: 'Interactive smart building dashboard with 3D room floor plans and energy monitoring.',
          description: 'Real-time telemetry dashboard for building automation, climate control sensors, solar energy yield, and anomaly alerts.',
          image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop',
          tags: ['React', 'WebGL', 'Tailwind CSS', 'MQTT', 'Production Ready'],
          metrics: [
            { label: 'Telemetry Latency', value: '18ms' },
            { label: 'Connected Devices', value: '48' }
          ],
          features: [
            'Interactive 3D building floor plan visualization',
            'Energy consumption forecasting and cost insights',
            'Responsive dark HUD with tactile audio-visual clicks'
          ],
          demoUrl: 'https://example.com/project-6',
          githubUrl: 'https://github.com/your-username/pulse-iot-panel',
          featured: false,
          year: '2024'
        }
      ]
    },
    skills: {
      badge: 'Tech Stack & Competencies',
      heading: 'Core Technologies',
      headingAccent: '(Obsidian Violet)',
      subheading: 'A battle-tested suite of modern web engineering frameworks and cloud tools engineered for high-concurrency performance and maintainability.',
      metricsTitle: 'Obsidian Violet Skill Metrics',
      footerNote: 'All skills validated across real-world commercial case studies',
      groups: [
        {
          id: 'frontend',
          title: 'Frontend Architecture',
          description: 'Engineering responsive, accessible, and fast web user interfaces',
          iconName: 'Layout',
          skills: [
            { name: 'React 19 / Next.js', level: 95, experienceYears: '5 yrs', highlight: true },
            { name: 'TypeScript / ESNext', level: 92, experienceYears: '4 yrs', highlight: true },
            { name: 'Tailwind CSS / Design Tokens', level: 98, experienceYears: '4 yrs', highlight: true },
            { name: 'Motion / Parallax', level: 90, experienceYears: '3 yrs', highlight: true },
            { name: 'State Management (Zustand, Redux)', level: 88, experienceYears: '4 yrs' },
            { name: 'Semantic HTML5 & WCAG AA', level: 94, experienceYears: '5 yrs' }
          ]
        },
        {
          id: 'backend',
          title: 'Backend & Cloud Services',
          description: 'Server runtime solutions, API gateways, and relational database modeling',
          iconName: 'Server',
          skills: [
            { name: 'Node.js / Express', level: 88, experienceYears: '4 yrs', highlight: true },
            { name: 'RESTful & GraphQL APIs', level: 90, experienceYears: '4 yrs' },
            { name: 'PostgreSQL / Prisma / SQL', level: 84, experienceYears: '3 yrs' },
            { name: 'Redis / In-Memory Caching', level: 82, experienceYears: '3 yrs', highlight: true },
            { name: 'Docker & Containerization', level: 80, experienceYears: '2 yrs' },
            { name: 'Edge Functions & Serverless', level: 85, experienceYears: '2 yrs' }
          ]
        },
        {
          id: 'performance',
          title: 'Performance & Caching',
          description: 'Core Web Vitals optimization, asset preloading, and caching strategies',
          iconName: 'Zap',
          skills: [
            { name: 'Core Web Vitals (LCP, FID, CLS)', level: 96, experienceYears: '4 yrs', highlight: true },
            { name: 'Service Workers & Offline Cache', level: 92, experienceYears: '3 yrs', highlight: true },
            { name: 'Image Optimization (WebP, AVIF)', level: 94, experienceYears: '4 yrs' },
            { name: 'Code Splitting & Tree Shaking', level: 90, experienceYears: '4 yrs' },
            { name: 'SEO & Structured Data (JSON-LD)', level: 93, experienceYears: '4 yrs', highlight: true },
            { name: 'Web Vitals Telemetry', level: 87, experienceYears: '3 yrs' }
          ]
        },
        {
          id: 'workflow',
          title: 'Tools & DevOps Workflow',
          description: 'Modern build pipelines, test runners, and team collaboration tooling',
          iconName: 'Cpu',
          skills: [
            { name: 'Git / GitHub CI/CD Actions', level: 92, experienceYears: '5 yrs' },
            { name: 'Vite / Rollup / Turbopack', level: 94, experienceYears: '4 yrs', highlight: true },
            { name: 'Jest / Vitest / Playwright', level: 85, experienceYears: '3 yrs' },
            { name: 'Figma-to-Code Precision', level: 95, experienceYears: '5 yrs' },
            { name: 'Progressive Web Apps (PWA)', level: 90, experienceYears: '3 yrs' },
            { name: 'ESLint / Prettier / Stylelint', level: 96, experienceYears: '5 yrs' }
          ]
        }
      ]
    },
    experience: {
      badge: 'Career Milestones & Leadership',
      heading: 'Professional Experience',
      headingAccent: '(Obsidian Violet)',
      subheading: 'Track record of technical leadership, architectural decision-making, and high-impact software shipping.',
      items: [
        {
          id: 'exp-1',
          period: '2023 — Present',
          role: 'Lead Frontend Developer',
          company: 'Your Company',
          location: 'Remote',
          type: 'Full-time',
          achievements: [
            'Accelerated primary web portal load times by 47%, reducing LCP from 2.8s to 0.9s.',
            'Implemented custom Service Worker and resource caching, enabling seamless offline access.',
            'Led a team of 6 frontend engineers and architected a unified accessible design system.'
          ],
          technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite', 'Service Worker', 'Production Ready']
        },
        {
          id: 'exp-2',
          period: '2021 — 2023',
          role: 'Senior Frontend Engineer',
          company: 'Previous Company',
          location: 'San Francisco, CA',
          type: 'Hybrid',
          achievements: [
            'Engineered a real-time WebSocket dashboard displaying 200+ financial market feeds concurrently.',
            'Reduced client bundle footprint by 35% using dynamic imports and route-level code splitting.',
            'Implemented Schema.org JSON-LD structured data, driving a 65% increase in organic search traffic.'
          ],
          technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Recharts', 'Jest', 'Webpack', 'Production Ready']
        },
        {
          id: 'exp-3',
          period: '2019 — 2021',
          role: 'Frontend & UI Developer',
          company: 'Agency / Studio Name',
          location: 'Austin, TX',
          type: 'Full-time',
          achievements: [
            'Delivered 20+ interactive web experiences featuring smooth parallax effects and 60 FPS animations.',
            'Ensured full responsive cross-browser parity ranging from 320px mobile viewports to ultra-wide 4K displays.'
          ],
          technologies: ['JavaScript', 'HTML5/CSS3', 'Sass', 'GSAP', 'Webpack', 'SVG', 'Production Ready']
        }
      ]
    },
    contact: {
      badge: 'Contact Form',
      heading: "Let's Build Something Exceptional",
      headingAccent: '(Obsidian Violet)',
      subheading: 'Fill out the form below or connect via direct messaging. Form drafts are automatically cached in your browser.',
      directTitle: 'Direct Inquiries:',
      directStatus: 'Online',
      emailLabel: 'Email Address',
      telegramLabel: 'Telegram',
      phoneLabel: 'Phone Number',
      locationLabel: 'Location',
      socialsTitle: 'Social Networks & Code:',
      draftCached: 'Draft Cached',
      successTitle: 'Message Dispatched!',
      successDesc: 'Thank you for reaching out! The contact form is validated. Connect your preferred backend (Formspree, Web3Forms, EmailJS, or API) to receive live inquiries.',
      successButton: 'Send Another Message',
      form: {
        nameLabel: 'Your Name *',
        namePlaceholder: 'Alex Johnson',
        emailLabel: 'Your Email *',
        emailPlaceholder: 'your@email.com',
        serviceLabel: 'Service Type',
        serviceOptions: [
          'Frontend Architecture',
          'Full-Stack Web App',
          'Performance & Core Web Vitals',
          'Design System & PWA'
        ],
        budgetLabel: 'Estimated Budget',
        budgetOptions: [
          '$3,000 - $5,000',
          '$5,000 - $10,000',
          '$10,000 - $25,000',
          '$25,000+'
        ],
        messageLabel: 'Project Description or Inquiry *',
        messagePlaceholder: 'Outline your project scope, technical expectations, and timelines...',
        submitBtn: 'Send Inquiry',
        submittingBtn: 'Transmitting...',
        responseTime: 'Response within 2 hours'
      }
    },
    footer: {
      description: 'High-performance dark theme developer portfolio template. Featuring responsive layouts, smooth parallax scrolling, image compression, Service Worker caching, and full SEO microdata.',
      contactLabel: 'Direct Contact:',
      navTitle: 'Navigation',
      archTitle: 'Architecture',
      cacheActive: 'Service Worker Cache Active',
      motionActive: 'Motion Parallax 60 FPS',
      seoActive: 'Schema.org JSON-LD SEO',
      themeActive: 'Obsidian Violet Dark UI',
      copyright: 'All rights reserved. Built with React & Tailwind CSS.',
      backToTop: 'Top'
    },
    performance: {
      title: 'Performance & Cache',
      swLabel: 'Service Worker:',
      swActive: 'Active',
      swReady: 'Ready',
      loadTimeLabel: 'Page Load Time:',
      cachesLabel: 'Cache Buckets:',
      featuresLabel: 'Parallax & SEO:',
      featuresVal: 'Enabled',
      purgeBtn: 'Purge Cache',
      score: 'Score: 99/100',
      toggleLabel: 'Speed: 99'
    }
  },

  es: {
    personalInfo: {
      name: 'Your Name',
      title: 'Ingeniero Full-Stack y Frontend Senior',
      status: 'Disponible para proyectos comerciales',
      email: 'your@email.com',
      emailDisplay: 'your@email.com',
      phone: '+1 (555) 019-2834',
      location: 'Madrid / Remoto',
      bioShort: 'Plantilla de portafolio web moderna. Optimizada para máxima velocidad, diseño adaptable, caché con Service Worker y animaciones de paralaje fluidas.',
      bioFull: 'Ingeniero de Software Senior con amplia experiencia en TypeScript, React, estándares web modernos y servicios en la nube. Enfocado en crear experiencias web fluidas y accesibles.',
      resumeUrl: '#contact',
      yearsExperience: '5+ Años',
      completedProjects: '35+ Proyectos',
      clientSatisfaction: '100%'
    },
    navigation: [
      { id: 'hero', label: 'Inicio', href: '#hero' },
      { id: 'about', label: 'Acerca de', href: '#about' },
      { id: 'skills', label: 'Habilidades', href: '#skills' },
      { id: 'projects', label: 'Proyectos', href: '#projects' },
      { id: 'experience', label: 'Experiencia', href: '#experience' },
      { id: 'contact', label: 'Contacto', href: '#contact' }
    ],
    navCta: 'Contactar',
    hero: {
      badge: 'Disponible para nuevos proyectos',
      headingLine1: 'Plantilla de Portafolio',
      headingLine2: 'Your Name',
      features: {
        motion: 'Paralaje y Animación',
        cache: 'Caché Service Worker',
        seo: 'SEO y JSON-LD'
      },
      ctaProjects: 'Ver Proyectos',
      ctaContact: 'Contactar Autor',
      ctaResume: 'Currículum',
      terminalTitle: 'perfil-desarrollador.ts',
      terminalBadge: 'PORTFOLIO',
      floatingBadgeTitle: 'Velocidad Extrema',
      floatingBadgeDesc: 'Caché Service Worker'
    },
    metrics: [
      { id: 'exp', value: '5+ Años', label: 'Experiencia', caption: 'Arquitectura de aplicaciones web escalables' },
      { id: 'projects', value: '35+', label: 'Proyectos Terminados', caption: 'Desde startups hasta sistemas corporativos' },
      { id: 'speed', value: '99/100', label: 'Puntuación PageSpeed', caption: 'Métricas Core Web Vitals de primer nivel' },
      { id: 'uptime', value: '99.9%', label: 'Confiabilidad del Sistema', caption: 'Infraestructura tolerante a fallos' }
    ],
    about: {
      badge: 'Arquitectura y Principios',
      heading: 'Stack Tecnológico Moderno y Rendimiento Total',
      headingAccent: '(Obsidian Violet)',
      subheading: 'Plantilla creada para garantizar velocidad punta, accesibilidad WCAG AA, animaciones a 60 FPS y una experiencia de usuario impecable.',
      features: [
        { icon: 'Gauge', title: 'Carga Ultra Rápida', desc: 'Core Web Vitals optimizados, compresión de activos y caché con Service Worker.' },
        { icon: 'Palette', title: 'Diseño Violeta Obsidiana', desc: 'Paleta oscura elegante, alto contraste y tipografía calibrada.' },
        { icon: 'Layers', title: 'Efectos de Paralaje', desc: 'Transformaciones suaves aceleradas por hardware a 60 FPS con Motion.' },
        { icon: 'Search', title: 'Optimización SEO', desc: 'Estructura HTML5 semántica y microdatos Schema.org JSON-LD.' }
      ],
      bannerTitle: 'Listo para Producción',
      bannerDesc: 'Todos los componentes son modulares, tipados con TypeScript y listos para personalizar.',
      bannerCta: 'Explorar Proyectos →'
    },
    projects: {
      badge: 'Portafolio de Proyectos',
      heading: 'Trabajos Destacados',
      headingAccent: '(Obsidian Violet)',
      subheading: 'Servicios web de grado corporativo, aplicaciones web progresivas (PWA) y arquitecturas enfocadas en velocidad y código limpio.',
      categories: [
        { id: 'all', label: 'Todos' },
        { id: 'fullstack', label: 'Full-Stack' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'mobile', label: 'Móvil' },
        { id: 'uiux', label: 'UI/UX' }
      ],
      cardDetails: 'Detalles',
      cardOverview: 'Ver más',
      modalSource: 'Código Fuente',
      modalLive: 'Vista Previa',
      modalFeaturesTitle: 'Características Principales:',
      modalStackTitle: 'Tecnologías:',
      modalDisclaimer: '* Muestra interactiva de proyectos que demuestra la estructura de componentes y diseño responsivo.',
      items: [
        {
          id: 'proj-1',
          title: 'Plataforma de Analítica Cloud',
          category: 'fullstack',
          categoryLabel: 'Full-Stack',
          summary: 'Plataforma de analítica en la nube en tiempo real con dashboards interactivos y transmisión de eventos.',
          description: 'Motor de análisis de nivel empresarial con telemetría en tiempo real, widgets personalizables y visualizadores acelerados por WebGL.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
          tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Production Ready'],
          metrics: [
            { label: 'Carga Inicial', value: '0.4s' },
            { label: 'Eventos/seg', value: '15,000' }
          ],
          features: [
            'Visualizadores con aceleración por hardware en WebGL',
            'Sincronización reactiva mediante WebSockets',
            'Reportes automáticos en PDF y Excel con un clic'
          ],
          demoUrl: 'https://example.com/project-1',
          githubUrl: 'https://github.com/your-username/cloud-analytics',
          featured: true,
          year: '2026'
        },
        {
          id: 'proj-2',
          title: 'Espacio de Trabajo para Flujos IA',
          category: 'frontend',
          categoryLabel: 'Frontend',
          summary: 'Lienzo visual basado en nodos para orquestar pipelines de modelos LLM.',
          description: 'Editor visual de flujo para encadenar prompts, llamadas a herramientas y acciones API con zoom infinito.',
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
          tags: ['Next.js', 'TypeScript', 'Motion', 'Zustand', 'Canvas API', 'Production Ready'],
          metrics: [
            { label: 'Tasa de Cuadros', value: '60 FPS' },
            { label: 'Tamaño de Bundle', value: '82 KB' }
          ],
          features: [
            'Lienzo con zoom infinito y desplazamiento fluido',
            'Sincronización fuera de línea con IndexedDB',
            'Tema oscuro eléctrico con conectores bezier brillantes'
          ],
          demoUrl: 'https://example.com/project-2',
          githubUrl: 'https://github.com/your-username/ai-workflow',
          featured: true,
          year: '2026'
        },
        {
          id: 'proj-3',
          title: 'Billetera Digital NeoPay',
          category: 'mobile',
          categoryLabel: 'Móvil',
          summary: 'Aplicación web progresiva multiplataforma para pagos instantáneos.',
          description: 'PWA instalable con autenticación biométrica web, gráficos de divisas en tiempo real y saldo offline.',
          image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop',
          tags: ['React PWA', 'Tailwind CSS', 'Web Crypto API', 'Recharts', 'Production Ready'],
          metrics: [
            { label: 'Soporte Offline', value: '100% PWA' },
            { label: 'Conversión', value: '+34%' }
          ],
          features: [
            'Modo offline completo con Service Worker',
            'Conversión de divisas con gráficos en tiempo real',
            'Interfaz móvil con respuesta táctil ergonómica'
          ],
          demoUrl: 'https://example.com/project-3',
          githubUrl: 'https://github.com/your-username/neopay-wallet',
          featured: true,
          year: '2025'
        },
        {
          id: 'proj-4',
          title: 'Sistema de Diseño Universal',
          category: 'uiux',
          categoryLabel: 'UI/UX',
          summary: 'Librería de componentes accesibles con tokens oscuro/claro y microanimaciones.',
          description: 'Más de 40 componentes accesibles compatibles con WCAG AA, tokens de diseño y documentación en Storybook.',
          image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop',
          tags: ['Storybook', 'Figma Tokens', 'Radix UI', 'Tailwind', 'Production Ready'],
          metrics: [
            { label: 'Cobertura de Tests', value: '98%' },
            { label: 'Norma WCAG', value: 'Nivel AA' }
          ],
          features: [
            'Tokenización semántica estricta',
            'Navegación completa por teclado y lectores de pantalla',
            'Auditor de contraste y desplazamiento de maquetación'
          ],
          demoUrl: 'https://example.com/project-4',
          githubUrl: 'https://github.com/your-username/design-system',
          featured: false,
          year: '2025'
        },
        {
          id: 'proj-5',
          title: 'Hub E-Commerce HyperSpeed',
          category: 'fullstack',
          categoryLabel: 'Full-Stack',
          summary: 'Tienda headless ultra rápida con búsqueda instantánea en cliente.',
          description: 'Tienda en línea de alta conversión con renderizado en el borde, imágenes WebP optimizadas y carrito reactivo.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
          tags: ['React', 'Edge Functions', 'Redis Cache', 'Tailwind CSS', 'Production Ready'],
          metrics: [
            { label: 'Tiempo Interactivo', value: '0.6s' },
            { label: 'Layout Shift (CLS)', value: '0.00' }
          ],
          features: [
            'Búsqueda instantánea en cliente con coincidencia difusa',
            'Optimización WebP con esqueletos de precarga',
            'Caché de catálogo para paginación sin demora'
          ],
          demoUrl: 'https://example.com/project-5',
          githubUrl: 'https://github.com/your-username/hyperspeed-store',
          featured: false,
          year: '2025'
        },
        {
          id: 'proj-6',
          title: 'Panel IoT Smart Pulse',
          category: 'frontend',
          categoryLabel: 'Frontend',
          summary: 'Dashboard interactivo de edificios inteligentes con planos 3D.',
          description: 'Monitoreo de telemetría en tiempo real para sensores climáticos, rendimiento de energía solar y alertas.',
          image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop',
          tags: ['React', 'WebGL', 'Tailwind CSS', 'MQTT', 'Production Ready'],
          metrics: [
            { label: 'Latencia Telemetría', value: '18ms' },
            { label: 'Dispositivos', value: '48' }
          ],
          features: [
            'Visualización interactiva de planos 3D',
            'Pronóstico de consumo energético y costos',
            'Interfaz oscura táctil y reactiva'
          ],
          demoUrl: 'https://example.com/project-6',
          githubUrl: 'https://github.com/your-username/pulse-iot-panel',
          featured: false,
          year: '2024'
        }
      ]
    },
    skills: {
      badge: 'Tecnologías y Competencias',
      heading: 'Tecnologías Principales',
      headingAccent: '(Obsidian Violet)',
      subheading: 'Herramientas modernas y robustas seleccionadas para alta concurrencia, rendimiento y mantenibilidad.',
      metricsTitle: 'Métricas de Habilidades',
      footerNote: 'Habilidades validadas en casos de estudio comerciales reales',
      groups: [
        {
          id: 'frontend',
          title: 'Arquitectura Frontend',
          description: 'Interfaces web responsivas, accesibles y ultra rápidas',
          iconName: 'Layout',
          skills: [
            { name: 'React 19 / Next.js', level: 95, experienceYears: '5 años', highlight: true },
            { name: 'TypeScript / ESNext', level: 92, experienceYears: '4 años', highlight: true },
            { name: 'Tailwind CSS / Tokens', level: 98, experienceYears: '4 años', highlight: true },
            { name: 'Motion / Paralaje', level: 90, experienceYears: '3 años', highlight: true },
            { name: 'Gestión de Estado (Zustand)', level: 88, experienceYears: '4 años' },
            { name: 'HTML5 Semántico y WCAG AA', level: 94, experienceYears: '5 años' }
          ]
        },
        {
          id: 'backend',
          title: 'Backend y Servicios Cloud',
          description: 'Soluciones de servidor, pasarelas API y bases de datos relacionales',
          iconName: 'Server',
          skills: [
            { name: 'Node.js / Express', level: 88, experienceYears: '4 años', highlight: true },
            { name: 'APIs RESTful y GraphQL', level: 90, experienceYears: '4 años' },
            { name: 'PostgreSQL / Prisma / SQL', level: 84, experienceYears: '3 años' },
            { name: 'Redis / Caché en Memoria', level: 82, experienceYears: '3 años', highlight: true },
            { name: 'Docker y Contenedores', level: 80, experienceYears: '2 años' },
            { name: 'Funciones Serverless y Edge', level: 85, experienceYears: '2 años' }
          ]
        },
        {
          id: 'performance',
          title: 'Rendimiento y Caché',
          description: 'Optimización de Core Web Vitals y precarga de recursos',
          iconName: 'Zap',
          skills: [
            { name: 'Core Web Vitals (LCP, FID, CLS)', level: 96, experienceYears: '4 años', highlight: true },
            { name: 'Service Workers y Caché Offline', level: 92, experienceYears: '3 años', highlight: true },
            { name: 'Optimización de Imágenes (WebP)', level: 94, experienceYears: '4 años' },
            { name: 'Code Splitting y Tree Shaking', level: 90, experienceYears: '4 años' },
            { name: 'SEO y Datos Estructurados JSON-LD', level: 93, experienceYears: '4 años', highlight: true },
            { name: 'Telemetría Web Vitals', level: 87, experienceYears: '3 años' }
          ]
        },
        {
          id: 'workflow',
          title: 'Herramientas y DevOps',
          description: 'Pipelines modernos de compilación y pruebas automatizadas',
          iconName: 'Cpu',
          skills: [
            { name: 'Git / GitHub CI/CD Actions', level: 92, experienceYears: '5 años' },
            { name: 'Vite / Rollup / Turbopack', level: 94, experienceYears: '4 años', highlight: true },
            { name: 'Vitest / Playwright', level: 85, experienceYears: '3 años' },
            { name: 'Precisión Figma a Código', level: 95, experienceYears: '5 años' },
            { name: 'Aplicaciones Web Progresivas (PWA)', level: 90, experienceYears: '3 años' },
            { name: 'ESLint / Prettier', level: 96, experienceYears: '5 años' }
          ]
        }
      ]
    },
    experience: {
      badge: 'Trayectoria y Liderazgo',
      heading: 'Experiencia Profesional',
      headingAccent: '(Obsidian Violet)',
      subheading: 'Historial de liderazgo técnico, diseño de arquitectura y entrega de productos de alto impacto.',
      items: [
        {
          id: 'exp-1',
          period: '2023 — Presente',
          role: 'Lead Frontend Developer',
          company: 'Your Company',
          location: 'Remoto',
          type: 'Tiempo completo',
          achievements: [
            'Aceleración de los tiempos de carga en un 47%, reduciendo el LCP de 2.8s a 0.9s.',
            'Implementación de Service Worker y caché de recursos con acceso offline completo.',
            'Liderazgo de un equipo de 6 ingenieros frontend y arquitectura del sistema de diseño.'
          ],
          technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite', 'Service Worker', 'Production Ready']
        },
        {
          id: 'exp-2',
          period: '2021 — 2023',
          role: 'Senior Frontend Engineer',
          company: 'Previous Company',
          location: 'San Francisco, CA',
          type: 'Híbrido',
          achievements: [
            'Desarrollo de panel WebSocket en tiempo real con más de 200 feeds financieros concurrentes.',
            'Reducción del tamaño del bundle en un 35% mediante importaciones dinámicas.',
            'Implementación de Schema.org JSON-LD incrementando el tráfico orgánico en un 65%.'
          ],
          technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Recharts', 'Jest', 'Production Ready']
        },
        {
          id: 'exp-3',
          period: '2019 — 2021',
          role: 'Frontend & UI Developer',
          company: 'Agency / Studio Name',
          location: 'Austin, TX',
          type: 'Tiempo completo',
          achievements: [
            'Desarrollo de más de 20 experiencias web interactivas con efectos de paralaje a 60 FPS.',
            'Garantía de adaptabilidad desde pantallas móviles de 320px hasta monitores 4K.'
          ],
          technologies: ['JavaScript', 'HTML5/CSS3', 'Sass', 'GSAP', 'SVG', 'Production Ready']
        }
      ]
    },
    contact: {
      badge: 'Formulario de Contacto',
      heading: 'Construyamos Algo Excepcional',
      headingAccent: '(Obsidian Violet)',
      subheading: 'Envíe un mensaje o comuníquese por canales directos. Los borradores se guardan automáticamente en su navegador.',
      directTitle: 'Contacto Directo:',
      directStatus: 'En línea',
      emailLabel: 'Correo Electrónico',
      telegramLabel: 'Telegram',
      phoneLabel: 'Teléfono',
      locationLabel: 'Ubicación',
      socialsTitle: 'Redes Sociales y Código:',
      draftCached: 'Borrador Guardado',
      successTitle: '¡Mensaje Enviado!',
      successDesc: '¡Gracias por su mensaje! El formulario está validado. Conecte su backend preferido (Formspree, Web3Forms, EmailJS o API) para recibir correos reales.',
      successButton: 'Enviar Otro Mensaje',
      form: {
        nameLabel: 'Su Nombre *',
        namePlaceholder: 'Carlos García',
        emailLabel: 'Su Correo *',
        emailPlaceholder: 'your@email.com',
        serviceLabel: 'Tipo de Servicio',
        serviceOptions: [
          'Arquitectura Frontend',
          'Aplicación Web Full-Stack',
          'Rendimiento y Core Web Vitals',
          'Sistema de Diseño y PWA'
        ],
        budgetLabel: 'Presupuesto Estimado',
        budgetOptions: [
          '$3,000 - $5,000',
          '$5,000 - $10,000',
          '$10,000 - $25,000',
          '$25,000+'
        ],
        messageLabel: 'Descripción del Proyecto *',
        messagePlaceholder: 'Describa su proyecto, requisitos técnicos y plazos...',
        submitBtn: 'Enviar Solicitud',
        submittingBtn: 'Transmitiendo...',
        responseTime: 'Respuesta en menos de 2 horas'
      }
    },
    footer: {
      description: 'Plantilla de portafolio web con tema oscuro. Con diseño responsive, paralaje fluido, compresión de medios, Service Worker y microdatos SEO.',
      contactLabel: 'Contacto Directo:',
      navTitle: 'Navegación',
      archTitle: 'Arquitectura',
      cacheActive: 'Caché Service Worker Activa',
      motionActive: 'Paralaje Motion a 60 FPS',
      seoActive: 'SEO Schema.org JSON-LD',
      themeActive: 'Tema Oscuro Violeta Obsidiana',
      copyright: 'Todos los derechos reservados. Creado con React y Tailwind CSS.',
      backToTop: 'Arriba'
    },
    performance: {
      title: 'Rendimiento y Caché',
      swLabel: 'Service Worker:',
      swActive: 'Activo',
      swReady: 'Listo',
      loadTimeLabel: 'Tiempo de Carga:',
      cachesLabel: 'Contenedores Caché:',
      featuresLabel: 'Paralaje y SEO:',
      featuresVal: 'Habilitado',
      purgeBtn: 'Limpiar Caché',
      score: 'Puntuación: 99/100',
      toggleLabel: 'Velocidad: 99'
    }
  },

  de: {
    personalInfo: {
      name: 'Your Name',
      title: 'Senior Full-Stack & Frontend Ingenieur',
      status: 'Verfügbar für kommerzielle Projekte',
      email: 'your@email.com',
      emailDisplay: 'your@email.com',
      phone: '+1 (555) 019-2834',
      location: 'Berlin / Remote',
      bioShort: 'Moderne Entwickler-Portfolio-Vorlage. Entwickelt für Spitzen-Ladegeschwindigkeit, responsive Layouts, Service-Worker-Caching und flüssiges Parallax.',
      bioFull: 'Dies ist die Entwickler-Portfolio-Vorlage "Your Name". Entwickelt zur Veranschaulichung schneller Ladezeiten, WebP-Medienoptimierung, hardwarebeschleunigter Parallax-Bewegung und einer dunkel-violetten Obsidian-Ästhetik.',
      resumeUrl: '#contact',
      yearsExperience: '5+ Jahre',
      completedProjects: '35+ Projekte',
      clientSatisfaction: '100%'
    },
    navigation: [
      { id: 'hero', label: 'Start', href: '#hero' },
      { id: 'about', label: 'Über mich', href: '#about' },
      { id: 'skills', label: 'Skills', href: '#skills' },
      { id: 'projects', label: 'Projekte', href: '#projects' },
      { id: 'experience', label: 'Erfahrung', href: '#experience' },
      { id: 'contact', label: 'Kontakt', href: '#contact' }
    ],
    navCta: 'Kontaktieren',
    hero: {
      badge: 'Verfügbar für neue Projekte',
      headingLine1: 'Portfolio-Vorlage',
      headingLine2: 'Your Name',
      features: {
        motion: 'Parallax & Motion',
        cache: 'Service Worker Cache',
        seo: 'SEO & JSON-LD'
      },
      ctaProjects: 'Projekte Entdecken',
      ctaContact: 'Autor Kontaktieren',
      ctaResume: 'Lebenslauf',
      terminalTitle: 'entwickler-profil.ts',
      terminalBadge: 'PORTFOLIO',
      floatingBadgeTitle: 'Ultraschnelle Ladezeit',
      floatingBadgeDesc: 'Service Worker Cache'
    },
    metrics: [
      { id: 'exp', value: '5+ J.', label: 'Erfahrung', caption: 'Skalierbare Webarchitektur' },
      { id: 'projects', value: '35+', label: 'Abgeschlossene Projekte', caption: 'Von Startups bis zu Enterprise-Systemen' },
      { id: 'speed', value: '99/100', label: 'PageSpeed Score', caption: 'Erstklassige Core Web Vitals' },
      { id: 'uptime', value: '99.9%', label: 'Zuverlässigkeit', caption: 'Ausfallsichere Edge-Architektur' }
    ],
    about: {
      badge: 'Architektur & Prinzipien',
      heading: 'Moderner Tech-Stack & Höchste Performance',
      headingAccent: '(Obsidian Violet)',
      subheading: 'Gebaut für kompromisslose Geschwindigkeit, WCAG-AA-Barrierefreiheit, flüssige 60-FPS-Animationen und elegantes Obsidian-Violett-Design.',
      features: [
        { icon: 'Gauge', title: 'Schnelle Ladezeit', desc: 'Core Web Vitals optimiert, Asset-Kompression und Service-Worker-Caching.' },
        { icon: 'Palette', title: 'Obsidian-Violett UI', desc: 'Elegante dunkle Farbpalette, hoher Kontrast und kalibrierte Typografie.' },
        { icon: 'Layers', title: 'Parallax & Motion', desc: 'Flüssige, hardwarebeschleunigte Transformationen mit 60 FPS.' },
        { icon: 'Search', title: 'Suchmaschinen-SEO', desc: 'Semantische HTML5-Struktur und Schema.org JSON-LD-Metadaten.' }
      ],
      bannerTitle: 'Produktionsbereit',
      bannerDesc: 'Alle Komponenten sind modular, mit TypeScript typsicher und barrierefrei.',
      bannerCta: 'Projekte Ansehen →'
    },
    projects: {
      badge: 'Projekt-Portfolio',
      heading: 'Ausgewählte Arbeiten',
      headingAccent: '(Obsidian Violet)',
      subheading: 'Webdienste auf Enterprise-Niveau, Progressive Web Apps und moderne Komponentenarchitekturen.',
      categories: [
        { id: 'all', label: 'Alle' },
        { id: 'fullstack', label: 'Full-Stack' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'mobile', label: 'Mobile' },
        { id: 'uiux', label: 'UI/UX' }
      ],
      cardDetails: 'Details',
      cardOverview: 'Übersicht',
      modalSource: 'Quellcode',
      modalLive: 'Live-Vorschau',
      modalFeaturesTitle: 'Hauptfunktionen:',
      modalStackTitle: 'Technologie-Stack:',
      modalDisclaimer: '* Dieses Projekt ist Teil der Obsidian Violet-Vorlage zur Präsentation interaktiver Komponenten.',
      items: [
        {
          id: 'proj-1',
          title: 'Cloud-Analytics-Plattform',
          category: 'fullstack',
          categoryLabel: 'Full-Stack',
          summary: 'Echtzeit-Cloud-Analyseplattform mit interaktiven Dashboards und Ereignis-Streaming.',
          description: 'Analyse-Engine mit Echtzeit-Telemetrie, anpassbaren Widgets und WebGL-Visualisierungen.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
          tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Production Ready'],
          metrics: [
            { label: 'Initiale Ladezeit', value: '0.4s' },
            { label: 'Events/Sekunde', value: '15,000' }
          ],
          features: [
            'WebGL-beschleunigte Diagramme',
            'Sub-Millisekunden-Zustandssynchronisierung via WebSockets',
            'Automatischer PDF- und Excel-Berichtsexport'
          ],
          demoUrl: 'https://example.com/project-1',
          githubUrl: 'https://github.com/your-username/cloud-analytics',
          featured: true,
          year: '2026'
        },
        {
          id: 'proj-2',
          title: 'KI-Workflow-Arbeitsbereich',
          category: 'frontend',
          categoryLabel: 'Frontend',
          summary: 'Visueller knotenbasierter Canvas zur Orchestrierung von LLM-Pipelines.',
          description: 'Visueller Editor zum Verketten von Prompts, Tool-Aufrufen und API-Aktionen mit unendlichem Zoom.',
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
          tags: ['Next.js', 'TypeScript', 'Motion', 'Zustand', 'Production Ready'],
          metrics: [
            { label: 'Bildwiederholrate', value: '60 FPS' },
            { label: 'Bundle-Größe', value: '82 KB' }
          ],
          features: [
            'Canvas mit unendlichem Zoom und Gestensteuerung',
            'Offline-Zustandssynchronisation mit IndexedDB',
            'Elektrisches dunkles Thema mit leuchtenden Verbindern'
          ],
          demoUrl: 'https://example.com/project-2',
          githubUrl: 'https://github.com/your-username/ai-workflow',
          featured: true,
          year: '2026'
        },
        {
          id: 'proj-3',
          title: 'NeoPay Digital Wallet',
          category: 'mobile',
          categoryLabel: 'Mobile',
          summary: 'Plattformübergreifende Progressive Web App für sofortige Zahlungen.',
          description: 'Installierbare PWA mit Web-Biometrie, Echtzeit-Wechselkursen und Offline-Guthabenbuch.',
          image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop',
          tags: ['React PWA', 'Tailwind CSS', 'Web Crypto API', 'Production Ready'],
          metrics: [
            { label: 'Offline-Fähigkeit', value: '100% PWA' },
            { label: 'Conversion-Steigerung', value: '+34%' }
          ],
          features: [
            'Vollständige Offline-Funktionalität mit Service Worker',
            'Echtzeit-Währungsrechner mit interaktiven Diagrammen',
            'Ergonomische Mobile-First-Bedienung'
          ],
          demoUrl: 'https://example.com/project-3',
          githubUrl: 'https://github.com/your-username/neopay-wallet',
          featured: true,
          year: '2025'
        },
        {
          id: 'proj-4',
          title: 'Universelles Design-System',
          category: 'uiux',
          categoryLabel: 'UI/UX',
          summary: 'Barrierefreie Komponentenbibliothek mit Hell/Dunkel-Tokens.',
          description: 'Über 40 barrierefreie Komponenten nach WCAG AA, Designtokens und Storybook-Dokumentation.',
          image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop',
          tags: ['Storybook', 'Figma Tokens', 'Radix UI', 'Production Ready'],
          metrics: [
            { label: 'Testabdeckung', value: '98%' },
            { label: 'WCAG-Standard', value: 'Level AA' }
          ],
          features: [
            'Strikte semantische Designtokens',
            'Vollständige Tastatur- und Screenreader-Unterstützung',
            'Integrierte Kontrast- und Layout-Verschiebungs-Prüfung'
          ],
          demoUrl: 'https://example.com/project-4',
          githubUrl: 'https://github.com/your-username/design-system',
          featured: false,
          year: '2025'
        },
        {
          id: 'proj-5',
          title: 'HyperSpeed E-Commerce Hub',
          category: 'fullstack',
          categoryLabel: 'Full-Stack',
          summary: 'Ultraschneller Headless-Shop mit Sofortsuche im Client.',
          description: 'Konvertierungsstarker Online-Shop mit Edge-Rendering, WebP-Bildoptimierung und schnellem Warenkorb.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
          tags: ['React', 'Edge Functions', 'Redis Cache', 'Production Ready'],
          metrics: [
            { label: 'Time to Interactive', value: '0.6s' },
            { label: 'Layout Shift', value: '0.00' }
          ],
          features: [
            'Sofortsuche mit unscharfer Stichwortübereinstimmung',
            'WebP-Optimierung mit Skeleton-Platzhaltern',
            'Katalog-Caching für verzögerungsfreie Paginierung'
          ],
          demoUrl: 'https://example.com/project-5',
          githubUrl: 'https://github.com/your-username/hyperspeed-store',
          featured: false,
          year: '2025'
        },
        {
          id: 'proj-6',
          title: 'Pulse IoT Smart Panel',
          category: 'frontend',
          categoryLabel: 'Frontend',
          summary: 'Interaktives Dashboard für intelligente Gebäude mit 3D-Grundrissen.',
          description: 'Echtzeit-Telemetrie für Klimasensoren, Solarenergieertrag und automatische Warnungen.',
          image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop',
          tags: ['React', 'WebGL', 'Tailwind CSS', 'MQTT', 'Production Ready'],
          metrics: [
            { label: 'Telemetrie-Latenz', value: '18ms' },
            { label: 'Verbundene Geräte', value: '48' }
          ],
          features: [
            'Interaktive 3D-Gebäudegrundriss-Visualisierung',
            'Energieverbrauchsprognose und Kosteneinblicke',
            'Reaktive dunkle Benutzeroberfläche'
          ],
          demoUrl: 'https://example.com/project-6',
          githubUrl: 'https://github.com/your-username/pulse-iot-panel',
          featured: false,
          year: '2024'
        }
      ]
    },
    skills: {
      badge: 'Technologien & Kompetenzen',
      heading: 'Kerntechnologien',
      headingAccent: '(Obsidian Violet)',
      subheading: 'Erprobte moderne Frameworks und Cloud-Tools für maximale Geschwindigkeit und Wartbarkeit.',
      metricsTitle: 'Skill-Metriken',
      footerNote: 'Alle Fähigkeiten in realen kommerziellen Fallstudien validiert',
      groups: [
        {
          id: 'frontend',
          title: 'Frontend-Architektur',
          description: 'Entwicklung barrierefreier und schneller Benutzeroberflächen',
          iconName: 'Layout',
          skills: [
            { name: 'React 19 / Next.js', level: 95, experienceYears: '5 J.', highlight: true },
            { name: 'TypeScript / ESNext', level: 92, experienceYears: '4 J.', highlight: true },
            { name: 'Tailwind CSS / Design Tokens', level: 98, experienceYears: '4 J.', highlight: true },
            { name: 'Motion / Parallax', level: 90, experienceYears: '3 J.', highlight: true },
            { name: 'State Management (Zustand)', level: 88, experienceYears: '4 J.' },
            { name: 'Semantisches HTML5 & WCAG AA', level: 94, experienceYears: '5 J.' }
          ]
        },
        {
          id: 'backend',
          title: 'Backend & Cloud-Dienste',
          description: 'Server-Lösungen, API-Gateways und relationale Datenbanken',
          iconName: 'Server',
          skills: [
            { name: 'Node.js / Express', level: 88, experienceYears: '4 J.', highlight: true },
            { name: 'RESTful & GraphQL APIs', level: 90, experienceYears: '4 J.' },
            { name: 'PostgreSQL / Prisma / SQL', level: 84, experienceYears: '3 J.' },
            { name: 'Redis / In-Memory-Cache', level: 82, experienceYears: '3 J.', highlight: true },
            { name: 'Docker & Container', level: 80, experienceYears: '2 J.' },
            { name: 'Edge Functions & Serverless', level: 85, experienceYears: '2 J.' }
          ]
        },
        {
          id: 'performance',
          title: 'Performance & Caching',
          description: 'Optimierung von Core Web Vitals und Caching-Strategien',
          iconName: 'Zap',
          skills: [
            { name: 'Core Web Vitals (LCP, FID, CLS)', level: 96, experienceYears: '4 J.', highlight: true },
            { name: 'Service Workers & Offline-Cache', level: 92, experienceYears: '3 J.', highlight: true },
            { name: 'Bildoptimierung (WebP)', level: 94, experienceYears: '4 J.' },
            { name: 'Code Splitting & Tree Shaking', level: 90, experienceYears: '4 J.' },
            { name: 'SEO & Strukturierte Daten', level: 93, experienceYears: '4 J.', highlight: true },
            { name: 'Web Vitals Telemetrie', level: 87, experienceYears: '3 J.' }
          ]
        },
        {
          id: 'workflow',
          title: 'Tools & DevOps',
          description: 'Moderne Build-Pipelines und Test-Runner',
          iconName: 'Cpu',
          skills: [
            { name: 'Git / GitHub CI/CD Actions', level: 92, experienceYears: '5 J.' },
            { name: 'Vite / Rollup / Turbopack', level: 94, experienceYears: '4 J.', highlight: true },
            { name: 'Vitest / Playwright', level: 85, experienceYears: '3 J.' },
            { name: 'Figma-zu-Code Präzision', level: 95, experienceYears: '5 J.' },
            { name: 'Progressive Web Apps (PWA)', level: 90, experienceYears: '3 J.' },
            { name: 'ESLint / Prettier', level: 96, experienceYears: '5 J.' }
          ]
        }
      ]
    },
    experience: {
      badge: 'Karriere & Führung',
      heading: 'Berufserfahrung',
      headingAccent: '(Obsidian Violet)',
      subheading: 'Erfolgsbilanz in technischer Führung, Architekturentscheidungen und Produktbereitstellung.',
      items: [
        {
          id: 'exp-1',
          period: '2023 — Heute',
          role: 'Lead Frontend Developer',
          company: 'Your Company',
          location: 'Remote',
          type: 'Vollzeit',
          achievements: [
            'Verbesserung der Ladezeiten um 47%, Senkung des LCP von 2,8s auf 0,9s.',
            'Einführung von Service Worker und Asset-Caching für nahtlosen Offline-Zugriff.',
            'Leitung von 6 Frontend-Ingenieuren und Architektur des barrierefreien Designsystems.'
          ],
          technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite', 'Production Ready']
        },
        {
          id: 'exp-2',
          period: '2021 — 2023',
          role: 'Senior Frontend Engineer',
          company: 'Previous Company',
          location: 'San Francisco, CA',
          type: 'Hybrid',
          achievements: [
            'Echtzeit-WebSocket-Dashboard für über 200 gleichzeitige Markt-Feeds.',
            'Reduzierung des Bundle-Footprints um 35% durch dynamische Imports.',
            'Implementierung strukturierter Daten nach Schema.org für +65% organischen Traffic.'
          ],
          technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Recharts', 'Production Ready']
        },
        {
          id: 'exp-3',
          period: '2019 — 2021',
          role: 'Frontend & UI Developer',
          company: 'Agency / Studio Name',
          location: 'Austin, TX',
          type: 'Vollzeit',
          achievements: [
            'Entwicklung von 20+ interaktiven Weberlebnissen mit 60-FPS-Parallax-Effekten.',
            'Gewährleistung voller responsiver Kompatibilität von 320px bis 4K.'
          ],
          technologies: ['JavaScript', 'HTML5/CSS3', 'Sass', 'GSAP', 'Production Ready']
        }
      ]
    },
    contact: {
      badge: 'Kontaktformular',
      heading: 'Lassen Sie uns etwas Großartiges Bauen',
      headingAccent: '(Obsidian Violet)',
      subheading: 'Füllen Sie das Formular aus oder kontaktieren Sie mich direkt. Entwürfe werden automatisch im Browser zwischengespeichert.',
      directTitle: 'Direktanfragen:',
      directStatus: 'Online',
      emailLabel: 'E-Mail-Adresse',
      telegramLabel: 'Telegram',
      phoneLabel: 'Telefonnummer',
      locationLabel: 'Standort',
      socialsTitle: 'Soziale Netzwerke & Code:',
      draftCached: 'Entwurf Gespeichert',
      successTitle: 'Nachricht Gesendet!',
      successDesc: 'Vielen Dank für Ihre Anfrage! Das Formular wurde validiert. Verbinden Sie Ihr bevorzugtes Backend (Formspree, Web3Forms, EmailJS oder API), um Nachrichten zu empfangen.',
      successButton: 'Weitere Nachricht Senden',
      form: {
        nameLabel: 'Ihr Name *',
        namePlaceholder: 'Maximilian Müller',
        emailLabel: 'Ihre E-Mail *',
        emailPlaceholder: 'your@email.com',
        serviceLabel: 'Dienstleistungsart',
        serviceOptions: [
          'Frontend-Architektur',
          'Full-Stack Web-App',
          'Performance & Core Web Vitals',
          'Design-System & PWA'
        ],
        budgetLabel: 'Geschätztes Budget',
        budgetOptions: [
          '3.000 € - 5.000 €',
          '5.000 € - 10.000 €',
          '10.000 € - 25.000 €',
          '25.000 €+'
        ],
        messageLabel: 'Projektbeschreibung oder Anfrage *',
        messagePlaceholder: 'Beschreiben Sie Ihr Projekt, Anforderungen und Zeitpläne...',
        submitBtn: 'Anfrage Senden',
        submittingBtn: 'Wird übertragen...',
        responseTime: 'Antwort innerhalb von 2 Stunden'
      }
    },
    footer: {
      description: 'Hochmoderne Entwickler-Portfolio-Vorlage im dunklen Design. Mit responsiven Layouts, flüssigem Parallax, Medienkomprimierung und Service-Worker-Caching.',
      contactLabel: 'Direkter Kontakt:',
      navTitle: 'Navigation',
      archTitle: 'Architektur',
      cacheActive: 'Service Worker Cache Aktiv',
      motionActive: 'Motion Parallax 60 FPS',
      seoActive: 'Schema.org JSON-LD SEO',
      themeActive: 'Obsidian-Violett Dark UI',
      copyright: 'Alle Texte und E-Mails sind eine Obsidian Violet.',
      backToTop: 'Nach oben'
    },
    performance: {
      title: 'Performance & Cache',
      swLabel: 'Service Worker:',
      swActive: 'Aktiv',
      swReady: 'Bereit',
      loadTimeLabel: 'Ladezeit:',
      cachesLabel: 'Cache-Buckets:',
      featuresLabel: 'Parallax & SEO:',
      featuresVal: 'Aktiviert',
      purgeBtn: 'Cache Leeren',
      score: 'Score: 99/100',
      toggleLabel: 'Speed: 99'
    }
  },

  ru: {
    personalInfo: {
      name: 'Your Name',
      title: 'Ведущий Full-Stack и Frontend инженер',
      status: 'Доступен для коммерческих проектов',
      email: 'your@email.com',
      emailDisplay: 'your@email.com',
      phone: '+1 (555) 019-2834',
      location: 'Москва / Удаленно',
      bioShort: 'Современный шаблон портфолио разработчика. Разработан для максимальной скорости загрузки, адаптивного дизайна, кэширования ресурсов и плавных параллакс-эффектов.',
      bioFull: 'Senior Software Engineer с обширным опытом работы с TypeScript, React, современными веб-стандартами и серверными решениями. Ориентирован на создание чистой архитектуры, плавной анимации и безупречного пользовательского опыта.',
      resumeUrl: '#contact',
      yearsExperience: '5+ Лет',
      completedProjects: '35+ Проектов',
      clientSatisfaction: '100%'
    },
    navigation: [
      { id: 'hero', label: 'Главная', href: '#hero' },
      { id: 'about', label: 'О себе', href: '#about' },
      { id: 'skills', label: 'Навыки', href: '#skills' },
      { id: 'projects', label: 'Проекты', href: '#projects' },
      { id: 'experience', label: 'Опыт', href: '#experience' },
      { id: 'contact', label: 'Контакты', href: '#contact' }
    ],
    navCta: 'Связаться',
    hero: {
      badge: 'Доступен для новых проектов',
      headingLine1: 'Шаблон портфолио',
      headingLine2: 'Your Name',
      features: {
        motion: 'Параллакс и анимации',
        cache: 'Кэш Service Worker',
        seo: 'SEO и JSON-LD'
      },
      ctaProjects: 'Смотреть проекты',
      ctaContact: 'Связаться с автором',
      ctaResume: 'Резюме',
      terminalTitle: 'developer-profile.ts',
      terminalBadge: 'PORTFOLIO',
      floatingBadgeTitle: 'Сверхбыстрая скорость',
      floatingBadgeDesc: 'Кэш Service Worker'
    },
    metrics: [
      { id: 'exp', value: '5+ Лет', label: 'Опыт работы', caption: 'Архитектура масштабируемых веб-систем' },
      { id: 'projects', value: '35+', label: 'Выполненных проектов', caption: 'От стартапов до enterprise-решений' },
      { id: 'speed', value: '99/100', label: 'PageSpeed Score', caption: 'Наивысшие баллы Core Web Vitals' },
      { id: 'uptime', value: '99.9%', label: 'Надежность сервиса', caption: 'Отказоустойчивая архитектура' }
    ],
    about: {
      badge: 'Архитектура и стандарты',
      heading: 'Современный стек технологий и высокая производительность',
      headingAccent: '(Ваше Имя)',
      subheading: 'Разработка современных веб-приложений с упором на чистую модульную архитектуру, доступность интерфейсов и оптимизированную производительность.',
      features: [
        { icon: 'Gauge', title: 'Быстрая загрузка', desc: 'Оптимизация Core Web Vitals, сжатие ассетов и автономный кэш Service Worker.' },
        { icon: 'Palette', title: 'Обсидианово-фиолетовый UI', desc: 'Глубокая темная палитра с неоновым свечением и выверенной типографикой.' },
        { icon: 'Layers', title: 'Параллакс и динамика', desc: 'Плавные аппаратные трансформации на базе Motion с частотой 60 кадров в секунду.' },
        { icon: 'Search', title: 'SEO-оптимизация', desc: 'Семантическая разметка HTML5 и микроданные Schema.org JSON-LD.' }
      ],
      bannerTitle: 'Полная готовность к запуску',
      bannerDesc: 'Все модули строго типизированы в TypeScript, доступны и легко настраиваются.',
      bannerCta: 'Смотреть проекты →'
    },
    projects: {
      badge: 'Портфолио проектов',
      heading: 'Избранные проекты',
      headingAccent: '(Ваше Имя)',
      subheading: 'Коммерческие веб-сервисы, прогрессивные веб-приложения (PWA) и компонентные библиотеки с акцентом на скорость и чистый код.',
      categories: [
        { id: 'all', label: 'Все проекты' },
        { id: 'fullstack', label: 'Full-Stack' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'mobile', label: 'Мобильные' },
        { id: 'uiux', label: 'UI/UX' }
      ],
      cardDetails: 'Подробнее',
      cardOverview: 'Обзор',
      modalSource: 'Исходный код',
      modalLive: 'Открыть проект',
      modalFeaturesTitle: 'Ключевые особенности:',
      modalStackTitle: 'Стек технологий:',
      modalDisclaimer: '* Интерактивная витрина проектов, демонстрирующая структуру компонентов и адаптивную верстку.',
      items: [
        {
          id: 'proj-1',
          title: 'Платформа облачной аналитики',
          category: 'fullstack',
          categoryLabel: 'Full-Stack',
          summary: 'Высоконагруженная облачная аналитика в реальном времени с интерактивными дашбордами.',
          description: 'Аналитический движок уровня enterprise с телеметрией в реальном времени и WebGL-графиками.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
          tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Ваше Имя'],
          metrics: [
            { label: 'Скорость загрузки', value: '0.4с' },
            { label: 'Событий в секунду', value: '15,000' }
          ],
          features: [
            'Аппаратная визуализация на Canvas/WebGL',
            'Субмиллисекундная синхронизация через WebSockets',
            'Экспорт отчетов в PDF и Excel в один клик'
          ],
          demoUrl: 'https://example.com/project-1',
          githubUrl: 'https://github.com/your-username/cloud-analytics',
          featured: true,
          year: '2026'
        },
        {
          id: 'proj-2',
          title: 'Рабочая среда для пайплайнов ИИ',
          category: 'frontend',
          categoryLabel: 'Frontend',
          summary: 'Визуальный холст на узлах для оркестрации мультиагентных систем и цепочек промптов.',
          description: 'Визуальный редактор с бесконечным зумом, поддержкой жестов и кэшированием черновиков.',
          image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
          tags: ['Next.js', 'TypeScript', 'Motion', 'Zustand', 'Canvas API', 'Ваше Имя'],
          metrics: [
            { label: 'Частота кадров', value: '60 FPS' },
            { label: 'Размер бандла', value: '82 KB' }
          ],
          features: [
            'Бесконечный холст с плавным зумом и привязкой',
            'Офлайн-синхронизация состояния через IndexedDB',
            'Электрическая темная тема со светящимися связями'
          ],
          demoUrl: 'https://example.com/project-2',
          githubUrl: 'https://github.com/your-username/ai-workflow',
          featured: true,
          year: '2026'
        },
        {
          id: 'proj-3',
          title: 'Цифровой кошелек NeoPay',
          category: 'mobile',
          categoryLabel: 'Мобильный интерфейс',
          summary: 'Кроссплатформенное PWA-приложение для мгновенных платежей и обмена валют.',
          description: 'Устанавливаемый кошелек PWA с биометрической авторизацией WebAuthn и графиками курсов.',
          image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop',
          tags: ['React PWA', 'Tailwind CSS', 'Web Crypto API', 'Recharts', 'Ваше Имя'],
          metrics: [
            { label: 'Офлайн-готовность', value: '100% PWA' },
            { label: 'Конверсия авторизации', value: '+34%' }
          ],
          features: [
            'Полный офлайн-режим с кэшем Service Worker',
            'Конвертер валют с интерактивными графиками',
            'Эргономичный мобильный UI с тактильным откликом'
          ],
          demoUrl: 'https://example.com/project-3',
          githubUrl: 'https://github.com/your-username/neopay-wallet',
          featured: true,
          year: '2025'
        },
        {
          id: 'proj-4',
          title: 'Универсальная дизайн-система',
          category: 'uiux',
          categoryLabel: 'UI/UX и дизайн-система',
          summary: 'Библиотека доступных компонентов с токенами темной/светлой темы и микроанимациями.',
          description: 'Более 40 доступных компонентов по стандарту WCAG AA с документацией в Storybook.',
          image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop',
          tags: ['Storybook', 'Figma Tokens', 'Radix UI', 'Tailwind', 'Ваше Имя'],
          metrics: [
            { label: 'Покрытие тестами', value: '98%' },
            { label: 'Стандарт доступности', value: 'WCAG AA' }
          ],
          features: [
            'Строгая семантическая токенизация дизайна',
            'Полная навигация с клавиатуры и для скринридеров',
            'Встроенный аудит контрастности и сдвигов макета'
          ],
          demoUrl: 'https://example.com/project-4',
          githubUrl: 'https://github.com/your-username/design-system',
          featured: false,
          year: '2025'
        },
        {
          id: 'proj-5',
          title: 'E-Commerce платформа HyperSpeed',
          category: 'fullstack',
          categoryLabel: 'Full-Stack',
          summary: 'Сверхбыстрый headless-магазин с мгновенным клиентским поиском.',
          description: 'Интернет-магазин с рендерингом на edge-узлах, WebP-сжатием изображений и оптимистичной корзиной.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
          tags: ['React', 'Edge Functions', 'Redis Cache', 'Tailwind CSS', 'Ваше Имя'],
          metrics: [
            { label: 'Время до интерактива', value: '0.6с' },
            { label: 'Сдвиг макета (CLS)', value: '0.00' }
          ],
          features: [
            'Мгновенный поиск с нечетким соответствием',
            'WebP-изображения со скелетон-плейсхолдерами',
            'Кэширование каталога для мгновенной пагинации'
          ],
          demoUrl: 'https://example.com/project-5',
          githubUrl: 'https://github.com/your-username/hyperspeed-store',
          featured: false,
          year: '2025'
        },
        {
          id: 'proj-6',
          title: 'IoT-панель управления Pulse',
          category: 'frontend',
          categoryLabel: 'Frontend',
          summary: 'Интерактивный дашборд умного здания с 3D-планами помещений.',
          description: 'Телеметрия в реальном времени для датчиков микроклимата, генерации солнечной энергии и уведомлений.',
          image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop',
          thumbnail: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop',
          tags: ['React', 'WebGL', 'Tailwind CSS', 'MQTT', 'Ваше Имя'],
          metrics: [
            { label: 'Задержка телеметрии', value: '18мс' },
            { label: 'Устройств в сети', value: '48' }
          ],
          features: [
            'Интерактивная 3D-визуализация планов этажей',
            'Прогнозирование энергопотребления и затрат',
            'Тактильный темный интерфейс с быстрым откликом'
          ],
          demoUrl: 'https://example.com/project-6',
          githubUrl: 'https://github.com/your-username/pulse-iot-panel',
          featured: false,
          year: '2024'
        }
      ]
    },
    skills: {
      badge: 'Стек технологий и компетенции',
      heading: 'Ключевые технологии',
      headingAccent: '(Ваше Имя)',
      subheading: 'Проверенные практикой современные фреймворки и облачные инструменты для высокой скорости и надежности.',
      metricsTitle: 'Метрики навыков',
      footerNote: 'Все навыки подтверждены реальными коммерческими кейсами',
      groups: [
        {
          id: 'frontend',
          title: 'Архитектура Frontend',
          description: 'Создание адаптивных, доступных и быстрых интерфейсов',
          iconName: 'Layout',
          skills: [
            { name: 'React 19 / Next.js', level: 95, experienceYears: '5 лет', highlight: true },
            { name: 'TypeScript / ESNext', level: 92, experienceYears: '4 года', highlight: true },
            { name: 'Tailwind CSS / Токены', level: 98, experienceYears: '4 года', highlight: true },
            { name: 'Motion / Параллакс', level: 90, experienceYears: '3 года', highlight: true },
            { name: 'State Management (Zustand)', level: 88, experienceYears: '4 года' },
            { name: 'Семантический HTML5 и WCAG AA', level: 94, experienceYears: '5 лет' }
          ]
        },
        {
          id: 'backend',
          title: 'Backend и облачные сервисы',
          description: 'Серверные решения, API-шлюзы и базы данных',
          iconName: 'Server',
          skills: [
            { name: 'Node.js / Express', level: 88, experienceYears: '4 года', highlight: true },
            { name: 'RESTful и GraphQL API', level: 90, experienceYears: '4 года' },
            { name: 'PostgreSQL / Prisma / SQL', level: 84, experienceYears: '3 года' },
            { name: 'Redis / In-Memory кэширование', level: 82, experienceYears: '3 года', highlight: true },
            { name: 'Docker и контейнеризация', level: 80, experienceYears: '2 года' },
            { name: 'Edge Functions и Serverless', level: 85, experienceYears: '2 года' }
          ]
        },
        {
          id: 'performance',
          title: 'Производительность и кэш',
          description: 'Оптимизация Core Web Vitals и стратегии кэширования',
          iconName: 'Zap',
          skills: [
            { name: 'Core Web Vitals (LCP, FID, CLS)', level: 96, experienceYears: '4 года', highlight: true },
            { name: 'Service Workers и офлайн-кэш', level: 92, experienceYears: '3 года', highlight: true },
            { name: 'Оптимизация изображений (WebP)', level: 94, experienceYears: '4 года' },
            { name: 'Code Splitting и Tree Shaking', level: 90, experienceYears: '4 года' },
            { name: 'SEO и JSON-LD микроразметка', level: 93, experienceYears: '4 года', highlight: true },
            { name: 'Телеметрия Web Vitals', level: 87, experienceYears: '3 года' }
          ]
        },
        {
          id: 'workflow',
          title: 'Инструменты и DevOps',
          description: 'Современные сборочные пайплайны и автотесты',
          iconName: 'Cpu',
          skills: [
            { name: 'Git / GitHub CI/CD Actions', level: 92, experienceYears: '5 лет' },
            { name: 'Vite / Rollup / Turbopack', level: 94, experienceYears: '4 года', highlight: true },
            { name: 'Vitest / Playwright', level: 85, experienceYears: '3 года' },
            { name: 'Точность переноса из Figma в код', level: 95, experienceYears: '5 лет' },
            { name: 'Прогрессивные веб-приложения (PWA)', level: 90, experienceYears: '3 года' },
            { name: 'ESLint / Prettier', level: 96, experienceYears: '5 лет' }
          ]
        }
      ]
    },
    experience: {
      badge: 'Карьерный трек и опыт',
      heading: 'Профессиональный опыт',
      headingAccent: '(Ваше Имя)',
      subheading: 'Успешный опыт технического лидерства, проектирования архитектуры и запуска продуктов.',
      items: [
        {
          id: 'exp-1',
          period: '2023 — Настоящее время',
          role: 'Lead Frontend Developer',
          company: 'Your Company',
          location: 'Удаленно',
          type: 'Полная занятость',
          achievements: [
            'Ускорение загрузки портала на 47%, снижение LCP с 2.8с до 0.9с.',
            'Внедрение Service Worker и кэширования для полноценной работы офлайн.',
            'Руководство командой из 6 frontend-инженеров и архитектура дизайн-системы.'
          ],
          technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vite', 'Service Worker', 'Ваше Имя']
        },
        {
          id: 'exp-2',
          period: '2021 — 2023',
          role: 'Senior Frontend Engineer',
          company: 'Previous Company',
          location: 'Сан-Франциско',
          type: 'Гибридный формат',
          achievements: [
            'Разработка WebSocket дашборда с 200+ финансовыми потоками в реальном времени.',
            'Сокращение бандла на 35% с помощью динамических импортов и сплиттинга.',
            'Внедрение Schema.org JSON-LD, обеспечившее рост органического трафика на 65%.'
          ],
          technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Recharts', 'Jest', 'Ваше Имя']
        },
        {
          id: 'exp-3',
          period: '2019 — 2021',
          role: 'Frontend & UI Developer',
          company: 'Agency / Studio Name',
          location: 'Остин, Техас',
          type: 'Полная занятость',
          achievements: [
            'Разработка 20+ интерактивных веб-сайтов с плавным параллаксом при 60 FPS.',
            'Обеспечение адаптивности от мобильных экранов 320px до 4K мониторов.'
          ],
          technologies: ['JavaScript', 'HTML5/CSS3', 'Sass', 'GSAP', 'SVG', 'Ваше Имя']
        }
      ]
    },
    contact: {
      badge: 'Контактная форма',
      heading: 'Давайте Создадим Что-то Выдающееся',
      headingAccent: '(Ваше Имя)',
      subheading: 'Заполните форму ниже или напишите по прямым каналам. Черновик формы автоматически сохраняется в вашем браузере.',
      directTitle: 'Прямые контакты:',
      directStatus: 'В сети',
      emailLabel: 'Адрес электронной почты',
      telegramLabel: 'Telegram',
      phoneLabel: 'Номер телефона',
      locationLabel: 'Локация',
      socialsTitle: 'Социальные сети и код:',
      draftCached: 'Черновик сохранен',
      successTitle: 'Сообщение отправлено!',
      successDesc: 'Спасибо за обращение! Форма успешно прошла валидацию. Подключите желаемый бэкенд (Formspree, Web3Forms, EmailJS или собственный API) для приема сообщений.',
      successButton: 'Отправить еще одно сообщение',
      form: {
        nameLabel: 'Ваше имя *',
        namePlaceholder: 'Александр Иванов',
        emailLabel: 'Ваш Email *',
        emailPlaceholder: 'your@email.com',
        serviceLabel: 'Тип услуги',
        serviceOptions: [
          'Frontend Архитектура',
          'Full-Stack веб-приложение',
          'Производительность и Core Web Vitals',
          'Дизайн-система и PWA'
        ],
        budgetLabel: 'Примерный бюджет',
        budgetOptions: [
          '3 000 $ - 5 000 $',
          '5 000 $ - 10 000 $',
          '10 000 $ - 25 000 $',
          '25 000 $+'
        ],
        messageLabel: 'Описание проекта или вопрос *',
        messagePlaceholder: 'Опишите задачу, желаемые сроки и технические требования...',
        submitBtn: 'Отправить заявку',
        submittingBtn: 'Отправка...',
        responseTime: 'Ответ в течение 2 часов'
      }
    },
    footer: {
      description: 'Высокопроизводительный адаптивный шаблон сайта-портфолио с темной темой. Параллакс, оптимизация изображений, Service Worker кэширование и SEO микроразметка.',
      contactLabel: 'Прямой контакт:',
      navTitle: 'Навигация',
      archTitle: 'Архитектура',
      cacheActive: 'Кэш Service Worker активен',
      motionActive: 'Параллакс Motion 60 FPS',
      seoActive: 'SEO Schema.org JSON-LD',
      themeActive: 'Тема Обсидиановый Фиолет',
      copyright: 'Все права защищены. Создано на React и Tailwind CSS.',
      backToTop: 'Наверх'
    },
    performance: {
      title: 'Скорость и кэш',
      swLabel: 'Service Worker:',
      swActive: 'Активен',
      swReady: 'Готов',
      loadTimeLabel: 'Время загрузки:',
      cachesLabel: 'Кэш-хранилища:',
      featuresLabel: 'Параллакс и SEO:',
      featuresVal: 'Включено',
      purgeBtn: 'Сбросить кэш',
      score: 'Оценка: 99/100',
      toggleLabel: 'Скорость: 99'
    }
  }
};
