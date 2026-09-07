import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#080710] border-t border-purple-500/15 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {t.personalInfo.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              {t.footer.description}
            </p>
            <div className="text-[11px] font-mono text-purple-300/80">
              {t.footer.contactLabel} <span className="text-white">{t.personalInfo.email}</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-4">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {t.navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-purple-300 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture & Performance Badges */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-4">
              {t.footer.archTitle}
            </h4>
            <div className="text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{t.footer.cacheActive}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>{t.footer.motionActive}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span>{t.footer.seoActive}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-400" />
                <span>{t.footer.themeActive}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 font-mono">
            <span>&copy; {new Date().getFullYear()} {t.personalInfo.name}.</span>
            <span>{t.footer.copyright}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="footer-back-to-top-btn"
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#141126] hover:bg-[#1d1936] text-slate-300 hover:text-white border border-white/5 transition-colors font-mono text-[11px]"
              aria-label="Back to top"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
