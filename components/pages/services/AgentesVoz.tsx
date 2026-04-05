'use client';

import { Language } from '@/lib/i18n';
import Link from '@/components/shared/LocalizedLink';
import ServicePageLayout from '@/components/shared/ServicePageLayout';
import RelatedServices from '@/components/shared/RelatedServices';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Clock, Shield, TrendingUp, Users, Zap, Target, Phone, Euro, HeartHandshake, BarChart3, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';

interface Props {
  language: Language;
}

const AgentesVoz = ({ language }: Props) => {
  const isEs = language === 'es';

  const content = {
    es: {
      title: 'Agentes de Voz con IA para Empresas en Navarra: Automatiza llamadas, seguimiento y ventas telefónicas',
      introduction: (
        <>
          No se trata solo de atender llamadas. Un agente de voz con inteligencia artificial automatiza toda la comunicación telefónica de tu empresa: llamadas entrantes, salientes, seguimiento comercial, recordatorios y filtrado de leads. Las llamadas no solo se atienden, también se automatizan. El sistema puede realizar llamadas salientes de forma autónoma para seguimiento comercial, recuperación de clientes, confirmación de citas y encuestas de satisfacción, todo sin intervención humana. Todo ocurre por teléfono, no solo en la web.

          A diferencia de los <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">agentes IA para atención al cliente en Navarra</Link>, esta solución está diseñada para empresas en Navarra que necesitan automatizar su canal telefónico sin contratar más personal. El agente puede atender múltiples llamadas simultáneas, hablar de forma natural y conectar cada conversación con tu CRM, agenda o sistemas internos.
        </>
      ),
      aiReference: 'Este servicio forma parte de un ecosistema completo de inteligencia artificial. Los agentes de voz pueden funcionar junto con la automatización de procesos, agentes web y bases de conocimiento para cubrir toda la operativa de tu empresa.',
      problems: [
        { text: 'Pierdes llamadas cuando estás ocupado o fuera de horario' },
        { text: 'No puedes atender múltiples llamadas a la vez y los clientes cuelgan' },
        { text: 'No haces seguimiento a leads que llaman y no contratan de inmediato' },
        { text: 'No tienes registro ni resumen de lo que se habla en cada llamada' },
        { text: 'No realizas encuestas de satisfacción porque es caro y lleva tiempo' },
        { text: 'Pierdes oportunidades comerciales fuera de horario laboral' },
        { text: 'Tu equipo dedica demasiado tiempo a llamadas repetitivas' },
      ],
      howItWorks: [
        { title: 'Analizamos tus llamadas reales', description: 'Estudiamos qué tipo de llamadas recibes y haces, cuáles son las más frecuentes y cómo puedes automatizarlas sin perder calidad.' },
        { title: 'Diseñamos el agente de voz adaptado', description: 'Creamos un asistente telefónico con voz natural que habla como lo haría tu equipo. Lo entrenamos con la información real de tu negocio.' },
        { title: 'Automatizamos llamadas entrantes y salientes', description: 'El sistema no solo responde llamadas, también puede iniciar llamadas automáticamente para seguimiento, recordatorios, confirmaciones o campañas.' },
        { title: 'Conectamos con CRM, agenda y sistemas', description: 'Integramos el agente con tus herramientas para que registre datos, agende citas, actualice tu CRM y envíe resúmenes automáticos.' },
        { title: 'Generamos resúmenes y datos útiles', description: 'Al terminar cada llamada, recibes un resumen con lo hablado, las acciones pendientes y los datos recogidos para seguimiento.' },
      ],
      examples: [
        { industry: 'Llamadas entrantes automatizadas', description: 'El agente atiende llamadas de clientes, responde preguntas frecuentes, agenda citas y transfiere solo los casos que requieren intervención humana.' },
        { industry: 'Llamadas de seguimiento a clientes', description: 'El sistema contacta automáticamente a leads o clientes para hacer seguimiento comercial, confirmar interés o actualizar datos. Seguimiento automático tras contacto inicial para convertir más leads.' },
        { industry: 'Encuestas automáticas post-servicio', description: 'Después del servicio, el agente llama al cliente, recoge su valoración y genera informes de satisfacción sin intervención manual. Se realizan llamadas automáticamente tras el servicio para recoger feedback real.' },
        { industry: 'Filtrado de leads por teléfono', description: 'El agente cualifica llamadas entrantes o salientes, filtra según criterios del negocio y envía solo los leads válidos al equipo comercial.' },
        { industry: 'Confirmación de citas por voz', description: 'El sistema llama automáticamente para confirmar, modificar o cancelar citas, reduciendo ausencias y optimizando la agenda.' },
        { industry: 'Recuperación de clientes inactivos', description: 'Llamadas salientes automáticas a clientes que no han vuelto, ofreciendo información actualizada o promociones para reactivarlos. Llamadas automáticas para reactivar clientes que no respondieron o abandonaron el proceso.' },
      ],
      benefits: [
        { icon: <Phone className="w-5 h-5" />, text: 'No pierdes llamadas: atiende varias a la vez' },
        { icon: <TrendingUp className="w-5 h-5" />, text: 'Automatiza el seguimiento comercial' },
        { icon: <Users className="w-5 h-5" />, text: 'Reduce la carga de llamadas manuales' },
        { icon: <BarChart3 className="w-5 h-5" />, text: 'Datos reales de cada conversación' },
        { icon: <Target className="w-5 h-5" />, text: 'Mejora la conversión de leads' },
        { icon: <Zap className="w-5 h-5" />, text: 'Escala sin contratar más personal' },
        { icon: <HeartHandshake className="w-5 h-5" />, text: 'Encuestas de satisfacción automatizadas' },
        { icon: <Shield className="w-5 h-5" />, text: 'Registro y resumen de cada llamada' },
        { icon: <Euro className="w-5 h-5" />, text: 'Mucho más barato que teleoperadores' },
        { icon: <ArrowRight className="w-5 h-5" />, text: 'Automatiza seguimiento comercial sin esfuerzo' },
        { icon: <Lightbulb className="w-5 h-5" />, text: 'Recupera oportunidades que antes perdías' },
        { icon: <Clock className="w-5 h-5" />, text: 'Convierte llamadas en un sistema de ventas' },
      ],
      ctaText: 'Tu negocio no debería perder llamadas ni oportunidades. Automatiza tu comunicación con voz inteligente.',
      ctaButton: 'Solicitar diagnóstico estratégico',
      beyondTitle: 'Mucho más que atender llamadas',
      beyondText1: 'Un agente de voz con IA no solo contesta el teléfono. Puede hacer llamadas salientes de forma autónoma: seguimiento comercial, cualificación de leads, encuestas de satisfacción, confirmación de citas y recogida de datos sin intervención humana.',
      beyondText2: (
        <>
          Esto se convierte en una herramienta comercial activa, no solo reactiva. Combinado con la{' '}
          <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">automatización de procesos empresariales</Link>
          , tu empresa puede ejecutar campañas de seguimiento, recuperar clientes inactivos y filtrar oportunidades sin que tu equipo haga una sola llamada.
        </>
      ),
      beyondList: [
        'Llamadas automáticas salientes',
        'Seguimiento comercial automatizado',
        'Cualificación de leads por voz',
        'Encuestas de satisfacción automáticas',
        'Recogida de datos sin intervención humana',
        'Seguimiento automático de leads sin intervención humana',
      ],
      automateSectionTitle: 'Automatiza llamadas, no solo respuestas',
      automateSectionItems: [
        'Llamadas salientes automáticas a clientes o leads',
        'Seguimiento comercial sin intervención manual',
        'Recuperación de clientes que no respondieron',
        'Confirmaciones y recordatorios por voz',
        'Encuestas automáticas tras cada servicio',
        'Recogida de datos sin necesidad de que tu equipo llame',
      ],
      integrationTitle: 'Parte de un sistema completo',
      integrationText: (
        <>
          El agente de voz no es una herramienta aislada. Funciona junto con tu web, tu CRM y tu operativa para crear un sistema de atención y captación completo. Puede trabajar en combinación con{' '}
          <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">desarrollo web con inteligencia artificial</Link>
          {' '}y{' '}
          <Link href="/rag-base-conocimiento-empresas" className="text-primary hover:underline font-medium">agentes RAG con base de conocimiento</Link>
          {' '}para cubrir todos los canales de comunicación de tu empresa.
        </>
      ),
      faqTitle: 'Preguntas frecuentes sobre agentes de voz con IA',
      faqItems: [
        { q: '¿Puede hacer llamadas salientes automáticamente?', a: 'Sí. El agente puede realizar llamadas proactivas para seguimiento comercial, confirmación de citas, encuestas y recuperación de clientes. Todo de forma autónoma y programada.' },
        { q: '¿Puede filtrar clientes antes de pasar a un humano?', a: 'Sí. El agente cualifica cada llamada según los criterios de tu negocio y solo transfiere a tu equipo los casos que realmente lo necesitan.' },
        { q: '¿Se integra con mi CRM?', a: 'Sí. Conectamos el agente con tu CRM, calendario y herramientas internas para que toda la información se registre automáticamente.' },
        { q: '¿Puede registrar y resumir llamadas?', a: 'Sí. Al terminar cada llamada se genera un resumen con los datos relevantes, las acciones pendientes y la valoración del cliente.' },
        { q: '¿Funciona para clínicas, inmobiliarias o servicios?', a: 'Sí. Adaptamos el agente al vocabulario, los procesos y las necesidades de cada sector: clínicas, inmobiliarias, talleres, academias y cualquier empresa de servicios.' },
      ],
    },
    en: {
      title: 'AI Voice Agents for Businesses in Navarra: Automate Calls, Follow-up and Phone Sales',
      introduction: (
        <>
          It's not just about answering calls. An AI voice agent automates your entire phone communication: incoming and outgoing calls, commercial follow-ups, reminders and lead filtering. Calls aren't just answered — they're automated. The system can make outbound calls autonomously for commercial follow-up, customer recovery, appointment confirmations and satisfaction surveys, all without human intervention. Everything happens over the phone, not just on the web.

          Unlike <Link href="/agentes-ia-atencion-cliente-navarra" className="text-primary hover:underline font-medium">AI agents for customer service in Navarra</Link>, this solution is designed for businesses in Navarra that need to automate their phone channel without hiring more staff. The agent can handle multiple simultaneous calls, speak naturally and connect each conversation with your CRM, calendar or internal systems.
        </>
      ),
      aiReference: 'This service is part of a complete AI ecosystem. Voice agents can work alongside process automation, web agents and knowledge bases to cover your entire business operations.',
      problems: [
        { text: 'You miss calls when you\'re busy or outside business hours' },
        { text: 'You can\'t handle multiple calls at once and customers hang up' },
        { text: 'You don\'t follow up on leads who call but don\'t buy immediately' },
        { text: 'You have no record or summary of what\'s discussed in each call' },
        { text: 'You don\'t conduct satisfaction surveys because it\'s expensive and time-consuming' },
        { text: 'You lose business opportunities outside working hours' },
        { text: 'Your team spends too much time on repetitive calls' },
      ],
      howItWorks: [
        { title: 'We analyze your real calls', description: 'We study what types of calls you receive and make, which are the most frequent and how you can automate them without losing quality.' },
        { title: 'We design the adapted voice agent', description: 'We create a phone assistant with a natural voice that speaks like your team would. We train it with your real business information.' },
        { title: 'We automate incoming and outgoing calls', description: 'The system doesn\'t just answer calls — it can also initiate calls automatically for follow-ups, reminders, confirmations or campaigns.' },
        { title: 'We connect with CRM, calendar and systems', description: 'We integrate the agent with your tools so it records data, schedules appointments, updates your CRM and sends automatic summaries.' },
        { title: 'We generate summaries and useful data', description: 'After each call, you receive a summary of what was discussed, pending actions and collected data for follow-up.' },
      ],
      examples: [
        { industry: 'Automated incoming calls', description: 'The agent answers customer calls, responds to FAQs, schedules appointments and only transfers cases that require human intervention.' },
        { industry: 'Customer follow-up calls', description: 'The system automatically contacts leads or customers for commercial follow-up, interest confirmation or data updates. Automatic follow-up after initial contact to convert more leads.' },
        { industry: 'Post-service automatic surveys', description: 'After the service, the agent calls the customer, collects their feedback and generates satisfaction reports without manual intervention. Calls are made automatically after the service to collect real feedback.' },
        { industry: 'Phone lead filtering', description: 'The agent qualifies incoming or outgoing calls, filters by business criteria and only sends valid leads to the sales team.' },
        { industry: 'Voice appointment confirmation', description: 'The system automatically calls to confirm, modify or cancel appointments, reducing no-shows and optimizing the schedule.' },
        { industry: 'Inactive customer recovery', description: 'Automatic outbound calls to customers who haven\'t returned, offering updated information or promotions to reactivate them. Automated calls to re-engage customers who didn\'t respond or dropped off.' },
      ],
      benefits: [
        { icon: <Phone className="w-5 h-5" />, text: 'Never miss a call: handle several at once' },
        { icon: <TrendingUp className="w-5 h-5" />, text: 'Automate commercial follow-up' },
        { icon: <Users className="w-5 h-5" />, text: 'Reduce manual call burden' },
        { icon: <BarChart3 className="w-5 h-5" />, text: 'Real data from every conversation' },
        { icon: <Target className="w-5 h-5" />, text: 'Improve lead conversion' },
        { icon: <Zap className="w-5 h-5" />, text: 'Scale without hiring more staff' },
        { icon: <HeartHandshake className="w-5 h-5" />, text: 'Automated satisfaction surveys' },
        { icon: <Shield className="w-5 h-5" />, text: 'Record and summary of each call' },
        { icon: <Euro className="w-5 h-5" />, text: 'Much cheaper than human operators' },
        { icon: <ArrowRight className="w-5 h-5" />, text: 'Automate commercial follow-up effortlessly' },
        { icon: <Lightbulb className="w-5 h-5" />, text: 'Recover opportunities you were losing' },
        { icon: <Clock className="w-5 h-5" />, text: 'Turn calls into a sales system' },
      ],
      ctaText: 'Your business shouldn\'t lose calls or opportunities. Automate your communication with intelligent voice.',
      ctaButton: 'Request strategic diagnosis',
      beyondTitle: 'Much more than answering calls',
      beyondText1: 'An AI voice agent doesn\'t just answer the phone. It can make outbound calls autonomously: commercial follow-up, lead qualification, satisfaction surveys, appointment confirmation and data collection without human intervention.',
      beyondText2: (
        <>
          This becomes an active commercial tool, not just reactive. Combined with{' '}
          <Link href="/automatizacion-procesos-empresas-navarra" className="text-primary hover:underline font-medium">business process automation</Link>
          , your company can run follow-up campaigns, recover inactive customers and filter opportunities without your team making a single call.
        </>
      ),
      beyondList: [
        'Automatic outbound calls',
        'Automated commercial follow-up',
        'Voice lead qualification',
        'Automatic satisfaction surveys',
        'Data collection without human intervention',
        'Automatic lead follow-up without human intervention',
      ],
      automateSectionTitle: 'Automate calls, not just answers',
      automateSectionItems: [
        'Automatic outbound calls to customers or leads',
        'Commercial follow-up without manual intervention',
        'Recovery of customers who didn\'t respond',
        'Confirmations and reminders by voice',
        'Automatic surveys after each service',
        'Data collection without your team needing to call',
      ],
      integrationTitle: 'Part of a complete system',
      integrationText: (
        <>
          The voice agent is not an isolated tool. It works alongside your website, CRM and operations to create a complete service and acquisition system. It can work in combination with{' '}
          <Link href="/desarrollo-web-inteligencia-artificial" className="text-primary hover:underline font-medium">AI web development</Link>
          {' '}and{' '}
          <Link href="/rag-base-conocimiento-empresas" className="text-primary hover:underline font-medium">RAG knowledge base agents</Link>
          {' '}to cover all your company\'s communication channels.
        </>
      ),
      faqTitle: 'Frequently asked questions about AI voice agents',
      faqItems: [
        { q: 'Can it make outbound calls automatically?', a: 'Yes. The agent can make proactive calls for commercial follow-up, appointment confirmations, surveys and customer recovery. All autonomously and on schedule.' },
        { q: 'Can it filter customers before passing to a human?', a: 'Yes. The agent qualifies each call according to your business criteria and only transfers to your team the cases that really need it.' },
        { q: 'Does it integrate with my CRM?', a: 'Yes. We connect the agent with your CRM, calendar and internal tools so all information is recorded automatically.' },
        { q: 'Can it record and summarize calls?', a: 'Yes. After each call, a summary is generated with relevant data, pending actions and customer assessment.' },
        { q: 'Does it work for clinics, real estate or services?', a: 'Yes. We adapt the agent to the vocabulary, processes and needs of each sector: clinics, real estate, workshops, academies and any service business.' },
      ],
    },
  };

  const c = content[language];

  return (
    <>
            {/* Beyond Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{c.beyondTitle}</h2>
          <div className="holographic-border rounded-xl p-8 space-y-4">
            <p className="text-muted-foreground">{c.beyondText1}</p>
            <p className="text-muted-foreground">{c.beyondText2}</p>
            <ul className="space-y-2 mt-4">
              {c.beyondList.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{c.integrationTitle}</h2>
          <div className="bg-primary/10 border border-primary/30 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground">{c.integrationText}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">{c.faqTitle}</h2>
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

      <RelatedServices
        language={language}
        currentPath="/agentes-voz-telefonicos-empresas"
        relatedKeys={['agentesIA', 'automatizacion', 'rag']}
      />
    </>
  );
};

export default AgentesVoz;




