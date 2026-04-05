import { ArrowRight, Sparkles } from 'lucide-react';
import { Language } from '@/lib/i18n';

interface HeroProps {
  language: Language;
}

const Hero = ({ language }: HeroProps) => {
  const isEs = language === 'es';

  const badge = isEs
    ? 'Agentes de IA y automatización empresarial en Navarra'
    : 'AI agents and business automation in Navarra';

  const h1 = isEs
    ? 'Agentes de Inteligencia Artificial en Navarra para automatizar empresas'
    : 'AI Agents in Navarra to automate businesses';

  const subtitle = isEs
    ? 'Diseñamos agentes de inteligencia artificial en Navarra integrados en tu web para captar oportunidades, responder consultas y automatizar tareas clave del negocio.'
    : 'We design AI agents in Navarra integrated into your website to capture opportunities, answer queries and automate key business tasks.';

  const supportText = isEs
    ? 'Conectamos tu operativa con herramientas como CRM, WhatsApp y sistemas internos para convertir tu empresa en un sistema inteligente que funciona 24/7.'
    : 'We connect your operations with tools like CRM, WhatsApp and internal systems to turn your business into an intelligent system that works 24/7.';

  const differentiator = isEs
    ? 'También implementamos soluciones para empresas de Pamplona que necesitan atención automatizada, captación y eficiencia operativa.'
    : 'We also implement solutions for businesses in Pamplona that need automated support, lead capture and operational efficiency.';

  const trustLine = isEs
    ? 'Implementaciones reales · Integración de sistemas · Automatización orientada a negocio'
    : 'Real implementations · Systems integration · Business-oriented automation';

  const metrics = isEs
    ? [
        { value: '24/7', label: 'Atención automatizada' },
        { value: '✓',    label: 'Integraciones reales' },
        { value: '↑',    label: 'Captación de oportunidades' },
        { value: '⚙',    label: 'Eficiencia operativa' },
      ]
    : [
        { value: '24/7', label: 'Automated support' },
        { value: '✓',    label: 'Real integrations' },
        { value: '↑',    label: 'Opportunity capture' },
        { value: '⚙',    label: 'Operational efficiency' },
      ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-background.png"
          alt="AI and Human connection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/65 to-background" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary animate-glow-pulse" />
            <span className="text-sm text-primary font-medium">{badge}</span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight animate-fade-in-up">
            <span className="block text-glow-primary">{h1}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in-up leading-snug max-w-3xl mx-auto" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>

          {/* Differentiator */}
          <p className="text-sm md:text-base font-medium text-primary/80 max-w-2xl mx-auto animate-fade-in-up leading-relaxed italic" style={{ animationDelay: '0.15s' }}>
            {differentiator}
          </p>

          {/* Support text */}
          <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            {supportText}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
            <a
              href={`${process.env.NEXT_PUBLIC_LOVABLE_URL || 'https://rtpdigitalsolutions.lovable.app'}/automatizacion-ia-navarra`}
              className="group inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:shadow-neon transition-all whitespace-nowrap"
            >
              {isEs ? 'Solicitar diagnóstico estratégico' : 'Request strategic diagnosis'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`${process.env.NEXT_PUBLIC_LOVABLE_URL || 'https://rtpdigitalsolutions.lovable.app'}${isEs ? '/servicios' : '/services'}`}
              className="inline-flex items-center px-5 py-3 rounded-lg font-bold text-sm border border-primary/30 text-primary hover:bg-primary/10 transition-all whitespace-nowrap"
            >
              {isEs ? 'Ver servicios de IA' : 'View AI services'}
            </a>
          </div>

          {/* Trust line */}
          <p className="text-xs text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
            {trustLine}
          </p>

          {/* KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up pt-4" style={{ animationDelay: '0.6s' }}>
            {metrics.map((m, i) => (
              <div key={i} className="space-y-1 text-center">
                <div className="text-3xl md:text-4xl font-bold text-glow-primary">{m.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground leading-snug">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;

