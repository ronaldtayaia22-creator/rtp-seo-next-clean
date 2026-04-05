'use client';

import { ArrowRight } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="text-center space-y-6">
      <p className="text-muted-foreground">
        Completa el formulario para recibir tu diagnóstico estratégico personalizado.
      </p>
      <a
        href={`${process.env.NEXT_PUBLIC_LOVABLE_URL || 'https://rtpdigitalsolutions.lovable.app'}/automatizacion-ia-navarra`}
        className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-base hover:shadow-neon transition-all w-full"
      >
        Solicitar diagnóstico estratégico
        <ArrowRight className="w-5 h-5" />
      </a>
      <p className="text-xs text-muted-foreground">
        Evaluación inicial sin coste · Respuesta en 24h
      </p>
    </div>
  );
};

export default ContactForm;
