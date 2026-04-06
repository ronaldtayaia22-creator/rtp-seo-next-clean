'use client';

import { ArrowRight } from 'lucide-react';
import { Language, getTranslation } from '@/lib/i18n';

interface ContactFormProps {
  language: Language;
}

const OPERATIONS_BASE_URL = 'https://rtp-ai-orbiter.lovable.app';

const ContactForm = ({ language }: ContactFormProps) => {
  const t = getTranslation(language).contact;
  const operationsPath = language === 'en' ? '/en/automatizacion-ia-navarra' : '/automatizacion-ia-navarra';
  const operationsUrl = `${OPERATIONS_BASE_URL}${operationsPath}`;

  return (
    <div className="space-y-5 text-center">
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
        {language === 'es'
          ? 'Para activar el flujo real de diagnostico y recibir tu evaluacion por email, continua en nuestro entorno operativo seguro.'
          : 'To trigger the real diagnosis flow and receive your evaluation by email, continue in our secure operational environment.'}
      </p>

      <a
        href={operationsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-base hover:shadow-neon transition-all w-full"
      >
        {t.submit}
        <ArrowRight className="w-5 h-5" />
      </a>

      <p className="text-xs text-muted-foreground">
        {language === 'es'
          ? 'Se abrira en una nueva pestana para completar el diagnostico y reservar tu llamada.'
          : 'This opens in a new tab to complete the diagnosis and book your call.'}
      </p>
      <p className="text-xs text-muted-foreground text-center">
        {t.freeDiagnosisDesc} - {t.fastResponseDesc}
      </p>
    </div>
  );
};

export default ContactForm;
