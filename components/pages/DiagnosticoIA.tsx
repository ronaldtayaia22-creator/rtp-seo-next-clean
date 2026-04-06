'use client';

import Link from '@/components/shared/LocalizedLink';
import ContactForm from '@/components/shared/ContactForm';
import { Language } from '@/lib/i18n';
import { ArrowRight, Bot, Workflow, Search, Rocket, Cog, BarChart3, Target, Zap, Network, Layers, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LOVABLE = '';
const OPERATIONS_BASE_URL = 'https://rtp-ai-orbiter.lovable.app';

interface DiagnosticoIAProps {
  language: Language;
}

const DiagnosticoIA = ({ language }: DiagnosticoIAProps) => {
  const isEs = language === 'es';
  const operationsPath = isEs ? '/automatizacion-ia-navarra' : '/en/automatizacion-ia-navarra';
  const operationsUrl = `${OPERATIONS_BASE_URL}${operationsPath}`;

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-glow-primary">
              {isEs ? 'Diagnóstico Estratégico de Arquitectura IA en Navarra' : 'Strategic AI Architecture Diagnosis in Navarra'}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {isEs
                ? 'Antes de implementar inteligencia artificial en tu empresa en Navarra, necesitas saber exactamente qué automatizar, qué sistemas conectar y cómo hacerlo sin errores.'
                : 'Before implementing artificial intelligence in your business in Navarra, you need to know exactly what to automate, which systems to connect, and how to do it without mistakes.'}
            </p>
            <p className="text-lg font-medium text-foreground max-w-2xl mx-auto">
              {isEs
                ? 'Las empresas que implementan inteligencia artificial sin una estrategia clara pierden tiempo, dinero y oportunidades.'
                : 'Businesses that implement artificial intelligence without a clear strategy lose time, money, and opportunities.'}
            </p>
            <p className="text-lg text-muted-foreground/90 max-w-2xl mx-auto">
              {isEs
                ? 'El diagnóstico estratégico es el paso que define qué implementar, cómo hacerlo y cómo generar resultados reales desde el inicio.'
                : 'Strategic diagnosis is the step that defines what to implement, how to do it, and how to generate real results from the start.'}
            </p>
            <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto">
              {isEs
                ? <>Analizamos tu empresa, identificamos oportunidades reales de <Link href={`${LOVABLE}/automatizacion-procesos-empresas-navarra`} className="text-primary hover:underline">automatización</Link> y diseñamos una arquitectura clara para que la inteligencia artificial genere impacto desde el inicio.</>
                : <>We analyze your business, identify real <Link href={`${LOVABLE}/automatizacion-procesos-empresas-navarra`} className="text-primary hover:underline">automation</Link> opportunities, and design a clear architecture so artificial intelligence creates impact from day one.</>}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" className="text-lg px-8">
                <a href={operationsUrl} target="_blank" rel="noopener noreferrer">
                  {isEs ? 'Solicitar Diagnóstico Estratégico' : 'Request Strategic Diagnosis'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <a
                href="#que-recibiras"
                className="text-primary hover:underline underline-offset-4 transition-colors"
              >
                {isEs ? 'Ver qué incluye el diagnóstico ↓' : 'See what the diagnosis includes ↓'}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="diagnostico-form" className="py-20 bg-card/30 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-3">
              <h2 className="text-2xl md:text-4xl font-bold text-glow-primary">
                {isEs ? 'Solicita tu diagnóstico estratégico' : 'Request your strategic diagnosis'}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                {isEs
                  ? 'Activa el flujo real de diagnostico desde el entorno operativo para recibir la evaluacion inicial de tu caso.'
                  : 'Trigger the real diagnosis flow from the operational environment to receive your initial case evaluation.'}
              </p>
            </div>

            <div className="holographic-border rounded-xl p-6 md:p-8">
              <ContactForm language={language} />
            </div>

            <p className="text-xs text-muted-foreground text-center">
              {isEs
                ? 'Flujo de captura activo - Respuesta inicial en menos de 24h'
                : 'Active capture flow - Initial response within 24h'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <p className="text-lg font-medium text-foreground">
              {isEs
                ? 'Sin una estrategia clara, la mayoría de empresas implementan soluciones aisladas que no generan resultados reales.'
                : 'Without a clear strategy, most businesses implement isolated solutions that do not generate real results.'}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isEs
                ? 'Este diagnóstico evita errores, ahorra tiempo y define el camino correcto antes de invertir en herramientas o desarrollo.'
                : 'This diagnosis prevents mistakes, saves time, and defines the right path before investing in tools or development.'}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isEs
                ? <>Nuestro diagnóstico combina análisis de procesos, evaluación tecnológica y diseño de arquitectura para definir una infraestructura escalable que integre <Link href={`${LOVABLE}/agentes-ia-atencion-cliente-navarra`} className="text-primary hover:underline">agentes IA de atención al cliente</Link>, <Link href={`${LOVABLE}/automatizacion-procesos-empresas-navarra`} className="text-primary hover:underline">automatización de procesos</Link>, <Link href={`${LOVABLE}/rag-base-conocimiento-empresas`} className="text-primary hover:underline">sistemas RAG de conocimiento</Link> y <Link href={`${LOVABLE}/desarrollo-web-inteligencia-artificial`} className="text-primary hover:underline">desarrollo web inteligente</Link>.</>
                : <>Our diagnosis combines process analysis, technology evaluation, and architecture design to define a scalable infrastructure that integrates <Link href={`${LOVABLE}/agentes-ia-atencion-cliente-navarra`} className="text-primary hover:underline">AI customer service agents</Link>, <Link href={`${LOVABLE}/automatizacion-procesos-empresas-navarra`} className="text-primary hover:underline">process automation</Link>, <Link href={`${LOVABLE}/rag-base-conocimiento-empresas`} className="text-primary hover:underline">RAG knowledge systems</Link>, and <Link href={`${LOVABLE}/desarrollo-web-inteligencia-artificial`} className="text-primary hover:underline">intelligent web development</Link>.</>}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isEs
                ? 'Trabajamos con empresas en Navarra y Pamplona que buscan automatizar procesos, optimizar operaciones y escalar digitalmente mediante agentes IA conectados a sus sistemas.'
                : 'We work with businesses in Navarra and Pamplona looking to automate processes, optimize operations, and scale digitally through AI agents connected to their systems.'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-2xl sm:text-4xl font-bold text-center text-glow-primary">
              {isEs ? '¿Por qué no es «solo un chatbot»?' : 'Why is it not "just a chatbot"?'}
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {(isEs
                ? [
                {
                  icon: Network,
                  title: 'Agentes IA conectados a tus sistemas',
                  desc: 'Integramos CRM, WhatsApp, calendarios, ecommerce y herramientas internas en una arquitectura unificada.',
                },
                {
                  icon: Cog,
                  title: 'Automatización con n8n como orquestador',
                  desc: 'Diseñamos flujos de automatización empresarial inteligentes que conectan datos, acciones y notificaciones.',
                },
                {
                  icon: Layers,
                  title: 'Infraestructura escalable 24/7',
                  desc: 'Arquitectura IA implementada y preparada para crecer, añadir módulos y adaptarse a nuevas necesidades sin interrupciones.',
                },
                {
                  icon: Zap,
                  title: 'Integración IA con sistemas existentes',
                  desc: 'No es un widget aislado: es una arquitectura IA implementada y conectada a tu operación diaria, desde CRM hasta ecommerce.',
                },
                ]
                : [
                {
                  icon: Network,
                  title: 'AI agents connected to your systems',
                  desc: 'We integrate CRM, WhatsApp, calendars, ecommerce, and internal tools in a unified architecture.',
                },
                {
                  icon: Cog,
                  title: 'Automation with n8n as orchestrator',
                  desc: 'We design intelligent business automation flows that connect data, actions, and notifications.',
                },
                {
                  icon: Layers,
                  title: 'Scalable 24/7 infrastructure',
                  desc: 'AI architecture implemented and ready to grow, add modules, and adapt to new needs without interruptions.',
                },
                {
                  icon: Zap,
                  title: 'AI integration with existing systems',
                  desc: 'It is not an isolated widget: it is an implemented AI architecture connected to your daily operations, from CRM to ecommerce.',
                },
                ]).map((item, i) => (
                <div
                  key={i}
                  className="holographic-border rounded-xl p-6 space-y-3 animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <item.icon className="w-8 h-8 text-primary" />
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-center text-glow-primary">
              {isEs ? 'Nuestra Metodología de Trabajo' : 'Our Working Methodology'}
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {(isEs
                ? [
                {
                  icon: Search,
                  phase: '01',
                  title: 'Recogida de información',
                  desc: 'Analizamos tu modelo de negocio, procesos internos y objetivos de automatización empresarial.',
                },
                {
                  icon: Cog,
                  phase: '02',
                  title: 'Análisis automatizado',
                  desc: 'Evaluamos oportunidades de captación, soporte, integración de sistemas y flujos de negocio automatizados.',
                },
                {
                  icon: BarChart3,
                  phase: '03',
                  title: 'Diseño de arquitectura IA escalable',
                  desc: 'Definimos la estructura del agente, integraciones necesarias y flujos de negocio automatizados.',
                },
                {
                  icon: Rocket,
                  phase: '04',
                  title: 'Propuesta estratégica',
                  desc: 'Entregamos un diagnóstico detallado con arquitectura IA escalable recomendada y próximos pasos.',
                },
                ]
                : [
                {
                  icon: Search,
                  phase: '01',
                  title: 'Information gathering',
                  desc: 'We analyze your business model, internal processes, and business automation goals.',
                },
                {
                  icon: Cog,
                  phase: '02',
                  title: 'Automated analysis',
                  desc: 'We evaluate opportunities for lead capture, support, system integrations, and automated business workflows.',
                },
                {
                  icon: BarChart3,
                  phase: '03',
                  title: 'Scalable AI architecture design',
                  desc: 'We define the agent structure, required integrations, and automated business workflows.',
                },
                {
                  icon: Rocket,
                  phase: '04',
                  title: 'Strategic proposal',
                  desc: 'We deliver a detailed diagnosis with recommended scalable AI architecture and next steps.',
                },
                ]).map((step, i) => (
                <Card key={i} className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors relative overflow-hidden animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <CardContent className="p-6">
                    <span className="text-5xl font-bold text-primary/10 absolute top-3 right-4">{step.phase}</span>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="que-recibiras" className="py-20 bg-card/30 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl sm:text-4xl font-bold text-center text-glow-primary">
              {isEs ? '¿Qué recibirás en el diagnóstico?' : 'What will you receive in the diagnosis?'}
            </h2>
            <div className="space-y-4">
              {(isEs
                ? [
                'Diagnóstico personalizado según tu objetivo empresarial',
                'Arquitectura recomendada (agente + automatización + sistemas conectados)',
                'Mapa de integración con tus sistemas actuales (CRM, ERP, Shopify, WhatsApp, calendarios, herramientas internas, etc.)',
                'Flujo de automatización propuesto',
                'Qué automatizar primero y por qué',
                'Qué herramientas necesitas y cómo integrarlas',
                'Qué impacto tendrá en tu negocio',
                'Identificación de oportunidades para aumentar ingresos mediante automatización',
                'Reducción de costes operativos mediante optimización de procesos',
                'Qué procesos están perdiendo tiempo o dinero en tu negocio',
                'Qué automatizar para generar ingresos más rápido',
                'Un plan claro para implementar sin improvisación',
                ]
                : [
                'Personalized diagnosis based on your business goals',
                'Recommended architecture (agent + automation + connected systems)',
                'Integration map with your current systems (CRM, ERP, Shopify, WhatsApp, calendars, internal tools, etc.)',
                'Proposed automation workflow',
                'What to automate first and why',
                'What tools you need and how to integrate them',
                'Expected impact on your business',
                'Opportunity mapping to increase revenue through automation',
                'Operational cost reduction through process optimization',
                'Which processes are losing time or money in your business',
                'What to automate to generate revenue faster',
                'A clear plan to implement without improvisation',
                ]).map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/30 animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <p className="text-muted-foreground">
              {isEs
                ? 'Mientras otras empresas en Navarra y Pamplona siguen probando sin dirección, tú puedes avanzar con una estrategia clara desde el principio.'
                : 'While other companies in Navarra and Pamplona keep experimenting without direction, you can move forward with a clear strategy from the start.'}
            </p>
            <p className="text-lg font-medium text-foreground">
              {isEs
                ? 'Las empresas que empiezan con una arquitectura bien definida avanzan más rápido y evitan costes innecesarios.'
                : 'Companies that start with a well-defined architecture move faster and avoid unnecessary costs.'}
            </p>
            <p className="text-muted-foreground font-medium">
              {isEs
                ? 'No es teoría. Es un plan claro para transformar tu empresa y empezar a obtener resultados.'
                : 'It is not theory. It is a clear plan to transform your business and start getting results.'}
            </p>
          </div>
          <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                {isEs
                  ? 'Empieza con un diagnóstico estratégico y define cómo implementar inteligencia artificial correctamente'
                  : 'Start with a strategic diagnosis and define how to implement artificial intelligence correctly'}
              </h2>
              <p className="text-muted-foreground text-lg">
                {isEs
                  ? 'Descubre qué automatizar, cómo hacerlo y cómo convertir tu empresa en un sistema eficiente en Navarra y Pamplona.'
                  : 'Discover what to automate, how to do it, and how to turn your business into an efficient system in Navarra and Pamplona.'}
              </p>
              <Button asChild size="lg" className="text-lg px-8">
                <a href={operationsUrl} target="_blank" rel="noopener noreferrer">
                  {isEs ? 'Solicitar Diagnóstico Estratégico' : 'Request Strategic Diagnosis'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <p className="text-xs text-muted-foreground">
                {isEs ? 'Evaluación inicial sin coste' : 'Free initial evaluation'}
              </p>
              <p className="text-sm text-muted-foreground/70">
                {isEs
                  ? 'Sin compromiso. Recibirás tu diagnóstico automatizado directamente en tu email.'
                  : 'No commitment. You will receive your automated diagnosis directly in your email.'}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-glow-primary">
              {isEs ? 'Arquitecturas de Inteligencia Artificial para Empresas en Navarra' : 'Artificial Intelligence Architectures for Businesses in Navarra'}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isEs
                ? 'Diseñamos e implementamos arquitecturas IA en Navarra para empresas que buscan automatizar procesos con agentes IA conectados a sistemas, optimizar recursos y convertir tu web en una infraestructura escalable 24/7 de captación y gestión.'
                : 'We design and implement AI architectures in Navarra for businesses looking to automate processes with AI agents connected to systems, optimize resources, and turn their website into a scalable 24/7 lead capture and management infrastructure.'}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isEs
                ? 'Trabajamos con empresas en Navarra y España que buscan integrar inteligencia artificial en sus procesos de captación, soporte, ecommerce y operaciones internas mediante la implementación de Arquitectura IA con automatización empresarial en Navarra.'
                : 'We work with companies in Navarra and Spain looking to integrate artificial intelligence into lead capture, support, ecommerce, and internal operations through AI architecture and business automation implementation in Navarra.'}
            </p>
            <p className="text-sm text-muted-foreground">
              {isEs
                ? <>Descubre todas nuestras soluciones en la página principal de <Link href={`${LOVABLE}/inteligencia-artificial-navarra`} className="text-primary hover:underline font-medium">inteligencia artificial en Navarra</Link>.</>
                : <>Discover all our solutions on the main <Link href={`${LOVABLE}/inteligencia-artificial-navarra`} className="text-primary hover:underline font-medium">artificial intelligence in Navarra</Link> page.</>}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiagnosticoIA;

