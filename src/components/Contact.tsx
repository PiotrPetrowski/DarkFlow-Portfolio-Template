import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Check, 
  Copy, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { ContactFormData } from '../types';
import { useLanguage } from '../context/LanguageContext';

const STORAGE_KEY = 'portfolio_contact_draft';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    serviceType: t.contact.form.serviceOptions[0] || '',
    budget: t.contact.form.budgetOptions[1] || '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [draftSaved, setDraftSaved] = useState(false);

  // Load draft from localStorage on mount (Resource & State Caching)
  useEffect(() => {
    try {
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        setFormData((prev) => ({ ...prev, ...parsed }));
        setDraftSaved(true);
      }
    } catch (e) {
      console.warn('Draft restore failed', e);
    }
  }, []);

  // Save draft to localStorage on change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        setDraftSaved(true);
      } catch (err) {
        // ignore storage errors
      }
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate fast async response (0.7s)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Clear cached draft
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (err) {}
    }, 700);
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return Github;
      case 'Linkedin':
        return Linkedin;
      case 'Twitter':
        return Twitter;
      default:
        return Send;
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0e0c1a]/60 border-t border-purple-500/10">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.contact.heading} <span className="text-purple-400">{t.contact.headingAccent}</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contacts & Social Networks */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Direct Contact Cards */}
            <div className="p-6 rounded-2xl bg-[#131124]/60 border border-white/5 space-y-4 shadow-xl">
              <h3 className="text-base font-bold text-white font-mono mb-4 flex items-center justify-between">
                <span>{t.contact.directTitle}</span>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  {t.contact.directStatus}
                </span>
              </h3>

              {/* Email */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0b0a14]/80 border border-white/5 group hover:border-purple-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/15 text-purple-300 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">{t.contact.emailLabel}</div>
                    <div className="text-xs sm:text-sm font-mono text-slate-200">{t.personalInfo.email}</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(t.personalInfo.email, 'email')}
                  className="p-2 rounded-lg text-slate-400 hover:text-purple-300 hover:bg-[#18152e] transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Telegram */}
              {(() => {
                const tg = SOCIAL_LINKS.find((s) => s.id === 'telegram');
                const tgHandle = tg?.handle || '@your-username';
                const tgUrl = tg?.url || 'https://t.me/your-username';
                return (
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0b0a14]/80 border border-white/5 group hover:border-purple-500/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-purple-500/15 text-purple-300 flex items-center justify-center">
                        <Send className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-400">{t.contact.telegramLabel}</div>
                        <div className="text-xs sm:text-sm font-mono text-slate-200">{tgHandle}</div>
                      </div>
                    </div>
                    <a
                      href={tgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-purple-400 hover:text-purple-300 p-2"
                    >
                      Open &rarr;
                    </a>
                  </div>
                );
              })()}

              {/* Phone */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0b0a14]/80 border border-white/5 group hover:border-purple-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/15 text-purple-300 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">{t.contact.phoneLabel}</div>
                    <div className="text-xs sm:text-sm font-mono text-slate-200">{t.personalInfo.phone}</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(t.personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg text-slate-400 hover:text-purple-300 hover:bg-[#18152e] transition-colors"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0b0a14]/80 border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-[#1a1732] text-slate-300 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400">{t.contact.locationLabel}</div>
                  <div className="text-xs sm:text-sm text-slate-200">{t.personalInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Social Networks Integration */}
            <div className="p-6 rounded-2xl bg-[#131124]/60 border border-white/5 shadow-xl">
              <h4 className="text-sm font-bold text-white font-mono mb-4">
                {t.contact.socialsTitle}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = getSocialIcon(link.icon);
                  return (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-[#0b0a14]/80 hover:bg-[#1a1732]/80 border border-white/5 hover:border-purple-500/30 transition-all flex items-center gap-2.5 group"
                    >
                      <div className="p-2 rounded-lg bg-[#141126] text-slate-400 group-hover:text-purple-300 group-hover:bg-purple-500/15 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <div className="text-xs font-semibold text-slate-300 group-hover:text-white truncate">
                          {link.name.replace(/\s*\([^)]*\)$/, '')}
                        </div>
                        <div className="text-[10px] font-mono text-slate-500 truncate">
                          {link.handle}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Animated Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-10 rounded-3xl bg-[#131124]/80 border border-purple-500/20 backdrop-blur-xl shadow-2xl relative">
              
              {/* Draft auto-save indicator badge */}
              {draftSaved && !isSubmitted && (
                <div className="absolute top-6 right-6 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{t.contact.draftCached}</span>
                </div>
              )}

              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {t.contact.successTitle}
                  </h3>
                  <p className="text-slate-400 text-sm max-w-md mb-8">
                    {t.contact.successDesc}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        serviceType: t.contact.form.serviceOptions[0],
                        budget: t.contact.form.budgetOptions[1],
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#1d1936] hover:bg-[#27214a] text-xs font-semibold text-purple-200 border border-purple-500/30 transition-all"
                  >
                    {t.contact.successButton}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label 
                        htmlFor="contact-name"
                        className="block text-xs font-mono text-slate-300 mb-2"
                      >
                        {t.contact.form.nameLabel}
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder={t.contact.form.namePlaceholder}
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0a14] border border-[#231f3d] focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-white text-sm placeholder:text-slate-600 outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="contact-email"
                        className="block text-xs font-mono text-slate-300 mb-2"
                      >
                        {t.contact.form.emailLabel}
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder={t.contact.form.emailPlaceholder}
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0a14] border border-[#231f3d] focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-white text-sm placeholder:text-slate-600 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service & Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label 
                        htmlFor="contact-service"
                        className="block text-xs font-mono text-slate-300 mb-2"
                      >
                        {t.contact.form.serviceLabel}
                      </label>
                      <select
                        id="contact-service"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0a14] border border-[#231f3d] focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-white text-sm outline-none transition-colors"
                      >
                        {t.contact.form.serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label 
                        htmlFor="contact-budget"
                        className="block text-xs font-mono text-slate-300 mb-2"
                      >
                        {t.contact.form.budgetLabel}
                      </label>
                      <select
                        id="contact-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0b0a14] border border-[#231f3d] focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-white text-sm outline-none transition-colors"
                      >
                        {t.contact.form.budgetOptions.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label 
                      htmlFor="contact-message"
                      className="block text-xs font-mono text-slate-300 mb-2"
                    >
                      {t.contact.form.messageLabel}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      placeholder={t.contact.form.messagePlaceholder}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0b0a14] border border-[#231f3d] focus:border-purple-400 focus:ring-1 focus:ring-purple-400 text-white text-sm placeholder:text-slate-600 outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button & Assurance */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-purple-500/25 hover:shadow-purple-500/45 transition-all duration-200 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          <span>{t.contact.form.submittingBtn}</span>
                        </>
                      ) : (
                        <>
                          <span>{t.contact.form.submitBtn}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                      <span>{t.contact.form.responseTime}</span>
                    </div>
                  </div>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
