import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Eye, Layers } from 'lucide-react';
import { Project } from '../types';
import { OptimizedImage } from './OptimizedImage';
import { ProjectModal } from './ProjectModal';
import { useLanguage } from '../context/LanguageContext';

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return t.projects.items;
    return t.projects.items.filter((p) => p.category === selectedCategory);
  }, [selectedCategory, t.projects.items]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>{t.projects.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {t.projects.heading} <span className="text-purple-400">{t.projects.headingAccent}</span>
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-xl">
              {t.projects.subheading}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#131124]/70 p-1.5 rounded-2xl border border-purple-500/15 backdrop-blur-md">
            {t.projects.categories.map((cat) => (
              <button
                key={cat.id}
                id={`filter-btn-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/25'
                    : 'text-slate-400 hover:text-white hover:bg-[#1a1732]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                id={`project-card-${project.id}`}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-2xl bg-[#131124]/60 hover:bg-[#18152e]/90 border border-white/5 hover:border-purple-500/40 transition-all duration-300 flex flex-col overflow-hidden shadow-xl"
              >
                {/* Image Container with Overlay */}
                <div 
                  className="relative cursor-pointer overflow-hidden"
                  onClick={() => setActiveProject(project)}
                >
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    aspectRatio="aspect-[16/10]"
                  />

                  {/* Year & Category floating badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-[#0b0a14]/85 backdrop-blur-md text-purple-300 border border-purple-500/30">
                      {project.categoryLabel}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[11px] font-mono text-slate-300 bg-[#0b0a14]/85 backdrop-blur-md border border-white/10">
                      {project.year}
                    </span>
                  </div>

                  {/* Hover Quick Action Backdrop */}
                  <div className="absolute inset-0 bg-[#0e0c1a]/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProject(project);
                      }}
                      className="px-4 py-2 rounded-xl bg-white text-slate-950 text-xs font-semibold flex items-center gap-1.5 shadow-lg hover:bg-purple-50 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{t.projects.cardDetails}</span>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 
                      onClick={() => setActiveProject(project)}
                      className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors cursor-pointer mb-2 line-clamp-1"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                      {project.summary}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.slice(0, 4).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-[#0b0a14] text-slate-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-slate-500 bg-[#0b0a14] border border-white/5">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Links */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="text-xs font-medium text-purple-300 hover:text-purple-200 transition-colors flex items-center gap-1"
                    >
                      <span>{t.projects.cardOverview}</span>
                      &rarr;
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[#0b0a14] text-slate-400 hover:text-white border border-white/5 hover:border-purple-500/30 transition-colors"
                        title="GitHub Repository"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-purple-500/15 text-purple-300 hover:bg-purple-500/25 border border-purple-500/30 transition-colors"
                        title="Live Preview"
                        aria-label="Live Preview"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal Window for active project */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

      </div>
    </section>
  );
};
