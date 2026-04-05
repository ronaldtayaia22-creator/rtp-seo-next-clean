'use client';

import Hero from '@/components/shared/Hero';
import AIAssistantShowcase from '@/components/shared/AIAssistantShowcase';
import CaseShowcase from '@/components/shared/CaseShowcase';
import SocialCounter from '@/components/shared/SocialCounter';
import FAQSection from '@/components/shared/FAQSection';
import MediaPresence from '@/components/shared/MediaPresence';
import JsonLd from '@/components/shared/JsonLd';
import { Language } from '@/lib/i18n';
import { Bot, Cog, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

const LOVABLE = process.env.NEXT_PUBLIC_LOVABLE_URL || 'https://rtpdigitalsolutions.lovable.app';

interface IndexProps {
  language: Language;
}

const Index = ({ language }: IndexProps) => {
  const isEs = language === 'es';

  const demos = isEs
    ? {
        sectionTitle: 'Prueba la tecnología en acción',
        sectionSubtitle: 'Interactúa con nuestros sistemas en producción para ver cómo funcionan en tiempo real.',
        demo1Title: 'Centro Inteligente',
        demo1Text: 'Un agente conversacional integrado que resuelve dudas sobre servicios, gestiona citas y explica cómo funciona la automatización empresarial.',
        demo1Highlight: 'Funciona en producción - sin simulaciones.',
        demo2Title: 'Diagnóstico Automatizado',
        demo2Text: 'Completa un formulario y recibe un informe estratégico personalizado con recomendaciones de automatización para tu negocio.',
        demo2Highlight: 'Evaluación inicial sin coste.',
        disclaimer: 'Estas demos son sistemas reales en producción, no simulaciones.',
      }
    : {
        sectionTitle: 'See the technology in action',
        sectionSubtitle: 'Interact with our production systems to see how they work in real time.',
        demo1Title: 'AI Center',
        demo1Text: 'An integrated conversational agent that answers service questions, manages appointments, and explains how business automation works.',
        demo1Highlight: 'Running in production - no simulations.',
        demo2Title: 'Automated Diagnosis',
        demo2Text: 'Complete a form and receive a personalized strategic report with automation recommendations for your business.',
        demo2Highlight: 'Free initial evaluation.',
        disclaimer: 'These demos are real production systems, not simulations.',
      };

  const pillars = isEs
    ? {
        pillar1Title: 'Agentes de Inteligencia Artificial',
        pillar1Subtitle: 'IA que piensa y conversa',
        pillar1Desc: 'Agentes IA conectados a tu web, CRM y Shopify con conocimiento estructurado (RAG), voz y capacidades empresariales para automatización empresarial real.',
        pillar2Title: 'Automatización Inteligente de Procesos',
        pillar2Subtitle: 'IA que ejecuta y automatiza',
        pillar2Desc: 'Automatización con n8n: facturación, documentos, integración con CRM, marketing y flujos empresariales con escalabilidad tecnológica garantizada.',
      }
    : {
        pillar1Title: 'Artificial Intelligence Agents',
        pillar1Subtitle: 'AI that thinks and converses',
        pillar1Desc: 'AI agents connected to your website, CRM, and Shopify with structured knowledge (RAG), voice, and enterprise capabilities for real business automation.',
        pillar2Title: 'Intelligent Process Automation',
        pillar2Subtitle: 'AI that executes and automates',
        pillar2Desc: 'Automation with n8n: invoicing, documents, CRM integration, marketing, and enterprise workflows with guaranteed scalability.',
      };

  return (
    <div className="min-h-screen">
      <JsonLd language={language} />
      <Hero language={language} />

      <section className="py-12 container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-foreground text-center">
            {isEs ? 'Automatización empresarial con agentes IA' : 'Business automation with AI agents'}
          </h2>
          <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed text-center">
            <p>
              {isEs
                ? 'En RTP Digital Solutions desarrollamos soluciones de inteligencia artificial para empresas que buscan mejorar su operativa, automatizar tareas y optimizar la atención al cliente.'
                : 'At RTP Digital Solutions, we build artificial intelligence solutions for businesses that want to improve operations, automate tasks, and optimize customer service.'}
            </p>
            <p>
              {isEs
                ? 'Nuestros agentes IA se integran en tu entorno digital y permiten gestionar consultas, captar oportunidades y ejecutar tareas de forma continua sin intervención manual.'
                : 'Our AI agents integrate into your digital environment to manage inquiries, capture opportunities, and execute tasks continuously without manual intervention.'}
            </p>
            <p>
              {isEs
                ? 'Trabajamos con empresas en Navarra y Pamplona que quieren implementar automatización real con impacto directo en su negocio.'
                : 'We work with companies in Navarra and Pamplona that want to implement real automation with direct business impact.'}
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground max-w-2xl mx-auto">
            {(isEs
              ? [
                  'Agentes IA integrados en páginas web',
                  'Automatización de atención al cliente',
                  'Integración con herramientas empresariales',
                  'Captación y gestión de oportunidades',
                  'Operativa automatizada 24/7',
                ]
              : [
                  'AI agents integrated into websites',
                  'Automated customer support',
                  'Integration with business tools',
                  'Opportunity capture and management',
                  '24/7 automated operations',
                ]).map((item, i) => (
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
                {isEs ? 'Agentes IA atención al cliente →' : 'AI customer service agents →'}
              </a>
              <a href={`${LOVABLE}/agentes-voz-telefonicos-empresas`} className="text-xs text-primary font-medium hover:underline underline-offset-2">
                {isEs ? 'Agentes de voz →' : 'Voice agents →'}
              </a>
              <a href={`${LOVABLE}/rag-base-conocimiento-empresas`} className="text-xs text-primary font-medium hover:underline underline-offset-2">
                {isEs ? 'RAG y conocimiento →' : 'RAG and knowledge →'}
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
                {isEs ? 'Automatización de procesos →' : 'Process automation →'}
              </a>
              <a href={`${LOVABLE}/consultoria-inteligencia-artificial-navarra`} className="text-xs text-secondary font-medium hover:underline underline-offset-2">
                {isEs ? 'Consultoría IA →' : 'AI consulting →'}
              </a>
              <a href={`${LOVABLE}/desarrollo-web-inteligencia-artificial`} className="text-xs text-secondary font-medium hover:underline underline-offset-2">
                {isEs ? 'Desarrollo web IA →' : 'AI web development →'}
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
                  href={`${LOVABLE}/automatizacion-ia-navarra`}
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
