export type PageMetadataEntry = {
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  noindex?: boolean;
};

const DEFAULT_METADATA: PageMetadataEntry = {
  title: {
    es: 'Agentes de IA para empresas en Navarra',
    en: 'AI Agents for Businesses in Navarra',
  },
  description: {
    es: 'RTP Digital Solutions implementa agentes de IA, automatización y sistemas inteligentes para empresas en Navarra.',
    en: 'RTP Digital Solutions implements AI agents, automation and intelligent systems for businesses in Navarra.',
  },
};

const HUMAN_LABELS: Record<string, { es: string; en: string }> = {
  'que-es-un-agente-ia': { es: 'Qué es un agente de IA', en: 'What is an AI agent' },
  'chatbot-vs-agente-ia': { es: 'Chatbot vs agente de IA', en: 'Chatbot vs AI agent' },
  'agentes-ia-empresas-navarra': { es: 'Agentes de IA para empresas en Navarra', en: 'AI agents for businesses in Navarra' },
  'automatizacion-empresas-navarra': { es: 'Automatización de empresas en Navarra', en: 'Business automation in Navarra' },
  'agentes-ia-para-paginas-web-navarra': { es: 'Agentes de IA para páginas web en Navarra', en: 'AI agents for websites in Navarra' },
  'ia-para-clinicas-navarra': { es: 'IA para clínicas en Navarra', en: 'AI for clinics in Navarra' },
  'ia-para-restaurantes-navarra': { es: 'IA para restaurantes en Navarra', en: 'AI for restaurants in Navarra' },
  'ia-para-comercios-navarra': { es: 'IA para comercios en Navarra', en: 'AI for retail in Navarra' },
  'chatbots-empresas-navarra': { es: 'Chatbots para empresas en Navarra', en: 'Chatbots for businesses in Navarra' },
  'automatizar-atencion-cliente-ia': { es: 'Automatizar atención al cliente con IA', en: 'Automate customer service with AI' },
  'cuanto-cuesta-inteligencia-artificial-navarra': { es: 'Cuánto cuesta implementar IA en Navarra', en: 'How much does AI implementation cost in Navarra' },
  'ejemplos-inteligencia-artificial-empresas-navarra': { es: 'Ejemplos de IA en empresas de Navarra', en: 'Examples of AI in Navarra businesses' },
  'beneficios-inteligencia-artificial-empresas-navarra': { es: 'Beneficios de IA para empresas en Navarra', en: 'Benefits of AI for businesses in Navarra' },
  'como-implementar-inteligencia-artificial-empresa-navarra': { es: 'Cómo implementar IA en una empresa en Navarra', en: 'How to implement AI in a Navarra business' },
  'ia-2026-empresas-navarra-espana-europa-contexto': { es: 'IA 2026 en Navarra, España y Europa', en: 'AI 2026 in Navarra, Spain and Europe' },
  'ia-2026-empresas-navarra-espana-europa-hoja-ruta': { es: 'Hoja de ruta IA 2026 para empresas en Navarra', en: 'AI 2026 roadmap for businesses in Navarra' },
};

export const PAGE_METADATA: Record<string, PageMetadataEntry> = {
  '/': {
    title: {
      es: 'Agentes de inteligencia artificial en Navarra',
      en: 'AI agents in Navarra',
    },
    description: {
      es: 'Arquitecturas de IA para empresas en Navarra: agentes, automatización de procesos e integración de sistemas.',
      en: 'AI architectures for businesses in Navarra: agents, process automation and systems integration.',
    },
  },
  '/servicios': {
    title: {
      es: 'Servicios de inteligencia artificial en Navarra',
      en: 'AI services in Navarra',
    },
    description: {
      es: 'Servicios de IA para empresas en Navarra: agentes conversacionales, automatización, voz, RAG y consultoría.',
      en: 'AI services for businesses in Navarra: conversational agents, automation, voice, RAG and consulting.',
    },
  },
  '/inteligencia-artificial-navarra': {
    title: {
      es: 'Inteligencia artificial en Navarra para empresas',
      en: 'Artificial intelligence in Navarra for businesses',
    },
    description: {
      es: 'Hub informativo sobre inteligencia artificial en Navarra con soluciones por servicios y sectores.',
      en: 'Informational hub about artificial intelligence in Navarra with solutions by service and sector.',
    },
  },
  '/diagnostico-ia-navarra': {
    title: {
      es: 'Diagnóstico estratégico de IA en Navarra',
      en: 'Strategic AI diagnosis in Navarra',
    },
    description: {
      es: 'Solicita un diagnóstico estratégico para definir qué automatizar y cómo implementar IA en tu empresa en Navarra.',
      en: 'Request a strategic diagnosis to define what to automate and how to implement AI in your business in Navarra.',
    },
  },
  '/automatizacion-ia-navarra': {
    title: {
      es: 'Diagnóstico de automatización con IA en Navarra',
      en: 'AI automation diagnosis in Navarra',
    },
    description: {
      es: 'Página de diagnóstico de automatización con IA para empresas en Navarra.',
      en: 'AI automation diagnosis page for businesses in Navarra.',
    },
  },
  '/casos-ia-navarra': {
    title: {
      es: 'Casos de éxito de IA en Navarra',
      en: 'AI success cases in Navarra',
    },
    description: {
      es: 'Casos reales de implementación de inteligencia artificial en empresas de Navarra.',
      en: 'Real artificial intelligence implementation cases in Navarra businesses.',
    },
  },
  '/agentes-ia-atencion-cliente-navarra': {
    title: {
      es: 'Agentes de IA para atención al cliente en Navarra',
      en: 'AI agents for customer service in Navarra',
    },
    description: {
      es: 'Implementación de agentes de IA para atención al cliente y captación de oportunidades en Navarra.',
      en: 'Implementation of AI agents for customer service and opportunity capture in Navarra.',
    },
  },
  '/automatizacion-procesos-empresas-navarra': {
    title: {
      es: 'Automatización de procesos con IA en Navarra',
      en: 'AI process automation in Navarra',
    },
    description: {
      es: 'Automatización de procesos empresariales con IA para reducir costes y mejorar eficiencia en Navarra.',
      en: 'Business process automation with AI to reduce costs and improve efficiency in Navarra.',
    },
  },
  '/agentes-voz-telefonicos-empresas': {
    title: {
      es: 'Agentes de voz con IA para empresas en Navarra',
      en: 'AI voice agents for businesses in Navarra',
    },
    description: {
      es: 'Agentes de voz con IA para automatizar llamadas, seguimiento y atención comercial en empresas.',
      en: 'AI voice agents to automate calls, follow-up and commercial support in businesses.',
    },
  },
  '/rag-base-conocimiento-empresas': {
    title: {
      es: 'Agentes RAG con base de conocimiento para empresas',
      en: 'RAG knowledge base agents for businesses',
    },
    description: {
      es: 'Asistentes RAG conectados a documentación interna para respuestas precisas y soporte escalable.',
      en: 'RAG assistants connected to internal documentation for precise responses and scalable support.',
    },
  },
  '/consultoria-inteligencia-artificial-navarra': {
    title: {
      es: 'Consultoría de inteligencia artificial en Navarra',
      en: 'Artificial intelligence consulting in Navarra',
    },
    description: {
      es: 'Consultoría estratégica para priorizar y ejecutar proyectos de IA en empresas de Navarra.',
      en: 'Strategic consulting to prioritize and execute AI projects in Navarra businesses.',
    },
  },
  '/desarrollo-web-inteligencia-artificial': {
    title: {
      es: 'Desarrollo web con inteligencia artificial para empresas',
      en: 'AI web development for businesses',
    },
    description: {
      es: 'Desarrollo web con IA integrada para captar clientes y automatizar procesos de negocio.',
      en: 'Web development with integrated AI to capture customers and automate business processes.',
    },
  },
  '/ia-empresas-navarra': {
    title: {
      es: 'IA para empresas en Navarra',
      en: 'AI for businesses in Navarra',
    },
    description: {
      es: 'Soluciones de inteligencia artificial para empresas en Navarra orientadas a crecimiento y eficiencia.',
      en: 'Artificial intelligence solutions for businesses in Navarra focused on growth and efficiency.',
    },
  },
  '/ia-empresas-pamplona': {
    title: {
      es: 'IA para empresas en Pamplona',
      en: 'AI for businesses in Pamplona',
    },
    description: {
      es: 'Aplicaciones de IA para empresas en Pamplona con enfoque en automatización y captación.',
      en: 'AI applications for businesses in Pamplona focused on automation and customer capture.',
    },
  },
  '/ia-restaurantes-navarra': {
    title: {
      es: 'IA para restaurantes en Navarra',
      en: 'AI for restaurants in Navarra',
    },
    description: {
      es: 'Sistemas de IA para restaurantes en Navarra: reservas, atención y operativa automatizada.',
      en: 'AI systems for restaurants in Navarra: reservations, service and automated operations.',
    },
  },
  '/ia-comercios-navarra': {
    title: {
      es: 'IA para comercios en Navarra',
      en: 'AI for retail businesses in Navarra',
    },
    description: {
      es: 'Soluciones de IA para comercios en Navarra: atención automatizada, recomendaciones y eficiencia.',
      en: 'AI solutions for retail businesses in Navarra: automated service, recommendations and efficiency.',
    },
  },
  '/ia-clinicas-navarra': {
    title: {
      es: 'IA para clínicas en Navarra',
      en: 'AI for clinics in Navarra',
    },
    description: {
      es: 'Inteligencia artificial para clínicas en Navarra: gestión de citas, pacientes y operativa diaria.',
      en: 'Artificial intelligence for clinics in Navarra: appointments, patient management and daily operations.',
    },
  },
  '/blog': {
    title: {
      es: 'Blog de IA para empresas en Navarra',
      en: 'AI blog for businesses in Navarra',
    },
    description: {
      es: 'Guías y casos sobre inteligencia artificial, automatización y agentes para empresas en Navarra.',
      en: 'Guides and case content on AI, automation and agents for businesses in Navarra.',
    },
  },
  '/blog/ia-2026-empresas-navarra-espana-europa-contexto': {
    title: {
      es: 'IA 2026 para empresas en Navarra: contexto en España y Europa',
      en: 'AI 2026 for businesses in Navarra: context in Spain and Europe',
    },
    description: {
      es: 'Análisis de AI Act, RGPD y decisiones clave para implementar IA en empresas de Navarra, España y Europa en 2026.',
      en: 'Analysis of the AI Act, GDPR, and key decisions to implement AI in businesses in Navarra, Spain and Europe in 2026.',
    },
  },
  '/blog/ia-2026-empresas-navarra-espana-europa-hoja-ruta': {
    title: {
      es: 'Hoja de ruta IA 2026 para empresas en Navarra',
      en: 'AI 2026 roadmap for businesses in Navarra',
    },
    description: {
      es: 'Guía por fases para pasar de pilotos de IA a resultados de negocio medibles en empresas de Navarra.',
      en: 'Phase-based guide to move from AI pilots to measurable business outcomes in businesses in Navarra.',
    },
  },
  '/contact-success': {
    title: {
      es: 'Confirmación de envío',
      en: 'Submission confirmation',
    },
    description: {
      es: 'Confirmación de recepción del formulario de diagnóstico estratégico.',
      en: 'Confirmation page after strategic diagnosis form submission.',
    },
    noindex: true,
  },
  '/legal-notice': {
    title: {
      es: 'Aviso legal',
      en: 'Legal notice',
    },
    description: {
      es: 'Aviso legal de RTP Digital Solutions.',
      en: 'Legal notice of RTP Digital Solutions.',
    },
  },
  '/privacy-policy': {
    title: {
      es: 'Política de privacidad',
      en: 'Privacy policy',
    },
    description: {
      es: 'Política de privacidad y cookies de RTP Digital Solutions.',
      en: 'Privacy and cookie policy of RTP Digital Solutions.',
    },
  },
  '/terms-conditions': {
    title: {
      es: 'Términos y condiciones',
      en: 'Terms and conditions',
    },
    description: {
      es: 'Términos y condiciones de uso de RTP Digital Solutions.',
      en: 'Terms and conditions of RTP Digital Solutions.',
    },
  },
};

const getBlogFallbackMetadata = (basePath: string): PageMetadataEntry | null => {
  if (!basePath.startsWith('/blog/')) return null;

  const slug = basePath.replace('/blog/', '');
  const labels = HUMAN_LABELS[slug] || {
    es: slug.replace(/-/g, ' '),
    en: slug.replace(/-/g, ' '),
  };

  return {
    title: {
      es: `${labels.es} en Navarra`,
      en: `${labels.en} in Navarra`,
    },
    description: {
      es: `Artículo sobre ${labels.es.toLowerCase()} aplicado a empresas en Navarra.`,
      en: `Article about ${labels.en.toLowerCase()} applied to businesses in Navarra.`,
    },
  };
};

export const getPageMetadataEntry = (basePath: string): PageMetadataEntry => {
  const direct = PAGE_METADATA[basePath];
  if (direct) return direct;

  const blogFallback = getBlogFallbackMetadata(basePath);
  if (blogFallback) return blogFallback;

  return DEFAULT_METADATA;
};
