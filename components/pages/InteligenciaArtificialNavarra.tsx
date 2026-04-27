'use client';

import Link from '@/components/shared/LocalizedLink';
import { Language } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, CalendarClock, AlertTriangle, Map, CheckCircle2 } from 'lucide-react';

interface Props {
  language: Language;
}

const InteligenciaArtificialNavarra = ({ language }: Props) => {
  const isEs = language === 'es';

  const adoptionSignals = isEs
    ? [
        'Tu equipo dedica demasiadas horas a tareas repetitivas de seguimiento o atencion.',
        'Pierdes oportunidades por respuestas tardias o por falta de trazabilidad comercial.',
        'Tienes herramientas sueltas sin flujo unificado entre web, CRM y operacion.',
      ]
    : [
        'Your team spends too many hours on repetitive support or follow-up tasks.',
        'You lose opportunities due to delayed responses or missing sales traceability.',
        'You have disconnected tools without a unified flow between website, CRM and operations.',
      ];

  const commonErrors = isEs
    ? [
        'Comprar herramientas sin definir proceso, objetivo y responsable interno.',
        'Intentar automatizar todo a la vez y bloquear al equipo operativo.',
        'Medir solo actividad tecnica y no impacto en conversion, tiempos o costes.',
        'No definir criterios de calidad para respuestas y escalado a personas.',
      ]
    : [
        'Buying tools without defining process, objective and internal owner.',
        'Trying to automate everything at once and blocking operations.',
        'Measuring only technical activity, not impact on conversion, time or cost.',
        'No quality criteria for responses and human handoff.',
      ];

  const roadmap = [
    {
      es: 'Fase 1: Diagnostico de procesos y prioridad de negocio.',
      en: 'Phase 1: Process diagnosis and business priority.',
    },
    {
      es: 'Fase 2: Piloto acotado con alcance claro y metricas acordadas.',
      en: 'Phase 2: Scoped pilot with clear scope and agreed metrics.',
    },
    {
      es: 'Fase 3: Integracion con operacion real (CRM, agenda, seguimiento).',
      en: 'Phase 3: Integration into real operations (CRM, calendar, follow-up).',
    },
    {
      es: 'Fase 4: Escalado por sprints y mejora continua mensual.',
      en: 'Phase 4: Sprint-based scaling and monthly continuous improvement.',
    },
  ];

  return (
    <main className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <header className="space-y-5 mb-14 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-bold text-glow-primary leading-tight">
            {isEs
              ? 'Inteligencia artificial en Navarra: guia practica para empresas'
              : 'Artificial intelligence in Navarra: practical guide for businesses'}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {isEs
              ? 'Esta pagina es informativa: explica que es la IA aplicada a empresa, cuando tiene sentido implantarla y como evitar errores frecuentes en la adopcion.'
              : 'This page is informational: it explains what business AI is, when to deploy it, and how to avoid common adoption mistakes.'}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {isEs
              ? <>Si quieres pasar de la teoria a una implantacion real, revisa los <Link href="/servicios" className="text-primary hover:underline font-medium">servicios de IA para empresas en Navarra</Link>.</>
              : <>If you want to move from theory to real implementation, review our <Link href="/servicios" className="text-primary hover:underline font-medium">AI services for businesses in Navarra</Link>.</>}
          </p>
        </header>

        <section className="mb-14 animate-fade-in-up" style={{ animationDelay: '0.08s' }}>
          <div className="flex items-center gap-3 mb-4 text-primary">
            <BookOpen className="w-5 h-5" />
            <h2 className="text-2xl font-semibold text-foreground">
              {isEs ? 'Que es la IA aplicada a empresas' : 'What AI applied to businesses means'}
            </h2>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              {isEs
                ? 'No es solo un chatbot. Es una capa de decision y automatizacion que conecta canales de entrada, operaciones internas y seguimiento comercial.'
                : 'It is not just a chatbot. It is a decision and automation layer connecting inbound channels, internal operations and commercial follow-up.'}
            </p>
            <p>
              {isEs
                ? 'Cuando se diseña como sistema, la IA reduce friccion operativa y mejora la velocidad de respuesta en puntos criticos del negocio.'
                : 'When designed as a system, AI reduces operational friction and improves response speed in critical business points.'}
            </p>
          </div>
        </section>

        <section className="mb-14 animate-fade-in-up" style={{ animationDelay: '0.12s' }}>
          <div className="flex items-center gap-3 mb-4 text-primary">
            <CalendarClock className="w-5 h-5" />
            <h2 className="text-2xl font-semibold text-foreground">
              {isEs ? 'Cuando implementarla' : 'When to implement it'}
            </h2>
          </div>
          <div className="space-y-3">
            {adoptionSignals.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-border p-4 bg-card/40">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 animate-fade-in-up" style={{ animationDelay: '0.16s' }}>
          <div className="flex items-center gap-3 mb-4 text-primary">
            <AlertTriangle className="w-5 h-5" />
            <h2 className="text-2xl font-semibold text-foreground">
              {isEs ? 'Errores comunes en adopcion' : 'Common adoption mistakes'}
            </h2>
          </div>
          <div className="space-y-3">
            {commonErrors.map((item) => (
              <div key={item} className="rounded-lg border border-border p-4 bg-card/40">
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-3 mb-4 text-primary">
            <Map className="w-5 h-5" />
            <h2 className="text-2xl font-semibold text-foreground">
              {isEs ? 'Roadmap de adopcion recomendado' : 'Recommended adoption roadmap'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {roadmap.map((step) => (
              <article key={step.es} className="holographic-border rounded-xl p-5">
                <p className="text-sm text-muted-foreground">{isEs ? step.es : step.en}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="p-8 rounded-2xl border border-primary/20 bg-primary/5 text-center space-y-4 animate-fade-in-up" style={{ animationDelay: '0.24s' }}>
          <h2 className="text-2xl font-bold text-foreground">
            {isEs ? 'Siguiente paso recomendado' : 'Recommended next step'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {isEs
              ? 'Si ya tienes claridad sobre objetivos, ve a la pagina principal de servicios para definir alcance y propuesta de implantacion.'
              : 'If your goals are already clear, go to the main services page to define scope and implementation proposal.'}
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link href="/servicios">
              {isEs ? 'Ir a servicios de IA para empresas' : 'Go to AI services for businesses'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground">
            {isEs ? 'O si prefieres hablar con el equipo, ' : 'Or if you prefer talking to the team, '}
            <Link href="/diagnostico-ia-navarra" className="text-primary hover:underline font-medium">
              {isEs ? 'contactar para un diagnostico inicial' : 'contact us for an initial diagnosis'}
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
};

export default InteligenciaArtificialNavarra;
