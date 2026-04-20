'use client';

import Hero from '@/components/shared/Hero';
import AIAssistantShowcase from '@/components/shared/AIAssistantShowcase';
import CaseShowcase from '@/components/shared/CaseShowcase';
import SocialCounter from '@/components/shared/SocialCounter';
import FAQSection from '@/components/shared/FAQSection';
import MediaPresence from '@/components/shared/MediaPresence';
import JsonLd from '@/components/shared/JsonLd';
import Link from '@/components/shared/LocalizedLink';
import { Language } from '@/lib/i18n';
import { Building2, UserCheck, ShoppingCart, MessageCircle, ArrowRight, Sparkles, CheckCircle2, Bot, ExternalLink } from 'lucide-react';

interface IndexProps {
  language: Language;
}

const Index = ({ language }: IndexProps) => {
  const isEs = language === 'es';

  const demos = isEs
    ? {
        sectionTitle: 'Ejemplos reales activos en esta web',
        sectionSubtitle: 'Estas dos experiencias funcionan en producción dentro de este sitio y muestran cómo operan nuestros sistemas.',
        demo1Title: 'Centro Inteligente',
        demo1Text: 'Asistente conversacional activo en esta web para resolver dudas, orientar sobre servicios y gestionar citas en tiempo real.',
        demo1Highlight: 'Ejemplo real de soporte automatizado para negocios de servicios.',
        demo2Title: 'Diagnóstico Automatizado',
        demo2Text: 'Formulario de captura real que activa un diagnóstico estratégico con evaluación inicial para tu empresa.',
        demo2Highlight: 'Ejemplo real de flujo de captación y cualificación.',
        disclaimer: 'Son ejemplos operativos del propio sitio: servicio al cliente y flujo de diagnóstico conectados.',
      }
    : {
        sectionTitle: 'Real examples running on this website',
        sectionSubtitle: 'These two experiences run in production on this site and show how our systems operate.',
        demo1Title: 'AI Center',
        demo1Text: 'Live conversational assistant on this website to resolve questions, guide services and manage appointments in real time.',
        demo1Highlight: 'Real example of automated support for service businesses.',
        demo2Title: 'Automated Diagnosis',
        demo2Text: 'Real capture form that triggers a strategic diagnosis flow with an initial evaluation for your business.',
        demo2Highlight: 'Real example of lead capture and qualification flow.',
        disclaimer: 'These are operational website examples: customer support and diagnosis flow connected.',
      };

  const gptPublicUrl =
    'https://chatgpt.com/g/g-69e5e54d05d48191aaa2f9a54a27134c-ronald-taya-pardo-rtp-digital-solutions';

  const gptSupportBlock = isEs
    ? {
        title: '¿Aún no sabes por dónde empezar?',
        description:
          'Prueba también mi GPT en ChatGPT. Te ayudará a entender qué tipo de sistema de IA encaja mejor con tu negocio antes de solicitar un diagnóstico.',
        cta: 'Probar GPT en ChatGPT',
      }
    : {
        title: 'Not sure where to start yet?',
        description:
          'Try my GPT on ChatGPT too. It helps you understand which AI system best fits your business before requesting a diagnosis.',
        cta: 'Try GPT on ChatGPT',
      };

  const systems = [
    {
      icon: Building2,
      titleEs: 'Sistema 1 — Negocios de servicios',
      titleEn: 'System 1 — Service businesses',
      descEs: 'Arquitectura para empresas de servicios que necesitan atención continua, reservas y operación conectada.',
      descEn: 'Architecture for service businesses that need continuous support, bookings and connected operations.',
      bulletsEs: [
        'Reservas y gestión de citas',
        'Atención automatizada al cliente',
        'CRM y seguimiento de clientes',
        'Operación interna conectada',
        'Mensajería, recordatorios, reputación y campañas',
      ],
      bulletsEn: [
        'Bookings and appointment management',
        'Automated customer support',
        'CRM and customer follow-up',
        'Connected internal operations',
        'Messaging, reminders, reputation and campaigns',
      ],
      links: [
        { path: '/agentes-ia-atencion-cliente-navarra', labelEs: 'Atención automatizada', labelEn: 'Automated support' },
        { path: '/automatizacion-procesos-empresas-navarra', labelEs: 'Automatización operativa', labelEn: 'Operational automation' },
      ],
    },
    {
      icon: UserCheck,
      titleEs: 'Sistema 2 — Captación y cualificación de leads',
      titleEn: 'System 2 — Lead generation and qualification',
      descEs: 'Sistema comercial para captar oportunidades, filtrarlas y moverlas con orden hasta la venta.',
      descEn: 'Commercial system to capture opportunities, qualify them and move them to sale in an orderly pipeline.',
      bulletsEs: [
        'Captación de leads',
        'Cualificación y filtrado',
        'Matching comercial',
        'Gestión de pipeline',
        'Documentación y seguimiento comercial',
      ],
      bulletsEn: [
        'Lead capture',
        'Qualification and filtering',
        'Commercial matching',
        'Pipeline management',
        'Document handling and sales follow-up',
      ],
      links: [
        { path: '/ia-empresas-navarra', labelEs: 'Sistema para empresas', labelEn: 'Business system' },
        { path: '/consultoria-inteligencia-artificial-navarra', labelEs: 'Diseño estratégico', labelEn: 'Strategic design' },
      ],
    },
    {
      icon: ShoppingCart,
      titleEs: 'Sistema 3 — Ecommerce y operación digital',
      titleEn: 'System 3 — Ecommerce and digital operations',
      descEs: 'Infraestructura para tiendas y canales digitales centrada en conversión, cuentas e integraciones.',
      descEn: 'Infrastructure for ecommerce and digital channels focused on conversion, accounts and integrations.',
      bulletsEs: [
        'Gestión de producto y catálogo',
        'Checkout y conversión',
        'Cuentas y experiencia de usuario',
        'Automatización alrededor de ventas',
        'Integraciones y procesos de backend',
      ],
      bulletsEn: [
        'Product and catalog management',
        'Checkout and conversion',
        'User accounts and experience',
        'Sales-related automations',
        'Integrations and backend processes',
      ],
      links: [
        { path: '/desarrollo-web-inteligencia-artificial', labelEs: 'Operación digital', labelEn: 'Digital operations' },
        { path: '/rag-base-conocimiento-empresas', labelEs: 'Conocimiento e integraciones', labelEn: 'Knowledge and integrations' },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <JsonLd language={language} />
      <Hero language={language} />

      <section className="py-12 container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-foreground text-center">
            {isEs ? 'Tres sistemas de IA para empresas en Navarra' : 'Three AI systems for businesses in Navarra'}
          </h2>
          <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed text-center">
            <p>
              {isEs
                ? 'Estructuramos nuestras soluciones en 3 sistemas claros: negocios de servicios, captación y cualificación de leads, y ecommerce con operación digital.'
                : 'We structure our solutions in 3 clear systems: service businesses, lead generation and qualification, and ecommerce with digital operations.'}
            </p>
            <p>
              {isEs
                ? 'Cada sistema integra automatización, seguimiento y ejecución para convertir tu operativa en un flujo continuo orientado a resultados.'
                : 'Each system integrates automation, follow-up and execution to transform your operations into a continuous results-focused flow.'}
            </p>
            <p>
              {isEs
                ? 'Partimos de Navarra como foco principal y adaptamos cada sistema al punto exacto de madurez de tu negocio.'
                : 'We prioritize Navarra as the main target and adapt each system to your business maturity stage.'}
            </p>
          </div>
          <div className="flex justify-center pt-2">
            <a
              href={isEs ? '/automatizacion-ia-navarra' : '/en/ai-automation-navarra'}
              className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:shadow-neon transition-all"
            >
              {isEs ? 'Solicitar diagnóstico estratégico' : 'Request strategic diagnosis'}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <SocialCounter language={language} />
      <CaseShowcase language={language} />

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-4xl font-bold text-glow-primary">
              {isEs ? 'Modelo de servicios: 3 sistemas reales' : 'Service model: 3 real systems'}
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-sm md:text-base">
              {isEs
                ? 'No vendemos paquetes genéricos. Diseñamos uno de estos tres sistemas según tu operación actual y tus objetivos de crecimiento.'
                : 'We do not sell generic packages. We design one of these three systems according to your current operation and growth goals.'}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {systems.map((system, idx) => {
              const Icon = system.icon;
              return (
                <article key={idx} className="holographic-border rounded-2xl p-6 space-y-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">
                    {isEs ? system.titleEs : system.titleEn}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isEs ? system.descEs : system.descEn}
                  </p>
                  <ul className="space-y-2">
                    {(isEs ? system.bulletsEs : system.bulletsEn).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-1">
                    {system.links.map((link) => (
                      <Link
                        key={link.path}
                        href={link.path}
                        className="block text-xs text-primary font-medium hover:underline underline-offset-2"
                      >
                        {isEs ? link.labelEs : link.labelEn}
                      </Link>
                    ))}
                  </div>
                  <a
                    href={isEs ? '/automatizacion-ia-navarra' : '/en/ai-automation-navarra'}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline underline-offset-2"
                  >
                    {isEs ? 'Solicitar diagnóstico estratégico' : 'Request strategic diagnosis'}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <AIAssistantShowcase language={language} />

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-glow-primary">
              {demos.sectionTitle}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto">
              {demos.sectionSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-border bg-muted/30 flex flex-col">
              <div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mt-4">{demos.demo1Title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mt-4">{demos.demo1Text}</p>
              <p className="text-xs text-muted-foreground/70 italic mt-4">{demos.demo1Highlight}</p>
              <div className="mt-auto pt-6 flex justify-center">
                <button
                  onClick={() => {
                    const chatBar = document.querySelector('[data-chat-trigger]') as HTMLElement;
                    chatBar?.click();
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-all text-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  {isEs ? 'Probar Centro Inteligente' : 'Try the AI Center'}
                </button>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-muted/30 flex flex-col">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mt-4">{demos.demo2Title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mt-4">{demos.demo2Text}</p>
              <p className="text-xs text-muted-foreground/70 italic mt-4">{demos.demo2Highlight}</p>
              <div className="mt-auto pt-6 flex flex-col items-center gap-1">
                <p className="text-xs text-muted-foreground mb-1">{isEs ? 'Evaluación inicial sin coste' : 'Free initial evaluation'}</p>
                <a
                  href={isEs ? '/automatizacion-ia-navarra' : '/en/ai-automation-navarra'}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:shadow-neon transition-all whitespace-nowrap"
                >
                  {isEs ? 'Solicitar diagnóstico estratégico' : 'Request strategic diagnosis'}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto italic">
            {demos.disclaimer}
          </p>
        </div>
      </section>

      <MediaPresence language={language} />
      <FAQSection language={language} />

      <section className="pb-6 container mx-auto px-4">
        <div className="max-w-3xl mx-auto rounded-2xl border border-border/80 bg-muted/25 p-5 md:p-6">
          <div className="space-y-3">
            <h3 className="text-base md:text-lg font-semibold text-foreground">
              {gptSupportBlock.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {gptSupportBlock.description}
            </p>
            <a
              href={gptPublicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/40 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
            >
              {gptSupportBlock.cta}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 container mx-auto px-4">
        <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
          {isEs
            ? 'Convertimos tu página web en un sistema inteligente capaz de captar oportunidades, automatizar procesos y escalar tu negocio sin aumentar carga operativa.'
            : 'We turn your website into an intelligent system capable of capturing opportunities, automating processes, and scaling your business without increasing operational load.'}
        </p>
      </section>
    </div>
  );
};

export default Index;
