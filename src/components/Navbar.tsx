import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight, Github, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <>
      <header 
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0b0a14]/90 backdrop-blur-xl border-b border-purple-500/15 shadow-2xl shadow-black/50 py-3.5' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            id="brand-logo-link"
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 via-indigo-500/20 to-pink-500/10 border border-purple-500/40 flex items-center justify-center text-purple-300 group-hover:border-purple-400 group-hover:scale-105 transition-all duration-300 shadow-sm shadow-purple-500/15">
              <Terminal className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white flex items-center gap-2">
                {t.personalInfo.name}
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for work" />
              </span>
              <span className="text-[11px] font-mono text-purple-300/90 tracking-wide uppercase">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" aria-label="Main navigation" className="hidden md:flex items-center gap-1 bg-[#131124]/70 p-1.5 rounded-full border border-purple-500/15 backdrop-blur-md">
            {t.navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600/30 to-indigo-600/30 text-purple-200 border border-purple-400/40 shadow-sm shadow-purple-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Controls, Language Switcher & CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Multi-language Selector */}
            <LanguageSelector />

            <a
              id="nav-github-link"
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#131124]/80 hover:bg-[#1a1732] border border-white/5 hover:border-purple-500/40 text-slate-400 hover:text-purple-300 transition-all duration-200"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="nav-telegram-link"
              href="https://t.me/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#131124]/80 hover:bg-[#1a1732] border border-white/5 hover:border-purple-500/40 text-slate-400 hover:text-purple-300 transition-all duration-200"
              aria-label="Telegram"
              title="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>

            <a
              id="nav-cta-contact-btn"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.navCta}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Controls (Language + Hamburger) */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSelector />
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#131124]/80 text-slate-300 hover:text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-nav-menu" className="md:hidden border-b border-purple-500/20 bg-[#0e0c1a]/98 backdrop-blur-2xl px-6 py-6 animate-fadeIn">
            
            <nav className="flex flex-col gap-2 mb-6">
              {t.navigation.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    id={`mobile-link-${item.id}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-purple-500/20 text-purple-200 border border-purple-500/30'
                        : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-4">
              <LanguageSelector isMobile={true} />

              <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-2">
                <span>Status:</span>
                <span className="text-emerald-400">{t.personalInfo.status}</span>
              </div>

              <a
                id="mobile-contact-cta"
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 text-white text-sm font-semibold shadow-lg shadow-purple-500/25"
              >
                {t.navCta}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
