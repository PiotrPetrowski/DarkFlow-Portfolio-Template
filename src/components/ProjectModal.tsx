import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, TrendingUp, Calendar, Tag } from 'lucide-react';
import { Project } from '../types';
import { OptimizedImage } from './OptimizedImage';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        id="project-modal-card"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0e0c1a] border border-purple-500/20 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="project-modal-close-btn"
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#16132b] text-slate-400 hover:text-white hover:bg-[#201c3d] border border-white/10 transition-colors z-10"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/15 text-purple-300 border border-purple-500/30">
            {project.categoryLabel}
          </span>
          <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
            <Calendar className="w-3.5 h-3.5" />
            {project.year}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          {project.title}
        </h3>

        {/* Optimized Image Banner */}
        <div className="rounded-2xl overflow-hidden border border-white/10 mb-6 shadow-lg">
          <OptimizedImage
            src={project.image}
            alt={project.title}
            aspectRatio="aspect-video"
            priority={true}
          />
        </div>

        {/* Description */}
        <div className="mb-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p className="mb-3">{project.description}</p>
          <p className="text-slate-400 text-xs font-mono">
            {t.projects.modalDisclaimer}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-[#141126] border border-white/5 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/15 text-purple-300">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400">{m.label}</div>
                <div className="text-xs sm:text-sm font-bold text-white font-mono">{m.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features List */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 font-mono">
            {t.projects.modalFeaturesTitle}
          </h4>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Tags */}
        <div className="mb-8">
          <h4 className="text-xs font-mono text-slate-400 mb-2 flex items-center gap-1.5">
            <Tag className="w-3.5 h-3.5" />
            {t.projects.modalStackTitle}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span 
                key={i}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#141126] text-slate-300 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-white/10">
          <a
            id="modal-github-link"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141126] hover:bg-[#1d1936] text-slate-300 hover:text-white border border-white/10 text-xs font-medium transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>{t.projects.modalSource}</span>
          </a>
          <a
            id="modal-live-link"
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-purple-500/25 transition-all"
          >
            <span>{t.projects.modalLive}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
