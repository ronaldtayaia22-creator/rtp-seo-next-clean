'use client';

import Link from '@/components/shared/LocalizedLink';
import { Language } from '@/lib/i18n';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface BlogProps {
  language: Language;
}

type BlogIntent = 'market-context' | 'adoption-strategy' | 'implementation' | 'sector-use-cases';

const blogPosts = [
  {
    slug: 'trabajos-en-riesgo-por-ia-y-como-adaptarte',
    title: {
      es: 'Trabajos en riesgo por la IA en 2026 y cómo adaptarte sin quedarte atrás',
      en: 'Jobs at risk from AI in 2026 and how to adapt without falling behind',
    },
    excerpt: {
      es: 'Qué perfiles están más expuestos, cómo adaptarte con un plan 30-60-90 y cómo convertir el riesgo en ventaja competitiva para tu empresa.',
      en: 'Which profiles are most exposed, how to adapt with a 30-60-90 plan, and how to turn risk into competitive advantage for your business.',
    },
    date: '2026-04-17',
  },
  {
    slug: 'impacto-inteligencia-artificial-empleo-economia-espana',
    title: {
      es: 'Impacto de la inteligencia artificial en el empleo, la economía y el futuro del trabajo en España',
      en: 'Impact of artificial intelligence on employment, the economy, and the future of work in Spain',
    },
    excerpt: {
      es: 'Análisis claro sobre productividad, despidos, regulación y qué deben hacer las empresas para crecer con IA sin perder competitividad.',
      en: 'A clear analysis on productivity, layoffs, regulation, and what businesses should do to grow with AI without losing competitiveness.',
    },
    date: '2026-04-10',
  },
  {
    slug: 'ia-2026-empresas-navarra-espana-europa-hoja-ruta',
    title: {
      es: 'Hoja de ruta IA 2026 para empresas en Navarra: de piloto a resultado',
      en: 'AI 2026 roadmap for businesses in Navarra: from pilot to results',
    },
    excerpt: {
      es: 'Plan práctico para pasar de pruebas aisladas de IA a una implantación real en Navarra, con KPIs, integración y control de riesgos.',
      en: 'A practical plan to move from isolated AI tests to real deployment in Navarra, with KPIs, integration, and risk control.',
    },
    date: '2026-04-03',
  },
  {
    slug: 'ia-2026-empresas-navarra-espana-europa-contexto',
    title: {
      es: 'IA en 2026 para empresas en Navarra: contexto en España y Europa',
      en: 'AI in 2026 for businesses in Navarra: context in Spain and Europe',
    },
    excerpt: {
      es: 'Resumen estratégico sobre AI Act, RGPD y decisiones clave para adoptar IA con impacto real en empresas de Navarra y Europa.',
      en: 'Strategic overview of the AI Act, GDPR, and key decisions to adopt AI with real impact in businesses in Navarra and Europe.',
    },
    date: '2026-03-27',
  },
  {
    slug: 'como-implementar-inteligencia-artificial-empresa-navarra',
    title: {
      es: 'Cómo implementar inteligencia artificial en una empresa en Navarra',
      en: 'How to implement artificial intelligence in a business in Navarra',
    },
    excerpt: {
      es: 'Guía paso a paso para implementar inteligencia artificial en empresas en Navarra y Pamplona: desde el análisis inicial hasta la optimización continua.',
      en: 'Step-by-step guide to implementing AI in businesses in Navarra and Pamplona: from initial analysis to continuous optimization.',
    },
    date: '2026-03-23',
  },
  {
    slug: 'beneficios-inteligencia-artificial-empresas-navarra',
    title: {
      es: 'Beneficios de la inteligencia artificial para empresas en Navarra',
      en: 'Benefits of artificial intelligence for businesses in Navarra',
    },
    excerpt: {
      es: 'Descubre los principales beneficios de implementar inteligencia artificial en empresas en Navarra y Pamplona: más ingresos, menos costes y mejor atención al cliente.',
      en: 'Discover the main benefits of implementing AI in businesses in Navarra and Pamplona: more revenue, lower costs and better customer service.',
    },
    date: '2026-03-23',
  },
  {
    slug: 'ejemplos-inteligencia-artificial-empresas-navarra',
    title: {
      es: 'Ejemplos reales de inteligencia artificial en empresas en Navarra',
      en: 'Real examples of artificial intelligence in businesses in Navarra',
    },
    excerpt: {
      es: 'Descubre ejemplos reales de cómo empresas en Navarra y Pamplona están usando inteligencia artificial para automatizar procesos, captar clientes y crecer.',
      en: 'Discover real examples of how businesses in Navarra and Pamplona are using AI to automate processes, attract customers and grow.',
    },
    date: '2026-03-23',
  },
  {
    slug: 'cuanto-cuesta-inteligencia-artificial-navarra',
    title: {
      es: 'Cuánto cuesta implementar inteligencia artificial en Navarra',
      en: 'How much does it cost to implement AI in Navarra',
    },
    excerpt: {
      es: 'Descubre cuánto cuesta implementar inteligencia artificial en empresas de Navarra y Pamplona: factores, precios orientativos y retorno de inversión.',
      en: 'Discover how much it costs to implement AI in businesses in Navarra and Pamplona: factors, indicative prices and return on investment.',
    },
    date: '2026-03-23',
  },
  {
    slug: 'que-es-un-agente-ia',
    title: {
      es: 'Qué es un agente de IA y cómo puede ayudar a una empresa',
      en: 'What is an AI agent and how can it help a business',
    },
    excerpt: {
      es: 'Descubre qué es un agente de inteligencia artificial, cómo funciona y cómo puede mejorar la atención al cliente y la automatización empresarial.',
      en: 'Discover what an artificial intelligence agent is, how it works, and how it can improve customer service and business automation.',
    },
    date: '2026-03-20',
  },
  {
    slug: 'chatbot-vs-agente-ia',
    title: {
      es: 'Chatbot vs Agente de IA: diferencias y cuál necesita tu empresa',
      en: 'Chatbot vs AI Agent: differences and which one your business needs',
    },
    excerpt: {
      es: 'Descubre la diferencia entre un chatbot tradicional y un agente de inteligencia artificial y cuál puede ayudar más a tu empresa.',
      en: 'Discover the difference between a traditional chatbot and an AI agent and which can help your business more.',
    },
    date: '2026-03-13',
  },
  {
    slug: 'agentes-ia-empresas-navarra',
    title: {
      es: 'Agentes de IA para empresas en Navarra: cómo transformar tu negocio',
      en: 'AI Agents for businesses in Navarra: how to transform your business',
    },
    excerpt: {
      es: 'Descubre cómo los agentes de inteligencia artificial pueden ayudar a empresas en Navarra a automatizar procesos, mejorar la atención al cliente y aumentar la eficiencia.',
      en: 'Discover how AI agents can help businesses in Navarra automate processes, improve customer service and increase efficiency.',
    },
    date: '2026-03-06',
  },
  {
    slug: 'automatizacion-empresas-navarra',
    title: {
      es: 'Automatización para empresas en Navarra con inteligencia artificial',
      en: 'Automation for businesses in Navarra with artificial intelligence',
    },
    excerpt: {
      es: 'Descubre cómo la automatización con inteligencia artificial puede ayudar a empresas en Navarra a ahorrar tiempo, reducir costes y mejorar la eficiencia.',
      en: 'Discover how AI automation can help businesses in Navarra save time, reduce costs and improve efficiency.',
    },
    date: '2026-02-27',
  },
  {
    slug: 'agentes-ia-para-paginas-web-navarra',
    title: {
      es: 'Agentes de IA para páginas web en Navarra: atención inteligente 24/7',
      en: 'AI Agents for websites in Navarra: intelligent 24/7 support',
    },
    excerpt: {
      es: 'Descubre cómo integrar agentes de inteligencia artificial en páginas web para mejorar la atención al cliente y automatizar procesos empresariales.',
      en: 'Discover how to integrate AI agents in websites to improve customer service and automate business processes.',
    },
    date: '2026-02-20',
  },
  {
    slug: 'ia-para-clinicas-navarra',
    title: {
      es: 'Inteligencia artificial para clínicas en Navarra: automatización y atención inteligente',
      en: 'Artificial intelligence for clinics in Navarra: automation and intelligent care',
    },
    excerpt: {
      es: 'Descubre cómo la inteligencia artificial puede ayudar a clínicas en Navarra a mejorar la atención al paciente, automatizar citas y optimizar procesos.',
      en: 'Discover how artificial intelligence can help clinics in Navarra improve patient care, automate appointments and optimize processes.',
    },
    date: '2026-02-13',
  },
  {
    slug: 'ia-para-restaurantes-navarra',
    title: {
      es: 'Inteligencia artificial para restaurantes en Navarra: automatización y atención al cliente',
      en: 'Artificial intelligence for restaurants in Navarra: automation and customer service',
    },
    excerpt: {
      es: 'Descubre cómo la inteligencia artificial puede ayudar a restaurantes en Navarra a gestionar reservas, responder clientes y automatizar tareas.',
      en: 'Discover how artificial intelligence can help restaurants in Navarra manage reservations, respond to customers and automate tasks.',
    },
    date: '2026-02-06',
  },
  {
    slug: 'ia-para-comercios-navarra',
    title: {
      es: 'Inteligencia artificial para comercios en Navarra: automatización y atención al cliente',
      en: 'Artificial intelligence for retail businesses in Navarra: automation and customer service',
    },
    excerpt: {
      es: 'Descubre cómo la inteligencia artificial puede ayudar a comercios en Navarra a mejorar la atención al cliente, responder preguntas automáticamente y automatizar procesos.',
      en: 'Discover how artificial intelligence can help retail businesses in Navarra improve customer service, answer questions automatically and automate processes.',
    },
    date: '2026-01-30',
  },
  {
    slug: 'chatbots-empresas-navarra',
    title: {
      es: 'Chatbots para empresas en Navarra: atención automática con inteligencia artificial',
      en: 'Chatbots for businesses in Navarra: automatic service with artificial intelligence',
    },
    excerpt: {
      es: 'Descubre cómo los chatbots y agentes de inteligencia artificial pueden ayudar a empresas en Navarra a mejorar la atención al cliente y automatizar consultas.',
      en: 'Discover how chatbots and AI agents can help businesses in Navarra improve customer service and automate inquiries.',
    },
    date: '2026-01-23',
  },
  {
    slug: 'automatizar-atencion-cliente-ia',
    title: {
      es: 'Cómo automatizar la atención al cliente con inteligencia artificial',
      en: 'How to automate customer service with artificial intelligence',
    },
    excerpt: {
      es: 'Descubre cómo la inteligencia artificial permite automatizar la atención al cliente en empresas, mejorar la experiencia del usuario y reducir costes.',
      en: 'Discover how artificial intelligence enables automating customer service in businesses, improving user experience and reducing costs.',
    },
    date: '2026-01-16',
  },
];

const getBlogIntent = (slug: string): BlogIntent => {
  switch (slug) {
    case 'trabajos-en-riesgo-por-ia-y-como-adaptarte':
    case 'impacto-inteligencia-artificial-empleo-economia-espana':
    case 'ia-2026-empresas-navarra-espana-europa-contexto':
      return 'market-context';
    case 'ia-2026-empresas-navarra-espana-europa-hoja-ruta':
    case 'beneficios-inteligencia-artificial-empresas-navarra':
    case 'cuanto-cuesta-inteligencia-artificial-navarra':
    case 'que-es-un-agente-ia':
    case 'chatbot-vs-agente-ia':
      return 'adoption-strategy';
    case 'como-implementar-inteligencia-artificial-empresa-navarra':
    case 'agentes-ia-empresas-navarra':
    case 'automatizacion-empresas-navarra':
    case 'agentes-ia-para-paginas-web-navarra':
    case 'chatbots-empresas-navarra':
    case 'automatizar-atencion-cliente-ia':
      return 'implementation';
    default:
      return 'sector-use-cases';
  }
};

const Blog = ({ language }: BlogProps) => {
  const isEs = language === 'es';

  // Internal intent grouping for editorial strategy (no visual category output).
  const blogPostsByIntent = blogPosts.reduce<Record<BlogIntent, typeof blogPosts>>(
    (acc, post) => {
      const intent = getBlogIntent(post.slug);
      acc[intent].push(post);
      return acc;
    },
    {
      'market-context': [],
      'adoption-strategy': [],
      implementation: [],
      'sector-use-cases': [],
    }
  );

  const postsToRender = [
    ...blogPostsByIntent['market-context'],
    ...blogPostsByIntent['adoption-strategy'],
    ...blogPostsByIntent.implementation,
    ...blogPostsByIntent['sector-use-cases'],
  ].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            {isEs ? 'Blog sobre IA, automatización y agentes inteligentes' : 'Blog on AI, automation and intelligent agents'}
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            {isEs
              ? 'Guías prácticas, casos reales y todo lo que necesitas saber sobre inteligencia artificial aplicada a empresas.'
              : 'Practical guides, real cases and everything you need to know about AI applied to business.'}
          </p>

          <div className="grid gap-6">
            {postsToRender.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-neon)]">
                  <CardContent className="p-6 md:p-8">
                    <time className="text-xs text-muted-foreground">{post.date}</time>
                    <h2 className="text-xl md:text-2xl font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                      {post.title[language]}
                    </h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt[language]}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                      {isEs ? 'Leer artículo' : 'Read article'} <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Blog;


