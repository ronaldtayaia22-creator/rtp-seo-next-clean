'use client';

import { ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Language, getTranslation } from '@/lib/i18n';

interface StickyMobileCTAProps {
  language: Language;
}

const StickyMobileCTA = ({ language }: StickyMobileCTAProps) => {
  const t = getTranslation(language).hero;
  const pathname = usePathname();

  const basePath = pathname.startsWith('/en/')
    ? pathname.slice(3)
    : pathname === '/en' ? '/' : pathname;

  const ctaHref =
    basePath === '/ia-empresas-pamplona'
      ? (language === 'es' ? '/diagnostico-ia-navarra' : '/en/diagnosis-ai-navarra')
      : (language === 'es' ? '/automatizacion-ia-navarra' : '/en/ai-automation-navarra');

  if (basePath === '/diagnostico-ia-navarra' || basePath === '/automatizacion-ia-navarra' || basePath === '/contact-success') {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-lg border-t border-border p-3">
      <a
        href={ctaHref}
        className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-sm transition-all w-full"
      >
        {t.cta}
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default StickyMobileCTA;
