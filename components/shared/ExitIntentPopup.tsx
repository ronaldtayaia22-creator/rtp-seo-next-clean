'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { Language, getTranslation } from '@/lib/i18n';

interface ExitIntentPopupProps {
  language: Language;
}

const ExitIntentPopup = ({ language }: ExitIntentPopupProps) => {
  const [show, setShow] = useState(false);
  const t = getTranslation(language).exitPopup;

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0) {
      const dismissed = sessionStorage.getItem('exitPopupDismissed');
      if (!dismissed) {
        setShow(true);
      }
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem('exitPopupDismissed', 'true');
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={dismiss}
      />

      <div className="relative z-10 max-w-md w-full holographic-border rounded-2xl p-8 space-y-6 animate-fade-in-up">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-3">
          <p className="text-4xl">🎯</p>
          <h3 className="text-2xl font-bold text-glow-primary">{t.title}</h3>
          <p className="text-muted-foreground">{t.description}</p>
        </div>

        <div className="space-y-3">
          <a
            href={language === 'es' ? '/diagnostico-ia-navarra' : '/en/ai-automation-navarra'}
            onClick={dismiss}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:shadow-neon transition-all"
          >
            {t.cta}
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => {
              dismiss();
              const chatBar = document.querySelector('[data-chat-trigger]') as HTMLElement;
              chatBar?.click();
            }}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-secondary/10 border border-secondary/30 text-secondary rounded-lg font-bold text-sm hover:bg-secondary/20 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            {language === 'es' ? 'Probar Centro Inteligente' : 'Try the AI Center'}
          </button>
        </div>

        <p className="text-xs text-center text-muted-foreground">{t.trust}</p>
      </div>
    </div>
  );
};

export default ExitIntentPopup;

