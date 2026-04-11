import { ArrowRight, Sparkles } from 'lucide-react';
import { Language } from '@/lib/i18n';

interface TrustBannerProps {
  language: Language;
}

const TrustBanner = ({ language }: TrustBannerProps) => {
  const isEs = language === 'es';

  return (
    <section className="py-16 border-y border-border/50 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                {isEs ? 'Caso real' : 'Real case'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-glow-primary">
              {isEs
                ? 'Arquitecturas IA implementadas recientemente'
                : 'Recently implemented AI Architectures'}
            </h2>
          </div>

          <div className="p-8 rounded-2xl border border-primary/20 bg-primary/5 space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-foreground">
              WAALS barefoot
            </h3>
            <p className="text-sm font-medium text-primary">
              {isEs ? 'E-commerce · Shopify + IA' : 'E-commerce · Shopify + AI'}
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {isEs
                ? 'Rediseño completo de ecommerce con integración Shopify + agentes IA conversacionales. Arquitectura IA implementada con atención automatizada 24/7, resolución de dudas sobre tallas, envíos y productos, y reducción significativa de carga en el equipo humano.'
                : 'Complete ecommerce redesign with Shopify + conversational AI agents integration. Implemented AI architecture with 24/7 automated support, answering queries about sizes, shipping and products, significantly reducing human team workload.'}
            </p>
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground">{isEs ? 'Atención automática' : 'Automated support'}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">IA</div>
                <div className="text-xs text-muted-foreground">{isEs ? 'Respuestas inmediatas' : 'Instant responses'}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">−40%</div>
                <div className="text-xs text-muted-foreground">{isEs ? 'Consultas manuales' : 'Manual queries'}</div>
              </div>
            </div>
            <div className="pt-4">
              <a
                href={isEs ? '/casos-ia-navarra' : '/en/ai-cases-navarra'}
                className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:shadow-neon transition-all whitespace-nowrap"
              >
                {isEs ? 'Ver proyecto' : 'View project'}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="text-center space-y-4">
            <a
              href={isEs ? '/automatizacion-ia-navarra' : '/en/ai-automation-navarra'}
              className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:shadow-neon transition-all whitespace-nowrap"
            >
              {isEs ? 'Solicitar diagnóstico estratégico' : 'Request strategic diagnosis'}
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-muted-foreground">
              {isEs ? 'Evaluación inicial sin coste' : 'Free initial evaluation'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBanner;
