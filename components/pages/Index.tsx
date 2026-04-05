import Hero from '@/components/shared/Hero';
import AIAssistantShowcase from '@/components/shared/AIAssistantShowcase';
import CaseShowcase from '@/components/shared/CaseShowcase';
import SocialCounter from '@/components/shared/SocialCounter';
import FAQSection from '@/components/shared/FAQSection';
import MediaPresence from '@/components/shared/MediaPresence';
import JsonLd from '@/components/shared/JsonLd';
import { Bot, Cog, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

const LOVABLE = process.env.NEXT_PUBLIC_LOVABLE_URL || 'https://rtpdigitalsolutions.lovable.app';

const Index = () => {
  const language = 'es';

  const demos = {
    sectionTitle: 'Prueba la tecnología en acción',
    sectionSubtitle: 'Interactúa con nuestros sistemas en producción para ver cómo funcionan en tiempo real.',
    demo1Title: 'Centro Inteligente',
    demo1Text: 'Un agente conversacional integrado que resuelve dudas sobre servicios, gestiona citas y explica cómo funciona la automatización empresarial.',
    demo1Highlight: 'Funciona en producción — sin simulaciones.',
    demo2Title: 'Diagnóstico Automatizado',
    demo2Text: 'Completa un formulario y recibe un informe estratégico personalizado con recomendaciones de automatización para tu negocio.',
    demo2Highlight: 'Evaluación inicial sin coste.',
    disclaimer: 'Estas demos son sistemas reales en producción, no simulaciones.',
  };

  const pillars = {
    pillar1Title: 'Agentes de Inteligencia Artificial',
    pillar1Subtitle: 'IA que piensa y conversa',
    pillar1Desc: 'Agentes IA conectados a tu web, CRM y Shopify con conocimiento estructurado (RAG), voz y capacidades empresariales para automatización empresarial real.',
    pillar2Title: 'Automatización Inteligente de Procesos',
    pillar2Subtitle: 'IA que ejecuta y automatiza',
    pillar2Desc: 'Automatización con n8n: facturación, documentos, integración con CRM, marketing y flujos empresariales con escalabilidad tecnológica garantizada.',
  };

  return (
    <div className="min-h-screen">
      <JsonLd language={language} />
      <Hero language={language} />

      <section className="py-12 container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-foreground text-center">
            Automatización empresarial con agentes IA
          </h2>
          <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed text-center">
            <p>
              En RTP Digital Solutions desarrollamos soluciones de inteligencia artificial para empresas que buscan mejorar su operativa, automatizar tareas y optimizar la atención al cliente.
            </p>
            <p>
              Nuestros agentes IA se integran en tu entorno digital y permiten gestionar consultas, captar oportunidades y ejecutar tareas de forma continua sin intervención manual.
            </p>
            <p>
              Trabajamos con empresas en Navarra y Pamplona que quieren implementar automatización real con impacto directo en su negocio.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground max-w-2xl mx-auto">
            {[
              'Agentes IA integrados en páginas web',
              'Automatización de atención al cliente',
              'Integración con herramientas empresariales',
              'Captación y gestión de oportunidades',
              'Operativa automatizada 24/7',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SocialCounter language={language} />
      <CaseShowcase language={language} />

      <section className="py-16 container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl border border-primary/20 bg-primary/5 space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Bot className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">{pillars.pillar1Title}</h2>
            <p className="text-sm font-medium text-primary">{pillars.pillar1Subtitle}</p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{pillars.pillar1Desc}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={`${LOVABLE}/agentes-ia-atencion-cliente-navarra`} className="text-xs text-primary font-medium hover:underline underline-offset-2">
                Agentes IA atención al cliente →
              </a>
              <a href={`${LOVABLE}/agentes-voz-telefonicos-empresas`} className="text-xs text-primary font-medium hover:underline underline-offset-2">
                Agentes de voz →
              </a>
              <a href={`${LOVABLE}/rag-base-conocimiento-empresas`} className="text-xs text-primary font-medium hover:underline underline-offset-2">
                RAG y conocimiento →
              </a>
            </div>
          </div>
          <div className="p-8 rounded-2xl border border-secondary/20 bg-secondary/5 space-y-4">
            <div className="w-12 h-12 rounded-full bg-secondary/10 border border-secondary/30 flex items-center justify-center">
              <Cog className="w-6 h-6 text-secondary" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">{pillars.pillar2Title}</h2>
            <p className="text-sm font-medium text-secondary">{pillars.pillar2Subtitle}</p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{pillars.pillar2Desc}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={`${LOVABLE}/automatizacion-procesos-empresas-navarra`} className="text-xs text-secondary font-medium hover:underline underline-offset-2">
                Automatización de procesos →
              </a>
              <a href={`${LOVABLE}/consultoria-inteligencia-artificial-navarra`} className="text-xs text-secondary font-medium hover:underline underline-offset-2">
                Consultoría IA →
              </a>
              <a href={`${LOVABLE}/desarrollo-web-inteligencia-artificial`} className="text-xs text-secondary font-medium hover:underline underline-offset-2">
                Desarrollo web IA →
              </a>
            </div>
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
                <a
                  href={`${LOVABLE}/automatizacion-ia-navarra`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-all text-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  Probar Centro Inteligente
                </a>
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
                <p className="text-xs text-muted-foreground mb-1">Evaluación inicial sin coste</p>
                <a
                  href={`${LOVABLE}/automatizacion-ia-navarra`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-bold text-sm hover:shadow-neon transition-all whitespace-nowrap"
                >
                  Solicitar diagnóstico estratégico
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

      <section className="py-8 container mx-auto px-4">
        <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
          Convertimos tu página web en un sistema inteligente capaz de captar oportunidades, automatizar procesos y escalar tu negocio sin aumentar carga operativa.
        </p>
      </section>
    </div>
  );
};

export default Index;
