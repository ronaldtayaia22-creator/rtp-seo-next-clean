'use client';

import Link from '@/components/shared/LocalizedLink';
import { Language } from '@/lib/i18n';
import { ArrowRight, Building2, MapPin, ShoppingBag, Stethoscope, UtensilsCrossed } from 'lucide-react';

interface Props {
  language: Language;
}

const IAEmpresasNavarra = ({ language }: Props) => {
  const isEs = language === 'es';

  const sectors = [
    {
      icon: Stethoscope,
      titleEs: 'Clinicas y centros de salud privados',
      titleEn: 'Clinics and private health centers',
      detailEs: 'Confirmacion de citas, recordatorios y triaje inicial de consultas frecuentes.',
      detailEn: 'Appointment confirmations, reminders and first-line triage for frequent questions.',
    },
    {
      icon: UtensilsCrossed,
      titleEs: 'Restauracion y hosteleria',
      titleEn: 'Restaurants and hospitality',
      detailEs: 'Reservas, respuesta rapida por WhatsApp y soporte en picos de demanda.',
      detailEn: 'Bookings, fast WhatsApp responses and support during demand peaks.',
    },
    {
      icon: ShoppingBag,
      titleEs: 'Comercio y retail',
      titleEn: 'Retail and commerce',
      detailEs: 'Atencion de producto y stock en tiempo real para no perder ventas locales.',
      detailEn: 'Real-time product and stock support to avoid losing local sales.',
    },
  ];

  const localExamples = isEs
    ? [
        'Pamplona: empresas de servicios con carga alta de llamadas y seguimiento comercial irregular.',
        'Comarca de Pamplona: negocios con equipos pequenos que necesitan responder fuera de horario.',
        'Tudela y Ribera: comercios que quieren automatizar consultas repetitivas sin perder cercania.',
      ]
    : [
        'Pamplona: service companies with high call volume and inconsistent sales follow-up.',
        'Pamplona metro area: small teams needing off-hours responses.',
        'Tudela and Ribera: retailers automating repetitive queries while keeping local proximity.',
      ];

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <header className="space-y-5 mb-14 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-primary bg-primary/10 border border-primary/30 rounded-full px-3 py-1">
            <MapPin className="w-3.5 h-3.5" />
            {isEs ? 'Landing local Navarra' : 'Navarra local landing'}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            {isEs
              ? 'IA para empresas en Navarra: soluciones adaptadas a cada sector local'
              : 'AI for businesses in Navarra: solutions adapted to each local sector'}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {isEs
              ? 'Trabajamos con empresas de Pamplona y Navarra que quieren mejorar atencion, operaciones y ventas con un enfoque realista, por fases y con lenguaje de negocio.'
              : 'We work with companies in Pamplona and Navarra that want to improve service, operations and sales with a realistic, phased and business-first approach.'}
          </p>

          <p className="text-muted-foreground leading-relaxed">
            {isEs
              ? <>Si buscas una vision completa de contratacion, revisa nuestros <Link href="/servicios" className="text-primary hover:underline font-medium">servicios de IA para empresas</Link>. Si ya tienes claro el objetivo, podemos empezar por una <Link href="/servicios" className="text-primary hover:underline font-medium">automatizacion con inteligencia artificial</Link> concreta y escalar despues. Tambien puedes ver el enfoque para <Link href="/servicios" className="text-primary hover:underline font-medium">implantar sistemas de IA</Link> sin frenar la operativa diaria.</>
              : <>If you need the complete hiring view, check our <Link href="/servicios" className="text-primary hover:underline font-medium">AI services for businesses</Link>. If your objective is clear, we can start with a specific <Link href="/servicios" className="text-primary hover:underline font-medium">artificial intelligence automation</Link> and scale later. You can also review our approach to <Link href="/servicios" className="text-primary hover:underline font-medium">deploy AI systems</Link> without disrupting day-to-day operations.</>}
          </p>
        </header>

        <section className="mb-14 animate-fade-in-up" style={{ animationDelay: '0.08s' }}>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            {isEs ? 'Sectores con mayor traccion en Navarra' : 'Sectors with strongest traction in Navarra'}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <article key={sector.titleEs} className="holographic-border rounded-xl p-5 space-y-3">
                  <Icon className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-foreground text-sm md:text-base">
                    {isEs ? sector.titleEs : sector.titleEn}
                  </h3>
                  <p className="text-sm text-muted-foreground">{isEs ? sector.detailEs : sector.detailEn}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mb-14 animate-fade-in-up" style={{ animationDelay: '0.12s' }}>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            {isEs ? 'Ejemplos de contexto local' : 'Local context examples'}
          </h2>
          <div className="space-y-3">
            {localExamples.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-border p-4 bg-card/40">
                <Building2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14 animate-fade-in-up" style={{ animationDelay: '0.16s' }}>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            {isEs ? 'Como lo aterrizamos en empresa local' : 'How we operationalize it for local companies'}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              {isEs
                ? 'Primero definimos un caso de uso prioritario con retorno visible en semanas. Luego conectamos el sistema a tus herramientas actuales para que el equipo no tenga que cambiar su forma de trabajar de golpe.'
                : 'First, we define one priority use case with visible return within weeks. Then we connect the system to your current tools so the team does not need to change everything at once.'}
            </p>
            <p>
              {isEs
                ? 'Este enfoque encaja especialmente bien en pymes navarras que necesitan resultados medibles y acompanamiento cercano.'
                : 'This approach fits especially well for Navarra SMEs needing measurable results and close support.'}
            </p>
          </div>
        </section>

        <section className="p-8 rounded-2xl border border-primary/20 bg-primary/5 text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-bold mb-3 text-foreground">
            {isEs ? 'Ver servicios completos para contratacion' : 'See full services for hiring'}
          </h2>
          <p className="text-muted-foreground mb-5 max-w-2xl mx-auto">
            {isEs
              ? 'Esta pagina te da el contexto local. La pagina de servicios concentra el alcance de implantacion, modelo de trabajo y propuesta de contratacion.'
              : 'This page gives you local context. The services page contains implementation scope, working model and hiring proposal.'}
          </p>
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:shadow-neon transition-all"
          >
            {isEs ? 'Ir a servicios de IA para empresas' : 'Go to AI services for businesses'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default IAEmpresasNavarra;
