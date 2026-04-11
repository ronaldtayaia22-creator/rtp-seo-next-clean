import type { Language } from '@/lib/i18n';

const ES_TO_EN_OVERRIDES: Record<string, string> = {
  '/servicios': '/services',
  '/cases': '/ai-cases-navarra',
  '/diagnostico-ia-navarra': '/diagnosis-ai-navarra',
  '/automatizacion-ia-navarra': '/ai-automation-navarra',
  '/casos-ia-navarra': '/ai-cases-navarra',
  '/agentes-ia-atencion-cliente-navarra': '/ai-customer-service-agents-navarra',
  '/automatizacion-procesos-empresas-navarra': '/business-process-automation-navarra',
  '/agentes-voz-telefonicos-empresas': '/voice-agents-business',
  '/rag-base-conocimiento-empresas': '/rag-knowledge-base-business',
  '/consultoria-inteligencia-artificial-navarra': '/ai-consulting-navarra',
  '/desarrollo-web-inteligencia-artificial': '/web-development-artificial-intelligence',
  '/ia-empresas-navarra': '/ai-business-navarra',
  '/ia-empresas-pamplona': '/ai-business-pamplona',
  '/ia-restaurantes-navarra': '/ai-restaurants-navarra',
  '/ia-comercios-navarra': '/ai-retail-navarra',
  '/ia-clinicas-navarra': '/ai-clinics-navarra',
  '/inteligencia-artificial-navarra': '/artificial-intelligence-navarra',
  '/blog/que-es-un-agente-ia': '/blog/what-is-an-ai-agent',
  '/blog/chatbot-vs-agente-ia': '/blog/chatbot-vs-ai-agent',
  '/blog/agentes-ia-empresas-navarra': '/blog/ai-agents-business-navarra',
  '/blog/automatizacion-empresas-navarra': '/blog/business-automation-navarra',
  '/blog/agentes-ia-para-paginas-web-navarra': '/blog/ai-agents-for-websites-navarra',
  '/blog/ia-para-clinicas-navarra': '/blog/ai-for-clinics-navarra',
  '/blog/ia-para-restaurantes-navarra': '/blog/ai-for-restaurants-navarra',
  '/blog/ia-para-comercios-navarra': '/blog/ai-for-retail-navarra',
  '/blog/chatbots-empresas-navarra': '/blog/chatbots-business-navarra',
  '/blog/automatizar-atencion-cliente-ia': '/blog/automate-customer-service-ai',
  '/blog/cuanto-cuesta-inteligencia-artificial-navarra': '/blog/how-much-does-artificial-intelligence-cost-navarra',
  '/blog/ejemplos-inteligencia-artificial-empresas-navarra': '/blog/artificial-intelligence-examples-business-navarra',
  '/blog/beneficios-inteligencia-artificial-empresas-navarra': '/blog/artificial-intelligence-benefits-business-navarra',
  '/blog/como-implementar-inteligencia-artificial-empresa-navarra': '/blog/how-to-implement-artificial-intelligence-business-navarra',
};

const EN_TO_ES_OVERRIDES: Record<string, string> = {
  '/services': '/servicios',
  '/cases': '/casos-ia-navarra',
  '/diagnosis-ai-navarra': '/diagnostico-ia-navarra',
  '/ai-automation-navarra': '/automatizacion-ia-navarra',
  '/ai-cases-navarra': '/casos-ia-navarra',
  '/ai-customer-service-agents-navarra': '/agentes-ia-atencion-cliente-navarra',
  '/business-process-automation-navarra': '/automatizacion-procesos-empresas-navarra',
  '/voice-agents-business': '/agentes-voz-telefonicos-empresas',
  '/rag-knowledge-base-business': '/rag-base-conocimiento-empresas',
  '/ai-consulting-navarra': '/consultoria-inteligencia-artificial-navarra',
  '/web-development-artificial-intelligence': '/desarrollo-web-inteligencia-artificial',
  '/ai-business-navarra': '/ia-empresas-navarra',
  '/ai-business-pamplona': '/ia-empresas-pamplona',
  '/ai-restaurants-navarra': '/ia-restaurantes-navarra',
  '/ai-retail-navarra': '/ia-comercios-navarra',
  '/ai-clinics-navarra': '/ia-clinicas-navarra',
  '/artificial-intelligence-navarra': '/inteligencia-artificial-navarra',
  '/blog/what-is-an-ai-agent': '/blog/que-es-un-agente-ia',
  '/blog/chatbot-vs-ai-agent': '/blog/chatbot-vs-agente-ia',
  '/blog/ai-agents-business-navarra': '/blog/agentes-ia-empresas-navarra',
  '/blog/business-automation-navarra': '/blog/automatizacion-empresas-navarra',
  '/blog/ai-agents-for-websites-navarra': '/blog/agentes-ia-para-paginas-web-navarra',
  '/blog/ai-for-clinics-navarra': '/blog/ia-para-clinicas-navarra',
  '/blog/ai-for-restaurants-navarra': '/blog/ia-para-restaurantes-navarra',
  '/blog/ai-for-retail-navarra': '/blog/ia-para-comercios-navarra',
  '/blog/chatbots-business-navarra': '/blog/chatbots-empresas-navarra',
  '/blog/automate-customer-service-ai': '/blog/automatizar-atencion-cliente-ia',
  '/blog/how-much-does-artificial-intelligence-cost-navarra': '/blog/cuanto-cuesta-inteligencia-artificial-navarra',
  '/blog/artificial-intelligence-examples-business-navarra': '/blog/ejemplos-inteligencia-artificial-empresas-navarra',
  '/blog/artificial-intelligence-benefits-business-navarra': '/blog/beneficios-inteligencia-artificial-empresas-navarra',
  '/blog/how-to-implement-artificial-intelligence-business-navarra': '/blog/como-implementar-inteligencia-artificial-empresa-navarra',
};

export const normalizeBasePath = (pathname: string): string => {
  if (!pathname) return '/';
  if (pathname === '/en') return '/';
  if (pathname.startsWith('/en/')) {
    return pathname.slice(3) || '/';
  }
  return pathname;
};

export const getLocalizedPath = (basePath: string, targetLang: Language): string => {
  const normalized = normalizeBasePath(basePath);

  if (targetLang === 'en') {
    const enPath = ES_TO_EN_OVERRIDES[normalized] || normalized;
    return `/en${enPath === '/' ? '' : enPath}`;
  }

  return EN_TO_ES_OVERRIDES[normalized] || normalized;
};
