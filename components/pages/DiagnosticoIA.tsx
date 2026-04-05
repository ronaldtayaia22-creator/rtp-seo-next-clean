'use client';

import Link from '@/components/shared/LocalizedLink';
import { ArrowRight, Bot, Workflow, Search, Rocket, Cog, BarChart3, Target, Zap, Network, Layers, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LOVABLE = process.env.NEXT_PUBLIC_LOVABLE_URL || 'https://rtpdigitalsolutions.lovable.app';

const DiagnosticoIA = () => {
  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-glow-primary">
              Diagnóstico Estratégico de Arquitectura IA en Navarra
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Antes de implementar inteligencia artificial en tu empresa en Navarra, necesitas saber exactamente qué automatizar, qué sistemas conectar y cómo hacerlo sin errores.
            </p>
            <p className="text-lg font-medium text-foreground max-w-2xl mx-auto">
              Las empresas que implementan inteligencia artificial sin una estrategia clara pierden tiempo, dinero y oportunidades.
            </p>
            <p className="text-lg text-muted-foreground/90 max-w-2xl mx-auto">
              El diagnóstico estratégico es el paso que define qué implementar, cómo hacerlo y cómo generar resultados reales desde el inicio.
            </p>
            <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto">
              Analizamos tu empresa, identificamos oportunidades reales de <Link href={`${LOVABLE}/automatizacion-procesos-empresas-navarra`} className="text-primary hover:underline">automatización</Link> y diseñamos una arquitectura clara para que la inteligencia artificial genere impacto desde el inicio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href={`${LOVABLE}/automatizacion-ia-navarra`}>
                  Solicitar Diagnóstico Estratégico
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <a
                href="#que-recibiras"
                className="text-primary hover:underline underline-offset-4 transition-colors"
              >
                Ver qué incluye el diagnóstico ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <p className="text-lg font-medium text-foreground">
              Sin una estrategia clara, la mayoría de empresas implementan soluciones aisladas que no generan resultados reales.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Este diagnóstico evita errores, ahorra tiempo y define el camino correcto antes de invertir en herramientas o desarrollo.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestro diagnóstico combina análisis de procesos, evaluación tecnológica y diseño de arquitectura para definir una infraestructura escalable que integre <Link href={`${LOVABLE}/agentes-ia-atencion-cliente-navarra`} className="text-primary hover:underline">agentes IA de atención al cliente</Link>, <Link href={`${LOVABLE}/automatizacion-procesos-empresas-navarra`} className="text-primary hover:underline">automatización de procesos</Link>, <Link href={`${LOVABLE}/rag-base-conocimiento-empresas`} className="text-primary hover:underline">sistemas RAG de conocimiento</Link> y <Link href={`${LOVABLE}/desarrollo-web-inteligencia-artificial`} className="text-primary hover:underline">desarrollo web inteligente</Link>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trabajamos con empresas en Navarra y Pamplona que buscan automatizar procesos, optimizar operaciones y escalar digitalmente mediante agentes IA conectados a sus sistemas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-2xl sm:text-4xl font-bold text-center text-glow-primary">
              ¿Por qué no es «solo un chatbot»?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
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
              ].map((item, i) => (
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
              Nuestra Metodología de Trabajo
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
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
              ].map((step, i) => (
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
              ¿Qué recibirás en el diagnóstico?
            </h2>
            <div className="space-y-4">
              {[
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
              ].map((item, i) => (
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
              Mientras otras empresas en Navarra y Pamplona siguen probando sin dirección, tú puedes avanzar con una estrategia clara desde el principio.
            </p>
            <p className="text-lg font-medium text-foreground">
              Las empresas que empiezan con una arquitectura bien definida avanzan más rápido y evitan costes innecesarios.
            </p>
            <p className="text-muted-foreground font-medium">
              No es teoría. Es un plan claro para transformar tu empresa y empezar a obtener resultados.
            </p>
          </div>
          <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                Empieza con un diagnóstico estratégico y define cómo implementar inteligencia artificial correctamente
              </h2>
              <p className="text-muted-foreground text-lg">
                Descubre qué automatizar, cómo hacerlo y cómo convertir tu empresa en un sistema eficiente en Navarra y Pamplona.
              </p>
              <Button asChild size="lg" className="text-lg px-8">
                <Link href={`${LOVABLE}/automatizacion-ia-navarra`}>
                  Solicitar Diagnóstico Estratégico
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground">
                Evaluación inicial sin coste
              </p>
              <p className="text-sm text-muted-foreground/70">
                Sin compromiso. Recibirás tu diagnóstico automatizado directamente en tu email.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-glow-primary">
              Arquitecturas de Inteligencia Artificial para Empresas en Navarra
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Diseñamos e implementamos arquitecturas IA en Navarra para empresas que buscan automatizar procesos con agentes IA conectados a sistemas, optimizar recursos y convertir tu web en una infraestructura escalable 24/7 de captación y gestión.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trabajamos con empresas en Navarra y España que buscan integrar inteligencia artificial en sus procesos de captación, soporte, ecommerce y operaciones internas mediante la implementación de Arquitectura IA con automatización empresarial en Navarra.
            </p>
            <p className="text-sm text-muted-foreground">
              Descubre todas nuestras soluciones en la página principal de <Link href={`${LOVABLE}/inteligencia-artificial-navarra`} className="text-primary hover:underline font-medium">inteligencia artificial en Navarra</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiagnosticoIA;

