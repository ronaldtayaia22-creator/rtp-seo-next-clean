'use client';

import { Language, getTranslation } from '@/lib/i18n';
import { CheckCircle2, Mail, User, Sparkles, ArrowRight } from 'lucide-react';
import Link from '@/components/shared/LocalizedLink';

interface ContactSuccessProps {
  language: Language;
}

const ContactSuccess = ({ language }: ContactSuccessProps) => {
  const t = getTranslation(language).success;

  return (
    <>
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="holographic-border rounded-2xl p-8 md:p-12 text-center animate-fade-in-up">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="holographic-sphere w-32 h-32 flex items-center justify-center">
                  <CheckCircle2 className="w-16 h-16 text-white relative z-10" />
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-glow-primary mb-4">
              {t.title}
            </h1>

            <div className="flex items-center justify-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-primary" />
              <p className="text-xl font-semibold">{t.emailMessage}</p>
            </div>

            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t.emailDescription}
            </p>

            <div className="bg-card/50 border border-border rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold">{t.whatNext}</h2>
              </div>

              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{t.step1}</p>
                </div>
                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{t.step2}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{t.step3}</p>
                </div>
              </div>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-neon transition-all"
            >
              {t.backButton}
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="pt-6 space-y-3">
              <p className="text-sm font-medium text-foreground">
                {language === 'es' ? 'Mientras tanto, explora:' : 'In the meantime, explore:'}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href={language === 'es' ? '/servicios' : '/services'}
                  className="text-sm text-primary font-medium hover:underline underline-offset-2"
                >
                  {language === 'es' ? 'Nuestros servicios →' : 'Our services →'}
                </Link>
                <Link
                  href="/casos-ia-navarra"
                  className="text-sm text-primary font-medium hover:underline underline-offset-2"
                >
                  {language === 'es' ? 'Caso de éxito →' : 'Success story →'}
                </Link>
                <Link
                  href="/diagnostico-ia-navarra"
                  className="text-sm text-primary font-medium hover:underline underline-offset-2"
                >
                  {language === 'es' ? 'Diagnóstico IA →' : 'AI Diagnosis →'}
                </Link>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              {t.thanksMessage}
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactSuccess;
