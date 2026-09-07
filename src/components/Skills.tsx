import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Server, Zap, Cpu, Award, CheckCircle2, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [activeGroupId, setActiveGroupId] = useState<string>('frontend');

  const getGroupIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return Code;
      case 'Server':
        return Server;
      case 'Zap':
        return Zap;
      case 'Cpu':
        return Cpu;
      default:
        return Award;
    }
  };

  const activeGroup = t.skills.groups.find((g) => g.id === activeGroupId) || t.skills.groups[0];
  const IconComponent = getGroupIcon(activeGroup.iconName);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0e0c1a]/60 border-t border-b border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.skills.heading} <span className="text-purple-400">{t.skills.headingAccent}</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.skills.subheading}
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {t.skills.groups.map((group) => {
            const GroupIcon = getGroupIcon(group.iconName);
            const isActive = activeGroup.id === group.id;
            return (
              <button
                key={group.id}
                id={`skill-group-btn-${group.id}`}
                type="button"
                onClick={() => setActiveGroupId(group.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-center gap-3.5 ${
                  isActive
                    ? 'bg-gradient-to-br from-purple-950/80 to-indigo-950/80 border-purple-500/50 shadow-lg shadow-purple-500/15'
                    : 'bg-[#131124]/40 border-white/5 hover:bg-[#18152e]/80 hover:border-white/10'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  isActive ? 'bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/30' : 'bg-[#1a1732] text-slate-400'
                }`}>
                  <GroupIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-xs sm:text-sm font-semibold leading-snug line-clamp-1 ${
                    isActive ? 'text-white' : 'text-slate-300'
                  }`}>
                    {group.title.replace(/\s*\([^)]*\)$/, '')}
                  </h3>
                  <span className="text-[10px] font-mono text-purple-300/80">
                    {group.skills.length} skills
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Group Details Card */}
        <div className="rounded-3xl bg-[#131124]/80 border border-purple-500/20 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-300 flex items-center justify-center">
                <IconComponent className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">{activeGroup.title}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{activeGroup.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-purple-300 bg-purple-950/60 px-3 py-1.5 rounded-xl border border-purple-500/30 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.skills.metricsTitle}</span>
            </div>
          </div>

          {/* Skills Progress Bar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {activeGroup.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-slate-200 flex items-center gap-2">
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    )}
                    {skill.name}
                  </span>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-slate-400 text-[11px]">{skill.experienceYears}</span>
                    <span className="text-purple-300 font-bold">{skill.level}%</span>
                  </div>
                </div>

                {/* Meter Bar Container */}
                <div className="h-2 w-full bg-[#0b0a14] rounded-full overflow-hidden p-0.5 border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.04 }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 shadow-sm shadow-purple-500/30"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quality Assurance Note */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-2 font-mono">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              {t.skills.footerNote}
            </span>
            <span className="font-mono text-purple-300/90 text-[11px]">
              Resource Caching & SEO Active
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
