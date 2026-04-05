'use client';

import { Language } from '@/lib/i18n';
import Link from '@/components/shared/LocalizedLink';
import ServicePageLayout from '@/components/shared/ServicePageLayout';
import { Clock, Shield, TrendingUp, Users, Zap, Target, HeartHandshake, Euro, ArrowRight, Lightbulb, CheckCircle2, LayoutDashboard } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface Props {
  language: Language;
}

const AgentesIANavarra = ({ language }: Props) => {
  const content = {
    es: {
      title: 'Agentes de IA embebidos en tu web para captar clientes y automatizar la atención en Navarra',
      introduction: (
        <>
          Diseñamos e implementamos agentes de inteligencia artificial integrados en páginas web para empresas de Navarra. No solo responden preguntas: guían al cliente, explican servicios, gestionan reservas, muestran información personalizada y conectan la atención con la operativa real de tu negocio.
          <br /><br />
          Según el tipo de empresa, el sistema puede permitir reservar citas, consultar historial, acceder a un dashboard personal, ver el estado de un proceso o interactuar con información específica de cada cliente desde una experiencia integrada en tu web.
          <br /><br />
          También puede conectarse a WhatsApp, CRM y otros sistemas, pero el enfoque principal de este servicio es convertir tu página web en un canal inteligente de atención, conversión y seguimiento.
          <br /><br />
          <span className="font-medium text-foreground">Soluciones reales para empresas en Navarra que quieren ofrecer atención automatizada, organizada y útil desde su propia web.</span>
          <br /><br />
          <span className="text-muted-foreground">Trabajamos con empresas en Pamplona y Navarra que quieren convertir su web en un canal real de captación y atención inteligente.</span>
        </>
      ),
      aiReference: 'El asistente que ves en esta web es una muestra real del enfoque del servicio: atención inteligente integrada en la página, capaz de responder, guiar y conectarse con acciones reales del negocio. No es una demo aislada.',
      problems: [
        { text: 'Tu web informa, pero no acompaña al cliente ni le ayuda a avanzar' },
        { text: 'Recibes las mismas preguntas una y otra vez sobre servicios, disponibilidad, precios o próximos pasos' },
        { text: 'Si el cliente entra fuera de horario, no encuentra ayuda y abandona' },
        { text: 'No tienes una forma clara de guiar a cada usuario según su caso o necesidad' },
        { text: 'Tu equipo pierde tiempo atendiendo tareas repetitivas que podrían automatizarse' },
        { text: 'El cliente no puede consultar fácilmente citas, historial, estado del proceso o información personalizada' },
        { text: 'Tu atención depende demasiado de personas concretas y no de un sistema organizado' },
      ],
      howItWorks: [
        { title: 'Analizamos tu atención y tu operativa', description: 'Estudiamos cómo atiendes hoy, qué preguntas recibes, qué acciones necesita completar el cliente y qué partes se pueden automatizar sin perder calidad.' },
        { title: 'Diseñamos el agente embebido en tu web', description: 'Creamos una experiencia integrada dentro de tu página para que el visitante no solo consulte información, sino que también pueda avanzar en su proceso desde la propia web.' },
        { title: 'Conectamos reservas, datos y seguimiento', description: 'Según el proyecto, el sistema puede conectarse con calendarios, CRM, formularios, bases de datos o herramientas internas para mostrar citas, historial, estado del servicio o información personalizada.' },
        { title: 'Mejoramos la experiencia y la conversión', description: 'Medimos cómo interactúan los usuarios, qué consultas hacen y dónde se bloquean, para optimizar respuestas, flujos y conversiones con el tiempo.' },
      ],
      examples: [
        { industry: 'Centro de estética o peluquería', description: 'El cliente entra en la web, consulta tratamientos, resuelve dudas, reserva cita, ve su próxima sesión y accede a su historial o seguimiento desde un entorno digital más organizado.' },
        { industry: 'Clínica o centro de salud', description: 'El asistente explica servicios, orienta al paciente, ayuda a solicitar cita, responde preguntas frecuentes y puede mostrar información útil según el perfil o etapa del proceso.' },
        { industry: 'Inmobiliaria', description: 'El usuario consulta propiedades, recibe orientación según sus intereses, conoce en qué fase está su proceso y puede acceder a un panel con seguimiento, documentación o próximas acciones.' },
        { industry: 'Academia o formación', description: 'El visitante descubre cursos, resuelve dudas, inicia matrícula, consulta horarios y puede entrar en su área con información personalizada, progreso o próximas clases.' },
        { industry: 'Taller, servicio técnico o empresa de mantenimiento', description: 'El cliente solicita asistencia, explica su incidencia, consulta el estado del caso y accede a información de seguimiento sin depender siempre de llamadas o correos.' },
        { industry: 'Negocio de servicios profesionales', description: 'La web responde preguntas, filtra necesidades, cualifica leads y ofrece una experiencia más útil, donde el cliente puede avanzar desde la información inicial hasta la solicitud o seguimiento del servicio.' },
      ],
      benefits: [
        { icon: <Zap className="w-5 h-5" />, text: 'Atención automatizada desde tu propia web' },
        { icon: <Users className="w-5 h-5" />, text: 'Mejor experiencia para el cliente desde el primer contacto' },
        { icon: <Clock className="w-5 h-5" />, text: 'Menos preguntas repetitivas para tu equipo' },
        { icon: <TrendingUp className="w-5 h-5" />, text: 'Más conversiones desde una web que guía de verdad' },
        { icon: <Target className="w-5 h-5" />, text: 'Posibilidad de reservas, seguimiento y autoservicio' },
        { icon: <LayoutDashboard className="w-5 h-5" />, text: 'Información más ordenada y accesible para el cliente' },
        { icon: <HeartHandshake className="w-5 h-5" />, text: 'Integración con tu operativa real, no solo respuestas' },
        { icon: <Shield className="w-5 h-5" />, text: 'Escalabilidad sin depender de atención manual continua' },
        { icon: <Euro className="w-5 h-5" />, text: 'Imagen más profesional, moderna y útil para tu negocio' },
      ],
      ctaText: 'Si tu web hoy solo informa, estás perdiendo oportunidades. Tu web puede hacer mucho más que responder preguntas. Puede atender, organizar, reservar y acompañar al cliente de forma inteligente.',
      ctaButton: 'Solicitar diagnóstico estratégico',
      // New SEO section
      seoTitle: 'Mucho más que un chatbot: atención inteligente integrada en tu negocio',
      seoText1: 'Un agente IA para atención al cliente no tiene por qué limitarse a responder preguntas. En muchos proyectos, la verdadera mejora aparece cuando la atención se conecta con acciones reales: reservas, áreas privadas, seguimiento de procesos, historiales, documentación o dashboards personalizados.',
      seoText2: 'En RTP Digital Solutions diseñamos este tipo de experiencias para empresas de Navarra que quieren que su web deje de ser un escaparate pasivo y se convierta en una herramienta útil para captar, atender y acompañar al cliente.',
      seoItems: [
        'Agente embebido en la web',
        'Reservas y gestión de citas',
        'Historial y seguimiento del cliente',
        'Dashboard o área personalizada',
        'Integración con CRM y sistemas internos',
        'Atención conectada con la operativa del negocio',
      ],
      seoFinal: 'Implementamos soluciones de inteligencia artificial en Pamplona y Navarra para empresas que quieren digitalizar y automatizar su atención al cliente con valor real.',
      // FAQ
      faqTitle: 'Preguntas frecuentes sobre agentes IA para atención al cliente en Navarra',
      faqItems: [
        { q: '¿Qué diferencia hay entre un chatbot y un agente IA embebido en la web?', a: 'Un chatbot básico responde preguntas predefinidas. Un agente IA embebido comprende el contexto, guía al usuario, se conecta con sistemas reales y puede ejecutar acciones como reservas, seguimiento o acceso a información personalizada desde la propia web.' },
        { q: '¿Puede mi web permitir reservas o acciones reales además de responder preguntas?', a: 'Sí. Según el tipo de negocio, el agente puede integrarse con calendarios, formularios de reserva, sistemas de gestión de citas y otros procesos para que el cliente avance sin salir de tu web.' },
        { q: '¿Se puede conectar con CRM, calendario o herramientas internas?', a: 'Sí. Diseñamos integraciones con CRM, ERP, calendarios, bases de datos y herramientas internas para que la atención esté conectada con tu operativa real.' },
        { q: '¿Es posible mostrar al cliente su historial o el estado de su proceso?', a: 'Dependiendo del proyecto, sí. Se puede crear un área personalizada donde el cliente consulte citas, estado de servicios, documentación o cualquier dato relevante para su caso.' },
        { q: '¿Sirve este sistema para clínicas, inmobiliarias, estética o academias?', a: 'Sí. Trabajamos con diferentes sectores adaptando el agente a las necesidades específicas de cada tipo de negocio: reservas, seguimiento de pacientes, gestión de propiedades, matrículas, etc.' },
        { q: '¿También puede funcionar por WhatsApp además de la web?', a: 'Sí. WhatsApp es un canal adicional que puede conectarse al mismo sistema. Sin embargo, el foco principal de este servicio es la experiencia integrada en tu página web.' },
        { q: '¿Necesito cambiar mi web entera para implementar este sistema?', a: 'No. El agente se integra en tu web actual sin necesidad de rediseñarla. Se adapta a tu estructura, diseño y flujos existentes.' },
        { q: '¿Cómo se adapta el agente a los servicios concretos de mi empresa?', a: 'Entrenamos el agente con información específica de tu negocio: servicios, precios, procesos, preguntas frecuentes y flujos de atención. Cada implementación es personalizada.' },
      ],
      // Related services
      relatedServices: [
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
        {
          path: '/automatizacion-procesos-empresas-navarra',
          title: 'Automatización de procesos empresariales',
          desc: 'Flujos automatizados con IA para CRM, reservas, documentos y operativa interna.',
          cta: 'Ver automatización de procesos',
        },
      ],
    },
    en: {
      title: 'AI Agents Embedded in Your Website to Capture Clients and Automate Customer Service in Navarra',
      introduction: (
        <>
          We design and implement AI agents integrated into websites for businesses in Navarra. They don't just answer questions: they guide the customer, explain services, manage bookings, display personalized information and connect service with your real business operations.
          <br /><br />
          Depending on the business type, the system can enable appointment booking, history consultation, access to a personal dashboard, process status tracking or interaction with client-specific information from an integrated web experience.
          <br /><br />
          It can also connect to WhatsApp, CRM and other systems, but the main focus of this service is turning your website into an intelligent channel for service, conversion and follow-up.
          <br /><br />
          <span className="font-medium text-foreground">Real solutions for businesses in Navarra that want to offer automated, organized and useful service from their own website.</span>
        </>
      ),
      aiReference: 'The assistant you see on this website is a real example of the service approach: intelligent service integrated into the page, capable of responding, guiding and connecting with real business actions. It is not an isolated demo.',
      problems: [
        { text: 'Your website informs, but doesn\'t guide the customer or help them move forward' },
        { text: 'You receive the same questions over and over about services, availability, prices or next steps' },
        { text: 'If the customer visits outside hours, they find no help and leave' },
        { text: 'You have no clear way to guide each user based on their case or need' },
        { text: 'Your team wastes time on repetitive tasks that could be automated' },
        { text: 'The customer cannot easily check appointments, history, process status or personalized information' },
        { text: 'Your service depends too much on specific people and not on an organized system' },
      ],
      howItWorks: [
        { title: 'We analyze your service and operations', description: 'We study how you serve customers today, what questions you receive, what actions customers need to complete and which parts can be automated without losing quality.' },
        { title: 'We design the agent embedded in your website', description: 'We create an integrated experience within your page so visitors don\'t just check information, but can also progress through their process from the website itself.' },
        { title: 'We connect bookings, data and follow-up', description: 'Depending on the project, the system can connect with calendars, CRM, forms, databases or internal tools to show appointments, history, service status or personalized information.' },
        { title: 'We improve the experience and conversion', description: 'We measure how users interact, what queries they make and where they get stuck, to optimize responses, flows and conversions over time.' },
      ],
      examples: [
        { industry: 'Beauty salon or hairdresser', description: 'The client enters the website, checks treatments, resolves doubts, books appointments, sees their next session and accesses their history from a more organized digital environment.' },
        { industry: 'Clinic or health center', description: 'The assistant explains services, guides patients, helps request appointments, answers FAQs and can show useful information based on profile or process stage.' },
        { industry: 'Real estate agency', description: 'The user checks properties, receives guidance based on interests, knows their process stage and can access a panel with tracking, documentation or next actions.' },
        { industry: 'Academy or training center', description: 'The visitor discovers courses, resolves doubts, starts enrollment, checks schedules and can access their area with personalized information, progress or upcoming classes.' },
        { industry: 'Workshop, tech service or maintenance company', description: 'The client requests assistance, explains their issue, checks case status and accesses follow-up information without always relying on calls or emails.' },
        { industry: 'Professional services business', description: 'The website answers questions, filters needs, qualifies leads and offers a more useful experience where the client can progress from initial information to service request or follow-up.' },
      ],
      benefits: [
        { icon: <Zap className="w-5 h-5" />, text: 'Automated service from your own website' },
        { icon: <Users className="w-5 h-5" />, text: 'Better customer experience from the first contact' },
        { icon: <Clock className="w-5 h-5" />, text: 'Fewer repetitive questions for your team' },
        { icon: <TrendingUp className="w-5 h-5" />, text: 'More conversions from a website that truly guides' },
        { icon: <Target className="w-5 h-5" />, text: 'Booking, follow-up and self-service capabilities' },
        { icon: <LayoutDashboard className="w-5 h-5" />, text: 'More organized and accessible information for customers' },
        { icon: <HeartHandshake className="w-5 h-5" />, text: 'Integration with your real operations, not just answers' },
        { icon: <Shield className="w-5 h-5" />, text: 'Scalability without relying on continuous manual service' },
        { icon: <Euro className="w-5 h-5" />, text: 'More professional, modern and useful image for your business' },
      ],
      ctaText: 'Your website can do much more than answer questions. It can serve, organize, book and accompany the customer intelligently.',
      ctaButton: 'Request strategic diagnosis',
      seoTitle: 'Much more than a chatbot: intelligent service integrated into your business',
      seoText1: 'An AI agent for customer service doesn\'t have to be limited to answering questions. In many projects, the real improvement comes when service connects with real actions: bookings, private areas, process tracking, histories, documentation or personalized dashboards.',
      seoText2: 'At RTP Digital Solutions we design this type of experience for businesses in Navarra that want their website to stop being a passive showcase and become a useful tool to capture, serve and accompany the customer.',
      seoItems: [
        'Agent embedded in the website',
        'Bookings and appointment management',
        'Customer history and follow-up',
        'Dashboard or personalized area',
        'Integration with CRM and internal systems',
        'Service connected with business operations',
      ],
      seoFinal: 'We implement AI solutions in Pamplona and Navarra for businesses that want to digitize and automate their customer service with real value.',
      faqTitle: 'Frequently asked questions about AI agents for customer service in Navarra',
      faqItems: [
        { q: 'What is the difference between a chatbot and an AI agent embedded in the website?', a: 'A basic chatbot answers predefined questions. An embedded AI agent understands context, guides the user, connects with real systems and can execute actions like bookings, follow-up or access to personalized information from the website itself.' },
        { q: 'Can my website allow bookings or real actions besides answering questions?', a: 'Yes. Depending on the business type, the agent can integrate with calendars, booking forms, appointment management systems and other processes so the customer can progress without leaving your website.' },
        { q: 'Can it connect with CRM, calendar or internal tools?', a: 'Yes. We design integrations with CRM, ERP, calendars, databases and internal tools so that service is connected with your real operations.' },
        { q: 'Is it possible to show the customer their history or process status?', a: 'Depending on the project, yes. A personalized area can be created where the customer checks appointments, service status, documentation or any relevant data for their case.' },
        { q: 'Does this system work for clinics, real estate, beauty or academies?', a: 'Yes. We work with different sectors adapting the agent to each business type\'s specific needs: bookings, patient follow-up, property management, enrollments, etc.' },
        { q: 'Can it also work via WhatsApp besides the website?', a: 'Yes. WhatsApp is an additional channel that can connect to the same system. However, the main focus of this service is the integrated experience on your website.' },
        { q: 'Do I need to change my entire website to implement this system?', a: 'No. The agent integrates into your current website without needing a redesign. It adapts to your existing structure, design and flows.' },
        { q: 'How does the agent adapt to my company\'s specific services?', a: 'We train the agent with your business-specific information: services, prices, processes, FAQs and service flows. Each implementation is customized.' },
      ],
      relatedServices: [
        {
          path: '/desarrollo-web-inteligencia-artificial',
          title: 'Web development with artificial intelligence',
          desc: 'Intelligent websites with integrated AI agents, automated service and personalized experiences.',
          cta: 'View AI web development',
        },
        {
          path: '/rag-base-conocimiento-empresas',
          title: 'RAG agents and knowledge base',
          desc: 'Assistants connected to documentation, processes and internal content for precise answers.',
          cta: 'View RAG agents for businesses',
        },
        {
          path: '/automatizacion-procesos-empresas-navarra',
          title: 'Business process automation',
          desc: 'AI-powered automated flows for CRM, bookings, documents and internal operations.',
          cta: 'View process automation',
        },
      ],
    },
  };

  const c = content[language];
  const casesLink = language === 'es' ? 'Ver casos de éxito' : 'View success stories';

  return (
    <>
            {/* SEO Value Section - Before CTA */}
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
              <ul className="grid md:grid-cols-2 gap-3 mb-6">
                {c.seoItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-card/50 border border-border rounded-lg p-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm leading-relaxed border-t border-border pt-6">
                {c.seoFinal}
              </p>
              {/* Internal links */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary text-sm hover:underline font-medium">
                  {language === 'es' ? 'Desarrollo web con inteligencia artificial' : 'AI web development'}
                </Link>
                <span className="text-muted-foreground">·</span>
                <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary text-sm hover:underline font-medium">
                  {language === 'es' ? 'Automatización de procesos empresariales' : 'Business process automation'}
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

export default AgentesIANavarra;




