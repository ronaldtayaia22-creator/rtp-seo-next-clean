'use client';

import { Language } from '@/lib/i18n';
import Link from '@/components/shared/LocalizedLink';
import { Building2, UserCheck, ShoppingCart, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  language: Language;
}

const Services = ({ language }: ServicesProps) => {
  const isEs = language === 'es';

  const systems = [
    {
      icon: Building2,
      titleEs: 'Sistema 1 — Sistemas para negocios de servicios',
      titleEn: 'System 1 — Systems for service-based businesses',
      summaryEs:
        'Diseñado para empresas que venden servicios y necesitan operar con reservas, atención automatizada y seguimiento continuo.',
      summaryEn:
        'Designed for businesses that sell services and need bookings, automated support and continuous follow-up.',
      includesEs: [
        'Gestión de reservas y citas',
        'Atención automática al cliente',
        'CRM y seguimiento de conversaciones',
        'Operación interna conectada',
        'Mensajería, recordatorios, reputación y campañas',
      ],
      includesEn: [
        'Booking and appointment management',
        'Automated customer support',
        'CRM and conversation follow-up',
        'Connected internal operations',
        'Messaging, reminders, reputation and campaigns',
      ],
      fitEs:
        'Aplicación típica: clínicas, restauración, comercios con atención al cliente y empresas de servicios profesionales.',
      fitEn:
        'Typical use case: clinics, restaurants, retail with customer support and professional service businesses.',
      related: [
        {
          path: '/agentes-ia-atencion-cliente-navarra',
          labelEs: 'Agentes IA para atención al cliente',
          labelEn: 'AI customer service agents',
        },
        {
          path: '/automatizacion-procesos-empresas-navarra',
          labelEs: 'Automatización de procesos empresariales',
          labelEn: 'Business process automation',
        },
        {
          path: '/ia-empresas-navarra',
          labelEs: 'Soluciones para empresas en Navarra',
          labelEn: 'Business solutions in Navarra',
        },
      ],
    },
    {
      icon: UserCheck,
      titleEs: 'Sistema 2 — Captación y cualificación de leads',
      titleEn: 'System 2 — Lead generation and qualification systems',
      summaryEs:
        'Sistema comercial para captar demanda, filtrarla con criterio y gestionar oportunidades hasta el cierre.',
      summaryEn:
        'Commercial system to capture demand, qualify it with clear criteria and manage opportunities to close.',
      includesEs: [
        'Captación de leads desde web y canales de entrada',
        'Cualificación y filtrado automático',
        'Matching de oportunidad y prioridad comercial',
        'Gestión de pipeline y etapas de venta',
        'Documentación y seguimiento comercial',
      ],
      includesEn: [
        'Lead capture from website and inbound channels',
        'Automatic qualification and filtering',
        'Opportunity matching and sales priority',
        'Pipeline and sales stage management',
        'Document handling and sales follow-up',
      ],
      fitEs:
        'Aplicación típica: empresas con equipo comercial que necesitan previsibilidad y velocidad en la gestión de oportunidades.',
      fitEn:
        'Typical use case: businesses with sales teams that need predictability and speed in opportunity handling.',
      related: [
        {
          path: '/consultoria-inteligencia-artificial-navarra',
          labelEs: 'Consultoría estratégica en IA',
          labelEn: 'Strategic AI consulting',
        },
        {
          path: '/agentes-ia-atencion-cliente-navarra',
          labelEs: 'Captación y atención inicial automatizada',
          labelEn: 'Automated first-contact capture and support',
        },
        {
          path: '/ia-empresas-navarra',
          labelEs: 'Implementación para empresas en Navarra',
          labelEn: 'Implementation for Navarra businesses',
        },
      ],
    },
    {
      icon: ShoppingCart,
      titleEs: 'Sistema 3 — Ecommerce y operación digital',
      titleEn: 'System 3 — Ecommerce and digital operation systems',
      summaryEs:
        'Arquitectura para tiendas online y operaciones digitales centrada en conversión, cuentas de usuario e integraciones.',
      summaryEn:
        'Architecture for ecommerce and digital operations focused on conversion, user accounts and integrations.',
      includesEs: [
        'Gestión de producto y catálogo',
        'Optimización de checkout y conversión',
        'Cuentas de usuario y experiencia postventa',
        'Automatización alrededor de ventas',
        'Integraciones y procesos de backend',
      ],
      includesEn: [
        'Product and catalog management',
        'Checkout and conversion optimization',
        'User accounts and post-sale experience',
        'Sales-related automations',
        'Integrations and backend processes',
      ],
      fitEs:
        'Aplicación típica: ecommerce y negocios digitales que necesitan escalar ventas sin aumentar fricción operativa.',
      fitEn:
        'Typical use case: ecommerce and digital businesses that need to scale sales without increasing operational friction.',
      related: [
        {
          path: '/desarrollo-web-inteligencia-artificial',
          labelEs: 'Desarrollo web con IA',
          labelEn: 'Web development with AI',
        },
        {
          path: '/rag-base-conocimiento-empresas',
          labelEs: 'RAG y base de conocimiento',
          labelEn: 'RAG and knowledge base',
        },
        {
          path: '/automatizacion-procesos-empresas-navarra',
          labelEs: 'Integraciones y automatización de procesos',
          labelEn: 'Integrations and process automation',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <header className="max-w-4xl mx-auto text-center space-y-5 mb-14 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-bold text-glow-primary">
            {isEs
              ? 'Servicios de inteligencia artificial en Navarra estructurados en 3 sistemas'
              : 'Artificial intelligence services in Navarra structured in 3 systems'}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            {isEs
              ? 'Nuestro modelo de trabajo se organiza en tres sistemas reales: negocio de servicios, captación y cualificación de leads, y ecommerce con operación digital.'
              : 'Our operating model is organized in three real systems: service business operations, lead generation and qualification, and ecommerce with digital operations.'}
          </p>
          <p className="text-sm text-muted-foreground/90 max-w-2xl mx-auto">
            {isEs
              ? 'Definimos el sistema prioritario para tu empresa y lo conectamos con tus procesos para generar resultados medibles.'
              : 'We define the priority system for your business and connect it to your processes to generate measurable outcomes.'}
          </p>
          <a
            href="/diagnostico-ia-navarra#diagnostico-form"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:shadow-neon transition-all"
          >
            {isEs ? 'Solicitar diagnóstico estratégico' : 'Request strategic diagnosis'}
            <ArrowRight className="w-4 h-4" />
          </a>
        </header>

        <div className="max-w-6xl mx-auto space-y-10">
          {systems.map((system, index) => {
            const Icon = system.icon;
            return (
              <section
                key={index}
                className="holographic-border rounded-2xl p-7 md:p-10 space-y-7 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">
                    {isEs ? system.titleEs : system.titleEn}
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {isEs ? system.summaryEs : system.summaryEn}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-wider text-primary font-semibold">
                      {isEs ? 'Qué incluye' : 'What it includes'}
                    </h3>
                    <ul className="space-y-2.5">
                      {(isEs ? system.includesEs : system.includesEn).map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm uppercase tracking-wider text-primary font-semibold">
                      {isEs ? 'Aplicación práctica' : 'Practical application'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {isEs ? system.fitEs : system.fitEn}
                    </p>

                    <div className="space-y-2 pt-1">
                      {system.related.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          className="flex items-center gap-2 text-sm text-primary hover:underline underline-offset-2 transition-colors"
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                          {isEs ? item.labelEs : item.labelEn}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="/diagnostico-ia-navarra#diagnostico-form"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:shadow-neon transition-all"
                  >
                    {isEs ? 'Solicitar diagnóstico estratégico' : 'Request strategic diagnosis'}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </section>
            );
          })}

          <section className="text-center space-y-4 pt-2 animate-fade-in-up" style={{ animationDelay: '0.28s' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-glow-primary">
              {isEs ? '¿Qué sistema encaja mejor con tu negocio?' : 'Which system fits your business best?'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              {isEs
                ? 'En el diagnóstico estratégico definimos la prioridad correcta y la secuencia de implementación para tu empresa en Navarra.'
                : 'In the strategic diagnosis we define the right priority and implementation sequence for your business in Navarra.'}
            </p>
            <a
              href="/diagnostico-ia-navarra#diagnostico-form"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:shadow-neon transition-all"
            >
              {isEs ? 'Solicitar diagnóstico estratégico' : 'Request strategic diagnosis'}
              <ArrowRight className="w-4 h-4" />
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Services;
