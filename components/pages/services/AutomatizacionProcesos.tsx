'use client';

import { Language } from '@/lib/i18n';
import Link from '@/components/shared/LocalizedLink';
import ServicePageLayout from '@/components/shared/ServicePageLayout';
import { Clock, Shield, TrendingUp, Users, Zap, Target, Euro, CheckCircle, ArrowRight, CheckCircle2, Settings, FileText, BarChart3 } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface Props {
  language: Language;
}

const AutomatizacionProcesos = ({ language }: Props) => {
  const content = {
    es: {
      title: 'Automatización de procesos empresariales con inteligencia artificial en Navarra',
      introduction: (
        <>
          Automatizamos tareas repetitivas en empresas de Navarra dentro de nuestras <Link href="/servicios" className="text-primary hover:underline font-medium">soluciones de inteligencia artificial para empresas</Link>, conectando CRM, formularios, emails, bases de datos y herramientas internas para que muchas acciones se ejecuten automáticamente.
          <br /><br />
          Desde el envío de correos hasta la gestión de clientes, contratos, facturación o campañas, la automatización permite que tu empresa funcione de forma más eficiente, organizada y escalable. Este tipo de automatización se puede complementar con <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">agentes de inteligencia artificial para atención al cliente</Link> que permiten captar, responder y gestionar clientes automáticamente.
          <br /><br />
          <span className="font-semibold text-foreground">Si tu negocio depende de tareas manuales, estás perdiendo tiempo, dinero y oportunidades.</span>
        </>
      ),
      aiReference: 'El asistente que ves en esta web funciona con la misma tecnología que aplicamos en los sistemas de automatización: inteligencia artificial conectada a procesos reales. No es teoría, es tecnología que ya está ayudando a empresas en Navarra.',
      problems: [
        { text: 'Pierdes tiempo en tareas repetitivas todos los días' },
        { text: 'Tu equipo copia datos entre herramientas manualmente' },
        { text: 'Enviar emails, contratos o facturas requiere intervención constante' },
        { text: 'Hay errores humanos en procesos administrativos' },
        { text: 'No tienes un sistema claro para gestionar clientes o leads' },
        { text: 'Tu negocio no escala porque depende de trabajo manual' },
        { text: 'Procesos lentos que afectan a la productividad' },
      ],
      howItWorks: [
        { title: 'Analizamos tu operativa', description: 'Identificamos tareas repetitivas, cuellos de botella y procesos que se pueden automatizar.' },
        { title: 'Diseñamos el sistema', description: 'Creamos flujos automatizados adaptados a tu negocio y forma de trabajar.' },
        { title: 'Conectamos tus herramientas', description: 'Integramos CRM, emails, formularios, bases de datos, APIs y sistemas internos.' },
        { title: 'Automatizamos y optimizamos', description: 'El sistema ejecuta tareas automáticamente y mejora con el tiempo. Estos sistemas también pueden integrarse con páginas web inteligentes, creando una experiencia completa donde la captación y la automatización trabajan juntas.' },
      ],
      examples: [
        { industry: 'Emails y seguimiento', description: 'Envío automático de emails y seguimiento de clientes sin intervención manual.' },
        { industry: 'Contratos', description: 'Generación y envío de contratos sin intervención manual.' },
        { industry: 'Facturación', description: 'Automatización de facturación y registros contables.' },
        { industry: 'Leads con IA', description: 'Filtrado inteligente de leads con inteligencia artificial.' },
        { industry: 'Pipelines de ventas', description: 'Gestión automática de pipelines de ventas y seguimiento comercial.' },
        { industry: 'Campañas', description: 'Envío de campañas a todos tus contactos en segundos.' },
      ],
      benefits: [
        { icon: <Euro className="w-5 h-5" />, text: 'Reducción de costes operativos' },
        { icon: <Clock className="w-5 h-5" />, text: 'Ahorro de tiempo diario' },
        { icon: <Shield className="w-5 h-5" />, text: 'Menos errores humanos' },
        { icon: <Zap className="w-5 h-5" />, text: 'Procesos más rápidos' },
        { icon: <Target className="w-5 h-5" />, text: 'Mayor control del negocio' },
        { icon: <Users className="w-5 h-5" />, text: 'Escalabilidad sin aumentar equipo' },
        { icon: <TrendingUp className="w-5 h-5" />, text: 'Más productividad con menos esfuerzo' },
      ],
      ctaText: 'Automatizar tu empresa no es una opción si quieres crecer sin aumentar carga de trabajo.',
      ctaButton: 'Solicitar diagnóstico estratégico',
      // SEO section
      seoTitle: 'No es solo automatizar tareas, es crear un sistema',
      seoText1: (<>No se trata solo de automatizar tareas. En muchas empresas, esta automatización se conecta con <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">agentes de IA</Link>, <Link href="/rag-base-conocimiento-empresas" className="text-primary hover:underline font-medium">bases de conocimiento (RAG)</Link> y sistemas web inteligentes para crear un ecosistema completo donde cada parte del negocio está conectada: clientes, procesos, datos y comunicación.</>),
      seoText2: 'Esto permite que tu empresa funcione de forma más organizada, eficiente y preparada para crecer.',
      seoTechTitle: 'Tecnología adaptada a tu empresa',
      seoTechText: 'Trabajamos con herramientas como n8n, integraciones mediante API, inteligencia artificial y sistemas personalizados para crear soluciones adaptadas a cada empresa.',
      seoTechText2: (<>No necesitas cambiar todo tu sistema actual: lo conectamos y lo hacemos funcionar mejor. Este tipo de soluciones suele comenzar con una fase de <Link href="/consultoria-inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">consultoría de inteligencia artificial</Link> donde analizamos tu negocio y detectamos oportunidades de automatización.</>),
      seoItems: [
        'Automatización de emails y comunicaciones',
        'Gestión automática de leads y ventas',
        'Facturación y contratos automatizados',
        'Integración con CRM y herramientas internas',
        'Flujos de trabajo conectados',
        'Campañas y seguimiento comercial',
      ],
      // FAQ
      faqTitle: 'Preguntas frecuentes sobre automatización de procesos empresariales',
      faqItems: [
        { q: '¿Qué tipo de procesos se pueden automatizar?', a: 'Prácticamente cualquier tarea repetitiva: envío de emails, generación de contratos, facturación, gestión de leads, actualización de bases de datos, seguimiento comercial, campañas de marketing y mucho más.' },
        { q: '¿Se puede integrar con mi CRM actual?', a: 'Sí. Conectamos con la mayoría de CRMs del mercado (HubSpot, Pipedrive, Salesforce, Zoho...) y también con herramientas propias o bases de datos personalizadas.' },
        { q: '¿Necesito cambiar mis herramientas?', a: 'No. Conectamos y automatizamos las herramientas que ya usas. No hace falta sustituir nada, solo hacer que trabajen juntas de forma automática.' },
        { q: '¿Cuánto tiempo tarda la implementación?', a: 'Depende de la complejidad, pero muchas automatizaciones se implementan en 1-2 semanas. Proyectos más complejos pueden llevar 4-6 semanas.' },
        { q: '¿Es útil para pequeñas empresas?', a: 'Especialmente. Las pequeñas empresas son las que más tiempo pierden en tareas manuales y las que más beneficio obtienen de la automatización.' },
        { q: '¿Se puede combinar con agentes de IA?', a: 'Sí. La automatización de procesos se complementa perfectamente con agentes de IA para atención al cliente, cualificación de leads y gestión inteligente de la comunicación.' },
      ],
      // Related services
      relatedServices: [
        {
          path: '/agentes-ia-atencion-cliente-navarra',
          title: 'Agentes IA para atención al cliente',
          desc: 'Agentes de inteligencia artificial embebidos en tu web para captar clientes y automatizar la atención.',
          cta: 'Ver agentes IA para atención al cliente en Navarra',
        },
        {
          path: '/desarrollo-web-inteligencia-artificial',
          title: 'Desarrollo web con inteligencia artificial',
          desc: 'Páginas web inteligentes con agentes IA integrados, atención automatizada y experiencias personalizadas.',
          cta: 'Ver desarrollo web con IA',
        },
        {
          path: '/rag-base-conocimiento-empresas',
          title: 'Agentes RAG y base de conocimiento',
          desc: 'Asistentes conectados a documentación, procesos y contenidos internos para respuestas precisas.',
          cta: 'Ver agentes RAG para empresas',
        },
      ],
    },
    en: {
      title: 'Business Process Automation with Artificial Intelligence in Navarra',
      introduction: (
        <>
          We automate repetitive tasks for businesses in Navarra as part of our <Link href="/services" className="text-primary hover:underline font-medium">AI solutions for businesses</Link>, connecting CRM, forms, emails, databases and internal tools so many actions execute automatically.
          <br /><br />
          From sending emails to managing clients, contracts, invoicing or campaigns, automation allows your business to operate more efficiently, organized and scalable. This automation can be complemented with <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">AI agents for customer service</Link> that capture, respond and manage clients automatically.
          <br /><br />
          <span className="font-semibold text-foreground">If your business depends on manual tasks, you're losing time, money and opportunities.</span>
        </>
      ),
      aiReference: 'The assistant you see on this website works with the same technology we apply in automation systems: artificial intelligence connected to real processes. It is not theory, it is technology already helping businesses in Navarra.',
      problems: [
        { text: 'You waste time on repetitive tasks every day' },
        { text: 'Your team copies data between tools manually' },
        { text: 'Sending emails, contracts or invoices requires constant intervention' },
        { text: 'There are human errors in administrative processes' },
        { text: "You don't have a clear system for managing clients or leads" },
        { text: "Your business doesn't scale because it depends on manual work" },
        { text: 'Slow processes that affect productivity' },
      ],
      howItWorks: [
        { title: 'We analyze your operations', description: 'We identify repetitive tasks, bottlenecks and processes that can be automated.' },
        { title: 'We design the system', description: 'We create automated flows adapted to your business and way of working.' },
        { title: 'We connect your tools', description: 'We integrate CRM, emails, forms, databases, APIs and internal systems.' },
        { title: 'We automate and optimize', description: 'The system executes tasks automatically and improves over time. These systems can also integrate with intelligent websites, creating a complete experience where lead capture and automation work together.' },
      ],
      examples: [
        { industry: 'Emails & follow-up', description: 'Automatic email sending and customer follow-up without manual intervention.' },
        { industry: 'Contracts', description: 'Contract generation and sending without manual intervention.' },
        { industry: 'Invoicing', description: 'Automated invoicing and accounting records.' },
        { industry: 'AI-powered leads', description: 'Intelligent lead filtering with artificial intelligence.' },
        { industry: 'Sales pipelines', description: 'Automatic management of sales pipelines and commercial follow-up.' },
        { industry: 'Campaigns', description: 'Send campaigns to all your contacts in seconds.' },
      ],
      benefits: [
        { icon: <Euro className="w-5 h-5" />, text: 'Reduction in operational costs' },
        { icon: <Clock className="w-5 h-5" />, text: 'Daily time savings' },
        { icon: <Shield className="w-5 h-5" />, text: 'Fewer human errors' },
        { icon: <Zap className="w-5 h-5" />, text: 'Faster processes' },
        { icon: <Target className="w-5 h-5" />, text: 'Greater business control' },
        { icon: <Users className="w-5 h-5" />, text: 'Scalability without increasing staff' },
        { icon: <TrendingUp className="w-5 h-5" />, text: 'More productivity with less effort' },
      ],
      ctaText: 'Automating your business is not optional if you want to grow without increasing workload.',
      ctaButton: 'Request strategic diagnosis',
      seoTitle: "It's not just automating tasks, it's building a system",
      seoText1: (<>It's not just about automating tasks. In many businesses, this automation connects with <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">AI agents</Link>, <Link href="/rag-base-conocimiento-empresas" className="text-primary hover:underline font-medium">knowledge bases (RAG)</Link> and intelligent web systems to create a complete ecosystem where every part of the business is connected: clients, processes, data and communication.</>),
      seoText2: 'This allows your business to operate in a more organized, efficient way, ready to grow.',
      seoTechTitle: 'Technology adapted to your business',
      seoTechText: 'We work with tools like n8n, API integrations, artificial intelligence and custom systems to create solutions adapted to each business.',
      seoTechText2: (<>You don't need to change your entire current system: we connect it and make it work better. This type of solution usually starts with an <Link href="/consultoria-inteligencia-artificial-navarra" className="text-primary hover:underline font-medium">AI consulting</Link> phase where we analyze your business and detect automation opportunities.</>),
      seoItems: [
        'Email and communication automation',
        'Automatic lead and sales management',
        'Automated invoicing and contracts',
        'CRM and internal tool integration',
        'Connected workflows',
        'Campaigns and commercial follow-up',
      ],
      faqTitle: 'Frequently asked questions about business process automation',
      faqItems: [
        { q: 'What types of processes can be automated?', a: 'Virtually any repetitive task: sending emails, generating contracts, invoicing, lead management, database updates, commercial follow-up, marketing campaigns and much more.' },
        { q: 'Can it integrate with my current CRM?', a: 'Yes. We connect with most CRMs on the market (HubSpot, Pipedrive, Salesforce, Zoho...) and also with custom tools or personalized databases.' },
        { q: 'Do I need to change my tools?', a: 'No. We connect and automate the tools you already use. No need to replace anything, just make them work together automatically.' },
        { q: 'How long does implementation take?', a: 'It depends on complexity, but many automations are implemented in 1-2 weeks. More complex projects may take 4-6 weeks.' },
        { q: 'Is it useful for small businesses?', a: 'Especially. Small businesses are the ones that lose the most time on manual tasks and benefit the most from automation.' },
        { q: 'Can it be combined with AI agents?', a: 'Yes. Process automation complements perfectly with AI agents for customer service, lead qualification and intelligent communication management.' },
      ],
      relatedServices: [
        {
          path: '/agentes-ia-atencion-cliente-navarra',
          title: 'AI agents for customer service',
          desc: 'AI agents embedded in your website to capture clients and automate customer service.',
          cta: 'View AI agents for customer service in Navarra',
        },
        {
          path: '/desarrollo-web-inteligencia-artificial',
          title: 'AI web development',
          desc: 'Intelligent websites with integrated AI agents, automated service and personalized experiences.',
          cta: 'View AI web development',
        },
        {
          path: '/rag-base-conocimiento-empresas',
          title: 'RAG agents and knowledge base',
          desc: 'Assistants connected to documentation, processes and internal content for precise answers.',
          cta: 'View RAG agents for businesses',
        },
      ],
    },
  };

  const c = content[language];
  const casesLink = language === 'es' ? 'Ver casos de éxito' : 'View success stories';

  return (
    <>
            {/* SEO Differential Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="holographic-border rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                {c.seoTitle}
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {c.seoText1}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {c.seoText2}
              </p>
              <ul className="grid md:grid-cols-2 gap-3 mb-8">
                {c.seoItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-card/50 border border-border rounded-lg p-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Technology block */}
              <div className="border-t border-border pt-6 mb-6">
                <h3 className="font-semibold text-lg mb-3">{c.seoTechTitle}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                  {c.seoTechText}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {c.seoTechText2}
                </p>
              </div>

              {/* Internal links */}
              <div className="border-t border-border pt-6 flex flex-wrap gap-3">
                <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary text-sm hover:underline font-medium">
                  {language === 'es' ? 'Agentes IA para atención al cliente en Navarra' : 'AI agents for customer service in Navarra'}
                </Link>
                <span className="text-muted-foreground">·</span>
                <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary text-sm hover:underline font-medium">
                  {language === 'es' ? 'Desarrollo web con inteligencia artificial' : 'AI web development'}
                </Link>
                <span className="text-muted-foreground">·</span>
                <Link href="/rag-base-conocimiento-empresas" className="text-primary text-sm hover:underline font-medium">
                  {language === 'es' ? 'Agentes RAG con base de conocimiento' : 'RAG agents with knowledge base'}
                </Link>
                <span className="text-muted-foreground">·</span>
                <Link href="/consultoria-inteligencia-artificial-navarra" className="text-primary text-sm hover:underline font-medium">
                  {language === 'es' ? 'Consultoría de inteligencia artificial en Navarra' : 'AI consulting in Navarra'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-glow-primary">
              {c.faqTitle}
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {c.faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="holographic-border rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Custom Related Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-glow-primary">
              {language === 'es' ? 'Servicios relacionados' : 'Related services'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {c.relatedServices.map((service, index) => (
                <div key={index} className="holographic-border rounded-xl p-6 flex flex-col">
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{service.desc}</p>
                  <Link
                    href={service.path}
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AutomatizacionProcesos;




