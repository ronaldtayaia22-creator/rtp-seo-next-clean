'use client';

import CaseStorytelling from '@/components/shared/CaseStorytelling';
import Link from '@/components/shared/LocalizedLink';
import { Language } from '@/lib/i18n';

interface CasesProps {
  language: Language;
}

const Cases = ({ language }: CasesProps) => {
  const isEs = language === 'es';

  return (
    <div className="min-h-screen pt-20">
      <section className="container mx-auto px-4 pt-12 pb-8 text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-glow-primary">
          {isEs ? 'Casos de éxito de inteligencia artificial en Navarra' : 'Artificial intelligence success cases in Navarra'}
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          {isEs
            ? 'Implementaciones reales para empresas que automatizan procesos, mejoran la atención al cliente y escalan con sistemas de IA conectados.'
            : 'Real implementations for businesses automating processes, improving customer service and scaling with connected AI systems.'}
        </p>
      </section>

      <CaseStorytelling language={language} />

      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto text-center rounded-2xl border border-primary/30 bg-primary/10 p-8 space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            {isEs ? '¿Quieres aplicar esta arquitectura en tu empresa?' : 'Want this architecture in your business?'}
          </h2>
          <p className="text-muted-foreground">
            {isEs
              ? 'Solicita un diagnóstico estratégico y te diremos qué implementar primero para generar resultados reales en Navarra.'
              : 'Request a strategic diagnosis and we will tell you what to implement first to generate real results in Navarra.'}
          </p>
          <Link
            href="/diagnostico-ia-navarra"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:shadow-neon transition-all"
          >
            {isEs ? 'Solicitar diagnóstico estratégico' : 'Request strategic diagnosis'}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Cases;
