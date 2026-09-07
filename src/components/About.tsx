import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Gauge, Palette, Search, Layers, Compass, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const iconMap: Record<string, React.ElementType> = {
    Gauge,
    Palette,
    Layers,
    Search
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0e0c1a]/60 border-t border-b border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.about.heading} <span className="text-purple-400">{t.about.headingAccent}</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.personalInfo.bioFull}
          </p>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.features.map((item, index) => {
            const Icon = iconMap[item.icon] || Gauge;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-[#131124]/60 border border-white/5 hover:border-purple-500/40 hover:bg-[#18152e]/90 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-purple-400 transition-colors">
                  <span>Quality Standard</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlights banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#141126] via-[#110e20] to-[#0e0c1a] border border-purple-500/25 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">{t.about.bannerTitle}</h4>
              <p className="text-xs text-slate-400">
                {t.about.bannerDesc}
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-[#1d1936] hover:bg-[#252044] text-xs font-semibold text-purple-200 hover:text-white border border-purple-500/30 transition-all"
          >
            {t.about.bannerCta}
          </a>
        </div>

      </div>
    </section>
  );
};
