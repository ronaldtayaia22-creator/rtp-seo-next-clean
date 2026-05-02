'use client';

import { Language } from '@/lib/i18n';
import Link from '@/components/shared/LocalizedLink';
import { ArrowRight, CheckCircle2, Workflow, Layers3, LineChart, Wallet, HelpCircle } from 'lucide-react';

interface ServicesProps {
  language: Language;
}

const Services = ({ language }: ServicesProps) => {
  const isEs = language === 'es';

  const process = [
    {
      titleEs: '1) Diagnóstico de negocio y priorización',
      titleEn: '1) Business diagnosis and prioritization',
      descEs: 'Analizamos objetivo comercial, procesos críticos y coste operativo actual para decidir qué implantar primero.',
      descEn: 'We assess commercial goals, critical workflows and current operating cost to decide what to implement first.',
    },
    {
      titleEs: '2) Implementación por sprints',
      titleEn: '2) Sprint-based implementation',
      descEs: 'Construimos y conectamos automatizaciones, agentes y reglas de operación con un alcance cerrado en cada sprint.',
      descEn: 'We build and connect automations, agents and operating rules with a fixed scope per sprint.',
    },
    {
      titleEs: '3) Medición y optimización continua',
      titleEn: '3) Measurement and continuous optimization',
      descEs: 'Revisamos métricas de conversión, tiempos y carga operativa para mejorar cada mes el sistema implantado.',
      descEn: 'We review conversion metrics, response times and operational load to improve the implemented system every month.',
    },
  ];

  const systemIncludes = isEs
    ? [
        'Captación y cualificación de oportunidades desde web, WhatsApp y formularios.',
        'Atención automática con contexto de negocio y escalado a equipo humano cuando corresponde.',
        'Automatización de operaciones internas: CRM, agenda, tareas, seguimiento y reporting.',
        'Base de conocimiento operativa (RAG) para respuestas consistentes y decisiones rápidas.',
        'Panel de control con indicadores de respuesta, productividad y oportunidad comercial.',
      ]
    : [
        'Opportunity capture and qualification from website, WhatsApp and forms.',
        'Automated support with business context and human handoff when needed.',
        'Internal operations automation: CRM, calendar, tasks, follow-up and reporting.',
        'Operational knowledge base (RAG) for consistent responses and faster decisions.',
        'Control dashboard with response, productivity and pipeline indicators.',
      ];

  const expectedResults = isEs
    ? [
        'Clínicas y negocios de cita previa: menos huecos en agenda y menor carga administrativa.',
        'Comercios y ecommerce: atención inmediata sobre producto, stock y estado de pedido.',
        'Empresas de servicios: mayor velocidad en seguimiento comercial y menos tareas manuales.',
      ]
    : [
        'Clinics and appointment-based businesses: fewer empty slots and lower admin load.',
        'Retail and ecommerce: instant support on product, stock and order status.',
        'Service companies: faster sales follow-up and fewer manual tasks.',
      ];

  const pricingModel = isEs
    ? [
        'Diagnóstico inicial: alcance, prioridad y hoja de ruta con entregable ejecutivo.',
        'Implementación: trabajo por sprints con objetivos cerrados por fase.',
        'Operación mensual: soporte, mejora continua y evolución del sistema.',
      ]
    : [
        'Initial diagnosis: scope, priority and roadmap with executive deliverable.',
        'Implementation: sprint-based work with fixed objectives by phase.',
        'Monthly operations: support, continuous improvement and system evolution.',
      ];

  const businessOutcomes = isEs
    ? [
        {
          title: 'Más clientes cualificados',
          desc: 'Automatización de captación y filtrado para reducir tiempo perdido en leads no válidos y priorizar oportunidades reales.',
        },
        {
          title: 'Más citas y conversiones',
          desc: 'Recordatorios, seguimiento automático y atención inmediata para aumentar cierres y mejorar la continuidad comercial.',
        },
        {
          title: 'Menos carga operativa',
          desc: 'Automatización de tareas repetitivas para liberar tiempo del equipo y centrar recursos en ventas y operación estratégica.',
        },
      ]
    : [
        {
          title: 'More qualified leads',
          desc: 'Automated lead capture and filtering to reduce time lost on low-quality contacts and prioritize real opportunities.',
        },
        {
          title: 'More appointments and conversions',
          desc: 'Automated reminders, follow-up, and immediate support to increase closes and improve commercial continuity.',
        },
        {
          title: 'Less operational workload',
          desc: 'Automation of repetitive tasks to free team time and focus resources on sales and strategic operations.',
        },
      ];

  const faq = [
    {
      qEs: '¿Cuánto tarda en estar operativo el sistema?',
      qEn: 'How long does it take to go live?',
      aEs: 'Normalmente entre 3 y 8 semanas según el alcance del primer sprint.',
      aEn: 'Usually between 3 and 8 weeks depending on first sprint scope.',
    },
    {
      qEs: '¿Podemos empezar por una parte y escalar después?',
      qEn: 'Can we start small and scale later?',
      aEs: 'Sí. Definimos un primer caso de alto impacto y ampliamos por fases.',
      aEn: 'Yes. We start with a high-impact use case and expand in phases.',
    },
    {
      qEs: '¿Quién mantiene el sistema una vez implantado?',
      qEn: 'Who maintains the system after implementation?',
      aEs: 'Podemos operar nosotros o formar a tu equipo con un modelo mixto.',
      aEn: 'We can run it or train your team under a hybrid model.',
    },
    {
      qEs: '¿Qué necesito para contratar?',
      qEn: 'What do I need to hire this service?',
      aEs: 'Solo una sesión de diagnóstico para revisar procesos, datos y objetivos.',
      aEn: 'Only a diagnosis session to review workflows, data and goals.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: isEs ? item.qEs : item.qEn,
      acceptedAnswer: {
        '@type': 'Answer',
        text: isEs ? item.aEs : item.aEn,
      },
    })),
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4">
        <header className="max-w-4xl mx-auto text-center space-y-5 mb-14 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-bold text-glow-primary">
            {isEs
              ? 'Servicios de IA para empresas en Navarra'
              : 'AI services for businesses in Navarra'}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            {isEs
              ? 'Diseñamos e implantamos sistemas completos de inteligencia artificial orientados a conversión, operación y crecimiento sostenible.'
              : 'We design and implement complete AI systems focused on conversion, operations and sustainable growth.'}
          </p>
          <p className="text-sm text-muted-foreground/90 max-w-2xl mx-auto">
            {isEs
              ? 'Si quieres contexto local, revisa la guía de '
              : 'If you need local context, review the guide for '}
            <Link href="/ia-empresas-navarra" className="text-primary hover:underline underline-offset-2 font-medium">
              {isEs ? 'IA para empresas en Navarra' : 'AI for businesses in Navarra'}
            </Link>
            {isEs ? ' y la página informativa de ' : ' and the informational page on '}
            <Link href="/inteligencia-artificial-navarra" className="text-primary hover:underline underline-offset-2 font-medium">
              {isEs ? 'inteligencia artificial en Navarra' : 'artificial intelligence in Navarra'}
            </Link>
            .
          </p>
          <Link
            href="/diagnostico-ia-navarra"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:shadow-neon transition-all"
          >
            {isEs ? 'Solicitar propuesta y diagnóstico' : 'Request proposal and diagnosis'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </header>

        <div className="max-w-6xl mx-auto space-y-8">
          <section className="holographic-border rounded-2xl p-7 md:p-10 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.08s' }}>
            <div className="flex items-center gap-3 text-primary">
              <Workflow className="w-6 h-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {isEs ? 'Como trabajamos' : 'How we work'}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {process.map((step, index) => (
                <div key={step.titleEs} className="rounded-xl border border-border/80 bg-card/40 p-5 space-y-3">
                  <span className="text-xs font-semibold tracking-wide text-primary">{isEs ? `Paso ${index + 1}` : `Step ${index + 1}`}</span>
                  <h3 className="font-semibold text-foreground">{isEs ? step.titleEs : step.titleEn}</h3>
                  <p className="text-sm text-muted-foreground">{isEs ? step.descEs : step.descEn}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="holographic-border rounded-2xl p-7 md:p-10 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.12s' }}>
            <div className="flex items-center gap-3 text-primary">
              <Layers3 className="w-6 h-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {isEs ? 'Que incluye el sistema' : 'What the system includes'}
              </h2>
            </div>
            <ul className="grid md:grid-cols-2 gap-3">
              {systemIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground rounded-lg border border-border/70 p-4 bg-card/30">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="holographic-border rounded-2xl p-7 md:p-10 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.16s' }}>
            <div className="flex items-center gap-3 text-primary">
              <LineChart className="w-6 h-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {isEs ? 'Resultados esperados y casos tipo' : 'Expected results and typical cases'}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {expectedResults.map((item) => (
                <div key={item} className="rounded-xl border border-border/80 bg-card/40 p-5 text-sm text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="holographic-border rounded-2xl p-7 md:p-10 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.18s' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {isEs ? 'Qué resultados puedes esperar al implementar IA' : 'What results you can expect when implementing AI'}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {businessOutcomes.map((item) => (
                <article key={item.title} className="rounded-xl border border-border/80 bg-card/40 p-5 space-y-2">
                  <h3 className="font-semibold text-foreground text-base">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="holographic-border rounded-2xl p-7 md:p-10 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 text-primary">
              <Wallet className="w-6 h-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {isEs ? 'Modelo de trabajo y pricing orientativo' : 'Working model and indicative pricing'}
              </h2>
            </div>
            <ul className="space-y-3">
              {pricingModel.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="holographic-border rounded-2xl p-7 md:p-10 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.24s' }}>
            <div className="flex items-center gap-3 text-primary">
              <HelpCircle className="w-6 h-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {isEs ? 'FAQ de contratacion' : 'Hiring FAQ'}
              </h2>
            </div>
            <div className="space-y-4">
              {faq.map((item) => (
                <article key={item.qEs} className="rounded-lg border border-border/70 p-4 bg-card/30">
                  <h3 className="font-semibold text-foreground text-sm md:text-base">{isEs ? item.qEs : item.qEn}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{isEs ? item.aEs : item.aEn}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="text-center space-y-4 pt-2 animate-fade-in-up" style={{ animationDelay: '0.28s' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-glow-primary">
              {isEs ? 'Define el sistema de IA que tu negocio necesita' : 'Define the AI system your business needs'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              {isEs
                ? 'Trabajamos contigo para contratar e implantar una arquitectura completa, no herramientas sueltas.'
                : 'We work with you to hire and deploy a complete architecture, not isolated tools.'}
            </p>
            <Link
              href="/diagnostico-ia-navarra"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:shadow-neon transition-all"
            >
              {isEs ? 'Solicitar propuesta y diagnostico' : 'Request proposal and diagnosis'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Services;
