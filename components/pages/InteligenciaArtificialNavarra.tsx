'use client';

import { Language } from '@/lib/i18n';
const LOVABLE = process.env.NEXT_PUBLIC_LOVABLE_URL || 'https://rtpdigitalsolutions.lovable.app';
import { Button } from '@/components/ui/button';
import {
  Bot, Cog, Phone, BookOpen, Globe, Building2,
  UtensilsCrossed, ShoppingBag, Stethoscope, ArrowRight,
  TrendingUp, Users, Clock, Shield, Zap, BarChart3,
  CheckCircle2, Lightbulb, Target,
} from 'lucide-react';

interface Props {
  language: Language;
}

const InteligenciaArtificialNavarra = ({ language }: Props) => {
  const isEs = language === 'es';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'RTP Digital Solutions',
    description: 'Implementamos inteligencia artificial para empresas en Navarra: agentes IA, automatización de procesos, chatbots y soluciones de voz.',
    url: 'https://rtpdigitalsolutions.es',
    telephone: '+34 641 76 56 98',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pamplona',
      addressRegion: 'Navarra',
      addressCountry: 'ES',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Navarra',
    },
    serviceType: [
      'Inteligencia Artificial',
      'Agentes IA',
      'Automatización de procesos',
      'Chatbots empresariales',
      'Agentes de voz',
    ],
  };

  const services = [
    {
      icon: Bot,
      titleEs: 'Agentes de inteligencia artificial para atención al cliente',
      titleEn: 'AI Agents for Customer Service',
      descEs: 'Asistentes inteligentes 24/7 integrados en tu web y WhatsApp que captan clientes, resuelven dudas y gestionan citas de forma autónoma.',
      descEn: 'Smart 24/7 assistants integrated into your website and WhatsApp that capture customers, resolve queries and manage appointments autonomously.',
      path: '/agentes-ia-atencion-cliente-navarra',
    },
    {
      icon: Cog,
      titleEs: 'Automatización de procesos empresariales',
      titleEn: 'Business Process Automation',
      descEs: 'Flujos automatizados con n8n que conectan CRM, ERP, facturación y operaciones para eliminar tareas manuales y reducir errores.',
      descEn: 'Automated n8n flows connecting CRM, ERP, invoicing and operations to eliminate manual tasks and reduce errors.',
      path: '/automatizacion-procesos-empresas-navarra',
    },
    {
      icon: BookOpen,
      titleEs: 'RAG: base de conocimiento inteligente',
      titleEn: 'RAG: Intelligent Knowledge Base',
      descEs: 'IA conectada a tu documentación interna para dar respuestas precisas basadas en datos reales de tu empresa.',
      descEn: 'AI connected to your internal documentation to provide precise answers based on your company\'s real data.',
      path: '/rag-base-conocimiento-empresas',
    },
    {
      icon: Globe,
      titleEs: 'Desarrollo web con inteligencia artificial',
      titleEn: 'AI Web Development',
      descEs: 'Páginas web inteligentes con agentes IA integrados que convierten visitantes en clientes y centralizan tu operativa digital.',
      descEn: 'Smart websites with integrated AI agents that convert visitors into customers and centralize your digital operations.',
      path: '/desarrollo-web-inteligencia-artificial',
    },
    {
      icon: Target,
      titleEs: 'Diagnóstico estratégico de IA',
      titleEn: 'AI Strategic Diagnosis',
      descEs: 'Análisis de tu empresa para definir qué automatizar, cómo hacerlo y qué impacto tendrá en tu negocio.',
      descEn: 'Analysis of your business to define what to automate, how to do it and what impact it will have.',
      path: '/diagnostico-ia-navarra',
    },
  ];

  const sectors = [
    {
      icon: Stethoscope,
      titleEs: 'Inteligencia artificial para clínicas en Navarra',
      titleEn: 'AI for Clinics in Navarra',
      descEs: 'Gestión de citas, atención automatizada y seguimiento de pacientes.',
      descEn: 'Appointment management, automated care and patient follow-up.',
      path: '/ia-clinicas-navarra',
    },
    {
      icon: UtensilsCrossed,
      titleEs: 'Inteligencia artificial para restaurantes en Navarra',
      titleEn: 'AI for Restaurants in Navarra',
      descEs: 'Reservas automáticas, carta digital inteligente y fidelización de clientes.',
      descEn: 'Automatic reservations, smart digital menu and customer loyalty.',
      path: '/ia-restaurantes-navarra',
    },
    {
      icon: ShoppingBag,
      titleEs: 'Inteligencia artificial para comercios en Navarra',
      titleEn: 'AI for Retail in Navarra',
      descEs: 'Atención automática, recomendaciones personalizadas y recuperación de ventas.',
      descEn: 'Automatic service, personalized recommendations and sales recovery.',
      path: '/ia-comercios-navarra',
    },
  ];

  const benefits = [
    { icon: <TrendingUp className="w-5 h-5" />, textEs: 'Más ingresos sin aumentar equipo', textEn: 'More revenue without growing headcount' },
    { icon: <Clock className="w-5 h-5" />, textEs: 'Atención inmediata que mejora la conversión', textEn: 'Immediate service that improves conversion' },
    { icon: <BarChart3 className="w-5 h-5" />, textEs: 'Reducción de costes operativos', textEn: 'Reduced operational costs' },
    { icon: <Zap className="w-5 h-5" />, textEs: 'Optimización de procesos internos', textEn: 'Internal process optimization' },
    { icon: <Users className="w-5 h-5" />, textEs: 'Mejor experiencia del cliente', textEn: 'Better customer experience' },
    { icon: <Shield className="w-5 h-5" />, textEs: 'Escalabilidad del negocio', textEn: 'Business scalability' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-28 pb-20">
        {/* ═══ HERO ═══ */}
        <section className="container mx-auto px-4 max-w-4xl mb-20 animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-bold text-glow-primary mb-8 leading-tight text-center">
            {isEs
              ? 'Inteligencia artificial en Navarra para empresas que quieren automatizar, vender más y crecer'
              : 'Artificial Intelligence in Navarra for Businesses That Want to Automate, Sell More and Grow'}
          </h1>

          <p className="text-center text-primary font-bold text-base md:text-lg mb-8 max-w-3xl mx-auto">
            {isEs
              ? 'Si tu empresa no está automatizando procesos, estás perdiendo clientes cada día.'
              : 'If your business isn\'t automating processes, you\'re losing customers every day.'}
          </p>

          <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center">
            <p>
              {isEs
                ? 'Las empresas en Navarra y especialmente en Pamplona están adoptando inteligencia artificial para automatizar procesos, mejorar la atención al cliente y aumentar ingresos sin ampliar equipo.'
                : 'Businesses in Navarra and especially in Pamplona are adopting artificial intelligence to automate processes, improve customer service and increase revenue without expanding their team.'}
            </p>
            <p>
              {isEs
                ? 'En RTP Digital Solutions diseñamos sistemas de inteligencia artificial adaptados a cada negocio: desde la captación de clientes hasta la automatización completa de procesos.'
                : 'At RTP Digital Solutions we design artificial intelligence systems tailored to each business: from customer acquisition to complete process automation.'}
            </p>
            <p>
              {isEs
                ? 'Las empresas que implementan inteligencia artificial están aumentando ingresos, reduciendo costes y optimizando su operativa sin necesidad de ampliar equipo.'
                : 'Businesses implementing artificial intelligence are increasing revenue, reducing costs and optimizing operations without needing to expand their team.'}
            </p>
          </div>

          {/* Strong positioning */}
          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mt-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-muted-foreground text-sm md:text-base">
                {isEs
                  ? 'No se trata de implementar herramientas aisladas. Se trata de crear un sistema que trabaje para tu empresa de forma continua.'
                  : 'It\'s not about implementing isolated tools. It\'s about creating a system that works for your business continuously.'}
              </p>
            </div>
          </div>
        </section>

        {/* ═══ WHAT IS AI FOR BUSINESS ═══ */}
        <section className="container mx-auto px-4 max-w-4xl mb-20 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            {isEs
              ? 'Cómo la inteligencia artificial está transformando las empresas en Navarra'
              : 'How AI is Transforming Businesses in Navarra'}
          </h2>
          <div className="space-y-4 text-muted-foreground text-base leading-relaxed max-w-3xl mx-auto">
            <p>
              {isEs
                ? 'La inteligencia artificial permite automatizar tareas, responder a clientes al instante, analizar información y optimizar la operativa de cualquier negocio.'
                : 'Artificial intelligence enables automating tasks, responding to customers instantly, analyzing information and optimizing operations for any business.'}
            </p>
            <p>
              {isEs
                ? 'Desde pequeños comercios hasta clínicas o empresas de servicios, cada vez más negocios en Navarra están utilizando IA para mejorar resultados sin aumentar costes.'
                : 'From small shops to clinics or service businesses, more and more companies in Navarra are using AI to improve results without increasing costs.'}
            </p>
          </div>
        </section>

        {/* ═══ PAIN BLOCK ═══ */}
        <section className="container mx-auto px-4 max-w-4xl mb-20 animate-fade-in-up" style={{ animationDelay: '0.12s' }}>
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-8 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-center">
              {isEs ? 'El problema real en la mayoría de empresas' : 'The Real Problem in Most Businesses'}
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed text-center max-w-3xl mx-auto">
              {isEs
                ? 'Muchas empresas en Navarra siguen perdiendo clientes por no responder a tiempo, dependen de procesos manuales y tienen sistemas desconectados que dificultan el crecimiento.'
                : 'Many businesses in Navarra keep losing customers by not responding on time, depend on manual processes and have disconnected systems that hinder growth.'}
            </p>
            <p className="text-muted-foreground text-base leading-relaxed text-center max-w-3xl mx-auto">
              {isEs
                ? 'Esto provoca pérdida de oportunidades, ineficiencias internas y una experiencia de cliente peor frente a la competencia.'
                : 'This causes lost opportunities, internal inefficiencies and a worse customer experience compared to the competition.'}
            </p>
          </div>
          <p className="text-center text-primary font-semibold mt-6 text-base md:text-lg">
            {isEs
              ? 'Si esto te suena, tu empresa ya necesita un sistema inteligente.'
              : 'If this sounds familiar, your business already needs an intelligent system.'}
          </p>
          <p className="text-center text-muted-foreground mt-3 text-sm md:text-base font-medium">
            {isEs
              ? 'No es una mejora opcional. Es lo que separa a las empresas que crecen de las que se quedan atrás.'
              : 'It\'s not an optional upgrade. It\'s what separates businesses that grow from those that fall behind.'}
          </p>
        </section>

        {/* ═══ SYSTEM EXPLANATION ═══ */}
        <section className="container mx-auto px-4 max-w-4xl mb-20 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            {isEs ? 'Tu empresa como un sistema inteligente' : 'Your Business as an Intelligent System'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Client side */}
            <div className="holographic-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-primary mb-4">
                {isEs ? 'Un cliente puede:' : 'A customer can:'}
              </h3>
              <ul className="space-y-3">
                {(isEs
                  ? ['Recibir respuesta inmediata 24/7', 'Consultar información, productos o servicios', 'Reservar, comprar o contactar sin fricción']
                  : ['Get immediate response 24/7', 'Browse information, products or services', 'Book, buy or contact without friction']
                ).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business side */}
            <div className="holographic-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-primary mb-4">
                {isEs ? 'Tu empresa puede:' : 'Your business can:'}
              </h3>
              <ul className="space-y-3">
                {(isEs
                  ? ['Automatizar atención al cliente', 'Centralizar información y procesos', 'Gestionar clientes de forma inteligente', 'Optimizar operaciones internas']
                  : ['Automate customer service', 'Centralize information and processes', 'Manage customers intelligently', 'Optimize internal operations']
                ).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-6 text-sm md:text-base font-medium">
            {isEs
              ? 'Tu negocio deja de depender de procesos manuales y pasa a funcionar como un sistema conectado.'
              : 'Your business stops depending on manual processes and starts operating as a connected system.'}
          </p>
          <p className="text-center text-muted-foreground mt-3 text-sm md:text-base">
            {isEs
              ? 'Además, puedes entender mejor a tus clientes, anticiparte a sus necesidades y mejorar tus resultados de forma continua.'
              : 'You can also better understand your customers, anticipate their needs and continuously improve your results.'}
          </p>
          <p className="text-center text-primary font-semibold mt-4 text-sm md:text-base">
            {isEs
              ? 'Esto no es teoría. Es lo que ya están haciendo empresas que están creciendo más rápido en Navarra.'
              : 'This is not theory. It\'s what businesses growing faster in Navarra are already doing.'}
          </p>
        </section>

        {/* ═══ SERVICES OVERVIEW ═══ */}
        <section className="container mx-auto px-4 max-w-5xl mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            {isEs
              ? 'Soluciones de inteligencia artificial para empresas en Navarra'
              : 'AI Solutions for Businesses in Navarra'}
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            {isEs
              ? 'Implementamos soluciones adaptadas a cada empresa según sus necesidades:'
              : 'We implement solutions tailored to each business according to their needs:'}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <a
                  key={service.path}
                  href={`${LOVABLE}${service.path}`}
                  className="group block rounded-xl border border-border bg-card/50 p-6 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                      {isEs ? service.titleEs : service.titleEn}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {isEs ? service.descEs : service.descEn}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                    {isEs ? 'Ver servicio' : 'View service'}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        {/* ═══ SECTORS ═══ */}
        <section className="container mx-auto px-4 max-w-4xl mb-20 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            {isEs
              ? 'Aplicaciones de IA por sectores en Navarra'
              : 'AI Applications by Sector in Navarra'}
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            {isEs
              ? 'Cada sector tiene necesidades diferentes. Por eso diseñamos soluciones específicas para cada tipo de empresa.'
              : 'Every sector has different needs. That\'s why we design specific solutions for each type of business.'}
          </p>

          <div className="grid sm:grid-cols-3 gap-5">
            {sectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <a
                  key={sector.path}
                  href={`${LOVABLE}${sector.path}`}
                  className="group block rounded-xl border border-border bg-card/50 p-6 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 space-y-3 text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mx-auto">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                    {isEs ? sector.titleEs : sector.titleEn}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {isEs ? sector.descEs : sector.descEn}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-primary font-medium">
                    {isEs ? 'Ver solución' : 'View solution'}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </a>
              );
            })}
          </div>
        </section>

        {/* ═══ BUSINESS IMPACT ═══ */}
        <section className="container mx-auto px-4 max-w-4xl mb-20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto text-base">
            {isEs
              ? 'La inteligencia artificial no es solo eficiencia. Es una herramienta para generar más ingresos, tomar mejores decisiones y hacer crecer tu negocio.'
              : 'Artificial intelligence is not just about efficiency. It\'s a tool to generate more revenue, make better decisions and grow your business.'}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            {isEs
              ? 'Qué consiguen las empresas con inteligencia artificial'
              : 'What Businesses Achieve with AI'}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3 bg-card/50 border border-border rounded-lg p-4">
                <div className="text-primary">{b.icon}</div>
                <span className="text-sm font-medium">{isEs ? b.textEs : b.textEn}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ URGENCY + COMPETITION ═══ */}
        <section className="container mx-auto px-4 max-w-3xl mb-20 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
          <div className="bg-primary/10 border border-primary/30 rounded-xl p-8 text-center space-y-4">
            <p className="text-muted-foreground text-base md:text-lg font-medium">
              {isEs
                ? 'Las empresas que están implementando inteligencia artificial en Navarra están avanzando más rápido que su competencia.'
                : 'Businesses implementing artificial intelligence in Navarra are moving faster than their competition.'}
            </p>
            <p className="text-muted-foreground text-sm md:text-base">
              {isEs
                ? 'Cada día sin automatización son clientes, tiempo y oportunidades que estás perdiendo frente a tu competencia.'
                : 'Every day without automation means customers, time and opportunities you\'re losing to your competition.'}
            </p>
          </div>
        </section>

        {/* ═══ HOW TO START ═══ */}
        <section className="container mx-auto px-4 max-w-4xl mb-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            {isEs
              ? 'Cómo empezar a implementar inteligencia artificial en tu empresa'
              : 'How to Start Implementing AI in Your Business'}
          </h2>
          <div className="space-y-4 text-muted-foreground text-base leading-relaxed max-w-3xl mx-auto text-center">
            <p>
              {isEs
                ? 'El primer paso es entender qué automatizar, cómo hacerlo y qué impacto tendrá en tu negocio.'
                : 'The first step is understanding what to automate, how to do it and what impact it will have on your business.'}
            </p>
            <p>
              {isEs
                ? 'Por eso comenzamos con un diagnóstico estratégico donde analizamos tu empresa y definimos un plan claro de implementación.'
                : 'That\'s why we start with a strategic diagnosis where we analyze your business and define a clear implementation plan.'}
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <a
              href={`${LOVABLE}/diagnostico-ia-navarra`}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-2 transition-colors"
            >
              {isEs ? '👉 Solicitar diagnóstico estratégico' : '👉 Request strategic diagnosis'}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ═══ LEARN MORE – BLOG LINKS ═══ */}
        <section className="container mx-auto px-4 max-w-4xl mb-20 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6">
            {isEs ? 'Aprende más sobre inteligencia artificial para empresas' : 'Learn More About AI for Businesses'}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: isEs ? 'Qué es un agente de IA y cómo puede ayudar a tu empresa' : 'What is an AI agent', path: '/blog/que-es-un-agente-ia' },
              { label: isEs ? 'Chatbot vs Agente de IA: diferencias' : 'Chatbot vs AI Agent', path: '/blog/chatbot-vs-agente-ia' },
              { label: isEs ? 'Agentes de IA para empresas en Navarra' : 'AI agents for businesses in Navarra', path: '/blog/agentes-ia-empresas-navarra' },
              { label: isEs ? 'Automatización con IA para empresas en Navarra' : 'AI automation for businesses in Navarra', path: '/blog/automatizacion-empresas-navarra' },
              { label: isEs ? 'Agentes de IA para páginas web en Navarra' : 'AI agents for websites in Navarra', path: '/blog/agentes-ia-para-paginas-web-navarra' },
              { label: isEs ? 'IA para clínicas en Navarra' : 'AI for clinics in Navarra', path: '/blog/ia-para-clinicas-navarra' },
              { label: isEs ? 'IA para restaurantes en Navarra' : 'AI for restaurants in Navarra', path: '/blog/ia-para-restaurantes-navarra' },
              { label: isEs ? 'IA para comercios en Navarra' : 'AI for retail in Navarra', path: '/blog/ia-para-comercios-navarra' },
              { label: isEs ? 'Chatbots para empresas en Navarra' : 'Chatbots for businesses in Navarra', path: '/blog/chatbots-empresas-navarra' },
              { label: isEs ? 'Cómo automatizar la atención al cliente con IA' : 'How to automate customer service with AI', path: '/blog/automatizar-atencion-cliente-ia' },
            ].map((link) => (
              <a
                key={link.path}
                href={`${LOVABLE}${link.path}`}
                className="flex items-center gap-2 text-sm text-primary hover:underline underline-offset-2 transition-colors group"
              >
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                {link.label}
              </a>
            ))}
          </div>
        </section>

        {/* ═══ TRUST + FINAL PUSH ═══ */}
        <section className="container mx-auto px-4 max-w-3xl mb-10 animate-fade-in-up" style={{ animationDelay: '0.48s' }}>
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <p className="text-muted-foreground text-base leading-relaxed">
              {isEs
                ? 'Trabajamos con empresas en Navarra y Pamplona que buscan automatizar procesos, captar más clientes y escalar su operativa con inteligencia artificial.'
                : 'We work with businesses in Navarra and Pamplona looking to automate processes, capture more customers and scale their operations with artificial intelligence.'}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {isEs
                ? 'Este tipo de sistemas ya están siendo utilizados por empresas en Navarra para mejorar resultados reales.'
                : 'These types of systems are already being used by businesses in Navarra to improve real results.'}
            </p>
            <p className="text-primary font-bold text-base md:text-lg">
              {isEs
                ? 'La diferencia no es si implementar inteligencia artificial, sino cuándo hacerlo.'
                : 'The difference is not whether to implement AI, but when to do it.'}
            </p>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="container mx-auto px-4 max-w-3xl animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="holographic-border rounded-2xl p-10 text-center space-y-6">
            <p className="text-sm font-semibold text-foreground">
              {isEs
                ? 'No es una web ni una herramienta aislada. Es un sistema diseñado para hacer crecer tu empresa.'
                : 'It\'s not a website or an isolated tool. It\'s a system designed to grow your business.'}
            </p>

            <h2 className="text-2xl md:text-3xl font-bold">
              {isEs
                ? 'Empieza a implementar inteligencia artificial en tu empresa en Navarra'
                : 'Start Implementing AI in Your Business in Navarra'}
            </h2>

            <p className="text-muted-foreground max-w-xl mx-auto">
              {isEs
                ? 'Descubre cómo automatizar procesos, captar clientes y aumentar ingresos en tu empresa en Navarra y Pamplona.'
                : 'Discover how to automate processes, capture customers and increase revenue in your business in Navarra and Pamplona.'}
            </p>

            <p className="text-xs text-muted-foreground">
              {isEs
                ? 'En 15 minutos entenderás exactamente qué automatizar en tu negocio'
                : 'In 15 minutes you\'ll understand exactly what to automate in your business'}
            </p>
            <Button asChild size="lg" className="gap-2">
              <a href={`${LOVABLE}/automatizacion-ia-navarra`}>
                {isEs ? 'Solicitar diagnóstico estratégico' : 'Request strategic diagnosis'}
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default InteligenciaArtificialNavarra;


