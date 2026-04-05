'use client';

import { Language } from '@/lib/i18n';
import {
  Bot, Phone, Workflow, Brain, Globe, ArrowRight, MessageCircle, Cog, Sparkles,
  FileText, BarChart3, Users, Plug, ChevronDown, Mic, BookOpen, Building2, Receipt, FolderOpen, Contact2, Megaphone, Link2, CheckCircle2
} from 'lucide-react';
import Link from '@/components/shared/LocalizedLink';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface ServicesProps {
  language: Language;
}

const LOVABLE = process.env.NEXT_PUBLIC_LOVABLE_URL || 'https://rtpdigitalsolutions.lovable.app';



const Services = ({ language }: ServicesProps) => {
  const isEs = language === 'es';

  // ── Service 1 sub-sections ──
  const s1Sections = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: isEs ? 'Agentes Web Inteligentes' : 'Smart Web Agents',
      desc: isEs
        ? 'Nuestros agentes web inteligentes se integran directamente en tu página para actuar como asistentes de captación de clientes y atención automatizada 24/7. Resuelven consultas frecuentes, cualifican leads en tiempo real y conectan con tu CRM o WhatsApp Business para que ninguna oportunidad se pierda. Captación automática de clientes y posicionamiento orgánico en Google.'
        : 'Our smart web agents integrate directly into your website as automated customer capture and 24/7 service assistants. They resolve frequent queries, qualify leads in real time and connect with your CRM or WhatsApp Business so no opportunity is missed. Automatic customer capture and organic Google positioning.',
      bullets: isEs
        ? ['Chatbots integrados en páginas web', 'Captación automática de leads', 'Conexión con CRM y WhatsApp Business', 'Atención al cliente 24/7', 'Captación automática de clientes desde web o WhatsApp', 'Atención inmediata 24/7 sin depender de disponibilidad humana', 'Conversión de visitas en oportunidades reales de negocio', 'Captación continua de clientes sin depender de campañas manuales', 'Mayor conversión gracias a respuestas inmediatas']
        : ['Chatbots integrated into websites', 'Automatic lead capture', 'CRM and WhatsApp Business connection', '24/7 customer service', 'Automatic customer capture from web or WhatsApp', 'Immediate 24/7 service without depending on human availability', 'Converting visits into real business opportunities', 'Continuous customer capture without relying on manual campaigns', 'Higher conversion thanks to immediate responses'],
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: isEs ? 'Agentes RAG (Bases de conocimiento)' : 'RAG Agents (Knowledge Bases)',
      desc: isEs
        ? 'Los agentes RAG conectan la inteligencia artificial a tu documentación interna — manuales, PDFs, bases legales y conocimiento corporativo — para dar respuestas precisas basadas en datos reales de tu empresa. Acceso inteligente a documentación interna y bases de conocimiento privadas.'
        : 'RAG agents connect artificial intelligence to your internal documentation — manuals, PDFs, legal databases and corporate knowledge — to provide precise answers based on your company\'s real data. Intelligent access to internal documentation and private knowledge bases.',
      bullets: isEs
        ? ['IA conectada a documentos internos', 'Manuales, PDFs, bases legales', 'Plataformas privadas con chat inteligente', 'Integración en tiempo real con APIs']
        : ['AI connected to internal documents', 'Manuals, PDFs, legal databases', 'Private platforms with smart chat', 'Real-time API integration'],
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: isEs ? 'Agentes de Voz' : 'Voice Agents',
      desc: isEs
        ? 'Implementamos agentes de voz con inteligencia artificial que gestionan la atención telefónica de forma autónoma. Filtran y clasifican llamadas, realizan reservas automáticas y se integran con tu CRM o ERP, liberando a tu equipo de tareas repetitivas. Atención automatizada 24/7 conectada a sistemas reales.'
        : 'We implement AI-powered voice agents that manage phone support autonomously. They filter and classify calls, make automatic bookings and integrate with your CRM or ERP, freeing your team from repetitive tasks. Automated 24/7 service connected to real systems.',
      bullets: isEs
        ? ['Atención telefónica automatizada', 'Integración con CRM y ERP', 'Filtrado y clasificación de llamadas', 'Reservas automáticas']
        : ['Automated phone support', 'CRM and ERP integration', 'Call filtering and classification', 'Automatic bookings'],
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: isEs ? 'Agentes internos empresariales' : 'Internal Business Agents',
      desc: isEs
        ? 'Diseñamos asistentes internos con IA que ayudan a tu equipo a consultar documentación, resolver dudas operativas y agilizar procesos del día a día. Son agentes IA integrados en tus sistemas internos que reducen la carga operativa y mejoran la productividad de cualquier departamento.'
        : 'We design internal AI assistants that help your team query documentation, resolve operational doubts and streamline daily processes. These are AI agents integrated into your internal systems that reduce operational workload and improve productivity across any department.',
      bullets: isEs
        ? ['Soporte a empleados', 'Consulta documental', 'Asistentes internos']
        : ['Employee support', 'Document query', 'Internal assistants'],
    },
  ];

  // ── Service 2 sub-sections ──
  const s2Sections = [
    {
      icon: <Receipt className="w-6 h-6" />,
      title: isEs ? 'Automatización de Facturación' : 'Invoice Automation',
      desc: isEs
        ? 'Eliminamos el procesamiento manual de facturas mediante lectura automática con OCR, registro directo en tu CRM o ERP y validación de pagos sin intervención humana.'
        : 'We eliminate manual invoice processing through automatic OCR reading, direct CRM/ERP registration and payment validation without human intervention.',
      bullets: isEs
        ? ['Lectura automática de facturas (OCR)', 'Registro automático en CRM o ERP', 'Envío automático por email', 'Validación de pagos', 'Reducción de tareas repetitivas y carga operativa', 'Integración con herramientas existentes (CRM, ERP, Shopify, etc.)', 'Optimización de procesos internos para mejorar eficiencia', 'Eliminación de tareas repetitivas que consumen tiempo', 'Mejora de eficiencia operativa en toda la empresa']
        : ['Automatic invoice reading (OCR)', 'Automatic CRM/ERP registration', 'Automatic email sending', 'Payment validation', 'Reduction of repetitive tasks and operational workload', 'Integration with existing tools (CRM, ERP, Shopify, etc.)', 'Internal process optimization for improved efficiency', 'Elimination of time-consuming repetitive tasks', 'Improved operational efficiency across the entire company'],
    },
    {
      icon: <FolderOpen className="w-6 h-6" />,
      title: isEs ? 'Automatización de Documentos' : 'Document Automation',
      desc: isEs
        ? 'Procesamos, extraemos datos y clasificamos documentos de forma inteligente para que tu equipo no pierda tiempo con tareas administrativas repetitivas.'
        : 'We process, extract data and classify documents intelligently so your team doesn\'t waste time on repetitive administrative tasks.',
      bullets: isEs
        ? ['Procesamiento de PDFs', 'Extracción de datos', 'Clasificación inteligente']
        : ['PDF processing', 'Data extraction', 'Smart classification'],
    },
    {
      icon: <Contact2 className="w-6 h-6" />,
      title: isEs ? 'Automatización de CRM' : 'CRM Automation',
      desc: isEs
        ? 'Automatizamos la gestión de contactos, el seguimiento de leads y el pipeline comercial para que tu equipo de ventas se centre en cerrar oportunidades reales.'
        : 'We automate contact management, lead tracking and sales pipeline so your sales team can focus on closing real opportunities.',
      bullets: isEs
        ? ['Creación automática de contactos', 'Seguimiento de leads', 'Envío de recordatorios', 'Pipeline automático']
        : ['Automatic contact creation', 'Lead tracking', 'Reminder sending', 'Automatic pipeline'],
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: isEs ? 'Automatización de Marketing' : 'Marketing Automation',
      desc: isEs
        ? 'Gestionamos automáticamente la programación de contenido, el seguimiento de métricas y la ejecución de campañas en redes sociales y otros canales digitales.'
        : 'We automatically manage content scheduling, metrics tracking and campaign execution across social media and other digital channels.',
      bullets: isEs
        ? ['Gestión automática de redes sociales', 'Programación de contenido', 'Seguimiento de métricas', 'Automatización de campañas']
        : ['Automatic social media management', 'Content scheduling', 'Metrics tracking', 'Campaign automation'],
    },
    {
      icon: <Link2 className="w-6 h-6" />,
      title: isEs ? 'Integraciones Empresariales' : 'Business Integrations',
      desc: isEs
        ? 'Conectamos sistemas empresariales mediante automatización avanzada (motor central n8n), integrando CRM, WhatsApp, Shopify, APIs externas y bases de datos para que la información fluya de forma automática entre plataformas.'
        : 'We connect business systems through advanced automation (n8n core engine), integrating CRM, WhatsApp, Shopify, external APIs and databases so information flows automatically between platforms.',
      bullets: isEs
        ? ['Conexión con CRMs', 'WhatsApp', 'APIs externas', 'Shopify', 'Plataformas personalizadas', 'Sistemas internos', 'Bases de datos', 'Herramientas cloud']
        : ['CRM connections', 'WhatsApp', 'External APIs', 'Shopify', 'Custom platforms', 'Internal systems', 'Databases', 'Cloud tools'],
    },
  ];

  // ── FAQ ──
  const faqs = isEs
    ? [
        { q: '¿Qué diferencia hay entre un chatbot y un agente de IA real?', a: 'Un chatbot responde preguntas predefinidas. Un agente de IA entiende contexto, aprende de tu documentación, se conecta a tus sistemas y ejecuta acciones como registrar leads, gestionar reservas o cualificar clientes en tiempo real.' },
        { q: '¿Puede integrarse en mi página web y en WhatsApp al mismo tiempo?', a: 'Sí. El agente puede funcionar como widget web y también en WhatsApp Business, manteniendo coherencia en las conversaciones y centralizando la información en tu CRM.' },
        { q: '¿Puede calificar automáticamente a los clientes potenciales?', a: 'Sí. El agente puede hacer preguntas estratégicas, recoger datos clave y clasificar automáticamente los leads antes de enviarlos a tu equipo comercial.' },
        { q: '¿Puede entrenarse con mi documentación o base de conocimiento?', a: 'Sí. Podemos integrar documentos, FAQs internas o información de producto para que el agente responda con precisión alineada a tu negocio.' },
        { q: '¿Qué tipo de procesos empresariales se pueden automatizar?', a: 'Facturación, gestión de leads, sincronización entre CRM y bases de datos, envío automático de documentos, seguimiento comercial, notificaciones internas y más.' },
        { q: '¿Necesito cambiar mis herramientas actuales?', a: 'No. Nos adaptamos a tu infraestructura. La automatización conecta tus herramientas existentes sin necesidad de reemplazarlas.' },
        { q: '¿Cómo funciona la orquestación con n8n?', a: 'n8n actúa como el motor que conecta sistemas entre sí. Recibe información, ejecuta acciones y sincroniza plataformas automáticamente, eliminando tareas manuales y reduciendo errores.' },
        { q: '¿Se puede empezar por una automatización pequeña y escalar después?', a: 'Sí. De hecho, es la forma recomendada. Comenzamos con un flujo estratégico de alto impacto y, una vez validado, escalamos hacia automatizaciones más avanzadas.' },
      ]
    : [
        { q: 'What is the difference between a chatbot and a real AI agent?', a: 'A chatbot answers predefined questions. An AI agent understands context, learns from your documentation, connects to your systems and executes actions like registering leads, managing bookings or qualifying customers in real time.' },
        { q: 'Can it integrate into my website and WhatsApp at the same time?', a: 'Yes. The agent can work as a web widget and also on WhatsApp Business, maintaining conversation coherence and centralizing information in your CRM.' },
        { q: 'Can it automatically qualify potential customers?', a: 'Yes. The agent can ask strategic questions, collect key data and automatically classify leads before sending them to your sales team.' },
        { q: 'Can it be trained with my documentation or knowledge base?', a: 'Yes. We can integrate documents, internal FAQs or product information so the agent responds with precision aligned to your business.' },
        { q: 'What types of business processes can be automated?', a: 'Invoicing, lead management, CRM and database synchronization, automatic document sending, sales follow-up, internal notifications and more.' },
        { q: 'Do I need to change my current tools?', a: 'No. We adapt to your infrastructure. Automation connects your existing tools without needing to replace them.' },
        { q: 'How does orchestration with n8n work?', a: 'n8n acts as the engine that connects systems together. It receives information, executes actions and synchronizes platforms automatically, eliminating manual tasks and reducing errors.' },
        { q: 'Can I start with a small automation and scale later?', a: 'Yes. In fact, it is the recommended approach. We start with a high-impact strategic flow and, once validated, scale towards more advanced automations.' },
      ];

  // ── SEO service links for new section ──
  const seoServices = isEs
    ? [
        { label: 'Agentes de IA para atención al cliente', path: '/agentes-ia-atencion-cliente-navarra' },
        { label: 'Agentes de voz telefónicos', path: '/agentes-voz-telefonicos-empresas' },
        { label: 'Automatización de procesos empresariales', path: '/automatizacion-procesos-empresas-navarra' },
        { label: 'Sistemas RAG con base de conocimiento', path: '/rag-base-conocimiento-empresas' },
        { label: 'Desarrollo web con inteligencia artificial', path: '/desarrollo-web-inteligencia-artificial' },
        { label: 'Consultoría estratégica en IA', path: '/consultoria-inteligencia-artificial-navarra' },
        { label: 'Diagnóstico IA Navarra', path: '/diagnostico-ia-navarra' },
      ]
    : [
        { label: 'AI customer service agents', path: '/agentes-ia-atencion-cliente-navarra' },
        { label: 'AI voice agents', path: '/agentes-voz-telefonicos-empresas' },
        { label: 'Business process automation', path: '/automatizacion-procesos-empresas-navarra' },
        { label: 'RAG knowledge base systems', path: '/rag-base-conocimiento-empresas' },
        { label: 'AI web development', path: '/desarrollo-web-inteligencia-artificial' },
        { label: 'AI strategic consulting', path: '/consultoria-inteligencia-artificial-navarra' },
        { label: 'AI Diagnosis Navarra', path: '/diagnostico-ia-navarra' },
      ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a,
              },
            })),
          }),
        }}
      />

      <div className="container mx-auto px-4">
        {/* ═══ H1 ═══ */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-glow-primary">
            {isEs
              ? 'Servicios de inteligencia artificial en Navarra para empresas que quieren automatizar, captar clientes y crecer'
              : 'AI Services in Navarra for Businesses That Want to Automate, Capture Customers and Grow'}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {isEs
              ? 'Trabajamos con empresas en Navarra y Pamplona que buscan implementar inteligencia artificial de forma práctica: automatizar procesos, mejorar la atención al cliente y aumentar ingresos sin aumentar estructura.'
              : 'We work with businesses in Navarra and Pamplona looking to implement artificial intelligence practically: automate processes, improve customer service and increase revenue without increasing overhead.'}
          </p>
          <p className="text-sm font-medium text-muted-foreground/90 max-w-3xl mx-auto">
            {isEs
              ? 'Las empresas que implementan estos sistemas están automatizando su operativa, reduciendo costes y aumentando ingresos sin ampliar equipo.'
              : 'Businesses implementing these systems are automating operations, reducing costs and increasing revenue without expanding their team.'}
          </p>
          <p className="text-sm text-muted-foreground/80 max-w-2xl mx-auto">
            {isEs
              ? 'Soluciones listas para producción, no demos ni experimentos.'
              : 'Production-ready solutions, not demos or experiments.'}
          </p>

          {/* System message */}
          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 max-w-3xl mx-auto text-left">
            <p className="text-sm text-muted-foreground">
              {isEs
                ? 'Estos servicios no son herramientas aisladas. Son sistemas que conectan tu negocio, automatizan procesos y permiten captar y gestionar clientes de forma continua.'
                : 'These services are not isolated tools. They are systems that connect your business, automate processes and allow you to capture and manage customers continuously.'}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {isEs
                ? 'Funcionan como un sistema que trabaja de forma continua captando clientes, gestionando procesos y optimizando tu negocio.'
                : 'They work as a system that continuously captures customers, manages processes and optimizes your business.'}
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-32">

          {/* ═══ SERVICIO 1 (70%) ═══ */}
          <section className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="holographic-border rounded-2xl p-8 md:p-14 space-y-12">
              {/* H2 */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-glow-primary">
                  {isEs
                    ? 'Servicio 1 — IA que piensa y conversa'
                    : 'Service 1 — AI that thinks and converses'}
                </h2>
                <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-primary/70">
                  {isEs ? 'Agentes de Inteligencia Artificial en Navarra' : 'Artificial Intelligence Agents in Navarra'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {isEs
                    ? 'Agentes de inteligencia artificial en Navarra diseñados para atención al cliente, captación de leads y soporte automatizado.'
                    : 'Artificial intelligence agents in Navarra designed for customer service, lead capture and automated support.'}
                </p>
                <p className="text-muted-foreground text-base md:text-lg">
                  {isEs
                    ? 'Diseñamos e implementamos agentes de inteligencia artificial conversacional que se integran en tu web, WhatsApp Business y sistemas internos para la captación de clientes, atención automatizada y operación 24/7 en empresas de Navarra.'
                    : 'We design and implement conversational AI agents that integrate into your website, WhatsApp Business and internal systems for customer capture, automated service and 24/7 operation for businesses in Navarra.'}
                </p>
              </div>

              {/* Sub-sections grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {s1Sections.map((s, i) => {
                  const s1Links = [
                    '/agentes-ia-atencion-cliente-navarra',
                    '/rag-base-conocimiento-empresas',
                    '/agentes-voz-telefonicos-empresas',
                    null,
                  ];
                  const s1LinkLabels = isEs
                    ? [
                        'Ver agentes de inteligencia artificial para atención al cliente en Navarra',
                        'Ver agentes RAG con base de conocimiento para empresas en Navarra',
                        'Ver agentes de voz con inteligencia artificial para empresas',
                        null,
                      ]
                    : [
                        'View AI agents for customer service in Navarra',
                        'View RAG agents with knowledge base for businesses in Navarra',
                        'View voice agents with AI for businesses',
                        null,
                      ];
                  return (
                  <div key={i} className="holographic-border rounded-xl p-6 space-y-3 card-hover">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                        {s.icon}
                      </div>
                      <h3 className="text-lg font-bold">{s.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground/80">{s.desc}</p>
                    <ul className="space-y-2 pl-1">
                      {s.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    {s1Links[i] && (
                      <Link
                        href={s1Links[i]!}
                        className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline underline-offset-2 transition-colors mt-2"
                      >
                        {s1LinkLabels[i]}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                  );
                })}
              </div>

              {/* Cross-link to Service 2 */}
              <p className="text-sm text-muted-foreground">
                {isEs
                  ? <>Si además necesitas automatización avanzada, explora nuestro <a href="#servicio-2" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">servicio de automatización inteligente</a>.</>
                  : <>If you also need advanced automation, explore our <a href="#servicio-2" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">intelligent automation service</a>.</>}
              </p>

              {/* Real example */}
              <div className="bg-primary/10 border border-primary/30 rounded-xl p-5">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-primary">
                    {isEs ? 'Ejemplo real activo: ' : 'Live example: '}
                  </span>
                  {isEs
                    ? 'puedes probar un agente funcionando en producción desde el Centro Inteligente del sitio (consulta servicios, resuelve dudas y gestiona citas).'
                    : 'you can try an agent running in production from the AI Center on this site (check services, resolve questions and manage appointments).'}
                </p>
              </div>

              {/* CTA */}
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    const chatBar = document.querySelector('[data-chat-trigger]') as HTMLElement;
                    chatBar?.click();
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-secondary text-secondary-foreground rounded-lg font-bold text-sm hover:bg-secondary/90 transition-all whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4" />
                  {isEs ? 'Probar Centro Inteligente' : 'Try the AI Center'}
                </button>
              </div>
            </div>
          </section>

          {/* ═══ SERVICIO 2 (30%) ═══ */}
          <section id="servicio-2" className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="holographic-border rounded-2xl p-8 md:p-10 space-y-8">
              {/* H2 */}
              <div className="space-y-3">
                <h2 className="text-2xl md:text-4xl font-bold text-glow-primary">
                  {isEs
                    ? 'Servicio 2 — IA que ejecuta y automatiza'
                    : 'Service 2 — AI that executes and automates'}
                </h2>
                <p className="text-xs md:text-sm font-semibold uppercase tracking-widest text-primary/70">
                  {isEs ? 'Automatización empresarial con inteligencia artificial en Navarra' : 'Business automation with artificial intelligence in Navarra'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {isEs
                    ? 'Automatización de procesos empresariales con inteligencia artificial en Navarra para reducir costes y escalar operaciones.'
                    : 'Business process automation with artificial intelligence in Navarra to reduce costs and scale operations.'}
                </p>
              <p className="text-muted-foreground text-base md:text-lg">
                  {isEs
                    ? 'Implementamos automatización inteligente de procesos empresariales en Navarra para eliminar tareas repetitivas, reducir errores humanos y conectar sistemas mediante arquitectura escalable. La infraestructura de automatización trabaja de forma invisible para que tu equipo se centre en decisiones estratégicas.'
                    : 'We implement intelligent business process automation in Navarra to eliminate repetitive tasks, reduce human errors and connect systems through scalable architecture. The automation infrastructure works invisibly so your team can focus on strategic decisions.'}
                </p>
                <p className="text-muted-foreground text-sm md:text-base">
                  {isEs
                    ? 'Transformación digital real: integramos CRMs, ERPs, plataformas cloud, WhatsApp Business y herramientas empresariales en flujos automáticos que mejoran la eficiencia operativa.'
                    : 'Real digital transformation: we integrate CRMs, ERPs, cloud platforms, WhatsApp Business and business tools into automatic flows that improve operational efficiency.'}
                </p>
              </div>

              {/* Sub-sections grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {s2Sections.map((s, i) => {
                  const s2Links = [
                    '/automatizacion-procesos-empresas-navarra',
                    null,
                    null,
                    null,
                    null,
                  ];
                  const s2LinkLabels = isEs
                    ? [
                        'Ver automatización de procesos para empresas en Navarra',
                        null,
                        null,
                        null,
                        null,
                      ]
                    : [
                        'View process automation for businesses in Navarra',
                        null,
                        null,
                        null,
                        null,
                      ];
                  return (
                  <div key={i} className="holographic-border rounded-xl p-5 space-y-3 card-hover">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
                        {s.icon}
                      </div>
                      <h3 className="text-lg font-bold">{s.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground/80">{s.desc}</p>
                    <ul className="space-y-2 pl-1">
                      {s.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    {s2Links[i] && (
                      <Link
                        href={s2Links[i]!}
                        className="inline-flex items-center gap-1.5 text-sm text-secondary font-medium hover:underline underline-offset-2 transition-colors mt-2"
                      >
                        {s2LinkLabels[i]}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                  );
                })}
              </div>

              {/* n8n mention */}
              <p className="text-sm text-muted-foreground">
                {isEs
                  ? 'n8n funciona como el motor de automatización que conecta CRM, ERP, APIs y procesos internos en un único flujo inteligente.'
                  : 'n8n works as the automation engine that connects CRM, ERP, APIs and internal processes into a single intelligent flow.'}
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                {isEs
                  ? 'La automatización no es opcional: es la base de la eficiencia empresarial moderna.'
                  : 'Automation is not optional: it is the foundation of modern business efficiency.'}
              </p>
              <p className="text-sm text-muted-foreground">
                {isEs
                  ? 'Motor de automatización basado en tecnología avanzada como n8n para integraciones seguras, escalables y empresariales. Diseñado para empresas que quieren escalar sin aumentar estructura ni costes operativos.'
                  : 'Automation engine based on advanced technology like n8n for secure, scalable and enterprise-grade integrations. Designed for businesses that want to scale without increasing structure or operational costs.'}
              </p>

              {/* Real example */}
              <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-5">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-secondary">
                    {isEs ? 'Ejemplo real activo: ' : 'Live example: '}
                  </span>
                  {isEs
                    ? <>el botón "<Link href={`${LOVABLE}/automatizacion-ia-navarra`} className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">Solicitar diagnóstico estratégico</Link>" dispara una automatización que recoge tu información y genera un informe personalizado.</>
                    : <>the "<Link href={`${LOVABLE}/automatizacion-ia-navarra`} className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">Request strategic diagnosis</Link>" button triggers an automation that collects your information and generates a personalized report.</>}
                </p>
              </div>

              {/* Urgency + positioning */}
              <div className="space-y-3 text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  {isEs
                    ? 'Cada día sin automatización son clientes que no se atienden y oportunidades que se pierden.'
                    : 'Every day without automation means unattended customers and lost opportunities.'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {isEs
                    ? 'Las empresas en Navarra y Pamplona que implementan inteligencia artificial avanzan más rápido que su competencia.'
                    : 'Businesses in Navarra and Pamplona implementing AI move faster than their competition.'}
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {isEs
                    ? 'No es una herramienta. Es un sistema que transforma cómo funciona tu negocio.'
                    : 'It\'s not a tool. It\'s a system that transforms how your business works.'}
                </p>
              </div>

              {/* CTA – only diagnosis */}
              <div className="flex flex-col items-center gap-3">
                <Link
                  href={`${LOVABLE}/automatizacion-ia-navarra`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:shadow-neon transition-all whitespace-nowrap"
                >
                  {isEs ? 'Solicitar diagnóstico estratégico' : 'Request strategic diagnosis'}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-xs text-muted-foreground max-w-md text-center">
                  {isEs
                    ? 'Descubre qué automatizar, cómo hacerlo y cómo convertir tu empresa en un sistema eficiente en Navarra y Pamplona.'
                    : 'Discover what to automate, how to do it and how to turn your business into an efficient system in Navarra and Pamplona.'}
                </p>
              </div>
            </div>
          </section>

          {/* ═══ BUSINESS IMPACT + POSITIONING ═══ */}
          <section className="animate-fade-in-up" style={{ animationDelay: '0.22s' }}>
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {isEs
                    ? 'Las empresas en Navarra y Pamplona que implementan estos sistemas están reduciendo costes, aumentando ingresos y mejorando su operativa sin necesidad de ampliar equipo.'
                    : 'Businesses in Navarra and Pamplona implementing these systems are reducing costs, increasing revenue and improving operations without needing to expand their team.'}
                </p>
              </div>
              <p className="text-sm font-medium text-center text-muted-foreground">
                {isEs
                  ? 'No vendemos herramientas. Diseñamos sistemas adaptados a cómo funciona tu negocio.'
                  : 'We don\'t sell tools. We design systems adapted to how your business works.'}
              </p>
            </div>
          </section>

          {/* ═══ SEO HUB SECTION ═══ */}
          <section className="animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-center">
                {isEs
                  ? 'Servicios de inteligencia artificial en Navarra para empresas'
                  : 'Artificial intelligence services in Navarra for businesses'}
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                <p>
                  {isEs
                    ? 'En RTP Digital Solutions desarrollamos soluciones de inteligencia artificial en Navarra enfocadas en negocio real.'
                    : 'At RTP Digital Solutions we develop artificial intelligence solutions in Navarra focused on real business.'}
                </p>
                <p>
                  {isEs
                    ? 'Trabajamos con empresas que buscan implementar agentes de inteligencia artificial y automatización para mejorar su operativa diaria.'
                    : 'We work with businesses looking to implement artificial intelligence agents and automation to improve their daily operations.'}
                </p>
                <p>
                  {isEs
                    ? 'Trabajamos con empresas en Pamplona y Navarra que buscan implementar inteligencia artificial real en su operativa diaria.'
                    : 'We work with businesses in Pamplona and Navarra looking to implement real artificial intelligence in their daily operations.'}
                </p>
                <p className="font-medium">
                  {isEs ? 'Nuestros servicios incluyen:' : 'Our services include:'}
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {seoServices.map((service) => (
                  <li key={service.path}>
                    <Link
                      href={service.path}
                      className="flex items-center gap-2 text-sm text-primary hover:underline underline-offset-2 transition-colors group"
                    >
                      <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground/70 pt-2">
                {isEs
                  ? 'Cada uno de estos servicios tiene su propia página optimizada y está enlazado desde esta sección.'
                  : 'Each of these services has its own optimized page and is linked from this section.'}
              </p>
            </div>
          </section>

          {/* ═══ FAQ SEO ═══ */}
          <section className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              {isEs ? 'Preguntas frecuentes sobre agentes IA y automatización en Navarra' : 'FAQ about AI Agents & Automation in Navarra'}
            </h2>
            <div className="holographic-border rounded-2xl p-6 md:p-10">
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, i) => {
                  const isService1 = i < 4;
                  return (
                    <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                      <AccordionTrigger className="text-left text-sm md:text-base font-semibold hover:text-primary transition-colors">
                        <span className="flex items-center gap-2 flex-1">
                          <span className={`inline-flex items-center gap-1 shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${isService1 ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'}`}>
                            {isService1 ? <Bot className="w-3 h-3" /> : <Cog className="w-3 h-3" />}
                            {isService1 ? 'S1' : 'S2'}
                          </span>
                          {faq.q}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Services;


