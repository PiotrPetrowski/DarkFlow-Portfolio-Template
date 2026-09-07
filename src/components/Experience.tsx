import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Milestone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>{t.experience.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.experience.heading} <span className="text-purple-400">{t.experience.headingAccent}</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.experience.subheading}
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-purple-500/30 ml-4 sm:ml-8 space-y-12">
          {t.experience.items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#0e0c1a] border-2 border-purple-400 flex items-center justify-center text-purple-300 shadow-md shadow-purple-500/30">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#131124]/60 hover:bg-[#18152e]/90 border border-white/5 hover:border-purple-500/40 transition-all duration-300 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-300 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-500/30">
                    <Calendar className="w-3 h-3" />
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {item.role}
                </h3>
                <div className="text-sm font-semibold text-purple-300/90 mb-4 font-mono">
                  {item.company} &bull; <span className="text-slate-400 font-normal">{item.type}</span>
                </div>

                {/* Achievements List */}
                <div className="space-y-2 mb-6">
                  {item.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies used */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {item.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#0b0a14] text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
