import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Cpu, 
  Zap 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const yParallax1 = useTransform(scrollY, [0, 500], [0, 90]);
  const yParallax2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacityFade = useTransform(scrollY, [0, 400], [1, 0.2]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Dynamic Parallax Background Orbs & Radial Lights */}
      <motion.div 
        style={{ y: yParallax1 }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-br from-purple-600/20 via-indigo-600/15 to-pink-600/10 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div 
        style={{ y: yParallax2 }}
        className="absolute top-1/3 -right-20 w-[420px] h-[420px] bg-violet-500/15 rounded-full blur-3xl pointer-events-none -z-10"
      />

      {/* Cyber Grid Pattern Background */}
      <div 
        className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <motion.div 
            style={{ opacity: opacityFade }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#131124]/90 border border-purple-500/30 text-xs font-mono text-purple-300 mb-6 shadow-lg shadow-purple-500/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              <span>{t.personalInfo.status}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              {t.hero.headingLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                {t.hero.headingLine2}
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
              {t.personalInfo.bioShort}
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mb-9">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-[#131124]/60 p-2.5 rounded-xl border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{t.hero.features.motion}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-[#131124]/60 p-2.5 rounded-xl border border-white/5">
                <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.hero.features.cache}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-[#131124]/60 p-2.5 rounded-xl border border-white/5">
                <Layers className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{t.hero.features.seo}</span>
              </div>
            </div>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-view-projects-btn"
                onClick={() => scrollToSection('projects')}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-purple-500/25 hover:shadow-purple-500/45 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{t.hero.ctaProjects}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-contact-btn"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#131124]/80 hover:bg-[#1a1732] border border-purple-500/30 hover:border-purple-400/60 text-slate-200 hover:text-white font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>{t.hero.ctaContact}</span>
              </button>

              <a
                id="hero-download-cv-btn"
                href="#contact"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-purple-300 text-xs font-mono border border-white/5 transition-colors"
                title="Contact & Resume"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{t.hero.ctaResume}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: High-Tech Parallax Terminal & Code Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Back Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/25 via-indigo-600/25 to-pink-600/20 rounded-3xl blur-xl -z-10" />

            {/* Terminal Window */}
            <div className="rounded-2xl bg-[#0e0c1a]/95 border border-purple-500/20 shadow-2xl backdrop-blur-xl overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#151228]/90 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">{t.hero.terminalTitle}</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                  <Cpu className="w-3 h-3" />
                  <span>{t.hero.terminalBadge}</span>
                </div>
              </div>

              {/* Window Body (Syntax Highlighted Code) */}
              <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto">
                <p className="text-slate-500 mb-2">// Profile Configuration</p>
                
                <div className="space-y-1">
                  <p>
                    <span className="text-purple-400">const</span> <span className="text-indigo-300">candidate</span> = {'{'}
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-300">name</span>: <span className="text-pink-300">'{t.personalInfo.name}'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-300">role</span>: <span className="text-pink-300">'{t.personalInfo.title}'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-300">email</span>: <span className="text-pink-300">'{t.personalInfo.email}'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-300">experience</span>: <span className="text-amber-300">'{t.personalInfo.yearsExperience}'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-300">architecture</span>: <span className="text-emerald-400">'Modern React & TypeScript'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-300">features</span>: [
                  </p>
                  <p className="pl-8 text-pink-300">
                    '{t.hero.features.motion}',
                  </p>
                  <p className="pl-8 text-pink-300">
                    '{t.hero.features.cache}',
                  </p>
                  <p className="pl-8 text-pink-300">
                    '{t.hero.features.seo}'
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-purple-300">readyForHire</span>: <span className="text-emerald-400">true</span>
                  </p>
                  <p>{'}'};</p>
                  <p className="text-purple-400 pt-2 flex items-center gap-1.5">
                    <span className="text-pink-400">&gt;</span> console.log(candidate.status);
                  </p>
                  <p className="text-emerald-400 pl-3">
                    // "{t.personalInfo.status}"
                  </p>
                </div>
              </div>

              {/* Terminal Footer Info Bar */}
              <div className="px-4 py-2.5 bg-[#151228]/60 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  UTF-8 &bull; TypeScript &bull; Obsidian Violet
                </span>
                <span className="text-purple-400/80">Portfolio</span>
              </div>
            </div>

            {/* Floating Parallax Badge */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 p-3.5 rounded-xl bg-[#131124]/95 border border-purple-500/40 shadow-2xl backdrop-blur-md"
            >
              <div className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-xs">
                <span className="font-bold text-white">{t.hero.floatingBadgeTitle}</span>
                <span className="text-slate-400 font-mono text-[10px]">{t.hero.floatingBadgeDesc}</span>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Bottom Metrics Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {t.metrics.map((stat) => (
            <div 
              key={stat.id}
              className="p-5 rounded-2xl bg-[#131124]/60 hover:bg-[#18152e]/80 border border-white/5 hover:border-purple-500/40 transition-all duration-300 group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-indigo-300 font-mono mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-300 group-hover:text-purple-300 transition-colors mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 leading-tight">
                {stat.caption}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
