import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

export const LanguageSelector: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const { language, setLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <div className="w-full">
        <label className="block text-xs font-mono text-slate-400 mb-2 flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-purple-400" />
          <span>Language / Idioma / Sprache / Язык:</span>
        </label>
        <div className="grid grid-cols-2 gap-2">
          {languages.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => handleSelect(l.code)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
                language === l.code
                  ? 'bg-purple-500/20 text-purple-200 border-purple-500/40 shadow-sm'
                  : 'bg-[#131124] text-slate-300 border-white/5 hover:bg-[#1a1732]'
              }`}
            >
              <span>{l.flag}</span>
              <span className="truncate">{l.nativeName}</span>
              {language === l.code && <Check className="w-3.5 h-3.5 ml-auto text-purple-400" />}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        id="language-selector-btn"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#131124]/80 hover:bg-[#1a1732] border border-white/10 hover:border-purple-500/40 text-xs font-medium text-slate-200 transition-all shadow-sm"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        title="Change language / Cambiar idioma / Sprache ändern / Сменить язык"
      >
        <span className="text-sm">{currentLang.flag}</span>
        <span className="font-mono text-xs uppercase text-purple-200">{currentLang.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-purple-300' : ''}`} />
      </button>

      {isOpen && (
        <div 
          id="language-dropdown-menu"
          className="absolute right-0 mt-2 w-44 rounded-2xl bg-[#0e0c1a]/95 border border-purple-500/30 p-1.5 shadow-2xl backdrop-blur-xl z-50 animate-fadeIn"
          role="listbox"
        >
          {languages.map((l) => (
            <button
              key={l.code}
              role="option"
              aria-selected={language === l.code}
              onClick={() => handleSelect(l.code)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                language === l.code
                  ? 'bg-purple-500/20 text-purple-200 font-semibold'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-sm">{l.flag}</span>
                <span>{l.nativeName}</span>
              </div>
              {language === l.code && <Check className="w-3.5 h-3.5 text-purple-400" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
