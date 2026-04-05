'use client';

import { Language } from '@/lib/i18n';
import Link from '@/components/shared/LocalizedLink';
import ServicePageLayout from '@/components/shared/ServicePageLayout';
import RelatedServices from '@/components/shared/RelatedServices';
import { Clock, Shield, TrendingUp, Users, Zap, Target, Globe, Euro, HeartHandshake, Bot, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';

interface Props {
  language: Language;
}

const DesarrolloWebIA = ({ language }: Props) => {
  const content = {
    es: {
      title: 'Desarrollo Web con Inteligencia Artificial para Empresas',
      introduction: <>Tu web ya no es solo una página. Es el centro de tu negocio digital. Es donde llegan tus clientes, donde interactúan, donde toman decisiones y donde se generan oportunidades reales. Con inteligencia artificial integrada, tu web no solo informa: conversa, filtra, recomienda, automatiza y convierte. No es un escaparate. Es un sistema activo que trabaja para ti 24/7. No desarrollamos páginas web. Creamos sistemas digitales que generan negocio. Diseñado para empresas en Navarra que quieren convertir su web en una herramienta real de negocio.</>,
      aiReference: 'Esta misma web es un ejemplo de lo que hacemos: el asistente que ves aquí responde preguntas, explica servicios y gestiona citas. No es una demo: es una web con IA real funcionando en producción. Tu web deja de ser un coste y pasa a ser un activo que genera negocio.',
      problems: [
        { text: 'Tu web es un folleto digital: muestra información pero no interactúa con el visitante' },
        { text: 'Los clientes tienen dudas y no encuentran respuestas: abandonan sin contactar' },
        { text: 'Formularios de contacto que nadie rellena: demasiada fricción para preguntas simples' },
        { text: 'No puedes atender consultas fuera de horario: pierdes oportunidades de venta' },
        { text: 'Cada visitante ve lo mismo: sin personalización según sus intereses' },
        { text: 'Tu equipo pierde tiempo respondiendo las mismas preguntas una y otra vez' },
      ],
      howItWorks: [
        { title: 'Analizamos tu negocio y tu web actual', description: 'Entendemos qué vendes, quiénes son tus clientes y qué información buscan. Identificamos oportunidades para que tu web trabaje más por ti.' },
        { title: 'Diseñamos la experiencia con IA', description: 'Definimos cómo el asistente interactuará con los visitantes: qué preguntas responderá, cómo guiará hacia la conversión, qué información mostrará.' },
        { title: 'Desarrollamos tu web inteligente', description: 'Creamos un sistema web completo, preparado para integrar IA, automatizaciones y herramientas de negocio. No es solo diseño: es infraestructura digital.' },
        { title: 'Productos que hablan', description: 'Si vendes productos o servicios, podemos hacer que "hablen en primera persona": el visitante puede preguntar directamente al producto sobre sus características.' },
        { title: 'Integración con tus herramientas', description: 'Conectamos la web con tu CRM, tu calendario, tu sistema de reservas... las conversaciones se traducen en acciones reales en tu negocio.' },
        { title: 'Optimización continua', description: 'Analizamos las conversaciones, identificamos mejoras y actualizamos el agente para que cada vez sea más útil.' },
      ],
      examples: [
        { industry: 'Tienda online o ecommerce', description: 'Asistente que recomienda productos según lo que el cliente busca, responde dudas sobre tallas, materiales o envíos, y guía hacia la compra. Cada producto puede "hablar" de sí mismo.' },
        { industry: 'Servicios profesionales', description: 'Web que explica tus servicios de forma interactiva, cualifica leads haciendo preguntas, y agenda reuniones automáticamente. El visitante obtiene respuestas sin esperar tu email.' },
        { industry: 'Restaurante o local de hostelería', description: 'Asistente que informa sobre el menú, alérgenos, disponibilidad, y permite reservar mesa directamente desde la conversación.' },
        { industry: 'Inmobiliaria', description: 'Buscador de propiedades conversacional: el cliente dice qué busca y el agente muestra opciones personalizadas, responde sobre características y agenda visitas.' },
        { industry: 'Clínica o centro de salud', description: 'Web que responde sobre servicios médicos, disponibilidad de profesionales, precios orientativos y gestiona citas. Atención 24h sin saturar recepción.' },
        { industry: 'Fabricante o distribuidor', description: 'Catálogo interactivo donde los productos "explican" sus especificaciones técnicas. El prescriptor o el cliente final puede preguntar y obtener respuestas inmediatas.' },
      ],
      benefits: [
        { icon: <Bot className="w-5 h-5" />, text: 'Asistente IA integrado en tu web' },
        { icon: <MessageSquare className="w-5 h-5" />, text: 'Conversaciones que convierten' },
        { icon: <Sparkles className="w-5 h-5" />, text: 'Productos que hablan en primera persona' },
        { icon: <Clock className="w-5 h-5" />, text: 'Atención 24/7 sin personal' },
        { icon: <Users className="w-5 h-5" />, text: 'Experiencia personalizada para cada visitante' },
        { icon: <TrendingUp className="w-5 h-5" />, text: 'Más conversiones, menos abandono' },
        { icon: <Euro className="w-5 h-5" />, text: 'Reducción de consultas repetitivas' },
        { icon: <Shield className="w-5 h-5" />, text: 'Web optimizada para SEO' },
        { icon: <HeartHandshake className="w-5 h-5" />, text: 'Tu equipo se libera para lo importante' },
        { icon: <Target className="w-5 h-5" />, text: 'Leads cualificados automáticamente' },
        { icon: <Globe className="w-5 h-5" />, text: 'Tu web deja de ser un gasto y pasa a generar oportunidades de negocio de forma continua' },
      ],
      ctaText: 'Convierte tu web en el centro de tu negocio con inteligencia artificial',
      ctaButton: 'Solicitar diagnóstico estratégico',
    },
    en: {
      title: 'Web Development with Artificial Intelligence for Businesses',
      introduction: <>Your website is no longer just a page. It is the center of your digital business. It is where your customers arrive, interact, make decisions, and where real opportunities are generated. With integrated artificial intelligence, your website does not just inform: it converses, filters, recommends, automates, and converts. It is not a showcase. It is an active system that works for you 24/7. We don't build web pages. We create digital systems that generate business. Designed for businesses in Navarra that want to turn their website into a real business tool.</>,
      aiReference: 'This very website is an example of what we do: the assistant you see here answers questions, explains services, and manages appointments. It is not a demo: it is a website with real AI running in production. Your website stops being a cost and becomes an asset that generates business.',
      problems: [
        { text: 'Your website is a digital brochure: it shows information but does not interact with the visitor' },
        { text: 'Customers have questions and cannot find answers: they leave without contacting' },
        { text: 'Contact forms that no one fills out: too much friction for simple questions' },
        { text: 'You cannot handle queries outside business hours: you lose sales opportunities' },
        { text: 'Every visitor sees the same thing: no personalization based on their interests' },
        { text: 'Your team wastes time answering the same questions over and over' },
      ],
      howItWorks: [
        { title: 'We analyze your business and current website', description: 'We understand what you sell, who your customers are, and what information they are looking for. We identify opportunities for your website to work harder for you.' },
        { title: 'We design the AI experience', description: 'We define how the assistant will interact with visitors: what questions it will answer, how it will guide toward conversion, what information it will display.' },
        { title: 'We develop your smart website', description: 'We create a complete web system, ready to integrate AI, automations, and business tools. It is not just design: it is digital infrastructure.' },
        { title: 'Products that speak', description: 'If you sell products or services, we can make them "speak in first person": the visitor can ask the product directly about its features.' },
        { title: 'Integration with your tools', description: 'We connect the website with your CRM, calendar, booking system... conversations translate into real actions in your business.' },
        { title: 'Continuous optimization', description: 'We analyze conversations, identify improvements, and update the agent to make it increasingly useful.' },
      ],
      examples: [
        { industry: 'Online store or ecommerce', description: 'Assistant that recommends products based on what the customer is looking for, answers questions about sizes, materials, or shipping, and guides toward purchase. Each product can "speak" about itself.' },
        { industry: 'Professional services', description: 'Website that explains your services interactively, qualifies leads by asking questions, and schedules meetings automatically. The visitor gets answers without waiting for your email.' },
        { industry: 'Restaurant or hospitality', description: 'Assistant that informs about the menu, allergens, availability, and allows table reservations directly from the conversation.' },
        { industry: 'Real estate', description: 'Conversational property search: the customer says what they are looking for and the agent shows personalized options, answers about features, and schedules visits.' },
        { industry: 'Clinic or health center', description: 'Website that answers about medical services, professional availability, indicative prices, and manages appointments. 24h attention without overwhelming reception.' },
        { industry: 'Manufacturer or distributor', description: 'Interactive catalog where products "explain" their technical specifications. The prescriber or end customer can ask and get immediate answers.' },
      ],
      benefits: [
        { icon: <Bot className="w-5 h-5" />, text: 'AI assistant integrated in your website' },
        { icon: <MessageSquare className="w-5 h-5" />, text: 'Conversations that convert' },
        { icon: <Sparkles className="w-5 h-5" />, text: 'Products that speak in first person' },
        { icon: <Clock className="w-5 h-5" />, text: '24/7 attention without staff' },
        { icon: <Users className="w-5 h-5" />, text: 'Personalized experience for each visitor' },
        { icon: <TrendingUp className="w-5 h-5" />, text: 'More conversions, less abandonment' },
        { icon: <Euro className="w-5 h-5" />, text: 'Reduction of repetitive queries' },
        { icon: <Shield className="w-5 h-5" />, text: 'SEO-optimized website' },
        { icon: <HeartHandshake className="w-5 h-5" />, text: 'Your team is freed for what matters' },
        { icon: <Target className="w-5 h-5" />, text: 'Automatically qualified leads' },
        { icon: <Globe className="w-5 h-5" />, text: 'Your website stops being an expense and starts generating business opportunities continuously' },
      ],
      ctaText: 'Turn your website into the center of your business with artificial intelligence',
      ctaButton: 'Request strategic diagnosis',
    },
  };

  const c = content[language];

  const systemBlock = (
    <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.18s' }}>
      <div className="holographic-border rounded-xl p-8">
        <p className="text-muted-foreground mb-5">
          {language === 'es'
            ? 'Desde aquí se conecta todo:'
            : 'Everything connects from here:'}
        </p>
        <ul className="space-y-3">
          {(language === 'es' ? [
            { text: 'Agentes de atención al cliente', to: '/agentes-ia-atencion-cliente-navarra' },
            { text: 'Automatización de procesos', to: '/automatizacion-procesos-empresas-navarra' },
            { text: 'Sistemas de conocimiento (RAG)', to: '/rag-base-conocimiento-empresas' },
            { text: 'Integraciones con CRM, agenda y herramientas internas', to: '' },
          ] : [
            { text: 'Customer service agents', to: '/agentes-ia-atencion-cliente-navarra' },
            { text: 'Process automation', to: '/automatizacion-procesos-empresas-navarra' },
            { text: 'Knowledge systems (RAG)', to: '/rag-base-conocimiento-empresas' },
            { text: 'Integrations with CRM, calendar, and internal tools', to: '' },
          ]).map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
              {item.to ? (
                <Link href={item.to} className="text-primary hover:underline font-medium">{item.text}</Link>
              ) : (
                <span className="text-muted-foreground font-medium">{item.text}</span>
              )}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground mt-5">
          {language === 'es'
            ? 'Tu web se convierte en el punto de entrada y control de todo tu negocio digital.'
            : 'Your website becomes the entry point and control center for your entire digital business.'}
        </p>
      </div>
    </section>
  );

  return (
    <>
      <ServicePageLayout
        language={language}
        title={c.title}
        introduction={c.introduction}
        problems={c.problems}
        howItWorks={c.howItWorks}
        examples={c.examples}
        benefits={c.benefits}
        ctaText={c.ctaText}
        ctaButton={c.ctaButton}
        aiReference={c.aiReference}
        beforeHowItWorks={systemBlock}
      />
      <RelatedServices
        language={language}
        currentPath="/desarrollo-web-inteligencia-artificial"
        relatedKeys={['consultoria', 'agentesIA', 'automatizacion']}
      />
    </>
  );
};

export default DesarrolloWebIA;




