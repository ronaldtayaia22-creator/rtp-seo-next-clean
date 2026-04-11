'use client';

import { ArrowRight } from 'lucide-react';
import { Language, getTranslation } from '@/lib/i18n';

interface ContactFormProps {
  language: Language;
}

const ContactForm = ({ language }: ContactFormProps) => {
  const t = getTranslation(language).contact;
  const operationsPath = language === 'en' ? '/en/ai-automation-navarra' : '/automatizacion-ia-navarra';

  return (
    <div className="space-y-5 text-center">
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
        {language === 'es'
          ? 'Para activar el flujo real de diagnostico y recibir tu evaluacion por email, continua en nuestro entorno operativo seguro.'
          : 'To trigger the real diagnosis flow and receive your evaluation by email, continue in our secure operational environment.'}
      </p>

      <a
        href={operationsPath}
        className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-base hover:shadow-neon transition-all w-full"
      >
        {t.submit}
        <ArrowRight className="w-5 h-5" />
      </a>

      <p className="text-xs text-muted-foreground">
        {language === 'es'
          ? 'Continua al flujo operativo para completar el diagnostico y reservar tu llamada.'
          : 'Continue to the operational flow to complete the diagnosis and book your call.'}
      </p>
      <p className="text-xs text-muted-foreground text-center">
        {t.freeDiagnosisDesc} - {t.fastResponseDesc}
      </p>
    </div>
  );
};

export default ContactForm;
